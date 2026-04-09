var cidadeDetalhe = {
  id: 'salvador-ba',
  nome: 'Salvador',
  uf: 'BA',
  ibge: '2927408',
  constante: 'CodigoIBGE.SalvadorBA',
  provedorAtual: {
    nome: 'Salvador',
    namespace: 'http://www.abrasf.org.br/ABRASF/arquivos/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://notahml.salvador.ba.gov.br/rps/ENVIOLOTERPS/EnvioLoteRPS.svc',
        consultaSituacaoLote: 'https://notahml.salvador.ba.gov.br/rps/CONSULTASITUACAOLOTERPS/ConsultaSituacaoLoteRPS.svc',
        consultaLote: 'https://notahml.salvador.ba.gov.br/rps/CONSULTALOTERPS/ConsultaLoteRPS.svc',
        consultaRps: 'https://notahml.salvador.ba.gov.br/rps/CONSULTANFSERPS/ConsultaNfseRPS.svc',
        consultaNFe: 'https://notahml.salvador.ba.gov.br/rps/CONSULTANFSE/ConsultaNfse.svc',
        downloadPDF: 'https://nfse.salvador.ba.gov.br/site/contribuinte/nota/notaprintimg.aspx?nf={0}&inscricao={1}&verificacao={2}&returnurl=%2fsite%2fpublico%2fverificacao.aspx%3ftipo%3d0&imprimir=1&cancelada=1'
      },
      producao: {
        autenticacao: 'https://nfse.salvador.ba.gov.br/loginICP.aspx',
        recepcaoLote: 'https://nfse.salvador.ba.gov.br/rps/ENVIOLOTERPS/EnvioLoteRPS.svc',
        consultaSituacaoLote: 'https://nfse.salvador.ba.gov.br/rps/CONSULTASITUACAOLOTERPS/ConsultaSituacaoLoteRPS.svc',
        consultaLote: 'https://nfse.salvador.ba.gov.br/rps/CONSULTALOTERPS/ConsultaLoteRPS.svc',
        consultaRps: 'https://nfse.salvador.ba.gov.br/rps/CONSULTANFSERPS/ConsultaNfseRPS.svc',
        consultaNFe: 'https://nfse.salvador.ba.gov.br/rps/CONSULTANFSE/ConsultaNfse.svc',
        cancelamentoNFe: 'System.Xml.XmlElement',
        downloadPDF: 'https://nfse.salvador.ba.gov.br/site/contribuinte/nota/notaprintimg.aspx?nf={0}&inscricao={1}&verificacao={2}&returnurl=%2fsite%2fpublico%2fverificacao.aspx%3ftipo%3d0&imprimir=1&cancelada=1'
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
    suportaCancelamentoNFe: false,
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: true,
    usaNBS: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 3 a 11 dígitos (somente números).\r\n\r\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui 7 dígitos (somente números).\r\nExemplo válido: 2002001',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui 7 dígitos (somente números).\r\nExemplo válido: 5240199',
    helpItemListaServico: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui 4 dígitos (somente números).\r\nExemplo válido: 0108',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: false,
    numeroNotasPorLote: 10,
    regimesEspecialTributacao: [
      { codigo: '0', nome: ' - ' },
      { codigo: '1', nome: 'Microempresa Municipal' },
      { codigo: '2', nome: 'Estimativa' },
      { codigo: '3', nome: 'Sociedade de Profissionais' },
      { codigo: '4', nome: 'Cooperativa' },
      { codigo: '5', nome: 'MEI - Simples Nacional' },
      { codigo: '6', nome: 'ME EPP - Simples Nacional' }
    ]
  }
};

