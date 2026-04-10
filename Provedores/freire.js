var provedorDetalhe = {
  id: 'freire',
  nome: 'Freire',
  empresa: 'Freire',
  stats: {
    municipios: 8
  },
  visaoGeral: [
    { key: 'Nome', val: 'Freire' },
    { key: 'Total Municipios', val: '8' },
    { key: 'Estados Atendidos', val: ['BA'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 0,
    assinaturaDigital: 0,
    usaRegimeEspecialTributacao: true,
    usaCNAE: true,
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
    'freire': [
      { nome: 'Botuporã', uf: 'BA', ibge: '2904209' }
,      { nome: 'Maracás', uf: 'BA', ibge: '2920502' }
,      { nome: 'Morro do Chapéu', uf: 'BA', ibge: '2921708' }
,      { nome: 'Muritiba', uf: 'BA', ibge: '2922300' }
,      { nome: 'Pé de Serra', uf: 'BA', ibge: '2924058' }
,      { nome: 'Queimadas', uf: 'BA', ibge: '2925808' }
,      { nome: 'Santaluz', uf: 'BA', ibge: '2928000' }
,      { nome: 'São Gonçalo dos Campos', uf: 'BA', ibge: '2929305' }
    ]
  }
};
