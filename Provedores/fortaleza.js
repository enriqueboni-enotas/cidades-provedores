var provedorDetalhe = {
  id: 'fortaleza',
  nome: 'Fortaleza',
  empresa: 'Fortaleza',
  stats: {
    municipios: 1
  },
  visaoGeral: [
    { key: 'Nome', val: 'Fortaleza' },
    { key: 'Total Municipios', val: '1' },
    { key: 'Estados Atendidos', val: ['CE'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    suportaCancelamentoNFe: true,
    usaCNAE: false,
    numeroNotasPorLote: 5,
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
    'fortaleza': [
      { nome: 'Fortaleza', uf: 'CE', ibge: '2304400' }
    ]
  }
};

