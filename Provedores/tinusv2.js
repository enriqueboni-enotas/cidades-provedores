var provedorDetalhe = {
  id: 'tinusv2',
  nome: 'TinusV2',
  empresa: 'TinusV2',
  stats: {
    municipios: 33
  },
  visaoGeral: [
    { key: 'Nome', val: 'TinusV2' },
    { key: 'Total Municipios', val: '33' },
    { key: 'Estados Atendidos', val: ['RN', 'PE', 'PB'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 1,
    assinaturaDigital: 2,
    usaCodigoServicoMunicipal: true,
    usaNBS: true,
    usaItemListaServico: true,
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCNAE: 'Informe aqui o código CNAE que identifica o serviço prestado na nota fiscal',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal e é formado 5 dígitos (formatado com ponto).\n\nEsse código é identificado na sua prefeitura como Sub-Item e é  possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, no seção Código de Serviço.\nExemplo válido: 01.03',
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
    'tinusv2': [
      { nome: 'Angicos', uf: 'RN', ibge: '2400802' }
,      { nome: 'Arês', uf: 'RN', ibge: '2401206' }
,      { nome: 'Bananeiras', uf: 'PB', ibge: '2501500' }
,      { nome: 'Belo Jardim', uf: 'PE', ibge: '2601706' }
,      { nome: 'Cabedelo', uf: 'PB', ibge: '2503209' }
,      { nome: 'Cabo de Santo Agostinho', uf: 'PE', ibge: '2602902' }
,      { nome: 'Caicó', uf: 'RN', ibge: '2402006' }
,      { nome: 'Camaragibe', uf: 'PE', ibge: '2603454' }
,      { nome: 'Catolé do Rocha', uf: 'PB', ibge: '2504306' }
,      { nome: 'Ceará-Mirim', uf: 'RN', ibge: '2402600' }
,      { nome: 'Currais Novos', uf: 'RN', ibge: '2403103' }
,      { nome: 'Galinhos', uf: 'RN', ibge: '2404101' }
,      { nome: 'Garanhuns', uf: 'PE', ibge: '2606002' }
,      { nome: 'Goiana', uf: 'PE', ibge: '2606200' }
,      { nome: 'Igarassu', uf: 'PE', ibge: '2606804' }
,      { nome: 'Ipojuca', uf: 'PE', ibge: '2607208' }
,      { nome: 'Jaboatão dos Guararapes', uf: 'PE', ibge: '2607901' }
,      { nome: 'Macau', uf: 'RN', ibge: '2407203' }
,      { nome: 'Macaíba', uf: 'RN', ibge: '2407104' }
,      { nome: 'Mossoró', uf: 'RN', ibge: '2408003' }
,      { nome: 'Olinda', uf: 'PE', ibge: '2609600' }
,      { nome: 'Parnamirim', uf: 'RN', ibge: '2403251' }
,      { nome: 'Passa e Fica', uf: 'RN', ibge: '2409100' }
,      { nome: 'Patu', uf: 'RN', ibge: '2409308' }
,      { nome: 'Rio do Fogo', uf: 'RN', ibge: '2408953' }
,      { nome: 'Santa Cruz do Capibaribe', uf: 'PE', ibge: '2612505' }
,      { nome: 'Serra Talhada', uf: 'PE', ibge: '2613909' }
,      { nome: 'Serra do Mel', uf: 'RN', ibge: '2413359' }
,      { nome: 'Sousa', uf: 'PB', ibge: '2516201' }
,      { nome: 'São Gonçalo do Amarante', uf: 'RN', ibge: '2412005' }
,      { nome: 'São José de Mipibu', uf: 'RN', ibge: '2412203' }
,      { nome: 'Touros', uf: 'RN', ibge: '2414407' }
,      { nome: 'Vitória de Santo Antão', uf: 'PE', ibge: '2616407' }
    ]
  }
};
