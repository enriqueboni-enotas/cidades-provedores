var provedorDetalhe = {
  id: 'ereceita',
  nome: 'eReceita',
  empresa: 'eReceita',
  stats: {
    municipios: 10
  },
  visaoGeral: [
    { key: 'Nome', val: 'eReceita' },
    { key: 'Total Municipios', val: '10' },
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
    tipoCancelamentoNFe: 'DiaDoMesSubSequenteACompetenciaDaNFe',
    valorCancelamentoNFe: 10,
    usaCNAE: true,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\r\n\r\nExemplos válidos: 06421008 ou 6348122',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal com 4 a 5 dígitos (com formatação) que identifica o serviço prestado na nota fiscal.\r\n\r\nExemplos válidos: 8.01 ou 14.01',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    suportaEmissaoNFeSemCliente: true,
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
    'ereceita': [
      { nome: 'Açucena', uf: 'MG', ibge: '3100500' },
      { nome: 'Bela Vista de Minas', uf: 'MG', ibge: '3106002' },
      { nome: 'Guapé', uf: 'MG', ibge: '3128105' },
      { nome: 'Itamogi', uf: 'MG', ibge: '3132909' },
      { nome: 'Jacuí', uf: 'MG', ibge: '3134806' },
      { nome: 'Japaraíba', uf: 'MG', ibge: '3135308' },
      { nome: 'Juruaia', uf: 'MG', ibge: '3136900' },
      { nome: 'Pratápolis', uf: 'MG', ibge: '3152907' },
      { nome: 'São João Batista do Glória', uf: 'MG', ibge: '3162203' },
      { nome: 'São José da Barra', uf: 'MG', ibge: '3162948' }
    ]
  }
};

