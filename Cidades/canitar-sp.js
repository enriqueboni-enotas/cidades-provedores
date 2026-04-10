var cidadeDetalhe = {
  id: 'canitar-sp',
  nome: 'Canitar',
  uf: 'SP',
  ibge: '3510153',
  constante: 'CodigoIBGE.CanitarSP',
  provedorAtual: {
    nome: 'ISSMAP',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/teste/enviar/16',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/16',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/16'
      },
      producao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/enviar/16',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/16',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/16',
        cancelamentoNFe: 'https://www.issmap.com.br/ws/rps/cancela/16'
      }
    }
  }
};
