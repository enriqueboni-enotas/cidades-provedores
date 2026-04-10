var cidadeDetalhe = {
  id: 'linhares-es',
  nome: 'Linhares',
  uf: 'ES',
  ibge: '3203205',
  constante: 'CodigoIBGE.LinharesES',
  provedorAtual: {
    nome: 'EeLv3',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'UsaCertificado',
    robo: false,
    webService: true,
    versaoAbrasf: '2.03',
    infoAdicional: 'Links com https tem que adicionar a tag <codigoNoProvedor>UsaCertificado</codigoNoProvedor>',
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://notafiscal-backend.linhares.es.gov.br/producao/NfseWSService'
      }
    }
  }
};
