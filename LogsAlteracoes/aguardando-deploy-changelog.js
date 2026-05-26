var aguardandoDeployData = [
  {
    tag: '26/05/2026',
    titulo: 'Terça-feira — 26 de Maio',
    itens: [
      {
        icon: '🆕',
        texto:
          'Novo provedor PMat implementado como projeto separado com integração SOAP/WCF. Inclui operações de recepção de lote, consulta de lote, cancelamento e geração de PDF. O provedor utiliza Connected Services (WSDL) e possui tratamento específico de TLS para compatibilidade com o webservice da prefeitura. Também inclui validações de negócio como código de serviço municipal (3-4 dígitos) e inscrição municipal (1-8 dígitos).',
        pr: 9389,
        autor: 'Thiago Souza',
      },
      {
        icon: '📊',
        texto:
          'Adicionada a subscription SaudeViaNet à whitelist de envio de IBS/CBS para empresas do Simples Nacional no provedor São Paulo. A empresa precisava enviar os novos tributos da reforma tributária mas estava bloqueada pela regra que restringe o envio a subscriptions autorizadas. A mudança permite que a SaudeViaNet ignore a regra de "não participante do piloto 2026" ao enviar notas com IBSCBS.',
        pr: 9397,
        autor: 'Davidson Souza',
      },
      {
        icon: '🌐',
        texto:
          'Ativada a flag UsaEnderecoTomExterior para Nossa Senhora da Glória/PE no provedor TributusV2. Essa flag permite que o endereço do tomador estrangeiro seja enviado corretamente no XML da nota, evitando rejeições quando a prestação é para o exterior nesse município.',
        pr: 9396,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🔗',
        texto:
          'Atualizado o endpoint de produção de Luziânia/GO no provedor ProData. A prefeitura migrou o domínio do webservice e o endereço anterior deixou de responder, causando falhas de emissão e consulta de NFS-e.',
        pr: 9395,
        autor: 'Davidson Souza',
      },
      {
        icon: '🏙️',
        texto:
          'São Bernardo do Campo/SP ativado na versão GINFES V2 com suporte a IBS/CBS (Reforma Tributária do Consumo). O município foi adicionado ao conjunto UsaVersaoRTC, fazendo com que a recepção de lotes utilize a classe GINFESRecepcionarLoteNFeV2 que suporta os novos campos tributários exigidos pela legislação.',
        pr: 9393,
        autor: 'Thiago Souza',
      },
      {
        icon: '🧮',
        texto:
          'Zerados os valores de PIS e COFINS de apuração própria para a Conta Azul. Quando não há apuração própria (pisCofinsProprio == null) e existe retenção, o sistema agora zera rps.ValorPIS e rps.ValorCOFINS antes de calcular ValorCSLL e RetencaoPisCofins. Isso corrige o cálculo incorreto do valor líquido que ocorria para notas da Conta Azul com retenção mas sem apuração própria.',
        pr: 9390,
        autor: 'Thiago Souza',
      },
      {
        icon: '📊',
        texto:
          'Incluída condição de regime de apuração "1" na regra que zera alíquota ISS no provedor GIFv2. Antes, bastava ser optante do Simples Nacional com ISS não retido para zerar a alíquota. Agora exige também RegimeApuracaoTributosSN == "1", evitando que empresas com outros regimes de apuração tenham a alíquota zerada indevidamente — o que causava rejeições em municípios como Caxias do Sul.',
        pr: 9388,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🌐',
        texto:
          'Ajustada a emissão para tomador do exterior com prestação fora do país no provedor PublicaV1. O campo CodigoPaisLocalPrestacao foi adicionado ao modelo XML, o código NBS é sanitizado (apenas numéricos) antes do envio, e os campos de município/país de prestação são preenchidos corretamente quando o código IBGE é 9999999 (exterior). Também adicionada proteção contra NullReferenceException quando o tomador é nulo.',
        pr: 9385,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🏙️',
        texto:
          'Queimados/RJ aderiu ao Portal Nacional de NFS-e. As configurações foram adicionadas ao ConfiguracoesMunicipios.xml com o provedor NfseNacional, permitindo que empresas em Queimados emitam NFS-e pelo portal unificado da Receita Federal.',
        pr: 9384,
        autor: 'Davidson Souza',
      },
      {
        icon: '🔧',
        texto:
          'Ajuste no PDF de exportação de serviço (DANFSE Nacional). O campo "Código de Tributação Nacional" agora suporta até 3 linhas de texto (antes eram 2) e aplica truncamento com "..." quando excede 71 caracteres. Também corrigido o preenchimento do país de prestação — quando não é Brasil ou não há resultado, exibe "-" ao invés de lançar exceção.',
        pr: 9381,
        autor: 'Thales Fonseca',
      },
    ],
  },
  {
    tag: '25/05/2026',
    titulo: 'Segunda-feira — 25 de Maio',
    itens: [
      {
        icon: '🧮',
        texto:
          'Corrigido o preenchimento do campo valorCsll no provedor NfseNacional (módulo SemCertificado). A variável vRetCSLL era inicializada como null, causando exceção ao tentar preencher TributacaoFederal.ValorCSLL. Agora é inicializada com 0 (decimal), garantindo tipo compatível. A lógica condicional que só preenche o campo quando vRetCSLL > 0 permanece inalterada.',
        pr: 9378,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Removidos acentos do local de prestação no provedor Barueri (FormatarLoteRpsV2Base). Os campos Logradouro e Bairro do endereço do tomador agora passam por RemoveAccent() antes do envio, evitando rejeições em provedores que não aceitam caracteres acentuados. Também adicionada navegação segura (?.) para prevenir NullReferenceException quando o endereço do tomador é nulo.',
        pr: 9377,
        autor: 'Thiago Souza',
      },
      {
        icon: '📊',
        texto:
          'Atualizada a regra de envio de alíquota para empresas não optantes do Simples Nacional no provedor ModernizacaoPublica. Quando o ISS não é retido na fonte, ValorIss e Aliquota agora são zerados também para empresas não optantes (além do cenário já existente de regime especial). Afeta múltiplos municípios: Cabo Frio/RJ, Belford Roxo/RJ, Arraial do Cabo/RJ, Armação dos Búzios/RJ, Correntina/BA, Magé/RJ e São Pedro da Aldeia/RJ.',
        pr: 9376,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Desabilitada a emissão em lote para uma empresa específica, forçando envio unitário (1 nota por lote). A emissão em lote causava timeouts e rejeições para essa empresa devido ao volume e complexidade das notas enviadas simultaneamente.',
        pr: 9375,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Ajustado o preenchimento do endereço de prestação no provedor eTransparencia quando o local de prestação é diferente do tomador/prestador. O sistema agora valida se LocalPrestacaoServico possui CodigoIbgeCidade, Logradouro, Numero, Bairro e CodigoPostal preenchidos — caso contrário lança ValidationException (GW00105) com mensagem clara. Também corrigida comparação null-safe no CodigoIbgeCidadePrestacaoServico.',
        pr: 9374,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🔧',
        texto:
          'Atualizado o PDF Nacional offline (DANFSE) para preencher email e telefone do tomador com fallback. Quando os dados não estão disponíveis no XML da nota, o sistema agora busca em nfeServico.Tomador?.Telefone e nfeServico.Tomador?.Email como alternativa, exibindo "-" quando nenhuma fonte possui a informação.',
        pr: 9373,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Adicionado retry automático no provedor WebISSv2 para bloqueio temporário por excesso de requisições. Quando a prefeitura retorna a mensagem "O seu acesso foi bloqueado devido ao grande número de requisições", o sistema agora identifica esse cenário no método IdentificarCaracteristicasErro e popula a Exception com a mensagem formatada, permitindo que o mecanismo de retry reenvie automaticamente.',
        pr: 9372,
        autor: 'Davidson Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Machadinho/RS atualizado para GOVBRv3 — adicionado ao conjunto NaoUsaPedRegEventoCancelamento. O município não utiliza pedido de registro de evento de cancelamento, então o campo nPedRegEvento é definido como null ao invés de "001" durante o cancelamento de NFS-e, conforme regras específicas da prefeitura.',
        pr: 9371,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🔗',
        texto:
          'Atualizada a URL do webservice de Massapê/CE. A prefeitura migrou o domínio do serviço e o endereço anterior deixou de responder, causando falhas de emissão e consulta de NFS-e.',
        pr: 9370,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Corrigida a desserialização do objeto Indop no ConsultarInformacoesServicoCommand. O campo indicadorOperacao agora é desserializado como List<Indop> (array) ao invés de objeto único, com validações adicionais para evitar NullReferenceException quando detalheServico.IbsCbs é nulo ou quando o JSON não contém o item esperado.',
        pr: 9367,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🏙️',
        texto:
          "Alterado o nome do município de Açu/RN para Assú/RN no código (constante CodigoIBGE). A mudança reflete a alteração oficial do nome do município. Requer execução de script SQL no banco para atualizar a tabela Cidade (UPDATE Cidade SET Nome = 'Assú' WHERE CodigoIBGE = 2400208).",
        pr: 9364,
        autor: 'Felippe Salvo de Mendonça',
      },
    ],
  },
];
