var cidadeDetalhe = {
  id: 'armacao-dos-buzios-rj',
  nome: 'Armação dos Búzios',
  uf: 'RJ',
  ibge: '3300233',
  constante: 'CodigoIBGE.ArmacaoDosBuziosRJ',
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
        recepcaoLote: 'https://rj-buzios-pm-nfs-backend.cloud.el.com.br/producao35/NfseWSService'
      }
    }
  }
};
