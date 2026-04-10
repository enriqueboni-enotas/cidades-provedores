var cidadeDetalhe = {
  id: 'venda-nova-do-imigrante-es',
  nome: 'Venda Nova do Imigrante',
  uf: 'ES',
  ibge: '3205069',
  constante: 'CodigoIBGE.VendaNovaDoImigranteES',
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
        recepcaoLote: 'https://es-vendanovadoimigrante-pm-nfs-backend.cloud.el.com.br/producao12/NfseWSService'
      }
    }
  }
};
