var provedorDetalhe = {
  id: 'smart4',
  nome: 'Smart4',
  empresa: 'Smart4',
  stats: {
    municipios: 5
  },
  visaoGeral: [
    { key: 'Nome', val: 'Smart4' },
    { key: 'Total Municipios', val: '5' },
    { key: 'Estados Atendidos', val: ['BA'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 0,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: 'Sua prefeitura exige utilização de usuário e senha',
      senha: 'Sua prefeitura exige utilização de usuário e senha',
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    usaAEDF: false,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: true,
    usaItemListaServico: false,
    usaNaturezaOperacao: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter até 9 dígitos somente números. Exemplo: 17450.',
    helpCodigoServicoMunicipal: 'O Código do Serviço Municipal (Atividade) deve conter até no máximo 10 dígitos. \nNormalmente encontrado no portal da prefeitura.',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal',
    suportaEmissaoNFeSemCliente: false,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: false,
    enviaEmailCliente: false,
    numeroNotasPorLote: 1,
    naturezasOperacao: [
      { codigo: '1', nome: '1 - Normal' },
      { codigo: '2', nome: '2 - Internacional' },
      { codigo: '3', nome: '3 - Isento' },
      { codigo: '4', nome: '4 - Simples Nacional' }
    ]
  },
  municipiosLista: {
    'smart4': [
      { nome: 'Araci', uf: 'BA', ibge: '2902104' }
,      { nome: 'Bonito', uf: 'BA', ibge: '2904050' }
,      { nome: 'Gandu', uf: 'BA', ibge: '2911204' }
,      { nome: 'Monte Santo', uf: 'BA', ibge: '2921500' }
,      { nome: 'Mundo Novo', uf: 'BA', ibge: '2922102' }
    ]
  }
};
