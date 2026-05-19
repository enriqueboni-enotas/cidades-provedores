var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Under Analysis',
      icon: '🔍',
      itens: [
        { key: 'CE-26880', destaque: 'Regerar PDF de nota fiscal' },
        { key: 'CE-26763', destaque: 'Integração Shopify' },
        { key: 'CE-26756', destaque: 'Integração Shopify' },
        { key: 'CE-26731', destaque: 'Falha na criação de Boleto' },
        { key: 'CE-26654', destaque: 'Erro desconhecido em Barueri/SP' },
        {
          key: 'CE-26650',
          destaque: 'Problema com SARA Autofix para Localizar Numerações',
        },
        {
          key: 'CE-26530',
          destaque: 'Vendas da Eduzz não entrando automaticamente',
        },
        {
          key: 'CE-26331',
          destaque:
            'Ajuste no envio do valor aproximado de tributos para exportação',
        },
        {
          key: 'CE-26143',
          destaque:
            'Erro intermitente na validação da data de competência (NFSe via API)',
        },
        { key: 'CE-25222', destaque: 'Integração com a Shopify (Atualização)' },
      ],
    },
    {
      status: 'Reopened',
      icon: '🔄',
      itens: [
        { key: 'CE-26784', destaque: 'Erro desconhecido na emissão' },
        {
          key: 'CE-26781',
          destaque: 'Análise de vendas "não emitir" em Brasília/DF',
        },
        { key: 'CE-26036', destaque: 'Correção de XML de notas do Exterior' },
        { key: 'CE-25951', destaque: 'infAdFisco em Pinhais/PR' },
        {
          key: 'CE-25551',
          destaque: 'Emissão tomador exterior em Rio das Ostras/RJ',
        },
      ],
    },
    {
      status: 'Open',
      icon: '📋',
      itens: [
        { key: 'CE-26970', destaque: 'Fila parada SEFAZ BA' },
        { key: 'CE-26961', destaque: 'Adequação fiscal XML em Brasília/DF' },
        { key: 'CE-26934', destaque: 'Conta Plus anual com Layout de Start' },
        {
          key: 'CE-26893',
          destaque: 'Envio dos campos de evento em Barueri/SP',
        },
        { key: 'CE-26864', destaque: 'Tratativa de erro padrão em Socorro/SP' },
        {
          key: 'CE-26821',
          destaque: 'Erro integração com Eduzz em Curitiba/PR',
        },
        { key: 'CE-26803', destaque: 'Start — Falha na importação de vendas' },
        { key: 'CE-26793', destaque: 'Erro desconhecido emissão exterior' },
        {
          key: 'CE-26705',
          destaque: 'Inclusão de CST NFS-e em Caxias do Sul/RS',
        },
        {
          key: 'CE-26698',
          destaque: 'Registro de histórico de alterações no cadastro',
        },
        { key: 'CE-25851', destaque: 'Emissão notas exterior Portal Nacional' },
        {
          key: 'CE-25563',
          destaque: 'Melhoria nos campos PIS/COFINS para Portal Nacional',
        },
        { key: 'CE-25352', destaque: 'Relatório visão do contador' },
      ],
    },
    {
      status: 'Waiting N2',
      icon: '⏳',
      itens: [{ key: 'CE-26976', destaque: 'Erro no acesso eNotas' }],
    },
  ],
  compiladoSemanal: {
    periodo: '18/05 a 24/05/2026',
    totalTickets: 29,
    sincronizacao: 0,
    semAssignee: 0,
    reaberturas: 5,
    camadas: [
      {
        nome: 'GW',
        cor: '#F04E23',
        descricao: 'Gateway NFS-e/NF-e com prefeituras',
        total: 13,
        pct: '44,8',
        assuntos: [
          {
            assunto: 'Emissão exterior / Tomador estrangeiro',
            qtd: 5,
            pct: '17,2',
            keys: 'CE-26793,CE-26036,CE-25551,CE-25851,CE-26331',
          },
          {
            assunto: 'Adequação fiscal / Layout XML',
            qtd: 3,
            pct: '10,3',
            keys: 'CE-26961,CE-26893,CE-26705',
          },
          {
            assunto: 'Erro desconhecido / Fila parada',
            qtd: 3,
            pct: '10,3',
            keys: 'CE-26970,CE-26864,CE-26654',
          },
          {
            assunto: 'Erro desconhecido na emissão',
            qtd: 1,
            pct: '3,4',
            keys: 'CE-26784',
          },
          {
            assunto: 'Validação data de competência (API)',
            qtd: 1,
            pct: '3,4',
            keys: 'CE-26143',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel/Emissor (faturamento, integrações, configuração)',
        total: 12,
        pct: '41,4',
        assuntos: [
          {
            assunto: 'Integração Shopify',
            qtd: 3,
            pct: '10,3',
            keys: 'CE-26763,CE-26756,CE-25222',
          },
          {
            assunto: 'Importação de vendas (Eduzz/Start)',
            qtd: 2,
            pct: '6,9',
            keys: 'CE-26530,CE-26803',
          },
          {
            assunto: 'Financeiro / Faturamento / Plano',
            qtd: 2,
            pct: '6,9',
            keys: 'CE-26731,CE-26934',
          },
          {
            assunto: 'Análise de vendas / Não emitir',
            qtd: 1,
            pct: '3,4',
            keys: 'CE-26781',
          },
          { assunto: 'Integração Eduzz', qtd: 1, pct: '3,4', keys: 'CE-26821' },
          {
            assunto: 'Erro no acesso eNotas',
            qtd: 1,
            pct: '3,4',
            keys: 'CE-26976',
          },
          { assunto: 'Regerar PDF', qtd: 1, pct: '3,4', keys: 'CE-26880' },
          {
            assunto: 'Relatório visão do contador',
            qtd: 1,
            pct: '3,4',
            keys: 'CE-25352',
          },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao: 'Tickets ambíguos (podem ser de qualquer camada)',
        total: 3,
        pct: '10,3',
        assuntos: [
          {
            assunto: 'Melhoria campos PIS/COFINS Portal Nacional',
            qtd: 1,
            pct: '3,4',
            keys: 'CE-25563',
          },
          {
            assunto: 'infAdFisco em Pinhais/PR',
            qtd: 1,
            pct: '3,4',
            keys: 'CE-25951',
          },
          {
            assunto: 'Autofix Localizar Numerações',
            qtd: 1,
            pct: '3,4',
            keys: 'CE-26650',
          },
        ],
      },
      {
        nome: 'Outros',
        cor: '#C8C5BC',
        descricao: 'Melhorias, integrações, bugs visuais',
        total: 1,
        pct: '3,4',
        assuntos: [
          {
            assunto: 'Registro de histórico de alterações no cadastro',
            qtd: 1,
            pct: '3,4',
            keys: 'CE-26698',
          },
        ],
      },
    ],
  },
};
