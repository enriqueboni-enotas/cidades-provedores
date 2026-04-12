var cidadeDetalhe = {
  id: 'marilia-sp',
  nome: 'Marília',
  uf: 'SP',
  ibge: '3529005',
  constante: 'CodigoIBGE.MariliaSP',
  provedorAtual: {
    nome: 'SIGISSv1',
    namespace: null,
    codigoNoProvedor: 'EnviaAliquotaQuatroCasasDecimais',
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://marilia.sigiss.com.br/testemarilia/ws/sigiss_ws.php'
      },
      producao: {
        recepcaoLote: 'https://marilia.sigiss.com.br/marilia/ws/sigiss_ws.php'
      }
    },
    emissaoSemCertificado: {
      producao: 'https://marilia.sigiss.com.br/marilia'
    }
  }
};

