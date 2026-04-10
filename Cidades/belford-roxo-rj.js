var cidadeDetalhe = {
  id: 'belford-roxo-rj',
  nome: 'Belford Roxo',
  uf: 'RJ',
  ibge: '3300456',
  constante: 'CodigoIBGE.BelfordRoxoRJ',
  provedorAtual: {
    nome: 'ModernizacaoPublica',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: '517; NaoSuportaCancelamento',
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'http://notabelford.modernizacaopublica.com.br:8054/homologacao/webservices/NFEServices.jws'
      },
      producao: {
        recepcaoLote: 'http://sis-nfse.prefeituradebelfordroxo.rj.gov.br:8053/nfe/webservices/NFEServices.jws'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 0,
    assinaturaDigital: 0,
    usaCNAE: true,
    usaItemListaServico: false,
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
