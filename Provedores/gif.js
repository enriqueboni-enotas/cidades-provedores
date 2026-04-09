var provedorDetalhe = {
  id: 'gif',
  nome: 'GIF',
  empresa: 'GIF',
  stats: {
    municipios: 9
  },
  visaoGeral: [
    { key: 'Nome', val: 'GIF' },
    { key: 'Total Municipios', val: '9' },
    { key: 'Estados Atendidos', val: ['RS'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 1,
    assinaturaDigital: 2,
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: null,
      senha: null,
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 10,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 1 a 10 dígitos (somente números).\r\n\r\nExemplo válido: 11356083',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente 3 a 4 dígitos (somente números).\r\nExemplo válido: 548',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado.\r\n \r\n Você precisa preencher o item da lista de serviço sem a formatação.\r\n Exemplos válidos: 1702 ou 802',
    suportaEmissaoNFeSemCliente: false,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: false,
    numeroRpsDeveSerSequencial: true,
    numeroNotasPorLote: 1,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    regimesEspecialTributacao: [
      { codigo: '1', nome: 'Simples Nacional' },
      { codigo: '2', nome: 'SIMEI' },
      { codigo: '3', nome: 'Normal' }
    ]
  },
  municipiosLista: {
    'gif': [
      { nome: 'Campo Bom', uf: 'RS', ibge: '4303905' },
      { nome: 'Canoas', uf: 'RS', ibge: '4304606' },
      { nome: 'Carlos Barbosa', uf: 'RS', ibge: '4304804' },
      { nome: 'Caxias do Sul', uf: 'RS', ibge: '4305108' },
      { nome: 'Farroupilha', uf: 'RS', ibge: '4307906' },
      { nome: 'Garibaldi', uf: 'RS', ibge: '4308607' },
      { nome: 'Santiago', uf: 'RS', ibge: '4317400' },
      { nome: 'São Borja', uf: 'RS', ibge: '4318002' },
      { nome: 'Sapucaia do Sul', uf: 'RS', ibge: '4320008' }
    ]
  }
};

