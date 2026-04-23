var cidadeDetalhe = {
  id: 'lagoa-grande-pe',
  nome: 'Lagoa Grande',
  uf: 'PE',
  ibge: '2608750',
  constante: 'CodigoIBGE.LagoaGrandePE',
  provedorAtual: {
    nome: 'SpeedGov',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '1.01',
    infoAdicional: 'UsaSoap11 Usa versão 1.1 do soap para envio\n					UsaCodigoServicoMunicipalNoItemListaServico  seta cógido servico municipal no itemlistaservico',
    urls: {
      homologacao: {
        recepcaoLote: 'http://speedgov.com.br/wsmod/Nfes'
      },
      producao: {
        recepcaoLote: 'http://speedgov.com.br/wslag/Nfes'
      }
    },
    emissaoSemCertificado: {
      producao: 'https://iss.speedgov.com.br/lagoagrande'
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 2,
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: null,
      senha: null,
      token: null,
      fraseSecreta: null
    },
    valorCancelamentoNFe: 60,
    usaCNAE: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\r\n\r\nExemplos válidos: 06421008 ou 6348122',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal com 4 dígitos (somente números) que identifica o serviço prestado na nota fiscal.\r\n\r\nEsse código é identificado na sua prefeitura como Serviço e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, na seção Código de Serviço.\r\nExemplos válidos: 0801 ou 0108',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado.\r\n \r\n Você precisa preencher o item da lista de serviço mantendo a formatação.\r\n Exemplos válidos: 1702 ou 802',
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    numeroNotasPorLote: 5,
    autenticidadeNota: {
      UsaCodigoVerificacao: true,
      UsaInscricaoMunicipalPrestador: true,
      UsaNumeroNota: true
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
      { codigo: '1', nome: 'Tributação no municipio' },
      { codigo: '2', nome: 'Tributação fora do municipio' },
      { codigo: '3', nome: 'Isenção' },
      { codigo: '4', nome: 'Imune' },
      { codigo: '5', nome: 'Exigibilidade suspensa por decisão judicial' },
      { codigo: '6', nome: 'Exigilidade suspensa por procedimento administrativo' }
    ]
  }
};

