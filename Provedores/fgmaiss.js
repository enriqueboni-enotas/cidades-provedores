var provedorDetalhe = {
  id: 'fgmaiss',
  nome: 'FgMaiss',
  empresa: 'FgMaiss',
  stats: {
    municipios: 9
  },
  visaoGeral: [
    { key: 'Nome', val: 'FgMaiss' },
    { key: 'Total Municipios', val: '9' },
    { key: 'Estados Atendidos', val: ['SP', 'RJ'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: 'Informe o usuário de acesso ao portal de NFS-e da prefeitura.',
      senha: 'Informe a senha de acesso ao portal de NFS-e da prefeitura.',
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 5 a 8 dígitos (somente números).\r\n\r\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente de 4 a 5 dígitos formatado com um ponto.\r\nExemplo válido: 8.02 ou 12.11',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: false,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0
  },
  municipiosLista: {
    'fgmaiss': [
      { nome: 'Areiópolis', uf: 'SP', ibge: '3503604' },
      { nome: 'Avanhandava', uf: 'SP', ibge: '3504404' },
      { nome: 'Barra Bonita', uf: 'SP', ibge: '3505302' },
      { nome: 'Buritama', uf: 'SP', ibge: '3508108' },
      { nome: 'Igaraçu do Tietê', uf: 'SP', ibge: '3520004' },
      { nome: 'Luís Antônio', uf: 'SP', ibge: '3527603' },
      { nome: 'Porangaba', uf: 'SP', ibge: '3540507' },
      { nome: 'Tanabi', uf: 'SP', ibge: '3553401' },
      { nome: 'Três Rios', uf: 'RJ', ibge: '3306008' }
    ]
  }
};

