var changelogData = [
  {
    tag: '25/05/2026',
    titulo: 'Segunda-feira — 25 de Maio',
    data: '25/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '24/05/2026',
    titulo: 'Sábado — 24 de Maio',
    data: '24/05/2026',
    itens: [
      {
        icon: '🆕',
        destaque: 'Nova característica PermiteEvento nos provedores',
        texto:
          'Foi adicionada a característica PermiteEvento ao modelo de provedores do gateway. Essa flag indica se um provedor suporta operações de evento (como cancelamento por evento). A mudança permite que o sistema identifique automaticamente quais provedores aceitam esse tipo de operação, evitando tentativas de envio para provedores que não suportam.',
      },
    ],
  },
  {
    tag: '23/05/2026',
    titulo: 'Sexta-feira — 23 de Maio',
    data: '23/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '22/05/2026',
    titulo: 'Quinta-feira — 22 de Maio',
    data: '22/05/2026',
    itens: [
      {
        icon: '🔧',
        destaque:
          'Tratamento de valor default para xCidade no endereço exterior',
        texto:
          'Quando o campo xCidade do objeto endExt (endereço exterior) não era informado, o sistema gerava erro na montagem do XML. Agora é atribuído um valor default vazio, evitando falhas na emissão de notas para tomadores estrangeiros.',
      },
      {
        icon: '📊',
        destaque: '[Danfe v2] Aumento de réplicas do microserviço',
        texto:
          'O microserviço ms-gw-danfe-v2-service teve a quantidade de réplicas aumentada no Terraform de produção. Isso melhora a capacidade de processamento e reduz o tempo de geração de DANFEs em momentos de pico de emissão.',
      },
      {
        icon: '🔧',
        destaque: 'Limite de reenvio para erro E0440 no provedor NfseNacional',
        texto:
          'Quando o provedor retornava o erro E0440 (valor do serviço divergente), o sistema reenviava indefinidamente. Agora há um limite de 2 tentativas de reenvio com redução de valor. Após esse limite, o erro é retornado ao cliente, evitando loops infinitos de reenvio que travavam notas.',
      },
      {
        icon: '🏙️',
        destaque: 'Glorinha/RS ativada no provedor GOVBRv3',
        texto:
          'O município de Glorinha/RS foi ativado para emissão de NFS-e através do provedor GOVBRv3. Empresas prestadoras de serviço nesse município agora podem emitir notas fiscais de serviço eletrônicas pelo gateway.',
      },
      {
        icon: '🔧',
        destaque: 'Desativa emissão por lote para empresa específica',
        texto:
          'Uma empresa específica estava enfrentando problemas ao enviar notas em lote para a prefeitura. Foi configurada a regra de emissão unitária (1 nota por lote) para essa empresa, resolvendo falhas de processamento que ocorriam no envio agrupado.',
      },
      {
        icon: '📊',
        destaque:
          'iClips adicionada à lista de subscriptions para envio de NBS no Simples',
        texto:
          'A subscription da iClips foi incluída na lista de exceções que permite o envio do código NBS (Nomenclatura Brasileira de Serviços) mesmo para empresas optantes do Simples Nacional. Sem essa exceção, o NBS não era enviado para empresas do Simples, causando rejeição em algumas prefeituras.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento de erro do ADN no provedor EtheriumTech',
        texto:
          'O provedor EtheriumTech (ADN) retornava status HTTP 204 com mensagens de erro no corpo da resposta que não eram tratadas corretamente. O XML agora é pré-processado e sanitizado antes da desserialização, e as mensagens de erro são mapeadas adequadamente para o modelo de resposta do gateway.',
      },
      {
        icon: '🔧',
        destaque: 'Respostas HTTP 422 em XML no provedor GIFv2',
        texto:
          'O provedor GIFv2 retornava erros com status HTTP 422 que não eram capturados corretamente, gerando exceções genéricas. Agora essas respostas são tratadas como XML estruturado, permitindo que a mensagem de erro da prefeitura seja exibida ao cliente de forma legível.',
      },
      {
        icon: '🔧',
        destaque: 'Retorno de chave de acesso ADN no provedor IPM',
        texto:
          'O provedor IPM passou a retornar a chave de acesso ADN (Acesso de Dados Nacional) na resposta de emissão. Essa chave é necessária para consultas posteriores no portal nacional e agora é persistida junto com os dados da nota emitida.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de URL de Grajaú/MA',
        texto:
          'A URL do webservice de Grajaú/MA foi atualizada no ConfiguracoesMunicipios.xml. A prefeitura alterou o endereço do serviço, e sem essa atualização as emissões falhavam com erro de conexão.',
      },
      {
        icon: '🏙️',
        destaque: 'Santa Maria de Itabira/MG migrada para BethaV3',
        texto:
          'O município de Santa Maria de Itabira/MG foi migrado do provedor anterior para o BethaV3. A prefeitura trocou de sistema de NFS-e, exigindo atualização das URLs, namespace e configurações no gateway para manter a emissão funcionando.',
      },
      {
        icon: '📊',
        destaque: 'Atualização de cenário de alíquota para Cabo Frio/RJ',
        texto:
          'O cenário de envio de alíquota ISS para Cabo Frio/RJ foi atualizado, incluindo a URL de produção. A prefeitura exige o envio da alíquota em formato específico, e a configuração foi ajustada para atender ao novo requisito.',
      },
    ],
  },
  {
    tag: '21/05/2026',
    titulo: 'Quarta-feira — 21 de Maio',
    data: '21/05/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Correção de serialização XML em provedores ABRASF v2',
        texto:
          'Um problema na serialização XML dos provedores que usam o padrão ABRASF v2 causava falhas na comunicação com prefeituras. O fix corrige a geração do XML para garantir que os campos sejam serializados no formato correto esperado pelo webservice.',
      },
      {
        icon: '🔧',
        destaque: 'Endpoint de sincronização de NF-e (botão sincronizar)',
        texto:
          'Foi implementado um novo endpoint para ser usado pelo botão de sincronizar NF-e no painel. Esse endpoint permite que o usuário force a sincronização de uma nota específica quando ela fica travada em status intermediário, sem precisar aguardar o processamento automático.',
      },
      {
        icon: '📊',
        destaque: 'Inclusão de empresa na lista de envio de alíquota ISS',
        texto:
          'Uma empresa específica foi adicionada à lista de empresas que sempre enviam alíquota ISS mesmo sendo optantes do Simples Nacional. Sem essa configuração, a prefeitura rejeitava as notas por falta da informação de alíquota.',
      },
      {
        icon: '🏙️',
        destaque: 'HM2: ajuste de série do RPS e alíquota ISS em Carpina/PE',
        texto:
          'Para o município de Carpina/PE no provedor HM2, foi implementada validação da série do RPS (deve ser numérica entre 1 e 49.999) e zeragem da alíquota ISS para empresas do Simples Nacional quando o ISS não é retido na fonte. A prefeitura rejeitava notas com série inválida ou alíquota preenchida indevidamente.',
      },
      {
        icon: '📊',
        destaque: 'Ajuste no envio do codigoNBS para conter somente números',
        texto:
          'O campo codigoNBS (Nomenclatura Brasileira de Serviços) estava sendo enviado com caracteres não numéricos (pontos, traços) que causavam rejeição em algumas prefeituras. Agora o campo é sanitizado para conter apenas dígitos antes do envio.',
      },
      {
        icon: '🔧',
        destaque: 'Ajuste no tipo de retenção para privilegiar o retido',
        texto:
          'O cálculo do tipo de retenção de PIS/COFINS foi ajustado para privilegiar o cenário de retenção quando há ambiguidade. Antes, em alguns casos o sistema enviava como não retido mesmo havendo valores de retenção, causando divergência fiscal no PDF da nota.',
      },
      {
        icon: '🏙️',
        destaque: 'Santa Inês/MA atualizada para ABRASF 2.02 com ajuste de NBS',
        texto:
          'O município de Santa Inês/MA foi atualizado para a versão 2.02 do padrão ABRASF. Além da versão, foram ajustados o envio da data de emissão do RPS e o campo codigoNBS, que agora é limpo (apenas números) antes do envio. A prefeitura exigia esses formatos específicos.',
      },
      {
        icon: '📊',
        destaque:
          'Portal Nacional: exceção de envio de NBS para empresa do Simples',
        texto:
          'Foi adicionada uma exceção no Portal Nacional para permitir o envio do código NBS em notas de empresas optantes do Simples Nacional. Normalmente o NBS não é enviado para Simples, mas algumas integrações específicas exigem esse campo para processamento correto.',
      },
      {
        icon: '🔧',
        destaque: 'Correção no envio do ValorInss',
        texto:
          'O valor do INSS retido estava sendo enviado incorretamente em alguns cenários, causando divergência entre o valor calculado e o valor informado à prefeitura. A correção garante que o ValorInss seja preenchido corretamente conforme as regras de retenção configuradas.',
      },
      {
        icon: '📊',
        destaque:
          'Código de serviço nacional com desdobramento municipal no ISSIntel',
        texto:
          'O provedor ISSIntel passou a aceitar o envio do código de serviço nacional com desdobramento municipal. Foi criado o método FormatarCodigoServicoNacionalCodigoTributacaoMunicipio que sanitiza, valida e separa o código em CodigoServicoNacional e CodigoTributacaoMunicipio, atendendo ao formato exigido pela prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Ajuste na sincronia do provedor GIFs',
        texto:
          'A sincronização de notas no provedor GIFs estava falhando em alguns cenários. O ajuste corrige o fluxo de consulta para garantir que as notas sejam sincronizadas corretamente após o processamento pela prefeitura.',
      },
      {
        icon: '📊',
        destaque: 'Envio de IBSCBS liberado para subscription da Sankhya',
        texto:
          'A subscription da Sankhya foi adicionada à lista de integrações que enviam os campos IBS/CBS (impostos da reforma tributária). Isso permite que empresas integradas via Sankhya emitam notas com os novos campos tributários exigidos por algumas prefeituras.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento para emissão sem assinatura digital',
        texto:
          'Foi adicionado tratamento para permitir emissão de NFS-e sem assinatura do XML com certificado digital em provedores que não exigem essa assinatura. Esses provedores usam apenas usuário e senha para autenticação, e a tentativa de assinar causava erro quando o certificado não estava configurado.',
      },
      {
        icon: '🏙️',
        destaque:
          'Portal Nacional: Nibo adicionada à exceção de NBS para Simples',
        texto:
          'A integração Nibo foi incluída na lista de exceções que permite o envio do código NBS para empresas do Simples Nacional no Portal Nacional. Sem essa exceção, notas emitidas via Nibo para empresas do Simples eram rejeitadas por falta do NBS.',
      },
      {
        icon: '🏙️',
        destaque: 'Piedade/SP migrada para provedor GissOnline',
        texto:
          'O município de Piedade/SP teve seu provedor atualizado para GissOnline. A prefeitura migrou de sistema de NFS-e, exigindo atualização das configurações no gateway para manter a emissão funcionando.',
      },
      {
        icon: '🏙️',
        destaque: 'Barra do Choça/BA ativada no provedor EeLv3',
        texto:
          'O município de Barra do Choça/BA foi ativado para emissão de NFS-e através do provedor EeLv3. Empresas prestadoras de serviço nesse município agora podem emitir notas pelo gateway.',
      },
      {
        icon: '🔧',
        destaque: 'Implementação de consulta por RPS no provedor CoplanV2',
        texto:
          'Foi implementada a operação de consulta de NFS-e por número de RPS no provedor CoplanV2. Essa operação é essencial para sincronização — quando o sistema precisa verificar se uma nota específica foi processada pela prefeitura. Sem ela, notas ficavam travadas em status "em emissão" sem retorno.',
      },
    ],
  },
  {
    tag: '20/05/2026',
    titulo: 'Terça-feira — 20 de Maio',
    data: '20/05/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Cenário de extração de lote no SIGISS v1',
        texto:
          'O provedor SIGISS v1 apresentava falhas ao extrair o número da NF-e em cenários onde a mensagem de erro tinha formato diferente do esperado. A lógica de leitura de erros foi reorganizada para tentar extrair o número da nota a partir de mensagens alternativas e campos de resposta diferentes, resolvendo notas que ficavam travadas.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de URL de São Gabriel do Oeste/MS no Fiorilli',
        texto:
          'A URL do webservice de São Gabriel do Oeste/MS no provedor Fiorilli foi atualizada. A prefeitura alterou o endereço do serviço e sem essa correção as emissões falhavam com timeout ou erro de conexão.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de XML declaration duplicado na tag ListaNfse',
        texto:
          'Algumas prefeituras retornavam a resposta de consulta de lote com uma declaração XML duplicada dentro da tag ListaNfse, causando erro de desserialização no gateway. Agora o XML é pré-processado para remover declarações duplicadas antes de ser interpretado.',
      },
      {
        icon: '🔗',
        destaque:
          'GIAPv2: endpoints de Vinhedo/SP atualizados para domínio Balker',
        texto:
          'Os endpoints do provedor GIAPv2 para Vinhedo/SP foram atualizados para o novo domínio Balker. A empresa responsável pelo sistema da prefeitura migrou de domínio, e sem essa atualização as emissões falhavam.',
      },
      {
        icon: '📊',
        destaque:
          'PIS/COFINS apuração própria no NfseNacional integração alternativa',
        texto:
          'Foi implementado o cálculo de apuração própria de PIS/COFINS na emissão via NFS-e Nacional para a integração alternativa (sem certificado). O valor líquido da nota era calculado incorretamente quando havia retenção de PIS/COFINS. Agora o sistema calcula corretamente vPisProprio, vCofinsProprio, vBCPisCofins e normaliza o CST.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de endpoint de Nova Resende/MG',
        texto:
          'O endpoint do webservice de Nova Resende/MG foi atualizado. A prefeitura alterou a URL do serviço de NFS-e, e a configuração foi corrigida para manter a emissão funcionando.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento de num_rps nulo na consulta de lote',
        texto:
          'Na desserialização da resposta de consulta de lote, o campo num_rps podia vir nulo em algumas respostas de prefeituras, causando erro de conversão. Agora o valor nulo é substituído por 0 (padrão), evitando a exceção e permitindo que a consulta prossiga normalmente.',
      },
      {
        icon: '🏙️',
        destaque: 'Itacoatiara/AM migrada para BethaV3',
        texto:
          'O município de Itacoatiara/AM foi migrado para o provedor BethaV3. A prefeitura trocou de sistema de NFS-e, exigindo atualização completa das configurações (URLs, namespace, versão) no gateway.',
      },
      {
        icon: '🔧',
        destaque: 'Atualização de CNPJ no ConfigurarCertificadoTesteCommand',
        texto:
          'O CNPJ utilizado no comando de configuração de certificado de teste foi atualizado. Essa mudança é necessária para que os testes automatizados de emissão em homologação funcionem corretamente com o certificado digital válido.',
      },
      {
        icon: '🏙️',
        destaque: 'Barra do Choça/BA ativada no provedor EeLv3',
        texto:
          'Configuração complementar do município de Barra do Choça/BA no provedor EeLv3, incluindo ajustes nos testes automatizados para validar o cenário de emissão nesse município.',
      },
      {
        icon: '📊',
        destaque:
          'Tratamento de subscriptionID para MunicipioIncidenciaService no SIGISSv5',
        texto:
          'Foi adicionado tratamento especial no provedor SIGISSv5 para uma subscription específica, permitindo que a dedução do município de incidência seja feita pelo MunicipioIncidenciaService. Isso resolve casos onde o município de incidência era determinado incorretamente, causando rejeição pela prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Mapeamento do erro ER004 no provedor GIFv2',
        texto:
          'O código de erro ER004 do provedor GIFv2 agora é tratado como erro estruturado na resposta XML, em vez de lançar uma exceção de comunicação. Isso permite que a mensagem de erro da prefeitura seja exibida ao cliente de forma legível, em vez de gerar um erro genérico de "falha de comunicação".',
      },
      {
        icon: '🏙️',
        destaque: 'Atualiza Salto Grande/SP para provedor ISSMAP',
        texto:
          'O município de Salto Grande/SP foi migrado para o provedor ISSMAP. A prefeitura trocou de sistema de NFS-e, e as configurações foram atualizadas com as novas URLs e parâmetros do provedor.',
      },
      {
        icon: '🔧',
        destaque: 'Desabilita envio em lote para empresa específica',
        texto:
          'Uma empresa específica estava enfrentando problemas ao enviar notas em lote. Foi configurada a regra de emissão unitária (1 nota por lote) para essa empresa, resolvendo falhas de processamento que ocorriam quando múltiplas notas eram agrupadas.',
      },
    ],
  },
  {
    tag: '19/05/2026',
    titulo: 'Segunda-feira — 19 de Maio',
    data: '19/05/2026',
    itens: [
      {
        icon: '📊',
        destaque:
          'Tratamento de subscriptionID para MunicipioIncidenciaService',
        texto:
          'Foi adicionado tratamento no provedor NfseNacional para que uma subscription específica utilize o MunicipioIncidenciaService para deduzir o município de incidência. Isso corrige cenários onde o município era determinado incorretamente, causando rejeição pela prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Correção de ticket FRCAP-3763',
        texto:
          'Correção aplicada conforme solicitação do ticket FRCAP-3763, ajustando o comportamento do sistema para o cenário reportado pela equipe de suporte.',
      },
      {
        icon: '🏙️',
        destaque:
          'Expansão da lógica de tratamento de cidades no ServicoControleLotesNFe',
        texto:
          'A lógica de tratamento de cidades no serviço de controle de lotes foi expandida para cobrir novos cenários. Isso permite que o sistema identifique e processe corretamente notas de municípios que possuem regras especiais de envio.',
      },
      {
        icon: '🔧',
        destaque: 'Correção de ticket SUSFS-7546',
        texto:
          'Correção aplicada conforme solicitação do ticket SUSFS-7546, resolvendo um problema reportado no fluxo de emissão que afetava empresas específicas.',
      },
      {
        icon: '📊',
        destaque: 'Ajuste na validação de NBS para o serviço 99.01.01',
        texto:
          'A validação do código NBS no provedor GovDigital foi ajustada para permitir que o serviço 99.01.01 (outros serviços) seja emitido sem NBS obrigatório. Antes, todas as notas sem NBS eram rejeitadas com erro GW0001, mas para esse código de serviço específico o NBS não é aplicável.',
      },
      {
        icon: '🌐',
        destaque:
          'Melhoria no tratamento de exportação de notas para o exterior',
        texto:
          'O fluxo de exportação de notas para tomadores do exterior recebeu melhorias na cobertura de testes e no tratamento de campos específicos. Isso garante maior confiabilidade na emissão de notas para clientes internacionais.',
      },
      {
        icon: '🔧',
        destaque:
          'Remoção de MunicipioIncidencia quando ISS não retido e prestação fora do município (CPQD)',
        texto:
          'No provedor CPQD, quando o ISS não é retido na fonte e a prestação do serviço ocorre fora do município da empresa, o campo MunicipioIncidencia agora é removido. Antes, esse campo era enviado preenchido incorretamente, causando rejeição pela prefeitura de Camaçari/BA e outros municípios CPQD.',
      },
      {
        icon: '🔧',
        destaque:
          'Mapeamento do erro ER004 no GIFv2 para retornar XML estruturado',
        texto:
          'O código de erro ER004 foi adicionado à lista de erros tratados no provedor GIFv2. Agora a resposta é processada como XML estruturado em vez de lançar exceção, permitindo que o cliente veja a mensagem real de erro da prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Desabilita envio em lote para empresa específica',
        texto:
          'Uma empresa foi adicionada à lista de exceções que enviam notas uma por vez (em vez de em lote). A prefeitura rejeitava o lote agrupado, e com a emissão unitária o problema foi resolvido.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de acentuação no endereço do tomador',
        texto:
          'O provedor estava retornando erro genérico de tamanho de arquivo quando o endereço ou nome do tomador continha acentuação. Foi adicionado RemoveAccent nos campos Logradouro, Numero, Complemento e Bairro do endereço do tomador, resolvendo o problema.',
      },
      {
        icon: '📊',
        destaque:
          'Envio de apuração própria zerada para ContaAzul (PIS/COFINS)',
        texto:
          'Para a integração ContaAzul, quando o prestador não informa o bloco pisCofinsApuracaoPropria, o sistema agora envia os valores zerados (vBCPisCofins, alíquotas e valores = 0) com CST padrão "01". Antes, a ausência desses campos causava erro de validação na prefeitura.',
      },
      {
        icon: '🔧',
        destaque:
          'Verificação nula em dadosTomador para evitar NullReferenceException',
        texto:
          'Foi adicionada verificação de nulidade no objeto dadosTomador antes de acessar IdentificacaoTomador no provedor NotaControl. Notas sem tomador (consumidor final) causavam NullReferenceException que travava o processamento. Agora o campo é acessado com operador null-conditional.',
      },
      {
        icon: '📊',
        destaque: '[WebApi] Novo campo regimeApuracaoTributosSN nas Empresas',
        texto:
          'Foi adicionado o campo RegimeApuracaoTributosSN (regime de apuração de tributos para Simples Nacional) no modelo de Empresa. O campo é persistido em ExtendedProperties (JSON) e permite que integrações informem o regime de apuração, necessário para o cálculo correto de tributos na reforma tributária.',
      },
      {
        icon: '🌐',
        destaque: 'Ajuste na emissão para tomador do exterior no GovDigital',
        texto:
          'A emissão de NFS-e para tomadores do exterior no provedor GovDigital foi corrigida. Foram criados modelos específicos (GovDigitalIdentificacaoTomador com NIF/CodNaoNIF, GovDigitalComercioExterior) e ajustada a serialização XML para o formato exigido pela prefeitura. Campos como cidade e país agora são serializados como texto em vez de numérico.',
      },
      {
        icon: '🏙️',
        destaque: 'Salto Grande/SP atualizada para provedor ISSMAP',
        texto:
          'O município de Salto Grande/SP foi migrado para o provedor ISSMAP no ConfiguracoesMunicipios.xml. A prefeitura trocou de sistema de NFS-e e as configurações foram atualizadas.',
      },
      {
        icon: '🌐',
        destaque:
          'Validação de código postal obrigatório para tomador estrangeiro (NfseNacionalV2)',
        texto:
          'No provedor NfseNacionalV2, foi adicionada validação que exige o código postal do tomador estrangeiro. Notas para o exterior sem CEP agora retornam erro GW3003 com mensagem clara, em vez de serem rejeitadas pela prefeitura com erro genérico.',
      },
      {
        icon: '🏙️',
        destaque: 'Benedito Novo/SC ativada no provedor IPM',
        texto:
          'O município de Benedito Novo/SC foi ativado para emissão de NFS-e através do provedor IPM. Empresas prestadoras de serviço nesse município agora podem emitir notas pelo gateway.',
      },
      {
        icon: '🔧',
        destaque:
          'Ajuste no tipo de retenção para valor líquido no PDF (GissOnline)',
        texto:
          'O cálculo do valor líquido no PDF da NFS-e para o provedor GissOnline foi ajustado para considerar o tipo de retenção de PIS/COFINS/CSLL. Antes, o valor líquido era calculado sem considerar o tipo de retenção, gerando divergência entre o valor exibido no PDF e o valor real da nota.',
      },
      {
        icon: '📊',
        destaque: 'Zera alíquota e valores de IBSCBS para CST 410 (imunidade)',
        texto:
          'Quando o CST do IBSCBS é 410 (imunidade), as alíquotas e valores de IBS/CBS agora são zerados automaticamente. Antes, notas com imunidade tributária eram enviadas com valores de IBS/CBS preenchidos, causando rejeição pela prefeitura que esperava valores zerados nesse cenário.',
      },
      {
        icon: '🔧',
        destaque:
          'Atualização da validação de discriminação na consulta por RPS',
        texto:
          'A validação da discriminação do serviço na consulta por RPS (ABRASF v2) foi refatorada. O método CompararDiscriminacaoServico agora normaliza o texto (remove diacríticos, quebras de linha, caracteres especiais) antes de comparar com a discriminação esperada. Isso resolve falsos negativos na sincronização de notas.',
      },
      {
        icon: '🔧',
        destaque: 'Validação de tomador nulo no provedor NotaControl',
        texto:
          'Adicionada verificação null-conditional no acesso a dadosTomador.IdentificacaoTomador para evitar NullReferenceException. Notas sem tomador informado (consumidor final) agora são processadas corretamente sem gerar exceção.',
      },
      {
        icon: '🔧',
        destaque:
          'Remoção de caracteres XML inválidos na descrição do serviço (xDescServ)',
        texto:
          'Caracteres inválidos para XML na descrição do serviço (xDescServ) causavam falha na geração do XML com assinatura digital. Foi adicionado RemoveInvalidXmlChars() após o Trim() na montagem da tag, sanitizando o conteúdo antes da assinatura.',
      },
      {
        icon: '🏙️',
        destaque: 'Itaju/SP ativada no provedor Fiorilli',
        texto:
          'O município de Itaju/SP foi ativado para emissão de NFS-e através do provedor Fiorilli. Empresas prestadoras de serviço nesse município agora podem emitir notas pelo gateway.',
      },
      {
        icon: '📊',
        destaque: 'Inclusão de empresaID na lista idsNovoRespTecnico',
        texto:
          'Uma empresa foi adicionada à lista idsNovoRespTecnico para que o CNPJ seja considerado no cadastro de responsável técnico na geração do XML da NFe. Sem essa inclusão, o XML era gerado sem os dados do responsável técnico, causando rejeição pela SEFAZ.',
      },
      {
        icon: '🏙️',
        destaque: 'Buenópolis/MG ativada no provedor Sintese',
        texto:
          'O município de Buenópolis/MG foi ativado para emissão de NFS-e através do provedor Sintese. Empresas prestadoras de serviço nesse município agora podem emitir notas pelo gateway.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento para consulta por RPS no PublicaV1',
        texto:
          'Notas com erro "Problemas ao processar arquivo" estavam sendo autorizadas na prefeitura mas o gateway não conseguia sincronizar. Foi adicionado tratamento para chamar a consulta por RPS nesses casos, permitindo recuperar a nota autorizada e atualizar o status no sistema.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção do campo ref da observação no NFS-e Nacional',
        texto:
          'O campo de referência de ID nas observações da NFS-e Nacional havia sido adicionado provisoriamente para evitar duplicidade, mas estava gerando problemas. Foi removido pois a duplicidade já é tratada por outro mecanismo.',
      },
    ],
  },
  {
    tag: '18/05/2026',
    titulo: 'Domingo — 18 de Maio',
    data: '18/05/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Restauração de encoding no BarueriProvedorNFeTest',
        texto:
          'O encoding original do arquivo de teste do provedor Barueri foi restaurado e os testes de exportação foram readicionados. Uma alteração anterior havia corrompido o encoding do arquivo, causando falhas nos testes automatizados de emissão para o exterior.',
      },
      {
        icon: '🌐',
        destaque: 'Lógica de exportação para o exterior no provedor Barueri',
        texto:
          'Foi adicionada a lógica de exportação para tomadores do exterior no provedor Barueri, incluindo melhorias na cobertura de testes. Notas para clientes internacionais emitidas em Barueri/SP agora são processadas corretamente com os campos específicos de comércio exterior.',
      },
    ],
  },
  {
    tag: '17/05/2026',
    titulo: 'Sábado — 17 de Maio',
    data: '17/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '16/05/2026',
    titulo: 'Sexta-feira — 16 de Maio',
    data: '16/05/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Mapeamento do erro E0014 no GIFv2 para evitar exceção',
        texto:
          'O código de erro E0014 do provedor GIFv2 foi mapeado para ser tratado como resposta estruturada em vez de lançar exceção de comunicação. Além disso, a mensagem de "RPS já informado" foi atualizada para um texto mais claro, facilitando o entendimento pelo cliente sobre o que aconteceu.',
      },
      {
        icon: '🔧',
        destaque:
          'Mensagem de tratamento para emissão em homologação (NotaControl)',
        texto:
          'As URLs de homologação do provedor NotaControl na versão ABRASF foram desativadas pela prefeitura. Foi adicionada uma mensagem de tratamento informando que o ambiente de homologação não está disponível, em vez de retornar erro genérico de conexão.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de URL de Heliodora/MG',
        texto:
          'A URL do webservice de Heliodora/MG foi atualizada no ConfiguracoesMunicipios.xml. A prefeitura alterou o endereço do serviço de NFS-e.',
      },
      {
        icon: '📊',
        destaque:
          'Valores default para TpRetPisCofins e SituacaoTributaria no ISSIntel',
        texto:
          'Foram adicionados valores padrão para os campos TpRetPisCofins ("0") e SituacaoTributaria ("00") no provedor ISSIntel. Notas sem PIS e COFINS informados agora possuem valores válidos, evitando campos nulos que causavam erro de validação na transmissão para a prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Ajuste no envio de impostos retidos',
        texto:
          'O envio de impostos retidos (PIS, COFINS, CSLL, IR, INSS) foi ajustado para garantir que os valores sejam calculados e enviados corretamente conforme o tipo de retenção configurado. Antes, em alguns cenários os valores retidos não eram enviados ou eram enviados com valor incorreto.',
      },
      {
        icon: '🏙️',
        destaque: 'Raposos/MG migrada para BethaV3',
        texto:
          'O município de Raposos/MG foi migrado para o provedor BethaV3. A prefeitura trocou de sistema de NFS-e, exigindo atualização das URLs e configurações no gateway.',
      },
      {
        icon: '📊',
        destaque:
          'Inclusão de empresaID na regra de incidência para município do prestador',
        texto:
          'Uma empresa específica foi adicionada à regra de incidência que considera o município do prestador. Isso resolve cenários onde o município de incidência era determinado incorretamente para essa empresa, causando rejeição pela prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Atualização da consulta por RPS (ABRASF v2)',
        texto:
          'A consulta por RPS no padrão ABRASF v2 foi atualizada para tratar prefeituras que removem o nó XML do tomador quando este não possui documento (CPF/CNPJ). Foi introduzida validação opcional da discriminação do serviço comparando com a descrição do item da nota.',
      },
      {
        icon: '📊',
        destaque: 'Envio de CST 00 quando apuração própria zerada (GissOnline)',
        texto:
          'No provedor GissOnline, quando a apuração própria de PIS/COFINS está zerada, o sistema agora envia CST "00" e define TipoRetencaoPisCofins = 0. Antes, o CST era enviado incorretamente, causando divergência no cálculo tributário da prefeitura.',
      },
      {
        icon: '📊',
        destaque:
          'Inclusão de empresa na regra de emissão unitária para Sobral/CE (SpeedGov)',
        texto:
          'Uma empresa foi adicionada à regra de emissão unitária por lote (1 NF por lote) para o provedor SpeedGov em Sobral/CE. A prefeitura rejeitava lotes com múltiplas notas dessa empresa, e com a emissão unitária o problema foi resolvido.',
      },
      {
        icon: '📊',
        destaque: 'Envio de alíquota IBS/CBS para empresa em Limeira/SP',
        texto:
          'Foi implementado o envio de alíquota IBS e CBS para uma empresa específica optante do Simples Nacional em Limeira/SP no provedor IIBrasil. A prefeitura exige esses campos da reforma tributária para emissão, e sem eles as notas eram rejeitadas.',
      },
      {
        icon: '🔧',
        destaque: 'Atualização de Rio Doce/MG para provedor Futurize',
        texto:
          'O município de Rio Doce/MG teve seu provedor atualizado para Futurize no ConfiguracoesMunicipios.xml. A prefeitura migrou de sistema de NFS-e.',
      },
      {
        icon: '🌐',
        destaque: 'Correção no PaisPrestacaoServico para exterior em Barueri',
        texto:
          'No provedor Barueri, quando a nota é para tomador do exterior, o campo PaisPrestacaoServico agora é preenchido com o país do tomador. Antes, o campo ficava vazio ou com valor incorreto, causando rejeição pela prefeitura em notas de exportação de serviço.',
      },
    ],
  },
  {
    tag: '15/05/2026',
    titulo: 'Quinta-feira — 15 de Maio',
    data: '15/05/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Retirada de apikey dos testes',
        texto:
          'As apikeys foram removidas dos arquivos de teste para evitar exposição acidental de credenciais em repositórios. Os testes agora utilizam mocks ou variáveis de ambiente para autenticação.',
      },
      {
        icon: '🔧',
        destaque:
          'Correção na consulta de lote — campo ultima_nota ajustado para 0',
        texto:
          'O campo ultima_nota na consulta de lote estava configurado como 1, fazendo com que a consulta sempre retornasse a última nota em vez da nota específica solicitada. Ajustado para 0, garantindo que a nota correta seja retornada na consulta.',
      },
      {
        icon: '🔧',
        destaque:
          'Reenvio de lote quando tipo de dedução não permitido pelo município',
        texto:
          'Quando o tipo de dedução utilizado não era permitido pelo município de incidência, o lote falhava sem possibilidade de correção automática. Agora o sistema detecta esse cenário e reenvia o lote com o tipo de dedução correto para o município.',
      },
      {
        icon: '📊',
        destaque:
          'Soma de PIS, COFINS e CSLL retidos na tag ValorCsll (São Paulo)',
        texto:
          'Para o provedor de São Paulo, os valores de PIS, COFINS e CSLL retidos agora são somados na tag ValorCsll e o tipo de retenção é enviado corretamente. Foi criado o helper NfeServicoCalculoHelper com métodos para determinar o tipo de retenção e calcular os impostos federais retidos conforme as regras da prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de emojis da descrição de serviço (Hotmart)',
        texto:
          'Descrições de serviço que continham emojis causavam falha na geração do XML ou rejeição pela prefeitura. Os emojis agora são removidos automaticamente antes do envio, garantindo que apenas caracteres válidos sejam incluídos na nota fiscal.',
      },
      {
        icon: '🏙️',
        destaque: 'Palma Sola/SC migrada para IPMv2',
        texto:
          'O município de Palma Sola/SC foi migrado para o provedor IPMv2. A prefeitura atualizou seu sistema de NFS-e, exigindo atualização das configurações no gateway.',
      },
      {
        icon: '🔧',
        destaque:
          'Correção na descrição original de serviços municipais de Barueri',
        texto:
          'A DescricaoOriginal dos serviços municipais de Barueri estava incorreta, causando divergência na sincronização de notas. O campo foi corrigido para refletir a descrição real cadastrada na prefeitura, resolvendo problemas de validação na consulta.',
      },
      {
        icon: '🏙️',
        destaque: 'Santana do Ipanema/AL aderiu ao Portal Nacional',
        texto:
          'O município de Santana do Ipanema/AL aderiu ao Portal Nacional de NFS-e. As configurações foram adicionadas ao gateway para permitir emissão de notas nesse município.',
      },
      {
        icon: '🏙️',
        destaque: 'São Sebastião da Amoreira/PR aderiu ao Portal Nacional',
        texto:
          'O município de São Sebastião da Amoreira/PR aderiu ao Portal Nacional de NFS-e. As configurações foram adicionadas ao gateway.',
      },
      {
        icon: '🏙️',
        destaque: 'Caconde/SP aderiu ao Portal Nacional',
        texto:
          'O município de Caconde/SP aderiu ao Portal Nacional de NFS-e. As configurações foram adicionadas ao gateway para permitir emissão.',
      },
      {
        icon: '🏙️',
        destaque: 'Riachão do Jacuípe/BA aderiu ao Portal Nacional',
        texto:
          'O município de Riachão do Jacuípe/BA aderiu ao Portal Nacional de NFS-e. As configurações foram adicionadas ao gateway.',
      },
      {
        icon: '📊',
        destaque: '[Dashboard] TraceEvent para alterações de ApiKey',
        texto:
          'Foi adicionada telemetria para rastrear alterações de ApiKey no dashboard. Agora quando uma ApiKey é regenerada, o sistema registra um TraceEvent com SubscriptionId, email do usuário, IP (via X-Forwarded-For) e User-Agent. Isso permite auditoria completa de quem alterou credenciais de API.',
      },
      {
        icon: '🔧',
        destaque:
          'ValidationException para CodigoServicoMunicipio incorreto (NotaJoseenseV2)',
        texto:
          'A validação do campo Código CNAE no provedor NotaJoseenseV2 foi ajustada para exigir entre 7 e 9 dígitos. Antes, valores com até 6 dígitos eram aceitos e causavam rejeição pela prefeitura com erro genérico. Agora o erro GW é retornado imediatamente com mensagem clara.',
      },
      {
        icon: '🔧',
        destaque: 'Mapeamento do Error3450 no GIFv2 para retornar XML',
        texto:
          'O código de erro Error3450 do provedor GIFv2 foi adicionado à lista de erros tratados como resposta XML estruturada. Antes, esse erro gerava exceção de comunicação genérica. Agora a mensagem real da prefeitura é retornada ao cliente.',
      },
      {
        icon: '📊',
        destaque: 'Envio de alíquota IBS/CBS para empresa em Ilhabela/SP',
        texto:
          'Foi adicionado suporte ao envio de alíquotas IBS/CBS para empresas optantes do Simples Nacional em Ilhabela/SP no provedor IIBrasil. A prefeitura exige esses campos da reforma tributária, e sem eles as notas eram rejeitadas.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento no nome do tomador — remoção de acentuação',
        texto:
          'O nome do tomador com acentuação causava erro genérico de tamanho de arquivo na prefeitura. Foi adicionado RemoveAccent no campo nome do tomador, resolvendo o problema identificado em múltiplos tickets de suporte.',
      },
      {
        icon: '📊',
        destaque:
          'Inclusão de empresaID na lista de envio de alíquota (Contagem/MG)',
        texto:
          'Uma empresa de Contagem/MG foi adicionada à lista de empresas que sempre enviam alíquota ISS no provedor GOVBRv3, mesmo sendo optante do Simples Nacional. A prefeitura exige a alíquota para processamento correto da nota.',
      },
      {
        icon: '🏙️',
        destaque: 'Ibaté/SP aderiu ao Portal Nacional',
        texto:
          'O município de Ibaté/SP aderiu ao Portal Nacional de NFS-e. As configurações foram atualizadas no gateway, migrando do provedor anterior para o Portal Nacional.',
      },
      {
        icon: '📊',
        destaque: 'Ajuste na regra de Substituição Tributária no EGoverneISS',
        texto:
          'A regra de ativação da Substituição Tributária no provedor EGoverneISS foi ajustada para não exigir mais que o município da prestação coincida com o do prestador. Agora basta que o tomador seja pessoa jurídica (CNPJ com 14 dígitos) para ativar a substituição, independente do município.',
      },
      {
        icon: '🔧',
        destaque: 'Validação na consulta de lote do BethaV3',
        texto:
          'Foi adicionada validação de integridade na consulta de lote do provedor BethaV3. Agora o sistema verifica se a chave de acesso retornada no XML corresponde à chave esperada. Se for diferente, o lote é marcado como "ainda não processado" em vez de aceitar uma nota errada.',
      },
      {
        icon: '📊',
        destaque: 'Campos da reforma tributária no provedor Ginfes',
        texto:
          'Foi implementado suporte completo aos campos da reforma tributária (RTC) no provedor Ginfes. Mais de 15 novos modelos foram criados (GINFESInfRps, GINFESServico, TCInfoTributacao, TCTribFederal, TCRTCInfoIBSCBS, etc.) e a classe GINFESRecepcionarLoteNFeV2 foi implementada para enviar os dados tributários no formato exigido.',
      },
    ],
  },
  {
    tag: '14/05/2026',
    titulo: 'Quarta-feira — 14 de Maio',
    data: '14/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
];
