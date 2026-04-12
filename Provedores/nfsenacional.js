var provedorDetalhe = {
  id: 'nfsenacional',
  nome: 'NfseNacional',
  empresa: 'NfseNacional',
  stats: {
    municipios: 9
  },
  visaoGeral: [
    { key: 'Nome', val: 'NfseNacional' },
    { key: 'Total Municipios', val: '9' },
    { key: 'Estados Atendidos', val: ['RN', 'MG', 'SP', 'SC', 'RS', 'PA'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 1,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: null,
      senha: null,
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: false,
    usaCNAE: false,
    usaItemListaServico: false,
    usaNaturezaOperacao: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 8 dígitos (com formatação).\r\n\r\nExemplo válido: 14.05.01',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\n– Destina-se a receber a indicação do tratamento específico de cada Município (Ex: O contribuinte possui um benefício especial que tem \r\no código 123, está classificado na atividade 07.02 que no município recebeu um detalhamento criando então o item 07.02.01). Este campo deverá ser preenchido\r\nentão com o código 123070201. Antes de informar este código é importante que consulte a Secretaria de Fazenda de seu Município',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informar a Classificação no CNAE que se relacione com Item da Lista de Serviço',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: false,
    suportaConsultaSequencialRps: true,
    numeroNotasPorLote: 1,
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
      { codigo: '', nome: 'Selecione' },
      { codigo: '1', nome: 'Operação tributável' },
      { codigo: '2', nome: 'Imunidade' },
      { codigo: '3', nome: 'Exportação de Serviço' },
      { codigo: '4', nome: 'Não incidência' }
    ]
  },
  municipiosLista: {
    'nfsenacional': [
      { nome: 'Adamantina', uf: 'SP', ibge: '3500105' },
      { nome: 'Candelária', uf: 'RS', ibge: '4304200' },
      { nome: 'Coromandel', uf: 'MG', ibge: '3119302' },
      { nome: 'Itapiranga', uf: 'SC', ibge: '4208401' },
      { nome: 'João Câmara', uf: 'RN', ibge: '2405801' },
      { nome: 'Marabá', uf: 'PA', ibge: '1504208' },
      { nome: 'Mendonça', uf: 'SP', ibge: '3529500' },
      { nome: 'Rio Paranaíba', uf: 'MG', ibge: '3155504' },
      { nome: 'Santa Cruz', uf: 'RN', ibge: '2411205' }
    ]
  }
};

