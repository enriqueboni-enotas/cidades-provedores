var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Under Analysis',
      icon: '🔍',
      itens: [
        { key: 'CE-25841', destaque: 'Autofix — localizar numerações' },
        { key: 'CE-25821', destaque: 'Autofix — localizar numerações' },
        { key: 'CE-25769', destaque: 'Bug certificado digital' },
        {
          key: 'CE-25664',
          destaque:
            'Notas negadas — cPaisResult quando informado cPaisPrestacao',
        },
        { key: 'CE-25663', destaque: 'Erro ao emitir nota para o exterior' },
        {
          key: 'CE-25652',
          destaque: 'Instabilidade no painel e ajuste de SMU',
        },
        { key: 'CE-25647', destaque: 'Observações na venda' },
        {
          key: 'CE-25488',
          destaque: 'Atualização de CTN removendo benefício municipal',
        },
        { key: 'CE-25222', destaque: 'Integração com a Shopify (atualização)' },
        { key: 'CE-24806', destaque: 'Reclame Aqui' },
        { key: 'CE-24175', destaque: 'Pesquisa de vendas' },
      ],
    },
    {
      status: 'Waiting N2',
      icon: '⏳',
      itens: [
        { key: 'CE-25738', destaque: 'Problema de acesso ao painel eNotas' },
      ],
    },
    {
      status: 'Reopened',
      icon: '🔄',
      itens: [
        { key: 'CE-25760', destaque: 'Parametrização para emissão' },
        {
          key: 'CE-25551',
          destaque: 'Emissão tomador exterior — Rio das Ostras/RJ',
        },
        { key: 'CE-25212', destaque: 'Vendas não são importadas no emissor' },
      ],
    },
    {
      status: 'Open',
      icon: '📋',
      itens: [
        { key: 'CE-25951', destaque: 'infAdFisco — Pinhais/PR' },
        { key: 'CE-25949', destaque: 'Enviar município do evento' },
        {
          key: 'CE-25946',
          destaque: 'ISS tomadores do exterior — São Gonçalo do Pará/MG',
        },
        {
          key: 'CE-25880',
          destaque:
            'Liberação de cliente MEI para emissão de NFS-e via Portal Nacional',
        },
        {
          key: 'CE-25878',
          destaque: 'Sincronizar vendas com a data de competência da nota',
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
      ],
    },
  ],
  compiladoSemanal: {
    periodo: '19/04 a 25/04/2026',
    totalTickets: 37,
    sincronizacao: 0,
    semAssignee: 0,
    reaberturas: 3,
    camadas: [
      {
        nome: 'GW',
        cor: '#F04E23',
        descricao: 'Gateway NFS-e/NF-e com prefeituras',
        total: 17,
        pct: '45,9',
        assuntos: [
          {
            assunto: 'Emissão exterior / Tomador estrangeiro',
            qtd: 6,
            pct: '16,2',
            keys: 'CE-25946,CE-25851,CE-25664,CE-25663,CE-25551,CE-25254',
          },
          {
            assunto: 'Configuração municipal / Atualização de provedor',
            qtd: 4,
            pct: '10,8',
            keys: 'CE-25831,CE-25283,CE-25229,CE-25218',
          },
          {
            assunto: 'Simples Nacional / Regime tributário',
            qtd: 2,
            pct: '5,4',
            keys: 'CE-25849,CE-25563',
          },
          {
            assunto: 'Autofix — localizar numerações',
            qtd: 2,
            pct: '5,4',
            keys: 'CE-25841,CE-25821',
          },
          {
            assunto: 'Atualização de CTN / benefício municipal',
            qtd: 1,
            pct: '2,7',
            keys: 'CE-25488',
          },
          {
            assunto: 'infAdFisco / Município do evento',
            qtd: 2,
            pct: '5,4',
            keys: 'CE-25951,CE-25949',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel/emissor, faturamento, importação de vendas',
        total: 12,
        pct: '32,4',
        assuntos: [
          {
            assunto: 'Importação / Validação de vendas',
            qtd: 3,
            pct: '8,1',
            keys: 'CE-25212,CE-25823,CE-25878',
          },
          {
            assunto: 'Faturamento de excedentes',
            qtd: 1,
            pct: '2,7',
            keys: 'CE-25683',
          },
          {
            assunto: 'Coprodução',
            qtd: 2,
            pct: '5,4',
            keys: 'CE-25877,CE-25621',
          },
          {
            assunto: 'Relatório / Visão do contador',
            qtd: 1,
            pct: '2,7',
            keys: 'CE-25352',
          },
          {
            assunto: 'Integração (Kobana, WooCommerce, Shopify)',
            qtd: 3,
            pct: '8,1',
            keys: 'CE-25768,CE-25566,CE-25222',
          },
          {
            assunto: 'Acesso ao painel / Instabilidade',
            qtd: 2,
            pct: '5,4',
            keys: 'CE-25738,CE-25652',
          },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao: 'Tickets ambíguos — podem ser de qualquer camada',
        total: 6,
        pct: '16,2',
        assuntos: [
          {
            assunto: 'Layout da nota fiscal 2.0',
            qtd: 2,
            pct: '5,4',
            keys: 'CE-25337,CE-25760',
          },
          {
            assunto: 'Certificado digital / Autenticação',
            qtd: 1,
            pct: '2,7',
            keys: 'CE-25769',
          },
          {
            assunto: 'Observações na venda / Pesquisa de vendas',
            qtd: 2,
            pct: '5,4',
            keys: 'CE-25647,CE-24175',
          },
          {
            assunto: 'Análise de vendas canceladas',
            qtd: 1,
            pct: '2,7',
            keys: 'CE-25775',
          },
        ],
      },
      {
        nome: 'Outros',
        cor: '#C8C5BC',
        descricao: 'Melhorias, integrações externas, outros',
        total: 2,
        pct: '5,4',
        assuntos: [
          {
            assunto: 'Liberação MEI — Portal Nacional',
            qtd: 1,
            pct: '2,7',
            keys: 'CE-25880',
          },
          { assunto: 'Reclame Aqui', qtd: 1, pct: '2,7', keys: 'CE-24806' },
        ],
      },
    ],
  },
};
