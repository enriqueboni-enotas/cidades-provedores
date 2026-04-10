var cidadeDetalhe = {
  id: 'blumenau-sc',
  nome: 'Blumenau',
  uf: 'SC',
  ibge: '4202404',
  constante: 'CodigoIBGE.BlumenauSC',
  provedorAtual: {
    nome: 'SimplissV2',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'UsaArredondamentoAbntNbr5891',
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'http://wshomologacaoabrasf.simplissweb.com.br/ws_nfse/nfseservice.svc'
      },
      producao: {
        recepcaoLote: 'http://wsblumenau.simplissweb.com.br/nfseservice.svc'
      }
    }
  }
};
