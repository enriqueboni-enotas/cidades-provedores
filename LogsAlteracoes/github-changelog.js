var changelogData = [
  {
    tag: '09/04/2026',
    titulo: 'Quinta-feira — 09 de Abril',
    data: '09/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum PR mergeado neste dia.',
      },
    ],
  },
  {
    tag: '08/04/2026',
    titulo: 'Quarta-feira — 08 de Abril',
    data: '08/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum PR mergeado neste dia.',
      },
    ],
  },
  {
    tag: '07/04/2026',
    titulo: 'Terça-feira — 07 de Abril',
    data: '07/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum PR mergeado neste dia.',
      },
    ],
  },
  {
    tag: '06/04/2026',
    titulo: 'Segunda-feira — 06 de Abril',
    data: '06/04/2026',
    itens: [
      {
        icon: '🌐',
        destaque: 'Envio de valor de moeda estrangeira para notas do exterior',
        texto:
          'Implementada lógica para enviar o valor da moeda estrangeira em notas de serviço para o exterior no provedor NFSe Nacional V2. O tipo de moeda e o valor são extraídos dos metadados da nota.',
      },
      {
        icon: '🔧',
        destaque: 'Refatoração da extração de metadados de moeda estrangeira',
        texto:
          'Refatorada a lógica de extração do valorServicoMoedaEstrangeira para usar lista JSON e IDictionary com TryGetAsDecimal, melhorando a robustez do parsing de valores monetários.',
      },
      {
        icon: '🔧',
        destaque:
          'Proxy estático para Franco da Rocha/SP e mapeamento de imunidade',
        texto:
          'Adicionado proxy estático ao provedor SIGISSv5 de Franco da Rocha/SP. Incluído novo GUID no mapeamento de TipoImunidadePorEmpresa no NFSe Nacional V2.',
      },
    ],
  },
  {
    tag: '05/04/2026',
    titulo: 'Domingo — 05 de Abril',
    data: '05/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum PR mergeado neste dia.',
      },
    ],
  },
  {
    tag: '04/04/2026',
    titulo: 'Sábado — 04 de Abril',
    data: '04/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum PR mergeado neste dia.',
      },
    ],
  },
  {
    tag: '03/04/2026',
    titulo: 'Sexta-feira — 03 de Abril',
    data: '03/04/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum PR mergeado neste dia.',
      },
    ],
  },
  {
    tag: '02/04/2026',
    titulo: 'Quinta-feira — 02 de Abril',
    data: '02/04/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Script de cancelamento de notas com status inconsistente',
        texto:
          'Adicionado script SQL para disparar cancelamento de notas fiscais que estavam com status inconsistente no sistema.',
      },
      {
        icon: '🏙️',
        destaque: 'Ajuste de situação tributária para Cachoeirinha/RS',
        texto:
          'Adicionada Cachoeirinha/RS à verificação de situação tributária 14 para tomadores do exterior no provedor IPM, ajustando a natureza da operação e cidade de prestação de serviço.',
      },
      {
        icon: '🏙️',
        destaque:
          'Configurações municipais de Anitápolis/SC e Pão de Açúcar/AL',
        texto:
          'Atualizadas configurações municipais no XML para Anitápolis/SC e Pão de Açúcar/AL. Adicionada Conchas/SP ao provedor GOVBRv3. Removido parâmetro tipoNf dos comandos de WebHook.',
      },
      {
        icon: '🔧',
        destaque: 'Melhorias no TxtBuilder e serialização de RPS',
        texto:
          'Ajustada lógica de serialização no TxtBuilder com truncamento de texto e números. Corrigido método Write para SerieRps no IdentificacaoRpsDto.',
      },
    ],
  },
  {
    tag: '01/04/2026',
    titulo: 'Quarta-feira — 01 de Abril',
    data: '01/04/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Paranapanema/SP atualizado para GOVBRv2',
        texto:
          'Provedor de Paranapanema/SP alterado de GOVBRv3 para GOVBRv2 com URL de produção atualizada e informações adicionais do provedor. Removida seção de emissão sem certificado.',
      },
      {
        icon: '🆕',
        destaque: 'Novo provedor FgMaiss para Cravinhos/SP',
        texto:
          'Implementado provedor FgMaiss para Cravinhos/SP com web services de envio, consulta e cancelamento de NFe. Adicionadas configurações de endpoints no app.config.',
      },
      {
        icon: '📊',
        destaque: 'Alíquota ISS para empresas Simples Nacional no GOVBRv3',
        texto:
          'Adicionada coleção SempreEnviaAliquotaIssEmpresasSimplesNacional no provedor GOVBRv3, ajustando a lógica de atribuição de pAliq para municípios específicos.',
      },
      {
        icon: '🔧',
        destaque:
          'Resolução de natureza de operação para assinaturas específicas',
        texto:
          'Adicionada lógica no NFSe Nacional V2 para resolver natureza de operação e condição de assinatura UnoSolucoes. Truncamento de SerieRps para 4 caracteres.',
      },
    ],
  },
  {
    tag: '31/03/2026',
    titulo: 'Terça-feira — 31 de Março',
    data: '31/03/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Paranapanema/SP adicionado ao GOVBRv3',
        texto:
          'Adicionada configuração de Paranapanema/SP no ConfiguracoesMunicipios.xml com provedor GOVBRv3, incluindo URLs de homologação e produção.',
      },
      {
        icon: '🔧',
        destaque: 'Validação de endereço e propriedades de NFe',
        texto:
          'Adicionadas validações de campos de endereço no NFSe Nacional V2. Novas propriedades no NFeServico para exigibilidade suspensa. Melhorias no tratamento de FaultException no provedor Tinus.',
      },
      {
        icon: '🏙️',
        destaque: 'Suporte IBS/CBS no layout 4.2 de Barueri',
        texto:
          'Implementado suporte à emissão com IBS/CBS no provedor Barueri layout 4.2, com busca condicional de XML do portal nacional e versão dinâmica de layout baseada na presença de IBS/CBS.',
      },
      {
        icon: '📊',
        destaque: 'Regras de ISS e configurações de municípios no GOVBRv3',
        texto:
          'Adicionada Santa Terezinha de Itaipu/PR à lista de não-cancelamento. Refatorada lógica de cálculo de ISS no RecepcionarLote. Correção de casing do NIF no CpfCnpj. Resolução de código de serviço municipal no EeL.',
      },
      {
        icon: '🏙️',
        destaque: 'Expansão de configurações municipais',
        texto:
          'Atualizadas configurações de diversos municípios no XML, incluindo mudanças de URLs e provedores. Atualização do Newtonsoft.Json para versão 13.0.3.',
      },
    ],
  },
];
