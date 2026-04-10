var provedorDetalhe = {
  id: 'tiplanv2',
  nome: 'TIPLANv2',
  empresa: 'TIPLANv2',
  stats: {
    municipios: 7
  },
  visaoGeral: [
    { key: 'Nome', val: 'TIPLANv2' },
    { key: 'Total Municipios', val: '7' },
    { key: 'Estados Atendidos', val: ['RJ', 'SP'], type: 'uf-badges' }
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
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: true,
    usaNBS: true,
    emTransicaoNFSeNacional: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 3 a 11 dígitos (somente números).\n\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui 7 dígitos (somente números).\nExemplo válido: 6201500',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal e é formado por 5 dígitos (com formatação).\n\nEsse código é identificado na sua prefeitura como Sub-Item e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, no seção Código de Serviço.\nExemplos válidos: 01.01 ou 14.02',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: false,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    regimesEspecialTributacao: [
      { codigo: '0', nome: 'Nenhum' },
      { codigo: '1', nome: 'Microempresa Municipal' },
      { codigo: '2', nome: 'Estimativa' },
      { codigo: '3', nome: 'Sociedade de Profissionais' },
      { codigo: '4', nome: 'Cooperativa' },
      { codigo: '5', nome: 'MEI - Simples Nacional' },
      { codigo: '6', nome: 'ME EPP - Simples Nacional' }
    ]
  },
  municipiosLista: {
    'tiplanv2': [
      { nome: 'Americana', uf: 'SP', ibge: '3501608' }
,      { nome: 'Angra dos Reis', uf: 'RJ', ibge: '3300100' }
,      { nome: 'Itaguaí', uf: 'RJ', ibge: '3302007' }
,      { nome: 'Macaé', uf: 'RJ', ibge: '3302403' }
,      { nome: 'Mangaratiba', uf: 'RJ', ibge: '3302601' }
,      { nome: 'Piraí', uf: 'RJ', ibge: '3304003' }
,      { nome: 'Rio das Ostras', uf: 'RJ', ibge: '3304524' }
    ]
  }
};
