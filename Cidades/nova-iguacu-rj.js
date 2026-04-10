var cidadeDetalhe = {
  id: 'nova-iguacu-rj',
  nome: 'Nova Iguaçu',
  uf: 'RJ',
  ibge: '3303500',
  constante: 'CodigoIBGE.NovaIguacuRJ',
  provedorAtual: {
    nome: 'DSF',
    namespace: 'http://localhost:8080/WsNFe2/lote',
    codigoNoProvedor: 'NaoSuportaEmissaoNFeSemCliente;NaoSuportaEmissaoNFeClienteSemEndereco;NaoSuportaCancelamentoNFe;NaoSuportaCancelamentoNFeClienteSemCpf;NaoSuportaCancelamentoNFeSemCliente',
    robo: false,
    webService: true,
    infoAdicional: 'propriedades do provedor:\n					UsaAutenticidadeNota = salva link de verificação na nota\n					NaoUsaSuportaEmissaoNFeClienteSemCpf => não suporta emissão cliente sem cpf\n					NaoSuportaEmissaoNFeSemCliente => não suporta emissão sem cliente\n					NaoSuportaEmissaoNFeClienteSemEndereco => não suporta cliente sem endereço\n					NumeroRpsDeveSerSequencial => envia numero rps seguenial\n					UsaUmaNotaPorLote => envia apenas uma nota por lote\n					UsaItemListaServico => envia item lista serviço no xml\n					NaoSuportaConsultaSequencialRps => não suporta consulta seguencial por rps\n					NaoSuportaCancelamentoNFe => não suporta cancelamento\n					NaoSuportaCancelamentoNFeClienteSemCpf => não suporta cancelamento cliente sem cpf\n					NaoSuportaCancelamentoNFeSemCliente => não suporta cancelamento sem cliente',
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://nfse.novaiguacu.rj.gov.br/WsNFe2/LoteRps.jws'
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
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 3 a 11 dígitos (somente números).\n\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui geralmente 9 dígitos (somente números).\nExemplo válido: 631940000',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    enviaEmailCliente: false,
    autenticidadeNota: {
      UsaChaveAcesso: false,
      UsaCnpjPrestador: true,
      UsaCodigoVerificacao: true,
      UsaCpfCnpjTomador: false,
      UsaInscricaoMunicipalPrestador: true,
      UsaNumeroNota: true,
      UsaValorNota: false
    },
    regimesEspecialTributacao: [
      { codigo: 'C', nome: 'C - Isenta de ISS' },
      { codigo: 'E', nome: 'E - Não incidência no Munícipio' },
      { codigo: 'F', nome: 'F - Imune' },
      { codigo: 'K', nome: 'K - Exigibilidade Suspensa por decisão Judicial ou processo administrativo' },
      { codigo: 'N', nome: 'N - Não tributável' },
      { codigo: 'T', nome: 'T - Tributável' },
      { codigo: 'G', nome: 'G - Tributável Fixo' },
      { codigo: 'H', nome: 'H - Tributável S.N.' },
      { codigo: 'M', nome: 'M - Micro Empreendedor Individual (MEI)' }
    ],
    naturezasOperacao: [
      { codigo: 'A', nome: 'Sem Dedução' },
      { codigo: 'B', nome: 'Com Dedução/Materiais' },
      { codigo: 'C', nome: 'Isenta/Imune de ISSQN' },
      { codigo: 'D', nome: 'Devolução / Simples Remessa' },
      { codigo: 'J', nome: 'Intermediação' }
    ]
  }
};
