var cidadeDetalhe = {
  id: 'ibatiba-es',
  nome: 'Ibatiba',
  uf: 'ES',
  ibge: '3202454',
  constante: 'CodigoIBGE.IbatibaES',
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
        recepcaoLote: 'https://es-ibatiba-pm-nfs-backend.cloud.el.com.br/producao20/NfseWSService'
      }
    }
  }
};
