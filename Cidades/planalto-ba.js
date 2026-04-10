var cidadeDetalhe = {
  id: 'planalto-ba',
  nome: 'Planalto',
  uf: 'BA',
  ibge: '2925006',
  constante: 'CodigoIBGE.PlanaltoBA',
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
        recepcaoLote: 'https://ba-planalto-pm-nfs-backend.cloud.el.com.br/producao05/NfseWSService'
      }
    }
  }
};
