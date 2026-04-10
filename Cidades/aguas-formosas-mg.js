var cidadeDetalhe = {
  id: 'aguas-formosas-mg',
  nome: 'Águas Formosas',
  uf: 'MG',
  ibge: '3100906',
  constante: 'CodigoIBGE.AguasFormosasMG',
  provedorAtual: {
    nome: 'nfEletronica',
    namespace: null,
    codigoNoProvedor: '3',
    robo: false,
    webService: true,
    urls: {
      homologacao: {
      },
      producao: {
        autenticacao: 'http://www.nf-eletronica.com.br/nfeletronica/login.asp?log_=in&x=1',
        recepcaoLote: 'http://www.nf-eletronica.com.br/nfeletronica/CONTRIB/arq_upload_importa_total.asp?s={0}&m=3',
        consultaLote: 'http://www.nf-eletronica.com.br/nfeletronica/CONTRIB/importa.asp?s={0}&a=gravar',
        consultaRps: 'http://www.nf-eletronica.com.br/nfeletronica/CONTRIB/NF_Imprime.asp?s={0}&a={1}&b=F',
        cancelamentoNFe: 'http://www.nf-eletronica.com.br/nfeletronica/CONTRIB/DOC_canc_2.asp',
        downloadPDF: 'http://www.nf-eletronica.com.br/nfeletronica/CONTRIB/NF_Imprime.asp?s={0}&a={1}'
      }
    }
  },
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
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 1 a 8 dígitos (somente números).\n\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui geralmente 4 a 5 dígitos com formatação.\nExemplo válido: 1.01',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    numeroRpsDeveSerSequencial: false,
    numeroNotasPorLote: 1,
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
      { codigo: '1', nome: 'Tributado no município' },
      { codigo: '2', nome: 'tributado fora do município' },
      { codigo: '5', nome: 'Serviço no exterior sem resultados no território nacional' }
    ]
  }
};
