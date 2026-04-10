var cidadeDetalhe = {
  id: 'piraju-sp',
  nome: 'Piraju',
  uf: 'SP',
  ibge: '3538808',
  constante: 'CodigoIBGE.PirajuSP',
  provedorAtual: {
    nome: 'ISSMAP',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/teste/enviar/3',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/3',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/3'
      },
      producao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/enviar/3',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/3',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/3',
        cancelamentoNFe: 'https://www.issmap.com.br/ws/rps/cancela/3'
      }
    }
  }
};
