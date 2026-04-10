#!/usr/bin/env python3
"""Gera LogsAlteracoes/nfe-negadas-changelog.js e arquivos de detalhe."""
import json, os, re, subprocess, sys, time
from datetime import datetime, timedelta
from pathlib import Path

TODAY = datetime(2026, 4, 10)
DIAS_SEMANA = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']
MESES = ['', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

# Read token
env_path = os.path.expanduser('~/.env')
token = None
with open(env_path, 'r') as f:
    for line in f:
        if line.startswith('ASTROBOX_TOKEN='):
            token = line.strip().split('=', 1)[1]
            break

if not token:
    print('ERRO: ASTROBOX_TOKEN não encontrado em ~/.env')
    sys.exit(1)

DATASOURCE_ID = '4491e172-f9f6-496c-a2fc-747638d5f080'
API_URL = 'https://api-astrobox.hotmart.com/v1/executor/reactive/real-time'

def run_query(sql, limit=10):
    """Executa query no Astrobox via curl."""
    body = json.dumps({
        'sql': sql,
        'dataSourceId': DATASOURCE_ID,
        'parameters': {'_gmt': '-03:00'},
        'limit': limit
    })
    
    result = subprocess.run([
        'curl', '-s', '-w', '\n%{http_code}',
        '-X', 'POST', API_URL,
        '-H', f'Authorization: Bearer {token}',
        '-H', 'Content-Type: application/x-ndjson',
        '-H', 'Accept: application/x-ndjson',
        '-H', 'Origin: https://astrobox.hotmart.com',
        '-H', 'x-client-name: astrobox',
        '-d', body
    ], capture_output=True, text=True, timeout=120)
    
    output = result.stdout.strip()
    lines = output.split('\n')
    http_code = lines[-1] if lines else '0'
    response_body = '\n'.join(lines[:-1])
    
    if http_code in ('401', '403'):
        print(f'  ERRO: Token expirado (HTTP {http_code})')
        return None
    
    if http_code != '200':
        print(f'  ERRO: HTTP {http_code}')
        print(f'  Response: {response_body[:200]}')
        return None
    
    # Parse NDJSON response
    rows = []
    for line in response_body.split('\n'):
        line = line.strip()
        if not line:
            continue
        try:
            obj = json.loads(line)
            if 'data' in obj:
                rows.extend(obj['data'])
            elif isinstance(obj, dict) and 'motivo_situacao' in obj:
                rows.append(obj)
        except json.JSONDecodeError:
            pass
    
    return rows

def extract_motivo(motivo_json_str):
    """Extrai mensagemErro do JSON de motivo_situacao."""
    if not motivo_json_str:
        return 'Motivo não informado'
    try:
        obj = json.loads(motivo_json_str)
        msg = obj.get('mensagemErro', '')
        # Remove HTML tags
        msg = re.sub(r'<[^>]+>', '', msg)
        msg = msg.strip()
        return msg if msg else 'Motivo não informado'
    except (json.JSONDecodeError, TypeError):
        # Maybe it's already a plain string
        return re.sub(r'<[^>]+>', '', str(motivo_json_str)).strip() or 'Motivo não informado'

def pick_icon(motivo):
    m = motivo.lower()
    if any(w in m for w in ['bloqueio', 'pagamento', 'inadimpl', 'plano']):
        return '💰'
    if any(w in m for w in ['certificado', 'cert']):
        return '🔒'
    if any(w in m for w in ['nbs', 'lista serviço', 'lista de serviço']):
        return '📋'
    if any(w in m for w in ['cpf', 'cnpj', 'documento']):
        return '👤'
    if any(w in m for w in ['ibge', 'cidade', 'município']):
        return '🏙️'
    if any(w in m for w in ['cep']):
        return '📮'
    if any(w in m for w in ['emissor', 'habilitado', 'cadastro']):
        return '❌'
    if any(w in m for w in ['exterior', 'estrangeiro']):
        return '🌐'
    if any(w in m for w in ['rps', 'série', 'sequencial']):
        return '🔢'
    if any(w in m for w in ['tribut', 'alíquota', 'aliquota', 'iss']):
        return '🧮'
    if any(w in m for w in ['desativad', 'inativ']):
        return '⏸️'
    if any(w in m for w in ['timeout', 'indisponível', 'fora do ar']):
        return '🔗'
    return '🧾'


# Clean old detail files
detalhe_dir = Path('LogsAlteracoes/nfe-negadas-detalhe')
detalhe_dir.mkdir(exist_ok=True)
for f in detalhe_dir.glob('*.json'):
    f.unlink()

changelog = []

for i in range(12):
    d = TODAY - timedelta(days=i)
    d_str = d.strftime('%Y-%m-%d')
    d_next = (d + timedelta(days=1)).strftime('%Y-%m-%d')
    
    print(f'Consultando NF-e negadas para {d_str}...', flush=True)
    
    # Query top motivos
    sql = f"SELECT motivo_situacao, count(distinct coalesce(n_fe_id, hub_event_id)) as qtd FROM dh_app_enotas.nfe_negadas WHERE lastmodified_at >= '{d_str} 00:00:00' AND lastmodified_at < '{d_next} 00:00:00' GROUP BY motivo_situacao ORDER BY qtd DESC"
    
    rows = run_query(sql, limit=10)
    time.sleep(1)  # Rate limiting
    
    dia_semana = DIAS_SEMANA[d.weekday()]
    mes = MESES[d.month]
    tag = d.strftime('%d/%m/%Y')
    titulo = f'{dia_semana} — {d.day:02d} de {mes}'
    
    itens = []
    if rows is None:
        print(f'  ERRO na query, usando placeholder', flush=True)
        itens.append({'icon': '⚠️', 'destaque': 'Erro ao consultar dados', 'texto': 'Não foi possível consultar o Astrobox.'})
    elif not rows:
        itens.append({'icon': '📭', 'destaque': 'Sem dados', 'texto': 'Nenhuma NF-e negada registrada neste dia.'})
    else:
        for row in rows[:10]:
            motivo_raw = row.get('motivo_situacao', '')
            qtd = int(row.get('qtd', 0))
            motivo = extract_motivo(motivo_raw)
            
            # Truncate long motivos
            if len(motivo) > 120:
                motivo_short = motivo[:117] + '...'
            else:
                motivo_short = motivo
            
            icon = pick_icon(motivo)
            
            # Format quantity
            qtd_str = f'{qtd:,}'.replace(',', '.')
            texto = f'{qtd_str} notas'
            
            itens.append({'icon': icon, 'destaque': motivo_short, 'texto': texto})
        
        print(f'  {len(rows)} motivos encontrados, top: {itens[0]["texto"] if itens else "N/A"}', flush=True)
    
    changelog.append({'tag': tag, 'titulo': titulo, 'data': tag, 'itens': itens})
    
    # Query detail (by empresa)
    print(f'  Consultando detalhe por empresa...', flush=True)
    sql_detail = f"SELECT motivo_situacao, empresa_id, count(distinct coalesce(n_fe_id, hub_event_id)) as qtd FROM dh_app_enotas.nfe_negadas WHERE lastmodified_at >= '{d_str} 00:00:00' AND lastmodified_at < '{d_next} 00:00:00' GROUP BY motivo_situacao, empresa_id ORDER BY qtd DESC"
    
    detail_rows = run_query(sql_detail, limit=5000)
    time.sleep(1)
    
    if detail_rows:
        # Save as JSON (without razao_social for security)
        detail_clean = []
        for r in detail_rows:
            detail_clean.append({
                'motivo_situacao': r.get('motivo_situacao', ''),
                'empresa_id': r.get('empresa_id', ''),
                'qtd': int(r.get('qtd', 0))
            })
        with open(detalhe_dir / f'{d_str}.json', 'w', encoding='utf-8') as f:
            json.dump(detail_clean, f, ensure_ascii=False)
        print(f'  {len(detail_clean)} registros de detalhe salvos', flush=True)
    else:
        # Save empty array
        with open(detalhe_dir / f'{d_str}.json', 'w', encoding='utf-8') as f:
            json.dump([], f)
        print(f'  Sem dados de detalhe', flush=True)


# Write JS file
def js_escape(s):
    return s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n')

lines = ['var nfeNegadasData = [']
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

with open('LogsAlteracoes/nfe-negadas-changelog.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines) + '\n')

print(f'\nNF-e Negadas changelog gerado: {len(changelog)} dias')
