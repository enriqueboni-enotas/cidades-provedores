var cidadeDetalhe = {
  id: 'raul-soares-mg',
  nome: 'Raul Soares',
  uf: 'MG',
  ibge: '3154002',
  constante: 'CodigoIBGE.RaulSoaresMG',
  provedorAtual: {
    nome: 'EeL',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://mg-raulsoares-pm-nfs.cloud.el.com.br/RpsService',
        consultaRps: 'https://mg-raulsoares-pm-nfs.cloud.el.com.br/'
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
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 10,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: true,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 1 a 10 dígitos (somente números).\n            Exemplo válido: 11356083',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui geralmente 5 dígitos (somente números).\nExemplo válido: 00016',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal.\nEle possui geralmente 5 dígitos (somente números).\nExemplo válido: 6319400',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado.\n \n Você precisa preencher o item da lista de serviço sem a formatação.\n Exemplos válidos: 1702 ou 802',
    suportaEmissaoNFeSemCliente: false,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: false,
    numeroRpsDeveSerSequencial: true,
    numeroLoteNaoReutilizavel: true,
    numeroNotasPorLote: 5,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    regimesEspecialTributacao: [
      { codigo: '0', nome: 'Tributação Normal' },
      { codigo: '1', nome: 'Microempresa Municipal' },
      { codigo: '2', nome: 'Estimativa' },
      { codigo: '3', nome: 'Sociedade de Profissionais' },
      { codigo: '4', nome: 'Cooperativa' },
      { codigo: '5', nome: 'MEI - Simples Nacional' },
      { codigo: '6', nome: 'Empresa de Pequeno Porte(EPP)' },
      { codigo: '7', nome: 'Autônomo' },
      { codigo: '8', nome: 'Média Empresa' },
      { codigo: '10', nome: 'Empresa Individual de Responsabilidade Limitada (EIRELI)' },
      { codigo: '11', nome: 'LTDA (Limitada)' },
      { codigo: '18', nome: 'Sociedade de Advocacia' }
    ]
  }
};
