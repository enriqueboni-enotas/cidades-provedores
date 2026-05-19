var aguardandoDeployData = [
  {
    tag: '19/05/2026',
    titulo: 'Segunda-feira — 19 de Maio',
    itens: [
      {
        icon: '📊',
        texto:
          'Ajuste na validação de NBS para o serviço 99.01.01 — o código de serviço 99.01.01 não exigia NBS anteriormente, mas algumas prefeituras passaram a rejeitar notas sem esse campo. A validação foi ajustada para incluir esse código na obrigatoriedade de envio do NBS quando aplicável.',
        pr: 9313,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🏙️',
        texto:
          'Remove MunicipioIncidencia quando ISS não retido e prestação fora do município — prefeituras rejeitavam notas que informavam município de incidência quando o ISS não era retido na fonte e a prestação ocorria fora do município do prestador. O campo agora é removido automaticamente nesse cenário, evitando rejeições por inconsistência.',
        pr: 9292,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🔧',
        texto:
          'Mapeamento do erro ER004 para retornar no XML em vez de lançar exceção — o erro ER004 da prefeitura causava uma exceção não tratada que travava o processamento da nota. Agora o erro é capturado e retornado como mensagem no XML de resposta, permitindo que o sistema continue processando outras notas do lote.',
        pr: 9316,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🔧',
        texto:
          'Desabilita envio em lote para empresa específica — uma empresa estava tendo problemas com envio em lote (múltiplas notas por requisição), causando timeout ou rejeição pela prefeitura. O envio foi limitado a uma nota por vez para essa empresa, resolvendo o travamento na fila de emissão.',
        pr: 9314,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Adiciona RemoveAccent no endereço do tomador — caracteres acentuados no endereço do tomador causavam rejeição em prefeituras que não aceitam caracteres especiais no XML. O tratamento RemoveAccent foi aplicado aos campos de endereço, sanitizando acentos antes do envio.',
        pr: 9312,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '📊',
        texto:
          'Envia apuração própria zerada quando PIS/COFINS não informados — quando o prestador não informa o bloco pisCofins no payload, o sistema agora envia os campos de apuração própria com valor zero em vez de omiti-los. Algumas prefeituras exigem que esses campos estejam presentes mesmo quando zerados.',
        pr: 9309,
        autor: 'Thiago Souza',
      },
      {
        icon: '🔧',
        texto:
          'Verificação nula em dadosTomador para evitar NullReferenceException — em cenários onde o tomador não é informado na nota, o sistema lançava NullReferenceException ao tentar acessar propriedades do objeto. A verificação de nulidade foi adicionada para tratar graciosamente notas sem dados de tomador.',
        pr: 9308,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🆕',
        texto:
          'WebApi Empresas — novo campo regimeApuracaoTributosSN — a API de empresas agora expõe o campo regimeApuracaoTributosSN, permitindo que integradores consultem e configurem o regime de apuração de tributos do Simples Nacional diretamente via API. Isso facilita a automação de cadastros para empresas optantes do Simples.',
        pr: 9111,
        autor: 'Gabriel Mesquita Moreira',
      },
      {
        icon: '🌐',
        texto:
          'GovDigital — ajuste de emissão para tomador do exterior — o provedor GovDigital não tratava corretamente notas com tomador estrangeiro, causando rejeição por dados incompletos. A emissão foi ajustada para preencher os campos obrigatórios de identificação do tomador exterior conforme exigido pelo webservice.',
        pr: 9114,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🏙️',
        texto:
          'Salto Grande/SP — migrado para provedor ISSMAP — o município de Salto Grande/SP teve seu provedor de NFS-e atualizado para o ISSMAP. A prefeitura migrou de sistema e as configurações de emissão foram atualizadas no gateway.',
        pr: 9307,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🌐',
        texto:
          'Atualização de emissão para tomador do exterior — ajuste genérico no fluxo de emissão para garantir que notas com tomador estrangeiro sejam formatadas corretamente, preenchendo campos obrigatórios como NIF e código do país quando o tomador não possui CPF/CNPJ brasileiro.',
        pr: 9306,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🌐',
        texto:
          'NfseNacionalV2 — validação de código postal obrigatório para tomador estrangeiro — o Portal Nacional passou a exigir o campo código postal (CEP) mesmo para tomadores do exterior. A validação foi implementada para retornar erro claro quando o campo não é informado, evitando rejeições genéricas do webservice.',
        pr: 9305,
        autor: 'Davidson Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Benedito Novo/SC — ativado no provedor IPM — o município de Benedito Novo/SC foi ativado para emissão de NFS-e pelo provedor IPM. A prefeitura aderiu ao sistema eletrônico e a integração foi configurada no gateway.',
        pr: 9304,
        autor: 'Thiago Souza',
      },
      {
        icon: '📊',
        texto:
          'Ajuste no valor líquido do PDF considerando tipo de retenção — o PDF da nota exibia valor líquido incorreto quando havia retenção de impostos federais. A correção considera o tipo de retenção (PIS/COFINS/CSLL) para calcular corretamente o valor líquido exibido no documento.',
        pr: 9303,
        autor: 'Thiago Souza',
      },
      {
        icon: '🔧',
        texto:
          'Atualização na validação da discriminação na consulta por RPS — a comparação de discriminação do serviço na consulta por RPS foi ajustada para ser mais tolerante, evitando falsos negativos quando o texto retornado pela prefeitura difere levemente do texto enviado (espaços extras, quebras de linha).',
        pr: 9301,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '📊',
        texto:
          'Zera alíquota e valores IBS/CBS para CST 410 (imunidade) — quando o CST é 410 (imunidade tributária), os campos de alíquota e valores de IBS/CBS devem ser zerados. Sem esse tratamento, prefeituras rejeitavam notas por inconsistência entre o CST de imunidade e valores tributários diferentes de zero.',
        pr: 9300,
        autor: 'Thiago Souza',
      },
      {
        icon: '🔧',
        texto:
          'Validação de tomador nulo adicionada — em cenários onde a nota não possui dados de tomador, o sistema agora valida e trata graciosamente em vez de lançar exceção. Isso evita travamento na fila de emissão para notas sem tomador identificado.',
        pr: 9299,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'RemoveInvalidXmlChars na descrição do serviço (xDescServ) — caracteres inválidos para XML (como caracteres de controle) na descrição do serviço causavam rejeição do XML pela prefeitura. O tratamento RemoveInvalidXmlChars foi aplicado ao campo xDescServ, sanitizando o texto antes do envio.',
        pr: 9291,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Itaju/SP — ativado no provedor Fiorilli — o município de Itaju/SP foi ativado para emissão de NFS-e pelo provedor Fiorilli. A prefeitura aderiu ao sistema eletrônico e a integração foi configurada no gateway com URLs e parâmetros necessários.',
        pr: 9290,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Nova empresa na lista idsNovoRespTecnico — uma empresa foi adicionada à lista que considera o CNPJ do responsável técnico no cadastro, corrigindo o erro 974 da SEFAZ por divergência no CSRT.',
        pr: 9285,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🏙️',
        texto:
          'Buenópolis/MG — ativado no provedor Sintese — o município de Buenópolis/MG foi ativado para emissão de NFS-e pelo provedor Sintese. A prefeitura aderiu ao sistema eletrônico e a integração foi configurada no gateway.',
        pr: 9282,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🔧',
        texto:
          'Tratamento para chamar consulta por RPS — adicionada lógica para acionar a consulta por RPS em cenários onde a consulta por lote não retorna resultado, garantindo que notas não fiquem travadas em "em emissão" indefinidamente.',
        pr: 9280,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Removido campo ref da observação — o campo ref havia sido adicionado provisoriamente à observação da nota para debug e foi removido agora que o problema foi resolvido. A observação volta ao formato padrão sem informações técnicas internas.',
        pr: 9270,
        autor: 'Alex Ramos Fernandes',
      },
    ],
  },
];
