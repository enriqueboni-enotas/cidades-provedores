var cidadeDetalhe = {
  id: 'agua-boa-mg',
  nome: 'Água Boa',
  uf: 'MG',
  ibge: '3100609',
  constante: 'CodigoIBGE.AguaBoaMG',
  provedorAtual: {
    nome: 'PortalFacil',
    namespace: 'http://nfseaguaboa.portalfacil.com.br/nfseserv/schema/nfse_v201.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '2.01',
    infoAdicional: 'Preferir ativar versao 2.04 pois a versao 2.01 tem q adicionar o ws de cada cidade. Essa cidade o soapction dele estava errado\n        na chamado da classe do ws PortalFacilWS204 o soapaction e o envelope soap são criados manualmente. Então dá para usar todos as versões. Só ficar atento ao soapaction\n        (verificar pelo fiddler junto com o soapui)',
    urls: {
      homologacao: {
        recepcaoLote: 'https://nfse-ws-01.portalfacil.com.br/nfse-ws-ma-ipaba/homologacao/webservice/servicos.asmx'
      },
      producao: {
        recepcaoLote: 'https://nfseaguaboa.portalfacil.com.br/nfseserv/webservice/servicos'
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
    usaCNAE: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\n\nExemplos válidos: 06421008 ou 6348122',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal com 3 ou 4 dígitos (somente números) que identifica o serviço prestado na nota fiscal.\n\nEsse código é identificado na sua prefeitura como Serviço e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, na seção Código de Serviço.\nExemplos válidos: 801 ou 1401',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado. \n \n Você precisa preencher o item da lista de serviço com 5 dígitos mantendo a formatação.\n Exemplos válidos: 17.02 ou 08.02',
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
