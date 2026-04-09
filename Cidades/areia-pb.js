var cidadeDetalhe = {
  id: 'areia-pb',
  nome: 'Areia',
  uf: 'PB',
  ibge: '2501104',
  constante: 'CodigoIBGE.AreiaPB',
  provedorAtual: {
    nome: 'DataPublic',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: true,
    webService: false,
    infoAdicional: 'não ativar nesse provedor muito problematico(feito a cidade para cumprir contrato com flagron)',
    urls: {
      homologacao: {
      },
      producao: {
        autenticacao: 'https://webdatapublic.com.br/Datapublic/preceitanfse/areia/',
        recepcaoLote: 'https://areia.pb.gov.br/'
      }
    },
    emissaoSemCertificado: {
      producao: 'https://webdatapublic.com.br/datapublic/preceitaintegration/areia/api/v1/secure/notasfiscais'
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: 'Informe o usuario de integração para autenticação',
      senha: 'Informe a senha para autenticação',
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
    usaItemListaServico: true,
    usaNaturezaOperacao: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 3 a 11 dígitos (somente números).\r\n\r\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\n– Destina-se a receber a indicação do tratamento específico de cada Município (Ex: O contribuinte possui um benefício especial que tem \r\no código 123, está classificado na atividade 07.02 que no município recebeu um detalhamento criando então o item 07.02.01). Este campo deverá ser preenchido\r\nentão com o código 123070201. Antes de informar este código é importante que consulte a Secretaria de Fazenda de seu Município',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informar a Classificação no CNAE que se relacione com Item da Lista de Serviço',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal corresponde à classificação do contribuinte na tabela da LC\r\n116. Usar 04 (quatro) dígitos, fazendo a separação com “ponto” (Ex: 08.02, 14.01).',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: false,
    suportaConsultaSequencialRps: true,
    regimesEspecialTributacao: [
      { codigo: '0', nome: 'Nenhum' },
      { codigo: '1', nome: 'MEI' }
    ],
    naturezasOperacao: [
      { codigo: '1', nome: 'Tributável' },
      { codigo: '2', nome: 'Exigibilidade Suspensa Dec.Jud.' },
      { codigo: '3', nome: 'Exigibilidade Suspensa Proc.Adm.' },
      { codigo: '5', nome: 'Tributável Simples Nacional' },
      { codigo: '6', nome: 'Isento ISS' },
      { codigo: '7', nome: 'Não Incidência no Município' },
      { codigo: '8', nome: 'Tributável MEI' },
      { codigo: '9', nome: 'Imune' }
    ]
  }
};

