var aguardandoDeployData = [
  {
    tag: '02/06/2026',
    titulo: 'Terça-feira — 02 de Junho',
    itens: [
      {
        icon: '🏙️',
        texto:
          'Correção do link de integração de Campo Bom/RS após migração para o provedor GIFv2. O município havia sido migrado do provedor anterior para o GIFv2, mas a URL de comunicação com a prefeitura estava incorreta no XML de configuração. Sem o link correto, as notas não conseguiam ser transmitidas ao webservice municipal. O ajuste corrige a URL para que a emissão e consulta de NFS-e voltem a funcionar normalmente.',
        pr: 9479,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Migração de Campo Bom/RS para o provedor GIFv2. O município utilizava um provedor anterior e foi reconfigurado para utilizar o GIFv2, que é o sistema atualmente adotado pela prefeitura para emissão de NFS-e. As configurações de URL, namespace e parâmetros de comunicação foram atualizadas no XML de municípios para refletir o novo provedor.',
        pr: 9435,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Campos Belos/GO aderiu ao Portal Nacional de NFS-e. O município goiano migrou para o provedor NfseNacionalV2, passando a utilizar a infraestrutura centralizada da Receita Federal para emissão e consulta de notas fiscais de serviço eletrônicas. Empresas prestadoras de serviço em Campos Belos agora emitem pelo padrão nacional.',
        pr: 9472,
        autor: 'Davidson Souza',
      },
      {
        icon: '📄',
        texto:
          "Novo layout de PDF padrão nacional para o provedor GovDigital. Foi implementada uma arquitetura completa de geração de PDF de NFS-e seguindo o padrão visual nacional (DANFSE), com suporte a QR Code, marca d'água para notas canceladas, quebra de linha dinâmica e campos de tributação municipal/federal. A implementação inicial está habilitada para Fortaleza/CE como piloto, permitindo que empresas visualizem e imprimam suas notas no formato padronizado pela Receita Federal.",
        pr: 8939,
        autor: 'Thales Fonseca',
      },
      {
        icon: '�',
        texto:
          'Ajuste no número de lote para empresa específica no provedor SIGISSv5. Uma empresa em Bacabal/MA estava com conflito de numeração de lote — o número configurado colidia com lotes já processados pela prefeitura. A correção soma um valor alto (2.147.483.634) ao número de lote configurado, gerando uma sequência única que evita a rejeição por duplicidade. Isso resolve o erro de "lote já processado" que impedia a emissão de novas notas.',
        pr: 9471,
        autor: 'Thiago Souza',
      },
      {
        icon: '🧾',
        texto:
          'Remoção do tratamento especial de imunidade tributária (tpImunidade) no provedor RLZv3. Uma empresa específica possuía uma exceção no código que suprimia o envio da tag tpImunidade no XML, pois anteriormente emitia com imunidade. Como a empresa não emite mais com esse benefício, o tratamento especial foi removido, simplificando o código e evitando comportamentos inesperados caso a tag seja necessária futuramente para outras empresas do mesmo provedor.',
        pr: 9468,
        autor: 'Henrique Cassio',
      },
      {
        icon: '📊',
        texto:
          'Envio do código NBS no XML da NFS-e Nacional para integrações alternativas. Quando a nota é emitida via integração alternativa (API diferente da padrão), o campo cNBS (código da Nomenclatura Brasileira de Serviços) não estava sendo enviado no XML do DPS, ficando sempre nulo. Isso podia causar rejeição em municípios que exigem o NBS. Agora o código NBS informado pelo cliente é corretamente incluído no XML, garantindo conformidade com a especificação do Portal Nacional.',
        pr: 9466,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Correção no envio de IRRF e INSS para notas sem PIS/COFINS retidos no Portal Nacional. Quando uma nota não tinha retenção de PIS/COFINS mas tinha IRRF ou INSS, esses valores não estavam sendo enviados corretamente no XML. O ajuste garante que os tributos federais retidos (IRRF e INSS) sejam transmitidos independentemente da presença de PIS/COFINS, evitando divergências entre o valor cobrado e o declarado à Receita.',
        pr: 9465,
        autor: 'Thiago Souza',
      },
      {
        icon: '🔧',
        texto:
          'Reprocessamento automático de consultas com erro temporário do ADN em Carpina/PE (provedor HM2). Quando o sistema ADN da prefeitura de Carpina retorna "Ocorreu um erro inesperado ao tentar realizar a emissão da NFS-e", o gateway agora identifica isso como erro temporário e reprocessa a consulta automaticamente (até 10 tentativas). Anteriormente, a mensagem de erro esperada era diferente e a comparação era case-sensitive, fazendo com que notas ficassem travadas "em consulta" sem retentativa. O ajuste também corrige a série do RPS e zera a alíquota ISS para empresas do Simples Nacional neste município.',
        pr: 9457,
        autor: 'Davidson Souza',
      },
    ],
  },
];
