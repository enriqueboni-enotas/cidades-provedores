var cidadeDetalhe = {
  id: 'santo-andre-sp',
  nome: 'Santo André',
  uf: 'SP',
  ibge: '3547809',
  constante: 'CodigoIBGE.SantoAndreSP',
  provedorAtual: {
    nome: 'GINFESv2',
    namespace: null,
    codigoNoProvedor: '5896',
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
      producao: 'https://santoandre.ginfes.com.br/nfseweb/nfse'
    }
  }
};
