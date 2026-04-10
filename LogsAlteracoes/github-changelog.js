var changelogData = [
  {
    tag: '10/04/2026',
    titulo: 'Sexta-feira — 10 de Abril',
    data: '10/04/2026',
    itens: [
      {
        icon: '🆕',
        destaque: 'UsaNBS para Hotmart no provedor FgMaiss',
        texto:
          'Adiciona lógica para determinar UsaNBS no ObterCaracteristicasCore.',
      },
      {
        icon: '🧮',
        destaque: 'Zera pTotTribFed para Franca/SP',
        texto:
          'Estende zeragem do percentual de tributos federais para Franca/SP e Mogi das Cruzes/SP quando não há tributos discriminados.',
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
          'Exportação apenas se serviço prestado fora do país (IBGE 9999999). Remove bloqueio de cancelamento no GissOnline.',
      },
      {
        icon: '🏙️',
        destaque: 'Melhorias consulta NFS-e Barueri',
        texto:
          'Logs detalhados, resolução de captcha AntiCaptcha, PDF salvo na consulta por RPS, campo txtNumeroCTS ajustado para 10 dígitos.',
      },
      {
        icon: '🌐',
        destaque: 'Tomador exterior no eTransparência',
        texto:
          'Verifica se tomador é estrangeiro para pular atribuição de endereço. Define TipoLogLocPre como "Rua".',
      },
      {
        icon: '🔧',
        destaque: 'Melhoria no endereço reg20 do eTransparência',
        texto:
          'Prefere endereço do tomador quando disponível, com fallback para endereço da empresa.',
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
          'Lança ValidationException quando BaseCalculoPisCofins é zero, evitando travar a fila.',
      },
      {
        icon: '🌐',
        destaque: 'ISSQN exterior e PDF para eTransparência',
        texto:
          'Tratamento de notas com IBGE 9999999 no relatório PDF. Zera alíquota ISS para empresa específica com tomador exterior.',
      },
      {
        icon: '🔒',
        destaque: 'Bloqueio atualização API key por subscription',
        texto:
          'Novo filtro BlockSubscriptionApiKeyUpdateFilter impede atualização de API key para subscriptions específicas.',
      },
      {
        icon: '🏙️',
        destaque: 'Múltiplas atualizações municipais',
        texto:
          'Retry no cancelamento, MunicípioIncidência para Conta Azul, correção alíquota ISS fora do município, remoção formatação CEP local prestação.',
      },
      {
        icon: '🆕',
        destaque: 'Consulta NFS-e por RPS com AntiCaptcha (Barueri)',
        texto:
          'Nova operação ConsultarNFeRpsV3 com web scraping e resolução automática de captcha.',
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
          'Provedor completo com operações de Recepcionar, Consultar, Cancelar e Gerar PDF.',
      },
      {
        icon: '🔧',
        destaque: 'Normaliza série RPS na consulta de lote',
        texto:
          'Trata "-" como vazio e aplica trim para comparação consistente de séries RPS.',
      },
      {
        icon: '🏙️',
        destaque: 'Varginha/MG — remove RPS sequencial',
        texto:
          'Remove obrigatoriedade de RPS sequencial e reseta número/série em caso de erro.',
      },
      {
        icon: '🧮',
        destaque: 'Ajustes cClassTrib, CST PIS/COFINS e NBS',
        texto:
          'Corrige tag cClassTrib, envia CST conforme prestador, validação codigoNBS para não travar fila.',
      },
      {
        icon: '🏙️',
        destaque: 'Atualizações de municípios e provedores',
        texto:
          'Arroio do Meio → NfseNacionalV2, Itaituba → CoplanV2, Serra do Mel → TinusV2, Embu das Artes URLs atualizadas, Cotia código obra 704.',
      },
      {
        icon: '📊',
        destaque: 'Remoção de municípios da flag alíquota ISS Simples',
        texto:
          'Remove Pejuçara/RS e outros da flag SempreEnviaAliquotaIssEmpresasSimplesNacional (GOVBRv3).',
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
          'Preenche campos reg20/reg40 com dados do tomador, zera ISS e adiciona informações complementares para IBGE 9999999.',
      },
      {
        icon: '👤',
        destaque: 'Novos usuários backoffice',
        texto: 'Adiciona permissões de backoffice em HML e PRD.',
      },
      {
        icon: '💰',
        destaque: 'Moeda estrangeira no vServMoeda',
        texto:
          'Permite enviar valor da moeda estrangeira quando presente nos metadados da nota. Refatoração da extração de valorServicoMoedaEstrangeira.',
      },
      {
        icon: '🧮',
        destaque: 'Ajustes IBS/CBS e impostos retidos',
        texto:
          'Fallback IBS/CBS para Simples Nacional, ajustes CSLL e apuração própria, novo modelo de Obras para SIGISSv5, campo CNO para IPM.',
      },
      {
        icon: '📊',
        destaque: 'Empresas não optantes Uberaba/MG',
        texto: 'Empresas não optantes de Uberaba/MG não enviam alíquota.',
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
        destaque: 'Script de cancelamento de notas',
        texto:
          'Liquibase para disparar cancelamento de notas com status inconsistente.',
      },
      {
        icon: '🏙️',
        destaque: 'Cachoeirinha/RS — situação tributária exterior',
        texto:
          'Ajusta situação tributária 14 para tomador exterior em Cachoeirinha/RS no provedor IPM.',
      },
      {
        icon: '🏙️',
        destaque: 'Anitápolis/SC e Pão de Açúcar/AL',
        texto:
          'Atualizações de configurações municipais. Remove tipoNf do WebHook, ajusta serialização TxtBuilder, Conchas/SP adicionada ao GOVBRv3.',
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
        destaque: 'Paranapanema/SP → GOVBRv2',
        texto:
          'Atualiza provedor de GOVBRv3 para GOVBRv2 com link de produção atualizado.',
      },
      {
        icon: '🆕',
        destaque: 'Cravinhos/SP — novo WS FgMaiss',
        texto:
          'Adiciona web service references para consulta, envio e cancelamento em Cravinhos/SP.',
      },
      {
        icon: '📊',
        destaque: 'SempreEnviaAliquotaIssEmpresasSimplesNacional',
        texto:
          'Nova coleção no GOVBRv3 para municípios que sempre enviam alíquota ISS para empresas do Simples Nacional.',
      },
    ],
  },
  {
    tag: '31/03/2026',
    titulo: 'Segunda-feira — 31 de Março',
    data: '31/03/2026',
    itens: [
      {
        icon: '🌐',
        destaque: 'IBS/CBS em Barueri layout 4.2',
        texto:
          'Suporte a emissão IBS/CBS, busca condicional de XML do portal nacional, null-check em DTOs.',
      },
      {
        icon: '📊',
        destaque: 'Nova regra de alíquota ISS no GOVBRv3',
        texto:
          'Regra de alíquota para municípios específicos, Santa Terezinha de Itaipu/PR sem cancelamento.',
      },
      {
        icon: '🏙️',
        destaque: 'Paranapanema/SP adicionada ao GOVBRv3',
        texto: 'Configuração inicial com URLs de homologação e produção.',
      },
      {
        icon: '🔧',
        destaque: 'Atualização Newtonsoft.Json e validações',
        texto:
          'Atualiza para 13.0.3, melhora tratamento de endereço exterior, exigibilidade suspensa, número gerenciado.',
      },
    ],
  },
  {
    tag: '30/03/2026',
    titulo: 'Domingo — 30 de Março',
    data: '30/03/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Limeira/SP — CTN e CTM no IIBrasil',
        texto:
          'Adiciona Limeira/SP ao UsaCodigoTributacaoMunicipio e UsaCodigoTributacaoNacional. Simplifica UsaConsultaRpsWebservice.',
      },
      {
        icon: '🌐',
        destaque: 'Remove CEP para tomadores do exterior',
        texto:
          'Prefeitura rejeitava envio de CEP para tomadores estrangeiros no eTransparência.',
      },
      {
        icon: '🏙️',
        destaque: 'Varginha/MG — RPS sequencial',
        texto:
          'Adiciona requisito de RPS sequencial para Varginha/MG no BethaV3.',
      },
    ],
  },
  {
    tag: '29/03/2026',
    titulo: 'Sábado — 29 de Março',
    data: '29/03/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum PR mergeado neste dia.',
      },
    ],
  },
];
