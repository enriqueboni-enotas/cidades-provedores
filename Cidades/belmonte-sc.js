var cidadeDetalhe = {
  id: 'belmonte-sc',
  nome: 'Belmonte',
  uf: 'SC',
  ibge: '4202156',
  constante: 'CodigoIBGE.BelmonteSC',
  provedorAtual: {
    nome: 'BethaV2',
    namespace: 'http://www.betha.com.br/e-nota-contribuinte-ws',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '2.02',
    infoAdicional: 'cadastro empresa:\n					naturezaOperacaoPadrao, naturezaOperacaoPadraoExterior\n\n					Propriedades do provedor: UsaBethav2Cloud: Usa metodo assincrono',
    urls: {
      homologacao: {
        recepcaoLote: 'http://e-gov.betha.com.br/e-nota-contribuinte-test-ws/nfseWS'
      },
      producao: {
        recepcaoLote: 'http://e-gov.betha.com.br/e-nota-contribuinte-ws/nfseWS'
      }
    }
  }
};
