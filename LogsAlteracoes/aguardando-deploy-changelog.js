var aguardandoDeployData = [
  {
    tag: '10/04/2026',
    titulo: 'Sexta-feira — 10 de Abril',
    itens: [
      {
        icon: '🗑️',
        texto:
          'Remoção de código legado — trechos que não eram mais utilizados no fluxo de emissão foram removidos para reduzir complexidade e facilitar manutenção futura do provedor',
        pr: 8834,
        autor: 'Thiago Souza',
      },
      {
        icon: '🔧',
        texto:
          'Correção na extração do número da nota fiscal — o método de extração estava retornando número incorreto em cenários de consulta por lote, causando divergência entre o número real da nota e o exibido no sistema',
        pr: 8806,
        autor: 'Davidson Souza',
      },
      {
        icon: '🆕',
        texto:
          'Ativa a propriedade UsaNovoFormatoPisCofins e implementa consulta por RPS — com essa mudança, o provedor passa a enviar PIS/COFINS no novo formato exigido pelo portal nacional. Também foi criada a operação de consulta individual de nota por RPS, que antes não existia para esse provedor',
        pr: 8814,
        autor: 'Thiago Souza',
      },
      {
        icon: '🛡️',
        texto:
          'Tratamento de mensagem ao tentar cancelar nota já processada — antes o sistema retornava um erro genérico quando o cancelamento não era possível. Agora retorna uma mensagem clara explicando o motivo da rejeição, evitando confusão no suporte',
        pr: 8820,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Migração de São João Batista do Glória/MG para o provedor MemoryV2 — o município trocou de sistema de NFS-e. As URLs, namespace e configurações foram atualizadas para o novo provedor. Empresas desse município passam a emitir pelo MemoryV2',
        pr: 8823,
        autor: 'Thiago Souza',
      },
      {
        icon: '🌐',
        texto:
          'Adrianópolis/PR aderiu ao portal nacional de NFS-e — o município deixou de usar provedor próprio e passou a emitir pelo layout nacional. Isso significa que não precisa mais de integração específica com a prefeitura, simplificando a emissão para empresas da cidade',
        pr: 8829,
        autor: 'Davidson Souza',
      },
      {
        icon: '🌐',
        texto:
          'Tangará/SC aderiu ao portal nacional de NFS-e — mesmo cenário de Adrianópolis: município migrou para o layout nacional, eliminando a dependência do provedor anterior',
        pr: 8826,
        autor: 'Henrique Cassio',
      },
      {
        icon: '⏸️',
        texto:
          'Desabilita emissão em lote para empresa específica — essa empresa estava enfrentando problemas de duplicidade de notas ao emitir em lote. A emissão foi configurada para processar uma nota por vez até que o problema de concorrência seja resolvido definitivamente',
        pr: 8825,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '📋',
        texto:
          'Adiciona envio do código NBS para empresa específica — o portal nacional passou a exigir o código NBS (Nomenclatura Brasileira de Serviços) para determinados tipos de serviço. Sem esse campo, as notas dessa empresa estavam sendo rejeitadas pela prefeitura',
        pr: 8819,
        autor: 'Felippe Salvo',
      },
      {
        icon: '🔧',
        texto:
          'Adiciona campo AutenticidadeNota no fluxo de emissão — esse campo permite que a prefeitura valide a autenticidade da nota fiscal. Algumas prefeituras passaram a exigir esse dado no XML de emissão, e sem ele as notas eram rejeitadas',
        pr: 8818,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🌐',
        texto:
          'Serrania/MG aderiu ao portal nacional de NFS-e — mais um município que migrou para o layout nacional. Configurações de URLs e provedor atualizadas. Empresas de Serrania agora emitem pelo portal nacional',
        pr: 8815,
        autor: 'Davidson Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Inclui empresa na lista de incidência no município do prestador — essa empresa estava com o ISS sendo calculado no município errado (do tomador ao invés do prestador). Com essa correção, o imposto passa a incidir corretamente no município onde o serviço é prestado',
        pr: 8812,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🏙️',
        texto:
          'Migração de Socorro/SP para o provedor BethaV3 — o município trocou de sistema de NFS-e. Todas as URLs de homologação e produção foram atualizadas, além das configurações de autenticação e namespace do novo provedor',
        pr: 8809,
        autor: 'Henrique Cassio',
      },
      {
        icon: '📊',
        texto:
          'Remove municípios da flag SempreEnviaAliquotaIssEmpresasSimplesNacional — alguns municípios estavam configurados para sempre enviar a alíquota ISS para empresas do Simples Nacional, mas isso causava rejeição em prefeituras que não aceitam esse campo. Os municípios foram removidos da lista para evitar essas rejeições',
        pr: 8805,
        autor: 'Felippe Salvo',
      },
      {
        icon: '🧾',
        texto:
          'Ajusta geração da DACE (Documento Auxiliar de Contingência Eletrônico) no DanfeMS — em cenários de indisponibilidade da SEFAZ, o sistema gera um documento de contingência. O layout desse documento estava com problemas de formatação que impediam a impressão correta. Essa correção garante que o DACE seja gerado corretamente nesses cenários',
        pr: 8827,
        autor: 'Gabriel Mesquita',
      },
    ],
  },
];
