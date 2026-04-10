# 🏙️ Cidades & Provedores — eNotas Gateway

Base de conhecimento do eNotas Gateway. Consulte configurações de municípios, provedores de NFS-e, tratamentos especiais e acompanhe as últimas atualizações do sistema.

**URL:** https://enriqueboni-enotas.github.io/cidades-provedores/

## Acesso

O site é protegido por autenticação Google OAuth2 restrita ao domínio `@hotmart.com`. Apenas colaboradores Hotmart conseguem acessar.

## O que você encontra aqui

- **Consulta de Cidades** — Busca por nome, UF ou código IBGE. Exibe provedor atual, configurações fiscais, tratamentos especiais, checklist de configuração e erros comuns.
- **Consulta de Provedores** — Busca por nome do provedor. Exibe municípios ativos, regras fiscais, mapeamento de regime tributário, histórico de PRs e observações para CX.
- **Changelog GitHub** — Últimas atualizações do app-gw (PRs mergeados nos últimos 12 dias).
- **Tickets Resolvidos (CE)** — Tickets do Jira resolvidos no período, agrupados por tema.
- **NF-e Negadas** — Top motivos de negação por dia, com drill-down por empresa.
- **Dashboard NF-e Negadas** — Análise cruzada com gráficos de evolução, UFs, cidades e motivos.

## Stack

- HTML/CSS/JS puro — sem framework, sem build
- GitHub Pages com deploy via GitHub Actions
- Dados gerados a partir do repositório `enotas-org/app-gw`
- Visual alinhado com [help.hotmart.com](https://help.hotmart.com/pt-br)

## Estrutura

```
├── index.html              # Página principal
├── nfe-negadas.html        # Dashboard NF-e negadas
├── auth.js                 # Autenticação + log de acessos
├── hotmart-logo.svg        # Logo Hotmart
├── enotas-logo.png         # Logo eNotas
├── Cidades/                # Dados de cidades (gerados)
│   ├── _index.js
│   └── {slug}.js
├── Provedores/             # Dados de provedores (gerados)
│   ├── _index.js
│   └── {slug}.js
├── LogsAlteracoes/         # Changelogs (gerados)
│   ├── github-changelog.js
│   ├── jira-tickets-changelog.js
│   ├── nfe-negadas-changelog.js
│   └── nfe-negadas-detalhe/*.json
├── .github/workflows/      # Deploy automático
│   └── pages.yml
├── .kiro/                  # Configurações Kiro
│   ├── agents/atualizar-site.md
│   └── steering/project-standards.md
└── gerar.ps1               # Script de geração de dados
```

## Como atualizar os dados

Use o agente Kiro `atualizar-site` que executa automaticamente:

1. Atualiza o app-gw local (branch dev)
2. Regenera arquivos de Cidades e Provedores via `gerar.ps1`
3. Atualiza changelog GitHub (últimos 12 dias)
4. Atualiza tickets Jira resolvidos
5. Atualiza NF-e negadas via Astrobox
6. Commit e push

Os arquivos em `Cidades/`, `Provedores/` e `LogsAlteracoes/` são gerados automaticamente. Não edite manualmente.

## Segurança

- O site é público (GitHub Pages) mas protegido por autenticação Google OAuth2
- **Nunca** incluir razão social, CNPJ, nomes de clientes ou qualquer PII
- Apenas IDs (UUIDs) são permitidos para identificar empresas

## Deploy

Push para `main` dispara o deploy automático via GitHub Actions. Propagação leva ~30 segundos.
