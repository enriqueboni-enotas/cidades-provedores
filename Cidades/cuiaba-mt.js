var cidadeDetalhe = {
  id: 'cuiaba-mt',
  nome: 'Cuiabá',
  uf: 'MT',
  ibge: '5103403',
  constante: 'CodigoIBGE.CuiabaMT',
  provedorAtual: {
    nome: 'NotaControl',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'UsaNatureza1IssRetidoFonte',
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://www.issnetonline.com.br/homologaabrasf/webservicenfse204/nfse.asmx'
      },
      producao: {
        recepcaoLote: 'https://wscuiaba.issnetonline.com.br/webservicenfse204/nfse.asmx'
      }
    }
  },
  configuracaoProvedor: {
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: null,
      senha: null,
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    usaCNAE: true,
    usaNBS: true,
    helpInscricaoMunicipal: 'O formato varia de empresa. Verifique a inscrição municipal no portal da prefeitura.\r\n\r\nExemplos válidos: 4301000010 ou 9800000-0',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal que identifica o serviço prestado na nota fiscal.\r\n\r\nEsse código é identificado na sua prefeitura como Serviço e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, na seção Código de Serviço.\r\nExemplos válidos: 1702, 802',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal. O mesmo deve conter 7 dígitos (somente números).',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado.\r\n \r\n Você precisa preencher o item da lista de serviço mantendo a formatação.\r\n Exemplos válidos: 17.02 ou 08.02',
    suportaEmissaoNFeSemCliente: true,
    numeroRpsDeveSerSequencial: true,
    autenticidadeNota: {
      urlVerificacao: 'https://df.issnetonline.com.br/online/NotaDigital/VerificaAutenticidade.aspx',
      UsaChaveAcesso: false,
      UsaCnpjPrestador: false,
      UsaCodigoVerificacao: true,
      UsaCpfCnpjTomador: false,
      UsaInscricaoMunicipalPrestador: true,
      UsaNumeroNota: true,
      UsaValorNota: false
    },
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
      { codigo: '1', nome: 'Exigível' },
      { codigo: '2', nome: 'Não incidência' },
      { codigo: '3', nome: 'Isenção' },
      { codigo: '4', nome: 'Exportação' },
      { codigo: '5', nome: 'Imunidade' },
      { codigo: '6', nome: 'Exigibilidade suspensa por decisão judicial' },
      { codigo: '7', nome: 'Exigilidade suspensa por procedimento administrativo' }
    ]
  }
};

