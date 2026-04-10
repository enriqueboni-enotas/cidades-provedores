var cidadeDetalhe = {
  id: 'itabirinha-mg',
  nome: 'Itabirinha',
  uf: 'MG',
  ibge: '3131802',
  constante: 'CodigoIBGE.ItabirinhaMG',
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
        recepcaoLote: 'https://mg-itabirinha-pm-nfs-backend.cloud.el.com.br/producao06/NfseWSService'
      }
    }
  }
};
