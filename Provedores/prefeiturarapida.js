var provedorDetalhe = {
  id: 'prefeiturarapida',
  nome: 'PrefeituraRapida',
  empresa: 'PrefeituraRapida',
  stats: {
    municipios: 2
  },
  visaoGeral: [
    { key: 'Nome', val: 'PrefeituraRapida' },
    { key: 'Total Municipios', val: '2' },
    { key: 'Estados Atendidos', val: ['RJ'], type: 'uf-badges' }
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
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: false,
    usaCNAE: true,
    usaNBS: true,
    usaItemListaServico: false,
    usaNaturezaOperacao: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 3 a 11 dígitos (somente números).\n\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\n– Destina-se a receber a indicação do tratamento específico de cada Município (Ex: O contribuinte possui um benefício especial que tem \no código 123, está classificado na atividade 07.02 que no município recebeu um detalhamento criando então o item 07.02.01). Este campo deverá ser preenchido\nentão com o código 070201. Antes de informar este código é importante que consulte a Secretaria de Fazenda de seu Município',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informar a Classificação no CNAE que se relacione com Item da Lista de Serviço',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal corresponde à classificação do contribuinte na tabela da LC\n116. Usar 04 (quatro) dígitos, fazendo a separação com “ponto” (Ex: 08.02, 14.01).',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: false,
    numeroRpsDeveSerSequencial: true,
    suportaConsultaSequencialRps: true,
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
    'prefeiturarapida': [
      { nome: 'Itaboraí', uf: 'RJ', ibge: '3301900' }
,      { nome: 'Vassouras', uf: 'RJ', ibge: '3306206' }
    ]
  }
};
