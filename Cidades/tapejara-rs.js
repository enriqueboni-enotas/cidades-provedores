var cidadeDetalhe = {
  id: 'tapejara-rs',
  nome: 'Tapejara',
  uf: 'RS',
  ibge: '4320909',
  constante: 'CodigoIBGE.TapejaraRS',
  provedorAtual: {
    nome: 'Tecnos',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '2.04',
    infoAdicional: 'NaoGerarNumeroLote => quando setado irá passar o id igual passado no json',
    urls: {
      homologacao: {
        recepcaoLote: 'http://homologatapejara.nfse-tecnos.com.br:9091/EnvioLoteRPSSincrono.asmx',
        consultaLote: 'http://homologatapejara.nfse-tecnos.com.br:9097/ConsultaLoteRPS.asmx',
        consultaRps: 'http://homologatapejara.nfse-tecnos.com.br:9095/ConsultaNFSePorRPS.asmx',
        cancelamentoNFe: 'http://homologatapejara.nfse-tecnos.com.br:9098/CancelamentoNFSe.asmx'
      },
      producao: {
        recepcaoLote: 'http://tapejara.nfse-tecnos.com.br:9091/EnvioLoteRPSSincrono.asmx',
        consultaLote: 'http://tapejara.nfse-tecnos.com.br:9097/ConsultaLoteRPS.asmx',
        consultaRps: 'http://tapejara.nfse-tecnos.com.br:9095/ConsultaNFSePorRPS.asmx',
        cancelamentoNFe: 'http://tapejara.nfse-tecnos.com.br:9098/CancelamentoNFSe.asmx'
      }
    }
  },
  configuracaoProvedor: {
    tipoAutenticacao: 0,
    assinaturaDigital: 2,
    usaCodigoServicoMunicipal: false,
    usaNBS: true,
    usaItemListaServico: true,
    helpCodigoServicoMunicipal: 'Informe um código de tributação nacional válido sem formatação. Ex.: \\',
    numeroRpsDeveSerSequencial: true,
    numeroLoteDeveSerSequencial: true,
    suportaConsultaSequencialRps: false,
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
