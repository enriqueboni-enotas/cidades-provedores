var cidadeDetalhe = {
  id: 'porto-velho-ro',
  nome: 'Porto Velho',
  uf: 'RO',
  ibge: '1100205',
  constante: 'CodigoIBGE.PortoVelhoRO',
  provedorAtual: {
    nome: 'EeLv3',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '2.03',
    infoAdicional: 'Links com https tem que adicionar a tag <codigoNoProvedor>UsaCertificado</codigoNoProvedor>',
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://nfse-backend.portovelho.ro.gov.br/producao/NfseWSService'
      }
    }
  }
};
