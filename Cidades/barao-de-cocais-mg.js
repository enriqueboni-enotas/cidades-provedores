var cidadeDetalhe = {
  id: 'barao-de-cocais-mg',
  nome: 'Barão de Cocais',
  uf: 'MG',
  ibge: '3105400',
  constante: 'CodigoIBGE.BaraoDeCocaisMG',
  provedorAtual: {
    nome: 'EtheriumTech',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'Usa204, UsaProxy',
    robo: false,
    webService: true,
    versaoAbrasf: '2.04',
    infoAdicional: 'Usa204 = versão mais nova do abrasf migrar sempre para essa versao\n					UsaProxy = usa proxy para enviar\n					UsaV204ComReferencia = usado apenas na versão de santa luzia n ativar essa versao.\n					SuportaEmissaoSemTomador\n					Metadados cadastro empresa = naturezaOperacaoPadrao, naturezaOperacaoPadraoExterior',
    urls: {
      homologacao: {
        recepcaoLote: 'https://testecocaisabrasf.meumunicipio.online/ws'
      },
      producao: {
        recepcaoLote: 'https://abrasfcocais.meumunicipio.online/ws'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 1,
    assinaturaDigital: 2,
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 60,
    usaCodigoServicoMunicipal: false,
    usaCNAE: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\n\nExemplo válido: 6038',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal e é formado por 4 a 5 dígitos (formatado com ponto).\n\nEsse código é identificado na sua prefeitura como Sub-Item e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, no seção Código de Serviço.\nExemplo válido: 01.03',
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    numeroRpsDeveSerSequencial: false,
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
