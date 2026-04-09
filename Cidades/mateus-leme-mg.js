var cidadeDetalhe = {
  id: 'mateus-leme-mg',
  nome: 'Mateus Leme',
  uf: 'MG',
  ibge: '3140704',
  constante: 'CodigoIBGE.MateusLemeMG',
  provedorAtual: {
    nome: 'Quasar',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'UsaCodigoServicoMunicipal;NaoUsaValorIssRetido',
    robo: false,
    webService: true,
    infoAdicional: 'cnaeNoveDigitos – Propriedade estendida no cadastro da empresa (campo booleano). Quando marcado como true, o CNAE será enviado com 9 dígitos (Somente CNAE cadastrado previamente).',
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://mateusleme.mg.issqn.quasar.srv.br/nfe/snissdigitalsvc'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 4,
    assinaturaDigital: 2,
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de frase secreta e senha.',
      usuario: null,
      senha: null,
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaDescricaoServico: false,
    usaCNAE: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 3 a 11 dígitos (somente números).\r\n\r\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui 7 dígitos (somente números).\r\nExemplo válido: 6201500',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal e é formado por 4 dígitos (somente números).\r\n\r\nEsse código é identificado na sua prefeitura como Sub-Item e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, no seção Código de Serviço.\r\nExemplos válidos: 1211 ou 0802',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: false,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
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

