var cidadeDetalhe = {
  id: 'ribeirao-grande-sp',
  nome: 'Ribeirão Grande',
  uf: 'SP',
  ibge: '3543253',
  constante: 'CodigoIBGE.RibeiraoGrandeSP',
  provedorAtual: {
    nome: 'CECOM',
    namespace: null,
    codigoNoProvedor: '5',
    robo: false,
    webService: true,
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'http://45.186.165.54:8080/ISSWEB/webservices/wsISSEletronico.asmx'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 3,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: null,
      senha: null,
      token: 'Chave de acesso ao serviço de integração da prefeitura.\r\n                    \r\nPara obter a Chave de Acesso é necessário que a empresa acesse o Portal de Nota Fiscal da prefeitura com seu usuário e senha, entre no menu \'Ferramentas/Importação de Notas fiscais/Informações Adicionais para Integração\', basta copiar e colar o valor da chave de validação neste campo.',
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
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 1 a 8 dígitos (somente números).\r\n\r\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal.\r\nExemplo válido: 74',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    naturezasOperacao: [
      { codigo: '1', nome: 'Serviço prestado no município do prestador' },
      { codigo: '2', nome: 'Serviço de construção civil' },
      { codigo: '3', nome: 'Serviço em via pública' },
      { codigo: '4', nome: 'Serviço prestado fora do município' }
    ]
  }
};

