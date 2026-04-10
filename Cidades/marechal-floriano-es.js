var cidadeDetalhe = {
  id: 'marechal-floriano-es',
  nome: 'Marechal Floriano',
  uf: 'ES',
  ibge: '3203346',
  constante: 'CodigoIBGE.MarechalFlorianoES',
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
        recepcaoLote: 'https://es-marechalfloriano-pm-nfs-backend.cloud.el.com.br/producao/NfseWSService'
      }
    }
  }
};
