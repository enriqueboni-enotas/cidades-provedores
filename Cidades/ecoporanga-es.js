var cidadeDetalhe = {
  id: 'ecoporanga-es',
  nome: 'Ecoporanga',
  uf: 'ES',
  ibge: '3202108',
  constante: 'CodigoIBGE.EcoporangaES',
  provedorAtual: {
    nome: 'EeLv3',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'UsaCertificado',
    robo: false,
    webService: true,
    versaoAbrasf: '2.03',
    infoAdicional: 'Links com https tem que adicionar a tag <codigoNoProvedor>UsaCertificado</codigoNoProvedor>',
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://es-ecoporanga-pm-nfs-backend.cloud.el.com.br/producao20/NfseWSService'
      }
    }
  }
};
