var provedorDetalhe = {
  id: 'abasev2',
  nome: 'AbaseV2',
  empresa: 'AbaseV2',
  stats: {
    municipios: 12
  },
  visaoGeral: [
    { key: 'Nome', val: 'AbaseV2' },
    { key: 'Total Municipios', val: '12' },
    { key: 'Estados Atendidos', val: ['RS'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 3,
    assinaturaDigital: 2,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: null,
      senha: null,
      token: 'Sua prefeitura exige a utilização de token para autenticação. Acesse o portal da prefeitura e no canto superir direito e clique no nome do contribuinte, depois clique em: ',
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
    helpInscricaoMunicipal: 'Informe somente os números sem ponto nem formatação.\r\n\r\nExemplos válidos: 4301000010 ou 131436001',
    helpRegimeEspecialTributacao: 'Isso identifica o regime especial de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. Exemplo: 07.01.01',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: false,
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
    'abasev2': [
      { nome: 'Boa Vista do Buricá', uf: 'RS', ibge: '4302204' },
      { nome: 'Caibaté', uf: 'RS', ibge: '4303301' },
      { nome: 'Giruá', uf: 'RS', ibge: '4309001' },
      { nome: 'Rolante', uf: 'RS', ibge: '4316006' },
      { nome: 'Roque Gonzales', uf: 'RS', ibge: '4316303' },
      { nome: 'Santo Ângelo', uf: 'RS', ibge: '4317509' },
      { nome: 'Santo Antônio das Missões', uf: 'RS', ibge: '4317707' },
      { nome: 'Santo Cristo', uf: 'RS', ibge: '4317905' },
      { nome: 'São Luiz Gonzaga', uf: 'RS', ibge: '4318903' },
      { nome: 'São Martinho', uf: 'RS', ibge: '4319109' },
      { nome: 'Três de Maio', uf: 'RS', ibge: '4321808' },
      { nome: 'Tuparendi', uf: 'RS', ibge: '4322301' }
    ]
  }
};

