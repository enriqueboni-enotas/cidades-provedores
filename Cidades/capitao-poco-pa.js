var cidadeDetalhe = {
  id: 'capitao-poco-pa',
  nome: 'Capitão Poço',
  uf: 'PA',
  ibge: '1502301',
  constante: 'CodigoIBGE.CapitaoPocoPA',
  provedorAtual: {
    nome: 'IssIntel',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://capitaopoco-pa.treino-issintegra.com.br/webservices/abrasf/api'
      },
      producao: {
        recepcaoLote: 'https://capitaopoco-pa.issintegra.com.br/webservices/abrasf/api'
      }
    }
  }
};
