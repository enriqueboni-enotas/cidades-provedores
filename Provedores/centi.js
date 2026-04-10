var provedorDetalhe = {
  id: 'centi',
  nome: 'Centi',
  empresa: 'Centi',
  stats: {
    municipios: 32
  },
  visaoGeral: [
    { key: 'Nome', val: 'Centi' },
    { key: 'Total Municipios', val: '32' },
    { key: 'Estados Atendidos', val: ['GO', 'BA', 'MT'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 2,
    usaCodigoServicoMunicipal: false,
    usaCNAE: false,
    usaItemListaServico: false,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    autenticidadeNota: {
      UsaChaveAcesso: false,
      UsaCnpjPrestador: true,
      UsaCodigoVerificacao: true,
      UsaCpfCnpjTomador: false,
      UsaInscricaoMunicipalPrestador: false,
      UsaNumeroNota: true,
      UsaValorNota: false,
      urlVerificacao: 'https://trindade.centi.com.br/notafiscal/verificar'
    },
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
    'centi': [
      { nome: 'Cachoeira Alta', uf: 'GO', ibge: '5204102' }
,      { nome: 'Caetité', uf: 'BA', ibge: '2905206' }
,      { nome: 'Campo Limpo de Goiás', uf: 'GO', ibge: '5204854' }
,      { nome: 'Caçu', uf: 'GO', ibge: '5204300' }
,      { nome: 'Cristalina', uf: 'GO', ibge: '5206206' }
,      { nome: 'Edéia', uf: 'GO', ibge: '5207402' }
,      { nome: 'Guarani de Goiás', uf: 'GO', ibge: '5209408' }
,      { nome: 'Iaciara', uf: 'GO', ibge: '5209903' }
,      { nome: 'Iporá', uf: 'GO', ibge: '5210208' }
,      { nome: 'Itaberaí', uf: 'GO', ibge: '5210406' }
,      { nome: 'Itapuranga', uf: 'GO', ibge: '5211206' }
,      { nome: 'Itarumã', uf: 'GO', ibge: '5211305' }
,      { nome: 'Itumbiara', uf: 'GO', ibge: '5211503' }
,      { nome: 'Minaçu', uf: 'GO', ibge: '5213087' }
,      { nome: 'Monte Alegre de Goiás', uf: 'GO', ibge: '5213509' }
,      { nome: 'Mozarlândia', uf: 'GO', ibge: '5214002' }
,      { nome: 'Mucuri', uf: 'BA', ibge: '2922003' }
,      { nome: 'Nova Crixás', uf: 'GO', ibge: '5214838' }
,      { nome: 'Perolândia', uf: 'GO', ibge: '5216452' }
,      { nome: 'Piracanjuba', uf: 'GO', ibge: '5217104' }
,      { nome: 'Piranhas', uf: 'GO', ibge: '5217203' }
,      { nome: 'Pires do Rio', uf: 'GO', ibge: '5217401' }
,      { nome: 'Porangatu', uf: 'GO', ibge: '5218003' }
,      { nome: 'Posse', uf: 'GO', ibge: '5218300' }
,      { nome: 'Quirinópolis', uf: 'GO', ibge: '5218508' }
,      { nome: 'Rio Verde', uf: 'GO', ibge: '5218805' }
,      { nome: 'Santa Helena de Goiás', uf: 'GO', ibge: '5219308' }
,      { nome: 'Santo Antônio do Descoberto', uf: 'GO', ibge: '5219753' }
,      { nome: 'São Domingos', uf: 'GO', ibge: '5219803' }
,      { nome: 'São Luís de Montes Belos', uf: 'GO', ibge: '5220108' }
,      { nome: 'Tangará da Serra', uf: 'MT', ibge: '5107958' }
,      { nome: 'Trindade', uf: 'GO', ibge: '5221403' }
    ]
  }
};
