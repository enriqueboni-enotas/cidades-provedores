var provedorDetalhe = {
  id: 'simplissv3',
  nome: 'SimplissV3',
  empresa: 'SimplissV3',
  stats: {
    municipios: 15
  },
  visaoGeral: [
    { key: 'Nome', val: 'SimplissV3' },
    { key: 'Total Municipios', val: '15' },
    { key: 'Estados Atendidos', val: ['SP', 'MG', 'PR', 'SC'], type: 'uf-badges' }
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
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: false,
    usaCNAE: true,
    usaNBS: true,
    usaItemListaServico: false,
    usaNaturezaOperacao: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 8 dígitos (com formatação).\r\n\r\nExemplo válido: 14.05.01',
    helpRegimeEspecialTributacao: 'Isso identifica o regime especial de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. Exemplo: 07.01.01',
    helpCNAE: 'Informe aqui o CNAE o Serviço municipal conforme usado no portal de NFS-e da prefeitura. Exemplo: 4329103, 1813001',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: true,
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
    'simplissv3': [
      { nome: 'Arceburgo', uf: 'MG', ibge: '3104106' },
      { nome: 'Bela Vista do Paraíso', uf: 'PR', ibge: '4102802' },
      { nome: 'Blumenau', uf: 'SC', ibge: '4202404' },
      { nome: 'Casa Branca', uf: 'SP', ibge: '3510807' },
      { nome: 'Dois Córregos', uf: 'SP', ibge: '3514106' },
      { nome: 'Espírito Santo do Pinhal', uf: 'SP', ibge: '3515186' },
      { nome: 'Indiana', uf: 'SP', ibge: '3520608' },
      { nome: 'Paraisópolis', uf: 'MG', ibge: '3147303' },
      { nome: 'Patrocínio', uf: 'MG', ibge: '3148103' },
      { nome: 'Pirapora do Bom Jesus', uf: 'SP', ibge: '3539103' },
      { nome: 'Presidente Prudente', uf: 'SP', ibge: '3541406' },
      { nome: 'Santa Cruz do Rio Pardo', uf: 'SP', ibge: '3546405' },
      { nome: 'Santana de Parnaíba', uf: 'SP', ibge: '3547304' },
      { nome: 'Tupã', uf: 'SP', ibge: '3555000' },
      { nome: 'Vargem Grande do Sul', uf: 'SP', ibge: '3556404' }
    ]
  }
};

