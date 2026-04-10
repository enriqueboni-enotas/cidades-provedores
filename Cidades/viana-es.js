var cidadeDetalhe = {
  id: 'viana-es',
  nome: 'Viana',
  uf: 'ES',
  ibge: '3205101',
  constante: 'CodigoIBGE.VianaES',
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
        recepcaoLote: 'https://es-viana-pm-nfs-backend.cloud.el.com.br/nfse23/NfseWSService'
      }
    }
  }
};
