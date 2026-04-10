var cidadeDetalhe = {
  id: 'anchieta-es',
  nome: 'Anchieta',
  uf: 'ES',
  ibge: '3200409',
  constante: 'CodigoIBGE.AnchietaES',
  provedorAtual: {
    nome: 'EeLv3',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'UsaInformacoesComplementares',
    robo: false,
    webService: true,
    versaoAbrasf: '2.03',
    infoAdicional: 'Links com https tem que adicionar a tag <codigoNoProvedor>UsaCertificado</codigoNoProvedor>',
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://es-anchieta-pm-nfs-backend.cloud.el.com.br/producao30/NfseWSService'
      }
    }
  }
};
