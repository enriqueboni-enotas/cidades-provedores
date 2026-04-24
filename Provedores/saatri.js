var provedorDetalhe = {
  id: 'saatri',
  nome: 'Saatri',
  empresa: 'Saatri',
  stats: {
    municipios: 38
  },
  visaoGeral: [
    { key: 'Nome', val: 'Saatri' },
    { key: 'Total Municipios', val: '38' },
    { key: 'Estados Atendidos', val: ['BA', 'RR'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: 'Informe o usuário utilizado para acessar o sistema de sua prefeitura.',
      senha: 'Informe a senha utilizada para acessar o sistema de sua prefeitura.',
      token: null,
      fraseSecreta: null
    },
    valorCancelamentoNFe: 60,
    usaCNAE: true,
    usaNBS: true,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\r\n\r\nExemplos válidos: 06421008 ou 6348122',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal com 6 dígitos (somente números) que identifica o serviço prestado na nota fiscal.\r\n\r\nEsse código é identificado na sua prefeitura como Serviço e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, na seção Código de Serviço.\r\nExemplos válidos: 080100, 040301',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
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
    'saatri': [
      { nome: 'Alto Alegre', uf: 'RR', ibge: '1400050' },
      { nome: 'Barra', uf: 'BA', ibge: '2902708' },
      { nome: 'Bom Jesus da Lapa', uf: 'BA', ibge: '2903904' },
      { nome: 'Brejões', uf: 'BA', ibge: '2904308' },
      { nome: 'Caem', uf: 'BA', ibge: '2905107' },
      { nome: 'Camacan', uf: 'BA', ibge: '2905602' },
      { nome: 'Campo Formoso', uf: 'BA', ibge: '2906006' },
      { nome: 'Canavieiras', uf: 'BA', ibge: '2906303' },
      { nome: 'Cansanção', uf: 'BA', ibge: '2906808' },
      { nome: 'Cantá', uf: 'RR', ibge: '1400175' },
      { nome: 'Carinhanha', uf: 'BA', ibge: '2907103' },
      { nome: 'Cícero Dantas', uf: 'BA', ibge: '2907806' },
      { nome: 'Conceição da Feira', uf: 'BA', ibge: '2908200' },
      { nome: 'Coronel João Sá', uf: 'BA', ibge: '2909208' },
      { nome: 'Cotegipe', uf: 'BA', ibge: '2909406' },
      { nome: 'Dias d\'Ávila', uf: 'BA', ibge: '2910057' },
      { nome: 'Ibotirama', uf: 'BA', ibge: '2913200' },
      { nome: 'Inhambupe', uf: 'BA', ibge: '2913705' },
      { nome: 'Ipirá', uf: 'BA', ibge: '2914000' },
      { nome: 'Irecê', uf: 'BA', ibge: '2914604' },
      { nome: 'Itaberaba', uf: 'BA', ibge: '2914703' },
      { nome: 'Itagibá', uf: 'BA', ibge: '2915205' },
      { nome: 'Itambé', uf: 'BA', ibge: '2915809' },
      { nome: 'Jacobina', uf: 'BA', ibge: '2917508' },
      { nome: 'Jaguaquara', uf: 'BA', ibge: '2917607' },
      { nome: 'Lajedo do Tabocal', uf: 'BA', ibge: '2919058' },
      { nome: 'Macururé', uf: 'BA', ibge: '2919900' },
      { nome: 'Mata de São João', uf: 'BA', ibge: '2921005' },
      { nome: 'Mucajaí', uf: 'RR', ibge: '1400308' },
      { nome: 'Nova Viçosa', uf: 'BA', ibge: '2923001' },
      { nome: 'Paratinga', uf: 'BA', ibge: '2923704' },
      { nome: 'Paripiranga', uf: 'BA', ibge: '2923803' },
      { nome: 'Rorainópolis', uf: 'RR', ibge: '1400472' },
      { nome: 'Santa Bárbara', uf: 'BA', ibge: '2927507' },
      { nome: 'Santana', uf: 'BA', ibge: '2928208' },
      { nome: 'Serra Dourada', uf: 'BA', ibge: '2930303' },
      { nome: 'Teolândia', uf: 'BA', ibge: '2931608' },
      { nome: 'Ubatã', uf: 'BA', ibge: '2932309' }
    ]
  }
};

