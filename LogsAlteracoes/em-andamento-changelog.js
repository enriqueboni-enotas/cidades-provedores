var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Under Analysis',
      icon: '🔍',
      itens: [
        { key: 'CE-25841', destaque: 'Autofix — localizar numerações' },
        { key: 'CE-25821', destaque: 'Autofix — localizar numerações' },
        { key: 'CE-25776', destaque: 'Sincronização de nota' },
        { key: 'CE-25769', destaque: 'Bug certificado digital' },
        { key: 'CE-25738', destaque: 'Problema de acesso ao painel eNotas' },
        {
          key: 'CE-25664',
          destaque:
            'Notas negadas — cPaisResult quando informado cPaisPrestacao',
        },
        { key: 'CE-25663', destaque: 'Erro ao emitir nota para o exterior' },
        { key: 'CE-25662', destaque: 'Erro na emissão das notas — Dumont/SP' },
        {
          key: 'CE-25652',
          destaque: 'Instabilidade no painel e ajuste de SMU',
        },
        { key: 'CE-25647', destaque: 'Observações na venda' },
        { key: 'CE-25525', destaque: 'Destaque código BC ISSQN' },
        {
          key: 'CE-25488',
          destaque: 'Atualização de CTN removendo benefício municipal',
        },
        { key: 'CE-25383', destaque: 'Campo código interno do contribuinte' },
        { key: 'CE-25222', destaque: 'Integração com a Shopify (atualização)' },
        { key: 'CE-24806', destaque: 'Reclame Aqui' },
        { key: 'CE-24175', destaque: 'Pesquisa de vendas' },
      ],
    },
    {
      status: 'Reopened',
      icon: '🔄',
      itens: [
        { key: 'CE-25212', destaque: 'Vendas não são importadas no emissor' },
      ],
    },
    {
      status: 'Open',
      icon: '📋',
      itens: [
        {
          key: 'CE-25880',
          destaque:
            'Liberação de cliente MEI para emissão de NFS-e via Portal Nacional',
        },
        {
          key: 'CE-25878',
          destaque:
            'Sincronizar vendas com a data de competência da nota — IJUPREV',
        },
        { key: 'CE-25877', destaque: 'Alteração de coprodução' },
        {
          key: 'CE-25851',
          destaque: 'Emissão de notas exterior — Portal Nacional',
        },
        {
          key: 'CE-25849',
          destaque: 'Anexo em que a empresa está enquadrada — Simples Nacional',
        },
        { key: 'CE-25831', destaque: 'Ajuste NFS-e — São Paulo/SP' },
        { key: 'CE-25823', destaque: 'Validação de vendas Pagar.me 2.0' },
        { key: 'CE-25775', destaque: 'Análise de vendas canceladas Hotmart' },
        { key: 'CE-25768', destaque: 'Falha na integração — Kobana' },
        { key: 'CE-25760', destaque: 'Parametrização para emissão' },
        { key: 'CE-25683', destaque: 'Faturamento indevido de excedentes' },
        { key: 'CE-25621', destaque: 'Análise de coprodução' },
        {
          key: 'CE-25566',
          destaque: 'Problema: não consegue integrar com WooCommerce',
        },
        {
          key: 'CE-25563',
          destaque: 'Melhoria nos campos PIS/COFINS — Portal Nacional',
        },
        { key: 'CE-25352', destaque: 'Relatório visão do contador' },
        {
          key: 'CE-25337',
          destaque: 'Alteração de layout da nota fiscal 2.0 — São Paulo/SP',
        },
        {
          key: 'CE-25283',
          destaque: 'Atualização sistema de notas — Socorro/SP',
        },
        {
          key: 'CE-25254',
          destaque: 'Erro emissão tomador exterior — Pato Branco/PR',
        },
        { key: 'CE-25229', destaque: 'Atualização layout XML — Cotia/SP' },
        { key: 'CE-25218', destaque: 'Atualização de município' },
        {
          key: 'CE-25193',
          destaque:
            'Prefeitura exige campo Regime de Apuração Tributária do Simples Nacional',
        },
      ],
    },
  ],
  compiladoSemanal: {
    periodo: '20/04 a 26/04/2026',
    totalTickets: 38,
    sincronizacao: 2,
    semAssignee: 0,
    reaberturas: 1,
    camadas: [
      {
        nome: 'GW',
        cor: '#F04E23',
        descricao: 'Gateway NFS-e/NF-e com prefeituras',
        total: 18,
        pct: '47,4',
        assuntos: [
          {
            assunto: 'Emissão exterior / Tomador estrangeiro',
            qtd: 5,
            pct: '13,2',
            keys: 'CE-25851,CE-25664,CE-25663,CE-25662,CE-25254',
          },
          {
            assunto: 'Configuração municipal / Atualização de provedor',
            qtd: 4,
            pct: '10,5',
            keys: 'CE-25831,CE-25283,CE-25229,CE-25218',
          },
          {
            assunto: 'Sincronização de nota',
            qtd: 2,
            pct: '5,3',
            keys: 'CE-25776,CE-25878',
          },
          {
            assunto: 'Simples Nacional / Regime tributário',
            qtd: 3,
            pct: '7,9',
            keys: 'CE-25849,CE-25193,CE-25563',
          },
          {
            assunto: 'Código interno do contribuinte / BC ISSQN',
            qtd: 2,
            pct: '5,3',
            keys: 'CE-25383,CE-25525',
          },
          {
            assunto: 'Autofix — localizar numerações',
            qtd: 2,
            pct: '5,3',
            keys: 'CE-25841,CE-25821',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel/emissor, faturamento, importação de vendas',
        total: 13,
        pct: '34,2',
        assuntos: [
          {
            assunto: 'Importação / Validação de vendas',
            qtd: 4,
            pct: '10,5',
            keys: 'CE-25212,CE-25823,CE-25775,CE-25566',
          },
          {
            assunto: 'Faturamento de excedentes',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25683',
          },
          {
            assunto: 'Coprodução',
            qtd: 2,
            pct: '5,3',
            keys: 'CE-25877,CE-25621',
          },
          {
            assunto: 'Relatório / Visão do contador',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25352',
          },
          {
            assunto: 'Integração (Kobana, WooCommerce, Shopify)',
            qtd: 3,
            pct: '7,9',
            keys: 'CE-25768,CE-25566,CE-25222',
          },
          {
            assunto: 'Acesso ao painel / Instabilidade',
            qtd: 2,
            pct: '5,3',
            keys: 'CE-25738,CE-25652',
          },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao: 'Tickets ambíguos — podem ser de qualquer camada',
        total: 5,
        pct: '13,2',
        assuntos: [
          {
            assunto: 'Layout da nota fiscal 2.0',
            qtd: 2,
            pct: '5,3',
            keys: 'CE-25337,CE-25488',
          },
          {
            assunto: 'Certificado digital / Autenticação',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25769',
          },
          {
            assunto: 'Observações na venda / Pesquisa de vendas',
            qtd: 2,
            pct: '5,3',
            keys: 'CE-25647,CE-24175',
          },
        ],
      },
      {
        nome: 'Outros',
        cor: '#C8C5BC',
        descricao: 'Melhorias, integrações externas, outros',
        total: 2,
        pct: '5,3',
        assuntos: [
          {
            assunto: 'Liberação MEI — Portal Nacional',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25880',
          },
          { assunto: 'Reclame Aqui', qtd: 1, pct: '2,6', keys: 'CE-24806' },
        ],
      },
    ],
  },
};
