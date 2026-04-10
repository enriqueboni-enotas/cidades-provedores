var aguardandoDeployData = [
  {
    tag: '10/04/2026',
    titulo: 'Sexta-feira — 10 de Abril',
    itens: [
      {
        icon: '🗑️',
        texto:
          'Remoção de código legado desnecessário — limpeza de trechos que não eram mais utilizados no fluxo de emissão',
        pr: 8834,
        autor: 'Thiago Souza',
      },
      {
        icon: '🔧',
        texto:
          'Correção na extração do número da nota fiscal — ajustado para não retornar número incorreto em cenários de consulta por lote',
        pr: 8806,
        autor: 'Davidson Souza',
      },
      {
        icon: '🆕',
        texto:
          'Ativa a propriedade UsaNovoFormatoPisCofins e implementa consulta por RPS para o provedor — permite envio de PIS/COFINS no novo formato e consulta individual de notas',
        pr: 8814,
        autor: 'Thiago Souza',
      },
      {
        icon: '🛡️',
        texto:
          'Tratamento de mensagem ao tentar cancelar nota já processada — retorna mensagem amigável ao invés de erro genérico quando o cancelamento não é possível',
        pr: 8820,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Atualiza provedor de São João Batista do Glória/MG para MemoryV2 — migração do provedor antigo para a versão mais recente',
        pr: 8823,
        autor: 'Thiago Souza',
      },
      {
        icon: '🌐',
        texto:
          'Adrianópolis/PR aderiu ao portal nacional de NFS-e — município passa a emitir pelo layout nacional, sem necessidade de provedor específico',
        pr: 8829,
        autor: 'Davidson Souza',
      },
      {
        icon: '🌐',
        texto:
          'Tangará/SC aderiu ao portal nacional de NFS-e — município migrado para emissão via layout nacional',
        pr: 8826,
        autor: 'Henrique Cassio',
      },
      {
        icon: '⏸️',
        texto:
          'Desabilita emissão em lote para empresa específica — empresa estava com problemas de duplicidade ao emitir em lote, agora emite uma nota por vez',
        pr: 8825,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '📋',
        texto:
          'Adiciona envio do código NBS para empresa específica — necessário para atender exigência do portal nacional em determinados serviços',
        pr: 8819,
        autor: 'Felippe Salvo',
      },
      {
        icon: '🔧',
        texto:
          'Adiciona campo AutenticidadeNota no fluxo de emissão — permite validação de autenticidade da nota junto à prefeitura',
        pr: 8818,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🌐',
        texto:
          'Serrania/MG aderiu ao portal nacional de NFS-e — município migrado para emissão via layout nacional',
        pr: 8815,
        autor: 'Davidson Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Inclui empresa na lista de incidência no município do prestador — corrige cenário onde o ISS era calculado no município errado para essa empresa',
        pr: 8812,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🏙️',
        texto:
          'Atualiza Socorro/SP para o provedor BethaV3 — município migrou de provedor, URLs e configurações atualizadas',
        pr: 8809,
        autor: 'Henrique Cassio',
      },
      {
        icon: '📊',
        texto:
          'Remove municípios da flag SempreEnviaAliquotaIssEmpresasSimplesNacional — ajuste para que empresas do Simples Nacional nesses municípios não enviem alíquota ISS desnecessariamente',
        pr: 8805,
        autor: 'Felippe Salvo',
      },
      {
        icon: '🧾',
        texto:
          'Ajusta geração da DACE (Documento Auxiliar de Contingência Eletrônico) para cenários de contingência no DanfeMS — corrige layout do documento em situações de indisponibilidade da SEFAZ',
        pr: 8827,
        autor: 'Gabriel Mesquita',
      },
    ],
  },
];
