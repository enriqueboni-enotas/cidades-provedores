var cidadeDetalhe = {
  id: 'cantagalo-rj',
  nome: 'Cantagalo',
  uf: 'RJ',
  ibge: '3301108',
  constante: 'CodigoIBGE.CantagaloRJ',
  provedorAtual: {
    nome: 'EeLv3',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'UsaCertificado',
    robo: false,
    webService: true,
    versaoAbrasf: '2.04',
    infoAdicional: 'Links com https tem que adicionar a tag <codigoNoProvedor>UsaCertificado</codigoNoProvedor>',
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://rj-cantagalo-pm-nfs-backend.cloud.el.com.br/producao10/NfseWSService'
      }
    }
  }
};
