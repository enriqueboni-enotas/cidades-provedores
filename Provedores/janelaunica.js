var provedorDetalhe = {
  id: 'janelaunica',
  nome: 'JanelaUnica',
  empresa: 'JanelaUnica',
  stats: {
    municipios: 4
  },
  visaoGeral: [
    { key: 'Nome', val: 'JanelaUnica' },
    { key: 'Total Municipios', val: '4' },
    { key: 'Estados Atendidos', val: ['PA'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: null,
      senha: null,
      token: 'Sua prefeitura exige utilização de usuário e senha',
      fraseSecreta: null
    },
    suportaCancelamentoNFe: false,
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: true,
    usaItemListaServico: true,
    usaNaturezaOperacao: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 3 a 11 dígitos (somente números).\n\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui geralmente 4 dígitos (somente números, mantendo o zero a esquerda).\nExemplo válido: 0802',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal. O mesmo deve conter 7 dígitos (somente números).\n\nExemplo válido: 8599699',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado. \n\n\n Você precisa preencher o item da lista de serviço com 4 ou 5 dígitos mantendo a formatação.\n Exemplos válidos: 17.02 ou 8.02',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: false,
    suportaConsultaSequencialRps: true,
    regimesEspecialTributacao: [
      { codigo: '1', nome: '1 - Microempresa municipal' },
      { codigo: '2', nome: '2 - Estimativa' },
      { codigo: '3', nome: '3 - Sociedade de profissionais' },
      { codigo: '4', nome: '4 - Cooperativa' },
      { codigo: '5', nome: '5 - Microempresário Individual (MEI)' },
      { codigo: '6', nome: '6 - Microempresário e Empresa de Pequeno Porte (ME EPP)' }
    ],
    naturezasOperacao: [
      { codigo: '1', nome: '1 – Elegível' },
      { codigo: '2', nome: '2 – Não Incidência' },
      { codigo: '3', nome: '3 – Isenção' },
      { codigo: '4', nome: '4 – Exportação' },
      { codigo: '5', nome: '5 – Imunidade' },
      { codigo: '6', nome: '6 – Exigibilidade Suspensa por Decisão Judicial' },
      { codigo: '7', nome: '7 – Exigibilidade Suspensa por Processo Administrativo' }
    ]
  },
  municipiosLista: {
    'janelaunica': [
      { nome: 'Dom Eliseu', uf: 'PA', ibge: '1502939' }
,      { nome: 'Igarapé-Açu', uf: 'PA', ibge: '1503200' }
,      { nome: 'Pacajá', uf: 'PA', ibge: '1505486' }
,      { nome: 'Primavera', uf: 'PA', ibge: '1506104' }
    ]
  }
};
