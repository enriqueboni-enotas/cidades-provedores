var provedorDetalhe = {
  id: 'fisco-netv2',
  nome: 'Fisco.NetV2',
  empresa: 'Fisco.NetV2',
  stats: {
    municipios: 11
  },
  visaoGeral: [
    { key: 'Nome', val: 'Fisco.NetV2' },
    { key: 'Total Municipios', val: '11' },
    { key: 'Estados Atendidos', val: ['BA', 'PI'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 1,
    assinaturaDigital: 2,
    usaCodigoServicoMunicipal: true,
    usaCNAE: true,
    usaItemListaServico: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
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
    'fisco-netv2': [
      { nome: 'Cachoeira', uf: 'BA', ibge: '2904902' },
      { nome: 'Cajueiro da Praia', uf: 'PI', ibge: '2202083' },
      { nome: 'Capim Grosso', uf: 'BA', ibge: '2906873' },
      { nome: 'Casa Nova', uf: 'BA', ibge: '2907202' },
      { nome: 'Itanhém', uf: 'BA', ibge: '2916005' },
      { nome: 'Itiúba', uf: 'BA', ibge: '2917003' },
      { nome: 'Paulo Afonso', uf: 'BA', ibge: '2924009' },
      { nome: 'Rafael Jambeiro', uf: 'BA', ibge: '2925956' },
      { nome: 'Tucano', uf: 'BA', ibge: '2931905' },
      { nome: 'Ubaíra', uf: 'BA', ibge: '2932101' },
      { nome: 'Várzea do Poço', uf: 'BA', ibge: '2933109' }
    ]
  }
};

