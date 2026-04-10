var cidadeDetalhe = {
  id: 'rio-piracicaba-mg',
  nome: 'Rio Piracicaba',
  uf: 'MG',
  ibge: '3155702',
  constante: 'CodigoIBGE.RioPiracicabaMG',
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
        recepcaoLote: 'https://mg-riopiracicaba-pm-nfs.cloud.el.com.br/NfseWSService'
      }
    }
  }
};
