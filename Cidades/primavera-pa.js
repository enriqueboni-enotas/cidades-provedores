var cidadeDetalhe = {
  id: 'primavera-pa',
  nome: 'Primavera',
  uf: 'PA',
  ibge: '1506104',
  constante: 'CodigoIBGE.PrimaveraPA',
  provedorAtual: {
    nome: 'JanelaUnica',
    namespace: null,
    codigoNoProvedor: '19',
    robo: false,
    webService: true,
    infoAdicional: 'Validar as propriedades para configurar o provedor no xml (CodigoMunicipio)',
    urls: {
      homologacao: {
        recepcaoLote: 'https://www.janelaunica.net.br:8443/wsjuteste/v09/NfseWS'
      },
      producao: {
        recepcaoLote: 'https://www.janelaunica.srv.br:8443/wsju/v09/NfseWS',
        downloadPDF: 'https://www.programa.janelaunica.com.br/'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: null,
      senha: null,
      token: 'Sua prefeitura exige utilização de usuário e senha',
      fraseSecreta: null
    },
    suportaCancelamentoNFe: false,
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: true,
    usaItemListaServico: true,
    usaNaturezaOperacao: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 3 a 11 dígitos (somente números).\r\n\r\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente 4 dígitos (somente números, mantendo o zero a esquerda).\r\nExemplo válido: 0802',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal. O mesmo deve conter 7 dígitos (somente números).\r\n\r\nExemplo válido: 8599699',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado. \r\n\r\n\r\n Você precisa preencher o item da lista de serviço com 4 ou 5 dígitos mantendo a formatação.\r\n Exemplos válidos: 17.02 ou 8.02',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: false,
    suportaConsultaSequencialRps: true,
    regimesEspecialTributacao: [
      { codigo: '1', nome: '1 - Microempresa municipal' },
      { codigo: '2', nome: '2 - Estimativa' },
      { codigo: '3', nome: '3 - Sociedade de profissionais' },
      { codigo: '4', nome: '4 - Cooperativa' },
      { codigo: '5', nome: '5 - Microempresário Individual (MEI)' },
      { codigo: '6', nome: '6 - Microempresário e Empresa de Pequeno Porte (ME EPP)' }
    ],
    naturezasOperacao: [
      { codigo: '1', nome: '1 – Elegível' },
      { codigo: '2', nome: '2 – Não Incidência' },
      { codigo: '3', nome: '3 – Isenção' },
      { codigo: '4', nome: '4 – Exportação' },
      { codigo: '5', nome: '5 – Imunidade' },
      { codigo: '6', nome: '6 – Exigibilidade Suspensa por Decisão Judicial' },
      { codigo: '7', nome: '7 – Exigibilidade Suspensa por Processo Administrativo' }
    ]
  }
};

