var provedorDetalhe = {
  id: 'portalfacil',
  nome: 'PortalFacil',
  empresa: 'PortalFacil',
  stats: {
    municipios: 9
  },
  visaoGeral: [
    { key: 'Nome', val: 'PortalFacil' },
    { key: 'Total Municipios', val: '9' },
    { key: 'Estados Atendidos', val: ['MG', 'MA'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: null,
      senha: null,
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 60,
    usaCNAE: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\r\n\r\nExemplos válidos: 06421008 ou 6348122',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal com 3 ou 4 dígitos (somente números) que identifica o serviço prestado na nota fiscal.\r\n\r\nEsse código é identificado na sua prefeitura como Serviço e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, na seção Código de Serviço.\r\nExemplos válidos: 801 ou 1401',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado. \r\n \r\n Você precisa preencher o item da lista de serviço com 5 dígitos mantendo a formatação.\r\n Exemplos válidos: 17.02 ou 08.02',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
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
      { codigo: '1', nome: 'Exigível' },
      { codigo: '2', nome: 'Não incidência' },
      { codigo: '3', nome: 'Isenção' },
      { codigo: '4', nome: 'Exportação' },
      { codigo: '5', nome: 'Imunidade' },
      { codigo: '6', nome: 'Exigibilidade suspensa por decisão judicial' },
      { codigo: '7', nome: 'Exigilidade suspensa por procedimento administrativo' }
    ]
  },
  municipiosLista: {
    'portalfacil': [
      { nome: 'Água Boa', uf: 'MG', ibge: '3100609' },
      { nome: 'Aimorés', uf: 'MG', ibge: '3101102' },
      { nome: 'Além Paraiba', uf: 'MG', ibge: '3101508' },
      { nome: 'Colinas', uf: 'MA', ibge: '2103505' },
      { nome: 'Governador Nunes Freire', uf: 'MA', ibge: '2104677' },
      { nome: 'Ipaba', uf: 'MG', ibge: '3131158' },
      { nome: 'João Lisboa', uf: 'MA', ibge: '2105500' },
      { nome: 'Marliéria', uf: 'MG', ibge: '3140308' },
      { nome: 'Santa Inês', uf: 'MA', ibge: '2109908' }
    ]
  }
};

