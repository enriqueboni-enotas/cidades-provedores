var cidadeDetalhe = {
  id: 'diadema-sp',
  nome: 'Diadema',
  uf: 'SP',
  ibge: '3513801',
  constante: 'CodigoIBGE.DiademaSP',
  provedorAtual: {
    nome: 'GissOnline',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: '1354',
    robo: false,
    webService: true,
    versaoAbrasf: '2.04',
    urls: {
      homologacao: {
        recepcaoLote: 'https://ws-homologacao-rtc.giss.com.br/service-ws/nf/nfse-ws'
      },
      producao: {
        recepcaoLote: 'https://ws-diadema.giss.com.br/service-ws/nf/nfse-ws'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 1,
    assinaturaDigital: 2,
    valorCancelamentoNFe: 60,
    usaCodigoServicoMunicipal: true,
    usaCNAE: false,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\r\n\r\nExemplo válido: 6038',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Código de tributação que identifica o serviço prestado.\r\nExemplos válido: 08.02.00, 17.01.00',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal e é formado 5 dígitos (formatado com ponto).\r\n\r\nEsse código é identificado na sua prefeitura como Sub-Item e é  possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, no seção Código de Serviço.\r\nExemplo válido: 01.03',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    numeroRpsDeveSerSequencial: false,
    numeroNotasPorLote: 10,
    autenticidadeNota: {
      UsaCnpjPrestador: true,
      UsaCodigoVerificacao: true,
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

