var cidadeDetalhe = {
  id: 'belo-vale-mg',
  nome: 'Belo Vale',
  uf: 'MG',
  ibge: '3106408',
  constante: 'CodigoIBGE.BeloValeMG',
  provedorAtual: {
    nome: 'NFIss',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '2.02',
    urls: {
      homologacao: {
        recepcaoLote: 'https://homologabelovale.nfiss.com.br/soap/'
      },
      producao: {
        recepcaoLote: 'https://belovale.nfiss.com.br/soap/'
      }
    }
  },
  configuracaoProvedor: {
    usaCNAE: false,
    regimesEspecialTributacao: [
      { codigo: '0', nome: ' - ' },
      { codigo: '1', nome: 'Microempresa Municipal' },
      { codigo: '2', nome: 'Estimativa' },
      { codigo: '3', nome: 'Sociedade de Profissionais' },
      { codigo: '4', nome: 'Cooperativa' },
      { codigo: '5', nome: 'MEI - Simples Nacional' },
      { codigo: '6', nome: 'ME EPP - Simples Nacional' }
    ],
    naturezasOperacao: [
      { codigo: '1', nome: 'Exigível' },
      { codigo: '2', nome: 'Não incidência' },
      { codigo: '3', nome: 'Isenção' },
      { codigo: '4', nome: 'Exportação' },
      { codigo: '5', nome: 'Imunidade' },
      { codigo: '6', nome: 'Exigibilidade suspensa por decisão judicial' },
      { codigo: '7', nome: 'Exigilidade suspensa por procedimento administrativo' }
    ]
  }
};

