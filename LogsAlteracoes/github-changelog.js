var changelogData = [
  {
    tag: '09/04/2026',
    titulo: 'Quarta-feira — 09 de Abril',
    data: '09/04/2026',
    itens: [
      {
        icon: '🤖',
        destaque: 'Melhorias na consulta por RPS em Barueri/SP',
        texto:
          'Logs detalhados para rastreamento do processo de consulta, incluindo resolução de captcha. PDF da nota salvo automaticamente ao consultar por RPS.',
      },
      {
        icon: '📍',
        destaque:
          'Correção de endereço para tomador do exterior (eTransparência)',
        texto:
          'Sistema agora pula atribuição de endereço para clientes estrangeiros e define TipoLogLocPre como "Rua". Lógica de endereço no reg20 prefere endereço do Tomador com fallback para Empresa.',
      },
    ],
  },
  {
    tag: '08/04/2026',
    titulo: 'Terça-feira — 08 de Abril',
    data: '08/04/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Novas cidades no Portal Nacional',
        texto:
          'Governador Valadares/MG e Boca da Mata/AL migraram para o portal nacional (NfseNacionalV2).',
      },
      {
        icon: '🔗',
        destaque: 'Endpoints atualizados',
        texto:
          'Jardim/MS endpoint atualizado. Santa Rita do Pardo/MS mudou porta de 8085 para 8090. Link de homologação de Contagem/MG corrigido.',
      },
      {
        icon: '🧾',
        destaque: 'Correção no envio de alíquota (Palmas/TO)',
        texto:
          'Corrigido envio da alíquota de ISS quando serviço prestado fora do município sem retenção.',
      },
      {
        icon: '📮',
        destaque: 'CEP sem formatação (eTransparência/NotaControl)',
        texto: 'CEP do local de prestação enviado sem pontos ou traços.',
      },
      {
        icon: '🔄',
        destaque: 'Retry no cancelamento',
        texto:
          'Quando a prefeitura responde "Tente novamente", o sistema faz novas tentativas automaticamente.',
      },
      {
        icon: '🔒',
        destaque: 'Bloqueio de regeneração de API Key',
        texto:
          'Possível bloquear regeneração de API Key para empresas específicas via configuração.',
      },
      {
        icon: '🏢',
        destaque: 'Conta Azul — Município de incidência',
        texto:
          'Município de incidência agora é sempre o do prestador para a empresa Conta Azul.',
      },
      {
        icon: '🌍',
        destaque: 'Critério de exportação ajustado (Portal Nacional)',
        texto:
          'Nota só é exportação quando IBGE é 9999999. Cancelamento no GissOnline liberado.',
      },
      {
        icon: '🌐',
        destaque: 'ISSQN exterior (eTransparência)',
        texto:
          'Notas de serviço no exterior preenchem corretamente campos do relatório. Alíquota de ISS zerada para tomador exterior.',
      },
      {
        icon: '🤖',
        destaque: 'Consulta NFS-e por RPS em Barueri/SP',
        texto:
          'Consulta via web scraping com resolução automática de captcha (AntiCaptcha). Nova operação ConsultarNFeRpsV3.',
      },
    ],
  },
  {
    tag: '07/04/2026',
    titulo: 'Segunda-feira — 07 de Abril',
    data: '07/04/2026',
    itens: [
      {
        icon: '🆕',
        destaque: 'Novo provedor GIFv2 no layout nacional',
        texto:
          'Criado novo provedor GIFv2 seguindo o layout do portal nacional.',
      },
      {
        icon: '🏙️',
        destaque: 'Mudanças de provedor em várias cidades',
        texto:
          'Arroio do Meio/RS migra para NfseNacionalV2. Itaituba/PA para CoplanV2. Serra do Mel/RN para TinusV2. Jardinópolis/SP para GissOnline. Embu das Artes/SP URLs atualizadas.',
      },
      {
        icon: '🏢',
        destaque: 'Vinhedo/SP permite emissão sem tomador',
        texto:
          'Configurado Vinhedo/SP para permitir emissão de NFS-e sem dados do tomador.',
      },
      {
        icon: '📊',
        destaque: 'GOVBRv3 — Ajustes de alíquota e flags',
        texto:
          'Itabira/MG, Boituva/SP e Pejuçara/RS removidos da flag SempreEnviaAliquotaIssEmpresasSimplesNacional. São Gonçalo do Rio Abaixo/MG incluído na regra UsaCIntContribComCodigoServico.',
      },
      {
        icon: '🔧',
        destaque: 'Normalização de série RPS (SIGISSv5) e Varginha/MG',
        texto:
          'Corrigida comparação de série RPS por diferenças de formatação. Removida exigência de RPS sequencial para Varginha/MG.',
      },
      {
        icon: '🧮',
        destaque: 'PIS/COFINS e IBS/CBS',
        texto:
          'Ajustes PIS/Cofins Sapiranga/RS. CST do PIS/COFINS enviado conforme prestador. Validação de NBS para não travar fila. Ajuste tag cClassTrib.',
      },
      {
        icon: '🌐',
        destaque: 'Tratamento de tomador estrangeiro',
        texto:
          'Tratamento de tomador exterior em Cachoeirinha/RS. Cotia/SP configurado para enviar código obra.',
      },
      {
        icon: '🔧',
        destaque: 'IDs de responsável técnico atualizados',
        texto: 'Adicionados novos IDs na lista de responsável técnico.',
      },
    ],
  },
  {
    tag: '06/04/2026',
    titulo: 'Domingo — 06 de Abril',
    data: '06/04/2026',
    itens: [
      {
        icon: '🌐',
        destaque: 'NFS-e para serviço no exterior (eTransparência)',
        texto:
          'Regras para notas com IBGE 9999999: preenche endereço do tomador, zera ISS, adiciona país/cidade/estado/CEP.',
      },
      {
        icon: '🏙️',
        destaque: 'Mudanças de provedor em várias cidades',
        texto:
          'Caiçara/RS e Guarujá do Sul/SC migram para IPM. Colina/SP para NfseNacionalV2. São Luís de Montes Belos/GO volta para Centi. Ortigueira/PR para Bethav3. Jardinópolis/SP para GissOnline. Capela do Alto/SP adere ao portal nacional.',
      },
      {
        icon: '🔗',
        destaque: 'Links de integração atualizados',
        texto:
          'Cotia/SP e Carapicuíba/SP tiveram links atualizados. Araraquara/SP atualizado para layout padrão com número do lote.',
      },
      {
        icon: '🧮',
        destaque: 'Impostos retidos PIS/COFINS/CSLL (TinusV2)',
        texto:
          'Refatorado cálculo de impostos federais retidos. Corrigido bug que atribuía AliquotaCofins igual à AliquotaPis.',
      },
      {
        icon: '🏗️',
        destaque: 'Obras para SIGISSv5 e IssIntel + CNO para IPM',
        texto:
          'Envio de dados de construção civil para SIGISSv5 e IssIntel. Campo CNO implementado para IPM.',
      },
      {
        icon: '📊',
        destaque: 'Alíquota ISS e configurações municipais',
        texto:
          'Uberaba/MG não envia alíquota para não optantes. Juazeiro/BA na lista de municípios sem MunicipioIncidencia. Canguçu/RS e Álvares Machado/SP no GOVBRv3. Coplan V2 não envia alíquota zero.',
      },
      {
        icon: '🛡️',
        destaque: 'Proteção contra fila travada e validações',
        texto:
          'Try/catch para evitar travamento quando busca por município falha. Validação de metadados antes de inserir. Normalização de NBS. Reenvio automático no KbfSistemas.',
      },
      {
        icon: '🌍',
        destaque: 'Variação de país e autenticidade de nota',
        texto:
          'Variações de nome para Ilhas Virgens Britânicas. Verificação de autenticidade para Fortaleza/CE. Moeda estrangeira (vServMoeda) corrigida no portal nacional.',
      },
    ],
  },
  {
    tag: '05/04/2026',
    titulo: 'Sábado — 05 de Abril',
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
    titulo: 'Sexta-feira — 04 de Abril',
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
    titulo: 'Quinta-feira — 03 de Abril',
    data: '03/04/2026',
    itens: [
      {
        icon: '🧮',
        destaque: 'IBS/CBS para Sapiranga/RS (DBSeller)',
        texto:
          'Preenchimento dos campos IBS/CBS nos itens de serviço. Lógica de organização das tags cIndOp, cClassTrib e CodigoNbs no XML.',
      },
      {
        icon: '🔧',
        destaque: 'Correções de XML e proxy',
        texto:
          'Reordenação das tags CSTPisCofins e TpRetPisCofins para lotes com múltiplas notas. Ajuste de MunicipioIncidencia para evitar NullReferenceException. Proxy static no envio.',
      },
      {
        icon: '💱',
        destaque: 'Moeda estrangeira para notas do exterior',
        texto:
          'Envio do valor da moeda estrangeira para notas com tomador do exterior.',
      },
    ],
  },
  {
    tag: '02/04/2026',
    titulo: 'Quarta-feira — 02 de Abril',
    data: '02/04/2026',
    itens: [
      {
        icon: '📜',
        destaque: 'Script de cancelamento de notas inconsistentes',
        texto:
          'Script SQL para disparar cancelamento de notas com status inconsistente.',
      },
      {
        icon: '🏙️',
        destaque: 'Cachoeirinha/RS — Situação tributária para tomador exterior',
        texto:
          'Ajustada situação tributária (código 14) para tomadores do exterior no provedor IPM.',
      },
      {
        icon: '🔧',
        destaque: 'Sync com NotaGateway',
        texto:
          'Insere empresa na propriedade TipoImunidadePorEmpresa com valor 3.',
      },
    ],
  },
  {
    tag: '01/04/2026',
    titulo: 'Terça-feira — 01 de Abril',
    data: '01/04/2026',
    itens: [
      {
        icon: '🔗',
        destaque: 'Paranapanema/SP — Atualização de provedor',
        texto:
          'Migrou de GOVBRv3 para GOVBRv2 com link de produção atualizado.',
      },
      {
        icon: '🏙️',
        destaque: 'Novas cidades e migrações',
        texto:
          'Anitápolis/SC migra para Emissor Nacional. Pão de Açúcar/AL ativado no provedor Siafic. Conchas/SP incluído nas regras de cIntContrib.',
      },
      {
        icon: '📊',
        destaque: 'GOVBRv3 — Alíquota ISS para Simples Nacional',
        texto:
          'Mais municípios na flag SempreEnviaAliquotaIssEmpresasSimplesNacional. Envio de evento para empresa Asaas.',
      },
      {
        icon: '🔧',
        destaque: 'Truncamento e formatação',
        texto:
          'Truncate na formatação do TxtBuilder para evitar espaço indevido. Série RPS formatada como número. Removido campo de seleção de tipo de nota na interface de reenvio.',
      },
    ],
  },
  {
    tag: '31/03/2026',
    titulo: 'Segunda-feira — 31 de Março',
    data: '31/03/2026',
    itens: [
      {
        icon: '🏙️',
        destaque: 'Paranapanema/SP adicionado ao GOVBRv3',
        texto: 'Configuração com URLs de homologação e produção.',
      },
      {
        icon: '🏗️',
        destaque: 'IBS/CBS no layout 4.2 de Barueri/SP',
        texto:
          'Suporte a emissão com IBS/CBS. Versão do layout dinâmica baseada na presença de IBS/CBS.',
      },
      {
        icon: '🏙️',
        destaque: 'Novas cidades e migrações',
        texto:
          'Cravinhos/SP atualizado para versão 2026. Mata Grande/AL para Agili. São Luis do Quitunde/AL para Siafic. Atualização de provedor BethaV3.',
      },
      {
        icon: '🔧',
        destaque: 'Correções e ajustes diversos',
        texto:
          'Tratamento de FaultException para NotaControl. Olinda: não envia mais EX na UF para tomador exterior. Directa: remove CodigoMunicipio para tomador exterior. Ajuste de município de incidência. Lógica temporária para normalizar emissões no GOVBRv3.',
      },
      {
        icon: '📊',
        destaque: 'Novos campos no NFeServico',
        texto:
          'Adicionados: descontoCondicionado, paisPrestacaoServico, exportacao, nfseIndicativoDecisaoJudicial, exigibilidadeSuspensa. Correção de desconto condicionado/incondicionado.',
      },
    ],
  },
  {
    tag: '30/03/2026',
    titulo: 'Domingo — 30 de Março',
    data: '30/03/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Limeira/SP — Código de Tributação Nacional e Municipal',
        texto:
          'Limeira/SP adicionada às HashSets UsaCodigoTributacaoMunicipio e UsaCodigoTributacaoNacional no provedor IIBrasil.',
      },
      {
        icon: '❌',
        destaque: 'Varginha/MG — RPS sequencial',
        texto:
          'Adicionada exigência de RPS sequencial para Varginha/MG no BethaV3. Não grava RPS quando notas retornam negadas.',
      },
      {
        icon: '📮',
        destaque: 'eTransparência — Remove CEP para tomador do exterior',
        texto:
          'Removido envio do CEP para tomadores do exterior. Prefeitura retornava rejeição.',
      },
      {
        icon: '🏙️',
        destaque: 'Mudanças de provedor e configurações',
        texto:
          'Várias cidades aderiram ao portal nacional. Capela/AL para TributusV2. Viçosa/AL para TributusV2. São Brás do Suaçuí/MG para Sintese. São Ludgero para BethaV3. Ipatinga retirada da lista de cidades sem cancelamento.',
      },
      {
        icon: '📊',
        destaque: 'Ajustes de alíquota e tributação',
        texto:
          'Nova regra de alíquota para GOVBRv3. Ajuste de CodigoTributacaoNfseNacional para Iconha/ES. Correção de xLocalidadeIncid via IBGE no SIMv2. Ajuste Nif Natal/RN. Marília/SP atualizada para versão 2026.',
      },
    ],
  },
  {
    tag: '29/03/2026',
    titulo: 'Sábado — 29 de Março',
    data: '29/03/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit neste dia.',
      },
    ],
  },
  {
    tag: '28/03/2026',
    titulo: 'Sexta-feira — 28 de Março',
    data: '28/03/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit neste dia.',
      },
    ],
  },
];
