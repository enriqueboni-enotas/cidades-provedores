var provedorDetalhe = {
  id: 'saopaulo',
  nome: 'SaoPaulo',
  empresa: 'SaoPaulo',
  stats: {
    municipios: 1
  },
  visaoGeral: [
    { key: 'Nome', val: 'SaoPaulo' },
    { key: 'Total Municipios', val: '1' },
    { key: 'Estados Atendidos', val: ['SP'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 1,
    assinaturaDigital: 2,
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: null,
      senha: null,
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    usaNBS: true,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter 8 dígitos (somente números).\n\nExemplo válido: 11356083',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui geralmente 5 dígitos (somente números).\nExemplo válido: 03115',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    numeroNotasPorLote: 30,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    regimesEspecialTributacao: [
      { codigo: '0', nome: 'Normal' },
      { codigo: '1', nome: 'Isenta' },
      { codigo: '2', nome: 'Imune' },
      { codigo: '3', nome: 'Suspenso / decisão judicial' }
    ],
    naturezasOperacao: [
      { codigo: 'T', nome: 'Tributado no municipio' },
      { codigo: 'F', nome: 'Tributado fora do municipio' },
      { codigo: 'A', nome: 'Tributado no municipio, porém isento' },
      { codigo: 'B', nome: 'Tributado fora do municipio porém isento' },
      { codigo: 'D', nome: 'Tributado no municipio porém com isenção parcial' },
      { codigo: 'M', nome: 'Tributado no municipio, porém com indicação de imunidade subjetiva' },
      { codigo: 'N', nome: 'Tributado fora do municipio, porém com indicação de imunidade subjetiva' },
      { codigo: 'R', nome: 'Tributado no municipio, porém com indicação de imunidade objetiva' },
      { codigo: 'S', nome: 'Tributado fora do municipio, porém com indicação de imunidade objetiva' },
      { codigo: 'X', nome: 'Tributado no municipio, porém Exigibilidade Suspensa' },
      { codigo: 'V', nome: 'Tributado Fora do municipio, porém Exigibilidade Suspensa' },
      { codigo: 'P', nome: 'Exportação de Serviços' }
    ]
  },
  municipiosLista: {
    'saopaulo': [
      { nome: 'São Paulo', uf: 'SP', ibge: '3550308' }
    ]
  }
};
