var cidadeDetalhe = {
  id: 'confins-mg',
  nome: 'Confins',
  uf: 'MG',
  ibge: '3117876',
  constante: 'CodigoIBGE.ConfinsMG',
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
        recepcaoLote: 'https://mg-confins-pm-nfs-backend.cloud.el.com.br/producao17/NfseWSService'
      }
    }
  }
};
