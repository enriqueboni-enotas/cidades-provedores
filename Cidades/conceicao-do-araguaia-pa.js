var cidadeDetalhe = {
  id: 'conceicao-do-araguaia-pa',
  nome: 'Conceição do Araguaia',
  uf: 'PA',
  ibge: '1502707',
  constante: 'CodigoIBGE.ConceicaoDoAraguaiaPA',
  provedorAtual: {
    nome: 'IssIntel',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://conceicaodoaraguaia-pa.treino-issintegra.com.br/webservices/abrasf/api'
      },
      producao: {
        recepcaoLote: 'https://conceicaodoaraguaia-pa.issintegra.com.br/webservices/abrasf/api'
      }
    }
  }
};
