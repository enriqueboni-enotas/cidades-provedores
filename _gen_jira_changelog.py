#!/usr/bin/env python3
"""Gera LogsAlteracoes/jira-tickets-changelog.js a partir dos tickets CE do Jira."""
import json, subprocess, re, sys
from datetime import datetime, timedelta

TODAY = datetime(2026, 4, 10)
DIAS_SEMANA = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']
MESES = ['', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

seen_keys = set()
all_days = []

for i in range(12):
    d = TODAY - timedelta(days=i)
    d_str = d.strftime('%Y-%m-%d')
    d_next = (d + timedelta(days=1)).strftime('%Y-%m-%d')
    
    jql = f'project = CE AND cf[14189] = e-Notas AND status changed to Done DURING ("{d_str}","{d_next}") ORDER BY key DESC'
    
    print(f'Buscando tickets para {d_str}...', flush=True)
    try:
        result = subprocess.run(
            ['acli', 'jira', 'workitem', 'search', '--jql', jql, '--fields', 'key,summary', '--json', '--paginate'],
            capture_output=True, text=True, timeout=60
        )
        if result.returncode != 0:
            print(f'  ERRO: {result.stderr[:200]}', flush=True)
            tickets = []
        else:
            data = json.loads(result.stdout) if result.stdout.strip() else []
            # Deduplicate
            tickets = []
            for t in data:
                key = t.get('key', '')
                if key and key not in seen_keys:
                    seen_keys.add(key)
                    tickets.append(t)
    except Exception as e:
        print(f'  EXCEÇÃO: {e}', flush=True)
        tickets = []
    
    print(f'  {len(tickets)} tickets novos para {d_str}', flush=True)
    all_days.append((d, tickets))


# Grouping logic
def classify_ticket(summary):
    s = summary.lower()
    if '[autofix]' in s:
        return ('🤖', 'Autofix')
    if any(w in s for w in ['sincroniz', 'sync', 'sincroni']):
        return ('🔄', 'Sincronização')
    if any(w in s for w in ['cancel', 'inutiliz']):
        return ('❌', 'Cancelamento/Inutilização')
    if any(w in s for w in ['emiss', 'emit', 'envio', 'enviar', 'negada', 'rejeita']):
        return ('📄', 'Emissão de notas')
    if any(w in s for w in ['financ', 'pagamento', 'cobranç', 'fatura']):
        return ('💰', 'Financeiro')
    if any(w in s for w in ['exterior', 'estrangeiro', 'foreign']):
        return ('🌐', 'Exterior')
    if any(w in s for w in ['certificado', 'cert digital']):
        return ('🔒', 'Certificado digital')
    if any(w in s for w in ['rps', 'lote', 'consulta']):
        return ('📋', 'Consulta/RPS')
    if any(w in s for w in ['aliquota', 'alíquota', 'tribut', 'imposto', 'iss']):
        return ('📊', 'Tributação')
    if any(w in s for w in ['url', 'endpoint', 'webservice', 'timeout']):
        return ('🔗', 'Infraestrutura/URLs')
    if any(w in s for w in ['provedor', 'prefeitura', 'municipal']):
        return ('🏙️', 'Provedor/Prefeitura')
    return ('🔧', 'Suporte geral')

def extract_city(summary):
    """Tenta extrair cidade/UF do summary."""
    # Pattern: Cidade/UF or Cidade - UF
    m = re.search(r'(?:em|para|de|cidade)\s+([A-ZÀ-Ú][a-zà-ú]+(?:\s+[a-zà-ú]+)*)\s*/\s*([A-Z]{2})', summary)
    if m:
        return f'{m.group(1)}/{m.group(2)}'
    m = re.search(r'([A-ZÀ-Ú][a-zà-ú]+(?:\s+(?:de|do|da|dos|das)\s+)?[A-ZÀ-Ú]?[a-zà-ú]*)\s*/\s*([A-Z]{2})', summary)
    if m:
        return f'{m.group(1)}/{m.group(2)}'
    return None

def group_tickets(tickets):
    """Agrupa tickets por tema."""
    groups = {}
    for t in tickets:
        key = t.get('key', '')
        summary = t.get('summary', t.get('fields', {}).get('summary', ''))
        icon, category = classify_ticket(summary)
        
        if category not in groups:
            groups[category] = {'icon': icon, 'keys': [], 'cities': set()}
        groups[category]['keys'].append(key)
        
        city = extract_city(summary)
        if city:
            groups[category]['cities'].add(city)
    
    itens = []
    for cat, data in sorted(groups.items(), key=lambda x: len(x[1]['keys']), reverse=True):
        n = len(data['keys'])
        keys_str = ', '.join(data['keys'][:10])
        if n > 10:
            keys_str += f' e mais {n-10}'
        
        destaque = cat
        cities = list(data['cities'])
        if cities:
            destaque += f' — {", ".join(cities[:3])}'
            if len(cities) > 3:
                destaque += f' e mais {len(cities)-3}'
        
        texto = f'{n} card{"s" if n > 1 else ""} ({keys_str})'
        itens.append({'icon': data['icon'], 'destaque': destaque, 'texto': texto})
    
    return itens

# Build changelog
changelog = []
for d, tickets in all_days:
    dia_semana = DIAS_SEMANA[d.weekday()]
    mes = MESES[d.month]
    tag = d.strftime('%d/%m/%Y')
    titulo = f'{dia_semana} — {d.day:02d} de {mes}'
    
    if not tickets:
        itens = [{'icon': '📭', 'destaque': 'Sem tickets resolvidos', 'texto': 'Nenhum ticket resolvido neste dia.'}]
    else:
        itens = group_tickets(tickets)
        if not itens:
            itens = [{'icon': '📭', 'destaque': 'Sem tickets resolvidos', 'texto': 'Nenhum ticket resolvido neste dia.'}]
    
    changelog.append({'tag': tag, 'titulo': titulo, 'data': tag, 'itens': itens})

# Write JS file
def js_escape(s):
    return s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n')

lines = ['var jiraChangelogData = [']
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

with open('LogsAlteracoes/jira-tickets-changelog.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines) + '\n')

print(f'Jira changelog gerado: {len(changelog)} dias, {sum(len(d["itens"]) for d in changelog)} itens total')
