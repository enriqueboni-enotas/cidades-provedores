var cidadeDetalhe = {
  id: 'vicosa-al',
  nome: 'Viçosa',
  uf: 'AL',
  ibge: '2709400',
  constante: 'CodigoIBGE.VicosaAL',
  provedorAtual: {
    nome: 'TributusV2',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '2.04',
    infoAdicional: 'Verificar certificado e token, olhar no manual do webservice como o token é gerado',
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://www.tributosmunicipais.com.br/nfse/api/?tokenAuth={0}'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 3,
    assinaturaDigital: 2,
    suportaCancelamentoNFe: true,
    usaCodigoServicoMunicipal: true,
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal que identifica o serviço prestado na nota fiscal. \r\nEm algumas cidades esse código é conhecido como código de tributação.',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado.\r\n \r\n Você precisa preencher o item da lista de serviço mantendo a formatação.\r\n Exemplos válidos: 17.02 ou 08.02',
    suportaEmissaoNFeSemCliente: true,
    enviaEmailCliente: true,
    numeroRpsDeveSerSequencial: false,
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

