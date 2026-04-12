var cidadeDetalhe = {
  id: 'areado-mg',
  nome: 'Areado',
  uf: 'MG',
  ibge: '3104304',
  constante: 'CodigoIBGE.AreadoMG',
  provedorAtual: {
    nome: 'PrefeituraModerna',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
      },
      producao: {
        autenticacao: 'https://areado-mg.prefeituramoderna.com.br/meuiss_new/nfe/index.php?cidade=areado',
        recepcaoLote: 'areado-mg.bauhaus.systems;areado',
        consultaRps: 'https://areado-mg.prefeituramoderna.com.br/meuiss_new/nfe/gerar_xml_nfe.php',
        consultaNFe: 'https://areado-mg.prefeituramoderna.com.br/meuiss_new/nfe/painel.php?tp_doc=1&nr_nferps_ini={0}&nr_nferps_fim={0}&st_rps=0&cd_atividade=&nr_doc=&consulta=1&pg=relatorio',
        cancelamentoNFe: 'areado-mg.bauhaus.systems;areado'
      }
    },
    emissaoSemCertificado: {
      homologacao: 'https://api-nfse-homologacao.prefeituramoderna.com.br/ws/services/',
      producao: 'https://api-nfse-areado-mg.prefeituramoderna.com.br/ws/services/'
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: 'Informe o usuário utilizado para acessar o sistema de sua prefeitura.',
      senha: 'Informe a senha utilizada para acessar o sistema de sua prefeitura.',
      token: null,
      fraseSecreta: null
    },
    campoLoginProvedor: 1,
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    emTransicaoNFSeNacional: true,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 1 a 8 dígitos (somente números).\r\n\r\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente 4 a 5 dígitos com formatação.\r\nExemplo válido: 1.01',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: false,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0
  }
};

