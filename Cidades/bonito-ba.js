var cidadeDetalhe = {
  id: 'bonito-ba',
  nome: 'Bonito',
  uf: 'BA',
  ibge: '2904050',
  constante: 'CodigoIBGE.BonitoBA',
  provedorAtual: {
    nome: 'Smart4',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'http://168.181.139.4:8380/nfse-ws/'
      },
      producao: {
        recepcaoLote: 'http://168.181.139.4:8380/nfse-ws/'
      }
    }
  },
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
    helpCodigoServicoMunicipal: 'O Código do Serviço Municipal (Atividade) deve conter até no máximo 10 dígitos. \r\nNormalmente encontrado no portal da prefeitura.',
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
  }
};

