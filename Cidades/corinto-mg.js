var cidadeDetalhe = {
  id: 'corinto-mg',
  nome: 'Corinto',
  uf: 'MG',
  ibge: '3119104',
  constante: 'CodigoIBGE.CorintoMG',
  provedorAtual: {
    nome: 'DBSellerv2',
    namespace: 'http://www.abrasf.org.br/ABRASF/arquivos/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '2.04',
    urls: {
      homologacao: {
        recepcaoLote: 'http://189.126.111.18:8086/webservice/index/homologacao'
      },
      producao: {
        recepcaoLote: 'http://189.126.111.18:8086/webservice/index/producao'
      }
    }
  }
};
