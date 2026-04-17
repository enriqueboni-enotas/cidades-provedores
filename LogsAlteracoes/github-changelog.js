var changelogData = [
  {
    tag: '16/04/2026',
    titulo: 'Quinta-feira — 16 de Abril',
    data: '16/04/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Envio de IBS e CBS nas notas de Cotia/SP',
        texto:
          'O município de Cotia/SP passou a exigir os campos de IBS (Imposto sobre Bens e Serviços) e CBS (Contribuição sobre Bens e Serviços) na emissão de NFS-e, em conformidade com a reforma tributária. Foi implementado o envio desses novos campos no layout FSBU/Sustain, garantindo que as notas emitidas em Cotia atendam às novas exigências fiscais sem rejeição pela prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Correção no workflow de produção',
        texto:
          'O workflow de CI/CD de produção estava configurado com o label self-hosted no runs-on, o que impedia a execução correta dos pipelines em ambientes cloud. A label foi removida para que o build e deploy voltem a funcionar normalmente no GitHub Actions.',
      },
      {
        icon: '🌐',
        destaque:
          'Emissão para exterior em São Pedro da Aldeia/RJ — ModernizacaoPublica',
        texto:
          'O município de São Pedro da Aldeia/RJ, que usa o provedor ModernizacaoPublica, apresentava erro ao emitir NFS-e para tomadores do exterior. O problema estava na comparação do código IBGE durante a exportação e na falta de tratamento específico para natureza de operação 4 (exportação). Foram aplicadas três correções: ajuste na comparação do código IBGE, correção da emissão para exterior no provedor, e tratamento de NFe para tomador nacional com natureza 4.',
      },
      {
        icon: '🌐',
        destaque:
          'SIMv2 — omissão de campos para NFS-e de exportação com tomador exterior',
        texto:
          'No provedor SIMv2, ao emitir NFS-e de exportação para tomador do exterior, os campos do grupo de valores e local de incidência estavam sendo enviados desnecessariamente, causando rejeição em algumas prefeituras. Agora esses campos são omitidos automaticamente quando a nota é de exportação com tomador estrangeiro.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Itapagipe/MG no provedor FgMais',
        texto:
          'O município de Itapagipe/MG foi ativado para emissão de NFS-e pelo provedor FgMais. A prefeitura aderiu ao sistema eletrônico de notas fiscais e agora os contribuintes da cidade podem emitir notas pelo eNotas Gateway.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Itapaci/GO no provedor Arrecadanet',
        texto:
          'O município de Itapaci/GO foi ativado para emissão de NFS-e pelo provedor Arrecadanet. A configuração inclui URLs de produção e homologação, permitindo que empresas da cidade emitam notas fiscais de serviço eletronicamente.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de São Felipe/BA no provedor Fisco.NetV2',
        texto:
          'O município de São Felipe/BA foi ativado para emissão de NFS-e pelo provedor Fisco.NetV2. A prefeitura migrou para o sistema eletrônico e agora aceita emissão via integração com o eNotas.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Pinhal/RS para o provedor IPM',
        texto:
          'O município de Pinhal/RS foi ativado para emissão de NFS-e pelo provedor IPM. As URLs e configurações foram cadastradas para permitir a integração com a prefeitura.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Ibitiúra de Minas/MG para o provedor Futurize',
        texto:
          'O município de Ibitiúra de Minas/MG foi ativado para emissão de NFS-e pelo provedor Futurize. A prefeitura passou a aceitar notas fiscais eletrônicas e a integração foi configurada no gateway.',
      },
      {
        icon: '🔄',
        destaque: 'Pirenópolis/GO migrado para BSITBR',
        texto:
          'O município de Pirenópolis/GO teve seu provedor atualizado para BSITBR. A prefeitura trocou de sistema de NFS-e e as URLs, namespace e configurações foram atualizadas para o novo provedor, garantindo continuidade na emissão de notas.',
      },
      {
        icon: '🔄',
        destaque: 'Atualização de provedor: BethaV2 para BethaV3',
        texto:
          'Um município que utilizava o provedor BethaV2 foi migrado para a versão BethaV3. A nova versão traz melhorias no layout de comunicação com a prefeitura e suporte a novos campos exigidos pela reforma tributária.',
      },
      {
        icon: '🏙️',
        destaque: 'Cerqueira César/SP migrado para Fiorilli',
        texto:
          'O município de Cerqueira César/SP teve seu provedor atualizado para Fiorilli. A prefeitura mudou de sistema de NFS-e e as configurações foram ajustadas para garantir a emissão correta pelo novo provedor.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de São Bento do Sapucaí/SP no provedor Fiorilli',
        texto:
          'O município de São Bento do Sapucaí/SP foi ativado para emissão de NFS-e pelo provedor Fiorilli. A prefeitura aderiu ao sistema eletrônico e a integração foi configurada no gateway.',
      },
      {
        icon: '🔄',
        destaque: 'Itá/SC migrado para IPM',
        texto:
          'O município de Itá/SC teve seu provedor atualizado para IPM. A prefeitura trocou de sistema e as URLs e configurações foram atualizadas para o novo provedor.',
      },
      {
        icon: '🔄',
        destaque: 'Tucano/BA migrado para WebISSv2',
        texto:
          'O município de Tucano/BA teve seu provedor atualizado para WebISSv2. A migração garante compatibilidade com o novo sistema da prefeitura e continuidade na emissão de notas.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de São Miguel do Guamá/PA no provedor Aspect',
        texto:
          'O município de São Miguel do Guamá/PA foi ativado para emissão de NFS-e pelo provedor Aspect. A prefeitura passou a aceitar notas fiscais eletrônicas via integração com o eNotas Gateway.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Canudos/BA no provedor Fisco.NetV2',
        texto:
          'O município de Canudos/BA foi ativado para emissão de NFS-e pelo provedor Fisco.NetV2. A configuração permite que empresas da cidade emitam notas fiscais de serviço eletronicamente.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Lupionópolis/PR no provedor Equiplano',
        texto:
          'O município de Lupionópolis/PR foi ativado para emissão de NFS-e pelo provedor Equiplano. A prefeitura aderiu ao sistema eletrônico e a integração foi configurada.',
      },
      {
        icon: '🔧',
        destaque: 'Configuração UsaAbrasf203 para Jaguarão/RS',
        texto:
          'O município de Jaguarão/RS foi configurado para utilizar o padrão ABRASF 2.03. Essa configuração é necessária quando a prefeitura exige o layout mais recente do padrão nacional de NFS-e, garantindo compatibilidade na comunicação.',
      },
      {
        icon: '📊',
        destaque:
          'Remoção de Macuco/RJ da flag SempreEnviaAliquotaIssEmpresasSimplesNacional',
        texto:
          'O município de Macuco/RJ foi removido da lista de cidades que sempre enviam alíquota de ISS para empresas do Simples Nacional. Essa flag forçava o envio da alíquota mesmo quando não era necessário, causando rejeições em algumas situações. Com a remoção, o comportamento padrão do provedor é utilizado.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de Oscar Bressane/SP no provedor Fiorilli',
        texto:
          'O município de Oscar Bressane/SP foi ativado para emissão de NFS-e pelo provedor Fiorilli. A prefeitura aderiu ao sistema eletrônico de notas fiscais.',
      },
      {
        icon: '🏙️',
        destaque: 'Ativação de São José do Norte/RS no provedor GOVBRv3',
        texto:
          'O município de São José do Norte/RS foi ativado para emissão de NFS-e pelo provedor GOVBRv3. A prefeitura passou a aceitar notas fiscais eletrônicas e a integração foi configurada no gateway.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção da validação RemoveAccent para todo o provedor',
        texto:
          'A validação RemoveAccent, que removia acentos de campos antes do envio, estava sendo aplicada de forma global a um provedor inteiro. Isso causava problemas em cidades onde os acentos eram necessários. A validação foi removida para que o comportamento seja controlado individualmente por município.',
      },
      {
        icon: '🌐',
        destaque: 'Remoção do CEP na reg.20 para tomador do exterior',
        texto:
          'Ao emitir NFS-e para tomador do exterior, o campo CEP na reg.20 estava sendo preenchido com valor inválido, causando rejeição pela prefeitura. Agora o CEP é removido automaticamente quando o tomador é estrangeiro, evitando o erro de validação.',
      },
      {
        icon: '🔧',
        destaque:
          'Atualização de links e campos da reforma tributária no provedor',
        texto:
          'Foram atualizados os links de comunicação, URLs de integração e adicionados novos campos relacionados à reforma tributária em um provedor. As mudanças garantem compatibilidade com as novas exigências fiscais e mantêm a comunicação funcionando corretamente.',
      },
      {
        icon: '🔧',
        destaque: 'Caíro/RN adaptado para usar CNAE',
        texto:
          'O município de Caíro/RN foi adaptado para utilizar o código CNAE na emissão de NFS-e. Algumas prefeituras exigem o CNAE ao invés do código de serviço padrão, e essa adaptação garante que as notas sejam aceitas sem rejeição.',
      },
      {
        icon: '🆕',
        destaque: 'NomeProvedor adicionado às características do provedor',
        texto:
          'Foi adicionado o campo NomeProvedor às características extraídas dos provedores. Essa informação é utilizada pelo site CidadesProvedores para exibir o nome legível do provedor nas páginas de detalhe, melhorando a experiência de consulta.',
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
  {
    tag: '08/04/2026',
    titulo: 'Quarta-feira — 08 de Abril',
    data: '08/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Correção para não travar a fila de processamento',
        texto:
          'A fila de processamento de notas estava travando em determinados cenários quando ocorria um erro não tratado. O ajuste adiciona tratamento de exceção para que a fila continue processando as próximas notas mesmo quando uma falha individual ocorre.',
      },
      {
        icon: '🌐',
        destaque: 'Ajustes para ISSQN exterior e novos testes de PDF',
        texto:
          'Foram implementados ajustes no cálculo de ISSQN para serviços prestados no exterior, incluindo tratamento correto de alíquotas e base de cálculo. Também foram adicionados novos testes automatizados para validar a geração de PDF em cenários de exportação de serviços.',
      },
      {
        icon: '🌐',
        destaque:
          'Portal Nacional — exportação apenas para serviço prestado fora + cancelamento GissOnline',
        texto:
          'Dois ajustes importantes: no Portal Nacional, a nota agora só é considerada como exportação se o serviço foi efetivamente prestado fora do país (antes, qualquer nota com tomador estrangeiro era tratada como exportação). No provedor GissOnline, o cancelamento foi liberado para que o usuário possa tentar cancelar mesmo quando as características do provedor indicam que não é possível — muitas cidades mudam as regras de cancelamento com frequência.',
      },
      {
        icon: '🔧',
        destaque: 'Consulta NFS-e por RPS com AntiCaptcha em Barueri',
        texto:
          'Foi implementada a consulta de NFS-e por RPS para o município de Barueri/SP utilizando o serviço AntiCaptcha. O portal de Barueri exige resolução de captcha para consultas, e a integração com AntiCaptcha permite que o sistema resolva automaticamente, viabilizando a sincronização de notas.',
      },
      {
        icon: '🔧',
        destaque: 'Testes de integração em Nova Serrana/MG',
        texto:
          'Foram realizados testes de integração no ambiente de Nova Serrana/MG para validar o funcionamento da emissão de NFS-e. Os testes verificam a comunicação com a prefeitura e o processamento correto das respostas.',
      },
      {
        icon: '🔧',
        destaque: 'Bloqueio de atualização de API key por subscription ID',
        texto:
          'Foi implementado um bloqueio que impede a atualização da API key quando a requisição vem com um subscription ID. Isso evita que integrações automatizadas sobrescrevam a chave de API configurada manualmente pelo cliente, prevenindo problemas de autenticação.',
      },
      {
        icon: '🏙️',
        destaque:
          'Boca da Mata/AL e Governador Valadares/MG aderiram ao Portal Nacional',
        texto:
          'Os municípios de Boca da Mata/AL e Governador Valadares/MG aderiram ao Portal Nacional de NFS-e. As configurações foram atualizadas para que a emissão passe a ser feita pelo portal nacional.',
      },
      {
        icon: '🔗',
        destaque: 'Alteração de porta do endpoint de Santa Rita do Pardo/MS',
        texto:
          'A porta do endpoint de integração de Santa Rita do Pardo/MS foi alterada de 8085 para 8090. A prefeitura mudou a configuração do servidor e a URL precisou ser atualizada para manter a comunicação funcionando.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de formatação do CEP do local de prestação',
        texto:
          'A formatação do CEP do local de prestação (com pontos e hífens) estava causando rejeição em algumas prefeituras que esperam apenas números. A formatação foi removida para enviar o CEP limpo.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização do link de homologação de Contagem/MG',
        texto:
          'O link de homologação do município de Contagem/MG foi atualizado. A prefeitura alterou a URL do ambiente de testes e a configuração foi ajustada para manter os testes funcionando.',
      },
      {
        icon: '🔧',
        destaque:
          'Retry no cancelamento para garantir cancelamento na API e na prefeitura',
        texto:
          'Foi adicionado um mecanismo de retry no processo de cancelamento de NFS-e. Em alguns casos, o cancelamento era registrado na API do eNotas mas falhava na comunicação com a prefeitura, deixando a nota em estado inconsistente. O retry garante que ambas as operações sejam concluídas.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização do endpoint de Jardim/MS',
        texto:
          'O endpoint de integração do município de Jardim/MS foi atualizado. A prefeitura alterou a URL do webservice e a configuração foi ajustada para manter a comunicação.',
      },
      {
        icon: '📊',
        destaque:
          'MunicipioIncidencia como município do prestador para empresa específica',
        texto:
          'Foi configurado o MunicipioIncidencia como município do prestador para uma empresa específica integrada via ContaAzul. Essa configuração é necessária quando a empresa presta serviços em diversos municípios mas o ISS deve ser recolhido sempre no município sede.',
      },
      {
        icon: '📊',
        destaque: 'Cenário de envio de alíquota para empresa específica',
        texto:
          'Foi adicionado um cenário específico de envio de alíquota para uma empresa que necessitava de tratamento diferenciado. A configuração permite que a alíquota seja enviada de forma personalizada conforme as regras do município.',
      },
      {
        icon: '📊',
        destaque:
          'Correção no envio de alíquota para prestação fora do município com ISS não retido',
        texto:
          'O envio da alíquota de ISS estava incorreto em casos de prestação de serviço fora do município quando o ISS não era retido. A correção garante que a alíquota correta seja enviada conforme a legislação, evitando rejeições pela prefeitura.',
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
        destaque: 'Normalização de comparação de série RPS em consulta de lote',
        texto:
          'A comparação de série do RPS na consulta de lote de NFS-e foi normalizada. Antes, diferenças de formatação (espaços, maiúsculas/minúsculas) entre a série enviada e a retornada pela prefeitura impediam o match correto, fazendo com que notas ficassem presas no status "em emissão".',
      },
      {
        icon: '📊',
        destaque:
          'GOVBRv3 — remoção de municípios da flag SempreEnviaAliquotaIssEmpresasSimplesNacional',
        texto:
          'Vários municípios do provedor GOVBRv3 foram removidos da flag que forçava o envio de alíquota de ISS para empresas do Simples Nacional. A flag estava causando rejeições desnecessárias nesses municípios.',
      },
      {
        icon: '🔧',
        destaque:
          'São Gonçalo do Rio Abaixo/MG — regra UsaCIntContribComCodigoServico',
        texto:
          'O município de São Gonçalo do Rio Abaixo/MG foi incluído na regra UsaCIntContribComCodigoServico. Essa regra faz com que o código de integração do contribuinte (cIntContrib) seja enviado junto com o código de serviço, conforme exigido pela prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Vinhedo/SP — emissão sem tomador permitida',
        texto:
          'O município de Vinhedo/SP foi configurado para permitir a emissão de NFS-e sem informar o tomador. Algumas prefeituras aceitam notas sem tomador (como vendas ao consumidor final não identificado), e essa configuração habilita esse cenário.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de sequência obrigatória de RPS para Varginha/MG',
        texto:
          'A exigência de sequência obrigatória de RPS foi removida para o município de Varginha/MG. Essa regra impedia a emissão quando o número do RPS não era sequencial, mas a prefeitura não exige mais essa validação.',
      },
      {
        icon: '🔄',
        destaque: 'Arroio do Meio/RS migrado para NfseNacionalV2',
        texto:
          'O município de Arroio do Meio/RS teve seu provedor atualizado para NfseNacionalV2. A prefeitura aderiu ao Portal Nacional de NFS-e e as configurações foram ajustadas.',
      },
      {
        icon: '🆕',
        destaque: 'Novo provedor GIFv2 no layout nacional',
        texto:
          'Foi criado o novo provedor GIFv2 que opera no layout nacional de NFS-e. O provedor GIF (Gestão de ISSQN Fiscal) ganhou uma versão atualizada que suporta o padrão nacional, permitindo que municípios que usam o GIF migrem para o novo formato sem perda de funcionalidade.',
      },
      {
        icon: '🌐',
        destaque:
          'Tratamento de tomador exterior em Cachoeirinha/RS (CE-25291)',
        texto:
          'Foi implementado o tratamento específico para tomador do exterior no município de Cachoeirinha/RS. O ticket CE-25291 reportava que notas para tomadores estrangeiros estavam sendo rejeitadas por falta de tratamento adequado dos dados de endereço e identificação do tomador.',
      },
      {
        icon: '🌐',
        destaque: 'Tratamento de tomador estrangeiro (CE-24786)',
        texto:
          'Foi implementado o tratamento genérico para tomador estrangeiro, resolvendo o ticket CE-24786. O ajuste inclui refatorações no código de tratamento de dados do tomador para suportar corretamente endereços e documentos internacionais em múltiplos provedores.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de URLs de Embu das Artes/SP',
        texto:
          'As URLs de integração do município de Embu das Artes/SP foram atualizadas. A prefeitura alterou os endpoints do webservice e as configurações foram ajustadas para manter a comunicação.',
      },
      {
        icon: '🔧',
        destaque:
          'Cotia/SP — código 704 configurado para enviar código de obra',
        texto:
          'O código de serviço 704 de Cotia/SP foi configurado para enviar o código de obra na nota. Esse código de serviço está relacionado a construção civil e exige o envio do código de obra conforme legislação municipal.',
      },
      {
        icon: '🔄',
        destaque: 'Itaituba/PA migrado para CoplanV2',
        texto:
          'O município de Itaituba/PA teve seu provedor atualizado para CoplanV2. A prefeitura migrou para a versão mais recente do sistema Coplan.',
      },
      {
        icon: '🔄',
        destaque: 'Serra do Mel/RN migrado para TinusV2',
        texto:
          'O município de Serra do Mel/RN teve seu provedor atualizado para TinusV2. A prefeitura trocou de sistema e as configurações foram atualizadas.',
      },
      {
        icon: '📊',
        destaque:
          'Remoção de Pejuçara/RS da flag SempreEnviaAliquotaIssEmpresasSimplesNacional',
        texto:
          'O município de Pejuçara/RS foi removido da lista que forçava o envio de alíquota de ISS para empresas do Simples Nacional, evitando rejeições desnecessárias.',
      },
      {
        icon: '🔧',
        destaque: 'Ajuste na tag cClassTrib',
        texto:
          'A tag cClassTrib (código de classificação tributária) foi ajustada para ser preenchida corretamente conforme as regras do provedor. O preenchimento incorreto causava rejeição em prefeituras que validam esse campo.',
      },
      {
        icon: '🔧',
        destaque: 'Validação de código NBS para não travar a fila',
        texto:
          'Foi adicionada uma validação no código NBS (Nomenclatura Brasileira de Serviços) para evitar que a fila de processamento trave quando o código é inválido ou ausente. Agora o sistema valida o NBS antes do envio e trata o erro adequadamente.',
      },
      {
        icon: '📊',
        destaque: 'Envio do CST de PIS/COFINS conforme prestador',
        texto:
          'O CST (Código de Situação Tributária) de PIS e COFINS agora é enviado conforme informado pelo prestador, ao invés de usar um valor padrão. Isso garante que a tributação correta seja aplicada conforme o regime tributário de cada empresa.',
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
        destaque: 'NBS válido informado automaticamente',
        texto:
          'Foi ajustado o sistema para informar automaticamente um NBS (Nomenclatura Brasileira de Serviços) válido quando o código fornecido é inválido ou está em branco. Isso evita rejeições em prefeituras que exigem o campo NBS preenchido.',
      },
      {
        icon: '🔧',
        destaque: 'IDs adicionados em responsável técnico',
        texto:
          'Foram adicionados os IDs de identificação no cadastro de responsável técnico. Esses IDs são exigidos por algumas prefeituras para vincular o responsável técnico à nota fiscal de serviço.',
      },
      {
        icon: '🔧',
        destaque: 'Normalização do NBS antes da validação',
        texto:
          'O código NBS agora é normalizado (remoção de espaços, zeros à esquerda, caracteres especiais) antes da validação. Isso evita que um NBS tecnicamente válido seja rejeitado por formatação incorreta, prevenindo o envio de NBS vazio.',
      },
      {
        icon: '🌐',
        destaque: 'Tratamento de NFS-e com prestação de serviço no exterior',
        texto:
          'Foi implementado um tratamento abrangente para NFS-e com prestação de serviço no exterior. O ajuste cobre cenários de exportação de serviços, incluindo tratamento correto de endereço do tomador estrangeiro, código de país, e campos específicos exigidos pelo Portal Nacional.',
      },
      {
        icon: '🔄',
        destaque: 'Jardinópolis/SP migrado para GissOnline',
        texto:
          'O município de Jardinópolis/SP teve seu provedor atualizado para GissOnline. A prefeitura trocou de sistema de NFS-e e as configurações foram atualizadas.',
      },
      {
        icon: '🔧',
        destaque: 'Adição de usuário backoffice',
        texto:
          'Foi adicionado um novo usuário de backoffice ao sistema. Esse usuário é utilizado para operações administrativas internas que requerem permissões especiais.',
      },
      {
        icon: '📊',
        destaque: 'Fallback de IBS/CBS ajustado para Simples Nacional',
        texto:
          'O fallback de cálculo de IBS (Imposto sobre Bens e Serviços) e CBS (Contribuição sobre Bens e Serviços) foi ajustado para deduzir valores apenas para empresas optantes do Simples Nacional. Antes, a dedução era aplicada indiscriminadamente, causando valores incorretos para empresas do regime normal.',
      },
      {
        icon: '🌐',
        destaque: 'Valor do serviço em moeda estrangeira',
        texto:
          'Foi implementado o suporte para utilizar o valor do serviço em moeda estrangeira (vServMoeda) quando disponível. Também foi refatorada a lógica de extração do valorServicoMoedaEstrangeira e dos metadados para maior clareza e manutenibilidade.',
      },
      {
        icon: '📊',
        destaque: 'Ajustes nos impostos retidos — CSLL e apuração própria',
        texto:
          'Foram ajustados os envios de impostos retidos na tag CSLL e na apuração própria. O cálculo estava considerando valores incorretos em determinados cenários, causando divergência entre o valor retido informado na nota e o valor efetivamente devido.',
      },
      {
        icon: '🆕',
        destaque: 'Novo modelo de envio de Obras para SIGISSv5',
        texto:
          'Foi implementado um novo modelo de envio de informações de obras para o provedor SIGISSv5. O modelo anterior não suportava todos os campos exigidos pela prefeitura para notas de construção civil, como ART, código da obra e endereço da obra.',
      },
      {
        icon: '📊',
        destaque: 'Empresas não optantes de Uberaba/MG — alíquota não enviada',
        texto:
          'Empresas não optantes do Simples Nacional em Uberaba/MG foram configuradas para não enviar alíquota na nota. A prefeitura rejeita notas quando a alíquota é informada por empresas do regime normal, pois o cálculo é feito pelo próprio sistema municipal.',
      },
      {
        icon: '🆕',
        destaque: 'Campo CNO implementado para o provedor IPM',
        texto:
          'Foi implementado o campo CNO (Cadastro Nacional de Obras) para o provedor IPM. O CNO é obrigatório para notas de construção civil e sua ausência causava rejeição em municípios que utilizam o IPM.',
      },
      {
        icon: '🔧',
        destaque: 'Juazeiro/BA — não envia MunicipioIncidencia',
        texto:
          'O município de Juazeiro/BA foi adicionado à lista de municípios que não enviam o campo MunicipioIncidencia. A prefeitura rejeita notas quando esse campo é informado, pois considera que a incidência é sempre no próprio município.',
      },
      {
        icon: '🔧',
        destaque: 'Desabilitação de emissão em lote para empresa específica',
        texto:
          'A emissão em lote foi desabilitada para uma empresa específica que enfrentava problemas de duplicidade. A emissão individual garante maior controle sobre cada nota.',
      },
      {
        icon: '🔧',
        destaque:
          'Consulta de nota e autenticação de Carapicuíba/SP — mês início/fim',
        texto:
          'Foi adicionado o envio dos campos de mês início, mês e ano fim na consulta de nota e autenticação do município de Carapicuíba/SP. A prefeitura exige esses parâmetros para filtrar o período de consulta.',
      },
      {
        icon: '🆕',
        destaque: 'Novo modelo de envio de Obras para IssIntel',
        texto:
          'Foi implementado um novo modelo de envio de informações de obras para o provedor IssIntel, similar ao implementado para SIGISSv5. O modelo suporta todos os campos exigidos para notas de construção civil.',
      },
      {
        icon: '🌐',
        destaque: 'Variação de país adicionada',
        texto:
          'Foi adicionada uma nova variação de nome de país para o mapeamento de países estrangeiros. Isso garante que diferentes grafias do mesmo país sejam reconhecidas corretamente na emissão de notas para o exterior.',
      },
      {
        icon: '🔧',
        destaque: 'IPM — correção no envio do campo imóvel no IBS/CBS',
        texto:
          'Foi corrigido o envio do campo <imovel> no contexto de IBS/CBS para o provedor IPM. O campo estava sendo preenchido incorretamente, causando rejeição em notas de construção civil que envolvem dados de imóvel.',
      },
      {
        icon: '🌐',
        destaque: 'MunicipioIncidenciaService para notas com exterior',
        texto:
          'Foi adicionado o serviço MunicipioIncidenciaService para tratar corretamente o município de incidência em notas com tomador do exterior. Quando o serviço é prestado para o exterior, o município de incidência precisa ser tratado de forma especial.',
      },
      {
        icon: '🔄',
        destaque: 'Ortigueira/PR migrado para BethaV3',
        texto:
          'O município de Ortigueira/PR teve seu provedor atualizado para BethaV3. A prefeitura migrou para a versão mais recente do sistema Betha.',
      },
      {
        icon: '🔧',
        destaque: 'Código de município não preenchido quando não informado',
        texto:
          'Foi ajustado o sistema para não preencher o campo codigoMunicipio quando o mesmo não é informado pelo prestador. Antes, um valor padrão era inserido, causando inconsistências em notas onde o município não deveria ser especificado.',
      },
      {
        icon: '🔧',
        destaque:
          'Try/Catch para evitar travar a fila — nome de cidade não encontrado',
        texto:
          'Foi adicionado um bloco Try/Catch para tratar o cenário onde o nome da cidade não é encontrado no mapeamento. Antes, essa exceção travava toda a fila de processamento. Agora o erro é tratado individualmente e a fila continua.',
      },
      {
        icon: '🔧',
        destaque: 'AutenticidadeNota adicionada ao provedor',
        texto:
          'O campo AutenticidadeNota foi adicionado a mais um provedor, permitindo que o código de autenticidade da nota fiscal seja retornado e armazenado para verificação.',
      },
      {
        icon: '📊',
        destaque: 'Configuração para não enviar alíquota quando é zero',
        texto:
          'Foi configurado um provedor para não enviar o campo de alíquota quando o valor é zero. Algumas prefeituras rejeitam notas com alíquota zero, interpretando como erro de preenchimento.',
      },
      {
        icon: '📊',
        destaque:
          'Dois municípios adicionados à flag SempreEnviaAliquotaIssEmpresasSimplesNacional',
        texto:
          'Dois municípios foram adicionados à lista que força o envio de alíquota de ISS para empresas do Simples Nacional. Esses municípios exigem que a alíquota seja sempre informada, mesmo para optantes do Simples.',
      },
      {
        icon: '🔧',
        destaque: 'Permissão de nota sem tomador no provedor',
        texto:
          'Um provedor foi atualizado para permitir a emissão de notas sem informar o tomador. Isso é necessário para vendas ao consumidor final não identificado em municípios que aceitam esse cenário.',
      },
      {
        icon: '🔧',
        destaque: 'Cenário de emissão para natureza 9',
        texto:
          'Foi adicionado o cenário de emissão para natureza de operação 9 em um provedor. Essa natureza é utilizada em situações específicas de tributação e não estava sendo tratada, causando rejeição.',
      },
      {
        icon: '🏙️',
        destaque: 'Capela do Alto/SP aderiu ao Portal Nacional',
        texto:
          'O município de Capela do Alto/SP aderiu ao Portal Nacional de NFS-e. As configurações foram atualizadas para que a emissão passe a ser feita pelo portal nacional.',
      },
      {
        icon: '🔧',
        destaque:
          'Tratamento de reenvio em caso de mensagem de erro específica',
        texto:
          'Foi adicionado um tratamento para reenviar automaticamente a nota quando uma mensagem de erro específica é retornada pela prefeitura. Esse tipo de erro é temporário e o reenvio resolve o problema sem intervenção manual.',
      },
      {
        icon: '🔧',
        destaque: 'Atualização de tratamento em mensagem de erro do provedor',
        texto:
          'O tratamento de mensagens de erro foi atualizado em um provedor para interpretar corretamente novas mensagens retornadas pela prefeitura. Isso melhora a experiência do usuário ao exibir mensagens mais claras.',
      },
      {
        icon: '🔗',
        destaque:
          'Atualização de links de integração de Carapicuíba/SP e Cotia/SP',
        texto:
          'Os links de integração dos municípios de Carapicuíba/SP e Cotia/SP foram atualizados. As prefeituras alteraram as URLs dos webservices e as configurações foram ajustadas para manter a comunicação.',
      },
      {
        icon: '🔧',
        destaque:
          'Araraquara/SP — emissão atualizada para layout padrão do provedor',
        texto:
          'A emissão de NFS-e em Araraquara/SP foi atualizada para utilizar o layout padrão do provedor, acrescentando campos que estavam faltando. O layout anterior era customizado e não incluía todos os campos exigidos pela prefeitura.',
      },
      {
        icon: '🔄',
        destaque: 'Colina/SP migrado para NfseNacionalV2',
        texto:
          'O município de Colina/SP teve seu provedor atualizado para NfseNacionalV2. A prefeitura aderiu ao Portal Nacional de NFS-e.',
      },
      {
        icon: '🔧',
        destaque:
          'SIGISSv5 — chave de acesso no retorno da consulta de lote (Franco da Rocha/SP)',
        texto:
          'Foi incluída a leitura e atribuição da chave de acesso no retorno da consulta de lote do provedor SIGISSv5 para Franco da Rocha/SP. A chave de acesso é necessária para verificação da autenticidade da nota no portal da prefeitura.',
      },
      {
        icon: '🔄',
        destaque:
          'São Luís de Montes Belos/GO migrado de NfseNacionalV2 para Centi',
        texto:
          'O município de São Luís de Montes Belos/GO foi migrado do provedor NfseNacionalV2 para o Centi. A prefeitura optou por utilizar o sistema Centi ao invés do Portal Nacional.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento de exceção para Inscrição Municipal incorreta',
        texto:
          'Foi adicionado um tratamento de exceção para o cenário onde a Inscrição Municipal está incorreta. Antes, o erro não era tratado adequadamente e travava o processamento. Agora uma mensagem clara é retornada ao usuário.',
      },
      {
        icon: '🔄',
        destaque: 'Caiçara/RS e Guarujá do Sul/SC migrados para IPM',
        texto:
          'Os municípios de Caiçara/RS e Guarujá do Sul/SC tiveram seus provedores atualizados para IPM. As prefeituras migraram de sistema e as configurações foram ajustadas.',
      },
      {
        icon: '🔧',
        destaque: 'Validação de existência de metadados antes de inserir',
        texto:
          'Foi adicionada uma validação que verifica se os metadados já existem antes de tentar inseri-los. Isso evita erros de duplicidade e garante a integridade dos dados no banco.',
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
];
