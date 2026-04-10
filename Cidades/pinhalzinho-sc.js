var cidadeDetalhe = {
  id: 'pinhalzinho-sc',
  nome: 'Pinhalzinho',
  uf: 'SC',
  ibge: '4212908',
  constante: 'CodigoIBGE.PinhalzinhoSC',
  provedorAtual: {
    nome: 'IPM',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://ws-pinhalzinho.atende.net/?pg=rest&service=WNERestServiceNFSe'
      },
      producao: {
        recepcaoLote: 'https://ws-pinhalzinho.atende.net/?pg=rest&service=WNERestServiceNFSe',
        consultaRps: 'https://ws-pinhalzinho.atende.net/?pg=rest&service=WNERestServiceNFSe',
        downloadPDF: 'C:\tools\Html2Pdf\bin\wkhtmltopdf.exe'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: 'Sua prefeitura exige a utilização de usuário e senha para autenticação durante a transmissão das suas notas fiscais.',
      senha: 'Sua prefeitura exige a utilização de usuário e senha para autenticação durante a transmissão das suas notas fiscais.',
      token: null,
      fraseSecreta: null
    },
    campoLoginProvedor: 1,
    valorCancelamentoNFe: 0,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaNBS: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter 1 a 10 dígitos (somente números).\n\nExemplo válido: 11356083',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n                                                                    Ele possui geralmente 3 a 9 dígitos (somente números).\n                                                                    Exemplo válido: 802, 1412, 75001001, 711110000',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    autenticidadeNota: {
      UsaChaveAcesso: false,
      UsaCnpjPrestador: false,
      UsaCodigoVerificacao: true,
      UsaCpfCnpjTomador: false,
      UsaInscricaoMunicipalPrestador: false,
      UsaNumeroNota: false,
      UsaValorNota: false
    },
    regimesEspecialTributacao: [
      { codigo: '0', nome: 'Tributada Integralmente' },
      { codigo: '1', nome: 'Tributada Integralmente com ISSRF' },
      { codigo: '2', nome: 'Tributada Integralmente e sujeita à Substituição Tributária' },
      { codigo: '3', nome: 'Tributada com redução da base de cálculo' },
      { codigo: '4', nome: 'Tributada com redução da base de cálculo com ISSRF' },
      { codigo: '5', nome: 'Tributada com redução da base de cálculo e sujeita à Substituição Tributária' },
      { codigo: '6', nome: 'Isenta' },
      { codigo: '7', nome: 'Imune' },
      { codigo: '8', nome: 'Não Tributada - ISS regime Fixo' },
      { codigo: '9', nome: 'Não Tributada - ISS regime Estimativa' },
      { codigo: '10', nome: 'Não Tributada - ISS Construção Civil recolhido antecipadamente' },
      { codigo: '14', nome: 'Não tributada' },
      { codigo: '15', nome: 'Não Tributada - Ato Cooperado' }
    ],
    naturezasOperacao: [
      { codigo: 'S', nome: 'Tributação no municipio' },
      { codigo: 'N', nome: 'Tributação fora do municipio' }
    ]
  }
};
