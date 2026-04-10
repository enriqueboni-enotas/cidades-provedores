var cidadeDetalhe = {
  id: 'guarulhos-sp',
  nome: 'Guarulhos',
  uf: 'SP',
  ibge: '3518800',
  constante: 'CodigoIBGE.GuarulhosSP',
  provedorAtual: {
    nome: 'GINFESv2',
    namespace: null,
    codigoNoProvedor: '1782',
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
      producao: 'https://guarulhos.ginfes.com.br/nfseweb/nfse'
    }
  }
};
