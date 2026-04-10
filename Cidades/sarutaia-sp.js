var cidadeDetalhe = {
  id: 'sarutaia-sp',
  nome: 'Sarutaiá',
  uf: 'SP',
  ibge: '3551207',
  constante: 'CodigoIBGE.SarutaiaSP',
  provedorAtual: {
    nome: 'ISSMAP',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/teste/enviar/9',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/9',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/9'
      },
      producao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/enviar/9',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/9',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/9',
        cancelamentoNFe: 'https://www.issmap.com.br/ws/rps/cancela/9'
      }
    }
  }
};
