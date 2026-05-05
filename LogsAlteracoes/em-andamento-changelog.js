var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Under Analysis',
      icon: '🔍',
      itens: [
        {
          key: 'CE-26346',
          destaque: 'Erro em nota de afiliado — Belo Horizonte/MG',
        },
        { key: 'CE-26001', destaque: 'Ajuste de XML tributos' },
        { key: 'CE-25831', destaque: 'Ajuste NFS-e — São Paulo/SP' },
        { key: 'CE-25823', destaque: 'Validação de vendas Pagar.me 2.0' },
        { key: 'CE-25768', destaque: 'Falha na integração — Kobana' },
        {
          key: 'CE-25488',
          destaque: 'Atualização de CTN removendo benefício municipal',
        },
        { key: 'CE-25222', destaque: 'Integração com a Shopify (Atualização)' },
        { key: 'CE-24175', destaque: 'Pesquisa de vendas' },
      ],
    },
    {
      status: 'Reopened',
      icon: '🔄',
      itens: [
        {
          key: 'CE-25664',
          destaque:
            'Notas negadas: cPaisResult quando informado cPaisPrestacao',
        },
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
        { key: 'CE-26356', destaque: 'Adequação de layout — Limeira/SP' },
        { key: 'CE-26342', destaque: 'Sincronizar status embed' },
        {
          key: 'CE-26331',
          destaque:
            'Ajuste no envio do campo valor aproximado de tributos para notas de exportação',
        },
        {
          key: 'CE-26313',
          destaque: 'Sincronizar notas com data de competência da NF da SEFAZ',
        },
        { key: 'CE-26311', destaque: 'Percentual aproximado de produtos' },
        { key: 'CE-26295', destaque: 'Integração com a Woocommerce' },
        {
          key: 'CE-26250',
          destaque: 'Dificuldade na emissão da nota teste — Boituva/SP',
        },
        {
          key: 'CE-26237',
          destaque:
            'Atualização de certificado público vencido — Provedor Elotech',
        },
        {
          key: 'CE-26227',
          destaque: 'Fila travada / adequação de layout — Paranapanema/SP',
        },
        {
          key: 'CE-26219',
          destaque: 'Ajuste de emissão estrangeira — Natal/RN',
        },
        { key: 'CE-26217', destaque: 'Tratamento de erro não aplicado' },
        { key: 'CE-26181', destaque: 'Erro na emissão de notas' },
        {
          key: 'CE-26143',
          destaque:
            'Erro intermitente na validação da data de competência (NFSe via API)',
        },
        {
          key: 'CE-26142',
          destaque: 'Necessidade de destaque imposto IBS e CBS — São Paulo/SP',
        },
        {
          key: 'CE-26088',
          destaque: 'Provedor Elotech — certificado chave pública vencido',
        },
        {
          key: 'CE-25851',
          destaque: 'Emissão de notas exterior via Portal Nacional',
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
          key: 'CE-25254',
          destaque: 'Erro emissão tomador exterior — Pato Branco/PR',
        },
      ],
    },
  ],
  compiladoSemanal: {
    periodo: '04/05 a 10/05/2026',
    totalTickets: 37,
    sincronizacao: 4,
    semAssignee: 0,
    reaberturas: 2,
    camadas: [
      {
        nome: 'GW',
        cor: '#F04E23',
        descricao: 'Gateway NFS-e/NF-e com prefeituras',
        total: 18,
        pct: '48,6',
        assuntos: [
          {
            assunto: 'Emissão exterior / Tomador estrangeiro',
            qtd: 6,
            pct: '16,2',
            keys: 'CE-25664,CE-25551,CE-26427,CE-26219,CE-25851,CE-25254',
          },
          {
            assunto: 'Certificado público vencido (Elotech)',
            qtd: 2,
            pct: '5,4',
            keys: 'CE-26237,CE-26088',
          },
          {
            assunto: 'Fila travada / Adequação de layout municipal',
            qtd: 3,
            pct: '8,1',
            keys: 'CE-26356,CE-26227,CE-25337',
          },
          {
            assunto: 'Ajuste de XML / Tributos na NFS-e',
            qtd: 3,
            pct: '8,1',
            keys: 'CE-26001,CE-26404,CE-26331',
          },
          {
            assunto: 'Inclusão de NBS',
            qtd: 2,
            pct: '5,4',
            keys: 'CE-26431,CE-26426',
          },
          {
            assunto: 'Emissão de NFS-e (erros diversos)',
            qtd: 2,
            pct: '5,4',
            keys: 'CE-26460,CE-26250',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel/Emissor (faturamento, vendas, integrações)',
        total: 11,
        pct: '29,7',
        assuntos: [
          {
            assunto:
              'Importação/validação de vendas (Pagar.me, Kobana, Woocommerce, Shopify)',
            qtd: 5,
            pct: '13,5',
            keys: 'CE-25823,CE-25768,CE-26375,CE-26295,CE-25222',
          },
          {
            assunto: 'Faturamento / Excedentes indevidos',
            qtd: 1,
            pct: '2,7',
            keys: 'CE-26461',
          },
          {
            assunto: 'Sincronização de notas / status',
            qtd: 3,
            pct: '8,1',
            keys: 'CE-26357,CE-26342,CE-26313',
          },
          {
            assunto: 'Relatório visão do contador',
            qtd: 1,
            pct: '2,7',
            keys: 'CE-25352',
          },
          {
            assunto: 'Pesquisa de vendas',
            qtd: 1,
            pct: '2,7',
            keys: 'CE-24175',
          },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao: 'Tickets ambíguos (erros genéricos, tributos, CTN)',
        total: 6,
        pct: '16,2',
        assuntos: [
          {
            assunto: 'Percentual aproximado de tributos / IBS / CBS',
            qtd: 3,
            pct: '8,1',
            keys: 'CE-26311,CE-26142,CE-25563',
          },
          {
            assunto: 'Tratamento de erro / validação de data de competência',
            qtd: 2,
            pct: '5,4',
            keys: 'CE-26217,CE-26143',
          },
          {
            assunto: 'Atualização de CTN removendo benefício municipal',
            qtd: 1,
            pct: '2,7',
            keys: 'CE-25488',
          },
        ],
      },
      {
        nome: 'Outros',
        cor: '#C8C5BC',
        descricao: 'Melhorias, integrações, bugs visuais',
        total: 2,
        pct: '5,4',
        assuntos: [
          {
            assunto: 'Ajuste NFS-e — São Paulo/SP',
            qtd: 1,
            pct: '2,7',
            keys: 'CE-25831',
          },
          {
            assunto: 'Erro em nota de afiliado — Belo Horizonte/MG',
            qtd: 1,
            pct: '2,7',
            keys: 'CE-26346',
          },
        ],
      },
    ],
  },
};
