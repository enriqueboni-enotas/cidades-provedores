var cidadeDetalhe = {
  id: 'sao-mateus-es',
  nome: 'São Mateus',
  uf: 'ES',
  ibge: '3204906',
  constante: 'CodigoIBGE.SaoMateusES',
  provedorAtual: {
    nome: 'EeLv3',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'UsaCertificado',
    robo: false,
    webService: true,
    versaoAbrasf: '2.04',
    infoAdicional: 'Links com https tem que adicionar a tag <codigoNoProvedor>UsaCertificado</codigoNoProvedor>',
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://es-saomateus-pm-nfs-backend.cloud.el.com.br/producao33/NfseWSService'
      }
    }
  }
};
