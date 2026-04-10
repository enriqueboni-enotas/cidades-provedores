var provedorDetalhe = {
  id: 'rlzv3',
  nome: 'RLZv3',
  empresa: 'RLZv3',
  stats: {
    municipios: 8
  },
  visaoGeral: [
    { key: 'Nome', val: 'RLZv3' },
    { key: 'Total Municipios', val: '8' },
    { key: 'Estados Atendidos', val: ['SP', 'MT'], type: 'uf-badges' }
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
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 8 dígitos (com formatação).\n\nExemplo válido: 14.05.01',
    helpRegimeEspecialTributacao: 'Isso identifica o regime especial de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. Exemplo: 07.01.01',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: false,
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
    'rlzv3': [
      { nome: 'Barretos', uf: 'SP', ibge: '3505500' }
,      { nome: 'Catanduva', uf: 'SP', ibge: '3511102' }
,      { nome: 'Cáceres', uf: 'MT', ibge: '5102504' }
,      { nome: 'Ilha Solteira', uf: 'SP', ibge: '3520442' }
,      { nome: 'Jales', uf: 'SP', ibge: '3524808' }
,      { nome: 'Pereira Barreto', uf: 'SP', ibge: '3537404' }
,      { nome: 'Primavera do Leste', uf: 'MT', ibge: '5107040' }
,      { nome: 'Valentim Gentil', uf: 'SP', ibge: '3556107' }
    ]
  }
};
