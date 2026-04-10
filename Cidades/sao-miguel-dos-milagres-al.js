var cidadeDetalhe = {
  id: 'sao-miguel-dos-milagres-al',
  nome: 'São Miguel dos Milagres',
  uf: 'AL',
  ibge: '2708709',
  constante: 'CodigoIBGE.SaoMiguelDosMilagresAL',
  provedorAtual: {
    nome: 'NFOnline',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '1',
    urls: {
      homologacao: {
        recepcaoLote: 'https://nfe-homologacao.prefeitura.info/webservice/ws_importarnfe_abrasf.php'
      },
      producao: {
        recepcaoLote: 'https://nfe-smm.prefeitura.info/webservice/ws_importarnfe_abrasf.php'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    suportaCancelamentoNFe: false,
    usaCodigoServicoMunicipal: true,
    usaCNAE: true,
    usaItemListaServico: true,
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal que identifica o serviço prestado na nota fiscal. \n\nExemplos válidos: 041201 e 170101',
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
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
