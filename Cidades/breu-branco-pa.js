var cidadeDetalhe = {
  id: 'breu-branco-pa',
  nome: 'Breu Branco',
  uf: 'PA',
  ibge: '1501782',
  constante: 'CodigoIBGE.BreuBrancoPA',
  provedorAtual: {
    nome: 'IssIntel',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://breubranco-pa.treino-issintegra.com.br/webservices/abrasf/api'
      },
      producao: {
        recepcaoLote: 'https://breubranco-pa.issintegra.com.br/webservices/abrasf/api'
      }
    }
  }
};
