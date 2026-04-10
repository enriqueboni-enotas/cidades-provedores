#!/usr/bin/env python3
"""gerar_mac.py — Equivalente ao gerar.ps1 para macOS.
Lê ConfiguracoesMunicipios.xml do app-gw e extrai características do C#.
Gera os arquivos JS individuais em Cidades/ e Provedores/ e os índices _index.js.
"""
import os, re, sys, unicodedata, xml.etree.ElementTree as ET
from pathlib import Path
from collections import OrderedDict

SCRIPT_DIR = Path(__file__).parent
APP_GW = Path(os.environ.get('APP_GW_PATH', '/Users/marcofuriatti/Development/app-gw'))
XML_PATH = APP_GW / 'ENotas.NFeService' / 'ENotas.NFeService.Application.Provedores' / 'Configuration' / 'NFSe' / 'ConfiguracoesMunicipios.xml'
CS_ROOT = APP_GW / 'ENotas.NFeService'
CIDADES_DIR = SCRIPT_DIR / 'Cidades'
PROVEDORES_DIR = SCRIPT_DIR / 'Provedores'

CIDADES_DIR.mkdir(exist_ok=True)
PROVEDORES_DIR.mkdir(exist_ok=True)

TIPO_AUTENTICACAO_MAP = {
    'Nenhuma': 0, 'Certificado': 1, 'UsuarioESenha': 2,
    'Token': 3, 'FraseSecretaESenha': 4, 'UsuarioSenhaEToken': 5
}
TIPO_ASSINATURA_MAP = {
    'NaoUtiliza': 0, 'Opcional': 1,
    'ObrigatorioComCertificadoProprio': 2,
    'ObrigatorioComCertificadoDigitalFornecidoPelaPrefeitura': 3
}
CAMPO_LOGIN_MAP = {'NomeDeUsuario': 0, 'Cnpj': 1, 'InscricaoMunicipal': 2}
ROBOS = ['Florianopolis', 'SaoPaulo', 'Barueri', 'Parintins', 'JuizDeFora']

def get_slug(nome):
    s = nome.lower().strip()
    s = unicodedata.normalize('NFD', s)
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    s = re.sub(r'[^a-z0-9]', '-', s)
    s = re.sub(r'-+', '-', s).strip('-')
    return s

def clean_url(u):
    if u is None: return None
    v = u.replace('<![CDATA[', '').replace(']]>', '').strip()
    return v if v else None

def js_str(s):
    if s is None: return 'null'
    v = str(s).replace('\\', '\\\\').replace("'", "\\'").replace('\r\n', '\\r\\n').replace('\r', '\\r').replace('\n', '\\n')
    return f"'{v}'"

# ── XML parsing ──
def get_text(elem, tag, default=None):
    child = elem.find(tag)
    if child is not None and child.text:
        return child.text.strip()
    return default

def get_attr(elem, attr, default=None):
    return elem.get(attr, default)


# ═══════════════════════════════════════════════════════════════
# 0. Parse XML
# ═══════════════════════════════════════════════════════════════
print("Lendo XML...", flush=True)
tree = ET.parse(str(XML_PATH))
root = tree.getroot()
municipios_elem = root.find('municipios')
municipios = list(municipios_elem.findall('municipio'))
print(f"  {len(municipios)} municipios encontrados", flush=True)

# Parse each municipio into a dict
def elem_text(parent, tag, default=None):
    """Get text content of a child element."""
    child = parent.find(tag)
    if child is not None and child.text is not None:
        return child.text.strip()
    return default

def parse_municipio(m):
    d = {
        'codigo': elem_text(m, 'codigo', ''),
        'nome': elem_text(m, 'nome', ''),
        'uf': elem_text(m, 'uf', ''),
        'provedor': elem_text(m, 'provedor', ''),
        'defaultNamespace': elem_text(m, 'defaultNamespace'),
        'codigoNoProvedor': elem_text(m, 'codigoNoProvedor'),
    }
    # informacoesProvedor
    ip = m.find('informacoesProvedor')
    if ip is not None:
        d['informacoesProvedor'] = {
            'webService': elem_text(ip, 'webService') or ip.get('webService'),
            'robo': elem_text(ip, 'robo') or ip.get('robo'),
            'versaoAbrasf': elem_text(ip, 'versaoAbrasf') or ip.get('versaoAbrasf'),
            'infoAdicional': elem_text(ip, 'infoAdicional') or ip.get('infoAdicional'),
        }
    else:
        d['informacoesProvedor'] = None
    # infoComplementarImpressaoRps
    icr = m.find('infoComplementarImpressaoRps')
    d['infoComplementarImpressaoRps'] = icr.text.strip() if icr is not None and icr.text else None
    # urls
    urls_elem = m.find('urls')
    d['urls'] = {'homologacao': {}, 'producao': {}}
    url_fields = ['autenticacao', 'recepcaoLote', 'consultaSituacaoLote', 'consultaLote',
                  'consultaRps', 'consultaNFe', 'cancelamentoNFe', 'inutilizacaoNumeracaoNFe',
                  'downloadPDF', 'paginaVerificacaoRps', 'paginaVerificacaoNFe']
    if urls_elem is not None:
        for env in ['homologacao', 'producao']:
            env_elem = urls_elem.find(env)
            if env_elem is not None:
                for uf in url_fields:
                    uf_elem = env_elem.find(uf)
                    if uf_elem is not None and uf_elem.text:
                        v = clean_url(uf_elem.text)
                        if v:
                            d['urls'][env][uf] = v
    # emissaoSemCertificado
    esc = m.find('emissaoSemCertificado')
    d['emissaoSemCertificado'] = {'homologacao': None, 'producao': None}
    if esc is not None:
        esc_urls = esc.find('urls')
        if esc_urls is not None:
            for env in ['homologacao', 'producao']:
                env_elem = esc_urls.find(env)
                if env_elem is not None:
                    rl = env_elem.find('recepcaoLote')
                    if rl is not None and rl.text:
                        d['emissaoSemCertificado'][env] = clean_url(rl.text)
    return d

muns = [parse_municipio(m) for m in municipios]
# Filter valid
def is_valid_mun(m):
    c = m.get('codigo', '').strip()
    if not c: return False
    try:
        return int(c) >= 0
    except ValueError:
        return False
muns = [m for m in muns if is_valid_mun(m)]
print(f"  {len(muns)} municipios validos", flush=True)


# ═══════════════════════════════════════════════════════════════
# 1. Extract C# provider characteristics
# ═══════════════════════════════════════════════════════════════
print("Indexando arquivos C# com ObterCaracteristicasCore...", flush=True)

def find_cs_files(root_path):
    """Find all .cs files excluding bin/obj/Test dirs."""
    result = []
    for dirpath, dirnames, filenames in os.walk(root_path):
        # Skip bin, obj, .Test directories
        dirnames[:] = [d for d in dirnames if d not in ('bin', 'obj') and '.Test' not in d]
        for f in filenames:
            if f.endswith('.cs'):
                result.append(os.path.join(dirpath, f))
    return result

def get_method_body(content, search_str):
    """Extract method body starting from the first { after search_str."""
    idx = content.find(search_str)
    if idx < 0: return None
    brace_start = content.find('{', idx)
    if brace_start < 0: return None
    depth = 0
    for i in range(brace_start, len(content)):
        if content[i] == '{': depth += 1
        elif content[i] == '}':
            depth -= 1
            if depth == 0:
                return content[brace_start:i+1]
    return None

def get_named_code_items(content, method_name):
    body = get_method_body(content, method_name)
    if not body: return None
    items = []
    for m in re.finditer(r'new\s+NamedCodeItem\s*\(\s*"([^"]*)"\s*,\s*"([^"]*)"\s*\)', body):
        items.append({'codigo': m.group(1), 'nome': m.group(2)})
    return items if items else None

def get_string_prop(body, prop_name):
    # Try verbatim @"..."
    m = re.search(rf'(?s){prop_name}\s*=\s*@"(.*?)"', body)
    if m: return m.group(1).strip()
    # Try normal "..."
    m = re.search(rf'{prop_name}\s*=\s*"([^"]*?)"', body)
    if m: return m.group(1)
    return None

def get_help_tipo_autenticacao(body):
    if 'HelpTipoAutenticacao' not in body or 'new HelpTipoAutenticacao' not in body:
        return None
    sub_body = get_method_body(body, 'HelpTipoAutenticacao = new HelpTipoAutenticacao')
    if not sub_body: return None
    obj = {}
    for field in ['certificadoDigital', 'usuario', 'senha', 'token', 'fraseSecreta']:
        m = re.search(rf'(?s){field}\s*=\s*@"(.*?)"', sub_body)
        if m:
            obj[field] = m.group(1).strip()
            continue
        m = re.search(rf'{field}\s*=\s*"([^"]*?)"', sub_body)
        if m:
            obj[field] = m.group(1)
            continue
        m = re.search(rf'{field}\s*=\s*null', sub_body)
        if m:
            obj[field] = None
    return obj if obj else None

cs_files = find_cs_files(str(CS_ROOT))
match_files = []
for f in cs_files:
    try:
        with open(f, 'r', encoding='utf-8-sig') as fh:
            content = fh.read()
        if 'protected override CaracteristicasProvedor ObterCaracteristicasCore' in content:
            match_files.append((f, content))
    except:
        pass

print(f"  {len(match_files)} arquivos com ObterCaracteristicasCore", flush=True)

# Extract ABRASF defaults
abrasf_base_path = CS_ROOT / 'ENotas.NFeService.Application.Provedores.ABRASF' / 'Provedores' / 'ABRASFProvedorNFeBase.cs'
abrasf_v2_path = CS_ROOT / 'ENotas.NFeService.Application.Provedores.ABRASF.v2' / 'Provedores' / 'ABRASFv2ProvedorNFeBase.cs'

default_regimes_v1 = None
default_naturezas_v1 = None
default_naturezas_v2 = None

if abrasf_base_path.exists():
    with open(abrasf_base_path, 'r', encoding='utf-8-sig') as f:
        abc = f.read()
    default_regimes_v1 = get_named_code_items(abc, 'IList<NamedCodeItem> CriarRegimeEspecialTributacao()')
    default_naturezas_v1 = get_named_code_items(abc, 'IList<NamedCodeItem> CriarListaNaturezaOperacao()')
    print(f"  ABRASF v1 defaults: {len(default_regimes_v1 or [])} regimes, {len(default_naturezas_v1 or [])} naturezas", flush=True)

if abrasf_v2_path.exists():
    with open(abrasf_v2_path, 'r', encoding='utf-8-sig') as f:
        v2c = f.read()
    default_naturezas_v2 = get_named_code_items(v2c, 'IList<NamedCodeItem> CriarListaNaturezaOperacao()')
    print(f"  ABRASF v2 defaults: {len(default_naturezas_v2 or [])} naturezas", flush=True)


# Process each C# file
prov_caract = {}
for file_path, content in match_files:
    rel_path = str(file_path).replace(str(CS_ROOT) + '/', '')
    prov_name = None
    m = re.search(r'Provedores\.ABRASF\.v\d/Provedores/([^/]+)/', rel_path)
    if m:
        prov_name = m.group(1)
    else:
        m = re.search(r'Provedores\.([^\\/\.]+)/', rel_path)
        if m:
            prov_name = m.group(1)
    if not prov_name:
        continue

    body = get_method_body(content, 'protected override CaracteristicasProvedor ObterCaracteristicasCore')
    if not body:
        continue

    cfg = {}

    # Booleans
    bool_props = [
        'UsaAEDF', 'UsaRegimeEspecialTributacao', 'UsaCodigoServicoMunicipal',
        'UsaDescricaoServico', 'UsaCNAE', 'UsaNBS', 'UsaItemListaServico',
        'UsaNaturezaOperacao', 'UsaCodigoTributacaoNacional', 'EmTransicaoNFSeNacional',
        'SuportaEmissaoNFeSemCliente', 'SuportaEmissaoNFeClienteSemCpf',
        'SuportaEmissaoNFeClienteSemEndereco', 'SuportaCancelamentoNFe',
        'SuportaCancelamentoNFeSemCliente', 'SuportaCancelamentoNFeClienteSemCpf',
        'SuportaEmissaoParalela', 'EnviaEmailCliente',
        'NumeroRpsDeveSerSequencial', 'NumeroLoteDeveSerSequencial',
        'NumeroDoRpsSeraNumeroDaNota', 'NumeroLoteNaoReutilizavel',
        'SuportaConsultaSequencialRps', 'UsaBethaV2'
    ]
    for prop in bool_props:
        m = re.search(rf'\b{prop}\s*=\s*(true|false)\b', body)
        if m:
            cfg[prop] = m.group(1) == 'true'

    # Enums
    m = re.search(r'TipoAutenticacao\s*=\s*TipoAutenticacao\.(\w+)', body)
    if m and m.group(1) in TIPO_AUTENTICACAO_MAP:
        cfg['TipoAutenticacao'] = TIPO_AUTENTICACAO_MAP[m.group(1)]

    m = re.search(r'AssinaturaDigital\s*=\s*TipoAssinaturaDigital\.(\w+)', body)
    if m and m.group(1) in TIPO_ASSINATURA_MAP:
        cfg['AssinaturaDigital'] = TIPO_ASSINATURA_MAP[m.group(1)]

    m = re.search(r'CampoLoginProvedor\s*=\s*CampoLoginProvedor\.(\w+)', body)
    if m and m.group(1) in CAMPO_LOGIN_MAP:
        cfg['CampoLoginProvedor'] = CAMPO_LOGIN_MAP[m.group(1)]

    m = re.search(r'TipoCancelamentoNFe\s*=\s*TipoCancelamentoNFe\.(\w+)', body)
    if m:
        cfg['TipoCancelamentoNFe'] = m.group(1)

    # Numerics
    m = re.search(r'ValorCancelamentoNFe\s*=\s*(\d+)', body)
    if m: cfg['ValorCancelamentoNFe'] = int(m.group(1))
    m = re.search(r'NumeroNotasPorLote\s*=\s*(\d+)', body)
    if m: cfg['NumeroNotasPorLote'] = int(m.group(1))
    m = re.search(r'NumeroLotesParalelos\s*=\s*(\d+)', body)
    if m: cfg['NumeroLotesParalelos'] = int(m.group(1))
    m = re.search(r'TempoEsperaParaConsultaLoteNFeEmMinutos\s*=\s*(\d+)', body)
    if m: cfg['TempoEsperaParaConsultaLoteNFeEmMinutos'] = int(m.group(1))

    # Help strings
    help_props = [
        'HelpInscricaoMunicipal', 'HelpRegimeEspecialTributacao',
        'HelpCodigoServicoMunicipal', 'HelpDescricaoServico',
        'HelpCNAE', 'HelpItemListaServico', 'HelpAEDF'
    ]
    for hp in help_props:
        val = get_string_prop(body, hp)
        if val: cfg[hp] = val

    # HelpTipoAutenticacao
    help_auth = get_help_tipo_autenticacao(body)
    if help_auth: cfg['HelpTipoAutenticacao'] = help_auth

    # AutenticidadeNota
    if 'AutenticidadeNota' in content and 'new ParametrosAutenticidadeNota' in content:
        auth_body = get_method_body(content, 'AutenticidadeNota = new ParametrosAutenticidadeNota')
        if auth_body:
            auth_obj = {}
            auth_url = get_string_prop(auth_body, 'UrlVerificacao')
            if auth_url: auth_obj['urlVerificacao'] = auth_url
            for ab in ['UsaCnpjPrestador', 'UsaInscricaoMunicipalPrestador', 'UsaNumeroNota',
                       'UsaCodigoVerificacao', 'UsaChaveAcesso', 'UsaCpfCnpjTomador', 'UsaValorNota']:
                bm = re.search(rf'\b{ab}\s*=\s*(true|false)\b', auth_body)
                if bm: auth_obj[ab] = bm.group(1) == 'true'
            if auth_obj: cfg['AutenticidadeNota'] = auth_obj

    # Regimes
    is_abrasf = 'ABRASF' in rel_path
    is_v2 = 'ABRASF.v2' in rel_path
    calls_base = 'base.ObterCaracteristicasCore' in body

    regimes = None
    for ms in ['IList<NamedCodeItem> CriarRegimeEspecialTributacao()',
               'IList<NamedCodeItem> CriarListaRegimeTributacao()']:
        regimes = get_named_code_items(content, ms)
        if regimes: break
    if regimes:
        cfg['RegimesEspecialTributacao'] = regimes
    elif (cfg.get('UsaRegimeEspecialTributacao') == True) or (is_abrasf and calls_base):
        if default_regimes_v1:
            cfg['RegimesEspecialTributacao'] = default_regimes_v1

    # Naturezas
    naturezas = get_named_code_items(content, 'IList<NamedCodeItem> CriarListaNaturezaOperacao()')
    if naturezas:
        cfg['NaturezasOperacao'] = naturezas
    elif ('UsaNaturezaOperacao = true' in body or 'NaturezasOperacao =' in body or (is_abrasf and calls_base)):
        if is_v2 and default_naturezas_v2:
            cfg['NaturezasOperacao'] = default_naturezas_v2
        elif default_naturezas_v1:
            cfg['NaturezasOperacao'] = default_naturezas_v1

    if cfg:
        prov_caract[prov_name] = cfg

print(f"  {len(prov_caract)} provedores com caracteristicas extraidas", flush=True)


# ── Helper: write cfg block ──
def write_cfg_block(cfg, indent):
    ordered_keys = [
        'TipoAutenticacao', 'AssinaturaDigital', 'HelpTipoAutenticacao', 'CampoLoginProvedor',
        'SuportaCancelamentoNFe', 'TipoCancelamentoNFe', 'ValorCancelamentoNFe',
        'UsaAEDF', 'UsaRegimeEspecialTributacao', 'UsaCodigoServicoMunicipal',
        'UsaDescricaoServico', 'UsaCNAE', 'UsaNBS', 'EmTransicaoNFSeNacional',
        'UsaCodigoTributacaoNacional', 'UsaItemListaServico', 'UsaNaturezaOperacao',
        'HelpInscricaoMunicipal', 'HelpRegimeEspecialTributacao',
        'HelpCodigoServicoMunicipal', 'HelpDescricaoServico',
        'HelpCNAE', 'HelpItemListaServico', 'HelpAEDF',
        'SuportaEmissaoNFeSemCliente', 'SuportaEmissaoNFeClienteSemCpf',
        'SuportaEmissaoNFeClienteSemEndereco',
        'SuportaCancelamentoNFeSemCliente', 'SuportaCancelamentoNFeClienteSemCpf',
        'SuportaEmissaoParalela', 'EnviaEmailCliente',
        'NumeroRpsDeveSerSequencial', 'NumeroLoteDeveSerSequencial',
        'NumeroDoRpsSeraNumeroDaNota', 'NumeroLoteNaoReutilizavel',
        'SuportaConsultaSequencialRps', 'UsaBethaV2',
        'NumeroNotasPorLote', 'NumeroLotesParalelos', 'TempoEsperaParaConsultaLoteNFeEmMinutos',
        'AutenticidadeNota',
        'RegimesEspecialTributacao', 'NaturezasOperacao'
    ]
    lines = []
    for key in ordered_keys:
        if key not in cfg: continue
        val = cfg[key]
        js_key = key[0].lower() + key[1:]

        if isinstance(val, bool):
            lines.append(f"{indent}  {js_key}: {'true' if val else 'false'}")
        elif isinstance(val, int):
            lines.append(f"{indent}  {js_key}: {val}")
        elif isinstance(val, str):
            lines.append(f"{indent}  {js_key}: {js_str(val)}")
        elif isinstance(val, dict):
            sub_lines = []
            if key == 'HelpTipoAutenticacao':
                for sk in ['certificadoDigital', 'usuario', 'senha', 'token', 'fraseSecreta']:
                    if sk in val:
                        sub_lines.append(f"{indent}    {sk}: {js_str(val[sk])}")
                    else:
                        sub_lines.append(f"{indent}    {sk}: null")
            else:
                for sk in sorted(val.keys()):
                    sv = val[sk]
                    if isinstance(sv, bool):
                        sub_lines.append(f"{indent}    {sk}: {'true' if sv else 'false'}")
                    else:
                        sub_lines.append(f"{indent}    {sk}: {js_str(sv)}")
            sub = f"{indent}  {js_key}: {{\n" + ',\n'.join(sub_lines) + f"\n{indent}  }}"
            lines.append(sub)
        elif isinstance(val, list):
            arr_items = []
            for item in val:
                arr_items.append(f"{indent}    {{ codigo: '{item['codigo']}', nome: {js_str(item['nome'])} }}")
            arr_str = f"{indent}  {js_key}: [\n" + ',\n'.join(arr_items) + f"\n{indent}  ]"
            lines.append(arr_str)
    return ',\n'.join(lines)


# ═══════════════════════════════════════════════════════════════
# 2. Group municipios by provedor
# ═══════════════════════════════════════════════════════════════
por_provedor = {}
for m in muns:
    prov = m['provedor']
    if prov not in por_provedor:
        por_provedor[prov] = []
    por_provedor[prov].append(m)

# ═══════════════════════════════════════════════════════════════
# 3. Generate Cidades/_index.js
# ═══════════════════════════════════════════════════════════════
print("Gerando Cidades/_index.js...", flush=True)
sorted_muns = sorted(muns, key=lambda x: x['nome'])
cid_idx_lines = ["var cidadesIndex = ["]
count = 0
cid_slugs_used = set()
for m in sorted_muns:
    nome, uf, prov = m['nome'], m['uf'], m['provedor']
    slug = f"{get_slug(nome)}-{uf.lower()}"
    ws = 'true'
    if prov in ROBOS: ws = 'false'
    if m['informacoesProvedor']:
        if m['informacoesProvedor'].get('webService') == '0': ws = 'false'
        if m['informacoesProvedor'].get('robo') == '1': ws = 'false'
    if slug in cid_slugs_used: continue
    cid_slugs_used.add(slug)
    sep = ',' if count > 0 else ''
    nome_esc = nome.replace("'", "\\'")
    cid_idx_lines.append(f"{sep}  {{ id: '{slug}', nome: '{nome_esc}', uf: '{uf}', ibge: '{m['codigo']}', provedor: '{prov}', webService: {ws} }}")
    count += 1
cid_idx_lines.append("];")
with open(CIDADES_DIR / '_index.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(cid_idx_lines) + '\n')
print(f"  {count} cidades no index", flush=True)

# ═══════════════════════════════════════════════════════════════
# 4. Generate Provedores/_index.js
# ═══════════════════════════════════════════════════════════════
print("Gerando Provedores/_index.js...", flush=True)
sorted_provs = sorted(por_provedor.items(), key=lambda x: len(x[1]), reverse=True)
prov_idx_lines = ["var provedoresIndex = ["]
prov_count = 0
for prov, prov_muns in sorted_provs:
    slug = get_slug(prov)
    sep = ',' if prov_count > 0 else ''
    prov_esc = prov.replace("'", "\\'")
    prov_idx_lines.append(f"{sep}  {{ id: '{slug}', nome: '{prov_esc}', empresa: '{prov}', versoes: ['{prov}'], municipios: {len(prov_muns)} }}")
    prov_count += 1
prov_idx_lines.append("];")
with open(PROVEDORES_DIR / '_index.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(prov_idx_lines) + '\n')
print(f"  {prov_count} provedores no index", flush=True)


# ═══════════════════════════════════════════════════════════════
# 5. Generate individual city files
# ═══════════════════════════════════════════════════════════════
print("Gerando arquivos individuais de cidades...", flush=True)
url_fields = ['autenticacao', 'recepcaoLote', 'consultaSituacaoLote', 'consultaLote',
              'consultaRps', 'consultaNFe', 'cancelamentoNFe', 'inutilizacaoNumeracaoNFe',
              'downloadPDF', 'paginaVerificacaoRps', 'paginaVerificacaoNFe']
cid_count = 0
cid_file_slugs = set()
for m in sorted_muns:
    nome, uf, prov = m['nome'], m['uf'], m['provedor']
    slug = f"{get_slug(nome)}-{uf.lower()}"
    if slug in cid_file_slugs: continue
    cid_file_slugs.add(slug)

    ns = m.get('defaultNamespace')
    cod_prov = m.get('codigoNoProvedor')
    if cod_prov: cod_prov = cod_prov.strip()
    if not cod_prov: cod_prov = None

    ws = True; robo = False
    if prov in ROBOS: ws = False; robo = True
    if m['informacoesProvedor']:
        if m['informacoesProvedor'].get('robo') == '1': robo = True
        if m['informacoesProvedor'].get('webService') == '0': ws = False

    versao_abrasf = None; info_adicional = None
    if m['informacoesProvedor']:
        va = (m['informacoesProvedor'].get('versaoAbrasf') or '').strip()
        if va and va != '0': versao_abrasf = va
        ia = m['informacoesProvedor'].get('infoAdicional')
        if ia:
            ia = ia.replace('<![CDATA[', '').replace(']]>', '').strip()
            if ia and ia != 'System.Xml.XmlElement': info_adicional = ia

    info_rps = m.get('infoComplementarImpressaoRps')

    # Build const name
    parts = get_slug(nome).split('-')
    const_name = ''.join(p.capitalize() for p in parts if p)

    js = f"var cidadeDetalhe = {{\n"
    js += f"  id: '{slug}',\n"
    js += f"  nome: '{nome.replace(chr(39), chr(92)+chr(39))}',\n"
    js += f"  uf: '{uf}',\n"
    js += f"  ibge: '{m['codigo']}',\n"
    js += f"  constante: 'CodigoIBGE.{const_name}{uf}',\n"
    js += f"  provedorAtual: {{\n"
    js += f"    nome: '{prov}',\n"
    js += f"    namespace: {js_str(ns) if ns else 'null'},\n"
    js += f"    codigoNoProvedor: {js_str(cod_prov) if cod_prov else 'null'},\n"
    js += f"    robo: {'true' if robo else 'false'},\n"
    js += f"    webService: {'true' if ws else 'false'},\n"
    if versao_abrasf:
        js += f"    versaoAbrasf: '{versao_abrasf}',\n"
    if info_adicional:
        js += f"    infoAdicional: {js_str(info_adicional)},\n"
    js += f"    urls: {{\n"
    # Homologacao
    js += f"      homologacao: {{\n"
    h_lines = []
    for uf2 in url_fields:
        if uf2 in m['urls']['homologacao']:
            h_lines.append(f"        {uf2}: '{m['urls']['homologacao'][uf2].replace(chr(39), chr(92)+chr(39))}'")
    if h_lines:
        js += ',\n'.join(h_lines) + '\n'
    js += f"      }},\n"
    # Producao
    js += f"      producao: {{\n"
    p_lines = []
    for uf2 in url_fields:
        if uf2 in m['urls']['producao']:
            p_lines.append(f"        {uf2}: '{m['urls']['producao'][uf2].replace(chr(39), chr(92)+chr(39))}'")
    if p_lines:
        js += ',\n'.join(p_lines) + '\n'
    js += f"      }}\n"
    js += f"    }}\n"

    esc_hom = m['emissaoSemCertificado']['homologacao']
    esc_prd = m['emissaoSemCertificado']['producao']
    if esc_hom or esc_prd:
        js = js.rstrip('\n') + ',\n'
        js += f"    emissaoSemCertificado: {{\n"
        if esc_hom: js += f"      homologacao: '{esc_hom}',\n"
        if esc_prd: js += f"      producao: '{esc_prd}'\n"
        js += f"    }}\n"

    if info_rps:
        js = js.rstrip('\n') + ',\n'
        js += f"    infoComplementarImpressaoRps: {js_str(info_rps)}\n"

    js += f"  }}"

    # configuracaoProvedor
    if prov in prov_caract:
        cfg_block = write_cfg_block(prov_caract[prov], '  ')
        js += f",\n  configuracaoProvedor: {{\n{cfg_block}\n  }}"

    js += "\n};\n"

    with open(CIDADES_DIR / f"{slug}.js", 'w', encoding='utf-8') as f:
        f.write(js)
    cid_count += 1
    if cid_count % 500 == 0:
        print(f"  {cid_count} cidades geradas...", flush=True)

print(f"  {cid_count} cidades geradas no total", flush=True)


# ═══════════════════════════════════════════════════════════════
# 6. Generate individual provider files
# ═══════════════════════════════════════════════════════════════
print("Gerando arquivos individuais de provedores...", flush=True)
prov_file_count = 0
for prov, prov_muns in sorted_provs:
    prov_muns_sorted = sorted(prov_muns, key=lambda x: x['nome'])
    slug = get_slug(prov)
    total = len(prov_muns_sorted)

    ufs = {}
    for m in prov_muns_sorted:
        u = m['uf']
        ufs[u] = ufs.get(u, 0) + 1
    ufs_sorted = sorted(ufs.items(), key=lambda x: x[1], reverse=True)

    js = f"var provedorDetalhe = {{\n"
    js += f"  id: '{slug}',\n"
    js += f"  nome: '{prov.replace(chr(39), chr(92)+chr(39))}',\n"
    js += f"  empresa: '{prov}',\n"
    js += f"  stats: {{\n"
    js += f"    municipios: {total}\n"
    js += f"  }},\n"
    js += f"  visaoGeral: [\n"
    js += f"    {{ key: 'Nome', val: '{prov}' }},\n"
    js += f"    {{ key: 'Total Municipios', val: '{total}' }},\n"
    uf_list = ', '.join(f"'{u}'" for u, _ in ufs_sorted)
    js += f"    {{ key: 'Estados Atendidos', val: [{uf_list}], type: 'uf-badges' }}\n"
    js += f"  ],\n"

    # configuracaoProvedor
    if prov in prov_caract:
        cfg_block = write_cfg_block(prov_caract[prov], '  ')
        js += f"  configuracaoProvedor: {{\n{cfg_block}\n  }},\n"

    # municipiosLista
    js += f"  municipiosLista: {{\n"
    js += f"    '{slug}': [\n"
    for i, m in enumerate(prov_muns_sorted):
        sep = ',' if i > 0 else ''
        nome_esc = m['nome'].replace("'", "\\'")
        js += f"{sep}      {{ nome: '{nome_esc}', uf: '{m['uf']}', ibge: '{m['codigo']}' }}\n"
    js += f"    ]\n"
    js += f"  }}\n"
    js += f"}};\n"

    with open(PROVEDORES_DIR / f"{slug}.js", 'w', encoding='utf-8') as f:
        f.write(js)
    prov_file_count += 1

print(f"  {prov_file_count} provedores gerados", flush=True)

print(f"\n=== CONCLUIDO ===", flush=True)
print(f"  Cidades: {cid_count} arquivos + _index.js", flush=True)
print(f"  Provedores: {prov_file_count} arquivos + _index.js", flush=True)
print(f"  Provedores com caracteristicas C#: {len(prov_caract)}", flush=True)
