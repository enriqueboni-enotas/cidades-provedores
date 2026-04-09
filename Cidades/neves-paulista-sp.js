var cidadeDetalhe = {
  id: 'neves-paulista-sp',
  nome: 'Neves Paulista',
  uf: 'SP',
  ibge: '3532504',
  constante: 'CodigoIBGE.NevesPaulistaSP',
  provedorAtual: {
    nome: 'BWSistemas',
    namespace: null,
    codigoNoProvedor: 'NaoSuportaEmissaoTomadorSemEndereco; NaoSuportaEmissaoTomadorExterior',
    robo: false,
    webService: true,
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'http://prefeitura.nevespaulista.sp.gov.br:5055/NFSe.asmx'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 2,
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

