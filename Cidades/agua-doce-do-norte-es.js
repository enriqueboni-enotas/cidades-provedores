var cidadeDetalhe = {
  id: 'agua-doce-do-norte-es',
  nome: 'Água Doce do Norte',
  uf: 'ES',
  ibge: '3200169',
  constante: 'CodigoIBGE.AguaDoceDoNorteES',
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
        recepcaoLote: 'https://es-aguadocedonorte-pm-nfs-backend.cloud.el.com.br/producao/NfseWSService'
      }
    }
  }
};
