var cidadeDetalhe = {
  id: 'igaracu-do-tiete-sp',
  nome: 'Igaraçu do Tietê',
  uf: 'SP',
  ibge: '3520004',
  constante: 'CodigoIBGE.IgaracuDoTieteSP',
  provedorAtual: {
    nome: 'FgMaiss',
    namespace: null,
    codigoNoProvedor: '44498467000189',
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://www.webfiscotecnologia.com.br/issqn/wservice/wsnfe_teste_homologacaopn.php'
      },
      producao: {
        recepcaoLote: 'https://www.webfiscotecnologia.com.br/issqn/wservice/wsnfeenviapn.php',
        consultaLote: 'https://www.webfiscotecnologia.com.br/issqn/wservice/wsnfeconsultaxmlpn.php',
        cancelamentoNFe: 'https://www.webfiscotecnologia.com.br/issqn/wservice/wsnfecancelapn.php'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: 'Informe o usuário de acesso ao portal de NFS-e da prefeitura.',
      senha: 'Informe a senha de acesso ao portal de NFS-e da prefeitura.',
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    usaNBS: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 5 a 8 dígitos (somente números).\r\n\r\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente de 4 a 5 dígitos formatado com um ponto.\r\nExemplo válido: 8.02 ou 12.11',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: false,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0
  }
};

