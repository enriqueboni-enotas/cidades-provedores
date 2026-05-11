var changelogData = [
  {
    tag: '11/05/2026',
    titulo: 'Segunda-feira — 11 de Maio',
    data: '11/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '10/05/2026',
    titulo: 'Domingo — 10 de Maio',
    data: '10/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '09/05/2026',
    titulo: 'Sábado — 09 de Maio',
    data: '09/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
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
        texto: 'O município de Nerópolis/GO teve seu provedor de NFS-e atualizado para o ArrecadaNet. A prefeitura migrou de sistema e as configurações de emissão, cancelamento e consulta foram atualizadas no ConfiguracoesMunicipios.xml com 16 inserções e 28 remoções, indicando uma reconfiguração completa dos endpoints e parâmetros do webservice.',
      },
      {
        icon: '��',
        destaque: 'NfseNacionalV2 — novos clientes na lista de envio obrigatório de NBS para Simples',
        texto: 'Dois novos GUIDs de subscriptions foram adicionados à coleção SubscriptionsSempreEnviarNBS no provedor NfseNacionalV2. Essa lista força o envio do campo NBS (Nomenclatura Brasileira de Serviços) mesmo para empresas optantes do Simples Nacional em Mogi Guaçu/SP. Sem essa configuração, o campo NBS não era incluído no XML e a prefeitura rejeitava a nota por falta de informação obrigatória.',
      },
      {
        icon: '📊',
        destaque: 'NfseNacionalV2 — Superlógica adicionada à whitelist de IBS/CBS para Simples',
        texto: 'A subscription da Superlógica (Belo Horizonte/MG) foi adicionada à coleção SubscriptionsPermitirIBSCBSParaSimples no provedor NfseNacionalV2. Essa whitelist permite que empresas optantes do Simples Nacional enviem os campos de IBS (Imposto sobre Bens e Serviços) e CBS (Contribuição sobre Bens e Serviços) no XML da nota, atendendo à obrigatoriedade da reforma tributária para esse integrador específico.',
      },
      {
        icon: '🌐',
        destaque: 'SIGISSv1 — envio do modo de prestação para comércio exterior em Rio Grande/RS',
        texto: 'O provedor SIGISSv1 (Rio Grande/RS) não enviava o campo dps_serv_mdprestacao quando a nota tinha tomador no exterior ou código IBGE 9999999. Foi implementada lógica condicional no método CriarRps que detecta cenários de comércio exterior e atribui automaticamente o valor correto: "4" (serviço prestado no exterior) quando não há dados de ComercioExterior, ou o valor de ModalidadePrestacaoServico quando informado. Sem esse campo, notas de exportação eram rejeitadas pela prefeitura.',
      },
      {
        icon: '🏙️',
        destaque: 'Dumont/SP — flag NaoUsaAssinatura ativada no Fiorilli',
        texto: 'O município de Dumont/SP recebeu a flag NaoUsaAssinatura no provedor Fiorilli. Essa configuração indica que a prefeitura não exige assinatura digital no XML da NFS-e, permitindo que o gateway envie as notas sem assinar. Sem essa flag, o envio falhava porque o webservice da prefeitura rejeitava XMLs assinados.',
      },
      {
        icon: '🏙️',
        destaque: 'Ibiraci/MG — ativado no provedor Eelv3',
        texto: 'O município de Ibiraci/MG foi ativado para emissão de NFS-e pelo provedor Eelv3. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no gateway com as URLs, namespace e parâmetros necessários para emissão, cancelamento e consulta no webservice do Eelv3.',
      },
      {
        icon: '🏙️',
        destaque: 'Trombudo Central/SC — migrado para provedor BethaV3',
        texto: 'O município de Trombudo Central/SC teve seu provedor de NFS-e atualizado para o BethaV3. A prefeitura migrou de sistema e as configurações foram ajustadas no ConfiguracoesMunicipios.xml com 41 inserções e 37 remoções, indicando uma reconfiguração completa das operações de emissão, cancelamento e consulta para o novo webservice da Betha.',
      },
      {
        icon: '📊',
        destaque: 'Ilhabela/SP — envio de alíquotas IBS e CBS implementado no IIBrasil',
        texto: 'O provedor IIBrasil (Ilhabela/SP) passou a enviar as alíquotas de IBS e CBS no XML da nota fiscal. Foi criado o método CriarIIBrasilValoresServico que calcula as alíquotas considerando percentuais de redução tributária por município/UF via CalculoIbsCbsService. A lógica aplica-se apenas a empresas não optantes do Simples Nacional. Sem essa implementação, notas de Ilhabela eram rejeitadas por falta dos campos obrigatórios da reforma tributária.',
      },
      {
        icon: '📊',
        destaque: 'SILv4 — tratamento de IBS/CBS zerado para imunidade fiscal em Vila Velha/ES',
        texto: 'O provedor SILv4 recebeu um tratamento especial para cenários de imunidade fiscal em Vila Velha/ES. Quando a natureza da operação é "2" (imunidade) e o código de serviço é "080101", os campos pIBSUF, pCBS e vCBS são zerados automaticamente. A prefeitura exige que esses campos sejam enviados com valor "0.00" em vez de omitidos, e sem esse tratamento as notas eram rejeitadas por inconsistência nos dados tributários.',
      },
      {
        icon: '🆕',
        destaque: 'TiplanV3 — novo provedor implementado para Itaguaí/RJ',
        texto: 'Foi implementado o provedor TiplanV3 completo para o município de Itaguaí/RJ. O novo provedor inclui comunicação via HTTP JSON POST com certificado X.509, operações de recepção de lote, consulta, cancelamento e geração de PDF. A implementação segue o padrão de assinatura digital e formatação de valores específicos do Tiplan. O cancelamento está temporariamente bloqueado em homologação/produção enquanto a prefeitura finaliza a homologação do endpoint.',
      },
      {
        icon: '🔧',
        destaque: 'Barueri/SP — remoção de acentos do nome do tomador e ativação de NBS',
        texto: 'O provedor Barueri/SP rejeitava notas quando o nome/razão social do tomador continha caracteres acentuados (é, ã, ç, etc.). Foi adicionado RemoveAccent().ConvertToNormalizedASCIIString() no campo NomeRazaoSocial do layout V2, sanitizando o texto antes do envio. Além disso, a característica UsaNBS foi ativada no provedor para exibir o campo NBS no cadastro de empresa e produto.',
      },
      {
        icon: '🔧',
        destaque: 'FormatarLoteRpsV2Base — remoção de acentos e caracteres especiais',
        texto: 'O método de formatação de lote RPS V2 (base compartilhada entre provedores) recebeu tratamento para remover acentos e caracteres especiais dos campos de texto antes do envio. Essa correção complementa o ajuste específico de Barueri e resolve rejeições em outros provedores que utilizam o mesmo fluxo V2 quando nomes ou descrições contêm caracteres não-ASCII.',
      },
      {
        icon: '🌐',
        destaque: 'Directa — ajuste de emissão para tomador estrangeiro',
        texto: 'O provedor Directa tinha uma lógica desnecessária de 7 linhas para tratamento de tomador estrangeiro que foi simplificada para apenas 1 linha. A remoção do código redundante corrige o fluxo de emissão para notas com tomador do exterior, eliminando condições que podiam causar comportamento inesperado na formatação dos dados do tomador.',
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
        texto: 'O município de Paranapanema/SP foi migrado do provedor GOVBRv2 para o GOVBRv3. A configuração antiga foi removida e substituída por novos endpoints de homologação, produção e emissão sem certificado, além do namespace padrão do GOVBRv3. A migração garante compatibilidade com a versão mais recente do webservice Cidade360 utilizado pela prefeitura.',
      },
      {
        icon: '📊',
        destaque: 'GOVBRv3 — empresa adicionada à regra de envio de alíquota ISSQN para Simples',
        texto: 'Uma segunda empresa foi incluída na regra que permite o envio da alíquota ISSQN para optantes do Simples Nacional no provedor GOVBRv3. A condição exige que o regime especial de tributação seja "0" (sem regime especial). Sem essa inclusão, a empresa não conseguia enviar a alíquota corretamente e as notas eram rejeitadas pelo webservice da prefeitura por inconsistência nos dados tributários.',
      },
      {
        icon: '🏙️',
        destaque: 'Americano do Brasil/GO — ativado no provedor Centi',
        texto: 'O município de Americano do Brasil/GO foi ativado para emissão de NFS-e pelo provedor Centi. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no gateway com as URLs e parâmetros necessários para emissão, cancelamento e consulta no webservice do Centi.',
      },
      {
        icon: '🔧',
        destaque: 'SIGISSWebNew — valor padrão para campo nome_obra evitando erro na emissão',
        texto: 'O provedor SIGISSWebNew rejeitava notas quando o campo nome_obra era enviado como null no cenário de fallback (quando o endereço do imóvel não está disponível e o sistema usa o endereço do tomador). Foi adicionado um valor padrão de string vazia para o campo nome_obra nesse caminho, evitando o erro de gravação da obra no webservice da prefeitura. A correção é localizada no método RecepcionarLoteNFeAPI quando IndicadorOperacaoEnviaEnderecoImovelObra está ativo.',
      },
      {
        icon: '🏙️',
        destaque: 'Trindade/PE — flag NaoUsaAssinatura removida no Fiorilli',
        texto: 'O município de Trindade/PE tinha a flag NaoUsaAssinatura ativada no provedor Fiorilli, o que fazia o gateway não assinar digitalmente o XML antes do envio. Essa flag foi removida, significando que agora as notas de Trindade/PE são enviadas com assinatura digital. A prefeitura passou a exigir a assinatura no XML, e sem essa correção as notas eram rejeitadas por falta de assinatura.',
      },
      {
        icon: '📊',
        destaque: 'GOVBRv3 — alíquota ISSQN limpa quando regime especial é diferente de zero',
        texto: 'Foi implementada uma validação no provedor GOVBRv3 que limpa automaticamente o campo de alíquota (pAliq) quando o tipo de tributação ISSQN é "1" (tributável) mas o regime especial de tributação é diferente de "0". Prefeituras que usam o GOVBRv3 rejeitavam notas com alíquota informada em regimes especiais (MEI, estimativa, cooperativa, etc.) porque o campo não é aceito nesses cenários. A validação evita essas rejeições automaticamente.',
      },
      {
        icon: '📊',
        destaque: 'GOVBRv3 — nova empresa na validação temporária de cIntContrib',
        texto: 'Uma nova empresa foi adicionada à condição que aplica a validação temporária de cIntContrib (contribuição integrada IBS/CBS) no provedor GOVBRv3. Essa regra controla quais empresas participam do piloto de envio dos campos da reforma tributária. A inclusão amplia o escopo da validação para mais um caso específico, permitindo que a empresa envie os dados de IBS/CBS corretamente no XML.',
      },
    ],
  },
  {
    tag: '04/05/2026',
    titulo: 'Domingo — 04 de Maio',
    data: '04/05/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Timon/MA — emissão sem certificado digital configurada',
        texto: 'O município de Timon/MA foi configurado para permitir emissão de NFS-e sem certificado digital no provedor SpeedGov. Algumas prefeituras não exigem certificado A1/A3 para autenticação no webservice, utilizando apenas usuário e senha. Sem essa configuração, o gateway tentava usar certificado e falhava na conexão com o webservice da prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'eTransparência — validação obrigatória do nome do tomador com CPF/CNPJ',
        texto: 'O provedor eTransparência rejeitava notas no webservice da prefeitura quando o tomador era identificado por CPF ou CNPJ mas não tinha o campo Nome preenchido. Foi adicionada uma validação local no método FormatarDadosTomador: para pessoa jurídica, exige razão social (erro 003); para pessoa física não-exterior, exige nome (erro 002). A validação usa IsNullOrWhiteSpace para cobrir nomes com apenas espaços. Isso evita que a nota chegue ao webservice e falhe com erro genérico da prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Barueri/SP — feature flag por SubscriptionID removida, fluxo V2 forçado',
        texto: 'O provedor Barueri/SP tinha uma feature flag que controlava qual fluxo de emissão usar (V1 ou V2) baseado no SubscriptionID da empresa. Essa flag foi removida e agora todas as empresas de Barueri usam obrigatoriamente o fluxo V2 (layouts 3 e 4). Na consulta, a busca do XML no Portal Nacional agora depende apenas da presença de ChaveAcesso. Na recepção, o código foi simplificado com null-safe operators e sempre instancia RecepcionarLoteNFeComCertificadoV2, eliminando a lógica condicional por ambiente e subscription.',
      },
      {
        icon: '🏙️',
        destaque: "Estrela d''Oeste/SP — padronização do nome na busca de municípios",
        texto: 'A busca de municípios no provedor FgMaiss não encontrava Estrela d''Oeste/SP porque o nome era enviado com apóstrofo reto, enquanto o cadastro interno usa backtick. Foi adicionada uma normalização no método FormatarDadosTomador que converte automaticamente antes da consulta, seguindo o mesmo padrão já existente para Mogi Mirim e Sant''Ana do Livramento. Isso resolve erros de "município não encontrado" na emissão.',
      },
      {
        icon: '🏙️',
        destaque: 'Braço do Trombudo/SC — migrado para provedor BethaV3',
        texto: 'O município de Braço do Trombudo/SC teve seu provedor de NFS-e atualizado para o BethaV3. A prefeitura migrou de sistema e as configurações de emissão, cancelamento e consulta foram atualizadas no ConfiguracoesMunicipios.xml para garantir compatibilidade com o novo webservice da Betha.',
      },
      {
        icon: '🏙️',
        destaque: 'Ponte Alta/SC — migrado para provedor BethaV3',
        texto: 'O município de Ponte Alta/SC teve seu provedor de NFS-e atualizado para o BethaV3. A prefeitura migrou de sistema e as configurações foram ajustadas no gateway para garantir continuidade na emissão de notas fiscais eletrônicas com o novo webservice.',
      },
      {
        icon: '🏙️',
        destaque: 'Tapejara/RS — adesão ao Portal Nacional de NFS-e',
        texto: 'O município de Tapejara/RS aderiu ao Portal Nacional de NFS-e e foi configurado no gateway. A prefeitura migrou do sistema anterior para o Portal Nacional unificado do governo federal, e as configurações de emissão, cancelamento e consulta foram atualizadas no ConfiguracoesMunicipios.xml com as novas URLs e layout.',
      },
      {
        icon: '🏙️',
        destaque: 'Resplendor/MG — migrado para provedor Fiorilli',
        texto: 'O município de Resplendor/MG teve seu provedor de NFS-e atualizado para o Fiorilli. A prefeitura migrou de sistema e as configurações foram ajustadas no ConfiguracoesMunicipios.xml com 339 inserções e 330 remoções, indicando uma reconfiguração completa das operações de emissão, cancelamento e consulta para o novo webservice.',
      },
      {
        icon: '📊',
        destaque: 'Bauru/SP — percentual federal zerado quando não há tributos discriminados',
        texto: 'O município de Bauru/SP foi adicionado à regra que zera o percentual federal no XML da NFS-e quando não há tributos federais discriminados. Esse tratamento já existia para Vila Velha/ES, Cariacica/ES e Franca/SP. Sem essa configuração, a prefeitura de Bauru rejeitava notas porque o campo de percentual federal era enviado com valor inconsistente quando os tributos individuais (PIS, COFINS, CSLL, IR, INSS) não estavam preenchidos.',
      },
    ],
  },
  {
    tag: '03/05/2026',
    titulo: 'Sábado — 03 de Maio',
    data: '03/05/2026',
    itens: [
      {
        icon: '🌐',
        destaque: 'Sapiranga/RS — correção de emissão para tomador estrangeiro no DBSeller',
        texto: 'O provedor DBSeller (usado por Sapiranga/RS) rejeitava notas com tomador do exterior porque o schema XML não aceita a tag EnderecoExterior dentro de TomadorServico (erro E160), nem UF = "EX" (enum restrita a UFs brasileiras). A correção implementa o método CriarDadosTomadorInternal que, para tomadores estrangeiros em Sapiranga, usa o endereço normal com CodigoMunicipio = 9999999 (exigido pelo provedor — erro E109), preenche NifTomador com valor padrão e garante que IdentificacaoTomador esteja presente.',
      },
      {
        icon: '📊',
        destaque: 'Faxinal do Soturno/RS — ativação de contribuição integrada no GOVBRv3',
        texto: 'O município de Faxinal do Soturno/RS foi adicionado ao HashSet UsacIntContrib no provedor GOVBRv3. Essa configuração indica que o município utiliza contribuição integrada (IBS/CBS) no formato do Portal Nacional. Sem essa flag, as notas do município não incluíam os campos de contribuição exigidos pela reforma tributária, causando rejeições.',
      },
      {
        icon: '🏙️',
        destaque: 'Faxinal do Soturno/RS — migrado para provedor GOVBRv3',
        texto: 'O município de Faxinal do Soturno/RS teve seu provedor de NFS-e alterado para o GOVBRv3 (padrão Cidade360). A prefeitura migrou de sistema e as configurações de emissão, cancelamento e consulta foram atualizadas no ConfiguracoesMunicipios.xml, incluindo a URL do endpoint recepcaoLote apontando para webapp1-faxinaldosoturno.cidade360.cloud.',
      },
      {
        icon: '🔧',
        destaque: 'Proxy BrightData — credenciais de acesso reatualizadas (PRD)',
        texto: 'As credenciais de acesso do proxy BrightData foram reatualizadas no arquivo Environment.PRD.config. O proxy é utilizado para contornar bloqueios de IP em webservices de prefeituras que limitam acessos por geolocalização. Essa é uma atualização de rotina necessária para manter o serviço funcionando após rotação periódica de senhas.',
      },
      {
        icon: '🏙️',
        destaque: 'Mossoró/RN — campo CNAE ativado no provedor TinusV2',
        texto: 'O município de Mossoró/RN foi adicionado à lista de municípios que utilizam o campo CNAE (Classificação Nacional de Atividades Econômicas) no provedor TinusV2. A prefeitura de Mossoró exige que o CNAE seja informado no XML da nota fiscal. Sem essa configuração, notas de empresas do município eram rejeitadas por falta do campo obrigatório.',
      },
      {
        icon: '🔧',
        destaque: 'Salvador/BA — remoção de caracteres XML inválidos na razão social do tomador',
        texto: 'O provedor de Salvador/BA (ABRASF v1) rejeitava notas quando a razão social do tomador continha caracteres especiais inválidos para XML (como caracteres de controle ou emojis). Foi adicionada a chamada RemoveInvalidXmlChars antes do Truncate no campo RazaoSocial, garantindo que apenas caracteres válidos sejam enviados no XML.',
      },
      {
        icon: '🏙️',
        destaque: 'Portal Nacional — campos de endereço com valores padrão para evitar rejeição de schema',
        texto: 'Notas emitidas pelo Portal Nacional (NfseNacionalV2) estavam sendo rejeitadas quando campos de endereço do tomador ou prestador estavam vazios. A correção aplica valores padrão: "0" para número (nro), "-" para complemento (xCpl), bairro (xBairro) e logradouro (xLgr) quando não informados.',
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
        destaque: 'Proxy BrightData — atualização de senhas no ambiente de produção',
        texto: 'As senhas de acesso ao proxy BrightData foram atualizadas no arquivo Environment.PRD.config. O proxy é utilizado para contornar bloqueios de IP em webservices de prefeituras que limitam acessos por geolocalização. A rotação periódica de credenciais é necessária para manter o serviço funcionando corretamente.',
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
        texto: 'O município de Natal/RN foi migrado para o Portal Nacional de NFS-e. A capital potiguar trocou de sistema de emissão de notas fiscais eletrônicas e as configurações foram atualizadas no ConfiguracoesMunicipios.xml com as novas URLs, namespace e layout do Portal Nacional. Essa migração afeta todas as empresas que emitem NFS-e em Natal, que agora passam a usar o webservice unificado do governo federal.',
      },
    ],
  },
];