var cidadeDetalhe = {
  id: 'volta-redonda-rj',
  nome: 'Volta Redonda',
  uf: 'RJ',
  ibge: '3306305',
  constante: 'CodigoIBGE.VoltaRedondaRJ',
  provedorAtual: {
    nome: 'SimplissV2',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'Formatar4CasasDecimaisAliquotaXml; NaoSuportaCancelamento; UsaArredondamentoAbntNbr5891',
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://wshomologacaoabrasf1.simplissweb.com.br/nfseservice.svc'
      },
      producao: {
        recepcaoLote: 'https://wsvoltaredonda.simplissweb.com.br/nfseservice.svc'
      }
    }
  }
};
