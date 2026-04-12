var cidadeDetalhe = {
  id: 'pardinho-sp',
  nome: 'Pardinho',
  uf: 'SP',
  ibge: '3536109',
  constante: 'CodigoIBGE.PardinhoSP',
  provedorAtual: {
    nome: 'GeisWeb',
    namespace: 'http://www.gerenciadecidades.com.br/xsd/envio_lote_rps.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://www.gerenciadecidades.com.br/homologacao/modelo/webservice/GeisWebServiceImpl.php'
      },
      producao: {
        recepcaoLote: 'https://www.gerenciadecidades.com.br/producao/pardinho/webservice/GeisWebServiceImpl.php',
        downloadPDF: 'https://geisweb.net.br/pardinho/'
      }
    }
  },
  configuracaoProvedor: {
    assinaturaDigital: 2,
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: null,
      senha: null,
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    usaItemListaServico: false,
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente 5 dígitos (somente números).\r\nExemplo válido: 03115',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: false,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    regimesEspecialTributacao: [
      { codigo: '0', nome: ' - ' },
      { codigo: '1', nome: 'Microempresa Municipal' },
      { codigo: '2', nome: 'Estimativa' },
      { codigo: '3', nome: 'Sociedade de Profissionais' },
      { codigo: '4', nome: 'Cooperativa' },
      { codigo: '5', nome: 'MEI - Simples Nacional' },
      { codigo: '6', nome: 'ME EPP - Simples Nacional' }
    ],
    naturezasOperacao: [
      { codigo: 'N', nome: 'devido no município pelo prestador' },
      { codigo: 'T', nome: 'devido no município pelo tomador' },
      { codigo: 'P', nome: 'prestadores de serviços cadastrados no Simples Nacional ou MEI' },
      { codigo: 'R', nome: 'prestadores estabelecidos no município com o imposto devido em outro município' }
    ]
  }
};

