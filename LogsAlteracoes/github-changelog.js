var changelogData = [
  {
    tag: '15/04/2026',
    titulo: 'Quarta-feira — 15 de Abril',
    data: '15/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '14/04/2026',
    titulo: 'Terça-feira — 14 de Abril',
    data: '14/04/2026',
    itens: [
      {
        icon: '🧾',
        destaque: 'NF-e Serviço: campos de endereço e RegimeEspecialTributacao',
        texto:
          'Até então, não era possível informar o RegimeEspecialTributacao (MEI, estimativa, cooperativa, etc.) diretamente na nota de serviço, nem enviar dados completos do local de prestação. Foram adicionadas as propriedades RegimeEspecialTributacao no ItemNFeServico e LocalPrestacaoServico no NFeServico, com serialização e desserialização no repositório V2. Isso permite que empresas com regimes especiais enviem essa informação corretamente na emissão, evitando rejeições em prefeituras que exigem esse campo.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de propriedades desnecessárias',
        texto:
          'Limpeza de código removendo propriedades que não eram mais utilizadas no modelo de dados. Essa remoção reduz complexidade e evita possíveis conflitos na serialização/desserialização de objetos durante o processamento de notas.',
      },
      {
        icon: '📮',
        destaque: 'Remoção de caracteres não numéricos do CEP',
        texto:
          'O campo CEP estava sendo enviado com formatação (pontos, traços) para algumas prefeituras, causando rejeições em provedores que exigem CEP apenas com dígitos. Foi ajustada a serialização do EnderecoDto para remover caracteres não numéricos antes do envio, garantindo compatibilidade com todos os provedores.',
      },
      {
        icon: '🏙️',
        destaque: 'Correção na cidade de prestação por código IBGE',
        texto:
          'Havia uma condição desnecessária na consulta por código IBGE que, em alguns cenários, não retornava a cidade de prestação do serviço corretamente. A condição foi removida para que a consulta por código IBGE sempre retorne a cidade de prestação, independente do cenário de emissão.',
      },
      {
        icon: '📊',
        destaque: 'Validação do percentual aproximado do Simples Nacional',
        texto:
          'Em alguns casos, o percentual aproximado de tributos do Simples Nacional estava sendo enviado com valor zero, o que gerava inconsistências no cálculo de impostos. Foi adicionada uma validação para garantir que o percentual aproximado do SN seja maior que zero antes de utilizá-lo nos cálculos, evitando envio de valores incorretos à prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Ajustes no layout 4.2 de Barueri/SP',
        texto:
          'Múltiplos ajustes no layout 4.2 de Barueri/SP: o cálculo de total de impostos retidos foi corrigido para não considerar PIS/COFINS quando não são retidos (o campo foi renomeado de ValorImpostosFederais para ValorImpostosFederaisRetidos). O endereço completo do local de prestação de serviço agora é preenchido com valores padrão quando não informado. Também foi ajustado o preenchimento de dados de exportação para cenários de serviço prestado no exterior.',
      },
    ],
  },
  {
    tag: '13/04/2026',
    titulo: 'Segunda-feira — 13 de Abril',
    data: '13/04/2026',
    itens: [
      {
        icon: '📊',
        destaque:
          'Controle de envio do ValorIss via propriedade naoEnviarValorIss',
        texto:
          'Algumas prefeituras rejeitam notas quando o ValorIss é enviado junto com a alíquota, pois recalculam o valor internamente. Foi criada a propriedade naoEnviarValorIss que permite controlar, por empresa ou município, se o campo ValorIss deve ou não ser incluído no XML de envio. Isso resolve rejeições em municípios que não aceitam esse campo.',
      },
      {
        icon: '🆕',
        destaque: 'Cancelamento para o provedor WebFiscoTecnologia',
        texto:
          'O provedor WebFiscoTecnologia não possuía a operação de cancelamento de NFS-e implementada. Foi adicionada a integração completa de cancelamento, incluindo novas referências de serviço (WSDL) para consulta e envio. Municípios que usam esse provedor agora podem cancelar notas diretamente pelo sistema, sem precisar acessar o portal da prefeitura.',
      },
      {
        icon: '🔧',
        destaque:
          'Consulta de nota inativa no provedor — tratamento de retorno',
        texto:
          'Quando uma nota era consultada em um provedor e o retorno indicava que o registro "não está ativo ou não existe", o sistema não tratava essa mensagem adequadamente, podendo travar a fila de processamento. Foi incluído esse texto de retorno na lista de mensagens reconhecidas para que a consulta seja finalizada corretamente, evitando reprocessamento infinito.',
      },
      {
        icon: '🌐',
        destaque:
          'Portal Nacional: validação de endereço do evento condicionada ao idAtvEvt',
        texto:
          'No Portal Nacional (NfseNacionalV2), a validação de endereço do evento estava sendo aplicada mesmo quando o campo idAtvEvt não era informado, causando erros em cenários de emissão simplificada. Agora a validação de endereço do evento só é executada quando o idAtvEvt é preenchido, evitando rejeições desnecessárias.',
      },
      {
        icon: '🔧',
        destaque: 'Empresa com flag EmpresaEnviaConsumidorFinalFalse',
        texto:
          'Determinada empresa precisava que o campo ConsumidorFinal fosse enviado como false na emissão, contrariando o comportamento padrão. Foi adicionada a empresa na lista EmpresaEnviaConsumidorFinalFalse, permitindo que o sistema envie o valor correto para essa empresa específica sem afetar as demais.',
      },
      {
        icon: '📊',
        destaque:
          'Regra de alíquota e tipo de imunidade específica por empresa',
        texto:
          'Uma empresa específica precisava de um tipo de imunidade diferente do padrão (tipo 3) e de regras de alíquota customizadas. Foi ajustada a configuração para incluir essa empresa no dicionário TipoImunidadePorEmpresa, garantindo que a emissão utilize o tipo de imunidade e a alíquota corretos conforme exigido pela prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento de XML para desserialização correta',
        texto:
          'Em alguns cenários, o XML retornado pela prefeitura continha estruturas que não eram desserializadas corretamente pelo sistema, causando perda de dados na consulta de notas. Foi adicionado um tratamento específico no parser XML para garantir que todos os campos sejam extraídos corretamente, independente da formatação do retorno.',
      },
      {
        icon: '🆕',
        destaque: 'PDF padrão GIF para contas Nibo e ContaAzul',
        texto:
          'As contas integradas via Nibo e ContaAzul não geravam PDF no formato GIF (layout padrão do gateway), utilizando apenas o PDF da prefeitura. Foi configurado para que essas contas passem a gerar o PDF no padrão GIF automaticamente, garantindo uniformidade visual e disponibilidade do documento mesmo quando a prefeitura não retorna PDF.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de versão de integração para municípios',
        texto:
          'Alguns municípios estavam configurados com versões antigas de integração dos provedores, o que causava incompatibilidades com as APIs mais recentes das prefeituras. Foi atualizada a versão de integração para esses municípios, garantindo compatibilidade com os endpoints atuais e evitando erros de comunicação.',
      },
      {
        icon: '🌐',
        destaque: 'Cidade de prestação via metadados para notas de exterior',
        texto:
          'Para notas de serviço prestado no exterior, o código e nome da cidade de prestação precisavam ser configuráveis via metadados da empresa (ExtendedProperties), pois o código IBGE 9999999 não possui cidade associada. Foi criado o método ResolverLocalPrestacaoServicoFixada que lê esses metadados e preenche corretamente a cidade de prestação, resolvendo rejeições em provedores que exigem esse campo mesmo para notas de exterior.',
      },
      {
        icon: '🏙️',
        destaque: 'Panamá/GO, Mundo Novo/GO e Guapó/GO — integração Centi',
        texto:
          'Os municípios de Panamá/GO, Mundo Novo/GO e Guapó/GO foram integrados ao provedor Centi. Esses municípios goianos passaram a utilizar o sistema Centi para emissão de NFS-e, com todas as operações configuradas (emissão, consulta, cancelamento). Clientes dessas cidades agora podem emitir notas pelo gateway.',
      },
      {
        icon: '🏙️',
        destaque: 'Tanquinho/BA migrado para NfseNacionalV2',
        texto:
          'O município de Tanquinho/BA foi migrado do provedor anterior para o NfseNacionalV2 (Portal Nacional). A prefeitura aderiu ao padrão nacional de NFS-e, e as configurações de URL, namespace e operações foram atualizadas para o novo provedor.',
      },
      {
        icon: '🏙️',
        destaque: 'Papanduva/SC migrado para IPMv2',
        texto:
          'O município de Papanduva/SC foi atualizado do provedor anterior para o IPMv2. A prefeitura migrou seu sistema de NFS-e, e as configurações foram atualizadas para garantir compatibilidade com o novo webservice.',
      },
      {
        icon: '�️',
        destaque: 'Ribeira do Pombal/BA migrado para WebIssV2',
        texto:
          'O município de Ribeira do Pombal/BA foi atualizado para o provedor WebIssV2. A migração incluiu novas referências de serviço e a adição do município na lista de municípios não suportados pelo provedor antigo, garantindo que as notas sejam direcionadas corretamente para o novo webservice.',
      },
      {
        icon: '📊',
        destaque: 'Ativação do UsaNovoFormatoPisCofins para provedor',
        texto:
          'A propriedade UsaNovoFormatoPisCofins foi ativada para um provedor específico. Esse novo formato altera a forma como os campos de PIS e COFINS são enviados no XML, seguindo o padrão mais recente exigido por algumas prefeituras. Sem essa flag, as notas eram rejeitadas por incompatibilidade no formato dos tributos.',
      },
      {
        icon: '🏙️',
        destaque: 'Tapes/RS e Ibicaré/SC — adesão ao Portal Nacional',
        texto:
          'Os municípios de Tapes/RS e Ibicaré/SC aderiram ao Portal Nacional de NFS-e (NfseNacionalV2). As configurações de ambos os municípios foram atualizadas com as URLs, namespaces e operações do padrão nacional, permitindo emissão de notas pelo gateway.',
      },
      {
        icon: '🔧',
        destaque: 'Limpeza de mensagens de erro no FgMaiss',
        texto:
          'As mensagens de erro retornadas pelas prefeituras que usam o provedor FgMaiss vinham com tags HTML, caracteres especiais e formatação que dificultavam a leitura no painel do cliente. Foi criado o método LimparMensagemErro que sanitiza essas mensagens antes de exibir. Aplicado em todas as operações do provedor (Cancelar, Recepcionar e RecepcionarV2), melhorando significativamente a experiência do usuário ao visualizar erros de emissão.',
      },
      {
        icon: '📊',
        destaque: 'Tributos aproximados em São Paulo/SP no novo layout JSON',
        texto:
          'No novo layout JSON de São Paulo/SP, os tributos aproximados não estavam sendo enviados corretamente. Foi ajustado o preenchimento para permitir o envio dos tributos aproximados nesse formato, garantindo que as notas emitidas em São Paulo incluam as informações de carga tributária conforme exigido pela legislação.',
      },
    ],
  },
  {
    tag: '12/04/2026',
    titulo: 'Domingo — 12 de Abril',
    data: '12/04/2026',
    itens: [
      {
        icon: '📊',
        destaque: 'Tributos aproximados em São Paulo/SP — novo layout JSON',
        texto:
          'Complemento do ajuste para São Paulo/SP: o percentual aproximado de tributos agora é extraído do novo grupo de informações do layout JSON. Anteriormente, o sistema buscava o percentual em um campo que não existia no novo formato, resultando em notas sem a informação de carga tributária. Agora o campo correto é lido, garantindo conformidade com a legislação paulistana.',
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
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '10/04/2026',
    titulo: 'Sexta-feira — 10 de Abril',
    data: '10/04/2026',
    itens: [
      {
        icon: '📊',
        destaque: 'Percentual aproximado de tributos em São Paulo/SP',
        texto:
          'O percentual aproximado de tributos em São Paulo/SP estava sendo buscado em um campo do layout antigo que não existia no novo formato JSON. Foi ajustado para pegar o percentual do novo grupo de informações, garantindo que a carga tributária aproximada seja exibida corretamente nas notas emitidas na capital paulista.',
      },
      {
        icon: '🆕',
        destaque:
          'Lógica Hotmart para definir UsaNBS nas características do provedor',
        texto:
          'Foi adicionada uma lógica específica da Hotmart para definir automaticamente a flag UsaNBS nas características do provedor. O NBS (Nomenclatura Brasileira de Serviços) é obrigatório em alguns municípios, e essa lógica garante que o campo seja preenchido corretamente com base nas configurações do provedor, evitando rejeições por NBS ausente.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de código desnecessário',
        texto:
          'Limpeza de código removendo trechos que não eram mais utilizados no fluxo de emissão. Essa remoção simplifica a manutenção e reduz a chance de comportamentos inesperados causados por código legado.',
      },
      {
        icon: '📊',
        destaque: 'Zeragem do pTotTribFed estendida para Franca/SP',
        texto:
          'O município de Franca/SP exigia que o campo pTotTribFed (percentual total de tributos federais) fosse zerado no XML de NFS-e, assim como já era feito para outros municípios. Sem essa zeragem, as notas eram rejeitadas pela prefeitura. O ajuste foi estendido para incluir Franca/SP na lista de municípios que recebem esse tratamento.',
      },
      {
        icon: '🔧',
        destaque: 'Correção na extração do número da nota fiscal',
        texto:
          'O método de extração do número da nota fiscal estava retornando valores incorretos em alguns cenários, como quando o retorno da prefeitura continha caracteres adicionais. Foi corrigido para não retornar o número errado, garantindo que a nota seja identificada corretamente no sistema após a emissão.',
      },
      {
        icon: '🏙️',
        destaque:
          'São João Batista do Glória/MG — consulta por RPS no MemoryV2',
        texto:
          'O município de São João Batista do Glória/MG foi migrado recentemente para o provedor MemoryV2, mas faltava a operação de consulta individual de nota por número de RPS. Essa operação é essencial para sincronização de notas — quando o sistema precisa verificar se uma nota específica foi processada pela prefeitura. Agora o provedor MemoryV2 suporta essa consulta, resolvendo problemas de notas que ficavam "em emissão" sem retorno.',
      },
      {
        icon: '�',
        destaque: 'Tratamento de mensagem em cenário de tentativa de reenvio',
        texto:
          'Quando o sistema tentava reenviar uma nota que já havia sido processada pela prefeitura, a mensagem de erro retornada não era tratada adequadamente, confundindo o usuário. Foi adicionado um tratamento específico para retornar uma mensagem clara informando que a nota já foi processada, orientando o usuário sobre os próximos passos.',
      },
      {
        icon: '🏙️',
        destaque: 'Adrianópolis/PR e Serrania/MG — adesão ao Portal Nacional',
        texto:
          'Os municípios de Adrianópolis/PR e Serrania/MG aderiram ao Portal Nacional de NFS-e (NfseNacionalV2). As configurações foram atualizadas com URLs, namespaces e operações do padrão nacional, permitindo que clientes dessas cidades emitam notas pelo gateway.',
      },
      {
        icon: '🏙️',
        destaque: 'Tangará/SC aderiu ao Portal Nacional',
        texto:
          'O município de Tangará/SC aderiu ao Portal Nacional de NFS-e. As configurações do município foram atualizadas para o provedor NfseNacionalV2, incluindo URLs de produção e homologação, namespace e operações padrão.',
      },
      {
        icon: '�',
        destaque: 'Desabilita emissão em lote para empresa específica',
        texto:
          'Uma empresa específica estava enfrentando problemas ao emitir notas em lote, com rejeições intermitentes da prefeitura. Foi desabilitada a emissão em lote para essa empresa, forçando o envio individual de cada nota. Isso resolve o problema de rejeições em lote sem afetar outras empresas.',
      },
      {
        icon: '📊',
        destaque: 'Envio do Código NBS para empresa específica',
        texto:
          'Uma empresa específica precisava enviar o Código NBS (Nomenclatura Brasileira de Serviços) na emissão de NFS-e, campo que não estava sendo preenchido. Foi adicionado o envio do NBS para essa empresa, atendendo à exigência da prefeitura e evitando rejeições por campo obrigatório ausente.',
      },
      {
        icon: '🆕',
        destaque: 'AutenticidadeNota adicionada ao provedor',
        texto:
          'Foi adicionado o campo AutenticidadeNota ao provedor, permitindo que o código de autenticidade retornado pela prefeitura seja armazenado e disponibilizado na consulta da nota. Esse código é usado para verificar a autenticidade da NFS-e no portal da prefeitura.',
      },
      {
        icon: '📊',
        destaque:
          'Incidência no município do prestador para empresa específica',
        texto:
          'Uma empresa específica precisava que o MunicipioIncidencia fosse sempre definido como o município do prestador, independente do local de prestação do serviço. Foi incluído o ID da empresa na lista de incidência no município do prestador, garantindo que o ISS seja recolhido no município correto conforme a legislação aplicável.',
      },
      {
        icon: '🏙️',
        destaque: 'Socorro/SP migrado para BethaV3',
        texto:
          'O município de Socorro/SP foi atualizado do provedor anterior para o BethaV3. A prefeitura migrou seu sistema de NFS-e para a versão mais recente da Betha, e as configurações de URL, namespace e operações foram atualizadas para garantir compatibilidade.',
      },
      {
        icon: '📊',
        destaque:
          'Remoção de municípios da flag SempreEnviaAliquotaIssEmpresasSimplesNacional',
        texto:
          'Alguns municípios estavam incorretamente na lista SempreEnviaAliquotaIssEmpresasSimplesNacional, fazendo com que a alíquota do ISS fosse sempre enviada para empresas do Simples Nacional nesses municípios, mesmo quando não deveria. Foram removidos os municípios que não precisam dessa flag, evitando rejeições por alíquota indevida.',
      },
      {
        icon: '🧾',
        destaque: 'DACE em contingência — ajuste na geração do DanfeMS',
        texto:
          'A geração da DACE (Documento Auxiliar do CT-e) no módulo DanfeMS apresentava problemas em cenários de contingência, onde os dados disponíveis são parciais. Foi ajustada a lógica de geração para tratar corretamente esses cenários, garantindo que o documento auxiliar seja gerado mesmo quando a nota está em contingência.',
      },
      {
        icon: '📊',
        destaque:
          'Ativação do UsaNovoFormatoPisCofins e consulta por RPS para provedor',
        texto:
          'Foi ativada a propriedade UsaNovoFormatoPisCofins para um provedor específico, alterando o formato de envio dos campos PIS e COFINS no XML. Além disso, foi criada a operação de consulta por RPS para esse provedor, permitindo a sincronização individual de notas por número de RPS.',
      },
    ],
  },
  {
    tag: '09/04/2026',
    titulo: 'Quinta-feira — 09 de Abril',
    data: '09/04/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Melhorias na consulta de lote NFS-e em Barueri/SP',
        texto:
          'A consulta de lote de NFS-e em Barueri/SP foi aprimorada com logs detalhados para rastreamento do processo, incluindo resolução de captcha e validação dos dados. O campo txtNumeroCTS foi ajustado para 10 dígitos, o PDF da nota agora é salvo e marcado como gerado ao consultar por RPS, e o tratamento de erros de captcha foi aprimorado com tentativas controladas. Também foi expandido o reconhecimento de mensagens de erro para identificar RPS já informado.',
      },
      {
        icon: '🌐',
        destaque: 'Verificação de tomador estrangeiro no endereço de prestação',
        texto:
          'Quando o tomador do serviço era estrangeiro, o sistema tentava preencher campos de endereço brasileiro (logradouro, bairro, CEP) que não se aplicam, causando erros na emissão. Foi adicionada uma verificação que pula a atribuição de endereço quando o tomador é do exterior, e define explicitamente o TipoLogLocPre como "Rua" após preencher os campos de endereço para tomadores nacionais.',
      },
      {
        icon: '🔧',
        destaque: 'Melhoria no tratamento de endereço no reg20',
        texto:
          'A lógica de preenchimento de endereço no registro reg20 foi aprimorada para preferir o endereço do Tomador quando disponível, com fallback para o endereço da Empresa quando o do tomador não está preenchido. Isso resolve cenários onde o endereço de prestação ficava vazio porque o tomador não tinha endereço cadastrado, mas a empresa sim.',
      },
    ],
  },
  {
    tag: '08/04/2026',
    titulo: 'Quarta-feira — 08 de Abril',
    data: '08/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Ajuste para não travar a fila de processamento',
        texto:
          'Em determinados cenários de erro no cálculo de PIS/COFINS, quando a base de cálculo era zero, o sistema lançava uma exceção não tratada que travava a fila de processamento de notas. Foi adicionada uma validação para verificar se a base de cálculo é zero antes de prosseguir, evitando que uma nota com erro bloqueie o processamento das demais.',
      },
      {
        icon: '🌐',
        destaque: 'Ajustes para ISSQN exterior e novos testes de PDF',
        texto:
          'Para notas de serviço prestado no exterior (código IBGE 9999999), o relatório/PDF agora preenche campos com valores zerados e textos específicos para exterior. Além disso, a alíquota do ISS é zerada para empresa específica quando o tomador é do exterior. Foram adicionados novos testes de geração de PDF para validar esses cenários.',
      },
      {
        icon: '🌐',
        destaque: 'Exportação condicionada e cancelamento no GissOnline',
        texto:
          'No Portal Nacional, o critério de exportação foi ajustado para considerar como exportação apenas quando o serviço foi prestado fora do país (código IBGE 9999999), e não apenas quando o tomador é estrangeiro. Além disso, o provedor GissOnline passou a permitir tentativas de cancelamento de NFS-e — antes o sistema bloqueava automaticamente, mas como muitas cidades mudam as regras de cancelamento com frequência, agora o usuário pode tentar cancelar e receber o retorno da prefeitura.',
      },
      {
        icon: '🏙️',
        destaque: 'Consulta NFS-e por RPS com AntiCaptcha em Barueri/SP',
        texto:
          'Barueri/SP utiliza captcha no portal da prefeitura para consulta de notas, o que impedia a consulta automatizada por RPS. Foi implementado um fluxo completo de consulta via web scraping com resolução automática de captcha usando o serviço AntiCaptcha. Inclui nova operação ConsultarNFeRpsV3, comando ConsultarLoteNFeWSCommandV3, e atualização do CaptchaSolverFactory para suportar AntiCaptcha além do DeathByCaptcha.',
      },
      {
        icon: '🔧',
        destaque: 'Testes de integração em Nova Serrana/MG',
        texto:
          'Foram realizados commits de teste para validação da integração com o município de Nova Serrana/MG, verificando o comportamento do provedor em cenários específicos de emissão. Esses testes ajudam a garantir que as configurações do município estão corretas antes de liberar para produção.',
      },
      {
        icon: '🔒',
        destaque: 'Bloqueio de atualização de API key por subscription ID',
        texto:
          'Foi implementado um filtro que bloqueia a atualização de API key para subscriptions específicas. Isso impede que determinadas integrações (como parceiros com contratos especiais) tenham suas chaves de API alteradas indevidamente, protegendo a estabilidade das integrações existentes.',
      },
      {
        icon: '🏙️',
        destaque:
          'Boca da Mata/AL e Governador Valadares/MG — adesão ao Portal Nacional',
        texto:
          'Os municípios de Boca da Mata/AL e Governador Valadares/MG aderiram ao Portal Nacional de NFS-e (NfseNacionalV2). As configurações foram atualizadas com URLs, namespaces e operações do padrão nacional, permitindo emissão de notas pelo gateway para clientes dessas cidades.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de porta do endpoint de Santa Rita do Pardo/MS',
        texto:
          'O endpoint do webservice de Santa Rita do Pardo/MS estava configurado na porta 8085, mas a prefeitura migrou para a porta 8090. Sem essa atualização, todas as tentativas de emissão e consulta falhavam com erro de conexão. A porta foi corrigida para 8090, restaurando a comunicação com o webservice.',
      },
      {
        icon: '📮',
        destaque: 'Remoção de formatação do CEP do local de prestação',
        texto:
          'O CEP do local de prestação estava sendo enviado com formatação (traço) para algumas prefeituras que exigem apenas dígitos. Foi removida a formatação do CEP antes do envio, garantindo compatibilidade com provedores que validam o formato do campo.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização do link de homologação de Contagem/MG',
        texto:
          'O link de homologação do webservice de Contagem/MG estava desatualizado, impedindo testes em ambiente de homologação. Foi atualizado para o novo endereço fornecido pela prefeitura, restaurando a capacidade de testar emissões antes de enviar para produção.',
      },
      {
        icon: '🔧',
        destaque: 'Retry no cancelamento para garantir consistência',
        texto:
          'Em alguns casos, o cancelamento de NFS-e falhava na comunicação com a prefeitura mas era registrado como cancelado na API interna, gerando inconsistência. Foi adicionado um mecanismo de retry que garante que o cancelamento seja efetivado tanto na API quanto na prefeitura, evitando notas marcadas como canceladas que ainda estão ativas no município.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização do endpoint de Jardim/MS',
        texto:
          'O endpoint do webservice do município de Jardim/MS estava desatualizado, causando falhas na comunicação. Foi atualizado para o novo endereço fornecido pela prefeitura, restaurando a emissão e consulta de notas.',
      },
      {
        icon: '📊',
        destaque:
          'MunicipioIncidencia como município do prestador para ContaAzul',
        texto:
          'Para a empresa ContaAzul, o MunicipioIncidencia precisava ser sempre definido como o município do prestador, independente do local de prestação. Foi adicionada essa configuração específica, garantindo que o ISS seja calculado e recolhido no município correto para as notas emitidas via integração ContaAzul.',
      },
      {
        icon: '📊',
        destaque: 'Cenário de envio de alíquota para empresa específica',
        texto:
          'Uma empresa específica precisava enviar a alíquota do ISS em cenários onde normalmente não seria enviada. Foi adicionado um cenário de exceção para essa empresa, permitindo o envio da alíquota conforme exigido pela prefeitura do município onde opera.',
      },
      {
        icon: '📊',
        destaque:
          'Correção no envio de alíquota para prestação fora do município com ISS não retido',
        texto:
          'Quando o serviço era prestado fora do município e o ISS não era retido, a alíquota estava sendo enviada incorretamente, causando rejeições em algumas prefeituras. Foi corrigida a lógica para não enviar a alíquota nesses cenários, seguindo a regra de que o ISS não retido em prestação fora do município não deve incluir alíquota no XML.',
      },
      {
        icon: '🔧',
        destaque: 'Teste de integração geral',
        texto:
          'Commit de teste para validação de integração no ambiente, verificando o comportamento do sistema em cenários específicos de emissão e consulta de notas fiscais.',
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
        destaque: 'Atualização de região de código',
        texto:
          'Ajuste na organização do código-fonte, movendo trechos para a região correta dentro do arquivo. Essa reorganização melhora a legibilidade e manutenção do código sem alterar o comportamento funcional.',
      },
      {
        icon: '🔧',
        destaque: 'Normalização da série RPS na consulta de lote NFS-e',
        texto:
          'A comparação de série do RPS na consulta de lote de NFS-e não tratava variações como espaços em branco ou o caractere "-" usado como série vazia. Foi criado o helper NormalizarSerie que faz trim e trata "-" como string vazia, garantindo que a comparação de séries seja consistente e notas não deixem de ser encontradas por diferenças de formatação.',
      },
      {
        icon: '🔧',
        destaque: 'Teste de integração',
        texto:
          'Commit de teste para validação de cenários específicos de integração com provedores, verificando o comportamento do sistema em ambiente controlado.',
      },
      {
        icon: '📊',
        destaque:
          'GOVBRv3: remoção de municípios da flag SempreEnviaAliquotaIssEmpresasSimplesNacional',
        texto:
          'Alguns municípios que utilizam o provedor GOVBRv3 estavam incorretamente na lista SempreEnviaAliquotaIssEmpresasSimplesNacional, fazendo com que a alíquota do ISS fosse sempre enviada para empresas do Simples Nacional. Esses municípios foram removidos da flag, evitando rejeições por envio indevido de alíquota em cidades que não exigem esse campo.',
      },
      {
        icon: '🏙️',
        destaque:
          'São Gonçalo do Rio Abaixo/MG — regra UsaCIntContribComCodigoServico',
        texto:
          'O município de São Gonçalo do Rio Abaixo/MG foi incluído na regra UsaCIntContribComCodigoServico, que determina que o código de contribuição (CIntContrib) deve ser preenchido com o código do serviço. Sem essa configuração, as notas eram rejeitadas pela prefeitura por falta do campo obrigatório.',
      },
      {
        icon: '🏙️',
        destaque: 'Vinhedo/SP — emissão sem tomador permitida',
        texto:
          'O município de Vinhedo/SP foi configurado para permitir a emissão de NFS-e sem informar o tomador do serviço. Alguns tipos de serviço (como estacionamento, pedágio) não possuem tomador identificado, e a prefeitura de Vinhedo aceita essas notas. Sem essa configuração, o sistema bloqueava a emissão por falta de tomador.',
      },
      {
        icon: '🏙️',
        destaque: 'Varginha/MG — remoção da obrigatoriedade de RPS sequencial',
        texto:
          'O município de Varginha/MG, que usa o provedor BethaV3, tinha a obrigatoriedade de numeração sequencial de RPS ativada. Isso causava problemas quando notas eram rejeitadas e reenviadas, pois o número do RPS ficava fora de sequência. Foi removida essa obrigatoriedade, e em caso de erro no processamento, o número do RPS é resetado para 0 e a série para null, permitindo que a prefeitura atribua novos valores.',
      },
      {
        icon: '🏙️',
        destaque: 'Arroio do Meio/RS migrado para NfseNacionalV2',
        texto:
          'O município de Arroio do Meio/RS foi atualizado do provedor anterior para o NfseNacionalV2 (Portal Nacional). A prefeitura aderiu ao padrão nacional de NFS-e, e as configurações de URL, namespace e operações foram atualizadas.',
      },
      {
        icon: '🆕',
        destaque: 'Novo provedor GIFv2 no layout nacional',
        texto:
          'Foi criado o novo provedor GIFv2 (Gestão Inteligente Fiscal versão 2) no layout nacional de NFS-e. O provedor implementa todas as operações core: Recepcionar (emissão), Consultar (consulta de lote e por RPS), Cancelar e Gerar PDF. Inclui testes unitários completos para todas as operações. Municípios que migrarem para o GIFv2 poderão emitir notas pelo gateway.',
      },
      {
        icon: '🌐',
        destaque: 'Tratamento de tomador exterior em Cachoeirinha/RS',
        texto:
          'O município de Cachoeirinha/RS apresentava problemas na emissão de notas com tomador estrangeiro. Foi implementado o tratamento específico para incluir o PaisPrestacaoServico no ItemNfse e ajustar a condição de verificação de prestador estrangeiro no RecepcionarLoteNFe. Inclui múltiplos commits de refatoração para garantir o correto funcionamento em todos os cenários de emissão para o exterior.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de URLs de Embu das Artes/SP',
        texto:
          'As URLs do webservice de Embu das Artes/SP estavam desatualizadas, causando falhas na comunicação com a prefeitura. Foram atualizadas as URLs de produção e/ou homologação para os novos endereços, restaurando a emissão e consulta de notas no município.',
      },
      {
        icon: '🔧',
        destaque:
          'Cotia/SP — código 704 configurado para enviar código de obra',
        texto:
          'O código de serviço 704 em Cotia/SP exige o envio do código de obra na emissão de NFS-e. Foi configurada essa regra específica para que, quando o serviço 704 for utilizado em Cotia/SP, o campo de código de obra seja incluído no XML de envio, evitando rejeições por campo obrigatório ausente.',
      },
      {
        icon: '🏙️',
        destaque: 'Itaituba/PA migrado para CoplanV2',
        texto:
          'O município de Itaituba/PA foi atualizado do provedor anterior para o CoplanV2. A prefeitura migrou seu sistema de NFS-e, e as configurações de URL, namespace e operações foram atualizadas para o novo provedor.',
      },
      {
        icon: '🏙️',
        destaque: 'Serra do Mel/RN migrado para TinusV2',
        texto:
          'O município de Serra do Mel/RN foi atualizado para o provedor TinusV2. A prefeitura migrou seu sistema de NFS-e para a nova versão do Tinus, e as configurações foram atualizadas para garantir compatibilidade com o novo webservice.',
      },
      {
        icon: '📊',
        destaque:
          'Pejuçara/RS removida da flag SempreEnviaAliquotaIssEmpresasSimplesNacional',
        texto:
          'O município de Pejuçara/RS estava incorretamente na lista SempreEnviaAliquotaIssEmpresasSimplesNacional, fazendo com que a alíquota do ISS fosse sempre enviada para empresas do Simples Nacional. Foi removido da flag, evitando rejeições por envio indevido de alíquota.',
      },
      {
        icon: '🔧',
        destaque: 'Ajuste na tag cClassTrib',
        texto:
          'O nome da propriedade cClassTrib estava com um caractere "s" a mais (cClasssTrib), causando falha na serialização do XML. Foi corrigido o nome da propriedade para cClassTrib, garantindo que o campo de classificação tributária seja enviado corretamente no XML de emissão.',
      },
      {
        icon: '🔧',
        destaque: 'Validação do código NBS para não travar a fila',
        texto:
          'Quando o código NBS (Nomenclatura Brasileira de Serviços) era inválido ou estava em formato incorreto, o sistema lançava uma exceção não tratada que travava a fila de processamento. Foi adicionada uma validação prévia do NBS que trata o erro graciosamente, permitindo que a nota seja rejeitada com mensagem clara sem bloquear as demais notas da fila.',
      },
      {
        icon: '📊',
        destaque: 'CST do PIS/COFINS conforme enviado pelo prestador',
        texto:
          'O CST (Código de Situação Tributária) do PIS/COFINS estava sendo sobrescrito pelo sistema com um valor padrão, ignorando o CST informado pelo prestador. Foi ajustado para utilizar o CST enviado pelo prestador quando disponível, respeitando a situação tributária real da empresa e evitando rejeições por CST incorreto.',
      },
      {
        icon: '🔧',
        destaque: 'Refatoração de código',
        texto:
          'Commit de refatoração para melhorar a organização e legibilidade do código, sem alteração funcional. Inclui ajustes de formatação e estruturação de métodos.',
      },
      {
        icon: '📊',
        destaque: 'NBS válido informado como padrão',
        texto:
          'Quando o campo NBS não era informado pelo prestador, o sistema enviava um valor vazio ou inválido, causando rejeições em municípios que exigem NBS. Foi ajustado para informar um NBS válido como padrão quando o campo não é preenchido, evitando rejeições desnecessárias.',
      },
    ],
  },
  {
    tag: '06/04/2026',
    titulo: 'Segunda-feira — 06 de Abril',
    data: '06/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'IDs adicionados em responsável técnico',
        texto:
          'Foram adicionados novos IDs na configuração de responsável técnico do sistema. Essa configuração é necessária para que determinadas empresas possam emitir notas com os dados do responsável técnico preenchidos corretamente, conforme exigido por algumas prefeituras.',
      },
      {
        icon: '📊',
        destaque: 'Normalização do NBS antes da validação',
        texto:
          'O campo NBS (Nomenclatura Brasileira de Serviços) estava sendo validado sem normalização prévia, fazendo com que valores com espaços ou formatação diferente fossem considerados vazios e rejeitados. Foi adicionada a normalização (trim e limpeza) antes da validação, evitando envio de NBS vazio quando o valor real estava preenchido mas com formatação incorreta.',
      },
      {
        icon: '🌐',
        destaque: 'Tratamento de NFS-e com prestação de serviço no exterior',
        texto:
          'Foi implementado um tratamento completo para notas fiscais de serviço prestado no exterior (código IBGE 9999999). O sistema agora preenche campos específicos nos registros reg20 e reg40 com dados do endereço do tomador estrangeiro, zera valores de ISS e adiciona informações complementares sobre país, cidade, estado e CEP. Para empresa específica, o código IBGE é forçado para exterior quando o tomador é estrangeiro.',
      },
      {
        icon: '🏙️',
        destaque: 'Jardinópolis/SP migrado para GissOnline',
        texto:
          'O município de Jardinópolis/SP foi atualizado para o provedor GissOnline. A prefeitura migrou seu sistema de NFS-e, e as configurações de URL e operações foram atualizadas para o novo provedor, restaurando a emissão de notas no município.',
      },
      {
        icon: '👤',
        destaque: 'Novos usuários no backoffice',
        texto:
          'Foram adicionados novos usuários às permissões de backoffice nos ambientes de homologação (HML) e produção (PRD). Esses usuários agora podem acessar funcionalidades administrativas do sistema para suporte e operação.',
      },
      {
        icon: '📊',
        destaque:
          'Fallback de IBS/CBS ajustado para optantes do Simples Nacional',
        texto:
          'O fallback de dedução de IBS/CBS estava sendo aplicado para todas as empresas, mas deveria ser restrito apenas a optantes do Simples Nacional. Foi ajustada a lógica para que a dedução automática de IBS/CBS ocorra apenas quando a empresa é optante do Simples, evitando cálculos incorretos para empresas do regime normal.',
      },
      {
        icon: '🌐',
        destaque: 'Valor da moeda estrangeira no campo vServMoeda',
        texto:
          'Para notas de serviço prestado no exterior, o campo vServMoeda (valor do serviço em moeda estrangeira) não estava sendo preenchido com o valor correto da moeda estrangeira quando disponível nos metadados. Foi implementada a lógica para extrair o valorServicoMoedaEstrangeira dos metadados da nota e utilizá-lo no campo vServMoeda, permitindo que o valor em moeda estrangeira seja informado corretamente na NFS-e.',
      },
      {
        icon: '🔧',
        destaque: 'Refatoração da extração de valorServicoMoedaEstrangeira',
        texto:
          'A lógica de extração do valor do serviço em moeda estrangeira foi refatorada para usar acesso via lista JSON em vez de dicionário, tornando o código mais robusto e compatível com diferentes formatos de metadados. Essa refatoração corrige cenários onde o valor não era extraído corretamente.',
      },
      {
        icon: '🔧',
        destaque: 'Refatoração da extração de metadados de comércio exterior',
        texto:
          'A extração de metadados de InfoComercioExterior foi refatorada de IEnumerable para IDictionary, utilizando TryGetAsDecimal para parsing do valorServicoMoedaEstrangeira. Essa mudança melhora a robustez da extração e evita erros de conversão em cenários com dados parciais.',
      },
      {
        icon: '📊',
        destaque:
          'Ajustes nos envios de impostos retidos — CSLL e apuração própria',
        texto:
          'Os valores de impostos retidos na tag CSLL e na apuração própria estavam sendo enviados incorretamente em alguns cenários, causando divergências no cálculo de tributos. Foi ajustada a lógica de envio para garantir que os valores de CSLL retido e apuração própria sejam preenchidos corretamente no XML, conforme as regras tributárias de cada município.',
      },
      {
        icon: '🆕',
        destaque: 'Novo modelo de envio de Obras para o provedor SIGISSv5',
        texto:
          'O provedor SIGISSv5 passou a suportar um novo modelo de envio de dados de obras na emissão de NFS-e. Anteriormente, o campo de obra era enviado em formato simplificado, mas algumas prefeituras que usam SIGISSv5 exigem dados detalhados (número da obra, ART, endereço). O novo modelo preenche todos os campos obrigatórios de obra conforme o padrão do provedor.',
      },
      {
        icon: '📊',
        destaque: 'Empresas não optantes de Uberaba/MG sem envio de alíquota',
        texto:
          'Empresas não optantes do Simples Nacional em Uberaba/MG estavam enviando a alíquota do ISS na emissão, mas a prefeitura rejeita notas com alíquota informada para esse regime. Foram adicionadas essas empresas na lista de exceção para não enviar alíquota, resolvendo as rejeições.',
      },
      {
        icon: '🆕',
        destaque: 'Campo CNO implementado para o provedor IPM',
        texto:
          'O campo CNO (Cadastro Nacional de Obras) foi implementado para o provedor IPM. Esse campo é obrigatório para serviços relacionados a construção civil em municípios que usam IPM. Sem o CNO, as notas de construção civil eram rejeitadas pela prefeitura.',
      },
      {
        icon: '🏙️',
        destaque: 'Juazeiro/BA na lista de municípios sem MunicipioIncidencia',
        texto:
          'O município de Juazeiro/BA foi adicionado à lista de municípios que não enviam o campo MunicipioIncidencia na emissão de NFS-e. A prefeitura de Juazeiro rejeita notas que incluem esse campo, pois calcula a incidência internamente. A adição na lista resolve as rejeições.',
      },
      {
        icon: '🔧',
        destaque: 'Desabilita emissão em lote para empresa específica',
        texto:
          'Uma empresa específica estava enfrentando problemas recorrentes ao emitir notas em lote, com rejeições intermitentes. Foi desabilitada a emissão em lote para essa empresa, forçando o envio individual de cada nota para garantir o processamento correto.',
      },
      {
        icon: '🏙️',
        destaque:
          'Carapicuíba/SP — consulta de nota com mês/ano e autenticação',
        texto:
          'A consulta de notas em Carapicuíba/SP foi aprimorada para incluir os campos de mês início, mês fim e ano fim na requisição, além de ajustes na autenticação com o webservice. Sem esses campos, a consulta retornava erro ou resultados incompletos. Agora a consulta funciona corretamente com o período especificado.',
      },
      {
        icon: '🆕',
        destaque: 'Novo modelo de envio de Obras para o provedor IssIntel',
        texto:
          'Assim como o SIGISSv5, o provedor IssIntel também passou a suportar o novo modelo detalhado de envio de dados de obras. Prefeituras que usam IssIntel e exigem dados completos de obra (número, ART, endereço) agora recebem as informações no formato correto.',
      },
      {
        icon: '🌐',
        destaque: 'Variação de país adicionada ao sistema',
        texto:
          'Foi adicionada uma nova variação de nome de país ao mapeamento do sistema. Alguns provedores retornam nomes de países em formatos diferentes (abreviados, com acentos, em inglês), e o sistema precisa reconhecer todas as variações para preencher corretamente os dados de notas com tomador estrangeiro.',
      },
      {
        icon: '🔧',
        destaque: 'IPM: correção no envio do campo imovel no IBS/CBS',
        texto:
          'O provedor IPM estava enviando o campo <imovel> incorretamente no contexto do IBS/CBS (Imposto sobre Bens e Serviços / Contribuição sobre Bens e Serviços). Foi corrigido o preenchimento para que o campo seja enviado no formato esperado pelo webservice, evitando rejeições em municípios que usam IPM com o novo modelo tributário.',
      },
      {
        icon: '🌐',
        destaque: 'MunicipioIncidencia para notas com exterior',
        texto:
          'Para notas de serviço prestado no exterior, o campo MunicipioIncidencia não estava sendo preenchido corretamente, causando rejeições em provedores que exigem esse campo mesmo para notas de exterior. Foi adicionado o MunicipioIncidenciaService que preenche o município de incidência com base nas regras específicas para notas com prestação no exterior.',
      },
      {
        icon: '🏙️',
        destaque: 'Ortigueira/PR migrado para BethaV3',
        texto:
          'O município de Ortigueira/PR foi atualizado do provedor anterior para o BethaV3. A prefeitura migrou seu sistema de NFS-e para a versão mais recente da Betha, e as configurações foram atualizadas para garantir compatibilidade.',
      },
      {
        icon: '🔧',
        destaque:
          'Ajuste para não preencher codigoMunicipio quando não informado',
        texto:
          'O campo codigoMunicipio estava sendo preenchido com valor vazio ou nulo quando não era informado, causando rejeições em provedores que validam o formato do campo. Foi ajustado para simplesmente não incluir o campo no XML quando o código do município não é informado, evitando erros de validação.',
      },
      {
        icon: '🔧',
        destaque:
          'Try/Catch para evitar travamento de fila e tratamento de cidade não encontrada',
        texto:
          'Em cenários onde o nome da cidade não era encontrado no mapeamento do sistema, uma exceção não tratada travava a fila de processamento. Foi adicionado um Try/Catch que captura o erro e trata o cenário graciosamente, permitindo que a nota seja rejeitada com mensagem clara sem bloquear as demais.',
      },
      {
        icon: '🆕',
        destaque: 'AutenticidadeNota adicionada ao provedor',
        texto:
          'O campo AutenticidadeNota foi adicionado a mais um provedor, permitindo que o código de autenticidade retornado pela prefeitura seja armazenado. Esse código é essencial para verificação da autenticidade da NFS-e no portal da prefeitura.',
      },
      {
        icon: '📊',
        destaque: 'Configuração para não enviar alíquota quando valor é zero',
        texto:
          'Quando a alíquota do ISS era zero, o sistema ainda enviava o campo no XML, causando rejeições em prefeituras que interpretam alíquota zero como erro. Foi configurado para não enviar o campo de alíquota quando o valor é zero, evitando rejeições desnecessárias.',
      },
      {
        icon: '📊',
        destaque:
          'Dois municípios adicionados à flag SempreEnviaAliquotaIssEmpresasSimplesNacional',
        texto:
          'Dois municípios foram adicionados à lista SempreEnviaAliquotaIssEmpresasSimplesNacional, que força o envio da alíquota do ISS para empresas do Simples Nacional. Esses municípios exigem a alíquota mesmo para optantes do Simples, e sem essa flag as notas eram rejeitadas por campo obrigatório ausente.',
      },
      {
        icon: '🔧',
        destaque: 'Permissão de nota sem tomador para provedor específico',
        texto:
          'Um provedor específico foi configurado para permitir a emissão de NFS-e sem informar o tomador do serviço. Alguns tipos de serviço não possuem tomador identificado, e a prefeitura aceita essas notas. Sem essa configuração, o sistema bloqueava a emissão.',
      },
      {
        icon: '📊',
        destaque: 'Cenário de emissão para natureza de operação 9',
        texto:
          'Foi adicionado suporte ao cenário de emissão com natureza de operação 9, que não estava mapeado no sistema. Notas com essa natureza eram rejeitadas por falta de tratamento específico. Agora o sistema reconhece e processa corretamente essa natureza de operação.',
      },
      {
        icon: '🏙️',
        destaque: 'Capela do Alto/SP aderiu ao Portal Nacional',
        texto:
          'O município de Capela do Alto/SP aderiu ao Portal Nacional de NFS-e (NfseNacionalV2). As configurações foram atualizadas com URLs, namespaces e operações do padrão nacional.',
      },
      {
        icon: '🔧',
        destaque:
          'Tratamento de reenvio em caso de mensagem de erro específica',
        texto:
          'Quando o sistema recebia uma mensagem de erro específica da prefeitura, não tentava reenviar a nota automaticamente, exigindo intervenção manual. Foi adicionado um tratamento que identifica essa mensagem e dispara o reenvio automático, reduzindo a necessidade de ação manual do suporte.',
      },
      {
        icon: '🔧',
        destaque: 'Atualização de tratamento em mensagem de erro para provedor',
        texto:
          'O tratamento de mensagens de erro de um provedor específico foi atualizado para reconhecer novos padrões de mensagem retornados pela prefeitura. Isso garante que o sistema interprete corretamente os erros e tome a ação adequada (reenvio, rejeição ou alerta).',
      },
      {
        icon: '🔗',
        destaque:
          'Atualização de links de integração de Carapicuíba/SP e Cotia/SP',
        texto:
          'Os links de integração (URLs de webservice) de Carapicuíba/SP e Cotia/SP estavam desatualizados, causando falhas na comunicação com as prefeituras. Foram atualizados para os novos endereços, restaurando a emissão e consulta de notas nesses municípios.',
      },
      {
        icon: '🏙️',
        destaque:
          'Araraquara/SP — emissão atualizada para layout padrão do provedor',
        texto:
          'A emissão de NFS-e em Araraquara/SP foi atualizada para utilizar o layout padrão do provedor, acrescentando campos que estavam faltando. Anteriormente, o layout customizado causava incompatibilidades com atualizações do provedor. Agora segue o padrão, garantindo compatibilidade futura.',
      },
      {
        icon: '🏙️',
        destaque: 'Colina/SP migrado para NfseNacionalV2',
        texto:
          'O município de Colina/SP foi atualizado para o provedor NfseNacionalV2 (Portal Nacional). A prefeitura aderiu ao padrão nacional de NFS-e, e as configurações foram atualizadas.',
      },
      {
        icon: '🏙️',
        destaque:
          'Franco da Rocha/SP — chave de acesso na consulta de lote SIGISSv5',
        texto:
          'O provedor SIGISSv5 em Franco da Rocha/SP não estava lendo e atribuindo a chave de acesso no retorno da consulta de lote. Isso fazia com que a nota ficasse sem o código de verificação/autenticidade após a emissão. Foi incluída a leitura e atribuição da chave de acesso no retorno, garantindo que o código esteja disponível para consulta e validação.',
      },
      {
        icon: '🏙️',
        destaque:
          'São Luís de Montes Belos/GO migrado de NfseNacionalV2 para Centi',
        texto:
          'O município de São Luís de Montes Belos/GO foi migrado do provedor NfseNacionalV2 para o Centi. A prefeitura optou por utilizar o sistema Centi em vez do Portal Nacional, e as configurações foram atualizadas para o novo provedor.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento de exceção para Inscrição Municipal incorreta',
        texto:
          'Quando a Inscrição Municipal informada pelo prestador estava incorreta ou em formato inválido, o sistema lançava uma exceção genérica que não ajudava o usuário a entender o problema. Foi adicionado um tratamento específico que retorna uma mensagem clara informando que a Inscrição Municipal está incorreta, orientando o usuário a corrigir o cadastro.',
      },
      {
        icon: '🏙️',
        destaque: 'Caiçara/RS e Guarujá do Sul/SC migrados para IPM',
        texto:
          'Os municípios de Caiçara/RS e Guarujá do Sul/SC foram atualizados para o provedor IPM. As prefeituras migraram seus sistemas de NFS-e, e as configurações foram atualizadas para garantir compatibilidade com o novo webservice.',
      },
      {
        icon: '🔧',
        destaque: 'Validação de metadados antes de inserção',
        texto:
          'O sistema tentava inserir metadados sem verificar se já existiam, causando erros de duplicação em cenários de reprocessamento. Foi adicionada uma validação que verifica a existência dos metadados antes de inseri-los, evitando erros e garantindo idempotência na operação.',
      },
      {
        icon: '🔧',
        destaque: 'Proxy estático para SIGISSv5 em Franco da Rocha/SP',
        texto:
          'O webservice SIGISSv5 de Franco da Rocha/SP passou a utilizar proxy estático (ProxyService.ProxyType.Static) nas chamadas de AddProxyToClient e AddProxyToBinding. Isso resolve problemas de conectividade com o webservice da prefeitura que exige comunicação via proxy fixo.',
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
        texto: 'Nenhum commit na dev neste dia.',
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
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '03/04/2026',
    titulo: 'Sexta-feira — 03 de Abril',
    data: '03/04/2026',
    itens: [
      {
        icon: '🌐',
        destaque: 'Envio do valor da moeda estrangeira para notas de exterior',
        texto:
          'Para notas de serviço prestado no exterior, o valor em moeda estrangeira não estava sendo enviado no XML, fazendo com que a prefeitura recebesse apenas o valor em reais. Foi implementado o envio do campo valorServicoMoedaEstrangeira, permitindo que o valor na moeda original do contrato seja informado na NFS-e conforme exigido pela legislação.',
      },
      {
        icon: '🔧',
        destaque: 'Correção de NullReferenceException no MunicipioIncidencia',
        texto:
          'A atribuição do MunicipioIncidencia podia gerar uma NullReferenceException quando o objeto de município não estava inicializado, travando o processamento da nota. Foi ajustada a lógica para verificar se o objeto existe antes de atribuir, evitando o erro e garantindo que a nota seja processada corretamente mesmo quando o município de incidência não está definido.',
      },
      {
        icon: '📊',
        destaque:
          'Correção na reordenação das tags CSTPisCofins e TpRetPisCofins no XML',
        texto:
          'A lógica de reordenação das tags <CSTPisCofins> e <TpRetPisCofins> no XML estava sendo aplicada apenas ao primeiro elemento <Valores> do lote, ignorando os demais RPS. Em lotes com múltiplas notas, as tags ficavam na ordem incorreta a partir do segundo RPS, causando rejeições. Foi corrigido para aplicar o ajuste em todos os elementos <Valores> do lote, eliminando rejeições por ordem incorreta das tags.',
      },
      {
        icon: '🏙️',
        destaque:
          'Sapiranga/RS (DBSeller) — campos IBS/CBS nos itens de serviço',
        texto:
          'O município de Sapiranga/RS, que utiliza o provedor DBSeller, passou a exigir os campos IBS/CBS nos itens de serviço. Foi implementado o preenchimento desses campos e ajustada a lógica de organização das tags <cIndOp>, <cClassTrib> e <CodigoNbs> no XML de envio, garantindo compatibilidade com o novo formato exigido pela prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Proxy estático no envio de notas',
        texto:
          'O envio de notas para determinado webservice foi ajustado para utilizar proxy estático. Alguns webservices de prefeituras exigem comunicação via proxy fixo, e sem essa configuração as requisições falhavam com erro de conexão. O ajuste garante que o envio utilize o proxy correto.',
      },
      {
        icon: '🔧',
        destaque: 'Ajustes gerais de código',
        texto:
          'Ajustes pontuais de código para correção de comportamentos específicos no processamento de notas, incluindo melhorias na estabilidade do fluxo de emissão e tratamento de cenários edge case.',
      },
    ],
  },
];
