var cidadeDetalhe = {
  id: 'piuma-es',
  nome: 'Piúma',
  uf: 'ES',
  ibge: '3204203',
  constante: 'CodigoIBGE.PiumaES',
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
        recepcaoLote: 'https://es-piuma-pm-nfs-backend.cloud.el.com.br/producao30/NfseWSService'
      }
    }
  }
};
