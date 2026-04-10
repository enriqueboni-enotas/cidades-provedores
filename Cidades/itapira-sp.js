var cidadeDetalhe = {
  id: 'itapira-sp',
  nome: 'Itapira',
  uf: 'SP',
  ibge: '3522604',
  constante: 'CodigoIBGE.ItapiraSP',
  provedorAtual: {
    nome: 'SIGISSv1',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://itapira.sigiss.com.br/testeitapira/ws/sigiss_ws.php'
      },
      producao: {
        recepcaoLote: 'https://itapira.sigiss.com.br/itapira/ws/sigiss_ws.php'
      }
    },
    emissaoSemCertificado: {
      producao: 'https://itapira.sigiss.com.br/itapira'
    }
  }
};
