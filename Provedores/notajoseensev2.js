var provedorDetalhe = {
  id: 'notajoseensev2',
  nome: 'NotaJoseenseV2',
  empresa: 'NotaJoseenseV2',
  stats: {
    municipios: 1
  },
  visaoGeral: [
    { key: 'Nome', val: 'NotaJoseenseV2' },
    { key: 'Total Municipios', val: '1' },
    { key: 'Estados Atendidos', val: ['SP'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    suportaCancelamentoNFe: true,
    usaCodigoServicoMunicipal: true,
    usaCNAE: false,
    usaItemListaServico: false,
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal que identifica o serviço prestado na nota fiscal.\r\n\r\nEsse código é identificado na sua prefeitura como Serviço e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, na seção Código de Serviço.\r\nExemplos válidos: 863050400 ou 620150101',
    regimesEspecialTributacao: [
      { codigo: '0', nome: ' - ' },
      { codigo: '1', nome: 'Microempresa Municipal' },
      { codigo: '2', nome: 'Estimativa' },
      { codigo: '3', nome: 'Sociedade de Profissionais' },
      { codigo: '4', nome: 'Cooperativa' },
      { codigo: '5', nome: 'Microempresário Individual (MEI)' },
      { codigo: '6', nome: 'Microempresário e Empresa de Pequeno Porte (ME EPP)' }
    ],
    naturezasOperacao: [
      { codigo: '1', nome: 'Exigível' },
      { codigo: '2', nome: 'Não incidência' },
      { codigo: '3', nome: 'Isenção' },
      { codigo: '4', nome: 'Exportação' },
      { codigo: '5', nome: 'Imunidade' },
      { codigo: '6', nome: 'Exigibilidade Suspensa por Decisão Judicial' },
      { codigo: '7', nome: 'Exigibilidade Suspensa por Processo Administrativo' }
    ]
  },
  municipiosLista: {
    'notajoseensev2': [
      { nome: 'São José dos Campos', uf: 'SP', ibge: '3549904' }
    ]
  }
};

