var cidadeDetalhe = {
  id: 'vera-cruz-rn',
  nome: 'Vera Cruz',
  uf: 'RN',
  ibge: '2414803',
  constante: 'CodigoIBGE.VeraCruzRN',
  provedorAtual: {
    nome: 'Tinus',
    namespace: 'http://www.tinus.com.br',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://www.tinus.com.br/csp/VERACRUZ/WSNFSE.RecepcionarLoteRps.CLS',
        consultaSituacaoLote: 'https://www.tinus.com.br/csp/VERACRUZ/WSNFSE.ConsultarSituacaoLoteRps.CLS',
        consultaLote: 'https://www.tinus.com.br/csp/VERACRUZ/WSNFSE.ConsultarLoteRps.CLS',
        consultaRps: 'https://www.tinus.com.br/csp/VERACRUZ/WSNFSE.ConsultarNfsePorRps.CLS',
        cancelamentoNFe: 'https://www.tinus.com.br/csp/VERACRUZ/WSNFSE.CancelarNfse.CLS'
      }
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
    usaCodigoServicoMunicipal: true,
    usaCNAE: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\r\n\r\nExemplos válidos: 06421008 ou 6348122',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal com 5 dígitos (números com formatação) que identifica o serviço prestado na nota fiscal. \r\nEsse código é identificado na sua prefeitura como Serviço e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, na seção Código de Serviço.\r\nExemplos válidos: 08.01 ou 16.08',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    numeroRpsDeveSerSequencial: true,
    numeroNotasPorLote: 30,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 5,
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

