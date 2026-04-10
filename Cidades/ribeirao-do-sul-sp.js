var cidadeDetalhe = {
  id: 'ribeirao-do-sul-sp',
  nome: 'Ribeirão do Sul',
  uf: 'SP',
  ibge: '3543204',
  constante: 'CodigoIBGE.RibeiraoDoSulSP',
  provedorAtual: {
    nome: 'ISSMAP',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/teste/enviar/56',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/56',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/56'
      },
      producao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/enviar/56',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/56',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/56',
        cancelamentoNFe: 'https://www.issmap.com.br/ws/rps/cancela/56'
      }
    }
  }
};
