---
inclusion: always
---

# Cidades & Provedores — Padrões do Projeto

Site estático (GitHub Pages) que exibe dados de cidades e provedores do eNotas Gateway.
URL: https://enriqueboni-enotas.github.io/cidades-provedores/

## Stack

- HTML/CSS/JS puro — sem framework, sem build, sem bundler
- GitHub Pages com deploy via GitHub Actions (`.github/workflows/pages.yml`)
- Dados gerados pelo script `gerar.ps1` a partir do app-gw
- Changelogs gerados pelo agente `atualizar-site`

## Arquitetura de Arquivos

| Arquivo | Função |
|---------|--------|
| `index.html` | Página principal — busca de cidades/provedores + changelog |
| `nfe-negadas.html` | Dashboard de NFS-e negadas |
| `auth.js` | Autenticação Google OAuth2 + log de acessos (compartilhado entre páginas) |
| `hotmart-logo.svg` | Logo Hotmart (chama + texto) |
| `enotas-logo.png` | Logo eNotas |
| `Cidades/_index.js` | Índice de cidades (gerado) |
| `Cidades/{slug}.js` | Detalhe de cada cidade (gerado) |
| `Provedores/_index.js` | Índice de provedores (gerado) |
| `Provedores/{slug}.js` | Detalhe de cada provedor (gerado) |
| `LogsAlteracoes/*.js` | Dados de changelog (gerados) |
| `LogsAlteracoes/nfe-negadas-detalhe/*.json` | Detalhe por empresa (gerado) |

## Visual — Estilo help.hotmart.com

O site segue o visual do help.hotmart.com. Regras obrigatórias:

### Cores

| Token | Light | Dark | Uso |
|-------|-------|------|-----|
| `--bg` | #F5F5F0 | #141414 | Fundo da página |
| `--surface` | #FFFFFF | #1E1E1E | Cards, topbar |
| `--surface2` | #F0F0EB | #2A2A2A | Backgrounds secundários |
| `--border` | #E0DED8 | #333 | Bordas |
| `--accent` | #F04E23 | #F04E23 | CTA, hovers, destaques (laranja Hotmart) |
| `--accent2` | #32363b | #32363b | Texto de destaque em itens |
| `--text` | #32363b | #E0E0E0 | Texto principal |
| `--muted` | #707780 | #8A8A8A | Texto secundário |
| `--heading` | #0D0D0D | #FFFFFF | Títulos |

### Regras de cor

- Accent principal é SEMPRE #F04E23 (laranja Hotmart) — em ambos os temas
- NÃO usar azul como accent. Usar cinza (#8A8A8A) onde antes havia azul
- Paleta reduzida: laranja + cinza + vermelho (erros) + verde (sucesso)
- Sem tons de azul/teal nos elementos de UI

### Fonte

- Nunito Sans (Google Fonts) — mesma do help.hotmart.com
- Fallback: -apple-system, blinkmacsystemfont, 'Segoe UI', helvetica, arial, sans-serif
- NÃO usar Inter, Roboto ou outras fontes

### Topbar

- Fundo branco (light) / #1E1E1E (dark)
- Logo Hotmart (`hotmart-logo.svg`) + divider + Logo eNotas (`enotas-logo.png`) + divider + título
- Logos invertem para branco no dark mode via `filter: brightness(0) invert(1)`
- User bar com nome + botão "sair" à direita

### Ícones

- NÃO usar emojis na UI (tabs, botões, cards)
- Usar SVG inline com stroke #F04E23 para ícones de cards
- Usar dots coloridos (●) para itens de changelog via função `iconify()`
- Mapa de cores dos dots: laranja (#F04E23) para cidades/deploy, cinza (#8A8A8A) para a maioria, vermelho (#d6342c) para erros, verde (#009d43) para novidades

### Dark Mode

- Default: light (class `light` no `<html>`)
- Toggle via botão na topbar
- Persistido no `localStorage` key `theme`
- Usar `html:not(.light)` para estilos dark (não `html.dark`)

## Autenticação (auth.js)

- Google OAuth2 Implicit Flow (redirect, não popup/One Tap)
- Restrita ao domínio `@hotmart.com` — validação client-side no JWT
- Sessão de 8 horas no `localStorage` (keys: `gw_auth_user`, `gw_auth_expiry`)
- JWT decodificado com `TextDecoder('utf-8')` para suportar acentos
- Tela de login com logos Hotmart + eNotas
- `auth.js` é incluído como primeiro `<script>` após `<body>` em todas as páginas
- O script wrapa todo o conteúdo em `#app-content` e esconde até autenticar

### Ao adicionar nova página

1. Incluir `<script src="auth.js"></script>` logo após `<body>`
2. Adicionar a URL da página em "Authorized redirect URIs" no Google Cloud Console

## Log de Acessos

- Google Sheets via Apps Script (conta Gmail pessoal, não Workspace)
- Método: GET com `?data=` query param (via `new Image()`) — evita problemas de CORS
- Timestamp em horário de Brasília (UTC-3) gerado no client
- Colunas: Timestamp | Email | Nome | Página | Ação | Detalhe
- Ações rastreadas: `login`, `page_view`, `select_mode`, `search`, `view_cidade`, `view_provedor`, `view_tab`
- Tracking exposto via `window._authLogEvent(action, detail)` para uso no index.html

### Ao adicionar nova interação rastreável

Chamar `if (window._authLogEvent) window._authLogEvent('nome_acao', 'detalhe');`

## Dados (arquivos gerados)

- NÃO editar manualmente arquivos em `Cidades/`, `Provedores/` ou `LogsAlteracoes/`
- São regenerados pelo agente `atualizar-site` e pelo script `gerar.ps1`
- O `index.html` contém toda a lógica de renderização — os dados são apenas JS/JSON

## Segurança

- Site é PÚBLICO (GitHub Pages)
- NUNCA incluir razão social, CNPJ, nomes de clientes ou PII
- Apenas IDs (UUIDs) são permitidos para identificar empresas
- Autenticação é client-side (não é segurança real, é controle de acesso básico)

## Deploy

- Push para `main` dispara o workflow `.github/workflows/pages.yml`
- Deploy automático via GitHub Actions (upload-pages-artifact + deploy-pages)
- Propagação leva ~30 segundos
