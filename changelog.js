var changelogData = [
  {
    tag: 'Release 08/04',
    titulo: 'Release principal — 08 de Abril de 2026',
    data: '08/04/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Novas cidades no Portal Nacional',
        texto:
          'Governador Valadares/MG e Boca da Mata/AL migraram para o portal nacional de NFS-e. Empresas dessas cidades agora emitem pelo novo provedor NfseNacionalV2.',
      },
      {
        icon: '🔗',
        destaque: 'Endpoints atualizados',
        texto:
          'Jardim/MS teve seu endpoint de webservice atualizado. Santa Rita do Pardo/MS mudou a porta de 8085 para 8090. Link de homologação de Contagem/MG corrigido. Afeta todas as empresas que emitem nessas 3 cidades.',
      },
      {
        icon: '🧾',
        destaque: 'Correção no envio de alíquota (Palmas/TO)',
        texto:
          'Corrigido o envio da alíquota de ISS quando o serviço é prestado fora do município sem retenção de ISS. Afeta empresas em Palmas/TO (provedor WebISS/ABRASF v2.04) e a empresa Sankhya Card, que agora envia alíquota corretamente em cenários de prestação fora do município.',
      },
      {
        icon: '📮',
        destaque: 'CEP sem formatação',
        texto:
          'O CEP do local de prestação agora é enviado sem pontos ou traços (apenas números). Afeta todas as cidades que usam o provedor eTransparência/NotaControl, evitando rejeições por formato inválido.',
      },
      {
        icon: '🔄',
        destaque: 'Retry no cancelamento',
        texto:
          'Quando a prefeitura responde "Tente novamente em alguns instantes", o sistema agora faz novas tentativas automaticamente. Corrige falhas de cancelamento intermitentes em cidades com webservice instável.',
      },
      {
        icon: '🔒',
        destaque: 'Bloqueio de regeneração de API Key',
        texto:
          'Agora é possível bloquear a regeneração de API Key para empresas específicas via configuração (variável SubscriptionBloqueadaParaAtualizarApiKey). O botão "Gerar nova API Key" fica desabilitado no painel para essas empresas.',
      },
      {
        icon: '🏢',
        destaque: 'Conta Azul — Município de incidência',
        texto:
          'Para a empresa Conta Azul, o município de incidência agora é sempre definido como o município do prestador de serviço, corrigindo o cálculo de ISS e a comparação de município para essa empresa específica.',
      },
    ],
  },
  {
    tag: 'Release 08/04 (2)',
    titulo: 'Correção no cálculo de PIS/COFINS',
    data: '08/04/2026',
    itens: [
      {
        icon: '🧮',
        destaque: 'PIS/COFINS — base de cálculo zerada',
        texto:
          'Notas com base de cálculo de PIS/COFINS igual a zero agora são rejeitadas com erro claro (GW99998), evitando travamento da fila de processamento e cálculos incorretos por divisão por zero. Exceção: empresa Sankhya (fallback automático usando ValorTotal - Descontos). Afeta todas as cidades/provedores que emitem com PIS/COFINS retidos.',
      },
    ],
  },
  {
    tag: 'Release 08/04 (3)',
    titulo: 'Exportação e cancelamento GissOnline',
    data: '08/04/2026',
    itens: [
      {
        icon: '🌍',
        destaque: 'Critério de exportação ajustado (Portal Nacional)',
        texto:
          'No portal nacional (NfseNacionalV2), uma nota só é considerada exportação quando o código IBGE da cidade é 9999999 (serviço prestado no exterior). Antes, bastava o tomador ser do exterior. Afeta todas as cidades que usam o portal nacional e emitem para tomadores estrangeiros.',
      },
      {
        icon: '❌',
        destaque: 'Cancelamento no GissOnline liberado',
        texto:
          'O sistema não bloqueia mais o cancelamento automático no provedor GissOnline. Agora ele tenta cancelar e deixa a prefeitura validar, já que as regras de cancelamento mudam com frequência entre as cidades. Afeta todas as cidades que usam o provedor GissOnline.',
      },
    ],
  },
  {
    tag: 'PR #676 / #682',
    titulo: 'Consulta NFS-e por RPS — Barueri/SP',
    data: '08–09/04/2026',
    itens: [
      {
        icon: '🤖',
        destaque: 'Consulta por RPS em Barueri/SP',
        texto:
          'Implementada consulta de NFS-e por número de RPS em Barueri/SP via web scraping, com resolução automática de captcha (AntiCaptcha). O PDF da nota agora é salvo automaticamente ao consultar por RPS. Afeta exclusivamente empresas que emitem em Barueri/SP (provedor Barueri).',
      },
      {
        icon: '📝',
        destaque: 'Melhorias de logs e estabilidade (Barueri/SP)',
        texto:
          'Adicionados logs detalhados para rastreamento do processo de consulta em Barueri, incluindo resolução de captcha e validação dos dados. Campo txtNumeroCTS ajustado para 10 dígitos. Tratamento de erros de captcha aprimorado com tentativas controladas.',
      },
    ],
  },
  {
    tag: 'PR #678',
    titulo: 'Ajustes para notas de serviço do exterior (ISSQN)',
    data: '08/04/2026',
    itens: [
      {
        icon: '🌐',
        destaque: 'ISSQN exterior (provedor eTransparência)',
        texto:
          'Notas de serviço prestado no exterior (IBGE 9999999) agora preenchem corretamente os campos do relatório com valores zerados e textos específicos. A alíquota de ISS é zerada quando o tomador é do exterior. Afeta cidades que usam o provedor eTransparência, como Taboão da Serra/SP e Ipatinga/MG (onde foram feitos os testes).',
      },
    ],
  },
  {
    tag: 'PR #681',
    titulo: 'Correção de endereço para tomador do exterior',
    data: '09/04/2026',
    itens: [
      {
        icon: '📍',
        destaque: 'Tomador estrangeiro (provedor eTransparência)',
        texto:
          'Corrigido erro na emissão de notas quando o tomador é do exterior — o sistema agora pula a atribuição de endereço para clientes estrangeiros e define TipoLogLocPre como "Rua" após preencher os campos de endereço. Reportado pela empresa Agência Gettare (Lançamentos de Cursos Digitais Ltda). Afeta todas as cidades que usam o provedor eTransparência e emitem para tomadores do exterior.',
      },
    ],
  },
];
