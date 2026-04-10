var changelogData = [
  {
    tag: '10/04/2026',
    titulo: 'Sexta-feira — 10 de Abril',
    data: '10/04/2026',
    itens: [
      {
        icon: '📊',
        destaque: 'Lógica Hotmart para definir UsaNBS no provedor FgMaiss',
        texto: 'Adiciona lógica para determinar UsaNBS para municípios Hotmart no ObterCaracteristicasCore do provedor FgMaiss (PR #685)',
      },
      {
        icon: '🏙️',
        destaque: 'Zera pTotTribFed para Franca/SP no XML NFSe',
        texto: 'Estende zeragem de pTotTribFed para Franca/SP; refatora código para usar constantes CodigoIBGE (PR #684)',
      },
    ],
  },
  {
    tag: '09/04/2026',
    titulo: 'Quinta-feira — 09 de Abril',
    data: '09/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Ajuste critérios de exportação e cancelamento GissOnline',
        texto: 'Ajusta critérios de exportação para usar código IBGE 9999999; remove rejeição automática de cancelamento no GissOnline (PR #683)',
      },
      {
        icon: '🔧',
        destaque: 'Melhorias na consulta de lote NFS-e Barueri',
        texto: 'Melhora logs de rastreamento; tratamento de erros de captcha; ajusta campo RPS para 10 dígitos; salva PDF ao consultar por RPS (PR #682)',
      },
      {
        icon: '🌐',
        destaque: 'Verifica tomador estrangeiro no eTransparência',
        texto: 'Adiciona verificação de tomador estrangeiro para pular atribuição de endereço e define TipoLogLocPre como "Rua" (PR #681)',
      },
      {
        icon: '🔧',
        destaque: 'Melhoria no tratamento de endereço reg20 eTransparência',
        texto: 'Prioriza endereço do Tomador quando disponível, com fallback para endereço da Empresa (PR #680)',
      },
    ],
  },
  {
    tag: '08/04/2026',
    titulo: 'Quarta-feira — 08 de Abril',
    data: '08/04/2026',
    itens: [
      {
        icon: '🧮',
        destaque: 'Validação base de cálculo PIS/COFINS zerada',
        texto: 'Adiciona validação que rejeita notas com BaseCalculoPisCofins zero quando PIS/COFINS estão presentes, evitando travamento na fila (PR #679)',
      },
      {
        icon: '🌐',
        destaque: 'Ajustes ISSQN exterior e PDF para notas estrangeiras',
        texto: 'Trata notas de serviço do exterior (IBGE 9999999) no relatório PDF; zera alíquota ISS para empresa específica com tomador exterior (PR #678)',
      },
      {
        icon: '🆕',
        destaque: 'Consulta NFS-e por RPS com AntiCaptcha em Barueri',
        texto: 'Implementa fluxo de consulta NFS-e por RPS via web scraping com resolução automática de captcha usando AntiCaptcha (PR #676)',
      },
      {
        icon: '🏙️',
        destaque: 'Novos municípios e lógica ISS no WebISS',
        texto: 'Adiciona novos municípios à configuração; implementa lógica de alíquota ISS no WebISS; bloqueio de atualização de API key para subscriptions específicas (PR #677)',
      },
    ],
  },
  {
    tag: '07/04/2026',
    titulo: 'Terça-feira — 07 de Abril',
    data: '07/04/2026',
    itens: [
      {
        icon: '🔢',
        destaque: 'Normalização de série RPS na consulta de lote',
        texto: 'Adiciona helper NormalizarSerie para tratar "-" como vazio e garantir comparação consistente de séries RPS (PR #675)',
      },
      {
        icon: '🆕',
        destaque: 'Novo provedor GIFv2 implementado',
        texto: 'Implementa provedor GIFv2 completo com operações de emissão, consulta, cancelamento e geração de PDF; inclui testes unitários (PR #674)',
      },
      {
        icon: '🏙️',
        destaque: 'Remove RPS sequencial para Varginha/MG',
        texto: 'Remove obrigatoriedade de RPS sequencial para Varginha/MG no BethaV3; reseta número RPS e série em caso de erro (PR #673)',
      },
      {
        icon: '🔧',
        destaque: 'Correção de sintaxe no provedor IPM',
        texto: 'Corrige erro de sintaxe (vírgula por ponto-e-vírgula) no RecepcionarLoteNFe do IPM (PR #672)',
      },
      {
        icon: '🌐',
        destaque: 'Tratamento tomador estrangeiro no IPM',
        texto: 'Adiciona PaisPrestacaoServico ao modelo ItemNfse; atualiza condição de prestador estrangeiro incluindo país de prestação (PR #671)',
      },
      {
        icon: '🧮',
        destaque: 'Correções CST PIS/COFINS e validação NBS',
        texto: 'Corrige nome de propriedade cClassTrib; melhora tratamento CST para PIS/COFINS; valida código NBS; atualiza configurações municipais (PR #670)',
      },
    ],
  },
  {
    tag: '06/04/2026',
    titulo: 'Segunda-feira — 06 de Abril',
    data: '06/04/2026',
    itens: [
      {
        icon: '🌐',
        destaque: 'Tratamento NFS-e com prestação de serviço no exterior',
        texto: 'Define código IBGE 9999999 para serviços no exterior; verifica se serviço é prestado a entidade estrangeira (PR #669)',
      },
      {
        icon: '🔧',
        destaque: 'Permissões de backoffice atualizadas',
        texto: 'Adiciona novos usuários às permissões especiais de backoffice em HML e PRD (PR #668)',
      },
      {
        icon: '🌐',
        destaque: 'Suporte a moeda estrangeira no vServMoeda',
        texto: 'Permite uso de valor em moeda estrangeira (valorServicoMoedaEstrangeira) no campo vServMoeda da NFSe Nacional v2 (PRs #663, #665, #666, #667)',
      },
      {
        icon: '🏙️',
        destaque: 'Proxy estático Franco da Rocha/SP e imunidade tributária',
        texto: 'Adiciona proxy estático ao SIGISSv5 de Franco da Rocha/SP; insere novo GUID de imunidade tipo 3 no mapeamento (PR #664)',
      },
    ],
  },
  {
    tag: '05/04/2026',
    titulo: 'Domingo — 05 de Abril',
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
    titulo: 'Sábado — 04 de Abril',
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
    titulo: 'Sexta-feira — 03 de Abril',
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
    titulo: 'Quinta-feira — 02 de Abril',
    data: '02/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Script de cancelamento de notas inconsistentes',
        texto: 'Adiciona script SQL para disparar cancelamento de notas com status inconsistente (PR #662)',
      },
      {
        icon: '🏙️',
        destaque: 'Ajuste situação tributária Cachoeirinha/RS',
        texto: 'Ajusta situação tributária 14 para tomador exterior em Cachoeirinha/RS no provedor IPM (PR #661)',
      },
      {
        icon: '🏙️',
        destaque: 'Configurações municipais e melhorias diversas',
        texto: 'Atualiza configurações de Anitápolis/SC e Pão de Açúcar/AL; remove tipoNf do WebHook; adiciona Conchas/SP ao GOVBRv3; trunca SerieRps para 4 caracteres; tratamento evento Asaas (PR #660)',
      },
    ],
  },
  {
    tag: '01/04/2026',
    titulo: 'Quarta-feira — 01 de Abril',
    data: '01/04/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Atualiza Paranapanema/SP para GOVBRv2',
        texto: 'Muda provedor de Paranapanema/SP de GOVBRv3 para GOVBRv2 com link de produção atualizado (PR #659)',
      },
      {
        icon: '🆕',
        destaque: 'Novo provedor FgMaiss para Cravinhos/SP',
        texto: 'Implementa web services de envio, consulta e cancelamento para Cravinhos/SP no provedor FgMaiss; adiciona alíquota ISS para Simples Nacional no GOVBRv3 (PR #658)',
      },
    ],
  },
  {
    tag: '31/03/2026',
    titulo: 'Terça-feira — 31 de Março',
    data: '31/03/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Paranapanema/SP adicionada ao GOVBRv3',
        texto: 'Adiciona configuração de Paranapanema/SP com URLs de homologação e produção no provedor GOVBRv3 (PR #654)',
      },
      {
        icon: '🧮',
        destaque: 'Melhorias em regras tributárias e IBS/CBS',
        texto: 'Adiciona regra de ISS para GOVBRv3; refatora cálculo de alíquota ISS; melhora formatação IBSCBS; expande configurações municipais; corrige casing NIF (PR #655)',
      },
      {
        icon: '🔧',
        destaque: 'Suporte IBS/CBS no layout 4.2 de Barueri',
        texto: 'Implementa emissão IBS/CBS no layout 4.2 de Barueri; consulta XML condicional do portal nacional; melhora tratamento de null reference; remove desconto hardcoded de Juiz de Fora (PR #656)',
      },
      {
        icon: '🌐',
        destaque: 'Validação de endereço estrangeiro e Newtonsoft atualizado',
        texto: 'Atualiza Newtonsoft.Json para 13.0.3; adiciona validação de endereço estrangeiro; melhora tratamento de erros FaultException; novas propriedades no NFeServico (PR #657)',
      },
    ],
  },
  {
    tag: '30/03/2026',
    titulo: 'Segunda-feira — 30 de Março',
    data: '30/03/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Limeira/SP adaptada para CTN e CTM',
        texto: 'Adiciona Limeira/SP aos HashSets UsaCodigoTributacaoMunicipio e UsaCodigoTributacaoNacional no provedor IIBrasil (PRs #649, #650, #653)',
      },
      {
        icon: '🔢',
        destaque: 'RPS sequencial para Varginha/MG',
        texto: 'Adiciona requisito de número RPS sequencial para Varginha/MG no BethaV3 (PR #651)',
      },
      {
        icon: '🌐',
        destaque: 'Remove CEP para tomadores do exterior',
        texto: 'Remove envio do CEP para tomadores do exterior no eTransparência, corrigindo rejeição da prefeitura (PR #652)',
      },
    ],
  },
];
