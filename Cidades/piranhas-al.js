var cidadeDetalhe = {
  id: 'piranhas-al',
  nome: 'Piranhas',
  uf: 'AL',
  ibge: '2707107',
  constante: 'CodigoIBGE.PiranhasAL',
  provedorAtual: {
    nome: 'KALANA',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://www.kalana.com.br/wsnfe/recepcionarLoteRps',
        consultaSituacaoLote: 'https://www.kalana.com.br/wsnfe/consultarSituacaoLoteRps',
        consultaLote: 'https://www.kalana.com.br/wsnfe/consultarLoteRps',
        consultaRps: 'https://www.kalana.com.br/wsnfe/consultarNfsePorRps'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 3,
    assinaturaDigital: 2,
    usaDescricaoServico: false,
    usaCNAE: true,
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
      { codigo: '1', nome: 'Tributação no municipio' },
      { codigo: '2', nome: 'Tributação fora do municipio' },
      { codigo: '3', nome: 'Isenção' },
      { codigo: '4', nome: 'Imune' },
      { codigo: '5', nome: 'Exigibilidade suspensa por decisão judicial' },
      { codigo: '6', nome: 'Exigilidade suspensa por procedimento administrativo' }
    ]
  }
};

