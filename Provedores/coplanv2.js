var provedorDetalhe = {
  id: 'coplanv2',
  nome: 'CoplanV2',
  empresa: 'CoplanV2',
  stats: {
    municipios: 26
  },
  visaoGeral: [
    { key: 'Nome', val: 'CoplanV2' },
    { key: 'Total Municipios', val: '26' },
    { key: 'Estados Atendidos', val: ['MT', 'PA', 'RJ'], type: 'uf-badges' }
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
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: false,
    usaCNAE: false,
    usaNBS: true,
    usaItemListaServico: false,
    usaNaturezaOperacao: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 8 dígitos (com formatação).\r\n\r\nExemplo válido: 14.05.01',
    helpRegimeEspecialTributacao: 'Isso identifica o regime especial de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. Exemplo: 07.01.01',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: false,
    suportaConsultaSequencialRps: true,
    numeroNotasPorLote: 1,
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
      { codigo: '1', nome: 'Operação tributável' },
      { codigo: '2', nome: 'Imunidade' },
      { codigo: '3', nome: 'Exportação de Serviço' },
      { codigo: '4', nome: 'Não incidência' }
    ]
  },
  municipiosLista: {
    'coplanv2': [
      { nome: 'Água Boa', uf: 'MT', ibge: '5100201' },
      { nome: 'Alta Floresta', uf: 'MT', ibge: '5100250' },
      { nome: 'Alto Araguaia', uf: 'MT', ibge: '5100300' },
      { nome: 'Alto Taquari', uf: 'MT', ibge: '5100607' },
      { nome: 'Barra do Bugres', uf: 'MT', ibge: '5101704' },
      { nome: 'Barra do Garças', uf: 'MT', ibge: '5101803' },
      { nome: 'Barra Mansa', uf: 'RJ', ibge: '3300407' },
      { nome: 'Campo Novo do Parecis', uf: 'MT', ibge: '5102637' },
      { nome: 'Campo Verde', uf: 'MT', ibge: '5102678' },
      { nome: 'Chapada dos Guimarães', uf: 'MT', ibge: '5103007' },
      { nome: 'Colíder', uf: 'MT', ibge: '5103205' },
      { nome: 'Confresa', uf: 'MT', ibge: '5103353' },
      { nome: 'Diamantino', uf: 'MT', ibge: '5103502' },
      { nome: 'Gaúcha do Norte', uf: 'MT', ibge: '5103858' },
      { nome: 'Itaituba', uf: 'PA', ibge: '1503606' },
      { nome: 'Juscimeira', uf: 'MT', ibge: '5105200' },
      { nome: 'Matupá', uf: 'MT', ibge: '5105606' },
      { nome: 'Nova Maringá', uf: 'MT', ibge: '5108907' },
      { nome: 'Nova Mutum', uf: 'MT', ibge: '5106224' },
      { nome: 'Peixoto de Azevedo', uf: 'MT', ibge: '5106422' },
      { nome: 'Pontes e Lacerda', uf: 'MT', ibge: '5106752' },
      { nome: 'Querência', uf: 'MT', ibge: '5107065' },
      { nome: 'Rosário Oeste', uf: 'MT', ibge: '5107701' },
      { nome: 'São José do Rio Claro', uf: 'MT', ibge: '5107305' },
      { nome: 'Sinop', uf: 'MT', ibge: '5107909' },
      { nome: 'Tapurah', uf: 'MT', ibge: '5108006' }
    ]
  }
};

