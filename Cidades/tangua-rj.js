var cidadeDetalhe = {
  id: 'tangua-rj',
  nome: 'Tanguá',
  uf: 'RJ',
  ibge: '3305752',
  constante: 'CodigoIBGE.TanguaRJ',
  provedorAtual: {
    nome: 'IssDigital',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'CodigoTributacaoIgualCnae',
    robo: false,
    webService: true,
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'http://186.248.197.69:8090/nfe/snissdigitalsvc'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 4,
    assinaturaDigital: 0,
    usaCodigoServicoMunicipal: true,
    usaCNAE: true,
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal que identifica o serviço prestado na nota fiscal. \nEm algumas cidades esse código é conhecido como código de tributação.\n\nExemplo válido: 7319002',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado.\n \n Você precisa preencher o item da lista de serviço mantendo a formatação.\n Exemplos válidos: 802, 0802 ou 1702',
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
