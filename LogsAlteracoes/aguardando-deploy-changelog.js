var aguardandoDeployData = [
  {
    tag: '29/04/2026',
    titulo: 'Quarta-feira — 29 de Abril',
    itens: [
      {
        icon: '🔧',
        texto:
          'Atualização das credenciais de acesso do proxy BrightData nos ambientes de homologação e produção. O proxy é utilizado para comunicação com webservices de prefeituras que bloqueiam IPs de datacenters. As credenciais anteriores expiraram ou foram rotacionadas, e sem essa atualização as requisições via proxy falhariam com erro de autenticação.',
        pr: 9079,
        autor: 'Gabriel Mesquita Moreira',
      },
      {
        icon: '🔧',
        texto:
          'Ajuste na sincronização e consulta do provedor EGoverneISS para tratar inconsistências nas respostas da prefeitura. Quando a consulta retorna "Não foram encontradas Notas Fiscais" com os parâmetros informados, o sistema agora preenche os dados da prefeitura (número, código de verificação, data de autorização) e retorna o XML recebido, em vez de falhar com NullReferenceException. A consulta por RPS também foi protegida contra tomador nulo, e a validação de CPF/CNPJ só ocorre quando ambos os valores estão preenchidos.',
        pr: 9082,
        autor: 'Thiago Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Belmonte/SC migrado para o provedor Saatri. A prefeitura trocou de sistema de NFS-e e as configurações no ConfiguracoesMunicipios.xml foram atualizadas para apontar para o novo provedor, incluindo URLs, namespace e operações suportadas.',
        pr: 9087,
        autor: 'Davidson Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Santa Izabel do Pará/PA ativado para emissão de NFS-e pelo provedor PortalFacil. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no gateway com as URLs e operações necessárias para emissão, cancelamento e consulta.',
        pr: 9085,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🌐',
        texto:
          'Correção nos valores de comércio exterior do provedor GIFv2 (Caxias do Sul/RS). Os campos de comércio exterior (modo prestação, vínculo, moeda, AFCOMEX, movimentação temporária, MDIC) estavam sendo enviados com valores que o webservice rejeitava. Os métodos FormatarEnderecoTomador e FormatarDadosServico foram sobrescritos para forçar valores padronizados aceitos pelo provedor quando o tomador é do exterior. Também foi adicionada validação para evitar NullReferenceException ao acessar endereço exterior.',
        pr: 9084,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🏙️',
        texto:
          'Quaraí/RS ativado para emissão de NFS-e pelo provedor GOVBRv3. O município foi configurado no gateway com as URLs e operações necessárias, e os testes de integração foram atualizados para incluir o novo município.',
        pr: 9081,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🔧',
        texto:
          'Implementação de fallback na consulta de nota do provedor EGoverneISS. Quando a primeira consulta com CPF/CNPJ do tomador retorna erro indicando que não foram encontradas notas, o sistema agora faz uma segunda tentativa sem os dados do tomador. Isso resolve casos em que a prefeitura não encontra a nota quando o documento do tomador é informado na busca, possivelmente por divergência cadastral.',
        pr: 9077,
        autor: 'Thiago Souza',
      },
      {
        icon: '📊',
        texto:
          'NfseNacionalV2 agora permite envio de IBS/CBS para empresas optantes do Simples Nacional via whitelist de subscription. A mudança foi feita especificamente para a subscription da Royal Soft em Caxias do Sul/RS (provedor GIFv2). Antes, o sistema bloqueava automaticamente o envio de IBS/CBS para Simples Nacional/MEI. Agora, subscriptions na whitelist podem enviar esses dados normalmente.',
        pr: 9074,
        autor: 'Davidson Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Paial/SC migrado para o provedor IPM. A prefeitura trocou de sistema de NFS-e e as configurações no ConfiguracoesMunicipios.xml foram atualizadas para apontar para o novo provedor, garantindo continuidade na emissão de notas fiscais eletrônicas.',
        pr: 9070,
        autor: 'Davidson Souza',
      },
    ],
  },
];
