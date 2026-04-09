var cidadeDetalhe = {
  id: 'olimpia-sp',
  nome: 'Olímpia',
  uf: 'SP',
  ibge: '3533908',
  constante: 'CodigoIBGE.OlimpiaSP',
  provedorAtual: {
    nome: 'GINFESv2',
    namespace: null,
    codigoNoProvedor: '2990',
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
      producao: 'https://olimpia.ginfes.com.br/nfseweb/nfse'
    }
  }
};

