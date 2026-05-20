var aguardandoDeployData = [
  {
    tag: '20/05/2026',
    titulo: 'Quarta-feira — 20 de Maio',
    itens: [
      {
        icon: '🏙️',
        texto:
          'Atualização da URL do webservice de São Gabriel do Oeste/MS no provedor Fiorilli. A prefeitura alterou o endereço do serviço de NFS-e, e a URL antiga parou de responder. Com essa correção, as emissões e consultas voltam a funcionar normalmente para empresas desse município.',
        pr: 9336,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🔧',
        texto:
          'Correção de erro de desserialização no provedor Freire (Eunápolis/BA). O XML de resposta da prefeitura continha uma declaração XML duplicada (<?xml version="1.0"?>) dentro da tag <ListaNfse>, o que causava falha ao interpretar o retorno. Agora o sistema sanitiza a resposta removendo a declaração duplicada antes de processar, evitando que notas fiquem travadas em "em emissão" sem retorno.',
        pr: 9332,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🏙️',
        texto:
          'Atualização dos endpoints de Vinhedo/SP no provedor GIAPv2. O município migrou seus webservices para o novo domínio Balker, substituindo as URLs antigas. Sem essa atualização, todas as operações de emissão, consulta e cancelamento de NFS-e em Vinhedo/SP falhariam por timeout ou erro de conexão.',
        pr: 9335,
        autor: 'Davidson Souza',
      },
      {
        icon: '📊',
        texto:
          'Implementação de apuração própria de PIS/COFINS no Portal Nacional (NFS-e Nacional) para integração alternativa. Anteriormente, o cálculo do valor líquido ficava incorreto quando a empresa tinha apuração própria de PIS e COFINS, pois o sistema não diferenciava entre retenção e apuração própria. Agora o método MontaImpostoFederal calcula corretamente vPisProprio/vCofinsProprio, deriva alíquotas quando não informadas, normaliza CST e recalcula vRetCSLL. Isso corrige divergências de valores em notas emitidas pelo Portal Nacional.',
        pr: 9164,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Atualização do endpoint de Nova Resende/MG no provedor EeLv3. A prefeitura alterou o endereço do webservice de NFS-e e a URL anterior deixou de funcionar. A configuração no XML de municípios foi atualizada para o novo endereço, restaurando a comunicação com a prefeitura.',
        pr: 9334,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🔧',
        texto:
          'Tratamento de num_rps nulo na desserialização da consulta de lote no provedor SIGISS v1. Algumas prefeituras (como Itapira/SP) retornam o campo <num_rps> com atributo xsi:nil="true" em vez de um valor numérico, o que causava erro de desserialização e impedia a consulta de lotes. Agora o sistema substitui esse campo nulo pelo valor padrão 0 antes de processar o XML, evitando que notas fiquem sem retorno de consulta.',
        pr: 9333,
        autor: 'Davidson Souza',
      },
      {
        icon: '🆕',
        texto:
          'Migração do município de Itacoatiara/AM para o provedor BethaV3. A prefeitura trocou de sistema de NFS-e e agora utiliza a plataforma Betha na versão 3. Todas as configurações de URL, namespace e operações foram atualizadas no XML de municípios para o novo provedor, permitindo que empresas de Itacoatiara voltem a emitir notas normalmente.',
        pr: 9327,
        autor: 'Thiago Souza',
      },
      {
        icon: '🔧',
        texto:
          'Atualização do CNPJ no comando ConfigurarCertificadoTeste. O suporte estava com dificuldades para vincular o certificado digital de teste da Nota Gateway porque o CNPJ hardcoded no código estava desatualizado. O CNPJ foi alterado para o valor correto, permitindo que a equipe de suporte configure certificados de teste sem impedimentos.',
        pr: 9326,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🆕',
        texto:
          'Ativação do município de Barra do Choça/BA para o provedor EeLv3. O município foi configurado no XML de municípios com todas as operações necessárias (emissão, consulta, cancelamento), permitindo que empresas dessa cidade passem a emitir NFS-e pelo eNotas Gateway.',
        pr: 9325,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🏙️',
        texto:
          'Migração do provedor de Piedade/SP para GissOnline. O município trocou de sistema de NFS-e e agora utiliza o provedor GissOnline. Além da atualização das configurações no XML de municípios, Piedade/SP foi adicionada à lista de municípios que não exigem código NBS válido (NaoObrigaNBS), evitando rejeições desnecessárias na emissão de notas.',
        pr: 9322,
        autor: 'Thiago Souza',
      },
      {
        icon: '📊',
        texto:
          'Adição da Nibo na exceção de envio de NBS para Simples Nacional no Portal Nacional. Empresas da subscription Nibo que emitem pelo Portal Nacional estavam tendo notas rejeitadas por não enviar o campo NBS. A subscription foi adicionada à lista SubscriptionsSempreEnviarNBS, garantindo que o código NBS seja sempre incluído no XML independentemente do regime tributário.',
        pr: 9321,
        autor: 'Davidson Souza',
      },
      {
        icon: '📊',
        texto:
          'Liberação do envio de IBSCBS para a subscription da Sankhya no provedor IIBrasil. Anteriormente, o bloco de cálculo de IBSCBS (código de tributação de serviço) só era executado para Ilhabela/SP. Agora a subscription da Sankhya também entra nessa lógica, permitindo que suas notas incluam corretamente os dados de IBSCBS e evitando rejeições por falta de informação tributária.',
        pr: 9320,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🔧',
        texto:
          'Adição de tratamento para permitir emissão sem assinatura digital no provedor IPMv2 para Estância Velha/RS. Esse provedor não exige assinatura do XML com certificado digital — a autenticação é feita apenas por usuário e senha. O município foi marcado com AssinaturaDigital = Opcional, permitindo que empresas sem certificado configurado consigam emitir notas normalmente nessa cidade.',
        pr: 9319,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔗',
        texto:
          'Implementação da operação de consulta de NFS-e por RPS (DPS) no provedor CoplanV2. Essa operação é essencial para sincronização — quando o sistema precisa verificar se uma nota específica foi processada pela prefeitura, consulta pelo número do RPS. Sem ela, notas ficavam em status "em emissão" indefinidamente. O novo método suporta proxy, validação de certificado, tratamento de erros HTTP e extração completa dos dados da nota retornada.',
        pr: 9315,
        autor: 'Alex Ramos Fernandes',
      },
    ],
  },
  {
    tag: '19/05/2026',
    titulo: 'Terça-feira — 19 de Maio',
    itens: [
      {
        icon: '🏙️',
        texto:
          'Adição de tratamento especial para uma subscription usar o MunicipioIncidenciaService no provedor SIGISSv5. Para essa subscription específica, o município de incidência do serviço precisa ser deduzido automaticamente pelo sistema em vez de usar o valor informado pelo cliente. A lógica foi aplicada tanto na criação do serviço RPS quanto na resolução da natureza de operação, garantindo que o ISS seja recolhido no município correto e evitando rejeições por divergência de incidência.',
        pr: 9323,
        autor: 'Henrique Cassio',
      },
    ],
  },
];
