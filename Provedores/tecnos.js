var provedorDetalhe = {
  id: 'tecnos',
  nome: 'Tecnos',
  empresa: 'Tecnos',
  stats: {
    municipios: 29
  },
  visaoGeral: [
    { key: 'Nome', val: 'Tecnos' },
    { key: 'Total Municipios', val: '29' },
    { key: 'Estados Atendidos', val: ['RS'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 0,
    assinaturaDigital: 2,
    usaCodigoServicoMunicipal: false,
    usaNBS: true,
    usaItemListaServico: true,
    helpCodigoServicoMunicipal: 'Informe um código de tributação nacional válido sem formatação. Ex.: \\',
    numeroRpsDeveSerSequencial: true,
    numeroLoteDeveSerSequencial: true,
    suportaConsultaSequencialRps: false,
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
    'tecnos': [
      { nome: 'Anta Gorda', uf: 'RS', ibge: '4300703' },
      { nome: 'Bom Princípio', uf: 'RS', ibge: '4302352' },
      { nome: 'Bom Retiro do Sul', uf: 'RS', ibge: '4302402' },
      { nome: 'Cidreira', uf: 'RS', ibge: '4305454' },
      { nome: 'Dois Lajeados', uf: 'RS', ibge: '4306452' },
      { nome: 'Flores da Cunha', uf: 'RS', ibge: '4308201' },
      { nome: 'Harmonia', uf: 'RS', ibge: '4309555' },
      { nome: 'Ivoti', uf: 'RS', ibge: '4310801' },
      { nome: 'Mato Leitão', uf: 'RS', ibge: '4312153' },
      { nome: 'Monte Belo do Sul', uf: 'RS', ibge: '4312385' },
      { nome: 'Muçum', uf: 'RS', ibge: '4312609' },
      { nome: 'Nova Hartz', uf: 'RS', ibge: '4313060' },
      { nome: 'Pareci Novo', uf: 'RS', ibge: '4314035' },
      { nome: 'Portão', uf: 'RS', ibge: '4314803' },
      { nome: 'Roca Sales', uf: 'RS', ibge: '4315800' },
      { nome: 'Salvador do Sul', uf: 'RS', ibge: '4316501' },
      { nome: 'Santa Maria do Herval', uf: 'RS', ibge: '4316956' },
      { nome: 'São José do Sul', uf: 'RS', ibge: '4318614' },
      { nome: 'São Marcos', uf: 'RS', ibge: '4319000' },
      { nome: 'São Sebastião do Caí', uf: 'RS', ibge: '4319505' },
      { nome: 'São Vendelino', uf: 'RS', ibge: '4319752' },
      { nome: 'Sério', uf: 'RS', ibge: '4320453' },
      { nome: 'Tabaí', uf: 'RS', ibge: '4320859' },
      { nome: 'Tapejara', uf: 'RS', ibge: '4320909' },
      { nome: 'Terra de Areia', uf: 'RS', ibge: '4321436' },
      { nome: 'Teutônia', uf: 'RS', ibge: '4321451' },
      { nome: 'Tupandi', uf: 'RS', ibge: '4322251' },
      { nome: 'Vale Real', uf: 'RS', ibge: '4322541' },
      { nome: 'Vila Flores', uf: 'RS', ibge: '4323309' }
    ]
  }
};

