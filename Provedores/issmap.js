var provedorDetalhe = {
  id: 'issmap',
  nome: 'ISSMAP',
  empresa: 'ISSMAP',
  stats: {
    municipios: 12
  },
  visaoGeral: [
    { key: 'Nome', val: 'ISSMAP' },
    { key: 'Total Municipios', val: '12' },
    { key: 'Estados Atendidos', val: ['SP'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 5,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: null,
      senha: null,
      token: 'Informe o token de acesso a api do sistema de emissão da prefeitura',
      fraseSecreta: null
    },
    campoLoginProvedor: 0,
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: false,
    usaCNAE: false,
    usaNBS: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter somente números.\r\n\r\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente 6 dígitos sem formatação.\r\nExemplo válido: 170101',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    numeroRpsDeveSerSequencial: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0
  },
  municipiosLista: {
    'issmap': [
      { nome: 'Águas de Santa Bárbara', uf: 'SP', ibge: '3500550' },
      { nome: 'Arandu', uf: 'SP', ibge: '3503109' },
      { nome: 'Canitar', uf: 'SP', ibge: '3510153' },
      { nome: 'Chavantes', uf: 'SP', ibge: '3557204' },
      { nome: 'Espírito Santo do Turvo', uf: 'SP', ibge: '3515194' },
      { nome: 'Iaras', uf: 'SP', ibge: '3519253' },
      { nome: 'Manduri', uf: 'SP', ibge: '3528601' },
      { nome: 'Piraju', uf: 'SP', ibge: '3538808' },
      { nome: 'Ribeirão do Sul', uf: 'SP', ibge: '3543204' },
      { nome: 'São Pedro do Turvo', uf: 'SP', ibge: '3550506' },
      { nome: 'Sarutaiá', uf: 'SP', ibge: '3551207' },
      { nome: 'Timburi', uf: 'SP', ibge: '3554607' }
    ]
  }
};

