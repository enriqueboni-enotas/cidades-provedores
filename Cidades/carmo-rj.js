var cidadeDetalhe = {
  id: 'carmo-rj',
  nome: 'Carmo',
  uf: 'RJ',
  ibge: '3301207',
  constante: 'CodigoIBGE.CarmoRJ',
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
        recepcaoLote: 'https://rj-carmo-pm-nfs-backend.cloud.el.com.br/producao10/NfseWSService'
      }
    }
  }
};
