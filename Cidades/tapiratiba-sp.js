var cidadeDetalhe = {
  id: 'tapiratiba-sp',
  nome: 'Tapiratiba',
  uf: 'SP',
  ibge: '3553609',
  constante: 'CodigoIBGE.TapiratibaSP',
  provedorAtual: {
    nome: 'EddyData',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'http://tapiratiba.eddydata.com/enota/remot/homologacao/'
      },
      producao: {
        recepcaoLote: 'http://tapiratiba.eddydata.com/enota/remot/producao/',
        consultaLote: 'http://tapiratiba.eddydata.com/enota/remot/get_producao/'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 3,
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
    usaDescricaoServico: true,
    usaCNAE: false,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter somente números.\r\n\r\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nCódigo deve conter de 4 a 5 dígitos.\r\nExemplo válido: (1.08, 17.09)',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpItemListaServico: 'Informe aqui o item lista serviço que identifica o serviço prestado na nota fiscal. \r\n\r\nCódigo deve conter de 4 a 5 dígitos.\r\nExemplo válido: (1.08, 17.09)',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    naturezasOperacao: [
      { codigo: 'N', nome: 'Normal' },
      { codigo: 'I', nome: 'Imune' },
      { codigo: 'S', nome: 'Suspenso' }
    ]
  }
};

