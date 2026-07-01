// Gerado automaticamente pelo workflow monitoramento-nfe.yml em 01/07/2026 01:56 (Brasilia)
// NAO EDITAR MANUALMENTE
var monitoramentoNfeData = {
  geradoEm: "01/07/2026 01:56",
  travadasPorMunicipio: [
  {
    "facet": "Corbélia",
    "latest.nfe.stuck_in_intermediate_status.count": 399,
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
    "facet": "Conselheiro Lafaiete",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Conselheiro Lafaiete"
  },
  {
    "facet": "Caraguatatuba",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Caraguatatuba"
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
    "facet": "São Joaquim da Barra",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "São Joaquim da Barra"
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
    "facet": "Balneário Camboriú",
    "max.nfe.processing_time.minutes": 51,
    "nfe.municipio_servico": "Balneário Camboriú"
  },
  {
    "facet": "Marília",
    "max.nfe.processing_time.minutes": 51,
    "nfe.municipio_servico": "Marília"
  },
  {
    "facet": "Jaraguá do Sul",
    "max.nfe.processing_time.minutes": 49,
    "nfe.municipio_servico": "Jaraguá do Sul"
  },
  {
    "facet": "Taubaté",
    "max.nfe.processing_time.minutes": 46,
    "nfe.municipio_servico": "Taubaté"
  },
  {
    "facet": "Blumenau",
    "max.nfe.processing_time.minutes": 43,
    "nfe.municipio_servico": "Blumenau"
  },
  {
    "facet": "Nova Lima",
    "max.nfe.processing_time.minutes": 38,
    "nfe.municipio_servico": "Nova Lima"
  },
  {
    "facet": "São José dos Campos",
    "max.nfe.processing_time.minutes": 37,
    "nfe.municipio_servico": "São José dos Campos"
  },
  {
    "facet": "Cuiabá",
    "max.nfe.processing_time.minutes": 37,
    "nfe.municipio_servico": "Cuiabá"
  },
  {
    "facet": "Londrina",
    "max.nfe.processing_time.minutes": 33,
    "nfe.municipio_servico": "Londrina"
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
    "average.nfe.processing_time.minutes": 7.333333333333333,
    "facet": "Cancelada",
    "nfe.status": "Cancelada"
  },
  {
    "average.nfe.processing_time.minutes": 2.2021237641889417,
    "facet": "Negada",
    "nfe.status": "Negada"
  },
  {
    "average.nfe.processing_time.minutes": 1.73827988541885,
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
    "max_min": 15,
    "media_min": 7.333333333333333,
    "p95_min": {
      "95": 15
    }
  },
  {
    "facet": [
      "Negada",
      "EmProcessoDeAutorizacao"
    ],
    "max_min": 51,
    "media_min": 2.2079073777558813,
    "p95_min": {
      "95": 14.125
    }
  },
  {
    "facet": [
      "Negada",
      "AguardandoAutorizacao"
    ],
    "max_min": 2,
    "media_min": 2,
    "p95_min": {
      "95": 2
    }
  },
  {
    "facet": [
      "Autorizada",
      "AutorizadaAguardandoGeracaoPDF"
    ],
    "max_min": 57,
    "media_min": 1.73827988541885,
    "p95_min": {
      "95": 8.125
    }
  },
  {
    "facet": [
      "Negada",
      "SolicitandoAutorizacao"
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
    "average.nfe.processing_time.minutes": 57,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Rio Grande",
    "max.nfe.processing_time.minutes": 57,
    "nfe.municipio_servico": "Rio Grande",
    "percentile.nfe.processing_time.minutes": {
      "95": 57
    }
  },
  {
    "average.nfe.processing_time.minutes": 51,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Marília",
    "max.nfe.processing_time.minutes": 51,
    "nfe.municipio_servico": "Marília",
    "percentile.nfe.processing_time.minutes": {
      "95": 51
    }
  },
  {
    "average.nfe.processing_time.minutes": 49,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Jaraguá do Sul",
    "max.nfe.processing_time.minutes": 49,
    "nfe.municipio_servico": "Jaraguá do Sul",
    "percentile.nfe.processing_time.minutes": {
      "95": 49
    }
  },
  {
    "average.nfe.processing_time.minutes": 29.341666666666665,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Balneário Camboriú",
    "max.nfe.processing_time.minutes": 51,
    "nfe.municipio_servico": "Balneário Camboriú",
    "percentile.nfe.processing_time.minutes": {
      "95": 51
    }
  },
  {
    "average.nfe.processing_time.minutes": 25,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Nova Iguaçu",
    "max.nfe.processing_time.minutes": 25,
    "nfe.municipio_servico": "Nova Iguaçu",
    "percentile.nfe.processing_time.minutes": {
      "95": 25
    }
  },
  {
    "average.nfe.processing_time.minutes": 19.466666666666665,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Nova Lima",
    "max.nfe.processing_time.minutes": 38,
    "nfe.municipio_servico": "Nova Lima",
    "percentile.nfe.processing_time.minutes": {
      "95": 38
    }
  },
  {
    "average.nfe.processing_time.minutes": 16.725,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Londrina",
    "max.nfe.processing_time.minutes": 33,
    "nfe.municipio_servico": "Londrina",
    "percentile.nfe.processing_time.minutes": {
      "95": 33
    }
  },
  {
    "average.nfe.processing_time.minutes": 16.091666666666665,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 32,
    "nfe.municipio_servico": "Caraguatatuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 32
    }
  },
  {
    "average.nfe.processing_time.minutes": 15,
    "count.nfe.processing_time.minutes": 74,
    "facet": "Queimados",
    "max.nfe.processing_time.minutes": 20,
    "nfe.municipio_servico": "Queimados",
    "percentile.nfe.processing_time.minutes": {
      "95": 20
    }
  },
  {
    "average.nfe.processing_time.minutes": 13.764705882352942,
    "count.nfe.processing_time.minutes": 102,
    "facet": "Taubaté",
    "max.nfe.processing_time.minutes": 46,
    "nfe.municipio_servico": "Taubaté",
    "percentile.nfe.processing_time.minutes": {
      "95": 41.5
    }
  },
  {
    "average.nfe.processing_time.minutes": 12.633333333333333,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Cuiabá",
    "max.nfe.processing_time.minutes": 37,
    "nfe.municipio_servico": "Cuiabá",
    "percentile.nfe.processing_time.minutes": {
      "95": 31.25
    }
  },
  {
    "average.nfe.processing_time.minutes": 12.576923076923077,
    "count.nfe.processing_time.minutes": 52,
    "facet": "Taquara",
    "max.nfe.processing_time.minutes": 17,
    "nfe.municipio_servico": "Taquara",
    "percentile.nfe.processing_time.minutes": {
      "95": 17
    }
  },
  {
    "average.nfe.processing_time.minutes": 9.166666666666666,
    "count.nfe.processing_time.minutes": 60,
    "facet": "São José dos Campos",
    "max.nfe.processing_time.minutes": 37,
    "nfe.municipio_servico": "São José dos Campos",
    "percentile.nfe.processing_time.minutes": {
      "95": 37
    }
  },
  {
    "average.nfe.processing_time.minutes": 8.740384615384615,
    "count.nfe.processing_time.minutes": 104,
    "facet": "Alto Paraíso de Goiás",
    "max.nfe.processing_time.minutes": 11,
    "nfe.municipio_servico": "Alto Paraíso de Goiás",
    "percentile.nfe.processing_time.minutes": {
      "95": 11
    }
  },
  {
    "average.nfe.processing_time.minutes": 8,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Maranguape",
    "max.nfe.processing_time.minutes": 8,
    "nfe.municipio_servico": "Maranguape",
    "percentile.nfe.processing_time.minutes": {
      "95": 8
    }
  },
  {
    "average.nfe.processing_time.minutes": 6.641666666666667,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Recife",
    "max.nfe.processing_time.minutes": 26,
    "nfe.municipio_servico": "Recife",
    "percentile.nfe.processing_time.minutes": {
      "95": 26
    }
  },
  {
    "average.nfe.processing_time.minutes": 6.158878504672897,
    "count.nfe.processing_time.minutes": 107,
    "facet": "Bauru",
    "max.nfe.processing_time.minutes": 17,
    "nfe.municipio_servico": "Bauru",
    "percentile.nfe.processing_time.minutes": {
      "95": 17
    }
  },
  {
    "average.nfe.processing_time.minutes": 5.816666666666666,
    "count.nfe.processing_time.minutes": 180,
    "facet": "Taboão da Serra",
    "max.nfe.processing_time.minutes": 22,
    "nfe.municipio_servico": "Taboão da Serra",
    "percentile.nfe.processing_time.minutes": {
      "95": 20.125
    }
  },
  {
    "average.nfe.processing_time.minutes": 5.791666666666667,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Ribeirão Preto",
    "max.nfe.processing_time.minutes": 13,
    "nfe.municipio_servico": "Ribeirão Preto",
    "percentile.nfe.processing_time.minutes": {
      "95": 13
    }
  },
  {
    "average.nfe.processing_time.minutes": 5.733333333333333,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Tubarão",
    "max.nfe.processing_time.minutes": 8,
    "nfe.municipio_servico": "Tubarão",
    "percentile.nfe.processing_time.minutes": {
      "95": 8
    }
  },
  {
    "average.nfe.processing_time.minutes": 5.7,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Uberlândia",
    "max.nfe.processing_time.minutes": 22,
    "nfe.municipio_servico": "Uberlândia",
    "percentile.nfe.processing_time.minutes": {
      "95": 22
    }
  },
  {
    "average.nfe.processing_time.minutes": 5.223214285714286,
    "count.nfe.processing_time.minutes": 112,
    "facet": "Anápolis",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Anápolis",
    "percentile.nfe.processing_time.minutes": {
      "95": 6
    }
  },
  {
    "average.nfe.processing_time.minutes": 5,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Camaçari",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "Camaçari",
    "percentile.nfe.processing_time.minutes": {
      "95": 10
    }
  },
  {
    "average.nfe.processing_time.minutes": 4.693693693693693,
    "count.nfe.processing_time.minutes": 222,
    "facet": "",
    "max.nfe.processing_time.minutes": 15,
    "nfe.municipio_servico": "",
    "percentile.nfe.processing_time.minutes": {
      "95": 15
    }
  },
  {
    "average.nfe.processing_time.minutes": 4.408333333333333,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Blumenau",
    "max.nfe.processing_time.minutes": 43,
    "nfe.municipio_servico": "Blumenau",
    "percentile.nfe.processing_time.minutes": {
      "95": 36.5
    }
  },
  {
    "average.nfe.processing_time.minutes": 4,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Mandaguaçu",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Mandaguaçu",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 4,
    "count.nfe.processing_time.minutes": 120,
    "facet": "João Pessoa",
    "max.nfe.processing_time.minutes": 8,
    "nfe.municipio_servico": "João Pessoa",
    "percentile.nfe.processing_time.minutes": {
      "95": 8
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.8222222222222224,
    "count.nfe.processing_time.minutes": 180,
    "facet": "Curitiba",
    "max.nfe.processing_time.minutes": 21,
    "nfe.municipio_servico": "Curitiba",
    "percentile.nfe.processing_time.minutes": {
      "95": 19.125
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.4833333333333334,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Pará de Minas",
    "max.nfe.processing_time.minutes": 19,
    "nfe.municipio_servico": "Pará de Minas",
    "percentile.nfe.processing_time.minutes": {
      "95": 19
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.283333333333333,
    "count.nfe.processing_time.minutes": 120,
    "facet": "São Caetano do Sul",
    "max.nfe.processing_time.minutes": 8,
    "nfe.municipio_servico": "São Caetano do Sul",
    "percentile.nfe.processing_time.minutes": {
      "95": 8
    }
  },
  {
    "average.nfe.processing_time.minutes": 3,
    "count.nfe.processing_time.minutes": 42,
    "facet": "Varginha",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Varginha",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 3,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Aparecida de Goiânia",
    "max.nfe.processing_time.minutes": 9,
    "nfe.municipio_servico": "Aparecida de Goiânia",
    "percentile.nfe.processing_time.minutes": {
      "95": 9
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.9166666666666665,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Vila Velha",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Vila Velha",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.8833333333333333,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Piracicaba",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Piracicaba",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.85,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Novo Hamburgo",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Novo Hamburgo",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.683333333333333,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Campinas",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Campinas",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.2083333333333335,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Florianópolis",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Florianópolis",
    "percentile.nfe.processing_time.minutes": {
      "95": 6
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.15,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Itajubá",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Itajubá",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.1333333333333333,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Niterói",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Niterói",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.0093457943925235,
    "count.nfe.processing_time.minutes": 107,
    "facet": "Itajaí",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Itajaí",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Dourados",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Dourados",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 27,
    "facet": "Tacaratu",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Tacaratu",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Goianésia",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Goianésia",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Linhares",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Linhares",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.8076923076923077,
    "count.nfe.processing_time.minutes": 52,
    "facet": "Timóteo",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Timóteo",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.6916666666666667,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Brasília",
    "max.nfe.processing_time.minutes": 13,
    "nfe.municipio_servico": "Brasília",
    "percentile.nfe.processing_time.minutes": {
      "95": 7.03125
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.5916666666666666,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Chapecó",
    "max.nfe.processing_time.minutes": 11,
    "nfe.municipio_servico": "Chapecó",
    "percentile.nfe.processing_time.minutes": {
      "95": 11
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.5,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Santo André",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Santo André",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.5,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Americana",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Americana",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.4166666666666667,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Campina Grande",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Campina Grande",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  }
],
  empresasMunicipio: [
  {
    "facet": "Eusébio",
    "nfe.municipio_servico": "Eusébio",
    "uniqueCount.empresa.razao_social": 5
  },
  {
    "facet": "São Joaquim da Barra",
    "nfe.municipio_servico": "São Joaquim da Barra",
    "uniqueCount.empresa.razao_social": 4
  },
  {
    "facet": "Naviraí",
    "nfe.municipio_servico": "Naviraí",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Conselheiro Lafaiete",
    "nfe.municipio_servico": "Conselheiro Lafaiete",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Caraguatatuba",
    "nfe.municipio_servico": "Caraguatatuba",
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
    "average.nfe.processing_time.minutes": 1.9501895442122896,
    "max.nfe.processing_time.minutes": 57,
    "percentile.nfe.processing_time.minutes": {
      "50": 0,
      "90": 3.03125,
      "95": 10.125,
      "99": 38.5
    }
  }
],
  totalEmpresas: [
  {
    "uniqueCount.empresa.razao_social": 19
  }
],
  totalMunicipios: [
  {
    "uniqueCount.nfe.municipio_servico": 292
  }
],
  volumeMunicipio: [
  {
    "count.nfe.processing_time.minutes": 222,
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
    "facet": "Curitiba",
    "nfe.municipio_servico": "Curitiba"
  },
  {
    "count.nfe.processing_time.minutes": 167,
    "facet": "Barueri",
    "nfe.municipio_servico": "Barueri"
  },
  {
    "count.nfe.processing_time.minutes": 152,
    "facet": "Barra do Piraí",
    "nfe.municipio_servico": "Barra do Piraí"
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
    "facet": "São Bernardo do Campo",
    "nfe.municipio_servico": "São Bernardo do Campo"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Belo Horizonte",
    "nfe.municipio_servico": "Belo Horizonte"
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
    "facet": "Cachoeirinha",
    "nfe.municipio_servico": "Cachoeirinha"
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
    "facet": "Cravinhos",
    "nfe.municipio_servico": "Cravinhos"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Boituva",
    "nfe.municipio_servico": "Boituva"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Nova Lima",
    "nfe.municipio_servico": "Nova Lima"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Londrina",
    "nfe.municipio_servico": "Londrina"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Duque de Caxias",
    "nfe.municipio_servico": "Duque de Caxias"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Rio de Janeiro",
    "nfe.municipio_servico": "Rio de Janeiro"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Ouro Preto do Oeste",
    "nfe.municipio_servico": "Ouro Preto do Oeste"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Botucatu",
    "nfe.municipio_servico": "Botucatu"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Campina Grande",
    "nfe.municipio_servico": "Campina Grande"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Sumaré",
    "nfe.municipio_servico": "Sumaré"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Santa Maria",
    "nfe.municipio_servico": "Santa Maria"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Praia Grande",
    "nfe.municipio_servico": "Praia Grande"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Jundiaí",
    "nfe.municipio_servico": "Jundiaí"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Caraguatatuba",
    "nfe.municipio_servico": "Caraguatatuba"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Serra",
    "nfe.municipio_servico": "Serra"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Jacareí",
    "nfe.municipio_servico": "Jacareí"
  }
],
  municipioStatus: [
  {
    "facet": [
      "Corbélia",
      "SolicitandoAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 399
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
      "Caraguatatuba",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Conselheiro Lafaiete",
      "EmProcessoDeAutorizacao"
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
      "São Joaquim da Barra",
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
    "latest.nfe.stuck_in_intermediate_status.count": 396
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
    "empresa.razao_social": "CAROL DEBORTOLI MARKETING LTDA",
    "facet": "CAROL DEBORTOLI MARKETING LTDA",
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
  },
  {
    "empresa.razao_social": "VIRTUEL TREINAMENTOS E COMERCIO LTDA",
    "facet": "VIRTUEL TREINAMENTOS E COMERCIO LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  travadasPorStatusMunicipio: [
  {
    "facet": [
      "SolicitandoAutorizacao",
      "Corbélia"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 399
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
      "Caraguatatuba"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Conselheiro Lafaiete"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
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
      "São Joaquim da Barra"
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
    "latest.nfe.stuck_in_intermediate_status.count": 399
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
      "53.194.828 LILIAN MORAIS DA SILVA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
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
      "INSTITUTO BRASILEIRO DE ENGENHARIA ESTRUTURAL LTDA"
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
      "JPSCM MARKETING LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "MDS MOREIRA DIGITAL SOLUCOES LTDA"
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
      "METODO TATI SANTOS LTDA"
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
      "OQ EMPREENDIMENTOS DIGITAIS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "ROTINA POLIGLOTA LTDA"
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
    "canceladas": 43,
    "devolucoes": 10,
    "em_emissao": 628,
    "email": 0,
    "emitidas": 10788,
    "falhas": 1969
  }
],
  volumetriaTimeseries: [
  {
    "beginTimeSeconds": 1782795300,
    "emitidas": 2076,
    "endTimeSeconds": 1782798900,
    "falhas": 695
  },
  {
    "beginTimeSeconds": 1782798900,
    "emitidas": 1500,
    "endTimeSeconds": 1782802500,
    "falhas": 586
  },
  {
    "beginTimeSeconds": 1782802500,
    "emitidas": 1250,
    "endTimeSeconds": 1782806100,
    "falhas": 885
  },
  {
    "beginTimeSeconds": 1782806100,
    "emitidas": 710,
    "endTimeSeconds": 1782809700,
    "falhas": 828
  },
  {
    "beginTimeSeconds": 1782809700,
    "emitidas": 1159,
    "endTimeSeconds": 1782813300,
    "falhas": 890
  },
  {
    "beginTimeSeconds": 1782813300,
    "emitidas": 1739,
    "endTimeSeconds": 1782816900,
    "falhas": 923
  },
  {
    "beginTimeSeconds": 1782816900,
    "emitidas": 3282,
    "endTimeSeconds": 1782820500,
    "falhas": 1128
  },
  {
    "beginTimeSeconds": 1782820500,
    "emitidas": 7906,
    "endTimeSeconds": 1782824100,
    "falhas": 2433
  },
  {
    "beginTimeSeconds": 1782824100,
    "emitidas": 15117,
    "endTimeSeconds": 1782827700,
    "falhas": 3111
  },
  {
    "beginTimeSeconds": 1782827700,
    "emitidas": 12923,
    "endTimeSeconds": 1782831300,
    "falhas": 2409
  },
  {
    "beginTimeSeconds": 1782831300,
    "emitidas": 15010,
    "endTimeSeconds": 1782834900,
    "falhas": 1572
  },
  {
    "beginTimeSeconds": 1782834900,
    "emitidas": 13881,
    "endTimeSeconds": 1782838500,
    "falhas": 1201
  },
  {
    "beginTimeSeconds": 1782838500,
    "emitidas": 12299,
    "endTimeSeconds": 1782842100,
    "falhas": 2216
  },
  {
    "beginTimeSeconds": 1782842100,
    "emitidas": 11931,
    "endTimeSeconds": 1782845700,
    "falhas": 3793
  },
  {
    "beginTimeSeconds": 1782845700,
    "emitidas": 9556,
    "endTimeSeconds": 1782849300,
    "falhas": 3754
  },
  {
    "beginTimeSeconds": 1782849300,
    "emitidas": 13752,
    "endTimeSeconds": 1782852900,
    "falhas": 3000
  },
  {
    "beginTimeSeconds": 1782852900,
    "emitidas": 16019,
    "endTimeSeconds": 1782856500,
    "falhas": 3340
  },
  {
    "beginTimeSeconds": 1782856500,
    "emitidas": 9115,
    "endTimeSeconds": 1782860100,
    "falhas": 2779
  },
  {
    "beginTimeSeconds": 1782860100,
    "emitidas": 5007,
    "endTimeSeconds": 1782863700,
    "falhas": 4121
  },
  {
    "beginTimeSeconds": 1782863700,
    "emitidas": 7613,
    "endTimeSeconds": 1782867300,
    "falhas": 1538
  },
  {
    "beginTimeSeconds": 1782867300,
    "emitidas": 10774,
    "endTimeSeconds": 1782870900,
    "falhas": 2954
  },
  {
    "beginTimeSeconds": 1782870900,
    "emitidas": 5325,
    "endTimeSeconds": 1782874500,
    "falhas": 597
  },
  {
    "beginTimeSeconds": 1782874500,
    "emitidas": 4538,
    "endTimeSeconds": 1782878100,
    "falhas": 588
  },
  {
    "beginTimeSeconds": 1782878100,
    "emitidas": 10811,
    "endTimeSeconds": 1782881700,
    "falhas": 1972
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
    "dead_letter": 49,
    "falhas": 48,
    "ok": 70775
  }
],
  travadasStatusEmpresa: {"6":[],"3":[],"1":[],"0":[],"12":[]},
  totalMunicipiosPendentes: [
  {
    "uniqueCount.nfe.municipio_servico": 12
  }
],
  taxaNfse: [
  {
    "rejeicao": 24.402171335126106,
    "sucesso": 75.59782866487386
  }
],
  taxaNfe: [
  {
    "rejeicao": 7.8049557922579655,
    "sucesso": 92.19504420774196
  }
],
  taxaSucessoMunicipio: [
  {
    "facet": "Francisco Beltrão",
    "municipio.nome": "Francisco Beltrão",
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
    "facet": "Olímpia",
    "municipio.nome": "Olímpia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Conceição do Jacuípe",
    "municipio.nome": "Conceição do Jacuípe",
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
    "facet": "Faxinal do Soturno",
    "municipio.nome": "Faxinal do Soturno",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guaíba",
    "municipio.nome": "Guaíba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guaratuba",
    "municipio.nome": "Guaratuba",
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
    "facet": "Pelotas",
    "municipio.nome": "Pelotas",
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
    "facet": "Jaguaruna",
    "municipio.nome": "Jaguaruna",
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
    "facet": "Tacaratu",
    "municipio.nome": "Tacaratu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Campina Grande",
    "municipio.nome": "Campina Grande",
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
    "facet": "Itapecerica",
    "municipio.nome": "Itapecerica",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Dierikon",
    "municipio.nome": "Dierikon",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Wilmington",
    "municipio.nome": "Wilmington",
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
    "facet": "Biguaçu",
    "municipio.nome": "Biguaçu",
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
    "facet": "santa marta Magdalena",
    "municipio.nome": "santa marta Magdalena",
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
    "facet": "São Pedro da Aldeia",
    "municipio.nome": "São Pedro da Aldeia",
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
    "facet": "Ibirá",
    "municipio.nome": "Ibirá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Tanger",
    "municipio.nome": "Tanger",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itaúna",
    "municipio.nome": "Itaúna",
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
    "facet": "Cornélio Procópio",
    "municipio.nome": "Cornélio Procópio",
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
    "facet": "Barra Mansa",
    "municipio.nome": "Barra Mansa",
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
    "facet": "Palmas",
    "municipio.nome": "Palmas",
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
    "facet": "Parnaíba",
    "municipio.nome": "Parnaíba",
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
    "facet": "Camboriú",
    "municipio.nome": "Camboriú",
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
    "facet": "Angra dos Reis",
    "municipio.nome": "Angra dos Reis",
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
    "facet": "Arujá",
    "municipio.nome": "Arujá",
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
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
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
    "facet": "Hanau",
    "municipio.nome": "Hanau",
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
    "facet": "Capão da Canoa",
    "municipio.nome": "Capão da Canoa",
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
    "facet": "Lagoa Santa",
    "municipio.nome": "Lagoa Santa",
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
    "facet": "Arraial do Cabo",
    "municipio.nome": "Arraial do Cabo",
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
    "facet": "Candelária",
    "municipio.nome": "Candelária",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itapeva",
    "municipio.nome": "Itapeva",
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
    "facet": "João Monlevade",
    "municipio.nome": "João Monlevade",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cerquilho",
    "municipio.nome": "Cerquilho",
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
    "facet": "Guaíra",
    "municipio.nome": "Guaíra",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pully",
    "municipio.nome": "Pully",
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
    "facet": "Osvaldo Cruz",
    "municipio.nome": "Osvaldo Cruz",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Caçador",
    "municipio.nome": "Caçador",
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
    "facet": "Ibirubá",
    "municipio.nome": "Ibirubá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Presidente Venceslau",
    "municipio.nome": "Presidente Venceslau",
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
    "facet": "São Pedro",
    "municipio.nome": "São Pedro",
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
    "facet": "Senador Canedo",
    "municipio.nome": "Senador Canedo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jaú",
    "municipio.nome": "Jaú",
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
    "facet": "Araras",
    "municipio.nome": "Araras",
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
    "facet": "Medianeira",
    "municipio.nome": "Medianeira",
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
    "facet": "São Francisco de Paula",
    "municipio.nome": "São Francisco de Paula",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Osório",
    "municipio.nome": "Osório",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "CALLE DEL COMERCIO",
    "municipio.nome": "CALLE DEL COMERCIO",
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
    "facet": "Rio do Sul",
    "municipio.nome": "Rio do Sul",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Marechal Cândido Rondon",
    "municipio.nome": "Marechal Cândido Rondon",
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
    "facet": "Montenegro",
    "municipio.nome": "Montenegro",
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
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
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
    "facet": "Parobé",
    "municipio.nome": "Parobé",
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
    "facet": "Salt Lake City",
    "municipio.nome": "Salt Lake City",
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
    "facet": "Cotia",
    "municipio.nome": "Cotia",
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
    "facet": "Ipatinga",
    "municipio.nome": "Ipatinga",
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
    "facet": "Seropédica",
    "municipio.nome": "Seropédica",
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
    "facet": "Rio Claro",
    "municipio.nome": "Rio Claro",
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
    "facet": "Rio Doce",
    "municipio.nome": "Rio Doce",
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
    "facet": "Tietê",
    "municipio.nome": "Tietê",
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
    "facet": "Timóteo",
    "municipio.nome": "Timóteo",
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
    "facet": "Resende",
    "municipio.nome": "Resende",
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
    "facet": "Salvador",
    "municipio.nome": "Salvador",
    "rejeitadas": 5,
    "taxa_rejeicao": 0.1004621257785,
    "taxa_sucesso": 99.89953787422141
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.4291845493562,
    "taxa_sucesso": 99.57081545064369
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.625,
    "taxa_sucesso": 99.375
  },
  {
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.6369426751592,
    "taxa_sucesso": 99.36305732484071
  },
  {
    "facet": "Marília",
    "municipio.nome": "Marília",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.6711409395973,
    "taxa_sucesso": 99.32885906040259
  },
  {
    "facet": "Queimados",
    "municipio.nome": "Queimados",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.1235955056179,
    "taxa_sucesso": 98.876404494382
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.4925373134328,
    "taxa_sucesso": 98.50746268656711
  },
  {
    "facet": "Bauru",
    "municipio.nome": "Bauru",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.5151515151515,
    "taxa_sucesso": 98.4848484848484
  },
  {
    "facet": "Balneário Camboriú",
    "municipio.nome": "Balneário Camboriú",
    "rejeitadas": 8,
    "taxa_rejeicao": 1.6528925619834,
    "taxa_sucesso": 98.3471074380165
  },
  {
    "facet": "Rio Grande",
    "municipio.nome": "Rio Grande",
    "rejeitadas": 4,
    "taxa_rejeicao": 1.7857142857142,
    "taxa_sucesso": 98.2142857142857
  },
  {
    "facet": "Americana",
    "municipio.nome": "Americana",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.8518518518518,
    "taxa_sucesso": 98.1481481481481
  },
  {
    "facet": "Niterói",
    "municipio.nome": "Niterói",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.9230769230769,
    "taxa_sucesso": 98.07692307692301
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 8,
    "taxa_rejeicao": 2.3460410557184,
    "taxa_sucesso": 97.6539589442815
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 22,
    "taxa_rejeicao": 2.6097271648873,
    "taxa_sucesso": 97.39027283511261
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 3,
    "taxa_rejeicao": 3.4482758620689,
    "taxa_sucesso": 96.551724137931
  },
  {
    "facet": "Joinville",
    "municipio.nome": "Joinville",
    "rejeitadas": 1,
    "taxa_rejeicao": 3.5714285714285,
    "taxa_sucesso": 96.42857142857139
  },
  {
    "facet": "João Pessoa",
    "municipio.nome": "João Pessoa",
    "rejeitadas": 3,
    "taxa_rejeicao": 3.6144578313253,
    "taxa_sucesso": 96.38554216867459
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 2,
    "taxa_rejeicao": 4,
    "taxa_sucesso": 96
  },
  {
    "facet": "Alfredo Chaves",
    "municipio.nome": "Alfredo Chaves",
    "rejeitadas": 2,
    "taxa_rejeicao": 4.1666666666666,
    "taxa_sucesso": 95.8333333333333
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 12,
    "taxa_rejeicao": 4.2105263157894,
    "taxa_sucesso": 95.78947368421049
  },
  {
    "facet": "Campinas",
    "municipio.nome": "Campinas",
    "rejeitadas": 2,
    "taxa_rejeicao": 4.2553191489361,
    "taxa_sucesso": 95.7446808510638
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 1,
    "taxa_rejeicao": 4.3478260869565,
    "taxa_sucesso": 95.6521739130434
  },
  {
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 1,
    "taxa_rejeicao": 4.7619047619047,
    "taxa_sucesso": 95.2380952380952
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 8,
    "taxa_rejeicao": 4.8780487804878,
    "taxa_sucesso": 95.1219512195121
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 15,
    "taxa_rejeicao": 5.3380782918149,
    "taxa_sucesso": 94.66192170818499
  },
  {
    "facet": "Santa Maria de Jetibá",
    "municipio.nome": "Santa Maria de Jetibá",
    "rejeitadas": 2,
    "taxa_rejeicao": 5.4054054054054,
    "taxa_sucesso": 94.5945945945945
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 26,
    "taxa_rejeicao": 6.2200956937799,
    "taxa_sucesso": 93.77990430622
  },
  {
    "facet": "Itajubá",
    "municipio.nome": "Itajubá",
    "rejeitadas": 2,
    "taxa_rejeicao": 7.1428571428571,
    "taxa_sucesso": 92.8571428571428
  },
  {
    "facet": "Boituva",
    "municipio.nome": "Boituva",
    "rejeitadas": 4,
    "taxa_rejeicao": 7.4074074074074,
    "taxa_sucesso": 92.5925925925925
  },
  {
    "facet": "Teresina",
    "municipio.nome": "Teresina",
    "rejeitadas": 1,
    "taxa_rejeicao": 7.6923076923076,
    "taxa_sucesso": 92.3076923076923
  },
  {
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
    "rejeitadas": 4,
    "taxa_rejeicao": 7.8431372549019,
    "taxa_sucesso": 92.156862745098
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 127,
    "taxa_rejeicao": 7.9524107701941,
    "taxa_sucesso": 92.0475892298058
  },
  {
    "facet": "Pinhais",
    "municipio.nome": "Pinhais",
    "rejeitadas": 2,
    "taxa_rejeicao": 9.090909090909,
    "taxa_sucesso": 90.90909090909089
  },
  {
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 8,
    "taxa_rejeicao": 9.6385542168674,
    "taxa_sucesso": 90.3614457831325
  },
  {
    "facet": "Anápolis",
    "municipio.nome": "Anápolis",
    "rejeitadas": 2,
    "taxa_rejeicao": 10.5263157894736,
    "taxa_sucesso": 89.4736842105263
  },
  {
    "facet": "Itapetininga",
    "municipio.nome": "Itapetininga",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "São José",
    "municipio.nome": "São José",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "Jundiaí",
    "municipio.nome": "Jundiaí",
    "rejeitadas": 3,
    "taxa_rejeicao": 12,
    "taxa_sucesso": 88
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 25,
    "taxa_rejeicao": 13.2978723404255,
    "taxa_sucesso": 86.7021276595744
  },
  {
    "facet": "Campo Grande",
    "municipio.nome": "Campo Grande",
    "rejeitadas": 1,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "Taubaté",
    "municipio.nome": "Taubaté",
    "rejeitadas": 5,
    "taxa_rejeicao": 15.625,
    "taxa_sucesso": 84.375
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 1324,
    "taxa_rejeicao": 16.6185515250407,
    "taxa_sucesso": 83.3814484749592
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 133,
    "taxa_rejeicao": 17.0294494238156,
    "taxa_sucesso": 82.97055057618431
  },
  {
    "facet": "Chapecó",
    "municipio.nome": "Chapecó",
    "rejeitadas": 33,
    "taxa_rejeicao": 19.8795180722891,
    "taxa_sucesso": 80.1204819277108
  },
  {
    "facet": "Natal",
    "municipio.nome": "Natal",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Parnamirim",
    "municipio.nome": "Parnamirim",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Maringá",
    "municipio.nome": "Maringá",
    "rejeitadas": 2,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Santos",
    "municipio.nome": "Santos",
    "rejeitadas": 8,
    "taxa_rejeicao": 21.6216216216216,
    "taxa_sucesso": 78.3783783783783
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 9,
    "taxa_rejeicao": 21.9512195121951,
    "taxa_sucesso": 78.0487804878048
  },
  {
    "facet": "Sumaré",
    "municipio.nome": "Sumaré",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Criciúma",
    "municipio.nome": "Criciúma",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Mogi Mirim",
    "municipio.nome": "Mogi Mirim",
    "rejeitadas": 6,
    "taxa_rejeicao": 28.5714285714285,
    "taxa_sucesso": 71.4285714285714
  },
  {
    "facet": "Alto Paraíso de Goiás",
    "municipio.nome": "Alto Paraíso de Goiás",
    "rejeitadas": 26,
    "taxa_rejeicao": 30.9523809523809,
    "taxa_sucesso": 69.047619047619
  },
  {
    "facet": "Jacareí",
    "municipio.nome": "Jacareí",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Jaboticabal",
    "municipio.nome": "Jaboticabal",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 34,
    "taxa_rejeicao": 37.362637362637294,
    "taxa_sucesso": 62.6373626373626
  },
  {
    "facet": "Itapema",
    "municipio.nome": "Itapema",
    "rejeitadas": 2,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 6,
    "taxa_rejeicao": 42.8571428571428,
    "taxa_sucesso": 57.1428571428571
  },
  {
    "facet": "Londrina",
    "municipio.nome": "Londrina",
    "rejeitadas": 7,
    "taxa_rejeicao": 43.75,
    "taxa_sucesso": 56.25
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 8,
    "taxa_rejeicao": 47.0588235294117,
    "taxa_sucesso": 52.9411764705882
  },
  {
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Ouro Preto do Oeste",
    "municipio.nome": "Ouro Preto do Oeste",
    "rejeitadas": 2,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Três Corações",
    "municipio.nome": "Três Corações",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Lajeado",
    "municipio.nome": "Lajeado",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Ubá",
    "municipio.nome": "Ubá",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Mauá",
    "municipio.nome": "Mauá",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Sapiranga",
    "municipio.nome": "Sapiranga",
    "rejeitadas": 8,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Santa Maria",
    "municipio.nome": "Santa Maria",
    "rejeitadas": 22,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Foz do Iguaçu",
    "municipio.nome": "Foz do Iguaçu",
    "rejeitadas": 6,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 414,
    "taxa_rejeicao": 78.40909090909089,
    "taxa_sucesso": 21.590909090909
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
    "rejeitadas": 9,
    "taxa_rejeicao": 81.8181818181818,
    "taxa_sucesso": 18.1818181818181
  },
  {
    "facet": "Nao informado",
    "municipio.nome": "Nao informado",
    "rejeitadas": 9,
    "taxa_rejeicao": 81.8181818181818,
    "taxa_sucesso": 18.1818181818181
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 19,
    "taxa_rejeicao": 82.6086956521739,
    "taxa_sucesso": 17.391304347826
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 22,
    "taxa_rejeicao": 84.61538461538461,
    "taxa_sucesso": 15.3846153846153
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 18,
    "taxa_rejeicao": 85.7142857142857,
    "taxa_sucesso": 14.2857142857142
  },
  {
    "facet": "Bragança Paulista",
    "municipio.nome": "Bragança Paulista",
    "rejeitadas": 24,
    "taxa_rejeicao": 96,
    "taxa_sucesso": 4
  },
  {
    "facet": "Araraquara",
    "municipio.nome": "Araraquara",
    "rejeitadas": 32,
    "taxa_rejeicao": 96.9696969696969,
    "taxa_sucesso": 3.030303030303
  },
  {
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
    "rejeitadas": 37,
    "taxa_rejeicao": 97.3684210526315,
    "taxa_sucesso": 2.6315789473684
  },
  {
    "facet": "Canoas",
    "municipio.nome": "Canoas",
    "rejeitadas": 47,
    "taxa_rejeicao": 97.91666666666659,
    "taxa_sucesso": 2.0833333333333
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 70,
    "taxa_rejeicao": 98.5915492957746,
    "taxa_sucesso": 1.4084507042253
  },
  {
    "facet": "Poços de Caldas",
    "municipio.nome": "Poços de Caldas",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 1,
    "taxa_rejeicao": 12,
    "taxa_sucesso": 0
  },
  {
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
    "rejeitadas": 13,
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
    "facet": "Nova Serrana",
    "municipio.nome": "Nova Serrana",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Inhumas",
    "municipio.nome": "Inhumas",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Vilhena",
    "municipio.nome": "Vilhena",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jaguariúna",
    "municipio.nome": "Jaguariúna",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 88,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Dourados",
    "municipio.nome": "Dourados",
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
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 28,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Goianésia",
    "municipio.nome": "Goianésia",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Porto Seguro",
    "municipio.nome": "Porto Seguro",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guararema",
    "municipio.nome": "Guararema",
    "rejeitadas": 119,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guaxupé",
    "municipio.nome": "Guaxupé",
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
    "facet": "Prudentópolis",
    "municipio.nome": "Prudentópolis",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Socorro",
    "municipio.nome": "Socorro",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Três Lagoas",
    "municipio.nome": "Três Lagoas",
    "rejeitadas": 8,
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
    "facet": "Jaguaquara",
    "municipio.nome": "Jaguaquara",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itajaí",
    "municipio.nome": "Itajaí",
    "rejeitadas": 319,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Naviraí",
    "municipio.nome": "Naviraí",
    "rejeitadas": 6,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Presidente Prudente",
    "municipio.nome": "Presidente Prudente",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ourinhos",
    "municipio.nome": "Ourinhos",
    "rejeitadas": 13,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Nossa Senhora das Graças",
    "municipio.nome": "Nossa Senhora das Graças",
    "rejeitadas": 2,
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
    "facet": "Catanduva",
    "municipio.nome": "Catanduva",
    "rejeitadas": 15,
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
    "rejeitadas": 2,
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
    "facet": "Cataguases",
    "municipio.nome": "Cataguases",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Garibaldi",
    "municipio.nome": "Garibaldi",
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
    "facet": "Orlândia",
    "municipio.nome": "Orlândia",
    "rejeitadas": 28,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Limeira",
    "municipio.nome": "Limeira",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Andradina",
    "municipio.nome": "Andradina",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Luziânia",
    "municipio.nome": "Luziânia",
    "rejeitadas": 22,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Farroupilha",
    "municipio.nome": "Farroupilha",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Artur Nogueira",
    "municipio.nome": "Artur Nogueira",
    "rejeitadas": 10,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Beberibe",
    "municipio.nome": "Beberibe",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Nova Petrópolis",
    "municipio.nome": "Nova Petrópolis",
    "rejeitadas": 5,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Rio Bonito",
    "municipio.nome": "Rio Bonito",
    "rejeitadas": 2,
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
    "facet": "Poá",
    "municipio.nome": "Poá",
    "rejeitadas": 1,
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guarulhos",
    "municipio.nome": "Guarulhos",
    "rejeitadas": 68,
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
    "facet": "Registro",
    "municipio.nome": "Registro",
    "rejeitadas": 6,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Vargem Grande Paulista",
    "municipio.nome": "Vargem Grande Paulista",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Iperó",
    "municipio.nome": "Iperó",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bento Gonçalves",
    "municipio.nome": "Bento Gonçalves",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itaperuna",
    "municipio.nome": "Itaperuna",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Vargem Grande do Sul",
    "municipio.nome": "Vargem Grande do Sul",
    "rejeitadas": 6,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Amparo",
    "municipio.nome": "Amparo",
    "rejeitadas": 135,
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
    "facet": "Juazeiro do Norte",
    "municipio.nome": "Juazeiro do Norte",
    "rejeitadas": 25,
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
    "rejeitadas": 7,
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
    "facet": "Passos",
    "municipio.nome": "Passos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Caruaru",
    "municipio.nome": "Caruaru",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Erechim",
    "municipio.nome": "Erechim",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Caetité",
    "municipio.nome": "Caetité",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Soledade",
    "municipio.nome": "Soledade",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  }
],
  taxaRejeicaoMunicipio: [
  {
    "facet": "Poços de Caldas",
    "municipio.nome": "Poços de Caldas",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
    "rejeitadas": 13,
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
    "facet": "Nova Serrana",
    "municipio.nome": "Nova Serrana",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Inhumas",
    "municipio.nome": "Inhumas",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Vilhena",
    "municipio.nome": "Vilhena",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jaguariúna",
    "municipio.nome": "Jaguariúna",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 88,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Dourados",
    "municipio.nome": "Dourados",
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
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 28,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Goianésia",
    "municipio.nome": "Goianésia",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Porto Seguro",
    "municipio.nome": "Porto Seguro",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guararema",
    "municipio.nome": "Guararema",
    "rejeitadas": 119,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guaxupé",
    "municipio.nome": "Guaxupé",
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
    "facet": "Prudentópolis",
    "municipio.nome": "Prudentópolis",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Socorro",
    "municipio.nome": "Socorro",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Três Lagoas",
    "municipio.nome": "Três Lagoas",
    "rejeitadas": 8,
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
    "facet": "Jaguaquara",
    "municipio.nome": "Jaguaquara",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itajaí",
    "municipio.nome": "Itajaí",
    "rejeitadas": 319,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Naviraí",
    "municipio.nome": "Naviraí",
    "rejeitadas": 6,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Presidente Prudente",
    "municipio.nome": "Presidente Prudente",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ourinhos",
    "municipio.nome": "Ourinhos",
    "rejeitadas": 13,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Nossa Senhora das Graças",
    "municipio.nome": "Nossa Senhora das Graças",
    "rejeitadas": 2,
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
    "facet": "Catanduva",
    "municipio.nome": "Catanduva",
    "rejeitadas": 15,
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
    "rejeitadas": 2,
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
    "facet": "Cataguases",
    "municipio.nome": "Cataguases",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Garibaldi",
    "municipio.nome": "Garibaldi",
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
    "facet": "Orlândia",
    "municipio.nome": "Orlândia",
    "rejeitadas": 28,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Limeira",
    "municipio.nome": "Limeira",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Andradina",
    "municipio.nome": "Andradina",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Luziânia",
    "municipio.nome": "Luziânia",
    "rejeitadas": 22,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Farroupilha",
    "municipio.nome": "Farroupilha",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Artur Nogueira",
    "municipio.nome": "Artur Nogueira",
    "rejeitadas": 10,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Beberibe",
    "municipio.nome": "Beberibe",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Nova Petrópolis",
    "municipio.nome": "Nova Petrópolis",
    "rejeitadas": 5,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Rio Bonito",
    "municipio.nome": "Rio Bonito",
    "rejeitadas": 2,
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
    "facet": "Poá",
    "municipio.nome": "Poá",
    "rejeitadas": 1,
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guarulhos",
    "municipio.nome": "Guarulhos",
    "rejeitadas": 68,
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
    "facet": "Registro",
    "municipio.nome": "Registro",
    "rejeitadas": 6,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Vargem Grande Paulista",
    "municipio.nome": "Vargem Grande Paulista",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Iperó",
    "municipio.nome": "Iperó",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bento Gonçalves",
    "municipio.nome": "Bento Gonçalves",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itaperuna",
    "municipio.nome": "Itaperuna",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Vargem Grande do Sul",
    "municipio.nome": "Vargem Grande do Sul",
    "rejeitadas": 6,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Amparo",
    "municipio.nome": "Amparo",
    "rejeitadas": 135,
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
    "facet": "Juazeiro do Norte",
    "municipio.nome": "Juazeiro do Norte",
    "rejeitadas": 25,
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
    "rejeitadas": 7,
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
    "facet": "Passos",
    "municipio.nome": "Passos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Caruaru",
    "municipio.nome": "Caruaru",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Erechim",
    "municipio.nome": "Erechim",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Caetité",
    "municipio.nome": "Caetité",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Soledade",
    "municipio.nome": "Soledade",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 70,
    "taxa_rejeicao": 98.5915492957746,
    "taxa_sucesso": 1.4084507042253
  },
  {
    "facet": "Canoas",
    "municipio.nome": "Canoas",
    "rejeitadas": 47,
    "taxa_rejeicao": 97.91666666666659,
    "taxa_sucesso": 2.0833333333333
  },
  {
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
    "rejeitadas": 37,
    "taxa_rejeicao": 97.3684210526315,
    "taxa_sucesso": 2.6315789473684
  },
  {
    "facet": "Araraquara",
    "municipio.nome": "Araraquara",
    "rejeitadas": 32,
    "taxa_rejeicao": 96.9696969696969,
    "taxa_sucesso": 3.030303030303
  },
  {
    "facet": "Bragança Paulista",
    "municipio.nome": "Bragança Paulista",
    "rejeitadas": 24,
    "taxa_rejeicao": 96,
    "taxa_sucesso": 4
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 18,
    "taxa_rejeicao": 85.7142857142857,
    "taxa_sucesso": 14.2857142857142
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 22,
    "taxa_rejeicao": 84.61538461538461,
    "taxa_sucesso": 15.3846153846153
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 19,
    "taxa_rejeicao": 82.6086956521739,
    "taxa_sucesso": 17.391304347826
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
    "rejeitadas": 9,
    "taxa_rejeicao": 81.8181818181818,
    "taxa_sucesso": 18.1818181818181
  },
  {
    "facet": "Nao informado",
    "municipio.nome": "Nao informado",
    "rejeitadas": 9,
    "taxa_rejeicao": 81.8181818181818,
    "taxa_sucesso": 18.1818181818181
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 414,
    "taxa_rejeicao": 78.40909090909089,
    "taxa_sucesso": 21.590909090909
  },
  {
    "facet": "Sapiranga",
    "municipio.nome": "Sapiranga",
    "rejeitadas": 8,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Santa Maria",
    "municipio.nome": "Santa Maria",
    "rejeitadas": 22,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Foz do Iguaçu",
    "municipio.nome": "Foz do Iguaçu",
    "rejeitadas": 6,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Ouro Preto do Oeste",
    "municipio.nome": "Ouro Preto do Oeste",
    "rejeitadas": 2,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Três Corações",
    "municipio.nome": "Três Corações",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Lajeado",
    "municipio.nome": "Lajeado",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Ubá",
    "municipio.nome": "Ubá",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Mauá",
    "municipio.nome": "Mauá",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 8,
    "taxa_rejeicao": 47.0588235294117,
    "taxa_sucesso": 52.9411764705882
  },
  {
    "facet": "Londrina",
    "municipio.nome": "Londrina",
    "rejeitadas": 7,
    "taxa_rejeicao": 43.75,
    "taxa_sucesso": 56.25
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 6,
    "taxa_rejeicao": 42.8571428571428,
    "taxa_sucesso": 57.1428571428571
  },
  {
    "facet": "Itapema",
    "municipio.nome": "Itapema",
    "rejeitadas": 2,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 34,
    "taxa_rejeicao": 37.362637362637294,
    "taxa_sucesso": 62.6373626373626
  },
  {
    "facet": "Jacareí",
    "municipio.nome": "Jacareí",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Jaboticabal",
    "municipio.nome": "Jaboticabal",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Alto Paraíso de Goiás",
    "municipio.nome": "Alto Paraíso de Goiás",
    "rejeitadas": 26,
    "taxa_rejeicao": 30.9523809523809,
    "taxa_sucesso": 69.047619047619
  },
  {
    "facet": "Mogi Mirim",
    "municipio.nome": "Mogi Mirim",
    "rejeitadas": 6,
    "taxa_rejeicao": 28.5714285714285,
    "taxa_sucesso": 71.4285714285714
  },
  {
    "facet": "Sumaré",
    "municipio.nome": "Sumaré",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Criciúma",
    "municipio.nome": "Criciúma",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 9,
    "taxa_rejeicao": 21.9512195121951,
    "taxa_sucesso": 78.0487804878048
  },
  {
    "facet": "Santos",
    "municipio.nome": "Santos",
    "rejeitadas": 8,
    "taxa_rejeicao": 21.6216216216216,
    "taxa_sucesso": 78.3783783783783
  },
  {
    "facet": "Natal",
    "municipio.nome": "Natal",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Parnamirim",
    "municipio.nome": "Parnamirim",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Maringá",
    "municipio.nome": "Maringá",
    "rejeitadas": 2,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Chapecó",
    "municipio.nome": "Chapecó",
    "rejeitadas": 33,
    "taxa_rejeicao": 19.8795180722891,
    "taxa_sucesso": 80.1204819277108
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 133,
    "taxa_rejeicao": 17.0294494238156,
    "taxa_sucesso": 82.97055057618431
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 1324,
    "taxa_rejeicao": 16.6185515250407,
    "taxa_sucesso": 83.3814484749592
  },
  {
    "facet": "Taubaté",
    "municipio.nome": "Taubaté",
    "rejeitadas": 5,
    "taxa_rejeicao": 15.625,
    "taxa_sucesso": 84.375
  },
  {
    "facet": "Campo Grande",
    "municipio.nome": "Campo Grande",
    "rejeitadas": 1,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 25,
    "taxa_rejeicao": 13.2978723404255,
    "taxa_sucesso": 86.7021276595744
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 1,
    "taxa_rejeicao": 12,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jundiaí",
    "municipio.nome": "Jundiaí",
    "rejeitadas": 3,
    "taxa_rejeicao": 12,
    "taxa_sucesso": 88
  },
  {
    "facet": "Itapetininga",
    "municipio.nome": "Itapetininga",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "São José",
    "municipio.nome": "São José",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "Anápolis",
    "municipio.nome": "Anápolis",
    "rejeitadas": 2,
    "taxa_rejeicao": 10.5263157894736,
    "taxa_sucesso": 89.4736842105263
  },
  {
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 8,
    "taxa_rejeicao": 9.6385542168674,
    "taxa_sucesso": 90.3614457831325
  },
  {
    "facet": "Pinhais",
    "municipio.nome": "Pinhais",
    "rejeitadas": 2,
    "taxa_rejeicao": 9.090909090909,
    "taxa_sucesso": 90.90909090909089
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 127,
    "taxa_rejeicao": 7.9524107701941,
    "taxa_sucesso": 92.0475892298058
  },
  {
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
    "rejeitadas": 4,
    "taxa_rejeicao": 7.8431372549019,
    "taxa_sucesso": 92.156862745098
  },
  {
    "facet": "Teresina",
    "municipio.nome": "Teresina",
    "rejeitadas": 1,
    "taxa_rejeicao": 7.6923076923076,
    "taxa_sucesso": 92.3076923076923
  },
  {
    "facet": "Boituva",
    "municipio.nome": "Boituva",
    "rejeitadas": 4,
    "taxa_rejeicao": 7.4074074074074,
    "taxa_sucesso": 92.5925925925925
  },
  {
    "facet": "Itajubá",
    "municipio.nome": "Itajubá",
    "rejeitadas": 2,
    "taxa_rejeicao": 7.1428571428571,
    "taxa_sucesso": 92.8571428571428
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 26,
    "taxa_rejeicao": 6.2200956937799,
    "taxa_sucesso": 93.77990430622
  },
  {
    "facet": "Santa Maria de Jetibá",
    "municipio.nome": "Santa Maria de Jetibá",
    "rejeitadas": 2,
    "taxa_rejeicao": 5.4054054054054,
    "taxa_sucesso": 94.5945945945945
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 15,
    "taxa_rejeicao": 5.3380782918149,
    "taxa_sucesso": 94.66192170818499
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 8,
    "taxa_rejeicao": 4.8780487804878,
    "taxa_sucesso": 95.1219512195121
  },
  {
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 1,
    "taxa_rejeicao": 4.7619047619047,
    "taxa_sucesso": 95.2380952380952
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 1,
    "taxa_rejeicao": 4.3478260869565,
    "taxa_sucesso": 95.6521739130434
  },
  {
    "facet": "Campinas",
    "municipio.nome": "Campinas",
    "rejeitadas": 2,
    "taxa_rejeicao": 4.2553191489361,
    "taxa_sucesso": 95.7446808510638
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 12,
    "taxa_rejeicao": 4.2105263157894,
    "taxa_sucesso": 95.78947368421049
  },
  {
    "facet": "Alfredo Chaves",
    "municipio.nome": "Alfredo Chaves",
    "rejeitadas": 2,
    "taxa_rejeicao": 4.1666666666666,
    "taxa_sucesso": 95.8333333333333
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 2,
    "taxa_rejeicao": 4,
    "taxa_sucesso": 96
  },
  {
    "facet": "João Pessoa",
    "municipio.nome": "João Pessoa",
    "rejeitadas": 3,
    "taxa_rejeicao": 3.6144578313253,
    "taxa_sucesso": 96.38554216867459
  },
  {
    "facet": "Joinville",
    "municipio.nome": "Joinville",
    "rejeitadas": 1,
    "taxa_rejeicao": 3.5714285714285,
    "taxa_sucesso": 96.42857142857139
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 3,
    "taxa_rejeicao": 3.4482758620689,
    "taxa_sucesso": 96.551724137931
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 22,
    "taxa_rejeicao": 2.6097271648873,
    "taxa_sucesso": 97.39027283511261
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 8,
    "taxa_rejeicao": 2.3460410557184,
    "taxa_sucesso": 97.6539589442815
  },
  {
    "facet": "Niterói",
    "municipio.nome": "Niterói",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.9230769230769,
    "taxa_sucesso": 98.07692307692301
  },
  {
    "facet": "Americana",
    "municipio.nome": "Americana",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.8518518518518,
    "taxa_sucesso": 98.1481481481481
  },
  {
    "facet": "Rio Grande",
    "municipio.nome": "Rio Grande",
    "rejeitadas": 4,
    "taxa_rejeicao": 1.7857142857142,
    "taxa_sucesso": 98.2142857142857
  },
  {
    "facet": "Balneário Camboriú",
    "municipio.nome": "Balneário Camboriú",
    "rejeitadas": 8,
    "taxa_rejeicao": 1.6528925619834,
    "taxa_sucesso": 98.3471074380165
  },
  {
    "facet": "Bauru",
    "municipio.nome": "Bauru",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.5151515151515,
    "taxa_sucesso": 98.4848484848484
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.4925373134328,
    "taxa_sucesso": 98.50746268656711
  },
  {
    "facet": "Queimados",
    "municipio.nome": "Queimados",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.1235955056179,
    "taxa_sucesso": 98.876404494382
  },
  {
    "facet": "Marília",
    "municipio.nome": "Marília",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.6711409395973,
    "taxa_sucesso": 99.32885906040259
  },
  {
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.6369426751592,
    "taxa_sucesso": 99.36305732484071
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.625,
    "taxa_sucesso": 99.375
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.4291845493562,
    "taxa_sucesso": 99.57081545064369
  },
  {
    "facet": "Salvador",
    "municipio.nome": "Salvador",
    "rejeitadas": 5,
    "taxa_rejeicao": 0.1004621257785,
    "taxa_sucesso": 99.89953787422141
  },
  {
    "facet": "Francisco Beltrão",
    "municipio.nome": "Francisco Beltrão",
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
    "facet": "Olímpia",
    "municipio.nome": "Olímpia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Conceição do Jacuípe",
    "municipio.nome": "Conceição do Jacuípe",
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
    "facet": "Faxinal do Soturno",
    "municipio.nome": "Faxinal do Soturno",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guaíba",
    "municipio.nome": "Guaíba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guaratuba",
    "municipio.nome": "Guaratuba",
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
    "facet": "Pelotas",
    "municipio.nome": "Pelotas",
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
    "facet": "Jaguaruna",
    "municipio.nome": "Jaguaruna",
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
    "facet": "Tacaratu",
    "municipio.nome": "Tacaratu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Campina Grande",
    "municipio.nome": "Campina Grande",
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
    "facet": "Itapecerica",
    "municipio.nome": "Itapecerica",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Dierikon",
    "municipio.nome": "Dierikon",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Wilmington",
    "municipio.nome": "Wilmington",
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
    "facet": "Biguaçu",
    "municipio.nome": "Biguaçu",
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
    "facet": "santa marta Magdalena",
    "municipio.nome": "santa marta Magdalena",
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
    "facet": "São Pedro da Aldeia",
    "municipio.nome": "São Pedro da Aldeia",
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
    "facet": "Ibirá",
    "municipio.nome": "Ibirá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Tanger",
    "municipio.nome": "Tanger",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itaúna",
    "municipio.nome": "Itaúna",
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
    "facet": "Cornélio Procópio",
    "municipio.nome": "Cornélio Procópio",
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
    "facet": "Barra Mansa",
    "municipio.nome": "Barra Mansa",
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
    "facet": "Palmas",
    "municipio.nome": "Palmas",
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
    "facet": "Parnaíba",
    "municipio.nome": "Parnaíba",
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
    "facet": "Camboriú",
    "municipio.nome": "Camboriú",
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
    "facet": "Angra dos Reis",
    "municipio.nome": "Angra dos Reis",
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
    "facet": "Arujá",
    "municipio.nome": "Arujá",
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
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
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
    "facet": "Hanau",
    "municipio.nome": "Hanau",
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
    "facet": "Capão da Canoa",
    "municipio.nome": "Capão da Canoa",
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
    "facet": "Lagoa Santa",
    "municipio.nome": "Lagoa Santa",
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
    "facet": "Arraial do Cabo",
    "municipio.nome": "Arraial do Cabo",
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
    "facet": "Candelária",
    "municipio.nome": "Candelária",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itapeva",
    "municipio.nome": "Itapeva",
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
    "facet": "João Monlevade",
    "municipio.nome": "João Monlevade",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cerquilho",
    "municipio.nome": "Cerquilho",
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
    "facet": "Guaíra",
    "municipio.nome": "Guaíra",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pully",
    "municipio.nome": "Pully",
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
    "facet": "Osvaldo Cruz",
    "municipio.nome": "Osvaldo Cruz",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Caçador",
    "municipio.nome": "Caçador",
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
    "facet": "Ibirubá",
    "municipio.nome": "Ibirubá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Presidente Venceslau",
    "municipio.nome": "Presidente Venceslau",
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
    "facet": "São Pedro",
    "municipio.nome": "São Pedro",
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
    "facet": "Senador Canedo",
    "municipio.nome": "Senador Canedo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jaú",
    "municipio.nome": "Jaú",
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
    "facet": "Araras",
    "municipio.nome": "Araras",
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
    "facet": "Medianeira",
    "municipio.nome": "Medianeira",
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
    "facet": "São Francisco de Paula",
    "municipio.nome": "São Francisco de Paula",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Osório",
    "municipio.nome": "Osório",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "CALLE DEL COMERCIO",
    "municipio.nome": "CALLE DEL COMERCIO",
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
    "facet": "Rio do Sul",
    "municipio.nome": "Rio do Sul",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Marechal Cândido Rondon",
    "municipio.nome": "Marechal Cândido Rondon",
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
    "facet": "Montenegro",
    "municipio.nome": "Montenegro",
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
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
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
    "facet": "Parobé",
    "municipio.nome": "Parobé",
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
    "facet": "Salt Lake City",
    "municipio.nome": "Salt Lake City",
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
    "facet": "Cotia",
    "municipio.nome": "Cotia",
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
    "facet": "Ipatinga",
    "municipio.nome": "Ipatinga",
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
    "facet": "Seropédica",
    "municipio.nome": "Seropédica",
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
    "facet": "Rio Claro",
    "municipio.nome": "Rio Claro",
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
    "facet": "Rio Doce",
    "municipio.nome": "Rio Doce",
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
    "facet": "Tietê",
    "municipio.nome": "Tietê",
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
    "facet": "Timóteo",
    "municipio.nome": "Timóteo",
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
    "facet": "Resende",
    "municipio.nome": "Resende",
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
    "beginTimeSeconds": 1782867300,
    "endTimeSeconds": 1782868500,
    "rejeicao": 21.511218599008703,
    "sucesso": 78.48878140099143
  },
  {
    "beginTimeSeconds": 1782868500,
    "endTimeSeconds": 1782869700,
    "rejeicao": 22.57769653340222,
    "sucesso": 77.42230346659787
  },
  {
    "beginTimeSeconds": 1782869700,
    "endTimeSeconds": 1782870900,
    "rejeicao": 23.979265956208852,
    "sucesso": 76.02073404379111
  },
  {
    "beginTimeSeconds": 1782870900,
    "endTimeSeconds": 1782872100,
    "rejeicao": 24.07993170617695,
    "sucesso": 75.92006829382319
  },
  {
    "beginTimeSeconds": 1782872100,
    "endTimeSeconds": 1782873300,
    "rejeicao": 24.376621340641957,
    "sucesso": 75.62337865935787
  },
  {
    "beginTimeSeconds": 1782873300,
    "endTimeSeconds": 1782874500,
    "rejeicao": 24.574024079477507,
    "sucesso": 75.42597592052313
  },
  {
    "beginTimeSeconds": 1782874500,
    "endTimeSeconds": 1782875700,
    "rejeicao": 24.222582909810388,
    "sucesso": 75.77741709018986
  },
  {
    "beginTimeSeconds": 1782875700,
    "endTimeSeconds": 1782876900,
    "rejeicao": 24.11993191555788,
    "sucesso": 75.88006808444202
  },
  {
    "beginTimeSeconds": 1782876900,
    "endTimeSeconds": 1782878100,
    "rejeicao": 24.000857012082616,
    "sucesso": 75.99914298791724
  },
  {
    "beginTimeSeconds": 1782878100,
    "endTimeSeconds": 1782879300,
    "rejeicao": 25.272257810453887,
    "sucesso": 74.72774218954609
  },
  {
    "beginTimeSeconds": 1782879300,
    "endTimeSeconds": 1782880500,
    "rejeicao": 26.455816913382566,
    "sucesso": 73.54418308661741
  },
  {
    "beginTimeSeconds": 1782880500,
    "endTimeSeconds": 1782881700,
    "rejeicao": 26.527264134583962,
    "sucesso": 73.47273586541606
  }
],
  taxaSucessoMunicipioTs: [{"facet": "Barra Mansa", "beginTimeSeconds": 1782867300, "endTimeSeconds": 1782868500, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782868500, "endTimeSeconds": 1782869700, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782869700, "endTimeSeconds": 1782870900, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782870900, "endTimeSeconds": 1782872100, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782872100, "endTimeSeconds": 1782873300, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782873300, "endTimeSeconds": 1782874500, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782874500, "endTimeSeconds": 1782875700, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782875700, "endTimeSeconds": 1782876900, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782876900, "endTimeSeconds": 1782878100, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782878100, "endTimeSeconds": 1782879300, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782879300, "endTimeSeconds": 1782880500, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782880500, "endTimeSeconds": 1782881700, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782867300, "endTimeSeconds": 1782868500, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782868500, "endTimeSeconds": 1782869700, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782869700, "endTimeSeconds": 1782870900, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782870900, "endTimeSeconds": 1782872100, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782872100, "endTimeSeconds": 1782873300, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782873300, "endTimeSeconds": 1782874500, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782874500, "endTimeSeconds": 1782875700, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782875700, "endTimeSeconds": 1782876900, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782876900, "endTimeSeconds": 1782878100, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782878100, "endTimeSeconds": 1782879300, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782879300, "endTimeSeconds": 1782880500, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782880500, "endTimeSeconds": 1782881700, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782867300, "endTimeSeconds": 1782868500, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782868500, "endTimeSeconds": 1782869700, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782869700, "endTimeSeconds": 1782870900, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782870900, "endTimeSeconds": 1782872100, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782872100, "endTimeSeconds": 1782873300, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782873300, "endTimeSeconds": 1782874500, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782874500, "endTimeSeconds": 1782875700, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782875700, "endTimeSeconds": 1782876900, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782876900, "endTimeSeconds": 1782878100, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782878100, "endTimeSeconds": 1782879300, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782879300, "endTimeSeconds": 1782880500, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782880500, "endTimeSeconds": 1782881700, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1782867300, "endTimeSeconds": 1782868500, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1782868500, "endTimeSeconds": 1782869700, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1782869700, "endTimeSeconds": 1782870900, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1782870900, "endTimeSeconds": 1782872100, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1782872100, "endTimeSeconds": 1782873300, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1782873300, "endTimeSeconds": 1782874500, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1782874500, "endTimeSeconds": 1782875700, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1782875700, "endTimeSeconds": 1782876900, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1782876900, "endTimeSeconds": 1782878100, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1782878100, "endTimeSeconds": 1782879300, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1782879300, "endTimeSeconds": 1782880500, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1782880500, "endTimeSeconds": 1782881700, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782867300, "endTimeSeconds": 1782868500, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782868500, "endTimeSeconds": 1782869700, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782869700, "endTimeSeconds": 1782870900, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782870900, "endTimeSeconds": 1782872100, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782872100, "endTimeSeconds": 1782873300, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782873300, "endTimeSeconds": 1782874500, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782874500, "endTimeSeconds": 1782875700, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782875700, "endTimeSeconds": 1782876900, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782876900, "endTimeSeconds": 1782878100, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782878100, "endTimeSeconds": 1782879300, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782879300, "endTimeSeconds": 1782880500, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782880500, "endTimeSeconds": 1782881700, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1782867300, "endTimeSeconds": 1782868500, "municipio.nome": "Una\u00ed", "sucesso": null}, {"facet": "Una\u00ed", "beginTimeSeconds": 1782868500, "endTimeSeconds": 1782869700, "municipio.nome": "Una\u00ed", "sucesso": null}, {"facet": "Una\u00ed", "beginTimeSeconds": 1782869700, "endTimeSeconds": 1782870900, "municipio.nome": "Una\u00ed", "sucesso": null}, {"facet": "Una\u00ed", "beginTimeSeconds": 1782870900, "endTimeSeconds": 1782872100, "municipio.nome": "Una\u00ed", "sucesso": null}, {"facet": "Una\u00ed", "beginTimeSeconds": 1782872100, "endTimeSeconds": 1782873300, "municipio.nome": "Una\u00ed", "sucesso": null}, {"facet": "Una\u00ed", "beginTimeSeconds": 1782873300, "endTimeSeconds": 1782874500, "municipio.nome": "Una\u00ed", "sucesso": null}, {"facet": "Una\u00ed", "beginTimeSeconds": 1782874500, "endTimeSeconds": 1782875700, "municipio.nome": "Una\u00ed", "sucesso": null}, {"facet": "Una\u00ed", "beginTimeSeconds": 1782875700, "endTimeSeconds": 1782876900, "municipio.nome": "Una\u00ed", "sucesso": null}, {"facet": "Una\u00ed", "beginTimeSeconds": 1782876900, "endTimeSeconds": 1782878100, "municipio.nome": "Una\u00ed", "sucesso": null}, {"facet": "Una\u00ed", "beginTimeSeconds": 1782878100, "endTimeSeconds": 1782879300, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1782879300, "endTimeSeconds": 1782880500, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1782880500, "endTimeSeconds": 1782881700, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782867300, "endTimeSeconds": 1782868500, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782868500, "endTimeSeconds": 1782869700, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782869700, "endTimeSeconds": 1782870900, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782870900, "endTimeSeconds": 1782872100, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782872100, "endTimeSeconds": 1782873300, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782873300, "endTimeSeconds": 1782874500, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782874500, "endTimeSeconds": 1782875700, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782875700, "endTimeSeconds": 1782876900, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782876900, "endTimeSeconds": 1782878100, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782878100, "endTimeSeconds": 1782879300, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782879300, "endTimeSeconds": 1782880500, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1782880500, "endTimeSeconds": 1782881700, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782867300, "endTimeSeconds": 1782868500, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782868500, "endTimeSeconds": 1782869700, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782869700, "endTimeSeconds": 1782870900, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782870900, "endTimeSeconds": 1782872100, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782872100, "endTimeSeconds": 1782873300, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782873300, "endTimeSeconds": 1782874500, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782874500, "endTimeSeconds": 1782875700, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782875700, "endTimeSeconds": 1782876900, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782876900, "endTimeSeconds": 1782878100, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782878100, "endTimeSeconds": 1782879300, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782879300, "endTimeSeconds": 1782880500, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1782880500, "endTimeSeconds": 1782881700, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782867300, "endTimeSeconds": 1782868500, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782868500, "endTimeSeconds": 1782869700, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782869700, "endTimeSeconds": 1782870900, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782870900, "endTimeSeconds": 1782872100, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782872100, "endTimeSeconds": 1782873300, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782873300, "endTimeSeconds": 1782874500, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782874500, "endTimeSeconds": 1782875700, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782875700, "endTimeSeconds": 1782876900, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782876900, "endTimeSeconds": 1782878100, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782878100, "endTimeSeconds": 1782879300, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782879300, "endTimeSeconds": 1782880500, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782880500, "endTimeSeconds": 1782881700, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782867300, "endTimeSeconds": 1782868500, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782868500, "endTimeSeconds": 1782869700, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782869700, "endTimeSeconds": 1782870900, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782870900, "endTimeSeconds": 1782872100, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782872100, "endTimeSeconds": 1782873300, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782873300, "endTimeSeconds": 1782874500, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782874500, "endTimeSeconds": 1782875700, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782875700, "endTimeSeconds": 1782876900, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782876900, "endTimeSeconds": 1782878100, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782878100, "endTimeSeconds": 1782879300, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782879300, "endTimeSeconds": 1782880500, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782880500, "endTimeSeconds": 1782881700, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782867300, "endTimeSeconds": 1782868500, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782868500, "endTimeSeconds": 1782869700, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782869700, "endTimeSeconds": 1782870900, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782870900, "endTimeSeconds": 1782872100, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782872100, "endTimeSeconds": 1782873300, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782873300, "endTimeSeconds": 1782874500, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782874500, "endTimeSeconds": 1782875700, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782875700, "endTimeSeconds": 1782876900, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782876900, "endTimeSeconds": 1782878100, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782878100, "endTimeSeconds": 1782879300, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782879300, "endTimeSeconds": 1782880500, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782880500, "endTimeSeconds": 1782881700, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Concei\u00e7\u00e3o do Jacu\u00edpe", "beginTimeSeconds": 1782867300, "endTimeSeconds": 1782868500, "municipio.nome": "Concei\u00e7\u00e3o do Jacu\u00edpe", "sucesso": 100.0}, {"facet": "Concei\u00e7\u00e3o do Jacu\u00edpe", "beginTimeSeconds": 1782868500, "endTimeSeconds": 1782869700, "municipio.nome": "Concei\u00e7\u00e3o do Jacu\u00edpe", "sucesso": 100.0}, {"facet": "Concei\u00e7\u00e3o do Jacu\u00edpe", "beginTimeSeconds": 1782869700, "endTimeSeconds": 1782870900, "municipio.nome": "Concei\u00e7\u00e3o do Jacu\u00edpe", "sucesso": 100.0}, {"facet": "Concei\u00e7\u00e3o do Jacu\u00edpe", "beginTimeSeconds": 1782870900, "endTimeSeconds": 1782872100, "municipio.nome": "Concei\u00e7\u00e3o do Jacu\u00edpe", "sucesso": 100.0}, {"facet": "Concei\u00e7\u00e3o do Jacu\u00edpe", "beginTimeSeconds": 1782872100, "endTimeSeconds": 1782873300, "municipio.nome": "Concei\u00e7\u00e3o do Jacu\u00edpe", "sucesso": 100.0}, {"facet": "Concei\u00e7\u00e3o do Jacu\u00edpe", "beginTimeSeconds": 1782873300, "endTimeSeconds": 1782874500, "municipio.nome": "Concei\u00e7\u00e3o do Jacu\u00edpe", "sucesso": 100.0}, {"facet": "Concei\u00e7\u00e3o do Jacu\u00edpe", "beginTimeSeconds": 1782874500, "endTimeSeconds": 1782875700, "municipio.nome": "Concei\u00e7\u00e3o do Jacu\u00edpe", "sucesso": 100.0}, {"facet": "Concei\u00e7\u00e3o do Jacu\u00edpe", "beginTimeSeconds": 1782875700, "endTimeSeconds": 1782876900, "municipio.nome": "Concei\u00e7\u00e3o do Jacu\u00edpe", "sucesso": 100.0}, {"facet": "Concei\u00e7\u00e3o do Jacu\u00edpe", "beginTimeSeconds": 1782876900, "endTimeSeconds": 1782878100, "municipio.nome": "Concei\u00e7\u00e3o do Jacu\u00edpe", "sucesso": 100.0}, {"facet": "Concei\u00e7\u00e3o do Jacu\u00edpe", "beginTimeSeconds": 1782878100, "endTimeSeconds": 1782879300, "municipio.nome": "Concei\u00e7\u00e3o do Jacu\u00edpe", "sucesso": 100.0}, {"facet": "Concei\u00e7\u00e3o do Jacu\u00edpe", "beginTimeSeconds": 1782879300, "endTimeSeconds": 1782880500, "municipio.nome": "Concei\u00e7\u00e3o do Jacu\u00edpe", "sucesso": 100.0}, {"facet": "Concei\u00e7\u00e3o do Jacu\u00edpe", "beginTimeSeconds": 1782880500, "endTimeSeconds": 1782881700, "municipio.nome": "Concei\u00e7\u00e3o do Jacu\u00edpe", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782867300, "endTimeSeconds": 1782868500, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782868500, "endTimeSeconds": 1782869700, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782869700, "endTimeSeconds": 1782870900, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782870900, "endTimeSeconds": 1782872100, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782872100, "endTimeSeconds": 1782873300, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782873300, "endTimeSeconds": 1782874500, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782874500, "endTimeSeconds": 1782875700, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782875700, "endTimeSeconds": 1782876900, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782876900, "endTimeSeconds": 1782878100, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782878100, "endTimeSeconds": 1782879300, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782879300, "endTimeSeconds": 1782880500, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782880500, "endTimeSeconds": 1782881700, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Cambori\u00fa", "beginTimeSeconds": 1782867300, "endTimeSeconds": 1782868500, "municipio.nome": "Cambori\u00fa", "sucesso": 100.0}, {"facet": "Cambori\u00fa", "beginTimeSeconds": 1782868500, "endTimeSeconds": 1782869700, "municipio.nome": "Cambori\u00fa", "sucesso": 100.0}, {"facet": "Cambori\u00fa", "beginTimeSeconds": 1782869700, "endTimeSeconds": 1782870900, "municipio.nome": "Cambori\u00fa", "sucesso": 100.0}, {"facet": "Cambori\u00fa", "beginTimeSeconds": 1782870900, "endTimeSeconds": 1782872100, "municipio.nome": "Cambori\u00fa", "sucesso": 100.0}, {"facet": "Cambori\u00fa", "beginTimeSeconds": 1782872100, "endTimeSeconds": 1782873300, "municipio.nome": "Cambori\u00fa", "sucesso": 100.0}, {"facet": "Cambori\u00fa", "beginTimeSeconds": 1782873300, "endTimeSeconds": 1782874500, "municipio.nome": "Cambori\u00fa", "sucesso": 100.0}, {"facet": "Cambori\u00fa", "beginTimeSeconds": 1782874500, "endTimeSeconds": 1782875700, "municipio.nome": "Cambori\u00fa", "sucesso": 100.0}, {"facet": "Cambori\u00fa", "beginTimeSeconds": 1782875700, "endTimeSeconds": 1782876900, "municipio.nome": "Cambori\u00fa", "sucesso": 100.0}, {"facet": "Cambori\u00fa", "beginTimeSeconds": 1782876900, "endTimeSeconds": 1782878100, "municipio.nome": "Cambori\u00fa", "sucesso": 100.0}, {"facet": "Cambori\u00fa", "beginTimeSeconds": 1782878100, "endTimeSeconds": 1782879300, "municipio.nome": "Cambori\u00fa", "sucesso": 100.0}, {"facet": "Cambori\u00fa", "beginTimeSeconds": 1782879300, "endTimeSeconds": 1782880500, "municipio.nome": "Cambori\u00fa", "sucesso": 100.0}, {"facet": "Cambori\u00fa", "beginTimeSeconds": 1782880500, "endTimeSeconds": 1782881700, "municipio.nome": "Cambori\u00fa", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782867300, "endTimeSeconds": 1782868500, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782868500, "endTimeSeconds": 1782869700, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782869700, "endTimeSeconds": 1782870900, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782870900, "endTimeSeconds": 1782872100, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782872100, "endTimeSeconds": 1782873300, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782873300, "endTimeSeconds": 1782874500, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782874500, "endTimeSeconds": 1782875700, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782875700, "endTimeSeconds": 1782876900, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782876900, "endTimeSeconds": 1782878100, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782878100, "endTimeSeconds": 1782879300, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782879300, "endTimeSeconds": 1782880500, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1782880500, "endTimeSeconds": 1782881700, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}]
};
