var cidadeDetalhe = {
  id: 'corguinho-ms',
  nome: 'Corguinho',
  uf: 'MS',
  ibge: '5003108',
  constante: 'CodigoIBGE.CorguinhoMS',
  provedorAtual: {
    nome: 'QualitySistemas',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    infoAdicional: 'Emissao em WS e consulta cancelamento e geracao de pdf Robo',
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://notafiscal.qualitysistemas.com.br/webservice/nfserequest.php'
      }
    },
    emissaoSemCertificado: {
      producao: 'https://notafiscal.qualitysistemas.com.br/'
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 5,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de usuário senha e token, portanto, inclua os campos necessários.',
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
    usaItemListaServico: true,
    usaNaturezaOperacao: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 3 a 11 dígitos (somente números).\r\n\r\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código do CNAE. \r\n\r\nEle possui geralmente 7 dígitos (somente números).\r\nExemplo válido: 4930201',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: false,
    numeroRpsDeveSerSequencial: true,
    numeroLoteDeveSerSequencial: true,
    suportaConsultaSequencialRps: true,
    regimesEspecialTributacao: [
      { codigo: '1', nome: '1 - Isenta de ISS' },
      { codigo: '2', nome: '2 - Imune' },
      { codigo: '3', nome: '3 - Exigibilidade Suspensa' },
      { codigo: '4', nome: '4 - Tributável' }
    ]
  }
};

