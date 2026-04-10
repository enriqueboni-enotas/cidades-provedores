var cidadeDetalhe = {
  id: 'joao-monlevade-mg',
  nome: 'João Monlevade',
  uf: 'MG',
  ibge: '3136207',
  constante: 'CodigoIBGE.JoaoMonlevadeMG',
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
        recepcaoLote: 'https://mg-joaomonlevade-pm-nfs-backend.cloud.el.com.br/producao28/NfseWSService'
      }
    }
  }
};
