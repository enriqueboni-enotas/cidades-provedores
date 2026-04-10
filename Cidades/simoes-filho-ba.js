var cidadeDetalhe = {
  id: 'simoes-filho-ba',
  nome: 'Simões Filho',
  uf: 'BA',
  ibge: '2930709',
  constante: 'CodigoIBGE.SimoesFilhoBA',
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
        recepcaoLote: 'https://ba-simoesfilho-pm-nfs-backend.cloud.el.com.br/producao/NfseWSService'
      }
    }
  }
};
