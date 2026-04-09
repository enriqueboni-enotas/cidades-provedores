var provedorDetalhe = {
  id: 'tcheinformatica',
  nome: 'TcheInformatica',
  empresa: 'TcheInformatica',
  stats: {
    municipios: 1
  },
  visaoGeral: [
    { key: 'Nome', val: 'TcheInformatica' },
    { key: 'Total Municipios', val: '1' },
    { key: 'Estados Atendidos', val: ['RS'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 3,
    assinaturaDigital: 2,
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: null,
      senha: null,
      token: 'Solicitar junto a prefeitura o token do webservice para autenticação.',
      fraseSecreta: null
    },
    usaCNAE: true,
    helpInscricaoMunicipal: 'Informe somente os números sem ponto nem formatação.\r\n\r\nExemplos válidos: 8787 ou 1001',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal. O mesmo deve conter 7 dígitos (somente números).',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado.\r\n \r\n Você precisa preencher o item da lista de serviço mantendo a formatação.\r\n Exemplos válidos: 1702 ou 0108',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: false,
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
  },
  municipiosLista: {
    'tcheinformatica': [
      { nome: 'Coqueiros do Sul', uf: 'RS', ibge: '4305850' }
    ]
  }
};

