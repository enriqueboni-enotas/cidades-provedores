var provedorDetalhe = {
  id: 'sintese',
  nome: 'Sintese',
  empresa: 'Sintese',
  stats: {
    municipios: 30
  },
  visaoGeral: [
    { key: 'Nome', val: 'Sintese' },
    { key: 'Total Municipios', val: '30' },
    { key: 'Estados Atendidos', val: ['MG'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 1,
    assinaturaDigital: 2,
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 60,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: false,
    usaNBS: true,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\r\n\r\nExemplo válido: 6038',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Esse código complementa a identificação do serviço prestado na nota fiscal e é formado por 6 dígitos sem formatação.\r\n\r\nExemplos: 040101, 170900',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal e é formado por 4 a 5 dígitos (formatado com ponto).\r\n\r\nEsse código é identificado na sua prefeitura como Sub-Item e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, no seção Código de Serviço.\r\nExemplo válido: 01.03',
    suportaEmissaoNFeClienteSemEndereco: true,
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
    'sintese': [
      { nome: 'Augusto de Lima', uf: 'MG', ibge: '3104809' },
      { nome: 'Bocaiúva', uf: 'MG', ibge: '3107307' },
      { nome: 'Capelinha', uf: 'MG', ibge: '3112307' },
      { nome: 'Capim Branco', uf: 'MG', ibge: '3112505' },
      { nome: 'Capitão Enéas', uf: 'MG', ibge: '3112703' },
      { nome: 'Espinosa', uf: 'MG', ibge: '3124302' },
      { nome: 'Francisco Sá', uf: 'MG', ibge: '3126703' },
      { nome: 'Ibiaí', uf: 'MG', ibge: '3129608' },
      { nome: 'Itacarambi', uf: 'MG', ibge: '3132107' },
      { nome: 'Itamarandiba', uf: 'MG', ibge: '3132503' },
      { nome: 'Itaobim', uf: 'MG', ibge: '3133303' },
      { nome: 'Janaúba', uf: 'MG', ibge: '3135100' },
      { nome: 'Januária', uf: 'MG', ibge: '3135209' },
      { nome: 'Japonvar', uf: 'MG', ibge: '3135357' },
      { nome: 'Lontra', uf: 'MG', ibge: '3138658' },
      { nome: 'Malacacheta', uf: 'MG', ibge: '3139201' },
      { nome: 'Mário Campos', uf: 'MG', ibge: '3140159' },
      { nome: 'Minas Novas', uf: 'MG', ibge: '3141801' },
      { nome: 'Mirabela', uf: 'MG', ibge: '3142007' },
      { nome: 'Moeda', uf: 'MG', ibge: '3142304' },
      { nome: 'Novo Cruzeiro', uf: 'MG', ibge: '3145307' },
      { nome: 'Olhos-d\'Água', uf: 'MG', ibge: '3145455' },
      { nome: 'Pedra Azul', uf: 'MG', ibge: '3148707' },
      { nome: 'Ponto Chique', uf: 'MG', ibge: '3152131' },
      { nome: 'Rio Pardo de Minas', uf: 'MG', ibge: '3155603' },
      { nome: 'São Brás do Suaçuí', uf: 'MG', ibge: '3160900' },
      { nome: 'São Miguel do Anta', uf: 'MG', ibge: '3163805' },
      { nome: 'São Pedro do Suaçuí', uf: 'MG', ibge: '3164100' },
      { nome: 'Turmalina', uf: 'MG', ibge: '3169703' },
      { nome: 'Várzea da Palma', uf: 'MG', ibge: '3170800' }
    ]
  }
};

