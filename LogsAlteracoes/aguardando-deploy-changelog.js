var aguardandoDeployData = [
  {
    tag: '23/04/2026',
    titulo: 'Quinta-feira — 23 de Abril',
    itens: [
      {
        icon: '🔧',
        texto:
          'Adicionado proxy para os provedores Fisco.Net e Fisco.NetV2. Algumas prefeituras que utilizam esses provedores bloqueiam requisições diretas dos servidores do eNotas. O proxy roteia as chamadas por um intermediário, contornando bloqueios de IP e garantindo que a comunicação com o webservice da prefeitura funcione corretamente.',
        pr: 9019,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🏙️',
        texto:
          'Incluídos os códigos de serviço "040101" e "040301" na regra UsaCIntContribComCodigoServico para Jacarezinho/PR. A prefeitura exige o código interno do contribuinte (cIntContrib) para esses serviços específicos, e sem a configuração as notas eram rejeitadas. Antes apenas o serviço "041201" estava na lista.',
        pr: 9014,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🏙️',
        texto:
          'Ativado o município de Paratinga/BA para o provedor Saatri. A prefeitura aderiu ao sistema eletrônico de NFS-e via Saatri e a integração foi configurada no gateway para permitir emissão de notas fiscais de serviço.',
        pr: 9016,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🔄',
        texto:
          'Atualização do provedor de Imbuia/SC para BethaV3. O município migrou do provedor anterior para a versão mais recente do Betha, que traz suporte a novos campos exigidos pela reforma tributária e melhorias no layout do XML.',
        pr: 9013,
        autor: 'Davidson Souza',
      },
      {
        icon: '🔧',
        texto:
          'Correção no provedor IPMv2 para não travar a fila de processamento quando a prefeitura retorna um erro PHP específico (PhpInternalException: Undefined property stdClass::$ListaRps). O erro era mantido no objeto result.Exception, bloqueando o processamento das próximas notas. Agora a exceção é anulada e a nota é marcada como "processada com erro", permitindo que a fila continue.',
        pr: 9010,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '📊',
        texto:
          'Adicionado tratamento para empresa específica enviar alíquota de ISS mesmo quando o comportamento padrão do provedor não envia. Algumas empresas têm configuração tributária que exige o envio da alíquota para evitar rejeição pela prefeitura.',
        pr: 9005,
        autor: 'Henrique Cassio',
      },
      {
        icon: '📋',
        texto:
          'Incluída a subscription MetaSig na lista de empresas que sempre enviam o código NBS (Nomenclatura Brasileira de Serviços) no Portal Nacional de NFS-e. Sem essa configuração, o campo NBS ficava vazio e a nota era rejeitada por campo obrigatório não informado.',
        pr: 8992,
        autor: 'Davidson Souza',
      },
      {
        icon: '🔧',
        texto:
          'Adicionada configuração para forçar 4 casas decimais na alíquota de ISS no provedor DSFv2. A regra foi ampliada para abranger alíquotas com 3 ou mais casas decimais (antes era 4+). Algumas prefeituras rejeitavam notas quando a alíquota tinha 3 casas decimais sem o zero final, exigindo sempre o formato com 4 casas.',
        pr: 8936,
        autor: 'Vitor Fernandes',
      },
    ],
  },
];
