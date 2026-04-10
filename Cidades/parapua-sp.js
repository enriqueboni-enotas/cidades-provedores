var cidadeDetalhe = {
  id: 'parapua-sp',
  nome: 'Parapuã',
  uf: 'SP',
  ibge: '3536000',
  constante: 'CodigoIBGE.ParapuaSP',
  provedorAtual: {
    nome: 'NOVOSERV',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    versaoAbrasf: '1',
    urls: {
      homologacao: {
        recepcaoLote: 'https://parapua.novoserv.com.br/abrasf/ahrecepcionarloterpssincrono.aspx',
        consultaRps: 'https://parapua.novoserv.com.br/abrasf/ahconsultarnfseporrps.aspx',
        cancelamentoNFe: 'https://parapua.novoserv.com.br/abrasf/ahcancelarnfse.aspx'
      },
      producao: {
        recepcaoLote: 'https://parapua.novoserv.com.br/abrasf/arecepcionarloterpssincrono.aspx',
        consultaRps: 'https://parapua.novoserv.com.br/abrasf/aconsultarnfseporrps.aspx',
        cancelamentoNFe: 'https://parapua.novoserv.com.br/abrasf/acancelarnfse.aspx'
      }
    }
  }
};
