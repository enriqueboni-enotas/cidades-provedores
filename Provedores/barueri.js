var provedorDetalhe = {
  id: 'barueri',
  nome: 'Barueri',
  empresa: 'Barueri',
  stats: {
    municipios: 1
  },
  visaoGeral: [
    { key: 'Nome', val: 'Barueri' },
    { key: 'Total Municipios', val: '1' },
    { key: 'Estados Atendidos', val: ['SP'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 2,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: 'Informe o usuário utilizado para acessar o sistema de sua prefeitura.',
      senha: 'Informe a senha utilizada para acessar o sistema de sua prefeitura.',
      token: null,
      fraseSecreta: null
    },
    campoLoginProvedor: 0,
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter somente números, ou, números e letras (sem formatação).\r\n\r\nExemplos válidos: 11356, 4AB4514',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente 12 dígitos com formatação.\r\nExemplo válido: 01.01.01.220',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: false,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: true,
    numeroLoteNaoReutilizavel: true,
    numeroNotasPorLote: 1,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    naturezasOperacao: [
      { codigo: '1', nome: 'Tributação no municipio' },
      { codigo: '2', nome: 'Tributação fora do municipio' },
      { codigo: '3', nome: 'Tributação fora do país' }
    ]
  },
  municipiosLista: {
    'barueri': [
      { nome: 'Barueri', uf: 'SP', ibge: '3505708' }
    ]
  }
};

