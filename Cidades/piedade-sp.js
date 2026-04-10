var cidadeDetalhe = {
  id: 'piedade-sp',
  nome: 'Piedade',
  uf: 'SP',
  ibge: '3537800',
  constante: 'CodigoIBGE.PiedadeSP',
  provedorAtual: {
    nome: 'GINFESv2',
    namespace: 'http://www.abrasf.org.br/ABRASF/arquivos/nfse.xsd',
    codigoNoProvedor: '3282',
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
      producao: 'https://piedade.ginfes.com.br/nfseweb/nfse'
    }
  }
};
