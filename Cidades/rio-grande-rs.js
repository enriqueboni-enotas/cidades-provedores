var cidadeDetalhe = {
  id: 'rio-grande-rs',
  nome: 'Rio Grande',
  uf: 'RS',
  ibge: '4315602',
  constante: 'CodigoIBGE.RioGrandeRS',
  provedorAtual: {
    nome: 'SIGISSv1',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://testeriogrande.sigiss.com.br/riogrande//ws/sigiss_ws.php'
      },
      producao: {
        recepcaoLote: 'https://riogrande.sigiss.com.br/riogrande//ws/sigiss_ws.php'
      }
    },
    emissaoSemCertificado: {
      producao: 'https://riogrande.sigiss.com.br/riogrande'
    }
  }
};

