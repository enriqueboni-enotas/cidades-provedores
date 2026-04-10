var cidadeDetalhe = {
  id: 'patrocinio-mg',
  nome: 'Patrocínio',
  uf: 'MG',
  ibge: '3148103',
  constante: 'CodigoIBGE.PatrocinioMG',
  provedorAtual: {
    nome: 'Simpliss',
    namespace: 'http://www.sistema.com.br/Nfse/arquivos/nfse_3.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'http://wshomologacao.simplissweb.com.br/nfseservice.svc'
      },
      producao: {
        recepcaoLote: 'http://wspatrocinio.simplissweb.com.br/nfseservice.svc'
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
    valorCancelamentoNFe: 60,
    usaCNAE: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\n\nExemplos válidos: 06421008 ou 6348122',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal, com 4 ou 5 dígitos, que identifica o serviço prestado na nota fiscal.\n\nEsse código é identificado na sua prefeitura como Serviço e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, na seção Código de Serviço.\nExemplos válidos: 8.01 ou 17.01',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    autenticidadeNota: {
      UsaChaveAcesso: false,
      UsaCnpjPrestador: true,
      UsaCodigoVerificacao: true,
      UsaCpfCnpjTomador: false,
      UsaInscricaoMunicipalPrestador: false,
      UsaNumeroNota: true,
      UsaValorNota: false,
      urlVerificacao: 'https://saogoncalo.simplissweb.com.br/contrib/'
    },
    regimesEspecialTributacao: [
      { codigo: '0', nome: 'Nenhum' },
      { codigo: '1', nome: 'Microempresa Municipal' },
      { codigo: '2', nome: 'Estimativa' },
      { codigo: '3', nome: 'Sociedade de Profissionais' },
      { codigo: '4', nome: 'Cooperativa' },
      { codigo: '5', nome: 'Microempresário Individual (MEI)' },
      { codigo: '6', nome: 'Microempresário e Empresa de Pequeno Porte (ME EPP)' },
      { codigo: '7', nome: 'Tributação por Faturamento (Variável)' },
      { codigo: '8', nome: 'Fixo' },
      { codigo: '9', nome: 'Isenção' },
      { codigo: '10', nome: 'Imune' },
      { codigo: '11', nome: 'Exigibilidade Suspensa por Decisão Judicial' },
      { codigo: '12', nome: 'Exigibilidade Suspensa por Procedimento Administrativo' }
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
