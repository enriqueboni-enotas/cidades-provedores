var aguardandoDeployData = [
  {
    tag: '22/06/2026',
    titulo: 'Domingo — 22 de Junho',
    itens: [
      {
        icon: '🔧',
        texto:
          'Formata CNPJ do tomador e ordena busca por data crescente no download de XML do Portal Nacional. Antes, o CNPJ era enviado sem máscara ao headless browser e os resultados vinham sem ordenação definida. Agora o CNPJ é formatado corretamente e a busca retorna da data mais antiga para a mais recente, evitando inconsistências na paginação.',
        pr: 9686,
        autor: 'Thales Fonseca',
      },
      {
        icon: '🏙️',
        texto:
          'Ativação de São Francisco de Assis/SP no provedor GOVBRv3. O município foi configurado no gateway para emissão, consulta e cancelamento de NFS-e utilizando o sistema GOVBR na versão 3.',
        pr: 9678,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🆕',
        texto:
          'Implementação do provedor Megasoft para o município de Igaci/AL. O município utiliza o sistema Megasoft para NFS-e e agora está integrado ao gateway com suporte a emissão, consulta e cancelamento.',
        pr: 9633,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Remove flag UsaMetodoSincrono para Chapadinha/MA no provedor PowerSistemas. O município estava configurado para usar o método síncrono de consulta, mas esse comportamento causava problemas de timeout. A remoção da flag faz o sistema usar o fluxo assíncrono padrão, mais resiliente.',
        pr: 9680,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🏙️',
        texto:
          'Ativação de Jaicós/PI no provedor NfseNacional. O município piauiense aderiu ao Portal Nacional de NFS-e e agora pode emitir notas pelo padrão nacional.',
        pr: 9679,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Ativação de Acopiara/CE no provedor Saatri V2. O município cearense agora está integrado ao gateway utilizando o sistema Saatri na versão 2 para emissão de NFS-e.',
        pr: 9677,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Ativação de Taiaçu/SP no provedor GOVBRv3. O município paulista foi configurado no gateway com o provedor GOVBR versão 3 para emissão de notas fiscais de serviço.',
        pr: 9675,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Ativação de Triunfo/PE no provedor DataPublic API. O município pernambucano agora utiliza a API do DataPublic para emissão, consulta e cancelamento de NFS-e.',
        pr: 9672,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Atualização de Bacabal/MA para o provedor Prefeitura Moderna. O município maranhense migrou de sistema de NFS-e e teve suas configurações de URL e operações atualizadas no gateway.',
        pr: 9671,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🔧',
        texto:
          'Desabilita envio em lote para empresa específica que estava enfrentando problemas de concorrência. A empresa passa a enviar 1 nota por vez (ao invés de lote), evitando erros de processamento simultâneo no provedor.',
        pr: 9654,
        autor: 'Thiago Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Ativação de Inácio Martins/PR no provedor Equiplano. O município paranaense agora está integrado ao gateway com o sistema Equiplano para NFS-e.',
        pr: 9676,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Remove implementação que trocava indDest por indPessoas no provedor BethaV3. A manipulação anterior do XML era desnecessária e causava inconsistências no campo de indicador de destinatário. Agora o método apenas ajusta o namespace e posiciona as tags corretamente.',
        pr: 9674,
        autor: 'Thiago Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Ativação de Paulista/PB no provedor Elmar Informática. O município paraibano agora utiliza o sistema Elmar para emissão de NFS-e no gateway.',
        pr: 9673,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Atualiza características de emissão para Francisco Beltrão/PR e Toledo/PR no provedor Equiplano. Ambos os municípios passam a exigir informação de cliente e endereço do cliente para emissão — não será mais possível emitir notas sem esses dados nesses municípios.',
        pr: 9668,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Normaliza valor da NFS-e retornada no XML e implementa consulta por RPS no FiscoNetV2. O provedor FiscoNetV2 ganhou a operação de consulta individual de nota por RPS, com validações de tomador (CPF/CNPJ normalizado), valor do serviço (separador decimal) e data de emissão (tratamento de UTC/meia-noite).',
        pr: 9665,
        autor: 'Thiago Souza',
      },
      {
        icon: '🔧',
        texto:
          'Padroniza geração de PDF no FiorilliV2 para sempre usar o modo offline (layout nacional). Antes, o provedor tentava baixar o PDF via ADN e, em caso de falha, gerava localmente. Agora gera sempre offline, eliminando dependência do serviço externo e reduzindo latência na geração de PDF.',
        pr: 9664,
        autor: 'Thiago Souza',
      },
      {
        icon: '📊',
        texto:
          'Atualiza preenchimento de natureza da operação para subscription específica em Juiz de Fora/MG. Quando existe uma natureza "fixada" pela configuração da empresa, o sistema agora a usa com prioridade antes de calcular baseado no município de incidência, evitando rejeições por natureza incorreta.',
        pr: 9663,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Replica endereço da obra como local de prestação quando o LocalPrestacaoServico não é informado. Para empresas configuradas, quando existe um endereço de obra (construção civil) e o local de prestação está vazio, o sistema preenche automaticamente o local de prestação com os dados da obra. Evita rejeições por falta de dados em prefeituras que exigem local de prestação.',
        pr: 9661,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🔧',
        texto:
          'Inclui empresaID na lista de empresas que enviam IM (Inscrição Municipal) do tomador com hífen. A prefeitura do município em questão exige o hífen na IM para validação correta da nota.',
        pr: 9659,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🔧',
        texto:
          'Atualiza envio do intermediário do serviço para aceitar tanto objeto único quanto lista. Antes, o metadado "intermediario" precisava ser enviado como lista; agora aceita ambos os formatos (objeto ou lista), normalizando internamente para evitar erros de deserialização e NullReferenceException.',
        pr: 9656,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Inclui empresaID na lista idsNovoRespTecnico. A empresa estava recebendo rejeições por enviar o campo de responsável técnico em formato incompatível com o que o provedor espera.',
        pr: 9655,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🏙️',
        texto:
          "Corrige envio do código de tributação municipal para Jaboticatubas/MG no provedor EeL. O CodigoTributacaoMunicipio estava perdendo o zero à esquerda durante a conversão numérica, causando rejeição pela prefeitura. O fix usa PadLeft(4, '0') após RemoveNonNumbers() para preservar a formatação exigida.",
        pr: 9650,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🔧',
        texto:
          'Ativa emissão em paralelo no NFeProduto para empresas de teste (Gilbarco STG e NotaGateway Demo Mottu). Inclui as empresas no mecanismo de lock distribuído (EmpresasNewLock) com capacidades configuradas, preparando para validação do fluxo paralelo antes de expansão para mais empresas.',
        pr: 9681,
        autor: 'Gabriel Mesquita Moreira',
      },
    ],
  },
];
