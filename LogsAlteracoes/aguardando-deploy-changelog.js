var aguardandoDeployData = [
  {
    tag: '06/05/2026',
    titulo: 'Quarta-feira — 06 de Maio',
    itens: [
      {
        icon: '🔧',
        texto:
          'SIGISSWebNew — correção do campo nome_obra quando endereço do imóvel é preenchido. O provedor SIGISSWeb rejeitava notas quando o campo nome_obra ficava null em operações que exigem dados de endereço do imóvel (códigos indicadores 020101, 020201 ou 020301). A correção atribui string vazia ao campo nome_obra antes de preencher os demais dados de endereço (CEP, cidade, bairro, logradouro), evitando o erro de validação no webservice da prefeitura. Essa é uma extensão do PR anterior (#9156) que já tratava o cenário de fallback com endereço do tomador.',
        pr: 9171,
        autor: 'Felippe Salvo de Mendonça',
      },
    ],
  },
];
