var cidadeDetalhe = {
  id: 'duas-barras-rj',
  nome: 'Duas Barras',
  uf: 'RJ',
  ibge: '3301603',
  constante: 'CodigoIBGE.DuasBarrasRJ',
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
        recepcaoLote: 'https://rj-duasbarras-pm-nfs-backend.cloud.el.com.br/producao10/NfseWSService'
      }
    }
  }
};
