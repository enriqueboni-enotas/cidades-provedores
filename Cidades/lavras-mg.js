var cidadeDetalhe = {
  id: 'lavras-mg',
  nome: 'Lavras',
  uf: 'MG',
  ibge: '3138203',
  constante: 'CodigoIBGE.LavrasMG',
  provedorAtual: {
    nome: 'GovDigital',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: '1376',
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://ws.homolog.nfe-cidades.com.br/ws/lavr'
      },
      producao: {
        recepcaoLote: 'https://ws.nfe-cidades.com.br/ws/lavr'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 1,
    assinaturaDigital: 2,
    usaCodigoServicoMunicipal: true,
    usaCNAE: false,
    usaItemListaServico: false,
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal que identifica o serviço prestado na nota fiscal. \nEm algumas cidades esse código é conhecido como código de tributação.\n\nDeve seguir a formatação como nos exemplos: 01.03, 16.02',
    suportaEmissaoNFeSemCliente: true,
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
