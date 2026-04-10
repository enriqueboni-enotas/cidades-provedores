var cidadeDetalhe = {
  id: 'machados-pe',
  nome: 'Machados',
  uf: 'PE',
  ibge: '2609105',
  constante: 'CodigoIBGE.MachadosPE',
  provedorAtual: {
    nome: 'Tributus',
    namespace: 'http://tributosInformatica.com.br',
    codigoNoProvedor: 'EmiteVersao1',
    robo: true,
    webService: false,
    infoAdicional: 'verificar as propriedades no provedor: EmiteVersao1, UsaItemListaServicoProp, UsaCNAEProp',
    urls: {
      homologacao: {
      },
      producao: {
        autenticacao: 'https://www.tributosmunicipais.com.br/NFE-machados/',
        recepcaoLote: 'https://www.tributosmunicipais.com.br/NFE-machados/'
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
    suportaCancelamentoNFe: false,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 1 a 8 dígitos (somente números).\n\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui geralmente 4 a 5 dígitos com formatação.\nExemplo válido: 1.01',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpItemListaServico: 'Informe aqui o item da lista de serviço que identifica o item atividade na nota fiscal. \n\nEle possui 3 a 4 dígitos sem formatação.\nExemplo válidos:  104 ou 1706',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
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
      { codigo: '3', nome: 'Serviço no exterior sem resultados no território nacional' }
    ]
  }
};
