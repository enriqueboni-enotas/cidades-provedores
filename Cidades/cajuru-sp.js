var cidadeDetalhe = {
  id: 'cajuru-sp',
  nome: 'Cajuru',
  uf: 'SP',
  ibge: '3509403',
  constante: 'CodigoIBGE.CajuruSP',
  provedorAtual: {
    nome: 'eTransparencia',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    infoAdicional: 'Metadados Cadastro da Empresa\n					usaArredondarTerceiroDigitoMaiorOuIgualACinco -> Regra de arredondamento que considera o terceiro digito >= 5',
    urls: {
      homologacao: {
        recepcaoLote: 'https://nfehomologacao.etransparencia.com.br/sp.cajuru/webservice/aws_nfe.aspx'
      },
      producao: {
        recepcaoLote: 'https://nfe.etransparencia.com.br/sp.cajuru/webservice/aws_nfe.aspx'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: 'Informe o usuário utilizado para acessar o sistema de sua prefeitura.',
      senha: 'Informe a senha utilizada para acessar o sistema de sua prefeitura.',
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
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 5 a 8 dígitos (somente números).\n\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui geralmente 8 dígitos formatado com um ponto.\nExemplo válido: 08.02.01',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal. O mesmo deve conter 7 dígitos (somente números).',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    numeroRpsDeveSerSequencial: true,
    autenticidadeNota: {
      UsaChaveAcesso: false,
      UsaCnpjPrestador: true,
      UsaCodigoVerificacao: true,
      UsaCpfCnpjTomador: false,
      UsaInscricaoMunicipalPrestador: false,
      UsaNumeroNota: true,
      UsaValorNota: false,
      urlVerificacao: 'https://nfe.etransparencia.com.br/sp.taboaodaserra/nfe/principal.aspx'
    },
    regimesEspecialTributacao: [
      { codigo: '1', nome: 'Tributado' },
      { codigo: '2', nome: 'Isenção / Imunidade' },
      { codigo: '3', nome: 'Suspensão' },
      { codigo: '4', nome: 'Simples Nacional' },
      { codigo: '5', nome: 'ISS Fixo' },
      { codigo: '6', nome: 'Isenção parcial' }
    ]
  }
};
