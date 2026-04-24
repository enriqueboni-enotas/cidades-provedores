var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Under Analysis',
      icon: '🔍',
      itens: [
        { key: 'CE-25968', destaque: 'Autofix — localizar numerações' },
        { key: 'CE-25967', destaque: 'Autofix — localizar numerações' },
        {
          key: 'CE-25878',
          destaque: 'Sincronizar vendas com data de competência da NFS-e',
        },
        { key: 'CE-25841', destaque: 'Autofix — localizar numerações' },
        { key: 'CE-25821', destaque: 'Autofix — localizar numerações' },
        {
          key: 'CE-25652',
          destaque: 'Instabilidade no painel e ajuste de SMU',
        },
        {
          key: 'CE-25488',
          destaque: 'Atualização de CTN removendo benefício municipal',
        },
        { key: 'CE-25222', destaque: 'Integração com a Shopify (atualização)' },
        { key: 'CE-24806', destaque: 'Reclame Aqui — reclamação de cliente' },
        { key: 'CE-24175', destaque: 'Pesquisa de vendas' },
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
        { key: 'CE-25212', destaque: 'Vendas não são importadas' },
      ],
    },
    {
      status: 'Open',
      icon: '📋',
      itens: [
        { key: 'CE-26001', destaque: 'Ajuste de XML tributos' },
        {
          key: 'CE-25999',
          destaque: 'Disponibilizar campo CNAE — provedor TinusV2',
        },
        { key: 'CE-25970', destaque: 'Notas para clientes exterior' },
        { key: 'CE-25951', destaque: 'Campo infAdFisco — Pinhais/PR' },
        { key: 'CE-25949', destaque: 'Enviar município do evento' },
        {
          key: 'CE-25946',
          destaque: 'ISS tomadores do exterior — São Gonçalo do Pará/MG',
        },
        {
          key: 'CE-25880',
          destaque: 'Liberação de cliente MEI para emissão via Portal Nacional',
        },
        { key: 'CE-25877', destaque: 'Alteração de coprodução' },
        {
          key: 'CE-25851',
          destaque: 'Emissão de notas exterior — Portal Nacional',
        },
        { key: 'CE-25831', destaque: 'Ajuste NFS-e — São Paulo/SP' },
        { key: 'CE-25823', destaque: 'Validação de vendas Pagar.me 2.0' },
        { key: 'CE-25775', destaque: 'Análise de vendas canceladas Hotmart' },
        { key: 'CE-25768', destaque: 'Falha na integração — Kobana' },
        { key: 'CE-25621', destaque: 'Análise de coprodução' },
        { key: 'CE-25566', destaque: 'Integração com WooCommerce' },
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
    {
      status: 'Waiting N2',
      icon: '⏳',
      itens: [
        { key: 'CE-25738', destaque: 'Problema de acesso ao painel eNotas' },
        { key: 'CE-25683', destaque: 'Faturamento indevido de excedentes' },
        { key: 'CE-25647', destaque: 'Observações na venda' },
      ],
    },
  ],
  compiladoSemanal: {
    periodo: '20/04 a 26/04/2026',
    totalTickets: 38,
    sincronizacao: 2,
    semAssignee: 38,
    reaberturas: 3,
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
            qtd: 6,
            pct: '15,8',
            keys: 'CE-25970,CE-25946,CE-25851,CE-25551,CE-25254,CE-25949',
          },
          {
            assunto: 'Configuração municipal (XML, layout, tributos)',
            qtd: 5,
            pct: '13,2',
            keys: 'CE-26001,CE-25999,CE-25951,CE-25229,CE-25283',
          },
          {
            assunto: 'Ajuste NFS-e / Emissão',
            qtd: 3,
            pct: '7,9',
            keys: 'CE-25831,CE-25760,CE-25563',
          },
          {
            assunto: 'Autofix — localizar numerações',
            qtd: 4,
            pct: '10,5',
            keys: 'CE-25968,CE-25967,CE-25841,CE-25821',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel/emissor, faturamento, integrações',
        total: 13,
        pct: '34,2',
        assuntos: [
          {
            assunto: 'Faturamento / Excedentes',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25683',
          },
          {
            assunto: 'Importação de vendas / Integrações',
            qtd: 4,
            pct: '10,5',
            keys: 'CE-25823,CE-25212,CE-25566,CE-25768',
          },
          {
            assunto: 'Coprodução / Vendas canceladas',
            qtd: 3,
            pct: '7,9',
            keys: 'CE-25877,CE-25621,CE-25775',
          },
          {
            assunto: 'Painel / SMU / Acesso',
            qtd: 2,
            pct: '5,3',
            keys: 'CE-25652,CE-25738',
          },
          {
            assunto: 'Relatórios / Layout nota',
            qtd: 2,
            pct: '5,3',
            keys: 'CE-25352,CE-25337',
          },
          {
            assunto: 'Pesquisa de vendas / Observações',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-24175',
          },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao: 'Tickets ambíguos entre gateway e emissor',
        total: 5,
        pct: '13,2',
        assuntos: [
          {
            assunto: 'Benefício municipal / CTN',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25488',
          },
          {
            assunto: 'Liberação MEI Portal Nacional',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25880',
          },
          {
            assunto: 'Atualização de município',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25218',
          },
          {
            assunto: 'Sincronização de vendas com competência',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25878',
          },
          {
            assunto: 'Observações na venda',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25647',
          },
        ],
      },
      {
        nome: 'Outros',
        cor: '#C8C5BC',
        descricao: 'Melhorias, integrações externas, bugs visuais',
        total: 2,
        pct: '5,3',
        assuntos: [
          {
            assunto: 'Integração Shopify',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25222',
          },
          { assunto: 'Reclame Aqui', qtd: 1, pct: '2,6', keys: 'CE-24806' },
        ],
      },
    ],
  },
};
