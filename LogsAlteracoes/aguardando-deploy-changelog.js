var aguardandoDeployData = [
  {
    tag: '29/05/2026',
    titulo: 'Quinta-feira — 29 de Maio',
    itens: [
      {
        icon: '🏙️',
        texto:
          'Volta cidades para o provedor Fiorilli versão Abrasf — municípios que haviam sido migrados para outro provedor retornam ao Fiorilli com a versão ABRASF padrão, restaurando a comunicação com o webservice original.',
        pr: 9446,
        autor: 'Thiago Souza',
      },
      {
        icon: '⚡',
        texto:
          'Ativa paralelismo no envio de notas para duas empresas de Goiânia/GO — empresas com alto volume em Goiânia agora processam notas em paralelo, reduzindo o tempo total de emissão e evitando acúmulo na fila.',
        pr: 9442,
        autor: 'Otávio Augusto Reis',
      },
      {
        icon: '🔧',
        texto:
          'Configura consumidorFinal para empresa específica — a flag consumidorFinal é ativada para uma empresa que emite notas para pessoa física sem identificação, evitando rejeição em prefeituras que exigem esse campo.',
        pr: 9437,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🆕',
        texto:
          'Criação do novo provedor FiorilliV2 — implementação completa do provedor Fiorilli na versão 2, com suporte a novas operações e formato de comunicação atualizado. Permite migrar municípios que usam a versão mais recente do sistema Fiorilli.',
        pr: 9404,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🏙️',
        texto:
          'Bernardino de Campos/SP migrado para ISSMAP — a prefeitura trocou de sistema de NFS-e e as configurações foram atualizadas para o provedor ISSMAP, restaurando a emissão de notas no município.',
        pr: 9436,
        autor: 'Thiago Souza',
      },
      {
        icon: '🔗',
        texto:
          'Configura URL de download de PDF para Feira de Santana/BA — adicionada a URL específica para download do PDF da nota fiscal em Feira de Santana, permitindo que o sistema recupere o documento diretamente da prefeitura.',
        pr: 9434,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Tratamento de mensagem de erro — melhoria na limpeza e formatação de mensagens de erro retornadas pelas prefeituras, removendo HTML e caracteres especiais para exibição legível ao cliente.',
        pr: 9432,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Ajuste no tratamento de erro de cancelamento para suportar mensagens em português e inglês — o sistema agora reconhece mensagens de erro de cancelamento em ambos os idiomas, evitando que erros em inglês sejam tratados como erro desconhecido.',
        pr: 9429,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🔧',
        texto:
          'Mapeamento do erro E1000 para retornar XML ao invés de exceção — quando o provedor retorna erro E1000, o sistema agora processa a resposta XML normalmente e extrai a mensagem de erro, ao invés de lançar exceção genérica que ocultava o motivo real da rejeição.',
        pr: 9428,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🏙️',
        texto:
          'Cataguases/MG atualizado para o provedor IPMv2 — o município foi migrado para a versão 2 do provedor IPM, com URLs e configurações atualizadas para o novo webservice da prefeitura.',
        pr: 9427,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🏙️',
        texto:
          'Envio de dados de construção civil para serviços que exigem — para códigos de serviço relacionados a construção civil, o sistema agora envia os dados obrigatórios (ART, código da obra, etc.) que antes eram omitidos, causando rejeição em prefeituras que validam esses campos.',
        pr: 9425,
        autor: 'Thiago Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Envio de endereço de obra para empresa — adicionado suporte ao envio do endereço da obra quando a empresa possui essa informação cadastrada, atendendo exigências de prefeituras que validam o local efetivo da prestação.',
        pr: 9422,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🔧',
        texto:
          'Atualiza preenchimento do serviço municipal para o provedor — ajustado o mapeamento do código de serviço municipal para garantir que o campo seja preenchido corretamente conforme esperado pelo webservice do provedor.',
        pr: 9421,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔗',
        texto:
          'Configura proxy estático para Pinhalzinho/SP — adicionada configuração de proxy estático para o município de Pinhalzinho/SP, garantindo que a comunicação com o webservice da prefeitura passe pelo IP correto e evitando bloqueios de firewall.',
        pr: 9420,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🔧',
        texto:
          'Remove espaços em branco da inscrição municipal com .Trim() — a inscrição municipal agora é sanitizada removendo espaços antes e depois do valor. Espaços extras causavam rejeição em provedores que validam o formato exato do campo.',
        pr: 9419,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '📋',
        texto:
          'SEFAZ: adiciona informação complementar para empresa específica da Erbon Software — campo infAdFisco preenchido com dados obrigatórios exigidos pela SEFAZ para uma empresa específica da integração Erbon Software, evitando rejeição por campo obrigatório ausente.',
        pr: 9418,
        autor: 'Davidson Souza',
      },
    ],
  },
];
