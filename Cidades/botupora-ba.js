var cidadeDetalhe = {
  id: 'botupora-ba',
  nome: 'Botuporã',
  uf: 'BA',
  ibge: '2904209',
  constante: 'CodigoIBGE.BotuporaBA',
  provedorAtual: {
    nome: 'Freire',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'NaoPermiteCancelamento;RegraPadraoAliquotaAbrasf',
    robo: false,
    webService: true,
    infoAdicional: 'Provedor SudoesteInformatica utiliza a mesma estrutura que o provedor Freire Algumas prefeituras possuem na URL SudoesteInformatica, mas pertencem ao provedor ModernizacaoPublica, conferir no manual da prefeitura',
    urls: {
      homologacao: {
        recepcaoLote: 'http://homologacao.sudoesteinformatica.com.br:4040/nfsews/webservices/NFEServices.jws'
      },
      producao: {
        recepcaoLote: 'https://wsbotupora.sudoesteinformatica.com.br/webrun/webservices/NFEServices.jws'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 0,
    assinaturaDigital: 0,
    usaRegimeEspecialTributacao: true,
    usaCNAE: true,
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
