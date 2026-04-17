var provedorDetalhe = {
  id: 'bsitbr',
  nome: 'BSITBR',
  empresa: 'BSITBR',
  stats: {
    municipios: 8
  },
  visaoGeral: [
    { key: 'Nome', val: 'BSITBR' },
    { key: 'Total Municipios', val: '8' },
    { key: 'Estados Atendidos', val: ['GO'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 5,
    assinaturaDigital: 2,
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital para assinatura das suas notas fiscais.',
      usuario: 'Sua prefeitura exige a utilização de usuário e senha para autenticação durante a transmissão das suas notas fiscais. Normalmente utiliza o formato cnpj-inscricao municipal. EX: 41616792000100-15242',
      senha: 'Sua prefeitura exige a utilização de usuário e senha para autenticação durante a transmissão das suas notas fiscais.',
      token: 'Sua prefeitura exige a utilização de Token para autenticação durante a transmissão das suas notas fiscais.',
      fraseSecreta: null
    },
    valorCancelamentoNFe: 60,
    usaCodigoServicoMunicipal: true,
    usaCNAE: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\r\n\r\nExemplo válido: 301879801',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal com 4 a 5 dígitos (somente números) que identifica o serviço prestado na nota fiscal.\r\n\r\nEsse código é identificado na sua prefeitura como Serviço e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, na seção Código de Serviço.\r\nExemplo válido: 1590',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal e é formado por 4 a 5 dígitos (formatado com ponto).\r\n\r\nEsse código é identificado na sua prefeitura como Sub-Item e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, no seção Código de Serviço.\r\nExemplos válidos: 12.11 ou 8.02',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    numeroRpsDeveSerSequencial: true,
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
      { codigo: '1', nome: 'Tributação no Município' },
      { codigo: '2', nome: 'Tributação fora do Município' },
      { codigo: '3', nome: 'Isenção' },
      { codigo: '4', nome: 'Exportação' },
      { codigo: '5', nome: 'Imunidade' },
      { codigo: '6', nome: 'Exigibilidade suspensa por decisão judicial' },
      { codigo: '7', nome: 'Exigilidade suspensa por procedimento administrativo' }
    ]
  },
  municipiosLista: {
    'bsitbr': [
      { nome: 'Bom Jesus de Goiás', uf: 'GO', ibge: '5203500' },
      { nome: 'Goianira', uf: 'GO', ibge: '5208806' },
      { nome: 'Indiara', uf: 'GO', ibge: '5209952' },
      { nome: 'Inhumas', uf: 'GO', ibge: '5210000' },
      { nome: 'Jataí', uf: 'GO', ibge: '5211909' },
      { nome: 'Joviânia', uf: 'GO', ibge: '5212105' },
      { nome: 'Orizona', uf: 'GO', ibge: '5215306' },
      { nome: 'Pirenópolis', uf: 'GO', ibge: '5217302' }
    ]
  }
};

