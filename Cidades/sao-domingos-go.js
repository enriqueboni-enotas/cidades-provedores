var cidadeDetalhe = {
  id: 'sao-domingos-go',
  nome: 'São Domingos',
  uf: 'GO',
  ibge: '5219803',
  constante: 'CodigoIBGE.SaoDomingosGO',
  provedorAtual: {
    nome: 'Centi',
    namespace: 'http://www.centi.com.br/files/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '2.0',
    infoAdicional: 'UsaAutenticidadeNota => usado para adicionar a url de verificação na nota',
    urls: {
      homologacao: {
        recepcaoLote: 'https://api.centi.com.br/nfe/gerar/homologacao/go/saodomingos',
        cancelamentoNFe: 'https://api.centi.com.br/nfe/cancelar/homologacao/GO/saodomingos'
      },
      producao: {
        recepcaoLote: 'https://api.centi.com.br/nfe/gerar/go/saodomingos',
        consultaRps: 'https://api.centi.com.br/nfe/consultar/rps/go/saodomingos',
        cancelamentoNFe: 'https://api.centi.com.br/nfe/cancelar/GO/saodomingos'
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
      UsaChaveAcesso: false,
      UsaCnpjPrestador: true,
      UsaCodigoVerificacao: true,
      UsaCpfCnpjTomador: false,
      UsaInscricaoMunicipalPrestador: false,
      UsaNumeroNota: true,
      UsaValorNota: false,
      urlVerificacao: 'https://trindade.centi.com.br/notafiscal/verificar'
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
