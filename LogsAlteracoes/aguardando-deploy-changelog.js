var aguardandoDeployData = [
  {
    tag: '27/04/2026',
    titulo: 'Domingo — 27 de Abril',
    itens: [
      {
        icon: '🏙️',
        texto:
          'Paraibuna/SP aderiu ao Portal Nacional de NFS-e — o município migrou seu sistema de notas fiscais eletrônicas para o Portal Nacional. As configurações foram adicionadas ao ConfiguracoesMunicipios.xml e os testes de integração (recepção e cancelamento) foram atualizados para validar o novo provedor. Empresas de Paraibuna/SP agora emitem notas pelo fluxo do Portal Nacional.',
        pr: 9062,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🔧',
        texto:
          'EGoverneISS — subtração de 4 horas na data de competência para consulta de nota. O provedor EGoverneISS usa a data de competência como filtro para buscar a nota emitida, mas em alguns casos a nota era registrada com horário UTC que ficava antes da data informada. A correção subtrai 4 horas da DataInicial na requisição de consulta, ampliando a janela de busca e evitando que notas recém-emitidas não sejam encontradas na consulta de lote.',
        pr: 9071,
        autor: 'Thiago Souza',
      },
    ],
  },
];
