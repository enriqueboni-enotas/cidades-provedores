var changelogData = [
  {
    tag: '12/04/2026',
    titulo: 'Domingo — 12 de Abril',
    data: '12/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum PR mergeado neste dia.',
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
        texto: 'Nenhum PR mergeado neste dia.',
      },
    ],
  },
  {
    tag: '10/04/2026',
    titulo: 'Sexta-feira — 10 de Abril',
    data: '10/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum PR mergeado neste dia.',
      },
    ],
  },
  {
    tag: '09/04/2026',
    titulo: 'Quinta-feira — 09 de Abril',
    data: '09/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum PR mergeado neste dia.',
      },
    ],
  },
  {
    tag: '08/04/2026',
    titulo: 'Quarta-feira — 08 de Abril',
    data: '08/04/2026',
    itens: [
      {
        icon: '🌐',
        destaque: 'Consulta NFS-e por RPS com AntiCaptcha — Barueri/SP',
        texto:
          'PR #676 implementou a consulta de NFS-e por RPS via web scraping para Barueri/SP, com resolução automática de captcha usando AntiCaptcha. Foram criados a operação ConsultarNFeRpsV3 e o comando ConsultarLoteNFeWSCommandV3 para orquestrar o scraping. O CaptchaSolverFactory agora suporta criação de solvers AntiCaptcha e DeathByCaptcha. O modelo ConsultaNFe recebeu o campo CnpjPrestador. Impacto: empresas de Barueri/SP agora podem consultar notas por RPS de forma automatizada, sem intervenção manual para resolver captchas.',
      },
    ],
  },
  {
    tag: '07/04/2026',
    titulo: 'Terça-feira — 07 de Abril',
    data: '07/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Normalização de série RPS na consulta de lote NFS-e',
        texto:
          'PR #675 adicionou o helper NormalizarSerie que trata "-" como string vazia e aplica trim na série RPS. A normalização é aplicada ao ler e comparar valores de SerieRPS, garantindo matching consistente e evitando falhas de consulta por diferenças de formatação.',
      },
      {
        icon: '🆕',
        destaque: 'Novo provedor GIFv2 para NFS-e',
        texto:
          'PR #674 (Notagateway sync) introduziu o provedor GIFv2 completo com operações de Recepcionar, Consultar, Cancelar e Gerar PDF, além de testes unitários. Também corrigiu o nome da propriedade cClassTrib no ModerPublicaServico, melhorou o tratamento de CST para PIS/COFINS no XML do portal nacional, adicionou validação de código NBS nos dados de serviço, e atualizou configurações municipais.',
      },
      {
        icon: '🏙️',
        destaque: 'Correção de RPS sequencial em Varginha/MG',
        texto:
          'PR #673 removeu a exigência de numeração sequencial de RPS para Varginha/MG no BethaV3. Em caso de erros de processamento, o número RPS é resetado para 0 e a série para null, evitando que notas negadas travem a sequência de numeração.',
      },
      {
        icon: '🌐',
        destaque: 'Tratamento de tomador estrangeiro no IPM',
        texto:
          'PRs #671 e #672 adicionaram o campo PaisPrestacaoServico ao modelo ItemNfse do IPM e atualizaram a lógica de emissão para incluir o país de prestação de serviço quando o tomador é estrangeiro. Também corrigiram um erro de sintaxe no RecepcionarLoteNFe do IPM.',
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
        destaque: 'Suporte a moeda estrangeira no NFS-e Nacional',
        texto:
          'Série de PRs (#663, #665, #666, #667) que implementam o envio do valor do serviço em moeda estrangeira (vServMoeda) para notas de comércio exterior no padrão NFS-e Nacional. O campo valorServicoMoedaEstrangeira agora é extraído dos metadados da nota e enviado corretamente no XML. Refatorações sucessivas corrigiram a lógica de extração (de IDictionary para JSON list) e garantiram o uso de InvariantCulture na conversão de valores decimais. Impacto: empresas que emitem notas para tomadores estrangeiros em municípios que usam o portal nacional agora terão o valor em moeda estrangeira preenchido automaticamente.',
      },
      {
        icon: '🔧',
        destaque:
          'Proxy estático para Franco da Rocha/SP e imunidade tributária',
        texto:
          'PR #664 (Notagateway sync) adicionou proxy estático ao provedor SIGISSv5 de Franco da Rocha/SP para melhorar a estabilidade de comunicação com o webservice da prefeitura. Também incluiu um novo GUID no mapeamento de TipoImunidadePorEmpresa (tipo "3") nos provedores NfseNacionalV2, permitindo que uma empresa específica emita notas com imunidade tributária corretamente.',
      },
      {
        icon: '🏙️',
        destaque: 'NFS-e com prestação de serviço no exterior — eTransparência',
        texto:
          'PR #669 adicionou regras para identificar e processar notas fiscais de serviço prestado no exterior (código IBGE "9999999") no provedor eTransparência. Preenche campos específicos nos registros reg20 e reg40 com dados do endereço do tomador, zera valores de ISS e adiciona informações complementares sobre país, cidade, estado e CEP. Inclui lógica para forçar o código IBGE para exterior quando o tomador for estrangeiro.',
      },
      {
        icon: '👤',
        destaque: 'Novo usuário no backoffice',
        texto:
          'PR #668 adicionou um novo usuário à lista de permissões especiais do backoffice (UsuariosComPermissaoEspecialBackoffice) nos ambientes HML e PRD.',
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
        icon: '🌐',
        destaque:
          'Ajuste de situação tributária para tomador exterior em Cachoeirinha/RS',
        texto:
          'PR #661 corrigiu a situação tributária (código 14) para notas com tomador do exterior no provedor IPM de Cachoeirinha/RS. A cidade foi adicionada à lista de municípios que definem CidadePrestacaoServico e NaturezaOperacao específicos para clientes estrangeiros, evitando rejeições pela prefeitura.',
      },
      {
        icon: '🧾',
        destaque: 'Script de cancelamento de notas inconsistentes',
        texto:
          'PR #662 adicionou um script SQL (liquibase) para disparar o cancelamento em lote de notas com status inconsistente. São mais de 1.100 notas que estavam em situação irregular e precisavam ser canceladas junto às prefeituras.',
      },
      {
        icon: '🏙️',
        destaque:
          'Sync: Conchas/SP no GOVBRv3, Anitápolis/SC e Pão de Açúcar/AL',
        texto:
          'PR #660 (Notagateway sync) trouxe diversas mudanças: adição de Conchas/SP às listas de configuração do GOVBRv3, atualização de configurações municipais de Anitápolis/SC e Pão de Açúcar/AL, remoção do parâmetro tipoNf dos comandos de WebHook, ajuste na serialização do TxtBuilder com truncamento, e correção na série RPS (truncada para 4 caracteres). Também adicionou tratamento de evento para cartão Asaas e condição para assinatura UnoSolucoes no NfseNacionalV2.',
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
        destaque: 'Paranapanema/SP migrado de GOVBRv3 para GOVBRv2',
        texto:
          'PR #659 atualizou o provedor de Paranapanema/SP de GOVBRv3 para GOVBRv2 com URL de produção atualizada. A mudança inclui adição de informacoesProvedor com metadados e propriedadesProvedor, e remoção da seção emissaoSemCertificado. Isso corrige problemas de emissão que estavam ocorrendo com a versão v3 neste município.',
      },
      {
        icon: '🔧',
        destaque:
          'Sync: Cravinhos/SP no FgMaiss, alíquota ISS no GOVBRv3, validação de endereço exterior',
        texto:
          'PR #658 (Notagateway sync) implementou o provedor FgMaiss para Cravinhos/SP com web services de envio, consulta e cancelamento. Adicionou a coleção SempreEnviaAliquotaIssEmpresasSimplesNacional no GOVBRv3 para garantir envio correto de alíquota ISS para empresas do Simples Nacional. Também incluiu resolução de natureza de operação para assinatura específica no NfseNacionalV2, truncamento de SerieRps para 4 caracteres, e atualização de dados de teste.',
      },
    ],
  },
  {
    tag: '31/03/2026',
    titulo: 'Terça-feira — 31 de Março',
    data: '31/03/2026',
    itens: [
      {
        icon: '🆕',
        destaque: 'Paranapanema/SP adicionado ao GOVBRv3',
        texto:
          'PR #654 adicionou a configuração inicial de Paranapanema/SP no ConfiguracoesMunicipios.xml com provedor GOVBRv3, incluindo URLs de homologação e produção. Este município passou a ser suportado pelo gateway para emissão de NFS-e.',
      },
      {
        icon: '🔧',
        destaque:
          'Sync: IBS/CBS em Barueri, validação de endereço, NIF exterior, cancelamento SIGISSv5',
        texto:
          'PRs #655, #656 e #657 (Notagateway sync) trouxeram um grande volume de mudanças: suporte a emissão IBS/CBS no layout 4.2 de Barueri/SP com busca condicional de XML no portal nacional, correção de casing da propriedade ComExt no GovDigital para tomador exterior, adição de Santa Terezinha de Itaipu/PR à lista de não-cancelamento do GOVBRv3, refatoração do cálculo de ISS no GOVBRv3, extração de chave de acesso no SIGISSv5, resolução de código de serviço municipal no EeL, simplificação da lógica de WS client no SIGISSv1, formatação de dados IBSCBS no EGoverneISS, atualização de Newtonsoft.Json para 13.0.3, validação de campos de endereço no NfseNacionalV2, tratamento de endereço estrangeiro no TinusV2, melhoria de error handling com FaultException, e expansão de configurações municipais.',
      },
    ],
  },
];
