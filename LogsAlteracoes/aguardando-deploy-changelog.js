var aguardandoDeployData = [
  {
    tag: '15/04/2026',
    titulo: 'Quarta-feira — 15 de Abril',
    itens: [
      {
        icon: '🏙️',
        texto:
          'Ativação de Jaguaribara/CE no provedor Aspect — o município passou a contar com emissão de NFS-e pelo gateway. A configuração inclui URLs de produção, namespace e credenciais do webservice da prefeitura, permitindo que empresas da cidade emitam notas fiscais de serviço de forma automatizada.',
        pr: 8882,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Ajuste na tela de API Key do painel para sempre buscar a chave atualizada do banco de dados. Antes, a API Key exibida ao usuário podia estar desatualizada porque era lida de um claim do token de autenticação. Agora, para usuários comuns, a chave é obtida diretamente do serviço (IAPIKeyService), garantindo que o valor exibido reflita a chave real vigente. Usuários com role Support continuam usando o claim temporário.',
        pr: 8822,
        autor: 'Thales Fonseca',
      },
      {
        icon: '🏙️',
        texto:
          'Ativação de Arroio do Sal/RS no provedor GOVBRv3 — o município gaúcho foi integrado ao gateway com o provedor do governo federal (NFS-e Nacional). As credenciais de teste foram removidas do código e a configuração de produção foi adicionada ao XML de municípios, permitindo emissão de NFS-e para empresas da cidade.',
        pr: 8874,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Ativação de Quitandinha/PR no provedor Equiplano — o município paranaense foi configurado no gateway para emissão de NFS-e. A integração utiliza o webservice SOAP do Equiplano, com URLs, namespace e parâmetros específicos da prefeitura adicionados ao XML de configuração.',
        pr: 8878,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Ativação de Jacundá/PA no provedor Aspect — mais um município paraense integrado ao gateway. A configuração segue o padrão do provedor Aspect com URLs de produção e homologação, permitindo que empresas de Jacundá emitam NFS-e automaticamente pelo sistema.',
        pr: 8875,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Ativação de Minas Novas/MG no provedor Síntese — o município mineiro foi integrado ao gateway. A configuração inclui URLs do webservice da prefeitura e parâmetros específicos do provedor Síntese, habilitando a emissão de NFS-e para empresas locais.',
        pr: 8873,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '📊',
        texto:
          'Remoção de Jarinu/SP da flag SempreEnviaAliquotaIssEmpresasSimplesNacional no provedor GOVBRv3. Essa flag forçava o envio da alíquota de ISS mesmo para empresas do Simples Nacional em Jarinu. A remoção indica que a prefeitura corrigiu o comportamento do seu webservice e não exige mais esse tratamento especial, evitando possíveis rejeições por alíquota indevida.',
        pr: 8887,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🔧',
        texto:
          'Correção na validação de data recebida no XML do provedor SIGISS v1. O método ValidarDataEmissao fazia fallback para comparar datas, mas podia falhar com ArgumentNullException quando o campo estava vazio. Agora há uma verificação de nulo/vazio antes de aplicar o regex. Além disso, foi adicionado tratamento específico para Marília/SP, que usa o campo emissao_rps em vez de dt_conversao como data de fallback, resolvendo problemas de notas rejeitadas por data inválida nesse município.',
        pr: 8837,
        autor: 'Thiago Souza',
      },
      {
        icon: '🔧',
        texto:
          'Remoção de cidades duplicadas no dicionário de municípios e normalização de nomes com caracteres especiais no tomador. As entradas duplicadas de São Bento do Sul/SC e São José/SC (com códigos IBGE incorretos) foram removidas para evitar conflitos na busca. Além disso, foi adicionada normalização para nomes como "Sant\'Ana do Livramento" e "Santa Bárbara d\'Oeste", cujos apóstrofos impediam a localização correta no dicionário de cidades durante a emissão.',
        pr: 8851,
        autor: 'Thiago Souza',
      },
      {
        icon: '🌐',
        texto:
          'Correção para não travar a fila de processamento quando o tomador é do exterior e o código IBGE da cidade está nulo. Antes, a ausência do código IBGE em notas com tomador estrangeiro causava erro e travava a fila de emissão. Agora, quando o tomador é exterior e o código IBGE é nulo, o sistema atribui automaticamente o código 9999999 (padrão para exterior), permitindo que a nota siga o fluxo normal de comércio exterior sem interrupção.',
        pr: 8863,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🆕',
        texto:
          'Implementação de fallback para consulta por RPS no provedor TinusV2. Quando a consulta padrão ao webservice retorna um indicador de que a nota precisa ser buscada na API nacional (NFS-e Nacional), o sistema agora faz automaticamente uma segunda consulta via API nacional, descomprime o retorno (gzip/base64) e monta o XML no formato esperado. Isso resolve problemas de notas que ficavam "em emissão" sem retorno em municípios que migraram para o sistema nacional mas ainda usam TinusV2 como provedor intermediário.',
        pr: 8865,
        autor: 'Thiago Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Integração de Brazabrantes/GO no provedor Centi — o município goiano foi adicionado ao XML de configuração de municípios com as URLs e parâmetros do webservice Centi, habilitando a emissão de NFS-e para empresas locais.',
        pr: 8866,
        autor: 'Davidson Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Migração de Itamaraju/BA para o provedor WebISSv2 — o município baiano foi atualizado do provedor anterior para o WebISSv2. As URLs, namespace e configurações do webservice foram atualizadas para refletir o novo sistema da prefeitura, garantindo continuidade na emissão de NFS-e.',
        pr: 8868,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🏙️',
        texto:
          'Ativação de Lagoa Nova/RN no provedor TributosV2 — o município potiguar foi integrado ao gateway com o provedor TributosV2. A configuração inclui URLs de produção e parâmetros específicos do webservice da prefeitura, permitindo emissão automatizada de NFS-e.',
        pr: 8884,
        autor: 'Henrique Cassio',
      },
      {
        icon: '📊',
        texto:
          'Inclusão de Moema/MG na lista de municípios que usam cIntContrib (contribuição intermunicipal) no provedor GOVBRv3. Essa configuração habilita o envio do campo de contribuição intermunicipal nas notas emitidas em Moema, atendendo a uma exigência específica da prefeitura para o correto cálculo tributário.',
        pr: 8869,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🏙️',
        texto:
          'Ativação de Euclides da Cunha Paulista/SP no provedor GOVBRv3 — o município paulista foi integrado ao gateway com o provedor do governo federal (NFS-e Nacional). Além da configuração padrão, a cidade foi adicionada à lista NaoUsaPedRegEventoCancelamento, indicando que o cancelamento de notas neste município não utiliza o fluxo de pedido de registro de evento, seguindo o comportamento específico da prefeitura.',
        pr: 8872,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🔧',
        texto:
          'Remoção de validação temporária no provedor BethaV3 na operação de consulta de lote de NF-e. O workaround havia sido implementado para corrigir o valor do campo opSimpNac (opção pelo Simples Nacional) em XMLs retornados pela Betha/Portal Nacional para uma empresa específica. Como o problema foi resolvido no sistema da Betha, a correção manual no código não é mais necessária, e os XMLs agora são processados sem modificação.',
        pr: 8883,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🔄',
        texto:
          'Reversão de Miracema do Tocantins/TO para o provedor ArrecadaNet — o município havia sido migrado para outro provedor, mas apresentou problemas de integração. A configuração foi revertida para o provedor ArrecadaNet, que já funcionava anteriormente, restaurando a emissão de NFS-e para empresas da cidade.',
        pr: 8867,
        autor: 'Alex Ramos Fernandes',
      },
    ],
  },
];
