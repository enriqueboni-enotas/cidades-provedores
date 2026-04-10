var cidadeDetalhe = {
  id: 'tres-coracoes-mg',
  nome: 'Três Corações',
  uf: 'MG',
  ibge: '3169307',
  constante: 'CodigoIBGE.TresCoracoesMG',
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
        recepcaoLote: 'https://mg-trescoracoes-pm-nfs-backend.cloud.el.com.br/producao25/NfseWSService'
      }
    }
  }
};
