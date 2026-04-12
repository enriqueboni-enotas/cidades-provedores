var provedorDetalhe = {
  id: 'dsf',
  nome: 'DSF',
  empresa: 'DSF',
  stats: {
    municipios: 2
  },
  visaoGeral: [
    { key: 'Nome', val: 'DSF' },
    { key: 'Total Municipios', val: '2' },
    { key: 'Estados Atendidos', val: ['MS', 'RJ'], type: 'uf-badges' }
  ],
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
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 3 a 11 dígitos (somente números).\r\n\r\nExemplo válido: 204589',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente 9 dígitos (somente números).\r\nExemplo válido: 631940000',
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
  },
  municipiosLista: {
    'dsf': [
      { nome: 'Campo Grande', uf: 'MS', ibge: '5002704' },
      { nome: 'Nova Iguaçu', uf: 'RJ', ibge: '3303500' }
    ]
  }
};

