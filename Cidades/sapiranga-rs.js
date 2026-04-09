var cidadeDetalhe = {
  id: 'sapiranga-rs',
  nome: 'Sapiranga',
  uf: 'RS',
  ibge: '4319901',
  constante: 'CodigoIBGE.SapirangaRS',
  provedorAtual: {
    nome: 'DBSellerv2',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'UsaVersao204AtualizadaSapirangaRS, NaoEnviaCodigoPais',
    robo: false,
    webService: true,
    versaoAbrasf: '2.04',
    urls: {
      homologacao: {
        recepcaoLote: 'https://hom.nfse.sapiranga.rs.gov.br/webservice/index/homologacao'
      },
      producao: {
        recepcaoLote: 'https://nfse.sapiranga.rs.gov.br/webservice/index/producao'
      }
    }
  }
};

