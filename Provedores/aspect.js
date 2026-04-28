var provedorDetalhe = {
  id: 'aspect',
  nome: 'Aspect',
  empresa: 'Aspect',
  stats: {
    municipios: 9
  },
  visaoGeral: [
    { key: 'Nome', val: 'Aspect' },
    { key: 'Total Municipios', val: '9' },
    { key: 'Estados Atendidos', val: ['PA', 'CE'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 3,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: null,
      senha: null,
      token: 'Sua prefeitura exige utilização de token para autenticação',
      fraseSecreta: null
    },
    suportaCancelamentoNFe: false,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: false,
    usaCNAE: false,
    usaNBS: true,
    usaItemListaServico: false,
    usaNaturezaOperacao: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 3 a 11 dígitos (somente números).\r\n\r\nExemplo válido: 204589',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\n– Exemplos: 200101 e 030402',
    suportaEmissaoNFeSemCliente: false,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    naturezasOperacao: [
      { codigo: '1', nome: 'Tributavel' },
      { codigo: '2', nome: 'Não incidência' },
      { codigo: '3', nome: 'Isenção' },
      { codigo: '4', nome: 'Imunidade' }
    ]
  },
  municipiosLista: {
    'aspect': [
      { nome: 'Baião', uf: 'PA', ibge: '1501204' },
      { nome: 'Capistrano', uf: 'CE', ibge: '2302909' },
      { nome: 'Conceição do Araguaia', uf: 'PA', ibge: '1502707' },
      { nome: 'Floresta do Araguaia', uf: 'PA', ibge: '1503044' },
      { nome: 'Jacundá', uf: 'PA', ibge: '1503804' },
      { nome: 'Jaguaribara', uf: 'CE', ibge: '2306801' },
      { nome: 'Morrinhos', uf: 'CE', ibge: '2308906' },
      { nome: 'Ocara', uf: 'CE', ibge: '2309458' },
      { nome: 'São Miguel do Guamá', uf: 'PA', ibge: '1507607' }
    ]
  }
};

