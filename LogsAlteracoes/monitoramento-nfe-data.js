// Gerado automaticamente pelo workflow monitoramento-nfe.yml em 06/08/2026 06:27 (Brasilia)
// NAO EDITAR MANUALMENTE
var monitoramentoNfeData = {
  geradoEm: "06/08/2026 06:27",
  travadasPorMunicipio: [
  {
    "facet": "EXTERIOR",
    "latest.nfe.stuck_in_intermediate_status.count": 4,
    "nfe.municipio_servico": "EXTERIOR"
  },
  {
    "facet": "Seropédica",
    "latest.nfe.stuck_in_intermediate_status.count": 4,
    "nfe.municipio_servico": "Seropédica"
  },
  {
    "facet": "Esmeraldas",
    "latest.nfe.stuck_in_intermediate_status.count": 3,
    "nfe.municipio_servico": "Esmeraldas"
  },
  {
    "facet": "Naviraí",
    "latest.nfe.stuck_in_intermediate_status.count": 2,
    "nfe.municipio_servico": "Naviraí"
  },
  {
    "facet": "Urupá",
    "latest.nfe.stuck_in_intermediate_status.count": 2,
    "nfe.municipio_servico": "Urupá"
  },
  {
    "facet": "Corbélia",
    "latest.nfe.stuck_in_intermediate_status.count": 2,
    "nfe.municipio_servico": "Corbélia"
  },
  {
    "facet": "Itapipoca",
    "latest.nfe.stuck_in_intermediate_status.count": 2,
    "nfe.municipio_servico": "Itapipoca"
  },
  {
    "facet": "Faxinal do Soturno",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Faxinal do Soturno"
  },
  {
    "facet": "Santos",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Santos"
  },
  {
    "facet": "Ilhéus",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Ilhéus"
  },
  {
    "facet": "São Paulo",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "São Paulo"
  },
  {
    "facet": "Pontes e Lacerda",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Pontes e Lacerda"
  },
  {
    "facet": "Itumbiara",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Itumbiara"
  }
],
  tempoMaxProcessamento: [
  {
    "facet": "Pontes e Lacerda",
    "max.nfe.processing_time.minutes": 26,
    "nfe.municipio_servico": "Pontes e Lacerda"
  },
  {
    "facet": "Belo Horizonte",
    "max.nfe.processing_time.minutes": 25,
    "nfe.municipio_servico": "Belo Horizonte"
  },
  {
    "facet": "Pedro Leopoldo",
    "max.nfe.processing_time.minutes": 24,
    "nfe.municipio_servico": "Pedro Leopoldo"
  },
  {
    "facet": "Ipatinga",
    "max.nfe.processing_time.minutes": 24,
    "nfe.municipio_servico": "Ipatinga"
  },
  {
    "facet": "Sobral",
    "max.nfe.processing_time.minutes": 24,
    "nfe.municipio_servico": "Sobral"
  },
  {
    "facet": "Lages",
    "max.nfe.processing_time.minutes": 19,
    "nfe.municipio_servico": "Lages"
  },
  {
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 17,
    "nfe.municipio_servico": "Caraguatatuba"
  },
  {
    "facet": "Mendes",
    "max.nfe.processing_time.minutes": 17,
    "nfe.municipio_servico": "Mendes"
  },
  {
    "facet": "Dois Irmãos",
    "max.nfe.processing_time.minutes": 16,
    "nfe.municipio_servico": "Dois Irmãos"
  },
  {
    "facet": "Serranópolis do Iguaçu",
    "max.nfe.processing_time.minutes": 14,
    "nfe.municipio_servico": "Serranópolis do Iguaçu"
  }
],
  travadasPorMotivo: [
  {
    "facet": "",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.motivo_status": ""
  }
],
  tempoPorStatus: [
  {
    "average.nfe.processing_time.minutes": 11.6,
    "facet": "Cancelada",
    "nfe.status": "Cancelada"
  },
  {
    "average.nfe.processing_time.minutes": 1.049106676418347,
    "facet": "Negada",
    "nfe.status": "Negada"
  },
  {
    "average.nfe.processing_time.minutes": 0.8876628556235043,
    "facet": "Autorizada",
    "nfe.status": "Autorizada"
  }
],
  tempoPorStatusDetalhe: [
  {
    "facet": [
      "Cancelada",
      "CanceladaAguardandoAtualizacaoPDF"
    ],
    "max_min": 25,
    "media_min": 11.6,
    "p95_min": {
      "95": 25
    }
  },
  {
    "facet": [
      "Negada",
      "EmProcessoDeAutorizacao"
    ],
    "max_min": 26,
    "media_min": 1.049106676418347,
    "p95_min": {
      "95": 6.03125
    }
  },
  {
    "facet": [
      "Autorizada",
      "AutorizadaAguardandoGeracaoPDF"
    ],
    "max_min": 24,
    "media_min": 0.8876628556235043,
    "p95_min": {
      "95": 2.015625
    }
  }
],
  perfMunicipio: [
  {
    "average.nfe.processing_time.minutes": 24,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Pedro Leopoldo",
    "max.nfe.processing_time.minutes": 24,
    "nfe.municipio_servico": "Pedro Leopoldo",
    "percentile.nfe.processing_time.minutes": {
      "95": 24
    }
  },
  {
    "average.nfe.processing_time.minutes": 19.75,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Sobral",
    "max.nfe.processing_time.minutes": 24,
    "nfe.municipio_servico": "Sobral",
    "percentile.nfe.processing_time.minutes": {
      "95": 24
    }
  },
  {
    "average.nfe.processing_time.minutes": 19,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Lages",
    "max.nfe.processing_time.minutes": 19,
    "nfe.municipio_servico": "Lages",
    "percentile.nfe.processing_time.minutes": {
      "95": 19
    }
  },
  {
    "average.nfe.processing_time.minutes": 17,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Mendes",
    "max.nfe.processing_time.minutes": 17,
    "nfe.municipio_servico": "Mendes",
    "percentile.nfe.processing_time.minutes": {
      "95": 17
    }
  },
  {
    "average.nfe.processing_time.minutes": 16,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Dois Irmãos",
    "max.nfe.processing_time.minutes": 16,
    "nfe.municipio_servico": "Dois Irmãos",
    "percentile.nfe.processing_time.minutes": {
      "95": 16
    }
  },
  {
    "average.nfe.processing_time.minutes": 14,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Serranópolis do Iguaçu",
    "max.nfe.processing_time.minutes": 14,
    "nfe.municipio_servico": "Serranópolis do Iguaçu",
    "percentile.nfe.processing_time.minutes": {
      "95": 14
    }
  },
  {
    "average.nfe.processing_time.minutes": 13,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Pontes e Lacerda",
    "max.nfe.processing_time.minutes": 26,
    "nfe.municipio_servico": "Pontes e Lacerda",
    "percentile.nfe.processing_time.minutes": {
      "95": 26
    }
  },
  {
    "average.nfe.processing_time.minutes": 12,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Guapimirim",
    "max.nfe.processing_time.minutes": 12,
    "nfe.municipio_servico": "Guapimirim",
    "percentile.nfe.processing_time.minutes": {
      "95": 12
    }
  },
  {
    "average.nfe.processing_time.minutes": 12,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Ipatinga",
    "max.nfe.processing_time.minutes": 24,
    "nfe.municipio_servico": "Ipatinga",
    "percentile.nfe.processing_time.minutes": {
      "95": 24
    }
  },
  {
    "average.nfe.processing_time.minutes": 8.572222222222223,
    "count.nfe.processing_time.minutes": 180,
    "facet": "Belo Horizonte",
    "max.nfe.processing_time.minutes": 25,
    "nfe.municipio_servico": "Belo Horizonte",
    "percentile.nfe.processing_time.minutes": {
      "95": 25
    }
  },
  {
    "average.nfe.processing_time.minutes": 8,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Mata de São João",
    "max.nfe.processing_time.minutes": 8,
    "nfe.municipio_servico": "Mata de São João",
    "percentile.nfe.processing_time.minutes": {
      "95": 8
    }
  },
  {
    "average.nfe.processing_time.minutes": 6.5,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Viçosa",
    "max.nfe.processing_time.minutes": 13,
    "nfe.municipio_servico": "Viçosa",
    "percentile.nfe.processing_time.minutes": {
      "95": 13
    }
  },
  {
    "average.nfe.processing_time.minutes": 6.5,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Barão de Cocais",
    "max.nfe.processing_time.minutes": 8,
    "nfe.municipio_servico": "Barão de Cocais",
    "percentile.nfe.processing_time.minutes": {
      "95": 8
    }
  },
  {
    "average.nfe.processing_time.minutes": 6,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Ibirubá",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Ibirubá",
    "percentile.nfe.processing_time.minutes": {
      "95": 6
    }
  },
  {
    "average.nfe.processing_time.minutes": 5.233333333333333,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 17,
    "nfe.municipio_servico": "Caraguatatuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 8.0625
    }
  },
  {
    "average.nfe.processing_time.minutes": 5.066666666666666,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Taubaté",
    "max.nfe.processing_time.minutes": 12,
    "nfe.municipio_servico": "Taubaté",
    "percentile.nfe.processing_time.minutes": {
      "95": 12
    }
  },
  {
    "average.nfe.processing_time.minutes": 5,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Andradina",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Andradina",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 4,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Santana",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Santana",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.2916666666666665,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Itu",
    "max.nfe.processing_time.minutes": 9,
    "nfe.municipio_servico": "Itu",
    "percentile.nfe.processing_time.minutes": {
      "95": 9
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.0166666666666666,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Natal",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Natal",
    "percentile.nfe.processing_time.minutes": {
      "95": 6
    }
  },
  {
    "average.nfe.processing_time.minutes": 3,
    "count.nfe.processing_time.minutes": 120,
    "facet": "São Carlos",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "São Carlos",
    "percentile.nfe.processing_time.minutes": {
      "95": 6
    }
  },
  {
    "average.nfe.processing_time.minutes": 3,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Guaporé",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Guaporé",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.827777777777778,
    "count.nfe.processing_time.minutes": 180,
    "facet": "",
    "max.nfe.processing_time.minutes": 8,
    "nfe.municipio_servico": "",
    "percentile.nfe.processing_time.minutes": {
      "95": 8
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.8055555555555554,
    "count.nfe.processing_time.minutes": 180,
    "facet": "Porto Alegre",
    "max.nfe.processing_time.minutes": 8,
    "nfe.municipio_servico": "Porto Alegre",
    "percentile.nfe.processing_time.minutes": {
      "95": 8
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Cachoeirinha",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Cachoeirinha",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Nova Mutum",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Nova Mutum",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Lagoa Santa",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Lagoa Santa",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.5,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Naviraí",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Naviraí",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.5,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Nao informado",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Nao informado",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.45,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Volta Redonda",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Volta Redonda",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.3333333333333333,
    "count.nfe.processing_time.minutes": 180,
    "facet": "Londrina",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Londrina",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Campo Mourão",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Campo Mourão",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Caicó",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Caicó",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Ipirá",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Ipirá",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Farroupilha",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Farroupilha",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Foz do Iguaçu",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Foz do Iguaçu",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Saquarema",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Saquarema",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 32,
    "facet": "Dourados",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Dourados",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Tacaratu",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Tacaratu",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "São Lourenço do Oeste",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São Lourenço do Oeste",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Paraibuna",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Paraibuna",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Itapecerica",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Itapecerica",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 120,
    "facet": "São José dos Campos",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São José dos Campos",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Serra Negra",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Serra Negra",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "EXTERIOR",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "EXTERIOR",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Araras",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Araras",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Serra",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Serra",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Conceição do Coité",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Conceição do Coité",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Santa Bárbara d'Oeste",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Santa Bárbara d'Oeste",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Guararema",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Guararema",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  }
],
  empresasMunicipio: [
  {
    "facet": "Seropédica",
    "nfe.municipio_servico": "Seropédica",
    "uniqueCount.empresa.razao_social": 2
  },
  {
    "facet": "Urupá",
    "nfe.municipio_servico": "Urupá",
    "uniqueCount.empresa.razao_social": 2
  },
  {
    "facet": "EXTERIOR",
    "nfe.municipio_servico": "EXTERIOR",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Naviraí",
    "nfe.municipio_servico": "Naviraí",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Corbélia",
    "nfe.municipio_servico": "Corbélia",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Itapipoca",
    "nfe.municipio_servico": "Itapipoca",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Esmeraldas",
    "nfe.municipio_servico": "Esmeraldas",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Faxinal do Soturno",
    "nfe.municipio_servico": "Faxinal do Soturno",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Ilhéus",
    "nfe.municipio_servico": "Ilhéus",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Santos",
    "nfe.municipio_servico": "Santos",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "São Paulo",
    "nfe.municipio_servico": "São Paulo",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Pontes e Lacerda",
    "nfe.municipio_servico": "Pontes e Lacerda",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Itumbiara",
    "nfe.municipio_servico": "Itumbiara",
    "uniqueCount.empresa.razao_social": 1
  }
],
  statsGlobais: [
  {
    "average.nfe.processing_time.minutes": 1.0786674693959462,
    "max.nfe.processing_time.minutes": 26,
    "percentile.nfe.processing_time.minutes": {
      "50": 0,
      "90": 1.0078125,
      "95": 6.03125,
      "99": 24.125
    }
  }
],
  totalEmpresas: [
  {
    "uniqueCount.empresa.razao_social": 14
  }
],
  totalMunicipios: [
  {
    "uniqueCount.nfe.municipio_servico": 305
  }
],
  volumeMunicipio: [
  {
    "count.nfe.processing_time.minutes": 180,
    "facet": "",
    "nfe.municipio_servico": ""
  },
  {
    "count.nfe.processing_time.minutes": 180,
    "facet": "Taboão da Serra",
    "nfe.municipio_servico": "Taboão da Serra"
  },
  {
    "count.nfe.processing_time.minutes": 180,
    "facet": "Belo Horizonte",
    "nfe.municipio_servico": "Belo Horizonte"
  },
  {
    "count.nfe.processing_time.minutes": 180,
    "facet": "Londrina",
    "nfe.municipio_servico": "Londrina"
  },
  {
    "count.nfe.processing_time.minutes": 180,
    "facet": "Barueri",
    "nfe.municipio_servico": "Barueri"
  },
  {
    "count.nfe.processing_time.minutes": 180,
    "facet": "Porto Alegre",
    "nfe.municipio_servico": "Porto Alegre"
  },
  {
    "count.nfe.processing_time.minutes": 122,
    "facet": "Guaíra",
    "nfe.municipio_servico": "Guaíra"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Francisco Beltrão",
    "nfe.municipio_servico": "Francisco Beltrão"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Teresina",
    "nfe.municipio_servico": "Teresina"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Engenheiro Coelho",
    "nfe.municipio_servico": "Engenheiro Coelho"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Nova Iguaçu",
    "nfe.municipio_servico": "Nova Iguaçu"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "São Bernardo do Campo",
    "nfe.municipio_servico": "São Bernardo do Campo"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Pelotas",
    "nfe.municipio_servico": "Pelotas"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Juiz de Fora",
    "nfe.municipio_servico": "Juiz de Fora"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Maringá",
    "nfe.municipio_servico": "Maringá"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Bom Jesus do Itabapoana",
    "nfe.municipio_servico": "Bom Jesus do Itabapoana"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Cravinhos",
    "nfe.municipio_servico": "Cravinhos"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Saquarema",
    "nfe.municipio_servico": "Saquarema"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Nova Lima",
    "nfe.municipio_servico": "Nova Lima"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Varginha",
    "nfe.municipio_servico": "Varginha"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Bragança Paulista",
    "nfe.municipio_servico": "Bragança Paulista"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Rio de Janeiro",
    "nfe.municipio_servico": "Rio de Janeiro"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Sapiranga",
    "nfe.municipio_servico": "Sapiranga"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Rio Bonito",
    "nfe.municipio_servico": "Rio Bonito"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Botucatu",
    "nfe.municipio_servico": "Botucatu"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Betim",
    "nfe.municipio_servico": "Betim"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Itu",
    "nfe.municipio_servico": "Itu"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Santa Maria",
    "nfe.municipio_servico": "Santa Maria"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Curitiba",
    "nfe.municipio_servico": "Curitiba"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Praia Grande",
    "nfe.municipio_servico": "Praia Grande"
  }
],
  municipioStatus: [
  {
    "facet": [
      "Naviraí",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 10
  },
  {
    "facet": [
      "EXTERIOR",
      "Cancelada"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 4
  },
  {
    "facet": [
      "Esmeraldas",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 3
  },
  {
    "facet": [
      "Corbélia",
      "SolicitandoAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "facet": [
      "Itapipoca",
      "Cancelada"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "facet": [
      "Urupá",
      "Cancelada"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "facet": [
      "Faxinal do Soturno",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Ilhéus",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Itumbiara",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Pontes e Lacerda",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Santos",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Seropédica",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "São Paulo",
      "SolicitandoAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  topEmpresasTravadas: [
  {
    "empresa.razao_social": "MENTE INTERATIVA",
    "facet": "MENTE INTERATIVA",
    "latest.nfe.stuck_in_intermediate_status.count": 6
  },
  {
    "empresa.razao_social": "AC CREATOR HUB LTDA",
    "facet": "AC CREATOR HUB LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 4
  },
  {
    "empresa.razao_social": "HOPEN DIGITAL LTDA",
    "facet": "HOPEN DIGITAL LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 3
  },
  {
    "empresa.razao_social": "NEILA MARQUES DE FREITAS F LTDA",
    "facet": "NEILA MARQUES DE FREITAS F LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "empresa.razao_social": "MG PLENA VITA LTDA",
    "facet": "MG PLENA VITA LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "empresa.razao_social": "KAIROS TREINAMENTOS E CAPACITACAO PROFISSIONAL LTDA",
    "facet": "KAIROS TREINAMENTOS E CAPACITACAO PROFISSIONAL LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "V.M. BRIENCE NEGOCIOS DIGITAIS - LTDA",
    "facet": "V.M. BRIENCE NEGOCIOS DIGITAIS - LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA.",
    "facet": "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA.",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "NISHIO TREINAMENTOS LTDA",
    "facet": "NISHIO TREINAMENTOS LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  travadasPorStatusMunicipio: [
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Naviraí"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 10
  },
  {
    "facet": [
      "Cancelada",
      "EXTERIOR"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 4
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Esmeraldas"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 3
  },
  {
    "facet": [
      "Cancelada",
      "Itapipoca"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "facet": [
      "Cancelada",
      "Urupá"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "facet": [
      "SolicitandoAutorizacao",
      "Corbélia"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Faxinal do Soturno"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Ilhéus"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Itumbiara"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Pontes e Lacerda"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Santos"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Seropédica"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "SolicitandoAutorizacao",
      "São Paulo"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  travadasMotivoEmpresa: [
  {
    "facet": [
      "",
      "MENTE INTERATIVA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 10
  },
  {
    "facet": [
      "",
      "HOPEN DIGITAL LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 3
  },
  {
    "facet": [
      "",
      "MG PLENA VITA LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "facet": [
      "",
      "NEILA MARQUES DE FREITAS F LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "facet": [
      "",
      "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA."
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "facet": [
      "",
      "AC CREATOR HUB LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "BASTETART EDICOES DE LIVROS E FOTOGRAFIAS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "CL ROSA NUTRICAO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "ICDS INFOPRODUTOS E TREINAMENTOS LTDA."
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "JACK SANTOS CONTEUDOS DIGITAIS E EPILACAO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "KAIROS TREINAMENTOS E CAPACITACAO PROFISSIONAL LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "NISHIO TREINAMENTOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "RAFAEL SIMOES CARDOSO PITA 35742751885"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "V.M. BRIENCE NEGOCIOS DIGITAIS - LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  volumetriaHora: [
  {
    "canceladas": 18,
    "devolucoes": 2,
    "em_emissao": 2,
    "email": 0,
    "emitidas": 1132,
    "falhas": 143
  }
],
  volumetriaTimeseries: [
  {
    "beginTimeSeconds": 1785921900,
    "emitidas": 1771,
    "endTimeSeconds": 1785925500,
    "falhas": 249
  },
  {
    "beginTimeSeconds": 1785925500,
    "emitidas": 3448,
    "endTimeSeconds": 1785929100,
    "falhas": 397
  },
  {
    "beginTimeSeconds": 1785929100,
    "emitidas": 5267,
    "endTimeSeconds": 1785932700,
    "falhas": 779
  },
  {
    "beginTimeSeconds": 1785932700,
    "emitidas": 8151,
    "endTimeSeconds": 1785936300,
    "falhas": 5188
  },
  {
    "beginTimeSeconds": 1785936300,
    "emitidas": 5079,
    "endTimeSeconds": 1785939900,
    "falhas": 868
  },
  {
    "beginTimeSeconds": 1785939900,
    "emitidas": 6034,
    "endTimeSeconds": 1785943500,
    "falhas": 800
  },
  {
    "beginTimeSeconds": 1785943500,
    "emitidas": 5153,
    "endTimeSeconds": 1785947100,
    "falhas": 667
  },
  {
    "beginTimeSeconds": 1785947100,
    "emitidas": 4616,
    "endTimeSeconds": 1785950700,
    "falhas": 366
  },
  {
    "beginTimeSeconds": 1785950700,
    "emitidas": 3799,
    "endTimeSeconds": 1785954300,
    "falhas": 866
  },
  {
    "beginTimeSeconds": 1785954300,
    "emitidas": 5141,
    "endTimeSeconds": 1785957900,
    "falhas": 796
  },
  {
    "beginTimeSeconds": 1785957900,
    "emitidas": 4730,
    "endTimeSeconds": 1785961500,
    "falhas": 1687
  },
  {
    "beginTimeSeconds": 1785961500,
    "emitidas": 6759,
    "endTimeSeconds": 1785965100,
    "falhas": 1649
  },
  {
    "beginTimeSeconds": 1785965100,
    "emitidas": 17712,
    "endTimeSeconds": 1785968700,
    "falhas": 541
  },
  {
    "beginTimeSeconds": 1785968700,
    "emitidas": 4593,
    "endTimeSeconds": 1785972300,
    "falhas": 648
  },
  {
    "beginTimeSeconds": 1785972300,
    "emitidas": 5766,
    "endTimeSeconds": 1785975900,
    "falhas": 488
  },
  {
    "beginTimeSeconds": 1785975900,
    "emitidas": 8293,
    "endTimeSeconds": 1785979500,
    "falhas": 1215
  },
  {
    "beginTimeSeconds": 1785979500,
    "emitidas": 9650,
    "endTimeSeconds": 1785983100,
    "falhas": 1309
  },
  {
    "beginTimeSeconds": 1785983100,
    "emitidas": 3675,
    "endTimeSeconds": 1785986700,
    "falhas": 612
  },
  {
    "beginTimeSeconds": 1785986700,
    "emitidas": 9626,
    "endTimeSeconds": 1785990300,
    "falhas": 2580
  },
  {
    "beginTimeSeconds": 1785990300,
    "emitidas": 1071,
    "endTimeSeconds": 1785993900,
    "falhas": 131
  },
  {
    "beginTimeSeconds": 1785993900,
    "emitidas": 954,
    "endTimeSeconds": 1785997500,
    "falhas": 75
  },
  {
    "beginTimeSeconds": 1785997500,
    "emitidas": 1310,
    "endTimeSeconds": 1786001100,
    "falhas": 199
  },
  {
    "beginTimeSeconds": 1786001100,
    "emitidas": 1563,
    "endTimeSeconds": 1786004700,
    "falhas": 147
  },
  {
    "beginTimeSeconds": 1786004700,
    "emitidas": 1105,
    "endTimeSeconds": 1786008300,
    "falhas": 137
  }
],
  filaOperacoes: [
  {
    "pendentes": 0,
    "rodando": 0
  }
],
  webhooks: [
  {
    "dead_letter": 0,
    "falhas": 52,
    "ok": 30370
  }
],
  travadasStatusEmpresa: {"6":[],"3":[],"1":[],"0":[],"12":[]},
  totalMunicipiosPendentes: [
  {
    "uniqueCount.nfe.municipio_servico": 13
  }
],
  taxaNfse: [
  {
    "rejeicao": 28.79448432978833,
    "sucesso": 71.20551567021155
  }
],
  taxaNfe: [
  {
    "rejeicao": 13.849106462901469,
    "sucesso": 86.15089353709844
  }
],
  taxaSucessoMunicipio: [
  {
    "facet": "Tatuí",
    "municipio.nome": "Tatuí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Nova Iguaçu",
    "municipio.nome": "Nova Iguaçu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Campo Belo",
    "municipio.nome": "Campo Belo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Mandaguaçu",
    "municipio.nome": "Mandaguaçu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Barra do Piraí",
    "municipio.nome": "Barra do Piraí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Porangatu",
    "municipio.nome": "Porangatu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Caxias do Sul",
    "municipio.nome": "Caxias do Sul",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cordeirópolis",
    "municipio.nome": "Cordeirópolis",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cachoeirinha",
    "municipio.nome": "Cachoeirinha",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Nova Serrana",
    "municipio.nome": "Nova Serrana",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Lavras",
    "municipio.nome": "Lavras",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Bom Jesus do Itabapoana",
    "municipio.nome": "Bom Jesus do Itabapoana",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Nanuque",
    "municipio.nome": "Nanuque",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Londrina",
    "municipio.nome": "Londrina",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jaboatão dos Guararapes",
    "municipio.nome": "Jaboatão dos Guararapes",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jaguaruna",
    "municipio.nome": "Jaguaruna",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Tuparendi",
    "municipio.nome": "Tuparendi",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jaguariúna",
    "municipio.nome": "Jaguariúna",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Dois Vizinhos",
    "municipio.nome": "Dois Vizinhos",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Sapiranga",
    "municipio.nome": "Sapiranga",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Votuporanga",
    "municipio.nome": "Votuporanga",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Dourados",
    "municipio.nome": "Dourados",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Descalvado",
    "municipio.nome": "Descalvado",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Matias Barbosa",
    "municipio.nome": "Matias Barbosa",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Botucatu",
    "municipio.nome": "Botucatu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Tacaratu",
    "municipio.nome": "Tacaratu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Assis",
    "municipio.nome": "Assis",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Sumaré",
    "municipio.nome": "Sumaré",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Camaquã",
    "municipio.nome": "Camaquã",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itapecerica",
    "municipio.nome": "Itapecerica",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "EXTERIOR",
    "municipio.nome": "EXTERIOR",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Conceição do Coité",
    "municipio.nome": "Conceição do Coité",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Garopaba",
    "municipio.nome": "Garopaba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Biguaçu",
    "municipio.nome": "Biguaçu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jacareí",
    "municipio.nome": "Jacareí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Gravataí",
    "municipio.nome": "Gravataí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Três de Maio",
    "municipio.nome": "Três de Maio",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Luís Eduardo Magalhães",
    "municipio.nome": "Luís Eduardo Magalhães",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Nova Friburgo",
    "municipio.nome": "Nova Friburgo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Taquara",
    "municipio.nome": "Taquara",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Panambi",
    "municipio.nome": "Panambi",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pirassununga",
    "municipio.nome": "Pirassununga",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Indaiatuba",
    "municipio.nome": "Indaiatuba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Terra de Areia",
    "municipio.nome": "Terra de Areia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Porto Feliz",
    "municipio.nome": "Porto Feliz",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pariquera-Açu",
    "municipio.nome": "Pariquera-Açu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Colatina",
    "municipio.nome": "Colatina",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Xangri-lá",
    "municipio.nome": "Xangri-lá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Sorocaba",
    "municipio.nome": "Sorocaba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São José dos Pinhais",
    "municipio.nome": "São José dos Pinhais",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Palmas",
    "municipio.nome": "Palmas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Campo Grande",
    "municipio.nome": "Campo Grande",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Unaí",
    "municipio.nome": "Unaí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Carlos",
    "municipio.nome": "São Carlos",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Juquitiba",
    "municipio.nome": "Juquitiba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Paranapanema",
    "municipio.nome": "Paranapanema",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guapimirim",
    "municipio.nome": "Guapimirim",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Teresa",
    "municipio.nome": "Santa Teresa",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jales",
    "municipio.nome": "Jales",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pará de Minas",
    "municipio.nome": "Pará de Minas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itapetininga",
    "municipio.nome": "Itapetininga",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Arujá",
    "municipio.nome": "Arujá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Canela",
    "municipio.nome": "Canela",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Governador Valadares",
    "municipio.nome": "Governador Valadares",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Gramado",
    "municipio.nome": "Gramado",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itajaí",
    "municipio.nome": "Itajaí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Naviraí",
    "municipio.nome": "Naviraí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Formiga",
    "municipio.nome": "Formiga",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Parnamirim",
    "municipio.nome": "Parnamirim",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Morro Reuter",
    "municipio.nome": "Morro Reuter",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Roque",
    "municipio.nome": "São Roque",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Volta Redonda",
    "municipio.nome": "Volta Redonda",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santo Antônio da Patrulha",
    "municipio.nome": "Santo Antônio da Patrulha",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cabo Frio",
    "municipio.nome": "Cabo Frio",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Esteio",
    "municipio.nome": "Esteio",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Rio das Ostras",
    "municipio.nome": "Rio das Ostras",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Osasco",
    "municipio.nome": "Osasco",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Cruz do Sul",
    "municipio.nome": "Santa Cruz do Sul",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Toledo",
    "municipio.nome": "Toledo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santo Antônio de Jesus",
    "municipio.nome": "Santo Antônio de Jesus",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Sete Lagoas",
    "municipio.nome": "Sete Lagoas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Serranópolis do Iguaçu",
    "municipio.nome": "Serranópolis do Iguaçu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guaporé",
    "municipio.nome": "Guaporé",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Não informado",
    "municipio.nome": "Não informado",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Araranguá",
    "municipio.nome": "Araranguá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Joaquim da Barra",
    "municipio.nome": "São Joaquim da Barra",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Campos dos Goytacazes",
    "municipio.nome": "Campos dos Goytacazes",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Leopoldo",
    "municipio.nome": "São Leopoldo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Capão da Canoa",
    "municipio.nome": "Capão da Canoa",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Lourenço do Sul",
    "municipio.nome": "São Lourenço do Sul",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Sarandi",
    "municipio.nome": "Sarandi",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cataguases",
    "municipio.nome": "Cataguases",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pindamonhangaba",
    "municipio.nome": "Pindamonhangaba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Porto Velho",
    "municipio.nome": "Porto Velho",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Umuarama",
    "municipio.nome": "Umuarama",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Leopoldina",
    "municipio.nome": "Leopoldina",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Campinas",
    "municipio.nome": "Campinas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guanambi",
    "municipio.nome": "Guanambi",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Marília",
    "municipio.nome": "Marília",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Garibaldi",
    "municipio.nome": "Garibaldi",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Mogi das Cruzes",
    "municipio.nome": "Mogi das Cruzes",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Campo Bom",
    "municipio.nome": "Campo Bom",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Luís",
    "municipio.nome": "São Luís",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Manjeri",
    "municipio.nome": "Manjeri",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Diadema",
    "municipio.nome": "Diadema",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Tijucas",
    "municipio.nome": "Tijucas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Orlândia",
    "municipio.nome": "Orlândia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Limeira",
    "municipio.nome": "Limeira",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Maricá",
    "municipio.nome": "Maricá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Tubarão",
    "municipio.nome": "Tubarão",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cristais",
    "municipio.nome": "Cristais",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Lages",
    "municipio.nome": "Lages",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Vinhedo",
    "municipio.nome": "Vinhedo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Campo Mourão",
    "municipio.nome": "Campo Mourão",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "João Monlevade",
    "municipio.nome": "João Monlevade",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Caicó",
    "municipio.nome": "Caicó",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ipirá",
    "municipio.nome": "Ipirá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Farroupilha",
    "municipio.nome": "Farroupilha",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Caldas Novas",
    "municipio.nome": "Caldas Novas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Bagé",
    "municipio.nome": "Bagé",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Foz do Iguaçu",
    "municipio.nome": "Foz do Iguaçu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Mariana",
    "municipio.nome": "Mariana",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Siqueira Campos",
    "municipio.nome": "Siqueira Campos",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ariquemes",
    "municipio.nome": "Ariquemes",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Divinópolis",
    "municipio.nome": "Divinópolis",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Maringá",
    "municipio.nome": "Maringá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Boituva",
    "municipio.nome": "Boituva",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Varginha",
    "municipio.nome": "Varginha",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Maravilha",
    "municipio.nome": "Maravilha",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ponte Nova",
    "municipio.nome": "Ponte Nova",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Lourenço do Oeste",
    "municipio.nome": "São Lourenço do Oeste",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Betim",
    "municipio.nome": "Betim",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Araçatuba",
    "municipio.nome": "Araçatuba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Paraibuna",
    "municipio.nome": "Paraibuna",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itapema",
    "municipio.nome": "Itapema",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Araras",
    "municipio.nome": "Araras",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jaraguá do Sul",
    "municipio.nome": "Jaraguá do Sul",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Teutônia",
    "municipio.nome": "Teutônia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santos",
    "municipio.nome": "Santos",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Bárbara d'Oeste",
    "municipio.nome": "Santa Bárbara d'Oeste",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guarulhos",
    "municipio.nome": "Guarulhos",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Medianeira",
    "municipio.nome": "Medianeira",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Hortolândia",
    "municipio.nome": "Hortolândia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santana",
    "municipio.nome": "Santana",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Montes Claros",
    "municipio.nome": "Montes Claros",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "João Pessoa",
    "municipio.nome": "João Pessoa",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cascavel",
    "municipio.nome": "Cascavel",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Lajeado",
    "municipio.nome": "Lajeado",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Viçosa",
    "municipio.nome": "Viçosa",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guarapuava",
    "municipio.nome": "Guarapuava",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Rita do Passa Quatro",
    "municipio.nome": "Santa Rita do Passa Quatro",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Bento Gonçalves",
    "municipio.nome": "Bento Gonçalves",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Salgueiro",
    "municipio.nome": "Salgueiro",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itaperuna",
    "municipio.nome": "Itaperuna",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Sobral",
    "municipio.nome": "Sobral",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Vargem Grande do Sul",
    "municipio.nome": "Vargem Grande do Sul",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Criciúma",
    "municipio.nome": "Criciúma",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jataí",
    "municipio.nome": "Jataí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Olinda",
    "municipio.nome": "Olinda",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Alfredo Chaves",
    "municipio.nome": "Alfredo Chaves",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Araraquara",
    "municipio.nome": "Araraquara",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Tangará",
    "municipio.nome": "Tangará",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Lorena",
    "municipio.nome": "Lorena",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Camaçari",
    "municipio.nome": "Camaçari",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Atibaia",
    "municipio.nome": "Atibaia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Niterói",
    "municipio.nome": "Niterói",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pontes e Lacerda",
    "municipio.nome": "Pontes e Lacerda",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Birigui",
    "municipio.nome": "Birigui",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cotia",
    "municipio.nome": "Cotia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Chapecó",
    "municipio.nome": "Chapecó",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Nova Andradina",
    "municipio.nome": "Nova Andradina",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Bauru",
    "municipio.nome": "Bauru",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Uberaba",
    "municipio.nome": "Uberaba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Cruz das Palmeiras",
    "municipio.nome": "Santa Cruz das Palmeiras",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São José",
    "municipio.nome": "São José",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Feira de Santana",
    "municipio.nome": "Feira de Santana",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Urussanga",
    "municipio.nome": "Urussanga",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Timbó",
    "municipio.nome": "Timbó",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itabuna",
    "municipio.nome": "Itabuna",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Contagem",
    "municipio.nome": "Contagem",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Manaus",
    "municipio.nome": "Manaus",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Mendes",
    "municipio.nome": "Mendes",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Rio Grande",
    "municipio.nome": "Rio Grande",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Vitória da Conquista",
    "municipio.nome": "Vitória da Conquista",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Içara",
    "municipio.nome": "Içara",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ji-Paraná",
    "municipio.nome": "Ji-Paraná",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itatiba",
    "municipio.nome": "Itatiba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Piúma",
    "municipio.nome": "Piúma",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Linhares",
    "municipio.nome": "Linhares",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Eusébio",
    "municipio.nome": "Eusébio",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Colombo",
    "municipio.nome": "Colombo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Caetité",
    "municipio.nome": "Caetité",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Mauá",
    "municipio.nome": "Mauá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Macapá",
    "municipio.nome": "Macapá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Boa Vista",
    "municipio.nome": "Boa Vista",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Assis Chateaubriand",
    "municipio.nome": "Assis Chateaubriand",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Rita do Sapucaí",
    "municipio.nome": "Santa Rita do Sapucaí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ibitinga",
    "municipio.nome": "Ibitinga",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Imbituba",
    "municipio.nome": "Imbituba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Nova Lima",
    "municipio.nome": "Nova Lima",
    "rejeitadas": 2,
    "taxa_rejeicao": 0.5747126436781,
    "taxa_sucesso": 99.42528735632179
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.3255813953488,
    "taxa_sucesso": 97.67441860465111
  },
  {
    "facet": "Taubaté",
    "municipio.nome": "Taubaté",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.5,
    "taxa_sucesso": 97.5
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 11,
    "taxa_rejeicao": 2.7431421446384,
    "taxa_sucesso": 97.2568578553615
  },
  {
    "facet": "Olímpia",
    "municipio.nome": "Olímpia",
    "rejeitadas": 2,
    "taxa_rejeicao": 2.9411764705882,
    "taxa_sucesso": 97.0588235294117
  },
  {
    "facet": "Itajubá",
    "municipio.nome": "Itajubá",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.9411764705882,
    "taxa_sucesso": 97.0588235294117
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 3,
    "taxa_rejeicao": 3.7037037037037,
    "taxa_sucesso": 96.29629629629619
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 2,
    "taxa_rejeicao": 4.6511627906976,
    "taxa_sucesso": 95.3488372093023
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 90,
    "taxa_rejeicao": 5.4978619425778,
    "taxa_sucesso": 94.5021380574221
  },
  {
    "facet": "Salvador",
    "municipio.nome": "Salvador",
    "rejeitadas": 68,
    "taxa_rejeicao": 5.9181897302001,
    "taxa_sucesso": 94.0818102697998
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 22,
    "taxa_rejeicao": 7.942238267148,
    "taxa_sucesso": 92.0577617328519
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 3,
    "taxa_rejeicao": 9.6774193548387,
    "taxa_sucesso": 90.3225806451612
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 1,
    "taxa_rejeicao": 10,
    "taxa_sucesso": 90
  },
  {
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 14,
    "taxa_rejeicao": 11.4754098360655,
    "taxa_sucesso": 88.5245901639344
  },
  {
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
    "rejeitadas": 8,
    "taxa_rejeicao": 11.5942028985507,
    "taxa_sucesso": 88.4057971014492
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 4,
    "taxa_rejeicao": 13.3333333333333,
    "taxa_sucesso": 86.66666666666659
  },
  {
    "facet": "Videira",
    "municipio.nome": "Videira",
    "rejeitadas": 2,
    "taxa_rejeicao": 15.3846153846153,
    "taxa_sucesso": 84.61538461538461
  },
  {
    "facet": "Jundiaí",
    "municipio.nome": "Jundiaí",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Joinville",
    "municipio.nome": "Joinville",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 4,
    "taxa_rejeicao": 19.047619047619,
    "taxa_sucesso": 80.95238095238089
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 10,
    "taxa_rejeicao": 19.2307692307692,
    "taxa_sucesso": 80.7692307692307
  },
  {
    "facet": "Francisco Beltrão",
    "municipio.nome": "Francisco Beltrão",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Nao informado",
    "municipio.nome": "Nao informado",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 4,
    "taxa_rejeicao": 28.5714285714285,
    "taxa_sucesso": 71.4285714285714
  },
  {
    "facet": "Natal",
    "municipio.nome": "Natal",
    "rejeitadas": 4,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 4,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 2,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
    "rejeitadas": 8,
    "taxa_rejeicao": 42.105263157894704,
    "taxa_sucesso": 57.8947368421052
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 2,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Presidente Prudente",
    "municipio.nome": "Presidente Prudente",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Lagoa Santa",
    "municipio.nome": "Lagoa Santa",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 3,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Ourinhos",
    "municipio.nome": "Ourinhos",
    "rejeitadas": 9,
    "taxa_rejeicao": 56.25,
    "taxa_sucesso": 43.75
  },
  {
    "facet": "Alto Paraíso de Goiás",
    "municipio.nome": "Alto Paraíso de Goiás",
    "rejeitadas": 10,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 9,
    "taxa_rejeicao": 69.2307692307692,
    "taxa_sucesso": 30.7692307692307
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 5,
    "taxa_rejeicao": 71.4285714285714,
    "taxa_sucesso": 28.5714285714285
  },
  {
    "facet": "Pelotas",
    "municipio.nome": "Pelotas",
    "rejeitadas": 3,
    "taxa_rejeicao": 75,
    "taxa_sucesso": 25
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 10,
    "taxa_rejeicao": 76.92307692307689,
    "taxa_sucesso": 23.076923076923
  },
  {
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
    "rejeitadas": 5,
    "taxa_rejeicao": 83.3333333333333,
    "taxa_sucesso": 16.6666666666666
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 110,
    "taxa_rejeicao": 87.30158730158729,
    "taxa_sucesso": 12.6984126984126
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 8,
    "taxa_rejeicao": 88.8888888888888,
    "taxa_sucesso": 11.1111111111111
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 14,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 6.6666666666666
  },
  {
    "facet": "Teresina",
    "municipio.nome": "Teresina",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Dois Irmãos",
    "municipio.nome": "Dois Irmãos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itabaiana",
    "municipio.nome": "Itabaiana",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Alegre",
    "municipio.nome": "Alegre",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guaratuba",
    "municipio.nome": "Guaratuba",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Saquarema",
    "municipio.nome": "Saquarema",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Picos",
    "municipio.nome": "Picos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bragança Paulista",
    "municipio.nome": "Bragança Paulista",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Arcos",
    "municipio.nome": "Arcos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 3,
    "taxa_rejeicao": 14.0495867768595,
    "taxa_sucesso": 0
  },
  {
    "facet": "Santa Tereza do Oeste",
    "municipio.nome": "Santa Tereza do Oeste",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cabo de Santo Agostinho",
    "municipio.nome": "Cabo de Santo Agostinho",
    "rejeitadas": 13,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Campina Grande",
    "municipio.nome": "Campina Grande",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Santa Maria",
    "municipio.nome": "Santa Maria",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Mateus",
    "municipio.nome": "São Mateus",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Serra Negra",
    "municipio.nome": "Serra Negra",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guararema",
    "municipio.nome": "Guararema",
    "rejeitadas": 30,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cajamar",
    "municipio.nome": "Cajamar",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itaúna",
    "municipio.nome": "Itaúna",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Mateiros",
    "municipio.nome": "Mateiros",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itaboraí",
    "municipio.nome": "Itaboraí",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Suzano",
    "municipio.nome": "Suzano",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Canoas",
    "municipio.nome": "Canoas",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Socorro",
    "municipio.nome": "Socorro",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Palhoça",
    "municipio.nome": "Palhoça",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Camboriú",
    "municipio.nome": "Camboriú",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Bento do Sapucaí",
    "municipio.nome": "São Bento do Sapucaí",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Sapucaia do Sul",
    "municipio.nome": "Sapucaia do Sul",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bom Jesus do Galho",
    "municipio.nome": "Bom Jesus do Galho",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guarapari",
    "municipio.nome": "Guarapari",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Terra Roxa",
    "municipio.nome": "Terra Roxa",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Catanduva",
    "municipio.nome": "Catanduva",
    "rejeitadas": 32,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Pedro Leopoldo",
    "municipio.nome": "Pedro Leopoldo",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Correntina",
    "municipio.nome": "Correntina",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Indaial",
    "municipio.nome": "Indaial",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Barão de Cocais",
    "municipio.nome": "Barão de Cocais",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Arcoverde",
    "municipio.nome": "Arcoverde",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Franca",
    "municipio.nome": "Franca",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Mata de São João",
    "municipio.nome": "Mata de São João",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 9,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Belford Roxo",
    "municipio.nome": "Belford Roxo",
    "rejeitadas": 56,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ibiúna",
    "municipio.nome": "Ibiúna",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Andradina",
    "municipio.nome": "Andradina",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Luziânia",
    "municipio.nome": "Luziânia",
    "rejeitadas": 6,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Francisco do Sul",
    "municipio.nome": "São Francisco do Sul",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Marataízes",
    "municipio.nome": "Marataízes",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Vicente",
    "municipio.nome": "São Vicente",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guaíra",
    "municipio.nome": "Guaíra",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ibirubá",
    "municipio.nome": "Ibirubá",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Nova Petrópolis",
    "municipio.nome": "Nova Petrópolis",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Nova Mutum",
    "municipio.nome": "Nova Mutum",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cruz Alta",
    "municipio.nome": "Cruz Alta",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
    "rejeitadas": 10,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Pedro",
    "municipio.nome": "São Pedro",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Rio Bonito",
    "municipio.nome": "Rio Bonito",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Macaé",
    "municipio.nome": "Macaé",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jaú",
    "municipio.nome": "Jaú",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itaobim",
    "municipio.nome": "Itaobim",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Serra",
    "municipio.nome": "Serra",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jaboticabal",
    "municipio.nome": "Jaboticabal",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Registro",
    "municipio.nome": "Registro",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Balneário Camboriú",
    "municipio.nome": "Balneário Camboriú",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Marechal Cândido Rondon",
    "municipio.nome": "Marechal Cândido Rondon",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Caetano do Sul",
    "municipio.nome": "São Caetano do Sul",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itumbiara",
    "municipio.nome": "Itumbiara",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bebedouro",
    "municipio.nome": "Bebedouro",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Caçapava",
    "municipio.nome": "Caçapava",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Lauro de Freitas",
    "municipio.nome": "Lauro de Freitas",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ipatinga",
    "municipio.nome": "Ipatinga",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Pinhais",
    "municipio.nome": "Pinhais",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Rio Doce",
    "municipio.nome": "Rio Doce",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Brodowski",
    "municipio.nome": "Brodowski",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Americana",
    "municipio.nome": "Americana",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Tietê",
    "municipio.nome": "Tietê",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Petrópolis",
    "municipio.nome": "Petrópolis",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ilhota",
    "municipio.nome": "Ilhota",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ubá",
    "municipio.nome": "Ubá",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Erechim",
    "municipio.nome": "Erechim",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Anápolis",
    "municipio.nome": "Anápolis",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Timóteo",
    "municipio.nome": "Timóteo",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Coromandel",
    "municipio.nome": "Coromandel",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  }
],
  taxaRejeicaoMunicipio: [
  {
    "facet": "Teresina",
    "municipio.nome": "Teresina",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Dois Irmãos",
    "municipio.nome": "Dois Irmãos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itabaiana",
    "municipio.nome": "Itabaiana",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 14,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 6.6666666666666
  },
  {
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Alegre",
    "municipio.nome": "Alegre",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guaratuba",
    "municipio.nome": "Guaratuba",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Saquarema",
    "municipio.nome": "Saquarema",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Picos",
    "municipio.nome": "Picos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bragança Paulista",
    "municipio.nome": "Bragança Paulista",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Arcos",
    "municipio.nome": "Arcos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Santa Tereza do Oeste",
    "municipio.nome": "Santa Tereza do Oeste",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cabo de Santo Agostinho",
    "municipio.nome": "Cabo de Santo Agostinho",
    "rejeitadas": 13,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Campina Grande",
    "municipio.nome": "Campina Grande",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Santa Maria",
    "municipio.nome": "Santa Maria",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Mateus",
    "municipio.nome": "São Mateus",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Serra Negra",
    "municipio.nome": "Serra Negra",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guararema",
    "municipio.nome": "Guararema",
    "rejeitadas": 30,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cajamar",
    "municipio.nome": "Cajamar",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itaúna",
    "municipio.nome": "Itaúna",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Mateiros",
    "municipio.nome": "Mateiros",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itaboraí",
    "municipio.nome": "Itaboraí",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Suzano",
    "municipio.nome": "Suzano",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Canoas",
    "municipio.nome": "Canoas",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Socorro",
    "municipio.nome": "Socorro",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Palhoça",
    "municipio.nome": "Palhoça",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Camboriú",
    "municipio.nome": "Camboriú",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Bento do Sapucaí",
    "municipio.nome": "São Bento do Sapucaí",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Sapucaia do Sul",
    "municipio.nome": "Sapucaia do Sul",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bom Jesus do Galho",
    "municipio.nome": "Bom Jesus do Galho",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guarapari",
    "municipio.nome": "Guarapari",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Terra Roxa",
    "municipio.nome": "Terra Roxa",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Catanduva",
    "municipio.nome": "Catanduva",
    "rejeitadas": 32,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Pedro Leopoldo",
    "municipio.nome": "Pedro Leopoldo",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Correntina",
    "municipio.nome": "Correntina",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Indaial",
    "municipio.nome": "Indaial",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Barão de Cocais",
    "municipio.nome": "Barão de Cocais",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Arcoverde",
    "municipio.nome": "Arcoverde",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Franca",
    "municipio.nome": "Franca",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Mata de São João",
    "municipio.nome": "Mata de São João",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 9,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Belford Roxo",
    "municipio.nome": "Belford Roxo",
    "rejeitadas": 56,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ibiúna",
    "municipio.nome": "Ibiúna",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Andradina",
    "municipio.nome": "Andradina",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Luziânia",
    "municipio.nome": "Luziânia",
    "rejeitadas": 6,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Francisco do Sul",
    "municipio.nome": "São Francisco do Sul",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Marataízes",
    "municipio.nome": "Marataízes",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Vicente",
    "municipio.nome": "São Vicente",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guaíra",
    "municipio.nome": "Guaíra",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ibirubá",
    "municipio.nome": "Ibirubá",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Nova Petrópolis",
    "municipio.nome": "Nova Petrópolis",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Nova Mutum",
    "municipio.nome": "Nova Mutum",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cruz Alta",
    "municipio.nome": "Cruz Alta",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
    "rejeitadas": 10,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Pedro",
    "municipio.nome": "São Pedro",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Rio Bonito",
    "municipio.nome": "Rio Bonito",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Macaé",
    "municipio.nome": "Macaé",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jaú",
    "municipio.nome": "Jaú",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itaobim",
    "municipio.nome": "Itaobim",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Serra",
    "municipio.nome": "Serra",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jaboticabal",
    "municipio.nome": "Jaboticabal",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Registro",
    "municipio.nome": "Registro",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Balneário Camboriú",
    "municipio.nome": "Balneário Camboriú",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Marechal Cândido Rondon",
    "municipio.nome": "Marechal Cândido Rondon",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Caetano do Sul",
    "municipio.nome": "São Caetano do Sul",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itumbiara",
    "municipio.nome": "Itumbiara",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bebedouro",
    "municipio.nome": "Bebedouro",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Caçapava",
    "municipio.nome": "Caçapava",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Lauro de Freitas",
    "municipio.nome": "Lauro de Freitas",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ipatinga",
    "municipio.nome": "Ipatinga",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Pinhais",
    "municipio.nome": "Pinhais",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Rio Doce",
    "municipio.nome": "Rio Doce",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Brodowski",
    "municipio.nome": "Brodowski",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Americana",
    "municipio.nome": "Americana",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Tietê",
    "municipio.nome": "Tietê",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Petrópolis",
    "municipio.nome": "Petrópolis",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ilhota",
    "municipio.nome": "Ilhota",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Erechim",
    "municipio.nome": "Erechim",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ubá",
    "municipio.nome": "Ubá",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Anápolis",
    "municipio.nome": "Anápolis",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Timóteo",
    "municipio.nome": "Timóteo",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Coromandel",
    "municipio.nome": "Coromandel",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 8,
    "taxa_rejeicao": 88.8888888888888,
    "taxa_sucesso": 11.1111111111111
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 110,
    "taxa_rejeicao": 87.30158730158729,
    "taxa_sucesso": 12.6984126984126
  },
  {
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
    "rejeitadas": 5,
    "taxa_rejeicao": 83.3333333333333,
    "taxa_sucesso": 16.6666666666666
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 10,
    "taxa_rejeicao": 76.92307692307689,
    "taxa_sucesso": 23.076923076923
  },
  {
    "facet": "Pelotas",
    "municipio.nome": "Pelotas",
    "rejeitadas": 3,
    "taxa_rejeicao": 75,
    "taxa_sucesso": 25
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 5,
    "taxa_rejeicao": 71.4285714285714,
    "taxa_sucesso": 28.5714285714285
  },
  {
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 9,
    "taxa_rejeicao": 69.2307692307692,
    "taxa_sucesso": 30.7692307692307
  },
  {
    "facet": "Alto Paraíso de Goiás",
    "municipio.nome": "Alto Paraíso de Goiás",
    "rejeitadas": 10,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Ourinhos",
    "municipio.nome": "Ourinhos",
    "rejeitadas": 9,
    "taxa_rejeicao": 56.25,
    "taxa_sucesso": 43.75
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 2,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Presidente Prudente",
    "municipio.nome": "Presidente Prudente",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Lagoa Santa",
    "municipio.nome": "Lagoa Santa",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 3,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
    "rejeitadas": 8,
    "taxa_rejeicao": 42.105263157894704,
    "taxa_sucesso": 57.8947368421052
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 4,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 2,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Natal",
    "municipio.nome": "Natal",
    "rejeitadas": 4,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 4,
    "taxa_rejeicao": 28.5714285714285,
    "taxa_sucesso": 71.4285714285714
  },
  {
    "facet": "Nao informado",
    "municipio.nome": "Nao informado",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Francisco Beltrão",
    "municipio.nome": "Francisco Beltrão",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 10,
    "taxa_rejeicao": 19.2307692307692,
    "taxa_sucesso": 80.7692307692307
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 4,
    "taxa_rejeicao": 19.047619047619,
    "taxa_sucesso": 80.95238095238089
  },
  {
    "facet": "Jundiaí",
    "municipio.nome": "Jundiaí",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Joinville",
    "municipio.nome": "Joinville",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Videira",
    "municipio.nome": "Videira",
    "rejeitadas": 2,
    "taxa_rejeicao": 15.3846153846153,
    "taxa_sucesso": 84.61538461538461
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 3,
    "taxa_rejeicao": 14.0495867768595,
    "taxa_sucesso": 0
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 4,
    "taxa_rejeicao": 13.3333333333333,
    "taxa_sucesso": 86.66666666666659
  },
  {
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
    "rejeitadas": 8,
    "taxa_rejeicao": 11.5942028985507,
    "taxa_sucesso": 88.4057971014492
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 14,
    "taxa_rejeicao": 11.4754098360655,
    "taxa_sucesso": 88.5245901639344
  },
  {
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 1,
    "taxa_rejeicao": 10,
    "taxa_sucesso": 90
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 3,
    "taxa_rejeicao": 9.6774193548387,
    "taxa_sucesso": 90.3225806451612
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 22,
    "taxa_rejeicao": 7.942238267148,
    "taxa_sucesso": 92.0577617328519
  },
  {
    "facet": "Salvador",
    "municipio.nome": "Salvador",
    "rejeitadas": 68,
    "taxa_rejeicao": 5.9181897302001,
    "taxa_sucesso": 94.0818102697998
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 90,
    "taxa_rejeicao": 5.4978619425778,
    "taxa_sucesso": 94.5021380574221
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 2,
    "taxa_rejeicao": 4.6511627906976,
    "taxa_sucesso": 95.3488372093023
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 3,
    "taxa_rejeicao": 3.7037037037037,
    "taxa_sucesso": 96.29629629629619
  },
  {
    "facet": "Olímpia",
    "municipio.nome": "Olímpia",
    "rejeitadas": 2,
    "taxa_rejeicao": 2.9411764705882,
    "taxa_sucesso": 97.0588235294117
  },
  {
    "facet": "Itajubá",
    "municipio.nome": "Itajubá",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.9411764705882,
    "taxa_sucesso": 97.0588235294117
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 11,
    "taxa_rejeicao": 2.7431421446384,
    "taxa_sucesso": 97.2568578553615
  },
  {
    "facet": "Taubaté",
    "municipio.nome": "Taubaté",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.5,
    "taxa_sucesso": 97.5
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.3255813953488,
    "taxa_sucesso": 97.67441860465111
  },
  {
    "facet": "Nova Lima",
    "municipio.nome": "Nova Lima",
    "rejeitadas": 2,
    "taxa_rejeicao": 0.5747126436781,
    "taxa_sucesso": 99.42528735632179
  },
  {
    "facet": "Tatuí",
    "municipio.nome": "Tatuí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Nova Iguaçu",
    "municipio.nome": "Nova Iguaçu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Campo Belo",
    "municipio.nome": "Campo Belo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Mandaguaçu",
    "municipio.nome": "Mandaguaçu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Barra do Piraí",
    "municipio.nome": "Barra do Piraí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Porangatu",
    "municipio.nome": "Porangatu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Caxias do Sul",
    "municipio.nome": "Caxias do Sul",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cachoeirinha",
    "municipio.nome": "Cachoeirinha",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cordeirópolis",
    "municipio.nome": "Cordeirópolis",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Nova Serrana",
    "municipio.nome": "Nova Serrana",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Lavras",
    "municipio.nome": "Lavras",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Bom Jesus do Itabapoana",
    "municipio.nome": "Bom Jesus do Itabapoana",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Nanuque",
    "municipio.nome": "Nanuque",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Londrina",
    "municipio.nome": "Londrina",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Tuparendi",
    "municipio.nome": "Tuparendi",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jaguaruna",
    "municipio.nome": "Jaguaruna",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jaboatão dos Guararapes",
    "municipio.nome": "Jaboatão dos Guararapes",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Dois Vizinhos",
    "municipio.nome": "Dois Vizinhos",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jaguariúna",
    "municipio.nome": "Jaguariúna",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Sapiranga",
    "municipio.nome": "Sapiranga",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Votuporanga",
    "municipio.nome": "Votuporanga",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Dourados",
    "municipio.nome": "Dourados",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Descalvado",
    "municipio.nome": "Descalvado",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Matias Barbosa",
    "municipio.nome": "Matias Barbosa",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Botucatu",
    "municipio.nome": "Botucatu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Tacaratu",
    "municipio.nome": "Tacaratu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Assis",
    "municipio.nome": "Assis",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Sumaré",
    "municipio.nome": "Sumaré",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Camaquã",
    "municipio.nome": "Camaquã",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itapecerica",
    "municipio.nome": "Itapecerica",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "EXTERIOR",
    "municipio.nome": "EXTERIOR",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Conceição do Coité",
    "municipio.nome": "Conceição do Coité",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Garopaba",
    "municipio.nome": "Garopaba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Biguaçu",
    "municipio.nome": "Biguaçu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jacareí",
    "municipio.nome": "Jacareí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Gravataí",
    "municipio.nome": "Gravataí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Três de Maio",
    "municipio.nome": "Três de Maio",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Luís Eduardo Magalhães",
    "municipio.nome": "Luís Eduardo Magalhães",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Nova Friburgo",
    "municipio.nome": "Nova Friburgo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Taquara",
    "municipio.nome": "Taquara",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Panambi",
    "municipio.nome": "Panambi",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pirassununga",
    "municipio.nome": "Pirassununga",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Indaiatuba",
    "municipio.nome": "Indaiatuba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Terra de Areia",
    "municipio.nome": "Terra de Areia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Porto Feliz",
    "municipio.nome": "Porto Feliz",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pariquera-Açu",
    "municipio.nome": "Pariquera-Açu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Colatina",
    "municipio.nome": "Colatina",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Xangri-lá",
    "municipio.nome": "Xangri-lá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Sorocaba",
    "municipio.nome": "Sorocaba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São José dos Pinhais",
    "municipio.nome": "São José dos Pinhais",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Palmas",
    "municipio.nome": "Palmas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Campo Grande",
    "municipio.nome": "Campo Grande",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Unaí",
    "municipio.nome": "Unaí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Carlos",
    "municipio.nome": "São Carlos",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Juquitiba",
    "municipio.nome": "Juquitiba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Paranapanema",
    "municipio.nome": "Paranapanema",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guapimirim",
    "municipio.nome": "Guapimirim",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Teresa",
    "municipio.nome": "Santa Teresa",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jales",
    "municipio.nome": "Jales",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pará de Minas",
    "municipio.nome": "Pará de Minas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itapetininga",
    "municipio.nome": "Itapetininga",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Arujá",
    "municipio.nome": "Arujá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Canela",
    "municipio.nome": "Canela",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Governador Valadares",
    "municipio.nome": "Governador Valadares",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Gramado",
    "municipio.nome": "Gramado",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itajaí",
    "municipio.nome": "Itajaí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Naviraí",
    "municipio.nome": "Naviraí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Formiga",
    "municipio.nome": "Formiga",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Parnamirim",
    "municipio.nome": "Parnamirim",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Morro Reuter",
    "municipio.nome": "Morro Reuter",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Roque",
    "municipio.nome": "São Roque",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Volta Redonda",
    "municipio.nome": "Volta Redonda",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santo Antônio da Patrulha",
    "municipio.nome": "Santo Antônio da Patrulha",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cabo Frio",
    "municipio.nome": "Cabo Frio",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Esteio",
    "municipio.nome": "Esteio",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Rio das Ostras",
    "municipio.nome": "Rio das Ostras",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Osasco",
    "municipio.nome": "Osasco",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Cruz do Sul",
    "municipio.nome": "Santa Cruz do Sul",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Toledo",
    "municipio.nome": "Toledo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santo Antônio de Jesus",
    "municipio.nome": "Santo Antônio de Jesus",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Sete Lagoas",
    "municipio.nome": "Sete Lagoas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Serranópolis do Iguaçu",
    "municipio.nome": "Serranópolis do Iguaçu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guaporé",
    "municipio.nome": "Guaporé",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Não informado",
    "municipio.nome": "Não informado",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Araranguá",
    "municipio.nome": "Araranguá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Joaquim da Barra",
    "municipio.nome": "São Joaquim da Barra",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Campos dos Goytacazes",
    "municipio.nome": "Campos dos Goytacazes",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Leopoldo",
    "municipio.nome": "São Leopoldo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Capão da Canoa",
    "municipio.nome": "Capão da Canoa",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Lourenço do Sul",
    "municipio.nome": "São Lourenço do Sul",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Sarandi",
    "municipio.nome": "Sarandi",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cataguases",
    "municipio.nome": "Cataguases",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pindamonhangaba",
    "municipio.nome": "Pindamonhangaba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Umuarama",
    "municipio.nome": "Umuarama",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Porto Velho",
    "municipio.nome": "Porto Velho",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Leopoldina",
    "municipio.nome": "Leopoldina",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Campinas",
    "municipio.nome": "Campinas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guanambi",
    "municipio.nome": "Guanambi",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Marília",
    "municipio.nome": "Marília",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Garibaldi",
    "municipio.nome": "Garibaldi",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Mogi das Cruzes",
    "municipio.nome": "Mogi das Cruzes",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Campo Bom",
    "municipio.nome": "Campo Bom",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Luís",
    "municipio.nome": "São Luís",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Manjeri",
    "municipio.nome": "Manjeri",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Diadema",
    "municipio.nome": "Diadema",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Tijucas",
    "municipio.nome": "Tijucas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Orlândia",
    "municipio.nome": "Orlândia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Limeira",
    "municipio.nome": "Limeira",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Maricá",
    "municipio.nome": "Maricá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Tubarão",
    "municipio.nome": "Tubarão",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Lages",
    "municipio.nome": "Lages",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cristais",
    "municipio.nome": "Cristais",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Vinhedo",
    "municipio.nome": "Vinhedo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Campo Mourão",
    "municipio.nome": "Campo Mourão",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "João Monlevade",
    "municipio.nome": "João Monlevade",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Caicó",
    "municipio.nome": "Caicó",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ipirá",
    "municipio.nome": "Ipirá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Farroupilha",
    "municipio.nome": "Farroupilha",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Caldas Novas",
    "municipio.nome": "Caldas Novas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Bagé",
    "municipio.nome": "Bagé",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Foz do Iguaçu",
    "municipio.nome": "Foz do Iguaçu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Mariana",
    "municipio.nome": "Mariana",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Siqueira Campos",
    "municipio.nome": "Siqueira Campos",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ariquemes",
    "municipio.nome": "Ariquemes",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Maringá",
    "municipio.nome": "Maringá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Divinópolis",
    "municipio.nome": "Divinópolis",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Boituva",
    "municipio.nome": "Boituva",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Varginha",
    "municipio.nome": "Varginha",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Maravilha",
    "municipio.nome": "Maravilha",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ponte Nova",
    "municipio.nome": "Ponte Nova",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Lourenço do Oeste",
    "municipio.nome": "São Lourenço do Oeste",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Betim",
    "municipio.nome": "Betim",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Araçatuba",
    "municipio.nome": "Araçatuba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Paraibuna",
    "municipio.nome": "Paraibuna",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itapema",
    "municipio.nome": "Itapema",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Araras",
    "municipio.nome": "Araras",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jaraguá do Sul",
    "municipio.nome": "Jaraguá do Sul",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Teutônia",
    "municipio.nome": "Teutônia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santos",
    "municipio.nome": "Santos",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Bárbara d'Oeste",
    "municipio.nome": "Santa Bárbara d'Oeste",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guarulhos",
    "municipio.nome": "Guarulhos",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Medianeira",
    "municipio.nome": "Medianeira",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Hortolândia",
    "municipio.nome": "Hortolândia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santana",
    "municipio.nome": "Santana",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Montes Claros",
    "municipio.nome": "Montes Claros",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "João Pessoa",
    "municipio.nome": "João Pessoa",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cascavel",
    "municipio.nome": "Cascavel",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Lajeado",
    "municipio.nome": "Lajeado",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Viçosa",
    "municipio.nome": "Viçosa",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guarapuava",
    "municipio.nome": "Guarapuava",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Rita do Passa Quatro",
    "municipio.nome": "Santa Rita do Passa Quatro",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Bento Gonçalves",
    "municipio.nome": "Bento Gonçalves",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Salgueiro",
    "municipio.nome": "Salgueiro",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itaperuna",
    "municipio.nome": "Itaperuna",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Sobral",
    "municipio.nome": "Sobral",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Vargem Grande do Sul",
    "municipio.nome": "Vargem Grande do Sul",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Criciúma",
    "municipio.nome": "Criciúma",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jataí",
    "municipio.nome": "Jataí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Olinda",
    "municipio.nome": "Olinda",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Alfredo Chaves",
    "municipio.nome": "Alfredo Chaves",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Araraquara",
    "municipio.nome": "Araraquara",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Tangará",
    "municipio.nome": "Tangará",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Lorena",
    "municipio.nome": "Lorena",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Camaçari",
    "municipio.nome": "Camaçari",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Atibaia",
    "municipio.nome": "Atibaia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Niterói",
    "municipio.nome": "Niterói",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pontes e Lacerda",
    "municipio.nome": "Pontes e Lacerda",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Birigui",
    "municipio.nome": "Birigui",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cotia",
    "municipio.nome": "Cotia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Chapecó",
    "municipio.nome": "Chapecó",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Nova Andradina",
    "municipio.nome": "Nova Andradina",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Bauru",
    "municipio.nome": "Bauru",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Uberaba",
    "municipio.nome": "Uberaba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Cruz das Palmeiras",
    "municipio.nome": "Santa Cruz das Palmeiras",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São José",
    "municipio.nome": "São José",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Feira de Santana",
    "municipio.nome": "Feira de Santana",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Urussanga",
    "municipio.nome": "Urussanga",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Timbó",
    "municipio.nome": "Timbó",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itabuna",
    "municipio.nome": "Itabuna",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Contagem",
    "municipio.nome": "Contagem",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Manaus",
    "municipio.nome": "Manaus",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Mendes",
    "municipio.nome": "Mendes",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Rio Grande",
    "municipio.nome": "Rio Grande",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Vitória da Conquista",
    "municipio.nome": "Vitória da Conquista",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Içara",
    "municipio.nome": "Içara",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ji-Paraná",
    "municipio.nome": "Ji-Paraná",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itatiba",
    "municipio.nome": "Itatiba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Piúma",
    "municipio.nome": "Piúma",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Linhares",
    "municipio.nome": "Linhares",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Eusébio",
    "municipio.nome": "Eusébio",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Colombo",
    "municipio.nome": "Colombo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Caetité",
    "municipio.nome": "Caetité",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Mauá",
    "municipio.nome": "Mauá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Macapá",
    "municipio.nome": "Macapá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Boa Vista",
    "municipio.nome": "Boa Vista",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Assis Chateaubriand",
    "municipio.nome": "Assis Chateaubriand",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Rita do Sapucaí",
    "municipio.nome": "Santa Rita do Sapucaí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ibitinga",
    "municipio.nome": "Ibitinga",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Imbituba",
    "municipio.nome": "Imbituba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  }
],
  taxaTimeseries: [
  {
    "beginTimeSeconds": 1785993960,
    "endTimeSeconds": 1785995160,
    "rejeicao": 29.08946782020518,
    "sucesso": 70.9105321797947
  },
  {
    "beginTimeSeconds": 1785995160,
    "endTimeSeconds": 1785996360,
    "rejeicao": 29.10230800310944,
    "sucesso": 70.89769199689057
  },
  {
    "beginTimeSeconds": 1785996360,
    "endTimeSeconds": 1785997560,
    "rejeicao": 28.84627262417827,
    "sucesso": 71.15372737582167
  },
  {
    "beginTimeSeconds": 1785997560,
    "endTimeSeconds": 1785998760,
    "rejeicao": 28.560856733331224,
    "sucesso": 71.43914326666884
  },
  {
    "beginTimeSeconds": 1785998760,
    "endTimeSeconds": 1785999960,
    "rejeicao": 27.934520484839904,
    "sucesso": 72.06547951516019
  },
  {
    "beginTimeSeconds": 1785999960,
    "endTimeSeconds": 1786001160,
    "rejeicao": 27.95488536640329,
    "sucesso": 72.04511463359675
  },
  {
    "beginTimeSeconds": 1786001160,
    "endTimeSeconds": 1786002360,
    "rejeicao": 28.014506555612442,
    "sucesso": 71.98549344438753
  },
  {
    "beginTimeSeconds": 1786002360,
    "endTimeSeconds": 1786003560,
    "rejeicao": 28.135628912360037,
    "sucesso": 71.86437108763998
  },
  {
    "beginTimeSeconds": 1786003560,
    "endTimeSeconds": 1786004760,
    "rejeicao": 28.972884583560102,
    "sucesso": 71.02711541643983
  },
  {
    "beginTimeSeconds": 1786004760,
    "endTimeSeconds": 1786005960,
    "rejeicao": 29.261087470534896,
    "sucesso": 70.73891252946508
  },
  {
    "beginTimeSeconds": 1786005960,
    "endTimeSeconds": 1786007160,
    "rejeicao": 29.482515694328747,
    "sucesso": 70.51748430567125
  },
  {
    "beginTimeSeconds": 1786007160,
    "endTimeSeconds": 1786008360,
    "rejeicao": 29.607067805536765,
    "sucesso": 70.39293219446324
  }
],
  taxaSucessoMunicipioTs: [{"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1785993960, "endTimeSeconds": 1785995160, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1785995160, "endTimeSeconds": 1785996360, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1785996360, "endTimeSeconds": 1785997560, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1785997560, "endTimeSeconds": 1785998760, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1785998760, "endTimeSeconds": 1785999960, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1785999960, "endTimeSeconds": 1786001160, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786001160, "endTimeSeconds": 1786002360, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786002360, "endTimeSeconds": 1786003560, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786003560, "endTimeSeconds": 1786004760, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786004760, "endTimeSeconds": 1786005960, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786005960, "endTimeSeconds": 1786007160, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786007160, "endTimeSeconds": 1786008360, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1785993960, "endTimeSeconds": 1785995160, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1785995160, "endTimeSeconds": 1785996360, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1785996360, "endTimeSeconds": 1785997560, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1785997560, "endTimeSeconds": 1785998760, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1785998760, "endTimeSeconds": 1785999960, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1785999960, "endTimeSeconds": 1786001160, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786001160, "endTimeSeconds": 1786002360, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786002360, "endTimeSeconds": 1786003560, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786003560, "endTimeSeconds": 1786004760, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786004760, "endTimeSeconds": 1786005960, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786005960, "endTimeSeconds": 1786007160, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786007160, "endTimeSeconds": 1786008360, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1785993960, "endTimeSeconds": 1785995160, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1785995160, "endTimeSeconds": 1785996360, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1785996360, "endTimeSeconds": 1785997560, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1785997560, "endTimeSeconds": 1785998760, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1785998760, "endTimeSeconds": 1785999960, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1785999960, "endTimeSeconds": 1786001160, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1786001160, "endTimeSeconds": 1786002360, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1786002360, "endTimeSeconds": 1786003560, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1786003560, "endTimeSeconds": 1786004760, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1786004760, "endTimeSeconds": 1786005960, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1786005960, "endTimeSeconds": 1786007160, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1786007160, "endTimeSeconds": 1786008360, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1785993960, "endTimeSeconds": 1785995160, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1785995160, "endTimeSeconds": 1785996360, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1785996360, "endTimeSeconds": 1785997560, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1785997560, "endTimeSeconds": 1785998760, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1785998760, "endTimeSeconds": 1785999960, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1785999960, "endTimeSeconds": 1786001160, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786001160, "endTimeSeconds": 1786002360, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786002360, "endTimeSeconds": 1786003560, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786003560, "endTimeSeconds": 1786004760, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786004760, "endTimeSeconds": 1786005960, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786005960, "endTimeSeconds": 1786007160, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786007160, "endTimeSeconds": 1786008360, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1785993960, "endTimeSeconds": 1785995160, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1785995160, "endTimeSeconds": 1785996360, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1785996360, "endTimeSeconds": 1785997560, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1785997560, "endTimeSeconds": 1785998760, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1785998760, "endTimeSeconds": 1785999960, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1785999960, "endTimeSeconds": 1786001160, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1786001160, "endTimeSeconds": 1786002360, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1786002360, "endTimeSeconds": 1786003560, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1786003560, "endTimeSeconds": 1786004760, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1786004760, "endTimeSeconds": 1786005960, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1786005960, "endTimeSeconds": 1786007160, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1786007160, "endTimeSeconds": 1786008360, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1785993960, "endTimeSeconds": 1785995160, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1785995160, "endTimeSeconds": 1785996360, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1785996360, "endTimeSeconds": 1785997560, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1785997560, "endTimeSeconds": 1785998760, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1785998760, "endTimeSeconds": 1785999960, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1785999960, "endTimeSeconds": 1786001160, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1786001160, "endTimeSeconds": 1786002360, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1786002360, "endTimeSeconds": 1786003560, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1786003560, "endTimeSeconds": 1786004760, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1786004760, "endTimeSeconds": 1786005960, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1786005960, "endTimeSeconds": 1786007160, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1786007160, "endTimeSeconds": 1786008360, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1785993960, "endTimeSeconds": 1785995160, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1785995160, "endTimeSeconds": 1785996360, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1785996360, "endTimeSeconds": 1785997560, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1785997560, "endTimeSeconds": 1785998760, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1785998760, "endTimeSeconds": 1785999960, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1785999960, "endTimeSeconds": 1786001160, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786001160, "endTimeSeconds": 1786002360, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786002360, "endTimeSeconds": 1786003560, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786003560, "endTimeSeconds": 1786004760, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786004760, "endTimeSeconds": 1786005960, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786005960, "endTimeSeconds": 1786007160, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786007160, "endTimeSeconds": 1786008360, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1785993960, "endTimeSeconds": 1785995160, "municipio.nome": "Sobral", "sucesso": null}, {"facet": "Sobral", "beginTimeSeconds": 1785995160, "endTimeSeconds": 1785996360, "municipio.nome": "Sobral", "sucesso": null}, {"facet": "Sobral", "beginTimeSeconds": 1785996360, "endTimeSeconds": 1785997560, "municipio.nome": "Sobral", "sucesso": null}, {"facet": "Sobral", "beginTimeSeconds": 1785997560, "endTimeSeconds": 1785998760, "municipio.nome": "Sobral", "sucesso": null}, {"facet": "Sobral", "beginTimeSeconds": 1785998760, "endTimeSeconds": 1785999960, "municipio.nome": "Sobral", "sucesso": null}, {"facet": "Sobral", "beginTimeSeconds": 1785999960, "endTimeSeconds": 1786001160, "municipio.nome": "Sobral", "sucesso": null}, {"facet": "Sobral", "beginTimeSeconds": 1786001160, "endTimeSeconds": 1786002360, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786002360, "endTimeSeconds": 1786003560, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786003560, "endTimeSeconds": 1786004760, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786004760, "endTimeSeconds": 1786005960, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786005960, "endTimeSeconds": 1786007160, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786007160, "endTimeSeconds": 1786008360, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1785993960, "endTimeSeconds": 1785995160, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1785995160, "endTimeSeconds": 1785996360, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1785996360, "endTimeSeconds": 1785997560, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1785997560, "endTimeSeconds": 1785998760, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1785998760, "endTimeSeconds": 1785999960, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1785999960, "endTimeSeconds": 1786001160, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1786001160, "endTimeSeconds": 1786002360, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1786002360, "endTimeSeconds": 1786003560, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1786003560, "endTimeSeconds": 1786004760, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1786004760, "endTimeSeconds": 1786005960, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1786005960, "endTimeSeconds": 1786007160, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1786007160, "endTimeSeconds": 1786008360, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1785993960, "endTimeSeconds": 1785995160, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1785995160, "endTimeSeconds": 1785996360, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1785996360, "endTimeSeconds": 1785997560, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1785997560, "endTimeSeconds": 1785998760, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1785998760, "endTimeSeconds": 1785999960, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1785999960, "endTimeSeconds": 1786001160, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1786001160, "endTimeSeconds": 1786002360, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1786002360, "endTimeSeconds": 1786003560, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1786003560, "endTimeSeconds": 1786004760, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1786004760, "endTimeSeconds": 1786005960, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1786005960, "endTimeSeconds": 1786007160, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1786007160, "endTimeSeconds": 1786008360, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1785993960, "endTimeSeconds": 1785995160, "municipio.nome": "Barra do Pira\u00ed", "sucesso": 100.0}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1785995160, "endTimeSeconds": 1785996360, "municipio.nome": "Barra do Pira\u00ed", "sucesso": 100.0}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1785996360, "endTimeSeconds": 1785997560, "municipio.nome": "Barra do Pira\u00ed", "sucesso": 100.0}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1785997560, "endTimeSeconds": 1785998760, "municipio.nome": "Barra do Pira\u00ed", "sucesso": 100.0}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1785998760, "endTimeSeconds": 1785999960, "municipio.nome": "Barra do Pira\u00ed", "sucesso": 100.0}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1785999960, "endTimeSeconds": 1786001160, "municipio.nome": "Barra do Pira\u00ed", "sucesso": 100.0}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1786001160, "endTimeSeconds": 1786002360, "municipio.nome": "Barra do Pira\u00ed", "sucesso": 100.0}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1786002360, "endTimeSeconds": 1786003560, "municipio.nome": "Barra do Pira\u00ed", "sucesso": 100.0}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1786003560, "endTimeSeconds": 1786004760, "municipio.nome": "Barra do Pira\u00ed", "sucesso": 100.0}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1786004760, "endTimeSeconds": 1786005960, "municipio.nome": "Barra do Pira\u00ed", "sucesso": 100.0}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1786005960, "endTimeSeconds": 1786007160, "municipio.nome": "Barra do Pira\u00ed", "sucesso": 100.0}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1786007160, "endTimeSeconds": 1786008360, "municipio.nome": "Barra do Pira\u00ed", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1785993960, "endTimeSeconds": 1785995160, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1785995160, "endTimeSeconds": 1785996360, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1785996360, "endTimeSeconds": 1785997560, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1785997560, "endTimeSeconds": 1785998760, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1785998760, "endTimeSeconds": 1785999960, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1785999960, "endTimeSeconds": 1786001160, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1786001160, "endTimeSeconds": 1786002360, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1786002360, "endTimeSeconds": 1786003560, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1786003560, "endTimeSeconds": 1786004760, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1786004760, "endTimeSeconds": 1786005960, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1786005960, "endTimeSeconds": 1786007160, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1786007160, "endTimeSeconds": 1786008360, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1785993960, "endTimeSeconds": 1785995160, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1785995160, "endTimeSeconds": 1785996360, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1785996360, "endTimeSeconds": 1785997560, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1785997560, "endTimeSeconds": 1785998760, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1785998760, "endTimeSeconds": 1785999960, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1785999960, "endTimeSeconds": 1786001160, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786001160, "endTimeSeconds": 1786002360, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786002360, "endTimeSeconds": 1786003560, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786003560, "endTimeSeconds": 1786004760, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786004760, "endTimeSeconds": 1786005960, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786005960, "endTimeSeconds": 1786007160, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786007160, "endTimeSeconds": 1786008360, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1785993960, "endTimeSeconds": 1785995160, "municipio.nome": "Aruj\u00e1", "sucesso": 100.0}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1785995160, "endTimeSeconds": 1785996360, "municipio.nome": "Aruj\u00e1", "sucesso": 100.0}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1785996360, "endTimeSeconds": 1785997560, "municipio.nome": "Aruj\u00e1", "sucesso": 100.0}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1785997560, "endTimeSeconds": 1785998760, "municipio.nome": "Aruj\u00e1", "sucesso": 100.0}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1785998760, "endTimeSeconds": 1785999960, "municipio.nome": "Aruj\u00e1", "sucesso": 100.0}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1785999960, "endTimeSeconds": 1786001160, "municipio.nome": "Aruj\u00e1", "sucesso": 100.0}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1786001160, "endTimeSeconds": 1786002360, "municipio.nome": "Aruj\u00e1", "sucesso": 100.0}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1786002360, "endTimeSeconds": 1786003560, "municipio.nome": "Aruj\u00e1", "sucesso": 100.0}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1786003560, "endTimeSeconds": 1786004760, "municipio.nome": "Aruj\u00e1", "sucesso": 100.0}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1786004760, "endTimeSeconds": 1786005960, "municipio.nome": "Aruj\u00e1", "sucesso": 100.0}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1786005960, "endTimeSeconds": 1786007160, "municipio.nome": "Aruj\u00e1", "sucesso": 100.0}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1786007160, "endTimeSeconds": 1786008360, "municipio.nome": "Aruj\u00e1", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1785993960, "endTimeSeconds": 1785995160, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1785995160, "endTimeSeconds": 1785996360, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1785996360, "endTimeSeconds": 1785997560, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1785997560, "endTimeSeconds": 1785998760, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1785998760, "endTimeSeconds": 1785999960, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1785999960, "endTimeSeconds": 1786001160, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1786001160, "endTimeSeconds": 1786002360, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1786002360, "endTimeSeconds": 1786003560, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1786003560, "endTimeSeconds": 1786004760, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1786004760, "endTimeSeconds": 1786005960, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1786005960, "endTimeSeconds": 1786007160, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1786007160, "endTimeSeconds": 1786008360, "municipio.nome": "Mariana", "sucesso": 100.0}]
};
