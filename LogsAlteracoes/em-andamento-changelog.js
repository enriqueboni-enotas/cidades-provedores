var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Under Analysis',
      icon: '🔍',
      itens: [
        { key: 'CE-25700', destaque: 'Faturamento de excedentes indevido' },
        { key: 'CE-24806', destaque: 'Reclamação — serviços tecnológicos' },
        { key: 'CE-24175', destaque: 'Pesquisa de vendas — integração' },
      ],
    },
    {
      status: 'Reopened',
      icon: '🔄',
      itens: [
        { key: 'CE-25137', destaque: 'Envio do campo CSRT — SEFAZ PR' },
        { key: 'CE-23131', destaque: 'Notas fiscais emitidas incorretamente' },
      ],
    },
    {
      status: 'Waiting N2',
      icon: '⏳',
      itens: [
        { key: 'CE-25231', destaque: 'Painel para SMU' },
        { key: 'CE-25212', destaque: 'Vendas não importadas' },
      ],
    },
    {
      status: 'Open',
      icon: '📋',
      itens: [
        { key: 'CE-25693', destaque: 'Análise de configuração de coprodução' },
        { key: 'CE-25683', destaque: 'Faturamento indevido de excedentes' },
        {
          key: 'CE-25681',
          destaque: 'País deve ser informado — São José do Rio Preto/SP (GISS)',
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
        { key: 'CE-25663', destaque: 'Erro ao emitir nota para o exterior' },
        { key: 'CE-25662', destaque: 'Erro na emissão de notas — Dumont/SP' },
        { key: 'CE-25661', destaque: 'Autofix — Planilha para inutilização' },
        { key: 'CE-25657', destaque: 'Faturamento de excedentes indevido' },
        { key: 'CE-25656', destaque: 'País deve ser informado — Jundiaí/SP' },
        {
          key: 'CE-25652',
          destaque: 'Instabilidade no Painel e ajuste de SMU',
        },
        { key: 'CE-25647', destaque: 'Observações na venda' },
        { key: 'CE-25634', destaque: 'Habilitar campo CNAE na empresa' },
        { key: 'CE-25621', destaque: 'Análise de coprodução' },
        {
          key: 'CE-25596',
          destaque: 'Alterar painel para SMU — Araraquara/SP',
        },
        {
          key: 'CE-25591',
          destaque: 'Campo CNAE não disponível no cadastro da empresa',
        },
        { key: 'CE-25566', destaque: 'Integração com WooCommerce' },
        {
          key: 'CE-25563',
          destaque: 'Melhoria nos campos PIS/COFINS — Portal Nacional',
        },
        { key: 'CE-25560', destaque: 'Análise de vendas de coprodução' },
        { key: 'CE-25559', destaque: 'Correção de notas' },
        {
          key: 'CE-25551',
          destaque: 'Emissão tomador exterior — Rio das Ostras/RJ',
        },
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
        { key: 'CE-25421', destaque: 'Sincronização NFS-e' },
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
        { key: 'CE-25263', destaque: 'Emissão exterior Portal Nacional' },
        {
          key: 'CE-25254',
          destaque: 'Erro emissão tomador exterior — Pato Branco/PR',
        },
        { key: 'CE-25229', destaque: 'Atualização layout XML — Cotia/SP' },
        { key: 'CE-25222', destaque: 'Integração com Shopify (atualização)' },
        { key: 'CE-25219', destaque: 'Município de prestação como Exterior' },
        { key: 'CE-25218', destaque: 'Atualização de município' },
        {
          key: 'CE-25193',
          destaque: 'Campo Regime de Apuração Tributária do Simples Nacional',
        },
        { key: 'CE-25163', destaque: 'Melhoria — Campo IE para pessoa física' },
      ],
    },
  ],
  compiladoSemanal: {
    periodo: '12/04 a 18/04/2026',
    totalTickets: 44,
    sincronizacao: 1,
    semAssignee: 0,
    reaberturas: 2,
    camadas: [
      {
        nome: 'GW',
        cor: '#F04E23',
        descricao: 'Gateway NFS-e/NF-e com prefeituras',
        total: 24,
        pct: '54,5',
        assuntos: [
          {
            assunto: 'Emissão exterior / Tomador estrangeiro',
            qtd: 9,
            pct: '20,5',
            keys: 'CE-25681,CE-25672,CE-25671,CE-25664,CE-25663,CE-25656,CE-25551,CE-25494,CE-25254',
          },
          {
            assunto: 'País deve ser informado (cPais)',
            qtd: 5,
            pct: '11,4',
            keys: 'CE-25681,CE-25672,CE-25671,CE-25656,CE-25263',
          },
          {
            assunto: 'Município de prestação / Exterior',
            qtd: 2,
            pct: '4,5',
            keys: 'CE-25219,CE-25263',
          },
          {
            assunto: 'Atualização de layout XML / provedor',
            qtd: 4,
            pct: '9,1',
            keys: 'CE-25446,CE-25337,CE-25229,CE-25283',
          },
          { assunto: 'CSRT / SEFAZ PR', qtd: 1, pct: '2,3', keys: 'CE-25137' },
          {
            assunto: 'Código de tributação / NBS / CNAE',
            qtd: 3,
            pct: '6,8',
            keys: 'CE-25525,CE-25488,CE-25383',
          },
          {
            assunto: 'PIS/COFINS — Portal Nacional',
            qtd: 1,
            pct: '2,3',
            keys: 'CE-25563',
          },
          {
            assunto: 'Regime Simples Nacional',
            qtd: 1,
            pct: '2,3',
            keys: 'CE-25193',
          },
          {
            assunto: 'Sincronização NFS-e',
            qtd: 1,
            pct: '2,3',
            keys: 'CE-25421',
          },
          {
            assunto: 'Erro na emissão — Dumont/SP',
            qtd: 1,
            pct: '2,3',
            keys: 'CE-25662',
          },
          {
            assunto: 'Notas emitidas incorretamente',
            qtd: 1,
            pct: '2,3',
            keys: 'CE-23131',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel/Emissor (faturamento, configuração, importação)',
        total: 14,
        pct: '31,8',
        assuntos: [
          {
            assunto: 'Faturamento de excedentes indevido',
            qtd: 3,
            pct: '6,8',
            keys: 'CE-25700,CE-25683,CE-25657',
          },
          {
            assunto: 'Painel SMU / Instabilidade',
            qtd: 3,
            pct: '6,8',
            keys: 'CE-25652,CE-25596,CE-25231',
          },
          {
            assunto: 'Campo CNAE na empresa',
            qtd: 2,
            pct: '4,5',
            keys: 'CE-25634,CE-25591',
          },
          {
            assunto: 'Coprodução / Análise de vendas',
            qtd: 2,
            pct: '4,5',
            keys: 'CE-25693,CE-25560',
          },
          {
            assunto: 'Relatório visão do contador',
            qtd: 1,
            pct: '2,3',
            keys: 'CE-25352',
          },
          {
            assunto: 'Observações na venda',
            qtd: 1,
            pct: '2,3',
            keys: 'CE-25647',
          },
          {
            assunto: 'Vendas não importadas',
            qtd: 1,
            pct: '2,3',
            keys: 'CE-25212',
          },
          {
            assunto: 'Correção de notas',
            qtd: 1,
            pct: '2,3',
            keys: 'CE-25559',
          },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao:
          'Tickets ambíguos (emissão genérica, atualização de município)',
        total: 3,
        pct: '6,8',
        assuntos: [
          {
            assunto: 'Atualização de município',
            qtd: 1,
            pct: '2,3',
            keys: 'CE-25218',
          },
          {
            assunto: 'Autofix — Inutilização',
            qtd: 1,
            pct: '2,3',
            keys: 'CE-25661',
          },
          {
            assunto: 'Campo IE para pessoa física',
            qtd: 1,
            pct: '2,3',
            keys: 'CE-25163',
          },
        ],
      },
      {
        nome: 'Outros',
        cor: '#C8C5BC',
        descricao: 'Melhorias, integrações, bugs visuais',
        total: 3,
        pct: '6,8',
        assuntos: [
          {
            assunto: 'Integração WooCommerce',
            qtd: 1,
            pct: '2,3',
            keys: 'CE-25566',
          },
          {
            assunto: 'Integração Shopify',
            qtd: 1,
            pct: '2,3',
            keys: 'CE-25222',
          },
          {
            assunto: 'Reclamação — análise',
            qtd: 1,
            pct: '2,3',
            keys: 'CE-24806',
          },
        ],
      },
    ],
  },
};
