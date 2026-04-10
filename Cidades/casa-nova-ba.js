var cidadeDetalhe = {
  id: 'casa-nova-ba',
  nome: 'Casa Nova',
  uf: 'BA',
  ibge: '2907202',
  constante: 'CodigoIBGE.CasaNovaBA',
  provedorAtual: {
    nome: 'Fisco.NetV2',
    namespace: null,
    codigoNoProvedor: 'NaoSuportaCancelamento; NaoSuportaEmissaoNFeClienteSemCpf',
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://fisco.net.br/wsnfseabrasf/ServicosNFSEAbrasfHomologacao.asmx'
      },
      producao: {
        recepcaoLote: 'https://www.fisco.net.br/wsnfseabrasf/ServicosNFSEAbrasf.asmx'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 1,
    assinaturaDigital: 2,
    usaCodigoServicoMunicipal: true,
    usaCNAE: true,
    usaItemListaServico: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
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
