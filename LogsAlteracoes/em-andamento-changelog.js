var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Under Analysis',
      icon: '🔍',
      itens: [
        { key: 'CE-26553', destaque: 'Autofix — localizar numerações' },
        { key: 'CE-26536', destaque: 'Ajuste de layout — Limeira/SP' },
        { key: 'CE-26356', destaque: 'Adequação de layout — Limeira/SP' },
        { key: 'CE-26217', destaque: 'Tratamento de erro não aplicado' },
        { key: 'CE-25831', destaque: 'Ajuste NFS-e — São Paulo/SP' },
        {
          key: 'CE-25664',
          destaque:
            'Notas negadas: cPaisResult quando informado cPaisPrestacao',
        },
        {
          key: 'CE-25488',
          destaque: 'Atualização de CTN removendo benefício municipal',
        },
        { key: 'CE-25222', destaque: 'Integração com a Shopify (Atualização)' },
        { key: 'CE-24175', destaque: 'Pesquisa de vendas' },
      ],
    },
    {
      status: 'Waiting N2',
      icon: '⏳',
      itens: [
        { key: 'CE-26512', destaque: 'Atualização layout PDF — Cuiabá/MT' },
        { key: 'CE-26342', destaque: 'Emissor — sincronizar status embed' },
      ],
    },
    {
      status: 'Reopened',
      icon: '🔄',
      itens: [
        {
          key: 'CE-26346',
          destaque: 'Erro em nota de afiliado — Belo Horizonte/MG',
        },
        {
          key: 'CE-26331',
          destaque:
            'Ajuste no envio do campo valor aproximado de tributos para exportação',
        },
        { key: 'CE-26036', destaque: 'Correção de XML de notas do exterior' },
        {
          key: 'CE-25551',
          destaque: 'Emissão tomador exterior — Rio das Ostras/RJ',
        },
      ],
    },
    {
      status: 'Open',
      icon: '📋',
      itens: [
        { key: 'CE-26587', destaque: 'Erro desconhecido — Barueri/SP' },
        { key: 'CE-26576', destaque: 'Sincronização — Marília/SP' },
        { key: 'CE-26563', destaque: 'Financeiro / Faturamento' },
        {
          key: 'CE-26558',
          destaque:
            'Inconsistência na natureza de operação de vendas internacionais',
        },
        {
          key: 'CE-26551',
          destaque:
            'Tamanho do registro diferente da especificação do layout — Barueri/SP',
        },
        { key: 'CE-26546', destaque: 'Fila travada — São Paulo/SP' },
        { key: 'CE-26540', destaque: 'Adequação fiscal — Barueri/SP' },
        {
          key: 'CE-26530',
          destaque: 'Vendas da Eduzz não entram automaticamente',
        },
        { key: 'CE-26519', destaque: 'Adequação fiscal — Barueri/SP' },
        { key: 'CE-26517', destaque: 'Adequação fiscal' },
        { key: 'CE-26513', destaque: 'Adequação fiscal — Barueri/SP' },
        { key: 'CE-26507', destaque: 'Adequação fiscal — Barueri/SP' },
        { key: 'CE-26503', destaque: 'Faturas de excedentes indevidas' },
        { key: 'CE-26502', destaque: 'Adequação fiscal — Barueri/SP' },
        { key: 'CE-26496', destaque: 'Adequação fiscal — Barueri/SP' },
        {
          key: 'CE-26493',
          destaque: 'Integração Pagar.me 2.0 com duas chaves',
        },
        { key: 'CE-26477', destaque: 'Inclusão de logo' },
        { key: 'CE-26461', destaque: 'Análise de fatura de excedentes' },
        {
          key: 'CE-26460',
          destaque: 'Falha na emissão de NFS-e para clientes sem endereço',
        },
        { key: 'CE-26431', destaque: 'Inclusão de NBS' },
        { key: 'CE-26427', destaque: 'Notas para clientes exterior' },
        { key: 'CE-26426', destaque: 'Inclusão de NBS' },
        {
          key: 'CE-26404',
          destaque: 'Erro no ajuste do percentual aproximado de tributos',
        },
        { key: 'CE-26375', destaque: 'Falha na importação de venda Pagar.Me' },
        {
          key: 'CE-26357',
          destaque: 'Sincronização de NF de Produto da SEFAZ',
        },
        { key: 'CE-26295', destaque: 'Integração com a Woocommerce' },
        {
          key: 'CE-26237',
          destaque:
            'Atualização de certificado público vencido — Provedor Elotech',
        },
        {
          key: 'CE-26143',
          destaque:
            'Erro intermitente na validação da data de competência (NFSe via API)',
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
          destaque: 'Erro emissão tomador exterior — Pato Branco/PR',
        },
      ],
    },
  ],
  compiladoSemanal: {
    periodo: '04/05 a 10/05/2026',
    totalTickets: 47,
    sincronizacao: 3,
    semAssignee: 0,
    reaberturas: 4,
    camadas: [
      {
        nome: 'GW',
        cor: '#F04E23',
        descricao: 'Gateway NFS-e/NF-e com prefeituras',
        total: 20,
        pct: '42,6',
        assuntos: [
          {
            assunto: 'Adequação fiscal / layout XML — Barueri/SP',
            qtd: 8,
            pct: '17,0',
            keys: 'CE-26540,CE-26519,CE-26513,CE-26507,CE-26502,CE-26496,CE-26517,CE-26551',
          },
          {
            assunto: 'Emissão tomador exterior / Notas exportação',
            qtd: 5,
            pct: '10,6',
            keys: 'CE-26558,CE-26427,CE-25851,CE-25551,CE-25254',
          },
          {
            assunto: 'Ajuste de layout municipal',
            qtd: 3,
            pct: '6,4',
            keys: 'CE-26536,CE-26356,CE-25831',
          },
          {
            assunto: 'Certificado público vencido — Elotech',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-26237',
          },
          {
            assunto: 'Fila travada — São Paulo/SP',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-26546',
          },
          {
            assunto: 'Sincronização NF Produto SEFAZ',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-26357',
          },
          {
            assunto: 'Tributos — valor aproximado / IBS / CBS',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-26404',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel/Emissor (faturamento, importação, configuração)',
        total: 15,
        pct: '31,9',
        assuntos: [
          {
            assunto: 'Financeiro / Faturas de excedentes',
            qtd: 4,
            pct: '8,5',
            keys: 'CE-26563,CE-26503,CE-26461,CE-26375',
          },
          {
            assunto: 'Importação de vendas (Eduzz, Pagar.Me, Woocommerce)',
            qtd: 4,
            pct: '8,5',
            keys: 'CE-26530,CE-26493,CE-26295,CE-26375',
          },
          {
            assunto: 'Inclusão de NBS / Logo / Configuração',
            qtd: 3,
            pct: '6,4',
            keys: 'CE-26431,CE-26426,CE-26477',
          },
          {
            assunto: 'Pesquisa de vendas / Relatórios',
            qtd: 2,
            pct: '4,3',
            keys: 'CE-24175,CE-25352',
          },
          {
            assunto: 'Sincronização status embed',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-26342',
          },
          {
            assunto: 'Atualização layout PDF — Cuiabá/MT',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-26512',
          },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao: 'Tickets ambíguos (erros de emissão genéricos, validação)',
        total: 8,
        pct: '17,0',
        assuntos: [
          {
            assunto: 'Erro em nota de afiliado / Nota negada',
            qtd: 2,
            pct: '4,3',
            keys: 'CE-26346,CE-26331',
          },
          {
            assunto: 'Falha emissão NFS-e sem endereço',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-26460',
          },
          {
            assunto: 'Erro desconhecido — Barueri/SP',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-26587',
          },
          {
            assunto: 'Sincronização — Marília/SP',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-26576',
          },
          {
            assunto: 'Erro intermitente validação data competência',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-26143',
          },
          {
            assunto: 'Tratamento de erro não aplicado',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-26217',
          },
          {
            assunto: 'Notas negadas: cPaisResult',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-25664',
          },
        ],
      },
      {
        nome: 'Outros',
        cor: '#C8C5BC',
        descricao: 'Melhorias, integrações, CTN',
        total: 4,
        pct: '8,5',
        assuntos: [
          {
            assunto: 'Integração Shopify (Atualização)',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-25222',
          },
          {
            assunto: 'Melhoria campos PIS/COFINS — Portal Nacional',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-25563',
          },
          {
            assunto: 'Atualização CTN removendo benefício municipal',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-25488',
          },
          {
            assunto: 'Autofix — localizar numerações',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-26553',
          },
        ],
      },
    ],
  },
};
