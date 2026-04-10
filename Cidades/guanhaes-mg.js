var cidadeDetalhe = {
  id: 'guanhaes-mg',
  nome: 'Guanhães',
  uf: 'MG',
  ibge: '3128006',
  constante: 'CodigoIBGE.GuanhaesMG',
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
        recepcaoLote: 'https://mg-guanhaes-pm-nfs-backend.cloud.el.com.br/producao06/NfseWSService'
      }
    }
  }
};
