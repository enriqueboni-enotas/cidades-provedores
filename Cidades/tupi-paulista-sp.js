var cidadeDetalhe = {
  id: 'tupi-paulista-sp',
  nome: 'Tupi Paulista',
  uf: 'SP',
  ibge: '3555109',
  constante: 'CodigoIBGE.TupiPaulistaSP',
  provedorAtual: {
    nome: 'NOVOSERV',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '1',
    urls: {
      homologacao: {
        recepcaoLote: 'https://tupipaulista.novoserv.com.br/abrasf/ahrecepcionarloterpssincrono.aspx',
        consultaRps: 'https://tupipaulista.novoserv.com.br/abrasf/ahconsultarnfseporrps.aspx',
        cancelamentoNFe: 'https://tupipaulista.novoserv.com.br/abrasf/ahcancelarnfse.aspx'
      },
      producao: {
        recepcaoLote: 'https://tupipaulista.novoserv.com.br/abrasf/arecepcionarloterpssincrono.aspx',
        consultaRps: 'https://tupipaulista.novoserv.com.br/abrasf/aconsultarnfseporrps.aspx',
        cancelamentoNFe: 'https://tupipaulista.novoserv.com.br/abrasf/acancelarnfse.aspx'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 0,
    assinaturaDigital: 0,
    usaCNAE: false,
    usaItemListaServico: true,
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal que identifica o serviço prestado na nota fiscal. \r\nEm algumas cidades esse código é conhecido como código de tributação.\r\n\r\nExemplo válido: 17.02 ou 08.02',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado.\r\n \r\n Você precisa preencher o item da lista de serviço mantendo a formatação.\r\n Exemplos válidos: 17.02 ou 08.02',
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

