var cidadeDetalhe = {
  id: 'varre-sai-rj',
  nome: 'Varre-Sai',
  uf: 'RJ',
  ibge: '3306156',
  constante: 'CodigoIBGE.VarreSaiRJ',
  provedorAtual: {
    nome: 'GOVBRv3',
    namespace: 'http://www.sped.fazenda.gov.br/nfse',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://reformatributaria.govbr.cloud/NFSe.Api.Teste/NotaNacional',
        consultaLote: 'https://sefin.producaorestrita.nfse.gov.br/SefinNacional/nfse',
        downloadPDF: 'https://adn.producaorestrita.nfse.gov.br/danfse'
      },
      producao: {
        recepcaoLote: 'https://webapp1-varresai.cidade360.cloud/NFSe.Api/NotaNacional',
        consultaLote: 'https://sefin.nfse.gov.br/SefinNacional/nfse',
        downloadPDF: 'https://adn.nfse.gov.br/danfse'
      }
    },
    emissaoSemCertificado: {
      homologacao: 'https://www.producaorestrita.nfse.gov.br',
      producao: 'https://www.nfse.gov.br'
    }
  },
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
    valorCancelamentoNFe: 30,
    usaAEDF: false,
    usaRegimeEspecialTributacao: true,
    usaCodigoServicoMunicipal: true,
    usaDescricaoServico: false,
    usaCNAE: true,
    usaNBS: true,
    usaItemListaServico: false,
    usaNaturezaOperacao: true,
    helpInscricaoMunicipal: 'A inscrição municipal da empresa deve conter de 8 dígitos (com formatação).\n\nExemplo válido: 14.05.01',
    helpRegimeEspecialTributacao: 'Isso identifica o regime especial de tributação de sua empresa',
    helpCodigoServicoMunicipal: 'Informe aqui o código de serviço municipal que identifica o serviço prestado na nota fiscal. Exemplo: 07.01.01',
    helpCNAE: 'Informe aqui o CNAE o Serviço municipal conforme usado no portal de NFS-e da prefeitura. Exemplo: 4329103, 1813001',
    suportaEmissaoNFeSemCliente: true,
    suportaEmissaoNFeClienteSemCpf: false,
    suportaEmissaoNFeClienteSemEndereco: true,
    suportaCancelamentoNFeSemCliente: true,
    suportaCancelamentoNFeClienteSemCpf: false,
    enviaEmailCliente: false,
    suportaConsultaSequencialRps: true,
    numeroNotasPorLote: 1,
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
      { codigo: '1', nome: 'Operação tributável' },
      { codigo: '2', nome: 'Imunidade' },
      { codigo: '3', nome: 'Exportação de Serviço' },
      { codigo: '4', nome: 'Não incidência' }
    ]
  }
};
