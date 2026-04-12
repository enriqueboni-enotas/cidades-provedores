var provedorDetalhe = {
  id: 'presconinformatica',
  nome: 'PresconInformatica',
  empresa: 'PresconInformatica',
  stats: {
    municipios: 1
  },
  visaoGeral: [
    { key: 'Nome', val: 'PresconInformatica' },
    { key: 'Total Municipios', val: '1' },
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
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 5 a 8 dígitos (somente números).\r\n\r\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente 5 dígitos formatado com um ponto.\r\nExemplo válido: 08.02',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal e é formado por 4 dígitos (somente números).\r\n\r\nEsse código é identificado na sua prefeitura como Sub-Item e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, no seção Código de Serviço.\r\nExemplos válidos: 1211 ou 0802',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: false,
    numeroDoRpsSeraNumeroDaNota: true,
    numeroNotasPorLote: 1,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    regimesEspecialTributacao: [
      { codigo: '1', nome: 'Normal' },
      { codigo: '2', nome: 'Isenta' },
      { codigo: '3', nome: 'Imune' },
      { codigo: '4', nome: 'ME EPP - Simples Nacional' },
      { codigo: '5', nome: 'MEI' }
    ]
  },
  municipiosLista: {
    'presconinformatica': [
      { nome: 'Rio Grande da Serra', uf: 'SP', ibge: '3544103' }
    ]
  }
};

