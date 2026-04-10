var cidadeDetalhe = {
  id: 'iaras-sp',
  nome: 'Iaras',
  uf: 'SP',
  ibge: '3519253',
  constante: 'CodigoIBGE.IarasSP',
  provedorAtual: {
    nome: 'ISSMAP',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/teste/enviar/50',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/50',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/50'
      },
      producao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/enviar/50',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/50',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/50',
        cancelamentoNFe: 'https://www.issmap.com.br/ws/rps/cancela/50'
      }
    }
  }
};
