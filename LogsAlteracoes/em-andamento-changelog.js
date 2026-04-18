var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Under Analysis',
      icon: '🔍',
      itens: [
        { key: 'CE-25841', destaque: 'Autofix — localizar numerações' },
        { key: 'CE-25822', destaque: 'Autofix — inutilização de NF' },
        { key: 'CE-25821', destaque: 'Autofix — localizar numerações' },
        { key: 'CE-25776', destaque: 'Sincronização de nota' },
        { key: 'CE-25769', destaque: 'Bug certificado digital' },
        { key: 'CE-25750', destaque: 'Faturamento indevido de excedentes' },
        { key: 'CE-25738', destaque: 'Problema de acesso ao painel eNotas' },
        {
          key: 'CE-25664',
          destaque:
            'Notas negadas — cPaisResult quando informado cPaisPrestacao',
        },
        { key: 'CE-25663', destaque: 'Erro ao emitir nota para o exterior' },
        { key: 'CE-25662', destaque: 'Erro na emissão de notas — Dumont/SP' },
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
        {
          key: 'CE-25263',
          destaque: 'Emissão de notas exterior — Portal Nacional',
        },
        { key: 'CE-25222', destaque: 'Integração com a Shopify (atualização)' },
        { key: 'CE-24806', destaque: 'Reclamação no Reclame Aqui' },
        { key: 'CE-24175', destaque: 'Pesquisa de vendas' },
      ],
    },
    {
      status: 'Reopened',
      icon: '🔄',
      itens: [
        {
          key: 'CE-23131',
          destaque: 'Notas fiscais sendo emitidas incorretamente',
        },
      ],
    },
    {
      status: 'Open',
      icon: '📋',
      itens: [
        { key: 'CE-25839', destaque: 'Falha no envio do endereço padrão' },
        { key: 'CE-25831', destaque: 'Ajuste NFS-e — São Paulo/SP' },
        { key: 'CE-25823', destaque: 'Validação de vendas Pagar.me 2.0' },
        { key: 'CE-25807', destaque: 'Faturamento de excedentes indevido' },
        { key: 'CE-25775', destaque: 'Análise de vendas canceladas Hotmart' },
        { key: 'CE-25768', destaque: 'Falha na integração — Kobana' },
        { key: 'CE-25760', destaque: 'Parametrização para emissão' },
        { key: 'CE-25683', destaque: 'Faturamento indevido de excedentes' },
        { key: 'CE-25621', destaque: 'Análise de coprodução' },
        { key: 'CE-25566', destaque: 'Problema na integração com WooCommerce' },
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
            'Prefeitura exige campo Regime de Apuração Tributária do SN',
        },
        {
          key: 'CE-25163',
          destaque: 'Melhoria — campo para preenchimento de IE para PF',
        },
      ],
    },
    {
      status: 'Waiting Partner',
      icon: '⏳',
      itens: [
        {
          key: 'CE-25551',
          destaque: 'Emissão tomador exterior — Rio das Ostras/RJ',
        },
      ],
    },
  ],
  compiladoSemanal: {
    periodo: '12/04 a 18/04/2026',
    totalTickets: 40,
    sincronizacao: 2,
    semAssignee: 5,
    reaberturas: 1,
    camadas: [
      {
        nome: 'GW',
        cor: '#F04E23',
        descricao: 'Gateway NFS-e/NF-e com prefeituras',
        total: 20,
        pct: '50,0',
        assuntos: [
          {
            assunto: 'Emissão exterior / Tomador estrangeiro',
            qtd: 4,
            pct: '10,0',
            keys: 'CE-25664,CE-25663,CE-25263,CE-25254',
          },
          {
            assunto: 'Autofix (localizar numerações, inutilização)',
            qtd: 3,
            pct: '7,5',
            keys: 'CE-25841,CE-25822,CE-25821',
          },
          {
            assunto: 'Atualização de layout/XML municipal',
            qtd: 3,
            pct: '7,5',
            keys: 'CE-25831,CE-25337,CE-25229',
          },
          {
            assunto: 'Configuração municipal (CTN, ISSQN, código contribuinte)',
            qtd: 3,
            pct: '7,5',
            keys: 'CE-25525,CE-25488,CE-25383',
          },
          {
            assunto: 'Atualização de município / sistema de notas',
            qtd: 3,
            pct: '7,5',
            keys: 'CE-25283,CE-25218,CE-25193',
          },
          {
            assunto: 'Sincronização de notas',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-25776',
          },
          {
            assunto: 'Melhoria PIS/COFINS Portal Nacional',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-25563',
          },
          {
            assunto: 'Falha envio endereço padrão',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-25839',
          },
          {
            assunto: 'Notas emitidas incorretamente (reaberto)',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-23131',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel/emissor, faturamento, integrações, relatórios',
        total: 14,
        pct: '35,0',
        assuntos: [
          {
            assunto: 'Faturamento de excedentes indevido',
            qtd: 3,
            pct: '7,5',
            keys: 'CE-25807,CE-25750,CE-25683',
          },
          {
            assunto: 'Integrações (Shopify, WooCommerce, Kobana, Pagar.me)',
            qtd: 4,
            pct: '10,0',
            keys: 'CE-25823,CE-25768,CE-25566,CE-25222',
          },
          {
            assunto: 'Painel / SMU / acesso',
            qtd: 2,
            pct: '5,0',
            keys: 'CE-25738,CE-25652',
          },
          {
            assunto:
              'Vendas e relatórios (canceladas, visão contador, pesquisa)',
            qtd: 3,
            pct: '7,5',
            keys: 'CE-25775,CE-25352,CE-24175',
          },
          {
            assunto: 'Observações na venda / coprodução',
            qtd: 2,
            pct: '5,0',
            keys: 'CE-25647,CE-25621',
          },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao: 'Tickets ambíguos entre gateway e emissor',
        total: 4,
        pct: '10,0',
        assuntos: [
          {
            assunto: 'Bug certificado digital',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-25769',
          },
          {
            assunto: 'Parametrização para emissão',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-25760',
          },
          {
            assunto: 'Melhoria campo IE para PF',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-25163',
          },
          {
            assunto:
              'Emissão exterior — Rio das Ostras/RJ (aguardando parceiro)',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-25551',
          },
        ],
      },
      {
        nome: 'Outros',
        cor: '#C8C5BC',
        descricao: 'Melhorias, integrações, bugs visuais',
        total: 2,
        pct: '5,0',
        assuntos: [
          {
            assunto: 'Reclame Aqui',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-24806',
          },
          {
            assunto: 'Erro emissão Dumont/SP',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-25662',
          },
        ],
      },
    ],
  },
};
