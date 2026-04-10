var cidadeDetalhe = {
  id: 'aracruz-es',
  nome: 'Aracruz',
  uf: 'ES',
  ibge: '3200607',
  constante: 'CodigoIBGE.AracruzES',
  provedorAtual: {
    nome: 'EeLv3',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '2.03',
    infoAdicional: 'Links com https tem que adicionar a tag <codigoNoProvedor>UsaCertificado</codigoNoProvedor>',
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://es-aracruz-pm-nfs-backend.cloud.el.com.br/producao24/NfseWSService'
      }
    }
  }
};
