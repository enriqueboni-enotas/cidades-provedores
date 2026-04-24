var changelogData = [
  {
    tag: '24/04/2026',
    titulo: 'Sexta-feira — 24 de Abril',
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
        destaque: 'SpeedGov — envio do tipo de retenção PIS/COFINS/CSLL conforme Portal Nacional',
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
        destaque: 'DANFSE Padrão Nacional — descrição do serviço ampliada para 11 linhas',
        texto:
          'O relatório DANFSE (Documento Auxiliar da NFS-e) no padrão nacional estava limitado a 7 linhas na descrição do serviço, o que truncava textos mais longos. O método DrawServicoPrestado foi ajustado para aceitar até 11 linhas, aumentando tanto o limite de quebra de texto (WrapTextByWidth) quanto o número de linhas processadas no loop de desenho. Isso resolve casos em que a descrição completa do serviço não cabia no PDF gerado.',
      },
      {
        icon: '🔧',
        destaque: 'PublicaV1 — dados de obra preenchidos com endereço do tomador para serviço 07.02',
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
        destaque: 'Fortaleza/CE — cálculo específico de PIS/COFINS/CSLL para empresas na allowlist',
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
        destaque: 'EGoverneISS — endereço do tomador replicado como local de prestação',
        texto:
          'Para uma empresa específica do provedor EGoverneISS, foi implementada a funcionalidade de replicar o endereço do tomador nos campos de local da prestação do serviço. A propriedade UsarEnderecoTomadorComoLocalPrestacao controla quais empresas usam esse comportamento. Quando ativado, o método ResolverEnderecoPrestacao marca servicoPrestadoNoTomador como true e copia CidadePrestacaoServico e EstadoPrestacaoServico a partir do endereço do tomador, com normalização de valores vazios.',
      },
      {
        icon: '🔧',
        destaque: 'Correção na lista de AnexosSimplesNacional — conversão para array',
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
        destaque: 'Correção na lista de AnexosSimplesNacional — conversão para array',
        texto:
          'A propriedade AnexosSimplesNacional, que define os anexos do Simples Nacional aplicáveis a cada provedor, estava sendo retornada como lista ao invés de array na extensão ProvedorExtensions.cs. Isso causava incompatibilidade com a estrutura de dados esperada pelo front-end e pela API, que tratam o campo como array JSON. A correção converte a lista para array com .ToArray(), garantindo que os dados dos anexos sejam serializados corretamente.',
      },
      {
        icon: '📊',
        destaque: 'Portal Nacional — Benefício Municipal anulado quando tribISSQN não é Tributável',
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
  {
    tag: '15/04/2026',
    titulo: 'Quarta-feira — 15 de Abril',
    data: '15/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'PDF da prefeitura substituindo PDF gerado pelo eNotas',
        texto:
          'Em alguns municípios, o PDF da NFS-e gerado pelo eNotas não correspondia exatamente ao formato oficial da prefeitura. Foi implementada a alteração para que o sistema utilize o PDF fornecido diretamente pela prefeitura ao invés do PDF gerado internamente, garantindo fidelidade ao documento oficial.',
      },
      {
        icon: '🔧',
        destaque:
          'Desativação do chat para subscriptions de clientes no Dashboard',
        texto:
          'O chat de suporte que aparecia no Dashboard para clientes com subscriptions ativas foi desativado. Essa mudança reduz a carga de atendimento e direciona os clientes para os canais de suporte adequados.',
      },
      {
        icon: '🔧',
        destaque: 'Histórico de alterações de metadados de empresa',
        texto:
          'Foi implementada uma nova funcionalidade que registra o histórico de alterações nos metadados das empresas (como razão social, endereço, regime tributário). Isso permite rastrear quando e o que foi alterado, facilitando a investigação de problemas e auditoria. Inclui o script SQL de criação da tabela e ajustes no changeset do Liquibase.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Jaguaribara/CE no provedor Aspect',
        texto:
          'O município de Jaguaribara/CE foi ativado para emissão de NFS-e pelo provedor Aspect. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no gateway.',
      },
      {
        icon: '🔧',
        destaque: 'Ajuste para usar API key sempre atualizada',
        texto:
          'O sistema estava utilizando uma API key em cache que podia ficar desatualizada quando o cliente renovava a chave. Foi implementado um ajuste para que a API key seja sempre buscada da fonte mais recente, evitando erros de autenticação com prefeituras.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Arroio do Sal/RS no provedor GOVBRv3',
        texto:
          'O município de Arroio do Sal/RS foi ativado para emissão de NFS-e pelo provedor GOVBRv3. A prefeitura passou a aceitar notas fiscais eletrônicas via integração.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Quitandinha/PR no provedor Equiplano',
        texto:
          'O município de Quitandinha/PR foi ativado para emissão de NFS-e pelo provedor Equiplano. A configuração permite que empresas da cidade emitam notas fiscais de serviço eletronicamente.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Jacundá/PA no provedor Aspect',
        texto:
          'O município de Jacundá/PA foi ativado para emissão de NFS-e pelo provedor Aspect. A prefeitura aderiu ao sistema eletrônico e a integração foi configurada.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Minas Novas/MG no provedor Síntese',
        texto:
          'O município de Minas Novas/MG foi ativado para emissão de NFS-e pelo provedor Síntese. A prefeitura passou a aceitar notas fiscais eletrônicas via integração com o eNotas.',
      },
      {
        icon: '📊',
        destaque:
          'Remoção de Jarinu/SP da flag SempreEnviaAliquotaIssEmpresasSimplesNacional',
        texto:
          'O município de Jarinu/SP foi removido da lista de cidades que sempre enviam alíquota de ISS para empresas do Simples Nacional. A flag estava causando envio desnecessário da alíquota, gerando rejeições em determinados cenários. Com a remoção, o provedor segue o comportamento padrão.',
      },
      {
        icon: '🔧',
        destaque: 'Correção na data recebida no XML',
        texto:
          'A data retornada no XML de resposta de algumas prefeituras estava sendo interpretada incorretamente, causando divergência entre a data real da nota e a data registrada no sistema. O parsing foi corrigido para tratar corretamente os diferentes formatos de data retornados pelos provedores.',
      },
      {
        icon: '🔧',
        destaque:
          'Remoção de cidades duplicadas e normalização do nome do tomador',
        texto:
          'Em alguns cenários, o nome da cidade do tomador aparecia duplicado ou com formatação inconsistente no XML enviado à prefeitura. Foi implementada a remoção de duplicatas e a normalização do nome da cidade, evitando rejeições por dados inválidos.',
      },
      {
        icon: '🌐',
        destaque:
          'Correção para não travar a fila quando tomador é do exterior',
        texto:
          'Quando uma nota era emitida para tomador do exterior, em determinados provedores a fila de processamento travava por falta de tratamento adequado dos dados do tomador estrangeiro. O ajuste garante que a fila continue processando normalmente mesmo quando o tomador é internacional.',
      },
      {
        icon: '🔧',
        destaque: 'Fallback para consulta por RPS no provedor',
        texto:
          'Foi implementado um mecanismo de fallback para a consulta de nota por RPS em um provedor. Quando a consulta principal falha ou retorna vazio, o sistema agora tenta uma consulta alternativa, reduzindo os casos de notas que ficam presas no status "em emissão".',
      },
      {
        icon: '🏙️',
        destaque: 'Centi: integração de Brazabrantes/GO',
        texto:
          'O município de Brazabrantes/GO foi integrado ao provedor Centi. A prefeitura utiliza o sistema Centi para NFS-e e a configuração foi adicionada ao gateway para permitir emissão.',
      },
      {
        icon: '🔄',
        destaque: 'Itamaraju/BA migrado para WebISSv2',
        texto:
          'O município de Itamaraju/BA teve seu provedor atualizado para WebISSv2. A prefeitura migrou de sistema e as configurações foram ajustadas para garantir continuidade na emissão de notas.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Lagoa Nova/RN no provedor TributosV2',
        texto:
          'O município de Lagoa Nova/RN foi ativado para emissão de NFS-e pelo provedor TributosV2. A prefeitura aderiu ao sistema eletrônico de notas fiscais.',
      },
      {
        icon: '🔧',
        destaque:
          'Inclusão de Moema/MG na lista de municípios que usam cIntContrib',
        texto:
          'O município de Moema/MG foi incluído na lista de municípios que utilizam o campo cIntContrib (código de integração do contribuinte). Esse campo é exigido por algumas prefeituras para identificar o prestador no sistema municipal, e sua ausência causava rejeição na emissão.',
      },
      {
        icon: '🏙️',
        destaque:
          'Ativação de Euclides da Cunha Paulista/SP no provedor GOVBRv3',
        texto:
          'O município de Euclides da Cunha Paulista/SP foi ativado para emissão de NFS-e pelo provedor GOVBRv3. A prefeitura passou a aceitar notas fiscais eletrônicas via integração.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de validação temporária resolvida',
        texto:
          'Uma validação temporária havia sido adicionada para contornar um problema específico em um provedor. Como o problema original foi resolvido pela prefeitura, a validação foi removida para evitar bloqueios desnecessários na emissão.',
      },
      {
        icon: '🔄',
        destaque: 'Miracema do Tocantins/TO voltou para o provedor Arrecadanet',
        texto:
          'O município de Miracema do Tocantins/TO foi revertido para o provedor Arrecadanet. A migração anterior para outro provedor apresentou problemas de compatibilidade, e o retorno ao Arrecadanet restaura a emissão normal de NFS-e.',
      },
      {
        icon: '🔧',
        destaque: 'Criação de ID e chave Sefaz Paraná para homologação',
        texto:
          'Foram criados e adicionados o ID e a chave de acesso da Sefaz do Paraná para o ambiente de homologação. Essa configuração é necessária para testes de emissão de NF-e no estado antes de ir para produção.',
      },
    ],
  },
  {
    tag: '14/04/2026',
    titulo: 'Terça-feira — 14 de Abril',
    data: '14/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'NFeServico — campos de endereço e RegimeEspecialTributacao',
        texto:
          'O serviço de NF-e de Serviço (NFeServico) foi complementado com campos de endereço que estavam faltando e agora permite informar o RegimeEspecialTributacao diretamente na nota. Antes, esses campos eram ignorados ou preenchidos com valores padrão, o que causava inconsistências em municípios que exigem essas informações.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de propriedades desnecessárias',
        texto:
          'Foram removidas propriedades que não eram mais utilizadas no código, reduzindo a complexidade e evitando confusão na manutenção. A limpeza garante que apenas campos relevantes sejam processados durante a emissão.',
      },
    ],
  },
  {
    tag: '13/04/2026',
    titulo: 'Segunda-feira — 13 de Abril',
    data: '13/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque:
          'Ajustes no layout 4.2 de Barueri — impostos, endereço e exportação',
        texto:
          'Foram realizados vários ajustes no layout 4.2 de Barueri/SP: correção no cálculo de total de impostos retidos para não considerar PIS/COFINS não retidos, preenchimento do endereço completo do local de prestação com valores padrão, ajuste no preenchimento de exportação, remoção de caracteres não numéricos do CEP, e remoção de condição desnecessária na consulta por código IBGE. Também foi corrigida a validação do percentual aproximado do Simples Nacional para verificar se é maior que zero.',
      },
      {
        icon: '🔧',
        destaque:
          'Controle de envio de ValorIss via propriedade naoEnviarValorIss',
        texto:
          'Foi implementada uma nova propriedade naoEnviarValorIss que permite controlar se o valor do ISS deve ser enviado ou não na nota. Algumas prefeituras rejeitam a nota quando o ValorIss é informado em determinados cenários (como Simples Nacional). Agora é possível configurar por município/empresa se o campo deve ser omitido.',
      },
      {
        icon: '🆕',
        destaque: 'Cancelamento adicionado ao provedor',
        texto:
          'Foi implementada a operação de cancelamento de NFS-e em um provedor que anteriormente não suportava essa funcionalidade. Agora os clientes podem cancelar notas emitidas diretamente pelo eNotas, sem precisar acessar o portal da prefeitura manualmente.',
      },
      {
        icon: '🔧',
        destaque: 'Consulta de nota com texto "não está ativo ou não existe"',
        texto:
          'Foi incluído o tratamento para o texto de retorno "não está ativo ou não existe" na consulta de notas. Quando a prefeitura retorna essa mensagem, o sistema agora interpreta corretamente como nota não encontrada ao invés de tratar como erro genérico, melhorando o fluxo de sincronização.',
      },
      {
        icon: '🔧',
        destaque: 'PortalNacional — validação de endereço do evento',
        texto:
          'No Portal Nacional, a validação do endereço do evento estava sendo aplicada mesmo quando o campo idAtvEvt não era informado, causando erros desnecessários. Agora a validação só ocorre quando o identificador da atividade do evento é fornecido.',
      },
      {
        icon: '🔧',
        destaque: 'Configuração EmpresaEnviaConsumidorFinalFalse',
        texto:
          'Foi adicionada uma configuração específica para empresa que impede o envio do campo ConsumidorFinal como true. Algumas prefeituras rejeitam notas quando esse campo é enviado incorretamente, e a configuração permite controlar esse comportamento por empresa.',
      },
      {
        icon: '📊',
        destaque:
          'Regra de alíquota e tipo de imunidade específico por empresa',
        texto:
          'Foi ajustada a regra de alíquota e tipo de imunidade para funcionar de forma específica por empresa. Antes, a regra era aplicada de forma genérica, o que causava problemas em empresas com regimes tributários diferentes dentro do mesmo município.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento de XML para desserialização correta',
        texto:
          'Foi adicionado um tratamento no XML de resposta de um provedor para garantir a desserialização correta dos dados. Alguns provedores retornam XML com caracteres especiais ou encoding inesperado, e o tratamento evita erros de parsing que impediam a leitura da resposta.',
      },
      {
        icon: '🔧',
        destaque: 'PDF padrão GIF para contas Nibo e ContaAzul',
        texto:
          'Foi configurada a geração de PDF no padrão GIF (layout do provedor GIF) para as contas integradas via Nibo e ContaAzul. Essas integrações exigem um formato específico de PDF que é compatível com seus sistemas de importação de documentos fiscais.',
      },
      {
        icon: '🔄',
        destaque: 'Atualização de versão de integração para municípios',
        texto:
          'A versão de integração foi atualizada para um conjunto de municípios que migraram para versões mais recentes do webservice. A atualização garante compatibilidade com as novas APIs das prefeituras.',
      },
      {
        icon: '🌐',
        destaque: 'Ajuste na cidade de prestação via metadados para exterior',
        texto:
          'Quando o serviço é prestado no exterior, a cidade de prestação precisa ser tratada de forma especial nos metadados da nota. Foi implementado um ajuste que configura corretamente a cidade de prestação via metadados quando o tomador é estrangeiro, evitando rejeições por código de município inválido.',
      },
      {
        icon: '🏙️',
        destaque: 'Centi: integração de Panamá/GO, Mundo Novo/GO e Guapó/GO',
        texto:
          'Três municípios de Goiás foram integrados ao provedor Centi: Panamá/GO, Mundo Novo/GO e Guapó/GO. As prefeituras utilizam o sistema Centi para NFS-e e as configurações foram adicionadas ao gateway para permitir emissão eletrônica.',
      },
      {
        icon: '🔄',
        destaque: 'Tanquinho/BA migrado para NfseNacionalV2',
        texto:
          'O município de Tanquinho/BA teve seu provedor atualizado para NfseNacionalV2. A prefeitura aderiu ao Portal Nacional de NFS-e e as configurações foram ajustadas para o novo sistema.',
      },
      {
        icon: '🔄',
        destaque: 'Papanduva/SC migrado para IPMv2',
        texto:
          'O município de Papanduva/SC teve seu provedor atualizado para IPMv2. A prefeitura migrou para a versão mais recente do sistema IPM e as configurações foram atualizadas.',
      },
      {
        icon: '🔄',
        destaque: 'Ribeira do Pombal/BA migrado para WebIssV2',
        texto:
          'O município de Ribeira do Pombal/BA teve seu provedor atualizado para WebIssV2. A migração garante compatibilidade com o novo sistema da prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Ativação de UsaNovoFormatoPisCofins para provedor',
        texto:
          'A propriedade UsaNovoFormatoPisCofins foi ativada para um provedor, habilitando o novo formato de envio de PIS e COFINS exigido pela reforma tributária. Sem essa flag, os valores eram enviados no formato antigo, causando rejeição em prefeituras atualizadas.',
      },
      {
        icon: '🏙️',
        destaque: 'Tapes/RS e Ibicaré/SC aderiram ao Portal Nacional',
        texto:
          'Os municípios de Tapes/RS e Ibicaré/SC aderiram ao Portal Nacional de NFS-e. As configurações foram atualizadas para que a emissão passe a ser feita pelo portal nacional ao invés do provedor anterior.',
      },
      {
        icon: '🔧',
        destaque: 'Limpeza de mensagens de erro no FgMaiss',
        texto:
          'As mensagens de erro retornadas pelas prefeituras que usam o provedor FgMaiss vinham com tags HTML, caracteres especiais e formatação que dificultavam a leitura no painel do cliente. Foi criado o método LimparMensagemErro que sanitiza essas mensagens antes de exibir. Aplicado em todas as operações do provedor, melhorando significativamente a experiência do usuário ao visualizar erros de emissão.',
      },
    ],
  }
];
