var aguardandoDeployData = [
  {
    tag: '12/05/2026',
    titulo: 'Terça-feira — 12 de Maio',
    itens: [
      {
        icon: '🔧',
        texto:
          'Ajuste no fluxo de emissão com PIS/COFINS retido e apuração própria no provedor ISSIntel. A lógica tributária foi refatorada para separar explicitamente os dois cenários: quando o PIS/COFINS é de apuração própria do prestador e quando é retido pelo tomador. Foram criados métodos dedicados para formatar impostos federais em cada caso, garantindo que bases de cálculo, alíquotas, valores e CST sejam atribuídos corretamente. Também foi adicionada validação mais rígida que rejeita base de cálculo zero, evitando notas com valores tributários inconsistentes.',
        pr: 9241,
        autor: 'Thiago Souza',
      },
      {
        icon: '📊',
        texto:
          'Habilitação da empresa ONFLY TECNOLOGIA para envio de lotes de NF-e em paralelo via Sankhya. A empresa foi adicionada ao dicionário de controle de concorrência (GlobalLockManager), permitindo que múltiplos lotes sejam processados simultaneamente em vez de sequencialmente. Também foi incluída a empresa Funer Cor de Jesus no mesmo mecanismo. Isso reduz o tempo total de processamento para empresas com alto volume de emissão.',
        pr: 9247,
        autor: 'Gabriel Mesquita Moreira',
      },
    ],
  },
];
