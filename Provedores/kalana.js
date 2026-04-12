var provedorDetalhe = {
  id: 'kalana',
  nome: 'KALANA',
  empresa: 'KALANA',
  stats: {
    municipios: 4
  },
  visaoGeral: [
    { key: 'Nome', val: 'KALANA' },
    { key: 'Total Municipios', val: '4' },
    { key: 'Estados Atendidos', val: ['AL'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 3,
    assinaturaDigital: 2,
    usaDescricaoServico: false,
    usaCNAE: true,
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
  },
  municipiosLista: {
    'kalana': [
      { nome: 'Igreja Nova', uf: 'AL', ibge: '2703205' },
      { nome: 'Messias', uf: 'AL', ibge: '2705200' },
      { nome: 'Passo de Camaragibe', uf: 'AL', ibge: '2706505' },
      { nome: 'Piranhas', uf: 'AL', ibge: '2707107' }
    ]
  }
};

