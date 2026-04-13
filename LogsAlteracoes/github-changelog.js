var changelogData = [
  {
    tag: '13/04/2026',
    titulo: 'Segunda-feira — 13 de Abril',
    data: '13/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '12/04/2026',
    titulo: 'Domingo — 12 de Abril',
    data: '12/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Cancelamento adicionado ao provedor',
        texto:
          'Implementada a funcionalidade de cancelamento de NFS-e para um provedor que ainda não suportava essa operação. Agora os usuários podem cancelar notas emitidas por esse provedor diretamente pelo sistema.',
      },
      {
        icon: '🔧',
        destaque: 'Consulta no Portal Nacional para notas inativas',
        texto:
          'Adicionado tratamento para a mensagem "não está ativo ou não existe" retornada pelo Portal Nacional. Quando essa resposta é recebida, o sistema devolve o XML original sem tentar buscas adicionais, evitando erros desnecessários na consulta de NFS-e.',
      },
      {
        icon: '🔧',
        destaque: 'Validação de endereço do evento no Portal Nacional',
        texto:
          'Ajustada a validação do endereço do evento para ocorrer apenas quando o identificador de atividade (idAtvEvt) não foi informado. Isso evita erros de schema XML em cenários onde a atividade já possui identificador atribuído.',
      },
      {
        icon: '🔧',
        destaque: 'Regra de consumidor final para empresa específica',
        texto:
          'Adicionada configuração para uma empresa específica enviar a flag de consumidor final como false, atendendo a um cenário particular de emissão de NFS-e.',
      },
      {
        icon: '📊',
        destaque: 'Regra de alíquota e imunidade para empresa',
        texto:
          'Ajustada a regra de alíquota e tipo de imunidade para uma empresa específica, corrigindo o comportamento de envio de impostos conforme a situação tributária do prestador.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento de XML para desserialização',
        texto:
          'Adicionado tratamento no XML de resposta para garantir a desserialização correta dos dados retornados pelo provedor, evitando falhas no processamento de notas.',
      },
      {
        icon: '🔧',
        destaque: 'PDF padrão GIF para contas Nibo e ContaAzul',
        texto:
          'Configurada a geração de PDF no padrão GIF para as contas Nibo e ContaAzul. Essas contas agora recebem o PDF da NFS-e no layout correto do provedor GIF.',
      },
      {
        icon: '🔧',
        destaque: 'Atualização de versão de integração para municípios',
        texto:
          'Atualizada a versão de integração utilizada na comunicação com os webservices de municípios, garantindo compatibilidade com as versões mais recentes dos provedores.',
      },
      {
        icon: '🌐',
        destaque: 'Ajuste na cidade de prestação para exterior via metadados',
        texto:
          'Corrigida a atribuição da cidade de prestação em notas de serviço para o exterior, utilizando os metadados enviados pelo prestador para definir corretamente o local da prestação.',
      },
      {
        icon: '🏙️',
        destaque: 'Centi: integração para Panamá/GO, Mundo Novo/GO e Guapó/GO',
        texto:
          'Adicionada integração com o provedor Centi para três municípios de Goiás: Panamá/GO, Mundo Novo/GO e Guapó/GO. Esses municípios agora podem emitir NFS-e pelo sistema.',
      },
      {
        icon: '🏙️',
        destaque: 'Tanquinho/BA migra para NfseNacionalV2',
        texto:
          'Atualizado o provedor de Tanquinho/BA para o NfseNacionalV2. O município aderiu ao padrão nacional de NFS-e.',
      },
      {
        icon: '🏙️',
        destaque: 'Papanduva/SC migra para IPMv2',
        texto:
          'Atualizado o provedor de Papanduva/SC para o IPMv2. O município trocou de sistema de NFS-e e as configurações foram atualizadas.',
      },
      {
        icon: '🏙️',
        destaque: 'Ribeira do Pombal/BA migra para WebIssV2',
        texto:
          'Atualizado o provedor de Ribeira do Pombal/BA para o WebIssV2. O município trocou de sistema de NFS-e.',
      },
      {
        icon: '📊',
        destaque: 'Ativa novo formato PIS/COFINS para provedor',
        texto:
          'Ativada a propriedade UsaNovoFormatoPisCofins para um provedor, garantindo que os valores de PIS e COFINS sejam enviados no formato atualizado exigido pelo webservice.',
      },
      {
        icon: '🏙️',
        destaque: 'Tapes/RS aderiu ao Portal Nacional',
        texto:
          'Tapes/RS aderiu ao Portal Nacional de NFS-e. O município foi configurado para emissão pelo padrão nacional.',
      },
      {
        icon: '🏙️',
        destaque: 'Ibicaré/SC aderiu ao Portal Nacional',
        texto:
          'Ibicaré/SC aderiu ao Portal Nacional de NFS-e. O município foi configurado para emissão pelo padrão nacional.',
      },
      {
        icon: '🔧',
        destaque: 'Limpeza de mensagens de erro do FGMaiss',
        texto:
          'Melhorada a legibilidade das mensagens de erro retornadas pelo provedor FGMaiss, facilitando o diagnóstico de problemas na emissão de NFS-e.',
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
        destaque:
          'Ajuste em São Paulo/SP para percentual aproximado de tributos',
        texto:
          'Ajustado o processamento em São Paulo/SP para pegar o percentual aproximado de tributos do novo grupo de informações, garantindo que os valores tributários sejam calculados corretamente conforme o layout atualizado.',
      },
    ],
  },
  {
    tag: '09/04/2026',
    titulo: 'Quinta-feira — 09 de Abril',
    data: '09/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque:
          'Lógica Hotmart para definir UsaNBS nas características do provedor',
        texto:
          'Adicionada lógica específica da Hotmart para definir a flag UsaNBS nas características do provedor, garantindo que o código NBS seja enviado corretamente quando exigido pelo webservice.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de código desnecessário',
        texto:
          'Removido código desnecessário do sistema, simplificando a base de código e reduzindo complexidade na manutenção.',
      },
      {
        icon: '📊',
        destaque: 'Zera tributos federais para Franca/SP',
        texto:
          'Estendida a regra de zerar o campo pTotTribFed no XML de NFS-e para Franca/SP, evitando rejeições por valores de tributos federais inconsistentes.',
      },
      {
        icon: '🔧',
        destaque: 'Correção na extração do número da nota fiscal (TinusV2)',
        texto:
          'Corrigido o método de extração do número da nota fiscal no provedor TinusV2 para não retornar o número do RPS. Agora o número é extraído do nó correto (nfse:nNFSe) e a chave de acesso é derivada do atributo Id do infNFSe.',
      },
      {
        icon: '📊',
        destaque: 'Novo formato PIS/COFINS e consulta por RPS no GIFv2',
        texto:
          'Ativada a propriedade UsaNovoFormatoPisCofins no provedor GIFv2 e implementada a consulta de NFS-e por RPS via API Nacional (SEFIN). Agora é possível recuperar notas já processadas pelo GIFv2 usando o número do RPS.',
      },
      {
        icon: '🔧',
        destaque:
          'Mensagem tratada para cancelamento sem certificado em Joinville/SC',
        texto:
          'Adicionado tratamento para retornar mensagem amigável quando o usuário tenta cancelar uma NFS-e em Joinville/SC sem certificado digital. O município permite emissão sem certificado, mas o cancelamento exige — agora o sistema informa isso claramente.',
      },
      {
        icon: '🏙️',
        destaque: 'São João Batista do Glória/MG migra para MemoryV2',
        texto:
          'Migração de São João Batista do Glória/MG para o provedor MemoryV2. O município trocou de sistema de NFS-e e as URLs, namespace e configurações foram atualizadas.',
      },
      {
        icon: '🏙️',
        destaque: 'Adrianópolis/PR aderiu ao Portal Nacional',
        texto:
          'Adrianópolis/PR aderiu ao Portal Nacional de NFS-e. O município foi configurado para emissão pelo padrão nacional.',
      },
      {
        icon: '🏙️',
        destaque: 'Tangará/SC aderiu ao Portal Nacional',
        texto:
          'Tangará/SC aderiu ao Portal Nacional de NFS-e. O município foi configurado para emissão pelo padrão nacional.',
      },
      {
        icon: '🔧',
        destaque: 'Desabilita emissão em lote para empresa específica',
        texto:
          'Desabilitada a emissão em lote de NFS-e para uma empresa específica, forçando o envio individual de notas para evitar problemas de processamento no provedor.',
      },
      {
        icon: '📊',
        destaque: 'Envio de código NBS para empresa específica',
        texto:
          'Adicionado o envio do código NBS (Nomenclatura Brasileira de Serviços) para uma empresa específica que exige esse campo no XML da NFS-e.',
      },
      {
        icon: '🔧',
        destaque: 'Adiciona AutenticidadeNota ao provedor',
        texto:
          'Implementada a funcionalidade de AutenticidadeNota para um provedor, permitindo a verificação de autenticidade das notas fiscais emitidas.',
      },
      {
        icon: '🏙️',
        destaque: 'Serrania/MG aderiu ao Portal Nacional',
        texto:
          'Serrania/MG aderiu ao Portal Nacional de NFS-e. O município foi configurado para emissão pelo padrão nacional.',
      },
      {
        icon: '📊',
        destaque: 'Incidência no município do prestador para empresa',
        texto:
          'Incluído o ID de uma empresa na lista de incidência no município do prestador, garantindo que o ISS seja calculado corretamente conforme a regra de incidência municipal.',
      },
      {
        icon: '🏙️',
        destaque: 'Socorro/SP migra para BethaV3',
        texto:
          'Atualizado o provedor de Socorro/SP para o BethaV3. O município trocou de versão do sistema Betha e as configurações foram atualizadas.',
      },
      {
        icon: '📊',
        destaque: 'Remoção de municípios da flag de alíquota Simples Nacional',
        texto:
          'Removidos alguns municípios da flag SempreEnviaAliquotaIssEmpresasSimplesNacional, ajustando o comportamento de envio de alíquota de ISS para empresas do Simples Nacional nesses municípios.',
      },
      {
        icon: '🔧',
        destaque: 'Ajuste na geração da DACE para contingência (DanfeMS)',
        texto:
          'Ajustada a geração do documento DACE no módulo DanfeMS para cenários de contingência, garantindo que o documento seja gerado corretamente mesmo em situações de indisponibilidade.',
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
        destaque: 'Melhorias na consulta de lote NFS-e em Barueri/SP',
        texto:
          'Implementadas melhorias na consulta de lote de NFS-e em Barueri/SP, incluindo ajustes nos logs para facilitar o diagnóstico de problemas na comunicação com o webservice da prefeitura.',
      },
      {
        icon: '🌐',
        destaque: 'Verificação de tomador estrangeiro e TipoLogLocPre',
        texto:
          'Adicionada verificação para identificar tomador estrangeiro e definir corretamente o campo TipoLogLocPre no XML, garantindo que notas com tomador do exterior sejam processadas sem erros de validação.',
      },
      {
        icon: '🔧',
        destaque: 'Melhoria no tratamento de endereço no reg20',
        texto:
          'Atualizados os dados de teste e melhorado o tratamento de endereço no registro reg20, corrigindo cenários onde o endereço do prestador não era processado corretamente.',
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
        destaque: 'Correção para não travar a fila de processamento',
        texto:
          'Ajustado o processamento para evitar que erros inesperados travem a fila de emissão de NFS-e. Notas com problemas agora são tratadas sem bloquear as demais.',
      },
      {
        icon: '🌐',
        destaque: 'Ajustes para ISSQN exterior e novos testes de PDF',
        texto:
          'Implementados ajustes no cálculo de ISSQN para notas de serviço prestado no exterior, incluindo novos testes automatizados para a geração de PDF dessas notas.',
      },
      {
        icon: '🌐',
        destaque:
          'Portal Nacional: exportação apenas para serviço prestado fora + cancelamento GissOnline',
        texto:
          'Ajustado o Portal Nacional para considerar como exportação apenas quando o serviço foi efetivamente prestado fora do país. Também foi liberado o cancelamento no provedor GissOnline — o sistema agora permite que o usuário tente cancelar mesmo quando as características do provedor indicam restrição, já que muitas cidades mudam suas regras de cancelamento com frequência.',
      },
      {
        icon: '🔧',
        destaque: 'Consulta NFS-e por RPS com AntiCaptcha em Barueri/SP',
        texto:
          'Implementada a consulta de NFS-e por RPS em Barueri/SP utilizando AntiCaptcha para resolver o captcha do webservice da prefeitura, permitindo a recuperação automática de notas.',
      },
      {
        icon: '🔒',
        destaque: 'Bloqueia atualização de API key por subscription ID',
        texto:
          'Implementado bloqueio para impedir a atualização de API key usando subscription ID, reforçando a segurança no gerenciamento de credenciais de acesso à API.',
      },
      {
        icon: '🏙️',
        destaque: 'Boca da Mata/AL aderiu ao Portal Nacional',
        texto:
          'Boca da Mata/AL aderiu ao Portal Nacional de NFS-e. O município foi configurado para emissão pelo padrão nacional.',
      },
      {
        icon: '🏙️',
        destaque: 'Governador Valadares/MG aderiu ao Portal Nacional',
        texto:
          'Governador Valadares/MG aderiu ao Portal Nacional de NFS-e. O município foi configurado para emissão pelo padrão nacional.',
      },
      {
        icon: '🔗',
        destaque: 'Atualiza porta do endpoint de Santa Rita do Pardo/MS',
        texto:
          'Alterada a porta do endpoint de Santa Rita do Pardo/MS de 8085 para 8090, acompanhando a mudança realizada pela prefeitura no webservice de NFS-e.',
      },
      {
        icon: '🔧',
        destaque: 'Remove formatação do CEP do local de prestação',
        texto:
          'Removida a formatação do CEP no campo de local de prestação do serviço, enviando o valor sem máscara para evitar rejeições em provedores que não aceitam o formato com pontuação.',
      },
      {
        icon: '🔗',
        destaque: 'Atualiza link de homologação de Contagem/MG',
        texto:
          'Atualizado o link de homologação do webservice de Contagem/MG, acompanhando a mudança de URL realizada pela prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Retry no cancelamento para garantir consistência',
        texto:
          'Adicionado mecanismo de retry no processo de cancelamento de NFS-e para garantir que o cancelamento seja efetivado tanto na API quanto na prefeitura, evitando inconsistências entre os sistemas.',
      },
      {
        icon: '🔗',
        destaque: 'Atualiza endpoint de Jardim/MS',
        texto:
          'Atualizado o endpoint do webservice do município de Jardim/MS, acompanhando a mudança de URL realizada pela prefeitura.',
      },
      {
        icon: '📊',
        destaque:
          'MunicípioIncidência como município do prestador para Conta Azul',
        texto:
          'Definido o MunicipioIncidencia como o município do prestador para a empresa Conta Azul, garantindo que o ISS seja calculado com base no local correto de incidência.',
      },
      {
        icon: '📊',
        destaque: 'Cenário de envio de alíquota para empresa',
        texto:
          'Adicionado novo cenário de envio de alíquota de ISS para uma empresa específica, ajustando o comportamento de cálculo de impostos conforme a situação tributária.',
      },
      {
        icon: '📊',
        destaque:
          'Correção no envio de alíquota fora do município com ISS não retido',
        texto:
          'Corrigido o envio da alíquota de ISS em casos de prestação de serviço fora do município quando o ISS não é retido. O sistema agora envia a alíquota correta conforme a legislação aplicável.',
      },
      {
        icon: '🔧',
        destaque: 'Atualização de região de código e normalização de série RPS',
        texto:
          'Atualizada a região do código no sistema e normalizada a comparação de séries de RPS na consulta de lote de NFS-e, evitando falhas na identificação de notas por diferenças de formatação.',
      },
      {
        icon: '🔧',
        destaque: 'Testes de integração em Nova Serrana/MG',
        texto:
          'Realizados testes de integração no município de Nova Serrana/MG para validar o funcionamento da emissão de NFS-e.',
      },
    ],
  },
  {
    tag: '06/04/2026',
    titulo: 'Segunda-feira — 06 de Abril',
    data: '06/04/2026',
    itens: [
      {
        icon: '📊',
        destaque:
          '[GOVBRv3] Remove municípios da flag de alíquota Simples Nacional',
        texto:
          'Removidos municípios do provedor GOVBRv3 da flag SempreEnviaAliquotaIssEmpresasSimplesNacional, ajustando o comportamento de envio de alíquota de ISS para empresas do Simples Nacional nesses municípios.',
      },
      {
        icon: '📊',
        destaque: 'São Gonçalo do Rio Abaixo/MG na regra UsaCIntContrib',
        texto:
          'Incluído São Gonçalo do Rio Abaixo/MG na regra UsaCIntContribComCodigoServico, garantindo que o código de contribuição seja enviado junto com o código de serviço para esse município.',
      },
      {
        icon: '🏙️',
        destaque: 'Vinhedo/SP permite emissão sem tomador',
        texto:
          'Configurado Vinhedo/SP para permitir a emissão de NFS-e sem informar o tomador do serviço, atendendo a cenários onde o prestador não possui os dados do tomador.',
      },
      {
        icon: '🔧',
        destaque: 'Remove obrigatoriedade de RPS sequencial em Varginha/MG',
        texto:
          'Removida a validação de RPS sequencial para Varginha/MG, permitindo o envio de notas com numeração não sequencial sem bloqueio pelo sistema.',
      },
      {
        icon: '🏙️',
        destaque: 'Arroio do Meio/RS migra para NfseNacionalV2',
        texto:
          'Atualizado o provedor de Arroio do Meio/RS para o NfseNacionalV2. O município aderiu ao padrão nacional de NFS-e.',
      },
      {
        icon: '🆕',
        destaque: '[GIFv2] Novo provedor GIFv2 no layout nacional',
        texto:
          'Criado o novo provedor GIFv2 no layout nacional de NFS-e. Este provedor implementa o padrão nacional para municípios que utilizam o sistema GIF, permitindo emissão, consulta e cancelamento de notas.',
      },
      {
        icon: '🌐',
        destaque: 'Tratamento de tomador exterior em Cachoeirinha/RS',
        texto:
          'Implementado tratamento para tomador estrangeiro em Cachoeirinha/RS (CE-25291), garantindo que notas com tomador do exterior sejam processadas corretamente pelo provedor do município.',
      },
      {
        icon: '🌐',
        destaque: 'Tratamento de tomador estrangeiro (refatoração)',
        texto:
          'Refatoração do tratamento de tomador estrangeiro (CE-24786), melhorando a lógica de identificação e processamento de notas com tomador do exterior em múltiplos provedores.',
      },
      {
        icon: '🔗',
        destaque: 'Atualiza URLs de Embu das Artes/SP',
        texto:
          'Atualizadas as URLs de integração do webservice de Embu das Artes/SP, acompanhando as mudanças realizadas pela prefeitura nos endpoints de produção e homologação.',
      },
      {
        icon: '🔧',
        destaque: 'Configura código 704 de Cotia/SP para enviar código de obra',
        texto:
          'Configurado o código de serviço 704 de Cotia/SP para enviar o código de obra no XML da NFS-e, atendendo à exigência da prefeitura para esse tipo de serviço.',
      },
      {
        icon: '🏙️',
        destaque: 'Itaituba/PA migra para CoplanV2',
        texto:
          'Atualizado o provedor de Itaituba/PA para o CoplanV2. O município trocou de sistema de NFS-e e as configurações foram atualizadas.',
      },
      {
        icon: '🏙️',
        destaque: 'Serra do Mel/RN migra para TinusV2',
        texto:
          'Atualizado o provedor de Serra do Mel/RN para o TinusV2. O município trocou de sistema de NFS-e e as configurações foram atualizadas.',
      },
      {
        icon: '📊',
        destaque: 'Remove Pejuçara/RS da flag de alíquota Simples Nacional',
        texto:
          'Removido Pejuçara/RS da flag SempreEnviaAliquotaIssEmpresasSimplesNacional, ajustando o comportamento de envio de alíquota de ISS para empresas do Simples Nacional nesse município.',
      },
      {
        icon: '🧮',
        destaque: 'Ajuste na tag cClassTrib',
        texto:
          'Ajustada a tag cClassTrib (classificação tributária) no XML de NFS-e, corrigindo o posicionamento e valor do campo para evitar rejeições por erro de schema.',
      },
      {
        icon: '🔧',
        destaque: 'Validação de código NBS para não travar a fila',
        texto:
          'Adicionada validação do código NBS antes do envio para evitar que notas com NBS inválido travem a fila de processamento. Notas com problemas agora são tratadas sem bloquear as demais.',
      },
      {
        icon: '📊',
        destaque: 'Envio do CST de PIS/COFINS conforme prestador',
        texto:
          'Ajustado o envio do CST (Código de Situação Tributária) de PIS/COFINS para respeitar o valor informado pelo prestador, em vez de usar um valor padrão fixo.',
      },
      {
        icon: '📋',
        destaque: 'Normalização e validação de NBS',
        texto:
          'Ajustado para informar um NBS válido e normalizar o código NBS antes da validação, evitando o envio de NBS vazio ou com formatação incorreta que causava rejeições.',
      },
      {
        icon: '🔧',
        destaque: 'Adiciona IDs em responsável técnico',
        texto:
          'Adicionados IDs de identificação no cadastro de responsável técnico, permitindo o rastreamento e vinculação correta dos responsáveis técnicos nas notas fiscais.',
      },
    ],
  },
  {
    tag: '05/04/2026',
    titulo: 'Domingo — 05 de Abril',
    data: '05/04/2026',
    itens: [
      {
        icon: '🌐',
        destaque: 'Tratamento de NFS-e com prestação de serviço no exterior',
        texto:
          'Implementado tratamento completo para NFS-e com prestação de serviço no exterior, incluindo ajustes na identificação do local de prestação e no cálculo de impostos para operações internacionais.',
      },
      {
        icon: '🏙️',
        destaque: 'Jardinópolis/SP migra para GissOnline',
        texto:
          'Atualizado o provedor de Jardinópolis/SP para o GissOnline. O município trocou de sistema de NFS-e e as configurações foram atualizadas.',
      },
      {
        icon: '🔧',
        destaque: 'Adição de usuário backoffice',
        texto:
          'Adicionado novo usuário de backoffice ao sistema para operações administrativas internas.',
      },
      {
        icon: '🧮',
        destaque: 'Fallback de IBS/CBS apenas para optante do Simples Nacional',
        texto:
          'Ajustado o fallback de IBS/CBS para deduzir valores apenas para empresas optantes do Simples Nacional, evitando deduções incorretas para empresas de outros regimes tributários.',
      },
      {
        icon: '🌐',
        destaque: 'Valor em moeda estrangeira e refatoração de metadados',
        texto:
          'Ajustado o campo vServMoeda para usar o valor em moeda estrangeira quando presente, e refatorada a lógica de extração de metadados e do valorServicoMoedaEstrangeira para maior clareza e manutenibilidade.',
      },
      {
        icon: '🧮',
        destaque: 'Ajustes nos impostos retidos na tag CSLL e apuração própria',
        texto:
          'Corrigidos os envios de impostos retidos na tag CSLL e na apuração própria, garantindo que os valores sejam calculados e enviados corretamente conforme a legislação tributária.',
      },
      {
        icon: '🔧',
        destaque: 'Novo modelo de envio de Obras para SIGISSv5',
        texto:
          'Implementado novo modelo de envio de informações de Obras para o provedor SIGISSv5, adequando o formato do XML às exigências do webservice para serviços relacionados a construção civil.',
      },
      {
        icon: '📊',
        destaque: 'Empresas não optantes de Uberaba/MG sem envio de alíquota',
        texto:
          'Adicionadas empresas não optantes do Simples Nacional em Uberaba/MG à lista de exceção para não enviar alíquota de ISS, evitando rejeições pelo webservice da prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Campo CNO implementado para o provedor IPM',
        texto:
          'Implementado o campo CNO (Cadastro Nacional de Obras) para o provedor IPM, permitindo o envio dessa informação obrigatória para serviços de construção civil.',
      },
      {
        icon: '📊',
        destaque: 'Juazeiro/BA não envia MunicipioIncidencia',
        texto:
          'Adicionado Juazeiro/BA à lista de municípios que não enviam o campo MunicipioIncidencia no XML, evitando rejeições pelo webservice da prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Desabilita emissão em lote para empresa',
        texto:
          'Desabilitada a emissão em lote de NFS-e para uma empresa específica, forçando o envio individual de notas para evitar problemas de processamento.',
      },
      {
        icon: '🔧',
        destaque: 'Consulta de nota e autenticação em Carapicuíba/SP',
        texto:
          'Inseridos mês início, mês e ano fim na consulta da nota e autenticação de Carapicuíba/SP, adequando os parâmetros ao formato exigido pelo webservice da prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Novo modelo de envio de Obras para IssIntel',
        texto:
          'Implementado novo modelo de envio de informações de Obras para o provedor IssIntel, adequando o formato do XML às exigências do webservice para serviços de construção civil.',
      },
      {
        icon: '🌐',
        destaque: 'Adiciona variação de país',
        texto:
          'Adicionada variação de nome de país para melhorar a identificação de tomadores estrangeiros, garantindo que diferentes grafias do mesmo país sejam reconhecidas corretamente.',
      },
      {
        icon: '🧮',
        destaque: 'IPM: corrige envio do imóvel no IBS/CBS',
        texto:
          'Corrigido o envio da tag imovel no IBS/CBS para o provedor IPM, garantindo que as informações de imóvel sejam incluídas corretamente no XML quando aplicável.',
      },
      {
        icon: '🌐',
        destaque: 'MunicipioIncidencia para notas com Exterior',
        texto:
          'Adicionado o serviço MunicipioIncidenciaService para notas com prestação no exterior, garantindo que o município de incidência seja definido corretamente em operações internacionais.',
      },
      {
        icon: '🏙️',
        destaque: 'Ortigueira/PR migra para BethaV3',
        texto:
          'Atualizado o provedor de Ortigueira/PR para o BethaV3. O município trocou de versão do sistema Betha e as configurações foram atualizadas.',
      },
      {
        icon: '🔧',
        destaque: 'Não preencher códigoMunicípio quando não informado',
        texto:
          'Ajustado para não preencher o campo codigoMunicipio quando o mesmo não é informado pelo prestador, evitando o envio de valores vazios ou inválidos que causavam rejeições.',
      },
      {
        icon: '🔧',
        destaque:
          'Try/Catch para evitar travar a fila e tratar cidade não encontrada',
        texto:
          'Inserido Try/Catch no processamento para evitar que erros de cidade não encontrada travem a fila de emissão. O nome da cidade agora é tratado com fallback quando não encontrado no cadastro.',
      },
      {
        icon: '🔧',
        destaque: 'Adiciona AutenticidadeNota',
        texto:
          'Implementada a funcionalidade de AutenticidadeNota para um provedor, permitindo a verificação de autenticidade das notas fiscais emitidas.',
      },
      {
        icon: '📊',
        destaque: 'Configura para não enviar alíquota caso seja 0',
        texto:
          'Configurado o sistema para não enviar a alíquota de ISS quando o valor é zero, evitando rejeições em provedores que não aceitam alíquota zerada.',
      },
      {
        icon: '📊',
        destaque:
          'Adiciona dois municípios na flag de alíquota Simples Nacional',
        texto:
          'Adicionados dois municípios na flag SempreEnviaAliquotaIssEmpresasSimplesNacional, garantindo que a alíquota de ISS seja sempre enviada para empresas do Simples Nacional nesses municípios.',
      },
      {
        icon: '🔧',
        destaque: 'Atualiza para permitir nota sem tomador',
        texto:
          'Atualizada configuração de um município para permitir a emissão de NFS-e sem informar o tomador do serviço.',
      },
      {
        icon: '🔧',
        destaque: 'Cenário de emissão para natureza 9',
        texto:
          'Adicionado cenário de emissão para natureza de operação 9, expandindo os tipos de operação suportados pelo sistema.',
      },
      {
        icon: '🏙️',
        destaque: 'Capela do Alto/SP aderiu ao Portal Nacional',
        texto:
          'Capela do Alto/SP aderiu ao Portal Nacional de NFS-e. O município foi configurado para emissão pelo padrão nacional.',
      },
      {
        icon: '🔧',
        destaque:
          'Tratamento de reenvio em caso de mensagem de erro específica',
        texto:
          'Adicionado tratamento para reenviar a NFS-e automaticamente quando uma mensagem de erro específica é retornada pelo provedor, evitando falhas temporárias.',
      },
      {
        icon: '🔧',
        destaque: 'Atualiza tratamento de mensagem de erro do provedor',
        texto:
          'Atualizado o tratamento de mensagens de erro retornadas pelo provedor, melhorando a identificação e o diagnóstico de problemas na emissão.',
      },
      {
        icon: '🔗',
        destaque: 'Atualiza links de integração de Carapicuíba/SP e Cotia/SP',
        texto:
          'Atualizados os links de integração dos webservices de Carapicuíba/SP e Cotia/SP, acompanhando as mudanças de URL realizadas pelas prefeituras.',
      },
      {
        icon: '🏙️',
        destaque: 'Araraquara/SP atualizada para layout padrão do provedor',
        texto:
          'Atualizada a emissão de Araraquara/SP para o layout padrão do provedor, acrescentando campos obrigatórios que estavam faltando no XML.',
      },
      {
        icon: '🏙️',
        destaque: 'Colina/SP migra para NfseNacionalV2',
        texto:
          'Atualizado o provedor de Colina/SP para o NfseNacionalV2. O município aderiu ao padrão nacional de NFS-e.',
      },
      {
        icon: '🔧',
        destaque:
          'SIGISSv5: chave de acesso na consulta de lote (Franco da Rocha/SP)',
        texto:
          'Incluída a leitura e atribuição da chave de acesso no retorno da consulta de lote do provedor SIGISSv5 para Franco da Rocha/SP, garantindo que a chave seja corretamente extraída e armazenada.',
      },
      {
        icon: '🏙️',
        destaque:
          'São Luís de Montes Belos/GO migra de NfseNacionalV2 para Centi',
        texto:
          'Alterado o provedor de São Luís de Montes Belos/GO de NfseNacionalV2 para Centi, adequando a integração ao sistema utilizado pela prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento de exceção para Inscrição Municipal incorreta',
        texto:
          'Adicionado tratamento de exceção para cenários onde a Inscrição Municipal está incorreta, evitando que o erro trave a fila de processamento e retornando mensagem clara ao usuário.',
      },
      {
        icon: '🏙️',
        destaque: 'Caiçara/RS e Guarujá do Sul/SC migram para IPM',
        texto:
          'Atualizados os provedores de Caiçara/RS e Guarujá do Sul/SC para o IPM. Os municípios trocaram de sistema de NFS-e.',
      },
      {
        icon: '🔧',
        destaque: 'Validação de metadados antes de inserir',
        texto:
          'Adicionada validação para verificar se os metadados existem antes de inseri-los no processamento, evitando erros de referência nula.',
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
        destaque: 'Envio de valor em moeda estrangeira para notas do exterior',
        texto:
          'Ajustado o envio do campo vServMoeda para notas de serviço prestado no exterior, garantindo que o valor na moeda estrangeira seja corretamente informado no XML da NFS-e.',
      },
    ],
  },
  {
    tag: '02/04/2026',
    titulo: 'Quinta-feira — 02 de Abril',
    data: '02/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Correção de NullReferenceException no MunicipioIncidencia',
        texto:
          'Ajustada a atribuição do campo MunicipioIncidencia para evitar NullReferenceException quando o município não é encontrado, adicionando validação defensiva antes do acesso ao objeto.',
      },
      {
        icon: '🧮',
        destaque:
          'Correção na reordenação de tags CSTPisCofins e TpRetPisCofins',
        texto:
          'Corrigida a lógica de reordenação das tags CSTPisCofins e TpRetPisCofins no XML, aplicando o ajuste para todos os elementos Valores do lote. Isso garante compatibilidade em lotes com múltiplas notas e elimina rejeições por ordem incorreta das tags.',
      },
      {
        icon: '🧮',
        destaque: 'Preenchimento de IBS/CBS para Sapiranga/RS (DBSeller)',
        texto:
          'Implementado o preenchimento dos campos IBS/CBS nos itens de serviço para Sapiranga/RS no provedor DBSeller. Ajustada também a lógica de organização das tags cIndOp, cClassTrib e CodigoNbs no XML de envio.',
      },
      {
        icon: '🔧',
        destaque: 'Ajuste para usar proxy static no envio',
        texto:
          'Alterado o envio de NFS-e para utilizar proxy static, melhorando a estabilidade da comunicação com os webservices das prefeituras.',
      },
      {
        icon: '🔧',
        destaque: 'Ajustes gerais no sistema',
        texto:
          'Realizados ajustes gerais no processamento de NFS-e para corrigir comportamentos identificados em produção.',
      },
    ],
  },
];
