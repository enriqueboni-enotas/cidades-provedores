var cidadeDetalhe = {
  id: 'iconha-es',
  nome: 'Iconha',
  uf: 'ES',
  ibge: '3202603',
  constante: 'CodigoIBGE.IconhaES',
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
        recepcaoLote: 'https://es-iconha-pm-nfs-backend.cloud.el.com.br/producao/NfseWSService',
        consultaRps: 'https://es-iconha-pm-nfs-backend.cloud.el.com.br/'
      }
    }
  }
};
