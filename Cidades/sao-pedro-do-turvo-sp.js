var cidadeDetalhe = {
  id: 'sao-pedro-do-turvo-sp',
  nome: 'São Pedro do Turvo',
  uf: 'SP',
  ibge: '3550506',
  constante: 'CodigoIBGE.SaoPedroDoTurvoSP',
  provedorAtual: {
    nome: 'ISSMAP',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/teste/enviar/7',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/7',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/7'
      },
      producao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/enviar/7',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/7',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/7',
        cancelamentoNFe: 'https://www.issmap.com.br/ws/rps/cancela/7'
      }
    }
  }
};
