var emAndamentoData = {
  ticketsAbertos: [
    {
      status: 'Under Analysis',
      icon: '🔍',
      itens: [
        { key: 'CE-25450', destaque: 'Faturamento de excedentes indevido' },
        { key: 'CE-25447', destaque: 'Bug notas de eventos' },
        { key: 'CE-25231', destaque: 'Painel para SMU' },
        { key: 'CE-25212', destaque: 'Vendas não são importadas' },
        { key: 'CE-24852', destaque: 'Erro no webhook de cancelamento' },
        { key: 'CE-24806', destaque: 'Reclame Aqui — reclamação de cliente' },
        {
          key: 'CE-24387',
          destaque: 'Envio do campo tpOper para NFS-e — São Paulo/SP',
        },
        { key: 'CE-24175', destaque: 'Pesquisa de vendas' },
      ],
    },
    {
      status: 'Reopened',
      icon: '🔄',
      itens: [
        { key: 'CE-25137', destaque: 'Envio do campo CSRT — SEFAZ PR' },
        { key: 'CE-25015', destaque: 'Vendas Pagar.me 2.0' },
        { key: 'CE-23878', destaque: 'Descrição código de tributação' },
      ],
    },
    {
      status: 'Open',
      icon: '📋',
      itens: [
        { key: 'CE-25566', destaque: 'Integração com Woocommerce' },
        {
          key: 'CE-25563',
          destaque: 'Melhoria nos campos PIS/COFINS — portal nacional',
        },
        { key: 'CE-25560', destaque: 'Análise de vendas de coprodução' },
        { key: 'CE-25559', destaque: 'Correção de notas' },
        {
          key: 'CE-25552',
          destaque: 'Notas travadas na fila de emissão — São Paulo/SP',
        },
        {
          key: 'CE-25551',
          destaque: 'Emissão tomador exterior — Rio das Ostras/RJ',
        },
        { key: 'CE-25525', destaque: 'Destaque código BC ISSQN' },
        { key: 'CE-25516', destaque: 'Bug visual' },
        {
          key: 'CE-25514',
          destaque: 'Instabilidade no painel e ajuste de SMU',
        },
        { key: 'CE-25509', destaque: 'Ajuste de layout — Itaperuna/RJ' },
        { key: 'CE-25508', destaque: 'Erro na emissão de nota' },
        {
          key: 'CE-25494',
          destaque: 'Ajuste emissão tomador exterior — Ibirubá/RS',
        },
        {
          key: 'CE-25488',
          destaque: 'Atualização de CTN removendo benefício municipal',
        },
        { key: 'CE-25446', destaque: 'Alteração de layout da nota fiscal 2.0' },
        { key: 'CE-25421', destaque: 'Sincronização NFS-e' },
        { key: 'CE-25383', destaque: 'Campo código interno do contribuinte' },
        { key: 'CE-25352', destaque: 'Relatório visão do contador' },
        { key: 'CE-25350', destaque: 'Faturamento de excedentes indevido' },
        { key: 'CE-25348', destaque: 'Faturamento de excedentes indevido' },
        {
          key: 'CE-25337',
          destaque: 'Alteração de layout da nota fiscal 2.0 — São Paulo/SP',
        },
        {
          key: 'CE-25336',
          destaque: 'Cobrança de excedentes indevida (financeiro)',
        },
        { key: 'CE-25323', destaque: 'Faturamento excedentes indevido' },
        {
          key: 'CE-25283',
          destaque: 'Atualização sistema de notas — Socorro/SP',
        },
        {
          key: 'CE-25263',
          destaque: 'Emissão de notas exterior — portal nacional',
        },
        {
          key: 'CE-25254',
          destaque: 'Erro emissão tomador exterior — Pato Branco/PR',
        },
        { key: 'CE-25229', destaque: 'Atualização layout XML — Cotia/SP' },
        { key: 'CE-25222', destaque: 'Integração com a Shopify (atualização)' },
        { key: 'CE-25221', destaque: 'Sincronização de notas' },
        { key: 'CE-25219', destaque: 'Município de prestação como Exterior' },
        { key: 'CE-25218', destaque: 'Atualização de município' },
        {
          key: 'CE-25195',
          destaque: 'NF-e não apresenta informações complementares',
        },
        {
          key: 'CE-25193',
          destaque: 'Prefeitura exige campo Regime de Apuração Tributária',
        },
        { key: 'CE-25188', destaque: 'Erro na emissão — Sapiranga/RS' },
        {
          key: 'CE-25163',
          destaque: 'Melhoria: campo para preenchimento de IE para PF',
        },
        {
          key: 'CE-25112',
          destaque:
            'Ajuste nome do município do tomador no XML — Caxias do Sul/RS',
        },
        { key: 'CE-25106', destaque: 'Fixar município de prestação 9999999' },
        { key: 'CE-24229', destaque: 'Sincronizar notas' },
      ],
    },
  ],
  aguardandoDeploy: [
    {
      tag: '10/04/2026',
      titulo: 'Sexta-feira — 10 de Abril',
      itens: [
        {
          icon: '🗑️',
          texto: 'Remove código desnecessário',
          pr: 8834,
          autor: 'Thiago Souza',
        },
        {
          icon: '🔧',
          texto: 'Ajuste na extração do número da nota fiscal',
          pr: 8806,
          autor: 'Davidson Souza',
        },
        {
          icon: '🆕',
          texto:
            'Ativa UsaNovoFormatoPisCofins e cria consulta por RPS para provedor',
          pr: 8814,
          autor: 'Thiago Souza',
        },
        {
          icon: '🛡️',
          texto: 'Tratamento para mensagem em tentativa de cancelamento',
          pr: 8820,
          autor: 'Vitor Fernandes',
        },
        {
          icon: '🏙️',
          texto: 'São João Batista do Glória/MG → MemoryV2',
          pr: 8823,
          autor: 'Thiago Souza',
        },
        {
          icon: '🌐',
          texto: 'Adrianópolis/PR aderiu ao portal nacional',
          pr: 8829,
          autor: 'Davidson Souza',
        },
        {
          icon: '🌐',
          texto: 'Tangará/SC aderiu ao portal nacional',
          pr: 8826,
          autor: 'Henrique Cassio',
        },
        {
          icon: '⏸️',
          texto: 'Desabilita emissão em lote para empresa',
          pr: 8825,
          autor: 'Vitor Fernandes',
        },
        {
          icon: '📋',
          texto: 'Envio do Código NBS para empresa específica',
          pr: 8819,
          autor: 'Felippe Salvo',
        },
        {
          icon: '🔧',
          texto: 'Adiciona AutenticidadeNota',
          pr: 8818,
          autor: 'Vitor Fernandes',
        },
        {
          icon: '🌐',
          texto: 'Serrania/MG aderiu ao portal nacional',
          pr: 8815,
          autor: 'Davidson Souza',
        },
        {
          icon: '🏙️',
          texto:
            'Inclui empresaID na lista de incidência no município do prestador',
          pr: 8812,
          autor: 'Henrique Cassio',
        },
        {
          icon: '🏙️',
          texto: 'Socorro/SP → BethaV3',
          pr: 8809,
          autor: 'Henrique Cassio',
        },
        {
          icon: '📊',
          texto:
            'Remove municípios da flag SempreEnviaAliquotaIssEmpresasSimplesNacional',
          pr: 8805,
          autor: 'Felippe Salvo',
        },
        {
          icon: '🧾',
          texto:
            'Ajusta geração da DACE para cenários de contingência (DanfeMS)',
          pr: 8827,
          autor: 'Gabriel Mesquita',
        },
      ],
    },
    {
      tag: '08/04/2026',
      titulo: 'Terça-feira — 08 de Abril',
      itens: [
        {
          icon: '🔧',
          texto: 'Ajuste para não travar a fila',
          pr: 8811,
          autor: 'Alex Ramos',
        },
        {
          icon: '🌐',
          texto:
            'Ajuste portal nacional: exportação apenas se serviço prestado fora + cancelamento GissOnline',
          pr: null,
          autor: 'Jonathan Souza',
        },
        {
          icon: '🔒',
          texto: 'Bloqueia atualização de API key por subscription ID',
          pr: 8800,
          autor: 'Thales Fonseca',
        },
        {
          icon: '🌐',
          texto: 'Boca da Mata/AL aderiu ao portal nacional',
          pr: 8808,
          autor: 'Davidson Souza',
        },
        {
          icon: '🌐',
          texto: 'Governador Valadares/MG aderiu ao portal nacional',
          pr: 8807,
          autor: 'Davidson Souza',
        },
        {
          icon: '🏙️',
          texto: 'Santa Rita do Pardo/MS — altera porta de 8085 para 8090',
          pr: 8804,
          autor: 'Felippe Salvo',
        },
        {
          icon: '📮',
          texto: 'Remove formatação do CEP do local de prestação',
          pr: 8802,
          autor: 'Thiago Souza',
        },
        {
          icon: '🔗',
          texto: 'Atualiza link de homologação de Contagem/MG',
          pr: 8801,
          autor: 'Thiago Souza',
        },
        {
          icon: '🔄',
          texto:
            'Retry no cancelamento para garantir cancelamento na API e na prefeitura',
          pr: 8798,
          autor: 'Felippe Salvo',
        },
        {
          icon: '🔗',
          texto: 'Atualiza endpoint de Jardim/MS',
          pr: 8797,
          autor: 'Henrique Cassio',
        },
        {
          icon: '🏙️',
          texto:
            'MunicípioIncidência como município do prestador para Conta Azul',
          pr: 8793,
          autor: 'Henrique Cassio',
        },
        {
          icon: '📊',
          texto: 'Cenário de envio de alíquota para empresa',
          pr: 8791,
          autor: 'Vitor Fernandes',
        },
        {
          icon: '📊',
          texto:
            'Corrige envio da alíquota em prestação fora do município com ISS não retido',
          pr: 8717,
          autor: 'Henrique Cassio',
        },
      ],
    },
    {
      tag: '07/04/2026',
      titulo: 'Segunda-feira — 07 de Abril',
      itens: [
        {
          icon: '📊',
          texto:
            'Remove municípios da flag SempreEnviaAliquotaIssEmpresasSimplesNacional (GOVBRv3)',
          pr: 8792,
          autor: 'Felippe Salvo',
        },
        {
          icon: '🏙️',
          texto:
            'São Gonçalo do Rio Abaixo/MG — regra UsaCIntContribComCodigoServico',
          pr: 8779,
          autor: 'Henrique Cassio',
        },
        {
          icon: '🏙️',
          texto: 'Vinhedo/SP — permite emissão sem tomador',
          pr: 8776,
          autor: 'Vitor Fernandes',
        },
        {
          icon: '🏙️',
          texto: 'Arroio do Meio/RS → NfseNacionalV2',
          pr: 8788,
          autor: 'Thiago Souza',
        },
        {
          icon: '🆕',
          texto: 'Novo provedor GIFv2 no layout nacional',
          pr: 8376,
          autor: 'Thiago Souza',
        },
        {
          icon: '🔗',
          texto: 'Atualiza URLs de Embu das Artes/SP',
          pr: 8781,
          autor: 'Vitor Fernandes',
        },
        {
          icon: '🏙️',
          texto: 'Cotia/SP — código 704 envia código obra',
          pr: 8778,
          autor: 'Vitor Fernandes',
        },
        {
          icon: '🏙️',
          texto: 'Itaituba/PA → CoplanV2',
          pr: 8789,
          autor: 'Vitor Fernandes',
        },
        {
          icon: '🏙️',
          texto: 'Serra do Mel/RN → TinusV2',
          pr: 8775,
          autor: 'Henrique Cassio',
        },
        {
          icon: '📊',
          texto:
            'Remove Pejuçara/RS da flag SempreEnviaAliquotaIssEmpresasSimplesNacional',
          pr: 8772,
          autor: 'Felippe Salvo',
        },
        {
          icon: '🧮',
          texto: 'Ajusta tag cClassTrib',
          pr: 8771,
          autor: 'Vitor Fernandes',
        },
        {
          icon: '📋',
          texto: 'Validação codigoNBS para não travar a fila',
          pr: 8766,
          autor: 'Alex Ramos',
        },
        {
          icon: '🧮',
          texto: 'Ajuste para enviar CST do PIS/COFINS conforme prestador',
          pr: 8743,
          autor: 'Thiago Souza',
        },
      ],
    },
    {
      tag: '06/04/2026',
      titulo: 'Domingo — 06 de Abril',
      itens: [
        {
          icon: '📋',
          texto: 'Normaliza NBS antes da validação para evitar envio vazio',
          pr: null,
          autor: 'Thiago Souza',
        },
        {
          icon: '🏙️',
          texto: 'Jardinópolis/SP → GissOnline',
          pr: null,
          autor: 'Thiago Souza',
        },
        {
          icon: '📋',
          texto: 'Informa NBS válido',
          pr: null,
          autor: 'Davidson Souza',
        },
        {
          icon: '🔧',
          texto: 'Adiciona IDs em responsável técnico',
          pr: null,
          autor: 'Vitor Fernandes',
        },
        {
          icon: '🧮',
          texto:
            'Ajusta fallback de IBS/CBS para deduzir apenas Simples Nacional',
          pr: null,
          autor: 'Davidson Souza',
        },
        {
          icon: '🧮',
          texto:
            'Ajustes nos envios de impostos retidos na tag CSLL e apuração própria',
          pr: 8740,
          autor: 'Thiago Souza',
        },
        {
          icon: '🆕',
          texto: 'Novo modelo de envio de Obras para SIGISSv5',
          pr: 8728,
          autor: 'Felippe Salvo',
        },
        {
          icon: '📊',
          texto: 'Empresas não optantes de Uberaba/MG não enviam alíquota',
          pr: 8722,
          autor: 'Vitor Fernandes',
        },
        {
          icon: '🆕',
          texto: 'Campo CNO para o provedor IPM',
          pr: 8721,
          autor: 'Felippe Salvo',
        },
      ],
    },
  ],
};
