var cidadeDetalhe = {
  id: 'hortolandia-sp',
  nome: 'Hortolândia',
  uf: 'SP',
  ibge: '3519071',
  constante: 'CodigoIBGE.HortolandiaSP',
  provedorAtual: {
    nome: 'GINFESv2',
    namespace: null,
    codigoNoProvedor: '9994',
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
      producao: 'http://hortolandia.ginfes.com.br/nfseweb/nfse'
    }
  }
};

