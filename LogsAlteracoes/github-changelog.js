var changelogData = [
  {
    tag: '27/04/2026',
    titulo: 'Domingo — 27 de Abril',
    data: '27/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '26/04/2026',
    titulo: 'Sábado — 26 de Abril',
    data: '26/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'EGoverneISS — busca do XML completo da nota fiscal',
        texto:
          'O provedor EGoverneISS não retornava o XML completo da nota fiscal na consulta de lote. Foi implementada uma nova operação ConsultaNotaFiscalCompleta que busca o XML diretamente no webservice da prefeitura após a emissão. O fluxo de ConsultarLoteNFe foi reorganizado para criar e descartar corretamente o cliente WS, e o método ExtrairNFe agora recebe tanto a resposta do WS quanto os dados de emissão, validando consistência (identificador, código de verificação, tomador) antes de substituir o XML.',
      },
      {
        icon: '🆕',
        destaque:
          'Aspect — integração completa com consulta de informações de serviço',
        texto:
          'O provedor Aspect recebeu uma atualização significativa na integração. Foi criado o comando ConsultarInformacoesServicoCommand que faz múltiplas requisições encadeadas ao webservice (serviço → NBS → INDOP → classificação tributária) para obter dados completos antes da emissão. O modelo Nfse foi expandido com campos de NBS, naturezaOperacao, retenção, classificação tributária e subitens de serviço. O RecepcionarLoteNFe agora valida CPF/CNPJ do tomador, normaliza o CodigoServicoMunicipal para 6 dígitos, e consulta o serviço antes de montar o payload.',
      },
      {
        icon: '🏙️',
        destaque:
          'Macaúbas/BA — correção do provedor de NfseNacionalV2 para Freire',
        texto:
          'O município de Macaúbas/BA estava configurado com o provedor NfseNacionalV2 genérico, mas o WebService oficial da prefeitura é o Freire. A configuração foi corrigida no ConfiguracoesMunicipios.xml para apontar para o provedor correto, garantindo que as notas sejam emitidas no sistema que a prefeitura realmente utiliza.',
      },
      {
        icon: '🏙️',
        destaque: 'Pérola/PR — adicionado ao provedor GOVBRv3 padrão Cidade360',
        texto:
          'O município de Pérola/PR foi adicionado/atualizado no provedor GOVBRv3 seguindo o padrão Cidade360. A prefeitura utiliza o sistema Cidade360 para NFS-e e as configurações foram ajustadas no gateway para garantir compatibilidade com o layout e endpoints corretos.',
      },
      {
        icon: '📊',
        destaque:
          'NotaControl — validação obrigatória do regime especial de tributação',
        texto:
          'O provedor NotaControl (ABRASF v2) passou a exigir que o campo RegimeEspecialTributacao esteja preenchido com um valor numérico válido. Antes, a validação só verificava se o valor era não-numérico quando presente. Agora, se o campo estiver vazio ou nulo, o sistema também lança ValidationException (erro GW001), forçando o preenchimento correto antes do envio.',
      },
      {
        icon: '🏙️',
        destaque:
          'Santo Antônio de Posse/SP — cancelamento configurado no Fiorilli',
        texto:
          'O município de Santo Antônio de Posse/SP não suportava cancelamento de NFS-e pelo gateway. A operação de cancelamento foi configurada no provedor Fiorilli, permitindo que empresas da cidade cancelem notas fiscais eletrônicas diretamente pelo sistema sem precisar acessar o portal da prefeitura.',
      },
      {
        icon: '🔧',
        destaque:
          'Fortaleza/CE — endereço do tomador replicado como endereço do evento para Conta Azul',
        texto:
          'Na integração com Fortaleza/CE, o método CriarDadosEvento foi alterado para receber o parâmetro Empresa e verificar se a subscription está na lista UsaEndTomadorParaEvento. Quando a empresa (Conta Azul) está nessa lista e não há endereço do evento informado, o sistema utiliza automaticamente o endereço do tomador. Além disso, o cálculo de PIS/COFINS/CSLL foi migrado para o helper centralizado NFeServicoCalculosHelper.',
      },
      {
        icon: '🏙️',
        destaque: 'Amambai/MS — cancelamento configurado no provedor Fiorilli',
        texto:
          'O município de Amambai/MS não suportava cancelamento de NFS-e pelo gateway. A operação de cancelamento foi configurada no provedor Fiorilli, permitindo que empresas da cidade cancelem notas fiscais eletrônicas diretamente pelo sistema.',
      },
      {
        icon: '🔧',
        destaque: 'Simpliss — suporte ao campo Inscrição Estadual do tomador',
        texto:
          'O provedor Simpliss não enviava a Inscrição Estadual do tomador no XML da nota. Foi criada a classe SimplissIdentificacaoTomador que herda de IdentificacaoTomador e adiciona a propriedade InscricaoEstadual. O método CriarIdTomador popula CPF/CNPJ, InscricaoMunicipal e InscricaoEstadual com limpeza de espaços em branco.',
      },
      {
        icon: '🔧',
        destaque:
          'Marília/SP — remoção de duplicata incorreta no cadastro de municípios',
        texto:
          'O município de Marília/SP estava duplicado no arquivo de códigos de municípios (codigoMunicipios.csv) do provedor NfseNacionalV2. A entrada duplicada causava ambiguidade na resolução do código IBGE durante a emissão, podendo direcionar a nota para o endpoint errado. A duplicata foi removida e a referência no Municipios.cs foi ajustada.',
      },
      {
        icon: '🔄',
        destaque: 'Novo Horizonte do Sul/MS — migração para BethaV3',
        texto:
          'O município de Novo Horizonte do Sul/MS teve seu provedor atualizado para BethaV3. A prefeitura migrou de sistema de NFS-e e as configurações (URLs, namespace, layout) foram atualizadas no ConfiguracoesMunicipios.xml para garantir compatibilidade com a nova versão do provedor.',
      },
      {
        icon: '🔧',
        destaque:
          'NfseNacionalV2 — preservação da natureza de operação para Conta Azul',
        texto:
          'A lógica de reatribuição da natureza de operação no provedor NfseNacionalV2 estava sobrescrevendo o valor informado pela Conta Azul em notas de Belo Horizonte, Porto Alegre e Curitiba. A subscription do Conta Azul foi adicionada à lista de exclusões que bypassa essa reatribuição, preservando a natureza de operação original informada pelo integrador.',
      },
      {
        icon: '🏙️',
        destaque: 'Barra da Estiva/BA — ativado no provedor Saatri',
        texto:
          'O município de Barra da Estiva/BA foi ativado para emissão de NFS-e pelo provedor Saatri. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no gateway, incluindo ajustes nos arquivos de teste do provedor.',
      },
      {
        icon: '📊',
        destaque:
          'São Paulo/SP — exceção para empresa optante do Simples enviar IBS/CBS',
        texto:
          'Foi adicionada uma regra específica no RecepcionarLoteNFeProxy de São Paulo que permite a uma empresa identificada por GUID enviar IBS/CBS mesmo sendo optante do Simples Nacional. A variável naoParticipantePiloto2026 é sobrescrita para false, permitindo que o fluxo utilize o layout v2 com os campos de IBS/CBS.',
      },
      {
        icon: '📊',
        destaque:
          'GovDigital — implementação da tag TpOper (Tipo de Operação IBS/CBS)',
        texto:
          'O provedor GovDigital não enviava a tag TpOper (Tipo de Operação) no XML, campo exigido pelo Portal Nacional para classificar a operação quanto ao IBS/CBS. Foi adicionada a propriedade TpOper do tipo TipoOperacaoIbsCbs ao modelo GovDigitalDadosServico, e o RecepcionarLoteNFeV2 foi ajustado para preencher esse campo.',
      },
      {
        icon: '🏙️',
        destaque: 'Barueri/SP — Agilenotas adicionado ao fluxo V2',
        texto:
          'A subscription do Agilenotas foi adicionada à lista de subscriptions que utilizam o fluxo V2 do provedor Barueri. O roteamento V2 é necessário para que a recepção e consulta de notas funcionem corretamente com o layout atualizado da prefeitura. Sem essa configuração, as notas do Agilenotas eram processadas pelo fluxo V1 antigo.',
      },
      {
        icon: '🔧',
        destaque: 'WebIssV2 — suporte ao campo Inscrição Estadual do tomador',
        texto:
          'O provedor WebIssV2 não enviava a Inscrição Estadual do tomador no XML. Foi criada a classe WebIssV2IdentificacaoTomador com a propriedade InscricaoEstadual anotada para serialização XML. O método CriarIdTomador agora instancia essa classe e atribui a IE quando presente (com trim e verificação de vazio), exceto para tomadores do exterior.',
      },
      {
        icon: '📊',
        destaque:
          'NfseNacionalV2 — validação do campo IndOp com regex de 6 dígitos',
        texto:
          'O campo CodigoIndicadorOperacao (IndOp) no XML do NfseNacionalV2 não era validado antes do envio, causando falhas de schema quando o valor era nulo, vazio ou com formato inválido. Foi adicionada uma validação regex que exige exatamente 6 dígitos numéricos (^[0-9]{6}$). Valores inválidos agora geram ValidationException com código GW98745, evitando rejeições por erro de schema.',
      },
    ],
  },
  {
    tag: '25/04/2026',
    titulo: 'Sexta-feira — 25 de Abril',
    data: '25/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '24/04/2026',
    titulo: 'Quinta-feira — 24 de Abril',
    data: '24/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '23/04/2026',
    titulo: 'Quinta-feira — 23 de Abril',
    data: '23/04/2026',
    itens: [
      {
        icon: '📊',
        destaque:
          'SpeedGov — envio do tipo de retenção PIS/COFINS/CSLL conforme Portal Nacional',
        texto:
          'O provedor SpeedGov não enviava corretamente o tipo de retenção de PIS, COFINS e CSLL conforme as regras do Portal Nacional de NFS-e. Foi implementado o método RetornarTpRetPisCofinsCsll que deduz o código de retenção a partir dos dados da nota e do serviço. Além disso, o método CriarValoresServico foi refatorado para suportar PisCofinsApuracaoPropria — preenchendo tipo de retenção, CST, base de cálculo, alíquota e valores de PIS e COFINS de forma independente (evitando zerar indevidamente o tributo oposto em retenções parciais). Também foi criado o método CalcularValorLiquidoNfse para recomputar o valor líquido considerando todas as retenções, e DeduzirAliquotaPeloValor foi fortalecido com proteção contra divisão por zero.',
      },
      {
        icon: '🏙️',
        destaque: 'Mogi Mirim/SP — padronização do nome na busca de municípios',
        texto:
          'A busca de municípios no RecepcionarLoteNFeV2 não encontrava Mogi Mirim/SP porque o nome era enviado sem hífen ("Mogi Mirim"), enquanto o cadastro oficial usa "Mogi-Mirim". Foi adicionada uma normalização que converte automaticamente o nome antes da consulta, seguindo o mesmo padrão já existente para Santa Bárbara d\'Oeste e Sant\'Ana do Livramento. Isso resolve erros de "município não encontrado" na emissão de notas com tomador de Mogi Mirim.',
      },
      {
        icon: '🏙️',
        destaque: 'Ubatã/BA ativado no provedor Saatri',
        texto:
          'O município de Ubatã/BA foi ativado para emissão de NFS-e pelo provedor Saatri. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no gateway para permitir emissão, cancelamento e consulta de notas.',
      },
      {
        icon: '🔧',
        destaque:
          'DANFSE Padrão Nacional — descrição do serviço ampliada para 11 linhas',
        texto:
          'O relatório DANFSE (Documento Auxiliar da NFS-e) no padrão nacional estava limitado a 7 linhas na descrição do serviço, o que truncava textos mais longos. O método DrawServicoPrestado foi ajustado para aceitar até 11 linhas, aumentando tanto o limite de quebra de texto (WrapTextByWidth) quanto o número de linhas processadas no loop de desenho. Isso resolve casos em que a descrição completa do serviço não cabia no PDF gerado.',
      },
      {
        icon: '🔧',
        destaque:
          'PublicaV1 — dados de obra preenchidos com endereço do tomador para serviço 07.02',
        texto:
          'No provedor PublicaV1, quando o serviço municipal é 07.02 (construção civil) e os dados de construção civil não são informados na nota, o sistema agora preenche automaticamente os dados da obra com as informações do tomador de serviço. Isso evita rejeições em prefeituras que exigem dados de obra para esse código de serviço, usando o endereço completo do tomador, tipo de identificação "1" e código de país "1058" (Brasil).',
      },
      {
        icon: '🔧',
        destaque: 'Rio Grande/RS — cancelamento de NFS-e corrigido no SIGISSv1',
        texto:
          'O cancelamento de NFS-e em Rio Grande/RS pelo provedor SIGISSv1 não funcionava porque a operação não estava implementada (lançava NotImplementedException). Foi criada a classe CancelarNFeRioGrande com lógica específica: credenciais (CCM, CNPJ, senha) são incluídas no pedido, o XML usa o DefaultNamespace do município, e a raiz do request foi renomeada de "CancelarNotaRequest" para "CancelarNota". O tratamento de erros foi melhorado para agregar todas as mensagens de erro da resposta e detectar notas já canceladas. O roteamento no SIGISSv1ProvedorNFe agora direciona Rio Grande/RS para essa operação específica.',
      },
      {
        icon: '🌐',
        destaque: 'ISSIntel — suporte a emissão para o exterior',
        texto:
          'O provedor ISSIntel não suportava emissão de notas para tomadores do exterior, retornando o erro E0591. Foram adicionadas as propriedades CodigoPais e CodigoPaisLocalPrestacao ao modelo ISSIntelServico, e criado o método assíncrono ResolverCodigoPais que detecta automaticamente quando o serviço é prestado no exterior (código IBGE 9999999). O método busca o código do país via IPaisesService, priorizando PaisPrestacaoServico quando fornecido e usando o país do tomador como fallback. Três códigos de erro distintos (GW911, GW912, GW913) foram implementados para cenários de falha na resolução.',
      },
      {
        icon: '🏙️',
        destaque: 'Massapê/CE migrado para o provedor SpeedGov',
        texto:
          'O município de Massapê/CE teve seu provedor alterado para SpeedGov. A prefeitura migrou de sistema de NFS-e e as configurações foram atualizadas no gateway para garantir continuidade na emissão de notas fiscais eletrônicas.',
      },
      {
        icon: '📊',
        destaque:
          'Fortaleza/CE — cálculo específico de PIS/COFINS/CSLL para empresas na allowlist',
        texto:
          'Foi implementado um cálculo específico de tributos sobre serviços (PIS/COFINS/CSLL) para empresas de Fortaleza/CE que estão em uma allowlist. O novo método CriarValoresServicoFortaleza monta os valores a partir de campos de ISS e tributos federais, recalcula PIS e COFINS quando há PisCofinsApuracaoPropria (deduzindo alíquotas faltantes via DeduzirAliquotaPeloValor), e ajusta o CSLL com base no código de retenção derivado de TipoRetencaoPisCofins. Tipos de retenção inválidos geram ValidationException para evitar envio incorreto.',
      },
      {
        icon: '🔧',
        destaque: 'NFS-e Nacional — retorno do RPS para emissão robô',
        texto:
          'O envio de série e número do RPS (Recibo de Prestação de Serviço) havia sido desabilitado temporariamente no provedor NFS-e Nacional por um erro no portal. Com a correção do portal, o envio foi restaurado: InformarSerieNumeroDPS volta a ser "true", e os campos SerieDPS e NumeroDPS são populados com os valores reais da nota. No método MontaInfDPS, os campos serie e nDPS que estavam sendo enviados como null agora recebem os valores corretos. Isso restaura o fluxo de emissão automatizada (robô) que dependia dessas informações.',
      },
      {
        icon: '🔧',
        destaque:
          'EGoverneISS — endereço do tomador replicado como local de prestação',
        texto:
          'Para uma empresa específica do provedor EGoverneISS, foi implementada a funcionalidade de replicar o endereço do tomador nos campos de local da prestação do serviço. A propriedade UsarEnderecoTomadorComoLocalPrestacao controla quais empresas usam esse comportamento. Quando ativado, o método ResolverEnderecoPrestacao marca servicoPrestadoNoTomador como true e copia CidadePrestacaoServico e EstadoPrestacaoServico a partir do endereço do tomador, com normalização de valores vazios.',
      },
      {
        icon: '🔧',
        destaque:
          'Correção na lista de AnexosSimplesNacional — conversão para array',
        texto:
          'A propriedade AnexosSimplesNacional, que define os anexos do Simples Nacional aplicáveis a cada provedor, estava sendo retornada como lista ao invés de array na extensão ProvedorExtensions.cs. Isso causava incompatibilidade com a estrutura de dados esperada pelo front-end e pela API, que tratam o campo como array JSON. A correção converte a lista para array com .ToArray(), garantindo que os dados dos anexos sejam serializados corretamente. Esse commit veio do PR #727 (sustain) junto com ajuste de SMU.',
      },
    ],
  },
  {
    tag: '22/04/2026',
    titulo: 'Quarta-feira — 22 de Abril',
    data: '22/04/2026',
    itens: [
      {
        icon: '�',
        destaque:
          'Correção na lista de AnexosSimplesNacional — conversão para array',
        texto:
          'A propriedade AnexosSimplesNacional, que define os anexos do Simples Nacional aplicáveis a cada provedor, estava sendo retornada como lista ao invés de array na extensão ProvedorExtensions.cs. Isso causava incompatibilidade com a estrutura de dados esperada pelo front-end e pela API, que tratam o campo como array JSON. A correção converte a lista para array com .ToArray(), garantindo que os dados dos anexos sejam serializados corretamente.',
      },
      {
        icon: '📊',
        destaque:
          'Portal Nacional — Benefício Municipal anulado quando tribISSQN não é Tributável',
        texto:
          'O Portal Nacional de NFS-e retornava o erro E0533 quando o campo Benefício Municipal (BM) era informado em notas com tribISSQN diferente de 1 (Tributável). A regra do Portal Nacional exige que o BM seja nulo para notas isentas, imunes ou com suspensão judicial. A correção foi aplicada nos dois formatadores de XML (FormatarXmlLoteNFeBase e FormatarXmlLoteNFeV2Base), adicionando validação no método ObterCodigoBeneficioMunicipalMetadados para retornar null quando tribISSQN != 1, evitando rejeições em notas não tributáveis.',
      },
      {
        icon: '🔧',
        destaque: 'Atualização de pontuação na descrição do provedor FgMaiss',
        texto:
          'A descrição de ajuda (help text) das características do provedor FgMaiss foi ajustada com correção de pontuação — adição de ponto final na frase. Embora seja uma mudança cosmética, garante consistência na documentação exibida nas telas de configuração do provedor.',
      },
    ],
  },
  {
    tag: '21/04/2026',
    titulo: 'Terça-feira — 21 de Abril',
    data: '21/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '20/04/2026',
    titulo: 'Segunda-feira — 20 de Abril',
    data: '20/04/2026',
    itens: [
      {
        icon: '🌐',
        destaque:
          'NfseNacionalV2 — local de prestação fixado apenas para tomador do exterior',
        texto:
          'O provedor NfseNacionalV2 tinha uma lógica de resolução do local de prestação de serviço (ResolverLocalPrestacaoServicoFixada) que era aplicada para todas as notas, independente do tomador ser nacional ou estrangeiro. Isso causava sobrescrita indevida do código IBGE e nome da cidade de prestação em notas nacionais. A correção move a validação para o ProvedorNFeServicoBase, garantindo que o local de prestação fixado via metadados da empresa (codigoIbgeCidadePrestacaoServicoExterior / nomeCidadePrestacaoServicoExterior) só seja aplicado quando o tomador for efetivamente do exterior. Foram necessários 4 commits para refinar a lógica.',
      },
      {
        icon: '🏙️',
        destaque: 'Osasco/SP — novos campos de local de prestação',
        texto:
          'O provedor de Osasco/SP recebeu implementação de novos campos de local de prestação de serviço. A prefeitura passou a exigir informações adicionais sobre o local onde o serviço é prestado, e sem esses campos as notas eram rejeitadas. A implementação garante que os dados de local de prestação sejam enviados corretamente no XML.',
      },
      {
        icon: '🔧',
        destaque:
          'Ajuste na dedução da base de cálculo usando o mesmo método da WebAPI',
        texto:
          'A lógica de dedução da base de cálculo do ISS foi ajustada para usar o mesmo método utilizado pela WebAPI do eNotas. Havia divergência entre o cálculo feito no gateway e o feito na WebAPI, causando inconsistências nos valores de ISS em determinados cenários. A unificação do método garante resultados consistentes.',
      },
      {
        icon: '📊',
        destaque:
          'Correção no tipo de retenção do PIS/COFINS para ficar semelhante ao ADN',
        texto:
          'O tipo de retenção do PIS e COFINS estava sendo enviado de forma diferente do padrão ADN (Ato Declaratório Normativo). A correção alinha o tipo de retenção ao formato esperado, evitando divergências na apuração tributária e rejeições em prefeituras que validam esse campo.',
      },
      {
        icon: '📊',
        destaque: 'Envio da base de cálculo nos impostos federais',
        texto:
          'Foi adicionado o envio da base de cálculo nos impostos federais (PIS, COFINS, CSLL) no XML da nota. Algumas prefeituras e o Portal Nacional passaram a exigir esse campo para conformidade com a reforma tributária. Sem a base de cálculo, os valores de impostos federais não podiam ser validados corretamente.',
      },
      {
        icon: '🔧',
        destaque:
          'Ajuste no retorno do login para mensagem XML em caso de instabilidade',
        texto:
          'O processo de login em um provedor que usa autenticação via webservice não retornava mensagem de erro adequada quando havia instabilidade no servidor da prefeitura. O ajuste garante que a mensagem de erro seja retornada no formato XML esperado, permitindo que o sistema identifique corretamente a falha e tente novamente.',
      },
      {
        icon: '🔧',
        destaque:
          'Ajuste no envio de MunicipioIncidencia para empresa com serviço 16.01.01',
        texto:
          'O campo MunicipioIncidencia (município onde o ISS deve ser recolhido) estava sendo enviado incorretamente para empresas que prestam o serviço de código 16.01.01. O ajuste garante que o município de incidência correto seja enviado para esse código de serviço específico, evitando recolhimento de ISS no município errado.',
      },
      {
        icon: '🔧',
        destaque: 'Configuração de MunicipioIncidencia para Amambai/MS',
        texto:
          'O município de Amambai/MS recebeu configuração específica de MunicipioIncidencia. A prefeitura exige que o ISS seja recolhido no município do prestador independente do local de prestação, e a configuração garante que o campo seja preenchido corretamente no XML enviado.',
      },
      {
        icon: '🔧',
        destaque:
          'AutenticidadeNota configurada para múltiplos provedores e Salvador/BA',
        texto:
          'O campo AutenticidadeNota foi configurado para múltiplos provedores (PRs 8966, 8969, 8968, 8967) e especificamente para Salvador/BA (PR 8964). Esse campo armazena o código de autenticidade retornado pela prefeitura, usado para verificação da nota no portal municipal. A configuração garante que o código seja capturado e armazenado corretamente.',
      },
      {
        icon: '🔧',
        destaque:
          'ResponsavelTecnico — adição de EmpresaId na lista idsNovoRespTecnico',
        texto:
          'Uma empresa específica foi adicionada à lista idsNovoRespTecnico no bloco de Responsável Técnico. Essa lista controla quais empresas utilizam o novo formato de preenchimento do Responsável Técnico no XML do Portal Nacional, necessário para conformidade com as exigências da SEFIN.',
      },
      {
        icon: '🔧',
        destaque:
          'Configuração de cenário de município de incidência para empresa específica',
        texto:
          'Foi configurado um cenário específico de município de incidência para uma empresa. Quando uma empresa tem configuração especial de incidência, o sistema precisa sobrescrever o comportamento padrão do provedor para garantir que o ISS seja recolhido no município correto conforme a situação tributária da empresa.',
      },
      {
        icon: '🔧',
        destaque:
          'Subscription LOFT adicionada à lista de subscriptions com comportamento especial',
        texto:
          'A subscription da empresa LOFT foi adicionada à lista de subscriptions que sempre recebem tratamento especial em determinado fluxo. Essa configuração é necessária para garantir que as notas da LOFT sejam processadas com as regras específicas do contrato, evitando rejeições ou comportamentos inesperados.',
      },
      {
        icon: '🏙️',
        destaque: 'Hidrolina/GO ativado no provedor ArrecadaNet',
        texto:
          'O município de Hidrolina/GO foi ativado para emissão de NFS-e pelo provedor ArrecadaNet. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no gateway para permitir emissão.',
      },
      {
        icon: '🔧',
        destaque:
          'Atualização de URL de Morungaba/SP e Jaciara/MT no provedor Fiorilli',
        texto:
          'As URLs de acesso ao webservice das prefeituras de Morungaba/SP e Jaciara/MT no provedor Fiorilli foram atualizadas. As prefeituras migraram seus servidores e as URLs antigas pararam de funcionar, causando falhas na emissão. A atualização restaura a comunicação com os webservices.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção da flag NaoUsaAssinatura para Guaraçapes/SP',
        texto:
          'A flag NaoUsaAssinatura foi removida para o município de Guaraçapes/SP. Essa flag indicava que a prefeitura não exigia assinatura digital no XML, mas a prefeitura passou a exigir a assinatura. Com a remoção, o sistema volta a assinar o XML antes de enviar, evitando rejeições.',
      },
      {
        icon: '🔄',
        destaque: 'Major Vieira/SC migrado para BethaV3',
        texto:
          'O município de Major Vieira/SC teve seu provedor atualizado de BethaV2 para BethaV3. A nova versão traz melhorias no layout e suporte a novos campos exigidos pela reforma tributária, garantindo compatibilidade com as exigências atuais da prefeitura.',
      },
      {
        icon: '🔧',
        destaque:
          'Remoção do label self-hosted do runner no workflow de produção',
        texto:
          'O workflow de CI/CD de produção (.github/workflows/production.yaml) estava configurado com o label "self-hosted" no runner, o que restringia a execução a máquinas específicas. O label foi removido para permitir que o pipeline utilize runners disponíveis sem essa restrição, aumentando a flexibilidade e disponibilidade do processo de deploy.',
      },
    ],
  },
  {
    tag: '19/04/2026',
    titulo: 'Domingo — 19 de Abril',
    data: '19/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque:
          'Portal Nacional — validação de regimes especiais de tributação permitidos',
        texto:
          'O campo regEspTrib (regime especial de tributação) no XML do Portal Nacional de NFS-e estava sendo preenchido com qualquer valor numérico informado na nota, sem validar se o valor era aceito pelo schema. O Portal Nacional aceita apenas os valores 0, 1, 2, 3, 4, 5, 6 e 9. A correção foi aplicada tanto no FormatarXmlLoteNFeBase quanto no FormatarXmlLoteNFeV2Base, garantindo que apenas regimes válidos sejam enviados e evitando rejeições por valor inválido no campo.',
      },
    ],
  },
  {
    tag: '18/04/2026',
    titulo: 'Sábado — 18 de Abril',
    data: '18/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque:
          'Salvador/BA — remoção do RecepcionarLoteNFev2 e validação do CodigoTributacaoMunicipio',
        texto:
          'O provedor de Salvador/BA passou por uma refatoração importante: a classe SalvadorRecepcionarLoteNFev2 foi completamente removida (323 linhas), consolidando a lógica na versão principal RecepcionarLoteNFe. Junto com isso, foi adicionada uma validação que exige que o CodigoTributacaoMunicipio tenha exatamente 7 dígitos — requisito da prefeitura de Salvador que, quando não atendido, causava rejeição na emissão. Os testes de integração foram atualizados para refletir as mudanças.',
      },
      {
        icon: '🔧',
        destaque: 'Desabilitação de emissão em lote para empresas específicas',
        texto:
          'A emissão em lote foi desabilitada para um conjunto de empresas (tickets #97962, #98006, #98193) que estavam enfrentando problemas ao enviar múltiplas notas simultaneamente. Nesses casos, a emissão em lote gerava duplicidades ou erros de processamento. A desabilitação força o envio individual de cada nota, garantindo maior controle e evitando duplicatas até que a causa raiz seja resolvida.',
      },
    ],
  },
  {
    tag: '17/04/2026',
    titulo: 'Sexta-feira — 17 de Abril',
    data: '17/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '16/04/2026',
    titulo: 'Quinta-feira — 16 de Abril',
    data: '16/04/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Morro Reuter/RS e código interno do contribuinte no GOVBRv3',
        texto:
          'O município de Morro Reuter/RS foi adicionado ao conjunto de códigos IBGE suportados pelo provedor GOVBRv3, permitindo a emissão de NFS-e na cidade. Além disso, o PR incluiu a implementação de fallback SHA1 para assinatura digital em modo debug e a alteração do parâmetro padrão "embutido" para true nas APIs de teste (EmpresaApi, NotaApi, ApiBase), facilitando os testes de integração com certificados digitais.',
      },
      {
        icon: '🔧',
        destaque:
          'Atualização de referências das GitHub Actions no workflow de produção',
        texto:
          'O workflow de CI/CD de produção (.github/workflows/production.yaml) estava apontando todas as referências de GitHub Actions para a branch @master. As referências foram atualizadas para @TICKET-153208 (clone, build, cleanup e deploy), garantindo que o pipeline de produção utilize as versões das actions compatíveis com as mudanças em andamento.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Dumont/SP no provedor Fiorilli',
        texto:
          'O município de Dumont/SP (código IBGE 3514601) foi ativado para emissão de NFS-e pelo provedor Fiorilli. A prefeitura foi incluída como exceção na lógica do Fiorilli para não utilizar ItemListaServico, e o ConfiguracoesMunicipios.xml foi atualizado com a tag NaoUsaAssinatura. Essas configurações específicas são necessárias porque Dumont/SP exige um comportamento diferente do padrão do provedor.',
      },
      {
        icon: '📊',
        destaque: 'Araraquara/SP — CNAE ativado para emissão',
        texto:
          'O município de Araraquara/SP teve a flag de CNAE alterada para true. Algumas prefeituras exigem que o código CNAE (Classificação Nacional de Atividades Econômicas) seja enviado na emissão de NFS-e ao invés do código de serviço padrão. Sem essa configuração, as notas eram rejeitadas por falta do CNAE obrigatório.',
      },
      {
        icon: '🔧',
        destaque:
          'Novas propriedades EhProvedorPortalNacional e AnexosSimplesNacional',
        texto:
          'Foram adicionadas duas novas propriedades às características dos provedores: EhProvedorPortalNacional (indica se o provedor opera via Portal Nacional de NFS-e) e AnexosSimplesNacional (define os anexos do Simples Nacional aplicáveis). A propriedade NomeProvedor foi removida da base. Os provedores FgMaiss, PrimaxOnline e eTransparencia foram configurados com os anexos do Simples Nacional específicos. Essas mudanças melhoram a precisão das informações tributárias por provedor.',
      },
    ],
  },
];
