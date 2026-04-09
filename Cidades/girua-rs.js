var cidadeDetalhe = {
  id: 'girua-rs',
  nome: 'Giruá',
  uf: 'RS',
  ibge: '4309001',
  constante: 'CodigoIBGE.GiruaRS',
  provedorAtual: {
    nome: 'AbaseV2',
    namespace: 'http://nfse.abase.com.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://demoiss.abase.com.br/api-nacional'
      },
      producao: {
        recepcaoLote: 'https://iss.abase.com.br/api-nacional'
      }
    },
    emissaoSemCertificado: {
      homologacao: 'https://www.producaorestrita.nfse.gov.br',
      producao: 'https://www.nfse.gov.br'
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 3,
    assinaturaDigital: 2,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: null,
      senha: null,
      token: 'Sua prefeitura exige a utilização de token para autenticação. Acesse o portal da prefeitura e no canto superir direito e clique no nome do contribuinte, depois clique em: ',
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: false,
    usaCNAE: false,
    usaNBS: true,
    usaItemListaServico: false,
    usaNaturezaOperacao: true,
    helpInscricaoMunicipal: 'Informe somente os números sem ponto nem formatação.\r\n\r\nExemplos válidos: 4301000010 ou 131436001',
    helpRegimeEspecialTributacao: 'Isso identifica o regime especial de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. Exemplo: 07.01.01',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: false,
    numeroNotasPorLote: 1,
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
      { codigo: '1', nome: 'Operação tributável' },
      { codigo: '2', nome: 'Imunidade' },
      { codigo: '3', nome: 'Exportação de Serviço' },
      { codigo: '4', nome: 'Não incidência' }
    ]
  }
};

