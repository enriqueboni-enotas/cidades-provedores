var cidadeDetalhe = {
  id: 'conceicao-do-castelo-es',
  nome: 'Conceição do Castelo',
  uf: 'ES',
  ibge: '3201704',
  constante: 'CodigoIBGE.ConceicaoDoCasteloES',
  provedorAtual: {
    nome: 'EeLv3',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'UsaCertificado',
    robo: false,
    webService: true,
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://es-conceicaodocastelo-pm-nfs-backend.cloud.el.com.br/producao20/NfseWSService',
        consultaRps: 'http://es-conceicaodocastelo-pm-nfs.cloud.el.com.br/'
      }
    }
  }
};
