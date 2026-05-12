var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Under Analysis',
      icon: '🔍',
      itens: [
        {
          key: 'CE-26670',
          destaque: 'Falha no fluxo de importação de vendas (Start)',
        },
        {
          key: 'CE-26493',
          destaque: 'Integração Pagar.me 2.0 com duas chaves',
        },
        {
          key: 'CE-26460',
          destaque: 'Falha na emissão de NFS-e para clientes sem endereço',
        },
        {
          key: 'CE-26404',
          destaque: 'Erro no ajuste do percentual aproximado de tributos',
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
        { key: 'CE-25831', destaque: 'Ajuste NFS-e em São Paulo/SP' },
        {
          key: 'CE-25488',
          destaque: 'Atualização de CTN removendo benefício municipal',
        },
        { key: 'CE-25222', destaque: 'Integração com a Shopify (Atualização)' },
      ],
    },
    {
      status: 'Reopened',
      icon: '🔄',
      itens: [
        {
          key: 'CE-26346',
          destaque: 'Erro em nota de afiliado em Belo Horizonte/MG',
        },
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
        { key: 'CE-26722', destaque: 'Natureza de operação' },
        {
          key: 'CE-26705',
          destaque: 'Inclusão de CST na NFS-e em Caxias do Sul/RS',
        },
        {
          key: 'CE-26698',
          destaque: 'Registro de histórico de alterações no cadastro',
        },
        { key: 'CE-26691', destaque: 'Falha — limite de tentativas excedido' },
        { key: 'CE-26656', destaque: 'Ajuste de layout' },
        { key: 'CE-26654', destaque: 'Erro desconhecido em Barueri/SP' },
        {
          key: 'CE-26650',
          destaque: 'Problema com SARA Autofix para localizar numerações',
        },
        {
          key: 'CE-26635',
          destaque: 'Erro emissão tomador exterior em Barueri/SP',
        },
        {
          key: 'CE-26530',
          destaque: 'Vendas da Eduzz não entram automaticamente',
        },
        { key: 'CE-26375', destaque: 'Falha na importação de venda Pagar.Me' },
        {
          key: 'CE-26357',
          destaque: 'Sincronização de NF de Produto da SEFAZ',
        },
        {
          key: 'CE-25851',
          destaque: 'Emissão de notas exterior — Portal Nacional',
        },
        {
          key: 'CE-25563',
          destaque: 'Melhoria nos campos PIS/COFINS para Portal Nacional',
        },
        {
          key: 'CE-25352',
          destaque: 'Relatório visão do contador em Caxias do Sul/RS',
        },
        {
          key: 'CE-25254',
          destaque: 'Erro emissão tomador exterior em Pato Branco/PR',
        },
      ],
    },
    {
      status: 'Waiting N2',
      icon: '⏳',
      itens: [
        {
          key: 'CE-26607',
          destaque: 'Fila travada (Portal Nacional) em Mateiros/TO',
        },
        { key: 'CE-26342', destaque: 'Emissor — sincronizar status embed' },
        { key: 'CE-26295', destaque: 'Integração com a Woocommerce' },
        { key: 'CE-26036', destaque: 'Correção de XML de notas do exterior' },
      ],
    },
  ],
  compiladoSemanal: {
    periodo: '11/05 a 17/05/2026',
    totalTickets: 30,
    sincronizacao: 3,
    semAssignee: 0,
    reaberturas: 2,
    camadas: [
      {
        nome: 'GW',
        cor: '#F04E23',
        descricao: 'Gateway NFS-e/NF-e com prefeituras',
        total: 16,
        pct: '53,3',
        assuntos: [
          {
            assunto: 'Emissão tomador exterior',
            qtd: 5,
            pct: '16,7',
            keys: 'CE-25551,CE-26635,CE-25851,CE-25254,CE-26036',
          },
          {
            assunto: 'Adequação fiscal / Tributos (IBS, CBS, PIS, COFINS)',
            qtd: 4,
            pct: '13,3',
            keys: 'CE-26705,CE-26404,CE-26331,CE-25563',
          },
          {
            assunto: 'Fila travada / Erro de emissão',
            qtd: 3,
            pct: '10,0',
            keys: 'CE-26654,CE-26691,CE-26607',
          },
          {
            assunto: 'Sincronização de notas / Status',
            qtd: 2,
            pct: '6,7',
            keys: 'CE-26357,CE-26342',
          },
          {
            assunto: 'Validação de data de competência',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26143',
          },
          {
            assunto: 'Ajuste NFS-e / CTN / Layout municipal',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-25488',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel/emissor (faturamento, importação, relatórios)',
        total: 9,
        pct: '30,0',
        assuntos: [
          {
            assunto:
              'Importação de vendas (Eduzz, Pagar.Me, Shopify, Woocommerce)',
            qtd: 5,
            pct: '16,7',
            keys: 'CE-26530,CE-26375,CE-26670,CE-25222,CE-26295',
          },
          {
            assunto: 'Relatório / Histórico / Cadastro',
            qtd: 2,
            pct: '6,7',
            keys: 'CE-26698,CE-25352',
          },
          {
            assunto: 'Natureza de operação / Configuração',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26722',
          },
          {
            assunto: 'Integração Pagar.me 2.0 com duas chaves',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26493',
          },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao: 'Tickets ambíguos (erros genéricos, layout, autofix)',
        total: 5,
        pct: '16,7',
        assuntos: [
          {
            assunto: 'Ajuste de layout de nota',
            qtd: 2,
            pct: '6,7',
            keys: 'CE-26656,CE-25831',
          },
          {
            assunto: 'Autofix / SARA — localizar numerações',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26650',
          },
          {
            assunto: 'Erro em nota de afiliado',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26346',
          },
          {
            assunto: 'Falha na emissão para clientes sem endereço',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26460',
          },
        ],
      },
    ],
  },
};
