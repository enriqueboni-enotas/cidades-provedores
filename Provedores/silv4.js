var provedorDetalhe = {
  id: 'silv4',
  nome: 'SILv4',
  empresa: 'SILv4',
  stats: {
    municipios: 9
  },
  visaoGeral: [
    { key: 'Nome', val: 'SILv4' },
    { key: 'Total Municipios', val: '9' },
    { key: 'Estados Atendidos', val: ['SP', 'ES'], type: 'uf-badges' }
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
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: false,
    usaCNAE: false,
    usaNBS: true,
    usaItemListaServico: false,
    usaNaturezaOperacao: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 8 dígitos (com formatação).\r\n\r\nExemplo válido: 14.05.01',
    helpRegimeEspecialTributacao: 'Isso identifica o regime especial de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. Exemplo: 07.01.01',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: false,
    numeroRpsDeveSerSequencial: true,
    suportaConsultaSequencialRps: true,
    numeroNotasPorLote: 1,
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
      { codigo: '1', nome: 'Operação tributável' },
      { codigo: '2', nome: 'Imunidade' },
      { codigo: '3', nome: 'Exportação de Serviço' },
      { codigo: '4', nome: 'Não incidência' }
    ]
  },
  municipiosLista: {
    'silv4': [
      { nome: 'Bauru', uf: 'SP', ibge: '3506003' },
      { nome: 'Cariacica', uf: 'ES', ibge: '3201308' },
      { nome: 'Cubatão', uf: 'SP', ibge: '3513504' },
      { nome: 'Franca', uf: 'SP', ibge: '3516200' },
      { nome: 'Itapevi', uf: 'SP', ibge: '3522505' },
      { nome: 'Itaquaquecetuba', uf: 'SP', ibge: '3523107' },
      { nome: 'Jandira', uf: 'SP', ibge: '3525003' },
      { nome: 'Mogi das Cruzes', uf: 'SP', ibge: '3530607' },
      { nome: 'Vila Velha', uf: 'ES', ibge: '3205200' }
    ]
  }
};

