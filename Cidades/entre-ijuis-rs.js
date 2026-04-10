var cidadeDetalhe = {
  id: 'entre-ijuis-rs',
  nome: 'Entre-Ijuís',
  uf: 'RS',
  ibge: '4306932',
  constante: 'CodigoIBGE.EntreIjuisRS',
  provedorAtual: {
    nome: 'GOVBRv2',
    namespace: null,
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    infoAdicional: 'Metadados cadastro empresa: naturezaOperacaoPadrao, naturezaOperacaoPadraoExterior\n					Metadados da nota: servicoIncideNoMunicipioPrestador, NumeroProcesso, regimeEspecialTributacao',
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'http://pmei-rs.ddns.net:8089/nfse.portal.integracao/services.svc'
      }
    }
  },
  configuracaoProvedor: {
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: null,
      senha: null,
      token: null,
      fraseSecreta: null
    },
    valorCancelamentoNFe: 30,
    usaCNAE: false,
    usaItemListaServico: true,
    helpInscricaoMunicipal: 'Informe sua inscrição municipal (somente números).\n\nExemplos válidos: 06421008 ou 6348122',
    helpRegimeEspecialTributacao: 'Isso identifica o regime de tributação de sua empresa, se desejar deixar sem nenhuma opção marcada selecione o traço (\\',
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal com 4 dígitos (somente números) que identifica o serviço prestado na nota fiscal.\n\nEsse código é identificado na sua prefeitura como Serviço e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, na seção Código de Serviço.\nExemplos válidos: 0801 ou 0108',
    helpDescricaoServico: 'Texto descritivo municipal que descreve o serviço prestado. Essa informação não é transmitida à prefeitura e é utilizada somente na impressão do PDF da nota fiscal.',
    helpItemListaServico: 'Esse código complementa a identificação do serviço prestado na nota fiscal e é formado por 5 dígitos (formatado com ponto).\n\nEsse código é identificado na sua prefeitura como Sub-Item e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, no seção Código de Serviço.\nExemplos válidos: 12.11 ou 08.02',
    suportaEmissaoNFeClienteSemEndereco: false,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
    autenticidadeNota: {
      UsaCnpjPrestador: true,
      UsaCodigoVerificacao: true,
      UsaNumeroNota: true
    },
    regimesEspecialTributacao: [
      { codigo: '0', nome: ' Nenhum ' },
      { codigo: '7', nome: ' Nenhum - Com Envio de alíquota' },
      { codigo: '1', nome: 'Microempresa Municipal' },
      { codigo: '2', nome: 'Estimativa' },
      { codigo: '3', nome: 'Sociedade de Profissionais' },
      { codigo: '4', nome: 'Cooperativa' },
      { codigo: '5', nome: 'MEI - Simples Nacional' },
      { codigo: '8', nome: 'MEI - Simples Nacional - Com Envio De Alíquota' },
      { codigo: '6', nome: 'ME EPP - Simples Nacional' },
      { codigo: '9', nome: 'ME EPP - Simples Nacional - Com Envio De Alíquota' }
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
