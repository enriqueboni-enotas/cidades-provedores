var cidadeDetalhe = {
  id: 'guacui-es',
  nome: 'Guaçuí',
  uf: 'ES',
  ibge: '3202306',
  constante: 'CodigoIBGE.GuacuiES',
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
        recepcaoLote: 'https://es-guacui-pm-nfs-backend.cloud.el.com.br/producao12/NfseWSService'
      }
    }
  }
};
