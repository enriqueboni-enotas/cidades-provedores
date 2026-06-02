var changelogData = [
  {
    tag: '02/06/2026',
    titulo: 'Terça-feira — 02 de Junho',
    data: '02/06/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '01/06/2026',
    titulo: 'Segunda-feira — 01 de Junho',
    data: '01/06/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Bloqueio de emissão retroativa para empresa específica',
        texto:
          'Uma empresa da subscription Believe estava conseguindo emitir notas retroativas (com data de competência anterior à data de emissão), o que não era permitido para as demais empresas da mesma subscription. Foi adicionada condição específica no RecepcionarLoteNFe.cs que bloqueia a emissão retroativa exclusivamente para essa empresa, mantendo a permissão para as outras empresas do mesmo grupo. Trata-se de exceção temporária (SUSFS-8515).',
      },
      {
        icon: '📋',
        destaque:
          'Swagger: novo endpoint de histórico de alteração de metadados',
        texto:
          'Foi adicionado à documentação Swagger estática o endpoint GET /empresas/{empresaId}/historicoalteracaometadados. Esse endpoint permite consultar o histórico de alterações nos metadados de uma empresa, retornando campos como dataAlteracao, hierarquia (caminho do campo alterado), valor anterior, valor posterior e tipo de mudança. Útil para integradores que precisam auditar alterações feitas nas configurações fiscais da empresa.',
      },
      {
        icon: '📋',
        destaque:
          'Swagger: parâmetros dataCriacaoInicio e dataCriacaoFim na listagem de NFes',
        texto:
          'O endpoint GET /empresas/{empresaId}/nfes no Swagger estático não expunha os parâmetros dataCriacaoInicio e dataCriacaoFim como query parameters separados. Isso fazia com que usuários testando pelo Swagger recebessem o erro "É obrigatório informar o período de dataCriação das notas", enquanto pelo Postman funcionava normalmente. Os parâmetros agora estão documentados corretamente no Swagger.json.',
      },
    ],
  },
  {
    tag: '31/05/2026',
    titulo: 'Domingo — 31 de Maio',
    data: '31/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '30/05/2026',
    titulo: 'Sábado — 30 de Maio',
    data: '30/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '29/05/2026',
    titulo: 'Quinta-feira — 29 de Maio',
    data: '29/05/2026',
    itens: [
      {
        icon: '🔧',
        destaque:
          'Validação de CPF/CNPJ do tomador nos indicadores IBS/CBS (SIGISSWeb)',
        texto:
          'O provedor SIGISSWeb lançava NullReferenceException ao acessar tomador.CpfCnpj.Length quando o tomador não possuía CPF/CNPJ preenchido, nos cenários de indicadores de operação IBS/CBS (100301, 100501). Isso causava loop de retry infinito no OperationQueue. Foi adicionada validação prévia que lança ValidationException com código GW0525.',
      },
      {
        icon: '🔧',
        destaque: 'Fallback para "Tomador não encontrado" no EGoverneISS',
        texto:
          'Ao consultar o lote de NFS-e no provedor EGoverneISS, quando a prefeitura retornava "Tomador não encontrado" (com Erro=true e QtdeNotas=0), o sistema não realizava o fallback de repetir a consulta sem o CPF/CNPJ do tomador. Agora essa mensagem também dispara o fallback.',
      },
    ],
  },
  {
    tag: '28/05/2026',
    titulo: 'Quarta-feira — 28 de Maio',
    data: '28/05/2026',
    itens: [
      {
        icon: '⚡',
        destaque: 'Ativa turbo para Cinemark em São José dos Campos/SP',
        texto:
          'O modo turbo foi ativado para a empresa Cinemark no município de São José dos Campos/SP. O modo turbo aumenta a prioridade de processamento e reduz o intervalo entre tentativas de envio, acelerando a emissão de notas para empresas com alto volume.',
      },
      {
        icon: '🔧',
        destaque: 'Ajuste na mensagem de erro — limpeza de HTML e formatação',
        texto:
          'As mensagens de erro retornadas pelas prefeituras estavam sendo exibidas com tags HTML e caracteres especiais que dificultavam a leitura. Foi implementada limpeza e sanitização das mensagens antes de exibir ao usuário.',
      },
      {
        icon: '🔧',
        destaque: 'RemoveNonNumbers na inscrição municipal do tomador',
        texto:
          'Adicionada sanitização RemoveNonNumbers na inscrição municipal do tomador antes do envio à prefeitura. Integradores enviavam a IM com pontos ou traços, causando rejeição em provedores que aceitam apenas numéricos.',
      },
      {
        icon: '🔧',
        destaque:
          'GOVBRv3: inscrição municipal do tomador para CPF específico em Dom Pedrito/RS',
        texto:
          'No provedor GOVBRv3, foi adicionado tratamento para preencher a inscrição municipal do tomador quando o CPF é de um contribuinte específico em Dom Pedrito/RS. A prefeitura exige a IM para determinados CPFs cadastrados como prestadores locais.',
      },
      {
        icon: '🏙️',
        destaque: 'Lajinha/MG migrada para o provedor EeLv3',
        texto:
          'O município de Lajinha/MG foi migrado para o provedor EeLv3. A prefeitura trocou de sistema de NFS-e e as URLs, namespace e configurações foram atualizadas para o novo provedor.',
      },
      {
        icon: '🆕',
        destaque: 'Implementação inicial do provedor NotaControlV2',
        texto:
          'Foi implementado o provedor NotaControlV2 completo, incluindo operações de recepção de lote (síncrono e assíncrono), consulta de lote, cancelamento e geração de NFS-e. O provedor utiliza comunicação SOAP com WCF e suporta o padrão nacional (DPS/NFS-e).',
      },
      {
        icon: '🌐',
        destaque:
          'Correção do formato XML para tomador exterior em Sapiranga/RS (DBSeller v2.04)',
        texto:
          'O formato do XML para tomador do exterior no provedor DBSellerv2 de Sapiranga/RS estava incorreto. A correção remove IdentificacaoTomador para estrangeiro, adiciona NifTomador e substitui Endereco por EnderecoExterior.',
      },
      {
        icon: '🔧',
        destaque:
          'Bloqueio de emissão sem CPF/CNPJ do tomador em Novo Hamburgo/RS (IPMv2)',
        texto:
          'A prefeitura de Novo Hamburgo/RS (IPM v2) não aceita NFS-e sem CPF/CNPJ do tomador. Quando o documento não era informado, o webservice causava erro de SQL. Agora o sistema bloqueia a emissão antes do envio com mensagem clara.',
      },
    ],
  },
  {
    tag: '27/05/2026',
    titulo: 'Terça-feira — 27 de Maio',
    data: '27/05/2026',
    itens: [
      {
        icon: '🌐',
        destaque:
          'Resolução automática de local de prestação exterior em Barueri (v2)',
        texto:
          'Notas para tomadores do exterior retornavam "Erro desconhecido" em Barueri. No fluxo v2, quando empresaExportacaoExterior == true mas o código IBGE não estava nos metadados, ficava com o valor da cidade da empresa ao invés de 9999999. A correção força o código correto automaticamente.',
      },
      {
        icon: '🌐',
        destaque:
          'ResolverLocalPrestacaoServicoExterior antes de formatar RPS (Barueri)',
        texto:
          'Complemento da correção anterior: a chamada foi movida para BarueriProvedorNFe.cs (antes de formatar o RPS) e a lógica de notaDeExportacao foi ajustada para considerar tomador.EhDoExterior.',
      },
      {
        icon: '🏙️',
        destaque: 'Envio de endereço de obra para empresa no provedor',
        texto:
          'Adicionado suporte ao envio do endereço de obra para empresas que prestam serviço em local diferente do estabelecimento. O campo é incluído no XML quando a empresa possui essa informação cadastrada.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de acentuação do email do tomador',
        texto:
          'Adicionada sanitização para remover acentuação do email do tomador antes do envio à prefeitura. Emails com caracteres acentuados causavam rejeição em provedores que validam formato RFC.',
      },
      {
        icon: '🔧',
        destaque: 'Mensagem de erro em RpsJaInformado — texto explicativo',
        texto:
          'Adicionada mensagem explicativa quando o provedor retorna "RPS já informado". Agora indica claramente que o RPS já foi convertido em NFS-e e sugere consultar a nota existente.',
      },
      {
        icon: '🔧',
        destaque: 'GOVBRv3: não envia grupo PIS/COFINS com valores zerados',
        texto:
          'No provedor GOVBRv3, quando PIS e COFINS são zero, o grupo tributário é omitido do XML. Prefeituras rejeitavam notas com o bloco presente mas com valores zero.',
      },
      {
        icon: '🏙️',
        destaque: 'Mauriti/CE ativado no provedor PMat',
        texto:
          'O município de Mauriti/CE foi ativado no provedor PMat. URLs de produção e homologação configuradas, habilitando emissão de NFS-e.',
      },
      {
        icon: '🏙️',
        destaque: 'Palmas/TO configurado para permitir emissão sem tomador',
        texto:
          'Palmas/TO configurado para permitir emissão de NFS-e sem dados do tomador. A flag SuportaEmissaoNFeSemCliente foi ativada para cenários de venda ao consumidor final.',
      },
      {
        icon: '🔧',
        destaque: 'Leitura de XML na geração do PDF — ajuste de parsing',
        texto:
          'Ajustado o parsing de XML na geração do PDF para tratar corretamente namespaces e encoding, evitando campos em branco quando o XML continha declarações não-padrão.',
      },
      {
        icon: '📊',
        destaque:
          'Rolândia/PR na lista UsaCIntContribComCodigoServico (140201)',
        texto:
          'Rolândia/PR incluída na lista UsaCIntContribComCodigoServico para o serviço 140201, garantindo envio correto do campo CIntContrib e evitando rejeição.',
      },
      {
        icon: '🏙️',
        destaque:
          'NfseNacionalV2: migração de Adamantina/SP, Candelária/RS, Coromandel/MG e outras',
        texto:
          'Múltiplos municípios migrados para o NfseNacionalV2 (Portal Nacional): Adamantina/SP, Candelária/RS, Coromandel/MG e outros que aderiram ao Portal Nacional.',
      },
      {
        icon: '🔧',
        destaque:
          'Melhoria na conversão de fuso horário — correção de virada de dia',
        texto:
          'Corrigido bug intermitente na validação da data de competência. Quando a emissão ocorria próximo à meia-noite local (23:58-23:59), a conversão UTC causava rollover para o dia seguinte. A correção usa LocalDateTime.',
      },
      {
        icon: '🌐',
        destaque: 'Revert e re-fix: NomeCidadePrestacaoServico para exterior',
        texto:
          'O campo NomeCidadePrestacaoServico usava o nome do País ao invés da Cidade para notas de exportação. Foi feito revert do fix anterior e aplicada correção definitiva.',
      },
    ],
  },
  {
    tag: '26/05/2026',
    titulo: 'Terça-feira — 26 de Maio',
    data: '26/05/2026',
    itens: [
      {
        icon: '🌐',
        destaque:
          'Resolução automática de local de prestação exterior (Barueri v2)',
        texto:
          'Implementada resolução automática do local de prestação para o exterior no Barueri v2. Quando empresaExportacaoExterior é true e tomador é do exterior, o código IBGE é forçado para 9999999.',
      },
      {
        icon: '🔧',
        destaque:
          'Erro intermitente na validação da data de competência (NFSe via API)',
        texto:
          'Corrigido bug que causava erro intermitente na validação da data de competência. O problema ocorria próximo à meia-noite local quando a conversão UTC causava rollover para o dia seguinte.',
      },
      {
        icon: '📊',
        destaque: 'Sefin: arredonda ValorIss em Caucaia/CE ao invés de truncar',
        texto:
          'No provedor Sefin, o cálculo do ValorIss para Caucaia/CE foi alterado de truncamento para arredondamento. A prefeitura rejeitava notas onde o ISS diferia em centavos.',
      },
      {
        icon: '🆕',
        destaque: 'Novo provedor PMat — implementação completa',
        texto:
          'Implementado o provedor PMat completo com operações de recepção de lote, consulta, cancelamento e geração de PDF. Utiliza comunicação SOAP com DataSet (formato legado .NET).',
      },
      {
        icon: '🌐',
        destaque:
          'Formatação de endereço específica para Hotmart (entidades externas)',
        texto:
          'Adicionada formatação de endereço específica para a Hotmart ao lidar com tomadores do exterior. O endereço é montado no formato esperado pela prefeitura.',
      },
      {
        icon: '📊',
        destaque: 'Subscription SaudeViaNet para envio de IBSCBS no Simples',
        texto:
          'SaudeViaNet adicionada à lista de envio de IBS/CBS para Simples Nacional, garantindo que notas incluam os novos tributos da reforma tributária.',
      },
      {
        icon: '🏙️',
        destaque:
          'Nossa Senhora da Glória/PE — flag UsaEnderecoTomExterior (TributusV2)',
        texto:
          'Ativada a flag UsaEnderecoTomExterior para Nossa Senhora da Glória/PE no TributusV2, indicando suporte ao envio do endereço completo do tomador exterior.',
      },
      {
        icon: '🔗',
        destaque:
          'Atualização do endpoint de produção de Luziânia/GO (ProData)',
        texto:
          'Endpoint de produção de Luziânia/GO atualizado para novo endereço. A URL anterior foi desativada pela prefeitura.',
      },
      {
        icon: '🏙️',
        destaque: 'São Bernardo do Campo/SP ativado na versão com IBSCBS',
        texto:
          'São Bernardo do Campo/SP ativado na versão do provedor que suporta IBS/CBS, permitindo emissão com os novos tributos da reforma tributária.',
      },
      {
        icon: '🧮',
        destaque: 'Zera valor PIS e COFINS de apuração própria para Conta Azul',
        texto:
          'Valores de PIS e COFINS de apuração própria zerados para Conta Azul. A integração enviava valores que divergiam do esperado pela prefeitura.',
      },
      {
        icon: '📊',
        destaque:
          'Condição de regime de apuração "1" na regra de não enviar alíquota',
        texto:
          'Incluída condição para regime de apuração "1" (Simples Nacional) na regra de não enviar alíquota. Empresas do Simples não devem enviar alíquota de ISS no XML.',
      },
      {
        icon: '🌐',
        destaque:
          'Ajuste de emissão para tomador exterior com prestação fora (PublicaV1)',
        texto:
          'Ajustada emissão para tomador exterior com prestação fora do município no PublicaV1. O provedor exige formato específico para endereço do tomador estrangeiro.',
      },
      {
        icon: '🏙️',
        destaque: 'Queimados/RJ aderiu ao Portal Nacional',
        texto:
          'Queimados/RJ aderiu ao Portal Nacional de NFS-e. Configurações atualizadas para utilizar o provedor NfseNacionalV2.',
      },
      {
        icon: '🔧',
        destaque: 'Ajuste no PDF para exportação de serviço',
        texto:
          'Corrigido layout do PDF para exportação de serviço. O PDF agora exibe corretamente dados do tomador estrangeiro incluindo endereço internacional.',
      },
    ],
  },

  {
    tag: '25/05/2026',
    titulo: 'Segunda-feira — 25 de Maio',
    data: '25/05/2026',
    itens: [
      {
        icon: '🆕',
        destaque: 'Característica PermiteEvento nos provedores',
        texto:
          'Foi adicionada a propriedade PermiteEvento ao modelo de características dos provedores do gateway. Essa flag controla quais municípios suportam dados de evento (como cancelamento por evento) na emissão de NFS-e. O Portal Nacional e o provedor Barueri já são configurados com PermiteEvento = true por padrão. A propriedade é serializada nas extensions do provedor para uso em tempo de execução.',
      },
      {
        icon: '🔧',
        destaque:
          'Fix: não sobrescrever PermiteEvento se provedor já setou true',
        texto:
          'Após a adição da característica PermiteEvento, foi identificado que o valor padrão do ProvedorNFeServicoBase poderia sobrescrever o valor já definido por provedores específicos. O fix garante que, se um provedor já setou PermiteEvento = true no seu construtor, o valor não seja resetado para false pela classe base. Isso evita que provedores como Barueri percam a configuração de evento ao serem instanciados.',
      },
      {
        icon: '🔧',
        destaque:
          'Lógica de cancelamento de NF-e específica para Hotmart (TiplanV3)',
        texto:
          'Foi implementada lógica de cancelamento de NF-e específica para o provedor TiplanV3, sobrescrevendo o método FormatarPedidoRegistroEventoCancelamento para definir a versão do evento como "1.01". Também foi desabilitado o suporte a emissão sem cliente (SuportaEmissaoNFeSemCliente = false) e adicionado tratamento de erro para cenários onde o Tomador é nulo e ocorre InternalServerError, retornando resposta detalhada ao invés de exceção genérica.',
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
        icon: '🔧',
        destaque: 'Tratamento de subscriptionID com MunicipioIncidenciaService',
        texto:
          'Adicionado tratamento para que o subscriptionID utilize o MunicipioIncidenciaService ao determinar o município de incidência do ISS. Antes, em cenários onde a subscription tinha regras específicas de incidência, o município era resolvido incorretamente, causando envio de alíquota errada para a prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Expansão da lógica de cidades no ServicoControleLotesNFe',
        texto:
          'A lógica de controle de lotes de NF-e foi expandida para lidar com mais cenários de cidades. O método agora considera variações de configuração municipal que antes não eram contempladas, evitando que lotes ficassem travados em municípios com configurações atípicas.',
      },
      {
        icon: '📊',
        destaque: 'Validação de NBS para o serviço 99.01.01',
        texto:
          'Ajustada a validação do código NBS (Nomenclatura Brasileira de Serviços) para aceitar o código especial 99.01.01, que representa serviços não classificados. Antes, esse código era rejeitado pela validação numérica, impedindo a emissão de notas para empresas que utilizam esse código genérico.',
      },
      {
        icon: '🌐',
        destaque: 'Melhorias na exportação de notas para o exterior',
        texto:
          'Aprimorada a lógica de exportação de notas fiscais para tomadores do exterior, incluindo melhor cobertura de testes. O tratamento agora contempla cenários adicionais de endereçamento internacional e validação de dados do tomador estrangeiro.',
      },
      {
        icon: '🔧',
        destaque:
          'Remove MunicipioIncidencia quando ISS não retido fora do município',
        texto:
          'Quando o ISS não é retido na fonte e a prestação ocorre fora do município do prestador, o campo MunicipioIncidencia agora é removido do XML enviado à prefeitura. Isso corrige rejeições em provedores que não aceitam esse campo quando o ISS não é retido, especialmente no EGoverneISS.',
      },
      {
        icon: '🔧',
        destaque: 'Mapeamento do erro ER004 no GIFv2 para retornar XML',
        texto:
          'O erro ER004 do provedor GIFv2 foi mapeado para retornar a resposta em formato XML ao invés de lançar uma exceção genérica. Isso permite que o sistema processe a mensagem de erro da prefeitura e exiba ao cliente de forma legível, em vez de mostrar um erro interno de comunicação.',
      },
      {
        icon: '🔧',
        destaque: 'Desabilita envio em lote para empresa específica',
        texto:
          'Uma empresa foi adicionada à lista de emissão unitária (1 nota por lote), desativando o envio em lote. Isso resolve problemas de timeout e rejeição que ocorriam quando múltiplas notas eram enviadas simultaneamente para a prefeitura dessa empresa.',
      },
      {
        icon: '🔧',
        destaque: 'RemoveAccent no endereço do tomador',
        texto:
          'Adicionada remoção de acentos (RemoveAccent) no endereço do tomador antes do envio à prefeitura. Alguns provedores rejeitam caracteres acentuados nos campos de endereço, causando erro de emissão. A sanitização garante compatibilidade com esses webservices.',
      },
      {
        icon: '🧮',
        destaque:
          'Apuração própria zerada quando prestador não informa PIS/COFINS',
        texto:
          'Quando o prestador não informa o bloco pisCofins na requisição, o sistema agora envia a apuração própria com valores zerados ao invés de omitir o bloco. Isso evita rejeições em prefeituras que exigem o bloco de tributos federais mesmo quando os valores são zero, especialmente no Portal Nacional.',
      },
      {
        icon: '🔧',
        destaque:
          'Verificação nula em dadosTomador para evitar NullReferenceException',
        texto:
          'Adicionada verificação de nulidade no objeto dadosTomador antes de acessar suas propriedades. Em cenários onde a nota é emitida sem tomador (ex: autosserviço), o sistema lançava NullReferenceException ao tentar ler campos do tomador. Agora o fluxo continua normalmente sem tomador.',
      },
      {
        icon: '🆕',
        destaque: 'Campo regimeApuracaoTributosSN na API de Empresas',
        texto:
          'Adicionado o campo regimeApuracaoTributosSN na WebAPI de Empresas. Esse campo indica o regime de apuração de tributos para empresas do Simples Nacional, permitindo que integradores consultem e configurem corretamente o regime fiscal da empresa via API.',
      },
      {
        icon: '🌐',
        destaque: 'Emissão para exterior no provedor GovDigital',
        texto:
          'Ajustada a emissão de NFS-e para tomadores do exterior no provedor GovDigital. O provedor não aceitava o formato padrão de endereço internacional, causando rejeição. Agora os campos de endereço são formatados conforme esperado pelo webservice GovDigital para tomadores estrangeiros.',
      },
      {
        icon: '🏙️',
        destaque: 'Salto Grande/SP migrado para ISSMAP',
        texto:
          'O município de Salto Grande/SP foi migrado para o provedor ISSMAP. A prefeitura trocou de sistema de NFS-e e as URLs, namespace e configurações foram atualizadas para o novo provedor. Empresas em Salto Grande agora emitem pelo ISSMAP.',
      },
      {
        icon: '🌐',
        destaque: 'Atualização de emissão para tomador do exterior',
        texto:
          'Atualizada a lógica de emissão para tomadores do exterior, ajustando o formato de envio dos dados de endereço internacional. A mudança garante que campos como código do país e endereço sejam enviados no formato correto para provedores que exigem estrutura específica para tomadores estrangeiros.',
      },
      {
        icon: '🌐',
        destaque:
          'NfseNacionalV2: código postal obrigatório para tomador estrangeiro',
        texto:
          'Adicionada validação no provedor NfseNacionalV2 que exige código postal para tomadores estrangeiros. Sem o código postal, a nota era rejeitada pela Receita Federal sem mensagem clara. Agora o sistema valida antes do envio e retorna mensagem explicativa ao cliente.',
      },
      {
        icon: '🏙️',
        destaque: 'Benedito Novo/SC ativado no provedor IPM',
        texto:
          'O município de Benedito Novo/SC foi ativado no provedor IPM. As URLs de produção e homologação foram configuradas, permitindo que empresas prestadoras de serviço em Benedito Novo emitam NFS-e pelo gateway.',
      },
      {
        icon: '🧮',
        destaque: 'Ajuste de retenção para valor líquido no PDF',
        texto:
          'Ajustado o cálculo do valor líquido exibido no PDF da nota para considerar corretamente o tipo de retenção (PIS/COFINS/CSLL). Antes, o valor líquido no PDF não refletia as retenções quando o tipo de retenção era diferente do padrão, causando divergência entre o valor exibido e o valor real.',
      },
      {
        icon: '🔧',
        destaque: 'Validação da discriminação na consulta por RPS',
        texto:
          'Atualizada a validação do campo discriminação na consulta por RPS. O campo agora é sanitizado antes da comparação, evitando falsos negativos quando a discriminação retornada pela prefeitura contém formatação diferente da enviada originalmente.',
      },
      {
        icon: '🧮',
        destaque: 'Zera alíquota e valores IBS/CBS para CST 410 (imunidade)',
        texto:
          'Para notas com CST 410 (imunidade tributária), os valores de alíquota e IBS/CBS agora são zerados automaticamente. Prefeituras rejeitavam notas imunes que continham valores de IBS/CBS preenchidos, pois a imunidade implica isenção total desses tributos.',
      },
      {
        icon: '🔧',
        destaque: 'Validação de tomador nulo antes do envio',
        texto:
          'Adicionada validação que verifica se o tomador é nulo antes de tentar acessar seus dados para montagem do XML. Isso previne NullReferenceException em cenários de emissão sem tomador e retorna mensagem de erro clara ao invés de exceção genérica.',
      },
      {
        icon: '🔧',
        destaque: 'RemoveInvalidXmlChars na descrição do serviço (xDescServ)',
        texto:
          'Adicionada sanitização de caracteres XML inválidos no campo xDescServ (descrição do serviço) antes do envio à prefeitura. Caracteres de controle e outros caracteres não permitidos em XML causavam rejeição silenciosa em alguns provedores.',
      },
      {
        icon: '🏙️',
        destaque: 'Itaju/SP ativado no provedor Fiorilli',
        texto:
          'O município de Itaju/SP foi ativado no provedor Fiorilli. As URLs de produção e homologação foram configuradas no ConfiguracoesMunicipios.xml, permitindo emissão de NFS-e para empresas prestadoras de serviço em Itaju.',
      },
      {
        icon: '🔧',
        destaque: 'Inclusão de empresaID na lista idsNovoRespTecnico',
        texto:
          'Uma empresa foi incluída na lista idsNovoRespTecnico para que seu CNPJ seja considerado no cadastro do responsável técnico junto à prefeitura. Sem essa inclusão, a empresa não conseguia emitir notas pois o responsável técnico não era reconhecido pelo webservice.',
      },
      {
        icon: '🏙️',
        destaque: 'Buenópolis/MG ativado no provedor Sintese',
        texto:
          'O município de Buenópolis/MG foi ativado no provedor Sintese. As URLs e configurações foram adicionadas ao ConfiguracoesMunicipios.xml, habilitando a emissão de NFS-e para empresas em Buenópolis.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento para chamar consulta por RPS',
        texto:
          'Adicionado tratamento no fluxo de consulta por RPS para garantir que a operação seja chamada corretamente quando o provedor suporta essa funcionalidade. Antes, em alguns cenários o sistema tentava consultar por lote quando deveria consultar por RPS individual, causando timeout.',
      },
      {
        icon: '🔧',
        destaque: 'Removido campo ref da observação (provisório)',
        texto:
          'Removido o campo "ref" que havia sido adicionado provisoriamente na observação da nota. O campo foi inserido temporariamente para rastreabilidade durante testes de integração e não deveria permanecer em produção, pois alterava o conteúdo da observação visível ao tomador.',
      },
    ],
  },
  {
    tag: '21/05/2026',
    titulo: 'Quarta-feira — 21 de Maio',
    data: '21/05/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Handle default value para xCidade no endExt',
        texto:
          'Adicionado tratamento de valor padrão para o campo xCidade no objeto endExt (endereço exterior). Quando o campo vinha nulo ou vazio em notas para tomadores estrangeiros, o XML era gerado com tag vazia, causando rejeição em provedores que exigem o campo preenchido. Agora um valor default é atribuído quando ausente.',
      },
      {
        icon: '🏙️',
        destaque: 'Suporte a Rio das Ostras/RJ e atualizações Hotmart',
        texto:
          'Adicionado suporte ao município de Rio das Ostras/RJ com configurações específicas para o provedor utilizado pela prefeitura. Também foram aplicadas atualizações nas configurações de emissão da Hotmart para adequação a novos requisitos municipais.',
      },
      {
        icon: '⚙️',
        destaque: '[Danfe v2] Aumento de réplicas do microservice',
        texto:
          'Aumentada a quantidade de réplicas do microservice ms-gw-danfe-v2-service. O serviço de geração de DANFE v2 estava sobrecarregado em horários de pico, causando lentidão na geração de PDFs. Com mais réplicas, a capacidade de processamento paralelo aumenta e o tempo de resposta melhora.',
      },
      {
        icon: '🆕',
        destaque:
          'Característica PermiteEvento adicionada ao modelo de provedores',
        texto:
          'A propriedade PermiteEvento foi adicionada ao modelo de características dos provedores. Essa flag indica quais provedores suportam operações baseadas em evento (como cancelamento por evento). O Portal Nacional e Barueri já vêm com PermiteEvento = true por padrão.',
      },
      {
        icon: '🔧',
        destaque: 'Limite de reenvio no erro E0440',
        texto:
          'Adicionado limite de 2 tentativas de reenvio quando ocorre o erro E0440 (valor da nota excede o permitido). Antes, o sistema reenviava indefinidamente tentando reduzir o valor, o que gerava loops infinitos em casos onde a redução não resolvia o problema. Agora, após 2 tentativas sem sucesso, o lote é marcado como erro definitivo.',
      },
      {
        icon: '🏙️',
        destaque: 'Glorinha/RS ativada no provedor GOVBRv3',
        texto:
          'O município de Glorinha/RS foi adicionado ao ConfiguracoesMunicipios.xml com o provedor GOVBRv3. As URLs de produção e homologação foram configuradas, incluindo emissão sem certificado digital. Empresas prestadoras de serviço em Glorinha agora podem emitir NFS-e pelo gateway.',
      },
      {
        icon: '🔧',
        destaque: 'Desativa emissão por lote para empresa (Grupo Fleury)',
        texto:
          'Uma empresa foi adicionada à lista de emissão unitária (1 nota por lote), forçando o envio individual de notas. A emissão em lote causava timeouts e rejeições para essa empresa específica devido ao volume e complexidade das notas enviadas simultaneamente.',
      },
      {
        icon: '📊',
        destaque:
          'iClips na lista de subscriptions para envio de NBS no Simples',
        texto:
          'A subscription da iClips foi incluída na lista SubscriptionsSempreEnviarNBS. Isso garante que notas emitidas por essa empresa no regime Simples Nacional sempre enviem o código NBS (Nomenclatura Brasileira de Serviços), requisito do Portal Nacional para determinadas atividades.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento de erro do provedor ADN (EtheriumTech)',
        texto:
          'Robustecido o tratamento do retorno HTTP 204 do provedor ADN (EtheriumTech). O XML agora é pré-processado e sanitizado antes da desserialização, evitando exceções quando o webservice retorna conteúdo vazio ou mal-formado.',
      },
    ],
  },
];
