var changelogData = [
  {
    tag: '15/04/2026',
    titulo: 'Quarta-feira — 15 de Abril',
    data: '15/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'PDF da NF-e gerado pela prefeitura no GIAPv2',
        texto:
          'O provedor GIAPv2 estava gerando o PDF da NF-e internamente pelo eNotas, mas algumas prefeituras exigem que o PDF oficial seja o emitido por elas. Foi implementada a lógica para que o sistema utilize o PDF fornecido pela prefeitura em vez do gerado internamente, garantindo conformidade com os requisitos municipais e evitando divergências visuais no documento fiscal.',
      },
      {
        icon: '🔧',
        destaque: '[Dashboard] Desativa chat para subscriptions de clientes',
        texto:
          'O chat de suporte integrado ao dashboard estava habilitado para todas as subscriptions, incluindo clientes que não deveriam ter acesso direto ao chat. As configurações de HML e PRD foram atualizadas para desativar o chat nas subscriptions de clientes específicas, direcionando o atendimento pelos canais corretos.',
      },
      {
        icon: '🔧',
        destaque: 'Renomeia script SQL do histórico de alterações de metadados',
        texto:
          'O script SQL de histórico de alterações de metadados de empresa foi renomeado para v2 e corrigido um problema de formatação — faltava uma linha em branco após o comentário de changeset, o que poderia causar falha na execução do Liquibase. Ajuste necessário para garantir a migração correta do banco de dados.',
      },
      {
        icon: '🆕',
        destaque:
          'Histórico de alterações de metadados de empresa (SUSFS-7060)',
        texto:
          'Nova funcionalidade que registra o histórico de alterações nos metadados das empresas. Quando campos como razão social, endereço ou configurações fiscais são modificados, o sistema agora mantém um log completo das mudanças, facilitando auditoria e rastreabilidade de problemas relacionados a dados cadastrais.',
      },
    ],
  },
  {
    tag: '14/04/2026',
    titulo: 'Terça-feira — 14 de Abril',
    data: '14/04/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Jaguaribara/CE ativada no provedor Aspect',
        texto:
          'O município de Jaguaribara/CE foi ativado para emissão de NFS-e utilizando o provedor Aspect. Clientes com prestação de serviço nessa cidade agora podem emitir notas fiscais de serviço normalmente pelo sistema.',
      },
      {
        icon: '🔧',
        destaque: 'API key sempre atualizada na tela do dashboard',
        texto:
          'A tela de API Key no dashboard exibia a chave armazenada no claim da sessão, que poderia estar desatualizada caso a chave fosse regenerada em outra sessão. Agora o sistema busca a API Key diretamente do banco de dados (via IAPIKeyService), garantindo que o usuário sempre veja a chave mais recente e válida.',
      },
      {
        icon: '🏙️',
        destaque: 'Arroio do Sal/RS ativado no provedor GOVBRv3',
        texto:
          'O município de Arroio do Sal/RS foi ativado para emissão de NFS-e utilizando o provedor GOVBRv3. A cidade aderiu ao portal nacional e agora está integrada ao sistema para emissão e consulta de notas fiscais de serviço.',
      },
      {
        icon: '🏙️',
        destaque: 'Quitandinha/PR ativada no provedor Equiplano',
        texto:
          'O município de Quitandinha/PR foi ativado para emissão de NFS-e pelo provedor Equiplano. Clientes que prestam serviço nessa cidade agora podem emitir notas normalmente.',
      },
      {
        icon: '🏙️',
        destaque: 'Jacundá/PA ativada no provedor Aspect',
        texto:
          'O município de Jacundá/PA foi ativado para emissão de NFS-e utilizando o provedor Aspect. A integração permite emissão, consulta e cancelamento de notas fiscais de serviço na cidade.',
      },
      {
        icon: '🏙️',
        destaque: 'Minas Novas/MG ativada no provedor Síntese',
        texto:
          'O município de Minas Novas/MG foi ativado para emissão de NFS-e pelo provedor Síntese. Clientes com operação nessa cidade agora têm suporte completo para emissão de notas.',
      },
      {
        icon: '📊',
        destaque: 'Removido Jarinu/SP da flag de alíquota ISS Simples Nacional',
        texto:
          'O município de Jarinu/SP foi removido da flag SempreEnviaAliquotaIssEmpresasSimplesNacional. Empresas do Simples Nacional em Jarinu não precisam mais enviar a alíquota de ISS obrigatoriamente, alinhando o comportamento com as regras atuais da prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Corrige data recebida no XML de retorno',
        texto:
          'A data retornada no XML de resposta de alguns provedores estava sendo interpretada incorretamente, causando divergência entre a data real de emissão e a data registrada no sistema. O parsing foi corrigido para extrair a data correta do XML, evitando inconsistências nos registros de notas.',
      },
      {
        icon: '🔧',
        destaque:
          'Remove cidades duplicadas e normaliza nome de cidade do tomador',
        texto:
          'Havia registros duplicados de cidades no sistema e nomes de cidades do tomador com formatação inconsistente (acentuação, capitalização). Foi implementada a remoção de duplicatas e a normalização dos nomes, melhorando a qualidade dos dados e evitando erros de validação na emissão.',
      },
      {
        icon: '🌐',
        destaque: 'Correção para não travar a fila com tomador exterior',
        texto:
          'Quando uma nota fiscal tinha tomador no exterior e algum campo obrigatório estava ausente ou em formato inesperado, a fila de processamento travava sem avançar. Foi adicionado tratamento para que essas notas sejam processadas corretamente ou retornem erro tratado, sem bloquear as demais notas da fila.',
      },
      {
        icon: '🔧',
        destaque: 'Fallback para consulta por RPS no provedor',
        texto:
          'Quando a consulta de lote retornava erro ou resultado vazio, o sistema não tinha alternativa para recuperar a nota. Foi implementado um fallback que tenta a consulta por número de RPS quando a consulta de lote falha, aumentando a taxa de sucesso na recuperação de notas processadas pela prefeitura.',
      },
      {
        icon: '🏙️',
        destaque: 'Brazabrantes/GO integrada ao provedor Centi',
        texto:
          'O município de Brazabrantes/GO foi integrado ao provedor Centi para emissão de NFS-e. A cidade utiliza o sistema Centi para gestão de notas fiscais de serviço e agora está disponível para os clientes do eNotas.',
      },
      {
        icon: '🏙️',
        destaque: 'Itamaraju/BA migrado para WebISSv2',
        texto:
          'O município de Itamaraju/BA foi atualizado do provedor anterior para o WebISSv2. A migração inclui novas URLs de integração e configurações atualizadas, garantindo compatibilidade com o novo sistema da prefeitura.',
      },
      {
        icon: '🏙️',
        destaque: 'Lagoa Nova/RN ativada no provedor TributosV2',
        texto:
          'O município de Lagoa Nova/RN foi ativado para emissão de NFS-e pelo provedor TributosV2. Clientes que prestam serviço nessa cidade agora podem emitir notas fiscais normalmente.',
      },
      {
        icon: '📊',
        destaque: 'Moema/MG incluída na lista de municípios com cIntContrib',
        texto:
          'O município de Moema/MG foi incluído na lista de municípios que utilizam o campo cIntContrib (código de integração do contribuinte) no envio de notas. Sem essa configuração, notas emitidas em Moema poderiam ser rejeitadas pela prefeitura por falta do campo obrigatório.',
      },
      {
        icon: '🏙️',
        destaque: 'Euclides da Cunha Paulista/SP ativada no GOVBRv3',
        texto:
          'O município de Euclides da Cunha Paulista/SP foi ativado para emissão de NFS-e pelo provedor GOVBRv3. A cidade aderiu ao portal nacional e agora está integrada ao sistema.',
      },
      {
        icon: '🔧',
        destaque: 'Remove validação temporária já resolvida',
        texto:
          'Uma validação temporária havia sido adicionada para contornar um problema específico de um provedor. Com o problema já resolvido na origem, a validação foi removida para simplificar o código e evitar bloqueios desnecessários em cenários normais de emissão.',
      },
      {
        icon: '🏙️',
        destaque: 'Miracema do Tocantins voltou para provedor Arrecadanet',
        texto:
          'O município de Miracema do Tocantins/TO foi revertido para o provedor Arrecadanet. A cidade havia sido migrada para outro provedor, mas houve problemas de compatibilidade, e o retorno ao Arrecadanet restaura a estabilidade na emissão de NFS-e.',
      },
      {
        icon: '🔧',
        destaque: 'Criado ID e chave Sefaz Paraná para homologação',
        texto:
          'Foram criados e adicionados o ID e a chave de autenticação da Sefaz do Paraná no ambiente de homologação. Isso permite testar integrações com o portal nacional para municípios paranaenses antes de ativar em produção.',
      },
      {
        icon: '🔧',
        destaque: '[NFeServico] Campos de endereço e RegimeEspecialTributacao',
        texto:
          'O modelo NFeServico foi complementado com o campo LocalPrestacaoServico (endereço completo) e a propriedade RegimeEspecialTributacao nos itens. Antes, apenas o código IBGE e o país de prestação eram registrados. Agora o endereço completo é persistido e o regime tributário especial pode ser informado por item, melhorando a precisão dos dados fiscais.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de propriedades desnecessárias e limpeza de CEP',
        texto:
          'Foram removidas propriedades não utilizadas do código e adicionada sanitização do CEP para remover caracteres não numéricos. CEPs com formatação (pontos, hífens) causavam rejeição em alguns provedores que exigem apenas dígitos.',
      },
      {
        icon: '🔧',
        destaque:
          'Correção na consulta por código IBGE e validação de tributos SN',
        texto:
          'Foi removida uma condição desnecessária na consulta por código IBGE que poderia retornar a cidade errada em alguns cenários. Também foi adicionada validação para garantir que o percentual aproximado de tributos do Simples Nacional seja maior que zero antes de enviar, evitando rejeições por valor inválido.',
      },
      {
        icon: '🔧',
        destaque: 'Vários ajustes no layout 4.2 de Barueri/SP',
        texto:
          'Múltiplas correções no layout 4.2 de Barueri/SP: ajuste no cálculo de total de impostos retidos para não considerar PIS/COFINS não retidos, correção no preenchimento do endereço completo do local de prestação de serviço com valores padrão, e ajuste no preenchimento de dados de exportação. Essas correções resolvem rejeições que ocorriam em cenários específicos de emissão nesse município.',
      },
    ],
  },
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
        destaque:
          'Controle de envio de ValorIss via propriedade naoEnviarValorIss',
        texto:
          'Alguns municípios rejeitam notas quando o campo ValorIss é enviado com valor zero ou quando não é esperado pelo provedor. Foi criada a propriedade naoEnviarValorIss que permite controlar por empresa/município se o valor do ISS deve ser incluído no XML de envio, evitando rejeições desnecessárias.',
      },
      {
        icon: '🔧',
        destaque: 'Cancelamento adicionado para provedor',
        texto:
          'O provedor não possuía a operação de cancelamento implementada, o que obrigava os clientes a cancelar manualmente no site da prefeitura. Foi adicionada a operação de cancelamento, permitindo que o cancelamento seja feito diretamente pelo sistema eNotas.',
      },
      {
        icon: '🔧',
        destaque:
          'Consulta por texto "não está ativo ou não existe" para retry',
        texto:
          'Quando a prefeitura retorna a mensagem "não está ativo ou não existe", significa que a nota ainda não foi processada. O sistema agora identifica essa mensagem e faz uma nova tentativa de consulta, em vez de marcar a nota como erro definitivo. Isso resolve casos de notas que ficavam em status de erro quando a prefeitura apenas estava com atraso no processamento.',
      },
      {
        icon: '🔧',
        destaque:
          'PortalNacional: valida endereço do evento apenas quando necessário',
        texto:
          'No Portal Nacional, a validação do endereço do evento estava sendo aplicada mesmo quando o campo idAtvEvt (identificador de atividade do evento) não era informado, causando rejeições indevidas. Agora a validação do endereço só é executada quando o idAtvEvt não está preenchido, corrigindo o fluxo para eventos que não exigem endereço.',
      },
      {
        icon: '🔧',
        destaque: 'Empresa configurada para enviar ConsumidorFinal como false',
        texto:
          'Uma empresa específica precisava enviar o campo ConsumidorFinal como false nas notas, mas o sistema sempre enviava como true por padrão. Foi adicionada a configuração EmpresaEnviaConsumidorFinalFalse para permitir esse comportamento customizado.',
      },
      {
        icon: '📊',
        destaque:
          'Regra de alíquota e tipo de imunidade específica para empresa',
        texto:
          'Uma empresa tinha necessidade de enviar alíquota e tipo de imunidade com regras diferentes do padrão do provedor. Foi ajustada a lógica para aplicar regras específicas de alíquota e imunidade por empresa, sem afetar o comportamento das demais.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento no XML para desserializar corretamente',
        texto:
          'O XML de retorno de alguns provedores continha caracteres ou estruturas que impediam a desserialização correta pelo sistema. Foi adicionado tratamento para sanitizar o XML antes da desserialização, evitando erros de parsing que impediam o processamento da resposta da prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'PDF padrão GIF para contas Nibo e ContaAzul',
        texto:
          'As contas dos integradores Nibo e ContaAzul precisavam utilizar o PDF gerado pelo provedor GIFv2 (via API Nacional) em vez do PDF padrão do eNotas. Foi criada a operação GIFv2GerarPdfImpressaoNFe que baixa o PDF diretamente da prefeitura, e um proxy (GerarPdfImpressaoNFeProxy) que roteia automaticamente entre o PDF GIFv2 e o tradicional com base no SubscriptionID da conta.',
      },
      {
        icon: '🔧',
        destaque: 'Atualiza versão de integração para municípios',
        texto:
          'Alguns municípios tiveram suas versões de integração atualizadas no XML de configuração. Essa atualização garante compatibilidade com as versões mais recentes dos webservices das prefeituras, evitando rejeições por versão desatualizada.',
      },
      {
        icon: '🌐',
        destaque: 'Ajusta cidade de prestação via metadados para exterior',
        texto:
          'Quando o serviço é prestado no exterior, a cidade de prestação precisa ser tratada de forma especial nos metadados da nota. O ajuste garante que a cidade de prestação seja corretamente identificada via metadados mesmo em cenários de exportação de serviço, evitando erros de validação no portal nacional.',
      },
      {
        icon: '🏙️',
        destaque: 'Panamá/GO, Mundo Novo/GO e Guapó/GO integrados ao Centi',
        texto:
          'Três municípios de Goiás — Panamá, Mundo Novo e Guapó — foram integrados ao provedor Centi para emissão de NFS-e. Essas cidades utilizam o sistema Centi para gestão de notas fiscais e agora estão disponíveis para os clientes do eNotas.',
      },
      {
        icon: '🏙️',
        destaque: 'Tanquinho/BA migrado para NfseNacionalV2',
        texto:
          'O município de Tanquinho/BA foi atualizado para o provedor NfseNacionalV2. A cidade aderiu ao portal nacional de NFS-e e as configurações foram atualizadas para o novo sistema.',
      },
      {
        icon: '🏙️',
        destaque: 'Papanduva/SC migrado para IPMv2',
        texto:
          'O município de Papanduva/SC foi atualizado do provedor anterior para o IPMv2. A migração inclui novas URLs e configurações compatíveis com o sistema atual da prefeitura.',
      },
      {
        icon: '🏙️',
        destaque: 'Ribeira do Pombal/BA migrado para WebISSv2',
        texto:
          'O município de Ribeira do Pombal/BA foi atualizado para o provedor WebISSv2. A prefeitura migrou seu sistema de NFS-e e as configurações foram atualizadas para garantir compatibilidade.',
      },
      {
        icon: '📊',
        destaque: 'Ativa UsaNovoFormatoPisCofins para provedor',
        texto:
          'A propriedade UsaNovoFormatoPisCofins foi ativada para um provedor específico, habilitando o novo formato de envio de PIS e COFINS no XML. Esse formato é exigido por municípios que aderiram ao layout mais recente do portal nacional.',
      },
      {
        icon: '🏙️',
        destaque: 'Tapes/RS e Ibicaré/SC aderiram ao portal nacional',
        texto:
          'Os municípios de Tapes/RS e Ibicaré/SC aderiram ao portal nacional de NFS-e e foram configurados no sistema. Clientes que prestam serviço nessas cidades agora podem emitir notas pelo novo sistema nacional.',
      },
      {
        icon: '🔧',
        destaque: 'Limpeza de mensagens de erro no FGMaiss',
        texto:
          'As mensagens de erro retornadas pelas prefeituras que usam o provedor FGMaiss vinham com tags HTML, caracteres especiais e formatação que dificultavam a leitura no painel do cliente. Foi implementada a limpeza dessas mensagens para melhor legibilidade, aplicada em todas as operações do provedor.',
      },
      {
        icon: '📊',
        destaque: 'Tributos aproximados em São Paulo/SP no layout JSON',
        texto:
          'O município de São Paulo/SP no novo layout JSON não estava recebendo os tributos aproximados (Lei da Transparência). Foi ajustado o envio para permitir que os tributos aproximados sejam incluídos no XML de emissão, garantindo conformidade com a legislação e evitando rejeições.',
      },
    ],
  },
  {
    tag: '11/04/2026',
    titulo: 'Sábado — 11 de Abril',
    data: '11/04/2026',
    itens: [
      {
        icon: '📊',
        destaque: 'Tributos aproximados em São Paulo/SP no novo layout JSON',
        texto:
          'O envio de tributos aproximados (percentual de tributos federais, estaduais e municipais conforme a Lei da Transparência) foi ajustado para funcionar corretamente no novo layout JSON de São Paulo/SP. Sem esse ajuste, notas emitidas em SP no novo formato não incluíam as informações de carga tributária aproximada.',
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
          'Percentual aproximado de tributos do novo grupo em São Paulo/SP',
        texto:
          'O sistema de São Paulo/SP passou a disponibilizar o percentual aproximado de tributos em um novo grupo de informações no retorno. O ajuste garante que o eNotas leia o percentual do local correto, mantendo a conformidade com a Lei da Transparência mesmo após mudanças no layout do provedor.',
      },
      {
        icon: '🔧',
        destaque:
          'Lógica Hotmart para definir UsaNBS no CaracteristicasProvedor',
        texto:
          'Foi adicionada lógica específica para contas Hotmart que define automaticamente a flag UsaNBS (Nomenclatura Brasileira de Serviços) nas características do provedor. Isso garante que notas emitidas por contas Hotmart incluam o código NBS quando exigido pelo município, sem necessidade de configuração manual.',
      },
      {
        icon: '🔧',
        destaque: 'Remove código desnecessário',
        texto:
          'Código legado que não era mais utilizado foi removido do sistema. A limpeza reduz a complexidade do codebase e facilita a manutenção, sem impacto funcional para os usuários.',
      },
      {
        icon: '📊',
        destaque: 'Zera pTotTribFed para Franca/SP no XML de NFS-e',
        texto:
          'O município de Franca/SP exige que o campo pTotTribFed (percentual total de tributos federais) seja zerado em determinados cenários. O ajuste foi estendido para incluir Franca/SP na lista de municípios com esse comportamento, evitando rejeições por valor incorreto de tributos federais.',
      },
      {
        icon: '🔧',
        destaque: 'Correção na extração do número da nota fiscal no TinusV2',
        texto:
          'O método ExtrairNota do provedor TinusV2 estava retornando o número do RPS em vez do número da nota fiscal. O número da NFSe agora é extraído do nó correto (nfse:nNFSe) do XML de resposta, e a chave de acesso é derivada do atributo Id do nó infNFSe. Essa correção resolve problemas de sincronização onde a nota aparecia com número errado no sistema.',
      },
      {
        icon: '📊',
        destaque: 'Ativa UsaNovoFormatoPisCofins e consulta por RPS no GIFv2',
        texto:
          'O provedor GIFv2 foi atualizado para usar o novo formato de PIS/COFINS e ganhou a operação de consulta por RPS via API Nacional (SEFIN). A consulta funciona em duas etapas: primeiro busca a chave de acesso pelo idDps, depois recupera o XML completo da NFS-e. Isso permite recuperar notas já processadas pela prefeitura que não retornaram na consulta de lote.',
      },
      {
        icon: '🔧',
        destaque:
          'Tratamento de mensagem em cenário de cancelamento já realizado',
        texto:
          'Quando o usuário tentava cancelar uma nota que já havia sido cancelada na prefeitura, o sistema retornava uma mensagem de erro genérica. Agora o sistema identifica esse cenário e retorna uma mensagem tratada informando que a nota já foi cancelada, melhorando a experiência do usuário.',
      },
      {
        icon: '🏙️',
        destaque: 'São João Batista do Glória/MG migrado para MemoryV2',
        texto:
          'O município de São João Batista do Glória/MG foi migrado para o provedor MemoryV2. Foi criada uma implementação WCF específica (SaoJoaoBatistaDoGloriaWS) com suporte a RecepcionarLoteRps, ConsultarLoteRps, ConsultarNFeRps, GerarNfse e CancelarNFe. A migração resolve problemas de compatibilidade com o sistema anterior da prefeitura.',
      },
      {
        icon: '🏙️',
        destaque: 'Adrianópolis/PR e Tangará/SC aderiram ao portal nacional',
        texto:
          'Os municípios de Adrianópolis/PR e Tangará/SC aderiram ao portal nacional de NFS-e. As configurações foram atualizadas no XML de municípios para que clientes possam emitir notas nessas cidades pelo novo sistema nacional.',
      },
      {
        icon: '🔧',
        destaque: 'Desabilita emissão em lote para empresa específica',
        texto:
          'Uma empresa específica estava enfrentando problemas ao enviar notas em lote para determinado provedor. A emissão em lote foi desabilitada para essa empresa, forçando o envio individual de cada nota e contornando o problema de rejeição em lote.',
      },
      {
        icon: '📊',
        destaque: 'Envio do código NBS para empresa específica',
        texto:
          'Uma empresa específica precisava enviar o código NBS (Nomenclatura Brasileira de Serviços) nas notas, mas a configuração não estava habilitada para ela. O envio do NBS foi ativado para essa empresa, garantindo conformidade com as exigências do município.',
      },
      {
        icon: '🔧',
        destaque: 'Adiciona AutenticidadeNota para provedor',
        texto:
          'O campo AutenticidadeNota foi adicionado ao retorno do provedor, permitindo que o sistema armazene e exiba o código de autenticidade da nota fiscal. Esse código é usado pelos tomadores para verificar a validade da nota no site da prefeitura.',
      },
      {
        icon: '🏙️',
        destaque: 'Serrania/MG aderiu ao portal nacional',
        texto:
          'O município de Serrania/MG aderiu ao portal nacional de NFS-e e foi configurado no sistema. Clientes que prestam serviço nessa cidade agora podem emitir notas pelo novo sistema nacional.',
      },
      {
        icon: '📊',
        destaque:
          'Incidência no município do prestador para empresa específica',
        texto:
          'Uma empresa específica precisava que o município de incidência do ISS fosse sempre o município do prestador, independentemente do local de prestação. A configuração foi adicionada para essa empresa, garantindo o cálculo correto do ISS conforme sua situação tributária.',
      },
      {
        icon: '🏙️',
        destaque: 'Socorro/SP migrado para BethaV3',
        texto:
          'O município de Socorro/SP foi atualizado para o provedor BethaV3. A prefeitura migrou seu sistema de NFS-e e as URLs e configurações foram atualizadas para garantir compatibilidade com o novo provedor.',
      },
      {
        icon: '📊',
        destaque: 'Removidos municípios da flag SempreEnviaAliquotaIss do SN',
        texto:
          'Alguns municípios foram removidos da flag SempreEnviaAliquotaIssEmpresasSimplesNacional. Esses municípios não exigem mais o envio obrigatório da alíquota de ISS para empresas do Simples Nacional, e a remoção evita rejeições por envio de alíquota quando não esperada.',
      },
      {
        icon: '🔧',
        destaque: '[DanfeMS] Ajusta geração da DACE para contingência',
        texto:
          'A geração da DACE (Declaração Auxiliar de Conteúdo Eletrônica) no DanfeMS estava identificando incorretamente o cenário de contingência. O código de tipo de emissão foi corrigido de "9" para "2", e o protocolo agora exibe o sufixo "(EMITIDA EM CONTINGÊNCIA)" quando aplicável, garantindo que documentos emitidos em contingência sejam corretamente identificados.',
      },
      {
        icon: '🔧',
        destaque: 'Melhorias na consulta de lote NFS-e Barueri e logs',
        texto:
          'A consulta de lote de NFS-e em Barueri/SP recebeu melhorias na lógica de processamento e nos logs de diagnóstico. Os logs agora registram mais detalhes sobre o fluxo de consulta, facilitando a investigação de problemas de sincronização nesse município.',
      },
      {
        icon: '🌐',
        destaque: 'Verificação de tomador estrangeiro e TipoLogLocPre',
        texto:
          'Foi adicionada verificação para identificar quando o tomador é estrangeiro e definir corretamente o campo TipoLogLocPre (tipo de logradouro do local de prestação). Sem essa verificação, notas com tomador no exterior podiam ter o tipo de logradouro incorreto, causando rejeição em alguns provedores.',
      },
      {
        icon: '🔧',
        destaque: 'Melhoria no tratamento de endereço no reg20',
        texto:
          'Os dados de teste e o tratamento de endereço no registro reg20 foram atualizados para lidar corretamente com cenários de endereço incompleto ou com formatação diferente, melhorando a robustez do processamento.',
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
        destaque: 'Correção para não travar a fila de processamento',
        texto:
          'Em determinados cenários de erro, a fila de processamento de notas ficava travada sem avançar para a próxima nota. Foi adicionado tratamento para que erros inesperados não bloqueiem a fila, permitindo que as demais notas continuem sendo processadas normalmente.',
      },
      {
        icon: '🌐',
        destaque: 'Ajustes para ISSQN exterior e novos testes de PDF',
        texto:
          'O cálculo do ISSQN para serviços prestados no exterior foi ajustado para tratar corretamente cenários de exportação de serviço. Também foram adicionados novos testes para validar a geração de PDF em diferentes cenários, incluindo notas com prestação no exterior.',
      },
      {
        icon: '🔧',
        destaque:
          'Portal Nacional: exportação apenas para serviço prestado fora + cancelamento GissOnline',
        texto:
          'No Portal Nacional, o sistema estava marcando como exportação notas que tinham tomador no exterior mas com serviço prestado no Brasil. Agora a flag de exportação só é ativada quando o serviço foi efetivamente prestado fora do país. Além disso, o provedor GissOnline foi ajustado para permitir tentativa de cancelamento mesmo quando as características do provedor indicam que não é suportado, pois muitas cidades mudam as regras de cancelamento com frequência.',
      },
      {
        icon: '🔧',
        destaque: 'Consulta NFS-e por RPS com AntiCaptcha em Barueri/SP',
        texto:
          'Barueri/SP exige resolução de captcha para consultar NFS-e por RPS no site da prefeitura. Foi implementada a operação ConsultarNFeRpsV3 que utiliza web scraping com resolução automática de captcha via AntiCaptcha. O fluxo inclui acesso ao site da prefeitura, preenchimento dos dados do RPS, resolução do captcha e extração do resultado, permitindo consultas automatizadas que antes só eram possíveis manualmente.',
      },
      {
        icon: '🔧',
        destaque: 'Testes de Nova Serrana/MG',
        texto:
          'Foram realizados testes de integração para o município de Nova Serrana/MG, validando o fluxo de emissão e consulta de notas fiscais nessa cidade. Os testes garantem que as configurações do município estão corretas antes de ativar em produção.',
      },
      {
        icon: '🔧',
        destaque: 'Bloqueia atualização de API key por subscription',
        texto:
          'Algumas subscriptions específicas não devem ter suas API keys regeneradas pelos usuários, pois isso poderia quebrar integrações ativas. Foi criado o filtro BlockSubscriptionApiKeyUpdateFilter que bloqueia a regeneração de API key para subscriptions configuradas, retornando HTTP 403 e desabilitando o botão na interface do dashboard.',
      },
      {
        icon: '🏙️',
        destaque: 'Boca da Mata/AL aderiu ao portal nacional',
        texto:
          'O município de Boca da Mata/AL aderiu ao portal nacional de NFS-e e foi configurado no sistema. Clientes que prestam serviço nessa cidade agora podem emitir notas pelo novo sistema nacional.',
      },
      {
        icon: '🏙️',
        destaque: 'Governador Valadares/MG aderiu ao portal nacional',
        texto:
          'O município de Governador Valadares/MG aderiu ao portal nacional de NFS-e. As configurações foram atualizadas para que clientes possam emitir notas nessa importante cidade mineira pelo novo sistema nacional.',
      },
      {
        icon: '🔗',
        destaque: 'Alterada porta do endpoint de Santa Rita do Pardo/MS',
        texto:
          'O endpoint de integração de Santa Rita do Pardo/MS teve a porta alterada de 8085 para 8090. A prefeitura mudou a configuração do seu webservice e a atualização garante que as requisições cheguem ao servidor correto.',
      },
      {
        icon: '🔧',
        destaque: 'Remove formatação do CEP do local de prestação',
        texto:
          'O CEP do local de prestação de serviço estava sendo enviado com formatação (hífen) para alguns provedores que exigem apenas dígitos. A formatação foi removida para garantir compatibilidade com todos os provedores.',
      },
      {
        icon: '🔗',
        destaque: 'Atualiza link de homologação de Contagem/MG',
        texto:
          'O link de homologação do webservice de Contagem/MG foi atualizado. A prefeitura alterou a URL do ambiente de testes e a configuração foi atualizada para manter a integração funcionando corretamente.',
      },
      {
        icon: '🔧',
        destaque: 'Retry no cancelamento de NFS-e',
        texto:
          'Quando a prefeitura retorna a mensagem "Tente novamente em alguns instantes" durante o cancelamento, o sistema agora faz uma nova tentativa automaticamente. Antes, essa mensagem era tratada como erro definitivo e o cancelamento falhava, obrigando o usuário a tentar novamente manualmente. O retry garante que o cancelamento seja concluído tanto na API quanto na prefeitura.',
      },
      {
        icon: '🔗',
        destaque: 'Atualiza endpoint de Jardim/MS',
        texto:
          'O endpoint de integração do município de Jardim/MS foi atualizado. A prefeitura alterou a URL do webservice e a configuração foi atualizada para manter a comunicação funcionando.',
      },
      {
        icon: '📊',
        destaque:
          'MunicipioIncidencia como município do prestador para Conta Azul',
        texto:
          'Para a empresa Conta Azul, o município de incidência do ISS foi configurado para ser sempre o município do prestador. Essa configuração é necessária porque a Conta Azul opera com regras específicas de incidência que diferem do padrão geral do sistema.',
      },
      {
        icon: '📊',
        destaque: 'Cenário de envio de alíquota para empresa específica',
        texto:
          'Foi adicionado um cenário específico de envio de alíquota de ISS para uma empresa que precisava de tratamento diferenciado. A configuração garante que a alíquota seja enviada corretamente conforme as regras tributárias aplicáveis a essa empresa.',
      },
      {
        icon: '📊',
        destaque:
          'Correção no envio de alíquota para prestação fora do município',
        texto:
          'Em casos de prestação de serviço fora do município do prestador com ISS não retido, a alíquota estava sendo enviada incorretamente. A correção garante que a alíquota seja omitida ou zerada nesses cenários, conforme as regras fiscais aplicáveis, evitando rejeições na prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Testes de integração e atualização de região de código',
        texto:
          'Foram realizados testes de integração para validar cenários específicos e a região do código foi atualizada para refletir a organização atual do projeto. Também foi normalizada a comparação de séries de RPS na consulta de lote de NFS-e, evitando falhas quando a série tem formatação diferente.',
      },
    ],
  },
  {
    tag: '08/04/2026',
    titulo: 'Quarta-feira — 08 de Abril',
    data: '08/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '07/04/2026',
    titulo: 'Terça-feira — 07 de Abril',
    data: '07/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
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
        destaque: '[GOVBRv3] Remove municípios da flag de alíquota ISS do SN',
        texto:
          'Alguns municípios que usam o provedor GOVBRv3 foram removidos da flag SempreEnviaAliquotaIssEmpresasSimplesNacional. Esses municípios não exigem mais o envio obrigatório da alíquota de ISS para empresas do Simples Nacional, e a remoção evita rejeições por envio de alíquota quando não esperada pelo provedor.',
      },
      {
        icon: '📊',
        destaque:
          'São Gonçalo do Rio Abaixo/MG na regra UsaCIntContribComCodigoServico',
        texto:
          'O município de São Gonçalo do Rio Abaixo/MG foi incluído na regra UsaCIntContribComCodigoServico. Isso significa que o código de integração do contribuinte (cIntContrib) será enviado junto com o código de serviço nas notas emitidas nessa cidade, conforme exigência da prefeitura.',
      },
      {
        icon: '🏙️',
        destaque: 'Vinhedo/SP configurado para emissão sem tomador',
        texto:
          'O município de Vinhedo/SP foi configurado para permitir a emissão de NFS-e sem informar os dados do tomador. Alguns tipos de serviço não possuem tomador identificado, e sem essa configuração as notas eram rejeitadas pela prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Remove obrigatoriedade de RPS sequencial em Varginha/MG',
        texto:
          'A exigência de numeração sequencial de RPS para Varginha/MG foi removida. O município não exige mais que os números de RPS sejam estritamente sequenciais, e a remoção dessa restrição evita bloqueios na emissão quando há gaps na numeração.',
      },
      {
        icon: '🏙️',
        destaque: 'Arroio do Meio/RS migrado para NfseNacionalV2',
        texto:
          'O município de Arroio do Meio/RS foi atualizado para o provedor NfseNacionalV2. A cidade aderiu ao portal nacional de NFS-e e as configurações foram atualizadas para o novo sistema.',
      },
      {
        icon: '🆕',
        destaque: '[GIFv2] Novo provedor GIFv2 no layout nacional',
        texto:
          'Foi criado o novo provedor GIFv2 (NFS-e Nacional v2) com suporte completo a RecepcionarLote (1 nota por lote), RecepcionarDPS, ConsultarLote, Cancelar e GerarPdfImpressao. O provedor utiliza comunicação HTTP com certificado digital e implementa o layout nacional para municípios que migraram para o sistema GIF. Inclui tratamento de códigos de erro da prefeitura e validação de códigos tributários nacionais.',
      },
      {
        icon: '🌐',
        destaque: 'Tratamento de tomador exterior em Cachoeirinha/RS',
        texto:
          'O tratamento de tomador estrangeiro foi implementado para o município de Cachoeirinha/RS (CE-25291). Quando o tomador é do exterior, os campos de endereço e identificação precisam ser preenchidos de forma diferente. O ajuste garante que notas com tomador estrangeiro sejam aceitas pela prefeitura de Cachoeirinha.',
      },
      {
        icon: '🌐',
        destaque: 'Tratamento de tomador estrangeiro (CE-24786)',
        texto:
          'Implementação geral do tratamento de tomador estrangeiro para cenários onde o tomador não possui CPF/CNPJ brasileiro. O ajuste inclui refatorações no código para lidar corretamente com a identificação e endereço de tomadores internacionais em múltiplos provedores.',
      },
      {
        icon: '🔗',
        destaque: 'Atualiza URLs de Embu das Artes/SP',
        texto:
          'As URLs de integração do webservice de Embu das Artes/SP foram atualizadas. A prefeitura alterou os endereços dos seus serviços e a configuração foi atualizada para manter a comunicação funcionando.',
      },
      {
        icon: '🔧',
        destaque:
          'Código 704 de Cotia/SP configurado para enviar código de obra',
        texto:
          'O código de serviço 704 de Cotia/SP foi configurado para enviar o código de obra (CNO) nas notas. Serviços de construção civil com esse código exigem a informação da obra, e sem essa configuração as notas eram rejeitadas.',
      },
      {
        icon: '🏙️',
        destaque: 'Itaituba/PA migrado para CoplanV2',
        texto:
          'O município de Itaituba/PA foi atualizado para o provedor CoplanV2. A prefeitura migrou seu sistema de NFS-e e as configurações foram atualizadas para garantir compatibilidade.',
      },
      {
        icon: '🏙️',
        destaque: 'Serra do Mel/RN migrado para TinusV2',
        texto:
          'O município de Serra do Mel/RN foi atualizado para o provedor TinusV2. A migração inclui novas URLs e configurações compatíveis com o sistema atual da prefeitura.',
      },
      {
        icon: '📊',
        destaque: 'Remove Pejuçara/RS da flag de alíquota ISS do SN',
        texto:
          'O município de Pejuçara/RS foi removido da flag SempreEnviaAliquotaIssEmpresasSimplesNacional. A prefeitura não exige mais o envio obrigatório da alíquota de ISS para empresas do Simples Nacional.',
      },
      {
        icon: '🔧',
        destaque: 'Ajusta tag cClassTrib no XML',
        texto:
          'A tag cClassTrib (classificação tributária) estava sendo posicionada incorretamente no XML de envio para alguns provedores. O ajuste corrige a posição da tag no XML, evitando rejeições por estrutura inválida.',
      },
      {
        icon: '🔧',
        destaque: 'Validação de código NBS para não travar a fila',
        texto:
          'Quando o código NBS (Nomenclatura Brasileira de Serviços) era inválido ou estava em formato incorreto, a fila de processamento travava. Foi adicionada validação prévia do código NBS que retorna erro tratado em vez de travar a fila, permitindo que as demais notas continuem sendo processadas.',
      },
      {
        icon: '📊',
        destaque: 'CST do PIS/COFINS conforme enviado pelo prestador',
        texto:
          'O CST (Código de Situação Tributária) do PIS/COFINS estava sendo sobrescrito pelo sistema em vez de usar o valor informado pelo prestador. O ajuste garante que o CST enviado pelo prestador seja mantido no XML, respeitando a situação tributária real da empresa.',
      },
      {
        icon: '🔧',
        destaque: 'NBS válido informado como padrão',
        texto:
          'Quando o código NBS não era informado pelo cliente, o sistema enviava um valor vazio que causava rejeição. Agora o sistema normaliza o NBS antes da validação e informa um valor válido padrão quando necessário, evitando rejeições por NBS vazio.',
      },
      {
        icon: '🔧',
        destaque: 'IDs em responsável técnico',
        texto:
          'Foram adicionados os IDs de identificação no bloco de responsável técnico do XML. Esses campos são exigidos por alguns provedores para identificar o responsável técnico pela emissão da nota.',
      },
      {
        icon: '📊',
        destaque: 'Ajuste no fallback de IBS/CBS para Simples Nacional',
        texto:
          'O fallback de cálculo de IBS/CBS (novos impostos da reforma tributária) estava sendo aplicado para todas as empresas, mas deveria ser restrito a optantes do Simples Nacional. O ajuste garante que a dedução de IBS/CBS no fallback seja aplicada apenas para empresas do Simples Nacional, evitando cálculos incorretos para empresas do regime normal.',
      },
      {
        icon: '🌐',
        destaque: 'Valor da moeda estrangeira no serviço exterior',
        texto:
          'O campo vServMoeda agora utiliza o valor em moeda estrangeira quando disponível na nota. Antes, o sistema sempre convertia para reais, mas para notas de exportação de serviço o valor na moeda original é necessário para conformidade fiscal.',
      },
      {
        icon: '🔧',
        destaque: 'Refatoração na extração de metadados e moeda estrangeira',
        texto:
          'A lógica de extração de metadados e do valor de serviço em moeda estrangeira foi refatorada para melhor organização e manutenibilidade. A extração agora é mais robusta e trata cenários onde os metadados podem estar ausentes ou em formato inesperado.',
      },
      {
        icon: '📊',
        destaque:
          'Ajustes nos impostos retidos CSLL e apuração própria no TinusV2',
        texto:
          'O cálculo e envio de impostos federais retidos (PIS, COFINS, CSLL) no provedor TinusV2 foi completamente refatorado. Foi criado o método FormatarImpostosFederaisRetidos para centralizar o cálculo com tratamento distinto por tipo de retenção (0, 3-7, 9). O método FormatarImpostosFederaisApuracaoPropria agora deriva a base de cálculo, infere alíquotas ausentes e recalcula valores com arredondamento. Corrige bugs de copy-paste que atribuíam alíquota de COFINS igual à de PIS.',
      },
      {
        icon: '🔧',
        destaque: 'Novo modelo de envio de Obras para SIGISSv5',
        texto:
          'O provedor SIGISSv5 ganhou suporte ao envio de dados de obra (construção civil) com endereço completo. Foram criados os modelos SIGISSv5DadosConstrucaoCivil e SIGISSv5EnderecoObra, e o XML gerado renomeia o elemento ConstrucaoCivil para Obra conforme exigido pelo provedor. Isso permite que notas de construção civil incluam o endereço da obra no envio.',
      },
      {
        icon: '📊',
        destaque: 'Empresas não optantes de Uberaba/MG sem envio de alíquota',
        texto:
          'Empresas não optantes do Simples Nacional em Uberaba/MG foram configuradas para não enviar a alíquota de ISS. A prefeitura de Uberaba rejeita notas de empresas do regime normal quando a alíquota é informada, pois o cálculo é feito pela própria prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Campo CNO implementado para o provedor IPM',
        texto:
          'O campo CNO (Cadastro Nacional de Obras) foi implementado para o provedor IPM. Serviços de construção civil que exigem o número da obra agora podem informar o CNO nas notas emitidas em municípios que usam o provedor IPM, evitando rejeições por falta desse campo obrigatório.',
      },
      {
        icon: '📊',
        destaque: 'Juazeiro/BA na lista de municípios sem MunicipioIncidencia',
        texto:
          'O município de Juazeiro/BA foi adicionado à lista de municípios que não enviam o campo MunicipioIncidencia no XML. A prefeitura de Juazeiro rejeita notas quando esse campo é informado, e a configuração evita essas rejeições.',
      },
      {
        icon: '🔧',
        destaque: 'Desabilita emissão em lote para empresa',
        texto:
          'Uma empresa específica estava enfrentando problemas ao enviar notas em lote. A emissão em lote foi desabilitada para essa empresa, forçando o envio individual e contornando o problema.',
      },
      {
        icon: '🔧',
        destaque: 'Consulta de nota e autenticação de Carapicuíba/SP',
        texto:
          'A consulta de nota em Carapicuíba/SP foi atualizada para incluir os campos de mês início, mês e ano fim na requisição. Esses campos são necessários para a autenticação e consulta correta no webservice da prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Novo modelo de envio de Obras para IssIntel',
        texto:
          'O provedor IssIntel ganhou suporte ao envio de dados de obra (construção civil) com o novo modelo. Similar ao SIGISSv5, o provedor agora aceita informações de obra com endereço completo, permitindo emissão de notas de construção civil com dados da obra.',
      },
      {
        icon: '🌐',
        destaque: 'Variação de país no cadastro de tomador',
        texto:
          'Foi adicionada uma variação no nome do país para lidar com diferentes grafias utilizadas pelos provedores. Alguns provedores retornam o nome do país em formatos diferentes (ex: "Brasil" vs "BRASIL" vs "Brazil"), e o sistema agora reconhece essas variações.',
      },
      {
        icon: '🔧',
        destaque: 'IPM: corrige envio do campo imovel no IBS/CBS',
        texto:
          'O envio do campo <imovel> no bloco de IBS/CBS do provedor IPM estava incorreto, causando rejeição em notas de construção civil. A correção garante que o campo seja preenchido corretamente conforme o layout exigido pelo provedor.',
      },
      {
        icon: '📊',
        destaque: 'MunicipioIncidencia para notas com Exterior',
        texto:
          'O campo MunicipioIncidencia agora é preenchido corretamente para notas com prestação de serviço no exterior. O MunicipioIncidenciaService foi atualizado para tratar cenários de exportação, garantindo que o município de incidência seja definido conforme as regras fiscais para serviços internacionais.',
      },
      {
        icon: '🏙️',
        destaque: 'Ortigueira/PR migrado para BethaV3',
        texto:
          'O município de Ortigueira/PR foi atualizado para o provedor BethaV3. A prefeitura migrou seu sistema de NFS-e e as configurações foram atualizadas.',
      },
      {
        icon: '🔧',
        destaque: 'Não preencher codigoMunicipio quando não informado',
        texto:
          'O campo codigoMunicipio estava sendo preenchido com valor vazio quando não era informado, causando rejeição em alguns provedores. Agora o campo é omitido do XML quando não há valor, evitando o envio de dados vazios.',
      },
      {
        icon: '🔧',
        destaque: 'Try/Catch para evitar travar a fila e trata nome de cidade',
        texto:
          'Foi adicionado tratamento de exceção (try/catch) em pontos críticos do processamento para evitar que erros inesperados travem a fila. Também foi implementado tratamento para cenários onde o nome da cidade não é encontrado no cadastro, retornando erro tratado em vez de exceção.',
      },
      {
        icon: '🔧',
        destaque: 'Adiciona AutenticidadeNota para provedor',
        texto:
          'O campo AutenticidadeNota foi adicionado ao retorno de mais um provedor, permitindo que o código de autenticidade da nota fiscal seja armazenado e exibido para verificação pelos tomadores.',
      },
      {
        icon: '📊',
        destaque: 'Não enviar alíquota quando valor é zero',
        texto:
          'Quando a alíquota de ISS era zero, o sistema ainda enviava o campo no XML, causando rejeição em provedores que interpretam alíquota zero como erro. Agora o campo é omitido quando o valor é zero, evitando rejeições desnecessárias.',
      },
      {
        icon: '📊',
        destaque: 'Dois municípios adicionados à flag de alíquota ISS do SN',
        texto:
          'Dois municípios foram adicionados à flag SempreEnviaAliquotaIssEmpresasSimplesNacional. Esses municípios exigem que empresas do Simples Nacional enviem a alíquota de ISS obrigatoriamente, e a configuração garante o envio correto.',
      },
      {
        icon: '🔧',
        destaque: 'Permite nota sem tomador para município',
        texto:
          'Um município foi configurado para permitir a emissão de NFS-e sem informar os dados do tomador. Alguns tipos de serviço não possuem tomador identificado, e a configuração evita rejeições nesses cenários.',
      },
      {
        icon: '🔧',
        destaque: 'Cenário de emissão para natureza 9',
        texto:
          'Foi adicionado suporte ao cenário de emissão com natureza de operação 9. Essa natureza é utilizada em situações específicas de tributação e não estava sendo tratada pelo sistema, causando erros na emissão.',
      },
      {
        icon: '🏙️',
        destaque: 'Capela do Alto/SP aderiu ao portal nacional',
        texto:
          'O município de Capela do Alto/SP aderiu ao portal nacional de NFS-e e foi configurado no sistema. Clientes que prestam serviço nessa cidade agora podem emitir notas pelo novo sistema nacional.',
      },
      {
        icon: '🔧',
        destaque:
          'Tratamento de reenvio em caso de mensagem de erro específica',
        texto:
          'Quando o provedor retorna uma mensagem de erro específica que indica falha temporária, o sistema agora identifica essa situação e faz o reenvio automático da nota. Antes, essas mensagens eram tratadas como erro definitivo, exigindo intervenção manual do usuário.',
      },
      {
        icon: '🔧',
        destaque: 'Atualiza tratamento de mensagem de erro para provedor',
        texto:
          'O tratamento de mensagens de erro retornadas por um provedor foi atualizado para identificar e tratar corretamente novos padrões de mensagem. Isso melhora a qualidade das mensagens exibidas ao usuário e permite ações automáticas como retry quando aplicável.',
      },
      {
        icon: '🔗',
        destaque: 'Atualiza links de integração de Carapicuíba/SP e Cotia/SP',
        texto:
          'Os links de integração dos webservices de Carapicuíba/SP e Cotia/SP foram atualizados. As prefeituras alteraram as URLs dos seus serviços e as configurações foram atualizadas para manter a comunicação funcionando.',
      },
      {
        icon: '🔧',
        destaque: 'Emissão de Araraquara/SP atualizada para layout padrão',
        texto:
          'A emissão de NFS-e em Araraquara/SP foi atualizada para utilizar o layout padrão do provedor, acrescentando campos que estavam faltando. O ajuste garante compatibilidade com as exigências atuais da prefeitura.',
      },
      {
        icon: '🏙️',
        destaque: 'Colina/SP migrado para NfseNacionalV2',
        texto:
          'O município de Colina/SP foi atualizado para o provedor NfseNacionalV2. A cidade aderiu ao portal nacional de NFS-e e as configurações foram atualizadas.',
      },
      {
        icon: '🔧',
        destaque:
          'SIGISSv5: chave de acesso na consulta de lote (Franco da Rocha/SP)',
        texto:
          'O provedor SIGISSv5 agora lê e atribui a chave de acesso no retorno da consulta de lote para Franco da Rocha/SP. Sem a chave de acesso, as notas consultadas não podiam ser verificadas no site da prefeitura. O ajuste garante que a chave seja extraída e armazenada corretamente.',
      },
      {
        icon: '🏙️',
        destaque:
          'São Luís de Montes Belos/GO migrado de NfseNacionalV2 para Centi',
        texto:
          'O município de São Luís de Montes Belos/GO foi migrado do provedor NfseNacionalV2 para o Centi. A cidade utiliza o sistema Centi para gestão de NFS-e e a migração garante compatibilidade com o provedor correto.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento de exceção para Inscrição Municipal incorreta',
        texto:
          'Quando a Inscrição Municipal informada estava incorreta ou em formato inválido, o sistema lançava uma exceção não tratada que travava o processamento. Foi adicionado tratamento específico que retorna uma mensagem clara ao usuário informando o problema com a Inscrição Municipal.',
      },
      {
        icon: '🏙️',
        destaque: 'Caiçara/RS e Guarujá do Sul/SC migrados para IPM',
        texto:
          'Os municípios de Caiçara/RS e Guarujá do Sul/SC foram atualizados para o provedor IPM. As prefeituras migraram seus sistemas de NFS-e e as configurações foram atualizadas para garantir compatibilidade.',
      },
      {
        icon: '🔧',
        destaque: 'Validação de metadados antes de inserir',
        texto:
          'O sistema tentava inserir metadados sem verificar se já existiam, causando erros de duplicação. Foi adicionada validação prévia que verifica a existência dos metadados antes de inseri-los, evitando erros e garantindo a integridade dos dados.',
      },
    ],
  },
  {
    tag: '05/04/2026',
    titulo: 'Domingo — 05 de Abril',
    data: '05/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'IDs em responsável técnico',
        texto:
          'Foram adicionados os IDs de identificação no bloco de responsável técnico do XML de NFS-e. Esses campos são exigidos por alguns provedores para identificar o responsável técnico pela emissão da nota fiscal.',
      },
      {
        icon: '🔧',
        destaque: 'Normaliza NBS antes da validação',
        texto:
          'O código NBS (Nomenclatura Brasileira de Serviços) era validado sem normalização prévia, o que causava rejeição quando o código tinha espaços ou formatação diferente. Agora o NBS é normalizado antes da validação, evitando envio de NBS vazio ou mal formatado.',
      },
      {
        icon: '🌐',
        destaque: 'Tratamento de NFS-e com prestação no exterior',
        texto:
          'O tratamento de notas fiscais com prestação de serviço no exterior foi aprimorado para lidar corretamente com cenários de exportação. O ajuste garante que os campos específicos de serviço internacional sejam preenchidos conforme as regras fiscais.',
      },
      {
        icon: '🏙️',
        destaque: 'Jardinópolis/SP migrado para GissOnline',
        texto:
          'O município de Jardinópolis/SP foi atualizado para o provedor GissOnline. A prefeitura migrou seu sistema de NFS-e e as configurações foram atualizadas para o novo provedor.',
      },
      {
        icon: '🔧',
        destaque: 'Adição de usuário backoffice',
        texto:
          'Um novo usuário de backoffice foi adicionado ao sistema para permitir operações administrativas. O usuário tem permissões específicas para gerenciamento de configurações e suporte.',
      },
      {
        icon: '📊',
        destaque: 'Fallback de IBS/CBS restrito ao Simples Nacional',
        texto:
          'O fallback de cálculo de IBS/CBS (novos impostos da reforma tributária) estava sendo aplicado para todas as empresas. O ajuste restringe a dedução de IBS/CBS no fallback apenas para optantes do Simples Nacional, corrigindo cálculos incorretos para empresas do regime normal.',
      },
      {
        icon: '🌐',
        destaque: 'Valor de moeda estrangeira no serviço exterior',
        texto:
          'O campo vServMoeda agora utiliza o valor em moeda estrangeira quando disponível. Para notas de exportação de serviço, o valor na moeda original do contrato é necessário para conformidade fiscal, e o sistema agora prioriza esse valor quando presente.',
      },
      {
        icon: '🔧',
        destaque: 'Refatoração na extração de metadados e moeda estrangeira',
        texto:
          'A lógica de extração de metadados e do valor de serviço em moeda estrangeira foi refatorada para melhor organização. A extração agora é mais robusta e trata cenários onde os metadados podem estar ausentes.',
      },
      {
        icon: '📊',
        destaque: 'Impostos retidos CSLL e apuração própria no TinusV2',
        texto:
          'O cálculo de impostos federais retidos (PIS, COFINS, CSLL) no TinusV2 foi refatorado com métodos centralizados para apuração própria e retenção. Corrige bugs de copy-paste e melhora o tratamento por tipo de retenção.',
      },
      {
        icon: '🔧',
        destaque: 'Novo modelo de envio de Obras para SIGISSv5',
        texto:
          'O provedor SIGISSv5 ganhou suporte ao envio de dados de obra com endereço completo. Novos modelos SIGISSv5DadosConstrucaoCivil e SIGISSv5EnderecoObra foram criados para construção civil.',
      },
      {
        icon: '📊',
        destaque: 'Empresas não optantes de Uberaba/MG sem alíquota',
        texto:
          'Empresas não optantes do Simples Nacional em Uberaba/MG foram configuradas para não enviar alíquota de ISS, conforme exigência da prefeitura que faz o cálculo internamente.',
      },
      {
        icon: '🔧',
        destaque: 'Campo CNO para provedor IPM',
        texto:
          'O campo CNO (Cadastro Nacional de Obras) foi implementado para o provedor IPM, permitindo informar o número da obra em notas de construção civil.',
      },
      {
        icon: '📊',
        destaque: 'Juazeiro/BA sem MunicipioIncidencia',
        texto:
          'Juazeiro/BA foi adicionado à lista de municípios que não enviam MunicipioIncidencia, evitando rejeições pela prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Desabilita emissão em lote para empresa',
        texto:
          'A emissão em lote foi desabilitada para uma empresa específica que enfrentava problemas, forçando envio individual de cada nota.',
      },
      {
        icon: '🔧',
        destaque: 'Consulta e autenticação de Carapicuíba/SP',
        texto:
          'A consulta de nota em Carapicuíba/SP foi atualizada com campos de mês início, mês e ano fim necessários para autenticação no webservice.',
      },
      {
        icon: '🔧',
        destaque: 'Obras para IssIntel',
        texto:
          'O provedor IssIntel ganhou suporte ao envio de dados de obra com o novo modelo de construção civil, similar ao implementado no SIGISSv5.',
      },
      {
        icon: '🌐',
        destaque: 'Variação de país no cadastro',
        texto:
          'Adicionada variação no nome do país para lidar com diferentes grafias utilizadas pelos provedores (ex: "Brasil" vs "BRASIL").',
      },
      {
        icon: '🔧',
        destaque: 'IPM: correção no campo imovel do IBS/CBS',
        texto:
          'O envio do campo <imovel> no bloco IBS/CBS do provedor IPM foi corrigido para notas de construção civil, evitando rejeições.',
      },
      {
        icon: '📊',
        destaque: 'MunicipioIncidencia para notas com Exterior',
        texto:
          'O MunicipioIncidenciaService foi atualizado para tratar cenários de exportação de serviço, definindo corretamente o município de incidência para serviços internacionais.',
      },
      {
        icon: '🏙️',
        destaque: 'Ortigueira/PR migrado para BethaV3',
        texto:
          'O município de Ortigueira/PR foi atualizado para o provedor BethaV3 após migração do sistema da prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Não preencher codigoMunicipio quando não informado',
        texto:
          'O campo codigoMunicipio agora é omitido do XML quando não há valor, evitando envio de dados vazios que causavam rejeição.',
      },
      {
        icon: '🔧',
        destaque: 'Try/Catch e tratamento de nome de cidade',
        texto:
          'Adicionado tratamento de exceção em pontos críticos e tratamento para cenários onde o nome da cidade não é encontrado no cadastro.',
      },
      {
        icon: '🔧',
        destaque: 'AutenticidadeNota para provedor',
        texto:
          'O campo AutenticidadeNota foi adicionado ao retorno de um provedor para armazenar o código de autenticidade da nota fiscal.',
      },
      {
        icon: '📊',
        destaque: 'Não enviar alíquota zero',
        texto:
          'O campo de alíquota agora é omitido quando o valor é zero, evitando rejeições em provedores que interpretam alíquota zero como erro.',
      },
      {
        icon: '📊',
        destaque: 'Dois municípios na flag de alíquota ISS do SN',
        texto:
          'Dois municípios foram adicionados à flag SempreEnviaAliquotaIssEmpresasSimplesNacional para envio obrigatório de alíquota.',
      },
      {
        icon: '🔧',
        destaque: 'Nota sem tomador para município',
        texto:
          'Um município foi configurado para permitir emissão de NFS-e sem dados do tomador em tipos de serviço que não possuem tomador identificado.',
      },
      {
        icon: '🔧',
        destaque: 'Cenário de emissão para natureza 9',
        texto:
          'Adicionado suporte ao cenário de emissão com natureza de operação 9, que não estava sendo tratada pelo sistema.',
      },
      {
        icon: '🏙️',
        destaque: 'Capela do Alto/SP aderiu ao portal nacional',
        texto:
          'O município de Capela do Alto/SP aderiu ao portal nacional de NFS-e e foi configurado no sistema.',
      },
      {
        icon: '🔧',
        destaque: 'Reenvio automático em mensagem de erro específica',
        texto:
          'O sistema agora identifica mensagens de erro temporárias do provedor e faz reenvio automático, em vez de tratar como erro definitivo.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento de mensagem de erro atualizado',
        texto:
          'O tratamento de mensagens de erro de um provedor foi atualizado para identificar novos padrões de mensagem e permitir ações automáticas.',
      },
      {
        icon: '🔗',
        destaque: 'Links de Carapicuíba/SP e Cotia/SP atualizados',
        texto:
          'Os links de integração dos webservices de Carapicuíba/SP e Cotia/SP foram atualizados após mudança nas URLs das prefeituras.',
      },
      {
        icon: '🔧',
        destaque: 'Araraquara/SP layout padrão do provedor',
        texto:
          'A emissão em Araraquara/SP foi atualizada para o layout padrão do provedor, acrescentando campos que estavam faltando.',
      },
      {
        icon: '🏙️',
        destaque: 'Colina/SP migrado para NfseNacionalV2',
        texto:
          'O município de Colina/SP aderiu ao portal nacional e foi atualizado para o provedor NfseNacionalV2.',
      },
      {
        icon: '🔧',
        destaque: 'SIGISSv5: chave de acesso em Franco da Rocha/SP',
        texto:
          'O provedor SIGISSv5 agora extrai e armazena a chave de acesso na consulta de lote para Franco da Rocha/SP.',
      },
      {
        icon: '🏙️',
        destaque: 'São Luís de Montes Belos/GO para Centi',
        texto:
          'O município foi migrado de NfseNacionalV2 para Centi, garantindo compatibilidade com o provedor correto.',
      },
      {
        icon: '🔧',
        destaque: 'Exceção para Inscrição Municipal incorreta',
        texto:
          'Adicionado tratamento que retorna mensagem clara quando a Inscrição Municipal está incorreta, em vez de exceção não tratada.',
      },
      {
        icon: '🏙️',
        destaque: 'Caiçara/RS e Guarujá do Sul/SC para IPM',
        texto:
          'Os municípios foram atualizados para o provedor IPM após migração dos sistemas das prefeituras.',
      },
      {
        icon: '🔧',
        destaque: 'Validação de metadados antes de inserir',
        texto:
          'Adicionada verificação de existência dos metadados antes da inserção, evitando erros de duplicação.',
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
        destaque: 'Envio do valor de moeda estrangeira para nota do exterior',
        texto:
          'Notas fiscais de serviço prestado no exterior precisam informar o valor na moeda estrangeira do contrato. O sistema foi ajustado para enviar corretamente o campo de valor em moeda estrangeira, garantindo conformidade com as regras fiscais de exportação de serviço.',
      },
      {
        icon: '🔧',
        destaque: 'Correção de NullReferenceException no MunicipioIncidencia',
        texto:
          'A atribuição do campo MunicipioIncidencia podia causar NullReferenceException quando o município não era encontrado no cadastro. Foi adicionada verificação de nulidade antes da atribuição, evitando erros que travavam o processamento de notas em municípios não cadastrados.',
      },
      {
        icon: '📊',
        destaque:
          'Correção na reordenação de tags CSTPisCofins no XML (DBSeller)',
        texto:
          'A lógica de reordenação das tags <CSTPisCofins> e <TpRetPisCofins> no XML estava sendo aplicada apenas ao primeiro elemento <Valores> do lote. Em lotes com múltiplas notas (múltiplos RPS), as demais notas ficavam com as tags na ordem errada, causando rejeição pela prefeitura. A correção aplica o ajuste para todos os elementos <Valores> do lote, eliminando rejeições em lotes com mais de um RPS.',
      },
      {
        icon: '📊',
        destaque: 'IBS/CBS nos itens de serviço para Sapiranga/RS (DBSeller)',
        texto:
          'O preenchimento dos campos IBS/CBS (novos impostos da reforma tributária) foi implementado nos itens de serviço para Sapiranga/RS no provedor DBSeller. A lógica de organização das tags <cIndOp>, <cClassTrib> e <CodigoNbs> no XML de envio foi ajustada para garantir a ordem correta exigida pelo provedor.',
      },
      {
        icon: '🔧',
        destaque: 'Ajuste para usar proxy static no envio',
        texto:
          'O envio de notas foi ajustado para utilizar o proxy static, melhorando a estabilidade da comunicação com os webservices das prefeituras. O proxy static oferece melhor controle de conexões e evita problemas de timeout em cenários de alta carga.',
      },
      {
        icon: '🔧',
        destaque: 'Ajustes gerais de código',
        texto:
          'Pequenos ajustes de código foram realizados para melhorar a organização e manutenibilidade, incluindo correções de formatação e limpeza de código legado.',
      },
    ],
  },
];
