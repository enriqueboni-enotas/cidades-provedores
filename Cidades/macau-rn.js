var cidadeDetalhe = {
  id: 'macau-rn',
  nome: 'Macau',
  uf: 'RN',
  ibge: '2407203',
  constante: 'CodigoIBGE.MacauRN',
  provedorAtual: {
    nome: 'TinusV2',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://www2.tinus.com.br/csp/testemcu/WSNFSE203.Service2.nfseSOAP.cls'
      },
      producao: {
        recepcaoLote: 'https://www.tinus.com.br/csp/macau/WSNFSE203.Service2.nfseSOAP.cls'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 1,
    assinaturaDigital: 2,
    usaCodigoServicoMunicipal: true,
    usaNBS: true,
    usaItemListaServico: true,
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal e é formado 5 dígitos (formatado com ponto).\n\nEsse código é identificado na sua prefeitura como Sub-Item e é  possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, no seção Código de Serviço.\nExemplo válido: 01.03',
    numeroNotasPorLote: 1,
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
