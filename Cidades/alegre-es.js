var cidadeDetalhe = {
  id: 'alegre-es',
  nome: 'Alegre',
  uf: 'ES',
  ibge: '3200201',
  constante: 'CodigoIBGE.AlegreES',
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
        recepcaoLote: 'https://es-alegre-pm-nfs-backend.cloud.el.com.br/nfse13/NfseWSService'
      }
    }
  }
};
