var changelogData = [
  {
    tag: '14/04/2026',
    titulo: 'Terça-feira — 14 de Abril',
    data: '14/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
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
          'Complemento de campos de endereço e RegimeEspecialTributacao na NF-e de serviço',
        texto:
          'PR 8877 — Complementa campos de endereço do tomador/prestador e permite informar o RegimeEspecialTributacao diretamente na nota de serviço (NFeServico). Isso dá mais flexibilidade para empresas que precisam enviar regimes específicos por nota.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de propriedades desnecessárias',
        texto:
          'Limpeza de código removendo propriedades que não eram mais utilizadas, reduzindo complexidade do sistema.',
      },
      {
        icon: '📮',
        destaque: 'Remoção de caracteres não numéricos do CEP',
        texto:
          'Ajuste para sanitizar o CEP removendo caracteres não numéricos antes do envio, evitando rejeições por formatação inválida em prefeituras que exigem CEP apenas com dígitos.',
      },
      {
        icon: '🏙️',
        destaque: 'Correção na consulta de cidade de prestação por código IBGE',
        texto:
          'Removida condição desnecessária na consulta por código IBGE — agora sempre retorna a cidade de prestação do serviço corretamente, evitando falhas em cenários onde a condição anterior bloqueava o retorno.',
      },
      {
        icon: '🧮',
        destaque: 'Validação do percentual aproximado do Simples Nacional',
        texto:
          'Ajuste para validar se o percentual aproximado de tributos do Simples Nacional está maior que zero antes de enviar, evitando envio de valores zerados que causavam rejeição.',
      },
      {
        icon: '🏙️',
        destaque: 'Ajustes no layout 4.2 de Barueri/SP',
        texto:
          'Vários ajustes no layout 4.2 de Barueri: correção no cálculo de total de impostos retidos para não considerar PIS/COFINS não retidos, preenchimento do endereço completo do local de prestação com valores padrão, e ajuste no preenchimento de dados de exportação.',
      },
    ],
  },
  {
    tag: '12/04/2026',
    titulo: 'Domingo — 12 de Abril',
    data: '12/04/2026',
    itens: [
      {
        icon: '�',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '11/04/2026',
    titulo: 'Sábado — 11 de Abril',
    data: '11/04/2026',
    itens: [
      {
        icon: '🧮',
        destaque: 'Tributos aproximados em São Paulo/SP no novo layout JSON',
        texto:
          'Ajuste para permitir enviar os tributos aproximados em São Paulo/SP no novo layout JSON. Empresas que emitem em SP agora conseguem informar corretamente os valores aproximados de tributos no formato atualizado.',
      },
    ],
  },
  {
    tag: '10/04/2026',
    titulo: 'Sexta-feira — 10 de Abril',
    data: '10/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '09/04/2026',
    titulo: 'Quinta-feira — 09 de Abril',
    data: '09/04/2026',
    itens: [
      {
        icon: '🧮',
        destaque: 'Percentual aproximado de tributos em São Paulo/SP',
        texto:
          'Ajuste em São Paulo/SP para pegar o percentual aproximado de tributos do novo grupo de informações, garantindo que o valor correto seja enviado no XML.',
      },
      {
        icon: '�',
        destaque: 'Lógica Hotmart para UsaNBS nas características do provedor',
        texto:
          'Adicionada lógica específica para definir a flag UsaNBS nas características do provedor, permitindo controle mais granular sobre o envio do código NBS.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de código desnecessário',
        texto:
          'PR 8834 — Limpeza de código removendo trechos que não eram mais utilizados, simplificando a manutenção.',
      },
      {
        icon: '🧮',
        destaque: 'Zeramento de pTotTribFed para Franca/SP',
        texto:
          'Extensão da regra de zeramento do campo pTotTribFed (percentual total de tributos federais) para Franca/SP no XML de NFS-e, evitando rejeições pela prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Correção na extração do número da nota fiscal',
        texto:
          'PR 8806 — Corrigido bug na extração do número da nota fiscal que retornava valor incorreto em determinados cenários, garantindo que o número correto seja atribuído.',
      },
      {
        icon: '🔧',
        destaque: 'Ativação de UsaNovoFormatoPisCofins e consulta por RPS',
        texto:
          'PR 8814 — Ativa a propriedade UsaNovoFormatoPisCofins e cria consulta por RPS para o provedor, melhorando a compatibilidade com o novo formato de PIS/COFINS.',
      },
      {
        icon: '🔧',
        destaque:
          'Tratamento de mensagem em tentativa de cancelamento duplicado',
        texto:
          'PR 8820 — Adiciona tratamento para retornar mensagem amigável quando há tentativa de cancelamento de nota já cancelada ou em situação que não permite cancelamento.',
      },
      {
        icon: '🏙️',
        destaque: 'Migração de São João Batista do Glória/MG para MemoryV2',
        texto:
          'PR 8823 — O município de São João Batista do Glória/MG trocou de sistema de NFS-e. As URLs, namespace e configurações foram atualizadas para o provedor MemoryV2.',
      },
      {
        icon: '🏙️',
        destaque: 'Adrianópolis/PR aderiu ao Portal Nacional',
        texto:
          'PR 8829 — Adrianópolis/PR migrou para o Portal Nacional de NFS-e (NfseNacionalV2). Emissões passam a ser feitas pelo sistema nacional.',
      },
      {
        icon: '🏙️',
        destaque: 'Tangará/SC aderiu ao Portal Nacional',
        texto:
          'PR 8826 — Tangará/SC migrou para o Portal Nacional de NFS-e. Emissões passam a ser feitas pelo sistema nacional.',
      },
      {
        icon: '🔧',
        destaque: 'Desabilita emissão em lote para empresa específica',
        texto:
          'PR 8825 — Desabilitada a emissão em lote para uma empresa específica que apresentava problemas com envio em lote, forçando emissão individual.',
      },
      {
        icon: '🔧',
        destaque: 'Envio de Código NBS para empresa específica',
        texto:
          'PR 8819 — Adicionado envio do Código NBS (Nomenclatura Brasileira de Serviços) para empresa específica que necessitava do campo preenchido.',
      },
      {
        icon: '🔧',
        destaque: 'Adição de AutenticidadeNota',
        texto:
          'PR 8818 — Adicionado campo de autenticidade da nota para provedor específico, permitindo validação de autenticidade no retorno.',
      },
      {
        icon: '🏙️',
        destaque: 'Serrania/MG aderiu ao Portal Nacional',
        texto:
          'PR 8815 — Serrania/MG migrou para o Portal Nacional de NFS-e. Emissões passam a ser feitas pelo sistema nacional.',
      },
      {
        icon: '🔧',
        destaque:
          'Inclusão de empresa na lista de incidência no município do prestador',
        texto:
          'PR 8812 — Incluída empresa na lista que define o MunicipioIncidencia como o município do prestador, corrigindo o local de incidência do ISS.',
      },
      {
        icon: '🏙️',
        destaque: 'Atualização de Socorro/SP para BethaV3',
        texto:
          'PR 8809 — Socorro/SP migrou para o provedor BethaV3. URLs e configurações atualizadas para o novo sistema.',
      },
      {
        icon: '�',
        destaque:
          'Remoção de municípios da flag SempreEnviaAliquotaIssEmpresasSimplesNacional',
        texto:
          'PR 8805 — Removidos alguns municípios da flag que forçava envio de alíquota ISS para empresas do Simples Nacional, corrigindo rejeições em cidades que não aceitam esse campo.',
      },
      {
        icon: '�',
        destaque: 'Ajuste na geração da DACE para contingência',
        texto:
          'PR 8827 — Ajuste na geração do Documento Auxiliar de Correção Eletrônica (DACE) para cenários de contingência, garantindo que o PDF seja gerado corretamente mesmo em situações de fallback.',
      },
    ],
  },
  {
    tag: '08/04/2026',
    titulo: 'Quarta-feira — 08 de Abril',
    data: '08/04/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Melhorias na consulta de lote NFS-e de Barueri/SP',
        texto:
          'Melhorias na consulta de lote de NFS-e de Barueri e adição de logs mais detalhados para facilitar diagnóstico de problemas na integração com a prefeitura.',
      },
      {
        icon: '�',
        destaque: 'Tratamento de tomador estrangeiro no tipo de logradouro',
        texto:
          'Adicionada verificação para tomador estrangeiro (exterior) para definir corretamente o TipoLogLocPre (tipo de logradouro do local de prestação), evitando erros em notas com tomador de fora do país.',
      },
      {
        icon: '🔧',
        destaque: 'Melhoria no tratamento de endereço no registro 20',
        texto:
          'Atualização nos dados de teste e melhoria no tratamento de endereço no registro 20, garantindo preenchimento correto dos campos de localização.',
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
          'PR 8811 — Ajuste para evitar que erros específicos travem a fila de processamento de notas, garantindo que o sistema continue processando mesmo em caso de falha pontual.',
      },
      {
        icon: '🌐',
        destaque: 'Ajustes para ISSQN exterior e novos testes de PDF',
        texto:
          'Melhorias no tratamento de ISSQN para prestação de serviço no exterior e adição de novos testes para geração de PDF nesse cenário.',
      },
      {
        icon: '🌐',
        destaque:
          'Portal Nacional: exportação apenas para serviço prestado fora do país',
        texto:
          'Ajuste no Portal Nacional para considerar como exportação apenas quando o serviço foi efetivamente prestado fora do país, e não apenas quando o tomador é estrangeiro.',
      },
      {
        icon: '🏙️',
        destaque: 'Consulta NFS-e por RPS com AntiCaptcha em Barueri/SP',
        texto:
          'Implementação de consulta de NFS-e por RPS com resolução automática de captcha (AntiCaptcha) para Barueri/SP, permitindo consultas automatizadas mesmo com proteção anti-bot da prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Testes de Nova Serrana/MG',
        texto:
          'Commits de teste e ajustes para o município de Nova Serrana/MG, validando a integração com o provedor local.',
      },
      {
        icon: '�',
        destaque: 'Bloqueio de atualização de API key por subscription ID',
        texto:
          'PR 8800 — Bloqueia a atualização de API key por subscription ID, prevenindo alterações indevidas nas credenciais de integração.',
      },
      {
        icon: '🏙️',
        destaque: 'Boca da Mata/AL aderiu ao Portal Nacional',
        texto:
          'PR 8808 — Boca da Mata/AL migrou para o Portal Nacional de NFS-e. Emissões passam a ser feitas pelo sistema nacional.',
      },
      {
        icon: '🏙️',
        destaque: 'Governador Valadares/MG aderiu ao Portal Nacional',
        texto:
          'PR 8807 — Governador Valadares/MG migrou para o Portal Nacional de NFS-e. Emissões passam a ser feitas pelo sistema nacional.',
      },
      {
        icon: '�',
        destaque: 'Atualização de porta do endpoint de Santa Rita do Pardo/MS',
        texto:
          'PR 8804 — Alterada a porta do endpoint de Santa Rita do Pardo/MS de 8085 para 8090, acompanhando mudança na infraestrutura da prefeitura.',
      },
      {
        icon: '📮',
        destaque: 'Remoção de formatação do CEP do local de prestação',
        texto:
          'PR 8802 — Remove formatação do CEP do local de prestação antes do envio, evitando rejeições em provedores que não aceitam CEP com pontuação.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de link de homologação de Contagem/MG',
        texto:
          'PR 8801 — Atualizado o link de homologação de Contagem/MG para o novo endereço da prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Retry no cancelamento de NFS-e',
        texto:
          'PR 8798 — Adicionado mecanismo de retry no cancelamento para garantir que o cancelamento seja efetivado tanto na API quanto na prefeitura, evitando inconsistências.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de endpoint de Jardim/MS',
        texto:
          'PR 8797 — Atualizado o endpoint do município Jardim/MS para o novo endereço do webservice.',
      },
      {
        icon: '🔧',
        destaque:
          'MunicipioIncidencia como município do prestador para Conta Azul',
        texto:
          'PR 8793 — Define o MunicipioIncidencia como o município do prestador para a empresa Conta Azul, corrigindo o local de incidência do ISS nas emissões.',
      },
      {
        icon: '📊',
        destaque: 'Cenário de envio de alíquota para empresa específica',
        texto:
          'PR 8791 — Adiciona cenário específico de envio de alíquota para empresa que necessitava de tratamento diferenciado.',
      },
      {
        icon: '📊',
        destaque:
          'Correção no envio de alíquota para prestação fora do município',
        texto:
          'PR 8717 — Corrige o envio da alíquota em casos de prestação de serviço fora do município com ISS não retido, evitando rejeições por valor de alíquota incorreto.',
      },
      {
        icon: '🔧',
        destaque: 'Atualização da região do código',
        texto:
          'Atualização na região do código para melhor organização e manutenção.',
      },
      {
        icon: '🔧',
        destaque: 'Normalização na comparação de série RPS em lote NFS-e',
        texto:
          'Normalização na comparação de série RPS na consulta de lote de NFS-e, evitando falhas de matching quando a série tem formatação diferente.',
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
          'Remoção de municípios da flag SempreEnviaAliquotaIssEmpresasSimplesNacional (GOVBRv3)',
        texto:
          'PR 8792 — Remove municípios da flag que forçava envio de alíquota ISS para empresas do Simples Nacional no provedor GOVBRv3, corrigindo rejeições.',
      },
      {
        icon: '🔧',
        destaque:
          'São Gonçalo do Rio Abaixo/MG na regra UsaCIntContribComCodigoServico',
        texto:
          'PR 8779 — Inclui São Gonçalo do Rio Abaixo/MG na regra que usa CIntContrib com código de serviço, garantindo compatibilidade com o provedor local.',
      },
      {
        icon: '🏙️',
        destaque: 'Vinhedo/SP permite emissão sem tomador',
        texto:
          'PR 8776 — Configura Vinhedo/SP para permitir emissão de NFS-e sem informar tomador, atendendo cenários onde o tomador não é obrigatório.',
      },
      {
        icon: '🔧',
        destaque: 'Remoção de RPS sequencial obrigatório em Varginha/MG',
        texto:
          'Remove a obrigatoriedade de RPS sequencial para Varginha/MG, permitindo envio de notas com numeração não sequencial.',
      },
      {
        icon: '🏙️',
        destaque: 'Arroio do Meio/RS migra para NfseNacionalV2',
        texto:
          'PR 8788 — Arroio do Meio/RS migrou para o Portal Nacional de NFS-e (NfseNacionalV2). Emissões passam a ser feitas pelo sistema nacional.',
      },
      {
        icon: '🆕',
        destaque: 'Novo provedor GIFv2 no layout nacional',
        texto:
          'PR 8376 — Criação do novo provedor GIFv2 no layout nacional, expandindo a cobertura de municípios que utilizam o sistema GIF.',
      },
      {
        icon: '🌐',
        destaque: 'Tratamento de tomador exterior em Cachoeirinha/RS',
        texto:
          'CE-25291 — Tratamento específico para tomador estrangeiro em Cachoeirinha/RS, garantindo que notas com tomador do exterior sejam emitidas corretamente.',
      },
      {
        icon: '🌐',
        destaque: 'Refatoração do tratamento de tomador estrangeiro',
        texto:
          'CE-24786 — Série de refatorações no tratamento de tomador estrangeiro, melhorando a lógica de identificação e preenchimento de dados para notas com tomador de fora do país.',
      },
      {
        icon: '�',
        destaque: 'Atualização de URLs de Embu das Artes/SP',
        texto:
          'PR 8781 — Atualização das URLs de integração de Embu das Artes/SP para os novos endereços do webservice da prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Código 704 de Cotia/SP envia código de obra',
        texto:
          'PR 8778 — Configura o código de serviço 704 de Cotia/SP para enviar o código de obra, atendendo exigência da prefeitura para esse tipo de serviço.',
      },
      {
        icon: '🏙️',
        destaque: 'Itaituba/PA migra para CoplanV2',
        texto:
          'PR 8789 — Itaituba/PA migrou para o provedor CoplanV2. URLs e configurações atualizadas para o novo sistema.',
      },
      {
        icon: '🏙️',
        destaque: 'Serra do Mel/RN migra para TinusV2',
        texto:
          'PR 8775 — Serra do Mel/RN migrou para o provedor TinusV2. URLs e configurações atualizadas.',
      },
      {
        icon: '📊',
        destaque:
          'Remoção de Pejuçara/RS da flag de alíquota ISS Simples Nacional',
        texto:
          'PR 8772 — Remove Pejuçara/RS da flag SempreEnviaAliquotaIssEmpresasSimplesNacional, corrigindo rejeições no município.',
      },
      {
        icon: '🔧',
        destaque: 'Ajuste na tag cClassTrib',
        texto:
          'PR 8771 — Ajuste na tag cClassTrib (classificação tributária) para garantir preenchimento correto no XML de envio.',
      },
      {
        icon: '�',
        destaque: 'Validação de código NBS para não travar a fila',
        texto:
          'PR 8766 — Adicionada validação do código NBS antes do envio para evitar que valores inválidos travem a fila de processamento.',
      },
      {
        icon: '🧮',
        destaque: 'Envio do CST PIS/COFINS conforme informado pelo prestador',
        texto:
          'PR 8743 — Ajuste para enviar o CST (Código de Situação Tributária) do PIS/COFINS exatamente conforme informado pelo prestador, sem sobrescrever com valores padrão.',
      },
      {
        icon: '🔧',
        destaque: 'Informação de NBS válido',
        texto:
          'Ajuste para informar um NBS (Nomenclatura Brasileira de Serviços) válido quando o campo é obrigatório, evitando rejeições.',
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
        destaque: 'Adição de IDs em responsável técnico',
        texto:
          'Adicionados campos de identificação no responsável técnico da nota, permitindo rastreabilidade e conformidade com exigências de provedores.',
      },
      {
        icon: '🔧',
        destaque: 'Normalização do NBS antes da validação',
        texto:
          'Normaliza o código NBS antes da validação para evitar envio de NBS vazio, corrigindo cenários onde o campo ficava em branco por formatação incorreta.',
      },
      {
        icon: '🌐',
        destaque: 'Tratamento de NFS-e com prestação de serviço no exterior',
        texto:
          'PR 669 — Implementação de tratamento específico para NFS-e com prestação de serviço no exterior, garantindo preenchimento correto dos campos de exportação.',
      },
      {
        icon: '🏙️',
        destaque: 'Jardinópolis/SP migra para GissOnline',
        texto:
          'Atualização do provedor de Jardinópolis/SP para GissOnline. URLs e configurações atualizadas para o novo sistema da prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Adição de usuário backoffice',
        texto:
          'Adicionado novo usuário de backoffice para operações administrativas no sistema.',
      },
      {
        icon: '🧮',
        destaque: 'Ajuste no fallback de IBS/CBS para Simples Nacional',
        texto:
          'Ajuste no fallback de IBS/CBS para deduzir apenas para empresas optantes do Simples Nacional, evitando cálculos incorretos para empresas de outros regimes.',
      },
      {
        icon: '🌐',
        destaque: 'Uso de valor em moeda estrangeira quando presente',
        texto:
          'Permite que o campo vServMoeda use o valor em moeda estrangeira quando presente, garantindo que notas de exportação informem corretamente o valor na moeda do tomador.',
      },
      {
        icon: '🔧',
        destaque:
          'Refatoração da extração de valor de serviço em moeda estrangeira',
        texto:
          'Refatoração da lógica de extração do valorServicoMoedaEstrangeira, melhorando a legibilidade e manutenibilidade do código.',
      },
      {
        icon: '🔧',
        destaque: 'Refatoração da extração de metadados',
        texto:
          'Refatoração na extração de metadados da nota, simplificando o código e melhorando a performance.',
      },
      {
        icon: '🧮',
        destaque: 'Ajustes nos impostos retidos (CSLL e apuração própria)',
        texto:
          'PR 8740 — Ajustes nos envios de impostos retidos na tag CSLL e apuração própria, corrigindo cenários onde os valores de retenção não eram enviados corretamente.',
      },
      {
        icon: '🔧',
        destaque: 'Novo modelo de envio de Obras para SIGISSv5',
        texto:
          'PR 8728 — Implementado novo modelo de envio de dados de Obras para o provedor SIGISSv5, atendendo exigências de municípios que utilizam esse provedor para serviços de construção civil.',
      },
      {
        icon: '📊',
        destaque: 'Empresas não optantes de Uberaba/MG sem envio de alíquota',
        texto:
          'PR 8722 — Adiciona empresas não optantes do Simples Nacional de Uberaba/MG para não enviarem alíquota, evitando rejeições pela prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Campo CNO para o provedor IPM',
        texto:
          'PR 8721 — Implementado campo CNO (Cadastro Nacional de Obras) para o provedor IPM, permitindo envio de informações de obra em municípios que utilizam esse provedor.',
      },
      {
        icon: '🏙️',
        destaque: 'Juazeiro/BA na lista de municípios sem MunicipioIncidencia',
        texto:
          'PR 8765 — Adiciona Juazeiro/BA à lista de municípios que não enviam MunicipioIncidencia, corrigindo rejeições na prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Desabilita emissão em lote para empresa específica',
        texto:
          'PR 8754 — Desabilitada a emissão em lote para empresa específica que apresentava problemas, forçando emissão individual.',
      },
      {
        icon: '🏙️',
        destaque: 'Consulta de nota e autenticação em Carapicuíba/SP',
        texto:
          'PR 8753 — Insere mês início, mês e ano fim na consulta da nota e autenticação de Carapicuíba/SP, melhorando a integração com a prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Novo modelo de envio de Obras para IssIntel',
        texto:
          'PR 8752 — Implementado novo modelo de envio de dados de Obras para o provedor IssIntel, atendendo exigências de municípios para serviços de construção civil.',
      },
      {
        icon: '🌐',
        destaque: 'Adição de variação de país',
        texto:
          'PR 8751 — Adiciona variação de nome de país para melhorar o matching em notas com tomador estrangeiro.',
      },
      {
        icon: '🧮',
        destaque: 'IPM: correção no envio do <imovel> no IBS/CBS',
        texto:
          'PR 8750 — Corrige o envio da tag <imovel> no IBS/CBS para o provedor IPM, garantindo que os dados de imóvel sejam enviados corretamente na reforma tributária.',
      },
      {
        icon: '🌐',
        destaque: 'MunicipioIncidencia para notas com Exterior',
        texto:
          'PR 8749 — Adiciona MunicipioIncidenciaService para notas com prestação no exterior, definindo corretamente o município de incidência do ISS.',
      },
      {
        icon: '🏙️',
        destaque: 'Ortigueira/PR migra para BethaV3',
        texto:
          'PR 8737 — Ortigueira/PR migrou para o provedor BethaV3. URLs e configurações atualizadas para o novo sistema.',
      },
      {
        icon: '🔧',
        destaque:
          'Ajuste para não preencher codigoMunicipio quando não informado',
        texto:
          'PR 8748 — Ajustado para não preencher o campo codigoMunicipio quando o mesmo não é informado, evitando envio de valor vazio que causava rejeição.',
      },
      {
        icon: '🔧',
        destaque:
          'Try/Catch para evitar travar a fila e tratamento de cidade não encontrada',
        texto:
          'PR 8747 — Insere Try/Catch para evitar que erros travem a fila de processamento e trata cenário de nome de cidade não encontrado, retornando mensagem amigável.',
      },
      {
        icon: '🔧',
        destaque: 'Adição de AutenticidadeNota',
        texto:
          'PR 8746 — Adicionado campo de autenticidade da nota para provedor específico.',
      },
      {
        icon: '📊',
        destaque: 'Configuração para não enviar alíquota zero',
        texto:
          'PR 8745 — Configura para não enviar alíquota quando o valor é zero, evitando rejeições em provedores que não aceitam alíquota zerada.',
      },
      {
        icon: '📊',
        destaque:
          'Dois municípios na flag SempreEnviaAliquotaIssEmpresasSimplesNacional',
        texto:
          'PR 8741 — Adiciona dois municípios na flag que força envio de alíquota ISS para empresas do Simples Nacional, atendendo exigência dessas prefeituras.',
      },
      {
        icon: '🔧',
        destaque: 'Permissão de nota sem tomador',
        texto:
          'PR 8739 — Atualiza configuração para permitir emissão de nota sem informar tomador em provedor específico.',
      },
      {
        icon: '🔧',
        destaque: 'Cenário de emissão para natureza 9',
        texto:
          'PR 8738 — Adiciona cenário de emissão para natureza de operação 9, expandindo a cobertura de tipos de operação suportados.',
      },
      {
        icon: '🏙️',
        destaque: 'Capela do Alto/SP aderiu ao Portal Nacional',
        texto:
          'PR 8735 — Capela do Alto/SP migrou para o Portal Nacional de NFS-e. Emissões passam a ser feitas pelo sistema nacional.',
      },
      {
        icon: '🔧',
        destaque:
          'Tratamento de reenvio em caso de mensagem de erro específica',
        texto:
          'PR 8732 — Adiciona tratamento de reenvio automático quando uma mensagem de erro específica é retornada pelo provedor, melhorando a resiliência do sistema.',
      },
      {
        icon: '🔧',
        destaque: 'Atualização de tratamento em mensagem de erro do provedor',
        texto:
          'PR 8730 — Atualiza o tratamento de mensagem de erro para o provedor, melhorando a clareza das mensagens retornadas ao usuário.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de links de integração de Carapicuíba/SP',
        texto:
          'PR 8727 — Atualização das URLs de integração de Carapicuíba/SP para os novos endereços do webservice.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de links de integração de Cotia/SP',
        texto:
          'PR 8724 — Atualização das URLs de integração de Cotia/SP para os novos endereços do webservice.',
      },
      {
        icon: '🏙️',
        destaque: 'Atualização de emissão de Araraquara/SP para layout padrão',
        texto:
          'PR 8723 — Atualiza emissão de Araraquara/SP para layout padrão do provedor, acrescentando campos obrigatórios exigidos pela prefeitura.',
      },
      {
        icon: '🏙️',
        destaque: 'Colina/SP migra para NfseNacionalV2',
        texto:
          'PR 8715 — Colina/SP migrou para o Portal Nacional de NFS-e (NfseNacionalV2). Emissões passam a ser feitas pelo sistema nacional.',
      },
      {
        icon: '🏙️',
        destaque: 'SIGISSv5: leitura da chave de acesso em Franco da Rocha/SP',
        texto:
          'PR 8714 — Inclui leitura e atribuição da chave de acesso no retorno da consulta de lote para Franco da Rocha/SP no provedor SIGISSv5.',
      },
      {
        icon: '🏙️',
        destaque:
          'São Luís de Montes Belos/GO migra de NfseNacionalV2 para Centi',
        texto:
          'PR 8712 — Altera São Luís de Montes Belos/GO de NfseNacionalV2 para o provedor Centi, pois o município saiu do Portal Nacional e voltou ao sistema próprio.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento de exceção para Inscrição Municipal incorreta',
        texto:
          'PR 8711 — Adicionado tratamento de exceção caso a Inscrição Municipal esteja incorreta, retornando mensagem amigável ao invés de erro genérico.',
      },
      {
        icon: '🏙️',
        destaque: 'Caiçara/RS e Guarujá do Sul/SC migram para IPM',
        texto:
          'PR 8710 — Atualiza Caiçara/RS e Guarujá do Sul/SC para o provedor IPM. URLs e configurações atualizadas.',
      },
      {
        icon: '🔧',
        destaque: 'Validação de metadados antes de inserir',
        texto:
          'PR 8698 — Adicionada validação para verificar se os metadados existem antes de inserir, evitando erros de referência nula.',
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
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '02/04/2026',
    titulo: 'Quinta-feira — 02 de Abril',
    data: '02/04/2026',
    itens: [
      {
        icon: '🌐',
        destaque: 'Envio de valor em moeda estrangeira para nota do exterior',
        texto:
          'Implementação do envio do valor da moeda estrangeira para notas de serviço prestado no exterior, garantindo que o valor na moeda do tomador seja informado corretamente.',
      },
      {
        icon: '🔧',
        destaque: 'Correção de NullReferenceException no MunicipioIncidencia',
        texto:
          'Ajuste na atribuição de MunicipioIncidencia para evitar NullReferenceException quando o município não é encontrado, prevenindo erros em tempo de execução.',
      },
      {
        icon: '🧮',
        destaque:
          'Correção na reordenação de tags CSTPisCofins e TpRetPisCofins',
        texto:
          'Corrigida a lógica de reordenação das tags CSTPisCofins e TpRetPisCofins no XML, aplicando o ajuste para todos os elementos Valores do lote. Elimina rejeições por ordem incorreta das tags em lotes com múltiplas notas.',
      },
      {
        icon: '🧮',
        destaque: 'Preenchimento de IBS/CBS para Sapiranga/RS (DBSeller)',
        texto:
          'Implementado preenchimento dos campos IBS/CBS nos itens de serviço para Sapiranga/RS no provedor DBSeller, com ajuste na organização das tags cIndOp, cClassTrib e CodigoNbs no XML de envio.',
      },
      {
        icon: '🔧',
        destaque: 'Uso de proxy estático no envio',
        texto:
          'Ajuste para usar proxy estático no envio de notas, melhorando a estabilidade da conexão com provedores.',
      },
      {
        icon: '🔧',
        destaque: 'Ajustes gerais',
        texto: 'Ajustes diversos de manutenção e estabilidade no código.',
      },
    ],
  },
];
