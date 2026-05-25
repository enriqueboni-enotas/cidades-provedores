var changelogData = [
  {
    tag: '25/05/2026',
    titulo: 'Segunda-feira — 25 de Maio',
    data: '25/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '24/05/2026',
    titulo: 'Domingo — 24 de Maio',
    data: '24/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '23/05/2026',
    titulo: 'Sábado — 23 de Maio',
    data: '23/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '22/05/2026',
    titulo: 'Sexta-feira — 22 de Maio',
    data: '22/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '21/05/2026',
    titulo: 'Quinta-feira — 21 de Maio',
    data: '21/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '20/05/2026',
    titulo: 'Quarta-feira — 20 de Maio',
    data: '20/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '19/05/2026',
    titulo: 'Segunda-feira — 19 de Maio',
    data: '19/05/2026',
    itens: [
      {
        icon: '🌐',
        destaque: 'GovDigital — emissão para tomador do exterior implementada',
        texto:
          'O provedor GovDigital não suportava emissão de NFS-e para tomadores do exterior. Foram criados modelos específicos (GovDigitalIdentificacaoTomador com NIF e CodNaoNIF, GovDigitalComercioExterior com modalidade/moeda/declarações, GovDigitalEndereco herdando DadosEndereco). O método RecepcionarLoteNFeV2 agora mapeia CPF/CNPJ para NIF ou CodNaoNIF="2", preenche PaisPrestacao com código do país quando IBGE=9999999, e remove atributos xsi:type redundantes do XML antes da assinatura. Resolve rejeições de notas de exportação de serviço no provedor.',
      },
      {
        icon: '🌐',
        destaque:
          'NfseNacionalV2 — correção de campos para tomador do exterior',
        texto:
          'O provedor NfseNacionalV2 estava preenchendo campos indevidamente na emissão para tomador estrangeiro, causando falha de processamento na prefeitura. A correção substitui EstadoProvinciaRegiaoServicoExterior por EstadoProvinciaRegiaoTomadorEstrangeiro na posição correta do XML, e altera a serialização de CodigoPaisLocalPrestacaoServico e CodigoCidadeTomador de numérico para textual. Resolve os tickets #99062, #99026 e #99208 de rejeição em emissões internacionais.',
      },
      {
        icon: '🌐',
        destaque:
          'NfseNacionalV2 — código postal obrigatório para tomador estrangeiro',
        texto:
          'O provedor NfseNacionalV2 aceitava notas para tomadores estrangeiros sem código postal, mas a prefeitura rejeitava posteriormente por campo obrigatório ausente. Foi adicionada validação prévia que lança ValidationException com código GW3003 ("Código postal do tomador estrangeiro é obrigatório") quando o CEP está vazio ou nulo. A validação foi aplicada tanto na versão V1 quanto V2 do FormatarXmlLoteNFe, evitando rejeições tardias.',
      },
      {
        icon: '📊',
        destaque:
          'GovDigital — validação de NBS flexibilizada para serviço 99.01.01',
        texto:
          'O provedor GovDigital rejeitava notas com código de serviço municipal "99.01.01" quando o código NBS não era informado, lançando erro GW0001. Porém, esse código de serviço específico não possui NBS correspondente na tabela oficial. A correção condiciona o erro: GW0001 só é lançado quando CodigoNBS é nulo E o serviço NÃO é "99.01.01". Para outros serviços, a validação de 9 dígitos (GW0002) permanece inalterada.',
      },
      {
        icon: '🔧',
        destaque:
          'CPQD — MunicipioIncidencia removido quando ISS não retido e prestação fora do município',
        texto:
          'O provedor CPQD (Camaçari/BA e outros) rejeitava notas quando o município de incidência era preenchido em cenários onde o ISS não é retido na fonte e a prestação ocorre fora do município da empresa. A correção implementa lógica no método CriarServicoRpsInternal que define MunicipioIncidencia como null quando o código IBGE da cidade de prestação difere do código da empresa e o ISS não é retido. Resolve o ticket #97882.',
      },
      {
        icon: '🔧',
        destaque:
          'GIFv2 — erro ER004 mapeado como erro estruturado em vez de exceção',
        texto:
          'O provedor GIFv2 (Caxias do Sul/RS) lançava uma exceção de comunicação quando recebia o erro ER004 da prefeitura, causando reprocessamento desnecessário e atingindo o limite de tentativas. O código ER004 foi adicionado à lista de erros reconhecidos (junto com E999, RNG9999, E0014 e Error3450), permitindo que a resposta seja processada normalmente e retornada como objeto estruturado ao invés de exceção. Resolve o ticket #99480.',
      },
      {
        icon: '🔧',
        destaque:
          'NotaControl — RemoveAccent no endereço do tomador para evitar erro de tamanho',
        texto:
          'O provedor NotaControl (ABRASF v2) retornava erro genérico de tamanho de arquivo quando o endereço ou nome do tomador continha acentuação. A correção aplica .RemoveAccent() nos campos Logradouro, Numero, Complemento e Bairro no método FormatarEndereco da classe FormatarLoteRpsV2Base. Isso normaliza os caracteres antes do envio ao webservice, eliminando rejeições por encoding. Resolve o ticket #99458.',
      },
      {
        icon: '🔧',
        destaque:
          'NotaControl — verificação nula em dadosTomador para evitar NullReferenceException',
        texto:
          'O provedor NotaControl (Cuiabá/MT e outros) lançava NullReferenceException quando uma nota era emitida sem dados do tomador preenchidos. A correção substitui o acesso direto a dadosTomador.IdentificacaoTomador pelo operador null-conditional (dadosTomador?.IdentificacaoTomador), garantindo que InscricaoMunicipal só seja acessada quando o objeto existe. Resolve os tickets #99459 e #99461.',
      },
      {
        icon: '🔧',
        destaque:
          'NotaControl — validação adicional de tomador nulo no CriarDadosTomador',
        texto:
          'Complementando a correção anterior, foi adicionada proteção null-conditional também no método CriarDadosTomador do provedor NotaControl (RecepcionarLoteNFe.cs). Notas sem tomador informado causavam exceção ao tentar acessar IdentificacaoTomador para validar InscricaoMunicipal. A correção garante que o fluxo continue normalmente quando dadosTomador é nulo, resolvendo múltiplos tickets de erro (#99418, #99420, #99426, #99462, #99469, #99475).',
      },
      {
        icon: '📊',
        destaque:
          'NfseNacionalV2 — apuração própria PIS/COFINS zerada para ContaAzul quando bloco não informado',
        texto:
          'O provedor NfseNacionalV2 rejeitava notas da integração ContaAzul quando o prestador não informava o bloco pisCofinsApuracaoPropria, pois os campos ficavam com valores inconsistentes. A correção detecta a subscription da ContaAzul e, quando o bloco não é informado, zera explicitamente vBCPisCofins, alíquotas e valores de PIS/COFINS, definindo CST como "01" (fallback). Aplicado tanto na versão base quanto V2 do FormatarXmlLoteNFe. Resolve o ticket #96407.',
      },
      {
        icon: '📊',
        destaque: 'SILv4 — alíquotas IBS/CBS zeradas para CST 410 (imunidade)',
        texto:
          'O provedor SILv4 rejeitava notas com CST 410 (imunidade) porque os campos de IBS e CBS eram enviados com valores calculados, gerando inconsistência com a natureza da operação. A correção amplia a condição no método FormatarDadosIBSCBSNFSe para detectar quando o nó IBSCBS no XML possui CST="410" e zera automaticamente pIBSUF, pCBS, vCBS e vIBSTot. Resolve o ticket #98200 de rejeição fiscal.',
      },
      {
        icon: '🔧',
        destaque:
          'NfseNacionalV2 — RemoveInvalidXmlChars na descrição do serviço (xDescServ)',
        texto:
          'O provedor NfseNacionalV2 falhava na geração do XML assinado quando a descrição do serviço continha caracteres inválidos para XML (caracteres de controle, etc.). A correção aplica .RemoveInvalidXmlChars() após .Trim() no campo xDescServ em FormatarXmlLoteNFeV2Base.cs. Também foi ajustada a assinatura do método PermiteReducaoPorValor removendo o parâmetro NFeServico. Resolve o ticket #99370.',
      },
      {
        icon: '📊',
        destaque:
          'GissOnline — valor líquido no PDF considerando tipo de retenção PIS/COFINS',
        texto:
          'O provedor GissOnline (Itu/SP e outros) gerava PDFs de NFS-e sem o valor líquido correto quando havia retenção de PIS ou COFINS. Foi criada a classe GissOnlineGerarPdfImpressaoNFe que sobrescreve BuildDataSourceReport e calcula o valor líquido usando o novo método CalcularValorLiquidoNfse do NfeServicoCalculoHelper. O cálculo considera tipo de retenção (tpRetPisCofins), impostos federais retidos, ISS retido, descontos e deduções. Resolve o ticket #99414.',
      },
      {
        icon: '🔧',
        destaque:
          'ABRASF v2 — validação da discriminação na consulta por RPS refatorada',
        texto:
          'A consulta por RPS no provedor ABRASF v2 falhava ao validar notas quando o tomador não possuía CPF/CNPJ, pois a discriminação do serviço não era comparada corretamente. A refatoração remove o método placeholder ValidarDiscriminacaoServico e implementa CompararDiscriminacaoServico com normalização robusta (remoção de diacríticos, quebras de linha, caracteres &/</>). O novo método FormatarDiscriminacao constrói a discriminação esperada a partir do primeiro ItemNFeServico concatenando Observacoes. Resolve os tickets #99345 e #99425.',
      },
      {
        icon: '🏙️',
        destaque: 'Salto Grande/SP — migrado para provedor ISSMAP',
        texto:
          'O município de Salto Grande/SP teve seu provedor de NFS-e atualizado para o ISSMAP. A prefeitura migrou de sistema e as configurações foram ajustadas no ConfiguracoesMunicipios.xml com 24 inserções e 28 remoções, indicando uma reconfiguração completa dos endpoints e parâmetros do webservice. Resolve o ticket #99250.',
      },
      {
        icon: '🏙️',
        destaque: 'Benedito Novo/SC — ativado no provedor IPM',
        texto:
          'O município de Benedito Novo/SC foi ativado para emissão de NFS-e pelo provedor IPM. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no gateway com URLs, parâmetros e testes atualizados (128 inserções e 53 remoções nos arquivos de configuração e teste). Resolve o ticket #98749.',
      },
      {
        icon: '🏙️',
        destaque: 'Itaju/SP — ativado no provedor Fiorilli',
        texto:
          'O município de Itaju/SP foi ativado para emissão de NFS-e pelo provedor Fiorilli. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no ConfiguracoesMunicipios.xml com 37 linhas de configuração adicionadas. Resolve o ticket #97184.',
      },
      {
        icon: '🏙️',
        destaque: 'Buenópolis/MG — ativado no provedor Sintese',
        texto:
          'O município de Buenópolis/MG foi ativado para emissão de NFS-e pelo provedor Sintese. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no gateway com 31 linhas de configuração adicionadas ao ConfiguracoesMunicipios.xml, além de ajustes nos arquivos de teste. Resolve o ticket #96776.',
      },
      {
        icon: '🔧',
        destaque:
          'Publica V1 — consulta por RPS trata "Problemas ao processar arquivo" como RPS já informado',
        texto:
          'O provedor Publica V1 não detectava corretamente quando notas com erro "Problemas ao processar arquivo." já haviam sido autorizadas pela prefeitura, causando reprocessamento infinito. A correção amplia a detecção em IdentificarCaracteristicasErro para marcar AlgumRpsJaInformado quando essa mensagem é encontrada, disparando a consulta por RPS para recuperar a nota já processada. Também foi adicionada proteção contra NullReferenceException no predicado. Resolve o ticket #98483.',
      },
      {
        icon: '🔧',
        destaque:
          'Responsável técnico — nova empresa adicionada à lista idsNovoRespTecnico',
        texto:
          'Uma empresa foi adicionada à lista idsNovoRespTecnico no processamento de NF-e V4 (RecepcionarLoteNFeV4.cs). Quando uma empresa está nessa lista, o XML gerado inclui as informações atualizadas do responsável técnico da Nota Gateway e o hash CSRT é recalculado com o CNPJ correto. Sem essa inclusão, a SEFAZ rejeitava a nota por inconsistência no CSRT (erro 974). Resolve o ticket #99405.',
      },
      {
        icon: '🔧',
        destaque:
          'IncluirNFesLote — envio unitário ativado para empresa específica',
        texto:
          'Uma empresa específica foi adicionada à lista de validações do método GetTotalNotasFaltantesLoteAsync, passando a enviar notas uma por vez (1 nota por lote) em vez de agrupar em lotes. Essa configuração é necessária quando a prefeitura ou o cenário da empresa não suporta processamento em lote, evitando que notas fiquem travadas na fila de emissão. Resolve o ticket #99460.',
      },
      {
        icon: '📊',
        destaque:
          'WebApi Empresas — novo campo regimeApuracaoTributosSN no modelo',
        texto:
          'Foi adicionado suporte ao campo RegimeApuracaoTributosSN (regime de apuração de tributos para Simples Nacional) no modelo de domínio Empresa. O campo é persistido como parte do JSON ExtendedProperties no repositório, com fallback de desserialização em PascalCase e camelCase para compatibilidade com dados legados. Essa informação é necessária para cálculos tributários corretos de empresas optantes do Simples. Resolve o ticket #98700.',
      },
      {
        icon: '🔧',
        destaque:
          'NfseNacionalV2 — campo Ref removido das observações complementares',
        texto:
          'O provedor NfseNacionalV2 (SemCertificado) adicionava provisoriamente "Ref: {ID}" nas observações complementares da nota para evitar duplicidade na emissão. Essa marcação foi removida pois gerava poluição no campo InformacoesComplementares visível ao cliente. A verificação de duplicidade agora depende exclusivamente dos outros critérios existentes (chave de acesso, data, valores/cidade e dhEmi). Resolve o ticket #99180.',
      },
      {
        icon: '🔧',
        destaque: 'Socorro/SP — zerarRps ativado no ServicoControleLotesNFe',
        texto:
          'O município de Socorro/SP foi adicionado à lógica de controle de lotes que zera o RPS e desabilita atualização de sequenciais (mesma regra já aplicada a Varginha/MG). Quando ativada, essa configuração evita conflitos de numeração de RPS entre o gateway e a prefeitura, resolvendo problemas de notas rejeitadas por número de RPS duplicado ou fora de sequência. Referência: SUSFS-7917.',
      },
      {
        icon: '🌐',
        destaque:
          'Barueri/SP — lógica de exportação exterior expandida com validação por cidade',
        texto:
          'O provedor Barueri/SP teve sua lógica de exportação exterior expandida para suportar validação por cidade específica. O método SetEmpresaExportacaoExterior agora aceita parâmetro opcional codigoCidade, e EhExportacaoExterior valida tanto o metadata empresaExportacaoExterior quanto codigoIbgeCidadePrestacaoServicoExterior. Foram adicionados 313 linhas de testes unitários cobrindo cenários de exportação, não-exportação, descontos, retenção de ISS e cálculos de impostos federais. Referência: SUSFS-7911.',
      },
      {
        icon: '🔧',
        destaque:
          'NfseNacionalV2 — tratamento de virada de dia (midnight edge case) com testes',
        texto:
          'O provedor NfseNacionalV2 apresentava erros de "data de competência posterior à data de emissão" quando notas eram emitidas entre 00:00 e 00:02 do horário local (janela de risco da meia-noite UTC). A correção implementa delay de 2 minutos no cálculo do dhEmi e, quando detecta a janela de risco, aguarda 5 segundos e redefine dhEmi para meia-noite da data de competência em UTC. Foram adicionados 121 linhas de testes unitários validando o comportamento. Referência: SUSFS-7546.',
      },
      {
        icon: '🔧',
        destaque:
          'NfseNacionalV2 — ajuste de DateTimeKind para Manaus (FRCAP-3763)',
        texto:
          'O provedor NfseNacionalV2 em Manaus/AM apresentava inconsistência no DateTimeKind ao processar datas de emissão, causando erros de fuso horário. A correção ajusta a inicialização do DateTime para usar o Kind correto no cenário de Manaus (UTC-4), garantindo que o cálculo de dhEmi e a validação de data de competência funcionem corretamente para o fuso horário local. Referência: FRCAP-3763.',
      },
    ],
  },
  {
    tag: '18/05/2026',
    titulo: 'Domingo — 18 de Maio',
    data: '18/05/2026',
    itens: [
      {
        icon: '🔧',
        destaque:
          'NfseNacionalV2 — tratamento de virada de dia (midnight edge case)',
        texto:
          'O provedor NfseNacionalV2 apresentava erros de "data de competência posterior à data de emissão" quando notas eram emitidas entre 00:00 e 00:02 do horário local. Isso ocorria porque o relógio UTC já havia virado para o dia seguinte enquanto o horário local ainda estava no dia anterior. A correção implementa um delay de 2 minutos no cálculo do dhEmi (data/hora de emissão) e, quando detecta a janela de risco da meia-noite, aguarda 5 segundos e redefine o dhEmi para meia-noite da data de competência em UTC. Isso elimina rejeições intermitentes que ocorriam em emissões noturnas.',
      },
      {
        icon: '🌐',
        destaque:
          'Barueri/SP — lógica de exportação exterior implementada com validação por cidade',
        texto:
          'O provedor Barueri/SP recebeu uma implementação completa de lógica de exportação exterior (SUSFS-7911). O método EhExportacaoExterior agora valida tanto o metadata empresaExportacaoExterior quanto o codigoIbgeCidadePrestacaoServicoExterior, permitindo controle granular por cidade. Quando a nota é de exportação, o ISS e a alíquota são zerados automaticamente. A implementação inclui busca case-insensitive de metadados e extensa cobertura de testes unitários para cenários de exportação, não-exportação, descontos, retenção de ISS e cálculos de impostos federais.',
      },
    ],
  },
  {
    tag: '17/05/2026',
    titulo: 'Sábado — 17 de Maio',
    data: '17/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '16/05/2026',
    titulo: 'Sexta-feira — 16 de Maio',
    data: '16/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
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
];
