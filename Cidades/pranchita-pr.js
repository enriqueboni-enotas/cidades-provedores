var cidadeDetalhe = {
  id: 'pranchita-pr',
  nome: 'Pranchita',
  uf: 'PR',
  ibge: '4120358',
  constante: 'CodigoIBGE.PranchitaPR',
  provedorAtual: {
    nome: 'Equiplano',
    namespace: 'http://www.equiplano.com.br/esnfs',
    codigoNoProvedor: '47',
    robo: false,
    webService: true,
    infoAdicional: 'Colocar o código do provedor correto no xml se não tiver no comentario dos provedores do equiplano pegar no portal',
    urls: {
      homologacao: {
        recepcaoLote: 'https://www.esnfs.com.br:9444/homologacaows/services/Enfs'
      },
      producao: {
        recepcaoLote: 'https://www.esnfs.com.br:8444/enfsws/services/Enfs'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 1,
    assinaturaDigital: 2,
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: null,
      senha: null,
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter 8 dígitos (somente números). Exemplo válido: 11356083',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. Ele possui geralmente 5 dígitos (somente números). Exemplo válido: 14.01',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    autenticidadeNota: {
      UsaCodigoVerificacao: true,
      urlVerificacao: 'https://esnfs.com.br/nfsautenticidade.edit.logic'
    },
    naturezasOperacao: [
      { codigo: '1', nome: 'Tributado no municipio' },
      { codigo: '2', nome: 'Em outro município' },
      { codigo: '3', nome: 'Isento/imune' },
      { codigo: '4', nome: 'Suspenso/decisão judicial' }
    ]
  }
};
