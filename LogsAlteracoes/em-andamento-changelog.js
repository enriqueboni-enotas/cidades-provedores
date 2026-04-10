var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Under Analysis',
      icon: '🔍',
      itens: [
        { key: 'CE-25450', destaque: 'Faturamento de excedentes indevido' },
        { key: 'CE-25447', destaque: 'Bug notas de eventos' },
        { key: 'CE-25231', destaque: 'Painel para SMU' },
        { key: 'CE-25212', destaque: 'Vendas não são importadas' },
        { key: 'CE-24852', destaque: 'Erro no webhook de cancelamento' },
        { key: 'CE-24806', destaque: 'Reclame Aqui — reclamação de cliente' },
        {
          key: 'CE-24387',
          destaque: 'Envio do campo tpOper para NFS-e — São Paulo/SP',
        },
        { key: 'CE-24175', destaque: 'Pesquisa de vendas' },
      ],
    },
    {
      status: 'Reopened',
      icon: '🔄',
      itens: [
        { key: 'CE-25137', destaque: 'Envio do campo CSRT — SEFAZ PR' },
        { key: 'CE-25015', destaque: 'Vendas Pagar.me 2.0' },
        { key: 'CE-23878', destaque: 'Descrição código de tributação' },
      ],
    },
    {
      status: 'Open',
      icon: '📋',
      itens: [
        {
          key: 'CE-25596',
          destaque: 'Alterar painel para SMU — Araraquara/SP',
        },
        {
          key: 'CE-25591',
          destaque: 'Campo CNAE não disponível no cadastro da empresa',
        },
        { key: 'CE-25566', destaque: 'Integração com Woocommerce' },
        {
          key: 'CE-25563',
          destaque: 'Melhoria nos campos PIS/COFINS — portal nacional',
        },
        { key: 'CE-25560', destaque: 'Análise de vendas de coprodução' },
        { key: 'CE-25559', destaque: 'Correção de notas' },
        {
          key: 'CE-25552',
          destaque: 'Notas travadas na fila de emissão — São Paulo/SP',
        },
        {
          key: 'CE-25551',
          destaque: 'Emissão tomador exterior — Rio das Ostras/RJ',
        },
        { key: 'CE-25525', destaque: 'Destaque código BC ISSQN' },
        { key: 'CE-25516', destaque: 'Bug visual' },
        {
          key: 'CE-25514',
          destaque: 'Instabilidade no painel e ajuste de SMU',
        },
        { key: 'CE-25509', destaque: 'Ajuste de layout — Itaperuna/RJ' },
        { key: 'CE-25508', destaque: 'Erro na emissão de nota' },
        {
          key: 'CE-25494',
          destaque: 'Ajuste emissão tomador exterior — Ibirubá/RS',
        },
        {
          key: 'CE-25488',
          destaque: 'Atualização de CTN removendo benefício municipal',
        },
        { key: 'CE-25446', destaque: 'Alteração de layout da nota fiscal 2.0' },
        { key: 'CE-25421', destaque: 'Sincronização NFS-e' },
        { key: 'CE-25383', destaque: 'Campo código interno do contribuinte' },
        { key: 'CE-25352', destaque: 'Relatório visão do contador' },
        { key: 'CE-25350', destaque: 'Faturamento de excedentes indevido' },
        { key: 'CE-25348', destaque: 'Faturamento de excedentes indevido' },
        {
          key: 'CE-25337',
          destaque: 'Alteração de layout da nota fiscal 2.0 — São Paulo/SP',
        },
        {
          key: 'CE-25336',
          destaque: 'Cobrança de excedentes indevida (financeiro)',
        },
        { key: 'CE-25323', destaque: 'Faturamento excedentes indevido' },
        {
          key: 'CE-25283',
          destaque: 'Atualização sistema de notas — Socorro/SP',
        },
        {
          key: 'CE-25263',
          destaque: 'Emissão de notas exterior — portal nacional',
        },
        {
          key: 'CE-25254',
          destaque: 'Erro emissão tomador exterior — Pato Branco/PR',
        },
        { key: 'CE-25229', destaque: 'Atualização layout XML — Cotia/SP' },
        { key: 'CE-25222', destaque: 'Integração com a Shopify (atualização)' },
        { key: 'CE-25221', destaque: 'Sincronização de notas' },
        { key: 'CE-25219', destaque: 'Município de prestação como Exterior' },
        { key: 'CE-25218', destaque: 'Atualização de município' },
        {
          key: 'CE-25195',
          destaque: 'NF-e não apresenta informações complementares',
        },
        {
          key: 'CE-25193',
          destaque: 'Prefeitura exige campo Regime de Apuração Tributária',
        },
        { key: 'CE-25188', destaque: 'Erro na emissão — Sapiranga/RS' },
        {
          key: 'CE-25163',
          destaque: 'Melhoria: campo para preenchimento de IE para PF',
        },
        {
          key: 'CE-25112',
          destaque:
            'Ajuste nome do município do tomador no XML — Caxias do Sul/RS',
        },
        { key: 'CE-25106', destaque: 'Fixar município de prestação 9999999' },
        { key: 'CE-24229', destaque: 'Sincronizar notas' },
      ],
    },
  ],
  compiladoSemanal: {
    periodo: '05/04 a 11/04/2026',
    totalTickets: 50,
    sincronizacao: 2,
    semAssignee: 37,
    reaberturas: 3,
    camadas: [
      {
        nome: 'GW',
        cor: '#F04E23',
        descricao: 'Gateway NFS-e/NF-e com prefeituras',
        total: 16,
        pct: '32,0',
        assuntos: [
          {
            assunto: 'Emissão exterior / Tomador estrangeiro',
            qtd: 6,
            pct: '12,0',
            keys: 'CE-25551,CE-25494,CE-25263,CE-25254,CE-25219,CE-25106',
          },
          {
            assunto: 'Ajuste de XML / Layout de prefeitura',
            qtd: 5,
            pct: '10,0',
            keys: 'CE-25509,CE-25446,CE-25337,CE-25229,CE-25112',
          },
          {
            assunto: 'Sincronização de notas — Manual',
            qtd: 3,
            pct: '6,0',
            keys: 'CE-25421,CE-25221,CE-24229',
          },
          {
            assunto: 'Configuração municipal / CTN / Tributos',
            qtd: 2,
            pct: '4,0',
            keys: 'CE-25488,CE-25193',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel, importação, configuração, faturamento',
        total: 17,
        pct: '34,0',
        assuntos: [
          {
            assunto: 'Faturamento / Excedentes indevidos',
            qtd: 6,
            pct: '12,0',
            keys: 'CE-25450,CE-25350,CE-25348,CE-25336,CE-25323,CE-24806',
          },
          {
            assunto: 'Configuração / Dados municipais / Tributos',
            qtd: 4,
            pct: '8,0',
            keys: 'CE-25591,CE-25563,CE-25525,CE-25383',
          },
          {
            assunto: 'Importação de vendas / Integração',
            qtd: 3,
            pct: '6,0',
            keys: 'CE-25566,CE-25560,CE-25212',
          },
          {
            assunto: 'Painel / SMU / Relatórios',
            qtd: 4,
            pct: '8,0',
            keys: 'CE-25596,CE-25514,CE-25352,CE-25231',
          },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao: 'Ambíguo — depende do caso',
        total: 11,
        pct: '22,0',
        assuntos: [
          {
            assunto: 'Erro / Falha na emissão de notas',
            qtd: 5,
            pct: '10,0',
            keys: 'CE-25559,CE-25552,CE-25508,CE-25188,CE-24852',
          },
          {
            assunto: 'CSRT / NF-e produto / Vendas Pagar.me',
            qtd: 3,
            pct: '6,0',
            keys: 'CE-25447,CE-25137,CE-25015',
          },
          {
            assunto: 'Atualização de município / Sistema',
            qtd: 3,
            pct: '6,0',
            keys: 'CE-25283,CE-25218,CE-24387',
          },
        ],
      },
      {
        nome: 'Outros',
        cor: '#C8C5BC',
        descricao: 'Melhoria IE, Shopify, PDF, pesquisa vendas',
        total: 6,
        pct: '12,0',
        assuntos: [
          {
            assunto:
              'Outros (melhoria IE, Shopify, bug visual, pesquisa vendas, NF-e complementar)',
            qtd: 6,
            pct: '12,0',
            keys: 'CE-25516,CE-25222,CE-25195,CE-25163,CE-24175,CE-23878',
          },
        ],
      },
    ],
  },
};
