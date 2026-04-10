var provedorDetalhe = {
  id: 'agili',
  nome: 'Agili',
  empresa: 'Agili',
  stats: {
    municipios: 29
  },
  visaoGeral: [
    { key: 'Nome', val: 'Agili' },
    { key: 'Total Municipios', val: '29' },
    { key: 'Estados Atendidos', val: ['MT', 'AL', 'PE', 'RN', 'MS', 'PB', 'PA', 'PR'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 3,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: null,
      senha: null,
      token: 'Informe o token de acesso a api do sistema de emissão da prefeitura',
      fraseSecreta: null
    },
    campoLoginProvedor: 0,
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: true,
    usaNBS: true,
    usaItemListaServico: true,
    usaNaturezaOperacao: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter somente números.\n\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. Exemplos: 17.14.01 e 4.12.01',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpItemListaServico: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. Ele possui geralmente 4 ou 5 dígitos com formatação. Exemplo válido: 4.03 ou 14.03',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    autenticidadeNota: {
      UsaCodigoVerificacao: true,
      urlVerificacao: 'https://blue.rondonopolis.mt.gov.br/portal/rondonopolis/#/autenticidade'
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
      { codigo: '-1', nome: 'Exigível' },
      { codigo: '-2', nome: 'Não incidência' },
      { codigo: '-3', nome: 'Isento' },
      { codigo: '-4', nome: 'Exportação' },
      { codigo: '-5', nome: 'Imune' },
      { codigo: '-6', nome: 'Exigibilidade suspensa por decisão judicial' },
      { codigo: '-7', nome: 'Exigibilidade suspensa por processo administrativo' },
      { codigo: '-8', nome: 'Fixo' },
      { codigo: '-9', nome: 'Isento por lei específica' }
    ]
  },
  municipiosLista: {
    'agili': [
      { nome: 'Aliança', uf: 'PE', ibge: '2600708' }
,      { nome: 'Apodi', uf: 'RN', ibge: '2401008' }
,      { nome: 'Aripuanã', uf: 'MT', ibge: '5101407' }
,      { nome: 'Carlinda', uf: 'MT', ibge: '5102793' }
,      { nome: 'Conquista D\'Oeste', uf: 'MT', ibge: '5103361' }
,      { nome: 'Delmiro Gouveia', uf: 'AL', ibge: '2702405' }
,      { nome: 'Florânia', uf: 'RN', ibge: '2403806' }
,      { nome: 'Ipiranga do Norte', uf: 'MT', ibge: '5104526' }
,      { nome: 'Japaratinga', uf: 'AL', ibge: '2703601' }
,      { nome: 'Jateí', uf: 'MS', ibge: '5005103' }
,      { nome: 'Juara', uf: 'MT', ibge: '5105101' }
,      { nome: 'Juína', uf: 'MT', ibge: '5105150' }
,      { nome: 'Marcelândia', uf: 'MT', ibge: '5105580' }
,      { nome: 'Mata Grande', uf: 'AL', ibge: '2705002' }
,      { nome: 'Nobres', uf: 'MT', ibge: '5105903' }
,      { nome: 'Nova Monte Verde', uf: 'MT', ibge: '5108956' }
,      { nome: 'Novo Progresso', uf: 'PA', ibge: '1505031' }
,      { nome: 'Palmeira dos Índios', uf: 'AL', ibge: '2706307' }
,      { nome: 'Paranaíta', uf: 'MT', ibge: '5106299' }
,      { nome: 'Poconé', uf: 'MT', ibge: '5106505' }
,      { nome: 'Porto Alegre do Norte', uf: 'MT', ibge: '5106778' }
,      { nome: 'Rondonópolis', uf: 'MT', ibge: '5107602' }
,      { nome: 'Sanharó', uf: 'PE', ibge: '2612406' }
,      { nome: 'Santa Cecília do Pavão', uf: 'PR', ibge: '4123204' }
,      { nome: 'Santa Rita', uf: 'PB', ibge: '2513703' }
,      { nome: 'Sorriso', uf: 'MT', ibge: '5107925' }
,      { nome: 'São João do Rio do Peixe', uf: 'PB', ibge: '2500700' }
,      { nome: 'Vera', uf: 'MT', ibge: '5108501' }
,      { nome: 'Vicentina', uf: 'MS', ibge: '5008404' }
    ]
  }
};
