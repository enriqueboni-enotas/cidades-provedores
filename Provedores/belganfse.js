var provedorDetalhe = {
  id: 'belganfse',
  nome: 'BelgaNfse',
  empresa: 'BelgaNfse',
  stats: {
    municipios: 2
  },
  visaoGeral: [
    { key: 'Nome', val: 'BelgaNfse' },
    { key: 'Total Municipios', val: '2' },
    { key: 'Estados Atendidos', val: ['PI'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 3,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: null,
      senha: null,
      token: 'Sua prefeitura exige utilização de token',
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: false,
    usaCNAE: false,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 3 a 11 dígitos (somente números).\r\n\r\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente 9 dígitos (somente números).\r\nExemplo válido: 631940000',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: false,
    numeroRpsDeveSerSequencial: true,
    suportaConsultaSequencialRps: true,
    naturezasOperacao: [
      { codigo: '1', nome: '1 – Imune' },
      { codigo: '2', nome: '2 – Isento' },
      { codigo: '3', nome: '3 – Tributável' },
      { codigo: '4', nome: '4 – Exigibilidade suspensa' }
    ]
  },
  municipiosLista: {
    'belganfse': [
      { nome: 'Água Branca', uf: 'PI', ibge: '2200202' },
      { nome: 'Oeiras', uf: 'PI', ibge: '2207009' }
    ]
  }
};

