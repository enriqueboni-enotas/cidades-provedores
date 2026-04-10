var cidadeDetalhe = {
  id: 'guaratinga-es',
  nome: 'Guaratinga',
  uf: 'ES',
  ibge: '2911808',
  constante: 'CodigoIBGE.GuaratingaES',
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
        recepcaoLote: 'https://ba-guaratinga-pm-nfs-backend.cloud.el.com.br/producao05/NfseWSService'
      }
    }
  }
};
