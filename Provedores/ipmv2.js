var provedorDetalhe = {
  id: 'ipmv2',
  nome: 'IPMv2',
  empresa: 'IPMv2',
  stats: {
    municipios: 27
  },
  visaoGeral: [
    { key: 'Nome', val: 'IPMv2' },
    { key: 'Total Municipios', val: '27' },
    { key: 'Estados Atendidos', val: ['SC', 'RS', 'PR', 'MG'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 2,
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: 'Sua prefeitura exige a utilização do usuário de acesso ao portal da prefeitura',
      senha: 'Sua prefeitura exige a utilização da senha de acesso ao portal da prefeitura.',
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    usaCNAE: true,
    usaNBS: true,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\r\n\r\nExemplos válidos: 06421008 ou 6348122',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal com 4 dígitos (somente números) que identifica o serviço prestado na nota fiscal.\r\n\r\nEsse código é identificado na sua prefeitura como Serviço e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, na seção Código de Serviço.\r\nExemplos válidos: 0801 ou 0108',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal e é formado por 5 dígitos (formatado com ponto).\r\n\r\nEsse código é identificado na sua prefeitura como Sub-Item e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, no seção Código de Serviço.\r\nExemplos válidos: 12.11 ou 09.02',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
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
  },
  municipiosLista: {
    'ipmv2': [
      { nome: 'Águas Frias', uf: 'SC', ibge: '4200556' },
      { nome: 'Anita Garibaldi', uf: 'SC', ibge: '4201000' },
      { nome: 'Arabutã', uf: 'SC', ibge: '4201273' },
      { nome: 'Arapoti', uf: 'PR', ibge: '4101606' },
      { nome: 'Araucária', uf: 'PR', ibge: '4101804' },
      { nome: 'Biguaçu', uf: 'SC', ibge: '4202305' },
      { nome: 'Caibi', uf: 'SC', ibge: '4203105' },
      { nome: 'Camaquã', uf: 'RS', ibge: '4303509' },
      { nome: 'Camboriú', uf: 'SC', ibge: '4203204' },
      { nome: 'Canoinhas', uf: 'SC', ibge: '4203808' },
      { nome: 'Carazinho', uf: 'RS', ibge: '4304705' },
      { nome: 'Céu Azul', uf: 'PR', ibge: '4105300' },
      { nome: 'Clevelândia', uf: 'PR', ibge: '4105706' },
      { nome: 'Cunha Porã', uf: 'SC', ibge: '4204707' },
      { nome: 'Estância Velha', uf: 'RS', ibge: '4307609' },
      { nome: 'Gramado', uf: 'RS', ibge: '4309100' },
      { nome: 'Guatambú', uf: 'SC', ibge: '4206652' },
      { nome: 'Irineópolis', uf: 'SC', ibge: '4207908' },
      { nome: 'Juranda', uf: 'PR', ibge: '4112959' },
      { nome: 'Lacerdópolis', uf: 'SC', ibge: '4209201' },
      { nome: 'Navegantes', uf: 'SC', ibge: '4211306' },
      { nome: 'Novo Hamburgo', uf: 'RS', ibge: '4313409' },
      { nome: 'Passa Sete', uf: 'RS', ibge: '4314068' },
      { nome: 'Pouso Alegre', uf: 'MG', ibge: '3152501' },
      { nome: 'São João do Sul', uf: 'SC', ibge: '4216404' },
      { nome: 'São Sepé', uf: 'RS', ibge: '4319604' },
      { nome: 'Saudades', uf: 'SC', ibge: '4217303' }
    ]
  }
};

