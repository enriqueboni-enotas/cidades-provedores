var changelogData = [
  {
    tag: '11/06/2026',
    titulo: 'Quinta-feira — 11 de Junho',
    data: '11/06/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '10/06/2026',
    titulo: 'Quarta-feira — 10 de Junho',
    data: '10/06/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Revert — Desfaz auto-incremento de RPS duplicado no eTransparência',
        texto:eriores (PRs #859, #860, #861) que implementavam o auto-incremento de RPS quando o eTransparência rejeitava por duplicidade foram revertidos. O fix causou efeitos colaterais graves: zerou os campos SerieNFe e SequencialLoteNFe no banco de dados, gerando o erro GW000412 em notas subsequentes. A funcionalidade precisa de retrabalho antes de ser reimplantada.',
      },
      {
        icon: '�',
        destaque: 'Inclui SerieNFe e SequencialLoteNFe no UpdateSequenciaisNFeAsync',
        texto: 'Ao RPS automaticamente no eTransparência, o método UpdateSequenciaisNFeAsync não atualizava os campos SerieNFe e SequencialLoteNFe, causando zeramento desses valores no banco. Este commit corrigiu a query para incluir esses campos na atualização. Porém, o fix foi posteriormente revertido junto com os demais commits da feature.',
      },
      {
        icon: '🔧',
        destaque: 'Fix reenvio RPS duplicado — seta Sucesso=true para handler processar',
       cia, ao detectar a rejeição e incrementar o RPS, era necessário setar Sucesso=true no resultado para que o handler de ConsultarLote processasse o ReiniciarEnvio corretamente. Sem isso, o lote ficava em estado indefinido. Este commit fazia parte do conjunto revertido.',
      },
      {
        icon: '�',
        destaque: 'Incremento automático de RPS duplicado no eTransparência',
        texto: 'Implementação original do auto-incremento de RPS para o provedor eTransparência (Taboão da Serra/SP). Quando a prefeitura rejeitava a nota com "Já Existe uma Nota Fiscal com este RPS/Série", o sistema detectava via regex, incrementava o número do RPS (+1), atualizava o sequencial da empresa e reenviava automaticamente. Evitava loop de rejeição manual. Feature revertida por efeitos colaterais.',
      },
    ],
  },
  {
    tag: '09/06/2026',
    titulo: 'Segunda-feira — 09 de Junho',
    data: '09/06/2026',
    itens: [
      {
        icon: '�',
        destaque: 'Corrige links deico no lugar de Tomador',
        texto: 'O provedor NfseNacional estava enviando a tag <Tomador> onde deveria enviar <TomadorServico> no XML de integração. Além disso, os links de consulta/download de PDF estavam apontando para URLs erradas. As correções garantem que o XML gerado esteja em conformidade com o layout nacional e que os links de integração funcionem corretamente para prefeituras que usam o padrão nacional.',
      },
      {
        icon: '🔧',
   erro',
        texto: 'As mensagens de erro retornadas por certos provedores não estavam sendo repassadas corretamente ao cliente. O ajuste garante que a mensagem original da prefeitura seja retornada de forma legível, sem truncamento ou formatação incorreta, melhorando a experiência do usuário ao visualizar rejeições.',
      },
      {
        icon: '🔧',
        destaque: 'Atualiza validação em serviços específicos',
        texto: 'Alg sendo aplicadas corretamente. A atualização adiciona validações específicas para determinados códigos de serviço, evitando rejeições desnecessárias pela prefeitura quando os dados da nota estão corretos mas não atendiam ao formato esperado pelo provedor.',
      },
      {
        icon: '🔧',
        destaque: 'Acrescenta nota substituída no filtro de busca',
    ubstituída também é incluída nos resultados, permitindo rastrear a cadeia de substituições e facilitando a sincronização de sistemas integrados.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamentos para subscriptionID usar MunicipioIncidenciaService',
        texto município padrão, evitando rejeições em cidades que validam estritamente o local de prestação do serviço.',
      },
      {
        icon: '🔧',
        destaque: 'Configura envio de código de serviço municipal',
        texto:eituras que validam esse campo.',
      },
      {
        icon: '💰',
        destaque: 'Zera valorISS para prestador Imune no serviço 080101',
        texto: 'Quando o prestador é classificado como Imune e o serviço é 080101 (construção civil), o valor do ISS deve ser zero. Antes, o sistema calculava e enviava o ISS normalmente, causando divergência com a prefeitura. Agora, a regra zera o valorISS automaticamente nessa combinação específica, evitando rejeições e alertas fiscais.',
      },
      {
         '🏙️',
        destaque: 'Fortaleza/CE passa a usar PDF modelo nacional',
        texto: 'O provedor Fortaleza foi ajustado para gerar o PDF da NFS-e usando o layout do modelo nacional (Padrão Nacional), em vez do layout anterior customizado. Isso padroniza a aparência do documento e facilita a manutenção, já que o layout nacional é compartilhado entre diversos provedores.',
      },
      {
        icon: '🏙️',
        destaque: 'Ajuste na nomenclatura de certas cidades',
        textno sistema estavam com grafia desatualizada ou diferente do padrão IBGE. A nomenclatura foi corrigida para refletir os nomes oficiais, evitando inconsistências em consultas e relatórios que dependem do nome exato do município.',
      },
      {
        icon: '🔧',
        destaque: 'Fix — trata EhConvenioVigente nullable na emissão NFS-e Nacional sem certificado',
        texto: 'Na emissão de NFS-e Nacional sem certificado digital (via crawler), o campo EhConvenioVigente podia retornar null, causando crash (NullReferenceException) no robô de emissão. O fix adiciona tratamento para o caso nullable, permitindo que a emissão prossiga normalmente quando o convênio não está definido. Referência: CE-27738.',
      },
      {
        icon: '🔧',
        destaque: 'Correção de crash quando EhConvenioVigente retorna null no robô',
        texto: primeiro. O ajuste adiciona verificação segura antes de acessar o valor, resolvendo o crash em produção para notas emitidas sem certificado.',
      },
      {
        icon: '🔧',
        destaque: 'Ajuste complementar no tratamento de convênio vigente',
        texto: 'Commit complementar que completa a correção do nullables de emissão sem certificado digital.',
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
        destaque: 'Tratamento para subscriptionID não enviar Outras Retenções em Rio Claro/SP',
        texto: 'Em Rviem o campo OutrasRetencoes no XML, evitando rejeições no momento da emissão.',
      },
      {
        icon: '🔧',
        destaque: 'Adiciona empresa em EmpresasNewLock',
        texto: 'Uma empresa foi adicionada à lista EmpresasNewLock, que controla o mecanismo de lock de emissão para evitar duplicidade de notas. Quando uma empresa está nessa lista, o sistema usa o novo mecanismo de lock distribuído que é mais confiável e evita cenários de nota duplicada em alta concorrência.',
      },
      {
        icon: '🏙️',
        destaque: 'São João d\'Aliança/GO migra para NfseNacionalV2',
        texto: 'O município de São João d\'Aliança/GO foi atualizado para usar o provedor NfseNacionalV2. A cidade aderiu ao Portal Nacional de NFS-e e agora suas notas são emitidas pelo padrão nacional, que oferece mais funcionalidades como consulta por DPS e cancelamento padronizado.',
      },
      {
        icon: '�️',
        destaque: 'Vila Maria/RS ativada no provedor CittaV2',
        texto:foi ativado no provedor CittaV2. A prefeitura utiliza o sistema Citta para emissão de NFS-e, e o município agora está configurado corretamente no gateway para emissão, consulta e cancelamento de notas fiscais de serviço.',
      },
      {
        icon: '🔧',
        destaque: 'Consulta por RPS via crawler para NfseNacional',
        texto: 'Il para a sincronização de notas — quando o sistema precisa verificar se uma nota específica foi processada pela prefeitura. Antes, apenas a consulta por lote estava disponível via crawler.',
      },
      {
        icon: '🔧',
        destaque: 'BethaV3 aceita envio de pisCofinsApuracaoPropria mantendo compatibilidade',
      riormente, o campo era ignorado mesmo quando preenchido, causando divergência entre o valor declarado e o que a prefeitura recebia.',
      },
      {
        icon: '🔧',
        destaque: 'Validação na data de emissão',
        texto: 'Adiciono identificar problemas de data antecipadamente.',
      },
      {
        icon: '🔧',
        destaque: 'Empresa adicionada à lista de envio de alíquota obrigatório',
        texto: 'Uma empresaID específica foi incluída na lista de empresas que sempre enviam alíquota no XML, independente da configuração padrão do município. Isso resolve rejeições em prefeituras que exigem o campo alíquota preenchido para determinadas atividades econômicas.',
      },
      {
        icon: '🏙️',
        migra para GissOnline',
        texto: 'O município de Bertioga/SP teve seu provedor atualizado para GissOnline. A prefeitura trocou de sistema de NFS-e, e a configuração no gateway foi ajustada com as novas URLs, namespace e operações do provedor GissOnline, garantindo continuidade na emissão de notas.',
      },
      {
        icon: '🔧',
        destaque: 'Atualiza preenchimento de CST e tipo retenção PisCofins',
        de PIS/COFINS foi atualizado para refletir corretamente as situações tributárias vigentes. A correção evita envio de valores incorretos que causavam rejeição em provedores que validam esses campos de acordo com a legislação federal.',
      },
      {
        icon: '🏙️',
        destaque: 'Rio das Ostras/RJ migra para TiplanV3',
        texto: 'O município de Rio das Ostras/RJ foi migrado do provedor anterior para o TiplanV3. A prefeitura atualizou seu sistema de NFS-e, exigindo nova integração com URLs, schemas e comportamentos diferentes. A migração garante que notas continuem sendo emitidas corretamente no município.',
      },
      {
        icon: '🆕',
        destaque: 'Novo provedor SimplissV3 criado',
        texto:versão 3 podem agora ser integrados ao gateway.',
      },
    ],
  },
  {
    tag: '07/06/2026',
    titulo: 'Sábado — 07 de Junho',
    data: '07/06/2026',
    itens: [
      {
        icon: '�',
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
        icon: '📭',
        destaque: 'Sem alterações',
        texto:e dia.',
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
        destaque: 'Ajusta consulta para gravar metadado de substituição de nota',
        texto: 'Ao consultar o lote de notas emitidas, o sistema agora grndo a rastreabilidade da cadeia de substituições pelo integrador.',
      },
      {
        icon: '🔧',
        destaque: 'ToFormattedString() retorna todos os erros da nota',
        texto: 'O método ToFormattedString() que formata mensagens de erro para o cliente foi ajustado para retornar TODOS os erros encontrados na nota, não apenas o primeiro. Anteriormente, quando a prefeitura retornava múltiplos erros de validação, apenas o primeiro era exibido, dificultando a correção dos dados pelo usuário.',
      },
      {
        icon: '🔧',
        destaque: 'Acrescenta input da nota substituída na consulta',
        texto: 'Na operação de consulta de lote, os dados de input da nota substituída (número original, série, motivo da substituição) agora são retornados junto com o resultado. Isso complementa a funcionalidade de substituição de NFS-e, permitindo que integradores identifiquem qual nota foi substituída sem precisar de consulta adicional.',
      },
      {
        icon: '🆕',
        destaque: 'Implementa substituição de NFSe para NfseNacionalV2',
        texto: 'A operação de substituição de NFS-e foi implementada para o provedor NfseNacionalV2. Essa operação permite emitir uma nova nota em substituição a uma anterior (corrigindo dados fiscais), mantendo o vínculo entre as duas notas. É uma exigência do padrão nacional e agora está disponível para todos os municípios que usam o NfseNacionalV2.',
      },
      {
        icon: '�️',
        destaque: 'Ativa municípios no provedor Agili',
        texto: 'Novos municípios foram ativados no provedor Agili. O provedor Agili atende diversas prefeituras com sistema próprio de NFS-e, e os municípios adicionados agora podem emitir, consultar e cancelar notas fiscais de serviço através do gateway.',
      },
      {
        icon: '🏙️',
        destaque: 'Nanuque/MG migra para EeLv3',
    rmato de comunicação. A migração garante continuidade na emissão de notas no município.',
      },
      {
        icon: '🔧',
        destaque: 'Adiciona empresa em idsNovoRespTecnico',
        texto: 'Uma empresaID foi adicionada à lista idsNovoRespTecnico, que controla quais empresas utilizam o novo formato de responsável técnico no XML da nota. Essa configuração por empresa é necessária porque alguns municípios exigem o campo em formato diferente do padrão.',
      },
      {
        icon: '�️',
        destaque: 'Rio Claro/SP migra para GissOnline',
        texto: 'O município de Rio Claro/SP teve seu provedor atualizado para GissOnline. A prefeitura migrou de sistema, e as configurações de URL, namespace e operações foram atualizadas no gateway para o novo provedor, garantindo emissão e consulta de NFS-e sem interrupção.',
      },
      {
        icon: '🔧',
        destaque: 'Rollback configuração temporária',
        texto: 'U produção foi removida (rollback). Configurações temporárias são usadas pontualmente para investigar problemas específicos e devem ser revertidas após a resolução.',
      },
      {
        icon: '🏙️',
        destaque: 'São José do Rio Pardo/SP migra para Portal Nacional',
       onsulta padronizada e cancelamento via evento.',
      },
      {
        icon: '🏙️',
        destaque: 'Guaranésia/MG migra para BethaV3',
        texto: 'O município de Guaranésia/MG foi atualizado para o provedor BethaV3. A prefeitura migrou para o sistema Betha na versão 3, que segue o padrão nacional de NFS-e. URLs, schemas e configurações foram ajustadas para o novo provedor.',
      },
      {
        icon: '🔧',
        destaque: 'Configura envio de alíquota específico para empresa',
        texto: 'Uma empresa específica foi configurada para enviar alíquota de forma diferenciada. Alguns municípios exigem que a alíquota seja enviada em formato específico ou com valor fixo para determinadas atividades, e essa configuração por empresa resolve rejeições pontuais sem afetar as demais.',
      },
      {
        icon: '💰',
        destaque: 'Implementa retenção de PIS/COFINS no provedor Agili',
        texto: 'O provedor Agili passou a suportar o envio de informações de retm criados os enums SituacaoTributaria e TipoRetencao, e a lógica de preenchimento dos campos no XML foi implementada. Empresas que possuem retenção na fonte agora terão esses valores corretamente informados à prefeitura.',
      },
      {
        icon: '🆕',
        destaque: 'Novo provedor SpeedGovV2 criado',
        texto: 'Foi consulta por RPS, cancelamento (via evento) e geração de PDF. Municípios que migraram para a versão 2 do SpeedGov agora podem ser integrados ao gateway.',
      },
    ],
  },
  {
    tag: '04/06/2026',
    titulo: 'Quarta-feira — 04 de Junho',
    data: '04/06/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Atualiza URL para baixar PDF de nota emitida',
       ra. O ajuste corrige os links para que clientes e integradores consigam baixar o PDF da nota corretamente, tanto via API quanto via painel.',
      },
      {
        icon: '�',
        destaque: 'Corrige URLs no método ValidaNotaEmitida',
        texto: 'Complemento da correção anterior — o método ValidaNotaEmitida também continha URLs hardcoded que precisavam seam.',
      },
      {
        icon: '🔧',
        destaque: 'Ajusta consulta do XML e PDF da nota emitida',
        texto: 'A consulta de XML e PDF de notas já emitidas foi ajustada para usar as URLs corretas dos novos endpoints. Essa operação é utilizada quando o integrador solicita o download do XML assinado ou do PDF da nota após a emissão, e as URLs precisam apontar para o storage atualizado.',
      },
    ],
  },
  {
    tag: '03/06/2026',
    titulo: 'Terça-feira — 03 de Junho',
    data: '03/06/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Remove envio de pTotTribSN que causava erro de schema',
        texto: 'O campo pTotTribSN (percentual total de tributos Simples Nacional) estava sendo enviado no XML para provedores que não o suportam, gerando erro de validação de schema na prefeitura. O campo foi removido do envio padrão, corrigindo rejeições em municípios que validam estritamente o schema XSD.',
      },
      {
        icon: '🏙️',
       1 nota por envio',
        texto: 'O município de Eusébio/CE estava rejeitando lotes com múltiplas notas. A configuração foi ajustada para enviar apenas 1 nota por lote, resolvendo o problema de rejeição. Alguns municípios não suportam lotes com mais de 1 RPS, exigindo envio individual.',
      },
      {
        icon: '🌐',
        destaque: 'Corrige geração de nota para tomador exterior',
        o tomador. O ajuste corrige o preenchimento dos campos de endereço e documento do tomador estrangeiro, permitindo emissão correta de notas de exportação de serviços.',
      },
      {
        icon: '🔧',
        destaque: 'Adiciona tratamento de PDF para notas',
        texto: 'Foi adicionado tratamento para geração e armazenamento de PDF em cenários onde o provedor não retorna o link do enham seu espelho disponível para download.',
      },
      {
        icon: '🏙️',
        destaque: 'Guaxupé/MG adere ao Portal Nacional',
        texto: 'O município de Guaxupé/MG aderiu ao Portal Nacional de NFS-e e foi configurado no gateway. A cidade agora emite notas pelo padrão nacional (NfseNacional), com suporte completo a DPS, consulta e cancelamento via evento padronizado.',
      },
      {
        icon: '🏙️',
        destaque: 'Itaberá/SP adere ao Portal Nacional',
aberá/SP aderiu ao Portal Nacional de NFS-e. A configuração foi adicionada ao gateway para que notas de serviço do município sejam emitidas pelo padrão nacional, substituindo o provedor anterior.',
      },
      {
        icon: '🔧',
        destaque: 'Reconsulta lote quando nota não é encontrada nas primeiras tentativas',
        texttentativas, evitando que notas fiquem presas no status "em emissão" por timeout de consulta. Especialmente útil em provedores com processamento assíncrono.',
      },
      {
        icon: '📊',
        destaque: 'Aplica RegraPadraoAliquotaAbrasfv204 para Palmas/TO',
        texto: 'O município de Palmas/TO passou a utilizar a RegraPadraoAliquotaAbrasfv204, que padroniza o envio de alíquota no formato ABRASF v2.04. Essa regra garante que o campo alíquota seja preenchido corretamente conforme o schema do provedor, evitando rejeições por formato inválido.',
      },
      {
        icon: '🔧',
        destaque: 'Trata FaultException como erro de dados informados incorretamente',
        texto: 'Quando o webservice da prefeitura retorna uma FaultException (erro SOAP genérico), o sistema agora interpreta como "dados informados incorretamente" ao invés de erro de comunicação. Isso evita retentativas desnecessárias em erros que são causados por dados inválidos na nota, melhorando a velocidade de feedback ao cliente.',
      },
      {
        icon: '🏙️',
        destaque: 'Bom Jesus do Norte/ES adere ao Portal Nacional',
        texto: 'O município de Bom Jesus do Norte/ES aderiu ao Portal Nacional de NFS-e e foi configurado no gateway. A cidade agora emite notas pelo padrão nacional com suporte a todas as operações padronizadas (emissão, consulta, cancelamento).',
      },
      {
        icon: '🏙️',
        destaque: 'Araraquara/SP — PreencherDadosObra para serviços 702/704/705',
        icionado à condicional que preenche os dados de obra (endereço da obra, ART, etc.) quando o serviço é 702, 704 ou 705 (construção civil). Sem esse preenchimento, notas de construção civil eram rejeitadas pela prefeitura por falta dos dados obrigatórios da obra.',
      },
      {
        icon: '🔧',
        destaque: 'Adiciona preenchimento parcial do FormatarDetalhe5',
        texto: 'O FormatarDetalhe5 parcial desse campo para cenários onde nem todos os dados estão disponíveis, evitando que a nota seja rejeitada por campo obrigatório não preenchido quando a informação completa não é necessária.',
      },
      {
        icon: '🔧',
        destaque: 'Fix — trata NullReferenceException no FormatarCamposAdicionaisReg40 para tomador exterior',
        texto: 'Ao emitir nota paratomador estrangeiro estavam incompletos. O fix adiciona verificações de nulidade antes de acessar campos do tomador, permitindo que a emissão prossiga mesmo com dados parciais do exterior.',
      },
    ],
  },
  {
    tag: '02/06/2026',
    titulo: 'Terça-feira — 02 de Junho',
    data: '02/06/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Campo Bom/RS — ajustado link de integração',
        texto: 'O link de integração provedor GIFv2. O ajuste corrige a URL do webservice para que a comunicação com a prefeitura funcione corretamente, resolvendo erros de conexão na emissão de notas.',
      },
      {
        icon: '🏙️',
        destaque: 'Campo Bom/RS migra para GIFv2',
        texto: 'O município de Campo Bom/RS foi migrado para o provedor GIFv2. A prefeitura atualizou seu sistema de NFS-e, exigindo nova integração com URLs e schemas do GIF na versão 2. A configuração completa (URLs, operações, namespace) foi aplicada.',
      },
      {
        icon: '🏙️',
        destaque: 'Campos Belos/GO adere ao Portal Nacional',
        texto: 'O município de Campos Belos/GO aderiu ao Portal Nacional de NFS-e e foi configurado no gateway. A cidade agora emite notas pelo padrão nacional (NfseNacional), com suporte a DPS, consulta padronizada e cancelamento via evento.',
      },
      {
        icon: '🔧',
        destaque: 'Layout PDF nacional como padrão para GovDigital',
        F do Padrão Nacional como formato padrão para todas as notas emitidas. Anteriormente, cada nota podia gerar PDF em formatos diferentes. A padronização facilita a leitura e manutenção, além de garantir conformidade com o layout oficial.',
      },
      {
        icon: '🔧',
        destaque: 'Configura lote para somar 2147483634 ao valor do lote',
        texto: 'Para uma empresa específica, o número do lote de envio foi configurado para somar 2147483634 ao valor sequencial. Isso resolve conflito de numeração de lote com a prefeitura, onde lotes antigos com números baixos já existiam e causavam rejeição por "lote já enviado". A soma garante unicidade do número do lote.',
      },
      {
        icon: '�',
        destaque: 'Remove tratamento de tpImunidade para empresa específica',
        texto:jeição. O campo só deve ser enviado quando o prestador é efetivamente imune.',
      },
      {
        icon: '🔧',
        destaque: 'Envio do código NBS no XML para integração alternativa',
        texto: 'Para empresas que usam integração alternativa, o código NBS (Nomenclatura Brasileira de Serviços) agora é enviado no XML da nota quando disponível. O NBS é exigido por alguns municípios para classificação internacional de serviços, especialmente em operações de exportação.',
      },
      {
        n: '💰',
        destaque: 'Ajusta envio do IRRF e INSS para notas sem PIS/COFINS retidos',
        texto: 'Quando uma nota não possui retenção de PIS/COFINS, os valores de IRRF e INSS ainda precisam ser enviados quando aplicáveis. O ajuste corrige a lógica para que IRRF e INSS sejam enviados independentemente da presença de PIS/COFINS retidos, evitando perda de informação fiscal na nota.',
      },
      {
        icon: '🏙️',
        destaque: 'HM2: reprocessa consultas com erro temporário do ADN em Carpina/PE',
        texto: 'O provedor HM2 em Carpina/PE retornava erros temporários do ADN (sistema da prefeitura) durante consultas de lote, fazendo com que notas ficassem presas em "consultando". O ajuste adiciona detecção desse erro específico e agenda reprocessamento automático, evitando que notas fiquem paradas indefinidamente.',
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
        texto: 'Uma empresa da subscription Believe estava conseguindo emitir notas retroativas (com data de competência anterior à data de emissão), o que não era permitido para as demais empresas da mesma subscription. Foi adicionada condição específica no RecepcionarLoteNFe.cs que bloqueia a emissão retroativa exclusivamente para essa empresa, mantendo a permissão para as outras empresas do mesmo grupo. Trata-se de exceção temporária (SUSFS-8515).',
      },
      {
        icon: '📋',
        destaque: 'Swagger: novo endpoint de histórico de alteração de metadados',
        texto: 'Foi adicionado à documentação Swagger estática o endpoint GET /empresas/{empresaId}/historicoalteracaometadados. Esse endpoint permite consultar o histórico de alterações nos metadados de uma empresa, retornando campos como dataAlteracao, hierarquia (caconfigurações fiscais da empresa.',
      },
      {
        icon: '📋',
        destaque: 'Swagger: parâmetros dataCriacaoInicio e dataCriacaoFim na listagem de NFes',
        texto: 'O endpoint GET /empresas/{empresaId}/nfes no Swagger estáticOs parâmetros agora estão documentados corretamente no Swagger.json.',
      },
      {
        icon: '🏙️',
        destaque: 'Ipira/SC adere ao Portal Nacional',
        texto: 'O município de Ipira/SC aderiu ao Portal Nacional de NFS-e e foi configurado no gateway com o provedor NfseNacional. A cidade agora emite notas fiscais de serviço pelo padrão nacional, com suporte a DPS, consulta padronizada e cancelamento via evento.',
      },
      {
        icon: '🏙️',
        destaque: 'São Gonçalo/RJ adere ao Portal Nacional',
        texto: 'O município de São Gonçalo/RJ aderiu ao Portal Nacional de NFS-e. Trata-se de um município de grande porte no estado do Rio de Janeiro, e a migração para o padrão nacional permite emissão padronizada com DPS, consulta e cancelamento via evento.',
      },
      {
        icon: '🏙️',
        destaque: 'Chapecó/SC adere ao Portal Nacional',
        texto: 'O município de Chapecó/SC aderiu ao Portal Nacional de NFS-e. Chapecó é um dos maiores municípios de Santa Catarina e agora suas notas de serviço são emitidas pelo padrão nacional, com todas as operações padronizadas disponíveis.',
      },
      {
        icon: '�️',
        destaque: 'Nova Serrana/MG adere ao Portal Nacional',
        texto: 'O município de Nova Serrana/MG aderiu ao Portal Nacional de NFS-e. A cidade, conhecida como polo calçadista, agora emite NFS-e pelo padrão nacional com suporte completo a emissão, consulta e cancelamento.',
      },
      {
        icon: '🔧',
        destaque: 'Assão e consulta automática por DPS',
        texto: 'O timeout de comunicação com o Portal Nacional foi ajustado para 30 segundos (antes era menor). Além disso, caso a emissão retorne erro de timeout, o sistema agora faz consulta automática por DPS para verificar se a nota foi processada mesmo assim. Isso evita duplicidade de notas e reduz notas presas em "em emissão".',
      },
      {
        icon: '🏙️',
        destaque: 'Gilbués/PI ativado no provedor Fiorilli',
        texto: 'O m foi ativado no provedor Fiorilli. A prefeitura utiliza o sistema Fiorilli para emissão de NFS-e, e agora o município está configurado corretamente no gateway com URLs, operações e configurações do provedor.',
      },
      {
        icon: '🏙️',
        destaque: 'Florânia/RN migra para NfseNacionalV2',
       como substituição de nota e consulta por DPS.',
      },
      {
        icon: '�️',
        destaque: 'Duartina/SP migra para NfseNacionalV2',
        texto: 'O município de Duartina/SP foi atualizado para o provedor NfseNacionalV2. A migração garante compatibilidade com a versão mais recente do Portal Nacional, com suporte a substituição de notas e operações padronizadas.',
      },
      {
        icon: '🏙️',
        destaque: 'Colorado/RS ativado no provedor CittaV2',
        texto:lorado/RS foi ativado no provedor CittaV2. A prefeitura utiliza o sistema Citta para NFS-e, e o município agora pode emitir, consultar e cancelar notas pelo gateway.',
      },
      {
        icon: '🔧',
        destaque: 'Adiciona gerarNfseHomologacao para validação em ambiente de teste',
        texto: 'Foi adicionada a operação gerarNfseHomologacao querar documento fiscal real.',
      },
      {
        icon: '🔧',
        destaque: 'Adiciona mensagem de erro em consulta por RPS',
        texto: 'Quando a consulta por RPS falha (nota não encontrada ou erro de comunicação), o sistema agora retorna uma mensagem de erro descritiva ao invés de falhar silenciosamente. Isso melhora a experiência do integrador ao depurar problemas de sincronização.',
      },
      {
        icon: '🏙️',
        a',
        texto: 'O município de São José do Egito/PE foi ativado no provedor ElmarInformatica. A prefeitura utiliza o sistema Elmar para emissão de NFS-e, e agora o município está configurado no gateway com suporte a emissão, consulta e cancelamento.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento para não retornar erro de XML em cenários específicos',
        adicionado detecta esses falsos positivos e não repassa o erro ao cliente, evitando confusão e retentativas desnecessárias.',
      },
      {
        icon: '🔧',
        destaque: 'Validação para impedir cancelamento de NFS-e após 10 dias em Dourados/MS',
        texto: 'O município de Dourados/MS não permite cancelamento de NFS-e após 10 dias da emissão. Foi adicionada validação no gateway que verifica a data de emissão antes de tentar o cancelamento, retornando erro claro ao cliente ao invés de deixar a prefeitura rejeitar. Melhora a experiência do usuário com feedback imediato.',
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
];
