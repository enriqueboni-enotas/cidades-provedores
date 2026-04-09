var cidadeDetalhe = {
  id: 'pirenopolis-go',
  nome: 'Pirenópolis',
  uf: 'GO',
  ibge: '5217302',
  constante: 'CodigoIBGE.PirenopolisGO',
  provedorAtual: {
    nome: 'ProData',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    infoAdicional: 'Validar as propriedades do provedor para configurar o xml:',
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://pirenopolis.prodataweb.inf.br/prodataws/services/NfseWSService'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 0,
    assinaturaDigital: 1,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: 'Informe o usuário utilizado para acessar o sistema de sua prefeitura.',
      senha: 'Informe a senha utilizada para acessar o sistema de sua prefeitura.',
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: false,
    usaCodigoServicoMunicipal: false,
    usaCNAE: true,
    usaItemListaServico: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
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
  }
};

