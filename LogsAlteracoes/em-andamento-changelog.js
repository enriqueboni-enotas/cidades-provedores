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
          key: 'CE-26460',
          destaque: 'Falha na emissão de NFS-e para clientes sem endereço',
        },
        {
          key: 'CE-26331',
          destaque:
            'Ajuste no envio do campo "Valor aproximado dos tributos" para notas de exportação (Reclame Aqui)',
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
        { key: 'CE-26036', destaque: 'Correção de XML de notas do exterior' },
        {
          key: 'CE-25551',
          destaque: 'Emissão tomador exterior em Rio das Ostras/RJ',
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
        { key: 'CE-26295', destaque: 'Integração com Woocommerce' },
      ],
    },
    {
      status: 'Open',
      icon: '📋',
      itens: [
        {
          key: 'CE-26698',
          destaque: 'Registro de histórico de alterações no cadastro',
        },
        { key: 'CE-26691', destaque: 'Falha: limite de tentativas excedido' },
        { key: 'CE-26656', destaque: 'Ajuste de layout' },
        { key: 'CE-26654', destaque: 'Erro desconhecido em Barueri/SP' },
        { key: 'CE-26650', destaque: 'Localizar numerações' },
        {
          key: 'CE-26635',
          destaque: 'Erro emissão tomador exterior em Barueri/SP',
        },
        {
          key: 'CE-26601',
          destaque: 'Erro emissão tomador exterior em Mata de São João/BA',
        },
        {
          key: 'CE-26530',
          destaque: 'Vendas da Eduzz não estão entrando automaticamente',
        },
        {
          key: 'CE-26493',
          destaque: 'Integração Pagar.me 2.0 com duas chaves',
        },
        {
          key: 'CE-26404',
          destaque: 'Erro no ajuste do percentual aproximado de tributos',
        },
        { key: 'CE-26375', destaque: 'Falha na importação de venda Pagar.Me' },
        {
          key: 'CE-26357',
          destaque: 'Sincronização de NF de Produto da SEFAZ',
        },
        {
          key: 'CE-26237',
          destaque:
            'Atualização de certificado público vencido — Provedor Elotech',
        },
        {
          key: 'CE-25851',
          destaque: 'Emissão de notas exterior Portal Nacional',
        },
        {
          key: 'CE-25563',
          destaque: 'Melhoria nos campos PIS/COFINS — Portal Nacional',
        },
        { key: 'CE-25352', destaque: 'Relatório visão do contador' },
        {
          key: 'CE-25254',
          destaque: 'Erro emissão tomador exterior em Pato Branco/PR',
        },
      ],
    },
  ],
  compiladoSemanal: {
    periodo: '10/05 a 16/05/2026',
    totalTickets: 30,
    sincronizacao: 3,
    semAssignee: 0,
    reaberturas: 3,
    camadas: [
      {
        nome: 'GW',
        cor: '#F04E23',
        descricao: 'Gateway NFS-e/NF-e com prefeituras',
        total: 16,
        pct: '53,3',
        assuntos: [
          {
            assunto: 'Emissão exterior / Tomador estrangeiro',
            qtd: 7,
            pct: '23,3',
            keys: 'CE-26635,CE-26601,CE-26460,CE-26346,CE-26036,CE-25551,CE-25254',
          },
          {
            assunto: 'Fila travada / Layout municipal',
            qtd: 2,
            pct: '6,7',
            keys: 'CE-26607,CE-26656',
          },
          {
            assunto: 'Certificado público vencido (Elotech)',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26237',
          },
          {
            assunto: 'Erro desconhecido em Barueri/SP',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26654',
          },
          {
            assunto: 'Localizar numerações',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26650',
          },
          {
            assunto: 'Sincronização de NF de Produto da SEFAZ',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26357',
          },
          {
            assunto: 'Limite de tentativas excedido',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26691',
          },
          {
            assunto: 'Emissão exterior Portal Nacional',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-25851',
          },
          {
            assunto: 'Melhoria PIS/COFINS Portal Nacional',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-25563',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel/emissor, faturamento, integrações',
        total: 9,
        pct: '30,0',
        assuntos: [
          {
            assunto:
              'Integração com plataformas (Shopify, Woocommerce, Pagar.me, Eduzz)',
            qtd: 4,
            pct: '13,3',
            keys: 'CE-25222,CE-26295,CE-26493,CE-26530',
          },
          {
            assunto: 'Falha na importação de vendas',
            qtd: 2,
            pct: '6,7',
            keys: 'CE-26670,CE-26375',
          },
          {
            assunto: 'Relatório visão do contador',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-25352',
          },
          {
            assunto: 'Registro de histórico de alterações no cadastro',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26698',
          },
          {
            assunto: 'Sincronizar status embed',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26342',
          },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao: 'Tickets ambíguos — podem ser de qualquer camada',
        total: 5,
        pct: '16,7',
        assuntos: [
          {
            assunto: 'Tributos / Valor aproximado de tributos em exportação',
            qtd: 2,
            pct: '6,7',
            keys: 'CE-26331,CE-26404',
          },
          {
            assunto: 'Validação da data de competência (NFSe via API)',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26143',
          },
          {
            assunto: 'Ajuste NFS-e em São Paulo/SP',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-25831',
          },
          {
            assunto: 'Atualização de CTN removendo benefício municipal',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-25488',
          },
        ],
      },
    ],
  },
};
