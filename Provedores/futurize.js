var provedorDetalhe = {
  id: 'futurize',
  nome: 'Futurize',
  empresa: 'Futurize',
  stats: {
    municipios: 30
  },
  visaoGeral: [
    { key: 'Nome', val: 'Futurize' },
    { key: 'Total Municipios', val: '30' },
    { key: 'Estados Atendidos', val: ['MG'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: null,
      senha: null,
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 60,
    usaCNAE: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\r\n\r\nExemplos válidos: 06421008 ou 6348122',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal com 3 ou 4 dígitos (somente números) que identifica o serviço prestado na nota fiscal.\r\n\r\nEsse código é identificado na sua prefeitura como Serviço e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, na seção Código de Serviço.\r\nExemplos válidos: 801 ou 1401',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado. \r\n \r\n Você precisa preencher o item da lista de serviço com 5 dígitos mantendo a formatação.\r\n Exemplos válidos: 17.02 ou 08.02',
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
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
  },
  municipiosLista: {
    'futurize': [
      { nome: 'Alto Rio Doce', uf: 'MG', ibge: '3102100' },
      { nome: 'Andrelândia', uf: 'MG', ibge: '3102803' },
      { nome: 'Baependi', uf: 'MG', ibge: '3104908' },
      { nome: 'Bocaina de Minas', uf: 'MG', ibge: '3107208' },
      { nome: 'Bom Jardim de Minas', uf: 'MG', ibge: '3107505' },
      { nome: 'Caputira', uf: 'MG', ibge: '3112901' },
      { nome: 'Coroaci', uf: 'MG', ibge: '3119203' },
      { nome: 'Cristina', uf: 'MG', ibge: '3120508' },
      { nome: 'Delfim Moreira', uf: 'MG', ibge: '3121100' },
      { nome: 'Ervália', uf: 'MG', ibge: '3124005' },
      { nome: 'Eugenópolis', uf: 'MG', ibge: '3124906' },
      { nome: 'Guarani', uf: 'MG', ibge: '3128402' },
      { nome: 'Ibitiúra de Minas', uf: 'MG', ibge: '3129905' },
      { nome: 'Itaipé', uf: 'MG', ibge: '3132305' },
      { nome: 'Lima Duarte', uf: 'MG', ibge: '3138609' },
      { nome: 'Maria da Fé', uf: 'MG', ibge: '3139904' },
      { nome: 'Matias Barbosa', uf: 'MG', ibge: '3140803' },
      { nome: 'Munhoz', uf: 'MG', ibge: '3143807' },
      { nome: 'Piranga', uf: 'MG', ibge: '3150802' },
      { nome: 'Porto Firme', uf: 'MG', ibge: '3152303' },
      { nome: 'Riachinho', uf: 'MG', ibge: '3154457' },
      { nome: 'Rio Pomba', uf: 'MG', ibge: '3155801' },
      { nome: 'Santa Rita de Jacutinga', uf: 'MG', ibge: '3159308' },
      { nome: 'São José do Alegre', uf: 'MG', ibge: '3163201' },
      { nome: 'Senhora dos Remédios', uf: 'MG', ibge: '3166204' },
      { nome: 'Serranos', uf: 'MG', ibge: '3167004' },
      { nome: 'Soledade de Minas', uf: 'MG', ibge: '3167806' },
      { nome: 'Teixeiras', uf: 'MG', ibge: '3168507' },
      { nome: 'Toledo', uf: 'MG', ibge: '3169109' },
      { nome: 'Uruana de Minas', uf: 'MG', ibge: '3170479' }
    ]
  }
};

