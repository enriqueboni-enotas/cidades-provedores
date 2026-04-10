var cidadeDetalhe = {
  id: 'aguas-de-santa-barbara-sp',
  nome: 'Águas de Santa Bárbara',
  uf: 'SP',
  ibge: '3500550',
  constante: 'CodigoIBGE.AguasDeSantaBarbaraSP',
  provedorAtual: {
    nome: 'ISSMAP',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/teste/enviar/1',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/1',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/1'
      },
      producao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/enviar/1',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/1',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/1',
        cancelamentoNFe: 'https://www.issmap.com.br/ws/rps/cancela/1'
      }
    }
  }
};
