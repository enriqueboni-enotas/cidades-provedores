var provedorDetalhe = {
  id: 'arrecadanet',
  nome: 'ArrecadaNet',
  empresa: 'ArrecadaNet',
  stats: {
    municipios: 49
  },
  visaoGeral: [
    { key: 'Nome', val: 'ArrecadaNet' },
    { key: 'Total Municipios', val: '49' },
    { key: 'Estados Atendidos', val: ['GO', 'TO', 'MS', 'MA'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 1,
    assinaturaDigital: 2,
    suportaCancelamentoNFe: false,
    valorCancelamentoNFe: 60,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\n\nExemplo válido: 6038',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Esse código complementa a identificação do serviço prestado na nota fiscal e é formado por 4 a 5 dígitos (formatado com ponto).\n\nEsse código é identificado na sua prefeitura como Sub-Item e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, no seção Código de Serviço.\nExemplo válido: 01.03',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    numeroRpsDeveSerSequencial: false,
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
    'arrecadanet': [
      { nome: 'Abadiânia', uf: 'GO', ibge: '5200100' }
,      { nome: 'Almas', uf: 'TO', ibge: '1700400' }
,      { nome: 'Alto Horizonte', uf: 'GO', ibge: '5200555' }
,      { nome: 'Alvorada do Norte', uf: 'GO', ibge: '5200803' }
,      { nome: 'Ananás', uf: 'TO', ibge: '1701002' }
,      { nome: 'Aragoiânia', uf: 'GO', ibge: '5201801' }
,      { nome: 'Arapoema', uf: 'TO', ibge: '1702307' }
,      { nome: 'Araçu', uf: 'GO', ibge: '5201603' }
,      { nome: 'Barro Alto', uf: 'GO', ibge: '5203203' }
,      { nome: 'Barrolândia', uf: 'TO', ibge: '1703107' }
,      { nome: 'Bom Jesus do Tocantins', uf: 'TO', ibge: '1703305' }
,      { nome: 'Bonfinópolis', uf: 'GO', ibge: '5203559' }
,      { nome: 'Campinorte', uf: 'GO', ibge: '5204706' }
,      { nome: 'Campos Belos', uf: 'GO', ibge: '5204904' }
,      { nome: 'Campos Lindos', uf: 'TO', ibge: '1703842' }
,      { nome: 'Caseara', uf: 'TO', ibge: '1703909' }
,      { nome: 'Cezarina', uf: 'GO', ibge: '5205455' }
,      { nome: 'Colinas do Tocantins', uf: 'TO', ibge: '1705508' }
,      { nome: 'Colméia', uf: 'TO', ibge: '1716703' }
,      { nome: 'Corumbá de Goiás', uf: 'GO', ibge: '5205802' }
,      { nome: 'Cristianópolis', uf: 'GO', ibge: '5206305' }
,      { nome: 'Danivnópolis', uf: 'GO', ibge: '5206909' }
,      { nome: 'Eldorado', uf: 'MS', ibge: '5003751' }
,      { nome: 'Formoso', uf: 'GO', ibge: '5208103' }
,      { nome: 'Gameleira de Goiás', uf: 'GO', ibge: '5208152' }
,      { nome: 'Goianápolis', uf: 'GO', ibge: '5208400' }
,      { nome: 'Itauçu', uf: 'GO', ibge: '5211404' }
,      { nome: 'Jandaia', uf: 'GO', ibge: '5211701' }
,      { nome: 'Jaraguá', uf: 'GO', ibge: '5211800' }
,      { nome: 'Jussara', uf: 'GO', ibge: '5212204' }
,      { nome: 'Mambaí', uf: 'GO', ibge: '5212709' }
,      { nome: 'Mara Rosa', uf: 'GO', ibge: '5212808' }
,      { nome: 'Mateiros', uf: 'TO', ibge: '1712702' }
,      { nome: 'Miranorte', uf: 'TO', ibge: '1713304' }
,      { nome: 'Montes Claros de Goiás', uf: 'GO', ibge: '5213707' }
,      { nome: 'Nova Veneza', uf: 'GO', ibge: '5215009' }
,      { nome: 'Novo Gama', uf: 'GO', ibge: '5215231' }
,      { nome: 'Palmeiras de Goiás', uf: 'GO', ibge: '5215702' }
,      { nome: 'Peixe', uf: 'TO', ibge: '1716604' }
,      { nome: 'Pontalina', uf: 'GO', ibge: '5217708' }
,      { nome: 'Porto Alegre do Tocantins', uf: 'GO', ibge: '1718006' }
,      { nome: 'Professor Jamil', uf: 'GO', ibge: '5218391' }
,      { nome: 'Rialma', uf: 'GO', ibge: '5218607' }
,      { nome: 'Santa Fé do Araguaia', uf: 'TO', ibge: '1718865' }
,      { nome: 'Santo Antônio de Goiás', uf: 'GO', ibge: '5219738' }
,      { nome: 'Silvânia', uf: 'GO', ibge: '5220603' }
,      { nome: 'São João d\'Aliança', uf: 'GO', ibge: '5220009' }
,      { nome: 'São Raimundo das Mangabeiras', uf: 'MA', ibge: '2111607' }
,      { nome: 'Vianópolis', uf: 'GO', ibge: '5222005' }
    ]
  }
};
