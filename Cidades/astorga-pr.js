var cidadeDetalhe = {
  id: 'astorga-pr',
  nome: 'Astorga',
  uf: 'PR',
  ibge: '4102109',
  constante: 'CodigoIBGE.AstorgaPR',
  provedorAtual: {
    nome: 'Elotech',
    namespace: 'http://shad.elotech.com.br/schemas/iss/nfse_v2_03.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '2.03',
    infoAdicional: 'Propriedades do Provedor\n					EnviaValorIssNull -> Não envia a tag ValorIss nas emissões com e sem iss retido\n					FormataCodigoPaisTomador -> Formata código do país com 3 dígitos',
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://astorga.oxy.elotech.com.br/iss-ws/nfse203.wsdl'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 2,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: 'Informe o usuário utilizado para acessar o sistema de sua prefeitura.',
      senha: 'Informe a senha utilizada para acessar o sistema de sua prefeitura.',
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    usaCNAE: true,
    usaItemListaServico: false,
    suportaEmissaoNFeSemCliente: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: true,
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
