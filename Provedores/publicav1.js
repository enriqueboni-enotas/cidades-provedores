var provedorDetalhe = {
  id: 'publicav1',
  nome: 'PublicaV1',
  empresa: 'PublicaV1',
  stats: {
    municipios: 7
  },
  visaoGeral: [
    { key: 'Nome', val: 'PublicaV1' },
    { key: 'Total Municipios', val: '7' },
    { key: 'Estados Atendidos', val: ['SC', 'RN', 'PR'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 0,
    assinaturaDigital: 1,
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: null,
      senha: null,
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    usaCodigoServicoMunicipal: true,
    usaCNAE: false,
    emTransicaoNFSeNacional: true,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\n\nExemplos válidos: 06421008 ou 6348122',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Esse é o código de identificação do serviço prestado na nota fiscal e é formado por 3 a 4 números.\n\nExemplos válidos: 1401 ou 0802',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
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
    'publicav1': [
      { nome: 'Açu', uf: 'RN', ibge: '2400208' }
,      { nome: 'Joinville', uf: 'SC', ibge: '4209102' }
,      { nome: 'Lebon Régis', uf: 'SC', ibge: '4209706' }
,      { nome: 'Peritiba', uf: 'SC', ibge: '4212601' }
,      { nome: 'Pinheiro Preto', uf: 'SC', ibge: '4213005' }
,      { nome: 'Quatro Pontes', uf: 'PR', ibge: '4120853' }
,      { nome: 'Timbó Grande', uf: 'SC', ibge: '4218251' }
    ]
  }
};
