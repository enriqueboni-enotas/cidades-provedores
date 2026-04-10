var provedorDetalhe = {
  id: 'elmarinformatica',
  nome: 'ElmarInformatica',
  empresa: 'ElmarInformatica',
  stats: {
    municipios: 9
  },
  visaoGeral: [
    { key: 'Nome', val: 'ElmarInformatica' },
    { key: 'Total Municipios', val: '9' },
    { key: 'Estados Atendidos', val: ['PB', 'PI'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: 'Informe a Chave de Acesso do prestador. Para verificar a Chave de Acesso. ',
      senha: 'Informe a senha de acesso ao portal da prefeitura.',
      token: 'Informe o Token do prestador. Para verificar o token. ',
      fraseSecreta: null
    },
    campoLoginProvedor: 1,
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: true,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 1 a 8 dígitos (somente números).\n\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui geralmente 4 a 5 dígitos com formatação.\nExemplo válido: (ex: 8.02, 24.01)',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal. O mesmo deve conter 7 dígitos (somente números).',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    naturezasOperacao: [
      { codigo: '1', nome: 'Serviço Prestado no Municipio' },
      { codigo: '2', nome: 'Isenção' },
      { codigo: '3', nome: 'Não Incidência' },
      { codigo: '4', nome: 'Fora do Municipio' },
      { codigo: '7', nome: 'Fora do Municipio com ISS Retido' },
      { codigo: '5', nome: 'Imune' },
      { codigo: '6', nome: 'Retida' }
    ]
  },
  municipiosLista: {
    'elmarinformatica': [
      { nome: 'Esperança', uf: 'PB', ibge: '2506004' }
,      { nome: 'Floriano', uf: 'PI', ibge: '2203909' }
,      { nome: 'Guarabira', uf: 'PB', ibge: '2506301' }
,      { nome: 'Mari', uf: 'PB', ibge: '2509107' }
,      { nome: 'Nova Floresta', uf: 'PB', ibge: '2510105' }
,      { nome: 'Princesa Isabel', uf: 'PB', ibge: '2512309' }
,      { nome: 'Rio Tinto', uf: 'PB', ibge: '2512903' }
,      { nome: 'Soledade', uf: 'PB', ibge: '2516102' }
,      { nome: 'Solânea', uf: 'PB', ibge: '2516003' }
    ]
  }
};
