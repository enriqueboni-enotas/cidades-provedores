var provedorDetalhe = {
  id: 'tributus',
  nome: 'Tributus',
  empresa: 'Tributus',
  stats: {
    municipios: 23
  },
  visaoGeral: [
    { key: 'Nome', val: 'Tributus' },
    { key: 'Total Municipios', val: '23' },
    { key: 'Estados Atendidos', val: ['PE', 'AL', 'PB'], type: 'uf-badges' }
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
    suportaCancelamentoNFe: false,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 1 a 8 dígitos (somente números).\r\n\r\nExemplo válido: 11356',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente 4 a 5 dígitos com formatação.\r\nExemplo válido: 1.01',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    helpItemListaServico: 'Informe aqui o item da lista de serviço que identifica o item atividade na nota fiscal. \r\n\r\nEle possui 3 a 4 dígitos sem formatação.\r\nExemplo válidos:  104 ou 1706',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
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
      { codigo: '1', nome: 'Tributado no município' },
      { codigo: '2', nome: 'tributado fora do município' },
      { codigo: '3', nome: 'Serviço no exterior sem resultados no território nacional' }
    ]
  },
  municipiosLista: {
    'tributus': [
      { nome: 'Abreu e Lima', uf: 'PE', ibge: '2600054' },
      { nome: 'Agrestina', uf: 'PE', ibge: '2600302' },
      { nome: 'Alagoinha', uf: 'PE', ibge: '2600609' },
      { nome: 'Arcoverde', uf: 'PE', ibge: '2601201' },
      { nome: 'Bezerros', uf: 'PE', ibge: '2601904' },
      { nome: 'Bodocó', uf: 'PE', ibge: '2602001' },
      { nome: 'Brejo da Madre de Deus', uf: 'PE', ibge: '2602605' },
      { nome: 'Chã Grande', uf: 'PE', ibge: '2604502' },
      { nome: 'Cuité', uf: 'PB', ibge: '2505105' },
      { nome: 'Glória do Goitá', uf: 'PE', ibge: '2606101' },
      { nome: 'Gravatá', uf: 'PE', ibge: '2606408' },
      { nome: 'Machados', uf: 'PE', ibge: '2609105' },
      { nome: 'Olho d\'Água das Flores', uf: 'AL', ibge: '2705705' },
      { nome: 'Palmares', uf: 'PE', ibge: '2610004' },
      { nome: 'Parnamirim', uf: 'PE', ibge: '2610400' },
      { nome: 'Penedo', uf: 'AL', ibge: '2706703' },
      { nome: 'Pesqueira', uf: 'PE', ibge: '2610905' },
      { nome: 'Poção', uf: 'PE', ibge: '2611200' },
      { nome: 'Porto de Pedras', uf: 'AL', ibge: '2707404' },
      { nome: 'São Caitano', uf: 'PE', ibge: '2613107' },
      { nome: 'São Lourenço da Mata', uf: 'PE', ibge: '2613701' },
      { nome: 'Sertânia', uf: 'PE', ibge: '2614105' },
      { nome: 'Toritama', uf: 'PE', ibge: '2615409' }
    ]
  }
};

