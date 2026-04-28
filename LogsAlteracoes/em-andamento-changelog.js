var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Under Analysis',
      icon: '🔍',
      itens: [
        {
          key: 'CE-26078',
          destaque: 'Notas com tomador exterior incorreto em Caxias do Sul/RS',
        },
        {
          key: 'CE-26037',
          destaque: 'Retornar como negada — venda de afiliado',
        },
        {
          key: 'CE-26011',
          destaque: 'Correção NFS-e tomador estrangeiro em Caxias do Sul/RS',
        },
        { key: 'CE-25877', destaque: 'Alteração de coprodução' },
        { key: 'CE-25831', destaque: 'Ajuste NFS-e em São Paulo/SP' },
        {
          key: 'CE-25488',
          destaque: 'Atualização de CTN removendo benefício municipal',
        },
        { key: 'CE-25222', destaque: 'Integração com a Shopify (atualização)' },
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
          destaque: 'Emissão tomador exterior em Rio das Ostras/RJ',
        },
      ],
    },
    {
      status: 'Open',
      icon: '📋',
      itens: [
        {
          key: 'CE-26185',
          destaque: 'Rejeição NFS-e — XML não compatível com Schema / CPF/CNPJ',
        },
        { key: 'CE-26181', destaque: 'Erro na emissão de notas' },
        { key: 'CE-26152', destaque: 'Venda não editável — validação' },
        {
          key: 'CE-26143',
          destaque:
            'Erro intermitente na validação da data de competência (API)',
        },
        {
          key: 'CE-26142',
          destaque: 'Destaque imposto IBS e CBS em São Paulo/SP',
        },
        {
          key: 'CE-26088',
          destaque: 'Provedor Elotech — certificado chave pública vencido',
        },
        {
          key: 'CE-26039',
          destaque: 'Falha na inserção do certificado digital',
        },
        { key: 'CE-26036', destaque: 'Correção de XML de notas do exterior' },
        {
          key: 'CE-26013',
          destaque: 'Fila travada — ajuste de layout em Faxinal do Soturno/RS',
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
          destaque: 'ISS tomadores do exterior em São Gonçalo do Pará/MG',
        },
        {
          key: 'CE-25851',
          destaque: 'Emissão de notas exterior via Portal Nacional',
        },
        { key: 'CE-25823', destaque: 'Validação de vendas Pagar.me 2.0' },
        { key: 'CE-25775', destaque: 'Análise de vendas canceladas Hotmart' },
        { key: 'CE-25768', destaque: 'Falha na integração — Kobana' },
        {
          key: 'CE-25563',
          destaque: 'Melhoria nos campos PIS/COFINS — Portal Nacional',
        },
        { key: 'CE-25352', destaque: 'Relatório visão do contador' },
        {
          key: 'CE-25337',
          destaque: 'Alteração de layout da nota fiscal 2.0 em São Paulo/SP',
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
        { key: 'CE-26080', destaque: 'Localizar numerações' },
        { key: 'CE-25212', destaque: 'Vendas não são importadas' },
      ],
    },
  ],
  compiladoSemanal: {
    periodo: '27/04 a 03/05/2026',
    totalTickets: 34,
    sincronizacao: 2,
    semAssignee: 34,
    reaberturas: 2,
    camadas: [
      {
        nome: 'GW',
        cor: '#F04E23',
        descricao: 'Gateway NFS-e/NF-e com prefeituras',
        total: 18,
        pct: '52,9',
        assuntos: [
          {
            assunto: 'Emissão exterior / Tomador estrangeiro',
            qtd: 9,
            pct: '26,5',
            keys: 'CE-26078,CE-26011,CE-25551,CE-26036,CE-25970,CE-25946,CE-25851,CE-25254,CE-25949',
          },
          {
            assunto: 'Rejeição / Schema XML / Layout',
            qtd: 4,
            pct: '11,8',
            keys: 'CE-26185,CE-26181,CE-26013,CE-26001',
          },
          {
            assunto: 'Certificado digital',
            qtd: 2,
            pct: '5,9',
            keys: 'CE-26088,CE-26039',
          },
          {
            assunto: 'Configuração municipal (CNAE, CTN, IBS/CBS)',
            qtd: 3,
            pct: '8,8',
            keys: 'CE-26142,CE-25999,CE-25488',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel/Emissor (faturamento, vendas, relatórios)',
        total: 9,
        pct: '26,5',
        assuntos: [
          {
            assunto: 'Importação / Validação de vendas',
            qtd: 3,
            pct: '8,8',
            keys: 'CE-26152,CE-25823,CE-25775',
          },
          {
            assunto: 'Pesquisa de vendas / Relatórios',
            qtd: 2,
            pct: '5,9',
            keys: 'CE-24175,CE-25352',
          },
          {
            assunto: 'Integração (Kobana, Shopify)',
            qtd: 2,
            pct: '5,9',
            keys: 'CE-25768,CE-25222',
          },
          {
            assunto: 'Localizar numerações / Vendas não importadas',
            qtd: 2,
            pct: '5,9',
            keys: 'CE-26080,CE-25212',
          },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao: 'Tickets ambíguos (emissão genérica, layout, coprodução)',
        total: 5,
        pct: '14,7',
        assuntos: [
          {
            assunto: 'Alteração de layout NF 2.0 / PIS/COFINS',
            qtd: 3,
            pct: '8,8',
            keys: 'CE-25337,CE-25563,CE-25831',
          },
          {
            assunto: 'Coprodução / Parametrização',
            qtd: 2,
            pct: '5,9',
            keys: 'CE-25877,CE-25760',
          },
        ],
      },
      {
        nome: 'Outros',
        cor: '#C8C5BC',
        descricao: 'Melhorias, bugs visuais, validações',
        total: 2,
        pct: '5,9',
        assuntos: [
          {
            assunto: 'Erro intermitente / Retornar como negada',
            qtd: 2,
            pct: '5,9',
            keys: 'CE-26143,CE-26037',
          },
        ],
      },
    ],
  },
};
