var provedorDetalhe = {
  id: 'powersistemas',
  nome: 'PowerSistemas',
  empresa: 'PowerSistemas',
  stats: {
    municipios: 1
  },
  visaoGeral: [
    { key: 'Nome', val: 'PowerSistemas' },
    { key: 'Total Municipios', val: '1' },
    { key: 'Estados Atendidos', val: ['MA'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: null,
      senha: null,
      token: null,
      fraseSecreta: null
    },
    usaCNAE: true,
    helpInscricaoMunicipal: 'Informe somente os números sem ponto nem formatação.\n\nExemplos válidos: 39740 ou 45326',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal que identifica o serviço prestado na nota fiscal. \n            Em algumas cidades esse código é conhecido como código de tributação.\n\n            Exemplo válido: 3312103',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal. O mesmo deve conter 7 dígitos (somente números).',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado.\n\n Você precisa preencher o item da lista de serviço mantendo a formatação.\n Exemplos válidos: 17.02 ou 08.02',
    regimesEspecialTributacao: [
      { codigo: '0', nome: ' - ' },
      { codigo: '1', nome: 'Microempresa Municipal' },
      { codigo: '2', nome: 'Estimativa' },
      { codigo: '3', nome: 'Sociedade de Profissionais' },
      { codigo: '4', nome: 'Cooperativa' },
      { codigo: '5', nome: 'MEI - Simples Nacional' },
      { codigo: '6', nome: 'ME EPP - Simples Nacional' }
    ],
    naturezasOperacao: [
      { codigo: '1', nome: 'Exigivel' },
      { codigo: '2', nome: 'Nao incidencia' },
      { codigo: '3', nome: 'Isenção' },
      { codigo: '4', nome: 'Exportação' },
      { codigo: '5', nome: 'Imunidade' },
      { codigo: '6', nome: 'Exigibilidade Suspensa por Decisão Judicial' },
      { codigo: '7', nome: 'Exigibilidade Suspensa por Processo Administrativo' }
    ]
  },
  municipiosLista: {
    'powersistemas': [
      { nome: 'Chapadinha', uf: 'MA', ibge: '2103208' }
    ]
  }
};
