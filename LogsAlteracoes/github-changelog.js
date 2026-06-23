var changelogData = [
  {
    tag: '22/06/2026',
    titulo: 'Domingo — 22 de Junho',
    data: '22/06/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '21/06/2026',
    titulo: 'Sábado — 21 de Junho',
    data: '21/06/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '20/06/2026',
    titulo: 'Sexta-feira — 20 de Junho',
    data: '20/06/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '19/06/2026',
    titulo: 'Quinta-feira — 19 de Junho',
    data: '19/06/2026',
    itens: [
      {
        icon: '🔧',
        destaque:
          'Correção no download de XML de nota cancelada no Portal Nacional',
        texto:
          'A função de download de XML via headless browser (Browserless/Playwright) para o Portal Nacional estava falhando ao tentar baixar o XML de notas que já haviam sido canceladas. O fluxo não tratava corretamente o estado "cancelada" da nota no portal, impedindo a obtenção do arquivo. A correção ajusta a lógica para identificar e processar notas canceladas corretamente, além de adicionar uma nova função para baixar XML de notas tomadas (notas recebidas de terceiros), ampliando a cobertura do download headless.',
      },
    ],
  },
  {
    tag: '18/06/2026',
    titulo: 'Quarta-feira — 18 de Junho',
    data: '18/06/2026',
    itens: [
      {
        icon: '🆕',
        destaque: 'Download de XML do Portal Nacional via headless browser',
        texto:
          'Foi implementado um endpoint completo para download de XML de NFS-e emitidas pelo Portal Nacional, utilizando Browserless (Playwright via CDP). O novo endpoint POST /v1/nfsenacional/xml navega no portal, resolve CAPTCHAs automaticamente, localiza a nota pela chave de acesso e baixa o XML. Isso substitui o fluxo anterior que dependia de navegação direta no portal e era mais frágil. Também foram adicionados geradores offline de PDF para notas do padrão nacional.',
      },
      {
        icon: '🆕',
        destaque:
          'Endpoint de geração de PDF (DANFSe) para NFSe Padrão Nacional',
        texto:
          'O componente DanfeMS ganhou um novo endpoint POST v1/nfs-e/danfse que recebe o XML em base64 e gera o PDF da NFS-e no formato do padrão nacional. Inclui um helper de lookup de municípios (via municipios.csv) para resolver cidade/UF pelo código IBGE, tratamento de encoding com fallback (Windows-1252), e suporte aos estados de cancelada/substituída no layout do PDF. Isso centraliza a geração de PDF nacional em um microserviço dedicado.',
      },
      {
        icon: '🏙️',
        destaque:
          'Porciúncula/RJ — remove porta da URL e adiciona User-Agent contra Cloudflare',
        texto:
          'O município de Porciúncula/RJ estava com a porta explícita na URL do webservice, o que causava problemas de roteamento. Além disso, as requisições ao provedor Fiorilli de Porciúncula estavam sendo bloqueadas pelo Cloudflare por falta de User-Agent. Foi criado um comportamento WCF reutilizável (CustomUserAgentEndpointBehavior) que injeta o header User-Agent nas requisições, aplicado especificamente para Porciúncula. O provedor Futurize também foi refatorado para usar esse mesmo componente centralizado.',
      },
      {
        icon: '🔧',
        destaque:
          'Ajusta tratativa de documento do prestador no provedor Parintins',
        texto:
          'No provedor Parintins/AM, o campo iDocPrest (documento do prestador) estava sendo enviado sem formatação de CPF/CNPJ, causando rejeição no portal da prefeitura. Além disso, quando o portal retornava erro via HTML (tag <p id="msg">), o sistema não detectava e continuava o fluxo normalmente. A correção aplica FormatarCpfCnpj() ao UserName e adiciona validação de erro HTML antes de prosseguir com a emissão, lançando ValidationException com código GW6 quando a prefeitura rejeita.',
      },
      {
        icon: '🏙️',
        destaque:
          'Fallback de endereço do tomador como endereço da obra em Fortaleza/CE',
        texto:
          'Para emissões de NFS-e de construção civil (código 0719) em Fortaleza/CE, quando a empresa não informa o endereço da obra mas possui o endereço do tomador preenchido, o sistema agora usa o endereço do tomador como fallback. Isso evita rejeições por falta de dados de obra em cenários onde o serviço é prestado no endereço do próprio tomador. A regra é aplicada apenas para empresas específicas configuradas na lista.',
      },
      {
        icon: '🏙️',
        destaque: 'Nazaré/BA ativada no provedor Freire',
        texto:
          'O município de Nazaré/BA foi ativado no gateway utilizando o provedor Freire. A prefeitura utiliza o sistema Freire para emissão de NFS-e, e o município agora está configurado com as URLs e operações corretas para emissão, consulta e cancelamento de notas fiscais de serviço.',
      },
      {
        icon: '🔧',
        destaque:
          'Correção de bug na consulta por RPS — validação antes de marcar sucesso',
        texto:
          'Na consulta de nota por RPS, o resultado estava sendo marcado como Sucesso=true antes de validar os dados retornados pela prefeitura via ExtrairDadosNFe(). Isso permitia que autorizações avançassem sem dados municipais válidos, causando travamento no status de PDF (sem dados da prefeitura para gerar o documento). A correção garante que o sucesso só é marcado após a extração e validação completa dos dados da nota.',
      },
      {
        icon: '🏙️',
        destaque: 'Teofilândia/BA ativada no provedor Fisco.NetV2',
        texto:
          'O município de Teofilândia/BA foi ativado no gateway com o provedor Fisco.NetV2. A prefeitura baiana utiliza o sistema Fisco.Net na versão 2 para emissão de NFS-e, e o município agora está configurado corretamente para todas as operações de nota fiscal de serviço.',
      },
      {
        icon: '🏙️',
        destaque: 'São Mamede/PB ativada no provedor Eticons',
        texto:
          'O município de São Mamede/PB foi ativado no gateway utilizando o provedor Eticons. A cidade paraibana agora está integrada ao gateway para emissão, consulta e cancelamento de NFS-e através do sistema Eticons.',
      },
      {
        icon: '🔧',
        destaque:
          'Tratamento de IM do tomador com hífen para empresa específica',
        texto:
          'Algumas prefeituras exigem que a Inscrição Municipal (IM) do tomador seja enviada com hífen (formato original), enquanto a maioria aceita apenas dígitos numéricos. Foi adicionado um tratamento que preserva o hífen na IM quando a empresa está em uma lista específica, mantendo a remoção de caracteres não numéricos como comportamento padrão para as demais. Também foi adicionada proteção contra NullReferenceException quando a IM vem nula.',
      },
      {
        icon: '🏙️',
        destaque: 'Migração de cidades do Simpliss para SimplissV3',
        texto:
          'Diversos municípios que utilizavam o provedor Simpliss foram migrados para o SimplissV3 (versão 3 do sistema). A nova versão traz melhorias na comunicação e nas operações de consulta. Os municípios afetados tiveram suas configurações atualizadas para apontar para o novo provedor, incluindo constantes de formato de data/hora para parsing correto do campo dhProc.',
      },
      {
        icon: '🔧',
        destaque: 'Validação de sincronização de nota sem tomador no TinusV2',
        texto:
          'O provedor TinusV2 estava reprovando indevidamente a sincronização de notas quando o tomador não possuía CPF/CNPJ. A validação foi aprimorada para, nesses casos, comparar a discriminação do serviço (descrição) extraída do XML com a discriminação formatada da nota. Se os textos coincidirem (após normalização de encoding ISO-8859-1→UTF-8, remoção de acentos e quebras de linha), a nota é aceita. Isso evita que notas válidas fiquem presas em "sincronização pendente".',
      },
      {
        icon: '🏙️',
        destaque: 'Parnamirim/PE migra de Tributus para SpeedGovV2',
        texto:
          'O município de Parnamirim/PE teve seu provedor alterado de Tributus para SpeedGovV2. A prefeitura migrou de sistema de NFS-e, e o gateway foi atualizado para utilizar o novo provedor SpeedGovV2 com suas URLs e operações correspondentes, garantindo continuidade na emissão de notas no município.',
      },
      {
        icon: '🔧',
        destaque: 'Processamento de NFS-e substituta no GissOnline (ABRASF v2)',
        texto:
          'O provedor GissOnline (ABRASF v2) passou a detectar e processar NFS-e substitutas durante a extração do lote. Quando a nota contém o nó NfseSubstituida no XML, o sistema agora extrai o número da nota substituída e marca a NFeProcessada com os flags NotaSubstituta e NumeroNotaSubstituida. Também foi criado o fluxo síncrono (GissOnlineConsultarLoteNFeSincrono) e adicionadas proteções contra NullReference na leitura dos nós XML.',
      },
    ],
  },
  {
    tag: '17/06/2026',
    titulo: 'Terça-feira — 17 de Junho',
    data: '17/06/2026',
    itens: [
      {
        icon: '🔧',
        destaque:
          'Suporte a CNPJ e Chave de Acesso alfanuméricos no NFeNacional',
        texto:
          'A legislação brasileira passou a permitir CNPJ alfanumérico (com letras) e consequentemente a chave de acesso da NF-e/NFS-e também passa a conter caracteres alfanuméricos. Este commit atualiza toda a cadeia de validação: regex de extração da chave, validação no construtor de ChaveAcessoNFe, schemas XSD, método MOD11, utilitários CpfCnpjUtil (FormatarCpfCnpj, NormalizeCnpj), e bibliotecas de geração de DANFE/DACTE. Diversos provedores receberam ajustes de import para compilar com os utilitários reorganizados.',
      },
      {
        icon: '🏙️',
        destaque: 'Guareí/SP atualizado para o provedor GOVBRv3',
        texto:
          'O município de Guareí/SP teve seu provedor atualizado para GOVBRv3. A prefeitura migrou para a versão 3 do sistema GOVBR de NFS-e, e as configurações de URL e operações foram atualizadas no gateway para garantir continuidade na emissão e consulta de notas fiscais de serviço.',
      },
      {
        icon: '🔧',
        destaque: 'Hora de emissão fracionada no SimplissV3',
        texto:
          'O provedor SimplissV3 retornava o campo dhProc (data/hora de processamento) com diferentes quantidades de casas decimais nos frações de segundo (1 a 7 dígitos), causando falha no parsing. Foi criada uma lista de formatos aceitos (SimplissV3Constants.FormatosDhProc) e o ParseExact agora tenta todos os formatos válidos. Aplicado tanto na consulta de lote quanto na consulta por RPS, resolvendo erros intermitentes de sincronização em municípios que usam o SimplissV3.',
      },
      {
        icon: '🔧',
        destaque:
          'Ajuste no envio de dados para emissão no provedor Parintins/AM',
        texto:
          'O fluxo completo de emissão do provedor Parintins foi reestruturado: o identificador passou de iCodigo para iDocPrest (documento do prestador com CPF/CNPJ formatado), novos campos Hidden foram incluídos no payload (iContPrest, iFantasiaPrest, iEnderecoPrest, iRegime, iObs1-5, etc.), a validação municipal agora exige CodigoServicoMunicipal normalizado para 6 dígitos, e foi incluído cálculo de IRRF. A busca de nota para PDF e cancelamento também foi atualizada para usar iDocPrest. Essas mudanças corrigem rejeições que ocorriam quando o portal de Parintins atualizou seu layout HTML.',
      },
      {
        icon: '🔧',
        destaque: 'Correção de erro de compilação por falta de referência',
        texto:
          'Após a reorganização dos utilitários de CpfCnpj (movidos para CpfCnpjUtil), alguns projetos ficaram sem a referência correta, causando erro de compilação. Este commit adiciona o using necessário para restaurar a build.',
      },
      {
        icon: '🔧',
        destaque: 'NFS-e com exigibilidade suspensa no Portal Nacional V2',
        texto:
          'O Portal Nacional V2 (NfseNacionalV2) não permitia a emissão de NFS-e com exigibilidade do ISS suspensa por decisão judicial ou administrativa. O ajuste permite que a nota seja emitida com essa configuração fiscal, atendendo empresas que possuem liminar judicial suspendendo a cobrança do ISS em determinados municípios.',
      },
      {
        icon: '🔧',
        destaque: 'Implementação de PDF no layout Padrão Nacional (async)',
        texto:
          'A geração de PDF no formato do Padrão Nacional foi refatorada para funcionar de forma assíncrona. A implementação anterior travava ao tentar regerar o PDF de uma NFS-e já emitida. A nova versão utiliza processamento async, evitando deadlocks e permitindo a regeração de PDFs em lote sem impactar o throughput do sistema.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento de metadados regimeApuracaoTributosSN vazio',
        texto:
          'Quando o campo regimeApuracaoTributosSN vinha vazio (string vazia ou null), a conversão para Int32 falhava com FormatException, causando erro na emissão. O fix adiciona verificação de IsNullOrWhiteSpace antes de tentar converter, evitando crash em notas onde esse metadado não está preenchido.',
      },
    ],
  },
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
        icon: '📊',
        destaque:
          'Retorno ao formato antigo de PIS/COFINS com envio de apuração própria',
        texto:
          'O envio dos dados de PIS/COFINS foi revertido para o formato anterior, que era mais compatível com os provedores. Adicionalmente, foi implementada a lógica de envio dos dados de apuração própria quando o contribuinte informa apenas os tributos não retidos (sem retenção na fonte). Isso resolve rejeições em prefeituras que não aceitavam o novo formato e garante que empresas com apuração própria tenham seus dados fiscais corretamente transmitidos.',
      },
      {
        icon: '📊',
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
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
];
