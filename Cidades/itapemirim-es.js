var cidadeDetalhe = {
  id: 'itapemirim-es',
  nome: 'Itapemirim',
  uf: 'ES',
  ibge: '3202801',
  constante: 'CodigoIBGE.ItapemirimES',
  provedorAtual: {
    nome: 'EeLv3',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '2.04',
    infoAdicional: 'Links com https tem que adicionar a tag <codigoNoProvedor>UsaCertificado</codigoNoProvedor>',
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://es-itapemirim-pm-nfs-backend.cloud.el.com.br/producao33/NfseWSService'
      }
    }
  }
};
