var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Open',
      icon: '📋',
      itens: [
        {
          key: 'CE-27960',
          destaque: 'Bug no envio de dados de eventos e município de prestação',
        },
        { key: 'CE-27940', destaque: 'Notas travadas em geração de PDF' },
        {
          key: 'CE-27926',
          destaque: 'Monitoramento Preventivo — emissão exterior',
        },
        {
          key: 'CE-27917',
          destaque: 'Erro ao salvar terceira integração WooCommerce',
        },
        { key: 'CE-27909', destaque: 'Cliente MEI com nota negada' },
        {
          key: 'CE-27892',
          destaque:
            'Chapecó/SC — rejeição de DPS duplicada após migração para Portal Nacional',
        },
        {
          key: 'CE-27871',
          destaque: 'Rejeição na emissão de NFS-e para tomadores estrangeiros',
        },
        {
          key: 'CE-27845',
          destaque: 'Erro ao reprocessar vendas — Belo Horizonte/MG',
        },
        {
          key: 'CE-27840',
          destaque:
            'Recorrência de bug — vinculação incorreta de notas em múltiplas vendas Kiwify',
        },
        {
          key: 'CE-27812',
          destaque: 'Remoção de Webhook legado vinculado ao eNotas',
        },
        { key: 'CE-27807', destaque: 'Sincronização NFe SEFAZ — Americana/SP' },
        {
          key: 'CE-27795',
          destaque:
            'Divergência entre competência, data de emissão e relatório de notas',
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
          destaque: 'Erro emissão tomador exterior — Taboão da Serra/SP',
        },
        {
          key: 'CE-27760',
          destaque: 'Alteração descrição de Produtos — Barueri/SP',
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
          destaque: 'Atualização do layout da nota fiscal 2.0 — São Paulo/SP',
        },
        { key: 'CE-27584', destaque: 'Sincronização de notas' },
        {
          key: 'CE-27581',
          destaque: 'Inclusão código NBS no sistema — Maringá/PR',
        },
        { key: 'CE-27553', destaque: 'Código 221 nota de devolução' },
        { key: 'CE-27548', destaque: 'Erro nos valores Sympla' },
        { key: 'CE-27435', destaque: 'Ajuste XML BC-ISSQN — Porto Alegre/RS' },
        {
          key: 'CE-27420',
          destaque: 'Campo do código de serviço bloqueado — Caetité/BA',
        },
        { key: 'CE-27419', destaque: 'Bug integração com APPs' },
        { key: 'CE-27415', destaque: 'Bug no App eNotas' },
        { key: 'CE-27404', destaque: 'Emissão exterior — tomador estrangeiro' },
        {
          key: 'CE-27389',
          destaque: 'Destaque de IBS/CBS — São Bernardo do Campo/SP',
        },
        { key: 'CE-27315', destaque: 'Bug entrada de vendas Sympla' },
      ],
    },
  ],
  compiladoSemanal: {
    periodo: '08/06 a 14/06/2026',
    totalTickets: 30,
    sincronizacao: 3,
    semAssignee: 0,
    reaberturas: 0,
    camadas: [
      {
        nome: 'GW',
        cor: '#F04E23',
        descricao: 'Gateway NFS-e/NF-e com prefeituras',
        total: 14,
        pct: '46,7',
        assuntos: [
          {
            assunto: 'Emissão exterior / Tomador estrangeiro',
            qtd: 4,
            pct: '13,3',
            keys: 'CE-27926,CE-27871,CE-27772,CE-27404',
          },
          {
            assunto: 'Rejeição DPS duplicada / RPS Portal Nacional',
            qtd: 2,
            pct: '6,7',
            keys: 'CE-27892,CE-27739',
          },
          {
            assunto: 'IBS/CBS e tributação municipal',
            qtd: 2,
            pct: '6,7',
            keys: 'CE-27389,CE-27581',
          },
          {
            assunto: 'Sincronização de notas e SEFAZ',
            qtd: 2,
            pct: '6,7',
            keys: 'CE-27807,CE-27584',
          },
          {
            assunto: 'Notas travadas em geração de PDF',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-27940',
          },
          {
            assunto: 'Ajuste XML BC-ISSQN',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-27435',
          },
          {
            assunto: 'Layout nota fiscal / código de serviço',
            qtd: 2,
            pct: '6,7',
            keys: 'CE-27673,CE-27420',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel/Emissor (faturamento, configuração, importação)',
        total: 9,
        pct: '30,0',
        assuntos: [
          {
            assunto: 'Bug entrada de vendas Sympla',
            qtd: 2,
            pct: '6,7',
            keys: 'CE-27548,CE-27315',
          },
          {
            assunto: 'Integração com plataformas (WooCommerce, Iugu, APPs)',
            qtd: 3,
            pct: '10,0',
            keys: 'CE-27917,CE-27778,CE-27419',
          },
          {
            assunto: 'Reprocessamento de vendas / vinculação incorreta Kiwify',
            qtd: 2,
            pct: '6,7',
            keys: 'CE-27845,CE-27840',
          },
          {
            assunto: 'Webhook legado e App eNotas',
            qtd: 2,
            pct: '6,7',
            keys: 'CE-27812,CE-27415',
          },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao: 'Tickets ambíguos (erros genéricos, configuração)',
        total: 5,
        pct: '16,7',
        assuntos: [
          {
            assunto: 'Eventos e município de prestação',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-27960',
          },
          {
            assunto: 'MEI com nota negada',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-27909',
          },
          {
            assunto: 'CNPJ contabilidade no XML / alteração descrição',
            qtd: 2,
            pct: '6,7',
            keys: 'CE-27777,CE-27760',
          },
          {
            assunto: 'Tratamento de erro automático',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-27719',
          },
        ],
      },
      {
        nome: 'Outros',
        cor: '#C8C5BC',
        descricao: 'Melhorias, relatórios, divergências',
        total: 2,
        pct: '6,7',
        assuntos: [
          {
            assunto: 'Divergência de datas em relatório / Reclame Aqui',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-27795',
          },
          {
            assunto: 'Nota de devolução código 221',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-27553',
          },
        ],
      },
    ],
  },
};
