var aguardandoDeployData = [
  {
    tag: '11/06/2026',
    titulo: 'Quarta-feira — 11 de Junho',
    itens: [
      {
        icon: '🔧',
        texto:
          'Configura empresa específica para respeitar o município de incidência informado na nota ao invés de usar o padrão. Resolve rejeições em prefeituras que validam estritamente o local de prestação do serviço quando o município de incidência difere do endereço do prestador.',
        pr: 9543,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🏙️',
        texto:
          'Retorna Nova Mamoré/RO para a versão ABRASF do provedor anterior. O município havia sido migrado para uma versão mais recente que apresentou incompatibilidades. O rollback garante continuidade na emissão até que a integração seja estabilizada na nova versão.',
        pr: 9552,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🔧',
        texto:
          'Adiciona suporte para empresas que possuem múltiplas Inscrições Municipais (IM). Anteriormente o sistema assumia uma única IM por empresa, causando conflitos em empresas que operam em múltiplos municípios com IMs distintas. Agora o sistema identifica qual IM usar baseado no município de emissão.',
        pr: 9532,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Horizonte/CE é migrado para o novo provedor SpeedGovV2. O município utiliza o sistema SpeedGov na versão 2 (padrão nacional), e a configuração foi atualizada com as URLs e operações do novo provedor, permitindo emissão, consulta e cancelamento padronizados.',
        pr: 9550,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '📊',
        texto:
          'Configura a subscription Per2Park para enviar o código NBS (Nomenclatura Brasileira de Serviços) em notas do Simples Nacional. O NBS é exigido por alguns municípios para classificação de serviços, especialmente em operações internacionais.',
        pr: 9549,
        autor: 'Davidson Souza',
      },
      {
        icon: '🌐',
        texto:
          'Implementa comércio exterior completo no provedor, atualizando a lista de países disponíveis para tomadores estrangeiros. Permite emissão correta de notas para tomadores em países que antes não estavam cadastrados no sistema, ampliando a cobertura de exportação de serviços.',
        pr: 9525,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Ajusta a validação do código de serviço para aceitar formatos variados e padroniza o formato da data de emissão (DtEmissao) no XML enviado ao provedor. Resolve rejeições causadas por diferença de formato entre o que o sistema gerava e o que a prefeitura esperava.',
        pr: 9544,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🏙️',
        texto:
          'Ativa a flag NaoUsaAssinatura para Cafelândia/SP. Essa configuração indica que o município não exige assinatura digital no XML de envio do RPS, simplificando o fluxo de emissão e evitando rejeições por certificado em prefeituras que não validam a assinatura.',
        pr: 9548,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🔧',
        texto:
          'Adiciona validação que retorna erro claro quando a prefeitura não suporta ambiente de homologação. Antes, tentar emitir em homologação em municípios sem suporte resultava em erros genéricos de conexão. Agora o sistema informa antecipadamente que o município só aceita emissão em produção.',
        pr: 9547,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🏙️',
        texto:
          'Monte Aprazível/SP adere ao Portal Nacional de NFS-e. O município foi configurado com o provedor NfseNacional, com suporte a emissão via DPS, consulta padronizada e cancelamento via evento.',
        pr: 9546,
        autor: 'Davidson Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Pilar do Sul/SP é atualizado para o provedor NfseNacionalV2. A migração para a versão 2 do Portal Nacional oferece funcionalidades adicionais como substituição de notas e consulta por DPS aprimorada.',
        pr: 9542,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Atualiza o parser para extrair o valorISS diretamente do XML de resposta do provedor. Antes, o valor do ISS era calculado internamente, podendo divergir do valor que a prefeitura efetivamente registrou. Agora o valor exibido ao cliente é o mesmo registrado na prefeitura.',
        pr: 9541,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Configura o envio do campo cIntContrib (código de contribuinte integrado) para empresa específica. Esse campo é exigido por determinados provedores para identificar o contribuinte junto à prefeitura, e sua ausência causava rejeição na emissão.',
        pr: 9539,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Inclui empresaID na regra de incidência para considerar o município do prestador. Para essa empresa específica, o ISS deve incidir no município do prestador (e não no do tomador), conforme legislação local. A configuração garante que o município correto seja enviado no XML.',
        pr: 9535,
        autor: 'Henrique Cassio',
      },
    ],
  },
];
