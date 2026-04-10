var cidadeDetalhe = {
  id: 'nova-venecia-es',
  nome: 'Nova Venécia',
  uf: 'ES',
  ibge: '3203908',
  constante: 'CodigoIBGE.NovaVeneciaES',
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
        recepcaoLote: 'https://es-novavenecia-pm-nfs-backend.cloud.el.com.br/producao20/NfseWSService'
      }
    }
  }
};
