var changelogData = [
  {
    tag: '15/04/2026',
    titulo: 'Quarta-feira — 15 de Abril',
    data: '15/04/2026',
    itens: [
      {
        icon: '�',
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
        destaque:
          'NF-e Serviço: complemento de endereço e RegimeEspecialTributacao',
        texto:
          'Complementa campos de endereço do tomador/prestador e permite informar o RegimeEspecialTributacao diretamente na nota de serviço (NFeServico). Isso possibilita que empresas com regimes especiais (como MEI, estimativa, cooperativa) enviem essa informação corretamente na emissão.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de propriedades desnecessárias',
        texto:
          'Limpeza de código removendo propriedades que não eram mais utilizadas, reduzindo complexidade e possíveis conflitos na serialização de dados.',
      },
    ],
  },
  {
    tag: '13/04/2026',
    titulo: 'Segunda-feira — 13 de Abril',
    data: '13/04/2026',
    itens: [
      {
        icon: '�',
        destaque: 'Ajuste na remoção de caracteres não numéricos do CEP',
        texto:
          'Corrigido o tratamento do CEP para remover caracteres não numéricos antes do envio à prefeitura. Evita rejeições em provedores que exigem CEP apenas com dígitos.',
      },
      {
        icon: '🏙️',
        destaque: 'Correção na cidade de prestação por código IBGE',
        texto:
          'Removida condição desnecessária na consulta por código IBGE — agora sempre retorna a cidade de prestação do serviço corretamente, independente do cenário.',
      },
      {
        icon: '📊',
        destaque: 'Validação do percentual aproximado do Simples Nacional',
        texto:
          'Adicionada validação para verificar se o percentual aproximado de tributos do Simples Nacional é maior que zero antes de enviar. Evita envio de valores zerados que causavam rejeição.',
      },
      {
        icon: '🔧',
        destaque: 'Vários ajustes no layout 4.2 de Barueri/SP',
        texto:
          'Ajuste no cálculo de total de impostos retidos para não considerar PIS/COFINS não retidos. Correção no preenchimento do endereço completo do local de prestação com valores padrão. Ajuste no preenchimento de dados de exportação.',
      },
      {
        icon: '�',
        destaque: 'Controle de envio do ValorIss via propriedade',
        texto:
          'Implementada a propriedade naoEnviarValorIss que permite controlar se o valor do ISS deve ser enviado ou não na nota. Útil para municípios que calculam o ISS automaticamente e rejeitam quando o valor é informado.',
      },
      {
        icon: '🆕',
        destaque: 'Cancelamento adicionado para provedor',
        texto:
          'Implementada a funcionalidade de cancelamento de NFS-e para um provedor que anteriormente não suportava essa operação. Empresas que emitem por esse provedor agora podem cancelar notas diretamente pelo sistema.',
      },
      {
        icon: '🔧',
        destaque:
          'Melhoria na consulta de notas — texto "não está ativo ou não existe"',
        texto:
          'Incluído o texto de retorno "não está ativo ou não existe" na lista de mensagens que disparam consulta alternativa. Quando a prefeitura retorna essa mensagem, o sistema agora tenta consultar por outro método antes de dar erro.',
      },
      {
        icon: '🌐',
        destaque: 'Portal Nacional: validação de endereço do evento',
        texto:
          'Ajustado o Portal Nacional para validar o endereço do evento apenas quando o idAtvEvt não é informado. Evita erros de validação em cenários onde a atividade do evento já está definida.',
      },
      {
        icon: '🔧',
        destaque: 'Configuração de empresa para não enviar consumidor final',
        texto:
          'Adicionada empresa na lista EmpresaEnviaConsumidorFinalFalse — essa empresa não deve enviar a flag de consumidor final na nota, evitando rejeições em municípios que não aceitam esse campo.',
      },
      {
        icon: '📊',
        destaque:
          'Regra de alíquota e tipo de imunidade para empresa específica',
        texto:
          'Ajustada a regra de alíquota e tipo de imunidade para uma empresa específica que possui configuração tributária diferenciada. Garante que a emissão respeite as particularidades fiscais da empresa.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento de XML para desserialização correta',
        texto:
          'Adicionado tratamento no XML de retorno para desserializar corretamente os dados. Resolve problemas onde o XML da prefeitura vinha em formato inesperado e causava falha na leitura.',
      },
      {
        icon: '🔧',
        destaque: 'PDF padrão GIF para contas Nibo e ContaAzul',
        texto:
          'Configurado para gerar PDF no padrão GIF (layout visual do portal nacional) para as contas Nibo e ContaAzul. Essas integrações agora recebem o PDF no formato correto automaticamente.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de versão de integração para municípios',
        texto:
          'Atualizada a versão de integração utilizada para comunicação com municípios. Garante compatibilidade com as versões mais recentes dos webservices das prefeituras.',
      },
      {
        icon: '🌐',
        destaque: 'Ajuste na cidade de prestação via metadados para exterior',
        texto:
          'Corrigido o preenchimento da cidade de prestação quando o serviço é prestado no exterior, utilizando metadados para determinar corretamente a localidade. Evita erros de validação em notas de exportação de serviço.',
      },
      {
        icon: '🏙️',
        destaque: 'Centi: integração para Panamá/GO, Mundo Novo/GO e Guapó/GO',
        texto:
          'Adicionada integração com o provedor Centi para os municípios de Panamá/GO, Mundo Novo/GO e Guapó/GO. Essas cidades agora podem emitir NFS-e pelo sistema através do provedor Centi.',
      },
      {
        icon: '🏙️',
        destaque: 'Tanquinho/BA migrado para NfseNacionalV2',
        texto:
          'Atualizado o município de Tanquinho/BA para utilizar o provedor NfseNacionalV2 (Portal Nacional). O município aderiu ao portal nacional e a integração foi atualizada.',
      },
      {
        icon: '🏙️',
        destaque: 'Papanduva/SC migrado para IPMv2',
        texto:
          'Atualizado o provedor de Papanduva/SC para IPMv2. O município atualizou seu sistema de NFS-e e a integração foi migrada para a nova versão.',
      },
      {
        icon: '🏙️',
        destaque: 'Ribeira do Pombal/BA migrado para WebIssV2',
        texto:
          'Atualizado o provedor de Ribeira do Pombal/BA para WebIssV2. O município trocou de sistema e a integração foi atualizada para o novo provedor.',
      },
      {
        icon: '📊',
        destaque: 'Ativação de UsaNovoFormatoPisCofins para provedor',
        texto:
          'Ativada a propriedade UsaNovoFormatoPisCofins para um provedor, habilitando o novo formato de envio de PIS/COFINS conforme exigido pela atualização do layout nacional.',
      },
      {
        icon: '🏙️',
        destaque: 'Tapes/RS aderiu ao Portal Nacional',
        texto:
          'O município de Tapes/RS aderiu ao Portal Nacional de NFS-e. A integração foi configurada para utilizar o NfseNacionalV2.',
      },
      {
        icon: '🏙️',
        destaque: 'Ibicaré/SC aderiu ao Portal Nacional',
        texto:
          'O município de Ibicaré/SC aderiu ao Portal Nacional de NFS-e. A integração foi configurada para utilizar o NfseNacionalV2.',
      },
      {
        icon: '🔧',
        destaque: 'Limpeza de mensagens de erro do FGMaiss',
        texto:
          'Melhorada a legibilidade das mensagens de erro retornadas pelo provedor FGMaiss. As mensagens agora são mais claras e facilitam o diagnóstico de problemas na emissão.',
      },
      {
        icon: '📊',
        destaque: 'Tributos aproximados em São Paulo/SP no layout JSON',
        texto:
          'Ajustado para permitir o envio dos tributos aproximados em São Paulo/SP no novo layout JSON. Garante que as informações de carga tributária aproximada sejam transmitidas corretamente.',
      },
      {
        icon: '🔧',
        destaque: 'Percentual aproximado de tributos em São Paulo/SP',
        texto:
          'Ajuste em São Paulo/SP para pegar o percentual aproximado de tributos do novo grupo de informações. Adapta a leitura dos dados tributários ao novo formato do layout.',
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
        destaque: 'Tributos aproximados em São Paulo/SP no layout JSON',
        texto:
          'Ajustado para permitir enviar os tributos aproximados em São Paulo/SP no novo layout JSON. Complementa o ajuste anterior garantindo que o campo seja preenchido corretamente na serialização.',
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
        icon: '🏙️',
        destaque: 'Adrianópolis/PR aderiu ao Portal Nacional',
        texto:
          'O município de Adrianópolis/PR aderiu ao Portal Nacional de NFS-e. A integração foi configurada para utilizar o NfseNacionalV2.',
      },
      {
        icon: '📊',
        destaque:
          'Remoção de municípios da flag SempreEnviaAliquotaIssEmpresasSimplesNacional',
        texto:
          'Removidos alguns municípios da flag que forçava o envio de alíquota ISS para empresas do Simples Nacional. Esses municípios passaram a calcular a alíquota automaticamente.',
      },
      {
        icon: '📊',
        destaque: 'Zeragem de pTotTribFed estendida para Franca/SP',
        texto:
          'Estendida a regra de zerar o campo pTotTribFed (percentual total de tributos federais) para Franca/SP no XML de NFS-e. Evita rejeição pela prefeitura que não aceita esse campo preenchido.',
      },
      {
        icon: '📊',
        destaque: 'Envio de Código NBS para empresa específica',
        texto:
          'Adicionado o envio do Código NBS (Nomenclatura Brasileira de Serviços) para uma empresa específica que necessita dessa informação na emissão de NFS-e.',
      },
      {
        icon: '📊',
        destaque: 'Ativação de UsaNovoFormatoPisCofins e consulta por RPS',
        texto:
          'Ativada a propriedade UsaNovoFormatoPisCofins e criada consulta por RPS para um provedor. Permite o envio no novo formato de PIS/COFINS e adiciona a capacidade de consultar notas pelo número do RPS.',
      },
      {
        icon: '🏙️',
        destaque: 'São João Batista do Glória/MG migrado para MemoryV2',
        texto:
          'Atualizado o provedor de São João Batista do Glória/MG para MemoryV2. O município trocou de sistema de NFS-e e as URLs, namespace e configurações foram atualizadas para o novo provedor.',
      },
      {
        icon: '🔧',
        destaque: 'Correção na extração do número da nota fiscal',
        texto:
          'Corrigido o método de extração do número da nota fiscal para não retornar o número incorreto em cenários específicos. Evita que o sistema registre um número de nota diferente do real.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento de mensagem em tentativa de cancelamento',
        texto:
          'Adicionado tratamento para retornar mensagem tratada em cenário de tentativa de cancelamento que falha. A mensagem de erro agora é mais clara para o usuário.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de código desnecessário',
        texto:
          'Limpeza de código removendo trechos que não eram mais utilizados, simplificando a manutenção do sistema.',
      },
      {
        icon: '🔧',
        destaque: 'Lógica de UsaNBS nas características do provedor',
        texto:
          'Adicionada lógica Hotmart para definir a propriedade UsaNBS nas características do provedor. Permite controlar quais provedores exigem o código NBS na emissão.',
      },
      {
        icon: '📊',
        destaque:
          'Inclusão de empresaID na lista de incidência no município do prestador',
        texto:
          'Incluído empresaID na lista de incidência no município do prestador. Permite que empresas específicas tenham o município de incidência definido como o do prestador.',
      },
      {
        icon: '🏙️',
        destaque: 'Socorro/SP migrado para BethaV3',
        texto:
          'Atualizado o município de Socorro/SP para o provedor BethaV3. O município atualizou seu sistema e a integração foi migrada para a versão mais recente.',
      },
      {
        icon: '🏙️',
        destaque: 'Tangará/SC aderiu ao Portal Nacional',
        texto:
          'O município de Tangará/SC aderiu ao Portal Nacional de NFS-e. A integração foi configurada para utilizar o NfseNacionalV2.',
      },
      {
        icon: '🏙️',
        destaque: 'Serrania/MG aderiu ao Portal Nacional',
        texto:
          'O município de Serrania/MG aderiu ao Portal Nacional de NFS-e. A integração foi configurada para utilizar o NfseNacionalV2.',
      },
      {
        icon: '🔧',
        destaque: 'Desabilitação de emissão em lote para empresa',
        texto:
          'Desabilitada a emissão em lote para uma empresa específica que estava enfrentando problemas com envio em lote. A emissão passa a ser individual.',
      },
      {
        icon: '🔧',
        destaque: 'Adição de AutenticidadeNota',
        texto:
          'Adicionada a funcionalidade de AutenticidadeNota para um provedor, permitindo a verificação de autenticidade das notas emitidas.',
      },
      {
        icon: '🧾',
        destaque: 'Ajuste na geração da DACE para contingência (DanfeMS)',
        texto:
          'Ajustada a geração da DACE (Documento Auxiliar de Contingência Eletrônico) para cenários de contingência no DanfeMS. Garante que o documento auxiliar seja gerado corretamente quando o sistema opera em modo de contingência.',
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
        destaque: 'Melhorias na consulta de lote NFS-e Barueri/SP',
        texto:
          'Melhorias na consulta de lote de NFS-e em Barueri/SP com aprimoramento de logs para facilitar o diagnóstico de problemas. Inclui ajustes na comunicação com o webservice da prefeitura.',
      },
      {
        icon: '🌐',
        destaque: 'Verificação de tomador estrangeiro e TipoLogLocPre',
        texto:
          'Adicionada verificação para identificar tomador estrangeiro e definir corretamente o TipoLogLocPre (tipo de logradouro do local de prestação). Garante que notas com tomador no exterior sejam preenchidas corretamente.',
      },
      {
        icon: '🔧',
        destaque:
          'Atualização de dados de teste e tratamento de endereço no reg20',
        texto:
          'Atualizados dados de teste e melhorado o tratamento de endereço no registro 20 (reg20). Corrige cenários onde o endereço não era preenchido corretamente na estrutura de dados.',
      },
    ],
  },
  {
    tag: '08/04/2026',
    titulo: 'Quarta-feira — 08 de Abril',
    data: '08/04/2026',
    itens: [
      {
        icon: '🌐',
        destaque: 'Ajustes para ISSQN exterior e novos testes de PDF',
        texto:
          'Implementados ajustes no cálculo de ISSQN para serviços prestados no exterior, com novos testes de geração de PDF. Garante que notas de exportação de serviço tenham o ISSQN calculado e o PDF gerado corretamente.',
      },
      {
        icon: '🌐',
        destaque: 'Exportação no Portal Nacional e cancelamento no GissOnline',
        texto:
          'Ajuste no Portal Nacional para considerar como exportação apenas se o serviço foi prestado fora do país. Também ajustado para permitir tentar cancelar NFS-e no provedor GissOnline, já que muitas cidades mudam as regras de cancelamento com frequência — o sistema agora informa mas permite a tentativa.',
      },
      {
        icon: '🔧',
        destaque: 'Consulta NFS-e por RPS com AntiCaptcha em Barueri/SP',
        texto:
          'Implementada consulta de NFS-e por RPS com resolução automática de captcha (AntiCaptcha) para Barueri/SP. Permite consultar notas pelo número do RPS mesmo quando a prefeitura exige captcha.',
      },
      {
        icon: '🔧',
        destaque: 'Testes em Nova Serrana/MG',
        texto:
          'Realizados testes de integração com o município de Nova Serrana/MG para validar o funcionamento da emissão.',
      },
      {
        icon: '🔒',
        destaque: 'Bloqueio de atualização de API key por subscription ID',
        texto:
          'Implementado bloqueio para impedir a atualização de API key por subscription ID. Medida de segurança para evitar alterações indevidas nas chaves de API.',
      },
      {
        icon: '🏙️',
        destaque: 'Boca da Mata/AL aderiu ao Portal Nacional',
        texto:
          'O município de Boca da Mata/AL aderiu ao Portal Nacional de NFS-e. A integração foi configurada para utilizar o NfseNacionalV2.',
      },
      {
        icon: '🏙️',
        destaque: 'Governador Valadares/MG aderiu ao Portal Nacional',
        texto:
          'O município de Governador Valadares/MG aderiu ao Portal Nacional de NFS-e. A integração foi configurada para utilizar o NfseNacionalV2.',
      },
      {
        icon: '🔗',
        destaque: 'Alteração de porta do endpoint de Santa Rita do Pardo/MS',
        texto:
          'Alterada a porta do endpoint de Santa Rita do Pardo/MS de 8085 para 8090. A prefeitura mudou a porta do webservice e a integração foi atualizada.',
      },
      {
        icon: '📮',
        destaque: 'Remoção de formatação do CEP do local de prestação',
        texto:
          'Removida a formatação do CEP do local de prestação antes do envio. Alguns provedores rejeitavam o CEP formatado (com hífen) e agora é enviado apenas com dígitos.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização do link de homologação de Contagem/MG',
        texto:
          'Atualizado o link de homologação do webservice de Contagem/MG. A prefeitura alterou a URL do ambiente de testes.',
      },
      {
        icon: '🔧',
        destaque: 'Retry no cancelamento para garantir execução na prefeitura',
        texto:
          'Adicionado mecanismo de retry no cancelamento para garantir que o cancelamento seja efetivado tanto na API quanto na prefeitura. Evita cenários onde o cancelamento ficava registrado apenas internamente.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização do endpoint de Jardim/MS',
        texto:
          'Atualizado o endpoint do município de Jardim/MS. A prefeitura alterou a URL do webservice e a integração foi atualizada.',
      },
      {
        icon: '📊',
        destaque:
          'MunicipioIncidencia como município do prestador para ContaAzul',
        texto:
          'Definido o MunicipioIncidencia como município do prestador para a empresa Conta Azul. Garante que a incidência do ISS seja calculada corretamente para essa integração.',
      },
      {
        icon: '📊',
        destaque: 'Cenário de envio de alíquota para empresa',
        texto:
          'Adicionado cenário de envio de alíquota para uma empresa específica que necessitava de configuração diferenciada no envio da alíquota de ISS.',
      },
      {
        icon: '📊',
        destaque:
          'Correção no envio de alíquota em prestação fora do município',
        texto:
          'Corrigido o envio da alíquota em casos de prestação de serviço fora do município com ISS não retido. O sistema agora calcula e envia a alíquota corretamente nesse cenário.',
      },
      {
        icon: '🔧',
        destaque: 'Correção para não travar a fila',
        texto:
          'Ajustado para não travar a fila de processamento em cenários de erro específicos. Garante que uma nota com problema não bloqueie o processamento das demais.',
      },
      {
        icon: '🔧',
        destaque: 'Teste de integração',
        texto: 'Commit de teste para validação de integração no ambiente.',
      },
    ],
  },
  {
    tag: '07/04/2026',
    titulo: 'Terça-feira — 07 de Abril',
    data: '07/04/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Itaituba/PA migrado para CoplanV2',
        texto:
          'Atualizado o município de Itaituba/PA para o provedor CoplanV2. O município atualizou seu sistema de NFS-e e a integração foi migrada para a nova versão do provedor.',
      },
      {
        icon: '📊',
        destaque: 'Ajuste no CST do PIS/COFINS conforme enviado pelo prestador',
        texto:
          'Ajustado para enviar o CST (Código de Situação Tributária) do PIS/COFINS conforme informado pelo prestador, em vez de usar um valor padrão. Garante que a tributação reflita a realidade fiscal da empresa.',
      },
      {
        icon: '🌐',
        destaque: 'Tratamento de tomador exterior em Cachoeirinha/RS',
        texto:
          'Implementado tratamento específico para tomador estrangeiro em Cachoeirinha/RS (CE-25291). Corrige cenários onde notas com tomador no exterior eram rejeitadas pelo provedor.',
      },
      {
        icon: '🔧',
        destaque: 'Validação de código NBS para não travar a fila',
        texto:
          'Adicionada validação do código NBS antes do envio para evitar que notas com NBS inválido travem a fila de processamento. O sistema agora valida e informa o erro sem bloquear as demais notas.',
      },
      {
        icon: '📊',
        destaque:
          'São Gonçalo do Rio Abaixo/MG na regra UsaCIntContribComCodigoServico',
        texto:
          'Incluído São Gonçalo do Rio Abaixo/MG na regra UsaCIntContribComCodigoServico. O município exige que o código de contribuição seja enviado junto com o código de serviço.',
      },
      {
        icon: '🔧',
        destaque: 'Refatorações no tratamento de tomador estrangeiro',
        texto:
          'Série de refatorações no código de tratamento de tomador estrangeiro (CE-24786-2), melhorando a organização e manutenibilidade do código que lida com notas para o exterior.',
      },
      {
        icon: '📊',
        destaque:
          'GOVBRv3: remoção de municípios da flag SempreEnviaAliquotaIss',
        texto:
          'Removidos municípios do provedor GOVBRv3 da flag SempreEnviaAliquotaIssEmpresasSimplesNacional. Esses municípios passaram a calcular a alíquota automaticamente no provedor.',
      },
      {
        icon: '🏙️',
        destaque: 'Vinhedo/SP configurado para emissão sem tomador',
        texto:
          'Configurado Vinhedo/SP para permitir emissão de NFS-e sem informar o tomador. Útil para serviços prestados a pessoa física não identificada.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de RPS sequencial obrigatório em Varginha/MG',
        texto:
          'Removida a exigência de RPS sequencial para Varginha/MG. O município passou a aceitar RPS fora de ordem, eliminando bloqueios na emissão.',
      },
      {
        icon: '🏙️',
        destaque: 'Arroio do Meio/RS migrado para NfseNacionalV2',
        texto:
          'Atualizado o provedor de Arroio do Meio/RS para NfseNacionalV2. O município aderiu ao Portal Nacional de NFS-e.',
      },
      {
        icon: '🆕',
        destaque: 'Novo provedor GIFv2 no layout nacional',
        texto:
          'Criado novo provedor GIFv2 no layout nacional. Este provedor implementa a versão 2 do GIF (Gerenciador de Informações Fiscais) seguindo o padrão do layout nacional de NFS-e.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de URLs de Embu das Artes/SP',
        texto:
          'Atualizadas as URLs do webservice de Embu das Artes/SP. A prefeitura alterou os endpoints de comunicação e a integração foi atualizada.',
      },
      {
        icon: '🔧',
        destaque:
          'Código 704 de Cotia/SP configurado para enviar código de obra',
        texto:
          'Configurado o código de serviço 704 de Cotia/SP para enviar o código de obra na emissão. Necessário para serviços de construção civil nesse município.',
      },
      {
        icon: '🏙️',
        destaque: 'Serra do Mel/RN migrado para TinusV2',
        texto:
          'Atualizado o município de Serra do Mel/RN para o provedor TinusV2. O município atualizou seu sistema de NFS-e.',
      },
      {
        icon: '📊',
        destaque: 'Remoção de Pejuçara/RS da flag SempreEnviaAliquotaIss',
        texto:
          'Removido Pejuçara/RS da flag SempreEnviaAliquotaIssEmpresasSimplesNacional. O município passou a calcular a alíquota automaticamente.',
      },
      {
        icon: '🔧',
        destaque: 'Ajuste na tag cClassTrib',
        texto:
          'Corrigida a tag cClassTrib (classificação tributária) no XML de envio. Garante que o valor seja preenchido corretamente conforme exigido pelo layout nacional.',
      },
      {
        icon: '🔧',
        destaque: 'Atualização da região do código',
        texto:
          'Atualizada a região do código para melhor organização e manutenibilidade do projeto.',
      },
      {
        icon: '🔧',
        destaque: 'Normalização de comparação de série RPS em consulta de lote',
        texto:
          'Normalizada a comparação de série do RPS na consulta de lote de NFS-e. Evita falhas na consulta quando a série tem formatação diferente entre o envio e o retorno.',
      },
      {
        icon: '🔧',
        destaque: 'Teste de integração',
        texto: 'Commit de teste para validação de integração no ambiente.',
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
        destaque: 'Atualização de tratamento em mensagem de erro para provedor',
        texto:
          'Atualizado o tratamento de mensagens de erro para um provedor, melhorando a clareza das mensagens retornadas ao usuário quando ocorre falha na emissão.',
      },
      {
        icon: '🌐',
        destaque: 'Valor da moeda estrangeira (vServMoeda) no envio',
        texto:
          'Ajustado para permitir que o campo vServMoeda utilize o valor em moeda estrangeira quando presente. Garante que notas de exportação de serviço informem corretamente o valor na moeda do tomador.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de links de integração de Carapicuíba/SP',
        texto:
          'Atualizados os links de integração do webservice de Carapicuíba/SP. A prefeitura alterou as URLs dos endpoints.',
      },
      {
        icon: '🔧',
        destaque: 'Campo CNO implementado para o provedor IPM',
        texto:
          'Implementado o campo CNO (Cadastro Nacional de Obras) para o provedor IPM. Permite que empresas de construção civil informem o número da obra na emissão de NFS-e.',
      },
      {
        icon: '🔧',
        destaque: 'Novo modelo de envio de Obras para IssIntel e SIGISSv5',
        texto:
          'Implementado novo modelo de envio de Obras para os provedores IssIntel e SIGISSv5. Atualiza a forma como os dados de obra são transmitidos, seguindo o novo padrão exigido pelos provedores.',
      },
      {
        icon: '🔗',
        destaque: 'Consulta de nota e autenticação de Carapicuíba/SP',
        texto:
          'Inseridos mês início, mês e ano fim na consulta da nota e autenticação de Carapicuíba/SP. Permite filtrar consultas por período e autenticar corretamente.',
      },
      {
        icon: '📊',
        destaque: 'Empresas não optantes de Uberaba/MG sem envio de alíquota',
        texto:
          'Adicionadas empresas não optantes do Simples Nacional de Uberaba/MG para não enviarem alíquota. Essas empresas têm a alíquota calculada automaticamente pela prefeitura.',
      },
      {
        icon: '📊',
        destaque: 'Dois municípios adicionados na flag SempreEnviaAliquotaIss',
        texto:
          'Adicionados dois municípios na flag SempreEnviaAliquotaIssEmpresasSimplesNacional. Esses municípios exigem que a alíquota seja sempre informada para empresas do Simples.',
      },
      {
        icon: '🏙️',
        destaque: 'Caiçara/RS e Guarujá do Sul/SC migrados para IPM',
        texto:
          'Atualizados os municípios de Caiçara/RS e Guarujá do Sul/SC para o provedor IPM. Os municípios adotaram o sistema IPM para emissão de NFS-e.',
      },
      {
        icon: '🔧',
        destaque:
          'Tratamento de reenvio em caso de mensagem de erro específica',
        texto:
          'Adicionado tratamento de reenvio automático quando uma mensagem de erro específica é retornada pela prefeitura. O sistema tenta reenviar a nota automaticamente em vez de falhar.',
      },
      {
        icon: '🔧',
        destaque: 'Ajustes nos impostos retidos na tag CSLL e apuração própria',
        texto:
          'Ajustados os envios de impostos retidos na tag CSLL e apuração própria. Corrige cenários onde os valores de CSLL retido não eram calculados corretamente.',
      },
      {
        icon: '📊',
        destaque: 'Juazeiro/BA na lista de municípios sem MunicipioIncidencia',
        texto:
          'Adicionado Juazeiro/BA à lista de municípios que não enviam MunicipioIncidencia. O município não aceita esse campo e a emissão falhava quando era informado.',
      },
      {
        icon: '🔧',
        destaque: 'Desabilitação de emissão em lote para empresa',
        texto:
          'Desabilitada a emissão em lote para uma empresa específica que estava enfrentando problemas com envio em lote.',
      },
      {
        icon: '🔧',
        destaque: 'IPM: correção no envio do imóvel no IBS/CBS',
        texto:
          'Corrigido o envio da tag <imovel> no IBS/CBS para o provedor IPM. O campo estava sendo preenchido incorretamente, causando rejeição em notas de construção civil.',
      },
      {
        icon: '🌐',
        destaque: 'MunicipioIncidenciaService para notas com Exterior',
        texto:
          'Adicionado MunicipioIncidenciaService para notas com prestação no exterior. Define corretamente o município de incidência quando o serviço é prestado fora do país.',
      },
      {
        icon: '🔧',
        destaque: 'Variação de país adicionada',
        texto:
          'Adicionada variação de nome de país para compatibilidade com diferentes formatos aceitos pelos provedores. Evita rejeição quando o nome do país é informado em formato diferente do esperado.',
      },
      {
        icon: '🏙️',
        destaque: 'Ortigueira/PR migrado para BethaV3',
        texto:
          'Atualizado o município de Ortigueira/PR para o provedor BethaV3. O município atualizou seu sistema de NFS-e.',
      },
      {
        icon: '🔧',
        destaque: 'Código de município não preenchido quando não informado',
        texto:
          'Ajustado para não preencher o codigoMunicipio quando o mesmo não é informado. Evita envio de valor vazio ou inválido que causava rejeição.',
      },
      {
        icon: '🔧',
        destaque:
          'Try/Catch para evitar travar a fila e tratar cidade não encontrada',
        texto:
          'Inserido Try/Catch para evitar que erros travem a fila de processamento. Também adicionado tratamento para quando o nome da cidade não é encontrado na base.',
      },
      {
        icon: '🔧',
        destaque: 'Adição de AutenticidadeNota',
        texto:
          'Adicionada a funcionalidade de AutenticidadeNota para um provedor, permitindo a verificação de autenticidade das notas emitidas.',
      },
      {
        icon: '📊',
        destaque: 'Configuração para não enviar alíquota quando zero',
        texto:
          'Configurado para não enviar alíquota quando o valor é zero. Evita rejeição em provedores que não aceitam alíquota zerada.',
      },
      {
        icon: '🔧',
        destaque: 'Atualização para permitir nota sem tomador',
        texto:
          'Atualizado para permitir emissão de nota sem informar o tomador. Útil para serviços prestados a consumidor final não identificado.',
      },
      {
        icon: '🔧',
        destaque: 'Cenário de emissão para natureza 9',
        texto:
          'Adicionado cenário de emissão para natureza de operação 9. Permite a emissão de notas com essa natureza específica que antes não era suportada.',
      },
      {
        icon: '🏙️',
        destaque: 'Capela do Alto/SP aderiu ao Portal Nacional',
        texto:
          'O município de Capela do Alto/SP aderiu ao Portal Nacional de NFS-e. A integração foi configurada para utilizar o NfseNacionalV2.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de links de integração em Cotia/SP',
        texto:
          'Atualizados os links de integração do webservice de Cotia/SP. A prefeitura alterou as URLs dos endpoints.',
      },
      {
        icon: '🔧',
        destaque: 'Atualização de emissão de Araraquara/SP para layout padrão',
        texto:
          'Atualizada a emissão de Araraquara/SP para o layout padrão do provedor, acrescentando campos necessários. Garante compatibilidade com a versão atual do webservice.',
      },
      {
        icon: '🏙️',
        destaque: 'Colina/SP migrado para NfseNacionalV2',
        texto:
          'Atualizado o município de Colina/SP para o provedor NfseNacionalV2. O município aderiu ao Portal Nacional de NFS-e.',
      },
      {
        icon: '🔧',
        destaque:
          'SIGISSv5: chave de acesso no retorno da consulta de lote (Franco da Rocha/SP)',
        texto:
          'Incluída leitura e atribuição da chave de acesso no retorno da consulta de lote do SIGISSv5 para Franco da Rocha/SP. Permite que o sistema registre a chave de acesso da nota emitida.',
      },
      {
        icon: '🏙️',
        destaque:
          'São Luís de Montes Belos/GO migrado de NfseNacionalV2 para Centi',
        texto:
          'Alterado São Luís de Montes Belos/GO de NfseNacionalV2 para o provedor Centi. O município mudou de sistema e a integração foi atualizada.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento de exceção para Inscrição Municipal incorreta',
        texto:
          'Adicionado tratamento de exceção quando a Inscrição Municipal está incorreta. O sistema agora retorna uma mensagem clara em vez de erro genérico.',
      },
      {
        icon: '🔧',
        destaque: 'Validação de metadados antes de inserir',
        texto:
          'Adicionada validação para verificar se o metadados existe antes de tentar inseri-lo. Evita erros de referência nula quando o metadados não está presente.',
      },
      {
        icon: '🔧',
        destaque: 'NBS válido informado por padrão',
        texto:
          'Ajustado para informar um NBS (Nomenclatura Brasileira de Serviços) válido quando necessário. Evita rejeição por NBS inválido ou vazio.',
      },
      {
        icon: '🔧',
        destaque: 'IDs adicionados em responsável técnico',
        texto:
          'Adicionados IDs na configuração de responsável técnico. Permite identificar corretamente o responsável técnico na emissão.',
      },
      {
        icon: '🔧',
        destaque: 'Normalização do NBS antes da validação',
        texto:
          'Normalizado o NBS antes da validação para evitar envio de NBS vazio. Remove espaços e caracteres inválidos antes de verificar se o código é válido.',
      },
      {
        icon: '🌐',
        destaque: 'Tratamento de NFS-e com prestação no exterior',
        texto:
          'Implementado tratamento completo de NFS-e com prestação de serviço no exterior. Inclui ajustes na identificação do local de prestação e no preenchimento dos campos específicos de exportação.',
      },
      {
        icon: '🏙️',
        destaque: 'Jardinópolis/SP migrado para GissOnline',
        texto:
          'Atualizado o provedor de Jardinópolis/SP para GissOnline. O município trocou de sistema de NFS-e.',
      },
      {
        icon: '🔧',
        destaque: 'Adição de usuário backoffice',
        texto:
          'Adicionado usuário de backoffice para operações administrativas no sistema.',
      },
      {
        icon: '📊',
        destaque: 'Fallback de IBS/CBS apenas para optante do Simples Nacional',
        texto:
          'Ajustado o fallback de IBS/CBS para deduzir valores apenas para empresas optantes do Simples Nacional. Empresas de outros regimes não devem ter essa dedução aplicada automaticamente.',
      },
      {
        icon: '🌐',
        destaque: 'Refatoração da extração de valor em moeda estrangeira',
        texto:
          'Refatorada a lógica de extração do valorServicoMoedaEstrangeira e dos metadados. Melhora a organização do código e garante que o valor em moeda estrangeira seja extraído corretamente.',
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
        destaque: 'Envio do valor da moeda estrangeira para nota do exterior',
        texto:
          'Implementado o envio do valor da moeda estrangeira para notas de serviço prestado no exterior. Permite que o valor em moeda estrangeira seja informado corretamente na NFS-e de exportação.',
      },
      {
        icon: '🔧',
        destaque:
          'Correção na reordenação das tags CSTPisCofins e TpRetPisCofins',
        texto:
          'Corrigida a lógica de reordenação das tags CSTPisCofins e TpRetPisCofins no XML, aplicando o ajuste para todos os elementos Valores do lote. Garante compatibilidade em lotes com múltiplas notas e elimina rejeições por ordem incorreta das tags.',
      },
      {
        icon: '🔧',
        destaque: 'Correção de NullReferenceException no MunicipioIncidencia',
        texto:
          'Ajustada a atribuição de MunicipioIncidencia para evitar NullReferenceException. Corrige erro que ocorria quando o município de incidência não estava definido.',
      },
      {
        icon: '🏙️',
        destaque: 'IBS/CBS implementado para Sapiranga/RS (DBSeller)',
        texto:
          'Implementado preenchimento dos campos IBS/CBS nos itens de serviço para Sapiranga/RS no provedor DBSeller. Ajustada a lógica de organização das tags cIndOp, cClassTrib e CodigoNbs no XML de envio.',
      },
    ],
  },
];
