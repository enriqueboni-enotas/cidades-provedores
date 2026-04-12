var cidadeDetalhe = {
  id: 'iaras-sp',
  nome: 'Iaras',
  uf: 'SP',
  ibge: '3519253',
  constante: 'CodigoIBGE.IarasSP',
  provedorAtual: {
    nome: 'ISSMAP',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/teste/enviar/50',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/50',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/50'
      },
      producao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/enviar/50',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/50',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/50',
        cancelamentoNFe: 'https://www.issmap.com.br/ws/rps/cancela/50'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 5,
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
    usaDescricaoServico: false,
    usaCNAE: false,
    usaNBS: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter somente números.\r\n\r\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente 6 dígitos sem formatação.\r\nExemplo válido: 170101',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    numeroRpsDeveSerSequencial: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0
  }
};

