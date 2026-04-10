var cidadeDetalhe = {
  id: 'fundao-es',
  nome: 'Fundão',
  uf: 'ES',
  ibge: '3202207',
  constante: 'CodigoIBGE.FundaoES',
  provedorAtual: {
    nome: 'EeLv3',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'UsaCertificado',
    robo: false,
    webService: true,
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://es-fundao-pm-nfs-backend.cloud.el.com.br/producao/NfseWSService'
      }
    }
  }
};
