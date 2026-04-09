var cidadeDetalhe = {
  id: 'fortaleza-ce',
  nome: 'Fortaleza',
  uf: 'CE',
  ibge: '2304400',
  constante: 'CodigoIBGE.FortalezaCE',
  provedorAtual: {
    nome: 'Fortaleza',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'http://isshomo.sefin.fortaleza.ce.gov.br/grpfor-iss/ServiceGinfesImplService'
      },
      producao: {
        recepcaoLote: 'https://iss.fortaleza.ce.gov.br/grpfor-iss/ServiceGinfesImplService'
      }
    }
  },
  configuracaoProvedor: {
    suportaCancelamentoNFe: true,
    usaCNAE: false,
    numeroNotasPorLote: 5,
    autenticidadeNota: {
      urlVerificacao: 'https://iss.fortaleza.ce.gov.br/grpfor/pagesPublic/validarNota.seam',
      UsaCnpjPrestador: true,
      UsaCodigoVerificacao: true,
      UsaNumeroNota: true
    },
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

