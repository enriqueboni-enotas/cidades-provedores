var cidadeDetalhe = {
  id: 'santo-antonio-dos-lopes-ma',
  nome: 'Santo Antônio dos Lopes',
  uf: 'MA',
  ibge: '2110302',
  constante: 'CodigoIBGE.SantoAntonioDosLopesMA',
  provedorAtual: {
    nome: 'D2ti',
    namespace: 'http://www.ctaconsult.com/nfse',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'http://stm.salopes.d2ti.com.br/wsnfselote/RecepcaoNFSePort',
        cancelamentoNFe: 'http://stm.salopes.d2ti.com.br/wsnfselote/CancelamentoNFSePort'
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
      token: 'Chave de acesso ao serviço de integração, esta chave pode ser encontrada no portal da prefeitura',
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: true,
    usaItemListaServico: true,
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui geralmente 5 dígitos (somente números).\nExemplo válido: 03115',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    regimesEspecialTributacao: [
      { codigo: '1', nome: 'Normal' },
      { codigo: '2', nome: 'Isenta' },
      { codigo: '3', nome: 'Imune' },
      { codigo: '4', nome: 'ME EPP - Simples Nacional' },
      { codigo: '5', nome: 'MEI' }
    ],
    naturezasOperacao: [
      { codigo: '1', nome: 'Isento de ISSQN' },
      { codigo: '2', nome: 'IMUNE' },
      { codigo: '3', nome: 'EXIGIBILIDADE SUSPENSA' },
      { codigo: '4', nome: 'TRIBUTÁVEL' },
      { codigo: '5', nome: 'NÃO INCIDENTE NO MUNICÍPIO' },
      { codigo: '6', nome: 'TRIBUTÁVEL S.N.' },
      { codigo: '7', nome: 'TRIBUTÁVEL FIXO' },
      { codigo: '8', nome: 'NÃO TRIBUTÁVEL' },
      { codigo: '9', nome: 'TRIBUTÁVEL MEI' }
    ]
  }
};
