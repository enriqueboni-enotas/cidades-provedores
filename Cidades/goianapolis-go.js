var cidadeDetalhe = {
  id: 'goianapolis-go',
  nome: 'Goianápolis',
  uf: 'GO',
  ibge: '5208400',
  constante: 'CodigoIBGE.GoianapolisGO',
  provedorAtual: {
    nome: 'ArrecadaNet',
    namespace: 'http://megasoftarrecadanet.com.br/xsd/nfse_v01.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://goianapolis.megasoftarrecadanet.com.br/goianapolis/ws/nfseSOAP'
      }
    }
  },
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
    campoLoginProvedor: 0,
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter somente números.\r\n\r\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente 9 dígitos sem formatação.\r\nExemplo válido: 100506213',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    naturezasOperacao: [
      { codigo: '1', nome: 'Tributação no municipio' },
      { codigo: '2', nome: 'Tributação fora do municipio' }
    ]
  }
};

