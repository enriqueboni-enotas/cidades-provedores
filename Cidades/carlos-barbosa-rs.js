var cidadeDetalhe = {
  id: 'carlos-barbosa-rs',
  nome: 'Carlos Barbosa',
  uf: 'RS',
  ibge: '4304804',
  constante: 'CodigoIBGE.CarlosBarbosaRS',
  provedorAtual: {
    nome: 'GIF',
    namespace: null,
    codigoNoProvedor: 'UsaVersaoApi',
    robo: false,
    webService: true,
    infoAdicional: 'UsaVersaoApi => usa versão api\n					EmiteUmaNotaPorLote => emite apeenas uma nota por lote\n					NaoEnviaSerieRPS => não envia a série do RPS\n					AceitaTomadorSemEndereco => aceita tomador sem endereço',
    urls: {
      homologacao: {
        recepcaoLote: 'https://carlosbarbosa-homol.infisc.com.br/services/nfse/ws/Servicos'
      },
      producao: {
        recepcaoLote: 'https://nfse.carlosbarbosa.rs.gov.br/services/nfse/ws/Servicos'
      }
    }
  },
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
    valorCancelamentoNFe: 10,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    usaNBS: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 1 a 10 dígitos (somente números).\r\n\r\nExemplo válido: 11356083',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente 3 a 4 dígitos (somente números).\r\nExemplo válido: 548',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado.\r\n \r\n Você precisa preencher o item da lista de serviço sem a formatação.\r\n Exemplos válidos: 1702 ou 802',
    suportaEmissaoNFeSemCliente: false,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: false,
    numeroRpsDeveSerSequencial: true,
    numeroNotasPorLote: 1,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    regimesEspecialTributacao: [
      { codigo: '1', nome: 'Simples Nacional' },
      { codigo: '2', nome: 'SIMEI' },
      { codigo: '3', nome: 'Normal' }
    ]
  }
};

