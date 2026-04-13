var changelogData = [
  {
    tag: '13/04/2026',
    titulo: 'Segunda-feira — 13 de Abril',
    data: '13/04/2026',
    itens: [
      {
        icon: '🌐',
        destaque: 'Cidade de prestação via metadados para exterior',
        texto:
          'Novo método ResolverLocalPrestacaoServicoFixada no ProvedorNFeServicoBase que permite configurar o código e nome da cidade de prestação de serviço via ExtendedProperties da empresa. Isso resolve cenários de emissão para o exterior onde a cidade de prestação precisa ser fixada como 9999999 (Exterior) com base nos metadados da empresa, sem depender de regras hardcoded.',
      },
      {
        icon: '🔧',
        destaque: 'Limpeza de mensagens de erro no FgMaiss',
        texto:
          'Implementa o método LimparMensagemErro que remove tags HTML, caracteres especiais e formatação desnecessária das mensagens de erro retornadas pelas prefeituras no provedor FgMaiss. Aplicado nas operações de Cancelar, Recepcionar e RecepcionarV2, melhorando a legibilidade das mensagens exibidas ao usuário.',
      },
      {
        icon: '🆕',
        destaque:
          'São João Batista do Glória/MG — consulta por RPS no MemoryV2',
        texto:
          'Adiciona web service reference para São João Batista do Glória/MG no provedor MemoryV2. Implementa a operação ConsultarNfePorRps que permite consultar notas individuais por número de RPS. Também adiciona novos métodos no ProvedorNFeWS para suportar a consulta de NFS-e.',
      },
      {
        icon: '🆕',
        destaque: 'WebFiscoTecnologia — novo web service reference',
        texto:
          'Adiciona referências de web service para o provedor WebFiscoTecnologia no FgMaiss. Atualiza namespaces e endpoints dos contratos de serviço. Inclui novos testes de emissão padrão V1 e atualização de configurações de teste para Aracaju/SE.',
      },
    ],
  },
  {
    tag: '12/04/2026',
    titulo: 'Domingo — 12 de Abril',
    data: '12/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum PR mergeado neste dia (domingo).',
      },
    ],
  },
  {
    tag: '11/04/2026',
    titulo: 'Sábado — 11 de Abril',
    data: '11/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum PR mergeado neste dia (sábado).',
      },
    ],
  },
  {
    tag: '10/04/2026',
    titulo: 'Sexta-feira — 10 de Abril',
    data: '10/04/2026',
    itens: [
      {
        icon: '🆕',
        destaque: 'UsaNBS para Hotmart no provedor FgMaiss',
        texto:
          'Adiciona lógica no método ObterCaracteristicasCore do provedor FgMaiss para determinar dinamicamente se a empresa Hotmart deve enviar o campo NBS. Antes essa configuração era fixa, agora é calculada com base nas características da empresa.',
      },
      {
        icon: '🧮',
        destaque: 'Zera pTotTribFed para Franca/SP e Mogi das Cruzes/SP',
        texto:
          'Estende a zeragem do percentual de tributos federais (pTotTribFed) para Franca/SP e Mogi das Cruzes/SP. Quando a nota não possui tributos federais discriminados individualmente, o percentual total é zerado para evitar rejeição pela prefeitura, que não aceita o campo preenchido sem os valores detalhados.',
      },
    ],
  },
  {
    tag: '09/04/2026',
    titulo: 'Quarta-feira — 09 de Abril',
    data: '09/04/2026',
    itens: [
      {
        icon: '🌐',
        destaque: 'Ajuste exportação portal nacional + cancelamento GissOnline',
        texto:
          'Duas mudanças importantes: (1) No portal nacional, a nota agora só é considerada exportação se o serviço foi prestado fora do país (código IBGE 9999999), corrigindo cenários onde notas domésticas eram marcadas incorretamente como exportação. (2) No provedor GissOnline, foi removido o bloqueio automático de cancelamento — o sistema agora permite que o usuário tente cancelar, já que muitas cidades mudam as regras de cancelamento com frequência.',
      },
      {
        icon: '🏙️',
        destaque: 'Melhorias na consulta de NFS-e em Barueri/SP',
        texto:
          'Pacote de melhorias no provedor Barueri: logs detalhados para rastreamento do processo de consulta, resolução automática de captcha usando AntiCaptcha (substituindo o método anterior), PDF da nota agora é salvo e marcado como gerado ao consultar por RPS, e o campo txtNumeroCTS foi ajustado para 10 dígitos. Também foi expandido o reconhecimento de mensagens de erro para identificar RPS já informado.',
      },
      {
        icon: '🌐',
        destaque: 'Tomador exterior no eTransparência',
        texto:
          'Adiciona verificação se o tomador é estrangeiro para pular a atribuição de endereço brasileiro. Quando o tomador é do exterior, o sistema não tenta preencher campos de endereço nacional que causavam erro. Também define TipoLogLocPre como "Rua" após popular os campos de endereço.',
      },
      {
        icon: '🔧',
        destaque: 'Melhoria no endereço reg20 do eTransparência',
        texto:
          'Melhora a lógica de preenchimento do endereço no registro reg20: agora prefere o endereço do tomador quando disponível, com fallback automático para o endereço da empresa caso o tomador não tenha endereço cadastrado. Isso evita erros de emissão quando o tomador não possui endereço completo.',
      },
    ],
  },
  {
    tag: '08/04/2026',
    titulo: 'Terça-feira — 08 de Abril',
    data: '08/04/2026',
    itens: [
      {
        icon: '🧮',
        destaque: 'Validação base zero PIS/COFINS',
        texto:
          'Adiciona validação que lança ValidationException quando a BaseCalculoPisCofins é zero mas existem valores de PIS/COFINS a serem enviados. Antes, essa situação travava a fila de emissão silenciosamente. Agora a nota é rejeitada com mensagem clara, permitindo que o cliente corrija os dados.',
      },
      {
        icon: '🌐',
        destaque: 'ISSQN exterior e PDF para eTransparência',
        texto:
          'Tratamento completo de notas de serviço prestado no exterior (código IBGE 9999999) no provedor eTransparência: preenche campos específicos no relatório PDF com valores zerados e textos para exterior, e zera a alíquota ISS para empresa específica quando o tomador é estrangeiro. Inclui novo teste de geração de PDF para Ipatinga/MG.',
      },
      {
        icon: '🔒',
        destaque: 'Bloqueio de atualização de API key por subscription',
        texto:
          'Novo filtro BlockSubscriptionApiKeyUpdateFilter que impede a atualização de API key para subscriptions específicas. Isso protege contra alterações acidentais ou maliciosas de chaves de API em contas críticas. Configurado tanto em HML quanto em PRD.',
      },
      {
        icon: '🏙️',
        destaque: 'Múltiplas atualizações municipais e correções',
        texto:
          'Pacote de correções: retry no cancelamento para garantir consistência entre API e prefeitura, MunicípioIncidência configurado como município do prestador para Conta Azul, correção no envio de alíquota em prestação fora do município com ISS não retido, remoção de formatação do CEP do local de prestação, atualização de links de homologação de Contagem/MG e endpoint de Jardim/MS.',
      },
      {
        icon: '🆕',
        destaque: 'Consulta NFS-e por RPS com AntiCaptcha (Barueri)',
        texto:
          'Nova operação ConsultarNFeRpsV3 que implementa consulta de NFS-e por RPS via web scraping no site da prefeitura de Barueri. Inclui resolução automática de captcha usando AntiCaptcha, novo comando ConsultarLoteNFeWSCommandV3 para orquestração, e suporte a consulta por RPS na interface do provedor.',
      },
    ],
  },
  {
    tag: '07/04/2026',
    titulo: 'Segunda-feira — 07 de Abril',
    data: '07/04/2026',
    itens: [
      {
        icon: '🆕',
        destaque: 'Novo provedor GIFv2 no layout nacional',
        texto:
          'Implementação completa do novo provedor GIFv2 para emissão de NFS-e no layout nacional. Inclui todas as operações: Recepcionar lote, Consultar lote, Cancelar NF-e e Gerar PDF. Também inclui testes unitários, fake provider para testes, e registro no bootstrap de provedores.',
      },
      {
        icon: '🔧',
        destaque: 'Normaliza série RPS na consulta de lote',
        texto:
          'Cria helper NormalizarSerie que trata "-" como string vazia e aplica trim na série RPS. Isso resolve problemas de comparação onde a série vinha com espaços ou traço, causando falha na localização da nota na consulta por lote.',
      },
      {
        icon: '🏙️',
        destaque: 'Varginha/MG — remove RPS sequencial',
        texto:
          'Remove a obrigatoriedade de numeração sequencial de RPS para Varginha/MG no provedor BethaV3. Quando ocorrem erros de processamento, o número do RPS é resetado para 0 e a série para null, evitando que notas negadas consumam números de RPS desnecessariamente.',
      },
      {
        icon: '🧮',
        destaque: 'Ajustes em cClassTrib, CST PIS/COFINS e validação NBS',
        texto:
          'Três correções importantes: (1) Corrige nome da propriedade cClasssTrib para cClassTrib no provedor ModernizacaoPublica. (2) Ajusta envio do CST de PIS/COFINS para usar o valor informado pelo prestador ao invés de calcular automaticamente. (3) Adiciona validação do codigoNBS para não travar a fila quando o código é inválido ou vazio.',
      },
      {
        icon: '🏙️',
        destaque: 'Migrações de municípios para novos provedores',
        texto:
          'Cinco municípios atualizados: Arroio do Meio/RS migrado para NfseNacionalV2, Itaituba/PA para CoplanV2, Serra do Mel/RN para TinusV2, URLs de Embu das Artes/SP atualizadas, e Cotia/SP configurada para enviar código de obra no código 704. Também remove Pejuçara/RS da flag SempreEnviaAliquotaIssEmpresasSimplesNacional.',
      },
    ],
  },
  {
    tag: '06/04/2026',
    titulo: 'Domingo — 06 de Abril',
    data: '06/04/2026',
    itens: [
      {
        icon: '🌐',
        destaque: 'NFS-e com prestação no exterior (eTransparência)',
        texto:
          'Implementação completa do tratamento de notas fiscais de serviço prestado no exterior no provedor eTransparência. Quando o código IBGE é 9999999, preenche campos específicos nos registros reg20 e reg40 com dados do endereço do tomador estrangeiro, zera valores de ISS e adiciona informações complementares sobre país, cidade, estado e CEP. Inclui lógica para forçar o código IBGE para exterior quando o tomador é estrangeiro.',
      },
      {
        icon: '💰',
        destaque: 'Moeda estrangeira no vServMoeda',
        texto:
          'Permite enviar o valor do serviço em moeda estrangeira (vServMoeda) quando presente nos metadados da nota. Antes o campo era sempre preenchido com o valor em reais. Agora, se a nota tem informações de comércio exterior com valor em moeda estrangeira, esse valor é usado. Inclui refatoração da extração do valorServicoMoedaEstrangeira para usar IDictionary ao invés de IEnumerable.',
      },
      {
        icon: '🧮',
        destaque: 'Ajustes IBS/CBS, impostos retidos e novos campos',
        texto:
          'Pacote de ajustes tributários: fallback de IBS/CBS para deduzir apenas para optantes do Simples Nacional, ajustes nos envios de impostos retidos na tag CSLL e apuração própria, novo modelo de envio de Obras para o provedor SIGISSv5, e implementação do campo CNO (Cadastro Nacional de Obras) para o provedor IPM. Também adiciona empresas não optantes de Uberaba/MG para não enviarem alíquota.',
      },
    ],
  },
  {
    tag: '05/04/2026',
    titulo: 'Sábado — 05 de Abril',
    data: '05/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum PR mergeado neste dia.',
      },
    ],
  },
  {
    tag: '04/04/2026',
    titulo: 'Sexta-feira — 04 de Abril',
    data: '04/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum PR mergeado neste dia.',
      },
    ],
  },
  {
    tag: '03/04/2026',
    titulo: 'Quinta-feira — 03 de Abril',
    data: '03/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum PR mergeado neste dia.',
      },
    ],
  },
  {
    tag: '02/04/2026',
    titulo: 'Quarta-feira — 02 de Abril',
    data: '02/04/2026',
    itens: [
      {
        icon: '🧾',
        destaque: 'Script de cancelamento de notas com status inconsistente',
        texto:
          'Liquibase SQL para disparar cancelamento em lote de notas que estavam com status inconsistente no banco de dados — notas que foram autorizadas na SEFAZ mas ficaram com status diferente no sistema. O script executa o procedimento de cancelamento para cada nota afetada.',
      },
      {
        icon: '🏙️',
        destaque: 'Cachoeirinha/RS — situação tributária para tomador exterior',
        texto:
          'Ajusta a situação tributária para código 14 quando o tomador é do exterior em Cachoeirinha/RS no provedor IPM. Também aplica a mesma regra na versão V2 do provedor. Sem essa correção, notas para tomadores estrangeiros eram rejeitadas pela prefeitura.',
      },
      {
        icon: '🏙️',
        destaque: 'Atualizações municipais e limpeza de WebHook',
        texto:
          'Remove o parâmetro tipoNf dos comandos de WebHook (ConsultaRequisicoesWebHookPeriodo e ReenviarWebHookPeriodo), simplificando a interface. Atualiza configurações de Anitápolis/SC e Pão de Açúcar/AL. Ajusta serialização no TxtBuilder para truncar textos e números corretamente. Adiciona Conchas/SP ao GOVBRv3.',
      },
    ],
  },
  {
    tag: '01/04/2026',
    titulo: 'Terça-feira — 01 de Abril',
    data: '01/04/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Paranapanema/SP migra de GOVBRv3 para GOVBRv2',
        texto:
          'O município de Paranapanema/SP teve seu provedor atualizado de GOVBRv3 para GOVBRv2 com link de produção atualizado. A seção de emissão sem certificado foi removida e foram adicionadas informações do provedor (metadados e propriedades). A URL de recepção de lote em produção foi atualizada.',
      },
      {
        icon: '🆕',
        destaque: 'Cravinhos/SP — novo web service FgMaiss',
        texto:
          'Implementação completa do web service para Cravinhos/SP no provedor FgMaiss. Inclui referências WSDL para consulta, envio e cancelamento de NFS-e, classe CravinhosProvedorNFeWS com métodos para todas as operações, e configuração de endpoints no app.config. O provedor FgMaiss agora cria automaticamente o WS de Cravinhos quando o município é detectado.',
      },
      {
        icon: '📊',
        destaque: 'Nova coleção SempreEnviaAliquotaIssEmpresasSimplesNacional',
        texto:
          'Cria nova coleção no provedor GOVBRv3 que lista municípios onde empresas do Simples Nacional devem sempre enviar a alíquota ISS. Também ajusta a lógica de pAliq no RecepcionarLote para considerar essa nova regra, e resolve natureza de operação para subscription específica no NfseNacionalV2.',
      },
    ],
  },
];
