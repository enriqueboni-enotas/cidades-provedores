var provedorDetalhe = {
  id: 'siapgov',
  nome: 'SiapGov',
  empresa: 'SiapGov',
  stats: {
    municipios: 4
  },
  visaoGeral: [
    { key: 'Nome', val: 'SiapGov' },
    { key: 'Total Municipios', val: '4' },
    { key: 'Estados Atendidos', val: ['SP', 'RJ'], type: 'uf-badges' }
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
    suportaCancelamentoNFe: false,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 1 a 8 dígitos (somente números).\n\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui geralmente 7 a 9 dígitos sem formatacao.\nExemplos válidos: 7112000, 711200001',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal. O mesmo deve conter 7 dígitos (somente números).',
    helpItemListaServico: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui geralmente 4 a 5 dígitos com formatação.\nExemplo válido: 1.01',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0
  },
  municipiosLista: {
    'siapgov': [
      { nome: 'Biritiba Mirim', uf: 'SP', ibge: '3506607' }
,      { nome: 'Japeri', uf: 'RJ', ibge: '3302270' }
,      { nome: 'Salesópolis', uf: 'SP', ibge: '3545001' }
,      { nome: 'Santa Branca', uf: 'SP', ibge: '3546009' }
    ]
  }
};
