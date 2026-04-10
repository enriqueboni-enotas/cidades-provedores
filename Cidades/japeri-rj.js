var cidadeDetalhe = {
  id: 'japeri-rj',
  nome: 'Japeri',
  uf: 'RJ',
  ibge: '3302270',
  constante: 'CodigoIBGE.JaperiRJ',
  provedorAtual: {
    nome: 'SiapGov',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
      },
      producao: {
        autenticacao: 'https://pmjaperi.geosiap.net.br/pmjaperi/issonline/validar/validar.login.php',
        recepcaoLote: 'https://pmjaperi.geosiap.net.br/pmjaperi/issonline/salvar/salvar.lancamento-nfse.php',
        consultaSituacaoLote: 'https://pmjaperi.geosiap.net.br/pmjaperi/issonline/validar/validar.documento.php',
        consultaLote: 'https://pmjaperi.geosiap.net.br/pmjaperi/issonline/form/form.lancamento-nfse.php',
        consultaNFe: 'https://pmjaperi.geosiap.net.br/pmjaperi/issonline/imprimir/imprimir.nfse_padrao.php?hash={0}&recibo=N',
        inutilizacaoNumeracaoNFe: 'https://pmjaperi.geosiap.net.br/pmjaperi/issonline/salvar/salvar.cadastro_rapido.php'
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
    campoLoginProvedor: 1,
    suportaCancelamentoNFe: false,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 1 a 8 dígitos (somente números).\n\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui geralmente 7 a 9 dígitos sem formatacao.\nExemplos válidos: 7112000, 711200001',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal. O mesmo deve conter 7 dígitos (somente números).',
    helpItemListaServico: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui geralmente 4 a 5 dígitos com formatação.\nExemplo válido: 1.01',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0
  }
};
