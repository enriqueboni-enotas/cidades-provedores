var cidadeDetalhe = {
  id: 'espirito-santo-do-turvo-sp',
  nome: 'Espírito Santo do Turvo',
  uf: 'SP',
  ibge: '3515194',
  constante: 'CodigoIBGE.EspiritoSantoDoTurvoSP',
  provedorAtual: {
    nome: 'ISSMAP',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    urls: {
      homologacao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/teste/enviar/15',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/15',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/15'
      },
      producao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/enviar/15',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/15',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/15',
        cancelamentoNFe: 'https://www.issmap.com.br/ws/rps/cancela/15'
      }
    }
  }
};
