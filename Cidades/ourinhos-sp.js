var cidadeDetalhe = {
  id: 'ourinhos-sp',
  nome: 'Ourinhos',
  uf: 'SP',
  ibge: '3534708',
  constante: 'CodigoIBGE.OurinhosSP',
  provedorAtual: {
    nome: 'FintelIss',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'UsaAbrasf204; NaoEnviaValorIssRetido; UsaItemListaServico; IgnorarCodigoPaisTomadorNacional',
    robo: false,
    webService: true,
    infoAdicional: 'UsaProxy - Para prefeituras que é necessario para comunicação\n					UsaAbrasf204 - Para prefeituras que usam a versão Abrasf 2.04\n					NaoEnviaValorIssRetido - Não envia a tag ValorIssRetido',
    urls: {
      homologacao: {
        recepcaoLote: 'https://iss.ourinhos.sp.gov.br:4431/Homologacao/Services/Nfse204.asmx'
      },
      producao: {
        recepcaoLote: 'https://iss.ourinhos.sp.gov.br:4431/Services/Nfse204.asmx'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 1,
    assinaturaDigital: 2,
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 60,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: false,
    usaCNAE: true,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\n\nExemplo válido: 6038',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal e é formado por 4 a 5 dígitos (formatado com ponto).\n\nEsse código é identificado na sua prefeitura como Sub-Item e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, no seção Código de Serviço.\nExemplo válido: 01.03',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    numeroRpsDeveSerSequencial: true,
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
