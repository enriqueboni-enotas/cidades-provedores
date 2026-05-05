var aguardandoDeployData = [
  {
    tag: '04/05/2026',
    titulo: 'Segunda-feira — 04 de Maio',
    itens: [
      {
        icon: '🏙️',
        texto:
          'Cerro Negro/SC mudou de provedor para Publica. A prefeitura migrou de sistema de NFS-e e as configurações de emissão foram atualizadas no gateway para garantir compatibilidade com o novo webservice utilizado pelo município.',
        pr: 9119,
        autor: 'Davidson Souza',
      },
      {
        icon: '🔧',
        texto:
          'Ativação de Itapira na versão RTC do provedor, com inclusão da tag ultima_nota na consulta. A versão RTC (Real-Time Check) permite validação em tempo real das notas emitidas, e a tag ultima_nota na consulta possibilita sincronização incremental — buscando apenas notas posteriores à última processada.',
        pr: 9116,
        autor: 'Thiago Souza',
      },
      {
        icon: '🔧',
        texto:
          'Garantia de que o RPS retornado na consulta é o mesmo da nota pesquisada. Havia cenários em que a consulta por lote retornava uma nota diferente da esperada (quando múltiplas notas compartilhavam o mesmo lote), causando inconsistência na sincronização. Agora o sistema valida que o número do RPS corresponde ao da nota original antes de aceitar o resultado.',
        pr: 9127,
        autor: 'Thiago Souza',
      },
      {
        icon: '📊',
        texto:
          'Envio do tipo de imunidade para natureza da operação imunidade. Quando a nota tem natureza de operação classificada como imunidade, o Portal Nacional exige que o tipo específico de imunidade seja informado (templos, partidos políticos, entidades sindicais, etc.). Sem esse campo, notas imunes eram rejeitadas por schema inválido.',
        pr: 9137,
        autor: 'Thiago Souza',
      },
      {
        icon: '🔧',
        texto:
          'Busca do número da nota pelo código de verificação. Em alguns provedores, a consulta por lote não retorna o número definitivo da nota — apenas o código de verificação. Foi implementada uma busca adicional que localiza o número da nota usando o código de verificação como chave, resolvendo notas que ficavam sem número após a emissão.',
        pr: 9142,
        autor: 'Thiago Souza',
      },
      {
        icon: '🔧',
        texto:
          'Atualização do campo AutenticidadeNota. O código de autenticidade retornado pela prefeitura é usado para verificação da nota no portal municipal. A atualização garante que o campo seja capturado e armazenado corretamente após a emissão.',
        pr: 9143,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Permite emissão de NFS-e sem dados do tomador. Algumas operações (como autosserviço ou venda ao consumidor final) não exigem identificação do tomador. O provedor estava rejeitando essas notas por falta de dados obrigatórios. Agora a emissão é permitida quando o tomador não é informado, seguindo as regras da prefeitura.',
        pr: 9141,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Agili: adição do campo MunicipioPrestacaoServico no XML de envio. A prefeitura que usa o provedor Agili passou a exigir o código do município de prestação do serviço no XML. Sem esse campo, notas eram rejeitadas por falta de informação obrigatória sobre o local de prestação.',
        pr: 9140,
        autor: 'Davidson Souza',
      },
      {
        icon: '📊',
        texto:
          'Configuração de cenário de natureza de operação não incidência para serviço específico. Quando o serviço prestado se enquadra em não incidência de ISS, a natureza de operação deve refletir isso no XML. A configuração permite que empresas com esse cenário tributário tenham suas notas emitidas com a classificação correta.',
        pr: 9139,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '📊',
        texto:
          'Envio da base de cálculo do PIS e COFINS de apuração própria. Prefeituras e o Portal Nacional passaram a exigir que a base de cálculo esteja presente quando PIS/COFINS são informados com apuração própria. Sem a base, os valores não podiam ser validados corretamente pelo webservice.',
        pr: 9136,
        autor: 'Thiago Souza',
      },
      {
        icon: '🔧',
        texto:
          'Desabilitação de emissão em lote para conta específica. A empresa estava enfrentando problemas de duplicidade ao enviar múltiplas notas simultaneamente. A desabilitação força o envio individual de cada nota, garantindo maior controle até que a causa raiz seja resolvida.',
        pr: 9135,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🌐',
        texto:
          'NfseNacionalV2: correção do envio do NBS (Nomenclatura Brasileira de Serviços) para tomador estrangeiro. O campo NBS é obrigatório em notas de exportação de serviço, mas estava sendo enviado com formato incorreto ou ausente quando o tomador era do exterior, causando rejeição no Portal Nacional.',
        pr: 9134,
        autor: 'Davidson Souza',
      },
      {
        icon: '🏙️',
        texto:
          'São Joaquim do Monte/PE atualizado para o provedor TributusV2. A prefeitura migrou de sistema de NFS-e e as configurações foram atualizadas no gateway para garantir compatibilidade com o novo webservice.',
        pr: 9133,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Pinheiro/MA atualizado para o provedor NfseNacionalV2. O município aderiu ao Portal Nacional de NFS-e e as configurações foram migradas para o novo provedor, incluindo URLs, namespace e layout do Portal Nacional.',
        pr: 9132,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '📊',
        texto:
          'Envio da alíquota dos impostos federais (PIS, COFINS, CSLL) no XML. Algumas prefeituras e o Portal Nacional passaram a exigir que a alíquota esteja presente junto com o valor dos impostos federais. Sem a alíquota, o cálculo não podia ser validado pelo webservice receptor.',
        pr: 9131,
        autor: 'Thiago Souza',
      },
      {
        icon: '📊',
        texto:
          'Remoção de informações de IBS/CBS para empresa quando o codigoIndicadorOperacao é específico. Em determinados cenários tributários, o envio de IBS/CBS não é aplicável e causa rejeição. A correção identifica esses cenários pelo código do indicador de operação e remove os dados de IBS/CBS antes do envio.',
        pr: 9129,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🌐',
        texto:
          'Tratamento no bairro do endereço do tomador do exterior. Quando o tomador é estrangeiro, o campo bairro pode vir vazio ou com caracteres não aceitos pelo schema XML. Foi adicionado um tratamento que normaliza o campo antes do envio, evitando rejeições por formato inválido.',
        pr: 9128,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Baixa Grande/BA ativado no provedor Fisco.Net V2. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no gateway para permitir emissão, cancelamento e consulta de NFS-e.',
        pr: 9126,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Remoção de empresa em regra específica para emitir no provedor BHISS. A empresa não precisa mais do tratamento especial que direcionava suas notas para o provedor BHISS (Belo Horizonte). A remoção da regra faz com que a empresa volte ao fluxo padrão de emissão.',
        pr: 9123,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Itapeva/MG atualizado para o provedor Fiorilli. A prefeitura migrou de sistema de NFS-e e as configurações foram ajustadas no gateway para garantir compatibilidade com o novo webservice.',
        pr: 9122,
        autor: 'Davidson Souza',
      },
      {
        icon: '📊',
        texto:
          'Adição de natureza de operação para o provedor. O campo natureza de operação classifica o tipo de tributação da nota (tributável, isenta, imune, exportação, etc.). A configuração garante que o provedor envie corretamente esse campo no XML, evitando rejeições por classificação fiscal ausente.',
        pr: 9121,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Paranacity/PR atualizado para o provedor Elotech. A prefeitura migrou de sistema de NFS-e e as configurações foram atualizadas no gateway para garantir compatibilidade com o novo webservice utilizado pelo município.',
        pr: 9120,
        autor: 'Davidson Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Bom Jardim/RJ atualizado para o provedor GOVBRv3. A prefeitura migrou para o sistema GOVBRv3 e as configurações de emissão, cancelamento e consulta foram atualizadas no gateway.',
        pr: 9118,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Configuração de envio de dados de obra para conta específica. A empresa presta serviços de construção civil e a prefeitura exige dados da obra (endereço, ART, código da obra) no XML. A configuração ativa esse envio para a conta, evitando rejeições por falta de informação obrigatória.',
        pr: 9117,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Pirajuba/MG atualizado do provedor BethaV2 para IPMV2. A prefeitura migrou de sistema de NFS-e e as configurações foram atualizadas no gateway para garantir compatibilidade com a nova versão do webservice.',
        pr: 9115,
        autor: 'Davidson Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Santa Rosa de Lima/SC atualizado do provedor BethaV2 para IPMV2. A prefeitura migrou de sistema de NFS-e e as configurações foram atualizadas no gateway para o novo provedor.',
        pr: 9113,
        autor: 'Davidson Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Sento Sé/BA ativado para o provedor Saatri. A prefeitura aderiu ao sistema eletrônico de notas fiscais e a integração foi configurada no gateway para permitir emissão de NFS-e.',
        pr: 9112,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🔧',
        texto:
          'Configuração de cenário de emissão para subscription específica em Brasília/DF. A empresa tem um cenário tributário particular que exige tratamento diferenciado na emissão de notas para o Distrito Federal. A configuração garante que as regras específicas sejam aplicadas corretamente.',
        pr: 9108,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Quaraí/RS incluído na lista NaoUsaPedRegEventoCancelamento. O município não aceita o campo nPedRegEvento (Pedido de Registro de Evento) no processo de cancelamento de NFS-e pelo provedor GOVBRv3. Sem essa configuração, o cancelamento falhava. Agora funciona corretamente.',
        pr: 9107,
        autor: 'Henrique Cassio',
      },
    ],
  },
];
