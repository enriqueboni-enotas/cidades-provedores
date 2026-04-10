var cidadeDetalhe = {
  id: 'ipiau-ba',
  nome: 'Ipiaú',
  uf: 'BA',
  ibge: '2913903',
  constante: 'CodigoIBGE.IpiauBA',
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
        recepcaoLote: 'https://ba-ipiau-pm-nfs-backend.cloud.el.com.br/producao22/NfseWSService'
      }
    }
  }
};
