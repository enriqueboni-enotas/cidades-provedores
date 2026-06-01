var changelogData = [
  {
    tag: '01/06/2026',
    titulo: 'Domingo â€” 01 de Junho',
    data: '01/06/2026',
    itens: [
      {
        icon: 'ðŸ“­',
        destaque: 'Sem alteraÃ§Ãµes',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '31/05/2026',
    titulo: 'SÃ¡bado â€” 31 de Maio',
    data: '31/05/2026',
    itens: [
      {
        icon: 'ðŸ“­',
        destaque: 'Sem alteraÃ§Ãµes',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '30/05/2026',
    titulo: 'Sexta-feira â€” 30 de Maio',
    data: '30/05/2026',
    itens: [
      {
        icon: 'ðŸ“­',
        destaque: 'Sem alteraÃ§Ãµes',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '29/05/2026',
    titulo: 'Quinta-feira â€” 29 de Maio',
    data: '29/05/2026',
    itens: [
      {
        icon: 'ðŸ”§',
        destaque: 'ValidaÃ§Ã£o de CPF/CNPJ do tomador nos indicadores IBS/CBS (SIGISSWeb)',
        texto: 'O provedor SIGISSWeb lanÃ§ava NullReferenceException ao acessar tomador.CpfCnpj.Length quando o tomador nÃ£o possuÃ­a CPF/CNPJ preenchido, nos cenÃ¡rios de indicadores de operaÃ§Ã£o IBS/CBS (100301, 100501). Isso causava loop de retry infinito no OperationQueue. Foi adicionada validaÃ§Ã£o prÃ©via que lanÃ§a ValidationException com cÃ³digo GW0525.',
      },
      {
        icon: 'ðŸ”§',
        destaque: 'Fallback para "Tomador nÃ£o encontrado" no EGoverneISS',
        texto: 'Ao consultar o lote de NFS-e no provedor EGoverneISS, quando a prefeitura retornava "Tomador nÃ£o encontrado" (com Erro=true e QtdeNotas=0), o sistema nÃ£o realizava o fallback de repetir a consulta sem o CPF/CNPJ do tomador. Agora essa mensagem tambÃ©m dispara o fallback.',
      },
    ],
  },
  {
    tag: '28/05/2026',
    titulo: 'Quarta-feira â€” 28 de Maio',
    data: '28/05/2026',
    itens: [
      {
        icon: 'âš¡',
        destaque: 'Ativa turbo para Cinemark em SÃ£o JosÃ© dos Campos/SP',
        texto: 'O modo turbo foi ativado para a empresa Cinemark no municÃ­pio de SÃ£o JosÃ© dos Campos/SP. O modo turbo aumenta a prioridade de processamento e reduz o intervalo entre tentativas de envio, acelerando a emissÃ£o de notas para empresas com alto volume.',
      },
      {
        icon: 'ðŸ”§',
        destaque: 'Ajuste na mensagem de erro â€” limpeza de HTML e formataÃ§Ã£o',
        texto: 'As mensagens de erro retornadas pelas prefeituras estavam sendo exibidas com tags HTML e caracteres especiais que dificultavam a leitura. Foi implementada limpeza e sanitizaÃ§Ã£o das mensagens antes de exibir ao usuÃ¡rio.',
      },
      {
        icon: 'ðŸ”§',
        destaque: 'RemoveNonNumbers na inscriÃ§Ã£o municipal do tomador',
        texto: 'Adicionada sanitizaÃ§Ã£o RemoveNonNumbers na inscriÃ§Ã£o municipal do tomador antes do envio Ã  prefeitura. Integradores enviavam a IM com pontos ou traÃ§os, causando rejeiÃ§Ã£o em provedores que aceitam apenas numÃ©ricos.',
      },
      {
        icon: 'ðŸ”§',
        destaque: 'GOVBRv3: inscriÃ§Ã£o municipal do tomador para CPF especÃ­fico em Dom Pedrito/RS',
        texto: 'No provedor GOVBRv3, foi adicionado tratamento para preencher a inscriÃ§Ã£o municipal do tomador quando o CPF Ã© de um contribuinte especÃ­fico em Dom Pedrito/RS. A prefeitura exige a IM para determinados CPFs cadastrados como prestadores locais.',
      },
      {
        icon: 'ðŸ™ï¸',
        destaque: 'Lajinha/MG migrada para o provedor EeLv3',
        texto: 'O municÃ­pio de Lajinha/MG foi migrado para o provedor EeLv3. A prefeitura trocou de sistema de NFS-e e as URLs, namespace e configuraÃ§Ãµes foram atualizadas para o novo provedor.',
      },
      {
        icon: 'ðŸ†•',
        destaque: 'ImplementaÃ§Ã£o inicial do provedor NotaControlV2',
        texto: 'Foi implementado o provedor NotaControlV2 completo, incluindo operaÃ§Ãµes de recepÃ§Ã£o de lote (sÃ­ncrono e assÃ­ncrono), consulta de lote, cancelamento e geraÃ§Ã£o de NFS-e. O provedor utiliza comunicaÃ§Ã£o SOAP com WCF e suporta o padrÃ£o nacional (DPS/NFS-e).',
      },
      {
        icon: 'ðŸŒ',
        destaque: 'CorreÃ§Ã£o do formato XML para tomador exterior em Sapiranga/RS (DBSeller v2.04)',
        texto: 'O formato do XML para tomador do exterior no provedor DBSellerv2 de Sapiranga/RS estava incorreto. A correÃ§Ã£o remove IdentificacaoTomador para estrangeiro, adiciona NifTomador e substitui Endereco por EnderecoExterior.',
      },
      {
        icon: 'ðŸ”§',
        destaque: 'Bloqueio de emissÃ£o sem CPF/CNPJ do tomador em Novo Hamburgo/RS (IPMv2)',
        texto: 'A prefeitura de Novo Hamburgo/RS (IPM v2) nÃ£o aceita NFS-e sem CPF/CNPJ do tomador. Quando o documento nÃ£o era informado, o webservice causava erro de SQL. Agora o sistema bloqueia a emissÃ£o antes do envio com mensagem clara.',
      },
    ],
  },
  {
    tag: '27/05/2026',
    titulo: 'TerÃ§a-feira â€” 27 de Maio',
    data: '27/05/2026',
    itens: [
      {
        icon: 'ðŸŒ',
        destaque: 'ResoluÃ§Ã£o automÃ¡tica de local de prestaÃ§Ã£o exterior em Barueri (v2)',
        texto: 'Notas para tomadores do exterior retornavam "Erro desconhecido" em Barueri. No fluxo v2, quando empresaExportacaoExterior == true mas o cÃ³digo IBGE nÃ£o estava nos metadados, ficava com o valor da cidade da empresa ao invÃ©s de 9999999. A correÃ§Ã£o forÃ§a o cÃ³digo correto automaticamente.',
      },
      {
        icon: 'ðŸŒ',
        destaque: 'ResolverLocalPrestacaoServicoExterior antes de formatar RPS (Barueri)',
        texto: 'Complemento da correÃ§Ã£o anterior: a chamada foi movida para BarueriProvedorNFe.cs (antes de formatar o RPS) e a lÃ³gica de notaDeExportacao foi ajustada para considerar tomador.EhDoExterior.',
      },
      {
        icon: 'ðŸ™ï¸',
        destaque: 'Envio de endereÃ§o de obra para empresa no provedor',
        texto: 'Adicionado suporte ao envio do endereÃ§o de obra para empresas que prestam serviÃ§o em local diferente do estabelecimento. O campo Ã© incluÃ­do no XML quando a empresa possui essa informaÃ§Ã£o cadastrada.',
      },
      {
        icon: 'ðŸ”§',
        destaque: 'RemoÃ§Ã£o de acentuaÃ§Ã£o do email do tomador',
        texto: 'Adicionada sanitizaÃ§Ã£o para remover acentuaÃ§Ã£o do email do tomador antes do envio Ã  prefeitura. Emails com caracteres acentuados causavam rejeiÃ§Ã£o em provedores que validam formato RFC.',
      },
      {
        icon: 'ðŸ”§',
        destaque: 'Mensagem de erro em RpsJaInformado â€” texto explicativo',
        texto: 'Adicionada mensagem explicativa quando o provedor retorna "RPS jÃ¡ informado". Agora indica claramente que o RPS jÃ¡ foi convertido em NFS-e e sugere consultar a nota existente.',
      },
      {
        icon: 'ðŸ”§',
        destaque: 'GOVBRv3: nÃ£o envia grupo PIS/COFINS com valores zerados',
        texto: 'No provedor GOVBRv3, quando PIS e COFINS sÃ£o zero, o grupo tributÃ¡rio Ã© omitido do XML. Prefeituras rejeitavam notas com o bloco presente mas com valores zero.',
      },
      {
        icon: 'ðŸ™ï¸',
        destaque: 'Mauriti/CE ativado no provedor PMat',
        texto: 'O municÃ­pio de Mauriti/CE foi ativado no provedor PMat. URLs de produÃ§Ã£o e homologaÃ§Ã£o configuradas, habilitando emissÃ£o de NFS-e.',
      },
      {
        icon: 'ðŸ™ï¸',
        destaque: 'Palmas/TO configurado para permitir emissÃ£o sem tomador',
        texto: 'Palmas/TO configurado para permitir emissÃ£o de NFS-e sem dados do tomador. A flag SuportaEmissaoNFeSemCliente foi ativada para cenÃ¡rios de venda ao consumidor final.',
      },
      {
        icon: 'ðŸ”§',
        destaque: 'Leitura de XML na geraÃ§Ã£o do PDF â€” ajuste de parsing',
        texto: 'Ajustado o parsing de XML na geraÃ§Ã£o do PDF para tratar corretamente namespaces e encoding, evitando campos em branco quando o XML continha declaraÃ§Ãµes nÃ£o-padrÃ£o.',
      },
      {
        icon: 'ðŸ“Š',
        destaque: 'RolÃ¢ndia/PR na lista UsaCIntContribComCodigoServico (140201)',
        texto: 'RolÃ¢ndia/PR incluÃ­da na lista UsaCIntContribComCodigoServico para o serviÃ§o 140201, garantindo envio correto do campo CIntContrib e evitando rejeiÃ§Ã£o.',
      },
      {
        icon: 'ðŸ™ï¸',
        destaque: 'NfseNacionalV2: migraÃ§Ã£o de Adamantina/SP, CandelÃ¡ria/RS, Coromandel/MG e outras',
        texto: 'MÃºltiplos municÃ­pios migrados para o NfseNacionalV2 (Portal Nacional): Adamantina/SP, CandelÃ¡ria/RS, Coromandel/MG e outros que aderiram ao Portal Nacional.',
      },
      {
        icon: 'ðŸ”§',
        destaque: 'Melhoria na conversÃ£o de fuso horÃ¡rio â€” correÃ§Ã£o de virada de dia',
        texto: 'Corrigido bug intermitente na validaÃ§Ã£o da data de competÃªncia. Quando a emissÃ£o ocorria prÃ³ximo Ã  meia-noite local (23:58-23:59), a conversÃ£o UTC causava rollover para o dia seguinte. A correÃ§Ã£o usa LocalDateTime.',
      },
      {
        icon: 'ðŸŒ',
        destaque: 'Revert e re-fix: NomeCidadePrestacaoServico para exterior',
        texto: 'O campo NomeCidadePrestacaoServico usava o nome do PaÃ­s ao invÃ©s da Cidade para notas de exportaÃ§Ã£o. Foi feito revert do fix anterior e aplicada correÃ§Ã£o definitiva.',
      },
    ],
  },
  {
    tag: '26/05/2026',
    titulo: 'Segunda-feira â€” 26 de Maio',
    data: '26/05/2026',
    itens: [
      {
        icon: 'ðŸŒ',
        destaque: 'ResoluÃ§Ã£o automÃ¡tica de local de prestaÃ§Ã£o exterior (Barueri v2)',
        texto: 'Implementada resoluÃ§Ã£o automÃ¡tica do local de prestaÃ§Ã£o para o exterior no Barueri v2. Quando empresaExportacaoExterior Ã© true e tomador Ã© do exterior, o cÃ³digo IBGE Ã© forÃ§ado para 9999999.',
      },
      {
        icon: 'ðŸ”§',
        destaque: 'Erro intermitente na validaÃ§Ã£o da data de competÃªncia (NFSe via API)',
        texto: 'Corrigido bug que causava erro intermitente na validaÃ§Ã£o da data de competÃªncia. O problema ocorria prÃ³ximo Ã  meia-noite local quando a conversÃ£o UTC causava rollover para o dia seguinte.',
      },
      {
        icon: 'ðŸ“Š',
        destaque: 'Sefin: arredonda ValorIss em Caucaia/CE ao invÃ©s de truncar',
        texto: 'No provedor Sefin, o cÃ¡lculo do ValorIss para Caucaia/CE foi alterado de truncamento para arredondamento. A prefeitura rejeitava notas onde o ISS diferia em centavos.',
      },
      {
        icon: 'ðŸ†•',
        destaque: 'Novo provedor PMat â€” implementaÃ§Ã£o completa',
        texto: 'Implementado o provedor PMat completo com operaÃ§Ãµes de recepÃ§Ã£o de lote, consulta, cancelamento e geraÃ§Ã£o de PDF. Utiliza comunicaÃ§Ã£o SOAP com DataSet (formato legado .NET).',
      },
      {
        icon: 'ðŸŒ',
        destaque: 'FormataÃ§Ã£o de endereÃ§o especÃ­fica para Hotmart (entidades externas)',
        texto: 'Adicionada formataÃ§Ã£o de endereÃ§o especÃ­fica para a Hotmart ao lidar com tomadores do exterior. O endereÃ§o Ã© montado no formato esperado pela prefeitura.',
      },
      {
        icon: 'ðŸ“Š',
        destaque: 'Subscription SaudeViaNet para envio de IBSCBS no Simples',
        texto: 'SaudeViaNet adicionada Ã  lista de envio de IBS/CBS para Simples Nacional, garantindo que notas incluam os novos tributos da reforma tributÃ¡ria.',
      },
      {
        icon: 'ðŸ™ï¸',
        destaque: 'Nossa Senhora da GlÃ³ria/PE â€” flag UsaEnderecoTomExterior (TributusV2)',
        texto: 'Ativada a flag UsaEnderecoTomExterior para Nossa Senhora da GlÃ³ria/PE no TributusV2, indicando suporte ao envio do endereÃ§o completo do tomador exterior.',
      },
      {
        icon: 'ðŸ”—',
        destaque: 'AtualizaÃ§Ã£o do endpoint de produÃ§Ã£o de LuziÃ¢nia/GO (ProData)',
        texto: 'Endpoint de produÃ§Ã£o de LuziÃ¢nia/GO atualizado para novo endereÃ§o. A URL anterior foi desativada pela prefeitura.',
      },
      {
        icon: 'ðŸ™ï¸',
        destaque: 'SÃ£o Bernardo do Campo/SP ativado na versÃ£o com IBSCBS',
        texto: 'SÃ£o Bernardo do Campo/SP ativado na versÃ£o do provedor que suporta IBS/CBS, permitindo emissÃ£o com os novos tributos da reforma tributÃ¡ria.',
      },
      {
        icon: 'ðŸ§®',
        destaque: 'Zera valor PIS e COFINS de apuraÃ§Ã£o prÃ³pria para Conta Azul',
        texto: 'Valores de PIS e COFINS de apuraÃ§Ã£o prÃ³pria zerados para Conta Azul. A integraÃ§Ã£o enviava valores que divergiam do esperado pela prefeitura.',
      },
      {
        icon: 'ðŸ“Š',
        destaque: 'CondiÃ§Ã£o de regime de apuraÃ§Ã£o "1" na regra de nÃ£o enviar alÃ­quota',
        texto: 'IncluÃ­da condiÃ§Ã£o para regime de apuraÃ§Ã£o "1" (Simples Nacional) na regra de nÃ£o enviar alÃ­quota. Empresas do Simples nÃ£o devem enviar alÃ­quota de ISS no XML.',
      },
      {
        icon: 'ðŸŒ',
        destaque: 'Ajuste de emissÃ£o para tomador exterior com prestaÃ§Ã£o fora (PublicaV1)',
        texto: 'Ajustada emissÃ£o para tomador exterior com prestaÃ§Ã£o fora do municÃ­pio no PublicaV1. O provedor exige formato especÃ­fico para endereÃ§o do tomador estrangeiro.',
      },
      {
        icon: 'ðŸ™ï¸',
        destaque: 'Queimados/RJ aderiu ao Portal Nacional',
        texto: 'Queimados/RJ aderiu ao Portal Nacional de NFS-e. ConfiguraÃ§Ãµes atualizadas para utilizar o provedor NfseNacionalV2.',
      },
      {
        icon: 'ðŸ”§',
        destaque: 'Ajuste no PDF para exportaÃ§Ã£o de serviÃ§o',
        texto: 'Corrigido layout do PDF para exportaÃ§Ã£o de serviÃ§o. O PDF agora exibe corretamente dados do tomador estrangeiro incluindo endereÃ§o internacional.',
      },
    ],
  },  {
    tag: '25/05/2026',
    titulo: 'Segunda-feira — 25 de Maio',
    data: '25/05/2026',
    itens: [
      {
        icon: '🆕',
        destaque: 'Característica PermiteEvento nos provedores',
        texto:
          'Foi adicionada a propriedade PermiteEvento ao modelo de características dos provedores do gateway. Essa flag controla quais municípios suportam dados de evento (como cancelamento por evento) na emissão de NFS-e. O Portal Nacional e o provedor Barueri já são configurados com PermiteEvento = true por padrão. A propriedade é serializada nas extensions do provedor para uso em tempo de execução.',
      },
      {
        icon: '🔧',
        destaque:
          'Fix: não sobrescrever PermiteEvento se provedor já setou true',
        texto:
          'Após a adição da característica PermiteEvento, foi identificado que o valor padrão do ProvedorNFeServicoBase poderia sobrescrever o valor já definido por provedores específicos. O fix garante que, se um provedor já setou PermiteEvento = true no seu construtor, o valor não seja resetado para false pela classe base. Isso evita que provedores como Barueri percam a configuração de evento ao serem instanciados.',
      },
      {
        icon: '🔧',
        destaque:
          'Lógica de cancelamento de NF-e específica para Hotmart (TiplanV3)',
        texto:
          'Foi implementada lógica de cancelamento de NF-e específica para o provedor TiplanV3, sobrescrevendo o método FormatarPedidoRegistroEventoCancelamento para definir a versão do evento como "1.01". Também foi desabilitado o suporte a emissão sem cliente (SuportaEmissaoNFeSemCliente = false) e adicionado tratamento de erro para cenários onde o Tomador é nulo e ocorre InternalServerError, retornando resposta detalhada ao invés de exceção genérica.',
      },
    ],
  },
  {
    tag: '24/05/2026',
    titulo: 'Sábado — 24 de Maio',
    data: '24/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '23/05/2026',
    titulo: 'Sexta-feira — 23 de Maio',
    data: '23/05/2026',
    itens: [
      {
        icon: '📭',
        destaque: 'Sem alterações',
        texto: 'Nenhum commit na dev neste dia.',
      },
    ],
  },
  {
    tag: '22/05/2026',
    titulo: 'Quinta-feira — 22 de Maio',
    data: '22/05/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Tratamento de subscriptionID com MunicipioIncidenciaService',
        texto:
          'Adicionado tratamento para que o subscriptionID utilize o MunicipioIncidenciaService ao determinar o município de incidência do ISS. Antes, em cenários onde a subscription tinha regras específicas de incidência, o município era resolvido incorretamente, causando envio de alíquota errada para a prefeitura.',
      },
      {
        icon: '🔧',
        destaque: 'Expansão da lógica de cidades no ServicoControleLotesNFe',
        texto:
          'A lógica de controle de lotes de NF-e foi expandida para lidar com mais cenários de cidades. O método agora considera variações de configuração municipal que antes não eram contempladas, evitando que lotes ficassem travados em municípios com configurações atípicas.',
      },
      {
        icon: '📊',
        destaque: 'Validação de NBS para o serviço 99.01.01',
        texto:
          'Ajustada a validação do código NBS (Nomenclatura Brasileira de Serviços) para aceitar o código especial 99.01.01, que representa serviços não classificados. Antes, esse código era rejeitado pela validação numérica, impedindo a emissão de notas para empresas que utilizam esse código genérico.',
      },
      {
        icon: '🌐',
        destaque: 'Melhorias na exportação de notas para o exterior',
        texto:
          'Aprimorada a lógica de exportação de notas fiscais para tomadores do exterior, incluindo melhor cobertura de testes. O tratamento agora contempla cenários adicionais de endereçamento internacional e validação de dados do tomador estrangeiro.',
      },
      {
        icon: '🔧',
        destaque:
          'Remove MunicipioIncidencia quando ISS não retido fora do município',
        texto:
          'Quando o ISS não é retido na fonte e a prestação ocorre fora do município do prestador, o campo MunicipioIncidencia agora é removido do XML enviado à prefeitura. Isso corrige rejeições em provedores que não aceitam esse campo quando o ISS não é retido, especialmente no EGoverneISS.',
      },
      {
        icon: '🔧',
        destaque: 'Mapeamento do erro ER004 no GIFv2 para retornar XML',
        texto:
          'O erro ER004 do provedor GIFv2 foi mapeado para retornar a resposta em formato XML ao invés de lançar uma exceção genérica. Isso permite que o sistema processe a mensagem de erro da prefeitura e exiba ao cliente de forma legível, em vez de mostrar um erro interno de comunicação.',
      },
      {
        icon: '🔧',
        destaque: 'Desabilita envio em lote para empresa específica',
        texto:
          'Uma empresa foi adicionada à lista de emissão unitária (1 nota por lote), desativando o envio em lote. Isso resolve problemas de timeout e rejeição que ocorriam quando múltiplas notas eram enviadas simultaneamente para a prefeitura dessa empresa.',
      },
      {
        icon: '🔧',
        destaque: 'RemoveAccent no endereço do tomador',
        texto:
          'Adicionada remoção de acentos (RemoveAccent) no endereço do tomador antes do envio à prefeitura. Alguns provedores rejeitam caracteres acentuados nos campos de endereço, causando erro de emissão. A sanitização garante compatibilidade com esses webservices.',
      },
      {
        icon: '🧮',
        destaque:
          'Apuração própria zerada quando prestador não informa PIS/COFINS',
        texto:
          'Quando o prestador não informa o bloco pisCofins na requisição, o sistema agora envia a apuração própria com valores zerados ao invés de omitir o bloco. Isso evita rejeições em prefeituras que exigem o bloco de tributos federais mesmo quando os valores são zero, especialmente no Portal Nacional.',
      },
      {
        icon: '🔧',
        destaque:
          'Verificação nula em dadosTomador para evitar NullReferenceException',
        texto:
          'Adicionada verificação de nulidade no objeto dadosTomador antes de acessar suas propriedades. Em cenários onde a nota é emitida sem tomador (ex: autosserviço), o sistema lançava NullReferenceException ao tentar ler campos do tomador. Agora o fluxo continua normalmente sem tomador.',
      },
      {
        icon: '🆕',
        destaque: 'Campo regimeApuracaoTributosSN na API de Empresas',
        texto:
          'Adicionado o campo regimeApuracaoTributosSN na WebAPI de Empresas. Esse campo indica o regime de apuração de tributos para empresas do Simples Nacional, permitindo que integradores consultem e configurem corretamente o regime fiscal da empresa via API.',
      },
      {
        icon: '🌐',
        destaque: 'Emissão para exterior no provedor GovDigital',
        texto:
          'Ajustada a emissão de NFS-e para tomadores do exterior no provedor GovDigital. O provedor não aceitava o formato padrão de endereço internacional, causando rejeição. Agora os campos de endereço são formatados conforme esperado pelo webservice GovDigital para tomadores estrangeiros.',
      },
      {
        icon: '🏙️',
        destaque: 'Salto Grande/SP migrado para ISSMAP',
        texto:
          'O município de Salto Grande/SP foi migrado para o provedor ISSMAP. A prefeitura trocou de sistema de NFS-e e as URLs, namespace e configurações foram atualizadas para o novo provedor. Empresas em Salto Grande agora emitem pelo ISSMAP.',
      },
      {
        icon: '🌐',
        destaque: 'Atualização de emissão para tomador do exterior',
        texto:
          'Atualizada a lógica de emissão para tomadores do exterior, ajustando o formato de envio dos dados de endereço internacional. A mudança garante que campos como código do país e endereço sejam enviados no formato correto para provedores que exigem estrutura específica para tomadores estrangeiros.',
      },
      {
        icon: '🌐',
        destaque:
          'NfseNacionalV2: código postal obrigatório para tomador estrangeiro',
        texto:
          'Adicionada validação no provedor NfseNacionalV2 que exige código postal para tomadores estrangeiros. Sem o código postal, a nota era rejeitada pela Receita Federal sem mensagem clara. Agora o sistema valida antes do envio e retorna mensagem explicativa ao cliente.',
      },
      {
        icon: '🏙️',
        destaque: 'Benedito Novo/SC ativado no provedor IPM',
        texto:
          'O município de Benedito Novo/SC foi ativado no provedor IPM. As URLs de produção e homologação foram configuradas, permitindo que empresas prestadoras de serviço em Benedito Novo emitam NFS-e pelo gateway.',
      },
      {
        icon: '🧮',
        destaque: 'Ajuste de retenção para valor líquido no PDF',
        texto:
          'Ajustado o cálculo do valor líquido exibido no PDF da nota para considerar corretamente o tipo de retenção (PIS/COFINS/CSLL). Antes, o valor líquido no PDF não refletia as retenções quando o tipo de retenção era diferente do padrão, causando divergência entre o valor exibido e o valor real.',
      },
      {
        icon: '🔧',
        destaque: 'Validação da discriminação na consulta por RPS',
        texto:
          'Atualizada a validação do campo discriminação na consulta por RPS. O campo agora é sanitizado antes da comparação, evitando falsos negativos quando a discriminação retornada pela prefeitura contém formatação diferente da enviada originalmente.',
      },
      {
        icon: '🧮',
        destaque: 'Zera alíquota e valores IBS/CBS para CST 410 (imunidade)',
        texto:
          'Para notas com CST 410 (imunidade tributária), os valores de alíquota e IBS/CBS agora são zerados automaticamente. Prefeituras rejeitavam notas imunes que continham valores de IBS/CBS preenchidos, pois a imunidade implica isenção total desses tributos.',
      },
      {
        icon: '🔧',
        destaque: 'Validação de tomador nulo antes do envio',
        texto:
          'Adicionada validação que verifica se o tomador é nulo antes de tentar acessar seus dados para montagem do XML. Isso previne NullReferenceException em cenários de emissão sem tomador e retorna mensagem de erro clara ao invés de exceção genérica.',
      },
      {
        icon: '🔧',
        destaque: 'RemoveInvalidXmlChars na descrição do serviço (xDescServ)',
        texto:
          'Adicionada sanitização de caracteres XML inválidos no campo xDescServ (descrição do serviço) antes do envio à prefeitura. Caracteres de controle e outros caracteres não permitidos em XML causavam rejeição silenciosa em alguns provedores.',
      },
      {
        icon: '🏙️',
        destaque: 'Itaju/SP ativado no provedor Fiorilli',
        texto:
          'O município de Itaju/SP foi ativado no provedor Fiorilli. As URLs de produção e homologação foram configuradas no ConfiguracoesMunicipios.xml, permitindo emissão de NFS-e para empresas prestadoras de serviço em Itaju.',
      },
      {
        icon: '🔧',
        destaque: 'Inclusão de empresaID na lista idsNovoRespTecnico',
        texto:
          'Uma empresa foi incluída na lista idsNovoRespTecnico para que seu CNPJ seja considerado no cadastro do responsável técnico junto à prefeitura. Sem essa inclusão, a empresa não conseguia emitir notas pois o responsável técnico não era reconhecido pelo webservice.',
      },
      {
        icon: '🏙️',
        destaque: 'Buenópolis/MG ativado no provedor Sintese',
        texto:
          'O município de Buenópolis/MG foi ativado no provedor Sintese. As URLs e configurações foram adicionadas ao ConfiguracoesMunicipios.xml, habilitando a emissão de NFS-e para empresas em Buenópolis.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento para chamar consulta por RPS',
        texto:
          'Adicionado tratamento no fluxo de consulta por RPS para garantir que a operação seja chamada corretamente quando o provedor suporta essa funcionalidade. Antes, em alguns cenários o sistema tentava consultar por lote quando deveria consultar por RPS individual, causando timeout.',
      },
      {
        icon: '🔧',
        destaque: 'Removido campo ref da observação (provisório)',
        texto:
          'Removido o campo "ref" que havia sido adicionado provisoriamente na observação da nota. O campo foi inserido temporariamente para rastreabilidade durante testes de integração e não deveria permanecer em produção, pois alterava o conteúdo da observação visível ao tomador.',
      },
    ],
  },
  {
    tag: '21/05/2026',
    titulo: 'Quarta-feira — 21 de Maio',
    data: '21/05/2026',
    itens: [
      {
        icon: '🔧',
        destaque: 'Handle default value para xCidade no endExt',
        texto:
          'Adicionado tratamento de valor padrão para o campo xCidade no objeto endExt (endereço exterior). Quando o campo vinha nulo ou vazio em notas para tomadores estrangeiros, o XML era gerado com tag vazia, causando rejeição em provedores que exigem o campo preenchido. Agora um valor default é atribuído quando ausente.',
      },
      {
        icon: '🏙️',
        destaque: 'Suporte a Rio das Ostras/RJ e atualizações Hotmart',
        texto:
          'Adicionado suporte ao município de Rio das Ostras/RJ com configurações específicas para o provedor utilizado pela prefeitura. Também foram aplicadas atualizações nas configurações de emissão da Hotmart para adequação a novos requisitos municipais.',
      },
      {
        icon: '⚙️',
        destaque: '[Danfe v2] Aumento de réplicas do microservice',
        texto:
          'Aumentada a quantidade de réplicas do microservice ms-gw-danfe-v2-service. O serviço de geração de DANFE v2 estava sobrecarregado em horários de pico, causando lentidão na geração de PDFs. Com mais réplicas, a capacidade de processamento paralelo aumenta e o tempo de resposta melhora.',
      },
      {
        icon: '🆕',
        destaque:
          'Característica PermiteEvento adicionada ao modelo de provedores',
        texto:
          'A propriedade PermiteEvento foi adicionada ao modelo de características dos provedores. Essa flag indica quais provedores suportam operações baseadas em evento (como cancelamento por evento). O Portal Nacional e Barueri já vêm com PermiteEvento = true por padrão.',
      },
      {
        icon: '🔧',
        destaque: 'Limite de reenvio no erro E0440',
        texto:
          'Adicionado limite de 2 tentativas de reenvio quando ocorre o erro E0440 (valor da nota excede o permitido). Antes, o sistema reenviava indefinidamente tentando reduzir o valor, o que gerava loops infinitos em casos onde a redução não resolvia o problema. Agora, após 2 tentativas sem sucesso, o lote é marcado como erro definitivo.',
      },
      {
        icon: '🏙️',
        destaque: 'Glorinha/RS ativada no provedor GOVBRv3',
        texto:
          'O município de Glorinha/RS foi adicionado ao ConfiguracoesMunicipios.xml com o provedor GOVBRv3. As URLs de produção e homologação foram configuradas, incluindo emissão sem certificado digital. Empresas prestadoras de serviço em Glorinha agora podem emitir NFS-e pelo gateway.',
      },
      {
        icon: '🔧',
        destaque: 'Desativa emissão por lote para empresa (Grupo Fleury)',
        texto:
          'Uma empresa foi adicionada à lista de emissão unitária (1 nota por lote), forçando o envio individual de notas. A emissão em lote causava timeouts e rejeições para essa empresa específica devido ao volume e complexidade das notas enviadas simultaneamente.',
      },
      {
        icon: '📊',
        destaque:
          'iClips na lista de subscriptions para envio de NBS no Simples',
        texto:
          'A subscription da iClips foi incluída na lista SubscriptionsSempreEnviarNBS. Isso garante que notas emitidas por essa empresa no regime Simples Nacional sempre enviem o código NBS (Nomenclatura Brasileira de Serviços), requisito do Portal Nacional para determinadas atividades.',
      },
      {
        icon: '🔧',
        destaque: 'Tratamento de erro do provedor ADN (EtheriumTech)',
        texto:
          'Robustecido o tratamento do retorno HTTP 204 do provedor ADN (EtheriumTech). O XML agora é pré-processado e sanitizado antes da desserialização, mensagens de erro são analisadas e mapeadas corretamente, e a lógica que determina se um lote foi processado com erro foi reforçada com checagens null-safe para evitar NullReferenceException.',
      },
      {
        icon: '🔧',
        destaque: 'Retorno de respostas HTTP 422 em XML no provedor GIFv2',
        texto:
          'O provedor GIFv2 foi ajustado para tratar respostas HTTP 422 (Unprocessable Entity) como XML válido ao invés de lançar exceção. Quando a prefeitura retorna 422 com detalhes do erro no corpo da resposta, o sistema agora normaliza o JSON e extrai a mensagem de erro para exibir ao cliente.',
      },
      {
        icon: '🔧',
        destaque: 'Retorno de chave de acesso ADN no provedor IPM',
        texto:
          'Adicionado suporte ao retorno da chave de acesso ADN (Acesso de Dados Nacional) no provedor IPM. A propriedade ChaveAcessoNFSeNacional foi mapeada no XML de resposta e agora é extraída e preenchida em DadosPrefeitura.ChaveAcesso, permitindo consultas futuras pela chave nacional.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de URL de Grajaú/MA',
        texto:
          'O endpoint de recepção de lote de Grajaú/MA foi atualizado para o novo domínio SpeedGov (speedgov.com.br/wsgru/Nfes). A prefeitura migrou de provedor e o endereço anterior deixou de responder, causando falhas de emissão.',
      },
      {
        icon: '🏙️',
        destaque: 'Santa Maria de Itabira/MG migrada para BethaV3',
        texto:
          'O município de Santa Maria de Itabira/MG foi migrado para o provedor BethaV3. A prefeitura trocou de sistema de NFS-e e as configurações foram atualizadas para o novo provedor, incluindo URLs e namespace.',
      },
      {
        icon: '🔗',
        destaque: 'Atualização de URL e alíquota de Cabo Frio/RJ',
        texto:
          'A URL de produção de Cabo Frio/RJ foi atualizada e a lógica de alíquota foi ajustada. Quando ISS não é retido na fonte, ValorIss e Aliquota agora são anulados somente se a empresa possui RegimeEspecialTributacao diferente de "0". Isso corrige cenários onde a alíquota era zerada indevidamente para empresas sem regime especial.',
      },
    ],
  },

];