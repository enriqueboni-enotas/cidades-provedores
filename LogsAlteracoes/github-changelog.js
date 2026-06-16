var changelogData = [
  {
    tag: '16/06/2026',
    titulo: 'Segunda-feira — 16 de Junho',
    data: '16/06/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '15/06/2026',
    titulo: 'Domingo — 15 de Junho',
    data: '15/06/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '14/06/2026',
    titulo: 'Sábado — 14 de Junho',
    data: '14/06/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '13/06/2026',
    titulo: 'Sexta-feira — 13 de Junho',
    data: '13/06/2026',
    itens: [
      {
        icon: '�',
        destaque:
          'Retorno ao formato antigo de PIS/COFINS com envio de apuração própria',
        texto:
          'O envio dos dados de PIS/COFINS foi revertido para o formato anterior, que era mais compatível com os provedores. Adicionalmente, foi implementada a lógica de envio dos dados de apuração própria quando o contribuinte informa apenas os tributos não retidos (sem retenção na fonte). Isso resolve rejeições em prefeituras que não aceitavam o novo formato e garante que empresas com apuração própria tenham seus dados fiscais corretamente transmitidos.',
      },
      {
        icon: '�',
        destaque: 'Atribui valor correto ao campo aliqPis',
        texto:
          'O campo aliqPis (alíquota do PIS) não estava sendo preenchido corretamente em determinados cenários de apuração própria, causando divergência entre o valor calculado e o informado no XML. O ajuste garante que a alíquota seja atribuída ao campo antes do envio, evitando rejeições em provedores que validam a consistência entre alíquota e valor do tributo.',
      },
    ],
  },
  {
    tag: '12/06/2026',
    titulo: 'Quinta-feira — 12 de Junho',
    data: '12/06/2026',
    itens: [
      {
        icon: '🔧',
        destaque:
          'Corrige envio de DataEmissao e DataCompetencia no NfseNacionalV2',
        texto:
          'O provedor NfseNacionalV2 estava convertendo incorretamente as datas de emissão e competência de UTC para hora local, gerando DateTime com Kind "Unspecified" que causava inconsistências no XML. A correção permite passar uma timezone específica para o campo Data, remove a conversão desnecessária e usa DateTime.UtcNow com fallback para timezone de Brasília. Isso resolve problemas de notas com data de emissão diferente da esperada, especialmente em horários próximos à meia-noite.',
      },
      {
        icon: '🏙️',
        destaque: 'São José da Barra/MG migra para NfseNacionalV2',
        texto:
          'O município de São José da Barra/MG foi atualizado para o provedor NfseNacionalV2. A cidade aderiu ao Portal Nacional de NFS-e na versão mais recente, com suporte a substituição de nota, consulta por DPS e operações padronizadas do padrão nacional v2.',
      },
      {
        icon: '🏙️',
        destaque: 'Bandeirantes/PR migra para Equiplano',
        texto:
          'O município de Bandeirantes/PR teve seu provedor atualizado para Equiplano. A prefeitura trocou de sistema de NFS-e, e as configurações de URL, namespace e operações foram atualizadas no gateway para o provedor Equiplano, garantindo continuidade na emissão de notas fiscais de serviço.',
      },
      {
        icon: '🔧',
        destaque: 'Ajusta processamento de respostas e consulta no FiorilliV2',
        texto:
          'O provedor FiorilliV2 ganhou suporte completo à consulta de NFS-e individual. Foram criados novos DTOs (ConsultarNfseEnvio, ConsultarNfseResposta, ListaNFSe), implementado o método ConsultarNFSe no webservice, e adicionada lógica de detecção de "processado com erro". Também foi corrigida a detecção de sucesso na recepção de lote, que agora identifica a mensagem "NFS-e gerada com sucesso" na resposta do provedor. Isso resolve notas que ficavam presas em status de consulta.',
      },
      {
        icon: '🏙️',
        destaque: 'Preenche endereço do local de prestação no eTransparência',
        texto:
          'O provedor eTransparência (Taboão da Serra/SP e outros) passou a preencher corretamente o endereço do local de prestação quando o campo LocalPrestacaoServico é informado na nota. Antes, o preenchimento só ocorria quando o serviço era prestado fora do município do tomador. Agora todos os campos obrigatórios (município, UF, logradouro, número, bairro, CEP) são validados e preenchidos, gerando ValidationException se algum estiver ausente. Resolve rejeições por falta de dados de local de prestação.',
      },
      {
        icon: '🏙️',
        destaque: 'Sombrio/SC adere ao Portal Nacional',
        texto:
          'O município de Sombrio/SC aderiu ao Portal Nacional de NFS-e e foi configurado no gateway. A cidade agora emite notas fiscais de serviço pelo padrão nacional, com suporte a DPS, consulta padronizada e cancelamento via evento.',
      },
      {
        icon: '🔧',
        destaque: 'Adiciona empresa em lista idsNovoRespTecnico',
        texto:
          'Uma empresaID foi adicionada à lista idsNovoRespTecnico, que controla quais empresas utilizam o novo formato de responsável técnico no XML da nota. Essa configuração por empresa é necessária porque alguns municípios exigem o campo em formato diferente do padrão, e a empresa em questão estava recebendo rejeições por formato incorreto.',
      },
      {
        icon: '🔧',
        destaque: 'Adiciona configuração temporária de geração de PDF',
        texto:
          'Configuração temporária para geração de PDF foi adicionada para investigação de um problema específico em produção. Esse tipo de configuração é usado pontualmente para diagnóstico e deve ser revertida após a resolução do caso.',
      },
      {
        icon: '🏙️',
        destaque: 'Itá/SC adere ao Portal Nacional',
        texto:
          'O município de Itá/SC aderiu ao Portal Nacional de NFS-e e foi configurado no gateway com o provedor NfseNacional. A cidade catarinense agora emite notas pelo padrão nacional, com suporte completo a emissão via DPS, consulta padronizada e cancelamento via evento.',
      },
      {
        icon: '🏙️',
        destaque: 'Juruaia/MG adere ao Portal Nacional',
        texto:
          'O município de Juruaia/MG aderiu ao Portal Nacional de NFS-e. A cidade mineira, conhecida pela indústria de moda íntima, agora emite NFS-e pelo padrão nacional com suporte a todas as operações padronizadas (emissão, consulta, cancelamento).',
      },
    ],
  },
  {
    tag: '11/06/2026',
    titulo: 'Quarta-feira — 11 de Junho',
    data: '11/06/2026',
    itens: [
      {
        icon: '�',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '10/06/2026',
    titulo: 'Terça-feira — 10 de Junho',
    data: '10/06/2026',
    itens: [
      {
        icon: '🔧',
        destaque:
          'Revert — Desfaz auto-incremento de RPS duplicado no eTransparência',
        texto:
          'Os commits anteriores (PRs #859, #860, #861) que implementavam o auto-incremento de RPS quando o eTransparência rejeitava por duplicidade foram revertidos. O fix causou efeitos colaterais graves: zerou os campos SerieNFe e SequencialLoteNFe no banco de dados, gerando o erro GW000412 em notas subsequentes. A funcionalidade precisa de retrabalho antes de ser reimplantada.',
      },
      {
        icon: '🔧',
        destaque:
          'Inclui SerieNFe e SequencialLoteNFe no UpdateSequenciaisNFeAsync',
        texto:
          'Ao incrementar o RPS automaticamente no eTransparência, o método UpdateSequenciaisNFeAsync não atualizava os campos SerieNFe e SequencialLoteNFe, causando zeramento desses valores no banco. Este commit corrigiu a query para incluir esses campos na atualização. Porém, o fix foi posteriormente revertido junto com os demais commits da feature.',
      },
      {
        icon: '🔧',
        destaque:
          'Fix reenvio RPS duplicado — seta Sucesso=true para handler processar',
        texto:
          'No fluxo de auto-incremento de RPS no eTransparência, ao detectar a rejeição e incrementar o RPS, era necessário setar Sucesso=true no resultado para que o handler de ConsultarLote processasse o ReiniciarEnvio corretamente. Sem isso, o lote ficava em estado indefinido. Este commit fazia parte do conjunto revertido.',
      },
      {
        icon: '🔧',
        destaque: 'Incremento automático de RPS duplicado no eTransparência',
        texto:
          'Implementação original do auto-incremento de RPS para o provedor eTransparência (Taboão da Serra/SP). Quando a prefeitura rejeitava a nota com "Já Existe uma Nota Fiscal com este RPS/Série", o sistema detectava via regex, incrementava o número do RPS (+1), atualizava o sequencial da empresa e reenviava automaticamente. Evitava loop de rejeição manual. Feature revertida por efeitos colaterais.',
      },
    ],
  },
  {
    tag: '09/06/2026',
    titulo: 'Segunda-feira — 09 de Junho',
    data: '09/06/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Corrige links e tag Tomador no NfseNacional',
        texto:
          'O provedor NfseNacional estava enviando a tag <Tomador> onde deveria enviar <TomadorServico> no XML de integração. Além disso, os links de consulta/download de PDF estavam apontando para URLs erradas. As correções garantem que o XML gerado esteja em conformidade com o layout nacional e que os links de integração funcionem corretamente para prefeituras que usam o padrão nacional.',
      },
      {
        icon: '🔧',
        destaque: 'Melhora repasse de mensagens de erro ao cliente',
        texto:
          'As mensagens de erro retornadas por certos provedores não estavam sendo repassadas corretamente ao cliente. O ajuste garante que a mensagem original da prefeitura seja retornada de forma legível, sem truncamento ou formatação incorreta, melhorando a experiência do usuário ao visualizar rejeições.',
      },
      {
        icon: '🔧',
        destaque: 'Atualiza validação em serviços específicos',
        texto:
          'Algumas validações de campos obrigatórios não estavam sendo aplicadas corretamente. A atualização adiciona validações específicas para determinados códigos de serviço, evitando rejeições desnecessárias pela prefeitura quando os dados da nota estão corretos mas não atendiam ao formato esperado pelo provedor.',
      },
      {
        icon: '🔧',
        destaque: 'Acrescenta nota substituída no filtro de busca',
        texto:
          'No filtro de consulta de notas, quando uma nota é substituída por outra, a nota substituída também é incluída nos resultados, permitindo rastrear a cadeia de substituições e facilitando a sincronização de sistemas integrados.',
      },
      {
        icon: '�',
        destaque:
          'Tratamentos para subscriptionID usar MunicipioIncidenciaService',
        texto:
          'Ajuste no tratamento de subscriptionID para utilizar o serviço MunicipioIncidenciaService, garantindo que a nota use o município de incidência correto ao invés do município padrão, evitando rejeições em cidades que validam estritamente o local de prestação do serviço.',
      },
      {
        icon: '🔧',
        destaque: 'Configura envio de código de serviço municipal',
        texto:
          'Configuração adicionada para envio do código de serviço municipal no XML, necessário para prefeituras que validam esse campo.',
      },
      {
        icon: '💰',
        destaque: 'Zera valorISS para prestador Imune no serviço 080101',
        texto:
          'Quando o prestador é classificado como Imune e o serviço é 080101 (construção civil), o valor do ISS deve ser zero. Antes, o sistema calculava e enviava o ISS normalmente, causando divergência com a prefeitura. Agora, a regra zera o valorISS automaticamente nessa combinação específica, evitando rejeições e alertas fiscais.',
      },
      {
        icon: '🏙️',
        destaque: 'Fortaleza/CE passa a usar PDF modelo nacional',
        texto:
          'O provedor Fortaleza foi ajustado para gerar o PDF da NFS-e usando o layout do modelo nacional (Padrão Nacional), em vez do layout anterior customizado. Isso padroniza a aparência do documento e facilita a manutenção, já que o layout nacional é compartilhado entre diversos provedores.',
      },
      {
        icon: '🏙️',
        destaque: 'Ajuste na nomenclatura de certas cidades',
        texto:
          'Alguns nomes de municípios no sistema estavam com grafia desatualizada ou diferente do padrão IBGE. A nomenclatura foi corrigida para refletir os nomes oficiais, evitando inconsistências em consultas e relatórios que dependem do nome exato do município.',
      },
      {
        icon: '🔧',
        destaque:
          'Fix — trata EhConvenioVigente nullable na emissão NFS-e Nacional sem certificado',
        texto:
          'Na emissão de NFS-e Nacional sem certificado digital (via crawler), o campo EhConvenioVigente podia retornar null, causando crash (NullReferenceException) no robô de emissão. O fix adiciona tratamento para o caso nullable, permitindo que a emissão prossiga normalmente quando o convênio não está definido. Referência: CE-27738.',
      },
      {
        icon: '🔧',
        destaque:
          'Correção de crash quando EhConvenioVigente retorna null no robô',
        texto:
          'Commit complementar ao fix anterior — o ajuste adiciona verificação segura antes de acessar o valor do convênio vigente, resolvendo o crash em produção para notas emitidas sem certificado.',
      },
      {
        icon: '🔧',
        destaque: 'Ajuste complementar no tratamento de convênio vigente',
        texto:
          'Commit complementar que completa a correção dos campos nullable de emissão sem certificado digital.',
      },
    ],
  },
  {
    tag: '08/06/2026',
    titulo: 'Domingo — 08 de Junho',
    data: '08/06/2026',
    itens: [
      {
        icon: '🔧',
        destaque:
          'Tratamento para subscriptionID não enviar Outras Retenções em Rio Claro/SP',
        texto:
          'Em Rio Claro/SP, o provedor não aceita que se envie o campo OutrasRetencoes no XML, evitando rejeições no momento da emissão.',
      },
      {
        icon: '🔧',
        destaque: 'Adiciona empresa em EmpresasNewLock',
        texto:
          'Uma empresa foi adicionada à lista EmpresasNewLock, que controla o mecanismo de lock de emissão para evitar duplicidade de notas. Quando uma empresa está nessa lista, o sistema usa o novo mecanismo de lock distribuído que é mais confiável e evita cenários de nota duplicada em alta concorrência.',
      },
      {
        icon: '🏙️',
        destaque: "São João d'Aliança/GO migra para NfseNacionalV2",
        texto:
          "O município de São João d'Aliança/GO foi atualizado para usar o provedor NfseNacionalV2. A cidade aderiu ao Portal Nacional de NFS-e e agora suas notas são emitidas pelo padrão nacional, que oferece mais funcionalidades como consulta por DPS e cancelamento padronizado.",
      },
      {
        icon: '🏙️',
        destaque: 'Vila Maria/RS ativada no provedor CittaV2',
        texto:
          'O município de Vila Maria/RS foi ativado no provedor CittaV2. A prefeitura utiliza o sistema Citta para emissão de NFS-e, e o município agora está configurado corretamente no gateway para emissão, consulta e cancelamento de notas fiscais de serviço.',
      },
      {
        icon: '🔧',
        destaque: 'Consulta por RPS via crawler para NfseNacional',
        texto:
          'Implementada a consulta por RPS via crawler para o provedor NfseNacional. Essa operação é essencial para a sincronização de notas — quando o sistema precisa verificar se uma nota específica foi processada pela prefeitura. Antes, apenas a consulta por lote estava disponível via crawler.',
      },
      {
        icon: '🔧',
        destaque:
          'BethaV3 aceita envio de pisCofinsApuracaoPropria mantendo compatibilidade',
        texto:
          'O provedor BethaV3 passou a aceitar o envio do campo pisCofinsApuracaoPropria quando preenchido pelo contribuinte. Anteriormente, o campo era ignorado mesmo quando preenchido, causando divergência entre o valor declarado e o que a prefeitura recebia.',
      },
      {
        icon: '🔧',
        destaque: 'Validação na data de emissão',
        texto:
          'Adicionada validação mais rigorosa na data de emissão para identificar problemas de data antecipadamente.',
      },
      {
        icon: '🔧',
        destaque: 'Empresa adicionada à lista de envio de alíquota obrigatório',
        texto:
          'Uma empresaID específica foi incluída na lista de empresas que sempre enviam alíquota no XML, independente da configuração padrão do município. Isso resolve rejeições em prefeituras que exigem o campo alíquota preenchido para determinadas atividades econômicas.',
      },
      {
        icon: '🏙️',
        destaque: 'Bertioga/SP migra para GissOnline',
        texto:
          'O município de Bertioga/SP teve seu provedor atualizado para GissOnline. A prefeitura trocou de sistema de NFS-e, e a configuração no gateway foi ajustada com as novas URLs, namespace e operações do provedor GissOnline, garantindo continuidade na emissão de notas.',
      },
      {
        icon: '🔧',
        destaque: 'Atualiza preenchimento de CST e tipo retenção PisCofins',
        texto:
          'O preenchimento do CST (Código de Situação Tributária) de PIS/COFINS foi atualizado para refletir corretamente as situações tributárias vigentes. A correção evita envio de valores incorretos que causavam rejeição em provedores que validam esses campos de acordo com a legislação federal.',
      },
      {
        icon: '🏙️',
        destaque: 'Rio das Ostras/RJ migra para TiplanV3',
        texto:
          'O município de Rio das Ostras/RJ foi migrado do provedor anterior para o TiplanV3. A prefeitura atualizou seu sistema de NFS-e, exigindo nova integração com URLs, schemas e comportamentos diferentes. A migração garante que notas continuem sendo emitidas corretamente no município.',
      },
      {
        icon: '🆕',
        destaque: 'Novo provedor SimplissV3 criado',
        texto:
          'Foi criado o provedor SimplissV3, que implementa a versão 3 do sistema Simpliss usado por diversas prefeituras. Municípios que migraram para a versão 3 podem agora ser integrados ao gateway.',
      },
    ],
  },
  {
    tag: '07/06/2026',
    titulo: 'Sábado — 07 de Junho',
    data: '07/06/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '06/06/2026',
    titulo: 'Sexta-feira — 06 de Junho',
    data: '06/06/2026',
    itens: [
      {
        icon: '�',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '05/06/2026',
    titulo: 'Quinta-feira — 05 de Junho',
    data: '05/06/2026',
    itens: [
      {
        icon: '🔧',
        destaque:
          'Ajusta consulta para gravar metadado de substituição de nota',
        texto:
          'Ao consultar o lote de notas emitidas, o sistema agora grava o metadado de substituição (nota original substituída), permitindo a rastreabilidade da cadeia de substituições pelo integrador.',
      },
      {
        icon: '🔧',
        destaque: 'ToFormattedString() retorna todos os erros da nota',
        texto:
          'O método ToFormattedString() que formata mensagens de erro para o cliente foi ajustado para retornar TODOS os erros encontrados na nota, não apenas o primeiro. Anteriormente, quando a prefeitura retornava múltiplos erros de validação, apenas o primeiro era exibido, dificultando a correção dos dados pelo usuário.',
      },
      {
        icon: '🔧',
        destaque: 'Acrescenta input da nota substituída na consulta',
        texto:
          'Na operação de consulta de lote, os dados de input da nota substituída (número original, série, motivo da substituição) agora são retornados junto com o resultado. Isso complementa a funcionalidade de substituição de NFS-e, permitindo que integradores identifiquem qual nota foi substituída sem precisar de consulta adicional.',
      },
      {
        icon: '�',
        destaque: 'Implementa substituição de NFSe para NfseNacionalV2',
        texto:
          'A operação de substituição de NFS-e foi implementada para o provedor NfseNacionalV2. Essa operação permite emitir uma nova nota em substituição a uma anterior (corrigindo dados fiscais), mantendo o vínculo entre as duas notas. É uma exigência do padrão nacional e agora está disponível para todos os municípios que usam o NfseNacionalV2.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativa municípios no provedor Agili',
        texto:
          'Novos municípios foram ativados no provedor Agili. O provedor Agili atende diversas prefeituras com sistema próprio de NFS-e, e os municípios adicionados agora podem emitir, consultar e cancelar notas fiscais de serviço através do gateway.',
      },
      {
        icon: '🏙️',
        destaque: 'Nanuque/MG migra para EeLv3',
        texto:
          'O município de Nanuque/MG foi migrado para o provedor EeLv3. A prefeitura atualizou seu sistema de NFS-e para a versão 3 do EeL, com novo formato de comunicação. A migração garante continuidade na emissão de notas no município.',
      },
      {
        icon: '🔧',
        destaque: 'Adiciona empresa em idsNovoRespTecnico',
        texto:
          'Uma empresaID foi adicionada à lista idsNovoRespTecnico, que controla quais empresas utilizam o novo formato de responsável técnico no XML da nota. Essa configuração por empresa é necessária porque alguns municípios exigem o campo em formato diferente do padrão.',
      },
      {
        icon: '🏙️',
        destaque: 'Rio Claro/SP migra para GissOnline',
        texto:
          'O município de Rio Claro/SP teve seu provedor atualizado para GissOnline. A prefeitura migrou de sistema, e as configurações de URL, namespace e operações foram atualizadas no gateway para o novo provedor, garantindo emissão e consulta de NFS-e sem interrupção.',
      },
      {
        icon: '🔧',
        destaque: 'Rollback configuração temporária',
        texto:
          'Uma configuração temporária de produção foi removida (rollback). Configurações temporárias são usadas pontualmente para investigar problemas específicos e devem ser revertidas após a resolução.',
      },
      {
        icon: '🏙️',
        destaque: 'São José do Rio Pardo/SP migra para Portal Nacional',
        texto:
          'O município de São José do Rio Pardo/SP aderiu ao Portal Nacional de NFS-e. A cidade agora emite notas pelo padrão nacional com suporte a DPS, consulta padronizada e cancelamento via evento.',
      },
      {
        icon: '🏙️',
        destaque: 'Guaranésia/MG migra para BethaV3',
        texto:
          'O município de Guaranésia/MG foi atualizado para o provedor BethaV3. A prefeitura migrou para o sistema Betha na versão 3, que segue o padrão nacional de NFS-e. URLs, schemas e configurações foram ajustadas para o novo provedor.',
      },
      {
        icon: '🔧',
        destaque: 'Configura envio de alíquota específico para empresa',
        texto:
          'Uma empresa específica foi configurada para enviar alíquota de forma diferenciada. Alguns municípios exigem que a alíquota seja enviada em formato específico ou com valor fixo para determinadas atividades, e essa configuração por empresa resolve rejeições pontuais sem afetar as demais.',
      },
      {
        icon: '📊',
        destaque: 'Implementa retenção de PIS/COFINS no provedor Agili',
        texto:
          'O provedor Agili passou a suportar o envio de informações de retenção de PIS/COFINS no XML da nota. Foram criados os enums SituacaoTributaria e TipoRetencao, e a lógica de preenchimento dos campos no XML foi implementada. Empresas que possuem retenção na fonte agora terão esses valores corretamente informados à prefeitura.',
      },
      {
        icon: '🆕',
        destaque: 'Novo provedor SpeedGovV2 criado',
        texto:
          'Foi criado o provedor SpeedGovV2 com suporte a emissão, consulta por RPS, cancelamento (via evento) e geração de PDF. Municípios que migraram para a versão 2 do SpeedGov agora podem ser integrados ao gateway.',
      },
    ],
  },
];
