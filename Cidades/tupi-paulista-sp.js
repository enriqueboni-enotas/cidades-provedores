var cidadeDetalhe = {
  id: 'tupi-paulista-sp',
  nome: 'Tupi Paulista',
  uf: 'SP',
  ibge: '3555109',
  constante: 'CodigoIBGE.TupiPaulistaSP',
  provedorAtual: {
    nome: 'NOVOSERV',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '1',
    urls: {
      homologacao: {
        recepcaoLote: 'https://tupipaulista.novoserv.com.br/abrasf/ahrecepcionarloterpssincrono.aspx',
        consultaRps: 'https://tupipaulista.novoserv.com.br/abrasf/ahconsultarnfseporrps.aspx',
        cancelamentoNFe: 'https://tupipaulista.novoserv.com.br/abrasf/ahcancelarnfse.aspx'
      },
      producao: {
        recepcaoLote: 'https://tupipaulista.novoserv.com.br/abrasf/arecepcionarloterpssincrono.aspx',
        consultaRps: 'https://tupipaulista.novoserv.com.br/abrasf/aconsultarnfseporrps.aspx',
        cancelamentoNFe: 'https://tupipaulista.novoserv.com.br/abrasf/acancelarnfse.aspx'
      }
    }
  }
};
