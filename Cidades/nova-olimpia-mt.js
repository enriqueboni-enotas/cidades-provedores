var cidadeDetalhe = {
  id: 'nova-olimpia-mt',
  nome: 'Nova Olímpia',
  uf: 'MT',
  ibge: '5106232',
  constante: 'CodigoIBGE.NovaOlimpiaMT',
  provedorAtual: {
    nome: 'FissLex',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://demo.fisslex.com.br/fiss-lex/servlet/aws_recepcionarloterps',
        consultaSituacaoLote: 'https://demo.fisslex.com.br/fiss-lex/servlet/aws_consultarsituacaoloterps',
        consultaLote: 'https://demo.fisslex.com.br/fiss-lex/servlet/aws_consultaloterps',
        consultaRps: 'https://demo.fisslex.com.br/fiss-lex/servlet/aws_consultanfseporrps',
        consultaNFe: 'https://demo.fisslex.com.br/fiss-lex/servlet/aws_consultanfse',
        cancelamentoNFe: 'https://demo.fisslex.com.br/fiss-lex/servlet/aws_cancelarnfse'
      },
      producao: {
        recepcaoLote: 'https://novaolimpia.fisslex.com.br/fiss-lex/servlet/aws_recepcionarloterps',
        consultaSituacaoLote: 'https://novaolimpia.fisslex.com.br/fiss-lex/servlet/aws_consultarsituacaoloterps',
        consultaLote: 'https://novaolimpia.fisslex.com.br/fiss-lex/servlet/aws_consultaloterps',
        consultaRps: 'https://novaolimpia.fisslex.com.br/fiss-lex/servlet/aws_consultanfseporrps',
        consultaNFe: 'https://novaolimpia.fisslex.com.br/fiss-lex/servlet/aws_consultanfse',
        cancelamentoNFe: 'https://novaolimpia.fisslex.com.br/fiss-lex/servlet/aws_cancelarnfse'
      }
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
    usaDescricaoServico: true,
    usaCNAE: true,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 3 a 11 dígitos (somente números).\r\n\r\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui 4 a 5 dígitos com ponto.\r\nExemplos válidos: 6.07 ou 14.01',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal e é formado por 4 dígitos (somente números).\r\n\r\nEsse código é identificado na sua prefeitura como Sub-Item e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, no seção Código de Serviço.\r\nExemplos válidos: 1211 ou 0802',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: false,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    regimesEspecialTributacao: [
      { codigo: '0', nome: ' - ' },
      { codigo: '1', nome: 'Microempresa Municipal' },
      { codigo: '2', nome: 'Estimativa' },
      { codigo: '3', nome: 'Sociedade de Profissionais' },
      { codigo: '4', nome: 'Cooperativa' },
      { codigo: '5', nome: 'MEI - Simples Nacional' },
      { codigo: '6', nome: 'ME EPP - Simples Nacional' }
    ]
  }
};

