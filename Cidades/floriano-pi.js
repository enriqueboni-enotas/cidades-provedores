var cidadeDetalhe = {
  id: 'floriano-pi',
  nome: 'Floriano',
  uf: 'PI',
  ibge: '2203909',
  constante: 'CodigoIBGE.FlorianoPI',
  provedorAtual: {
    nome: 'ElmarInformatica',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://enfseapi.elmartecnologia.com.br',
        consultaSituacaoLote: 'https://nfe.elmartecnologia.com.br/site/linha_nova_nfe/novalinha.php?quantidade=1&codemissor={0}&a=a',
        consultaLote: 'https://nfe.elmartecnologia.com.br/emissor/inc/notas_pesquisar.ajax.php?txtNumeroNota={0}&txtCodigoVerificacao={1}&hdcodempresa={2}',
        consultaRps: 'https://nfe.elmartecnologia.com.br/site/temp/{0}.jpg',
        consultaNFe: 'https://nfe.elmartecnologia.com.br/emissor/notas.php',
        cancelamentoNFe: 'https://nfe.elmartecnologia.com.br/emissor/notas.php',
        inutilizacaoNumeracaoNFe: 'https://nfe.elmartecnologia.com.br/emissor/inc/verifica.php',
        downloadPDF: 'https://nfe.elmartecnologia.com.br/site/imprimirnotas.php'
      }
    }
  },
  configuracaoProvedor: {
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: 'Informe a Chave de Acesso do prestador. Para verificar a Chave de Acesso. ',
      senha: 'Informe a senha de acesso ao portal da prefeitura.',
      token: 'Informe o Token do prestador. Para verificar o token. ',
      fraseSecreta: null
    },
    campoLoginProvedor: 1,
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: true,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 1 a 8 dígitos (somente números).\n\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui geralmente 4 a 5 dígitos com formatação.\nExemplo válido: (ex: 8.02, 24.01)',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal. O mesmo deve conter 7 dígitos (somente números).',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    naturezasOperacao: [
      { codigo: '1', nome: 'Serviço Prestado no Municipio' },
      { codigo: '2', nome: 'Isenção' },
      { codigo: '3', nome: 'Não Incidência' },
      { codigo: '4', nome: 'Fora do Municipio' },
      { codigo: '7', nome: 'Fora do Municipio com ISS Retido' },
      { codigo: '5', nome: 'Imune' },
      { codigo: '6', nome: 'Retida' }
    ]
  }
};
