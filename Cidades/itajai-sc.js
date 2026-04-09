var cidadeDetalhe = {
  id: 'itajai-sc',
  nome: 'Itajaí',
  uf: 'SC',
  ibge: '4208203',
  constante: 'CodigoIBGE.ItajaiSC',
  provedorAtual: {
    nome: 'Publica',
    namespace: 'http://www.publica.inf.br',
    codigoNoProvedor: 'UsaProxy; UsaPdfPrefeitura; NaoEnviaOutrasRetencoesZerada',
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://nfse-teste.publica.inf.br/itajai_nfse_integracao/Services'
      },
      producao: {
        recepcaoLote: 'https://nfse.itajai.sc.gov.br/nfse_integracao/Services',
        downloadPDF: 'https://nfse.itajai.sc.gov.br/'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 1,
    assinaturaDigital: 2,
    suportaCancelamentoNFe: true,
    usaRegimeEspecialTributacao: true,
    usaCNAE: false,
    usaItemListaServico: false,
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal que identifica o serviço prestado na nota fiscal. \r\nEm algumas cidades esse código é conhecido como código de tributação e deve conter de 4 a 5 dígitos com ponto.\r\n\r\nExemplos: 1.05, 10.09',
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

