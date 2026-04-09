var cidadeDetalhe = {
  id: 'sao-goncalo-rj',
  nome: 'São Gonçalo',
  uf: 'RJ',
  ibge: '3304904',
  constante: 'CodigoIBGE.SaoGoncaloRJ',
  provedorAtual: {
    nome: 'IssIntel',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'CpfCnpjTomadorObrigatorio',
    robo: false,
    webService: true,
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://saogoncalo-rj.issintegra.com.br/webservices/abrasf/api'
      }
    }
  },
  configuracaoProvedor: {
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: null,
      senha: null,
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 60,
    usaCodigoServicoMunicipal: true,
    usaCNAE: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\r\n\r\nExemplos válidos: 06421008 ou 6348122',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal que identifica o serviço prestado na nota fiscal.\r\n            Esse código é identificado na sua prefeitura como Serviço e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, na seção Código de Serviço.\r\n            Exemplos válidos: 30.01.01 ou 04.07.01',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado. \r\n                \\r\\n \\r\\n Você precisa preencher o item da lista de serviço mantendo a formatação.\\r\\n Exemplos válidos: 17.02 ou 8.02',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    autenticidadeNota: {
      urlVerificacao: 'https://governadorvaladares-mg.issintegra.com.br/autenticacao_de_documentos',
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
      { codigo: '1', nome: 'Tributação no municipio' },
      { codigo: '2', nome: 'Tributação fora do municipio' },
      { codigo: '3', nome: 'Isenção' },
      { codigo: '4', nome: 'Imune' },
      { codigo: '5', nome: 'Exigibilidade suspensa por decisão judicial' },
      { codigo: '6', nome: 'Exigilidade suspensa por procedimento administrativo' }
    ]
  }
};

