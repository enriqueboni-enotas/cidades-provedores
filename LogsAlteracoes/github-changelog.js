var changelogData = [
  {
    tag: '15/05/2026',
    titulo: 'Quinta-feira — 15 de Maio',
    data: '15/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '14/05/2026',
    titulo: 'Quarta-feira — 14 de Maio',
    data: '14/05/2026',
    itens: [
      {
        icon: '🔧',
        destaque:
          'GIFv2 — erro E0014 mapeado e mensagem de RPS já informado melhorada',
        texto:
          'O provedor GIFv2 (Caxias do Sul/RS) lançava uma exceção de comunicação quando recebia o erro E0014 da prefeitura, causando reprocessamento desnecessário de notas que já haviam sido emitidas. O erro foi mapeado como não-bloqueante (junto com E999 e RNG9999) e a mensagem "Nota fiscal já foi emitida." foi normalizada para "Rps já foi emitido." antes de ser persistida, facilitando o entendimento pelo usuário final e evitando confusão entre nota e RPS.',
      },
      {
        icon: '🔧',
        destaque:
          'NotaControl — emissão em homologação bloqueada com mensagem clara',
        texto:
          'As URLs de homologação do provedor NotaControl na versão de integração ABRASF foram desativadas pela prefeitura. Para evitar erros genéricos de conexão, foi implementado um bloqueio explícito que retorna ValidationException com código GW061 informando que o município desativou a homologação. O bloqueio se aplica tanto à recepção assíncrona quanto à síncrona, orientando o usuário a testar diretamente em produção.',
      },
      {
        icon: '🔗',
        destaque: 'Heliodora/MG — URL do webservice atualizada',
        texto:
          'A URL do webservice de Heliodora/MG foi atualizada no ConfiguracoesMunicipios.xml. A prefeitura alterou o endereço do endpoint e sem essa atualização as notas ficavam com erro de conexão ao tentar emitir, cancelar ou consultar NFS-e no município.',
      },
      {
        icon: '📊',
        destaque:
          'ISSIntel — valores padrão para TpRetPisCofins e SituacaoTributaria',
        texto:
          'O provedor ISSIntel (Crateús/CE) rejeitava notas quando os campos TpRetPisCofins e SituacaoTributaria eram enviados como nulos em cenários onde PIS e COFINS não estavam informados. Foram adicionados valores padrão ("0" para tipo de retenção e "00" para situação tributária) na inicialização do objeto de valores, garantindo que o XML sempre contenha dados válidos mesmo quando os tributos não são discriminados.',
      },
      {
        icon: '📊',
        destaque:
          'Publica — refatoração do cálculo de impostos federais retidos',
        texto:
          'O provedor Publica (Itajaí/SC e outros) tinha uma implementação local duplicada para cálculo de PIS/COFINS/CSLL retidos que divergia do helper compartilhado. A refatoração substituiu o código duplicado pelo NfeServicoCalculoHelper.RetornarTpRetPisCofinsCsll, normalizou o CST de PIS/COFINS removendo caracteres não numéricos, e simplificou o método FormatarImpostosFederaisRetidos para usar os valores já calculados (ValorCsll, ValorPis, ValorCofins) em vez de recalcular. Isso corrige inconsistências no envio de alíquotas deduzidas e garante que o campo ValorCsll reflita corretamente o tipo de retenção configurado.',
      },
      {
        icon: '🏙️',
        destaque: 'Raposos/MG — migrado para provedor BethaV3',
        texto:
          'O município de Raposos/MG teve seu provedor de NFS-e atualizado para o BethaV3. A prefeitura migrou de sistema e as configurações de emissão, cancelamento e consulta foram atualizadas no ConfiguracoesMunicipios.xml com 33 inserções e 29 remoções, indicando uma reconfiguração completa dos endpoints e parâmetros do webservice para o novo sistema da Betha.',
      },
      {
        icon: '📊',
        destaque:
          'IPMv2 — empresa de Novo Hamburgo/RS na regra de incidência do prestador',
        texto:
          'Uma empresa de Novo Hamburgo/RS foi adicionada à lista ListaEmpresasControlamMunicipioIncidencia no provedor IPMv2. Quando uma empresa está nessa lista, o município de incidência do serviço é definido como o município do prestador (em vez do tomador). Sem essa configuração, as notas da empresa eram rejeitadas pela prefeitura por inconsistência no local de incidência do ISS, afetando o cálculo correto dos impostos municipais.',
      },
      {
        icon: '🔧',
        destaque:
          'DSFv2 — consulta por RPS com validação de discriminação do serviço',
        texto:
          'O provedor DSFv2 (Teresina/PI e outros) apresentava falsos positivos na consulta por RPS quando o tomador não possuía documento (CPF/CNPJ) — a prefeitura omitia o nó XML do tomador e o sistema interpretava como nota não encontrada. A correção implementa uma validação alternativa via discriminação do serviço: quando o tomador está ausente no XML mas existe na nota, o sistema compara o texto normalizado da descrição do serviço para confirmar que é a mesma nota. Também foi removida a dependência de ValidarNomeTomador, simplificando o fluxo.',
      },
      {
        icon: '📊',
        destaque:
          'GissOnline — CST 00 forçado quando apuração própria de PIS/COFINS é zerada',
        texto:
          'O provedor GissOnline (Itu/SP e outros) enviava CST de PIS/COFINS incorreto quando os valores de apuração própria eram zero. A correção normaliza o campo SituacaoTributariaPisCofins removendo caracteres não numéricos, e quando tanto vPisProprio quanto vCofinsProprio são zero, força o CST para "00" e define TipoRetencaoPisCofins = 0. Isso evita rejeições pela prefeitura por inconsistência entre o CST informado e os valores tributários zerados.',
      },
      {
        icon: '📊',
        destaque:
          'SpeedGov — empresa Pacto Soluções na regra de emissão unitária em Sobral/CE',
        texto:
          'A empresa Pacto Soluções foi incluída na regra de emissão unitária por lote (1 NF por lote) no provedor SpeedGov para Sobral/CE. Essa configuração limita o envio a uma nota por vez, necessária quando a prefeitura não suporta lotes com múltiplas notas ou quando há problemas de timeout no processamento. Sem essa limitação, as notas da empresa ficavam travadas na fila de emissão.',
      },
      {
        icon: '📊',
        destaque:
          'IIBrasil — envio de alíquota IBS e CBS para empresa específica em Limeira/SP',
        texto:
          'O provedor IIBrasil passou a enviar as alíquotas de IBS e CBS no XML da nota fiscal para uma empresa específica em Limeira/SP. A implementação calcula as alíquotas considerando percentuais de redução tributária por município/UF. Sem esse envio, as notas da empresa eram rejeitadas pela prefeitura por falta dos campos obrigatórios da reforma tributária (IBS/CBS).',
      },
      {
        icon: '🏙️',
        destaque: 'Rio Doce/MG — migrado de BethaV2 para provedor Futurize',
        texto:
          'O município de Rio Doce/MG teve seu provedor de NFS-e alterado de BethaV2 para Futurize. A prefeitura migrou de sistema e as configurações foram atualizadas no ConfiguracoesMunicipios.xml com novas URLs de homologação e produção, namespace padrão do Futurize e remoção das informações do provedor antigo. A migração garante continuidade na emissão de notas fiscais eletrônicas.',
      },
      {
        icon: '🌐',
        destaque:
          'Barueri/SP — PaisPrestacaoServico preenchido com país do tomador quando exterior',
        texto:
          'O provedor Barueri/SP não preenchia o campo PaisPrestacaoServico quando a nota era para tomador do exterior, causando rejeição pela prefeitura. A correção implementa lógica que detecta cenários de prestação no exterior e atribui automaticamente o código do país do tomador ao campo PaisPrestacaoServico. Isso resolve erros de emissão para empresas que prestam serviços para clientes internacionais em Barueri.',
      },
    ],
  },
  {
    tag: '13/05/2026',
    titulo: 'Terça-feira — 13 de Maio',
    data: '13/05/2026',
    itens: [
      {
        icon: '📊',
        destaque:
          'GIFv2 — alíquota zerada para optantes do Simples sem ISS retido em Caxias do Sul/RS',
        texto:
          'O provedor GIFv2 (Caxias do Sul/RS) rejeitava notas de empresas optantes do Simples Nacional quando o ISS não era retido na fonte, porque a alíquota era enviada com valor diferente de zero. Foi implementada uma validação no método FormatarValores que força pAliq para "0" quando a empresa é optante do Simples e o ISS não é retido. A correção resolve a fila parada de emissão no município, conforme ticket #99189.',
      },
      {
        icon: '🏙️',
        destaque:
          'Faxinal/PR, Tamboara/PR, Ubiratã/PR e Pitanga/PR — ativados no provedor Elotech',
        texto:
          'Quatro municípios do Paraná foram ativados para emissão de NFS-e pelo provedor Elotech: Faxinal, Tamboara, Ubiratã e Pitanga. As prefeituras aderiram ao sistema eletrônico de notas fiscais e as integrações foram configuradas no gateway com as URLs e parâmetros necessários para emissão, cancelamento e consulta. São 104 linhas de configuração adicionadas ao ConfiguracoesMunicipios.xml.',
      },
      {
        icon: '🔧',
        destaque:
          'NotaControl — tag Id em InfDeclaracaoPrestacaoServico preservada para ContaAzul',
        texto:
          'O provedor NotaControl (Brasília/DF e outros) anulava o atributo Id da tag InfDeclaracaoPrestacaoServico para todas as empresas, mas a ContaAzul precisa desse campo preenchido para sua integração funcionar corretamente. A correção condiciona a anulação: apenas empresas que NÃO são ContaAzul têm o Id removido. Para a ContaAzul (subscription específica), o Id é preservado no XML, resolvendo erros de integração que impediam a emissão de notas via esse integrador.',
      },
      {
        icon: '🏙️',
        destaque: 'São Pedro do Sul/RS — migrado para provedor IPMv2',
        texto:
          'O município de São Pedro do Sul/RS teve seu provedor de NFS-e atualizado para o IPMv2. A prefeitura migrou de sistema e as configurações foram ajustadas no ConfiguracoesMunicipios.xml com 16 inserções e 31 remoções, indicando uma reconfiguração completa dos endpoints e parâmetros do webservice para o novo sistema IPM versão 2.',
      },
      {
        icon: '📊',
        destaque:
          'IIBrasil — posição da tag CodigoTributacaoMunicipal corrigida no XML ABRASF',
        texto:
          'O provedor IIBrasil (Limeira/SP) rejeitava notas com erro de validação de schema XML (erro 160) quando as tags CodigoTributacaoNacional e CodigoTributacaoMunicipal estavam fora da ordem esperada dentro do nó Servico. Foi implementada lógica de reposicionamento no método FormatarXml que reordena as tags conforme a sequência exigida pelo schema: CodigoTributacaoMunicipal após CodigoNbs, e CodigoTributacaoNacional após CodigoTributacaoMunicipal ou ItemListaServico.',
      },
      {
        icon: '🔧',
        destaque:
          'Responsável técnico — nova empresa adicionada à lista idsNovoRespTecnico',
        texto:
          'Uma empresa foi adicionada à lista idsNovoRespTecnico no processamento de NF-e V4 para corrigir o erro 974 da SEFAZ (CNPJ do responsável técnico diverge do cadastrado). Quando uma empresa está nessa lista, o XML gerado inclui as informações atualizadas do responsável técnico da Nota Gateway e o hash CSRT é recalculado. Sem essa inclusão, a SEFAZ rejeitava a nota por inconsistência no CSRT.',
      },
      {
        icon: '🏙️',
        destaque: 'Uibaí/BA — ativado no provedor Saatri',
        texto:
          'O município de Uibaí/BA foi ativado para emissão de NFS-e pelo provedor Saatri. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no gateway com as URLs e parâmetros necessários para emissão, cancelamento e consulta no webservice do Saatri.',
      },
      {
        icon: '🔧',
        destaque:
          'Marília/SP — lista de sincronização especial removida do SIGISS v1',
        texto:
          'O provedor SIGISS v1 (Marília/SP) mantinha uma lista estática com 129 linhas de IDs de notas que recebiam tratamento especial de sincronização, dispensando a validação de data de emissão. Essa lista foi completamente removida — todas as notas agora seguem o fluxo padrão de validação. Também foi adicionado o campo ultima_nota = 1 nas requisições de consulta RTC, melhorando a precisão da sincronização.',
      },
      {
        icon: '🏙️',
        destaque: 'Grajaú/MA — migrado para provedor SpeedGov',
        texto:
          'O município de Grajaú/MA teve seu provedor de NFS-e atualizado para o SpeedGov. A prefeitura migrou de sistema e as configurações foram ajustadas no ConfiguracoesMunicipios.xml com 67 inserções e 58 remoções, indicando uma reconfiguração completa das operações de emissão, cancelamento e consulta para o novo webservice.',
      },
      {
        icon: '🔧',
        destaque:
          'SILv4 — RPS sequencial desabilitado e emissão paralela ativada para Mogi das Cruzes/SP',
        texto:
          'O provedor SILv4 em Mogi das Cruzes/SP exigia RPS sequencial, o que travava a emissão quando múltiplas notas eram enviadas simultaneamente. Foi desabilitada a obrigatoriedade de RPS sequencial (NumeroRpsDeveSerSequencial = false) e ativada a emissão paralela (SuportaEmissaoParalela = true) com 1 lote paralelo. Também foram adicionadas empresas específicas (Cinemark) ao dicionário EmpresasNewLock para controle de concorrência, resolvendo problemas de fila parada.',
      },
      {
        icon: '🔧',
        destaque:
          'Barueri/SP — verificação de autenticidade de nota configurada',
        texto:
          'O município de Barueri/SP recebeu a configuração de AutenticidadeNota no provedor. A URL de verificação aponta para o portal da prefeitura (barueri.sp.gov.br/nfe/app/login.aspx) e exige CPF/CNPJ do tomador, código de verificação e valor da nota como parâmetros. Essa configuração permite que clientes verifiquem a legitimidade das NFS-e emitidas em Barueri diretamente no site da prefeitura.',
      },
      {
        icon: '🔧',
        destaque:
          'NotaControl — tratamento de Inscrição Municipal do tomador com caracteres inválidos',
        texto:
          'O provedor NotaControl (Santa Maria/RS e outros) rejeitava notas quando a Inscrição Municipal do tomador continha espaços em branco ou caracteres especiais (acentos, símbolos). Foi adicionada normalização que converte a IM para ASCII, remove diacríticos e retorna null quando o resultado é vazio. Isso evita que dados inválidos cheguem ao webservice da prefeitura e causem erros de validação de schema XML.',
      },
      {
        icon: '🌐',
        destaque:
          'DSFv2 — correção de emissão para tomador estrangeiro sem CPF',
        texto:
          'O provedor DSFv2 exigia que o campo CpfCnpj fosse não-nulo para tratar tomadores do exterior, mas em muitos cenários de exportação de serviço o tomador estrangeiro não possui CPF/CNPJ brasileiro. A correção remove essa condição restritiva, atribui NifTomador com valor padrão "99999999999" quando o CPF é nulo/vazio, e garante que IdentificacaoTomador seja anulado para todos os tomadores estrangeiros, permitindo a emissão correta de notas de exportação.',
      },
      {
        icon: '🔧',
        destaque:
          'NfseNacionalV2 — PDF offline e ajuste de fuso horário para Manaus/AM',
        texto:
          'O provedor NfseNacionalV2 em Manaus/AM apresentava dois problemas: o download do PDF falhava ao usar a integração ADN padrão, e o horário de emissão no PDF estava incorreto por diferença de fuso. A correção implementa download direto via HTTP GET com certificado cliente para Manaus (bypass da ADN) e ajusta o fuso horário do PDF subtraindo 1 hora e usando TimeZone de Cuiabá para processar a data de emissão do DPS, corrigindo a exibição para o horário local de Manaus (UTC-4).',
      },
      {
        icon: '🔧',
        destaque: 'Métricas MunicipioHealthCheck — ajustes de nomenclatura',
        texto:
          'As nomenclaturas dos eventos de métricas de saúde dos municípios (MunicipioHealthCheck) foram padronizadas. Os campos dos eventos MunicipioHealthCheckRecordFailureEvent e MunicipioHealthCheckResponseTimeEvent foram renomeados para seguir a convenção de nomes do projeto. Essas métricas monitoram a disponibilidade dos webservices das prefeituras e ajudam a identificar rapidamente quando um município está fora do ar.',
      },
      {
        icon: '🏙️',
        destaque: 'Barueri/SP — local de prestação de serviço fixo configurado',
        texto:
          'O provedor Barueri/SP recebeu a configuração de local de prestação de serviço fixo (service location override). Quando ativada, essa lógica força o município de prestação para Barueri independentemente do endereço informado na nota. A implementação inclui testes atualizados e a lógica condicional no BarueriProvedorNFe para aplicar o override apenas quando configurado.',
      },
      {
        icon: '🔧',
        destaque:
          'Infraestrutura — skills Kiro adicionadas ao repositório app-gw',
        texto:
          'Foram adicionadas skills de desenvolvimento com Kiro ao repositório do gateway, incluindo configurações para build do AccountManagement, NFeService e DataContext, além de scripts para execução local do SQL Server com Liquibase, S3 e dos serviços principais. Essa infraestrutura facilita o onboarding de desenvolvedores e a execução do ambiente de desenvolvimento local.',
      },
    ],
  },
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
];
