var changelogData = [
  {
    tag: '20/04/2026',
    titulo: 'Segunda-feira — 20 de Abril',
    data: '20/04/2026',
    itens: [
      {
        icon: '🌐',
        destaque:
          'NfseNacionalV2 — local de prestação fixado apenas para tomador do exterior',
        texto:
          'O provedor NfseNacionalV2 tinha uma lógica de resolução do local de prestação de serviço (ResolverLocalPrestacaoServicoFixada) que era aplicada para todas as notas, independente do tomador ser nacional ou estrangeiro. Isso causava sobrescrita indevida do código IBGE e nome da cidade de prestação em notas nacionais. A correção move a validação para o ProvedorNFeServicoBase, garantindo que o local de prestação fixado via metadados da empresa (codigoIbgeCidadePrestacaoServicoExterior / nomeCidadePrestacaoServicoExterior) só seja aplicado quando o tomador for efetivamente do exterior.',
      },
      {
        icon: '🔧',
        destaque:
          'Remoção do label self-hosted do runner no workflow de produção',
        texto:
          'O workflow de CI/CD de produção (.github/workflows/production.yaml) estava configurado com o label "self-hosted" no runner, o que restringia a execução a máquinas específicas. O label foi removido para permitir que o pipeline utilize runners disponíveis sem essa restrição, aumentando a flexibilidade e disponibilidade do processo de deploy.',
      },
    ],
  },
  {
    tag: '19/04/2026',
    titulo: 'Domingo — 19 de Abril',
    data: '19/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque:
          'Portal Nacional — validação de regimes especiais de tributação permitidos',
        texto:
          'O campo regEspTrib (regime especial de tributação) no XML do Portal Nacional de NFS-e estava sendo preenchido com qualquer valor numérico informado na nota, sem validar se o valor era aceito pelo schema. O Portal Nacional aceita apenas os valores 0, 1, 2, 3, 4, 5, 6 e 9. A correção foi aplicada tanto no FormatarXmlLoteNFeBase quanto no FormatarXmlLoteNFeV2Base, garantindo que apenas regimes válidos sejam enviados e evitando rejeições por valor inválido no campo.',
      },
    ],
  },
  {
    tag: '18/04/2026',
    titulo: 'Sábado — 18 de Abril',
    data: '18/04/2026',
    itens: [
      {
        icon: '�',
        destaque:
          'Salvador/BA — remoção do RecepcionarLoteNFev2 e validação do CodigoTributacaoMunicipio',
        texto:
          'O provedor de Salvador/BA passou por uma refatoração importante: a classe SalvadorRecepcionarLoteNFev2 foi completamente removida (323 linhas), consolidando a lógica na versão principal RecepcionarLoteNFe. Junto com isso, foi adicionada uma validação que exige que o CodigoTributacaoMunicipio tenha exatamente 7 dígitos — requisito da prefeitura de Salvador que, quando não atendido, causava rejeição na emissão. Os testes de integração foram atualizados para refletir as mudanças.',
      },
      {
        icon: '🔧',
        destaque: 'Desabilitação de emissão em lote para empresas específicas',
        texto:
          'A emissão em lote foi desabilitada para um conjunto de empresas (tickets #97962, #98006, #98193) que estavam enfrentando problemas ao enviar múltiplas notas simultaneamente. Nesses casos, a emissão em lote gerava duplicidades ou erros de processamento. A desabilitação força o envio individual de cada nota, garantindo maior controle e evitando duplicatas até que a causa raiz seja resolvida.',
      },
    ],
  },
  {
    tag: '17/04/2026',
    titulo: 'Sexta-feira — 17 de Abril',
    data: '17/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '16/04/2026',
    titulo: 'Quinta-feira — 16 de Abril',
    data: '16/04/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Morro Reuter/RS e código interno do contribuinte no GOVBRv3',
        texto:
          'O município de Morro Reuter/RS foi adicionado ao conjunto de códigos IBGE suportados pelo provedor GOVBRv3, permitindo a emissão de NFS-e na cidade. Além disso, o PR incluiu a implementação de fallback SHA1 para assinatura digital em modo debug e a alteração do parâmetro padrão "embutido" para true nas APIs de teste (EmpresaApi, NotaApi, ApiBase), facilitando os testes de integração com certificados digitais.',
      },
      {
        icon: '🔧',
        destaque:
          'Atualização de referências das GitHub Actions no workflow de produção',
        texto:
          'O workflow de CI/CD de produção (.github/workflows/production.yaml) estava apontando todas as referências de GitHub Actions para a branch @master. As referências foram atualizadas para @TICKET-153208 (clone, build, cleanup e deploy), garantindo que o pipeline de produção utilize as versões das actions compatíveis com as mudanças em andamento.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Dumont/SP no provedor Fiorilli',
        texto:
          'O município de Dumont/SP (código IBGE 3514601) foi ativado para emissão de NFS-e pelo provedor Fiorilli. A prefeitura foi incluída como exceção na lógica do Fiorilli para não utilizar ItemListaServico, e o ConfiguracoesMunicipios.xml foi atualizado com a tag NaoUsaAssinatura. Essas configurações específicas são necessárias porque Dumont/SP exige um comportamento diferente do padrão do provedor.',
      },
      {
        icon: '📊',
        destaque: 'Araraquara/SP — CNAE ativado para emissão',
        texto:
          'O município de Araraquara/SP teve a flag de CNAE alterada para true. Algumas prefeituras exigem que o código CNAE (Classificação Nacional de Atividades Econômicas) seja enviado na emissão de NFS-e ao invés do código de serviço padrão. Sem essa configuração, as notas eram rejeitadas por falta do CNAE obrigatório.',
      },
      {
        icon: '🔧',
        destaque:
          'Novas propriedades EhProvedorPortalNacional e AnexosSimplesNacional',
        texto:
          'Foram adicionadas duas novas propriedades às características dos provedores: EhProvedorPortalNacional (indica se o provedor opera via Portal Nacional de NFS-e) e AnexosSimplesNacional (define os anexos do Simples Nacional aplicáveis). A propriedade NomeProvedor foi removida da base. Os provedores FgMaiss, PrimaxOnline e eTransparencia foram configurados com os anexos do Simples Nacional específicos. Essas mudanças melhoram a precisão das informações tributárias por provedor.',
      },
    ],
  },
  {
    tag: '15/04/2026',
    titulo: 'Quarta-feira — 15 de Abril',
    data: '15/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'PDF da prefeitura substituindo PDF gerado pelo eNotas',
        texto:
          'Em alguns municípios, o PDF da NFS-e gerado pelo eNotas não correspondia exatamente ao formato oficial da prefeitura. Foi implementada a alteração para que o sistema utilize o PDF fornecido diretamente pela prefeitura ao invés do PDF gerado internamente, garantindo fidelidade ao documento oficial.',
      },
      {
        icon: '🔧',
        destaque:
          'Desativação do chat para subscriptions de clientes no Dashboard',
        texto:
          'O chat de suporte que aparecia no Dashboard para clientes com subscriptions ativas foi desativado. Essa mudança reduz a carga de atendimento e direciona os clientes para os canais de suporte adequados.',
      },
      {
        icon: '🔧',
        destaque: 'Histórico de alterações de metadados de empresa',
        texto:
          'Foi implementada uma nova funcionalidade que registra o histórico de alterações nos metadados das empresas (como razão social, endereço, regime tributário). Isso permite rastrear quando e o que foi alterado, facilitando a investigação de problemas e auditoria. Inclui o script SQL de criação da tabela e ajustes no changeset do Liquibase.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Jaguaribara/CE no provedor Aspect',
        texto:
          'O município de Jaguaribara/CE foi ativado para emissão de NFS-e pelo provedor Aspect. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no gateway.',
      },
      {
        icon: '🔧',
        destaque: 'Ajuste para usar API key sempre atualizada',
        texto:
          'O sistema estava utilizando uma API key em cache que podia ficar desatualizada quando o cliente renovava a chave. Foi implementado um ajuste para que a API key seja sempre buscada da fonte mais recente, evitando erros de autenticação com prefeituras.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Arroio do Sal/RS no provedor GOVBRv3',
        texto:
          'O município de Arroio do Sal/RS foi ativado para emissão de NFS-e pelo provedor GOVBRv3. A prefeitura passou a aceitar notas fiscais eletrônicas via integração.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Quitandinha/PR no provedor Equiplano',
        texto:
          'O município de Quitandinha/PR foi ativado para emissão de NFS-e pelo provedor Equiplano. A configuração permite que empresas da cidade emitam notas fiscais de serviço eletronicamente.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Jacundá/PA no provedor Aspect',
        texto:
          'O município de Jacundá/PA foi ativado para emissão de NFS-e pelo provedor Aspect. A prefeitura aderiu ao sistema eletrônico e a integração foi configurada.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Minas Novas/MG no provedor Síntese',
        texto:
          'O município de Minas Novas/MG foi ativado para emissão de NFS-e pelo provedor Síntese. A prefeitura passou a aceitar notas fiscais eletrônicas via integração com o eNotas.',
      },
      {
        icon: '📊',
        destaque:
          'Remoção de Jarinu/SP da flag SempreEnviaAliquotaIssEmpresasSimplesNacional',
        texto:
          'O município de Jarinu/SP foi removido da lista de cidades que sempre enviam alíquota de ISS para empresas do Simples Nacional. A flag estava causando envio desnecessário da alíquota, gerando rejeições em determinados cenários. Com a remoção, o provedor segue o comportamento padrão.',
      },
      {
        icon: '🔧',
        destaque: 'Correção na data recebida no XML',
        texto:
          'A data retornada no XML de resposta de algumas prefeituras estava sendo interpretada incorretamente, causando divergência entre a data real da nota e a data registrada no sistema. O parsing foi corrigido para tratar corretamente os diferentes formatos de data retornados pelos provedores.',
      },
      {
        icon: '🔧',
        destaque:
          'Remoção de cidades duplicadas e normalização do nome do tomador',
        texto:
          'Em alguns cenários, o nome da cidade do tomador aparecia duplicado ou com formatação inconsistente no XML enviado à prefeitura. Foi implementada a remoção de duplicatas e a normalização do nome da cidade, evitando rejeições por dados inválidos.',
      },
      {
        icon: '🌐',
        destaque:
          'Correção para não travar a fila quando tomador é do exterior',
        texto:
          'Quando uma nota era emitida para tomador do exterior, em determinados provedores a fila de processamento travava por falta de tratamento adequado dos dados do tomador estrangeiro. O ajuste garante que a fila continue processando normalmente mesmo quando o tomador é internacional.',
      },
      {
        icon: '🔧',
        destaque: 'Fallback para consulta por RPS no provedor',
        texto:
          'Foi implementado um mecanismo de fallback para a consulta de nota por RPS em um provedor. Quando a consulta principal falha ou retorna vazio, o sistema agora tenta uma consulta alternativa, reduzindo os casos de notas que ficam presas no status "em emissão".',
      },
      {
        icon: '🏙️',
        destaque: 'Centi: integração de Brazabrantes/GO',
        texto:
          'O município de Brazabrantes/GO foi integrado ao provedor Centi. A prefeitura utiliza o sistema Centi para NFS-e e a configuração foi adicionada ao gateway para permitir emissão.',
      },
      {
        icon: '🔄',
        destaque: 'Itamaraju/BA migrado para WebISSv2',
        texto:
          'O município de Itamaraju/BA teve seu provedor atualizado para WebISSv2. A prefeitura migrou de sistema e as configurações foram ajustadas para garantir continuidade na emissão de notas.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Lagoa Nova/RN no provedor TributosV2',
        texto:
          'O município de Lagoa Nova/RN foi ativado para emissão de NFS-e pelo provedor TributosV2. A prefeitura aderiu ao sistema eletrônico de notas fiscais.',
      },
      {
        icon: '🔧',
        destaque:
          'Inclusão de Moema/MG na lista de municípios que usam cIntContrib',
        texto:
          'O município de Moema/MG foi incluído na lista de municípios que utilizam o campo cIntContrib (código de integração do contribuinte). Esse campo é exigido por algumas prefeituras para identificar o prestador no sistema municipal, e sua ausência causava rejeição na emissão.',
      },
      {
        icon: '🏙️',
        destaque:
          'Ativação de Euclides da Cunha Paulista/SP no provedor GOVBRv3',
        texto:
          'O município de Euclides da Cunha Paulista/SP foi ativado para emissão de NFS-e pelo provedor GOVBRv3. A prefeitura passou a aceitar notas fiscais eletrônicas via integração.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de validação temporária resolvida',
        texto:
          'Uma validação temporária havia sido adicionada para contornar um problema específico em um provedor. Como o problema original foi resolvido pela prefeitura, a validação foi removida para evitar bloqueios desnecessários na emissão.',
      },
      {
        icon: '🔄',
        destaque: 'Miracema do Tocantins voltou para o provedor Arrecadanet',
        texto:
          'O município de Miracema do Tocantins/TO foi revertido para o provedor Arrecadanet. A migração anterior para outro provedor apresentou problemas de compatibilidade, e o retorno ao Arrecadanet restaura a emissão normal de NFS-e.',
      },
      {
        icon: '🔧',
        destaque: 'Criação de ID e chave Sefaz Paraná para homologação',
        texto:
          'Foram criados e adicionados o ID e a chave de acesso da Sefaz do Paraná para o ambiente de homologação. Essa configuração é necessária para testes de emissão de NF-e no estado antes de ir para produção.',
      },
    ],
  },
  {
    tag: '14/04/2026',
    titulo: 'Terça-feira — 14 de Abril',
    data: '14/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'NFeServico — campos de endereço e RegimeEspecialTributacao',
        texto:
          'O serviço de NF-e de Serviço (NFeServico) foi complementado com campos de endereço que estavam faltando e agora permite informar o RegimeEspecialTributacao diretamente na nota. Antes, esses campos eram ignorados ou preenchidos com valores padrão, o que causava inconsistências em municípios que exigem essas informações.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de propriedades desnecessárias',
        texto:
          'Foram removidas propriedades que não eram mais utilizadas no código, reduzindo a complexidade e evitando confusão na manutenção. A limpeza garante que apenas campos relevantes sejam processados durante a emissão.',
      },
    ],
  },
  {
    tag: '13/04/2026',
    titulo: 'Segunda-feira — 13 de Abril',
    data: '13/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque:
          'Ajustes no layout 4.2 de Barueri — impostos, endereço e exportação',
        texto:
          'Foram realizados vários ajustes no layout 4.2 de Barueri/SP: correção no cálculo de total de impostos retidos para não considerar PIS/COFINS não retidos, preenchimento do endereço completo do local de prestação com valores padrão, ajuste no preenchimento de exportação, remoção de caracteres não numéricos do CEP, e remoção de condição desnecessária na consulta por código IBGE. Também foi corrigida a validação do percentual aproximado do Simples Nacional para verificar se é maior que zero.',
      },
      {
        icon: '🔧',
        destaque:
          'Controle de envio de ValorIss via propriedade naoEnviarValorIss',
        texto:
          'Foi implementada uma nova propriedade naoEnviarValorIss que permite controlar se o valor do ISS deve ser enviado ou não na nota. Algumas prefeituras rejeitam a nota quando o ValorIss é informado em determinados cenários (como Simples Nacional). Agora é possível configurar por município/empresa se o campo deve ser omitido.',
      },
      {
        icon: '🆕',
        destaque: 'Cancelamento adicionado ao provedor',
        texto:
          'Foi implementada a operação de cancelamento de NFS-e em um provedor que anteriormente não suportava essa funcionalidade. Agora os clientes podem cancelar notas emitidas diretamente pelo eNotas, sem precisar acessar o portal da prefeitura manualmente.',
      },
      {
        icon: '🔧',
        destaque: 'Consulta de nota com texto "não está ativo ou não existe"',
        texto:
          'Foi incluído o tratamento para o texto de retorno "não está ativo ou não existe" na consulta de notas. Quando a prefeitura retorna essa mensagem, o sistema agora interpreta corretamente como nota não encontrada ao invés de tratar como erro genérico, melhorando o fluxo de sincronização.',
      },
      {
        icon: '🔧',
        destaque: 'PortalNacional — validação de endereço do evento',
        texto:
          'No Portal Nacional, a validação do endereço do evento estava sendo aplicada mesmo quando o campo idAtvEvt não era informado, causando erros desnecessários. Agora a validação só ocorre quando o identificador da atividade do evento é fornecido.',
      },
      {
        icon: '🔧',
        destaque: 'Configuração EmpresaEnviaConsumidorFinalFalse',
        texto:
          'Foi adicionada uma configuração específica para empresa que impede o envio do campo ConsumidorFinal como true. Algumas prefeituras rejeitam notas quando esse campo é enviado incorretamente, e a configuração permite controlar esse comportamento por empresa.',
      },
      {
        icon: '📊',
        destaque:
          'Regra de alíquota e tipo de imunidade específico por empresa',
        texto:
          'Foi ajustada a regra de alíquota e tipo de imunidade para funcionar de forma específica por empresa. Antes, a regra era aplicada de forma genérica, o que causava problemas em empresas com regimes tributários diferentes dentro do mesmo município.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento de XML para desserialização correta',
        texto:
          'Foi adicionado um tratamento no XML de resposta de um provedor para garantir a desserialização correta dos dados. Alguns provedores retornam XML com caracteres especiais ou encoding inesperado, e o tratamento evita erros de parsing que impediam a leitura da resposta.',
      },
      {
        icon: '🔧',
        destaque: 'PDF padrão GIF para contas Nibo e ContaAzul',
        texto:
          'Foi configurada a geração de PDF no padrão GIF (layout do provedor GIF) para as contas integradas via Nibo e ContaAzul. Essas integrações exigem um formato específico de PDF que é compatível com seus sistemas de importação de documentos fiscais.',
      },
      {
        icon: '🔄',
        destaque: 'Atualização de versão de integração para municípios',
        texto:
          'A versão de integração foi atualizada para um conjunto de municípios que migraram para versões mais recentes do webservice. A atualização garante compatibilidade com as novas APIs das prefeituras.',
      },
      {
        icon: '🌐',
        destaque: 'Ajuste na cidade de prestação via metadados para exterior',
        texto:
          'Quando o serviço é prestado no exterior, a cidade de prestação precisa ser tratada de forma especial nos metadados da nota. Foi implementado um ajuste que configura corretamente a cidade de prestação via metadados quando o tomador é estrangeiro, evitando rejeições por código de município inválido.',
      },
      {
        icon: '🏙️',
        destaque: 'Centi: integração de Panamá/GO, Mundo Novo/GO e Guapó/GO',
        texto:
          'Três municípios de Goiás foram integrados ao provedor Centi: Panamá/GO, Mundo Novo/GO e Guapó/GO. As prefeituras utilizam o sistema Centi para NFS-e e as configurações foram adicionadas ao gateway para permitir emissão eletrônica.',
      },
      {
        icon: '🔄',
        destaque: 'Tanquinho/BA migrado para NfseNacionalV2',
        texto:
          'O município de Tanquinho/BA teve seu provedor atualizado para NfseNacionalV2. A prefeitura aderiu ao Portal Nacional de NFS-e e as configurações foram ajustadas para o novo sistema.',
      },
      {
        icon: '🔄',
        destaque: 'Papanduva/SC migrado para IPMv2',
        texto:
          'O município de Papanduva/SC teve seu provedor atualizado para IPMv2. A prefeitura migrou para a versão mais recente do sistema IPM e as configurações foram atualizadas.',
      },
      {
        icon: '🔄',
        destaque: 'Ribeira do Pombal/BA migrado para WebIssV2',
        texto:
          'O município de Ribeira do Pombal/BA teve seu provedor atualizado para WebIssV2. A migração garante compatibilidade com o novo sistema da prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Ativação de UsaNovoFormatoPisCofins para provedor',
        texto:
          'A propriedade UsaNovoFormatoPisCofins foi ativada para um provedor, habilitando o novo formato de envio de PIS e COFINS exigido pela reforma tributária. Sem essa flag, os valores eram enviados no formato antigo, causando rejeição em prefeituras atualizadas.',
      },
      {
        icon: '🏙️',
        destaque: 'Tapes/RS e Ibicaré/SC aderiram ao Portal Nacional',
        texto:
          'Os municípios de Tapes/RS e Ibicaré/SC aderiram ao Portal Nacional de NFS-e. As configurações foram atualizadas para que a emissão passe a ser feita pelo portal nacional ao invés do provedor anterior.',
      },
      {
        icon: '🔧',
        destaque: 'Limpeza de mensagens de erro no FgMaiss',
        texto:
          'As mensagens de erro retornadas pelas prefeituras que usam o provedor FgMaiss vinham com tags HTML, caracteres especiais e formatação que dificultavam a leitura no painel do cliente. Foi criado o método LimparMensagemErro que sanitiza essas mensagens antes de exibir. Aplicado em todas as operações do provedor, melhorando significativamente a experiência do usuário ao visualizar erros de emissão.',
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
        destaque: 'Tributos aproximados em São Paulo/SP no novo layout JSON',
        texto:
          'O município de São Paulo/SP passou a utilizar um novo layout JSON para emissão de NFS-e. Foi ajustado o envio dos tributos aproximados (Lei da Transparência) para funcionar corretamente nesse novo formato. Sem o ajuste, os valores de tributos aproximados não apareciam na nota, descumprindo a obrigação legal de informar ao consumidor.',
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
          'Percentual aproximado de tributos em São Paulo/SP — novo grupo',
        texto:
          'O município de São Paulo/SP atualizou a estrutura de dados para tributos aproximados, movendo as informações para um novo grupo. O sistema foi ajustado para buscar o percentual aproximado de tributos do novo grupo de informações, garantindo que os valores continuem sendo exibidos corretamente na nota.',
      },
      {
        icon: '🔧',
        destaque:
          'Lógica Hotmart para definir UsaNBS nas características do provedor',
        texto:
          'Foi adicionada uma lógica específica da Hotmart para definir automaticamente a propriedade UsaNBS (Nomenclatura Brasileira de Serviços) nas características do provedor. Isso garante que provedores que exigem o código NBS tenham essa configuração habilitada automaticamente.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de código desnecessário',
        texto:
          'Foi removido código que não era mais utilizado em um provedor, simplificando a base de código e reduzindo a complexidade de manutenção. A limpeza não afeta o comportamento funcional.',
      },
      {
        icon: '📊',
        destaque: 'Zeramento de pTotTribFed estendido para Franca/SP',
        texto:
          'O zeramento do campo pTotTribFed (percentual total de tributos federais) foi estendido para o município de Franca/SP no XML de NFS-e. Algumas prefeituras rejeitam a nota quando esse campo é preenchido com valores calculados automaticamente, exigindo que seja zero.',
      },
      {
        icon: '🔧',
        destaque: 'Correção na extração do número da nota fiscal',
        texto:
          'A extração do número da nota fiscal estava retornando incorretamente o número do RPS ao invés do número da nota em determinados cenários. O ajuste garante que o número correto da nota seja extraído do retorno da prefeitura, evitando confusão na identificação das notas.',
      },
      {
        icon: '🔧',
        destaque: 'UsaNovoFormatoPisCofins e consulta por RPS no provedor',
        texto:
          'Foi ativada a propriedade UsaNovoFormatoPisCofins e criada a consulta por RPS para um provedor que ainda não suportava essa operação. A consulta por RPS é essencial para sincronização de notas — quando o sistema precisa verificar se uma nota específica foi processada pela prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Mensagem tratada em cenário de tentativa de reenvio',
        texto:
          'Foi adicionado tratamento para retornar uma mensagem clara quando o sistema tenta reenviar uma nota que já foi processada. Antes, a mensagem de erro era genérica e confusa para o usuário. Agora o sistema informa especificamente que a nota já existe.',
      },
      {
        icon: '🔄',
        destaque: 'São João Batista do Glória/MG migrado para MemoryV2',
        texto:
          'O município de São João Batista do Glória/MG foi migrado para o provedor MemoryV2. A prefeitura trocou de sistema de NFS-e e as URLs, namespace e configurações foram atualizadas para o novo provedor, garantindo continuidade na emissão.',
      },
      {
        icon: '🏙️',
        destaque: 'Adrianópolis/PR e Tangará/SC aderiram ao Portal Nacional',
        texto:
          'Os municípios de Adrianópolis/PR e Tangará/SC aderiram ao Portal Nacional de NFS-e. As configurações foram atualizadas para que a emissão passe a ser feita pelo portal nacional.',
      },
      {
        icon: '🔧',
        destaque: 'Desabilitação de emissão em lote para empresa específica',
        texto:
          'A emissão em lote foi desabilitada para uma empresa específica que estava enfrentando problemas de duplicidade ao enviar múltiplas notas simultaneamente. A emissão individual garante maior controle e evita duplicatas.',
      },
      {
        icon: '📊',
        destaque: 'Envio do Código NBS para empresa específica',
        texto:
          'Foi adicionado o envio do código NBS (Nomenclatura Brasileira de Serviços) para uma empresa específica que necessitava dessa informação na nota. O NBS é exigido por algumas prefeituras para classificação do serviço prestado.',
      },
      {
        icon: '🔧',
        destaque: 'Adição de AutenticidadeNota ao provedor',
        texto:
          'Foi adicionado o campo AutenticidadeNota a um provedor, permitindo que o código de autenticidade da nota fiscal seja retornado e armazenado. Esse código é usado para verificação da nota no portal da prefeitura.',
      },
      {
        icon: '🏙️',
        destaque: 'Serrania/MG aderiu ao Portal Nacional',
        texto:
          'O município de Serrania/MG aderiu ao Portal Nacional de NFS-e. As configurações foram atualizadas para que a emissão passe a ser feita pelo portal nacional ao invés do provedor anterior.',
      },
      {
        icon: '🔧',
        destaque:
          'Inclusão de empresaID na lista de incidência no município do prestador',
        texto:
          'Foi incluído um empresaID específico na lista de incidência no município do prestador. Essa configuração é necessária quando uma empresa precisa que o município de incidência seja sempre o do prestador, independente do local de prestação do serviço.',
      },
      {
        icon: '🔄',
        destaque: 'Socorro/SP migrado para BethaV3',
        texto:
          'O município de Socorro/SP teve seu provedor atualizado de BethaV2 para BethaV3. A nova versão traz melhorias no layout e suporte a novos campos exigidos pela reforma tributária.',
      },
      {
        icon: '📊',
        destaque:
          'Remoção de municípios da flag SempreEnviaAliquotaIssEmpresasSimplesNacional',
        texto:
          'Alguns municípios foram removidos da lista que forçava o envio de alíquota de ISS para empresas do Simples Nacional. A flag estava causando rejeições em situações onde a alíquota não deveria ser enviada. Com a remoção, o comportamento padrão do provedor é utilizado.',
      },
      {
        icon: '🔧',
        destaque:
          'Ajuste na geração da DACE para cenários de contingência — DanfeMS',
        texto:
          'A geração da DACE (Documento Auxiliar do CT-e) no módulo DanfeMS foi ajustada para funcionar corretamente em cenários de contingência. Quando o sistema opera em contingência (offline), o documento auxiliar precisa ser gerado com informações específicas que diferem do fluxo normal.',
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
        destaque: 'Melhorias na consulta de lote NFS-e de Barueri e logs',
        texto:
          'Foram implementadas melhorias na consulta de lote de NFS-e para o município de Barueri/SP, incluindo otimização do processo de consulta e adição de logs mais detalhados. Os logs permitem rastrear melhor o fluxo de consulta e identificar problemas de sincronização com a prefeitura.',
      },
      {
        icon: '🌐',
        destaque: 'Verificação de tomador estrangeiro e TipoLogLocPre',
        texto:
          'Foi adicionada uma verificação para identificar quando o tomador é estrangeiro e configurar corretamente o campo TipoLogLocPre (tipo de logradouro do local de prestação). Sem essa verificação, notas para tomadores do exterior podiam ser rejeitadas por dados de endereço inválidos.',
      },
      {
        icon: '🔧',
        destaque:
          'Atualização de dados de teste e tratamento de endereço na reg.20',
        texto:
          'Foram atualizados os dados de teste e melhorado o tratamento de endereço na reg.20 (registro de endereço do layout). O ajuste garante que os campos de endereço sejam preenchidos corretamente em diferentes cenários, incluindo tomadores nacionais e estrangeiros.',
      },
    ],
  },
];
