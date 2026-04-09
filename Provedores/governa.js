var provedorDetalhe = {
  id: 'governa',
  nome: 'Governa',
  empresa: 'Governa',
  stats: {
    municipios: 7
  },
  visaoGeral: [
    { key: 'Nome', val: 'Governa' },
    { key: 'Total Municipios', val: '7' },
    { key: 'Estados Atendidos', val: ['MG'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 3,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: null,
      senha: null,
      token: 'Chave de acesso ao serviço de integração da prefeitura.\r\n                    \r\nPara obter a Chave de Acesso é necessário que a empresa acesse o Portal Governa com seu usuário e senha, entre no menu “Gerenciamento/Configurar Padrão”, e configure que a empresa irá utilizar o modulo de Web Service. \r\nNeste momento será gerado para esta empresa sua Chave de Acesso, basta copiar e colar o valor da chave de acesso neste campo.',
      fraseSecreta: null
    },
    campoLoginProvedor: 2,
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    emTransicaoNFSeNacional: true,
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. \r\n\r\nEle possui geralmente 4 a 5 dígitos com formatação.\r\nExemplo válido: 1.01',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: false,
    suportaEmissaoNFeClienteSemCpf: true,
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
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
      { codigo: '0', nome: 'A Recolher' },
      { codigo: '1', nome: 'Retido na Fonte' },
      { codigo: '2', nome: 'Outro Municipio' },
      { codigo: '3', nome: 'Regime de Caixa' },
      { codigo: '4', nome: 'Retido Outro Município' },
      { codigo: '00', nome: 'Normal' },
      { codigo: '01', nome: 'Retido na Fonte' },
      { codigo: '02', nome: 'Recolhimento Antecipado' },
      { codigo: '03', nome: 'Simples Nacional' },
      { codigo: '04', nome: 'Fixo / Anual' },
      { codigo: '05', nome: 'Sem Recolhimento' },
      { codigo: '06', nome: 'Devido a Outro Município' },
      { codigo: '07', nome: 'Fixo / Mensal' }
    ]
  },
  municipiosLista: {
    'governa': [
      { nome: 'Campo Florido', uf: 'MG', ibge: '3111408' },
      { nome: 'Carmo do Paranaíba', uf: 'MG', ibge: '3114303' },
      { nome: 'Conceição das Alagoas', uf: 'MG', ibge: '3117306' },
      { nome: 'Lagoa Formosa', uf: 'MG', ibge: '3137502' },
      { nome: 'Nova Ponte', uf: 'MG', ibge: '3145000' },
      { nome: 'Perdizes', uf: 'MG', ibge: '3149804' },
      { nome: 'Tapira', uf: 'MG', ibge: '3168101' }
    ]
  }
};

