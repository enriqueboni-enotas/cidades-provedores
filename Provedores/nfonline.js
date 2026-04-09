var provedorDetalhe = {
  id: 'nfonline',
  nome: 'NFOnline',
  empresa: 'NFOnline',
  stats: {
    municipios: 5
  },
  visaoGeral: [
    { key: 'Nome', val: 'NFOnline' },
    { key: 'Total Municipios', val: '5' },
    { key: 'Estados Atendidos', val: ['AL', 'PB'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    suportaCancelamentoNFe: false,
    usaCodigoServicoMunicipal: true,
    usaCNAE: true,
    usaItemListaServico: true,
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nExemplos válidos: 041201 e 170101',
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
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
    'nfonline': [
      { nome: 'Cajueiro', uf: 'AL', ibge: '2701308' },
      { nome: 'Coruripe', uf: 'AL', ibge: '2702306' },
      { nome: 'São Bento', uf: 'PB', ibge: '2513901' },
      { nome: 'São Miguel dos Campos', uf: 'AL', ibge: '2708600' },
      { nome: 'São Miguel dos Milagres', uf: 'AL', ibge: '2708709' }
    ]
  }
};

