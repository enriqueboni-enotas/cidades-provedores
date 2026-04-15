var provedorDetalhe = {
  id: 'equiplano',
  nome: 'Equiplano',
  empresa: 'Equiplano',
  stats: {
    municipios: 28
  },
  visaoGeral: [
    { key: 'Nome', val: 'Equiplano' },
    { key: 'Total Municipios', val: '28' },
    { key: 'Estados Atendidos', val: ['PR'], type: 'uf-badges' }
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
    suportaCancelamentoNFe: true,
    valorCancelamentoNFe: 45,
    usaAEDF: false,
    usaRegimeEspecialTributacao: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaCNAE: false,
    usaItemListaServico: false,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter 8 dígitos (somente números). Exemplo válido: 11356083',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. Ele possui geralmente 5 dígitos (somente números). Exemplo válido: 14.01',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: true,
    enviaEmailCliente: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    autenticidadeNota: {
      urlVerificacao: 'https://esnfs.com.br/nfsautenticidade.edit.logic',
      UsaCodigoVerificacao: true
    },
    naturezasOperacao: [
      { codigo: '1', nome: 'Tributado no municipio' },
      { codigo: '2', nome: 'Em outro município' },
      { codigo: '3', nome: 'Isento/imune' },
      { codigo: '4', nome: 'Suspenso/decisão judicial' }
    ]
  },
  municipiosLista: {
    'equiplano': [
      { nome: 'Cafelândia', uf: 'PR', ibge: '4103453' },
      { nome: 'Cantagalo', uf: 'PR', ibge: '4104451' },
      { nome: 'Capanema', uf: 'PR', ibge: '4104501' },
      { nome: 'Curiúva', uf: 'PR', ibge: '4107009' },
      { nome: 'Dois Vizinhos', uf: 'PR', ibge: '4107207' },
      { nome: 'Francisco Beltrão', uf: 'PR', ibge: '4108403' },
      { nome: 'Imbituva', uf: 'PR', ibge: '4110102' },
      { nome: 'Itaperuçu', uf: 'PR', ibge: '4111258' },
      { nome: 'Laranjeiras do Sul', uf: 'PR', ibge: '4113304' },
      { nome: 'Missal', uf: 'PR', ibge: '4116059' },
      { nome: 'Nova Laranjeiras', uf: 'PR', ibge: '4117057' },
      { nome: 'Piên', uf: 'PR', ibge: '4119103' },
      { nome: 'Planalto', uf: 'PR', ibge: '4119806' },
      { nome: 'Pranchita', uf: 'PR', ibge: '4120358' },
      { nome: 'Prudentópolis', uf: 'PR', ibge: '4120606' },
      { nome: 'Quedas do Iguaçu', uf: 'PR', ibge: '4120903' },
      { nome: 'Quitandinha', uf: 'PR', ibge: '4121208' },
      { nome: 'Realeza', uf: 'PR', ibge: '4121406' },
      { nome: 'Reserva', uf: 'PR', ibge: '4121703' },
      { nome: 'Rondon', uf: 'PR', ibge: '4122602' },
      { nome: 'Santa Amélia', uf: 'PR', ibge: '4123105' },
      { nome: 'São João', uf: 'PR', ibge: '4124806' },
      { nome: 'São Tomé', uf: 'PR', ibge: '4126108' },
      { nome: 'Terra Rica', uf: 'PR', ibge: '4127304' },
      { nome: 'Tijucas do Sul', uf: 'PR', ibge: '4127601' },
      { nome: 'Toledo', uf: 'PR', ibge: '4127700' },
      { nome: 'Turvo', uf: 'PR', ibge: '4127965' },
      { nome: 'Verê', uf: 'PR', ibge: '4128609' }
    ]
  }
};

