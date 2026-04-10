var cidadeDetalhe = {
  id: 'santa-luzia-do-itanhy-se',
  nome: 'Santa Luzia do Itanhy',
  uf: 'SE',
  ibge: '2806305',
  constante: 'CodigoIBGE.SantaLuziaDoItanhySE',
  provedorAtual: {
    nome: 'Siafic',
    namespace: null,
    codigoNoProvedor: '13098942000104',
    robo: false,
    webService: true,
    infoAdicional: 'Colocar CNPJ prefeitura no código do provedor',
    urls: {
      homologacao: {
        autenticacao: 'https://siafic-teste.3tecnos.com.br/autenticar',
        recepcaoLote: 'https://siafic-teste.3tecnos.com.br/{0}/{1}/nfse',
        consultaLote: 'https://siafic-teste.3tecnos.com.br/{0}/{1}/nfse/{2}',
        cancelamentoNFe: 'https://siafic-teste.3tecnos.com.br/{0}/{1}/nfse/{2}/cancelar'
      },
      producao: {
        autenticacao: 'https://siafic.3tecnos.com.br/autenticar',
        recepcaoLote: 'https://siafic.3tecnos.com.br/{0}/{1}/nfse',
        consultaLote: 'https://siafic.3tecnos.com.br/{0}/{1}/nfse/{2}',
        cancelamentoNFe: 'https://siafic.3tecnos.com.br/{0}/{1}/nfse/{2}/cancelar'
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
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: true,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 1 a 8 dígitos (somente números).\n\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui geralmente 2 mais dígitos sem formatação.\nExemplo válido: 53, 3201',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    naturezasOperacao: [
      { codigo: '1', nome: 'Tributação no município' },
      { codigo: '2', nome: 'Tributação fora do município' },
      { codigo: '3', nome: 'Isenção' },
      { codigo: '4', nome: 'Imune' },
      { codigo: '5', nome: 'Exigibilidade suspensa por decisão judicial' },
      { codigo: '6', nome: 'Exigibilidade suspensa por procedimento administrativo' }
    ]
  }
};
