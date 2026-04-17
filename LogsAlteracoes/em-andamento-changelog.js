var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Under Analysis',
      icon: '🔍',
      itens: [
        { key: 'CE-25776', destaque: 'Sincronização de nota' },
        { key: 'CE-25769', destaque: 'Bug certificado digital' },
        { key: 'CE-25750', destaque: 'Faturamento indevido de excedentes' },
        { key: 'CE-25738', destaque: 'Problema de acesso ao painel eNotas' },
        {
          key: 'CE-25728',
          destaque: 'Envio de IBS e CBS na emissão — Cotia/SP',
        },
        {
          key: 'CE-25664',
          destaque:
            'Notas negadas: cPaisResult quando informado cPaisPrestacao',
        },
        { key: 'CE-25663', destaque: 'Erro ao emitir nota para o exterior' },
        { key: 'CE-25662', destaque: 'Erro na emissão — Dumont/SP' },
        {
          key: 'CE-25652',
          destaque: 'Instabilidade no painel e ajuste de SMU',
        },
        { key: 'CE-25647', destaque: 'Observações na venda' },
        { key: 'CE-25634', destaque: 'Habilitar campo CNAE na empresa' },
        {
          key: 'CE-25596',
          destaque: 'Alterar painel para SMU — Araraquara/SP',
        },
        { key: 'CE-25591', destaque: 'Campo CNAE não disponível no cadastro' },
        { key: 'CE-25525', destaque: 'Destaque código BC ISSQN' },
        {
          key: 'CE-25494',
          destaque: 'Ajuste emissão tomador exterior — Ibirubá/RS',
        },
        {
          key: 'CE-25488',
          destaque: 'Atualização de CTN removendo benefício municipal',
        },
        { key: 'CE-25446', destaque: 'Alteração de layout da nota fiscal 2.0' },
        { key: 'CE-25383', destaque: 'Campo código interno do contribuinte' },
        { key: 'CE-25263', destaque: 'Emissão exterior portal nacional' },
        { key: 'CE-25222', destaque: 'Integração com a Shopify (atualização)' },
        { key: 'CE-24806', destaque: 'Reclame Aqui — reclamação de cliente' },
        { key: 'CE-24175', destaque: 'Pesquisa de vendas' },
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
    {
      status: 'Reopened',
      icon: '🔄',
      itens: [
        { key: 'CE-23131', destaque: 'Notas fiscais emitidas incorretamente' },
      ],
    },
    {
      status: 'Open',
      icon: '📋',
      itens: [
        { key: 'CE-25807', destaque: 'Faturamento excedentes indevido' },
        { key: 'CE-25775', destaque: 'Análise de vendas canceladas' },
        { key: 'CE-25768', destaque: 'Falha na integração — Kobana' },
        { key: 'CE-25760', destaque: 'Parametrização para emissão' },
        { key: 'CE-25683', destaque: 'Faturamento indevido de excedentes' },
        { key: 'CE-25621', destaque: 'Análise de coprodução' },
        { key: 'CE-25566', destaque: 'Integração com Woocommerce' },
        {
          key: 'CE-25563',
          destaque: 'Melhoria nos campos PIS/COFINS portal nacional',
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
          destaque: 'Regime de apuração tributária do Simples Nacional',
        },
        { key: 'CE-25163', destaque: 'Melhoria: campo IE para pessoa física' },
      ],
    },
  ],
  compiladoSemanal: {
    periodo: '12/04 a 18/04/2026',
    totalTickets: 40,
    sincronizacao: 1,
    semAssignee: 28,
    reaberturas: 1,
    camadas: [
      {
        nome: 'GW',
        cor: '#F04E23',
        descricao: 'Gateway NFS-e/NF-e com prefeituras',
        total: 17,
        pct: '42,5',
        assuntos: [
          {
            assunto: 'Emissão exterior / Tomador estrangeiro',
            qtd: 7,
            pct: '17,5',
            keys: 'CE-25663,CE-25551,CE-25494,CE-25664,CE-25254,CE-25263,CE-25662',
          },
          {
            assunto: 'Configuração municipal / Layout XML',
            qtd: 4,
            pct: '10,0',
            keys: 'CE-25229,CE-25283,CE-25218,CE-25488',
          },
          {
            assunto: 'Campos tributários (IBS/CBS, PIS/COFINS, CSRT, BC ISSQN)',
            qtd: 3,
            pct: '7,5',
            keys: 'CE-25728,CE-25563,CE-25525',
          },
          {
            assunto: 'Sincronização de notas',
            qtd: 2,
            pct: '5,0',
            keys: 'CE-25776,CE-23131',
          },
          {
            assunto: 'Erro de emissão / Certificado digital',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-25769',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel/emissor, faturamento, configuração',
        total: 14,
        pct: '35,0',
        assuntos: [
          {
            assunto: 'Faturamento de excedentes indevido',
            qtd: 3,
            pct: '7,5',
            keys: 'CE-25750,CE-25807,CE-25683',
          },
          {
            assunto: 'Painel SMU / Instabilidade',
            qtd: 2,
            pct: '5,0',
            keys: 'CE-25652,CE-25596',
          },
          {
            assunto: 'Cadastro empresa (CNAE, IE, código contribuinte)',
            qtd: 4,
            pct: '10,0',
            keys: 'CE-25634,CE-25591,CE-25383,CE-25163',
          },
          {
            assunto: 'Layout nota fiscal 2.0',
            qtd: 2,
            pct: '5,0',
            keys: 'CE-25446,CE-25337',
          },
          {
            assunto: 'Relatórios e visão do contador',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-25352',
          },
          {
            assunto: 'Pesquisa de vendas / Importação',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-24175',
          },
          {
            assunto: 'Acesso ao painel',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-25738',
          },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao: 'Tickets ambíguos entre GW e Emissor',
        total: 4,
        pct: '10,0',
        assuntos: [
          {
            assunto: 'Regime Simples Nacional',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-25193',
          },
          {
            assunto: 'Observações na venda',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-25647',
          },
          {
            assunto: 'Parametrização para emissão',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-25760',
          },
          {
            assunto: 'Vendas canceladas',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-25775',
          },
        ],
      },
      {
        nome: 'Outros',
        cor: '#C8C5BC',
        descricao: 'Melhorias, integrações, outros',
        total: 5,
        pct: '12,5',
        assuntos: [
          {
            assunto: 'Integrações (Shopify, Woocommerce, Kobana)',
            qtd: 3,
            pct: '7,5',
            keys: 'CE-25222,CE-25566,CE-25768',
          },
          {
            assunto: 'Reclame Aqui',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-24806',
          },
          {
            assunto: 'Análise de coprodução',
            qtd: 1,
            pct: '2,5',
            keys: 'CE-25621',
          },
        ],
      },
    ],
  },
};
