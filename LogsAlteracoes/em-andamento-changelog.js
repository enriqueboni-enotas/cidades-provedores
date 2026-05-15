var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Under Analysis',
      icon: '🔍',
      itens: [
        { key: 'CE-26731', destaque: 'Falha na criação de boleto' },
        {
          key: 'CE-26650',
          destaque: 'Problema com SARA Autofix para localizar numerações',
        },
        {
          key: 'CE-26346',
          destaque: 'Erro em nota de afiliado em Belo Horizonte/MG',
        },
        {
          key: 'CE-26331',
          destaque:
            'Ajuste no envio do campo valor aproximado dos tributos para notas de exportação',
        },
        {
          key: 'CE-26143',
          destaque:
            'Erro intermitente na validação da data de competência (NFSe via API)',
        },
        {
          key: 'CE-25488',
          destaque: 'Atualização de CTN removendo benefício municipal',
        },
        {
          key: 'CE-25254',
          destaque: 'Erro emissão tomador exterior em Pato Branco/PR',
        },
        { key: 'CE-25222', destaque: 'Integração com a Shopify (atualização)' },
      ],
    },
    {
      status: 'Waiting N2',
      icon: '⏳',
      itens: [
        { key: 'CE-26342', destaque: 'Emissor — sincronizar status embed' },
      ],
    },
    {
      status: 'Reopened',
      icon: '🔄',
      itens: [
        { key: 'CE-26656', destaque: 'Ajuste de layout em Barueri/SP' },
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
        { key: 'CE-26864', destaque: 'Tratativa de erro padrão em Socorro/SP' },
        { key: 'CE-26829', destaque: 'Nota emitida com informação incorreta' },
        {
          key: 'CE-26821',
          destaque: 'Erro integração com Eduzz em Curitiba/PR',
        },
        { key: 'CE-26803', destaque: 'Falha na importação de vendas' },
        {
          key: 'CE-26796',
          destaque: 'Cliente não consegue finalizar criação de conta',
        },
        { key: 'CE-26793', destaque: 'Erro desconhecido emissão exterior' },
        {
          key: 'CE-26781',
          destaque: 'Análise de vendas "não emitir" em Brasília/DF',
        },
        { key: 'CE-26763', destaque: 'Integração Shopify' },
        { key: 'CE-26756', destaque: 'Integração Shopify' },
        { key: 'CE-26749', destaque: 'Erro na aplicação do endereço padrão' },
        {
          key: 'CE-26705',
          destaque: 'Inclusão de CST — NFS-e em Caxias do Sul/RS',
        },
        {
          key: 'CE-26698',
          destaque: 'Registro de histórico de alterações no cadastro',
        },
        { key: 'CE-26654', destaque: 'Erro desconhecido em Barueri/SP' },
        {
          key: 'CE-26530',
          destaque: 'Vendas da Eduzz não estão entrando automaticamente',
        },
        {
          key: 'CE-25851',
          destaque: 'Emissão de notas exterior Portal Nacional',
        },
        {
          key: 'CE-25563',
          destaque: 'Melhoria nos campos PIS/COFINS conforme portal nacional',
        },
        { key: 'CE-25352', destaque: 'Relatório visão do contador' },
      ],
    },
  ],
  compiladoSemanal: {
    periodo: '11/05 a 17/05/2026',
    totalTickets: 28,
    sincronizacao: 2,
    semAssignee: 0,
    reaberturas: 2,
    camadas: [
      {
        nome: 'GW',
        cor: '#F04E23',
        descricao: 'Gateway NFS-e/NF-e com prefeituras',
        total: 13,
        pct: '46,4',
        assuntos: [
          {
            assunto: 'Emissão exterior / Tomador estrangeiro',
            qtd: 5,
            pct: '17,9',
            keys: 'CE-25551,CE-25254,CE-26793,CE-25851,CE-26331',
          },
          {
            assunto: 'Erro desconhecido / Tratativa de erro padrão',
            qtd: 3,
            pct: '10,7',
            keys: 'CE-26864,CE-26654,CE-26346',
          },
          {
            assunto: 'Ajuste de layout / Adequação fiscal',
            qtd: 2,
            pct: '7,1',
            keys: 'CE-26656,CE-26705',
          },
          {
            assunto: 'Validação de data de competência / CTN',
            qtd: 2,
            pct: '7,1',
            keys: 'CE-26143,CE-25488',
          },
          {
            assunto: 'Melhoria nos campos PIS/COFINS',
            qtd: 1,
            pct: '3,6',
            keys: 'CE-25563',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel/emissor, integrações e faturamento',
        total: 14,
        pct: '50,0',
        assuntos: [
          {
            assunto: 'Integração Shopify / Eduzz / Woocommerce',
            qtd: 5,
            pct: '17,9',
            keys: 'CE-26821,CE-26763,CE-26756,CE-26530,CE-25222',
          },
          {
            assunto: 'Importação de vendas / Vendas não emitir',
            qtd: 3,
            pct: '10,7',
            keys: 'CE-26803,CE-26781,CE-26731',
          },
          {
            assunto: 'Cadastro / Endereço / Histórico',
            qtd: 3,
            pct: '10,7',
            keys: 'CE-26796,CE-26749,CE-26698',
          },
          {
            assunto: 'Nota emitida com informação incorreta',
            qtd: 1,
            pct: '3,6',
            keys: 'CE-26829',
          },
          {
            assunto: 'Relatório visão do contador',
            qtd: 1,
            pct: '3,6',
            keys: 'CE-25352',
          },
          {
            assunto: 'Sincronizar status embed',
            qtd: 1,
            pct: '3,6',
            keys: 'CE-26342',
          },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao: 'Tickets ambíguos entre gateway e emissor',
        total: 1,
        pct: '3,6',
        assuntos: [
          {
            assunto: 'Problema com SARA Autofix para localizar numerações',
            qtd: 1,
            pct: '3,6',
            keys: 'CE-26650',
          },
        ],
      },
    ],
  },
};
