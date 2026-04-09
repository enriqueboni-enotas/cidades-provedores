var cidadeDetalhe = {
  id: 'prado-ba',
  nome: 'Prado',
  uf: 'BA',
  ibge: '2925501',
  constante: 'CodigoIBGE.PradoBA',
  provedorAtual: {
    nome: 'EeLv3',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'UsaCertificado',
    robo: false,
    webService: true,
    versaoAbrasf: '2.03',
    infoAdicional: 'Links com https tem que adicionar a tag <codigoNoProvedor>UsaCertificado</codigoNoProvedor>',
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://ba-prado-pm-nfs-backend.cloud.el.com.br/producao05/NfseWSService'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 1,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: 'Obrigatório a utilização de certificado digital.',
      usuario: null,
      senha: null,
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 60,
    usaCodigoServicoMunicipal: true,
    usaCNAE: false,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal.\r\n\r\nExemplos válidos: 06421008 ou 634812-2',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal com 6 dígitos (somente números) que identifica o serviço prestado na nota fiscal.\r\n\r\nEsse código é identificado na sua prefeitura como código de Serviço ou código de serviço nacional. Exemplos válidos: 170901 ou 010201',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado. \r\n \r\n Você precisa preencher o item da lista de serviço com 5 dígitos mantendo a formatação.\r\n Exemplos válidos: 17.02 ou 08.02',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
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

