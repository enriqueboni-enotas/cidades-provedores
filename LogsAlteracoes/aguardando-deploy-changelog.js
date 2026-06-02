var aguardandoDeployData = [
  {
    tag: '01/06/2026',
    titulo: 'Segunda-feira — 01 de Junho',
    itens: [
      {
        icon: '🏙️',
        texto:
          'Ipira/SC aderiu ao Portal Nacional de NFS-e. O município migrou para o provedor NfseNacionalV2, passando a utilizar a infraestrutura centralizada da Receita Federal para emissão e consulta de notas fiscais de serviço.',
        pr: 9462,
        autor: 'Davidson Souza',
      },
      {
        icon: '🏙️',
        texto:
          'São Gonçalo/RJ aderiu ao Portal Nacional de NFS-e. O município, que é o segundo mais populoso do estado do Rio de Janeiro, migrou para o provedor NfseNacionalV2. Empresas prestadoras de serviço em São Gonçalo agora emitem NFS-e pelo Portal Nacional.',
        pr: 9461,
        autor: 'Davidson Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Chapecó/SC aderiu ao Portal Nacional de NFS-e. Município importante do oeste catarinense, agora utiliza o provedor NfseNacionalV2 para emissão de notas fiscais de serviço eletrônicas, em conformidade com o novo padrão nacional.',
        pr: 9458,
        autor: 'Davidson Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Nova Serrana/MG aderiu ao Portal Nacional de NFS-e. Conhecida como polo calçadista de Minas Gerais, a cidade migrou para o provedor NfseNacionalV2, centralizando a emissão de NFS-e pela infraestrutura da Receita Federal.',
        pr: 9460,
        autor: 'Davidson Souza',
      },
      {
        icon: '🔧',
        texto:
          'Ajuste de timeout para 30 segundos na emissão e consulta automática por DPS quando ocorre erro de "DPS já emitido" no Portal Nacional. Quando o provedor retorna que a DPS já foi processada, o sistema agora faz uma consulta automática para recuperar a nota existente ao invés de retornar erro. Isso resolve cenários de timeout onde a nota foi aceita pela prefeitura mas a resposta não chegou a tempo, evitando duplicidade e notas travadas "em emissão".',
        pr: 9459,
        autor: 'Thiago Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Gilbués/PI ativado no provedor Fiorilli. O município do Piauí teve suas URLs de produção e homologação configuradas no ConfiguracoesMunicipios.xml, habilitando a emissão de NFS-e para empresas prestadoras de serviço na cidade.',
        pr: 9456,
        autor: 'Thiago Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Florânia/RN atualizada para o provedor NfseNacionalV2. O município do Rio Grande do Norte migrou do provedor anterior para o Portal Nacional, passando a utilizar a infraestrutura centralizada da Receita Federal.',
        pr: 9454,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Duartina/SP atualizada para o provedor NfseNacionalV2. O município paulista migrou para o Portal Nacional de NFS-e, centralizando a emissão pela infraestrutura da Receita Federal.',
        pr: 9453,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Colorado/RS ativado no provedor CittaV2. O município gaúcho teve as configurações de produção e homologação adicionadas, permitindo emissão de NFS-e pelo gateway para empresas prestadoras de serviço na cidade.',
        pr: 9452,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🆕',
        texto:
          'Implementação do fluxo de geração de NFS-e em homologação para o provedor NotaControlV2. Foi criado um proxy (GerarNFSeProxy) que roteia automaticamente entre o fluxo de homologação e produção. O modo homologação valida que apenas 1 nota por lote é permitida, formata DPS/XML, mapeia tributos, assina digitalmente e envia ao webservice. Inclui tratamento especial para código IBGE de Campo Grande/MS em ambiente de teste.',
        pr: 9449,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Melhoria na detecção de mensagens de erro na consulta por RPS do provedor PublicaV1 (Fortknox). A comparação passou a ser case-insensitive (usando IndexOf com OrdinalIgnoreCase) e foi incluída a mensagem "Email inválido" no conjunto de condições que indicam RPS já processado. Isso evita que notas fiquem travadas quando a prefeitura retorna variações de capitalização nas mensagens de erro.',
        pr: 9447,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'São José do Egito/PE ativado no provedor ElmarInformatica. O município pernambucano teve URLs e configurações adicionadas ao ConfiguracoesMunicipios.xml, habilitando emissão de NFS-e pelo gateway.',
        pr: 9444,
        autor: 'Thiago Souza',
      },
      {
        icon: '🔧',
        texto:
          'Correção do erro de XML ao enviar PercentualAproximadoTributosSimplesNacionalNFeServico com valor 0 no provedor GINFES v2. Quando a alíquota do Simples Nacional era zero, o XML gerado era inválido. Agora o sistema popula TributacaoTotalPercentual (com federal/estadual/municipal = 0) ao invés de TributacaoTotalSimplesNacional, evitando rejeição por validação XML na prefeitura.',
        pr: 9451,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Validação para impedir cancelamento de NFS-e após 10 dias em Dourados/MS. A prefeitura permite cancelamento direto apenas até 10 dias após a autorização. Antes dessa validação, o sistema enviava a requisição e recebia erro genérico da prefeitura. Agora o gateway valida localmente e retorna mensagem clara (GW212) informando que o prazo foi excedido, melhorando a experiência do usuário.',
        pr: 9441,
        autor: 'Henrique Cassio',
      },
    ],
  },
  {
    tag: '29/05/2026',
    titulo: 'Quinta-feira — 29 de Maio',
    itens: [
      {
        icon: '🔧',
        texto:
          'SIGISSv5: geração automática da base de inscrição municipal (IM) por CNPJ via template T4 e aplicação de fallback para a Shopee em Franco da Rocha/SP. O template T4 gera automaticamente o mapeamento CNPJ→IM para sellers da Shopee, evitando manutenção manual. Quando o tomador é Shopee e a IM não está mapeada, o sistema aplica um fallback ao invés de rejeitar a nota.',
        pr: null,
        autor: 'Davidson Souza',
      },
      {
        icon: '🔧',
        texto:
          'SIGISSv5: preenchimento da inscrição municipal do tomador por CNPJ para a Shopee em Franco da Rocha/SP. A prefeitura exige a IM do tomador para emissão de NFS-e, mas a Shopee não informa esse dado na integração. O sistema agora busca a IM automaticamente pelo CNPJ do tomador no cadastro da prefeitura, resolvendo rejeições de notas para sellers da Shopee nesse município.',
        pr: null,
        autor: 'Davidson Souza',
      },
    ],
  },
];
