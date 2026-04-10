var cidadeDetalhe = {
  id: 'manduri-sp',
  nome: 'Manduri',
  uf: 'SP',
  ibge: '3528601',
  constante: 'CodigoIBGE.ManduriSP',
  provedorAtual: {
    nome: 'ISSMAP',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: null,
    robo: false,
    webService: true,
    infoAdicional: '5 é o codigo da cidade na prefeitura encontra no manual, normalmente pelo tópico CÓDIGOS DE CIDADES',
    urls: {
      homologacao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/teste/enviar/58',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/58',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/58'
      },
      producao: {
        recepcaoLote: 'https://www.issmap.com.br/ws/rps/enviar/58',
        consultaLote: 'https://www.issmap.com.br/ws/rps/consulta/58',
        consultaRps: 'https://www.issmap.com.br/ws/rps/consulta/58',
        cancelamentoNFe: 'https://www.issmap.com.br/ws/rps/cancela/58'
      }
    }
  }
};
