var changelogData = [
  {
    tag: '12/05/2026',
    titulo: 'Terça-feira — 12 de Maio',
    data: '12/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '11/05/2026',
    titulo: 'Segunda-feira — 11 de Maio',
    data: '11/05/2026',
    itens: [
      {
        icon: '🏙️',
        destaque:
          'Joinville/SC — número de lote não reutilizável no Publica V1',
        texto:
          'O município de Joinville/SC no provedor Publica V1 estava reutilizando o mesmo número de lote em tentativas de reenvio, o que causava rejeição pela prefeitura por duplicidade. Foi ativada a flag NumeroLoteNaoReutilizavel especificamente para Joinville (IBGE 4209102), garantindo que cada reenvio use um número de lote diferente. A correção é localizada e não afeta outros municípios do mesmo provedor.',
      },
      {
        icon: '🔗',
        destaque: 'Eldorado do Sul/RS — URL atualizada no provedor GOVBRv3',
        texto:
          'A URL do webservice de Eldorado do Sul/RS no provedor GOVBRv3 foi atualizada. A prefeitura alterou o endereço do endpoint e sem essa atualização as notas ficavam com erro de conexão ao tentar emitir, cancelar ou consultar NFS-e no município.',
      },
      {
        icon: '🔧',
        destaque:
          'Sefin — consulta por RPS com correção de data e detecção de duplicidade',
        texto:
          'O provedor Sefin apresentava dois problemas na consulta por RPS: a data de autorização podia ser anterior à data de criação da nota (causando inconsistência nos registros), e não detectava corretamente quando um RPS já havia sido processado. A correção garante que dataAutorizacao nunca seja menor que CreatedAt (usando CreatedAt + 2 minutos como fallback) e marca RpsJaInformado quando a resposta contém "RPS já processado" ou "504 Gateway Time-out". Também foram removidos campos desnecessários do payload (cstIbsCbs, classificacaoTributariaIbsCbs, codigoNbs).',
      },
      {
        icon: '🔧',
        destaque:
          'AbaseV2 — tratamento de XML antigo para geração de PDF offline',
        texto:
          'Notas antigas do provedor AbaseV2 estavam falhando na geração de PDF offline porque o XML armazenado continha a estrutura completa da resposta SOAP (ConsultarNfseDpsResponse) em vez de apenas o elemento NFSe. Foi criado o método TratarXml que detecta XMLs nesse formato e extrai apenas o elemento NFSe do namespace correto, permitindo que o gerador de PDF processe o documento corretamente.',
      },
      {
        icon: '📊',
        destaque:
          'IPM V2 — correção de PIS e COFINS para apuração própria e retidos',
        texto:
          'O provedor IPM V2 tinha uma falha na regra de envio dos valores de PIS e COFINS: quando o payload já informava a alíquota, o sistema tentava recalcular dividindo pelo valor base, gerando resultados incorretos. A correção separa os fluxos de apuração própria (PisCofinsApuracaoPropria) e impostos federais, centraliza o preenchimento de valores retidos no helper FormatarPisCofinsRetidos, e protege contra divisão por zero quando a base de cálculo é zerada (lançando ValidationException GW3348).',
      },
      {
        icon: '🏙️',
        destaque:
          'SILv4 — valores IBS/CBS zerados para cenário de imunidade fiscal',
        texto:
          'Uma empresa específica no provedor SILv4 precisava enviar os campos de IBS e CBS com valor zero em cenários de imunidade fiscal. Foi implementada lógica condicional que zera pIBSUF, pCBS, vCBS e os totais de IBS quando a operação/natureza e código de serviço indicam imunidade. Sem esse tratamento, a prefeitura rejeitava a nota por inconsistência entre a natureza da operação e os valores tributários informados.',
      },
      {
        icon: '🔧',
        destaque:
          'SIGISS v1 — mensagem clara para notas rejeitadas pela ADN em Marília/SP',
        texto:
          'O provedor SIGISS v1 retornava mensagens genéricas quando uma nota era rejeitada pela ADN (Administração Direta Nacional). Foi adicionado tratamento que detecta essa situação e retorna uma mensagem customizada orientando o usuário a consultar o portal da prefeitura no menu "Envio ADN". Também foi aumentada a tolerância de validação de data de emissão de 65 minutos para 1 dia, resolvendo divergências causadas pela falta de hora nos registros. Adicionalmente, uma lista de notas específicas de Marília/SP foi configurada para sincronizar sem validar data de competência.',
      },
      {
        icon: '🏙️',
        destaque:
          'Passos/MG — validação de município de incidência para código de serviço 1212',
        texto:
          'O município de Passos/MG no provedor WebISS V2 rejeitava notas com código de serviço "1212" quando o município de incidência era preenchido. Foi adicionada validação específica que impede o preenchimento do município de incidência para esse código de serviço em Passos/MG. Para outros serviços, a lógica existente é preservada (preenche apenas quando ISS não é retido e prestação é fora do município).',
      },
      {
        icon: '🧮',
        destaque: 'SIGISS-Web — correção de arredondamento do CSLL',
        texto:
          'O provedor SIGISS-Web (módulo API) calculava incorretamente o valor do CSLL devido a um arredondamento indevido: Math.Round(decimal) no .NET Framework arredonda para inteiro, não para 2 casas decimais. A correção remove esse arredondamento duplo e reformula o método FormatarImpostosFederaisRetidos para usar Math.Round com 2 casas e MidpointRounding.AwayFromZero em cada cenário de retenção. Também corrige o case "8" (PIS/COFINS não retidos, CSLL retido) que atribuía alíquota zero.',
      },
      {
        icon: '📊',
        destaque:
          'Uberaba/MG — validação para empresas que não enviam alíquota ISS',
        texto:
          'Empresas não optantes do Simples Nacional em Uberaba/MG estavam tendo notas rejeitadas por enviar alíquota ISS quando a prefeitura não aceita esse campo para determinados cenários. Foi criada uma lista centralizada (ListaEmpresasNaoEnviamAliquotaIssNaoOptantesSimplesNacional) que suprime automaticamente os campos ValorIss e Aliquota para as empresas cadastradas. A nova empresa do card #99117 foi adicionada à lista.',
      },
      {
        icon: '🔧',
        destaque:
          'Responsável técnico — nova empresa adicionada em Curitiba/PR',
        texto:
          'Uma empresa de Curitiba/PR foi adicionada à lista idsNovoRespTecnico no processamento de NF-e V4. Quando uma empresa está nessa lista, o XML gerado inclui as informações do responsável técnico da Nota Gateway (CNPJ, contato, email) e o hash CSRT é calculado com os dados atualizados. Sem essa inclusão, a SEFAZ rejeitava a nota por inconsistência no CSRT.',
      },
      {
        icon: '🔧',
        destaque:
          'São Paulo/SP — série do RPS com hífen tratada como vazio na consulta de lote',
        texto:
          'O provedor de São Paulo/SP falhava ao consultar lotes processados quando a série do RPS armazenada internamente era apenas um hífen ("-"). A comparação com a série retornada pela API da prefeitura não encontrava correspondência porque o hífen não era removido. A correção aplica Replace("-","") na série antes da comparação, normalizando "1-A" para "1A" e "-" para vazio, garantindo o matching correto entre notas internas e respostas da prefeitura.',
      },
      {
        icon: '🏙️',
        destaque: 'Jeremoabo/BA — ativado no provedor Saatri',
        texto:
          'O município de Jeremoabo/BA foi ativado para emissão de NFS-e pelo provedor Saatri. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no gateway com as URLs e parâmetros necessários para emissão, cancelamento e consulta.',
      },
      {
        icon: '🌐',
        destaque:
          'IPM — campo codigo_pais_prestacao_servico implementado para serviço no exterior',
        texto:
          'O provedor IPM não enviava o campo codigo_pais_prestacao_servico no XML quando a prestação de serviço era no exterior, causando rejeição pela prefeitura. Foi criado o método assíncrono ResolverCodigoPais que usa IPaisesService para buscar o código do país e preencher o campo automaticamente. A lógica detecta cenários de exterior pelo CidadePrestacaoServico e normaliza o código IBGE (9999999 → 99999). Novos códigos de erro (GW911/GW912/GW913) foram criados para cenários onde o país não é informado ou não é encontrado.',
      },
      {
        icon: '🏙️',
        destaque: 'São Ludgero/SC — migrado para NfseNacionalV2',
        texto:
          'O município de São Ludgero/SC foi migrado para o provedor NfseNacionalV2 (Portal Nacional de NFS-e). A prefeitura aderiu ao Portal Nacional unificado do governo federal e as configurações de emissão, cancelamento e consulta foram atualizadas para o novo webservice.',
      },
      {
        icon: '🌐',
        destaque:
          'Saatri — suporte a tomador estrangeiro na emissão assíncrona',
        texto:
          'O provedor Saatri não suportava emissão de NFS-e com tomador do exterior na modalidade assíncrona. Foram implementados os overrides CriarEnderecoTomador (que valida e define o código do país via IPaisesService, lançando erro se ausente) e CriarDadosTomador (que preenche NifTomador com valor padrão "99999999999" quando CPF/CNPJ não está disponível). A correção melhora a conformidade e integridade dos dados para emissão internacional.',
      },
      {
        icon: '🔧',
        destaque:
          'Métricas MunicipioHealthCheck — melhorias e ajustes de inicialização',
        texto:
          'Foram realizados ajustes no projeto de métricas de saúde dos municípios (MunicipioHealthCheck): correção na inicialização do serviço, ajuste nos nomes dos meters para padronização, e melhorias gerais na coleta de métricas. Essas métricas monitoram a disponibilidade dos webservices das prefeituras e ajudam a identificar rapidamente quando um município está fora do ar.',
      },
      {
        icon: '🔧',
        destaque: 'Conflitos dev — merge de 12/05/2026 resolvido',
        texto:
          'Resolução de conflitos no merge da branch notagateway-sync para a dev em 12/05/2026. Esse processo é rotineiro e ocorre quando múltiplos PRs alteram os mesmos arquivos — os conflitos são resolvidos manualmente para garantir que todas as alterações sejam integradas corretamente na branch de produção.',
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
    titulo: 'Domingo — 04 de Maio',
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
          "A busca de municípios no provedor FgMaiss não encontrava Estrela d'Oeste/SP porque o nome era enviado com apóstrofo reto, enquanto o cadastro interno usa backtick. Foi adicionada uma normalização no método FormatarDadosTomador que converte automaticamente antes da consulta, seguindo o mesmo padrão já existente para Mogi Mirim e Sant'Ana do Livramento. Isso resolve erros de município não encontrado na emissão.",
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
    titulo: 'Sábado — 03 de Maio',
    data: '03/05/2026',
    itens: [
      {
        icon: '🌐',
        destaque:
          'Sapiranga/RS — correção de emissão para tomador estrangeiro no DBSeller',
        texto:
          'O provedor DBSeller (usado por Sapiranga/RS) rejeitava notas com tomador do exterior porque o schema XML não aceita a tag EnderecoExterior dentro de TomadorServico (erro E160), nem UF = "EX" (enum restrita a UFs brasileiras). A correção implementa o método CriarDadosTomadorInternal que, para tomadores estrangeiros em Sapiranga, usa o endereço normal com CodigoMunicipio = 9999999 (exigido pelo provedor — erro E109), preenche NifTomador com valor padrão e garante que IdentificacaoTomador esteja presente.',
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
          'O município de Faxinal do Soturno/RS teve seu provedor de NFS-e alterado para o GOVBRv3 (padrão Cidade360). A prefeitura migrou de sistema e as configurações de emissão, cancelamento e consulta foram atualizadas no ConfiguracoesMunicipios.xml, incluindo a URL do endpoint recepcaoLote apontando para webapp1-faxinaldosoturno.cidade360.cloud.',
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
          'O provedor de Salvador/BA (ABRASF v1) rejeitava notas quando a razão social do tomador continha caracteres especiais inválidos para XML (como caracteres de controle ou emojis). Foi adicionada a chamada RemoveInvalidXmlChars antes do Truncate no campo RazaoSocial, garantindo que apenas caracteres válidos sejam enviados no XML.',
      },
      {
        icon: '🏙️',
        destaque:
          'Portal Nacional — campos de endereço com valores padrão para evitar rejeição de schema',
        texto:
          'Notas emitidas pelo Portal Nacional (NfseNacionalV2) estavam sendo rejeitadas quando campos de endereço do tomador ou prestador estavam vazios. A correção aplica valores padrão: "0" para número (nro), "-" para complemento (xCpl), bairro (xBairro) e logradouro (xLgr) quando não informados.',
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
];
