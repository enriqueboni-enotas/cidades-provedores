var provedorDetalhe = {
  id: 'sigissweb',
  nome: 'SIGISSWeb',
  empresa: 'SIGISSWeb',
  stats: {
    municipios: 10
  },
  visaoGeral: [
    { key: 'Nome', val: 'SIGISSWeb' },
    { key: 'Total Municipios', val: '10' },
    { key: 'Estados Atendidos', val: ['SP'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: 'Informe o usuário utilizado para acessar o sistema de sua prefeitura.',
      senha: 'Informe a senha utilizada para acessar o sistema de sua prefeitura.',
      token: null,
      fraseSecreta: null
    },
    campoLoginProvedor: 1,
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 1 a 8 dígitos (somente números).\r\n\r\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente 4 a 5 dígitos com formatação.\r\nExemplo válido: 1.01',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal. O mesmo deve conter 7 dígitos (somente números).',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    regimesEspecialTributacao: [
      { codigo: '0', nome: ' - ' },
      { codigo: '1', nome: 'Microempresa Municipal' },
      { codigo: '2', nome: 'Estimativa' },
      { codigo: '3', nome: 'Sociedade de Profissionais' },
      { codigo: '4', nome: 'Cooperativa' },
      { codigo: '5', nome: 'MEI - Simples Nacional' },
      { codigo: '6', nome: 'ME EPP - Simples Nacional' }
    ]
  },
  municipiosLista: {
    'sigissweb': [
      { nome: 'Araras', uf: 'SP', ibge: '3503307' },
      { nome: 'Conchal', uf: 'SP', ibge: '3512209' },
      { nome: 'Cordeirópolis', uf: 'SP', ibge: '3512407' },
      { nome: 'Engenheiro Coelho', uf: 'SP', ibge: '3515152' },
      { nome: 'Itirapina', uf: 'SP', ibge: '3523602' },
      { nome: 'Leme', uf: 'SP', ibge: '3526704' },
      { nome: 'Santa Bárbara d\'Oeste', uf: 'SP', ibge: '3545803' },
      { nome: 'Santa Gertrudes', uf: 'SP', ibge: '3546702' },
      { nome: 'Sumaré', uf: 'SP', ibge: '3552403' },
      { nome: 'Valinhos', uf: 'SP', ibge: '3556206' }
    ]
  }
};

