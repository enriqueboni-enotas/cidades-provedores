var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Under Analysis',
      icon: '🔍',
      itens: [
        { key: 'CE-27108', destaque: 'Fila travada em Brasília/DF' },
        { key: 'CE-27102', destaque: 'Fila travada em Blumenau/SC' },
        {
          key: 'CE-27061',
          destaque: 'Erro emissão tomador exterior em Itapipoca/CE',
        },
        { key: 'CE-26961', destaque: 'Adequação fiscal XML em Brasília/DF' },
        {
          key: 'CE-26893',
          destaque: 'Envio dos campos de evento em Barueri/SP',
        },
        { key: 'CE-26829', destaque: 'Nota emitida com informação incorreta' },
        { key: 'CE-26793', destaque: 'Erro desconhecido emissão exterior' },
        { key: 'CE-26784', destaque: 'Erro desconhecido — correção pendente' },
        { key: 'CE-26731', destaque: 'Falha na criação de boleto' },
        {
          key: 'CE-26698',
          destaque: 'Registro de histórico de alterações no cadastro',
        },
        { key: 'CE-26654', destaque: 'Erro desconhecido em Barueri/SP' },
      ],
    },
    {
      status: 'Reopened',
      icon: '🔄',
      itens: [
        {
          key: 'CE-26530',
          destaque: 'Vendas Eduzz não entram automaticamente',
        },
        { key: 'CE-25951', destaque: 'infAdFisco em Pinhais/PR' },
      ],
    },
    {
      status: 'Waiting N2',
      icon: '⏳',
      itens: [
        { key: 'CE-26934', destaque: 'Conta Plus anual com layout de Start' },
        { key: 'CE-26036', destaque: 'Correção de XML de notas do exterior' },
      ],
    },
    {
      status: 'Open',
      icon: '📋',
      itens: [
        { key: 'CE-27252', destaque: 'Fila travada em Novo Hamburgo/RS' },
        {
          key: 'CE-27211',
          destaque: 'Falha carregamento do histórico na aba empresa',
        },
        { key: 'CE-27179', destaque: 'Fila travada em Mateiros/TO' },
        { key: 'CE-27156', destaque: 'Erro desconhecido em Barueri/SP' },
        { key: 'CE-27152', destaque: '[Autofix] gw-retornar-nf-negada' },
        { key: 'CE-27151', destaque: 'Bug na atualização do cadastro' },
        {
          key: 'CE-27117',
          destaque: 'Importação de retroativas não realizada',
        },
        { key: 'CE-27106', destaque: 'Nota em emissão em Barueri/SP' },
        {
          key: 'CE-27104',
          destaque: 'Adequação fiscal — fila travada em Navegantes/SC',
        },
        {
          key: 'CE-27103',
          destaque: 'Clientes MEI com nota negada por autenticação',
        },
        { key: 'CE-27092', destaque: 'Integração Pagar.me' },
        { key: 'CE-27067', destaque: 'Ajuste integração Pagar.me 2.0' },
        { key: 'CE-26803', destaque: 'Falha na importação de vendas (Start)' },
        {
          key: 'CE-26705',
          destaque: 'Inclusão de CST — NFS-e em Caxias do Sul/RS',
        },
        {
          key: 'CE-25563',
          destaque: 'Melhoria nos campos PIS/COFINS (Portal Nacional)',
        },
      ],
    },
  ],
  compiladoSemanal: {
    periodo: '25/05 a 31/05/2026',
    totalTickets: 30,
    sincronizacao: 4,
    semAssignee: 12,
    reaberturas: 2,
    camadas: [
      {
        nome: 'GW',
        cor: '#F04E23',
        descricao: 'Gateway NFS-e/NF-e com prefeituras',
        total: 15,
        pct: '50,0',
        assuntos: [
          {
            assunto: 'Fila travada / nota em emissão',
            qtd: 6,
            pct: '20,0',
            keys: 'CE-27252,CE-27179,CE-27108,CE-27106,CE-27104,CE-27102',
          },
          {
            assunto: 'Emissão exterior / Tomador estrangeiro',
            qtd: 4,
            pct: '13,3',
            keys: 'CE-27061,CE-26793,CE-26784,CE-26036',
          },
          {
            assunto: 'Erro desconhecido em Barueri/SP',
            qtd: 3,
            pct: '10,0',
            keys: 'CE-27156,CE-26893,CE-26654',
          },
          {
            assunto: 'Adequação fiscal / XML',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26961',
          },
          {
            assunto: 'Autenticação MEI (usuário e senha)',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-27103',
          },
        ],
      },
      {
        nome: 'Emissor',
        cor: '#8A8A8A',
        descricao: 'Painel/emissor, faturamento, importação',
        total: 9,
        pct: '30,0',
        assuntos: [
          {
            assunto: 'Integração Pagar.me / Eduzz',
            qtd: 3,
            pct: '10,0',
            keys: 'CE-27092,CE-27067,CE-26530',
          },
          {
            assunto: 'Importação de vendas / retroativas',
            qtd: 2,
            pct: '6,7',
            keys: 'CE-27117,CE-26803',
          },
          {
            assunto: 'Bug cadastro / histórico',
            qtd: 2,
            pct: '6,7',
            keys: 'CE-27211,CE-27151',
          },
          {
            assunto: 'Falha criação de boleto',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26731',
          },
          {
            assunto: 'Conta Plus com layout Start',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26934',
          },
        ],
      },
      {
        nome: 'GW/Emissor',
        cor: '#707780',
        descricao: 'Tickets ambíguos entre camadas',
        total: 4,
        pct: '13,3',
        assuntos: [
          {
            assunto: 'Nota emitida com informação incorreta',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26829',
          },
          {
            assunto: 'infAdFisco em Pinhais/PR',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-25951',
          },
          {
            assunto: 'Inclusão de CST — NFS-e',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26705',
          },
          {
            assunto: 'Melhoria PIS/COFINS Portal Nacional',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-25563',
          },
        ],
      },
      {
        nome: 'Outros',
        cor: '#C8C5BC',
        descricao: 'Melhorias, integrações, auditoria',
        total: 2,
        pct: '6,7',
        assuntos: [
          {
            assunto: 'Registro de histórico de alterações',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-26698',
          },
          {
            assunto: '[Autofix] gw-retornar-nf-negada',
            qtd: 1,
            pct: '3,3',
            keys: 'CE-27152',
          },
        ],
      },
    ],
  },
};
