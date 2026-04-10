var provedorDetalhe = {
  id: 'kdssistemas',
  nome: 'KdsSistemas',
  empresa: 'KdsSistemas',
  stats: {
    municipios: 1
  },
  visaoGeral: [
    { key: 'Nome', val: 'KdsSistemas' },
    { key: 'Total Municipios', val: '1' },
    { key: 'Estados Atendidos', val: ['PI'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: null,
      senha: null,
      token: 'Sua prefeitura exige utilização de usuário e senha para autenticação',
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
    usaNaturezaOperacao: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 3 a 11 dígitos (somente números).\n\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. Usar 4 ou 5 dígitos com formatação, fazendo a separação com “ponto” (Ex: 8.02, 14.01).',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informar a Classificação no CNAE que se relacione com Item da Lista de Serviço',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal corresponde à classificação do contribuinte na tabela da LC\n116. Usar 4 ou 5 dígitos com formatação, fazendo a separação com “ponto” (Ex: 8.02, 14.01).',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: false,
    numeroDoRpsSeraNumeroDaNota: true,
    naturezasOperacao: [
      { codigo: '0', nome: '0 – Tributado no Município' },
      { codigo: '1', nome: '1 – Tributado Fora do Município' },
      { codigo: '2', nome: '2 – Isento / Imune' },
      { codigo: '3', nome: '3 – Suspensão / Decisão Judicial' },
      { codigo: '4', nome: '4 – Simples Nacional' },
      { codigo: '5', nome: '5 – Retido no Município' }
    ]
  },
  municipiosLista: {
    'kdssistemas': [
      { nome: 'Campo Maior', uf: 'PI', ibge: '2202208' }
    ]
  }
};
