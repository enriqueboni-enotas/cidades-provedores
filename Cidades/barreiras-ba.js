var cidadeDetalhe = {
  id: 'barreiras-ba',
  nome: 'Barreiras',
  uf: 'BA',
  ibge: '2903201',
  constante: 'CodigoIBGE.BarreirasBA',
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
        recepcaoLote: 'https://ba-barreiras-pm-nfs-backend.cloud.el.com.br/producao/NfseWSService'
      }
    }
  }
};
