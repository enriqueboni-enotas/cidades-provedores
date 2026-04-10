var cidadeDetalhe = {
  id: 'boa-esperanca-es',
  nome: 'Boa Esperança',
  uf: 'ES',
  ibge: '3201001',
  constante: 'CodigoIBGE.BoaEsperancaES',
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
        recepcaoLote: 'https://es-boaesperanca-pm-nfs-backend.cloud.el.com.br/producao20/NfseWSService'
      }
    }
  }
};
