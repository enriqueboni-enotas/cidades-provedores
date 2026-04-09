var cidadeDetalhe = {
  id: 'rio-verde-de-mato-grosso-ms',
  nome: 'Rio Verde de Mato Grosso',
  uf: 'MS',
  ibge: '5007406',
  constante: 'CodigoIBGE.RioVerdeDeMatoGrossoMS',
  provedorAtual: {
    nome: 'Betha',
    namespace: 'http://www.betha.com.br/e-nota-contribuinte-ws',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '1.01',
    infoAdicional: 'UsaBethaV2 - Usa versão do betha abrasfv2\n					UsaLinkBethaV2 - usa linkbetha abrasfv2 no cancelamento',
    urls: {
      homologacao: {
        recepcaoLote: 'https://nota-eletronica.betha.cloud/dps/ws'
      },
      producao: {
        recepcaoLote: 'https://e-gov.betha.com.br/e-nota-contribuinte-ws/recepcionarLoteRps',
        consultaSituacaoLote: 'https://e-gov.betha.com.br/e-nota-contribuinte-ws/consultarSituacaoLoteRps',
        consultaLote: 'https://e-gov.betha.com.br/e-nota-contribuinte-ws/consultarLoteRps',
        consultaRps: 'https://e-gov.betha.com.br/e-nota-contribuinte-ws/consultarNfsePorRps',
        consultaNFe: 'https://e-gov.betha.com.br/e-nota-contribuinte-ws/consultarNfse',
        cancelamentoNFe: 'https://e-gov.betha.com.br/e-nota-contribuinte-ws/cancelarNfse'
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
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 3 a 11 dígitos (somente números).\r\n\r\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui 4 dígitos (somente números).\r\nExemplo válido: 0108',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    enviaEmailCliente: false,
    autenticidadeNota: {
      urlVerificacao: 'https://nota-eletronica.betha.cloud/#/autenticando-nota',
      UsaCnpjPrestador: true,
      UsaCodigoVerificacao: true,
      UsaNumeroNota: true
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
      { codigo: '1', nome: 'Tributação no municipio' },
      { codigo: '2', nome: 'Tributação fora do municipio' },
      { codigo: '3', nome: 'Isenção' },
      { codigo: '4', nome: 'Imune' },
      { codigo: '5', nome: 'Exigibilidade suspensa por decisão judicial' },
      { codigo: '6', nome: 'Exigilidade suspensa por procedimento administrativo' },
      { codigo: '7', nome: 'Não Incidência' },
      { codigo: '8', nome: 'Substituição Tributária' }
    ]
  }
};

