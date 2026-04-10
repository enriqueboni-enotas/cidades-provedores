var cidadeDetalhe = {
  id: 'timburi-sp',
  nome: 'Timburi',
  uf: 'SP',
  ibge: '3554607',
  constante: 'CodigoIBGE.TimburiSP',
  provedorAtual: {
    nome: 'ISSMAP',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/teste/enviar/10',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/10',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/10'
      },
      producao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/enviar/10',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/10',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/10',
        cancelamentoNFe: 'https://www.issmap.com.br/ws/rps/cancela/10'
      }
    }
  }
};
