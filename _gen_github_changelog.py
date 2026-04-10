#!/usr/bin/env python3
"""Gera LogsAlteracoes/github-changelog.js a partir dos PRs do GitHub."""
import json, re
from datetime import datetime, timedelta, timezone

# Data atual: 10/04/2026 (sexta-feira)
TODAY = datetime(2026, 4, 10)
BRT = timezone(timedelta(hours=-3))

DIAS_SEMANA = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']
MESES = ['', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

with open('/tmp/prs.json', 'r') as f:
    prs = json.load(f)

# Parse mergedAt and convert to BRT date
for pr in prs:
    dt = datetime.fromisoformat(pr['mergedAt'].replace('Z', '+00:00'))
    pr['_brt'] = dt.astimezone(BRT)
    pr['_date'] = pr['_brt'].strftime('%Y-%m-%d')

# Group by day (last 12 days: 2026-03-30 to 2026-04-10)
days = []
for i in range(12):
    d = TODAY - timedelta(days=i)
    days.append(d.strftime('%Y-%m-%d'))

grouped = {}
for d in days:
    grouped[d] = [pr for pr in prs if pr['_date'] == d]

def pick_icon(title, body):
    t = (title + ' ' + (body or '')).lower()
    if 'novo provedor' in t or 'new provider' in t or 'add.*provedor' in t:
        return '🆕'
    if any(w in t for w in ['cidade', 'municipio', 'município', 'ibge', 'configuracoes', 'configuracoesmunicipios']):
        return '🏙️'
    if any(w in t for w in ['url', 'endpoint', 'recepcaolote']):
        return '🔗'
    if any(w in t for w in ['exterior', 'foreign', 'estrangeiro', 'moeda']):
        return '🌐'
    if any(w in t for w in ['aliquota', 'alíquota', 'tribut', 'issqn', 'imposto', 'ctn', 'ctm', 'nbs']):
        return '📊'
    if any(w in t for w in ['cancelamento', 'cancelar', 'cancel']):
        return '❌'
    if any(w in t for w in ['fix', 'corrig', 'correção', 'bug', 'ajust']):
        return '🔧'
    if any(w in t for w in ['sync', 'conflito']):
        return '🔄'
    if any(w in t for w in ['rps', 'lote', 'consulta']):
        return '📋'
    if any(w in t for w in ['pdf', 'impressao']):
        return '🖨️'
    if any(w in t for w in ['teste', 'test']):
        return '🧪'
    return '🔧'

def translate_text(text):
    """Traduz termos comuns EN->PT para os changelogs."""
    replacements = [
        ('Add ', 'Adiciona '), ('Added ', 'Adicionado '), ('Update ', 'Atualiza '),
        ('Updated ', 'Atualizado '), ('Remove ', 'Remove '), ('Removed ', 'Removido '),
        ('Fix ', 'Corrige '), ('Fixed ', 'Corrigido '), ('Implement ', 'Implementa '),
        ('Implemented ', 'Implementado '), ('Enhance ', 'Melhora '), ('Enhanced ', 'Melhorado '),
        ('Refactor ', 'Refatora '), ('Refactored ', 'Refatorado '),
        ('Extend ', 'Estende '), ('Extended ', 'Estendido '),
        ('Normalize ', 'Normaliza '), ('Allow ', 'Permite '),
        ('Skip ', 'Ignora '), ('Include ', 'Inclui '),
        ('foreign', 'exterior'), ('certificate', 'certificado'),
        ('cancellation', 'cancelamento'), ('emission', 'emissão'),
        ('provider', 'provedor'), ('municipality', 'município'),
        ('municipalities', 'municípios'), ('municipal', 'municipal'),
        ('configuration', 'configuração'), ('configurations', 'configurações'),
        ('production', 'produção'), ('homologation', 'homologação'),
        ('test data', 'dados de teste'), ('error handling', 'tratamento de erros'),
        ('address handling', 'tratamento de endereço'), ('logging', 'logs'),
        ('new logic', 'nova lógica'), ('conditional logic', 'lógica condicional'),
        ('web scraping', 'web scraping'), ('fallback', 'fallback'),
    ]
    result = text
    for en, pt in replacements:
        result = result.replace(en, pt)
    return result

def summarize_pr(pr):
    title = pr['title']
    body = pr['body'] or ''
    num = pr['number']
    
    # Skip sync/conflito PRs — extract real changes from body
    if re.match(r'(Notagateway sync|Conflito)', title, re.I):
        changes = []
        for m in re.finditer(r'<strong>([^<]+\.(?:cs|xml))</strong><dd><code>([^<]+)</code>', body):
            fname, desc = m.group(1), m.group(2)
            if 'ConfiguracoesMunicipios' in fname:
                changes.append('Atualização de configurações de municípios')
            elif 'Provedor' in fname:
                pname = fname.replace('.cs', '').split('Provedor')[0] if 'Provedor' in fname else fname.split('.')[0]
                changes.append(f'Ajuste em provedor ({pname})')
        if not changes:
            return None
        return {'icon': '🔄', 'destaque': 'Sincronização de código', 'texto': '; '.join(list(set(changes))[:3]) + f' (PR #{num})'}
    
    # SQL-only PRs
    if re.search(r'\.sql\b', title, re.I) and not re.search(r'provedor|cidade|municipio|cancelad', title, re.I):
        return None
    
    # refac PRs
    if title.strip().lower() == 'refac':
        return None
    
    icon = pick_icon(title, body)
    
    # Generate destaque in Portuguese
    destaque = title.strip()
    destaque = re.sub(r'^(SUSFS|FRCAP|CE)-\d+[-\s]*', '', destaque).strip(' -–—')
    
    # Translate common patterns to Portuguese
    destaque_pt = translate_text(destaque)
    
    # Map specific PRs to better Portuguese descriptions
    pr_descriptions = {
        685: ('📊', 'Lógica Hotmart para definir UsaNBS no provedor', 'Adiciona lógica para determinar UsaNBS para municípios Hotmart no ObterCaracteristicasCore'),
        684: ('🏙️', 'Zera pTotTribFed para Franca/SP no XML NFSe', 'Estende zeragem de pTotTribFed para Franca/SP; refatora código para usar constantes CodigoIBGE'),
        682: ('🔧', 'Melhorias na consulta de lote NFS-e Barueri', 'Melhora logs de rastreamento; tratamento de erros de captcha; ajusta campo RPS para 10 dígitos'),
        681: ('🌐', 'Verifica tomador estrangeiro e define TipoLogLocPre', 'Adiciona verificação de tomador estrangeiro para pular atribuição de endereço'),
        680: ('🔧', 'Melhora tratamento de endereço no reg20', 'Adiciona fallback para endereço da empresa quando tomador não tem endereço; atualiza dados de teste'),
        678: ('🌐', 'Ajustes para ISSQN exterior e novos testes de PDF', 'Tratamento de notas de serviço no exterior com código IBGE específico; zera alíquota ISS para empresa com tomador exterior'),
        676: ('🔧', 'Consulta NFS-e por RPS com AntiCaptcha em Barueri', 'Implementa consulta NFS-e por RPS com AntiCaptcha; adiciona ConsultarLoteNFeWSCommandV3 para web scraping'),
        675: ('🔧', 'Normaliza comparação de série RPS na consulta NFSe', 'Normaliza comparação de série RPS na consulta de lote NFSe para evitar falsos negativos'),
        673: ('🏙️', 'Remove obrigatoriedade de RPS sequencial em Varginha/MG', 'Remove enforcement de RPS sequencial para Varginha/MG'),
        671: ('🌐', 'Tratamento de tomador estrangeiro', 'Ajustes no tratamento de tomador estrangeiro para emissão de NFS-e'),
        669: ('🌐', 'Tratamento de NFS-e com serviço no exterior', 'Tratamento de NFS-e com prestação de serviço no exterior'),
        668: ('🔧', 'Adiciona usuário backoffice', 'Adiciona novo usuário de backoffice ao sistema'),
        667: ('🌐', 'Permite vServMoeda usar valor em moeda estrangeira', 'Permite que vServMoeda use valor em moeda estrangeira quando presente'),
        666: ('🌐', 'Refatora extração de valor em moeda estrangeira', 'Refatora lógica de extração de valorServicoMoedaEstrangeira'),
        665: ('🔧', 'Refatora extração de metadados', 'Refatora extração de metadados para melhor organização'),
        663: ('🌐', 'Envia valor da moeda estrangeira para nota do exterior', 'Envia o valor da moeda estrangeira para nota do exterior'),
        662: ('❌', 'Dispara cancelamento de notas', 'Script para disparar cancelamento de notas pendentes'),
        661: ('🌐', 'Ajusta tomador exterior situação tributária 14 Cachoeirinha', 'Ajusta tomador exterior com situação tributária 14 para Cachoeirinha'),
        659: ('🏙️', 'Atualiza provedor para GovBRv2 com link atualizado', 'Atualiza provedor para versão do GovBRv2 com o link atualizado'),
        654: ('🏙️', 'Adiciona Paranapanema/SP na versão GOVBRv3', 'Adiciona Paranapanema/SP na versão GOVBRv3 em ConfiguracoesMunicipios.xml'),
        653: ('📊', 'Adapta Limeira para usar CTN e CTM', 'Adapta Limeira/SP para usar Código de Tributação Nacional e Código Tributário Municipal'),
        652: ('🌐', 'Remove envio de CEP para tomadores do exterior', 'Remove envio do CEP para tomadores do exterior; prefeitura retornava erro'),
        651: ('🔧', 'Não grava RPS quando notas retornam negadas', 'Corrige gravação de RPS quando as notas retornam negadas'),
        649: ('📊', 'Adapta Limeira para usar CTN e CTM', 'Adapta Limeira/SP para usar Código de Tributação Nacional e Código Tributário Municipal'),
    }
    
    if num in pr_descriptions:
        return {'icon': pr_descriptions[num][0], 'destaque': pr_descriptions[num][1], 'texto': pr_descriptions[num][2] + f' (PR #{num})'}
    
    if len(destaque_pt) > 80:
        destaque_pt = destaque_pt[:77] + '...'
    
    # Extract description from body
    desc_match = re.search(r'### \*\*Description\*\*\n(.*?)(?=\n___|\n###|\Z)', body, re.S)
    if desc_match:
        desc_lines = [l.strip('- \n') for l in desc_match.group(1).strip().split('\n') if l.strip() and l.strip() != '']
        texto = translate_text('; '.join(desc_lines[:3]))
    else:
        texto = destaque_pt
    
    texto += f' (PR #{num})'
    
    return {'icon': icon, 'destaque': destaque_pt, 'texto': texto}


# Build changelog
changelog = []
for d in days:
    dt = datetime.strptime(d, '%Y-%m-%d')
    dia_semana = DIAS_SEMANA[dt.weekday()]
    mes = MESES[dt.month]
    tag = dt.strftime('%d/%m/%Y')
    titulo = f'{dia_semana} — {dt.day:02d} de {mes}'
    
    day_prs = grouped[d]
    itens = []
    
    if not day_prs:
        itens.append({'icon': '📭', 'destaque': 'Sem alterações', 'texto': 'Nenhum PR mergeado neste dia.'})
    else:
        for pr in sorted(day_prs, key=lambda x: x['mergedAt'], reverse=True):
            item = summarize_pr(pr)
            if item:
                itens.append(item)
        if not itens:
            itens.append({'icon': '🔄', 'destaque': 'Sincronização de código', 'texto': 'Apenas merges de sincronização neste dia.'})
    
    changelog.append({
        'tag': tag,
        'titulo': titulo,
        'data': tag,
        'itens': itens
    })

# Write JS file
def js_escape(s):
    return s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n')

lines = ['var changelogData = [']
for i, day in enumerate(changelog):
    lines.append('  {')
    lines.append(f"    tag: '{js_escape(day['tag'])}',")
    lines.append(f"    titulo: '{js_escape(day['titulo'])}',")
    lines.append(f"    data: '{js_escape(day['data'])}',")
    lines.append('    itens: [')
    for j, item in enumerate(day['itens']):
        comma = ',' if j < len(day['itens']) - 1 else ''
        lines.append('      {')
        lines.append(f"        icon: '{item['icon']}',")
        lines.append(f"        destaque: '{js_escape(item['destaque'])}',")
        lines.append(f"        texto: '{js_escape(item['texto'])}',")
        lines.append(f'      }}{comma}')
    lines.append('    ],')
    comma = ',' if i < len(changelog) - 1 else ''
    lines.append(f'  }}{comma}')
lines.append('];')

with open('LogsAlteracoes/github-changelog.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines) + '\n')

print(f'GitHub changelog gerado: {len(changelog)} dias, {sum(len(d["itens"]) for d in changelog)} itens total')
