var aguardandoDeployData = [
  {
    tag: '20/04/2026',
    titulo: 'Segunda-feira — 20 de Abril',
    itens: [
      {
        icon: '🔧',
        texto:
          'Empresa LOFT adicionada à lista de subscriptions que sempre enviam o campo NBS (Nomenclatura Brasileira de Serviços) no Portal Nacional. Sem essa configuração, o campo cNBS não era preenchido no XML, causando rejeição em municípios que exigem o código NBS obrigatoriamente.',
        pr: 8977,
        autor: 'Davidson Souza',
      },
      {
        icon: '🏙️',
        texto:
          'São Paulo/SP — ajuste no tratamento de erros de login no webservice da prefeitura. Antes, qualquer falha de autenticação era tratada da mesma forma. Agora o sistema diferencia falha de autenticação real de instabilidade do serviço municipal (HTTP 500), retornando a mensagem de erro correta no XML e evitando que notas fiquem presas por erro de interpretação.',
        pr: 8947,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Correção do envio do campo MunicipioIncidencia para empresa com serviço 16.01.01 no provedor GovDigital. O erro E1317 ocorria porque o município de incidência estava sendo calculado incorretamente. Agora, para esse serviço específico, o município de incidência é sobrescrito com o município de prestação informado na nota.',
        pr: 8957,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🏙️',
        texto:
          'Amambai/MS — configuração do município de incidência para o serviço 160101: o local de incidência agora é o mesmo da prestação. Também foram removidas condicionais legadas de municípios (Catanduva/SP, Santa Rita do Sapucaí/MG, Dracena/SP, Maraú/RS, Itaituba/PA) que não fazem mais parte do grupo Fiorilli, simplificando o código.',
        pr: 8961,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Osasco/SP — implementação de novos campos de local de prestação no provedor EGovernISS. O provedor tem uma regra que, ao informar qualquer tag de local de prestação, torna todas as outras obrigatórias. Foi adicionada validação para o cenário em que a prestação não ocorre nem no tomador nem no prestador, evitando erros de schema XML.',
        pr: 8903,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🔧',
        texto:
          'SpeedGov — adição de AutenticidadeNota: o sistema agora gera automaticamente a URL de verificação da nota derivando o nome do município (sem acentos, minúsculas, sem espaços) e configurando os parâmetros de validação (InscricaoMunicipalPrestador, NumeroNota, CodigoVerificacao). Permite que o cliente verifique a autenticidade da nota diretamente no portal da prefeitura.',
        pr: 8966,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '📊',
        texto:
          'IPM — correção do tipo de retenção de PIS/COFINS para ficar alinhado com o ADN. A lógica agora considera a presença do CSLL além do PIS/COFINS para determinar o TipoRetencaoPisCofins, corrigindo divergências no cálculo de impostos retidos.',
        pr: 8975,
        autor: 'Thiago Souza',
      },
      {
        icon: '🔧',
        texto:
          'Adição de empresa à lista idsNovoRespTecnico no provedor RecepcionarLoteNFeV4. Empresas nessa lista têm as informações de Responsável Técnico preenchidas automaticamente no XML da NF-e (CNPJ, contato, email e telefone), conforme exigência da SEFAZ.',
        pr: 8973,
        autor: 'Davidson Souza',
      },
      {
        icon: '🔧',
        texto:
          'Configuração de município de incidência para empresa específica: quando a empresa deseja que o município de incidência seja o mesmo do local de prestação informado na nota, o sistema agora respeita essa configuração e também envia o percentual de alíquota e ISS corretamente.',
        pr: 8971,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'GOVBRv3 — configuração de AutenticidadeNota com URL pública de consulta (https://www.nfse.gov.br/consultapublica). Permite que o cliente verifique a autenticidade de notas emitidas via Portal Nacional diretamente no portal do governo federal.',
        pr: 8969,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🆕',
        texto:
          'TinusV2 — novo provedor implementado com configuração de AutenticidadeNota. A classe TinusV2ProvedorNFe foi criada com suporte a emissão, consulta e cancelamento de notas, e URL de verificação pública configurada (https://www.nfse.gov.br/consultapublica).',
        pr: 8968,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'São Paulo/SP — configuração de AutenticidadeNota com URL de verificação do portal da prefeitura (https://nfe.prefeitura.sp.gov.br/publico/verificacao.aspx). Permite que o cliente valide a autenticidade da nota diretamente no portal municipal.',
        pr: 8967,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Salvador/BA — configuração de AutenticidadeNota com URL de verificação do portal da prefeitura (https://nfse.salvador.ba.gov.br/site/publico/verificacao.aspx) e uso do CNPJ do prestador habilitado. Permite verificação de autenticidade das notas emitidas em Salvador.',
        pr: 8964,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '📊',
        texto:
          'eTransparência — adição do envio da base de cálculo (TributoBaseCalc) nos impostos federais (PIS/COFINS e CSLL). Antes, a base de cálculo não era enviada, causando divergências no cálculo de tributos. Agora usa a base customizada da nota com fallback para o valor total.',
        pr: 8960,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Hidrolina/GO ativado para emissão de NFS-e pelo provedor ArrecadaNet. A prefeitura aderiu ao sistema eletrônico e a configuração foi adicionada ao ConfiguracoesMunicipios.xml.',
        pr: 8952,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🔗',
        texto:
          'Morungaba/SP e Jaciara/MT — atualização das URLs do provedor Fiorilli. As prefeituras atualizaram seus endpoints de webservice e as URLs foram corrigidas para garantir continuidade na emissão de NFS-e.',
        pr: 8951,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🔧',
        texto:
          'Guararapes/SP — remoção da flag NaoUsaAssinatura. A prefeitura passou a exigir assinatura digital nas notas, e a flag que desabilitava esse comportamento foi removida para restaurar o envio correto.',
        pr: 8950,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔄',
        texto:
          'Major Vieira/SC migrado para o provedor BethaV3. A prefeitura atualizou seu sistema de NFS-e para a versão mais recente do Betha, e as configurações foram atualizadas no ConfiguracoesMunicipios.xml para garantir compatibilidade.',
        pr: 8948,
        autor: 'Felippe Salvo de Mendonça',
      },
    ],
  },
];
