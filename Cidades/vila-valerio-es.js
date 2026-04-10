var cidadeDetalhe = {
  id: 'vila-valerio-es',
  nome: 'Vila Valério',
  uf: 'ES',
  ibge: '3205176',
  constante: 'CodigoIBGE.VilaValerioES',
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
        recepcaoLote: 'https://es-vilavalerio-pm-nfs-backend.cloud.el.com.br/producao/NfseWSService'
      }
    }
  }
};
