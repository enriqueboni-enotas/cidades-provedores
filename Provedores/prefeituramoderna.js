var provedorDetalhe = {
  id: 'prefeituramoderna',
  nome: 'PrefeituraModerna',
  empresa: 'PrefeituraModerna',
  stats: {
    municipios: 3
  },
  visaoGeral: [
    { key: 'Nome', val: 'PrefeituraModerna' },
    { key: 'Total Municipios', val: '3' },
    { key: 'Estados Atendidos', val: ['MA', 'MG'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: 'Informe o usuário utilizado para acessar o sistema de sua prefeitura.',
      senha: 'Informe a senha utilizada para acessar o sistema de sua prefeitura.',
      token: null,
      fraseSecreta: null
    },
    campoLoginProvedor: 1,
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    emTransicaoNFSeNacional: true,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 1 a 8 dígitos (somente números).\n\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui geralmente 4 a 5 dígitos com formatação.\nExemplo válido: 1.01',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: false,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0
  },
  municipiosLista: {
    'prefeituramoderna': [
      { nome: 'Areado', uf: 'MG', ibge: '3104304' }
,      { nome: 'Nova Olinda do Maranhão', uf: 'MA', ibge: '2107357' }
,      { nome: 'Rosário', uf: 'MA', ibge: '2109601' }
    ]
  }
};
