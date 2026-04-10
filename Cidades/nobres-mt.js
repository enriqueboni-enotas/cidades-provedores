var cidadeDetalhe = {
  id: 'nobres-mt',
  nome: 'Nobres',
  uf: 'MT',
  ibge: '5105903',
  constante: 'CodigoIBGE.NobresMT',
  provedorAtual: {
    nome: 'Agili',
    namespace: 'http://www.agili.com.br/nfse_v_1.00.xsd',
    codigoNoProvedor: '03424272000107; NaoItemLei116; UsaItemLei116AtividadeEconomica',
    robo: false,
    webService: true,
    infoAdicional: 'codigonoprovedor é Cnpj Município(Cidade)\n					NaoUsaCodigoCnae = não envia código do Cnae\n					NaoItemLei116 = não envia Item Lei 116\n					UsaItemLei116AtividadeEconomica = para enviar o ItemLei116AtividadeEconomica no xml\n					UsaCodigoCnaeAtividadeEconomica = para enviar o CodigoCnaeAtividadeEconomica no xml\n\n					Metadados Cadastro da empresa:\n					naturezaOperacaoPadrao\n					naturezaOperacaoPadraoExterior',
    urls: {
      homologacao: {
        recepcaoLote: 'https://agiliblue.agilicloud.com.br/api/GerarNfse/',
        consultaNFe: 'https://agiliblue.agilicloud.com.br/api/ConsultarNfseRps/',
        cancelamentoNFe: 'https://agiliblue.agilicloud.com.br/api/CancelarNfse/'
      },
      producao: {
        recepcaoLote: 'https://agiliblue.agilicloud.com.br/api/GerarNfse/',
        consultaNFe: 'https://agiliblue.agilicloud.com.br/api/ConsultarNfseRps/',
        cancelamentoNFe: 'https://agiliblue.agilicloud.com.br/api/CancelarNfse/'
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
      token: 'Informe o token de acesso a api do sistema de emissão da prefeitura',
      fraseSecreta: null
    },
    campoLoginProvedor: 0,
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: true,
    usaNBS: true,
    usaItemListaServico: true,
    usaNaturezaOperacao: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter somente números.\n\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. Exemplos: 17.14.01 e 4.12.01',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpItemListaServico: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. Ele possui geralmente 4 ou 5 dígitos com formatação. Exemplo válido: 4.03 ou 14.03',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    autenticidadeNota: {
      UsaCodigoVerificacao: true,
      urlVerificacao: 'https://blue.rondonopolis.mt.gov.br/portal/rondonopolis/#/autenticidade'
    },
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
      { codigo: '-1', nome: 'Exigível' },
      { codigo: '-2', nome: 'Não incidência' },
      { codigo: '-3', nome: 'Isento' },
      { codigo: '-4', nome: 'Exportação' },
      { codigo: '-5', nome: 'Imune' },
      { codigo: '-6', nome: 'Exigibilidade suspensa por decisão judicial' },
      { codigo: '-7', nome: 'Exigibilidade suspensa por processo administrativo' },
      { codigo: '-8', nome: 'Fixo' },
      { codigo: '-9', nome: 'Isento por lei específica' }
    ]
  }
};
