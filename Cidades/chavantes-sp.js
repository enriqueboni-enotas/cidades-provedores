var cidadeDetalhe = {
  id: 'chavantes-sp',
  nome: 'Chavantes',
  uf: 'SP',
  ibge: '3557204',
  constante: 'CodigoIBGE.ChavantesSP',
  provedorAtual: {
    nome: 'ISSMAP',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/teste/enviar/6',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/6',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/6'
      },
      producao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/enviar/6',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/6',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/6',
        cancelamentoNFe: 'https://www.issmap.com.br/ws/rps/cancela/6'
      }
    }
  }
};
