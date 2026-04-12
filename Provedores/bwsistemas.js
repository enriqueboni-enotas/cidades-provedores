var provedorDetalhe = {
  id: 'bwsistemas',
  nome: 'BWSistemas',
  empresa: 'BWSistemas',
  stats: {
    municipios: 4
  },
  visaoGeral: [
    { key: 'Nome', val: 'BWSistemas' },
    { key: 'Total Municipios', val: '4' },
    { key: 'Estados Atendidos', val: ['SP'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 2,
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
    'bwsistemas': [
      { nome: 'Ipiguá', uf: 'SP', ibge: '3521150' },
      { nome: 'Macaubal', uf: 'SP', ibge: '3528106' },
      { nome: 'Neves Paulista', uf: 'SP', ibge: '3532504' },
      { nome: 'Paranapuã', uf: 'SP', ibge: '3535903' }
    ]
  }
};

