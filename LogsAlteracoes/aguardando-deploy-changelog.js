var aguardandoDeployData = [
  {
    tag: '17/04/2026',
    titulo: 'Sexta-feira — 17 de Abril',
    itens: [
      {
        icon: '🏙️',
        texto:
          'Atualização na forma de envio do município do tomador — o sistema passou a enviar o município do tomador de forma diferente para evitar rejeições em prefeituras que exigem um formato específico no campo de cidade do destinatário.',
        pr: 8956,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '📊',
        texto:
          'Garantia do envio da situação tributária PIS/COFINS para todas as emissões — antes, a situação tributária de PIS e COFINS só era enviada em cenários específicos. Agora o campo é enviado em todas as emissões, evitando rejeições em prefeituras que exigem essa informação obrigatoriamente.',
        pr: 8954,
        autor: 'Thiago Souza',
      },
      {
        icon: '🔧',
        texto:
          'Novas dimensões nos eventos de emissão de NF-e — foram adicionadas novas dimensões (métricas e atributos) aos eventos de emissão de NF-e, permitindo melhor rastreabilidade e análise de dados sobre o processo de emissão.',
        pr: 8901,
        autor: 'Gabriel Mesquita Moreira',
      },
      {
        icon: '📊',
        texto:
          'Cálculo do valor líquido com base nos impostos retidos e descontos — o valor líquido da nota agora é calculado considerando corretamente os impostos retidos e descontos aplicados, além da base de cálculo. Isso corrige divergências entre o valor exibido e o valor real recebido pelo prestador.',
        pr: 8938,
        autor: 'Thiago Souza',
      },
      {
        icon: '🔧',
        texto:
          'Configuração de CST (Código de Situação Tributária) por empresa — agora é possível configurar o CST de forma específica por empresa, ao invés de usar apenas o padrão do provedor. Isso resolve casos onde empresas do mesmo município precisam de CSTs diferentes.',
        pr: 8926,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Ativação de Livramento de Nossa Senhora/BA para o provedor Fisco.NetV2 — o município aderiu ao sistema eletrônico de NFS-e e a integração foi configurada no gateway.',
        pr: 8942,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🏙️',
        texto:
          'Mambaí/GO aderiu ao Portal Nacional de NFS-e — o município migrou para o Portal Nacional e as configurações foram atualizadas para que a emissão passe pelo novo sistema.',
        pr: 8941,
        autor: 'Davidson Souza',
      },
      {
        icon: '🔗',
        texto:
          'Atualização do link de integração de Goianira/GO — a prefeitura alterou a URL do webservice de NFS-e e o gateway foi atualizado para apontar para o novo endereço, restaurando a comunicação.',
        pr: 8940,
        autor: 'Thiago Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Ativação de Augustinópolis/TO para o provedor Fiorilli — o município passou a aceitar NFS-e eletrônica pelo provedor Fiorilli e a integração foi configurada.',
        pr: 8935,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🔗',
        texto:
          'Atualização da URL de importação de arquivo — a URL utilizada para importação de arquivos foi atualizada para o novo endereço, garantindo que o processo de importação continue funcionando.',
        pr: 8934,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Ativação de Mossâmedes/GO para o provedor ArrecadaNet — o município aderiu ao sistema eletrônico de NFS-e e a integração foi configurada no gateway.',
        pr: 8933,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🌐',
        texto:
          'Correção na UF do tomador para exportação — ao emitir NFS-e para tomador do exterior, o campo SiglaUFTom na reg.20 agora é sempre preenchido com "EX", evitando erro específico de validação em prefeituras que rejeitavam a nota quando a UF não era "EX".',
        pr: 8931,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🏙️',
        texto:
          'Presidente Dutra/MA aderiu ao Portal Nacional de NFS-e — o município migrou para o Portal Nacional e as configurações foram atualizadas.',
        pr: 8930,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🏙️',
        texto:
          "Ativação de São Jorge d'Oeste/PR para o provedor Equiplano — o município passou a aceitar NFS-e eletrônica e a integração foi configurada.",
        pr: 8929,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Ativação de Ouroverde de Goiás/GO para o provedor ArrecadaNet — o município aderiu ao sistema eletrônico de NFS-e e a integração foi configurada.',
        pr: 8928,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🔄',
        texto:
          'Conceição do Araguaia/PA migrado para o provedor Aspect — a prefeitura trocou de sistema de NFS-e e as URLs e configurações foram atualizadas para o novo provedor, garantindo continuidade na emissão.',
        pr: 8912,
        autor: 'Vitor Fernandes',
      },
    ],
  },
];
