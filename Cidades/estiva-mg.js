var cidadeDetalhe = {
  id: 'estiva-mg',
  nome: 'Estiva',
  uf: 'MG',
  ibge: '3124500',
  constante: 'CodigoIBGE.EstivaMG',
  provedorAtual: {
    nome: 'Fiorilli',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '2.02',
    infoAdicional: 'Validar as propriedades para configurar o provedor no xml\n					NaoSuportaCancelamento - Cidade não suporta cancelamento via websevice	EnviaValorIssZerado - Envia ValorIss zerado nas emissões\n					NaoEnviaValorIss - Não envia ValorIss nas emissões\n					NaoUsaAssinatura - Não assina o XML\n					FracionarAliquotaNoXml - Fraciona a aliquota\n					Formatar4CasasDecimaisAliquotaNoXml - Envia Aliquota com 4 casas decimais\n					UsaCodigoServicoMunicipal - Prefeitura usa codigo de serviço municipal\n					NaoUsarItemListaServico - Prefeitura não usa item da lista de serviços\n					UsaCNAE - Prefeitura usa Cnae\n					UsaExigibilidadeIssUm - Exigibilidade sempre igual a 1\n					UsaImpressaoPdfPorLink - Usa o PDF padrão da prefeitura gerado pelo link\n					UsaCidadePrestacaoParaCancelamento - Usa cidade de prestação para realizar o cancelamento\n					NaoSuportaEmissaoSemTomador - Não suporta emissão sem cliente',
    urls: {
      homologacao: {
        recepcaoLote: 'http://fi1.fiorilli.com.br:5663/IssWeb-ejb/IssWebWS/IssWebWS'
      },
      producao: {
        recepcaoLote: 'https://nfe.sgpcloud.net:9063/IssWeb-ejb/IssWebWS/IssWebWS'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 2,
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: 'Informe o usuário utilizado para acessar o sistema de sua prefeitura.',
      senha: 'Informe a senha utilizada para acessar o sistema de sua prefeitura.',
      token: null,
      fraseSecreta: null
    },
    usaCodigoServicoMunicipal: true,
    helpInscricaoMunicipal: 'Inscrição Municipal pode ou não conter formatação. Em caso de dúvidas, verifique com a prefeitura.',
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal que identifica o serviço prestado na nota fiscal. \n                        Em algumas cidades esse código é conhecido como código de tributação.\n                        Exemplo válido: 01.03 ou 17.02',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado.\n                    Você precisa preencher o item da lista de serviço com 6 dígitos sem formatação.Exemplos válidos: 170201 ou 110401',
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
