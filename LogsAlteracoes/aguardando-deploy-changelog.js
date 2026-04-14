var aguardandoDeployData = [
  {
    tag: '13/04/2026',
    titulo: 'Segunda-feira — 13 de Abril',
    itens: [
      {
        icon: '🏙️',
        texto:
          'Diversos ajustes no layout 4.2 de Barueri/SP — correção no cálculo do total de impostos retidos para não considerar PIS/COFINS quando não são retidos, preenchimento do endereço completo do local de prestação de serviço com valores padrão quando ausentes, e ajuste no preenchimento dos dados de exportação. Essas correções resolvem problemas de rejeição de notas em Barueri no novo layout ABRASF 4.2.',
        pr: null,
        autor: 'Jonathan Souza',
      },
      {
        icon: '🧮',
        texto:
          'Ajuste na validação do percentual aproximado de tributos do Simples Nacional — agora o sistema verifica se o percentual é maior que zero antes de enviar. Evita que notas sejam emitidas com valor de tributos aproximados zerado quando a alíquota do SN não está configurada corretamente.',
        pr: null,
        autor: 'Jonathan Souza',
      },
      {
        icon: '🧮',
        texto:
          'Remoção de condição desnecessária na consulta por código IBGE em Barueri/SP — quando a consulta é feita por código IBGE, o sistema agora sempre retorna a cidade de prestação do serviço sem filtro adicional. Também foi adicionada lógica para remover parcialmente do total de tributos retidos os valores de PIS/COFINS de acordo com o campo de tipo de retenção (tpRet), corrigindo o cálculo de impostos retidos no layout 4.2.',
        pr: null,
        autor: 'Jonathan Souza',
      },
      {
        icon: '📮',
        texto:
          'Ajuste para remover caracteres não numéricos do CEP antes de enviar para a prefeitura — CEPs com formatação (ex: "01310-100") agora são limpos automaticamente, evitando rejeições por formato inválido no campo de endereço do RPS.',
        pr: null,
        autor: 'Jonathan Souza',
      },
    ],
  },
  {
    tag: '12/04/2026',
    titulo: 'Domingo — 12 de Abril',
    itens: [
      {
        icon: '🏙️',
        texto:
          'Ajuste para permitir o envio dos tributos aproximados (Lei da Transparência) em São Paulo/SP no novo layout JSON — o provedor de São Paulo passou a aceitar os valores de tributos aproximados no formato JSON, e o sistema foi atualizado para incluir esses dados quando disponíveis. Isso garante conformidade com a Lei 12.741/2012 nas notas emitidas em SP.',
        pr: null,
        autor: 'Jonathan Souza',
      },
    ],
  },
];
