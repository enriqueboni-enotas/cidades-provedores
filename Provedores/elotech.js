var provedorDetalhe = {
  id: 'elotech',
  nome: 'Elotech',
  empresa: 'Elotech',
  stats: {
    municipios: 58
  },
  visaoGeral: [
    { key: 'Nome', val: 'Elotech' },
    { key: 'Total Municipios', val: '58' },
    { key: 'Estados Atendidos', val: ['PR', 'MS', 'RO'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 2,
    helpTipoAutenticacao: {
      certificadoDigital: null,
      usuario: 'Informe o usuário utilizado para acessar o sistema de sua prefeitura.',
      senha: 'Informe a senha utilizada para acessar o sistema de sua prefeitura.',
      token: null,
      fraseSecreta: null
    },
    suportaCancelamentoNFe: true,
    usaCNAE: true,
    usaItemListaServico: false,
    suportaEmissaoNFeSemCliente: true,
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: true,
    tempoEsperaParaConsultaLoteNFeEmMinutos: 0,
    regimesEspecialTributacao: [
      { codigo: '0', nome: ' - ' },
      { codigo: '1', nome: 'Microempresa Municipal' },
      { codigo: '2', nome: 'Estimativa' },
      { codigo: '3', nome: 'Sociedade de Profissionais' },
      { codigo: '4', nome: 'Cooperativa' },
      { codigo: '5', nome: 'MEI - Simples Nacional' },
      { codigo: '6', nome: 'ME EPP - Simples Nacional' }
    ],
    naturezasOperacao: [
      { codigo: '1', nome: 'Exigível' },
      { codigo: '2', nome: 'Não incidência' },
      { codigo: '3', nome: 'Isenção' },
      { codigo: '4', nome: 'Exportação' },
      { codigo: '5', nome: 'Imunidade' },
      { codigo: '6', nome: 'Exigibilidade suspensa por decisão judicial' },
      { codigo: '7', nome: 'Exigilidade suspensa por procedimento administrativo' }
    ]
  },
  municipiosLista: {
    'elotech': [
      { nome: 'Andirá', uf: 'PR', ibge: '4101101' }
,      { nome: 'Antonina', uf: 'PR', ibge: '4101200' }
,      { nome: 'Araruna', uf: 'PR', ibge: '4101705' }
,      { nome: 'Astorga', uf: 'PR', ibge: '4102109' }
,      { nome: 'Balsa Nova', uf: 'PR', ibge: '4102307' }
,      { nome: 'Bocaiúva do Sul', uf: 'PR', ibge: '4103107' }
,      { nome: 'Cambará', uf: 'PR', ibge: '4103602' }
,      { nome: 'Campina Grande do Sul', uf: 'PR', ibge: '4104006' }
,      { nome: 'Carlópolis', uf: 'PR', ibge: '4104709' }
,      { nome: 'Colorado', uf: 'PR', ibge: '4105904' }
,      { nome: 'Contenda', uf: 'PR', ibge: '4106209' }
,      { nome: 'Cruzeiro do Oeste', uf: 'PR', ibge: '4106605' }
,      { nome: 'Douradina', uf: 'PR', ibge: '4107256' }
,      { nome: 'Floresta', uf: 'PR', ibge: '4107900' }
,      { nome: 'Grandes Rios', uf: 'PR', ibge: '4108700' }
,      { nome: 'Ibiporã', uf: 'PR', ibge: '4109807' }
,      { nome: 'Imbaú', uf: 'PR', ibge: '4110078' }
,      { nome: 'Ipiranga', uf: 'PR', ibge: '4110508' }
,      { nome: 'Irati', uf: 'PR', ibge: '4110706' }
,      { nome: 'Itambé', uf: 'PR', ibge: '4111100' }
,      { nome: 'Ivaiporã', uf: 'PR', ibge: '4111506' }
,      { nome: 'Jaguapitã', uf: 'PR', ibge: '4111902' }
,      { nome: 'Jandaia do Sul', uf: 'PR', ibge: '4112108' }
,      { nome: 'Jardim Alegre', uf: 'PR', ibge: '4112504' }
,      { nome: 'Jussara', uf: 'PR', ibge: '4113007' }
,      { nome: 'Loanda', uf: 'PR', ibge: '4113502' }
,      { nome: 'Marialva', uf: 'PR', ibge: '4114807' }
,      { nome: 'Matelândia', uf: 'PR', ibge: '4115606' }
,      { nome: 'Medianeira', uf: 'PR', ibge: '4115804' }
,      { nome: 'Morretes', uf: 'PR', ibge: '4116208' }
,      { nome: 'Naviraí', uf: 'MS', ibge: '5005707' }
,      { nome: 'Nossa Senhora das Graças', uf: 'PR', ibge: '4116406' }
,      { nome: 'Nova Esperança', uf: 'PR', ibge: '4116901' }
,      { nome: 'Nova Londrina', uf: 'PR', ibge: '4117107' }
,      { nome: 'Palmeira', uf: 'PR', ibge: '4117701' }
,      { nome: 'Perobal', uf: 'PR', ibge: '4118857' }
,      { nome: 'Pinhão', uf: 'PR', ibge: '4119301' }
,      { nome: 'Piraquara', uf: 'PR', ibge: '4119509' }
,      { nome: 'Ponta Grossa', uf: 'PR', ibge: '4119905' }
,      { nome: 'Porto Rico', uf: 'PR', ibge: '4120200' }
,      { nome: 'Quatro Barras', uf: 'PR', ibge: '4120804' }
,      { nome: 'Querência do Norte', uf: 'PR', ibge: '4121000' }
,      { nome: 'Rebouças', uf: 'PR', ibge: '4121505' }
,      { nome: 'Renascença', uf: 'PR', ibge: '4121604' }
,      { nome: 'Ribeirão Claro', uf: 'PR', ibge: '4121802' }
,      { nome: 'Santa Fé', uf: 'PR', ibge: '4123402' }
,      { nome: 'Santa Tereza do Oeste', uf: 'PR', ibge: '4124020' }
,      { nome: 'Sarandi', uf: 'PR', ibge: '4126256' }
,      { nome: 'Seringueiras', uf: 'RO', ibge: '1101500' }
,      { nome: 'Sertanópolis', uf: 'PR', ibge: '4126504' }
,      { nome: 'São Carlos do Ivaí', uf: 'PR', ibge: '4124608' }
,      { nome: 'São João do Ivaí', uf: 'PR', ibge: '4125001' }
,      { nome: 'São Mateus do Sul', uf: 'PR', ibge: '4125605' }
,      { nome: 'São Miguel do Iguaçu', uf: 'PR', ibge: '4125704' }
,      { nome: 'São Sebastião da Amoreira', uf: 'PR', ibge: '4126009' }
,      { nome: 'Tapejara', uf: 'PR', ibge: '4126801' }
,      { nome: 'Tapira', uf: 'PR', ibge: '4126900' }
,      { nome: 'Terra Boa', uf: 'PR', ibge: '4127205' }
    ]
  }
};
