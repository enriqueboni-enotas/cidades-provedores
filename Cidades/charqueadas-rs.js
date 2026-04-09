var cidadeDetalhe = {
  id: 'charqueadas-rs',
  nome: 'Charqueadas',
  uf: 'RS',
  ibge: '4305355',
  constante: 'CodigoIBGE.CharqueadasRS',
  provedorAtual: {
    nome: 'DBSellerv2',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '2.04',
    urls: {
      homologacao: {
        recepcaoLote: 'https://nfse.charqueadas.rs.gov.br/webservice/index/homologacao'
      },
      producao: {
        recepcaoLote: 'https://nfse.charqueadas.rs.gov.br/webservice/index/producao'
      }
    }
  }
};

