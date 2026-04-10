var cidadeDetalhe = {
  id: 'sao-bernardo-do-campo-sp',
  nome: 'São Bernardo do Campo',
  uf: 'SP',
  ibge: '3548708',
  constante: 'CodigoIBGE.SaoBernardoDoCampoSP',
  provedorAtual: {
    nome: 'GINFESv2',
    namespace: null,
    codigoNoProvedor: '3995',
    robo: false,
    webService: true,
    infoAdicional: 'Propriedades do provedor: EmissaoDeLoteComUmaNota, UsaCancelamentoAbrasf\n					Metadados cadastro empresa: naturezaOperacaoPadrao, naturezaOperacaoPadraoExterior',
    urls: {
      homologacao: {
        recepcaoLote: 'https://homologacao.ginfes.com.br/ServiceGinfesImpl'
      },
      producao: {
        recepcaoLote: 'https://producao.ginfes.com.br/ServiceGinfesImpl',
        downloadPDF: 'https://visualizar.isssbc.com.br/report/consultarNota?__report=nfs_sao_bernardo_campo_novo'
      }
    },
    emissaoSemCertificado: {
      producao: 'http://nfse.isssbc.com.br/nfseweb/nfse'
    }
  }
};
