var cidadeDetalhe = {
  id: 'itaocara-rj',
  nome: 'Itaocara',
  uf: 'RJ',
  ibge: '3302106',
  constante: 'CodigoIBGE.ItaocaraRJ',
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
        recepcaoLote: 'https://rj-itaocara-pm-nfs-backend.cloud.el.com.br/producao10/NfseWSService'
      }
    }
  }
};
