var provedorDetalhe = {
  id: 'etransparencia',
  nome: 'eTransparencia',
  empresa: 'eTransparencia',
  stats: {
    municipios: 13
  },
  visaoGeral: [
    { key: 'Nome', val: 'eTransparencia' },
    { key: 'Total Municipios', val: '13' },
    { key: 'Estados Atendidos', val: ['SP'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 2,
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
    usaCNAE: true,
    usaNBS: true,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 5 a 8 dígitos (somente números).\n\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui geralmente 8 dígitos formatado com um ponto.\nExemplo válido: 08.02.01',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal. O mesmo deve conter 7 dígitos (somente números).',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    numeroRpsDeveSerSequencial: true,
    autenticidadeNota: {
      UsaChaveAcesso: false,
      UsaCnpjPrestador: true,
      UsaCodigoVerificacao: true,
      UsaCpfCnpjTomador: false,
      UsaInscricaoMunicipalPrestador: false,
      UsaNumeroNota: true,
      UsaValorNota: false,
      urlVerificacao: 'https://nfe.etransparencia.com.br/sp.taboaodaserra/nfe/principal.aspx'
    },
    regimesEspecialTributacao: [
      { codigo: '1', nome: 'Tributado' },
      { codigo: '2', nome: 'Isenção / Imunidade' },
      { codigo: '3', nome: 'Suspensão' },
      { codigo: '4', nome: 'Simples Nacional' },
      { codigo: '5', nome: 'ISS Fixo' },
      { codigo: '6', nome: 'Isenção parcial' }
    ]
  },
  municipiosLista: {
    'etransparencia': [
      { nome: 'Bebedouro', uf: 'SP', ibge: '3506102' }
,      { nome: 'Bragança Paulista', uf: 'SP', ibge: '3507605' }
,      { nome: 'Cabreúva', uf: 'SP', ibge: '3508405' }
,      { nome: 'Caieiras', uf: 'SP', ibge: '3509007' }
,      { nome: 'Cajuru', uf: 'SP', ibge: '3509403' }
,      { nome: 'Caçapava', uf: 'SP', ibge: '3508504' }
,      { nome: 'Ferraz de Vasconcelos', uf: 'SP', ibge: '3515707' }
,      { nome: 'Itapeva', uf: 'SP', ibge: '3522406' }
,      { nome: 'Mairiporã', uf: 'SP', ibge: '3528502' }
,      { nome: 'Mococa', uf: 'SP', ibge: '3530508' }
,      { nome: 'Piquete', uf: 'SP', ibge: '3538501' }
,      { nome: 'Poá', uf: 'SP', ibge: '3539806' }
,      { nome: 'Taboão da Serra', uf: 'SP', ibge: '3552809' }
    ]
  }
};
