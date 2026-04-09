var cidadeDetalhe = {
  id: 'sao-jose-dos-campos-sp',
  nome: 'São José dos Campos',
  uf: 'SP',
  ibge: '3549904',
  constante: 'CodigoIBGE.SaoJoseDosCamposSP',
  provedorAtual: {
    nome: 'NotaJoseenseV2',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: true,
    webService: true,
    versaoAbrasf: '2.03',
    infoAdicional: 'Verificar as propriedades no provedor: UsaProxy, UsaProxyPDF',
    urls: {
      homologacao: {
        recepcaoLote: 'https://homol-notajoseense.sjc.sp.gov.br/notafiscal-abrasfv203-ws/NotaFiscalSoap'
      },
      producao: {
        recepcaoLote: 'https://notajoseense.sjc.sp.gov.br/notafiscal-abrasfv203-ws/NotaFiscalSoap',
        downloadPDF: 'https://notajoseense.sjc.sp.gov.br/notafiscal-ws/servico/notafiscal/autenticacao/cpfCnpj/{0}/inscricaoMunicipal/{1}/numeroNota/{2}/codigoVerificacao/{3}'
      }
    },
    emissaoSemCertificado: {
      producao: 'https://notajoseense.sjc.sp.gov.br'
    }
  },
  configuracaoProvedor: {
    suportaCancelamentoNFe: true,
    usaCodigoServicoMunicipal: true,
    usaCNAE: false,
    usaItemListaServico: false,
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal que identifica o serviço prestado na nota fiscal.\r\n\r\nEsse código é identificado na sua prefeitura como Serviço e é possível visualizá-lo ao tentar emitir uma nota fiscal manualmente, na seção Código de Serviço.\r\nExemplos válidos: 863050400 ou 620150101',
    regimesEspecialTributacao: [
      { codigo: '0', nome: ' - ' },
      { codigo: '1', nome: 'Microempresa Municipal' },
      { codigo: '2', nome: 'Estimativa' },
      { codigo: '3', nome: 'Sociedade de Profissionais' },
      { codigo: '4', nome: 'Cooperativa' },
      { codigo: '5', nome: 'Microempresário Individual (MEI)' },
      { codigo: '6', nome: 'Microempresário e Empresa de Pequeno Porte (ME EPP)' }
    ],
    naturezasOperacao: [
      { codigo: '1', nome: 'Exigível' },
      { codigo: '2', nome: 'Não incidência' },
      { codigo: '3', nome: 'Isenção' },
      { codigo: '4', nome: 'Exportação' },
      { codigo: '5', nome: 'Imunidade' },
      { codigo: '6', nome: 'Exigibilidade Suspensa por Decisão Judicial' },
      { codigo: '7', nome: 'Exigibilidade Suspensa por Processo Administrativo' }
    ]
  }
};

