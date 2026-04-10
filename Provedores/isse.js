var provedorDetalhe = {
  id: 'isse',
  nome: 'ISSe',
  empresa: 'ISSe',
  stats: {
    municipios: 1
  },
  visaoGeral: [
    { key: 'Nome', val: 'ISSe' },
    { key: 'Total Municipios', val: '1' },
    { key: 'Estados Atendidos', val: ['PR'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    suportaCancelamentoNFe: true,
    usaCodigoServicoMunicipal: true,
    usaCNAE: true,
    usaItemListaServico: false,
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \n\nEle possui 4 dígitos (somente números).\nExemplo válido: 0108',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
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
    'isse': [
      { nome: 'Maringá', uf: 'PR', ibge: '4115200' }
    ]
  }
};
