var provedorDetalhe = {
  id: 'sisgenfe',
  nome: 'SisGenFe',
  empresa: 'SisGenFe',
  stats: {
    municipios: 3
  },
  visaoGeral: [
    { key: 'Nome', val: 'SisGenFe' },
    { key: 'Total Municipios', val: '3' },
    { key: 'Estados Atendidos', val: ['PE'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 5,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: 'Sua prefeitura exige utilização do usuário e senha para autenticação',
      senha: 'Sua prefeitura exige utilização do usuário e senha para autenticação',
      token: 'Sua prefeitura exige utilização do Token (Chave do aplicativo). Entre em contato com o suporte do município para adiquirir essa informação.',
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: false,
    usaCNAE: false,
    usaItemListaServico: false,
    usaNaturezaOperacao: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 3 a 11 dígitos (somente números).\r\n\r\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\n– O código de serviço é localizado no portal da prefreitura, exemplos válidos: 1323 e 1325',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: false,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: false
  },
  municipiosLista: {
    'sisgenfe': [
      { nome: 'Barreiros', uf: 'PE', ibge: '2601409' },
      { nome: 'Inajá', uf: 'PE', ibge: '2607000' },
      { nome: 'Taquaritinga do Norte', uf: 'PE', ibge: '2615003' }
    ]
  }
};

