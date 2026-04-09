var cidadeDetalhe = {
  id: 'campo-maior-pi',
  nome: 'Campo Maior',
  uf: 'PI',
  ibge: '2202208',
  constante: 'CodigoIBGE.CampoMaiorPI',
  provedorAtual: {
    nome: 'KdsSistemas',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: '5',
    robo: false,
    webService: true,
    infoAdicional: 'Para ativação de novos municípios, acesse a página de NFSe da prefeitura e verifique o número final do link e insira o código correspondente \'CodigoNoProvedor\'. \n    Exemplo:http://54.145.30.74:8080/nfse/faces/inicio.xhtml?p=5\n    Neste caso o campo CodigoNoProvedor receberá o valor = 5',
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'http://54.145.30.74:8080/'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: null,
      senha: null,
      token: 'Sua prefeitura exige utilização de usuário e senha para autenticação',
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: false,
    usaCNAE: false,
    usaItemListaServico: false,
    usaNaturezaOperacao: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 3 a 11 dígitos (somente números).\r\n\r\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. Usar 4 ou 5 dígitos com formatação, fazendo a separação com “ponto” (Ex: 8.02, 14.01).',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informar a Classificação no CNAE que se relacione com Item da Lista de Serviço',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal corresponde à classificação do contribuinte na tabela da LC\r\n116. Usar 4 ou 5 dígitos com formatação, fazendo a separação com “ponto” (Ex: 8.02, 14.01).',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: false,
    numeroDoRpsSeraNumeroDaNota: true,
    naturezasOperacao: [
      { codigo: '0', nome: '0 – Tributado no Município' },
      { codigo: '1', nome: '1 – Tributado Fora do Município' },
      { codigo: '2', nome: '2 – Isento / Imune' },
      { codigo: '3', nome: '3 – Suspensão / Decisão Judicial' },
      { codigo: '4', nome: '4 – Simples Nacional' },
      { codigo: '5', nome: '5 – Retido no Município' }
    ]
  }
};

