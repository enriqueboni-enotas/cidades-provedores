var cidadeDetalhe = {
  id: 'cordeiro-rj',
  nome: 'Cordeiro',
  uf: 'RJ',
  ibge: '3301504',
  constante: 'CodigoIBGE.CordeiroRJ',
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
        recepcaoLote: 'https://rj-cordeiro-pm-nfs-backend.cloud.el.com.br/producao10/NfseWSService'
      }
    }
  }
};
