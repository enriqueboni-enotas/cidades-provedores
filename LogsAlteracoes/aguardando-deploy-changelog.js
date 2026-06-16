var aguardandoDeployData = [
  {
    tag: '16/06/2026',
    titulo: 'Segunda-feira — 16 de Junho',
    itens: [
      {
        icon: '🏙️',
        texto:
          'Ativação de Porto Franco/MA no provedor PortalFacil — o município maranhense agora pode emitir NFS-e pelo gateway. A integração exigiu ajustes específicos no fluxo de geração do RPS: o campo DataEmissao é enviado como DataHora (diferente de Santa Inês/MA que usa apenas Data), e o nó CodigoNbs no XML é reposicionado após MunicipioIncidencia para atender o layout exigido pela prefeitura. Também foi adicionado tratamento de exceção para Imperatriz/MA (ServerTooBusyException e WebException convertidos em ValidationException com código IMP001).',
        pr: 9349,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Tratamento de valores nulos na geração do PDF (DANFSE) — quando os campos de endereço, bairro, município ou CEP do tomador vêm nulos na base, o sistema gerava erro de referência nula (Object Reference) ao tentar montar o PDF da nota. Agora o método DrawTomador utiliza operador de coalescência nula para prevenir a exceção, exibindo o campo vazio no PDF ao invés de travar a geração. Impacto direto na experiência do cliente que não conseguia visualizar/baixar o PDF de notas com dados de tomador incompletos.',
        pr: 9606,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Tratamento de XML inválido na consulta de lote do provedor GIAPv2 — quando a prefeitura retorna conteúdo estranho antes da tag <nfeResposta> (texto, HTML ou lixo de encoding), o sistema falhava na desserialização e travava as notas em status de consulta. Agora o código detecta e remove conteúdo anterior à tag esperada, aplica SanitizeXml() e valida se o xmlNFe não é nulo/vazio antes de prosseguir. Resolve notas que ficavam permanentemente em "consultando lote" sem retorno.',
        pr: 9605,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Tabuleiro do Norte/CE ativado no provedor SpeedGov. O município cearense agora pode emitir, consultar e cancelar NFS-e pelo gateway integrado ao sistema SpeedGov utilizado pela prefeitura.',
        pr: 9604,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Ibiara/PB ativada no provedor Eticons. O município paraibano agora está configurado no gateway para emissão de NFS-e através do sistema Eticons usado pela prefeitura.',
        pr: 9603,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Augusto Pestana/RS ativado no provedor GvbrV3. O município gaúcho agora pode emitir NFS-e pelo gateway integrado ao sistema GvbrV3 utilizado pela prefeitura.',
        pr: 9602,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Getulina/SP ativada no provedor Fiorilli. O município paulista agora está configurado no gateway para emissão, consulta e cancelamento de NFS-e pelo sistema Fiorilli.',
        pr: 9601,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Removida validação desnecessária de certificado digital no provedor HM2 (RecepcionarLoteNFe) — o provedor não utiliza certificado digital para comunicação, mas o código tentava validar o certificado no tratamento de exceções e lançava ValidationException com erro de certificado indevidamente. Agora as exceções capturadas pelo WSClient são atribuídas diretamente ao result.Exception e a etapa é marcada como executada, permitindo que o mecanismo de reprocessamento atue corretamente em caso de falha de comunicação.',
        pr: 9598,
        autor: 'Davidson Souza',
      },
      {
        icon: '🔧',
        texto:
          'Migração do provedor PowerSistemas de WCF/SOAP para HttpClient — o provedor utilizava clientes SOAP gerados (WCF) que apresentavam erros de comunicação intermitentes. Foi refatorado para montar manualmente os envelopes SOAP via XDocument e enviar via HttpClient com suporte a descompactação gzip/deflate. Também foi restringido o escopo funcional apenas para Chapadinha/MA (único município ativo no provedor), removendo cidades obsoletas. Resolve instabilidades de comunicação que causavam falhas na emissão de notas.',
        pr: 9597,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🏙️',
        texto:
          'Pojuca/BA migrada para o provedor Saatri. A prefeitura trocou de sistema de NFS-e, e as configurações no gateway (URLs, namespace, operações) foram atualizadas para o novo provedor Saatri, garantindo continuidade na emissão e consulta de notas fiscais para o município baiano.',
        pr: 9595,
        autor: 'Henrique Cassio',
      },
    ],
  },
];
