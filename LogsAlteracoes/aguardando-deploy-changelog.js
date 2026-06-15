var aguardandoDeployData = [
  {
    tag: '15/06/2026',
    titulo: 'Domingo — 15 de Junho',
    itens: [
      {
        icon: '🧾',
        texto:
          'Implementação dos novos campos da reforma tributária (IBS/CBS) no provedor Equiplano — foram criadas classes para Comércio Exterior, Dados de Evento, Dados de Obra e endereço reutilizável. O provedor Equiplano agora suporta envio de NBS, IBS/CBS, dados de obra e evento no XML da nota, com validação de campos e integração ao serviço de cálculo tributário.',
        pr: 9590,
        autor: 'Davidson Souza',
      },
      {
        icon: '🔧',
        texto:
          'Adiciona tratamento para desserializar corretamente respostas do provedor GIAPv2 — a prefeitura estava retornando texto fora da estrutura XML esperada, causando falha na desserialização. O fix sanitiza o XML antes de processar, injetando tags faltantes quando necessário e removendo texto espúrio antes do elemento raiz.',
        pr: 9594,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Rio da Conceição/TO ativado no provedor NfseNacionalV2 — o município aderiu ao Portal Nacional de NFS-e na versão 2, com suporte completo a emissão, consulta por DPS e cancelamento padronizado.',
        pr: 9593,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Paraná/TO ativado no provedor Publica V1 — a prefeitura utiliza o sistema Publica para emissão de NFS-e, e o município foi configurado no gateway.',
        pr: 9592,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Paraíso do Norte/PR ativado no provedor IPM — a prefeitura utiliza o sistema IPM para NFS-e, e agora pode emitir, consultar e cancelar notas pelo gateway.',
        pr: 9591,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Ajusta validação do CodigoTributacaoMunicipio em casos de uso do código de benefício fiscal — quando o contribuinte usa código de benefício fiscal, a validação do código de tributação municipal não deve ser aplicada da mesma forma, evitando rejeições indevidas.',
        pr: 9589,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🏙️',
        texto:
          'Ativa municípios no provedor Fiorilli — novos municípios foram configurados para emissão de NFS-e via provedor Fiorilli, que atende diversas prefeituras com sistema próprio.',
        pr: 9588,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Remove flag que estava causando erro em produção — uma flag de controle temporária estava gerando comportamento inesperado e foi removida para restaurar o funcionamento normal.',
        pr: 9586,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Remove condição temporária de geração de PDF — a configuração temporária de diagnóstico de PDF adicionada anteriormente foi removida após resolução do caso investigado.',
        pr: 9584,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Atualiza parse do valorISS no XML retornado pela prefeitura — o provedor estava falhando ao interpretar o valor do ISS retornado no XML da prefeitura em formato diferente do esperado. O ajuste corrige o parsing para aceitar variações de formato numérico.',
        pr: 9583,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Santo Antônio do Grama/MG ativado no provedor NfseNacional — o município aderiu ao Portal Nacional de NFS-e e foi configurado no gateway com suporte a emissão, consulta e cancelamento.',
        pr: 9581,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Campo Alegre de Lourdes/BA migra para provedor Saatri — a prefeitura trocou de sistema de NFS-e e as configurações foram atualizadas para o provedor Saatri.',
        pr: 9580,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Adiciona envio de endereço de obra para empresas que necessitam — quando a nota é de construção civil, o endereço da obra agora é enviado corretamente no XML para empresas que possuem essa configuração, evitando rejeições por falta de dados obrigatórios.',
        pr: 9579,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🏙️',
        texto:
          'Itajobi/SP migra para NfseNacional — o município aderiu ao Portal Nacional de NFS-e, substituindo o provedor anterior.',
        pr: 9577,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Biritiba Mirim/SP migra para NfseNacional — o município aderiu ao Portal Nacional de NFS-e com suporte completo a emissão padronizada.',
        pr: 9575,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Monte Negro/RO migra para NfseNacional — o município aderiu ao Portal Nacional de NFS-e.',
        pr: 9574,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Implementa cancelamento no provedor FiorilliV2 — a operação de cancelamento de NFS-e foi implementada para o provedor FiorilliV2, permitindo que municípios que usam esse provedor possam cancelar notas diretamente pelo gateway.',
        pr: 9573,
        autor: 'Thiago Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Ingá/PB ativado no provedor Eticons — a prefeitura utiliza o sistema Eticons para NFS-e, e o município foi configurado no gateway.',
        pr: 9571,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Abaiara/CE ativado no provedor XtronLine — a prefeitura utiliza o sistema XtronLine para NFS-e, e o município foi configurado no gateway.',
        pr: 9570,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '📊',
        texto:
          'Removida lista de Subscriptions do Simples Nacional que forçava envio de NBS — a condição estava obrigando o envio do código NBS para determinadas subscriptions do Simples Nacional de forma incorreta, causando rejeições. A remoção permite que o NBS seja enviado apenas quando efetivamente preenchido pelo contribuinte.',
        pr: 9569,
        autor: 'Davidson Souza',
      },
    ],
  },
];
