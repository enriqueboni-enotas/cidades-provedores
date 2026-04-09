var cidadeDetalhe = {
  id: 'garibaldi-rs',
  nome: 'Garibaldi',
  uf: 'RS',
  ibge: '4308607',
  constante: 'CodigoIBGE.GaribaldiRS',
  provedorAtual: {
    nome: 'GIF',
    namespace: null,
    codigoNoProvedor: 'UsaHomologacaoApi',
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://garibaldi-homol.infisc.com.br/services/nfse/ws/Servicos'
      },
      producao: {
        recepcaoLote: 'https://nfse.garibaldi.rs.gov.br/portal/Servicos'
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

