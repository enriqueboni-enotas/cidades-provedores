var provedorDetalhe = {
  id: 'fiorilli',
  nome: 'Fiorilli',
  empresa: 'Fiorilli',
  stats: {
    municipios: 215
  },
  visaoGeral: [
    { key: 'Nome', val: 'Fiorilli' },
    { key: 'Total Municipios', val: '215' },
    { key: 'Estados Atendidos', val: ['SP', 'MG', 'MS', 'RO', 'MT', 'MA', 'PE', 'PI', 'PA', 'RJ', 'AP', 'GO', 'AM', 'AL', 'PB', 'RS', 'BA'], type: 'uf-badges' }
  ],
  configuracaoProvedor: {
    tipoAutenticacao: 2,
    assinaturaDigital: 2,
    helpTipoAutenticacao: {
      certificadoDigital: 'Sua prefeitura exige a utilização de certificado digital, portanto, inclua aqui o arquivo de seu certificado A1.',
      usuario: 'Informe o usuário utilizado para acessar o sistema de sua prefeitura.',
      senha: 'Informe a senha utilizada para acessar o sistema de sua prefeitura.',
      token: null,
      fraseSecreta: null
    },
    usaCodigoServicoMunicipal: true,
    helpInscricaoMunicipal: 'Inscrição Municipal pode ou não conter formatação. Em caso de dúvidas, verifique com a prefeitura.',
    helpCodigoServicoMunicipal: 'Informe aqui o código municipal que identifica o serviço prestado na nota fiscal. \n                        Em algumas cidades esse código é conhecido como código de tributação.\n                        Exemplo válido: 01.03 ou 17.02',
    helpItemListaServico: 'Informe aqui o item da lista de serviço, é também um identificador do serviço prestado.\n                    Você precisa preencher o item da lista de serviço com 6 dígitos sem formatação.Exemplos válidos: 170201 ou 110401',
    suportaCancelamentoNFeSemCliente: false,
    suportaCancelamentoNFeClienteSemCpf: false,
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
    'fiorilli': [
      { nome: 'Abaeté', uf: 'MG', ibge: '3100203' }
,      { nome: 'Alexânia', uf: 'GO', ibge: '5200308' }
,      { nome: 'Alto Alegre do Maranhão', uf: 'MA', ibge: '2100436' }
,      { nome: 'Amambai', uf: 'MS', ibge: '5000609' }
,      { nome: 'Amarante do Maranhão', uf: 'MA', ibge: '2100600' }
,      { nome: 'Américo de Campos', uf: 'SP', ibge: '3501806' }
,      { nome: 'Anastácio', uf: 'MS', ibge: '5000708' }
,      { nome: 'Aparecida do Taboado', uf: 'MS', ibge: '5001003' }
,      { nome: 'Aquidauana', uf: 'MS', ibge: '5001102' }
,      { nome: 'Araguaiana', uf: 'MT', ibge: '5101001' }
,      { nome: 'Araçoiaba da Serra', uf: 'SP', ibge: '3502903' }
,      { nome: 'Arinos', uf: 'MG', ibge: '3104502' }
,      { nome: 'Ariquemes', uf: 'RO', ibge: '1100023' }
,      { nome: 'Ariranha', uf: 'SP', ibge: '3503703' }
,      { nome: 'Assis', uf: 'SP', ibge: '3504008' }
,      { nome: 'Auriflama', uf: 'SP', ibge: '3504206' }
,      { nome: 'Avaré', uf: 'SP', ibge: '3504503' }
,      { nome: 'Barbosa', uf: 'SP', ibge: '3505104' }
,      { nome: 'Bastos', uf: 'SP', ibge: '3505807' }
,      { nome: 'Bataguassu', uf: 'MS', ibge: '5001904' }
,      { nome: 'Bento de Abreu', uf: 'SP', ibge: '3506201' }
,      { nome: 'Bocaina', uf: 'SP', ibge: '3506805' }
,      { nome: 'Bofete', uf: 'SP', ibge: '3506904' }
,      { nome: 'Bonito', uf: 'MS', ibge: '5002209' }
,      { nome: 'Brasilândia', uf: 'MS', ibge: '5002308' }
,      { nome: 'Braúna', uf: 'SP', ibge: '3507704' }
,      { nome: 'Brodowski', uf: 'SP', ibge: '3507803' }
,      { nome: 'Buritis', uf: 'MG', ibge: '3109303' }
,      { nome: 'Buritis', uf: 'RO', ibge: '1100452' }
,      { nome: 'Bálsamo', uf: 'SP', ibge: '3504800' }
,      { nome: 'Cachoeira de Minas', uf: 'MG', ibge: '3109709' }
,      { nome: 'Cafelândia', uf: 'SP', ibge: '3508801' }
,      { nome: 'Cajobi', uf: 'SP', ibge: '3509304' }
,      { nome: 'Camanducaia', uf: 'MG', ibge: '3110509' }
,      { nome: 'Camapuã', uf: 'MS', ibge: '5002605' }
,      { nome: 'Cambuí', uf: 'MG', ibge: '3110608' }
,      { nome: 'Canaã dos Carajás', uf: 'PA', ibge: '1502152' }
,      { nome: 'Capinzal do Norte', uf: 'MA', ibge: '2102754' }
,      { nome: 'Capitólio', uf: 'MG', ibge: '3112802' }
,      { nome: 'Carmo do Rio Claro', uf: 'MG', ibge: '3114402' }
,      { nome: 'Carolina', uf: 'MA', ibge: '2102804' }
,      { nome: 'Castilho', uf: 'SP', ibge: '3511003' }
,      { nome: 'Cerejeiras', uf: 'RO', ibge: '1100056' }
,      { nome: 'Chapadão do Sul', uf: 'MS', ibge: '5002951' }
,      { nome: 'Coelho Neto', uf: 'MA', ibge: '2103406' }
,      { nome: 'Colniza', uf: 'MT', ibge: '5103254' }
,      { nome: 'Colorado do Oeste', uf: 'RO', ibge: '1100064' }
,      { nome: 'Conceição das Pedras', uf: 'MG', ibge: '3117207' }
,      { nome: 'Coroados', uf: 'SP', ibge: '3512506' }
,      { nome: 'Corumbá', uf: 'MS', ibge: '5003207' }
,      { nome: 'Cosmorama', uf: 'SP', ibge: '3512902' }
,      { nome: 'Costa Rica', uf: 'MS', ibge: '5003256' }
,      { nome: 'Cândido Mota', uf: 'SP', ibge: '3510005' }
,      { nome: 'Córrego do Bom Jesus', uf: 'MG', ibge: '3119906' }
,      { nome: 'Demerval Lobão', uf: 'PI', ibge: '2203305' }
,      { nome: 'Duartina', uf: 'SP', ibge: '3514502' }
,      { nome: 'Dumont', uf: 'SP', ibge: '3514601' }
,      { nome: 'Esmeraldas', uf: 'MG', ibge: '3124104' }
,      { nome: 'Espigão D\'Oeste', uf: 'RO', ibge: '1100098' }
,      { nome: 'Estiva', uf: 'MG', ibge: '3124500' }
,      { nome: 'Fartura', uf: 'SP', ibge: '3515400' }
,      { nome: 'Formoso', uf: 'MG', ibge: '3126208' }
,      { nome: 'Girau do Ponciano', uf: 'AL', ibge: '2702900' }
,      { nome: 'Gonçalves', uf: 'MG', ibge: '3127404' }
,      { nome: 'Guaimbê', uf: 'SP', ibge: '3517307' }
,      { nome: 'Guaraci', uf: 'SP', ibge: '3517901' }
,      { nome: 'Guararapes', uf: 'SP', ibge: '3518206' }
,      { nome: 'Guaraçaí', uf: 'SP', ibge: '3517802' }
,      { nome: 'Guará', uf: 'SP', ibge: '3517703' }
,      { nome: 'Gurinhém', uf: 'PB', ibge: '2506400' }
,      { nome: 'Gália', uf: 'SP', ibge: '3516606' }
,      { nome: 'Heliodora', uf: 'MG', ibge: '3129202' }
,      { nome: 'Holambra', uf: 'SP', ibge: '3519055' }
,      { nome: 'Ibaté', uf: 'SP', ibge: '3519303' }
,      { nome: 'Ibirá', uf: 'SP', ibge: '3519402' }
,      { nome: 'Igarapava', uf: 'SP', ibge: '3520103' }
,      { nome: 'Itaberá', uf: 'SP', ibge: '3521705' }
,      { nome: 'Itacoatiara', uf: 'AM', ibge: '1301902' }
,      { nome: 'Itajobi', uf: 'SP', ibge: '3521903' }
,      { nome: 'Itambé', uf: 'PE', ibge: '2607653' }
,      { nome: 'Itapecerica', uf: 'MG', ibge: '3133501' }
,      { nome: 'Itaporanga', uf: 'SP', ibge: '3522802' }
,      { nome: 'Itaporã', uf: 'MS', ibge: '5004502' }
,      { nome: 'Itapuí', uf: 'SP', ibge: '3522901' }
,      { nome: 'Itaí', uf: 'SP', ibge: '3521804' }
,      { nome: 'Itaú de Minas', uf: 'MG', ibge: '3133758' }
,      { nome: 'Ivinhema', uf: 'MS', ibge: '5004700' }
,      { nome: 'Jaborandi', uf: 'SP', ibge: '3524204' }
,      { nome: 'Jaci', uf: 'SP', ibge: '3524501' }
,      { nome: 'Jaciara', uf: 'MT', ibge: '5104807' }
,      { nome: 'Jacupiranga', uf: 'SP', ibge: '3524600' }
,      { nome: 'Jacutinga', uf: 'MG', ibge: '3134905' }
,      { nome: 'Jardim', uf: 'MS', ibge: '5005004' }
,      { nome: 'Jaru', uf: 'RO', ibge: '1100114' }
,      { nome: 'Ji-Paraná', uf: 'RO', ibge: '1100122' }
,      { nome: 'José Bonifácio', uf: 'SP', ibge: '3525706' }
,      { nome: 'José de Freitas', uf: 'PI', ibge: '2205508' }
,      { nome: 'Junqueirópolis', uf: 'SP', ibge: '3526001' }
,      { nome: 'Lagoa de Itaenga', uf: 'PE', ibge: '2608503' }
,      { nome: 'Laranjal Paulista', uf: 'SP', ibge: '3526407' }
,      { nome: 'Leopoldina', uf: 'MG', ibge: '3138401' }
,      { nome: 'Lindóia', uf: 'SP', ibge: '3527009' }
,      { nome: 'Macatuba', uf: 'SP', ibge: '3528007' }
,      { nome: 'Macedônia', uf: 'SP', ibge: '3528205' }
,      { nome: 'Machadinho D\'Oeste', uf: 'RO', ibge: '1100130' }
,      { nome: 'Marabá Paulista', uf: 'SP', ibge: '3528700' }
,      { nome: 'Martinho Campos', uf: 'MG', ibge: '3140506' }
,      { nome: 'Martinópolis', uf: 'SP', ibge: '3529203' }
,      { nome: 'Mazagão', uf: 'AP', ibge: '1600402' }
,      { nome: 'Medicilândia', uf: 'PA', ibge: '1504455' }
,      { nome: 'Mineiros do Tietê', uf: 'SP', ibge: '3529807' }
,      { nome: 'Miranda', uf: 'MS', ibge: '5005608' }
,      { nome: 'Mirandiba', uf: 'PE', ibge: '2609303' }
,      { nome: 'Mirandópolis', uf: 'SP', ibge: '3530102' }
,      { nome: 'Monsenhor Paulo', uf: 'MG', ibge: '3142601' }
,      { nome: 'Monte Alto', uf: 'SP', ibge: '3531308' }
,      { nome: 'Monte Aprazível', uf: 'SP', ibge: '3531407' }
,      { nome: 'Monte Azul Paulista', uf: 'SP', ibge: '3531506' }
,      { nome: 'Monte Sião', uf: 'MG', ibge: '3143401' }
,      { nome: 'Montividiu', uf: 'GO', ibge: '5213756' }
,      { nome: 'Morungaba', uf: 'SP', ibge: '3532009' }
,      { nome: 'Nazaré Paulista', uf: 'SP', ibge: '3532405' }
,      { nome: 'Nova Alvorada do Sul', uf: 'MS', ibge: '5006002' }
,      { nome: 'Nova Granada', uf: 'SP', ibge: '3533007' }
,      { nome: 'Nova Lacerda', uf: 'MT', ibge: '5106182' }
,      { nome: 'Nova Mamoré', uf: 'RO', ibge: '1100338' }
,      { nome: 'Nuporanga', uf: 'SP', ibge: '3533601' }
,      { nome: 'Oiapoque', uf: 'AP', ibge: '1600501' }
,      { nome: 'Onda Verde', uf: 'SP', ibge: '3534005' }
,      { nome: 'Oriente', uf: 'SP', ibge: '3534104' }
,      { nome: 'Orindiúva', uf: 'SP', ibge: '3534203' }
,      { nome: 'Orocó', uf: 'PE', ibge: '2609808' }
,      { nome: 'Ourilândia do Norte', uf: 'PA', ibge: '1505437' }
,      { nome: 'Ouro Fino', uf: 'MG', ibge: '3146008' }
,      { nome: 'Ouro Preto do Oeste', uf: 'RO', ibge: '1100155' }
,      { nome: 'Ouro Verde', uf: 'SP', ibge: '3534807' }
,      { nome: 'Ouroeste', uf: 'SP', ibge: '3534757' }
,      { nome: 'Palmeira d\'Oeste', uf: 'SP', ibge: '3535200' }
,      { nome: 'Paranaíba', uf: 'MS', ibge: '5006309' }
,      { nome: 'Paraty', uf: 'RJ', ibge: '3303807' }
,      { nome: 'Passabém', uf: 'MG', ibge: '3147501' }
,      { nome: 'Patrocínio Paulista', uf: 'SP', ibge: '3536307' }
,      { nome: 'Pau D\'Arco', uf: 'PA', ibge: '1505551' }
,      { nome: 'Paulo de Faria', uf: 'SP', ibge: '3536604' }
,      { nome: 'Pedra Preta', uf: 'MT', ibge: '5106372' }
,      { nome: 'Pedralva', uf: 'MG', ibge: '3149101' }
,      { nome: 'Pedreira', uf: 'SP', ibge: '3537107' }
,      { nome: 'Pedreiras', uf: 'MA', ibge: '2108207' }
,      { nome: 'Picos', uf: 'PI', ibge: '2208007' }
,      { nome: 'Pilar do Sul', uf: 'SP', ibge: '3537909' }
,      { nome: 'Pimenta Bueno', uf: 'RO', ibge: '1100189' }
,      { nome: 'Pinhalzinho', uf: 'SP', ibge: '3538204' }
,      { nome: 'Pio XII', uf: 'MA', ibge: '2108702' }
,      { nome: 'Piracaia', uf: 'SP', ibge: '3538600' }
,      { nome: 'Pirajuí', uf: 'SP', ibge: '3538907' }
,      { nome: 'Pirangi', uf: 'SP', ibge: '3539004' }
,      { nome: 'Piratininga', uf: 'SP', ibge: '3539400' }
,      { nome: 'Ponta Porã', uf: 'MS', ibge: '5006606' }
,      { nome: 'Pontal', uf: 'SP', ibge: '3540200' }
,      { nome: 'Pontal do Araguaia', uf: 'MT', ibge: '5106653' }
,      { nome: 'Porciúncula', uf: 'RJ', ibge: '3304102' }
,      { nome: 'Porto Esperidião', uf: 'MT', ibge: '5106828' }
,      { nome: 'Porto Grande', uf: 'AP', ibge: '1600535' }
,      { nome: 'Potirendaba', uf: 'SP', ibge: '3540804' }
,      { nome: 'Pradópolis', uf: 'SP', ibge: '3540903' }
,      { nome: 'Presidente Médici', uf: 'RO', ibge: '1100254' }
,      { nome: 'Promissão', uf: 'SP', ibge: '3541604' }
,      { nome: 'Quintana', uf: 'SP', ibge: '3542008' }
,      { nome: 'Ribas do Rio Pardo', uf: 'MS', ibge: '5007109' }
,      { nome: 'Ribeirão Bonito', uf: 'SP', ibge: '3542909' }
,      { nome: 'Ribeirãozinho', uf: 'MT', ibge: '5107198' }
,      { nome: 'Rio das Pedras', uf: 'SP', ibge: '3544004' }
,      { nome: 'Riolândia', uf: 'SP', ibge: '3544202' }
,      { nome: 'Rosana', uf: 'SP', ibge: '3544251' }
,      { nome: 'Sales Oliveira', uf: 'SP', ibge: '3544905' }
,      { nome: 'Santa Adélia', uf: 'SP', ibge: '3545605' }
,      { nome: 'Santa Cruz da Conceição', uf: 'SP', ibge: '3546207' }
,      { nome: 'Santa Luzia do Paruá', uf: 'MA', ibge: '2110039' }
,      { nome: 'Santa Rita do Pardo', uf: 'MS', ibge: '5007554' }
,      { nome: 'Santa Rita do Passa Quatro', uf: 'SP', ibge: '3547502' }
,      { nome: 'Santana', uf: 'AP', ibge: '1600600' }
,      { nome: 'Santo Anastácio', uf: 'SP', ibge: '3547700' }
,      { nome: 'Santo Antônio de Posse', uf: 'SP', ibge: '3548005' }
,      { nome: 'Santos Dumont', uf: 'MG', ibge: '3160702' }
,      { nome: 'Senador Canedo', uf: 'GO', ibge: '5220454' }
,      { nome: 'Serra Negra', uf: 'SP', ibge: '3551603' }
,      { nome: 'Serrita', uf: 'PE', ibge: '2614006' }
,      { nome: 'Severínia', uf: 'SP', ibge: '3551900' }
,      { nome: 'Sidrolândia', uf: 'MS', ibge: '5007901' }
,      { nome: 'São Fidélis', uf: 'RJ', ibge: '3304805' }
,      { nome: 'São Gabriel do Oeste', uf: 'MS', ibge: '5007695' }
,      { nome: 'São Joaquim da Barra', uf: 'SP', ibge: '3549409' }
,      { nome: 'São José dos Quatro Marcos', uf: 'MT', ibge: '5107107' }
,      { nome: 'São João da Barra', uf: 'RJ', ibge: '3305000' }
,      { nome: 'São Raimundo Nonato', uf: 'PI', ibge: '2210607' }
,      { nome: 'Tabapuã', uf: 'SP', ibge: '3552601' }
,      { nome: 'Tabatinga', uf: 'SP', ibge: '3552700' }
,      { nome: 'Tailândia', uf: 'PA', ibge: '1507953' }
,      { nome: 'Taiuva', uf: 'SP', ibge: '3553203' }
,      { nome: 'Tamandaré', uf: 'PE', ibge: '2614857' }
,      { nome: 'Tarabai', uf: 'SP', ibge: '3553906' }
,      { nome: 'Tefé', uf: 'AM', ibge: '1304203' }
,      { nome: 'Teresópolis', uf: 'RJ', ibge: '3305802' }
,      { nome: 'Trindade', uf: 'PE', ibge: '2615607' }
,      { nome: 'Três Cachoeiras', uf: 'RS', ibge: '4321667' }
,      { nome: 'Três Lagoas', uf: 'MS', ibge: '5008305' }
,      { nome: 'Urupês', uf: 'SP', ibge: '3556008' }
,      { nome: 'Uruçuí', uf: 'PI', ibge: '2211209' }
,      { nome: 'Urânia', uf: 'SP', ibge: '3555802' }
,      { nome: 'Valença do Piauí', uf: 'PI', ibge: '2211308' }
,      { nome: 'Vera Cruz', uf: 'BA', ibge: '2933208' }
,      { nome: 'Verdejante', uf: 'PE', ibge: '2616100' }
,      { nome: 'Zacarias', uf: 'SP', ibge: '3557154' }
,      { nome: 'Água Clara', uf: 'MS', ibge: '5000203' }
,      { nome: 'Águas de Lindóia', uf: 'SP', ibge: '3500501' }
    ]
  }
};
