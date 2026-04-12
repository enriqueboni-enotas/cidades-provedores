var cidadeDetalhe = {
  id: 'passira-pe',
  nome: 'Passira',
  uf: 'PE',
  ibge: '2610509',
  constante: 'CodigoIBGE.PassiraPE',
  provedorAtual: {
    nome: 'EBM',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: '04',
    robo: false,
    webService: true,
    infoAdicional: 'codigoNoProvedor é o código da prefeitura entrar em contato para pegar o id',
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'http://www.ebminformatica.com/enota25/site/importacao/wsimputnotas'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 3,
    assinaturaDigital: 0,
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
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: false,
    usaCNAE: false,
    usaItemListaServico: false,
    usaNaturezaOperacao: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 3 a 11 dígitos (somente números).\r\n\r\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\n– Destina-se a receber a indicação do tratamento específico de cada Município (Ex: O contribuinte possui um benefício especial que tem \r\no código 123, está classificado na atividade 07.02 que no município recebeu um detalhamento criando então o item 07.02.01). Este campo deverá ser preenchido\r\nentão com o código 123070201. Antes de informar este código é importante que consulte a Secretaria de Fazenda de seu Município',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informar a Classificação no CNAE que se relacione com Item da Lista de Serviço',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal corresponde à classificação do contribuinte na tabela da LC\r\n116. Usar 04 (quatro) dígitos, fazendo a separação com “ponto” (Ex: 08.02, 14.01).',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: false,
    suportaConsultaSequencialRps: true,
    naturezasOperacao: [
      { codigo: '1', nome: 'Exigível' },
      { codigo: '2', nome: 'Não Incidência' },
      { codigo: '3', nome: 'Isenção' },
      { codigo: '4', nome: 'Exportação' },
      { codigo: '5', nome: 'Imunidade' },
      { codigo: '6', nome: 'Exigibilidade Suspensa por Decisão Judicial' },
      { codigo: '7', nome: 'Exigibilidade Suspensa por Processo Administrativo' }
    ]
  }
};

