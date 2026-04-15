var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Under Analysis',
      icon: '🔍',
      itens: [
        {
          key: 'CE-25728',
          destaque: 'Envio de IBS e CBS na emissão — Cotia/SP',
        },
        { key: 'CE-25700', destaque: 'Faturamento de excedentes indevido' },
        { key: 'CE-25663', destaque: 'Erro ao emitir nota para o exterior' },
        { key: 'CE-25662', destaque: 'Erro na emissão — Dumont/SP' },
        { key: 'CE-25661', destaque: '[Autofix] Planilha para inutilização' },
        {
          key: 'CE-25652',
          destaque: 'Instabilidade no painel e ajuste de SMU',
        },
        {
          key: 'CE-25551',
          destaque: 'Emissão tomador exterior — Rio das Ostras/RJ',
        },
        {
          key: 'CE-25494',
          destaque: 'Ajuste emissão tomador exterior — Ibirubá/RS',
        },
        {
          key: 'CE-25488',
          destaque: 'Atualização de CTN removendo benefício municipal',
        },
        { key: 'CE-25421', destaque: 'Sincronização NFS-e' },
        { key: 'CE-25222', destaque: 'Integração com a Shopify (atualização)' },
        { key: 'CE-25137', destaque: 'Envio do campo CSRT Sefaz PR' },
        { key: 'CE-24806', destaque: 'Reclame Aqui — reclamação de cliente' },
        { key: 'CE-24175', destaque: 'Pesquisa de vendas' },
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
        {
          key: 'CE-25736',
          destaque: 'Plano Start — erro ao gerar XML de envio',
        },
        { key: 'CE-25683', destaque: 'Faturamento indevido de excedentes' },
        {
          key: 'CE-25681',
          destaque: 'País deve ser informado — São José do Rio Preto/SP',
        },
        {
          key: 'CE-25672',
          destaque: 'País deve ser informado — Umuarama/PR (GISS)',
        },
        {
          key: 'CE-25671',
          destaque: 'País deve ser informado — São Caetano do Sul/SP',
        },
        {
          key: 'CE-25664',
          destaque:
            'Notas negadas: cPaisResult quando informado cPaisPrestacao',
        },
        { key: 'CE-25657', destaque: 'Faturamento excedentes indevido' },
        { key: 'CE-25656', destaque: 'País deve ser informado — Jundiaí/SP' },
        { key: 'CE-25647', destaque: 'Observações na venda' },
        { key: 'CE-25634', destaque: 'Habilitar campo CNAE na empresa' },
        { key: 'CE-25621', destaque: 'Análise de coprodução' },
        {
          key: 'CE-25596',
          destaque: 'Alterar painel para SMU — Araraquara/SP',
        },
        { key: 'CE-25591', destaque: 'Campo CNAE não disponível no cadastro' },
        { key: 'CE-25566', destaque: 'Integração com Woocommerce' },
        {
          key: 'CE-25563',
          destaque: 'Melhoria nos campos PIS/COFINS portal nacional',
        },
        { key: 'CE-25559', destaque: 'Correção de notas' },
        { key: 'CE-25525', destaque: 'Destaque código BC ISSQN' },
        { key: 'CE-25446', destaque: 'Alteração de layout da nota fiscal 2.0' },
        { key: 'CE-25383', destaque: 'Campo código interno do contribuinte' },
        { key: 'CE-25352', destaque: 'Relatório visão do contador' },
        {
          key: 'CE-25337',
          destaque: 'Alteração de layout da nota fiscal 2.0 — São Paulo/SP',
        },
        {
          key: 'CE-25283',
          destaque: 'Atualização sistema de notas — Socorro/SP',
        },
        { key: 'CE-25263', destaque: 'Emissão exterior portal nacional' },
        {
          key: 'CE-25254',
          destaque: 'Erro emissão tomador exterior — Pato Branco/PR',
        },
        { key: 'CE-25229', destaque: 'Atualização layout XML — Cotia/SP' },
        { key: 'CE-25219', destaque: 'Município de prestação como exterior' },
        { key: 'CE-25218', destaque: 'Atualização de município' },
        {
          key: 'CE-25193',
          destaque: 'Regime de apuração tributária do Simples Nacional',
        },
        { key: 'CE-25163', destaque: 'Melhoria: campo IE para pessoa física' },
      ],
    },
    {
      status: 'Waiting N2',
      icon: '⏳',
      itens: [
        { key: 'CE-25738', destaque: 'Problema de acesso ao painel eNotas' },
        { key: 'CE-25231', destaque: 'Painel para SMU' },
        { key: 'CE-25212', destaque: 'Vendas não são importadas' },
      ],
    },
  ],
  compiladoSemanal: {
    periodo: '12/04 a 18/04/2026',
    totalTickets: 47,
    sincronizacao: 2,
    semAssignee: 35,
    reaberturas: 1,
    camadas: [
      {
        nome: 'GW',
        cor: '#F04E23',
        descricao: 'Gateway NFS-e/NF-e com prefeituras',
        total: 22,
        pct: '46,8',
        assuntos: [
          {
            assunto: 'Emissão exterior / Tomador estrangeiro',
            qtd: 9,
            pct: '19,1',
            keys: 'CE-25663,CE-25551,CE-25494,CE-25681,CE-25672,CE-25671,CE-25664,CE-25656,CE-25254',
          },
          {
            assunto: 'Sincronização de notas',
            qtd: 2,
            pct: '4,3',
            keys: 'CE-25421,CE-23131',
          },
          {
            assunto: 'Configuração municipal / Layout XML',
            qtd: 4,
            pct: '8,5',
            keys: 'CE-25229,CE-25283,CE-25218,CE-25488',
          },
          {
            assunto: 'Campos tributários (IBS/CBS, PIS/COFINS, CSRT)',
            qtd: 4,
            pct: '8,5',
            keys: 'CE-25728,CE-25563,CE-25137,CE-25525',
          },
          {
            assunto: 'Erro de emissão / Rejeição',
            qtd: 3,
            pct: '6,4',
            keys: 'CE-25662,CE-25736,CE-25559',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel/emissor, faturamento, configuração',
        total: 16,
        pct: '34,0',
        assuntos: [
          {
            assunto: 'Faturamento de excedentes indevido',
            qtd: 3,
            pct: '6,4',
            keys: 'CE-25700,CE-25683,CE-25657',
          },
          {
            assunto: 'Painel SMU / Instabilidade',
            qtd: 3,
            pct: '6,4',
            keys: 'CE-25652,CE-25596,CE-25231',
          },
          {
            assunto: 'Cadastro empresa (CNAE, IE, código contribuinte)',
            qtd: 4,
            pct: '8,5',
            keys: 'CE-25634,CE-25591,CE-25383,CE-25163',
          },
          {
            assunto: 'Layout nota fiscal 2.0',
            qtd: 2,
            pct: '4,3',
            keys: 'CE-25446,CE-25337',
          },
          {
            assunto: 'Relatórios e visão do contador',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-25352',
          },
          {
            assunto: 'Importação de vendas / Pesquisa',
            qtd: 2,
            pct: '4,3',
            keys: 'CE-25212,CE-24175',
          },
          { assunto: 'Acesso ao painel', qtd: 1, pct: '2,1', keys: 'CE-25738' },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao: 'Tickets ambíguos entre GW e Emissor',
        total: 5,
        pct: '10,6',
        assuntos: [
          {
            assunto: 'Município de prestação exterior',
            qtd: 2,
            pct: '4,3',
            keys: 'CE-25219,CE-25263',
          },
          {
            assunto: 'Regime Simples Nacional',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-25193',
          },
          {
            assunto: 'Autofix / Inutilização',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-25661',
          },
          {
            assunto: 'Observações na venda',
            qtd: 1,
            pct: '2,1',
            keys: 'CE-25647',
          },
        ],
      },
      {
        nome: 'Outros',
        cor: '#C8C5BC',
        descricao: 'Melhorias, integrações, outros',
        total: 4,
        pct: '8,5',
        assuntos: [
          {
            assunto: 'Integrações (Shopify, Woocommerce)',
            qtd: 2,
            pct: '4,3',
            keys: 'CE-25222,CE-25566',
          },
          {
            assunto: 'Coprodução / Reclame Aqui',
            qtd: 2,
            pct: '4,3',
            keys: 'CE-25621,CE-24806',
          },
        ],
      },
    ],
  },
};
