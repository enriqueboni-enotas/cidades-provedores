var changelogData = [
  {
    tag: '08/05/2026',
    titulo: 'Sexta-feira — 08 de Maio',
    data: '08/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '07/05/2026',
    titulo: 'Quinta-feira — 07 de Maio',
    data: '07/05/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Nerópolis/GO — migrado para provedor ArrecadaNet',
        texto:
          'O município de Nerópolis/GO teve seu provedor de NFS-e atualizado para o ArrecadaNet. A prefeitura migrou de sistema e as configurações de emissão, cancelamento e consulta foram atualizadas no ConfiguracoesMunicipios.xml com 16 inserções e 28 remoções, indicando uma reconfiguração completa dos endpoints e parâmetros do webservice.',
      },
      {
        icon: '📊',
        destaque:
          'NfseNacionalV2 — novos clientes na lista de envio obrigatório de NBS para Simples',
        texto:
          'Dois novos GUIDs de subscriptions foram adicionados à coleção SubscriptionsSempreEnviarNBS no provedor NfseNacionalV2. Essa lista força o envio do campo NBS (Nomenclatura Brasileira de Serviços) mesmo para empresas optantes do Simples Nacional em Mogi Guaçu/SP. Sem essa configuração, o campo NBS não era incluído no XML e a prefeitura rejeitava a nota por falta de informação obrigatória.',
      },
      {
        icon: '📊',
        destaque:
          'NfseNacionalV2 — Superlógica adicionada à whitelist de IBS/CBS para Simples',
        texto:
          'A subscription da Superlógica (Belo Horizonte/MG) foi adicionada à coleção SubscriptionsPermitirIBSCBSParaSimples no provedor NfseNacionalV2. Essa whitelist permite que empresas optantes do Simples Nacional enviem os campos de IBS (Imposto sobre Bens e Serviços) e CBS (Contribuição sobre Bens e Serviços) no XML da nota, atendendo à obrigatoriedade da reforma tributária para esse integrador específico.',
      },
      {
        icon: '🌐',
        destaque:
          'SIGISSv1 — envio do modo de prestação para comércio exterior em Rio Grande/RS',
        texto:
          'O provedor SIGISSv1 (Rio Grande/RS) não enviava o campo dps_serv_mdprestacao quando a nota tinha tomador no exterior ou código IBGE 9999999. Foi implementada lógica condicional no método CriarRps que detecta cenários de comércio exterior e atribui automaticamente o valor correto: "4" (serviço prestado no exterior) quando não há dados de ComercioExterior, ou o valor de ModalidadePrestacaoServico quando informado. Sem esse campo, notas de exportação eram rejeitadas pela prefeitura.',
      },
      {
        icon: '🏙️',
        destaque: 'Dumont/SP — flag NaoUsaAssinatura ativada no Fiorilli',
        texto:
          'O município de Dumont/SP recebeu a flag NaoUsaAssinatura no provedor Fiorilli. Essa configuração indica que a prefeitura não exige assinatura digital no XML da NFS-e, permitindo que o gateway envie as notas sem assinar. Sem essa flag, o envio falhava porque o webservice da prefeitura rejeitava XMLs assinados.',
      },
      {
        icon: '🏙️',
        destaque: 'Ibiraci/MG — ativado no provedor Eelv3',
        texto:
          'O município de Ibiraci/MG foi ativado para emissão de NFS-e pelo provedor Eelv3. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no gateway com as URLs, namespace e parâmetros necessários para emissão, cancelamento e consulta no webservice do Eelv3.',
      },
      {
        icon: '🏙️',
        destaque: 'Trombudo Central/SC — migrado para provedor BethaV3',
        texto:
          'O município de Trombudo Central/SC teve seu provedor de NFS-e atualizado para o BethaV3. A prefeitura migrou de sistema e as configurações foram ajustadas no ConfiguracoesMunicipios.xml com 41 inserções e 37 remoções, indicando uma reconfiguração completa das operações de emissão, cancelamento e consulta para o novo webservice da Betha.',
      },
      {
        icon: '📊',
        destaque:
          'Ilhabela/SP — envio de alíquotas IBS e CBS implementado no IIBrasil',
        texto:
          'O provedor IIBrasil (Ilhabela/SP) passou a enviar as alíquotas de IBS e CBS no XML da nota fiscal. Foi criado o método CriarIIBrasilValoresServico que calcula as alíquotas considerando percentuais de redução tributária por município/UF via CalculoIbsCbsService. A lógica aplica-se apenas a empresas não optantes do Simples Nacional. Sem essa implementação, notas de Ilhabela eram rejeitadas por falta dos campos obrigatórios da reforma tributária.',
      },
      {
        icon: '📊',
        destaque:
          'SILv4 — tratamento de IBS/CBS zerado para imunidade fiscal em Vila Velha/ES',
        texto:
          'O provedor SILv4 recebeu um tratamento especial para cenários de imunidade fiscal em Vila Velha/ES. Quando a natureza da operação é "2" (imunidade) e o código de serviço é "080101", os campos pIBSUF, pCBS e vCBS são zerados automaticamente. A prefeitura exige que esses campos sejam enviados com valor "0.00" em vez de omitidos, e sem esse tratamento as notas eram rejeitadas por inconsistência nos dados tributários.',
      },
      {
        icon: '🆕',
        destaque: 'TiplanV3 — novo provedor implementado para Itaguaí/RJ',
        texto:
          'Foi implementado o provedor TiplanV3 completo para o município de Itaguaí/RJ. O novo provedor inclui comunicação via HTTP JSON POST com certificado X.509, operações de recepção de lote, consulta, cancelamento e geração de PDF. A implementação segue o padrão de assinatura digital e formatação de valores específicos do Tiplan. O cancelamento está temporariamente bloqueado em homologação/produção enquanto a prefeitura finaliza a homologação do endpoint.',
      },
      {
        icon: '🔧',
        destaque:
          'Barueri/SP — remoção de acentos do nome do tomador e ativação de NBS',
        texto:
          'O provedor Barueri/SP rejeitava notas quando o nome/razão social do tomador continha caracteres acentuados (é, ã, ç, etc.). Foi adicionado RemoveAccent().ConvertToNormalizedASCIIString() no campo NomeRazaoSocial do layout V2, sanitizando o texto antes do envio. Além disso, a característica UsaNBS foi ativada no provedor para exibir o campo NBS no cadastro de empresa e produto.',
      },
      {
        icon: '🔧',
        destaque:
          'FormatarLoteRpsV2Base — remoção de acentos e caracteres especiais',
        texto:
          'O método de formatação de lote RPS V2 (base compartilhada entre provedores) recebeu tratamento para remover acentos e caracteres especiais dos campos de texto antes do envio. Essa correção complementa o ajuste específico de Barueri e resolve rejeições em outros provedores que utilizam o mesmo fluxo V2 quando nomes ou descrições contêm caracteres não-ASCII.',
      },
      {
        icon: '🌐',
        destaque: 'Directa — ajuste de emissão para tomador estrangeiro',
        texto:
          'O provedor Directa tinha uma lógica desnecessária de 7 linhas para tratamento de tomador estrangeiro que foi simplificada para apenas 1 linha. A remoção do código redundante corrige o fluxo de emissão para notas com tomador do exterior, eliminando condições que podiam causar comportamento inesperado na formatação dos dados do tomador.',
      },
    ],
  },
  {
    tag: '06/05/2026',
    titulo: 'Quarta-feira — 06 de Maio',
    data: '06/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '05/05/2026',
    titulo: 'Segunda-feira — 05 de Maio',
    data: '05/05/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Paranapanema/SP — migrado para provedor GOVBRv3',
        texto:
          'O município de Paranapanema/SP foi migrado do provedor GOVBRv2 para o GOVBRv3. A configuração antiga foi removida e substituída por novos endpoints de homologação, produção e emissão sem certificado, além do namespace padrão do GOVBRv3. A migração garante compatibilidade com a versão mais recente do webservice Cidade360 utilizado pela prefeitura.',
      },
      {
        icon: '📊',
        destaque:
          'GOVBRv3 — empresa adicionada à regra de envio de alíquota ISSQN para Simples',
        texto:
          'Uma segunda empresa foi incluída na regra que permite o envio da alíquota ISSQN para optantes do Simples Nacional no provedor GOVBRv3. A condição exige que o regime especial de tributação seja "0" (sem regime especial). Sem essa inclusão, a empresa não conseguia enviar a alíquota corretamente e as notas eram rejeitadas pelo webservice da prefeitura por inconsistência nos dados tributários.',
      },
      {
        icon: '🏙️',
        destaque: 'Americano do Brasil/GO — ativado no provedor Centi',
        texto:
          'O município de Americano do Brasil/GO foi ativado para emissão de NFS-e pelo provedor Centi. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no gateway com as URLs e parâmetros necessários para emissão, cancelamento e consulta no webservice do Centi.',
      },
      {
        icon: '🔧',
        destaque:
          'SIGISSWebNew — valor padrão para campo nome_obra evitando erro na emissão',
        texto:
          'O provedor SIGISSWebNew rejeitava notas quando o campo nome_obra era enviado como null no cenário de fallback (quando o endereço do imóvel não está disponível e o sistema usa o endereço do tomador). Foi adicionado um valor padrão de string vazia para o campo nome_obra nesse caminho, evitando o erro de gravação da obra no webservice da prefeitura. A correção é localizada no método RecepcionarLoteNFeAPI quando IndicadorOperacaoEnviaEnderecoImovelObra está ativo.',
      },
      {
        icon: '🏙️',
        destaque: 'Trindade/PE — flag NaoUsaAssinatura removida no Fiorilli',
        texto:
          'O município de Trindade/PE tinha a flag NaoUsaAssinatura ativada no provedor Fiorilli, o que fazia o gateway não assinar digitalmente o XML antes do envio. Essa flag foi removida, significando que agora as notas de Trindade/PE são enviadas com assinatura digital. A prefeitura passou a exigir a assinatura no XML, e sem essa correção as notas eram rejeitadas por falta de assinatura.',
      },
      {
        icon: '📊',
        destaque:
          'GOVBRv3 — alíquota ISSQN limpa quando regime especial é diferente de zero',
        texto:
          'Foi implementada uma validação no provedor GOVBRv3 que limpa automaticamente o campo de alíquota (pAliq) quando o tipo de tributação ISSQN é "1" (tributável) mas o regime especial de tributação é diferente de "0". Prefeituras que usam o GOVBRv3 rejeitavam notas com alíquota informada em regimes especiais (MEI, estimativa, cooperativa, etc.) porque o campo não é aceito nesses cenários. A validação evita essas rejeições automaticamente.',
      },
      {
        icon: '📊',
        destaque:
          'GOVBRv3 — nova empresa na validação temporária de cIntContrib',
        texto:
          'Uma nova empresa foi adicionada à condição que aplica a validação temporária de cIntContrib (contribuição integrada IBS/CBS) no provedor GOVBRv3. Essa regra controla quais empresas participam do piloto de envio dos campos da reforma tributária. A inclusão amplia o escopo da validação para mais um caso específico, permitindo que a empresa envie os dados de IBS/CBS corretamente no XML.',
      },
    ],
  },
  {
    tag: '04/05/2026',
    titulo: 'Segunda-feira — 04 de Maio',
    data: '04/05/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Timon/MA — emissão sem certificado digital configurada',
        texto:
          'O município de Timon/MA foi configurado para permitir emissão de NFS-e sem certificado digital no provedor SpeedGov. Algumas prefeituras não exigem certificado A1/A3 para autenticação no webservice, utilizando apenas usuário e senha. Sem essa configuração, o gateway tentava usar certificado e falhava na conexão com o webservice da prefeitura.',
      },
      {
        icon: '🔧',
        destaque:
          'eTransparência — validação obrigatória do nome do tomador com CPF/CNPJ',
        texto:
          'O provedor eTransparência rejeitava notas no webservice da prefeitura quando o tomador era identificado por CPF ou CNPJ mas não tinha o campo Nome preenchido. Foi adicionada uma validação local no método FormatarDadosTomador: para pessoa jurídica, exige razão social (erro 003); para pessoa física não-exterior, exige nome (erro 002). A validação usa IsNullOrWhiteSpace para cobrir nomes com apenas espaços. Isso evita que a nota chegue ao webservice e falhe com erro genérico da prefeitura.',
      },
      {
        icon: '🔧',
        destaque:
          'Barueri/SP — feature flag por SubscriptionID removida, fluxo V2 forçado',
        texto:
          'O provedor Barueri/SP tinha uma feature flag que controlava qual fluxo de emissão usar (V1 ou V2) baseado no SubscriptionID da empresa. Essa flag foi removida e agora todas as empresas de Barueri usam obrigatoriamente o fluxo V2 (layouts 3 e 4). Na consulta, a busca do XML no Portal Nacional agora depende apenas da presença de ChaveAcesso. Na recepção, o código foi simplificado com null-safe operators e sempre instancia RecepcionarLoteNFeComCertificadoV2, eliminando a lógica condicional por ambiente e subscription.',
      },
      {
        icon: '🏙️',
        destaque:
          "Estrela d'Oeste/SP — padronização do nome na busca de municípios",
        texto:
          'A busca de municípios no provedor FgMaiss não encontrava Estrela d\'Oeste/SP porque o nome era enviado com apóstrofo reto (\'), enquanto o cadastro interno usa backtick (`). Foi adicionada uma normalização no método FormatarDadosTomador que converte automaticamente "Estrela d\'Oeste" para "Estrela d`Oeste" antes da consulta, seguindo o mesmo padrão já existente para Mogi Mirim e Sant\'Ana do Livramento. Isso resolve erros de "município não encontrado" na emissão.',
      },
      {
        icon: '🏙️',
        destaque: 'Braço do Trombudo/SC — migrado para provedor BethaV3',
        texto:
          'O município de Braço do Trombudo/SC teve seu provedor de NFS-e atualizado para o BethaV3. A prefeitura migrou de sistema e as configurações de emissão, cancelamento e consulta foram atualizadas no ConfiguracoesMunicipios.xml para garantir compatibilidade com o novo webservice da Betha.',
      },
      {
        icon: '🏙️',
        destaque: 'Ponte Alta/SC — migrado para provedor BethaV3',
        texto:
          'O município de Ponte Alta/SC teve seu provedor de NFS-e atualizado para o BethaV3. A prefeitura migrou de sistema e as configurações foram ajustadas no gateway para garantir continuidade na emissão de notas fiscais eletrônicas com o novo webservice.',
      },
      {
        icon: '🏙️',
        destaque: 'Tapejara/RS — adesão ao Portal Nacional de NFS-e',
        texto:
          'O município de Tapejara/RS aderiu ao Portal Nacional de NFS-e e foi configurado no gateway. A prefeitura migrou do sistema anterior para o Portal Nacional unificado do governo federal, e as configurações de emissão, cancelamento e consulta foram atualizadas no ConfiguracoesMunicipios.xml com as novas URLs e layout.',
      },
      {
        icon: '🏙️',
        destaque: 'Resplendor/MG — migrado para provedor Fiorilli',
        texto:
          'O município de Resplendor/MG teve seu provedor de NFS-e atualizado para o Fiorilli. A prefeitura migrou de sistema e as configurações foram ajustadas no ConfiguracoesMunicipios.xml com 339 inserções e 330 remoções, indicando uma reconfiguração completa das operações de emissão, cancelamento e consulta para o novo webservice.',
      },
      {
        icon: '📊',
        destaque:
          'Bauru/SP — percentual federal zerado quando não há tributos discriminados',
        texto:
          'O município de Bauru/SP foi adicionado à regra que zera o percentual federal no XML da NFS-e quando não há tributos federais discriminados. Esse tratamento já existia para Vila Velha/ES, Cariacica/ES e Franca/SP. Sem essa configuração, a prefeitura de Bauru rejeitava notas porque o campo de percentual federal era enviado com valor inconsistente quando os tributos individuais (PIS, COFINS, CSLL, IR, INSS) não estavam preenchidos.',
      },
    ],
  },
  {
    tag: '03/05/2026',
    titulo: 'Domingo — 03 de Maio',
    data: '03/05/2026',
    itens: [
      {
        icon: '🌐',
        destaque:
          'Sapiranga/RS — correção de emissão para tomador estrangeiro no DBSeller',
        texto:
          'O provedor DBSeller (usado por Sapiranga/RS) rejeitava notas com tomador do exterior porque o schema XML não aceita a tag EnderecoExterior dentro de TomadorServico (erro E160), nem UF = "EX" (enum restrita a UFs brasileiras). A correção implementa o método CriarDadosTomadorInternal que, para tomadores estrangeiros em Sapiranga, usa o endereço normal com CodigoMunicipio = 9999999 (exigido pelo provedor — erro E109), preenche NifTomador com valor padrão e garante que IdentificacaoTomador esteja presente. A UF é obtida da configuração do município da empresa, respeitando a ordem do schema.',
      },
      {
        icon: '📊',
        destaque:
          'Faxinal do Soturno/RS — ativação de contribuição integrada no GOVBRv3',
        texto:
          'O município de Faxinal do Soturno/RS foi adicionado ao HashSet UsacIntContrib no provedor GOVBRv3. Essa configuração indica que o município utiliza contribuição integrada (IBS/CBS) no formato do Portal Nacional. Sem essa flag, as notas do município não incluíam os campos de contribuição exigidos pela reforma tributária, causando rejeições.',
      },
      {
        icon: '🏙️',
        destaque: 'Faxinal do Soturno/RS — migrado para provedor GOVBRv3',
        texto:
          'O município de Faxinal do Soturno/RS teve seu provedor de NFS-e alterado para o GOVBRv3 (padrão Cidade360). A prefeitura migrou de sistema e as configurações de emissão, cancelamento e consulta foram atualizadas no ConfiguracoesMunicipios.xml, incluindo a URL do endpoint recepcaoLote apontando para webapp1-faxinaldosoturno.cidade360.cloud. Os metadados do município também foram ajustados para o novo layout.',
      },
      {
        icon: '🔧',
        destaque:
          'Proxy BrightData — credenciais de acesso reatualizadas (PRD)',
        texto:
          'As credenciais de acesso do proxy BrightData foram reatualizadas no arquivo Environment.PRD.config. O proxy é utilizado para contornar bloqueios de IP em webservices de prefeituras que limitam acessos por geolocalização. Essa é uma atualização de rotina necessária para manter o serviço funcionando após rotação periódica de senhas.',
      },
      {
        icon: '🏙️',
        destaque: 'Mossoró/RN — campo CNAE ativado no provedor TinusV2',
        texto:
          'O município de Mossoró/RN foi adicionado à lista de municípios que utilizam o campo CNAE (Classificação Nacional de Atividades Econômicas) no provedor TinusV2. A prefeitura de Mossoró exige que o CNAE seja informado no XML da nota fiscal. Sem essa configuração, notas de empresas do município eram rejeitadas por falta do campo obrigatório.',
      },
      {
        icon: '🔧',
        destaque:
          'Salvador/BA — remoção de caracteres XML inválidos na razão social do tomador',
        texto:
          'O provedor de Salvador/BA (ABRASF v1) rejeitava notas quando a razão social do tomador continha caracteres especiais inválidos para XML (como caracteres de controle ou emojis). Foi adicionada a chamada RemoveInvalidXmlChars antes do Truncate no campo RazaoSocial, garantindo que apenas caracteres válidos sejam enviados no XML. Isso evita rejeições por erro de parsing no webservice da prefeitura.',
      },
      {
        icon: '🏙️',
        destaque:
          'Portal Nacional — campos de endereço com valores padrão para evitar rejeição de schema',
        texto:
          'Notas emitidas pelo Portal Nacional (NfseNacionalV2) estavam sendo rejeitadas quando campos de endereço do tomador ou prestador estavam vazios. A correção aplica valores padrão: "0" para número (nro), "-" para complemento (xCpl), bairro (xBairro) e logradouro (xLgr) quando não informados. O tratamento foi aplicado tanto no FormatarXmlLoteNFeBase quanto no FormatarXmlLoteNFeV2Base, com trim após aplicar os defaults.',
      },
    ],
  },
  {
    tag: '02/05/2026',
    titulo: 'Sábado — 02 de Maio',
    data: '02/05/2026',
    itens: [
      {
        icon: '🔧',
        destaque:
          'Proxy BrightData — atualização de senhas no ambiente de produção',
        texto:
          'As senhas de acesso ao proxy BrightData foram atualizadas no arquivo Environment.PRD.config. O proxy é utilizado para contornar bloqueios de IP em webservices de prefeituras que limitam acessos por geolocalização. A rotação periódica de credenciais é necessária para manter o serviço funcionando corretamente.',
      },
    ],
  },
  {
    tag: '01/05/2026',
    titulo: 'Quinta-feira — 01 de Maio',
    data: '01/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '30/04/2026',
    titulo: 'Quarta-feira — 30 de Abril',
    data: '30/04/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Natal/RN — migrado para o Portal Nacional de NFS-e',
        texto:
          'O município de Natal/RN foi migrado para o Portal Nacional de NFS-e. A capital potiguar trocou de sistema de emissão de notas fiscais eletrônicas e as configurações foram atualizadas no ConfiguracoesMunicipios.xml com as novas URLs, namespace e layout do Portal Nacional. Essa migração afeta todas as empresas que emitem NFS-e em Natal, que agora passam a usar o webservice unificado do governo federal.',
      },
    ],
  },
  {
    tag: '29/04/2026',
    titulo: 'Terça-feira — 29 de Abril',
    data: '29/04/2026',
    itens: [
      {
        icon: '🌐',
        destaque:
          'BethaV3 — ajuste na natureza de operação para prestação no exterior',
        texto:
          'A lógica do método ResolverNaturezaOperacao no provedor BethaV3 classificava notas como "Exportação de Serviço" (código 3) quando o tomador era do exterior OU quando o código IBGE da cidade de prestação era 9999999. Porém, há casos em que o tomador é estrangeiro mas o serviço é prestado no Brasil — nesses cenários a natureza correta é "Operação Tributável" (código 1). A correção remove a condição Tomador.EhDoExterior, mantendo apenas o código IBGE 9999999 como critério para exportação, alinhando o comportamento com a regra fiscal correta.',
      },
      {
        icon: '📊',
        destaque: 'EGoverneISS — envio de PIS e COFINS de apuração própria',
        texto:
          'O provedor EGoverneISS não enviava os valores de PIS e COFINS quando a empresa informava apuração própria desses tributos. Foi implementada a lógica que verifica se PisCofinsApuracaoPropria está presente e, quando os valores são maiores que zero, envia diretamente. Caso apenas a alíquota esteja informada, calcula o valor a partir da base de cálculo (ValorTotal da nota). Isso permite que empresas com regime de apuração própria tenham os tributos federais corretamente representados no XML enviado à prefeitura.',
      },
      {
        icon: '🔧',
        destaque:
          'FisconetV2 — Inscrição Municipal do tomador normalizada para apenas números',
        texto:
          'O campo InscricaoMunicipal do tomador no provedor Fisco.Net V2 estava sendo enviado com caracteres especiais (pontos, traços, barras) que algumas prefeituras não aceitam. Foi adicionado o método RemoveNonNumbers() que limpa o campo antes do envio, garantindo que apenas dígitos sejam transmitidos. A validação também inclui checagem de null para evitar NullReferenceException quando o tomador não possui inscrição municipal.',
      },
      {
        icon: '🏙️',
        destaque:
          'Alhandra/PB — revertido de NfseNacional para ElmarInformatica',
        texto:
          'O município de Alhandra/PB havia sido migrado para o provedor NfseNacional, mas após validação dos endpoints ficou constatado que o webservice correto da prefeitura é o ElmarInformatica. A configuração foi revertida no ConfiguracoesMunicipios.xml para restaurar a emissão correta de notas fiscais no município.',
      },
      {
        icon: '🏙️',
        destaque: 'Matinhos/PR — mudança de provedor para IPM',
        texto:
          'O município de Matinhos/PR teve seu provedor de NFS-e alterado para o IPM. A prefeitura migrou de sistema e as configurações de emissão, cancelamento e consulta foram atualizadas no gateway para garantir compatibilidade com o novo webservice.',
      },
      {
        icon: '🌐',
        destaque: 'BethaV3 — envio do campo cPaisResult em casos de exportação',
        texto:
          'O provedor BethaV3 não enviava o campo cPaisResult (código do país de resultado) quando a nota era de exportação de serviço com tomador do exterior. O Portal Nacional exige esse campo para classificar corretamente a operação de comércio exterior. Foi implementado o método que detecta automaticamente quando tribISSQN é "3" (exportação) e o tomador é estrangeiro, resolvendo o código do país via IPaisesService e preenchendo cPaisResult com a sigla correta. Se o país não for encontrado na base, uma ValidationException (GW911) é lançada para evitar envio incompleto.',
      },
      {
        icon: '📊',
        destaque:
          'NFOnline — envio obrigatório de IBS/CBS para empresas não optantes do Simples',
        texto:
          'O provedor NFOnline passou a enviar informações de IBS/CBS (Imposto sobre Bens e Serviços / Contribuição sobre Bens e Serviços) para empresas que não são optantes do Simples Nacional. O novo método CriarNFOnlineValores calcula alíquotas ajustadas e valores de IBS/CBS usando o serviço CalculoIbsCbsService, considerando reduções por município/UF. Essa implementação atende à obrigatoriedade da reforma tributária para empresas do regime normal.',
      },
      {
        icon: '📊',
        destaque:
          'NfseNacionalV2 — permite envio de IBS/CBS para Simples Nacional por subscription',
        texto:
          'O provedor NfseNacionalV2 bloqueava o envio de IBS/CBS para empresas optantes do Simples Nacional e MEI. Foi criada uma whitelist (SubscriptionsPermitirIBSCBSParaSimples) que permite exceções — a primeira empresa adicionada é a Royal Soft de Caxias do Sul/RS (provedor GIFv2). Quando a subscription está na whitelist, o bloqueio não é aplicado e os dados de IBS/CBS são enviados normalmente no XML.',
      },
      {
        icon: '🔧',
        destaque:
          'Araraquara/SP — tratamento para não enviar dados do tomador no GIAPv2',
        texto:
          'O provedor GIAPv2 em Araraquara/SP rejeitava notas quando os dados do tomador eram enviados em determinados cenários (consumidor final sem CPF/CNPJ). Foi adicionado um tratamento específico para o município que retorna null nos dados do tomador quando aplicável, seguindo o mesmo padrão já existente para Vinhedo/SP. Isso evita rejeições por dados incompletos do tomador.',
      },
      {
        icon: '🏙️',
        destaque: 'São Sebastião do Passé/BA — migrado para provedor Saatri',
        texto:
          'O município de São Sebastião do Passé/BA teve seu provedor de NFS-e atualizado para o Saatri. A prefeitura migrou de sistema e as configurações foram ajustadas no ConfiguracoesMunicipios.xml para garantir que emissão, cancelamento e consulta funcionem corretamente no novo webservice.',
      },
      {
        icon: '🔧',
        destaque:
          'Freire — tratamento de XML com declaração duplicada na consulta de lote',
        texto:
          'O provedor Freire (usado por Eunápolis/BA e outros municípios) retornava o XML da nota com uma declaração XML duplicada (<?xml version="1.0" encoding="ISO-8859-1"?>) dentro da tag <ListaNfse>, causando falha na desserialização. Foi adicionado um tratamento no FreireConsultarLoteNFe que remove a declaração duplicada antes de processar o XML, garantindo que a consulta de notas funcione corretamente.',
      },
      {
        icon: '🔧',
        destaque:
          'Elotech — tratamento de XML encapsulado em CDATA na consulta',
        texto:
          'A prefeitura que usa o provedor Elotech retornava o XML da nota fiscal encapsulado em um bloco CDATA (<![CDATA[...]]>), causando falha na leitura do XML pela API. Foi adicionado um tratamento no ElotechConsultarLoteNFe que detecta quando o XML começa com "<![CDATA[" e remove os delimitadores antes da desserialização, permitindo que o XML seja processado corretamente.',
      },
      {
        icon: '📊',
        destaque:
          'Subscription com PIS/COFINS zerados — campos ignorados no XML',
        texto:
          'Uma subscription específica solicitou que os campos de PIS/COFINS de apuração própria sejam ignorados quando todos os valores (BaseCalculo, AliquotaPis, AliquotaCofins, ValorPis, ValorCofins) estão zerados. Antes, o bloco pisCofinsProprio era enviado mesmo com zeros, causando inconsistências no XML. Agora, quando todos os campos são zero para essa empresa, o objeto é anulado e o bloco não é incluído no XML gerado.',
      },
      {
        icon: '🔧',
        destaque:
          'Empresa específica — campo cPaisResult anulado em exportação no GOVBRv3',
        texto:
          'Uma empresa específica do provedor GOVBRv3 estava tendo notas de exportação rejeitadas porque o campo cPaisResult era enviado quando não deveria. Foi adicionado um tratamento que, para essa empresa (identificada por GUID), anula o campo cPaisResult quando tribISSQN é "3" (exportação) e o tomador é do exterior. Isso resolve a rejeição sem afetar o comportamento das demais empresas.',
      },
      {
        icon: '🏙️',
        destaque: 'Rosário do Sul/RS — cancelamento configurado no GOVBRv3',
        texto:
          'O município de Rosário do Sul/RS foi adicionado à lista de municípios que não utilizam o campo nPedRegEvento (Pedido de Registro de Evento) no processo de cancelamento de NFS-e pelo provedor GOVBRv3. Sem essa configuração, o cancelamento falhava porque a prefeitura não aceita esse campo. Agora o cancelamento funciona corretamente para empresas do município.',
      },
      {
        icon: '🔧',
        destaque: 'SIGISSv1 — validação do documento do tomador corrigida',
        texto:
          'A validação do CPF/CNPJ do tomador no provedor SIGISSv1 (método ValidarDadosNota) podia causar NullReferenceException quando o campo CpfCnpj do tomador era nulo. Além disso, a comparação era feita mesmo quando o valor extraído da resposta era vazio, gerando falsos positivos. A correção adiciona acesso null-conditional (tomador?.CpfCnpj?.RemoveNonNumbers()) e só realiza a comparação quando o CPF/CNPJ extraído não é vazio, evitando exceções e validações incorretas.',
      },
      {
        icon: '🔧',
        destaque: 'Empresa adicionada à lista idsNovoRespTecnico',
        texto:
          'Uma nova empresa foi adicionada ao HashSet idsNovoRespTecnico no RecepcionarLoteNFeV4. Essa lista controla quais empresas utilizam o novo formato de preenchimento do bloco Responsável Técnico no XML do Portal Nacional de NFS-e. A inclusão garante que as notas dessa empresa sejam emitidas com o formato atualizado exigido pela SEFIN.',
      },
      {
        icon: '🏙️',
        destaque: 'Belmonte/SC — migrado para provedor Saatri',
        texto:
          'O município de Belmonte/SC teve seu provedor de NFS-e alterado para o Saatri. A prefeitura migrou de sistema e as configurações foram atualizadas no gateway para garantir continuidade na emissão de notas fiscais eletrônicas.',
      },
      {
        icon: '🏙️',
        destaque: 'Santa Izabel do Pará/PA — ativado no provedor PortalFacil',
        texto:
          'O município de Santa Izabel do Pará/PA foi ativado para emissão de NFS-e pelo provedor PortalFacil. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no gateway para permitir emissão, cancelamento e consulta.',
      },
      {
        icon: '🌐',
        destaque:
          'GIFv2 — valores de comércio exterior padronizados para Caxias do Sul/RS',
        texto:
          'O provedor GIFv2 (Caxias do Sul/RS) rejeitava notas com tomador do exterior porque os campos de comércio exterior (modo prestação, vínculo, moeda, AFCOMEX, movimentação temporária, MDIC) e os dados do endereço exterior (xEstProvReg, cEndPost) não eram preenchidos com os valores padrão aceitos pelo webservice. Foram sobrescritos os métodos FormatarEnderecoTomador e FormatarDadosServico para preencher automaticamente esses campos com valores padronizados ("0", "9", "790", "NI") quando o tomador é do exterior.',
      },
      {
        icon: '🔧',
        destaque:
          'Portal Nacional — endereço do tomador com número "0" quando não informado',
        texto:
          'Notas emitidas pelo Portal Nacional estavam sendo rejeitadas quando o tomador não tinha número de endereço informado. A prefeitura exige que o campo número esteja preenchido. Foi implementado um ajuste que envia "0" como número quando o dado não é informado, e "-" para complemento e bairro quando vazios, evitando rejeições por campos obrigatórios ausentes.',
      },
      {
        icon: '🔧',
        destaque: 'Proxy BrightData — credenciais de acesso atualizadas',
        texto:
          'As credenciais de acesso do proxy da BrightData foram atualizadas nos arquivos de configuração de ambiente (HML e PRD). O proxy é utilizado para contornar bloqueios de IP em webservices de prefeituras que limitam acessos por geolocalização. A rotação periódica de credenciais é necessária para manter o serviço funcionando.',
      },
      {
        icon: '🔧',
        destaque: 'EGoverneISS — fallback de consulta sem dados do tomador',
        texto:
          'A consulta de lote no provedor EGoverneISS falhava em encontrar notas quando os dados do tomador (CPF/CNPJ) não correspondiam exatamente ao registrado na prefeitura. Foi implementado um mecanismo de fallback: se a primeira consulta retorna "Não foram encontradas Notas Fiscais" e havia CPF/CNPJ do tomador informado, uma segunda consulta é realizada sem esses dados. Isso resolve casos de sincronização onde o documento do tomador tem formatação diferente entre o sistema e a prefeitura.',
      },
      {
        icon: '🔧',
        destaque:
          'EGoverneISS — tratamento para consulta sem notas encontradas',
        texto:
          'O provedor EGoverneISS lançava exceção quando a consulta de lote retornava mensagem indicando que nenhuma nota foi encontrada com os parâmetros informados. Em vez de falhar, o sistema agora preenche os DadosPrefeitura (número, código de verificação, data de autorização) com os dados disponíveis e retorna o NFeServico normalmente, evitando que notas fiquem travadas em "em emissão" por falha na sincronização.',
      },
      {
        icon: '🏙️',
        destaque: 'Quaraí/RS — ativado no provedor GOVBRv3',
        texto:
          'O município de Quaraí/RS foi ativado para emissão de NFS-e pelo provedor GOVBRv3. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no gateway, incluindo ajustes nos arquivos de teste do provedor.',
      },
      {
        icon: '📊',
        destaque:
          'Fortaleza/CE — PIS/COFINS conforme NT007 ampliado para todo o provedor',
        texto:
          'A implementação de PIS e COFINS conforme a Nota Técnica 007 estava restrita a uma empresa específica de Fortaleza/CE (via allowlist por GUID). A restrição foi removida, ampliando o comportamento padronizado para todas as empresas do provedor. O método CriarValoresServicoFortaleza (específico) foi eliminado, e agora todas as empresas utilizam a lógica padrão de apuração e retenção de PIS/COFINS conforme a NT007.',
      },
      {
        icon: '🏙️',
        destaque: 'Paial/SC — migrado para provedor IPM',
        texto:
          'O município de Paial/SC teve seu provedor de NFS-e atualizado para o IPM. A prefeitura migrou de sistema e as configurações foram ajustadas no ConfiguracoesMunicipios.xml para garantir compatibilidade com o novo webservice.',
      },
      {
        icon: '🔧',
        destaque: 'Municípios ajustados para Portal Nacional V2',
        texto:
          'Municípios que estavam configurados com o provedor NfseNacional (v1) foram migrados para o Portal Nacional V2 (NfseNacionalV2). A versão 2 do portal traz suporte a novos campos da reforma tributária (IBS/CBS), layout atualizado e melhor compatibilidade com as exigências atuais. Os testes de emissão padrão também foram atualizados para refletir o novo cenário.',
      },
    ],
  },
  {
    tag: '28/04/2026',
    titulo: 'Segunda-feira — 28 de Abril',
    data: '28/04/2026',
    itens: [
      {
        icon: '📊',
        destaque:
          'NfseNacionalV2 — correção da natureza de operação para empresa com tomador do exterior',
        texto:
          'Uma empresa específica que presta serviços para tomadores do exterior estava tendo suas notas classificadas como "Exportação de Serviço" (código 3), quando o correto era "Operação tributável" (código 1). O fluxo padrão do NfseNacionalV2 classifica automaticamente notas com tomador estrangeiro como exportação. Foi adicionada uma verificação por ID da empresa no método ResolverNaturezaOperacao que retorna a natureza tributável antes de cair no fluxo genérico, corrigindo a classificação fiscal.',
      },
      {
        icon: '🌐',
        destaque:
          'GIFv2 — correção de rejeições para tomador exterior em Caxias do Sul/RS',
        texto:
          'O provedor GIFv2 (usado por Caxias do Sul/RS) rejeitava notas com tomador do exterior porque os campos de comércio exterior (mdPrestacao, vincPrest, mecAFComexP, mecAFComexT, movTempBens) e os dados do tomador estrangeiro (cNaoNIF, endereço exterior) não eram preenchidos com os valores padrão exigidos pelo webservice. Foram implementados os métodos FormatarDadosServico, FormatarDadosTomador e FormatarEnderecoTomador que detectam automaticamente quando o tomador é do exterior e preenchem os campos com valores "desconhecido/não informado" (código 0 ou "NI").',
      },
      {
        icon: '🏙️',
        destaque: 'Quaraí/RS — ativado no provedor GOVBRv3',
        texto:
          'O município de Quaraí/RS foi ativado para emissão de NFS-e pelo provedor GOVBRv3. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no gateway com as URLs, namespace e configurações necessárias para emissão, cancelamento e consulta.',
      },
      {
        icon: '🔧',
        destaque: 'EGoverneISS — fallback de consulta sem dados do tomador',
        texto:
          'A consulta de lote no provedor EGoverneISS falhava quando os dados do tomador não correspondiam ao registrado na prefeitura. Foi implementado um mecanismo de fallback que, ao receber a mensagem "Não foram encontradas Notas Fiscais com os parâmetros informados", zera os campos CPFTomador e CNPJTomador e realiza uma nova consulta. Isso resolve problemas de sincronização onde o documento do tomador tem formatação diferente.',
      },
      {
        icon: '📊',
        destaque:
          'NfseNacionalV2 — IBS/CBS permitido para Simples Nacional por subscription',
        texto:
          'O provedor NfseNacionalV2 bloqueava o envio de IBS/CBS para empresas optantes do Simples Nacional. Foi criada uma whitelist que permite exceções por subscription — a primeira empresa adicionada é a Royal Soft de Caxias do Sul/RS. Quando a subscription está na whitelist, os dados de IBS/CBS são enviados normalmente, atendendo à obrigatoriedade da reforma tributária para essa empresa específica.',
      },
      {
        icon: '🏙️',
        destaque: 'Paial/SC — migrado para provedor IPM',
        texto:
          'O município de Paial/SC teve seu provedor de NFS-e alterado para o IPM. A prefeitura migrou de sistema e as configurações de emissão foram atualizadas no gateway para garantir compatibilidade com o novo webservice utilizado pela prefeitura.',
      },
    ],
  },
  {
    tag: '27/04/2026',
    titulo: 'Domingo — 27 de Abril',
    data: '27/04/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Paraibuna/SP — adesão ao Portal Nacional de NFS-e',
        texto:
          'O município de Paraibuna/SP aderiu ao Portal Nacional de NFS-e e foi configurado no gateway. A prefeitura migrou do sistema anterior para o Portal Nacional, e as configurações de emissão, cancelamento e consulta foram atualizadas no ConfiguracoesMunicipios.xml com as novas URLs e layout do webservice unificado do governo federal.',
      },
      {
        icon: '🔧',
        destaque:
          'EGoverneISS — ajuste de 4 horas na data de competência para consulta de nota',
        texto:
          'A consulta de nota fiscal no provedor EGoverneISS falhava em encontrar notas emitidas próximo à virada do dia porque a DataInicial da busca usava exatamente a data de competência. O webservice do EGoverneISS trabalha com fuso horário diferente, e notas emitidas no final do dia podiam ficar com timestamp do dia seguinte no sistema da prefeitura. A correção subtrai 4 horas da data de competência na consulta (DataCompetencia.AddHours(-4)), ampliando a janela de busca e garantindo que a nota seja encontrada mesmo com diferença de fuso.',
      },
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
];
