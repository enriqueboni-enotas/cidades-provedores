var cidadeDetalhe = {
  id: 'embu-das-artes-sp',
  nome: 'Embu das Artes',
  uf: 'SP',
  ibge: '3515004',
  constante: 'CodigoIBGE.EmbuDasArtesSP',
  provedorAtual: {
    nome: 'GIAPv2',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
      },
      producao: {
        autenticacao: 'https://nfseembudasartes.obaratec.com.br/ords/embu01/f?p=936:101',
        recepcaoLote: 'http://webservice.giap.com.br/WSNfsesEmbu/nfseresources/ws/v2/emissao',
        consultaRps: 'https://nfseembudasartes.obaratec.com.br/ords/embu01/',
        consultaNFe: 'http://webservice.giap.com.br/WSNfsesEmbu/nfseresources/ws/v2/consulta',
        cancelamentoNFe: 'http://webservice.giap.com.br/WSNfsesEmbu/nfseresources/ws/v2/cancela'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 5,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: 'Informe o usuário utilizado para acessar o sistema de sua prefeitura.',
      senha: 'Informe a senha utilizada para acessar o sistema de sua prefeitura.',
      token: 'Informe o token de autenticação disponível no cadastro da sua empresa no site da NFS-e na prefeitura.',
      fraseSecreta: null
    },
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaNBS: true,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 5 a 8 dígitos (somente números).\r\n\r\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente 3 a 4 dígitos (somente números, sem formatação)\r\nExemplo válido: 802',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal e é formado por 4 dígitos (somente números).\r\n\r\nEsse código é identificado na sua prefeitura como Sub-Item e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, no seção Código de Serviço.\r\nExemplos válidos: 1211 ou 0802',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: false,
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
      { codigo: '1', nome: 'Tributação no municipio' },
      { codigo: '2', nome: 'Tributação fora do municipio' },
      { codigo: '3', nome: 'Isenção' },
      { codigo: '4', nome: 'Imune' },
      { codigo: '5', nome: 'Exigibilidade suspensa por decisão judicial' },
      { codigo: '6', nome: 'Exigilidade suspensa por procedimento administrativo' }
    ]
  }
};

