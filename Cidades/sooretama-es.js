var cidadeDetalhe = {
  id: 'sooretama-es',
  nome: 'Sooretama',
  uf: 'ES',
  ibge: '3205010',
  constante: 'CodigoIBGE.SooretamaES',
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
        recepcaoLote: 'https://es-sooretama-pm-nfs-backend.cloud.el.com.br/producao20/NfseWSService'
      }
    }
  }
};
