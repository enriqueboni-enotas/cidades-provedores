var provedorDetalhe = {
  id: 'siafic',
  nome: 'Siafic',
  empresa: 'Siafic',
  stats: {
    municipios: 13
  },
  visaoGeral: [
    { key: 'Nome', val: 'Siafic' },
    { key: 'Total Municipios', val: '13' },
    { key: 'Estados Atendidos', val: ['SE', 'AL', 'BA'], type: 'uf-badges' }
  ],
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
    usaCNAE: true,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 1 a 8 dígitos (somente números).\n\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui geralmente 2 mais dígitos sem formatação.\nExemplo válido: 53, 3201',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    naturezasOperacao: [
      { codigo: '1', nome: 'Tributação no município' },
      { codigo: '2', nome: 'Tributação fora do município' },
      { codigo: '3', nome: 'Isenção' },
      { codigo: '4', nome: 'Imune' },
      { codigo: '5', nome: 'Exigibilidade suspensa por decisão judicial' },
      { codigo: '6', nome: 'Exigibilidade suspensa por procedimento administrativo' }
    ]
  },
  municipiosLista: {
    'siafic': [
      { nome: 'Itabaianinha', uf: 'SE', ibge: '2803005' }
,      { nome: 'Matriz de Camaragibe', uf: 'AL', ibge: '2705101' }
,      { nome: 'Neópolis', uf: 'SE', ibge: '2804409' }
,      { nome: 'Nossa Senhora das Dores', uf: 'SE', ibge: '2804607' }
,      { nome: 'Nossa Senhora de Lourdes', uf: 'SE', ibge: '2804706' }
,      { nome: 'Poço Verde', uf: 'SE', ibge: '2805505' }
,      { nome: 'Pão de Açúcar', uf: 'AL', ibge: '2706406' }
,      { nome: 'Salgado', uf: 'SE', ibge: '2806206' }
,      { nome: 'Santa Luzia do Itanhy', uf: 'SE', ibge: '2806305' }
,      { nome: 'Santo Amaro', uf: 'BA', ibge: '2928604' }
,      { nome: 'Simão Dias', uf: 'SE', ibge: '2807105' }
,      { nome: 'São Luis do Quitunde', uf: 'AL', ibge: '2708501' }
,      { nome: 'Xique-Xique', uf: 'BA', ibge: '2933604' }
    ]
  }
};
