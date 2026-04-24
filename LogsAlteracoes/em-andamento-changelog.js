var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Under Analysis',
      icon: '🔍',
      itens: [
        { key: 'CE-26044', destaque: 'Bug na importação de vendas' },
        {
          key: 'CE-25878',
          destaque: 'Sincronizar vendas com data de competência da NFS-e',
        },
        {
          key: 'CE-25652',
          destaque: 'Instabilidade no painel e ajuste de SMU',
        },
        {
          key: 'CE-25488',
          destaque: 'Atualização de CTN removendo benefício municipal',
        },
        {
          key: 'CE-25283',
          destaque: 'Atualização sistema de notas — Socorro/SP',
        },
        { key: 'CE-25222', destaque: 'Integração com a Shopify (atualização)' },
        { key: 'CE-25212', destaque: 'Vendas não são importadas' },
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
      ],
    },
    {
      status: 'Waiting N2',
      icon: '⏳',
      itens: [
        { key: 'CE-25831', destaque: 'Ajuste NFS-e — São Paulo/SP' },
        { key: 'CE-25683', destaque: 'Faturamento indevido de excedentes' },
        { key: 'CE-25647', destaque: 'Observações na venda' },
      ],
    },
    {
      status: 'Open',
      icon: '📋',
      itens: [
        {
          key: 'CE-26039',
          destaque: 'Falha na inserção do certificado digital',
        },
        {
          key: 'CE-26037',
          destaque: 'Retornar como negada — venda de afiliado',
        },
        { key: 'CE-26036', destaque: 'Correção de XML de notas do exterior' },
        {
          key: 'CE-26013',
          destaque: 'Fila travada, ajuste de layout — Faxinal do Soturno/RS',
        },
        {
          key: 'CE-26011',
          destaque: 'Correção NFS-e tomador estrangeiro — Caxias do Sul/RS',
        },
        { key: 'CE-26001', destaque: 'Ajuste de XML tributos' },
        {
          key: 'CE-25999',
          destaque: 'Disponibilizar campo CNAE — provedor TinusV2',
        },
        { key: 'CE-25970', destaque: 'Notas para clientes exterior' },
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
        { key: 'CE-25851', destaque: 'Emissão exterior Portal Nacional' },
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
          key: 'CE-25254',
          destaque: 'Erro emissão tomador exterior — Pato Branco/PR',
        },
        { key: 'CE-25229', destaque: 'Atualização layout XML — Cotia/SP' },
        { key: 'CE-25218', destaque: 'Atualização de município' },
      ],
    },
  ],
  compiladoSemanal: {
    periodo: '20/04 a 26/04/2026',
    totalTickets: 38,
    sincronizacao: 1,
    semAssignee: 0,
    reaberturas: 2,
    camadas: [
      {
        nome: 'GW',
        cor: '#F04E23',
        descricao: 'Gateway NFS-e/NF-e com prefeituras',
        total: 19,
        pct: '50,0',
        assuntos: [
          {
            assunto: 'Emissão exterior / Tomador estrangeiro',
            qtd: 8,
            pct: '21,1',
            keys: 'CE-25551,CE-26036,CE-26011,CE-25970,CE-25946,CE-25880,CE-25851,CE-25254',
          },
          {
            assunto: 'XML / Layout / Tributos',
            qtd: 4,
            pct: '10,5',
            keys: 'CE-26001,CE-25563,CE-25229,CE-25283',
          },
          {
            assunto: 'Configuração municipal / CNAE',
            qtd: 3,
            pct: '7,9',
            keys: 'CE-25999,CE-25218,CE-25949',
          },
          {
            assunto: 'Certificado digital',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-26039',
          },
          {
            assunto: 'Fila travada / Layout',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-26013',
          },
          {
            assunto: 'Benefício municipal / CTN',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25488',
          },
          {
            assunto: 'Ajuste NFS-e — São Paulo/SP',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25831',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel/emissor (faturamento, vendas, configuração)',
        total: 13,
        pct: '34,2',
        assuntos: [
          {
            assunto: 'Importação / Sincronização de vendas',
            qtd: 5,
            pct: '13,2',
            keys: 'CE-26044,CE-25878,CE-25212,CE-24175,CE-25823',
          },
          {
            assunto: 'Coprodução',
            qtd: 2,
            pct: '5,3',
            keys: 'CE-25877,CE-25621',
          },
          {
            assunto: 'Vendas canceladas / Venda de afiliado',
            qtd: 2,
            pct: '5,3',
            keys: 'CE-25775,CE-26037',
          },
          {
            assunto: 'Relatório / Observações na venda',
            qtd: 2,
            pct: '5,3',
            keys: 'CE-25352,CE-25647',
          },
          {
            assunto: 'Faturamento de excedentes',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25683',
          },
          {
            assunto: 'Integração Kobana',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25768',
          },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao:
          'Tickets ambíguos (emissão genérica, layout, parametrização)',
        total: 3,
        pct: '7,9',
        assuntos: [
          {
            assunto: 'Instabilidade no painel e ajuste de SMU',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25652',
          },
          {
            assunto: 'Parametrização para emissão',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25760',
          },
          {
            assunto: 'Alteração de layout da nota fiscal 2.0 — São Paulo/SP',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25337',
          },
        ],
      },
      {
        nome: 'Outros',
        cor: '#C8C5BC',
        descricao: 'Integrações, melhorias, bugs visuais',
        total: 3,
        pct: '7,9',
        assuntos: [
          {
            assunto: 'Integração com Shopify',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25222',
          },
          {
            assunto: 'Integração com WooCommerce',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-25566',
          },
          { assunto: 'Reclame Aqui', qtd: 1, pct: '2,6', keys: 'CE-24806' },
        ],
      },
    ],
  },
};
