var provedorDetalhe = {
  id: 'rlz',
  nome: 'RLZ',
  empresa: 'RLZ',
  stats: {
    municipios: 1
  },
  visaoGeral: [
    { key: 'Nome', val: 'RLZ' },
    { key: 'Total Municipios', val: '1' },
    { key: 'Estados Atendidos', val: ['SP'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 3,
    assinaturaDigital: 0,
    suportaCancelamentoNFe: false,
    valorCancelamentoNFe: 45,
    usaAEDF: true,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter até 20 dígitos (somente números). Exemplo válido: 12108800',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. Ele possui geralmente 4 dígitos (somente números). Exemplo válido: 1401 e 0105',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: false,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: false,
    numeroNotasPorLote: 1,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0
  },
  municipiosLista: {
    'rlz': [
      { nome: 'Rancharia', uf: 'SP', ibge: '3542206' }
    ]
  }
};

