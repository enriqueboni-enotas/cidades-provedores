var provedorDetalhe = {
  id: 'speedgov',
  nome: 'SpeedGov',
  empresa: 'SpeedGov',
  stats: {
    municipios: 45
  },
  visaoGeral: [
    { key: 'Nome', val: 'SpeedGov' },
    { key: 'Total Municipios', val: '45' },
    { key: 'Estados Atendidos', val: ['CE', 'PE', 'MA'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 2,
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: null,
      senha: null,
      token: null,
      fraseSecreta: null
    },
    valorCancelamentoNFe: 60,
    usaCNAE: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\n\nExemplos válidos: 06421008 ou 6348122',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal com 4 dígitos (somente números) que identifica o serviço prestado na nota fiscal.\n\nEsse código é identificado na sua prefeitura como Serviço e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, na seção Código de Serviço.\nExemplos válidos: 0801 ou 0108',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado.\n \n Você precisa preencher o item da lista de serviço mantendo a formatação.\n Exemplos válidos: 1702 ou 802',
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
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
    'speedgov': [
      { nome: 'Acaraú', uf: 'CE', ibge: '2300200' }
,      { nome: 'Alto Santo', uf: 'CE', ibge: '2300705' }
,      { nome: 'Aquiraz', uf: 'CE', ibge: '2301000' }
,      { nome: 'Aracati', uf: 'CE', ibge: '2301109' }
,      { nome: 'Araripe', uf: 'CE', ibge: '2301307' }
,      { nome: 'Açailândia', uf: 'MA', ibge: '2100055' }
,      { nome: 'Barbalha', uf: 'CE', ibge: '2301901' }
,      { nome: 'Barreirinhas', uf: 'MA', ibge: '2101707' }
,      { nome: 'Beberibe', uf: 'CE', ibge: '2302206' }
,      { nome: 'Cabrobó', uf: 'PE', ibge: '2603009' }
,      { nome: 'Camocim', uf: 'CE', ibge: '2302602' }
,      { nome: 'Canindé', uf: 'CE', ibge: '2302800' }
,      { nome: 'Carnaubal', uf: 'CE', ibge: '2303402' }
,      { nome: 'Cascavel', uf: 'CE', ibge: '2303501' }
,      { nome: 'Crateús', uf: 'CE', ibge: '2304103' }
,      { nome: 'Crato', uf: 'CE', ibge: '2304202' }
,      { nome: 'Cruz', uf: 'CE', ibge: '2304251' }
,      { nome: 'Eusébio', uf: 'CE', ibge: '2304285' }
,      { nome: 'Fortim', uf: 'CE', ibge: '2304459' }
,      { nome: 'Horizonte', uf: 'CE', ibge: '2305233' }
,      { nome: 'Iguatu', uf: 'CE', ibge: '2305506' }
,      { nome: 'Ipu', uf: 'CE', ibge: '2305803' }
,      { nome: 'Itapipoca', uf: 'CE', ibge: '2306405' }
,      { nome: 'Jijoca de Jericoacoara', uf: 'PE', ibge: '2307254' }
,      { nome: 'Juazeiro do Norte', uf: 'CE', ibge: '2307304' }
,      { nome: 'Lagoa Grande', uf: 'PE', ibge: '2608750' }
,      { nome: 'Limoeiro do Norte', uf: 'CE', ibge: '2307601' }
,      { nome: 'Maracanaú', uf: 'CE', ibge: '2307650' }
,      { nome: 'Maranguape', uf: 'CE', ibge: '2307700' }
,      { nome: 'Morada Nova', uf: 'CE', ibge: '2308708' }
,      { nome: 'Nova Russas', uf: 'CE', ibge: '2309300' }
,      { nome: 'Pacajus', uf: 'CE', ibge: '2309607' }
,      { nome: 'Pacatuba', uf: 'CE', ibge: '2309706' }
,      { nome: 'Paracuru', uf: 'CE', ibge: '2310209' }
,      { nome: 'Quixadá', uf: 'CE', ibge: '2311306' }
,      { nome: 'Quixeramobim', uf: 'CE', ibge: '2311405' }
,      { nome: 'Russas', uf: 'CE', ibge: '2311801' }
,      { nome: 'Salgueiro', uf: 'PE', ibge: '2612208' }
,      { nome: 'Santa Luzia', uf: 'MA', ibge: '2110005' }
,      { nome: 'Santa Maria da Boa Vista', uf: 'PE', ibge: '2612604' }
,      { nome: 'Sobral', uf: 'CE', ibge: '2312908' }
,      { nome: 'Tauá', uf: 'CE', ibge: '2313302' }
,      { nome: 'Tianguá', uf: 'CE', ibge: '2313401' }
,      { nome: 'Timon', uf: 'MA', ibge: '2112209' }
,      { nome: 'Trairi', uf: 'CE', ibge: '2313500' }
    ]
  }
};
