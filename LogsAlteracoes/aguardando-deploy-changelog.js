var aguardandoDeployData = [
  {
    tag: '15/06/2026',
    titulo: 'Domingo — 15 de Junho',
    itens: [
      {
        icon: '📊',
        texto:
          'Implementação dos novos campos da reforma tributária no provedor Equiplano — foram criadas 5 novas classes de modelo (ComercioExterior, DadosEvento, DadosObra, EnderecoObraOuEvento, IBSCBS) e implementado o processamento de NBS, IBS/CBS, dados de obra e evento. O provedor Equiplano agora suporta os campos exigidos pela reforma tributária do consumo, incluindo validação do indicador de operação (IndOp) e integração com o serviço externo de cálculo de IBS/CBS.',
        pr: 9590,
        autor: 'Davidson Souza',
      },
      {
        icon: '🔧',
        texto:
          'Removida a lista de Subscriptions que forçava o envio condicional de NBS (código de Nomenclatura Brasileira de Serviços). Antes, o campo cNBS só era enviado para empresas específicas listadas em SubscriptionsSempreEnviarNBS. Agora o cNBS é sempre preenchido a partir do CodigoNBS do serviço, simplificando a lógica e garantindo que todas as empresas enviem o código NBS corretamente no XML da nota.',
        pr: 9569,
        autor: 'Davidson Souza',
      },
      {
        icon: '🔧',
        texto:
          'Adicionado tratamento para desserializar corretamente respostas do provedor GIAPv2 quando a prefeitura retorna texto fora da estrutura XML esperada. O código agora detecta e remove conteúdo estranho antes da tag <nfeResposta>, e injeta a tag <notaFiscal> quando ausente mas há <messages> na resposta. Resolve falhas de desserialização que travavam notas em status de consulta. Referências: CE-100506, CE-100516, CE-100515.',
        pr: 9594,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Rio da Conceição/TO ativado no provedor NfseNacionalV2. O município aderiu ao Portal Nacional de NFS-e na versão 2, com suporte a DPS, consulta padronizada e cancelamento via evento.',
        pr: 9593,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Paraná/TO ativado no provedor Publica V1. O município agora pode emitir, consultar e cancelar NFS-e através do gateway via o provedor Publica.',
        pr: 9592,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Paraíso do Norte/PR ativado no provedor IPM. O município paranaense agora está configurado no gateway para emissão de NFS-e pelo sistema IPM utilizado pela prefeitura.',
        pr: 9591,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Ajustada a validação do CodigoTributacaoMunicipio para aceitar códigos com benefício fiscal. Antes, apenas o formato CTISS de 7 dígitos era aceito. Agora também são aceitos códigos de 11 dígitos, onde os 4 últimos correspondem a um código de benefício fiscal válido (3013, 3014, 4001 ou 4004). A mensagem de erro GW1991 foi atualizada para refletir ambos os formatos aceitos.',
        pr: 9589,
        autor: 'Henrique Cassio',
      },
      {
        icon: '🏙️',
        texto:
          "Ativados 5 municípios no provedor Fiorilli: Guaiçara/SP, Santa Salete/SP, Estrela d'Oeste/SP, Piacatu/SP e Amapá/AP. Essas cidades agora podem emitir, consultar e cancelar NFS-e através do gateway integrado ao sistema Fiorilli.",
        pr: 9588,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Removida flag duplicada "Cancelada" na geração de PDF que causava erro "An item with the same key has already been added". A flag já era populada pela classe base, e a adição manual duplicava a entrada no dataSource. Também foi implementado tratamento de erro no cancelamento do provedor Fortaleza/CE: quando a mensagem de erro contém referência a reflexão interna, agora popula a Exception para acionar o mecanismo de retry da infraestrutura.',
        pr: 9586,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Removida condição temporária de geração de PDF que tratava notas de Blumenau/SC de forma especial. A lógica que verificava se a cidade era Blumenau combinada com uma lista de notas autorizadas pelo provedor anterior foi eliminada. Agora apenas a empresa Sankhya mantém tratamento especial de PDF, simplificando o código.',
        pr: 9584,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '📊',
        texto:
          'Atualizado o parse do valorISS no XML retornado pela prefeitura no provedor DSFv2. O método ExtrairDadosNFe agora processa corretamente a resposta XML via XPath, extraindo número da NFSe, código de verificação, data de emissão e valor do ISS. O valor do ISS só é gravado quando a alíquota é diferente de zero, evitando divergências com o PDF da prefeitura.',
        pr: 9583,
        autor: 'Vitor Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Santo Antônio do Grama/MG ativado no gateway. O município mineiro agora pode emitir NFS-e através do provedor configurado.',
        pr: 9581,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Campo Alegre de Lourdes/BA migrado para o provedor Saatri. A prefeitura trocou de sistema de NFS-e, e as configurações no gateway foram ajustadas para o novo provedor, garantindo continuidade na emissão e consulta de notas.',
        pr: 9580,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Centralizada e aprimorada a validação de endereço de obra no envio de NFS-e. Agora são exigidos campos completos (Logradouro, Número, Bairro, CEP e município/UF válidos) quando o serviço é de construção civil. O código de serviço municipal também passou a ser normalizado (remoção de caracteres não numéricos). Novas empresas foram adicionadas à lista de exceções que não enviam dados de obra. Resolve rejeições por endereço incompleto em notas de construção civil.',
        pr: 9579,
        autor: 'Felippe Salvo de Mendonça',
      },
      {
        icon: '🏙️',
        texto:
          'Itajobi/SP migrado para o provedor NfseNacional. O município paulista aderiu ao Portal Nacional de NFS-e, e as configurações foram atualizadas com URLs, namespace e operações do padrão nacional.',
        pr: 9577,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Biritiba-Mirim/SP migrado para o provedor NfseNacional. O município aderiu ao Portal Nacional de NFS-e, substituindo o provedor anterior. Agora emite notas pelo padrão nacional com suporte a DPS, consulta padronizada e cancelamento via evento.',
        pr: 9575,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Monte Negro/RO migrado para o provedor NfseNacional. O município rondoniense aderiu ao Portal Nacional de NFS-e, e as configurações foram atualizadas para o novo provedor.',
        pr: 9574,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🔧',
        texto:
          'Implementado cancelamento de NFS-e no provedor FiorilliV2. Foram criados novos modelos (CancelarNFSeEnvio, CancelarNFSeResposta), implementada a comunicação SOAP para RecepcionarEventoNFSe, e desenvolvida a operação completa de cancelamento com assinatura digital XML (canonicalização exclusiva C14n). O wsClient agora é descartado via using pattern, evitando problemas de descarte duplicado.',
        pr: 9573,
        autor: 'Thiago Souza',
      },
      {
        icon: '🏙️',
        texto:
          'Ingá/PB ativado no provedor Eticons. O município paraibano agora pode emitir NFS-e através do gateway integrado ao sistema Eticons usado pela prefeitura.',
        pr: 9571,
        autor: 'Alex Ramos Fernandes',
      },
      {
        icon: '🏙️',
        texto:
          'Abaiara/CE ativado no provedor Xtronline. O município cearense agora está configurado no gateway para emissão, consulta e cancelamento de NFS-e pelo sistema Xtronline.',
        pr: 9570,
        autor: 'Alex Ramos Fernandes',
      },
    ],
  },
];
