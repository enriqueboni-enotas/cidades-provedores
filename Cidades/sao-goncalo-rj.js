var cidadeDetalhe = {
  id: 'sao-goncalo-rj',
  nome: 'São Gonçalo',
  uf: 'RJ',
  ibge: '3304904',
  constante: 'CodigoIBGE.SaoGoncaloRJ',
  provedorAtual: {
    nome: 'IssIntel',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'CpfCnpjTomadorObrigatorio',
    robo: false,
    webService: true,
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://saogoncalo-rj.issintegra.com.br/webservices/abrasf/api'
      }
    }
  }
};
