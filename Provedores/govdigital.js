var provedorDetalhe = {
  id: 'govdigital',
  nome: 'GovDigital',
  empresa: 'GovDigital',
  stats: {
    municipios: 21
  },
  visaoGeral: [
    { key: 'Nome', val: 'GovDigital' },
    { key: 'Total Municipios', val: '21' },
    { key: 'Estados Atendidos', val: ['MG', 'SP'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 1,
    assinaturaDigital: 2,
    usaCodigoServicoMunicipal: true,
    usaCNAE: false,
    usaItemListaServico: false,
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal que identifica o serviço prestado na nota fiscal. \nEm algumas cidades esse código é conhecido como código de tributação.\n\nDeve seguir a formatação como nos exemplos: 01.03, 16.02',
    suportaEmissaoNFeSemCliente: true,
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
    'govdigital': [
      { nome: 'Amparo', uf: 'SP', ibge: '3501905' }
,      { nome: 'Araguari', uf: 'MG', ibge: '3103504' }
,      { nome: 'Capinópolis', uf: 'MG', ibge: '3112604' }
,      { nome: 'Caxambu', uf: 'MG', ibge: '3115508' }
,      { nome: 'Conceição do Mato Dentro', uf: 'MG', ibge: '3117504' }
,      { nome: 'Dores do Indaiá', uf: 'MG', ibge: '3123205' }
,      { nome: 'Frutal', uf: 'MG', ibge: '3127107' }
,      { nome: 'Guaxupé', uf: 'MG', ibge: '3128709' }
,      { nome: 'Itanhandu', uf: 'MG', ibge: '3133105' }
,      { nome: 'Jaguariúna', uf: 'SP', ibge: '3524709' }
,      { nome: 'Lavras', uf: 'MG', ibge: '3138203' }
,      { nome: 'Limeira do Oeste', uf: 'MG', ibge: '3138625' }
,      { nome: 'Pedro Leopoldo', uf: 'MG', ibge: '3149309' }
,      { nome: 'Poços de Caldas', uf: 'MG', ibge: '3151800' }
,      { nome: 'Prata', uf: 'MG', ibge: '3152808' }
,      { nome: 'Santa Vitória', uf: 'MG', ibge: '3159803' }
,      { nome: 'São Francisco de Sales', uf: 'MG', ibge: '3161304' }
,      { nome: 'São José da Lapa', uf: 'MG', ibge: '3162955' }
,      { nome: 'São José do Rio Pardo', uf: 'SP', ibge: '3549706' }
,      { nome: 'Vargem Grande Paulista', uf: 'SP', ibge: '3556453' }
,      { nome: 'Várzea Paulista', uf: 'SP', ibge: '3556503' }
    ]
  }
};
