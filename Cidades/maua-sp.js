var cidadeDetalhe = {
  id: 'maua-sp',
  nome: 'Mauá',
  uf: 'SP',
  ibge: '3529401',
  constante: 'CodigoIBGE.MauaSP',
  provedorAtual: {
    nome: 'GINFESv2',
    namespace: null,
    codigoNoProvedor: '2644',
    robo: false,
    webService: true,
    infoAdicional: 'Propriedades do provedor: EmissaoDeLoteComUmaNota, UsaCancelamentoAbrasf\n					Metadados cadastro empresa: naturezaOperacaoPadrao, naturezaOperacaoPadraoExterior',
    urls: {
      homologacao: {
        recepcaoLote: 'https://homologacao.ginfes.com.br/ServiceGinfesImpl'
      },
      producao: {
        recepcaoLote: 'https://producao.ginfes.com.br/ServiceGinfesImpl'
      }
    },
    emissaoSemCertificado: {
      producao: 'http://maua.ginfes.com.br/nfseweb/nfse'
    }
  }
};

