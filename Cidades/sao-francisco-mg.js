var cidadeDetalhe = {
  id: 'sao-francisco-mg',
  nome: 'São Francisco',
  uf: 'MG',
  ibge: '3161106',
  constante: 'CodigoIBGE.SaoFranciscoMG',
  provedorAtual: {
    nome: 'IssIntel',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://saofrancisco-mg.treino-issintegra.com.br/webservices/abrasf/api'
      },
      producao: {
        recepcaoLote: 'https://saofrancisco-mg.issintegra.com.br/webservices/abrasf/api'
      }
    }
  }
};
