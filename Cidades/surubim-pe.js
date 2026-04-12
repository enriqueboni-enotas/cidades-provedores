var cidadeDetalhe = {
  id: 'surubim-pe',
  nome: 'Surubim',
  uf: 'PE',
  ibge: '2614501',
  constante: 'CodigoIBGE.SurubimPE',
  provedorAtual: {
    nome: 'HM2',
    namespace: 'http://www.abrasf.org.br/ABRASF/arquivos/nfse.xsd',
    codigoNoProvedor: null,
    robo: true,
    webService: false,
    versaoAbrasf: '2.02',
    urls: {
      homologacao: {
        recepcaoLote: 'http://hm2solucoes.com:8081/ws_nfe/RecepcionarLoteRps.rule?sys=TRB',
        consultaLote: 'http://hm2solucoes.com:8081/ws_nfe/ConsultarNfsePorRps.rule?sys=TRB',
        cancelamentoNFe: 'http://hm2solucoes.com:8081/ws_nfe/CancelarNfse.rule?sys=TRB'
      },
      producao: {
        recepcaoLote: 'https://surubim.hm2solucoes.com.br/tributacao/RecepcionarLoteRps.rule?sys=TRB',
        consultaLote: 'https://surubim.hm2solucoes.com.br/tributacao/ConsultarNfsePorRps.rule?sys=TRB',
        cancelamentoNFe: 'https://surubim.hm2solucoes.com.br/tributacao/CancelarNfse.rule?sys=TRB'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    suportaCancelamentoNFe: false,
    usaCodigoServicoMunicipal: false,
    usaCNAE: true,
    usaItemListaServico: true,
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal que identifica o serviço prestado na nota fiscal. \r\nEm algumas cidades esse código é conhecido como código de tributação.\r\nEsse código é semelhante ao CNAE porém formatado com 9 dígitos.\r\n\r\nExemplo válido: 631190000',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal e é formado por 4 a 5 dígitos (formatado com ponto).\r\n\r\nEsse código é identificado na sua prefeitura como Sub-Item e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, no seção Código de Serviço.\r\nExemplo válido: 01.03',
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
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
      { codigo: '1', nome: 'Exigível' },
      { codigo: '2', nome: 'Não incidência' },
      { codigo: '3', nome: 'Isenção' },
      { codigo: '4', nome: 'Exportação' },
      { codigo: '5', nome: 'Imunidade' },
      { codigo: '6', nome: 'Exigibilidade suspensa por decisão judicial' },
      { codigo: '7', nome: 'Exigilidade suspensa por procedimento administrativo' }
    ]
  }
};

