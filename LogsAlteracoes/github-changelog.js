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
    titulo: 'Sábado — 24 de Maio',
    data: '24/05/2026',
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
    tag: '23/05/2026',
    titulo: 'Sexta-feira — 23 de Maio',
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
    titulo: 'Quinta-feira — 22 de Maio',
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
          'Robustecido o tratamento do retorno HTTP 204 do provedor ADN (EtheriumTech). O XML agora é pré-processado e sanitizado antes da desserialização, mensagens de erro são analisadas e mapeadas corretamente, e a lógica que determina se um lote foi processado com erro foi reforçada com checagens null-safe para evitar NullReferenceException.',
      },
      {
        icon: '🔧',
        destaque: 'Retorno de respostas HTTP 422 em XML no provedor GIFv2',
        texto:
          'O provedor GIFv2 foi ajustado para tratar respostas HTTP 422 (Unprocessable Entity) como XML válido ao invés de lançar exceção. Quando a prefeitura retorna 422 com detalhes do erro no corpo da resposta, o sistema agora normaliza o JSON e extrai a mensagem de erro para exibir ao cliente.',
      },
      {
        icon: '🔧',
        destaque: 'Retorno de chave de acesso ADN no provedor IPM',
        texto:
          'Adicionado suporte ao retorno da chave de acesso ADN (Acesso de Dados Nacional) no provedor IPM. A propriedade ChaveAcessoNFSeNacional foi mapeada no XML de resposta e agora é extraída e preenchida em DadosPrefeitura.ChaveAcesso, permitindo consultas futuras pela chave nacional.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de URL de Grajaú/MA',
        texto:
          'O endpoint de recepção de lote de Grajaú/MA foi atualizado para o novo domínio SpeedGov (speedgov.com.br/wsgru/Nfes). A prefeitura migrou de provedor e o endereço anterior deixou de responder, causando falhas de emissão.',
      },
      {
        icon: '🏙️',
        destaque: 'Santa Maria de Itabira/MG migrada para BethaV3',
        texto:
          'O município de Santa Maria de Itabira/MG foi migrado para o provedor BethaV3. A prefeitura trocou de sistema de NFS-e e as configurações foram atualizadas para o novo provedor, incluindo URLs e namespace.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de URL e alíquota de Cabo Frio/RJ',
        texto:
          'A URL de produção de Cabo Frio/RJ foi atualizada e a lógica de alíquota foi ajustada. Quando ISS não é retido na fonte, ValorIss e Aliquota agora são anulados somente se a empresa possui RegimeEspecialTributacao diferente de "0". Isso corrige cenários onde a alíquota era zerada indevidamente para empresas sem regime especial.',
      },
    ],
  },
  {
    tag: '20/05/2026',
    titulo: 'Terça-feira — 20 de Maio',
    data: '20/05/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Botão sincronizar NF-e — novo endpoint',
        texto:
          'Implementado novo endpoint para ser usado pelo botão de sincronizar NF-e no painel. O endpoint permite que o usuário force a sincronização de uma nota específica quando ela está travada em status intermediário, sem precisar aguardar o ciclo automático de reprocessamento.',
      },
      {
        icon: '🔧',
        destaque: 'Fix: serialização XML em provedores ABRASF v2',
        texto:
          'Corrigido problema de serialização XML em provedores que utilizam o padrão ABRASF v2. Em determinados cenários, o XML gerado continha estrutura inválida que causava rejeição pelo webservice da prefeitura. A correção garante que a serialização respeite o schema ABRASF v2 em todos os casos.',
      },
      {
        icon: '📊',
        destaque: 'Inclusão de empresaID na lista de envio de alíquota',
        texto:
          'Uma empresa foi incluída na lista de empresas que enviam alíquota IBS/CBS. Sem essa inclusão, a empresa não conseguia emitir notas em municípios que exigem o envio dos novos tributos da reforma tributária, recebendo rejeição por campos obrigatórios ausentes.',
      },
      {
        icon: '🏙️',
        destaque:
          'Carpina/PE — ajuste de série RPS e alíquota ISS para Simples',
        texto:
          'Ajustada a série do RPS e zerada a alíquota de ISS para empresas do Simples Nacional em Carpina/PE (provedor HM2). A prefeitura exige série numérica entre 1 e 49.999 e não aceita alíquota de ISS para optantes do Simples. Também aplicado para Arapiranga/PE que tem a mesma regra.',
      },
      {
        icon: '📊',
        destaque: 'Ajuste no envio do código NBS — somente números',
        texto:
          'O campo codigoNBS agora é sanitizado para conter somente caracteres numéricos antes do envio. Alguns integradores enviavam o NBS com pontos ou traços (ex: "1.01.01"), causando rejeição no Portal Nacional que aceita apenas o formato numérico puro.',
      },
      {
        icon: '🧮',
        destaque: 'Ajuste no envio do tipo de retenção — privilegiar o retido',
        texto:
          'A lógica de envio do tipo de retenção foi ajustada para privilegiar o valor "retido" quando há ambiguidade. Em cenários onde tanto o PIS quanto o COFINS possuem valores informados, o sistema agora prioriza o tipo de retenção que indica retenção efetiva, evitando que o valor líquido seja calculado incorretamente.',
      },
      {
        icon: '🏙️',
        destaque: 'Santa Inês/MA — versão ABRASF 2.02 e ajuste de NBS',
        texto:
          'O município de Santa Inês/MA foi atualizado para a versão ABRASF 2.02. A data de emissão do RPS e o código NBS agora são tratados de forma específica para esse município, com reposicionamento do nó CodigoNbs no XML para ficar após MunicipioIncidencia, conforme exigido pelo webservice local.',
      },
      {
        icon: '📊',
        destaque:
          'Portal Nacional: exceção de NBS para empresa do Simples (Arte Midas)',
        texto:
          'Uma nova subscription foi adicionada à lista SubscriptionsSempreEnviarNBS no Portal Nacional. A empresa precisava enviar o código NBS mesmo sendo optante do Simples Nacional, pois sua atividade exige o código para processamento correto pela Receita Federal.',
      },
      {
        icon: '🔧',
        destaque: 'Correção no envio do ValorInss',
        texto:
          'Corrigido o envio do campo ValorInss que em determinados cenários era preenchido com valor incorreto. O campo agora é calculado corretamente considerando a base de cálculo e a alíquota informada, evitando divergências entre o valor retido e o valor declarado na nota.',
      },
      {
        icon: '🔧',
        destaque:
          'Código de serviço nacional com desdobramento municipal (ISSIntel)',
        texto:
          'Implementado suporte ao envio do código de serviço nacional com desdobramento municipal no provedor ISSIntel. O novo método FormatarCodigoServicoNacionalCodigoTributacaoMunicipio sanitiza o input, valida tamanho (máximo 9 caracteres) e numericidade, e popula os campos CodigoServicoNacional e CodigoTributacaoMunicipio corretamente.',
      },
      {
        icon: '🔧',
        destaque: 'Sincronia do provedor GIF — remoção de namespace duplicado',
        texto:
          'Corrigida a sincronização do provedor GIF removendo uma declaração de namespace duplicada na resposta XML do webservice. O namespace "xmlns:ns2" aparecia duas vezes no XML retornado, causando erro de desserialização na consulta por RPS. A sanitização remove a duplicata antes do processamento.',
      },
    ],
  },
  {
    tag: '19/05/2026',
    titulo: 'Segunda-feira — 19 de Maio',
    data: '19/05/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Cenário de extração de lote no SIGISS v1',
        texto:
          'Adicionado novo cenário de extração de lote no provedor SIGISS v1. A lógica de leitura de erros foi reestruturada para tentar extrair o número da NF-e a partir de mensagens alternativas (DescricaoErro e DescricaoProcesso), com regex de fallback para padrões como "Id_sis_legado" e "Processo finalizado". Isso resolve casos onde notas ficavam travadas sem número.',
      },
      {
        icon: '🔗',
        destaque: 'URL de São Gabriel do Oeste/MS atualizada (Fiorilli)',
        texto:
          'A URL do webservice de São Gabriel do Oeste/MS foi atualizada para o novo endereço do provedor Fiorilli. A prefeitura migrou o domínio do serviço e o endereço anterior deixou de responder, causando falhas de emissão e consulta.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de XML declaration duplicado no provedor Freire',
        texto:
          'Corrigido erro de desserialização no provedor Freire causado por declaração XML duplicada dentro da tag ListaNfse. O webservice retornava um segundo "<?xml version=..." dentro do corpo da resposta, impedindo o parse correto. A sanitização remove a declaração duplicada antes da desserialização.',
      },
      {
        icon: '🔗',
        destaque:
          'Vinhedo/SP — endpoints atualizados para novo domínio Balker (GIAPv2)',
        texto:
          'Os endpoints de Vinhedo/SP no provedor GIAPv2 foram atualizados para o novo domínio Balker. A prefeitura migrou o sistema de NFS-e para um novo fornecedor e os endereços antigos foram desativados.',
      },
      {
        icon: '🧮',
        destaque:
          'PIS/COFINS apuração própria na NFSe Nacional (integração alternativa)',
        texto:
          'Implementada a apuração própria de PIS/COFINS na emissão de NFSe Nacional para a integração alternativa. O novo fluxo calcula vPisProprio/vCofinsProprio, deriva alíquotas com arredondamento, normaliza CST e calcula vRetCSLL. Corrige o cálculo incorreto do valor líquido que ocorria quando a empresa tinha apuração própria mas os valores não eram computados.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de endpoint de Nova Resende/MG',
        texto:
          'O endpoint do webservice de Nova Resende/MG foi atualizado para o novo endereço da prefeitura. A URL anterior foi desativada, causando falhas de conexão na emissão e consulta de NFS-e.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento de num_rps nulo na desserialização (SIGISS v1)',
        texto:
          'Corrigido erro de desserialização no provedor SIGISS v1 quando o campo num_rps vem nulo (xsi:nil="true") na resposta da consulta de lote. O sistema agora substitui a tag nula pelo valor padrão 0 antes de desserializar, evitando exceção que travava o processamento do lote.',
      },
      {
        icon: '🏙️',
        destaque: 'Itacoatiara/AM migrada para BethaV3',
        texto:
          'O município de Itacoatiara/AM foi migrado para o provedor BethaV3. A prefeitura trocou de sistema de NFS-e e as URLs, namespace e configurações foram atualizadas para o novo provedor.',
      },
      {
        icon: '🔧',
        destaque: 'Atualização de CNPJ no ConfigurarCertificadoTesteCommand',
        texto:
          'Atualizado o CNPJ utilizado no comando de configuração de certificado de teste. O CNPJ anterior havia expirado ou sido desativado, impedindo a execução de testes automatizados que dependem de certificado digital válido.',
      },
      {
        icon: '🏙️',
        destaque: 'Barra do Choça/BA ativada no provedor EeLv3',
        texto:
          'O município de Barra do Choça/BA foi ativado no provedor EeLv3. As URLs de produção e homologação foram configuradas no ConfiguracoesMunicipios.xml, habilitando a emissão de NFS-e para empresas prestadoras de serviço nesse município.',
      },
      {
        icon: '🏙️',
        destaque: 'Piedade/SP atualizada para GissOnline',
        texto:
          'O município de Piedade/SP foi migrado para o provedor GissOnline e adicionado à lista NaoObrigaNBS. Isso significa que notas emitidas em Piedade não precisam informar código NBS válido, pois a prefeitura não exige esse campo na recepção de lotes RPS.',
      },
      {
        icon: '📊',
        destaque:
          'Portal Nacional: Nibo na exceção de NBS para Simples Nacional',
        texto:
          'A subscription da Nibo foi adicionada à lista de exceções para envio de NBS em empresas do Simples Nacional no Portal Nacional. Isso garante que notas emitidas pela Nibo sempre incluam o código NBS, requisito específico para a atividade dessa empresa.',
      },
      {
        icon: '📊',
        destaque: 'Envio de IBS/CBS para subscription da Sankhya',
        texto:
          'Liberado o envio do código IBS/CBS para a subscription da Sankhya. A empresa precisava enviar os novos tributos da reforma tributária mas estava bloqueada pela regra que restringe o envio apenas a subscriptions autorizadas.',
      },
      {
        icon: '🔧',
        destaque: 'Emissão sem assinatura digital para provedor específico',
        texto:
          'Adicionado tratamento para permitir emissão sem assinatura digital do XML em provedor que utiliza apenas usuário e senha para autenticação. O certificado digital não é usado na comunicação com o webservice, apenas credenciais de acesso, tornando a assinatura do XML opcional.',
      },
      {
        icon: '🆕',
        destaque: 'Consulta por RPS implementada no CoplanV2',
        texto:
          'Implementada a operação de consulta de NFS-e por RPS (DPS) no provedor CoplanV2. A nova operação permite verificar se uma nota específica foi processada pela prefeitura usando o identificador do RPS. Inclui tratamento de certificado, proxy, validação de chave/XML e desserialização da resposta JSON.',
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
        destaque: 'Retirada de apikey dos testes e consulta de lote',
        texto:
          'Removida a apikey hardcoded dos testes unitários por questões de segurança. Também foi ajustado o campo ultima_nota na consulta de lote para retornar a nota consultada (valor 0) ao invés da última nota (valor 1), corrigindo cenários onde a consulta retornava uma nota diferente da solicitada.',
      },
      {
        icon: '🔧',
        destaque: 'Reenvio de lote quando tipo de dedução não permitido',
        texto:
          'Adicionada lógica para reenviar o lote automaticamente quando o tipo de dedução utilizado não é permitido pelo município de incidência. Antes, a nota ficava travada com erro sem possibilidade de recuperação automática. Agora o sistema tenta reenviar com o tipo de dedução correto para o município.',
      },
      {
        icon: '🧮',
        destaque: 'Soma PIS/COFINS/CSLL retidos na tag ValorCsll (São Paulo)',
        texto:
          'Ajustado o cálculo e mapeamento de retenções de PIS, COFINS e CSLL para o provedor de São Paulo. Os valores retidos agora são somados na tag ValorCsll conforme exigido pelo webservice paulistano, e o tipo de retenção (tpRet) é enviado corretamente com base nos valores informados.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de emojis das descrições de serviço (Hotmart)',
        texto:
          'Removidos emojis que estavam presentes nas descrições de serviço da Hotmart. Alguns provedores rejeitam caracteres Unicode especiais (emojis) no campo de descrição do serviço, causando erro de emissão. A sanitização garante compatibilidade com todos os webservices.',
      },
      {
        icon: '🏙️',
        destaque: 'Palma Sola/SC migrada para IPMv2',
        texto:
          'O município de Palma Sola/SC foi migrado para o provedor IPMv2. A prefeitura atualizou seu sistema de NFS-e e as configurações foram ajustadas para o novo provedor.',
      },
      {
        icon: '🔧',
        destaque:
          'Correção da DescricaoOriginal dos serviços municipais de Barueri',
        texto:
          'Corrigido o campo DescricaoOriginal dos serviços municipais de Barueri que estava sendo preenchido incorretamente. O campo agora reflete a descrição original cadastrada na prefeitura, evitando divergências entre o que é exibido no painel e o que é enviado no XML da nota.',
      },
      {
        icon: '🏙️',
        destaque:
          'Santana do Ipanema/AL, São Sebastião da Amoreira/PR, Caconde/SP e Riachão do Jacuípe/BA no Portal Nacional',
        texto:
          'Quatro municípios aderiram ao Portal Nacional de NFS-e: Santana do Ipanema/AL, São Sebastião da Amoreira/PR, Caconde/SP e Riachão do Jacuípe/BA. As configurações foram adicionadas ao ConfiguracoesMunicipios.xml com o provedor NfseNacional, permitindo emissão de NFS-e pelo portal unificado.',
      },
      {
        icon: '⚙️',
        destaque: '[Dashboard] TraceEvent para alterações de ApiKey',
        texto:
          'Adicionado TraceEvent no dashboard para registrar alterações de ApiKey realizadas pelos usuários. Isso permite auditoria e rastreabilidade quando uma empresa tem sua chave de API modificada, facilitando investigação de problemas de autenticação.',
      },
      {
        icon: '🔧',
        destaque:
          'ValidationException para CodigoServicoMunicipio incorreto (NotaJoseenseV2)',
        texto:
          'Ajustada a validação do campo Código CNAE no provedor NotaJoseenseV2 para exigir entre 7 e 9 dígitos. Antes, valores com até 6 dígitos eram aceitos e causavam rejeição na prefeitura. Agora o sistema valida antes do envio e retorna ValidationException com mensagem clara ao integrador.',
      },
      {
        icon: '🔧',
        destaque: 'Mapeamento do Error3450 no GIFv2',
        texto:
          'O erro Error3450 do provedor GIFv2 foi adicionado à lista de erros tratados sem exceção, junto com E999, RNG9999 e E0014. Quando a prefeitura retorna esse código, o sistema agora normaliza o JSON e extrai a mensagem de erro para exibir ao cliente, ao invés de lançar exceção de comunicação.',
      },
      {
        icon: '📊',
        destaque: 'Alíquota IBS/CBS para empresas do Simples em Ilhabela/SP',
        texto:
          'Adicionado suporte ao envio de alíquotas IBS/CBS para empresas optantes do Simples Nacional em Ilhabela/SP. A lógica de cálculo no método CriarIIBrasilValoresServico foi ajustada para incluir os novos tributos da reforma tributária quando a empresa é do Simples e está emitindo em Ilhabela.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento no nome do tomador',
        texto:
          'Adicionado tratamento de sanitização no nome do tomador antes do envio à prefeitura. Caracteres especiais e formatação inválida no nome causavam rejeição em provedores que validam estritamente os dados do tomador.',
      },
      {
        icon: '📊',
        destaque: 'Inclusão de empresaID na lista de envio de alíquota',
        texto:
          'Uma empresa foi incluída na lista de empresas que enviam alíquota IBS/CBS. A empresa precisava enviar os novos tributos da reforma tributária mas estava bloqueada pela regra de whitelist que restringe o envio a subscriptions autorizadas.',
      },
      {
        icon: '🏙️',
        destaque: 'Ibaté/SP aderiu ao Portal Nacional',
        texto:
          'O município de Ibaté/SP aderiu ao Portal Nacional de NFS-e. As configurações foram adicionadas ao ConfiguracoesMunicipios.xml com o provedor NfseNacional, permitindo que empresas em Ibaté emitam NFS-e pelo portal unificado da Receita Federal.',
      },
      {
        icon: '🔧',
        destaque:
          'Regra de Substituição Tributária independente do município (EGoverneISS)',
        texto:
          'Ajustada a regra de ativação da Substituição Tributária no provedor EGoverneISS. A validação que exigia que o município da prestação coincidisse com o do prestador foi removida. Agora a substituição é ativada apenas com base no CNPJ do tomador (pessoa jurídica), independente do município, corrigindo cenários de prestação interestadual.',
      },
      {
        icon: '🔧',
        destaque: 'Validação na consulta do lote (BethaV3)',
        texto:
          'Adicionada validação de integridade na consulta de lote do provedor BethaV3. Após extrair o XML da nota, o sistema agora verifica se a chaveAcesso retornada corresponde à esperada. Se divergir, o lote é marcado como "ainda não processado" ao invés de aceitar uma nota incorreta, evitando vinculação errada.',
      },
      {
        icon: '🧮',
        destaque: 'Campos da reforma tributária no provedor Ginfes',
        texto:
          'Adicionado suporte completo aos campos da Reforma Tributária do Consumo (RTC) no provedor GINFES. Foram criados mais de 15 novos modelos (InfoTributacao, TribFederal, TribTotal, RTCInfoIBSCBS, etc.) e implementada a classe GINFESRecepcionarLoteNFeV2 que estende o provedor para suportar os novos campos tributários exigidos pela legislação.',
      },
    ],
  },
  {
    tag: '17/05/2026',
    titulo: 'Sábado — 17 de Maio',
    data: '17/05/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Restauração de encoding e testes de exportação (Barueri)',
        texto:
          'Restaurado o encoding original do arquivo BarueriProvedorNFeTest e readicionados os testes de exportação que haviam sido removidos acidentalmente em commit anterior. Os testes validam o fluxo de exportação de notas para o exterior no provedor Barueri.',
      },
      {
        icon: '🌐',
        destaque: 'Lógica de Exportação Exterior e cobertura de testes',
        texto:
          'Adicionada lógica de exportação para o exterior no provedor Barueri, incluindo o preenchimento do campo PaisPrestacaoServico com o país do tomador quando a prestação é para o exterior. Também foi ampliada a cobertura de testes unitários para validar os cenários de exportação internacional.',
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
          'Mapeamento do erro E0014 no GIFv2 e mensagem de RPS já informado',
        texto:
          'O erro E0014 do provedor GIFv2 foi mapeado como caso não-bloqueante, tratado junto com E999 e RNG9999 para não gerar exceção de comunicação. Também foi normalizada a mensagem "Nota fiscal já foi emitida" para "RPS já foi emitido", tornando mais claro para o cliente que o RPS já foi processado anteriormente.',
      },
      {
        icon: '🔧',
        destaque:
          'Mensagem de tratamento para emissão em homologação (NotaControl)',
        texto:
          'Adicionada mensagem de tratamento quando a emissão é tentada em ambiente de homologação no provedor NotaControl (integração ABRASF). As URLs de homologação foram desativadas pela prefeitura e o sistema agora retorna mensagem explicativa ao invés de erro genérico de conexão.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de URL de Heliodora/MG',
        texto:
          'A URL do webservice de Heliodora/MG foi atualizada para o novo endereço da prefeitura. O domínio anterior foi desativado, causando falhas de conexão na emissão de NFS-e.',
      },
      {
        icon: '🧮',
        destaque:
          'Valor default em TpRetPisCofins e SituacaoTributaria (ISSIntel)',
        texto:
          'Adicionados valores padrão para TpRetPisCofins ("0") e SituacaoTributaria ("00") no provedor ISSIntel. Notas sem PIS e COFINS agora possuem valores válidos nesses campos, evitando rejeição em prefeituras que exigem os campos preenchidos mesmo quando zerados.',
      },
      {
        icon: '🧮',
        destaque: 'Ajuste no envio de impostos retidos (Publica)',
        texto:
          'Refatorado o cálculo e envio dos impostos federais retidos no provedor Publica. A implementação local foi substituída pelo helper compartilhado NfeServicoCalculoHelper.RetornarTpRetPisCofinsCsll, removendo código duplicado. O CST PIS/COFINS agora é normalizado (apenas numérico) e valores inválidos são convertidos para null.',
      },
      {
        icon: '🏙️',
        destaque: 'Raposos/MG migrada para BethaV3',
        texto:
          'O município de Raposos/MG foi migrado para o provedor BethaV3. A prefeitura atualizou seu sistema de NFS-e e as configurações foram ajustadas para o novo provedor.',
      },
      {
        icon: '🔧',
        destaque: 'Regra de incidência para considerar município do prestador',
        texto:
          'Uma empresa foi incluída na regra de incidência que considera o município do prestador ao invés do município de prestação do serviço. Isso corrige cenários onde o ISS era calculado com a alíquota do município errado para essa empresa específica.',
      },
      {
        icon: '🔧',
        destaque: 'Atualização da consulta por RPS',
        texto:
          'Atualizada a lógica de consulta por RPS para tratar corretamente cenários onde a resposta da prefeitura vem em formato diferente do esperado. A consulta agora é mais resiliente a variações no XML de retorno.',
      },
      {
        icon: '🧮',
        destaque: 'CST 00 quando apuração própria zerada',
        texto:
          'Quando a apuração própria de PIS/COFINS resulta em valores zerados, o sistema agora envia CST 00 (tributação normal) ao invés de omitir o campo. Prefeituras que validam a presença do CST rejeitavam notas sem esse campo, mesmo quando os valores eram zero.',
      },
      {
        icon: '🔧',
        destaque:
          'Empresa da Pacto Soluções na regra de emissão unitária por lote',
        texto:
          'Uma empresa foi incluída na regra de emissão unitária (1 nota por lote). A emissão em lote causava problemas de processamento para essa empresa específica, e o envio individual resolve os timeouts e rejeições que ocorriam.',
      },
      {
        icon: '📊',
        destaque: 'Alíquota IBS/CBS para empresa específica em Limeira/SP',
        texto:
          'Implementado o envio de alíquota IBS e CBS para uma empresa específica em Limeira/SP. A empresa precisava enviar os novos tributos da reforma tributária mas o provedor IIBrasil só aceita esses campos para empresas autorizadas na whitelist.',
      },
      {
        icon: '🏙️',
        destaque: 'Rio Doce/MG migrada para provedor Futurize',
        texto:
          'O município de Rio Doce/MG foi migrado para o provedor Futurize. A prefeitura trocou de sistema de NFS-e e as configurações foram atualizadas no ConfiguracoesMunicipios.xml.',
      },
      {
        icon: '🌐',
        destaque: 'Barueri: PaisPrestacaoServico com país do tomador exterior',
        texto:
          'Corrigido o preenchimento do campo PaisPrestacaoServico no provedor Barueri para usar o país do tomador quando a prestação é para o exterior. Antes o campo ficava vazio em notas internacionais, causando rejeição pela prefeitura de Barueri que exige esse dado para exportação de serviços.',
      },
    ],
  },
];
