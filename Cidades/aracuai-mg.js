var cidadeDetalhe = {
  id: 'aracuai-mg',
  nome: 'Araçuaí',
  uf: 'MG',
  ibge: '3103405',
  constante: 'CodigoIBGE.AracuaiMG',
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
        recepcaoLote: 'https://mg-aracuai-pm-nfs-backend.cloud.el.com.br/producao06/NfseWSService'
      }
    }
  }
};
