var provedorDetalhe = {
  id: 'prodata',
  nome: 'ProData',
  empresa: 'ProData',
  stats: {
    municipios: 8
  },
  visaoGeral: [
    { key: 'Nome', val: 'ProData' },
    { key: 'Total Municipios', val: '8' },
    { key: 'Estados Atendidos', val: ['GO'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 0,
    assinaturaDigital: 1,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: 'Informe o usuário utilizado para acessar o sistema de sua prefeitura.',
      senha: 'Informe a senha utilizada para acessar o sistema de sua prefeitura.',
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: false,
    usaCodigoServicoMunicipal: false,
    usaCNAE: true,
    usaItemListaServico: true,
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
    'prodata': [
      { nome: 'Carmo do Rio Verde', uf: 'GO', ibge: '5205000' }
,      { nome: 'Catalão', uf: 'GO', ibge: '5205109' }
,      { nome: 'Cidade Ocidental', uf: 'GO', ibge: '5205497' }
,      { nome: 'Goianésia', uf: 'GO', ibge: '5208608' }
,      { nome: 'Luziânia', uf: 'GO', ibge: '5212501' }
,      { nome: 'Morrinhos', uf: 'GO', ibge: '5213806' }
,      { nome: 'Niquelândia', uf: 'GO', ibge: '5214606' }
,      { nome: 'Pirenópolis', uf: 'GO', ibge: '5217302' }
    ]
  }
};
