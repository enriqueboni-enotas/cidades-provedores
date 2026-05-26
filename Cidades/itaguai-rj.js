var cidadeDetalhe = {
  id: 'itaguai-rj',
  nome: 'Itaguaí',
  uf: 'RJ',
  ibge: '3302007',
  constante: 'CodigoIBGE.ItaguaiRJ',
  provedorAtual: {
    nome: 'TiplanV3',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    naoEnviaSerieRPS: false,
    urls: {
      homologacao: {
        recepcaoLote: 'https://itaguaihomologacao.nfe.com.br/nfse/wsnacional2/nfse.asmx'
      },
      producao: {
        recepcaoLote: 'https://spe.itaguai.rj.gov.br/api/adn/dps',
        downloadPDF: 'https://adn.nfse.gov.br/danfse'
      }
    },
    emissaoSemCertificado: {
      homologacao: 'https://www.producaorestrita.nfse.gov.br',
      producao: 'https://www.nfse.gov.br'
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 1,
    assinaturaDigital: 2,
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: null,
      senha: null,
      token: null,
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
    usaItemListaServico: true,
    usaNaturezaOperacao: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 8 dígitos (com formatação).\r\n\r\nExemplo válido: 14.05.01',
    helpRegimeEspecialTributacao: 'Isso identifica o regime especial de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. Exemplo: 07.01.01',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal e é formado por 5 dígitos (com formatação).\r\n\r\nEsse código é identificado na sua prefeitura como Sub-Item e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, na seção Código de Serviço.\r\nExemplos válidos: 01.01 ou 14.02',
    suportaEmissaoNFeSemCliente: false,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: false,
    suportaConsultaSequencialRps: true,
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

