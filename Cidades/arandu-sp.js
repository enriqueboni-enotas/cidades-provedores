var cidadeDetalhe = {
  id: 'arandu-sp',
  nome: 'Arandu',
  uf: 'SP',
  ibge: '3503109',
  constante: 'CodigoIBGE.AranduSP',
  provedorAtual: {
    nome: 'ISSMAP',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/teste/enviar/17',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/17',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/17'
      },
      producao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/enviar/17',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/17',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/17',
        cancelamentoNFe: 'https://www.issmap.com.br/ws/rps/cancela/17'
      }
    }
  }
};
