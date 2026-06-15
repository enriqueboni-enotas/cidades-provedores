var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Under Analysis',
      icon: '🔍',
      itens: [
        {
          key: 'CE-27344',
          destaque:
            'Destaque PIS e COFINS NFS-e Portal Nacional em Florianópolis/SC',
        },
        {
          key: 'CE-27276',
          destaque: 'Destaque PIS e COFINS NFS-e Portal Nacional em Betim/MG',
        },
      ],
    },
    {
      status: 'Reopened',
      icon: '🔄',
      itens: [
        { key: 'CE-27067', destaque: 'Ajuste integração Pagar.me 2.0' },
        {
          key: 'CE-27061',
          destaque: 'Erro emissão tomador exterior em Itapipoca/CE',
        },
      ],
    },
    {
      status: 'Open',
      icon: '📋',
      itens: [
        {
          key: 'CE-28050',
          destaque: 'Sincronização de nota — Portal Nacional',
        },
        { key: 'CE-28023', destaque: 'Problemas de acesso ao painel' },
        {
          key: 'CE-28008',
          destaque:
            'Tratamentos de erro para clientes sem endereço/documento não aplicados automaticamente',
        },
        { key: 'CE-27995', destaque: 'Baixar PDF e XML em massa' },
        {
          key: 'CE-27992',
          destaque: 'Sincronização de nota — Portal Nacional',
        },
        {
          key: 'CE-27960',
          destaque: 'Bug no envio de dados eventos e município de prestação',
        },
        { key: 'CE-27940', destaque: 'Notas travadas em geração de PDF' },
        {
          key: 'CE-27917',
          destaque: 'Erro ao salvar terceira integração WooCommerce',
        },
        { key: 'CE-27909', destaque: 'Cliente MEI com nota negada' },
        {
          key: 'CE-27892',
          destaque:
            'Chapecó — Rejeição de DPS duplicada após migração para Portal Nacional',
        },
        {
          key: 'CE-27871',
          destaque: 'Rejeição na emissão de NFS-e para tomadores estrangeiros',
        },
        {
          key: 'CE-27840',
          destaque:
            'Vinculação incorreta de notas fiscais em múltiplas vendas da Kiwify',
        },
        {
          key: 'CE-27795',
          destaque:
            'Divergência entre competência, data de emissão e exibição em relatório',
        },
        {
          key: 'CE-27778',
          destaque:
            'Falha de autenticação na integração com a Iugu — Fretebras',
        },
        {
          key: 'CE-27777',
          destaque: 'Incluir CNPJ da contabilidade no XML da NF-e',
        },
        {
          key: 'CE-27772',
          destaque: 'Erro emissão tomador exterior em Taboão da Serra/SP',
        },
        {
          key: 'CE-27760',
          destaque: 'Alteração descrição de produtos em Barueri/SP',
        },
        {
          key: 'CE-27739',
          destaque: 'Ajuste natureza da operação — Portal Nacional',
        },
        {
          key: 'CE-27719',
          destaque: 'Tratamento de erro automático em notas fiscais',
        },
        {
          key: 'CE-27673',
          destaque: 'Atualização do layout da nota fiscal 2.0 em São Paulo/SP',
        },
        { key: 'CE-27553', destaque: 'Código 221 nota de devolução' },
        { key: 'CE-27548', destaque: 'Erro nos valores Sympla' },
        { key: 'CE-27435', destaque: 'Ajuste XML BC-ISSQN em Porto Alegre/RS' },
        {
          key: 'CE-27420',
          destaque: 'Campo código de serviço bloqueado em Caetité/BA',
        },
        { key: 'CE-27419', destaque: 'Bug integração com Apps' },
        { key: 'CE-27415', destaque: 'Bug no App eNotas' },
        { key: 'CE-27404', destaque: 'Emissão exterior' },
        {
          key: 'CE-27389',
          destaque: 'Destaque IBS/CBS em São Bernardo do Campo/SP',
        },
        { key: 'CE-27315', destaque: 'Bug entrada de vendas Sympla' },
        { key: 'CE-27092', destaque: 'Integração Pagar.me' },
      ],
    },
    {
      status: 'Waiting Partner',
      icon: '⏳',
      itens: [
        {
          key: 'CE-27269',
          destaque: 'Ajuste emissão tomador exterior em Sarandi/PR',
        },
      ],
    },
  ],
  compiladoSemanal: {
    periodo: '15/06 a 21/06/2026',
    totalTickets: 35,
    sincronizacao: 3,
    semAssignee: 0,
    reaberturas: 2,
    camadas: [
      {
        nome: 'GW',
        cor: '#F04E23',
        descricao: 'Gateway NFS-e/NF-e com prefeituras',
        total: 16,
        pct: '45,7',
        assuntos: [
          {
            assunto: 'Emissão exterior / Tomador estrangeiro',
            qtd: 5,
            pct: '14,3',
            keys: 'CE-27061,CE-27772,CE-27871,CE-27404,CE-27269',
          },
          {
            assunto: 'Sincronização de notas — Portal Nacional',
            qtd: 3,
            pct: '8,6',
            keys: 'CE-28050,CE-27992,CE-27892',
          },
          {
            assunto: 'PIS/COFINS no Portal Nacional',
            qtd: 2,
            pct: '5,7',
            keys: 'CE-27344,CE-27276',
          },
          {
            assunto: 'IBS/CBS obrigatório',
            qtd: 1,
            pct: '2,9',
            keys: 'CE-27389',
          },
          {
            assunto: 'Natureza da operação — Portal Nacional',
            qtd: 1,
            pct: '2,9',
            keys: 'CE-27739',
          },
          {
            assunto: 'Nota negada / MEI',
            qtd: 1,
            pct: '2,9',
            keys: 'CE-27909',
          },
          {
            assunto: 'Notas travadas em geração de PDF',
            qtd: 1,
            pct: '2,9',
            keys: 'CE-27940',
          },
          {
            assunto: 'Tratamento de erro automático',
            qtd: 1,
            pct: '2,9',
            keys: 'CE-27719',
          },
          {
            assunto: 'Ajuste XML BC-ISSQN',
            qtd: 1,
            pct: '2,9',
            keys: 'CE-27435',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel/Emissor — faturamento, config, importação',
        total: 10,
        pct: '28,6',
        assuntos: [
          {
            assunto: 'Integração Pagar.me / Iugu / WooCommerce',
            qtd: 4,
            pct: '11,4',
            keys: 'CE-27067,CE-27092,CE-27778,CE-27917',
          },
          {
            assunto: 'Bug entrada de vendas (Sympla/Kiwify)',
            qtd: 3,
            pct: '8,6',
            keys: 'CE-27315,CE-27548,CE-27840',
          },
          {
            assunto: 'Baixar PDF e XML em massa',
            qtd: 1,
            pct: '2,9',
            keys: 'CE-27995',
          },
          {
            assunto: 'Problemas de acesso',
            qtd: 1,
            pct: '2,9',
            keys: 'CE-28023',
          },
          {
            assunto: 'Alteração descrição de produtos',
            qtd: 1,
            pct: '2,9',
            keys: 'CE-27760',
          },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao: 'Ambíguo — pode ser GW ou Emissor',
        total: 5,
        pct: '14,3',
        assuntos: [
          {
            assunto: 'Tratamentos de erro não aplicados automaticamente',
            qtd: 1,
            pct: '2,9',
            keys: 'CE-28008',
          },
          {
            assunto: 'Bug envio dados eventos e município prestação',
            qtd: 1,
            pct: '2,9',
            keys: 'CE-27960',
          },
          {
            assunto: 'Divergência competência/emissão em relatório',
            qtd: 1,
            pct: '2,9',
            keys: 'CE-27795',
          },
          {
            assunto: 'CNPJ da contabilidade no XML',
            qtd: 1,
            pct: '2,9',
            keys: 'CE-27777',
          },
          {
            assunto: 'Código de serviço bloqueado em Caetité/BA',
            qtd: 1,
            pct: '2,9',
            keys: 'CE-27420',
          },
        ],
      },
      {
        nome: 'Outros',
        cor: '#C8C5BC',
        descricao: 'Melhorias, layout, apps',
        total: 4,
        pct: '11,4',
        assuntos: [
          {
            assunto: 'Atualização layout nota fiscal 2.0',
            qtd: 1,
            pct: '2,9',
            keys: 'CE-27673',
          },
          {
            assunto: 'Código 221 nota devolução',
            qtd: 1,
            pct: '2,9',
            keys: 'CE-27553',
          },
          {
            assunto: 'Bug no App eNotas / integração Apps',
            qtd: 2,
            pct: '5,7',
            keys: 'CE-27415,CE-27419',
          },
        ],
      },
    ],
  },
};
