var cidadeDetalhe = {
  id: 'curionopolis-pa',
  nome: 'Curionópolis',
  uf: 'PA',
  ibge: '1502772',
  constante: 'CodigoIBGE.CurionopolisPA',
  provedorAtual: {
    nome: 'IssIntel',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://curionopolis-pa.treino-issintegra.com.br/webservices/abrasf/api'
      },
      producao: {
        recepcaoLote: 'https://curionopolis-pa.issintegra.com.br/webservices/abrasf/api'
      }
    }
  }
};
