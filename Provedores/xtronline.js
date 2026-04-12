var provedorDetalhe = {
  id: 'xtronline',
  nome: 'XTROnline',
  empresa: 'XTROnline',
  stats: {
    municipios: 5
  },
  visaoGeral: [
    { key: 'Nome', val: 'XTROnline' },
    { key: 'Total Municipios', val: '5' },
    { key: 'Estados Atendidos', val: ['CE'], type: 'uf-badges' }
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
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 1 a 8 dígitos (somente números).\r\n\r\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente 4 a 5 dígitos sem formatação.\r\nExemplo válido: 101, 1701',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    naturezasOperacao: [
      { codigo: '1', nome: 'Tributação no municipio' },
      { codigo: '2', nome: 'Tributação fora do municipio' },
      { codigo: '3', nome: 'Exigibilidade suspensa - Decisão Judicial' },
      { codigo: '4', nome: 'Exigibilidade suspensa - Processo Administrativo' }
    ]
  },
  municipiosLista: {
    'xtronline': [
      { nome: 'Baturité', uf: 'CE', ibge: '2302107' },
      { nome: 'Brejo Santo', uf: 'CE', ibge: '2302503' },
      { nome: 'Jaguaruana', uf: 'CE', ibge: '2307007' },
      { nome: 'Marco', uf: 'CE', ibge: '2307809' },
      { nome: 'Várzea Alegre', uf: 'CE', ibge: '2314003' }
    ]
  }
};

