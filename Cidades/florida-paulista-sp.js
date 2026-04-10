var cidadeDetalhe = {
  id: 'florida-paulista-sp',
  nome: 'Flórida Paulista',
  uf: 'SP',
  ibge: '3516002',
  constante: 'CodigoIBGE.FloridaPaulistaSP',
  provedorAtual: {
    nome: 'NOVOSERV',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '1',
    urls: {
      homologacao: {
        recepcaoLote: 'https://floridapaulista.novoserv.com.br/abrasf/ahrecepcionarloterpssincrono.aspx',
        consultaRps: 'https://floridapaulista.novoserv.com.br/abrasf/ahconsultarnfseporrps.aspx',
        cancelamentoNFe: 'https://floridapaulista.novoserv.com.br/abrasf/ahcancelarnfse.aspx'
      },
      producao: {
        recepcaoLote: 'https://floridapaulista.novoserv.com.br/abrasf/arecepcionarloterpssincrono.aspx',
        consultaRps: 'https://floridapaulista.novoserv.com.br/abrasf/aconsultarnfseporrps.aspx',
        cancelamentoNFe: 'https://floridapaulista.novoserv.com.br/abrasf/acancelarnfse.aspx'
      }
    }
  }
};
