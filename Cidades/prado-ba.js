var cidadeDetalhe = {
  id: 'prado-ba',
  nome: 'Prado',
  uf: 'BA',
  ibge: '2925501',
  constante: 'CodigoIBGE.PradoBA',
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
        recepcaoLote: 'https://ba-prado-pm-nfs-backend.cloud.el.com.br/producao05/NfseWSService'
      }
    }
  }
};
