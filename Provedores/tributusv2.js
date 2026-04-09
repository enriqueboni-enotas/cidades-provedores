var provedorDetalhe = {
  id: 'tributusv2',
  nome: 'TributusV2',
  empresa: 'TributusV2',
  stats: {
    municipios: 16
  },
  visaoGeral: [
    { key: 'Nome', val: 'TributusV2' },
    { key: 'Total Municipios', val: '16' },
    { key: 'Estados Atendidos', val: ['PE', 'AL', 'RN'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 3,
    assinaturaDigital: 2,
    suportaCancelamentoNFe: true,
    usaCodigoServicoMunicipal: true,
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal que identifica o serviço prestado na nota fiscal. \r\nEm algumas cidades esse código é conhecido como código de tributação.',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado.\r\n \r\n Você precisa preencher o item da lista de serviço mantendo a formatação.\r\n Exemplos válidos: 17.02 ou 08.02',
    suportaEmissaoNFeSemCliente: true,
    enviaEmailCliente: true,
    numeroRpsDeveSerSequencial: false,
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
    'tributusv2': [
      { nome: 'Bom Conselho', uf: 'PE', ibge: '2602100' },
      { nome: 'Buíque', uf: 'PE', ibge: '2602803' },
      { nome: 'Capela', uf: 'AL', ibge: '2701704' },
      { nome: 'Escada', uf: 'PE', ibge: '2605202' },
      { nome: 'Lajedo', uf: 'PE', ibge: '2608800' },
      { nome: 'Limoeiro', uf: 'PE', ibge: '2608909' },
      { nome: 'Maragogi', uf: 'AL', ibge: '2704500' },
      { nome: 'Nossa Senhora da Glória', uf: 'PE', ibge: '2804508' },
      { nome: 'Ouricuri', uf: 'PE', ibge: '2609907' },
      { nome: 'Pau dos Ferros', uf: 'RN', ibge: '2409407' },
      { nome: 'Paudalho', uf: 'PE', ibge: '2610608' },
      { nome: 'Pombos', uf: 'PE', ibge: '2611309' },
      { nome: 'Quipapá', uf: 'PE', ibge: '2611507' },
      { nome: 'Ribeirão', uf: 'PE', ibge: '2611804' },
      { nome: 'Timbaúba', uf: 'PE', ibge: '2615300' },
      { nome: 'Viçosa', uf: 'AL', ibge: '2709400' }
    ]
  }
};

