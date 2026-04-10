var cidadeDetalhe = {
  id: 'porto-de-moz-pa',
  nome: 'Porto de Moz',
  uf: 'PA',
  ibge: '1505908',
  constante: 'CodigoIBGE.PortoDeMozPA',
  provedorAtual: {
    nome: 'IssIntel',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://portodemoz-pa.treino-issintegra.com.br/webservices/abrasf/api'
      },
      producao: {
        recepcaoLote: 'https://portodemoz-pa.issintegra.com.br/webservices/abrasf/api'
      }
    }
  }
};
