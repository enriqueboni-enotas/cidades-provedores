var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Under Analysis',
      icon: '🔍',
      itens: [
        {
          key: 'CE-28050',
          destaque: 'Sincronização de nota — Portal Nacional',
        },
        {
          key: 'CE-27992',
          destaque: 'Sincronização de nota — Portal Nacional',
        },
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
      status: 'Waiting Partner',
      icon: '⏳',
      itens: [
        {
          key: 'CE-27269',
          destaque: 'Ajuste emissão tomador exterior em Sarandi/PR',
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
          key: 'CE-28145',
          destaque: 'Emissão para clientes estrangeiros em Taboão da Serra/SP',
        },
        { key: 'CE-28136', destaque: 'Plano Start — tela em criação de conta' },
        {
          key: 'CE-28132',
          destaque: 'Alterar tipo de entrada para assinatura — Pagar.me 2.0',
        },
        {
          key: 'CE-28131',
          destaque: 'Sincronização de notas Portal Nacional em Porto Alegre/RS',
        },
        {
          key: 'CE-28128',
          destaque: 'Ajuste endereço tomador estrangeiro em Taboão da Serra/SP',
        },
        {
          key: 'CE-28119',
          destaque:
            'Possibilidade de extrair relatório de produtos em Florianópolis/SC',
        },
        { key: 'CE-28113', destaque: 'Falha no tratamento de erro de emissão' },
        { key: 'CE-28110', destaque: 'Bug no App eNotas' },
        { key: 'CE-28023', destaque: 'Problemas de acesso ao painel' },
        {
          key: 'CE-28008',
          destaque:
            'Tratamentos de erro para clientes sem endereço/documento não aplicados automaticamente',
        },
        { key: 'CE-27995', destaque: 'Baixar PDF e XML em massa' },
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
            'Chapecó — Rejeição de DPS duplicada após migração Portal Nacional',
        },
        {
          key: 'CE-27840',
          destaque:
            'Análise de recorrência — vinculação incorreta de notas em múltiplas vendas Kiwify',
        },
        {
          key: 'CE-27795',
          destaque:
            'Divergência entre competência, data de emissão e exibição em relatório',
        },
        {
          key: 'CE-27778',
          destaque: 'Falha de autenticação na integração Iugu — Fretebras',
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
          destaque:
            'Campo código de serviço bloqueado para ajustes em Caetité/BA',
        },
        { key: 'CE-27419', destaque: 'Bug integração com APPs' },
        { key: 'CE-27415', destaque: 'Bug no App eNotas' },
        { key: 'CE-27404', destaque: 'Emissão exterior' },
        {
          key: 'CE-27389',
          destaque: 'Destaque de IBS/CBS em São Bernardo do Campo/SP',
        },
        { key: 'CE-27315', destaque: 'Bug entrada de vendas Sympla' },
        { key: 'CE-27092', destaque: 'Integração Pagar.me' },
      ],
    },
  ],
  compiladoSemanal: {
    periodo: '15/06 a 21/06/2026',
    totalTickets: 39,
    sincronizacao: 4,
    semAssignee: 0,
    reaberturas: 2,
    camadas: [
      {
        nome: 'GW',
        cor: '#F04E23',
        descricao: 'Gateway NFS-e/NF-e com prefeituras',
        total: 18,
        pct: '46,2',
        assuntos: [
          {
            assunto: 'Emissão exterior / Tomador estrangeiro',
            qtd: 5,
            pct: '12,8',
            keys: 'CE-28145,CE-28128,CE-27772,CE-27404,CE-27061',
          },
          {
            assunto: 'Sincronização Portal Nacional',
            qtd: 4,
            pct: '10,3',
            keys: 'CE-28131,CE-28050,CE-27992,CE-27892',
          },
          {
            assunto: 'IBS/CBS e PIS/COFINS Portal Nacional',
            qtd: 3,
            pct: '7,7',
            keys: 'CE-27389,CE-27344,CE-27276',
          },
          {
            assunto: 'Tratamento de erro / Notas negadas',
            qtd: 3,
            pct: '7,7',
            keys: 'CE-28113,CE-27719,CE-27909',
          },
          {
            assunto: 'Ajuste XML / Layout NFS-e',
            qtd: 2,
            pct: '5,1',
            keys: 'CE-27435,CE-27673',
          },
          {
            assunto: 'Configuração municipal (natureza, código serviço)',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-27739',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel / Emissor eNotas',
        total: 13,
        pct: '33,3',
        assuntos: [
          {
            assunto:
              'Integração plataformas (Pagar.me, WooCommerce, Iugu, Sympla)',
            qtd: 6,
            pct: '15,4',
            keys: 'CE-28132,CE-27917,CE-27778,CE-27548,CE-27315,CE-27092',
          },
          {
            assunto: 'Bugs no App / Painel',
            qtd: 3,
            pct: '7,7',
            keys: 'CE-28110,CE-27415,CE-27419',
          },
          {
            assunto: 'Relatórios e download em massa',
            qtd: 2,
            pct: '5,1',
            keys: 'CE-28119,CE-27995',
          },
          {
            assunto: 'Alteração cadastro / Produtos',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-27760',
          },
          {
            assunto: 'Plano Start / Criação de conta',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-28136',
          },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao: 'Pode ser GW ou Emissor',
        total: 6,
        pct: '15,4',
        assuntos: [
          {
            assunto: 'Tratamento automático de erros de emissão',
            qtd: 2,
            pct: '5,1',
            keys: 'CE-28008,CE-27067',
          },
          {
            assunto: 'Notas travadas (geração PDF / vinculação)',
            qtd: 2,
            pct: '5,1',
            keys: 'CE-27940,CE-27840',
          },
          {
            assunto: 'CNPJ contabilidade no XML',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-27777',
          },
          {
            assunto: 'Nota de devolução código 221',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-27553',
          },
        ],
      },
      {
        nome: 'Outros',
        cor: '#C8C5BC',
        descricao: 'Melhorias, acessos, dúvidas',
        total: 2,
        pct: '5,1',
        assuntos: [
          {
            assunto: 'Problemas de acesso',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-28023',
          },
          {
            assunto: 'Divergência de datas no relatório',
            qtd: 1,
            pct: '2,6',
            keys: 'CE-27795',
          },
        ],
      },
    ],
  },
};
