var provedorDetalhe = {
  id: 'modernizacaopublica',
  nome: 'ModernizacaoPublica',
  empresa: 'ModernizacaoPublica',
  stats: {
    municipios: 7
  },
  visaoGeral: [
    { key: 'Nome', val: 'ModernizacaoPublica' },
    { key: 'Total Municipios', val: '7' },
    { key: 'Estados Atendidos', val: ['RJ'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 0,
    assinaturaDigital: 0,
    usaCNAE: true,
    usaItemListaServico: false,
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
    'modernizacaopublica': [
      { nome: 'Arraial do Cabo', uf: 'RJ', ibge: '3300258' },
      { nome: 'Belford Roxo', uf: 'RJ', ibge: '3300456' },
      { nome: 'Cabo Frio', uf: 'RJ', ibge: '3300704' },
      { nome: 'Magé', uf: 'RJ', ibge: '3302502' },
      { nome: 'Mesquita', uf: 'RJ', ibge: '3302858' },
      { nome: 'São Pedro da Aldeia', uf: 'RJ', ibge: '3305208' },
      { nome: 'Seropédica', uf: 'RJ', ibge: '3305554' }
    ]
  }
};

