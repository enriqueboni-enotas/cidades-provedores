var changelogData = [
  {
    tag: '09/04/2026',
    titulo: 'Quarta-feira — 09 de Abril',
    data: '09/04/2026',
    itens: [
      {
        icon: '🤖',
        destaque: 'Melhorias na consulta por RPS em Barueri/SP',
        texto:
          'Logs detalhados para rastreamento do processo de consulta, incluindo resolução de captcha. Campo txtNumeroCTS ajustado para 10 dígitos. PDF da nota agora é salvo automaticamente ao consultar por RPS. Tratamento de erros de captcha aprimorado com tentativas controladas.',
      },
      {
        icon: '📍',
        destaque:
          'Correção de endereço para tomador do exterior (eTransparência)',
        texto:
          'Corrigido erro na emissão quando o tomador é do exterior — o sistema agora pula a atribuição de endereço para clientes estrangeiros e define TipoLogLocPre como "Rua". Reportado pela empresa Agência Gettare. Afeta todas as cidades do provedor eTransparência.',
      },
      {
        icon: '🔧',
        destaque: 'Melhoria no tratamento de endereço (eTransparência)',
        texto:
          'Lógica de endereço no reg20 agora prefere o endereço do Tomador quando disponível, com fallback para o endereço da Empresa. Testado em Taubaté/SP.',
      },
    ],
  },
  {
    tag: '08/04/2026',
    titulo: 'Terça-feira — 08 de Abril',
    data: '08/04/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Novas cidades no Portal Nacional',
        texto:
          'Governador Valadares/MG e Boca da Mata/AL migraram para o portal nacional de NFS-e (NfseNacionalV2).',
      },
      {
        icon: '🔗',
        destaque: 'Endpoints atualizados',
        texto:
          'Jardim/MS teve seu endpoint atualizado. Santa Rita do Pardo/MS mudou a porta de 8085 para 8090. Link de homologação de Contagem/MG corrigido.',
      },
      {
        icon: '🧾',
        destaque: 'Correção no envio de alíquota (Palmas/TO)',
        texto:
          'Corrigido o envio da alíquota de ISS quando o serviço é prestado fora do município sem retenção de ISS. Afeta empresas em Palmas/TO (provedor WebISS/ABRASF v2.04) e a empresa Sankhya Card.',
      },
      {
        icon: '📮',
        destaque: 'CEP sem formatação (eTransparência/NotaControl)',
        texto:
          'O CEP do local de prestação agora é enviado sem pontos ou traços (apenas números). Afeta todas as cidades do provedor eTransparência/NotaControl.',
      },
      {
        icon: '🔄',
        destaque: 'Retry no cancelamento',
        texto:
          'Quando a prefeitura responde "Tente novamente em alguns instantes", o sistema agora faz novas tentativas automaticamente em vez de falhar direto.',
      },
      {
        icon: '🔒',
        destaque: 'Bloqueio de regeneração de API Key',
        texto:
          'Agora é possível bloquear a regeneração de API Key para empresas específicas via configuração (SubscriptionBloqueadaParaAtualizarApiKey). O botão fica desabilitado no painel.',
      },
      {
        icon: '🏢',
        destaque: 'Conta Azul — Município de incidência',
        texto:
          'Para a empresa Conta Azul, o município de incidência agora é sempre definido como o município do prestador.',
      },
      {
        icon: '🧮',
        destaque: 'PIS/COFINS — base de cálculo zerada',
        texto:
          'Notas com base de cálculo de PIS/COFINS igual a zero agora são rejeitadas com erro claro (GW99998), evitando travamento da fila. Exceção: empresa Sankhya (fallback automático).',
      },
      {
        icon: '🌍',
        destaque: 'Critério de exportação ajustado (Portal Nacional)',
        texto:
          'Uma nota só é considerada exportação quando o código IBGE é 9999999 (serviço prestado no exterior). Antes, bastava o tomador ser do exterior. Afeta todas as cidades do portal nacional.',
      },
      {
        icon: '❌',
        destaque: 'Cancelamento no GissOnline liberado',
        texto:
          'O sistema não bloqueia mais o cancelamento automático no GissOnline. Agora tenta cancelar e deixa a prefeitura validar. Afeta todas as cidades do provedor GissOnline.',
      },
      {
        icon: '🌐',
        destaque: 'ISSQN exterior (eTransparência)',
        texto:
          'Notas de serviço prestado no exterior (IBGE 9999999) agora preenchem corretamente os campos do relatório com valores zerados. Alíquota de ISS zerada quando tomador é do exterior. Testado em Taboão da Serra/SP e Ipatinga/MG.',
      },
      {
        icon: '🤖',
        destaque: 'Consulta NFS-e por RPS em Barueri/SP',
        texto:
          'Implementada consulta de NFS-e por número de RPS via web scraping com resolução automática de captcha (AntiCaptcha). Nova operação ConsultarNFeRpsV3. Afeta exclusivamente Barueri/SP.',
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
          'Criado novo provedor GIFv2 seguindo o layout do portal nacional. Amplia a cobertura de cidades que usam o padrão GIF.',
      },
      {
        icon: '🏙️',
        destaque: 'Arroio do Meio/RS migra para NfseNacionalV2',
        texto:
          'Arroio do Meio/RS agora emite pelo portal nacional (NfseNacionalV2).',
      },
      {
        icon: '🏢',
        destaque: 'Vinhedo/SP permite emissão sem tomador',
        texto:
          'Configurado Vinhedo/SP para permitir emissão de NFS-e sem dados do tomador.',
      },
      {
        icon: '🔧',
        destaque: 'São Gonçalo do Rio Abaixo/MG — cIntContrib',
        texto:
          'Incluído na regra UsaCIntContribComCodigoServico para envio correto do campo cIntContrib no GOVBRv3.',
      },
      {
        icon: '📊',
        destaque: 'GOVBRv3 — Remove municípios da flag de alíquota',
        texto:
          'Itabira/MG e Boituva/SP removidos da flag SempreEnviaAliquotaIssEmpresasSimplesNacional. Essas cidades deixam de enviar alíquota obrigatoriamente para empresas do Simples.',
      },
      {
        icon: '🔧',
        destaque: 'Normalização de série RPS (SIGISSv5)',
        texto:
          'Corrigida comparação de série RPS que falhava por diferenças de formatação (espaços, traços). Afeta cidades do provedor SIGISSv5.',
      },
      {
        icon: '❌',
        destaque: 'Varginha/MG — Remove obrigatoriedade de RPS sequencial',
        texto:
          'Removida a exigência de RPS sequencial para Varginha/MG, permitindo emissão com numeração não sequencial.',
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
        destaque:
          'Tratamento de NFS-e para serviço no exterior (eTransparência)',
        texto:
          'Implementadas regras para notas com código IBGE 9999999 (exterior): preenche campos de endereço do tomador, zera ISS, adiciona informações de país/cidade/estado/CEP. Afeta cidades do provedor eTransparência.',
      },
      {
        icon: '🏙️',
        destaque: 'Mudanças de provedor em várias cidades',
        texto:
          'Caiçara/RS e Guarujá do Sul/SC migram para IPM. Colina/SP migra para NfseNacionalV2. São Luís de Montes Belos/GO volta para Centi. Ortigueira/PR migra para Bethav3. Jardinópolis/SP migra para GissOnline. Capela do Alto/SP adere ao portal nacional.',
      },
      {
        icon: '🔗',
        destaque: 'Links de integração atualizados',
        texto:
          'Cotia/SP e Carapicuíba/SP tiveram seus links de integração atualizados. Araraquara/SP atualizado para layout padrão do provedor com número do lote na emissão.',
      },
      {
        icon: '🧮',
        destaque: 'Impostos retidos PIS/COFINS/CSLL (TinusV2)',
        texto:
          'Refatorado o cálculo de impostos federais retidos no provedor TinusV2: novo método centralizado para PIS, COFINS e CSLL retidos, com tratamento distinto por tipo de retenção. Corrigido bug de cópia que atribuía AliquotaCofins igual à AliquotaPis.',
      },
      {
        icon: '🏗️',
        destaque: 'Novo modelo de Obras para SIGISSv5 e IssIntel',
        texto:
          'Implementado envio de dados de construção civil (endereço da obra) para os provedores SIGISSv5 e IssIntel. Inclui mapeamento de CodigoObra e EnderecoObra.',
      },
      {
        icon: '🔧',
        destaque: 'Campo CNO para provedor IPM',
        texto:
          'Implementado campo CNO (Cadastro Nacional de Obras) para o provedor IPM, preenchido a partir de ConstrucaoCivil.CEI.',
      },
      {
        icon: '📊',
        destaque: 'Alíquota ISS — Uberaba/MG e Juazeiro/BA',
        texto:
          'Duas empresas de Uberaba/MG (não optantes do Simples) passam a não enviar alíquota. Juazeiro/BA adicionado à lista de municípios que não enviam MunicipioIncidencia quando ExigibilidadeISS é 2.',
      },
      {
        icon: '🔄',
        destaque: 'Reenvio automático no KbfSistemas',
        texto:
          'Quando o provedor KbfSistemas retorna "Please ensure that the address is correct", o sistema agora faz até 10 tentativas de reenvio automático.',
      },
      {
        icon: '🛡️',
        destaque: 'Proteção contra fila travada (NfseNacional)',
        texto:
          'Adicionado try/catch para evitar travamento da fila quando a busca por município falha. Nova exceção MunicipioNaoEncontradoException com erro claro (GW0001). Normalização especial para "Santa Bárbara d\'Oeste".',
      },
      {
        icon: '🌍',
        destaque: 'Variação de país — Ilhas Virgens Britânicas',
        texto:
          'Adicionadas variações de nome para as Ilhas Virgens Britânicas no serviço de normalização de países.',
      },
      {
        icon: '✅',
        destaque: 'Autenticidade de nota — Fortaleza/CE',
        texto:
          'Implementada verificação de autenticidade de notas fiscais para o provedor de Fortaleza, com URL de validação e parâmetros obrigatórios.',
      },
      {
        icon: '🔧',
        destaque: 'Coplan V2 — Alíquota zero',
        texto:
          'Configurado para não enviar alíquota quando o valor é 0.00 no provedor Coplan V2. Corrige regressão que começou a enviar alíquota zerada.',
      },
      {
        icon: '🏙️',
        destaque: 'Canguçu/RS e Álvares Machado/SP no GOVBRv3',
        texto:
          'Adicionados à flag SempreEnviaAliquotaIssEmpresasSimplesNacional e NaoUsaPedRegEventoCancelamento.',
      },
      {
        icon: '📝',
        destaque: 'Validação de metadados (NfseNacional)',
        texto:
          'Adicionada validação de existência de metadados antes de inserir, com preservação do objeto original em caso de erro. Corrige possíveis NullReferenceException.',
      },
      {
        icon: '💱',
        destaque: 'Moeda estrangeira no Portal Nacional',
        texto:
          'Corrigido envio do valor da moeda estrangeira (vServMoeda) para notas do exterior no portal nacional. Afeta empresas que emitem para tomadores internacionais.',
      },
    ],
  },
];
