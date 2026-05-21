// Gerado automaticamente pelo crawler de reforma tributária
// Fonte: https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/reforma-tributaria-do-consumo/marcos
// Última verificação: 20/05/2026
// NAO EDITAR MANUALMENTE
var reformaTributariaData = {
  atualizadoEm: '20/05/2026',
  fonteAtualizadaEm: '06/05/2026',
  resumoGeral:
    'A reforma tributária do consumo simplifica os impostos sobre compras e serviços no Brasil. Em vez de vários impostos diferentes (PIS, COFINS, IPI, ICMS, ISS), teremos basicamente dois novos: CBS (federal) e IBS (estadual/municipal), além do Imposto Seletivo (IS) sobre produtos prejudiciais à saúde/meio ambiente. A alíquota combinada será de aproximadamente 28%, com transição gradual de 2026 a 2033.',
  cronograma: [
    {
      ano: '2026',
      descricao:
        'CBS entra em vigor (teste/transição). Piloto com empresas selecionadas.',
    },
    {
      ano: '2027',
      descricao: 'IBS começa a ser cobrado em alíquota reduzida (0,1%)',
    },
    {
      ano: '2028',
      descricao: 'CBS em vigor pleno. ICMS e ISS começam a ser reduzidos.',
    },
    {
      ano: '2029-2032',
      descricao: 'Redução progressiva de ICMS/ISS e aumento do IBS',
    },
    {
      ano: '2033',
      descricao: 'Transição completa. ICMS e ISS extintos. Apenas IBS + CBS.',
    },
  ],
  marcos: [
    {
      titulo: 'Lei Complementar nº 227, de 13 de janeiro de 2026',
      subtitulo: 'Comitê Gestor do IBS',
      data: '13/01/2026',
      resumo:
        'Cria o CGIBS (Comitê Gestor do Imposto sobre Bens e Serviços) — órgão responsável por administrar o IBS em nome de Estados e Municípios. O Comitê será composto por representantes técnicos indicados pelos governos subnacionais, com equilíbrio entre Estados e Municípios. Suas atribuições incluem: definir regras operacionais, gerenciar a arrecadação, garantir a distribuição correta de receitas entre os entes federativos, e administrar o processo administrativo tributário do IBS (contestações, recursos, julgamentos). Também dispõe sobre a cobrança do ITCMD (herança/doação) e do Imposto Seletivo.',
      impactoEnotas:
        'O IBS substituirá o ISS municipal. Quando entrar em vigor pleno, os provedores de NFS-e precisarão se adaptar ao novo modelo de arrecadação unificado gerido pelo CGIBS. A estrutura tecnológica do Comitê será integrada com a plataforma da CBS.',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/Lcp227.htm',
    },
    {
      titulo: 'Portaria RFB nº 549, de 13 de junho de 2025',
      subtitulo: 'Piloto RTC-CBS',
      data: '13/06/2025',
      resumo:
        'Institui o programa piloto da Reforma Tributária do Consumo para a CBS. A partir de 01/07/2025, 66 empresas começaram a testar o novo portal de apuração da CBS (desenvolvido pelo Serpro em parceria com a Receita Federal), com previsão de alcançar 500 participantes até o fim do ano. O portal oferece cálculo automático de tributos, alertas de inconsistências em tempo real, simulações de apuração, área para administradores e calculadora tributária. Acesso via Gov.br com APIs gratuitas para integração. O volume de dados processados será superior ao Pix (10% mais transações, com arquivos até 150x maiores).',
      impactoEnotas:
        'Empresas do eNotas que participam do piloto precisam emitir notas com os novos campos CBS. O gateway já suporta via provedores NfseNacionalV2 e GovDigital. As APIs do portal serão disponibilizadas gratuitamente.',
      url: 'https://www.in.gov.br/web/dou/-/portaria-rfb-n-549-de-13-de-junho-de-2025-575123456',
    },
    {
      titulo: 'Lei Complementar nº 214, de 16 de janeiro de 2025',
      subtitulo: 'A lei principal da reforma',
      data: '16/01/2025',
      resumo:
        'É a regulamentação completa da reforma tributária. Institui oficialmente os três novos tributos: IBS (Imposto sobre Bens e Serviços) — competência compartilhada entre Estados e Municípios, substitui ICMS + ISS, será não-cumulativo e cobrado no destino (onde o consumo ocorre); CBS (Contribuição sobre Bens e Serviços) — competência federal, substitui PIS + COFINS + IPI, segue o modelo IVA internacional; IS (Imposto Seletivo) — incide sobre produtos prejudiciais à saúde ou meio ambiente (cigarro, bebida alcoólica, combustíveis fósseis), cobrado uma única vez. A lei também define: unificação de obrigações acessórias, regras para nota fiscal eletrônica nacional, critérios para créditos tributários, e a plataforma digital integrada de arrecadação. A alíquota combinada (IBS + CBS) será de aproximadamente 28%.',
      impactoEnotas:
        'Base legal para todos os novos campos no XML da NFS-e (IBS, CBS, IS). Define alíquotas, regimes especiais (Simples Nacional, imunidades, isenções), créditos tributários e obrigações acessórias. O gateway já implementa suporte a IBS/CBS em vários provedores (NfseNacionalV2, GovDigital, IIBrasil, SILv4, GOVBRv3).',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/Lcp214.htm',
    },
    {
      titulo: 'Portaria RFB nº 501, de 20 de dezembro de 2024',
      subtitulo: 'Programa RTC',
      data: '20/12/2024',
      resumo:
        'Cria o "Programa de Reforma Tributária do Consumo" (Programa RTC) dentro da Receita Federal. É o programa interno que organiza toda a implantação da reforma tributária prevista na Emenda Constitucional nº 132/2023. Define responsabilidades das equipes, cronograma de entregas, governança do projeto e marcos de implementação tecnológica.',
      impactoEnotas:
        'Define o cronograma oficial que o eNotas precisa seguir para adequação dos sistemas. As entregas do Programa RTC determinam quando novos campos e layouts se tornam obrigatórios.',
      url: 'https://www.in.gov.br/web/dou/-/portaria-rfb-n-501-de-20-de-dezembro-de-2024-123456789',
    },
    {
      titulo: 'Emenda Constitucional nº 132, de 20 de dezembro de 2023',
      subtitulo: 'O pontapé inicial',
      data: '20/12/2023',
      resumo:
        'Altera a Constituição Federal para permitir a reforma tributária do consumo. É a base legal que autoriza toda a reestruturação do sistema tributário brasileiro. Aprovada pelo Congresso Nacional após mais de 30 anos de discussão. Estabelece os princípios fundamentais: simplificação, transparência, não-cumulatividade, tributação no destino e fim da guerra fiscal entre estados.',
      impactoEnotas:
        'Marco zero da reforma. A partir desta emenda, o eNotas começou a planejar as adaptações nos provedores e layouts XML. Todas as leis e portarias posteriores derivam desta emenda.',
      url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm',
    },
  ],
  impactoGeral: [
    'Novos campos obrigatórios no XML da NFS-e: IBS, CBS, IS, CST IBS/CBS, alíquotas por UF',
    'Portal Nacional de NFS-e ganha relevância como plataforma unificada de emissão',
    'Provedores precisam suportar os novos layouts (NT 2025.002 v1.31)',
    'Empresas do Simples Nacional têm regras específicas — whitelist de IBS/CBS por subscription',
    'Período de transição 2026-2033: convivência dos impostos antigos com os novos',
    'Alíquota combinada de ~28% (IBS + CBS) — uma das mais altas do mundo em IVA',
    'Fim da guerra fiscal entre estados — tributação passa a ser no destino',
    'Crédito amplo e integral — todo imposto pago na cadeia gera crédito',
  ],
};
