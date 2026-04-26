var aguardandoDeployData = [
  {
    tag: '25/04/2026',
    titulo: 'Sexta-feira — 25 de Abril',
    itens: [
      {
        icon: '🔒',
        texto:
          'Atualização do certificado de chave pública do provedor Elotech. O certificado anterior expirou e foi substituído pelo novo, garantindo que a comunicação HTTPS com os webservices da Elotech continue funcionando. Sem essa atualização, todas as cidades que usam Elotech ficariam impossibilitadas de emitir, cancelar ou consultar notas.',
        pr: null,
        autor: 'Thiago Souza',
      },
      {
        icon: '🧮',
        texto:
          'Criação do helper NFeServicoCalculosHelper para centralizar a lógica de definição do tipo de retenção PIS/COFINS/CSLL e o cálculo do valor líquido da NFS-e. Antes, essa lógica estava duplicada dentro do provedor SpeedGov (Eusébio/CE). Agora fica em um helper reutilizável no projeto ABRASF v1, facilitando a manutenção e permitindo que outros provedores usem a mesma lógica de cálculo do valor líquido no PDF da nota.',
        pr: null,
        autor: 'Thiago Souza',
      },
      {
        icon: '📊',
        texto:
          'Ajuste no cálculo da base de PIS/COFINS na NF-e (Sefaz SP) para descontar o valor do ICMS. Baseado na decisão do STF de 2017 que determinou que o ICMS não compõe a base de cálculo do PIS/COFINS, o sistema agora deduz o ICMS automaticamente para empresas não optantes do Simples Nacional e não MEI. Inicialmente aplicado a uma subscription específica, com previsão de expansão futura.',
        pr: null,
        autor: 'Jonathan Souza',
      },
      {
        icon: '🔧',
        texto:
          'Correção para retornar valor zero de ICMS quando a nota não possui ICMS calculado. Sem esse ajuste, o novo método CalcularBaseCalculoPisCofins poderia falhar ao tentar acessar o valor de ICMS em notas que não têm esse imposto (ex: serviços puros), causando erro na emissão.',
        pr: null,
        autor: 'Jonathan Souza',
      },
      {
        icon: '🧮',
        texto:
          'Ajuste para considerar corretamente o cenário de empresa configurada como optante do Simples Nacional porém com sublimite ultrapassado. Empresas que excedem o sublimite do Simples precisam calcular ICMS e PIS/COFINS como se fossem regime normal — o sistema agora identifica esse cenário e aplica a dedução do ICMS da base de PIS/COFINS também para essas empresas.',
        pr: null,
        autor: 'Jonathan Souza',
      },
    ],
  },
];
