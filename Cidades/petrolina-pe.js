var cidadeDetalhe = {
  id: 'petrolina-pe',
  nome: 'Petrolina',
  uf: 'PE',
  ibge: '2611101',
  constante: 'CodigoIBGE.PetrolinaPE',
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
        recepcaoLote: 'https://pe-petrolina-pm-nfs-backend.cloud.el.com.br/nfse/NfseWSService',
        consultaRps: 'https://pe-petrolina-pm-nfs-backend.cloud.el.com.br/'
      }
    }
  }
};
