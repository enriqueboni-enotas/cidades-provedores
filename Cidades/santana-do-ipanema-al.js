var cidadeDetalhe = {
  id: 'santana-do-ipanema-al',
  nome: 'Santana do Ipanema',
  uf: 'AL',
  ibge: '2708006',
  constante: 'CodigoIBGE.SantanaDoIpanemaAL',
  provedorAtual: {
    nome: 'DBSeller',
    namespace: 'http://www.abrasf.org.br/ABRASF/arquivos/nfse.xsd',
    codigoNoProvedor: 'NaoConsultaSituacaoLote',
    robo: false,
    webService: true,
    versaoAbrasf: '1.0',
    infoAdicional: 'Provedor deve ser adicionada referência e configurado se não irá retornar exception cidade não implementada\n\n					UsaPadrao   criado um padrão para não adicionar referência',
    urls: {
      homologacao: {
        recepcaoLote: 'https://santanadoipanema.nfse.srv.br/webservice/index/homologacao'
      },
      producao: {
        recepcaoLote: 'https://santanadoipanema.nfse.srv.br/webservice/index/producao'
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
    usaCNAE: true,
    helpInscricaoMunicipal: 'Informe somente os números sem ponto nem formatação.\r\n\r\nExemplos válidos: 4301000010 ou 131436001',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal com 8 dígitos (com formatação) que identifica o serviço prestado na nota fiscal.\r\n\r\nEsse código é identificado na sua prefeitura como Serviço e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, na seção Código de Serviço.\r\nExemplos válidos: 08.01.01 ou 17.19.01',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal. O mesmo deve conter 7 dígitos (somente números).',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado.\r\n \r\n Você precisa preencher o item da lista de serviço mantendo a formatação.\r\n Exemplos válidos: 17.02 ou 08.02',
    numeroRpsDeveSerSequencial: true,
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

