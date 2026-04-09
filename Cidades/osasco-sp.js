var cidadeDetalhe = {
  id: 'osasco-sp',
  nome: 'Osasco',
  uf: 'SP',
  ibge: '3534401',
  constante: 'CodigoIBGE.OsascoSP',
  provedorAtual: {
    nome: 'EGoverneISS',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://homolog-nfe.osasco.sp.gov.br/EissnfeWebServices/NotaFiscalEletronica.svc'
      },
      producao: {
        recepcaoLote: 'https://nfe.osasco.sp.gov.br/EISSNFEWebServices/NotaFiscalEletronica.svc'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 3,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: null,
      senha: null,
      token: 'Chave de acesso ao serviço de integração da prefeitura. \r\nPara obtê-la acesse o portal da NFS-e da prefeitura e após se autenticar vá no menu Notas Fiscais na opção Web Service - Gerar Chave Autenticação.\r\nClique em',
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 5 a 8 dígitos (somente números).\r\n\r\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente de 4 a 5 dígitos formatado com um ponto.\r\nExemplo válido: 8.02 ou 12.11',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: false,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    autenticidadeNota: {
      UsaCnpjPrestador: true,
      UsaCodigoVerificacao: true,
      UsaNumeroNota: true
    }
  }
};

