// Gerado automaticamente pelo workflow monitoramento-nfe.yml em 01/07/2026 16:22 (Brasilia)
// NAO EDITAR MANUALMENTE
var monitoramentoNfeData = {
  geradoEm: "01/07/2026 16:22",
  travadasPorMunicipio: [
  {
    "facet": "Corbélia",
    "latest.nfe.stuck_in_intermediate_status.count": 400,
    "nfe.municipio_servico": "Corbélia"
  },
  {
    "facet": "Salvador",
    "latest.nfe.stuck_in_intermediate_status.count": 2,
    "nfe.municipio_servico": "Salvador"
  },
  {
    "facet": "Itapipoca",
    "latest.nfe.stuck_in_intermediate_status.count": 2,
    "nfe.municipio_servico": "Itapipoca"
  },
  {
    "facet": "Guarulhos",
    "latest.nfe.stuck_in_intermediate_status.count": 2,
    "nfe.municipio_servico": "Guarulhos"
  },
  {
    "facet": "Naviraí",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Naviraí"
  },
  {
    "facet": "Jaraguá do Sul",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Jaraguá do Sul"
  },
  {
    "facet": "Eusébio",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Eusébio"
  },
  {
    "facet": "Rio Grande",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Rio Grande"
  },
  {
    "facet": "Tuparendi",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Tuparendi"
  },
  {
    "facet": "Campinas",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Campinas"
  }
],
  tempoMaxProcessamento: [
  {
    "facet": "Rio Grande",
    "max.nfe.processing_time.minutes": 57,
    "nfe.municipio_servico": "Rio Grande"
  },
  {
    "facet": "Lages",
    "max.nfe.processing_time.minutes": 49,
    "nfe.municipio_servico": "Lages"
  },
  {
    "facet": "Balneário Camboriú",
    "max.nfe.processing_time.minutes": 45,
    "nfe.municipio_servico": "Balneário Camboriú"
  },
  {
    "facet": "",
    "max.nfe.processing_time.minutes": 38,
    "nfe.municipio_servico": ""
  },
  {
    "facet": "Jaraguá do Sul",
    "max.nfe.processing_time.minutes": 34,
    "nfe.municipio_servico": "Jaraguá do Sul"
  },
  {
    "facet": "Rio Doce",
    "max.nfe.processing_time.minutes": 27,
    "nfe.municipio_servico": "Rio Doce"
  },
  {
    "facet": "Novo Hamburgo",
    "max.nfe.processing_time.minutes": 26,
    "nfe.municipio_servico": "Novo Hamburgo"
  },
  {
    "facet": "Barueri",
    "max.nfe.processing_time.minutes": 25,
    "nfe.municipio_servico": "Barueri"
  },
  {
    "facet": "Salvador",
    "max.nfe.processing_time.minutes": 25,
    "nfe.municipio_servico": "Salvador"
  },
  {
    "facet": "São José de Ribamar",
    "max.nfe.processing_time.minutes": 24,
    "nfe.municipio_servico": "São José de Ribamar"
  }
],
  travadasPorMotivo: [
  {
    "facet": "",
    "latest.nfe.stuck_in_intermediate_status.count": 2,
    "nfe.motivo_status": ""
  }
],
  tempoPorStatus: [
  {
    "average.nfe.processing_time.minutes": 8.113166485310119,
    "facet": "Cancelada",
    "nfe.status": "Cancelada"
  },
  {
    "average.nfe.processing_time.minutes": 1.4520492630728852,
    "facet": "Autorizada",
    "nfe.status": "Autorizada"
  },
  {
    "average.nfe.processing_time.minutes": 1.369822774894742,
    "facet": "Negada",
    "nfe.status": "Negada"
  }
],
  tempoPorStatusDetalhe: [
  {
    "facet": [
      "Cancelada",
      "CanceladaAguardandoAtualizacaoPDF"
    ],
    "max_min": 38,
    "media_min": 8.113166485310119,
    "p95_min": {
      "95": 38
    }
  },
  {
    "facet": [
      "Negada",
      "SolicitandoAutorizacao"
    ],
    "max_min": 8,
    "media_min": 8,
    "p95_min": {
      "95": 8
    }
  },
  {
    "facet": [
      "Autorizada",
      "AutorizadaAguardandoGeracaoPDF"
    ],
    "max_min": 57,
    "media_min": 1.4520492630728852,
    "p95_min": {
      "95": 9.125
    }
  },
  {
    "facet": [
      "Negada",
      "EmProcessoDeAutorizacao"
    ],
    "max_min": 45,
    "media_min": 1.3326067571584266,
    "p95_min": {
      "95": 6.0625
    }
  },
  {
    "facet": [
      "Negada",
      "AguardandoAutorizacao"
    ],
    "max_min": 1,
    "media_min": 1,
    "p95_min": {
      "95": 1
    }
  }
],
  perfMunicipio: [
  {
    "average.nfe.processing_time.minutes": 49,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Lages",
    "max.nfe.processing_time.minutes": 49,
    "nfe.municipio_servico": "Lages",
    "percentile.nfe.processing_time.minutes": {
      "95": 49
    }
  },
  {
    "average.nfe.processing_time.minutes": 27.666666666666668,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Rio Grande",
    "max.nfe.processing_time.minutes": 57,
    "nfe.municipio_servico": "Rio Grande",
    "percentile.nfe.processing_time.minutes": {
      "95": 57
    }
  },
  {
    "average.nfe.processing_time.minutes": 20,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Maranguape",
    "max.nfe.processing_time.minutes": 20,
    "nfe.municipio_servico": "Maranguape",
    "percentile.nfe.processing_time.minutes": {
      "95": 20
    }
  },
  {
    "average.nfe.processing_time.minutes": 19,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Pará de Minas",
    "max.nfe.processing_time.minutes": 19,
    "nfe.municipio_servico": "Pará de Minas",
    "percentile.nfe.processing_time.minutes": {
      "95": 19
    }
  },
  {
    "average.nfe.processing_time.minutes": 18.466666666666665,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Jaraguá do Sul",
    "max.nfe.processing_time.minutes": 34,
    "nfe.municipio_servico": "Jaraguá do Sul",
    "percentile.nfe.processing_time.minutes": {
      "95": 34
    }
  },
  {
    "average.nfe.processing_time.minutes": 17,
    "count.nfe.processing_time.minutes": 180,
    "facet": "Balneário Camboriú",
    "max.nfe.processing_time.minutes": 45,
    "nfe.municipio_servico": "Balneário Camboriú",
    "percentile.nfe.processing_time.minutes": {
      "95": 45
    }
  },
  {
    "average.nfe.processing_time.minutes": 13.541666666666666,
    "count.nfe.processing_time.minutes": 120,
    "facet": "São José de Ribamar",
    "max.nfe.processing_time.minutes": 24,
    "nfe.municipio_servico": "São José de Ribamar",
    "percentile.nfe.processing_time.minutes": {
      "95": 24
    }
  },
  {
    "average.nfe.processing_time.minutes": 13,
    "count.nfe.processing_time.minutes": 60,
    "facet": "São Bernardo",
    "max.nfe.processing_time.minutes": 13,
    "nfe.municipio_servico": "São Bernardo",
    "percentile.nfe.processing_time.minutes": {
      "95": 13
    }
  },
  {
    "average.nfe.processing_time.minutes": 12,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Marília",
    "max.nfe.processing_time.minutes": 12,
    "nfe.municipio_servico": "Marília",
    "percentile.nfe.processing_time.minutes": {
      "95": 12
    }
  },
  {
    "average.nfe.processing_time.minutes": 12,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Diadema",
    "max.nfe.processing_time.minutes": 12,
    "nfe.municipio_servico": "Diadema",
    "percentile.nfe.processing_time.minutes": {
      "95": 12
    }
  },
  {
    "average.nfe.processing_time.minutes": 10,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Itaquaquecetuba",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "Itaquaquecetuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 10
    }
  },
  {
    "average.nfe.processing_time.minutes": 9.9,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Linhares",
    "max.nfe.processing_time.minutes": 20,
    "nfe.municipio_servico": "Linhares",
    "percentile.nfe.processing_time.minutes": {
      "95": 20
    }
  },
  {
    "average.nfe.processing_time.minutes": 9.533333333333333,
    "count.nfe.processing_time.minutes": 300,
    "facet": "",
    "max.nfe.processing_time.minutes": 38,
    "nfe.municipio_servico": "",
    "percentile.nfe.processing_time.minutes": {
      "95": 38
    }
  },
  {
    "average.nfe.processing_time.minutes": 9,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Aracati",
    "max.nfe.processing_time.minutes": 9,
    "nfe.municipio_servico": "Aracati",
    "percentile.nfe.processing_time.minutes": {
      "95": 9
    }
  },
  {
    "average.nfe.processing_time.minutes": 9,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Embu das Artes",
    "max.nfe.processing_time.minutes": 9,
    "nfe.municipio_servico": "Embu das Artes",
    "percentile.nfe.processing_time.minutes": {
      "95": 9
    }
  },
  {
    "average.nfe.processing_time.minutes": 8.193333333333333,
    "count.nfe.processing_time.minutes": 300,
    "facet": "Barueri",
    "max.nfe.processing_time.minutes": 25,
    "nfe.municipio_servico": "Barueri",
    "percentile.nfe.processing_time.minutes": {
      "95": 19.125
    }
  },
  {
    "average.nfe.processing_time.minutes": 8.033333333333333,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 12,
    "nfe.municipio_servico": "Caraguatatuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 12
    }
  },
  {
    "average.nfe.processing_time.minutes": 8,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Caratinga",
    "max.nfe.processing_time.minutes": 8,
    "nfe.municipio_servico": "Caratinga",
    "percentile.nfe.processing_time.minutes": {
      "95": 8
    }
  },
  {
    "average.nfe.processing_time.minutes": 7,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Dourados",
    "max.nfe.processing_time.minutes": 13,
    "nfe.municipio_servico": "Dourados",
    "percentile.nfe.processing_time.minutes": {
      "95": 13
    }
  },
  {
    "average.nfe.processing_time.minutes": 6.775,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Guarulhos",
    "max.nfe.processing_time.minutes": 13,
    "nfe.municipio_servico": "Guarulhos",
    "percentile.nfe.processing_time.minutes": {
      "95": 13
    }
  },
  {
    "average.nfe.processing_time.minutes": 6.5,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Jundiaí",
    "max.nfe.processing_time.minutes": 13,
    "nfe.municipio_servico": "Jundiaí",
    "percentile.nfe.processing_time.minutes": {
      "95": 13
    }
  },
  {
    "average.nfe.processing_time.minutes": 6.5,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Osasco",
    "max.nfe.processing_time.minutes": 13,
    "nfe.municipio_servico": "Osasco",
    "percentile.nfe.processing_time.minutes": {
      "95": 13
    }
  },
  {
    "average.nfe.processing_time.minutes": 6.388888888888889,
    "count.nfe.processing_time.minutes": 180,
    "facet": "Fortaleza",
    "max.nfe.processing_time.minutes": 21,
    "nfe.municipio_servico": "Fortaleza",
    "percentile.nfe.processing_time.minutes": {
      "95": 21
    }
  },
  {
    "average.nfe.processing_time.minutes": 6.1,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Petrolina",
    "max.nfe.processing_time.minutes": 15,
    "nfe.municipio_servico": "Petrolina",
    "percentile.nfe.processing_time.minutes": {
      "95": 15
    }
  },
  {
    "average.nfe.processing_time.minutes": 5.725,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Piúma",
    "max.nfe.processing_time.minutes": 11,
    "nfe.municipio_servico": "Piúma",
    "percentile.nfe.processing_time.minutes": {
      "95": 11
    }
  },
  {
    "average.nfe.processing_time.minutes": 5.066666666666666,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Gramado",
    "max.nfe.processing_time.minutes": 9,
    "nfe.municipio_servico": "Gramado",
    "percentile.nfe.processing_time.minutes": {
      "95": 9
    }
  },
  {
    "average.nfe.processing_time.minutes": 5,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Ibirubá",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Ibirubá",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 5,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Mairiporã",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Mairiporã",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 4.875,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Nova Lima",
    "max.nfe.processing_time.minutes": 8,
    "nfe.municipio_servico": "Nova Lima",
    "percentile.nfe.processing_time.minutes": {
      "95": 8
    }
  },
  {
    "average.nfe.processing_time.minutes": 4.177777777777778,
    "count.nfe.processing_time.minutes": 180,
    "facet": "São Paulo",
    "max.nfe.processing_time.minutes": 12,
    "nfe.municipio_servico": "São Paulo",
    "percentile.nfe.processing_time.minutes": {
      "95": 12
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.875,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Blumenau",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "Blumenau",
    "percentile.nfe.processing_time.minutes": {
      "95": 7
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.7916666666666665,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Novo Hamburgo",
    "max.nfe.processing_time.minutes": 26,
    "nfe.municipio_servico": "Novo Hamburgo",
    "percentile.nfe.processing_time.minutes": {
      "95": 6.03125
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.533333333333333,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Salvador",
    "max.nfe.processing_time.minutes": 25,
    "nfe.municipio_servico": "Salvador",
    "percentile.nfe.processing_time.minutes": {
      "95": 21.125
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.4166666666666665,
    "count.nfe.processing_time.minutes": 120,
    "facet": "São Caetano do Sul",
    "max.nfe.processing_time.minutes": 11,
    "nfe.municipio_servico": "São Caetano do Sul",
    "percentile.nfe.processing_time.minutes": {
      "95": 5.03125
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.75,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Vila Velha",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Vila Velha",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.75,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Cotia",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Cotia",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.683333333333333,
    "count.nfe.processing_time.minutes": 60,
    "facet": "João Monlevade",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "João Monlevade",
    "percentile.nfe.processing_time.minutes": {
      "95": 7
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.5,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Santa Teresa",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Santa Teresa",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.5,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Manaus",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Manaus",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.3333333333333335,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Lagoa Santa",
    "max.nfe.processing_time.minutes": 11,
    "nfe.municipio_servico": "Lagoa Santa",
    "percentile.nfe.processing_time.minutes": {
      "95": 11
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.2111111111111112,
    "count.nfe.processing_time.minutes": 180,
    "facet": "Florianópolis",
    "max.nfe.processing_time.minutes": 20,
    "nfe.municipio_servico": "Florianópolis",
    "percentile.nfe.processing_time.minutes": {
      "95": 20
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.1666666666666665,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Sete Lagoas",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Sete Lagoas",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.0944444444444446,
    "count.nfe.processing_time.minutes": 180,
    "facet": "Piracicaba",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Piracicaba",
    "percentile.nfe.processing_time.minutes": {
      "95": 6
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 60,
    "facet": "São Vicente",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "São Vicente",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Cariacica",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Cariacica",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Ilhéus",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Ilhéus",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Amparo",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Amparo",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 8,
    "facet": "Esteio",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Esteio",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Urussanga",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Urussanga",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Schroeder",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Schroeder",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  }
],
  empresasMunicipio: [
  {
    "facet": "Eusébio",
    "nfe.municipio_servico": "Eusébio",
    "uniqueCount.empresa.razao_social": 4
  },
  {
    "facet": "Naviraí",
    "nfe.municipio_servico": "Naviraí",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Salvador",
    "nfe.municipio_servico": "Salvador",
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
    "facet": "Jaraguá do Sul",
    "nfe.municipio_servico": "Jaraguá do Sul",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Guarulhos",
    "nfe.municipio_servico": "Guarulhos",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Rio Grande",
    "nfe.municipio_servico": "Rio Grande",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Tuparendi",
    "nfe.municipio_servico": "Tuparendi",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Campinas",
    "nfe.municipio_servico": "Campinas",
    "uniqueCount.empresa.razao_social": 1
  }
],
  statsGlobais: [
  {
    "average.nfe.processing_time.minutes": 1.6227378490175801,
    "max.nfe.processing_time.minutes": 57,
    "percentile.nfe.processing_time.minutes": {
      "50": 0,
      "90": 3.03125,
      "95": 9.125,
      "99": 24.25
    }
  }
],
  totalEmpresas: [
  {
    "uniqueCount.empresa.razao_social": 13
  }
],
  totalMunicipios: [
  {
    "uniqueCount.nfe.municipio_servico": 376
  }
],
  volumeMunicipio: [
  {
    "count.nfe.processing_time.minutes": 300,
    "facet": "",
    "nfe.municipio_servico": ""
  },
  {
    "count.nfe.processing_time.minutes": 300,
    "facet": "Barueri",
    "nfe.municipio_servico": "Barueri"
  },
  {
    "count.nfe.processing_time.minutes": 240,
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
    "facet": "Jaguaruna",
    "nfe.municipio_servico": "Jaguaruna"
  },
  {
    "count.nfe.processing_time.minutes": 180,
    "facet": "Brasília",
    "nfe.municipio_servico": "Brasília"
  },
  {
    "count.nfe.processing_time.minutes": 180,
    "facet": "Balneário Camboriú",
    "nfe.municipio_servico": "Balneário Camboriú"
  },
  {
    "count.nfe.processing_time.minutes": 180,
    "facet": "São Paulo",
    "nfe.municipio_servico": "São Paulo"
  },
  {
    "count.nfe.processing_time.minutes": 180,
    "facet": "Florianópolis",
    "nfe.municipio_servico": "Florianópolis"
  },
  {
    "count.nfe.processing_time.minutes": 180,
    "facet": "Uberlândia",
    "nfe.municipio_servico": "Uberlândia"
  },
  {
    "count.nfe.processing_time.minutes": 180,
    "facet": "Porto Alegre",
    "nfe.municipio_servico": "Porto Alegre"
  },
  {
    "count.nfe.processing_time.minutes": 180,
    "facet": "Fortaleza",
    "nfe.municipio_servico": "Fortaleza"
  },
  {
    "count.nfe.processing_time.minutes": 180,
    "facet": "Piracicaba",
    "nfe.municipio_servico": "Piracicaba"
  },
  {
    "count.nfe.processing_time.minutes": 158,
    "facet": "Curitiba",
    "nfe.municipio_servico": "Curitiba"
  },
  {
    "count.nfe.processing_time.minutes": 148,
    "facet": "Rio de Janeiro",
    "nfe.municipio_servico": "Rio de Janeiro"
  },
  {
    "count.nfe.processing_time.minutes": 133,
    "facet": "Santos",
    "nfe.municipio_servico": "Santos"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Vinhedo",
    "nfe.municipio_servico": "Vinhedo"
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
    "facet": "Dois Irmãos",
    "nfe.municipio_servico": "Dois Irmãos"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Itabaiana",
    "nfe.municipio_servico": "Itabaiana"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Poços de Caldas",
    "nfe.municipio_servico": "Poços de Caldas"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Engenheiro Coelho",
    "nfe.municipio_servico": "Engenheiro Coelho"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "São Bernardo do Campo",
    "nfe.municipio_servico": "São Bernardo do Campo"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Caldas Novas",
    "nfe.municipio_servico": "Caldas Novas"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Bagé",
    "nfe.municipio_servico": "Bagé"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Foz do Iguaçu",
    "nfe.municipio_servico": "Foz do Iguaçu"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Guaíra",
    "nfe.municipio_servico": "Guaíra"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Barra do Piraí",
    "nfe.municipio_servico": "Barra do Piraí"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Mariana",
    "nfe.municipio_servico": "Mariana"
  }
],
  municipioStatus: [
  {
    "facet": [
      "Corbélia",
      "SolicitandoAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 400
  },
  {
    "facet": [
      "Guarulhos",
      "EmProcessoDeAutorizacao"
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
      "Salvador",
      "SolicitandoAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "facet": [
      "Campinas",
      "SolicitandoAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Eusébio",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Jaraguá do Sul",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Naviraí",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Rio Grande",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Tuparendi",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  topEmpresasTravadas: [
  {
    "empresa.razao_social": "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA.",
    "facet": "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA.",
    "latest.nfe.stuck_in_intermediate_status.count": 400
  },
  {
    "empresa.razao_social": "NEILA MARQUES DE FREITAS F LTDA",
    "facet": "NEILA MARQUES DE FREITAS F LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "empresa.razao_social": "GOSHME SOLUCOES PARA A INTERNET LTDA",
    "facet": "GOSHME SOLUCOES PARA A INTERNET LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "empresa.razao_social": "INSTITUTO CLEITON ALVES LTDA",
    "facet": "INSTITUTO CLEITON ALVES LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "D&F CURSOS DIGITAIS EM DESENVOLVIMENTO LTDA",
    "facet": "D&F CURSOS DIGITAIS EM DESENVOLVIMENTO LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "FACIL ENSINO DE IDIOMAS LTDA",
    "facet": "FACIL ENSINO DE IDIOMAS LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "JP07 LTDA",
    "facet": "JP07 LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "MENTE INTERATIVA",
    "facet": "MENTE INTERATIVA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "INSTITUTO COIMBRA ACADEMY LTDA",
    "facet": "INSTITUTO COIMBRA ACADEMY LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "NETPOS SERVICOS DE INFORMATICA S.A.",
    "facet": "NETPOS SERVICOS DE INFORMATICA S.A.",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "SAMIA GOMES TREINAMENTO LTDA",
    "facet": "SAMIA GOMES TREINAMENTO LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  travadasPorStatusMunicipio: [
  {
    "facet": [
      "SolicitandoAutorizacao",
      "Corbélia"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 400
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
      "EmProcessoDeAutorizacao",
      "Guarulhos"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "facet": [
      "SolicitandoAutorizacao",
      "Salvador"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Eusébio"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Jaraguá do Sul"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Naviraí"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Rio Grande"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Tuparendi"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "SolicitandoAutorizacao",
      "Campinas"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  travadasMotivoEmpresa: [
  {
    "facet": [
      "",
      "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA."
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 400
  },
  {
    "facet": [
      "",
      "CAROL DEBORTOLI MARKETING LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "facet": [
      "",
      "GOSHME SOLUCOES PARA A INTERNET LTDA"
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
      "D&F CURSOS DIGITAIS EM DESENVOLVIMENTO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "FACIL ENSINO DE IDIOMAS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "INSTITUTO CLEITON ALVES LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "INSTITUTO COIMBRA ACADEMY LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "JP07 LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "MENTE INTERATIVA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "NETPOS SERVICOS DE INFORMATICA S.A."
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "SAMIA GOMES TREINAMENTO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "VIRTUEL TREINAMENTOS E COMERCIO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  volumetriaHora: [
  {
    "canceladas": 41,
    "devolucoes": 17,
    "em_emissao": 410,
    "email": 0,
    "emitidas": 9017,
    "falhas": 2078
  }
],
  volumetriaTimeseries: [
  {
    "beginTimeSeconds": 1782847200,
    "emitidas": 11110,
    "endTimeSeconds": 1782850800,
    "falhas": 2690
  },
  {
    "beginTimeSeconds": 1782850800,
    "emitidas": 16674,
    "endTimeSeconds": 1782854400,
    "falhas": 2607
  },
  {
    "beginTimeSeconds": 1782854400,
    "emitidas": 13418,
    "endTimeSeconds": 1782858000,
    "falhas": 3857
  },
  {
    "beginTimeSeconds": 1782858000,
    "emitidas": 5837,
    "endTimeSeconds": 1782861600,
    "falhas": 1550
  },
  {
    "beginTimeSeconds": 1782861600,
    "emitidas": 5643,
    "endTimeSeconds": 1782865200,
    "falhas": 4308
  },
  {
    "beginTimeSeconds": 1782865200,
    "emitidas": 9404,
    "endTimeSeconds": 1782868800,
    "falhas": 1903
  },
  {
    "beginTimeSeconds": 1782868800,
    "emitidas": 9699,
    "endTimeSeconds": 1782872400,
    "falhas": 2431
  },
  {
    "beginTimeSeconds": 1782872400,
    "emitidas": 4015,
    "endTimeSeconds": 1782876000,
    "falhas": 259
  },
  {
    "beginTimeSeconds": 1782876000,
    "emitidas": 10517,
    "endTimeSeconds": 1782879600,
    "falhas": 2348
  },
  {
    "beginTimeSeconds": 1782879600,
    "emitidas": 4617,
    "endTimeSeconds": 1782883200,
    "falhas": 177
  },
  {
    "beginTimeSeconds": 1782883200,
    "emitidas": 4111,
    "endTimeSeconds": 1782886800,
    "falhas": 201
  },
  {
    "beginTimeSeconds": 1782886800,
    "emitidas": 2945,
    "endTimeSeconds": 1782890400,
    "falhas": 76
  },
  {
    "beginTimeSeconds": 1782890400,
    "emitidas": 3191,
    "endTimeSeconds": 1782894000,
    "falhas": 76
  },
  {
    "beginTimeSeconds": 1782894000,
    "emitidas": 2777,
    "endTimeSeconds": 1782897600,
    "falhas": 143
  },
  {
    "beginTimeSeconds": 1782897600,
    "emitidas": 3636,
    "endTimeSeconds": 1782901200,
    "falhas": 224
  },
  {
    "beginTimeSeconds": 1782901200,
    "emitidas": 3273,
    "endTimeSeconds": 1782904800,
    "falhas": 469
  },
  {
    "beginTimeSeconds": 1782904800,
    "emitidas": 7428,
    "endTimeSeconds": 1782908400,
    "falhas": 1372
  },
  {
    "beginTimeSeconds": 1782908400,
    "emitidas": 8927,
    "endTimeSeconds": 1782912000,
    "falhas": 2694
  },
  {
    "beginTimeSeconds": 1782912000,
    "emitidas": 9752,
    "endTimeSeconds": 1782915600,
    "falhas": 2791
  },
  {
    "beginTimeSeconds": 1782915600,
    "emitidas": 8320,
    "endTimeSeconds": 1782919200,
    "falhas": 1008
  },
  {
    "beginTimeSeconds": 1782919200,
    "emitidas": 7081,
    "endTimeSeconds": 1782922800,
    "falhas": 847
  },
  {
    "beginTimeSeconds": 1782922800,
    "emitidas": 8843,
    "endTimeSeconds": 1782926400,
    "falhas": 1395
  },
  {
    "beginTimeSeconds": 1782926400,
    "emitidas": 8033,
    "endTimeSeconds": 1782930000,
    "falhas": 6498
  },
  {
    "beginTimeSeconds": 1782930000,
    "emitidas": 9534,
    "endTimeSeconds": 1782933600,
    "falhas": 2107
  }
],
  filaOperacoes: [
  {
    "pendentes": 0,
    "rodando": 4
  }
],
  webhooks: [
  {
    "dead_letter": 22,
    "falhas": 23,
    "ok": 50113
  }
],
  travadasStatusEmpresa: {"6":[],"3":[],"1":[],"0":[],"12":[]},
  totalMunicipiosPendentes: [
  {
    "uniqueCount.nfe.municipio_servico": 10
  }
],
  taxaNfse: [
  {
    "rejeicao": 21.39534476236234,
    "sucesso": 78.6046552376376
  }
],
  taxaNfe: [
  {
    "rejeicao": 33.909416568573036,
    "sucesso": 66.09058343142688
  }
],
  taxaSucessoMunicipio: [
  {
    "facet": "Lins",
    "municipio.nome": "Lins",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Teresina",
    "municipio.nome": "Teresina",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Mogi Mirim",
    "municipio.nome": "Mogi Mirim",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Thun",
    "municipio.nome": "Thun",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itabaiana",
    "municipio.nome": "Itabaiana",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Muri bei Bern",
    "municipio.nome": "Muri bei Bern",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Suica",
    "municipio.nome": "Suica",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 0,
    "taxa_rejeicao": 19.7183098591549,
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
    "rejeitadas": 13,
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
    "facet": "chicago",
    "municipio.nome": "chicago",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Patos de Minas",
    "municipio.nome": "Patos de Minas",
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
    "facet": "Alegre",
    "municipio.nome": "Alegre",
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
    "facet": "sohar",
    "municipio.nome": "sohar",
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
    "facet": "Pelotas",
    "municipio.nome": "Pelotas",
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
    "facet": "Maranguape",
    "municipio.nome": "Maranguape",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Saquarema",
    "municipio.nome": "Saquarema",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cebu",
    "municipio.nome": "Cebu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Vilhena",
    "municipio.nome": "Vilhena",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cruz Machado",
    "municipio.nome": "Cruz Machado",
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
    "facet": "Altdorf",
    "municipio.nome": "Altdorf",
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
    "facet": "Jaguariúna",
    "municipio.nome": "Jaguariúna",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cariacica",
    "municipio.nome": "Cariacica",
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
    "facet": "Assis",
    "municipio.nome": "Assis",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Paraguaçu Paulista",
    "municipio.nome": "Paraguaçu Paulista",
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
    "facet": "Cosmópolis",
    "municipio.nome": "Cosmópolis",
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
    "facet": "Serra Negra",
    "municipio.nome": "Serra Negra",
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
    "facet": "Jacareí",
    "municipio.nome": "Jacareí",
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
    "facet": "São Pedro da Aldeia",
    "municipio.nome": "São Pedro da Aldeia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cajamar",
    "municipio.nome": "Cajamar",
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
    "facet": "São Cristóvão",
    "municipio.nome": "São Cristóvão",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Lisboa",
    "municipio.nome": "Lisboa",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itupeva",
    "municipio.nome": "Itupeva",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pato Branco",
    "municipio.nome": "Pato Branco",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Mateiros",
    "municipio.nome": "Mateiros",
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
    "facet": "Suzano",
    "municipio.nome": "Suzano",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "memphis",
    "municipio.nome": "memphis",
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
    "facet": "San Francisco",
    "municipio.nome": "San Francisco",
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
    "facet": "Manhuaçu",
    "municipio.nome": "Manhuaçu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Caratinga",
    "municipio.nome": "Caratinga",
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
    "facet": "Palhoça",
    "municipio.nome": "Palhoça",
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
    "facet": "Ilhéus",
    "municipio.nome": "Ilhéus",
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
    "facet": "Imbé",
    "municipio.nome": "Imbé",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Urupá",
    "municipio.nome": "Urupá",
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
    "facet": "Santiago",
    "municipio.nome": "Santiago",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Madrid",
    "municipio.nome": "Madrid",
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
    "facet": "Embu das Artes",
    "municipio.nome": "Embu das Artes",
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
    "facet": "Taubaté",
    "municipio.nome": "Taubaté",
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
    "facet": "Bom Jesus do Galho",
    "municipio.nome": "Bom Jesus do Galho",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Campos do Jordão",
    "municipio.nome": "Campos do Jordão",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guarapari",
    "municipio.nome": "Guarapari",
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
    "facet": "Terra Roxa",
    "municipio.nome": "Terra Roxa",
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
    "facet": "Santa Cruz do Sul",
    "municipio.nome": "Santa Cruz do Sul",
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
    "facet": "Toledo",
    "municipio.nome": "Toledo",
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
    "facet": "Aberdeen",
    "municipio.nome": "Aberdeen",
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
    "facet": "Valinhos",
    "municipio.nome": "Valinhos",
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
    "facet": "Subingen",
    "municipio.nome": "Subingen",
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
    "facet": "Cataguases",
    "municipio.nome": "Cataguases",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Dumont",
    "municipio.nome": "Dumont",
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
    "facet": "Mossoró",
    "municipio.nome": "Mossoró",
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
    "facet": "Paulínia",
    "municipio.nome": "Paulínia",
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
    "facet": "Franca",
    "municipio.nome": "Franca",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Imperatriz",
    "municipio.nome": "Imperatriz",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jonesboro",
    "municipio.nome": "Jonesboro",
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
    "facet": "Itajubá",
    "municipio.nome": "Itajubá",
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
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
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
    "facet": "Diadema",
    "municipio.nome": "Diadema",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Candelária",
    "municipio.nome": "Candelária",
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
    "facet": "Andradina",
    "municipio.nome": "Andradina",
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
    "facet": "Salto",
    "municipio.nome": "Salto",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "messina",
    "municipio.nome": "messina",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Vicente",
    "municipio.nome": "São Vicente",
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
    "facet": "Itaquaquecetuba",
    "municipio.nome": "Itaquaquecetuba",
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
    "facet": "Guaíra",
    "municipio.nome": "Guaíra",
    "rejeitadas": 1,
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
    "facet": "London",
    "municipio.nome": "London",
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
    "facet": "Nova Lima",
    "municipio.nome": "Nova Lima",
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
    "facet": "Menlo Park",
    "municipio.nome": "Menlo Park",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cruz Alta",
    "municipio.nome": "Cruz Alta",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Naters",
    "municipio.nome": "Naters",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Pedro",
    "municipio.nome": "São Pedro",
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
    "facet": "Ouro Preto do Oeste",
    "municipio.nome": "Ouro Preto do Oeste",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Macaé",
    "municipio.nome": "Macaé",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pachuca",
    "municipio.nome": "Pachuca",
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
    "facet": "Ivoti",
    "municipio.nome": "Ivoti",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Brisbane",
    "municipio.nome": "Brisbane",
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
    "facet": "Teresópolis",
    "municipio.nome": "Teresópolis",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Milton Keynes",
    "municipio.nome": "Milton Keynes",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Liverpool",
    "municipio.nome": "Liverpool",
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
    "facet": "Júlio de Castilhos",
    "municipio.nome": "Júlio de Castilhos",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Serra",
    "municipio.nome": "Serra",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guarani",
    "municipio.nome": "Guarani",
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
    "facet": "Rio Verde",
    "municipio.nome": "Rio Verde",
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
    "facet": "Hergiswil",
    "municipio.nome": "Hergiswil",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jaboticabal",
    "municipio.nome": "Jaboticabal",
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
    "facet": "Allschwil",
    "municipio.nome": "Allschwil",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "GUAYAQUIL",
    "municipio.nome": "GUAYAQUIL",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Vargem Grande Paulista",
    "municipio.nome": "Vargem Grande Paulista",
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
    "facet": "Nova Santa Rita",
    "municipio.nome": "Nova Santa Rita",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Aracati",
    "municipio.nome": "Aracati",
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
    "facet": "Treze Tílias",
    "municipio.nome": "Treze Tílias",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Amparo",
    "municipio.nome": "Amparo",
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
    "facet": "São Bernardo",
    "municipio.nome": "São Bernardo",
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
    "facet": "Itabira",
    "municipio.nome": "Itabira",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cambuí",
    "municipio.nome": "Cambuí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Caetano do Sul",
    "municipio.nome": "São Caetano do Sul",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itumbiara",
    "municipio.nome": "Itumbiara",
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
    "facet": "Saltillo",
    "municipio.nome": "Saltillo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São José de Ribamar",
    "municipio.nome": "São José de Ribamar",
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
    "facet": "Pontes e Lacerda",
    "municipio.nome": "Pontes e Lacerda",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Lauro de Freitas",
    "municipio.nome": "Lauro de Freitas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Videira",
    "municipio.nome": "Videira",
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
    "facet": "Nao informado",
    "municipio.nome": "Nao informado",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Seropédica",
    "municipio.nome": "Seropédica",
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
    "facet": "Rio Claro",
    "municipio.nome": "Rio Claro",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
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
    "facet": "Medellin",
    "municipio.nome": "Medellin",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Rio Doce",
    "municipio.nome": "Rio Doce",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Americana",
    "municipio.nome": "Americana",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Tietê",
    "municipio.nome": "Tietê",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Campeche",
    "municipio.nome": "Campeche",
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
    "facet": "Petrópolis",
    "municipio.nome": "Petrópolis",
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
    "facet": "Linhares",
    "municipio.nome": "Linhares",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Piraju",
    "municipio.nome": "Piraju",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ubá",
    "municipio.nome": "Ubá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Lima",
    "municipio.nome": "Lima",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Antônio Prado",
    "municipio.nome": "Antônio Prado",
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
    "facet": "Schroeder",
    "municipio.nome": "Schroeder",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Anápolis",
    "municipio.nome": "Anápolis",
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
    "facet": "San anselmo",
    "municipio.nome": "San anselmo",
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
    "facet": "Pedreira",
    "municipio.nome": "Pedreira",
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
    "facet": "Salvador",
    "municipio.nome": "Salvador",
    "rejeitadas": 5,
    "taxa_rejeicao": 0.0889521437466,
    "taxa_sucesso": 99.91104785625329
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.3623188405797,
    "taxa_sucesso": 99.6376811594202
  },
  {
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.9523809523809,
    "taxa_sucesso": 99.04761904761901
  },
  {
    "facet": "Balneário Camboriú",
    "municipio.nome": "Balneário Camboriú",
    "rejeitadas": 36,
    "taxa_rejeicao": 1.2257405515832,
    "taxa_sucesso": 98.7742594484167
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 24,
    "taxa_rejeicao": 10,
    "taxa_sucesso": 98.5285101164929
  },
  {
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
    "rejeitadas": 3,
    "taxa_rejeicao": 1.5463917525773,
    "taxa_sucesso": 98.4536082474226
  },
  {
    "facet": "Boituva",
    "municipio.nome": "Boituva",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.7543859649122,
    "taxa_sucesso": 98.2456140350877
  },
  {
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.7857142857142,
    "taxa_sucesso": 98.2142857142857
  },
  {
    "facet": "Jaú",
    "municipio.nome": "Jaú",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.9607843137254,
    "taxa_sucesso": 98.0392156862745
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 10,
    "taxa_rejeicao": 2.2321428571428,
    "taxa_sucesso": 97.76785714285711
  },
  {
    "facet": "Cotia",
    "municipio.nome": "Cotia",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.2727272727272,
    "taxa_sucesso": 97.7272727272727
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 9,
    "taxa_rejeicao": 2.3622047244094,
    "taxa_sucesso": 97.63779527559049
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 3,
    "taxa_rejeicao": 2.4590163934426,
    "taxa_sucesso": 97.54098360655729
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 10,
    "taxa_rejeicao": 3.1446540880503,
    "taxa_sucesso": 96.8553459119496
  },
  {
    "facet": "Maringá",
    "municipio.nome": "Maringá",
    "rejeitadas": 1,
    "taxa_rejeicao": 3.3333333333333,
    "taxa_sucesso": 96.66666666666659
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 8,
    "taxa_rejeicao": 3.5555555555555,
    "taxa_sucesso": 96.4444444444444
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 1,
    "taxa_rejeicao": 3.7037037037037,
    "taxa_sucesso": 96.29629629629619
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 5,
    "taxa_rejeicao": 4.3103448275862,
    "taxa_sucesso": 95.6896551724137
  },
  {
    "facet": "Natal",
    "municipio.nome": "Natal",
    "rejeitadas": 5,
    "taxa_rejeicao": 4.7169811320754,
    "taxa_sucesso": 95.2830188679245
  },
  {
    "facet": "Francisco Beltrão",
    "municipio.nome": "Francisco Beltrão",
    "rejeitadas": 1,
    "taxa_rejeicao": 5.5555555555555,
    "taxa_sucesso": 94.4444444444444
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 26,
    "taxa_rejeicao": 5.6277056277056,
    "taxa_sucesso": 94.3722943722943
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 85,
    "taxa_rejeicao": 5.9774964838255,
    "taxa_sucesso": 94.0225035161744
  },
  {
    "facet": "Santa Maria",
    "municipio.nome": "Santa Maria",
    "rejeitadas": 2,
    "taxa_rejeicao": 6.25,
    "taxa_sucesso": 93.75
  },
  {
    "facet": "Joinville",
    "municipio.nome": "Joinville",
    "rejeitadas": 2,
    "taxa_rejeicao": 7.4074074074074,
    "taxa_sucesso": 92.5925925925925
  },
  {
    "facet": "João Pessoa",
    "municipio.nome": "João Pessoa",
    "rejeitadas": 1,
    "taxa_rejeicao": 8.3333333333333,
    "taxa_sucesso": 91.66666666666659
  },
  {
    "facet": "Manaus",
    "municipio.nome": "Manaus",
    "rejeitadas": 1,
    "taxa_rejeicao": 10,
    "taxa_sucesso": 90
  },
  {
    "facet": "Lagoa Santa",
    "municipio.nome": "Lagoa Santa",
    "rejeitadas": 2,
    "taxa_rejeicao": 11.7647058823529,
    "taxa_sucesso": 88.235294117647
  },
  {
    "facet": "Niterói",
    "municipio.nome": "Niterói",
    "rejeitadas": 2,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Pinhais",
    "municipio.nome": "Pinhais",
    "rejeitadas": 6,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 2,
    "taxa_rejeicao": 13.3333333333333,
    "taxa_sucesso": 86.66666666666659
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 24,
    "taxa_rejeicao": 13.7142857142857,
    "taxa_sucesso": 86.2857142857142
  },
  {
    "facet": "Itaperuna",
    "municipio.nome": "Itaperuna",
    "rejeitadas": 1,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 7,
    "taxa_rejeicao": 15.2173913043478,
    "taxa_sucesso": 84.7826086956521
  },
  {
    "facet": "Xangri-lá",
    "municipio.nome": "Xangri-lá",
    "rejeitadas": 2,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Angra dos Reis",
    "municipio.nome": "Angra dos Reis",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Itapema",
    "municipio.nome": "Itapema",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Santos",
    "municipio.nome": "Santos",
    "rejeitadas": 8,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 6,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Guarapuava",
    "municipio.nome": "Guarapuava",
    "rejeitadas": 3,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Feira de Santana",
    "municipio.nome": "Feira de Santana",
    "rejeitadas": 2,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 5,
    "taxa_rejeicao": 17.2413793103448,
    "taxa_sucesso": 82.7586206896551
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 5,
    "taxa_rejeicao": 17.2413793103448,
    "taxa_sucesso": 82.7586206896551
  },
  {
    "facet": "São José",
    "municipio.nome": "São José",
    "rejeitadas": 4,
    "taxa_rejeicao": 18.1818181818181,
    "taxa_sucesso": 81.8181818181818
  },
  {
    "facet": "Cascavel",
    "municipio.nome": "Cascavel",
    "rejeitadas": 3,
    "taxa_rejeicao": 18.75,
    "taxa_sucesso": 81.25
  },
  {
    "facet": "Piúma",
    "municipio.nome": "Piúma",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 2038,
    "taxa_rejeicao": 22.750613976334,
    "taxa_sucesso": 77.2493860236659
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 21,
    "taxa_rejeicao": 23.076923076923,
    "taxa_sucesso": 76.92307692307689
  },
  {
    "facet": "Dois Irmãos",
    "municipio.nome": "Dois Irmãos",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "São Joaquim da Barra",
    "municipio.nome": "São Joaquim da Barra",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Guarulhos",
    "municipio.nome": "Guarulhos",
    "rejeitadas": 2,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Osório",
    "municipio.nome": "Osório",
    "rejeitadas": 2,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Chapecó",
    "municipio.nome": "Chapecó",
    "rejeitadas": 3,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
    "rejeitadas": 3,
    "taxa_rejeicao": 27.2727272727272,
    "taxa_sucesso": 72.7272727272727
  },
  {
    "facet": "Londrina",
    "municipio.nome": "Londrina",
    "rejeitadas": 11,
    "taxa_rejeicao": 31.4285714285714,
    "taxa_sucesso": 68.5714285714285
  },
  {
    "facet": "Osasco",
    "municipio.nome": "Osasco",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Santana",
    "municipio.nome": "Santana",
    "rejeitadas": 14,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Marechal Cândido Rondon",
    "municipio.nome": "Marechal Cândido Rondon",
    "rejeitadas": 2,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
    "rejeitadas": 2,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Mauá",
    "municipio.nome": "Mauá",
    "rejeitadas": 3,
    "taxa_rejeicao": 42.8571428571428,
    "taxa_sucesso": 57.1428571428571
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 132,
    "taxa_rejeicao": 48.8888888888888,
    "taxa_sucesso": 51.11111111111111
  },
  {
    "facet": "Poços de Caldas",
    "municipio.nome": "Poços de Caldas",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Palmas",
    "municipio.nome": "Palmas",
    "rejeitadas": 3,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Pará de Minas",
    "municipio.nome": "Pará de Minas",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 7,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Registro",
    "municipio.nome": "Registro",
    "rejeitadas": 2,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Timbó",
    "municipio.nome": "Timbó",
    "rejeitadas": 4,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Ipatinga",
    "municipio.nome": "Ipatinga",
    "rejeitadas": 32,
    "taxa_rejeicao": 53.33333333333329,
    "taxa_sucesso": 46.6666666666666
  },
  {
    "facet": "Presidente Prudente",
    "municipio.nome": "Presidente Prudente",
    "rejeitadas": 6,
    "taxa_rejeicao": 54.5454545454545,
    "taxa_sucesso": 45.4545454545454
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 10,
    "taxa_rejeicao": 55.55555555555551,
    "taxa_sucesso": 44.4444444444444
  },
  {
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
    "rejeitadas": 67,
    "taxa_rejeicao": 63.8095238095238,
    "taxa_sucesso": 36.1904761904761
  },
  {
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
    "rejeitadas": 2,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Cabo Frio",
    "municipio.nome": "Cabo Frio",
    "rejeitadas": 2,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Vinhedo",
    "municipio.nome": "Vinhedo",
    "rejeitadas": 2,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Rio Bonito",
    "municipio.nome": "Rio Bonito",
    "rejeitadas": 2,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Lajeado",
    "municipio.nome": "Lajeado",
    "rejeitadas": 2,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
    "rejeitadas": 5,
    "taxa_rejeicao": 71.4285714285714,
    "taxa_sucesso": 28.5714285714285
  },
  {
    "facet": "Jundiaí",
    "municipio.nome": "Jundiaí",
    "rejeitadas": 8,
    "taxa_rejeicao": 72.7272727272727,
    "taxa_sucesso": 27.2727272727272
  },
  {
    "facet": "Itajaí",
    "municipio.nome": "Itajaí",
    "rejeitadas": 3,
    "taxa_rejeicao": 75,
    "taxa_sucesso": 25
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 24,
    "taxa_rejeicao": 77.4193548387096,
    "taxa_sucesso": 22.5806451612903
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 8,
    "taxa_rejeicao": 80,
    "taxa_sucesso": 20
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 45,
    "taxa_rejeicao": 88.235294117647,
    "taxa_sucesso": 11.7647058823529
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 51,
    "taxa_rejeicao": 89.4736842105263,
    "taxa_sucesso": 10.5263157894736
  },
  {
    "facet": "Canoas",
    "municipio.nome": "Canoas",
    "rejeitadas": 19,
    "taxa_rejeicao": 95,
    "taxa_sucesso": 5
  },
  {
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
    "rejeitadas": 83,
    "taxa_rejeicao": 98.80952380952381,
    "taxa_sucesso": 1.1904761904761
  },
  {
    "facet": "Guaratinguetá",
    "municipio.nome": "Guaratinguetá",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ijuí",
    "municipio.nome": "Ijuí",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Nova Serrana",
    "municipio.nome": "Nova Serrana",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bragança Paulista",
    "municipio.nome": "Bragança Paulista",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Sapiranga",
    "municipio.nome": "Sapiranga",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Dourados",
    "municipio.nome": "Dourados",
    "rejeitadas": 2,
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
    "facet": "Cidade Ocidental",
    "municipio.nome": "Cidade Ocidental",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Goianésia",
    "municipio.nome": "Goianésia",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Garopaba",
    "municipio.nome": "Garopaba",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guararema",
    "municipio.nome": "Guararema",
    "rejeitadas": 2,
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
    "facet": "Socorro",
    "municipio.nome": "Socorro",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Tupã",
    "municipio.nome": "Tupã",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Peruíbe",
    "municipio.nome": "Peruíbe",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Navegantes",
    "municipio.nome": "Navegantes",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Naviraí",
    "municipio.nome": "Naviraí",
    "rejeitadas": 7,
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
    "facet": "Ourinhos",
    "municipio.nome": "Ourinhos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Nossa Senhora das Graças",
    "municipio.nome": "Nossa Senhora das Graças",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Rondonópolis",
    "municipio.nome": "Rondonópolis",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guaporé",
    "municipio.nome": "Guaporé",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Arapiraca",
    "municipio.nome": "Arapiraca",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Catanduva",
    "municipio.nome": "Catanduva",
    "rejeitadas": 4,
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
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Sabará",
    "municipio.nome": "Sabará",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Vera Cruz",
    "municipio.nome": "Vera Cruz",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itapeva",
    "municipio.nome": "Itapeva",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Orlândia",
    "municipio.nome": "Orlândia",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Limeira",
    "municipio.nome": "Limeira",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Farroupilha",
    "municipio.nome": "Farroupilha",
    "rejeitadas": 7,
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
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Conselheiro Lafaiete",
    "municipio.nome": "Conselheiro Lafaiete",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Goiana",
    "municipio.nome": "Goiana",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jaraguá do Sul",
    "municipio.nome": "Jaraguá do Sul",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Santo Amaro da Imperatriz",
    "municipio.nome": "Santo Amaro da Imperatriz",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Hortolândia",
    "municipio.nome": "Hortolândia",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Mairiporã",
    "municipio.nome": "Mairiporã",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 32,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ilhabela",
    "municipio.nome": "Ilhabela",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ituiutaba",
    "municipio.nome": "Ituiutaba",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Araraquara",
    "municipio.nome": "Araraquara",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Caçapava",
    "municipio.nome": "Caçapava",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Nova Andradina",
    "municipio.nome": "Nova Andradina",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bauru",
    "municipio.nome": "Bauru",
    "rejeitadas": 4,
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
    "facet": "Ilhota",
    "municipio.nome": "Ilhota",
    "rejeitadas": 5,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Caruaru",
    "municipio.nome": "Caruaru",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Erechim",
    "municipio.nome": "Erechim",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  }
],
  taxaRejeicaoMunicipio: [
  {
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
    "rejeitadas": 13,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guaratinguetá",
    "municipio.nome": "Guaratinguetá",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ijuí",
    "municipio.nome": "Ijuí",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Nova Serrana",
    "municipio.nome": "Nova Serrana",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bragança Paulista",
    "municipio.nome": "Bragança Paulista",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Sapiranga",
    "municipio.nome": "Sapiranga",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Dourados",
    "municipio.nome": "Dourados",
    "rejeitadas": 2,
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
    "facet": "Cidade Ocidental",
    "municipio.nome": "Cidade Ocidental",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Goianésia",
    "municipio.nome": "Goianésia",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Garopaba",
    "municipio.nome": "Garopaba",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guararema",
    "municipio.nome": "Guararema",
    "rejeitadas": 2,
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
    "facet": "Socorro",
    "municipio.nome": "Socorro",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Tupã",
    "municipio.nome": "Tupã",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Peruíbe",
    "municipio.nome": "Peruíbe",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Navegantes",
    "municipio.nome": "Navegantes",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Naviraí",
    "municipio.nome": "Naviraí",
    "rejeitadas": 7,
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
    "facet": "Ourinhos",
    "municipio.nome": "Ourinhos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Nossa Senhora das Graças",
    "municipio.nome": "Nossa Senhora das Graças",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Rondonópolis",
    "municipio.nome": "Rondonópolis",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guaporé",
    "municipio.nome": "Guaporé",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Arapiraca",
    "municipio.nome": "Arapiraca",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Catanduva",
    "municipio.nome": "Catanduva",
    "rejeitadas": 4,
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
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Sabará",
    "municipio.nome": "Sabará",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Vera Cruz",
    "municipio.nome": "Vera Cruz",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itapeva",
    "municipio.nome": "Itapeva",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Orlândia",
    "municipio.nome": "Orlândia",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Limeira",
    "municipio.nome": "Limeira",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Farroupilha",
    "municipio.nome": "Farroupilha",
    "rejeitadas": 7,
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
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Conselheiro Lafaiete",
    "municipio.nome": "Conselheiro Lafaiete",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Goiana",
    "municipio.nome": "Goiana",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jaraguá do Sul",
    "municipio.nome": "Jaraguá do Sul",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Santo Amaro da Imperatriz",
    "municipio.nome": "Santo Amaro da Imperatriz",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Hortolândia",
    "municipio.nome": "Hortolândia",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Mairiporã",
    "municipio.nome": "Mairiporã",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 32,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ilhabela",
    "municipio.nome": "Ilhabela",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ituiutaba",
    "municipio.nome": "Ituiutaba",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Araraquara",
    "municipio.nome": "Araraquara",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Caçapava",
    "municipio.nome": "Caçapava",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Nova Andradina",
    "municipio.nome": "Nova Andradina",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bauru",
    "municipio.nome": "Bauru",
    "rejeitadas": 4,
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
    "facet": "Ilhota",
    "municipio.nome": "Ilhota",
    "rejeitadas": 5,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Caruaru",
    "municipio.nome": "Caruaru",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Erechim",
    "municipio.nome": "Erechim",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
    "rejeitadas": 83,
    "taxa_rejeicao": 98.80952380952381,
    "taxa_sucesso": 1.1904761904761
  },
  {
    "facet": "Canoas",
    "municipio.nome": "Canoas",
    "rejeitadas": 19,
    "taxa_rejeicao": 95,
    "taxa_sucesso": 5
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 51,
    "taxa_rejeicao": 89.4736842105263,
    "taxa_sucesso": 10.5263157894736
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 45,
    "taxa_rejeicao": 88.235294117647,
    "taxa_sucesso": 11.7647058823529
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 8,
    "taxa_rejeicao": 80,
    "taxa_sucesso": 20
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 24,
    "taxa_rejeicao": 77.4193548387096,
    "taxa_sucesso": 22.5806451612903
  },
  {
    "facet": "Itajaí",
    "municipio.nome": "Itajaí",
    "rejeitadas": 3,
    "taxa_rejeicao": 75,
    "taxa_sucesso": 25
  },
  {
    "facet": "Jundiaí",
    "municipio.nome": "Jundiaí",
    "rejeitadas": 8,
    "taxa_rejeicao": 72.7272727272727,
    "taxa_sucesso": 27.2727272727272
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
    "rejeitadas": 5,
    "taxa_rejeicao": 71.4285714285714,
    "taxa_sucesso": 28.5714285714285
  },
  {
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
    "rejeitadas": 2,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Cabo Frio",
    "municipio.nome": "Cabo Frio",
    "rejeitadas": 2,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Vinhedo",
    "municipio.nome": "Vinhedo",
    "rejeitadas": 2,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Rio Bonito",
    "municipio.nome": "Rio Bonito",
    "rejeitadas": 2,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Lajeado",
    "municipio.nome": "Lajeado",
    "rejeitadas": 2,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
    "rejeitadas": 67,
    "taxa_rejeicao": 63.8095238095238,
    "taxa_sucesso": 36.1904761904761
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 10,
    "taxa_rejeicao": 55.55555555555551,
    "taxa_sucesso": 44.4444444444444
  },
  {
    "facet": "Presidente Prudente",
    "municipio.nome": "Presidente Prudente",
    "rejeitadas": 6,
    "taxa_rejeicao": 54.5454545454545,
    "taxa_sucesso": 45.4545454545454
  },
  {
    "facet": "Ipatinga",
    "municipio.nome": "Ipatinga",
    "rejeitadas": 32,
    "taxa_rejeicao": 53.33333333333329,
    "taxa_sucesso": 46.6666666666666
  },
  {
    "facet": "Poços de Caldas",
    "municipio.nome": "Poços de Caldas",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Palmas",
    "municipio.nome": "Palmas",
    "rejeitadas": 3,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Pará de Minas",
    "municipio.nome": "Pará de Minas",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 7,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Registro",
    "municipio.nome": "Registro",
    "rejeitadas": 2,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Timbó",
    "municipio.nome": "Timbó",
    "rejeitadas": 4,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 132,
    "taxa_rejeicao": 48.8888888888888,
    "taxa_sucesso": 51.11111111111111
  },
  {
    "facet": "Mauá",
    "municipio.nome": "Mauá",
    "rejeitadas": 3,
    "taxa_rejeicao": 42.8571428571428,
    "taxa_sucesso": 57.1428571428571
  },
  {
    "facet": "Santana",
    "municipio.nome": "Santana",
    "rejeitadas": 14,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Marechal Cândido Rondon",
    "municipio.nome": "Marechal Cândido Rondon",
    "rejeitadas": 2,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
    "rejeitadas": 2,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Osasco",
    "municipio.nome": "Osasco",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Londrina",
    "municipio.nome": "Londrina",
    "rejeitadas": 11,
    "taxa_rejeicao": 31.4285714285714,
    "taxa_sucesso": 68.5714285714285
  },
  {
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
    "rejeitadas": 3,
    "taxa_rejeicao": 27.2727272727272,
    "taxa_sucesso": 72.7272727272727
  },
  {
    "facet": "Dois Irmãos",
    "municipio.nome": "Dois Irmãos",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "São Joaquim da Barra",
    "municipio.nome": "São Joaquim da Barra",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Guarulhos",
    "municipio.nome": "Guarulhos",
    "rejeitadas": 2,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Osório",
    "municipio.nome": "Osório",
    "rejeitadas": 2,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Chapecó",
    "municipio.nome": "Chapecó",
    "rejeitadas": 3,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 21,
    "taxa_rejeicao": 23.076923076923,
    "taxa_sucesso": 76.92307692307689
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 2038,
    "taxa_rejeicao": 22.750613976334,
    "taxa_sucesso": 77.2493860236659
  },
  {
    "facet": "Piúma",
    "municipio.nome": "Piúma",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 0,
    "taxa_rejeicao": 19.7183098591549,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cascavel",
    "municipio.nome": "Cascavel",
    "rejeitadas": 3,
    "taxa_rejeicao": 18.75,
    "taxa_sucesso": 81.25
  },
  {
    "facet": "São José",
    "municipio.nome": "São José",
    "rejeitadas": 4,
    "taxa_rejeicao": 18.1818181818181,
    "taxa_sucesso": 81.8181818181818
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 5,
    "taxa_rejeicao": 17.2413793103448,
    "taxa_sucesso": 82.7586206896551
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 5,
    "taxa_rejeicao": 17.2413793103448,
    "taxa_sucesso": 82.7586206896551
  },
  {
    "facet": "Xangri-lá",
    "municipio.nome": "Xangri-lá",
    "rejeitadas": 2,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Angra dos Reis",
    "municipio.nome": "Angra dos Reis",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Itapema",
    "municipio.nome": "Itapema",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Santos",
    "municipio.nome": "Santos",
    "rejeitadas": 8,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 6,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Guarapuava",
    "municipio.nome": "Guarapuava",
    "rejeitadas": 3,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Feira de Santana",
    "municipio.nome": "Feira de Santana",
    "rejeitadas": 2,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 7,
    "taxa_rejeicao": 15.2173913043478,
    "taxa_sucesso": 84.7826086956521
  },
  {
    "facet": "Itaperuna",
    "municipio.nome": "Itaperuna",
    "rejeitadas": 1,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 24,
    "taxa_rejeicao": 13.7142857142857,
    "taxa_sucesso": 86.2857142857142
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 2,
    "taxa_rejeicao": 13.3333333333333,
    "taxa_sucesso": 86.66666666666659
  },
  {
    "facet": "Niterói",
    "municipio.nome": "Niterói",
    "rejeitadas": 2,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Pinhais",
    "municipio.nome": "Pinhais",
    "rejeitadas": 6,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Lagoa Santa",
    "municipio.nome": "Lagoa Santa",
    "rejeitadas": 2,
    "taxa_rejeicao": 11.7647058823529,
    "taxa_sucesso": 88.235294117647
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 24,
    "taxa_rejeicao": 10,
    "taxa_sucesso": 98.5285101164929
  },
  {
    "facet": "Manaus",
    "municipio.nome": "Manaus",
    "rejeitadas": 1,
    "taxa_rejeicao": 10,
    "taxa_sucesso": 90
  },
  {
    "facet": "João Pessoa",
    "municipio.nome": "João Pessoa",
    "rejeitadas": 1,
    "taxa_rejeicao": 8.3333333333333,
    "taxa_sucesso": 91.66666666666659
  },
  {
    "facet": "Joinville",
    "municipio.nome": "Joinville",
    "rejeitadas": 2,
    "taxa_rejeicao": 7.4074074074074,
    "taxa_sucesso": 92.5925925925925
  },
  {
    "facet": "Santa Maria",
    "municipio.nome": "Santa Maria",
    "rejeitadas": 2,
    "taxa_rejeicao": 6.25,
    "taxa_sucesso": 93.75
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 85,
    "taxa_rejeicao": 5.9774964838255,
    "taxa_sucesso": 94.0225035161744
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 26,
    "taxa_rejeicao": 5.6277056277056,
    "taxa_sucesso": 94.3722943722943
  },
  {
    "facet": "Francisco Beltrão",
    "municipio.nome": "Francisco Beltrão",
    "rejeitadas": 1,
    "taxa_rejeicao": 5.5555555555555,
    "taxa_sucesso": 94.4444444444444
  },
  {
    "facet": "Natal",
    "municipio.nome": "Natal",
    "rejeitadas": 5,
    "taxa_rejeicao": 4.7169811320754,
    "taxa_sucesso": 95.2830188679245
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 5,
    "taxa_rejeicao": 4.3103448275862,
    "taxa_sucesso": 95.6896551724137
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 1,
    "taxa_rejeicao": 3.7037037037037,
    "taxa_sucesso": 96.29629629629619
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 8,
    "taxa_rejeicao": 3.5555555555555,
    "taxa_sucesso": 96.4444444444444
  },
  {
    "facet": "Maringá",
    "municipio.nome": "Maringá",
    "rejeitadas": 1,
    "taxa_rejeicao": 3.3333333333333,
    "taxa_sucesso": 96.66666666666659
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 10,
    "taxa_rejeicao": 3.1446540880503,
    "taxa_sucesso": 96.8553459119496
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 3,
    "taxa_rejeicao": 2.4590163934426,
    "taxa_sucesso": 97.54098360655729
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 9,
    "taxa_rejeicao": 2.3622047244094,
    "taxa_sucesso": 97.63779527559049
  },
  {
    "facet": "Cotia",
    "municipio.nome": "Cotia",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.2727272727272,
    "taxa_sucesso": 97.7272727272727
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 10,
    "taxa_rejeicao": 2.2321428571428,
    "taxa_sucesso": 97.76785714285711
  },
  {
    "facet": "Jaú",
    "municipio.nome": "Jaú",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.9607843137254,
    "taxa_sucesso": 98.0392156862745
  },
  {
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.7857142857142,
    "taxa_sucesso": 98.2142857142857
  },
  {
    "facet": "Boituva",
    "municipio.nome": "Boituva",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.7543859649122,
    "taxa_sucesso": 98.2456140350877
  },
  {
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
    "rejeitadas": 3,
    "taxa_rejeicao": 1.5463917525773,
    "taxa_sucesso": 98.4536082474226
  },
  {
    "facet": "Balneário Camboriú",
    "municipio.nome": "Balneário Camboriú",
    "rejeitadas": 36,
    "taxa_rejeicao": 1.2257405515832,
    "taxa_sucesso": 98.7742594484167
  },
  {
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.9523809523809,
    "taxa_sucesso": 99.04761904761901
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.3623188405797,
    "taxa_sucesso": 99.6376811594202
  },
  {
    "facet": "Salvador",
    "municipio.nome": "Salvador",
    "rejeitadas": 5,
    "taxa_rejeicao": 0.0889521437466,
    "taxa_sucesso": 99.91104785625329
  },
  {
    "facet": "Lins",
    "municipio.nome": "Lins",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Teresina",
    "municipio.nome": "Teresina",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Mogi Mirim",
    "municipio.nome": "Mogi Mirim",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Thun",
    "municipio.nome": "Thun",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itabaiana",
    "municipio.nome": "Itabaiana",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Muri bei Bern",
    "municipio.nome": "Muri bei Bern",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Suica",
    "municipio.nome": "Suica",
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
    "facet": "chicago",
    "municipio.nome": "chicago",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Patos de Minas",
    "municipio.nome": "Patos de Minas",
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
    "facet": "Alegre",
    "municipio.nome": "Alegre",
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
    "facet": "sohar",
    "municipio.nome": "sohar",
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
    "facet": "Pelotas",
    "municipio.nome": "Pelotas",
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
    "facet": "Maranguape",
    "municipio.nome": "Maranguape",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Saquarema",
    "municipio.nome": "Saquarema",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cebu",
    "municipio.nome": "Cebu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Vilhena",
    "municipio.nome": "Vilhena",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cruz Machado",
    "municipio.nome": "Cruz Machado",
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
    "facet": "Altdorf",
    "municipio.nome": "Altdorf",
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
    "facet": "Jaguariúna",
    "municipio.nome": "Jaguariúna",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cariacica",
    "municipio.nome": "Cariacica",
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
    "facet": "Assis",
    "municipio.nome": "Assis",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Paraguaçu Paulista",
    "municipio.nome": "Paraguaçu Paulista",
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
    "facet": "Cosmópolis",
    "municipio.nome": "Cosmópolis",
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
    "facet": "Serra Negra",
    "municipio.nome": "Serra Negra",
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
    "facet": "Jacareí",
    "municipio.nome": "Jacareí",
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
    "facet": "São Pedro da Aldeia",
    "municipio.nome": "São Pedro da Aldeia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cajamar",
    "municipio.nome": "Cajamar",
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
    "facet": "São Cristóvão",
    "municipio.nome": "São Cristóvão",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Lisboa",
    "municipio.nome": "Lisboa",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itupeva",
    "municipio.nome": "Itupeva",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pato Branco",
    "municipio.nome": "Pato Branco",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Mateiros",
    "municipio.nome": "Mateiros",
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
    "facet": "Suzano",
    "municipio.nome": "Suzano",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "memphis",
    "municipio.nome": "memphis",
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
    "facet": "San Francisco",
    "municipio.nome": "San Francisco",
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
    "facet": "Manhuaçu",
    "municipio.nome": "Manhuaçu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Caratinga",
    "municipio.nome": "Caratinga",
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
    "facet": "Palhoça",
    "municipio.nome": "Palhoça",
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
    "facet": "Ilhéus",
    "municipio.nome": "Ilhéus",
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
    "facet": "Imbé",
    "municipio.nome": "Imbé",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Urupá",
    "municipio.nome": "Urupá",
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
    "facet": "Santiago",
    "municipio.nome": "Santiago",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Madrid",
    "municipio.nome": "Madrid",
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
    "facet": "Embu das Artes",
    "municipio.nome": "Embu das Artes",
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
    "facet": "Taubaté",
    "municipio.nome": "Taubaté",
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
    "facet": "Bom Jesus do Galho",
    "municipio.nome": "Bom Jesus do Galho",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Campos do Jordão",
    "municipio.nome": "Campos do Jordão",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guarapari",
    "municipio.nome": "Guarapari",
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
    "facet": "Terra Roxa",
    "municipio.nome": "Terra Roxa",
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
    "facet": "Santa Cruz do Sul",
    "municipio.nome": "Santa Cruz do Sul",
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
    "facet": "Toledo",
    "municipio.nome": "Toledo",
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
    "facet": "Aberdeen",
    "municipio.nome": "Aberdeen",
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
    "facet": "Valinhos",
    "municipio.nome": "Valinhos",
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
    "facet": "Subingen",
    "municipio.nome": "Subingen",
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
    "facet": "Cataguases",
    "municipio.nome": "Cataguases",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Dumont",
    "municipio.nome": "Dumont",
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
    "facet": "Mossoró",
    "municipio.nome": "Mossoró",
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
    "facet": "Paulínia",
    "municipio.nome": "Paulínia",
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
    "facet": "Franca",
    "municipio.nome": "Franca",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Imperatriz",
    "municipio.nome": "Imperatriz",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jonesboro",
    "municipio.nome": "Jonesboro",
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
    "facet": "Itajubá",
    "municipio.nome": "Itajubá",
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
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
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
    "facet": "Diadema",
    "municipio.nome": "Diadema",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Candelária",
    "municipio.nome": "Candelária",
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
    "facet": "Andradina",
    "municipio.nome": "Andradina",
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
    "facet": "Salto",
    "municipio.nome": "Salto",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "messina",
    "municipio.nome": "messina",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Vicente",
    "municipio.nome": "São Vicente",
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
    "facet": "Itaquaquecetuba",
    "municipio.nome": "Itaquaquecetuba",
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
    "facet": "Guaíra",
    "municipio.nome": "Guaíra",
    "rejeitadas": 1,
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
    "facet": "London",
    "municipio.nome": "London",
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
    "facet": "Nova Lima",
    "municipio.nome": "Nova Lima",
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
    "facet": "Menlo Park",
    "municipio.nome": "Menlo Park",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cruz Alta",
    "municipio.nome": "Cruz Alta",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Naters",
    "municipio.nome": "Naters",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Pedro",
    "municipio.nome": "São Pedro",
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
    "facet": "Ouro Preto do Oeste",
    "municipio.nome": "Ouro Preto do Oeste",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Macaé",
    "municipio.nome": "Macaé",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pachuca",
    "municipio.nome": "Pachuca",
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
    "facet": "Ivoti",
    "municipio.nome": "Ivoti",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Brisbane",
    "municipio.nome": "Brisbane",
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
    "facet": "Teresópolis",
    "municipio.nome": "Teresópolis",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Milton Keynes",
    "municipio.nome": "Milton Keynes",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Liverpool",
    "municipio.nome": "Liverpool",
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
    "facet": "Júlio de Castilhos",
    "municipio.nome": "Júlio de Castilhos",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Serra",
    "municipio.nome": "Serra",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guarani",
    "municipio.nome": "Guarani",
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
    "facet": "Rio Verde",
    "municipio.nome": "Rio Verde",
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
    "facet": "Hergiswil",
    "municipio.nome": "Hergiswil",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jaboticabal",
    "municipio.nome": "Jaboticabal",
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
    "facet": "Allschwil",
    "municipio.nome": "Allschwil",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "GUAYAQUIL",
    "municipio.nome": "GUAYAQUIL",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Vargem Grande Paulista",
    "municipio.nome": "Vargem Grande Paulista",
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
    "facet": "Nova Santa Rita",
    "municipio.nome": "Nova Santa Rita",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Aracati",
    "municipio.nome": "Aracati",
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
    "facet": "Treze Tílias",
    "municipio.nome": "Treze Tílias",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Amparo",
    "municipio.nome": "Amparo",
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
    "facet": "São Bernardo",
    "municipio.nome": "São Bernardo",
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
    "facet": "Itabira",
    "municipio.nome": "Itabira",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cambuí",
    "municipio.nome": "Cambuí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Caetano do Sul",
    "municipio.nome": "São Caetano do Sul",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itumbiara",
    "municipio.nome": "Itumbiara",
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
    "facet": "Saltillo",
    "municipio.nome": "Saltillo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São José de Ribamar",
    "municipio.nome": "São José de Ribamar",
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
    "facet": "Pontes e Lacerda",
    "municipio.nome": "Pontes e Lacerda",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Lauro de Freitas",
    "municipio.nome": "Lauro de Freitas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Videira",
    "municipio.nome": "Videira",
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
    "facet": "Nao informado",
    "municipio.nome": "Nao informado",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Seropédica",
    "municipio.nome": "Seropédica",
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
    "facet": "Rio Claro",
    "municipio.nome": "Rio Claro",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
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
    "facet": "Medellin",
    "municipio.nome": "Medellin",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Rio Doce",
    "municipio.nome": "Rio Doce",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Americana",
    "municipio.nome": "Americana",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Tietê",
    "municipio.nome": "Tietê",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Campeche",
    "municipio.nome": "Campeche",
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
    "facet": "Petrópolis",
    "municipio.nome": "Petrópolis",
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
    "facet": "Linhares",
    "municipio.nome": "Linhares",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Piraju",
    "municipio.nome": "Piraju",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ubá",
    "municipio.nome": "Ubá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Lima",
    "municipio.nome": "Lima",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Antônio Prado",
    "municipio.nome": "Antônio Prado",
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
    "facet": "Schroeder",
    "municipio.nome": "Schroeder",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Anápolis",
    "municipio.nome": "Anápolis",
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
    "facet": "San anselmo",
    "municipio.nome": "San anselmo",
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
    "facet": "Pedreira",
    "municipio.nome": "Pedreira",
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
    "beginTimeSeconds": 1782919260,
    "endTimeSeconds": 1782920460,
    "rejeicao": 20.982263374312918,
    "sucesso": 79.01773662568692
  },
  {
    "beginTimeSeconds": 1782920460,
    "endTimeSeconds": 1782921660,
    "rejeicao": 21.228979104587797,
    "sucesso": 78.77102089541224
  },
  {
    "beginTimeSeconds": 1782921660,
    "endTimeSeconds": 1782922860,
    "rejeicao": 21.622974552084177,
    "sucesso": 78.37702544791587
  },
  {
    "beginTimeSeconds": 1782922860,
    "endTimeSeconds": 1782924060,
    "rejeicao": 21.803432141698988,
    "sucesso": 78.19656785830102
  },
  {
    "beginTimeSeconds": 1782924060,
    "endTimeSeconds": 1782925260,
    "rejeicao": 21.768894272632696,
    "sucesso": 78.23110572736735
  },
  {
    "beginTimeSeconds": 1782925260,
    "endTimeSeconds": 1782926460,
    "rejeicao": 21.48980347634041,
    "sucesso": 78.510196523659
  },
  {
    "beginTimeSeconds": 1782926460,
    "endTimeSeconds": 1782927660,
    "rejeicao": 22.101056299543338,
    "sucesso": 77.89894370045647
  },
  {
    "beginTimeSeconds": 1782927660,
    "endTimeSeconds": 1782928860,
    "rejeicao": 21.823669617286434,
    "sucesso": 78.17633038271342
  },
  {
    "beginTimeSeconds": 1782928860,
    "endTimeSeconds": 1782930060,
    "rejeicao": 21.3115513976298,
    "sucesso": 78.68844860237039
  },
  {
    "beginTimeSeconds": 1782930060,
    "endTimeSeconds": 1782931260,
    "rejeicao": 21.39531745912126,
    "sucesso": 78.60468254087864
  },
  {
    "beginTimeSeconds": 1782931260,
    "endTimeSeconds": 1782932460,
    "rejeicao": 20.915800209276142,
    "sucesso": 79.08419979072389
  },
  {
    "beginTimeSeconds": 1782932460,
    "endTimeSeconds": 1782933660,
    "rejeicao": 20.746442883117684,
    "sucesso": 79.25355711688232
  }
],
  taxaSucessoMunicipioTs: [{"facet": "Aracati", "beginTimeSeconds": 1782919260, "endTimeSeconds": 1782920460, "municipio.nome": "Aracati", "sucesso": null}, {"facet": "Aracati", "beginTimeSeconds": 1782920460, "endTimeSeconds": 1782921660, "municipio.nome": "Aracati", "sucesso": null}, {"facet": "Aracati", "beginTimeSeconds": 1782921660, "endTimeSeconds": 1782922860, "municipio.nome": "Aracati", "sucesso": null}, {"facet": "Aracati", "beginTimeSeconds": 1782922860, "endTimeSeconds": 1782924060, "municipio.nome": "Aracati", "sucesso": null}, {"facet": "Aracati", "beginTimeSeconds": 1782924060, "endTimeSeconds": 1782925260, "municipio.nome": "Aracati", "sucesso": null}, {"facet": "Aracati", "beginTimeSeconds": 1782925260, "endTimeSeconds": 1782926460, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1782926460, "endTimeSeconds": 1782927660, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1782927660, "endTimeSeconds": 1782928860, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1782928860, "endTimeSeconds": 1782930060, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1782930060, "endTimeSeconds": 1782931260, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1782931260, "endTimeSeconds": 1782932460, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1782932460, "endTimeSeconds": 1782933660, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Andradina", "beginTimeSeconds": 1782919260, "endTimeSeconds": 1782920460, "municipio.nome": "Andradina", "sucesso": 100.0}, {"facet": "Andradina", "beginTimeSeconds": 1782920460, "endTimeSeconds": 1782921660, "municipio.nome": "Andradina", "sucesso": 100.0}, {"facet": "Andradina", "beginTimeSeconds": 1782921660, "endTimeSeconds": 1782922860, "municipio.nome": "Andradina", "sucesso": 100.0}, {"facet": "Andradina", "beginTimeSeconds": 1782922860, "endTimeSeconds": 1782924060, "municipio.nome": "Andradina", "sucesso": 100.0}, {"facet": "Andradina", "beginTimeSeconds": 1782924060, "endTimeSeconds": 1782925260, "municipio.nome": "Andradina", "sucesso": 100.0}, {"facet": "Andradina", "beginTimeSeconds": 1782925260, "endTimeSeconds": 1782926460, "municipio.nome": "Andradina", "sucesso": 100.0}, {"facet": "Andradina", "beginTimeSeconds": 1782926460, "endTimeSeconds": 1782927660, "municipio.nome": "Andradina", "sucesso": 100.0}, {"facet": "Andradina", "beginTimeSeconds": 1782927660, "endTimeSeconds": 1782928860, "municipio.nome": "Andradina", "sucesso": 100.0}, {"facet": "Andradina", "beginTimeSeconds": 1782928860, "endTimeSeconds": 1782930060, "municipio.nome": "Andradina", "sucesso": 100.0}, {"facet": "Andradina", "beginTimeSeconds": 1782930060, "endTimeSeconds": 1782931260, "municipio.nome": "Andradina", "sucesso": 100.0}, {"facet": "Andradina", "beginTimeSeconds": 1782931260, "endTimeSeconds": 1782932460, "municipio.nome": "Andradina", "sucesso": 100.0}, {"facet": "Andradina", "beginTimeSeconds": 1782932460, "endTimeSeconds": 1782933660, "municipio.nome": "Andradina", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782919260, "endTimeSeconds": 1782920460, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782920460, "endTimeSeconds": 1782921660, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782921660, "endTimeSeconds": 1782922860, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782922860, "endTimeSeconds": 1782924060, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782924060, "endTimeSeconds": 1782925260, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782925260, "endTimeSeconds": 1782926460, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782926460, "endTimeSeconds": 1782927660, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782927660, "endTimeSeconds": 1782928860, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782928860, "endTimeSeconds": 1782930060, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782930060, "endTimeSeconds": 1782931260, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782931260, "endTimeSeconds": 1782932460, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782932460, "endTimeSeconds": 1782933660, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782919260, "endTimeSeconds": 1782920460, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782920460, "endTimeSeconds": 1782921660, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782921660, "endTimeSeconds": 1782922860, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782922860, "endTimeSeconds": 1782924060, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782924060, "endTimeSeconds": 1782925260, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782925260, "endTimeSeconds": 1782926460, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782926460, "endTimeSeconds": 1782927660, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782927660, "endTimeSeconds": 1782928860, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782928860, "endTimeSeconds": 1782930060, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782930060, "endTimeSeconds": 1782931260, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782931260, "endTimeSeconds": 1782932460, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782932460, "endTimeSeconds": 1782933660, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782919260, "endTimeSeconds": 1782920460, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782920460, "endTimeSeconds": 1782921660, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782921660, "endTimeSeconds": 1782922860, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782922860, "endTimeSeconds": 1782924060, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782924060, "endTimeSeconds": 1782925260, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782925260, "endTimeSeconds": 1782926460, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782926460, "endTimeSeconds": 1782927660, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782927660, "endTimeSeconds": 1782928860, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782928860, "endTimeSeconds": 1782930060, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782930060, "endTimeSeconds": 1782931260, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782931260, "endTimeSeconds": 1782932460, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782932460, "endTimeSeconds": 1782933660, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782919260, "endTimeSeconds": 1782920460, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782920460, "endTimeSeconds": 1782921660, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782921660, "endTimeSeconds": 1782922860, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782922860, "endTimeSeconds": 1782924060, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782924060, "endTimeSeconds": 1782925260, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782925260, "endTimeSeconds": 1782926460, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782926460, "endTimeSeconds": 1782927660, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782927660, "endTimeSeconds": 1782928860, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782928860, "endTimeSeconds": 1782930060, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782930060, "endTimeSeconds": 1782931260, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782931260, "endTimeSeconds": 1782932460, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782932460, "endTimeSeconds": 1782933660, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782919260, "endTimeSeconds": 1782920460, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782920460, "endTimeSeconds": 1782921660, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782921660, "endTimeSeconds": 1782922860, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782922860, "endTimeSeconds": 1782924060, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782924060, "endTimeSeconds": 1782925260, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782925260, "endTimeSeconds": 1782926460, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782926460, "endTimeSeconds": 1782927660, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782927660, "endTimeSeconds": 1782928860, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782928860, "endTimeSeconds": 1782930060, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782930060, "endTimeSeconds": 1782931260, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782931260, "endTimeSeconds": 1782932460, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782932460, "endTimeSeconds": 1782933660, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782919260, "endTimeSeconds": 1782920460, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782920460, "endTimeSeconds": 1782921660, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782921660, "endTimeSeconds": 1782922860, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782922860, "endTimeSeconds": 1782924060, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782924060, "endTimeSeconds": 1782925260, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782925260, "endTimeSeconds": 1782926460, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782926460, "endTimeSeconds": 1782927660, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782927660, "endTimeSeconds": 1782928860, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782928860, "endTimeSeconds": 1782930060, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782930060, "endTimeSeconds": 1782931260, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782931260, "endTimeSeconds": 1782932460, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782932460, "endTimeSeconds": 1782933660, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782919260, "endTimeSeconds": 1782920460, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782920460, "endTimeSeconds": 1782921660, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782921660, "endTimeSeconds": 1782922860, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782922860, "endTimeSeconds": 1782924060, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782924060, "endTimeSeconds": 1782925260, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782925260, "endTimeSeconds": 1782926460, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782926460, "endTimeSeconds": 1782927660, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782927660, "endTimeSeconds": 1782928860, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782928860, "endTimeSeconds": 1782930060, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782930060, "endTimeSeconds": 1782931260, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782931260, "endTimeSeconds": 1782932460, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782932460, "endTimeSeconds": 1782933660, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782919260, "endTimeSeconds": 1782920460, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782920460, "endTimeSeconds": 1782921660, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782921660, "endTimeSeconds": 1782922860, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782922860, "endTimeSeconds": 1782924060, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782924060, "endTimeSeconds": 1782925260, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782925260, "endTimeSeconds": 1782926460, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782926460, "endTimeSeconds": 1782927660, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782927660, "endTimeSeconds": 1782928860, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782928860, "endTimeSeconds": 1782930060, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782930060, "endTimeSeconds": 1782931260, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782931260, "endTimeSeconds": 1782932460, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782932460, "endTimeSeconds": 1782933660, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Amparo", "beginTimeSeconds": 1782919260, "endTimeSeconds": 1782920460, "municipio.nome": "Amparo", "sucesso": 100.0}, {"facet": "Amparo", "beginTimeSeconds": 1782920460, "endTimeSeconds": 1782921660, "municipio.nome": "Amparo", "sucesso": 100.0}, {"facet": "Amparo", "beginTimeSeconds": 1782921660, "endTimeSeconds": 1782922860, "municipio.nome": "Amparo", "sucesso": 100.0}, {"facet": "Amparo", "beginTimeSeconds": 1782922860, "endTimeSeconds": 1782924060, "municipio.nome": "Amparo", "sucesso": 100.0}, {"facet": "Amparo", "beginTimeSeconds": 1782924060, "endTimeSeconds": 1782925260, "municipio.nome": "Amparo", "sucesso": 100.0}, {"facet": "Amparo", "beginTimeSeconds": 1782925260, "endTimeSeconds": 1782926460, "municipio.nome": "Amparo", "sucesso": 100.0}, {"facet": "Amparo", "beginTimeSeconds": 1782926460, "endTimeSeconds": 1782927660, "municipio.nome": "Amparo", "sucesso": 100.0}, {"facet": "Amparo", "beginTimeSeconds": 1782927660, "endTimeSeconds": 1782928860, "municipio.nome": "Amparo", "sucesso": 100.0}, {"facet": "Amparo", "beginTimeSeconds": 1782928860, "endTimeSeconds": 1782930060, "municipio.nome": "Amparo", "sucesso": 100.0}, {"facet": "Amparo", "beginTimeSeconds": 1782930060, "endTimeSeconds": 1782931260, "municipio.nome": "Amparo", "sucesso": 100.0}, {"facet": "Amparo", "beginTimeSeconds": 1782931260, "endTimeSeconds": 1782932460, "municipio.nome": "Amparo", "sucesso": 100.0}, {"facet": "Amparo", "beginTimeSeconds": 1782932460, "endTimeSeconds": 1782933660, "municipio.nome": "Amparo", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782919260, "endTimeSeconds": 1782920460, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782920460, "endTimeSeconds": 1782921660, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782921660, "endTimeSeconds": 1782922860, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782922860, "endTimeSeconds": 1782924060, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782924060, "endTimeSeconds": 1782925260, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782925260, "endTimeSeconds": 1782926460, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782926460, "endTimeSeconds": 1782927660, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782927660, "endTimeSeconds": 1782928860, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782928860, "endTimeSeconds": 1782930060, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782930060, "endTimeSeconds": 1782931260, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782931260, "endTimeSeconds": 1782932460, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782932460, "endTimeSeconds": 1782933660, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782919260, "endTimeSeconds": 1782920460, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782920460, "endTimeSeconds": 1782921660, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782921660, "endTimeSeconds": 1782922860, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782922860, "endTimeSeconds": 1782924060, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782924060, "endTimeSeconds": 1782925260, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782925260, "endTimeSeconds": 1782926460, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782926460, "endTimeSeconds": 1782927660, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782927660, "endTimeSeconds": 1782928860, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782928860, "endTimeSeconds": 1782930060, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782930060, "endTimeSeconds": 1782931260, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782931260, "endTimeSeconds": 1782932460, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782932460, "endTimeSeconds": 1782933660, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "S\u00e3o Bernardo", "beginTimeSeconds": 1782919260, "endTimeSeconds": 1782920460, "municipio.nome": "S\u00e3o Bernardo", "sucesso": null}, {"facet": "S\u00e3o Bernardo", "beginTimeSeconds": 1782920460, "endTimeSeconds": 1782921660, "municipio.nome": "S\u00e3o Bernardo", "sucesso": null}, {"facet": "S\u00e3o Bernardo", "beginTimeSeconds": 1782921660, "endTimeSeconds": 1782922860, "municipio.nome": "S\u00e3o Bernardo", "sucesso": null}, {"facet": "S\u00e3o Bernardo", "beginTimeSeconds": 1782922860, "endTimeSeconds": 1782924060, "municipio.nome": "S\u00e3o Bernardo", "sucesso": null}, {"facet": "S\u00e3o Bernardo", "beginTimeSeconds": 1782924060, "endTimeSeconds": 1782925260, "municipio.nome": "S\u00e3o Bernardo", "sucesso": null}, {"facet": "S\u00e3o Bernardo", "beginTimeSeconds": 1782925260, "endTimeSeconds": 1782926460, "municipio.nome": "S\u00e3o Bernardo", "sucesso": null}, {"facet": "S\u00e3o Bernardo", "beginTimeSeconds": 1782926460, "endTimeSeconds": 1782927660, "municipio.nome": "S\u00e3o Bernardo", "sucesso": null}, {"facet": "S\u00e3o Bernardo", "beginTimeSeconds": 1782927660, "endTimeSeconds": 1782928860, "municipio.nome": "S\u00e3o Bernardo", "sucesso": 100.0}, {"facet": "S\u00e3o Bernardo", "beginTimeSeconds": 1782928860, "endTimeSeconds": 1782930060, "municipio.nome": "S\u00e3o Bernardo", "sucesso": 100.0}, {"facet": "S\u00e3o Bernardo", "beginTimeSeconds": 1782930060, "endTimeSeconds": 1782931260, "municipio.nome": "S\u00e3o Bernardo", "sucesso": 100.0}, {"facet": "S\u00e3o Bernardo", "beginTimeSeconds": 1782931260, "endTimeSeconds": 1782932460, "municipio.nome": "S\u00e3o Bernardo", "sucesso": 100.0}, {"facet": "S\u00e3o Bernardo", "beginTimeSeconds": 1782932460, "endTimeSeconds": 1782933660, "municipio.nome": "S\u00e3o Bernardo", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782919260, "endTimeSeconds": 1782920460, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782920460, "endTimeSeconds": 1782921660, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782921660, "endTimeSeconds": 1782922860, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782922860, "endTimeSeconds": 1782924060, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782924060, "endTimeSeconds": 1782925260, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782925260, "endTimeSeconds": 1782926460, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782926460, "endTimeSeconds": 1782927660, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782927660, "endTimeSeconds": 1782928860, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782928860, "endTimeSeconds": 1782930060, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782930060, "endTimeSeconds": 1782931260, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782931260, "endTimeSeconds": 1782932460, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782932460, "endTimeSeconds": 1782933660, "municipio.nome": "Olinda", "sucesso": 100.0}]
};
