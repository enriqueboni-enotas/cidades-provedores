var cidadeDetalhe = {
  id: 'jacunda-pa',
  nome: 'Jacundá',
  uf: 'PA',
  ibge: '1503804',
  constante: 'CodigoIBGE.JacundaPA',
  provedorAtual: {
    nome: 'Aspect',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    naoEnviaSerieRPS: false,
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'http://pa.jacunda.tributario.aspec.com.br/prefeitura/ws/nfse'
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
      token: 'Sua prefeitura exige utilização de token para autenticação',
      fraseSecreta: null
    },
    suportaCancelamentoNFe: false,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: false,
    usaCNAE: false,
    usaNBS: true,
    usaItemListaServico: false,
    usaNaturezaOperacao: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 3 a 11 dígitos (somente números).\r\n\r\nExemplo válido: 204589',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\n– Exemplos: 200101 e 030402',
    suportaEmissaoNFeSemCliente: false,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    naturezasOperacao: [
      { codigo: '1', nome: 'Tributavel' },
      { codigo: '2', nome: 'Não incidência' },
      { codigo: '3', nome: 'Isenção' },
      { codigo: '4', nome: 'Imunidade' }
    ]
  }
};

