var provedorDetalhe = {
  id: 'sefin',
  nome: 'Sefin',
  empresa: 'Sefin',
  stats: {
    municipios: 1
  },
  visaoGeral: [
    { key: 'Nome', val: 'Sefin' },
    { key: 'Total Municipios', val: '1' },
    { key: 'Estados Atendidos', val: ['CE'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    suportaCancelamentoNFe: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: false,
    usaCNAE: false,
    usaItemListaServico: true,
    usaNaturezaOperacao: true,
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\n                Exemplos: 960330100 e 8513900000',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal corresponde à classificação do contribuinte na tabela da LC\r\n116. Usar até 04 (quatro) dígitos, fazendo a separação com “ponto” (Ex: 8.02, 14.01).',
    suportaEmissaoNFeSemCliente: false,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: false,
    naturezasOperacao: [
      { codigo: '1', nome: '1 – Tributação no município' },
      { codigo: '5', nome: '5 - Não incidência' }
    ]
  },
  municipiosLista: {
    'sefin': [
      { nome: 'Caucaia', uf: 'CE', ibge: '2303709' }
    ]
  }
};

