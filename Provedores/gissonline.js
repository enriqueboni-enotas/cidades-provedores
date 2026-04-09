var provedorDetalhe = {
  id: 'gissonline',
  nome: 'GissOnline',
  empresa: 'GissOnline',
  stats: {
    municipios: 20
  },
  visaoGeral: [
    { key: 'Nome', val: 'GissOnline' },
    { key: 'Total Municipios', val: '20' },
    { key: 'Estados Atendidos', val: ['SP', 'PE', 'RJ', 'PR', 'GO', 'AL'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 1,
    assinaturaDigital: 2,
    valorCancelamentoNFe: 60,
    usaCodigoServicoMunicipal: true,
    usaCNAE: false,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\r\n\r\nExemplo válido: 6038',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Código de tributação que identifica o serviço prestado.\r\nExemplos válido: 08.02.00, 17.01.00',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal e é formado 5 dígitos (formatado com ponto).\r\n\r\nEsse código é identificado na sua prefeitura como Sub-Item e é  possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, no seção Código de Serviço.\r\nExemplo válido: 01.03',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    numeroRpsDeveSerSequencial: false,
    numeroNotasPorLote: 10,
    autenticidadeNota: {
      UsaCnpjPrestador: true,
      UsaCodigoVerificacao: true,
      UsaNumeroNota: true
    },
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
    'gissonline': [
      { nome: 'Campos dos Goytacazes', uf: 'RJ', ibge: '3301009' },
      { nome: 'Caruaru', uf: 'PE', ibge: '2604106' },
      { nome: 'Diadema', uf: 'SP', ibge: '3513801' },
      { nome: 'Guarujá', uf: 'SP', ibge: '3518701' },
      { nome: 'Itu', uf: 'SP', ibge: '3523909' },
      { nome: 'Jaboticabal', uf: 'SP', ibge: '3524303' },
      { nome: 'Jardinópolis', uf: 'SP', ibge: '3525102' },
      { nome: 'Jundiaí', uf: 'SP', ibge: '3525904' },
      { nome: 'Maceió', uf: 'AL', ibge: '2704302' },
      { nome: 'Matão', uf: 'SP', ibge: '3529302' },
      { nome: 'Mineiros', uf: 'GO', ibge: '5213103' },
      { nome: 'Mongaguá', uf: 'SP', ibge: '3531100' },
      { nome: 'Paulínia', uf: 'SP', ibge: '3536505' },
      { nome: 'Paulista', uf: 'PE', ibge: '2610707' },
      { nome: 'Praia Grande', uf: 'SP', ibge: '3541000' },
      { nome: 'Ribeirão Pires', uf: 'SP', ibge: '3543303' },
      { nome: 'Santos', uf: 'SP', ibge: '3548500' },
      { nome: 'São Caetano do Sul', uf: 'SP', ibge: '3548807' },
      { nome: 'São José do Rio Preto', uf: 'SP', ibge: '3549805' },
      { nome: 'Umuarama', uf: 'PR', ibge: '4128104' }
    ]
  }
};

