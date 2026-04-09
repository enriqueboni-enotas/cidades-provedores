var cidadeDetalhe = {
  id: 'rancharia-sp',
  nome: 'Rancharia',
  uf: 'SP',
  ibge: '3542206',
  constante: 'CodigoIBGE.RanchariaSP',
  provedorAtual: {
    nome: 'RLZ',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'http://cidadaoonline.rancharia.sp.gov.br/amfphp/services/RLZ/webservice/server.php'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 3,
    assinaturaDigital: 0,
    suportaCancelamentoNFe: false,
    valorCancelamentoNFe: 45,
    usaAEDF: true,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter até 20 dígitos (somente números). Exemplo válido: 12108800',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. Ele possui geralmente 4 dígitos (somente números). Exemplo válido: 1401 e 0105',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: false,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: false,
    numeroNotasPorLote: 1,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0
  }
};

