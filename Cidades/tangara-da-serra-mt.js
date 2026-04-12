var cidadeDetalhe = {
  id: 'tangara-da-serra-mt',
  nome: 'Tangará da Serra',
  uf: 'MT',
  ibge: '5107958',
  constante: 'CodigoIBGE.TangaraDaSerraMT',
  provedorAtual: {
    nome: 'Centi',
    namespace: 'http://www.centi.com.br/files/nfse.xsd',
    codigoNoProvedor: 'NaoSuportaCancelamento;UsaProxy',
    robo: false,
    webService: true,
    versaoAbrasf: '2.0',
    infoAdicional: 'UsaAutenticidadeNota => usado para adicionar a url de verificação na nota',
    urls: {
      homologacao: {
        recepcaoLote: 'https://api.centi.com.br/nfe/gerar/homologacao/MT/tangaradaserra',
        cancelamentoNFe: 'https://api.centi.com.br/nfe/cancelar/homologacao/MT/tangaradaserra'
      },
      producao: {
        recepcaoLote: 'https://api.centi.com.br/nfe/gerar/MT/tangaradaserra',
        consultaRps: 'https://api.centi.com.br/nfe/consultar/rps/MT/tangaradaserra',
        cancelamentoNFe: 'https://api.centi.com.br/nfe/cancelar/MT/tangaradaserra'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 2,
    usaCodigoServicoMunicipal: false,
    usaCNAE: false,
    usaItemListaServico: false,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    autenticidadeNota: {
      urlVerificacao: 'https://trindade.centi.com.br/notafiscal/verificar',
      UsaChaveAcesso: false,
      UsaCnpjPrestador: true,
      UsaCodigoVerificacao: true,
      UsaCpfCnpjTomador: false,
      UsaInscricaoMunicipalPrestador: false,
      UsaNumeroNota: true,
      UsaValorNota: false
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

