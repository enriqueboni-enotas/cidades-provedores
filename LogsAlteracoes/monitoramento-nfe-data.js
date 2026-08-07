// Gerado automaticamente pelo workflow monitoramento-nfe.yml em 07/08/2026 10:56 (Brasilia)
// NAO EDITAR MANUALMENTE
var monitoramentoNfeData = {
  geradoEm: "07/08/2026 10:56",
  travadasPorMunicipio: [
  {
    "facet": "Aracaju",
    "latest.nfe.stuck_in_intermediate_status.count": 13,
    "nfe.municipio_servico": "Aracaju"
  },
  {
    "facet": "Corbélia",
    "latest.nfe.stuck_in_intermediate_status.count": 10,
    "nfe.municipio_servico": "Corbélia"
  },
  {
    "facet": "EXTERIOR",
    "latest.nfe.stuck_in_intermediate_status.count": 4,
    "nfe.municipio_servico": "EXTERIOR"
  },
  {
    "facet": "Itapipoca",
    "latest.nfe.stuck_in_intermediate_status.count": 2,
    "nfe.municipio_servico": "Itapipoca"
  },
  {
    "facet": "Ribeirão Preto",
    "latest.nfe.stuck_in_intermediate_status.count": 2,
    "nfe.municipio_servico": "Ribeirão Preto"
  },
  {
    "facet": "Vila Velha",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Vila Velha"
  },
  {
    "facet": "Seropédica",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Seropédica"
  },
  {
    "facet": "Naviraí",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Naviraí"
  },
  {
    "facet": "Caraguatatuba",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Caraguatatuba"
  },
  {
    "facet": "Urupá",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Urupá"
  },
  {
    "facet": "Ilhéus",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Ilhéus"
  },
  {
    "facet": "São Caetano do Sul",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "São Caetano do Sul"
  },
  {
    "facet": "São Paulo",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "São Paulo"
  }
],
  tempoMaxProcessamento: [
  {
    "facet": "Rio de Janeiro",
    "max.nfe.processing_time.minutes": 46,
    "nfe.municipio_servico": "Rio de Janeiro"
  },
  {
    "facet": "",
    "max.nfe.processing_time.minutes": 35,
    "nfe.municipio_servico": ""
  },
  {
    "facet": "Recife",
    "max.nfe.processing_time.minutes": 35,
    "nfe.municipio_servico": "Recife"
  },
  {
    "facet": "Sobral",
    "max.nfe.processing_time.minutes": 24,
    "nfe.municipio_servico": "Sobral"
  },
  {
    "facet": "Fortaleza",
    "max.nfe.processing_time.minutes": 19,
    "nfe.municipio_servico": "Fortaleza"
  },
  {
    "facet": "Varginha",
    "max.nfe.processing_time.minutes": 19,
    "nfe.municipio_servico": "Varginha"
  },
  {
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 17,
    "nfe.municipio_servico": "Caraguatatuba"
  },
  {
    "facet": "Belo Horizonte",
    "max.nfe.processing_time.minutes": 14,
    "nfe.municipio_servico": "Belo Horizonte"
  },
  {
    "facet": "Taboão da Serra",
    "max.nfe.processing_time.minutes": 11,
    "nfe.municipio_servico": "Taboão da Serra"
  },
  {
    "facet": "São Bernardo do Campo",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "São Bernardo do Campo"
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
    "average.nfe.processing_time.minutes": 8.179802955665025,
    "facet": "Cancelada",
    "nfe.status": "Cancelada"
  },
  {
    "average.nfe.processing_time.minutes": 0.7013874066168623,
    "facet": "Negada",
    "nfe.status": "Negada"
  },
  {
    "average.nfe.processing_time.minutes": 0.5583453583453584,
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
    "max_min": 46,
    "media_min": 8.179802955665025,
    "p95_min": {
      "95": 24.25
    }
  },
  {
    "facet": [
      "Negada",
      "EmProcessoDeAutorizacao"
    ],
    "max_min": 19,
    "media_min": 0.7013874066168623,
    "p95_min": {
      "95": 2.015625
    }
  },
  {
    "facet": [
      "Autorizada",
      "AutorizadaAguardandoGeracaoPDF"
    ],
    "max_min": 24,
    "media_min": 0.5583453583453584,
    "p95_min": {
      "95": 1.0078125
    }
  }
],
  perfMunicipio: [
  {
    "average.nfe.processing_time.minutes": 24,
    "count.nfe.processing_time.minutes": 59,
    "facet": "Sobral",
    "max.nfe.processing_time.minutes": 24,
    "nfe.municipio_servico": "Sobral",
    "percentile.nfe.processing_time.minutes": {
      "95": 24
    }
  },
  {
    "average.nfe.processing_time.minutes": 11.647058823529411,
    "count.nfe.processing_time.minutes": 85,
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 17,
    "nfe.municipio_servico": "Caraguatatuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 17
    }
  },
  {
    "average.nfe.processing_time.minutes": 6.9393939393939394,
    "count.nfe.processing_time.minutes": 165,
    "facet": "Recife",
    "max.nfe.processing_time.minutes": 35,
    "nfe.municipio_servico": "Recife",
    "percentile.nfe.processing_time.minutes": {
      "95": 24.25
    }
  },
  {
    "average.nfe.processing_time.minutes": 5.27906976744186,
    "count.nfe.processing_time.minutes": 129,
    "facet": "Rio de Janeiro",
    "max.nfe.processing_time.minutes": 46,
    "nfe.municipio_servico": "Rio de Janeiro",
    "percentile.nfe.processing_time.minutes": {
      "95": 46
    }
  },
  {
    "average.nfe.processing_time.minutes": 4.6173913043478265,
    "count.nfe.processing_time.minutes": 115,
    "facet": "Fortaleza",
    "max.nfe.processing_time.minutes": 19,
    "nfe.municipio_servico": "Fortaleza",
    "percentile.nfe.processing_time.minutes": {
      "95": 19
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.71875,
    "count.nfe.processing_time.minutes": 32,
    "facet": "Itapipoca",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Itapipoca",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.5084745762711864,
    "count.nfe.processing_time.minutes": 177,
    "facet": "São Bernardo do Campo",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "São Bernardo do Campo",
    "percentile.nfe.processing_time.minutes": {
      "95": 10
    }
  },
  {
    "average.nfe.processing_time.minutes": 3,
    "count.nfe.processing_time.minutes": 59,
    "facet": "Salgueiro",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Salgueiro",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.694915254237288,
    "count.nfe.processing_time.minutes": 59,
    "facet": "Varginha",
    "max.nfe.processing_time.minutes": 19,
    "nfe.municipio_servico": "Varginha",
    "percentile.nfe.processing_time.minutes": {
      "95": 19
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.5254237288135593,
    "count.nfe.processing_time.minutes": 118,
    "facet": "Salvador",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "Salvador",
    "percentile.nfe.processing_time.minutes": {
      "95": 6.03125
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.307392996108949,
    "count.nfe.processing_time.minutes": 257,
    "facet": "Barueri",
    "max.nfe.processing_time.minutes": 8,
    "nfe.municipio_servico": "Barueri",
    "percentile.nfe.processing_time.minutes": {
      "95": 8
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.0508474576271185,
    "count.nfe.processing_time.minutes": 118,
    "facet": "Taboão da Serra",
    "max.nfe.processing_time.minutes": 11,
    "nfe.municipio_servico": "Taboão da Serra",
    "percentile.nfe.processing_time.minutes": {
      "95": 11
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 36,
    "facet": "Lavras",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Lavras",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 11,
    "facet": "Camaquã",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Camaquã",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 1,
    "facet": "Socorro",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Socorro",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 12,
    "facet": "Urussanga",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Urussanga",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.9408284023668638,
    "count.nfe.processing_time.minutes": 169,
    "facet": "",
    "max.nfe.processing_time.minutes": 35,
    "nfe.municipio_servico": "",
    "percentile.nfe.processing_time.minutes": {
      "95": 3.03125
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.6271186440677967,
    "count.nfe.processing_time.minutes": 59,
    "facet": "Rio Grande",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Rio Grande",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.347457627118644,
    "count.nfe.processing_time.minutes": 118,
    "facet": "São José do Rio Preto",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "São José do Rio Preto",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.2446808510638299,
    "count.nfe.processing_time.minutes": 94,
    "facet": "Taubaté",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Taubaté",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.2090395480225988,
    "count.nfe.processing_time.minutes": 177,
    "facet": "São Paulo",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "São Paulo",
    "percentile.nfe.processing_time.minutes": {
      "95": 3.015625
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.1764705882352942,
    "count.nfe.processing_time.minutes": 119,
    "facet": "Porto Alegre",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Porto Alegre",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.1101694915254237,
    "count.nfe.processing_time.minutes": 118,
    "facet": "Cuiabá",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Cuiabá",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 31,
    "facet": "Domingos Martins",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Domingos Martins",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 59,
    "facet": "Cariacica",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Cariacica",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 1,
    "facet": "Descalvado",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Descalvado",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 59,
    "facet": "Tacaratu",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Tacaratu",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 118,
    "facet": "Santa Maria",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Santa Maria",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 59,
    "facet": "Nairobi",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Nairobi",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 52,
    "facet": "Itapecerica",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Itapecerica",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Sacramento",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Sacramento",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 6,
    "facet": "Biguaçu",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Biguaçu",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 59,
    "facet": "Jaraguá do Sul",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Jaraguá do Sul",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 59,
    "facet": "Hortolândia",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Hortolândia",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 36,
    "facet": "Chantilly",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Chantilly",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Suzano",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Suzano",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 59,
    "facet": "Registro",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Registro",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 59,
    "facet": "Cornélio Procópio",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Cornélio Procópio",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 46,
    "facet": "Canakkale",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Canakkale",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 26,
    "facet": "portsmouth",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "portsmouth",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 59,
    "facet": "Itumbiara",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Itumbiara",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 59,
    "facet": "Araraquara",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Araraquara",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 1,
    "facet": "Tangará",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Tangará",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 51,
    "facet": "Nao informado",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Nao informado",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 51,
    "facet": "Não informado",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Não informado",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 59,
    "facet": "Lagoa Santa",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Lagoa Santa",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 16,
    "facet": "Dumont",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Dumont",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 1,
    "facet": "Marília",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Marília",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Linhares",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Linhares",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 59,
    "facet": "Imperatriz",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Imperatriz",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  }
],
  empresasMunicipio: [
  {
    "facet": "Ribeirão Preto",
    "nfe.municipio_servico": "Ribeirão Preto",
    "uniqueCount.empresa.razao_social": 4
  },
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
    "facet": "Vila Velha",
    "nfe.municipio_servico": "Vila Velha",
    "uniqueCount.empresa.razao_social": 1
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
    "facet": "Caraguatatuba",
    "nfe.municipio_servico": "Caraguatatuba",
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
    "facet": "Ilhéus",
    "nfe.municipio_servico": "Ilhéus",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "São Caetano do Sul",
    "nfe.municipio_servico": "São Caetano do Sul",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "São Paulo",
    "nfe.municipio_servico": "São Paulo",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Aracaju",
    "nfe.municipio_servico": "Aracaju",
    "uniqueCount.empresa.razao_social": 1
  }
],
  statsGlobais: [
  {
    "average.nfe.processing_time.minutes": 0.8014335528864781,
    "max.nfe.processing_time.minutes": 46,
    "percentile.nfe.processing_time.minutes": {
      "50": 0,
      "90": 1.015625,
      "95": 2.03125,
      "99": 17.25
    }
  }
],
  totalEmpresas: [
  {
    "uniqueCount.empresa.razao_social": 17
  }
],
  totalMunicipios: [
  {
    "uniqueCount.nfe.municipio_servico": 264
  }
],
  volumeMunicipio: [
  {
    "count.nfe.processing_time.minutes": 257,
    "facet": "Barueri",
    "nfe.municipio_servico": "Barueri"
  },
  {
    "count.nfe.processing_time.minutes": 177,
    "facet": "São Bernardo do Campo",
    "nfe.municipio_servico": "São Bernardo do Campo"
  },
  {
    "count.nfe.processing_time.minutes": 177,
    "facet": "São Paulo",
    "nfe.municipio_servico": "São Paulo"
  },
  {
    "count.nfe.processing_time.minutes": 169,
    "facet": "",
    "nfe.municipio_servico": ""
  },
  {
    "count.nfe.processing_time.minutes": 165,
    "facet": "Recife",
    "nfe.municipio_servico": "Recife"
  },
  {
    "count.nfe.processing_time.minutes": 129,
    "facet": "Rio de Janeiro",
    "nfe.municipio_servico": "Rio de Janeiro"
  },
  {
    "count.nfe.processing_time.minutes": 119,
    "facet": "Belo Horizonte",
    "nfe.municipio_servico": "Belo Horizonte"
  },
  {
    "count.nfe.processing_time.minutes": 119,
    "facet": "Uberlândia",
    "nfe.municipio_servico": "Uberlândia"
  },
  {
    "count.nfe.processing_time.minutes": 119,
    "facet": "Porto Alegre",
    "nfe.municipio_servico": "Porto Alegre"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Engenheiro Coelho",
    "nfe.municipio_servico": "Engenheiro Coelho"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Taboão da Serra",
    "nfe.municipio_servico": "Taboão da Serra"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Juiz de Fora",
    "nfe.municipio_servico": "Juiz de Fora"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Maringá",
    "nfe.municipio_servico": "Maringá"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Nova Lima",
    "nfe.municipio_servico": "Nova Lima"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Duque de Caxias",
    "nfe.municipio_servico": "Duque de Caxias"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Itu",
    "nfe.municipio_servico": "Itu"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Santa Maria",
    "nfe.municipio_servico": "Santa Maria"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Curitiba",
    "nfe.municipio_servico": "Curitiba"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Praia Grande",
    "nfe.municipio_servico": "Praia Grande"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Goiânia",
    "nfe.municipio_servico": "Goiânia"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Brasília",
    "nfe.municipio_servico": "Brasília"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Mateiros",
    "nfe.municipio_servico": "Mateiros"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "São José do Rio Preto",
    "nfe.municipio_servico": "São José do Rio Preto"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Santo André",
    "nfe.municipio_servico": "Santo André"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Florianópolis",
    "nfe.municipio_servico": "Florianópolis"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Presidente Prudente",
    "nfe.municipio_servico": "Presidente Prudente"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Pontes e Lacerda",
    "nfe.municipio_servico": "Pontes e Lacerda"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Guarapari",
    "nfe.municipio_servico": "Guarapari"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Pinhais",
    "nfe.municipio_servico": "Pinhais"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Salvador",
    "nfe.municipio_servico": "Salvador"
  }
],
  municipioStatus: [
  {
    "facet": [
      "Aracaju",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 13
  },
  {
    "facet": [
      "Corbélia",
      "SolicitandoAutorizacao"
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
      "Itapipoca",
      "Cancelada"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "facet": [
      "Ribeirão Preto",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
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
      "Ilhéus",
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
      "Seropédica",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "São Caetano do Sul",
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
  },
  {
    "facet": [
      "Urupá",
      "Cancelada"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Vila Velha",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  topEmpresasTravadas: [
  {
    "empresa.razao_social": "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA.",
    "facet": "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA.",
    "latest.nfe.stuck_in_intermediate_status.count": 10
  },
  {
    "empresa.razao_social": "SANCHEZ E CARNIEL MARKETING DIGITAL LTDA",
    "facet": "SANCHEZ E CARNIEL MARKETING DIGITAL LTDA",
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
    "empresa.razao_social": "JCP TAIACOLLO PRODUCOES MUSICAIS LTDA",
    "facet": "JCP TAIACOLLO PRODUCOES MUSICAIS LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "AC CREATOR HUB LTDA",
    "facet": "AC CREATOR HUB LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "MENTE INTERATIVA",
    "facet": "MENTE INTERATIVA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  travadasPorStatusMunicipio: [
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Aracaju"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 13
  },
  {
    "facet": [
      "SolicitandoAutorizacao",
      "Corbélia"
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
      "Cancelada",
      "Itapipoca"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Ribeirão Preto"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "facet": [
      "Cancelada",
      "Urupá"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
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
      "Ilhéus"
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
      "Seropédica"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "São Caetano do Sul"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Vila Velha"
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
      "NB CONCURSOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 13
  },
  {
    "facet": [
      "",
      "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA."
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 10
  },
  {
    "facet": [
      "",
      "CL ROSA NUTRICAO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 4
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
      "SANCHEZ E CARNIEL MARKETING DIGITAL LTDA"
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
      "FINANC.IA - IA PARA FINANCAS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "JCP TAIACOLLO PRODUCOES MUSICAIS LTDA"
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
      "L N A PINTO"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "MASSUCAR TREINAMENTO E DESENVOLVIMENTO LTDA"
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
      "NATALIA MASSUMI TANAKA - EIRELI"
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
      "VIANNA & CONSULTORES ASSOCIADOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  volumetriaHora: [
  {
    "canceladas": 26,
    "devolucoes": 2,
    "em_emissao": 2,
    "email": 0,
    "emitidas": 7157,
    "falhas": 1549
  }
],
  volumetriaTimeseries: [
  {
    "beginTimeSeconds": 1786024200,
    "emitidas": 7098,
    "endTimeSeconds": 1786027800,
    "falhas": 1098
  },
  {
    "beginTimeSeconds": 1786027800,
    "emitidas": 9703,
    "endTimeSeconds": 1786031400,
    "falhas": 901
  },
  {
    "beginTimeSeconds": 1786031400,
    "emitidas": 4109,
    "endTimeSeconds": 1786035000,
    "falhas": 842
  },
  {
    "beginTimeSeconds": 1786035000,
    "emitidas": 6817,
    "endTimeSeconds": 1786038600,
    "falhas": 1318
  },
  {
    "beginTimeSeconds": 1786038600,
    "emitidas": 6827,
    "endTimeSeconds": 1786042200,
    "falhas": 2398
  },
  {
    "beginTimeSeconds": 1786042200,
    "emitidas": 3359,
    "endTimeSeconds": 1786045800,
    "falhas": 472
  },
  {
    "beginTimeSeconds": 1786045800,
    "emitidas": 7640,
    "endTimeSeconds": 1786049400,
    "falhas": 379
  },
  {
    "beginTimeSeconds": 1786049400,
    "emitidas": 6486,
    "endTimeSeconds": 1786053000,
    "falhas": 517
  },
  {
    "beginTimeSeconds": 1786053000,
    "emitidas": 2475,
    "endTimeSeconds": 1786056600,
    "falhas": 570
  },
  {
    "beginTimeSeconds": 1786056600,
    "emitidas": 4244,
    "endTimeSeconds": 1786060200,
    "falhas": 1083
  },
  {
    "beginTimeSeconds": 1786060200,
    "emitidas": 6471,
    "endTimeSeconds": 1786063800,
    "falhas": 665
  },
  {
    "beginTimeSeconds": 1786063800,
    "emitidas": 2725,
    "endTimeSeconds": 1786067400,
    "falhas": 421
  },
  {
    "beginTimeSeconds": 1786067400,
    "emitidas": 3762,
    "endTimeSeconds": 1786071000,
    "falhas": 2326
  },
  {
    "beginTimeSeconds": 1786071000,
    "emitidas": 3543,
    "endTimeSeconds": 1786074600,
    "falhas": 709
  },
  {
    "beginTimeSeconds": 1786074600,
    "emitidas": 7915,
    "endTimeSeconds": 1786078200,
    "falhas": 2995
  },
  {
    "beginTimeSeconds": 1786078200,
    "emitidas": 880,
    "endTimeSeconds": 1786081800,
    "falhas": 261
  },
  {
    "beginTimeSeconds": 1786081800,
    "emitidas": 1353,
    "endTimeSeconds": 1786085400,
    "falhas": 820
  },
  {
    "beginTimeSeconds": 1786085400,
    "emitidas": 724,
    "endTimeSeconds": 1786089000,
    "falhas": 150
  },
  {
    "beginTimeSeconds": 1786089000,
    "emitidas": 1120,
    "endTimeSeconds": 1786092600,
    "falhas": 174
  },
  {
    "beginTimeSeconds": 1786092600,
    "emitidas": 943,
    "endTimeSeconds": 1786096200,
    "falhas": 307
  },
  {
    "beginTimeSeconds": 1786096200,
    "emitidas": 2002,
    "endTimeSeconds": 1786099800,
    "falhas": 500
  },
  {
    "beginTimeSeconds": 1786099800,
    "emitidas": 3356,
    "endTimeSeconds": 1786103400,
    "falhas": 1142
  },
  {
    "beginTimeSeconds": 1786103400,
    "emitidas": 5244,
    "endTimeSeconds": 1786107000,
    "falhas": 1396
  },
  {
    "beginTimeSeconds": 1786107000,
    "emitidas": 7030,
    "endTimeSeconds": 1786110600,
    "falhas": 1573
  }
],
  filaOperacoes: [
  {
    "pendentes": 0,
    "rodando": 1
  }
],
  webhooks: [
  {
    "dead_letter": 0,
    "falhas": 24,
    "ok": 83801
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
    "rejeicao": 25.954585327840338,
    "sucesso": 74.04541467215951
  }
],
  taxaNfe: [
  {
    "rejeicao": 14.342898652162011,
    "sucesso": 85.6571013478379
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
    "facet": "Teresina",
    "municipio.nome": "Teresina",
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
    "facet": "Poços de Caldas",
    "municipio.nome": "Poços de Caldas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
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
    "facet": "Domingos Martins",
    "municipio.nome": "Domingos Martins",
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
    "facet": "Coroaci",
    "municipio.nome": "Coroaci",
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
    "facet": "Nova Venécia",
    "municipio.nome": "Nova Venécia",
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
    "facet": "Vilhena",
    "municipio.nome": "Vilhena",
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
    "facet": "Tuparendi",
    "municipio.nome": "Tuparendi",
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
    "facet": "Cariacica",
    "municipio.nome": "Cariacica",
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
    "facet": "Cachoeiro de Itapemirim",
    "municipio.nome": "Cachoeiro de Itapemirim",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Nairobi",
    "municipio.nome": "Nairobi",
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
    "facet": "Sacramento",
    "municipio.nome": "Sacramento",
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
    "facet": "São Cristóvão",
    "municipio.nome": "São Cristóvão",
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
    "facet": "Fazenda Rio Grande",
    "municipio.nome": "Fazenda Rio Grande",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Canakkale",
    "municipio.nome": "Canakkale",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Socorro",
    "municipio.nome": "Socorro",
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
    "facet": "São Carlos",
    "municipio.nome": "São Carlos",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Shfaramr",
    "municipio.nome": "Shfaramr",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "portsmouth",
    "municipio.nome": "portsmouth",
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
    "facet": "Agudos",
    "municipio.nome": "Agudos",
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
    "facet": "Ourinhos",
    "municipio.nome": "Ourinhos",
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
    "facet": "Rondonópolis",
    "municipio.nome": "Rondonópolis",
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
    "facet": "São Miguel do Oeste",
    "municipio.nome": "São Miguel do Oeste",
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
    "facet": "Sete Lagoas",
    "municipio.nome": "Sete Lagoas",
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
    "facet": "Alto Paraíso de Goiás",
    "municipio.nome": "Alto Paraíso de Goiás",
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
    "facet": "Barra dos Coqueiros",
    "municipio.nome": "Barra dos Coqueiros",
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
    "facet": "Vittoria",
    "municipio.nome": "Vittoria",
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
    "facet": "Itajubá",
    "municipio.nome": "Itajubá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Malveira",
    "municipio.nome": "Malveira",
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
    "facet": "Candelária",
    "municipio.nome": "Candelária",
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
    "facet": "Maricá",
    "municipio.nome": "Maricá",
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
    "facet": "Salto",
    "municipio.nome": "Salto",
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
    "facet": "Farroupilha",
    "municipio.nome": "Farroupilha",
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
    "facet": "Boituva",
    "municipio.nome": "Boituva",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Sweden",
    "municipio.nome": "Sweden",
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
    "facet": "Ponte Nova",
    "municipio.nome": "Ponte Nova",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Rio Bonito",
    "municipio.nome": "Rio Bonito",
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
    "facet": "Panamá",
    "municipio.nome": "Panamá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Mirassol",
    "municipio.nome": "Mirassol",
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
    "facet": "Itapema",
    "municipio.nome": "Itapema",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pouso Alegre",
    "municipio.nome": "Pouso Alegre",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jundiaí",
    "municipio.nome": "Jundiaí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Calgary",
    "municipio.nome": "Calgary",
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
    "facet": "Chantilly",
    "municipio.nome": "Chantilly",
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
    "facet": "Vargem Grande Paulista",
    "municipio.nome": "Vargem Grande Paulista",
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
    "facet": "Videira",
    "municipio.nome": "Videira",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Joinville",
    "municipio.nome": "Joinville",
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
    "facet": "São José",
    "municipio.nome": "São José",
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
    "facet": "Caruaru",
    "municipio.nome": "Caruaru",
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
    "facet": "Piraju",
    "municipio.nome": "Piraju",
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
    "facet": "Resende",
    "municipio.nome": "Resende",
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
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.5076142131979,
    "taxa_sucesso": 99.492385786802
  },
  {
    "facet": "Nova Lima",
    "municipio.nome": "Nova Lima",
    "rejeitadas": 2,
    "taxa_rejeicao": 0.9950248756218,
    "taxa_sucesso": 99.00497512437809
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.3157894736842,
    "taxa_sucesso": 98.6842105263157
  },
  {
    "facet": "Campinas",
    "municipio.nome": "Campinas",
    "rejeitadas": 2,
    "taxa_rejeicao": 1.6,
    "taxa_sucesso": 98.4
  },
  {
    "facet": "Santa Cruz do Sul",
    "municipio.nome": "Santa Cruz do Sul",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.6129032258064,
    "taxa_sucesso": 98.38709677419351
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 7,
    "taxa_rejeicao": 1.9607843137254,
    "taxa_sucesso": 98.0392156862745
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 12,
    "taxa_rejeicao": 2.803738317757,
    "taxa_sucesso": 97.19626168224289
  },
  {
    "facet": "Salvador",
    "municipio.nome": "Salvador",
    "rejeitadas": 129,
    "taxa_rejeicao": 3.1524926686217,
    "taxa_sucesso": 96.84750733137821
  },
  {
    "facet": "Santos",
    "municipio.nome": "Santos",
    "rejeitadas": 2,
    "taxa_rejeicao": 3.3333333333333,
    "taxa_sucesso": 96.66666666666659
  },
  {
    "facet": "Pelotas",
    "municipio.nome": "Pelotas",
    "rejeitadas": 1,
    "taxa_rejeicao": 3.4482758620689,
    "taxa_sucesso": 96.551724137931
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 2,
    "taxa_rejeicao": 3.4482758620689,
    "taxa_sucesso": 96.551724137931
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 18,
    "taxa_rejeicao": 4.5454545454545,
    "taxa_sucesso": 95.45454545454541
  },
  {
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
    "rejeitadas": 5,
    "taxa_rejeicao": 5.2083333333333,
    "taxa_sucesso": 94.79166666666659
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 25,
    "taxa_rejeicao": 6.1124694376528,
    "taxa_sucesso": 93.88753056234711
  },
  {
    "facet": "Natal",
    "municipio.nome": "Natal",
    "rejeitadas": 1,
    "taxa_rejeicao": 6.25,
    "taxa_sucesso": 93.75
  },
  {
    "facet": "Itapipoca",
    "municipio.nome": "Itapipoca",
    "rejeitadas": 14,
    "taxa_rejeicao": 7.4866310160427,
    "taxa_sucesso": 92.5133689839572
  },
  {
    "facet": "Mateiros",
    "municipio.nome": "Mateiros",
    "rejeitadas": 1,
    "taxa_rejeicao": 7.6923076923076,
    "taxa_sucesso": 92.3076923076923
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 6,
    "taxa_rejeicao": 8,
    "taxa_sucesso": 92
  },
  {
    "facet": "Governador Valadares",
    "municipio.nome": "Governador Valadares",
    "rejeitadas": 1,
    "taxa_rejeicao": 8.3333333333333,
    "taxa_sucesso": 91.66666666666659
  },
  {
    "facet": "Pinhais",
    "municipio.nome": "Pinhais",
    "rejeitadas": 5,
    "taxa_rejeicao": 8.3333333333333,
    "taxa_sucesso": 91.66666666666659
  },
  {
    "facet": "Santa Teresa",
    "municipio.nome": "Santa Teresa",
    "rejeitadas": 1,
    "taxa_rejeicao": 9.090909090909,
    "taxa_sucesso": 90.90909090909089
  },
  {
    "facet": "Feira de Santana",
    "municipio.nome": "Feira de Santana",
    "rejeitadas": 1,
    "taxa_rejeicao": 9.090909090909,
    "taxa_sucesso": 90.90909090909089
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 209,
    "taxa_rejeicao": 9.1787439613526,
    "taxa_sucesso": 90.82125603864729
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 33,
    "taxa_rejeicao": 9.5100864553314,
    "taxa_sucesso": 90.4899135446685
  },
  {
    "facet": "São Luís",
    "municipio.nome": "São Luís",
    "rejeitadas": 2,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 2,
    "taxa_rejeicao": 11.7647058823529,
    "taxa_sucesso": 88.235294117647
  },
  {
    "facet": "Rosário do Sul",
    "municipio.nome": "Rosário do Sul",
    "rejeitadas": 5,
    "taxa_rejeicao": 12.1951219512195,
    "taxa_sucesso": 87.8048780487804
  },
  {
    "facet": "Cascavel",
    "municipio.nome": "Cascavel",
    "rejeitadas": 1,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Balneário Camboriú",
    "municipio.nome": "Balneário Camboriú",
    "rejeitadas": 1,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Americana",
    "municipio.nome": "Americana",
    "rejeitadas": 2,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 168,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 86.79245283018861
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 997,
    "taxa_rejeicao": 13.7403528114663,
    "taxa_sucesso": 86.2596471885336
  },
  {
    "facet": "Londrina",
    "municipio.nome": "Londrina",
    "rejeitadas": 2,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "Nova Serrana",
    "municipio.nome": "Nova Serrana",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Taubaté",
    "municipio.nome": "Taubaté",
    "rejeitadas": 4,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Lagoa Santa",
    "municipio.nome": "Lagoa Santa",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Maringá",
    "municipio.nome": "Maringá",
    "rejeitadas": 4,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Ibitinga",
    "municipio.nome": "Ibitinga",
    "rejeitadas": 3,
    "taxa_rejeicao": 17.6470588235294,
    "taxa_sucesso": 82.3529411764705
  },
  {
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Camaçari",
    "municipio.nome": "Camaçari",
    "rejeitadas": 2,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 10,
    "taxa_rejeicao": 21.7391304347826,
    "taxa_sucesso": 78.26086956521729
  },
  {
    "facet": "Campos dos Goytacazes",
    "municipio.nome": "Campos dos Goytacazes",
    "rejeitadas": 2,
    "taxa_rejeicao": 22.2222222222222,
    "taxa_sucesso": 77.7777777777777
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 2,
    "taxa_rejeicao": 22.2222222222222,
    "taxa_sucesso": 77.7777777777777
  },
  {
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
    "rejeitadas": 14,
    "taxa_rejeicao": 23.3333333333333,
    "taxa_sucesso": 76.66666666666659
  },
  {
    "facet": "Presidente Prudente",
    "municipio.nome": "Presidente Prudente",
    "rejeitadas": 3,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Porto Velho",
    "municipio.nome": "Porto Velho",
    "rejeitadas": 2,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Caicó",
    "municipio.nome": "Caicó",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Pontes e Lacerda",
    "municipio.nome": "Pontes e Lacerda",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Macapá",
    "municipio.nome": "Macapá",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 15,
    "taxa_rejeicao": 34.090909090909,
    "taxa_sucesso": 65.90909090909089
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 6,
    "taxa_rejeicao": 42.8571428571428,
    "taxa_sucesso": 57.1428571428571
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 4,
    "taxa_rejeicao": 44.4444444444444,
    "taxa_sucesso": 55.55555555555551
  },
  {
    "facet": "Manaus",
    "municipio.nome": "Manaus",
    "rejeitadas": 5,
    "taxa_rejeicao": 45.4545454545454,
    "taxa_sucesso": 54.5454545454545
  },
  {
    "facet": "Santa Maria",
    "municipio.nome": "Santa Maria",
    "rejeitadas": 6,
    "taxa_rejeicao": 46.1538461538461,
    "taxa_sucesso": 53.8461538461538
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 25,
    "taxa_rejeicao": 48.076923076923,
    "taxa_sucesso": 51.9230769230769
  },
  {
    "facet": "Brusque",
    "municipio.nome": "Brusque",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 8,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Pirassununga",
    "municipio.nome": "Pirassununga",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Suzano",
    "municipio.nome": "Suzano",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "São Roque",
    "municipio.nome": "São Roque",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Indaial",
    "municipio.nome": "Indaial",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Barão de Cocais",
    "municipio.nome": "Barão de Cocais",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Guarulhos",
    "municipio.nome": "Guarulhos",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Bauru",
    "municipio.nome": "Bauru",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Caetité",
    "municipio.nome": "Caetité",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 39,
    "taxa_rejeicao": 53.4246575342465,
    "taxa_sucesso": 46.5753424657534
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 232,
    "taxa_rejeicao": 56.4476885644768,
    "taxa_sucesso": 43.5523114355231
  },
  {
    "facet": "Mauá",
    "municipio.nome": "Mauá",
    "rejeitadas": 3,
    "taxa_rejeicao": 60,
    "taxa_sucesso": 40
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 19,
    "taxa_rejeicao": 61.2903225806451,
    "taxa_sucesso": 38.7096774193548
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 8,
    "taxa_rejeicao": 61.538461538461505,
    "taxa_sucesso": 38.4615384615384
  },
  {
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
    "rejeitadas": 6,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 8,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Limeira",
    "municipio.nome": "Limeira",
    "rejeitadas": 2,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
    "rejeitadas": 4,
    "taxa_rejeicao": 80,
    "taxa_sucesso": 20
  },
  {
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 7,
    "taxa_rejeicao": 87.5,
    "taxa_sucesso": 12.5
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 14,
    "taxa_rejeicao": 87.5,
    "taxa_sucesso": 12.5
  },
  {
    "facet": "São Caetano do Sul",
    "municipio.nome": "São Caetano do Sul",
    "rejeitadas": 14,
    "taxa_rejeicao": 87.5,
    "taxa_sucesso": 12.5
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 10,
    "taxa_rejeicao": 90.90909090909089,
    "taxa_sucesso": 9.090909090909
  },
  {
    "facet": "Guarapari",
    "municipio.nome": "Guarapari",
    "rejeitadas": 11,
    "taxa_rejeicao": 91.66666666666659,
    "taxa_sucesso": 8.3333333333333
  },
  {
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
    "rejeitadas": 385,
    "taxa_rejeicao": 93.9024390243902,
    "taxa_sucesso": 6.0975609756097
  },
  {
    "facet": "Dois Irmãos",
    "municipio.nome": "Dois Irmãos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guaratuba",
    "municipio.nome": "Guaratuba",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
    "rejeitadas": 5,
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
    "facet": "Campo Largo",
    "municipio.nome": "Campo Largo",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Picos",
    "municipio.nome": "Picos",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jaguaruna",
    "municipio.nome": "Jaguaruna",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bragança Paulista",
    "municipio.nome": "Bragança Paulista",
    "rejeitadas": 14,
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
    "facet": "Sarnen, Suíça",
    "municipio.nome": "Sarnen, Suíça",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cabo de Santo Agostinho",
    "municipio.nome": "Cabo de Santo Agostinho",
    "rejeitadas": 17,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Sumaré",
    "municipio.nome": "Sumaré",
    "rejeitadas": 1,
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
    "facet": "São Mateus",
    "municipio.nome": "São Mateus",
    "rejeitadas": 2,
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
    "rejeitadas": 1,
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
    "facet": "Prudentópolis",
    "municipio.nome": "Prudentópolis",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Porto Feliz",
    "municipio.nome": "Porto Feliz",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Canoas",
    "municipio.nome": "Canoas",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Três Lagoas",
    "municipio.nome": "Três Lagoas",
    "rejeitadas": 1,
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
    "facet": "Angra dos Reis",
    "municipio.nome": "Angra dos Reis",
    "rejeitadas": 7,
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
    "facet": "São Bento do Sapucaí",
    "municipio.nome": "São Bento do Sapucaí",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itajaí",
    "municipio.nome": "Itajaí",
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
    "facet": "Santo Antônio da Patrulha",
    "municipio.nome": "Santo Antônio da Patrulha",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Toledo",
    "municipio.nome": "Toledo",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Arapiraca",
    "municipio.nome": "Arapiraca",
    "rejeitadas": 2,
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
    "facet": "Holambra",
    "municipio.nome": "Holambra",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Mossoró",
    "municipio.nome": "Mossoró",
    "rejeitadas": 1,
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
    "facet": "Franca",
    "municipio.nome": "Franca",
    "rejeitadas": 8,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Vera Cruz",
    "municipio.nome": "Vera Cruz",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Extrema",
    "municipio.nome": "Extrema",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Belford Roxo",
    "municipio.nome": "Belford Roxo",
    "rejeitadas": 1,
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
    "facet": "Ibiúna",
    "municipio.nome": "Ibiúna",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Tubarão",
    "municipio.nome": "Tubarão",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ipirá",
    "municipio.nome": "Ipirá",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Luziânia",
    "municipio.nome": "Luziânia",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Marataízes",
    "municipio.nome": "Marataízes",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Foz do Iguaçu",
    "municipio.nome": "Foz do Iguaçu",
    "rejeitadas": 7,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Nova Petrópolis",
    "municipio.nome": "Nova Petrópolis",
    "rejeitadas": 9,
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
    "facet": "Santo Amaro da Imperatriz",
    "municipio.nome": "Santo Amaro da Imperatriz",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "João Pessoa",
    "municipio.nome": "João Pessoa",
    "rejeitadas": 19,
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
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 6,
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
    "facet": "Ilhabela",
    "municipio.nome": "Ilhabela",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bebedouro",
    "municipio.nome": "Bebedouro",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Caçapava",
    "municipio.nome": "Caçapava",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Lauro de Freitas",
    "municipio.nome": "Lauro de Freitas",
    "rejeitadas": 4,
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
    "facet": "Ponta Grossa",
    "municipio.nome": "Ponta Grossa",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Rio Doce",
    "municipio.nome": "Rio Doce",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Tietê",
    "municipio.nome": "Tietê",
    "rejeitadas": 5,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Petrópolis",
    "municipio.nome": "Petrópolis",
    "rejeitadas": 2,
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Anápolis",
    "municipio.nome": "Anápolis",
    "rejeitadas": 72,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Timóteo",
    "municipio.nome": "Timóteo",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  }
],
  taxaRejeicaoMunicipio: [
  {
    "facet": "Dois Irmãos",
    "municipio.nome": "Dois Irmãos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guaratuba",
    "municipio.nome": "Guaratuba",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
    "rejeitadas": 5,
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
    "facet": "Campo Largo",
    "municipio.nome": "Campo Largo",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Picos",
    "municipio.nome": "Picos",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jaguaruna",
    "municipio.nome": "Jaguaruna",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bragança Paulista",
    "municipio.nome": "Bragança Paulista",
    "rejeitadas": 14,
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
    "facet": "Sarnen, Suíça",
    "municipio.nome": "Sarnen, Suíça",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cabo de Santo Agostinho",
    "municipio.nome": "Cabo de Santo Agostinho",
    "rejeitadas": 17,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Sumaré",
    "municipio.nome": "Sumaré",
    "rejeitadas": 1,
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
    "facet": "São Mateus",
    "municipio.nome": "São Mateus",
    "rejeitadas": 2,
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
    "rejeitadas": 1,
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
    "facet": "Prudentópolis",
    "municipio.nome": "Prudentópolis",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Porto Feliz",
    "municipio.nome": "Porto Feliz",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Canoas",
    "municipio.nome": "Canoas",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Três Lagoas",
    "municipio.nome": "Três Lagoas",
    "rejeitadas": 1,
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
    "facet": "Angra dos Reis",
    "municipio.nome": "Angra dos Reis",
    "rejeitadas": 7,
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
    "facet": "São Bento do Sapucaí",
    "municipio.nome": "São Bento do Sapucaí",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itajaí",
    "municipio.nome": "Itajaí",
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
    "facet": "Santo Antônio da Patrulha",
    "municipio.nome": "Santo Antônio da Patrulha",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Toledo",
    "municipio.nome": "Toledo",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Arapiraca",
    "municipio.nome": "Arapiraca",
    "rejeitadas": 2,
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
    "facet": "Holambra",
    "municipio.nome": "Holambra",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Mossoró",
    "municipio.nome": "Mossoró",
    "rejeitadas": 1,
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
    "facet": "Franca",
    "municipio.nome": "Franca",
    "rejeitadas": 8,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Vera Cruz",
    "municipio.nome": "Vera Cruz",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Extrema",
    "municipio.nome": "Extrema",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Belford Roxo",
    "municipio.nome": "Belford Roxo",
    "rejeitadas": 1,
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
    "facet": "Ibiúna",
    "municipio.nome": "Ibiúna",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Tubarão",
    "municipio.nome": "Tubarão",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ipirá",
    "municipio.nome": "Ipirá",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Luziânia",
    "municipio.nome": "Luziânia",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Marataízes",
    "municipio.nome": "Marataízes",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Foz do Iguaçu",
    "municipio.nome": "Foz do Iguaçu",
    "rejeitadas": 7,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Nova Petrópolis",
    "municipio.nome": "Nova Petrópolis",
    "rejeitadas": 9,
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
    "facet": "Santo Amaro da Imperatriz",
    "municipio.nome": "Santo Amaro da Imperatriz",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "João Pessoa",
    "municipio.nome": "João Pessoa",
    "rejeitadas": 19,
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
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 6,
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
    "facet": "Ilhabela",
    "municipio.nome": "Ilhabela",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bebedouro",
    "municipio.nome": "Bebedouro",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Caçapava",
    "municipio.nome": "Caçapava",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Lauro de Freitas",
    "municipio.nome": "Lauro de Freitas",
    "rejeitadas": 4,
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
    "facet": "Ponta Grossa",
    "municipio.nome": "Ponta Grossa",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Rio Doce",
    "municipio.nome": "Rio Doce",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Tietê",
    "municipio.nome": "Tietê",
    "rejeitadas": 5,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Petrópolis",
    "municipio.nome": "Petrópolis",
    "rejeitadas": 2,
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Anápolis",
    "municipio.nome": "Anápolis",
    "rejeitadas": 72,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Timóteo",
    "municipio.nome": "Timóteo",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
    "rejeitadas": 385,
    "taxa_rejeicao": 93.9024390243902,
    "taxa_sucesso": 6.0975609756097
  },
  {
    "facet": "Guarapari",
    "municipio.nome": "Guarapari",
    "rejeitadas": 11,
    "taxa_rejeicao": 91.66666666666659,
    "taxa_sucesso": 8.3333333333333
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 10,
    "taxa_rejeicao": 90.90909090909089,
    "taxa_sucesso": 9.090909090909
  },
  {
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 7,
    "taxa_rejeicao": 87.5,
    "taxa_sucesso": 12.5
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 14,
    "taxa_rejeicao": 87.5,
    "taxa_sucesso": 12.5
  },
  {
    "facet": "São Caetano do Sul",
    "municipio.nome": "São Caetano do Sul",
    "rejeitadas": 14,
    "taxa_rejeicao": 87.5,
    "taxa_sucesso": 12.5
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
    "rejeitadas": 4,
    "taxa_rejeicao": 80,
    "taxa_sucesso": 20
  },
  {
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
    "rejeitadas": 6,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 8,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Limeira",
    "municipio.nome": "Limeira",
    "rejeitadas": 2,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 8,
    "taxa_rejeicao": 61.538461538461505,
    "taxa_sucesso": 38.4615384615384
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 19,
    "taxa_rejeicao": 61.2903225806451,
    "taxa_sucesso": 38.7096774193548
  },
  {
    "facet": "Mauá",
    "municipio.nome": "Mauá",
    "rejeitadas": 3,
    "taxa_rejeicao": 60,
    "taxa_sucesso": 40
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 232,
    "taxa_rejeicao": 56.4476885644768,
    "taxa_sucesso": 43.5523114355231
  },
  {
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 39,
    "taxa_rejeicao": 53.4246575342465,
    "taxa_sucesso": 46.5753424657534
  },
  {
    "facet": "Brusque",
    "municipio.nome": "Brusque",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 8,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Pirassununga",
    "municipio.nome": "Pirassununga",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Suzano",
    "municipio.nome": "Suzano",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "São Roque",
    "municipio.nome": "São Roque",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Indaial",
    "municipio.nome": "Indaial",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Barão de Cocais",
    "municipio.nome": "Barão de Cocais",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Guarulhos",
    "municipio.nome": "Guarulhos",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Bauru",
    "municipio.nome": "Bauru",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Caetité",
    "municipio.nome": "Caetité",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 25,
    "taxa_rejeicao": 48.076923076923,
    "taxa_sucesso": 51.9230769230769
  },
  {
    "facet": "Santa Maria",
    "municipio.nome": "Santa Maria",
    "rejeitadas": 6,
    "taxa_rejeicao": 46.1538461538461,
    "taxa_sucesso": 53.8461538461538
  },
  {
    "facet": "Manaus",
    "municipio.nome": "Manaus",
    "rejeitadas": 5,
    "taxa_rejeicao": 45.4545454545454,
    "taxa_sucesso": 54.5454545454545
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 4,
    "taxa_rejeicao": 44.4444444444444,
    "taxa_sucesso": 55.55555555555551
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 6,
    "taxa_rejeicao": 42.8571428571428,
    "taxa_sucesso": 57.1428571428571
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 15,
    "taxa_rejeicao": 34.090909090909,
    "taxa_sucesso": 65.90909090909089
  },
  {
    "facet": "Porto Velho",
    "municipio.nome": "Porto Velho",
    "rejeitadas": 2,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Caicó",
    "municipio.nome": "Caicó",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Pontes e Lacerda",
    "municipio.nome": "Pontes e Lacerda",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Macapá",
    "municipio.nome": "Macapá",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Presidente Prudente",
    "municipio.nome": "Presidente Prudente",
    "rejeitadas": 3,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
    "rejeitadas": 14,
    "taxa_rejeicao": 23.3333333333333,
    "taxa_sucesso": 76.66666666666659
  },
  {
    "facet": "Campos dos Goytacazes",
    "municipio.nome": "Campos dos Goytacazes",
    "rejeitadas": 2,
    "taxa_rejeicao": 22.2222222222222,
    "taxa_sucesso": 77.7777777777777
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 2,
    "taxa_rejeicao": 22.2222222222222,
    "taxa_sucesso": 77.7777777777777
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 10,
    "taxa_rejeicao": 21.7391304347826,
    "taxa_sucesso": 78.26086956521729
  },
  {
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Camaçari",
    "municipio.nome": "Camaçari",
    "rejeitadas": 2,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Ibitinga",
    "municipio.nome": "Ibitinga",
    "rejeitadas": 3,
    "taxa_rejeicao": 17.6470588235294,
    "taxa_sucesso": 82.3529411764705
  },
  {
    "facet": "Nova Serrana",
    "municipio.nome": "Nova Serrana",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 168,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 86.79245283018861
  },
  {
    "facet": "Taubaté",
    "municipio.nome": "Taubaté",
    "rejeitadas": 4,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Lagoa Santa",
    "municipio.nome": "Lagoa Santa",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Maringá",
    "municipio.nome": "Maringá",
    "rejeitadas": 4,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Londrina",
    "municipio.nome": "Londrina",
    "rejeitadas": 2,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 997,
    "taxa_rejeicao": 13.7403528114663,
    "taxa_sucesso": 86.2596471885336
  },
  {
    "facet": "Cascavel",
    "municipio.nome": "Cascavel",
    "rejeitadas": 1,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Balneário Camboriú",
    "municipio.nome": "Balneário Camboriú",
    "rejeitadas": 1,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Americana",
    "municipio.nome": "Americana",
    "rejeitadas": 2,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Rosário do Sul",
    "municipio.nome": "Rosário do Sul",
    "rejeitadas": 5,
    "taxa_rejeicao": 12.1951219512195,
    "taxa_sucesso": 87.8048780487804
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 2,
    "taxa_rejeicao": 11.7647058823529,
    "taxa_sucesso": 88.235294117647
  },
  {
    "facet": "São Luís",
    "municipio.nome": "São Luís",
    "rejeitadas": 2,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 33,
    "taxa_rejeicao": 9.5100864553314,
    "taxa_sucesso": 90.4899135446685
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 209,
    "taxa_rejeicao": 9.1787439613526,
    "taxa_sucesso": 90.82125603864729
  },
  {
    "facet": "Santa Teresa",
    "municipio.nome": "Santa Teresa",
    "rejeitadas": 1,
    "taxa_rejeicao": 9.090909090909,
    "taxa_sucesso": 90.90909090909089
  },
  {
    "facet": "Feira de Santana",
    "municipio.nome": "Feira de Santana",
    "rejeitadas": 1,
    "taxa_rejeicao": 9.090909090909,
    "taxa_sucesso": 90.90909090909089
  },
  {
    "facet": "Governador Valadares",
    "municipio.nome": "Governador Valadares",
    "rejeitadas": 1,
    "taxa_rejeicao": 8.3333333333333,
    "taxa_sucesso": 91.66666666666659
  },
  {
    "facet": "Pinhais",
    "municipio.nome": "Pinhais",
    "rejeitadas": 5,
    "taxa_rejeicao": 8.3333333333333,
    "taxa_sucesso": 91.66666666666659
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 6,
    "taxa_rejeicao": 8,
    "taxa_sucesso": 92
  },
  {
    "facet": "Mateiros",
    "municipio.nome": "Mateiros",
    "rejeitadas": 1,
    "taxa_rejeicao": 7.6923076923076,
    "taxa_sucesso": 92.3076923076923
  },
  {
    "facet": "Itapipoca",
    "municipio.nome": "Itapipoca",
    "rejeitadas": 14,
    "taxa_rejeicao": 7.4866310160427,
    "taxa_sucesso": 92.5133689839572
  },
  {
    "facet": "Natal",
    "municipio.nome": "Natal",
    "rejeitadas": 1,
    "taxa_rejeicao": 6.25,
    "taxa_sucesso": 93.75
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 25,
    "taxa_rejeicao": 6.1124694376528,
    "taxa_sucesso": 93.88753056234711
  },
  {
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
    "rejeitadas": 5,
    "taxa_rejeicao": 5.2083333333333,
    "taxa_sucesso": 94.79166666666659
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 18,
    "taxa_rejeicao": 4.5454545454545,
    "taxa_sucesso": 95.45454545454541
  },
  {
    "facet": "Pelotas",
    "municipio.nome": "Pelotas",
    "rejeitadas": 1,
    "taxa_rejeicao": 3.4482758620689,
    "taxa_sucesso": 96.551724137931
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 2,
    "taxa_rejeicao": 3.4482758620689,
    "taxa_sucesso": 96.551724137931
  },
  {
    "facet": "Santos",
    "municipio.nome": "Santos",
    "rejeitadas": 2,
    "taxa_rejeicao": 3.3333333333333,
    "taxa_sucesso": 96.66666666666659
  },
  {
    "facet": "Salvador",
    "municipio.nome": "Salvador",
    "rejeitadas": 129,
    "taxa_rejeicao": 3.1524926686217,
    "taxa_sucesso": 96.84750733137821
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 12,
    "taxa_rejeicao": 2.803738317757,
    "taxa_sucesso": 97.19626168224289
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 7,
    "taxa_rejeicao": 1.9607843137254,
    "taxa_sucesso": 98.0392156862745
  },
  {
    "facet": "Santa Cruz do Sul",
    "municipio.nome": "Santa Cruz do Sul",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.6129032258064,
    "taxa_sucesso": 98.38709677419351
  },
  {
    "facet": "Campinas",
    "municipio.nome": "Campinas",
    "rejeitadas": 2,
    "taxa_rejeicao": 1.6,
    "taxa_sucesso": 98.4
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.3157894736842,
    "taxa_sucesso": 98.6842105263157
  },
  {
    "facet": "Nova Lima",
    "municipio.nome": "Nova Lima",
    "rejeitadas": 2,
    "taxa_rejeicao": 0.9950248756218,
    "taxa_sucesso": 99.00497512437809
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.5076142131979,
    "taxa_sucesso": 99.492385786802
  },
  {
    "facet": "Francisco Beltrão",
    "municipio.nome": "Francisco Beltrão",
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
    "facet": "Itabaiana",
    "municipio.nome": "Itabaiana",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Poços de Caldas",
    "municipio.nome": "Poços de Caldas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
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
    "facet": "Domingos Martins",
    "municipio.nome": "Domingos Martins",
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
    "facet": "Coroaci",
    "municipio.nome": "Coroaci",
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
    "facet": "Nova Venécia",
    "municipio.nome": "Nova Venécia",
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
    "facet": "Vilhena",
    "municipio.nome": "Vilhena",
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
    "facet": "Tuparendi",
    "municipio.nome": "Tuparendi",
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
    "facet": "Cariacica",
    "municipio.nome": "Cariacica",
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
    "facet": "Cachoeiro de Itapemirim",
    "municipio.nome": "Cachoeiro de Itapemirim",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Nairobi",
    "municipio.nome": "Nairobi",
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
    "facet": "Sacramento",
    "municipio.nome": "Sacramento",
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
    "facet": "São Cristóvão",
    "municipio.nome": "São Cristóvão",
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
    "facet": "Fazenda Rio Grande",
    "municipio.nome": "Fazenda Rio Grande",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Canakkale",
    "municipio.nome": "Canakkale",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Socorro",
    "municipio.nome": "Socorro",
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
    "facet": "São Carlos",
    "municipio.nome": "São Carlos",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Shfaramr",
    "municipio.nome": "Shfaramr",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "portsmouth",
    "municipio.nome": "portsmouth",
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
    "facet": "Agudos",
    "municipio.nome": "Agudos",
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
    "facet": "Ourinhos",
    "municipio.nome": "Ourinhos",
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
    "facet": "Rondonópolis",
    "municipio.nome": "Rondonópolis",
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
    "facet": "São Miguel do Oeste",
    "municipio.nome": "São Miguel do Oeste",
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
    "facet": "Sete Lagoas",
    "municipio.nome": "Sete Lagoas",
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
    "facet": "Alto Paraíso de Goiás",
    "municipio.nome": "Alto Paraíso de Goiás",
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
    "facet": "Barra dos Coqueiros",
    "municipio.nome": "Barra dos Coqueiros",
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
    "facet": "Vittoria",
    "municipio.nome": "Vittoria",
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
    "facet": "Itajubá",
    "municipio.nome": "Itajubá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Malveira",
    "municipio.nome": "Malveira",
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
    "facet": "Candelária",
    "municipio.nome": "Candelária",
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
    "facet": "Maricá",
    "municipio.nome": "Maricá",
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
    "facet": "Salto",
    "municipio.nome": "Salto",
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
    "facet": "Farroupilha",
    "municipio.nome": "Farroupilha",
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
    "facet": "Boituva",
    "municipio.nome": "Boituva",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Sweden",
    "municipio.nome": "Sweden",
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
    "facet": "Ponte Nova",
    "municipio.nome": "Ponte Nova",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Rio Bonito",
    "municipio.nome": "Rio Bonito",
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
    "facet": "Panamá",
    "municipio.nome": "Panamá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Mirassol",
    "municipio.nome": "Mirassol",
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
    "facet": "Itapema",
    "municipio.nome": "Itapema",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pouso Alegre",
    "municipio.nome": "Pouso Alegre",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Jundiaí",
    "municipio.nome": "Jundiaí",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Calgary",
    "municipio.nome": "Calgary",
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
    "facet": "Chantilly",
    "municipio.nome": "Chantilly",
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
    "facet": "Vargem Grande Paulista",
    "municipio.nome": "Vargem Grande Paulista",
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
    "facet": "Videira",
    "municipio.nome": "Videira",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Joinville",
    "municipio.nome": "Joinville",
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
    "facet": "São José",
    "municipio.nome": "São José",
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
    "facet": "Caruaru",
    "municipio.nome": "Caruaru",
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
    "facet": "Piraju",
    "municipio.nome": "Piraju",
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
    "facet": "Resende",
    "municipio.nome": "Resende",
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
    "beginTimeSeconds": 1786096500,
    "endTimeSeconds": 1786097700,
    "rejeicao": 29.541789542018126,
    "sucesso": 70.45821045798178
  },
  {
    "beginTimeSeconds": 1786097700,
    "endTimeSeconds": 1786098900,
    "rejeicao": 28.41359556662631,
    "sucesso": 71.5864044333737
  },
  {
    "beginTimeSeconds": 1786098900,
    "endTimeSeconds": 1786100100,
    "rejeicao": 26.31012417750903,
    "sucesso": 73.6898758224911
  },
  {
    "beginTimeSeconds": 1786100100,
    "endTimeSeconds": 1786101300,
    "rejeicao": 24.840573336451108,
    "sucesso": 75.15942666354896
  },
  {
    "beginTimeSeconds": 1786101300,
    "endTimeSeconds": 1786102500,
    "rejeicao": 23.84736133143589,
    "sucesso": 76.15263866856405
  },
  {
    "beginTimeSeconds": 1786102500,
    "endTimeSeconds": 1786103700,
    "rejeicao": 24.680110395704478,
    "sucesso": 75.31988960429516
  },
  {
    "beginTimeSeconds": 1786103700,
    "endTimeSeconds": 1786104900,
    "rejeicao": 25.575987318549945,
    "sucesso": 74.42401268145002
  },
  {
    "beginTimeSeconds": 1786104900,
    "endTimeSeconds": 1786106100,
    "rejeicao": 24.62804964173167,
    "sucesso": 75.3719503582684
  },
  {
    "beginTimeSeconds": 1786106100,
    "endTimeSeconds": 1786107300,
    "rejeicao": 25.239495561920663,
    "sucesso": 74.76050443807928
  },
  {
    "beginTimeSeconds": 1786107300,
    "endTimeSeconds": 1786108500,
    "rejeicao": 25.141115996734392,
    "sucesso": 74.85888400326577
  },
  {
    "beginTimeSeconds": 1786108500,
    "endTimeSeconds": 1786109700,
    "rejeicao": 25.101132502778448,
    "sucesso": 74.89886749722149
  },
  {
    "beginTimeSeconds": 1786109700,
    "endTimeSeconds": 1786110900,
    "rejeicao": 25.60651576757567,
    "sucesso": 74.39348423242437
  }
],
  taxaSucessoMunicipioTs: [{"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786096500, "endTimeSeconds": 1786097700, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786097700, "endTimeSeconds": 1786098900, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786098900, "endTimeSeconds": 1786100100, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786100100, "endTimeSeconds": 1786101300, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786101300, "endTimeSeconds": 1786102500, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786102500, "endTimeSeconds": 1786103700, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786103700, "endTimeSeconds": 1786104900, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786104900, "endTimeSeconds": 1786106100, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786106100, "endTimeSeconds": 1786107300, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786107300, "endTimeSeconds": 1786108500, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786108500, "endTimeSeconds": 1786109700, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786109700, "endTimeSeconds": 1786110900, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786096500, "endTimeSeconds": 1786097700, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786097700, "endTimeSeconds": 1786098900, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786098900, "endTimeSeconds": 1786100100, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786100100, "endTimeSeconds": 1786101300, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786101300, "endTimeSeconds": 1786102500, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786102500, "endTimeSeconds": 1786103700, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786103700, "endTimeSeconds": 1786104900, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786104900, "endTimeSeconds": 1786106100, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786106100, "endTimeSeconds": 1786107300, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786107300, "endTimeSeconds": 1786108500, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786108500, "endTimeSeconds": 1786109700, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786109700, "endTimeSeconds": 1786110900, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Teresina", "beginTimeSeconds": 1786096500, "endTimeSeconds": 1786097700, "municipio.nome": "Teresina", "sucesso": 100.0}, {"facet": "Teresina", "beginTimeSeconds": 1786097700, "endTimeSeconds": 1786098900, "municipio.nome": "Teresina", "sucesso": 100.0}, {"facet": "Teresina", "beginTimeSeconds": 1786098900, "endTimeSeconds": 1786100100, "municipio.nome": "Teresina", "sucesso": 100.0}, {"facet": "Teresina", "beginTimeSeconds": 1786100100, "endTimeSeconds": 1786101300, "municipio.nome": "Teresina", "sucesso": 100.0}, {"facet": "Teresina", "beginTimeSeconds": 1786101300, "endTimeSeconds": 1786102500, "municipio.nome": "Teresina", "sucesso": 100.0}, {"facet": "Teresina", "beginTimeSeconds": 1786102500, "endTimeSeconds": 1786103700, "municipio.nome": "Teresina", "sucesso": 100.0}, {"facet": "Teresina", "beginTimeSeconds": 1786103700, "endTimeSeconds": 1786104900, "municipio.nome": "Teresina", "sucesso": 100.0}, {"facet": "Teresina", "beginTimeSeconds": 1786104900, "endTimeSeconds": 1786106100, "municipio.nome": "Teresina", "sucesso": 100.0}, {"facet": "Teresina", "beginTimeSeconds": 1786106100, "endTimeSeconds": 1786107300, "municipio.nome": "Teresina", "sucesso": 100.0}, {"facet": "Teresina", "beginTimeSeconds": 1786107300, "endTimeSeconds": 1786108500, "municipio.nome": "Teresina", "sucesso": 100.0}, {"facet": "Teresina", "beginTimeSeconds": 1786108500, "endTimeSeconds": 1786109700, "municipio.nome": "Teresina", "sucesso": 100.0}, {"facet": "Teresina", "beginTimeSeconds": 1786109700, "endTimeSeconds": 1786110900, "municipio.nome": "Teresina", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786096500, "endTimeSeconds": 1786097700, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786097700, "endTimeSeconds": 1786098900, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786098900, "endTimeSeconds": 1786100100, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786100100, "endTimeSeconds": 1786101300, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786101300, "endTimeSeconds": 1786102500, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786102500, "endTimeSeconds": 1786103700, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786103700, "endTimeSeconds": 1786104900, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786104900, "endTimeSeconds": 1786106100, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786106100, "endTimeSeconds": 1786107300, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786107300, "endTimeSeconds": 1786108500, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786108500, "endTimeSeconds": 1786109700, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786109700, "endTimeSeconds": 1786110900, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1786096500, "endTimeSeconds": 1786097700, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1786097700, "endTimeSeconds": 1786098900, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1786098900, "endTimeSeconds": 1786100100, "municipio.nome": "Salgueiro", "sucesso": null}, {"facet": "Salgueiro", "beginTimeSeconds": 1786100100, "endTimeSeconds": 1786101300, "municipio.nome": "Salgueiro", "sucesso": null}, {"facet": "Salgueiro", "beginTimeSeconds": 1786101300, "endTimeSeconds": 1786102500, "municipio.nome": "Salgueiro", "sucesso": null}, {"facet": "Salgueiro", "beginTimeSeconds": 1786102500, "endTimeSeconds": 1786103700, "municipio.nome": "Salgueiro", "sucesso": null}, {"facet": "Salgueiro", "beginTimeSeconds": 1786103700, "endTimeSeconds": 1786104900, "municipio.nome": "Salgueiro", "sucesso": null}, {"facet": "Salgueiro", "beginTimeSeconds": 1786104900, "endTimeSeconds": 1786106100, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1786106100, "endTimeSeconds": 1786107300, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1786107300, "endTimeSeconds": 1786108500, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1786108500, "endTimeSeconds": 1786109700, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1786109700, "endTimeSeconds": 1786110900, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786096500, "endTimeSeconds": 1786097700, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786097700, "endTimeSeconds": 1786098900, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786098900, "endTimeSeconds": 1786100100, "municipio.nome": "Nova Igua\u00e7u", "sucesso": null}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786100100, "endTimeSeconds": 1786101300, "municipio.nome": "Nova Igua\u00e7u", "sucesso": null}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786101300, "endTimeSeconds": 1786102500, "municipio.nome": "Nova Igua\u00e7u", "sucesso": null}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786102500, "endTimeSeconds": 1786103700, "municipio.nome": "Nova Igua\u00e7u", "sucesso": null}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786103700, "endTimeSeconds": 1786104900, "municipio.nome": "Nova Igua\u00e7u", "sucesso": null}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786104900, "endTimeSeconds": 1786106100, "municipio.nome": "Nova Igua\u00e7u", "sucesso": null}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786106100, "endTimeSeconds": 1786107300, "municipio.nome": "Nova Igua\u00e7u", "sucesso": null}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786107300, "endTimeSeconds": 1786108500, "municipio.nome": "Nova Igua\u00e7u", "sucesso": null}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786108500, "endTimeSeconds": 1786109700, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786109700, "endTimeSeconds": 1786110900, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786096500, "endTimeSeconds": 1786097700, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786097700, "endTimeSeconds": 1786098900, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786098900, "endTimeSeconds": 1786100100, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786100100, "endTimeSeconds": 1786101300, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786101300, "endTimeSeconds": 1786102500, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786102500, "endTimeSeconds": 1786103700, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786103700, "endTimeSeconds": 1786104900, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786104900, "endTimeSeconds": 1786106100, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786106100, "endTimeSeconds": 1786107300, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786107300, "endTimeSeconds": 1786108500, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786108500, "endTimeSeconds": 1786109700, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786109700, "endTimeSeconds": 1786110900, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Domingos Martins", "beginTimeSeconds": 1786096500, "endTimeSeconds": 1786097700, "municipio.nome": "Domingos Martins", "sucesso": 100.0}, {"facet": "Domingos Martins", "beginTimeSeconds": 1786097700, "endTimeSeconds": 1786098900, "municipio.nome": "Domingos Martins", "sucesso": 100.0}, {"facet": "Domingos Martins", "beginTimeSeconds": 1786098900, "endTimeSeconds": 1786100100, "municipio.nome": "Domingos Martins", "sucesso": null}, {"facet": "Domingos Martins", "beginTimeSeconds": 1786100100, "endTimeSeconds": 1786101300, "municipio.nome": "Domingos Martins", "sucesso": null}, {"facet": "Domingos Martins", "beginTimeSeconds": 1786101300, "endTimeSeconds": 1786102500, "municipio.nome": "Domingos Martins", "sucesso": null}, {"facet": "Domingos Martins", "beginTimeSeconds": 1786102500, "endTimeSeconds": 1786103700, "municipio.nome": "Domingos Martins", "sucesso": null}, {"facet": "Domingos Martins", "beginTimeSeconds": 1786103700, "endTimeSeconds": 1786104900, "municipio.nome": "Domingos Martins", "sucesso": null}, {"facet": "Domingos Martins", "beginTimeSeconds": 1786104900, "endTimeSeconds": 1786106100, "municipio.nome": "Domingos Martins", "sucesso": null}, {"facet": "Domingos Martins", "beginTimeSeconds": 1786106100, "endTimeSeconds": 1786107300, "municipio.nome": "Domingos Martins", "sucesso": null}, {"facet": "Domingos Martins", "beginTimeSeconds": 1786107300, "endTimeSeconds": 1786108500, "municipio.nome": "Domingos Martins", "sucesso": null}, {"facet": "Domingos Martins", "beginTimeSeconds": 1786108500, "endTimeSeconds": 1786109700, "municipio.nome": "Domingos Martins", "sucesso": 100.0}, {"facet": "Domingos Martins", "beginTimeSeconds": 1786109700, "endTimeSeconds": 1786110900, "municipio.nome": "Domingos Martins", "sucesso": 100.0}, {"facet": "Blumenau", "beginTimeSeconds": 1786096500, "endTimeSeconds": 1786097700, "municipio.nome": "Blumenau", "sucesso": 100.0}, {"facet": "Blumenau", "beginTimeSeconds": 1786097700, "endTimeSeconds": 1786098900, "municipio.nome": "Blumenau", "sucesso": 100.0}, {"facet": "Blumenau", "beginTimeSeconds": 1786098900, "endTimeSeconds": 1786100100, "municipio.nome": "Blumenau", "sucesso": 100.0}, {"facet": "Blumenau", "beginTimeSeconds": 1786100100, "endTimeSeconds": 1786101300, "municipio.nome": "Blumenau", "sucesso": 100.0}, {"facet": "Blumenau", "beginTimeSeconds": 1786101300, "endTimeSeconds": 1786102500, "municipio.nome": "Blumenau", "sucesso": 100.0}, {"facet": "Blumenau", "beginTimeSeconds": 1786102500, "endTimeSeconds": 1786103700, "municipio.nome": "Blumenau", "sucesso": 100.0}, {"facet": "Blumenau", "beginTimeSeconds": 1786103700, "endTimeSeconds": 1786104900, "municipio.nome": "Blumenau", "sucesso": 100.0}, {"facet": "Blumenau", "beginTimeSeconds": 1786104900, "endTimeSeconds": 1786106100, "municipio.nome": "Blumenau", "sucesso": 100.0}, {"facet": "Blumenau", "beginTimeSeconds": 1786106100, "endTimeSeconds": 1786107300, "municipio.nome": "Blumenau", "sucesso": 100.0}, {"facet": "Blumenau", "beginTimeSeconds": 1786107300, "endTimeSeconds": 1786108500, "municipio.nome": "Blumenau", "sucesso": 100.0}, {"facet": "Blumenau", "beginTimeSeconds": 1786108500, "endTimeSeconds": 1786109700, "municipio.nome": "Blumenau", "sucesso": 100.0}, {"facet": "Blumenau", "beginTimeSeconds": 1786109700, "endTimeSeconds": 1786110900, "municipio.nome": "Blumenau", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786096500, "endTimeSeconds": 1786097700, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786097700, "endTimeSeconds": 1786098900, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786098900, "endTimeSeconds": 1786100100, "municipio.nome": "Sobral", "sucesso": null}, {"facet": "Sobral", "beginTimeSeconds": 1786100100, "endTimeSeconds": 1786101300, "municipio.nome": "Sobral", "sucesso": null}, {"facet": "Sobral", "beginTimeSeconds": 1786101300, "endTimeSeconds": 1786102500, "municipio.nome": "Sobral", "sucesso": null}, {"facet": "Sobral", "beginTimeSeconds": 1786102500, "endTimeSeconds": 1786103700, "municipio.nome": "Sobral", "sucesso": null}, {"facet": "Sobral", "beginTimeSeconds": 1786103700, "endTimeSeconds": 1786104900, "municipio.nome": "Sobral", "sucesso": null}, {"facet": "Sobral", "beginTimeSeconds": 1786104900, "endTimeSeconds": 1786106100, "municipio.nome": "Sobral", "sucesso": null}, {"facet": "Sobral", "beginTimeSeconds": 1786106100, "endTimeSeconds": 1786107300, "municipio.nome": "Sobral", "sucesso": null}, {"facet": "Sobral", "beginTimeSeconds": 1786107300, "endTimeSeconds": 1786108500, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786108500, "endTimeSeconds": 1786109700, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786109700, "endTimeSeconds": 1786110900, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1786096500, "endTimeSeconds": 1786097700, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1786097700, "endTimeSeconds": 1786098900, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1786098900, "endTimeSeconds": 1786100100, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1786100100, "endTimeSeconds": 1786101300, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1786101300, "endTimeSeconds": 1786102500, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1786102500, "endTimeSeconds": 1786103700, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1786103700, "endTimeSeconds": 1786104900, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1786104900, "endTimeSeconds": 1786106100, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1786106100, "endTimeSeconds": 1786107300, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1786107300, "endTimeSeconds": 1786108500, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1786108500, "endTimeSeconds": 1786109700, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1786109700, "endTimeSeconds": 1786110900, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786096500, "endTimeSeconds": 1786097700, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786097700, "endTimeSeconds": 1786098900, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786098900, "endTimeSeconds": 1786100100, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786100100, "endTimeSeconds": 1786101300, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786101300, "endTimeSeconds": 1786102500, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786102500, "endTimeSeconds": 1786103700, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786103700, "endTimeSeconds": 1786104900, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786104900, "endTimeSeconds": 1786106100, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786106100, "endTimeSeconds": 1786107300, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786107300, "endTimeSeconds": 1786108500, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786108500, "endTimeSeconds": 1786109700, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786109700, "endTimeSeconds": 1786110900, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Crici\u00fama", "beginTimeSeconds": 1786096500, "endTimeSeconds": 1786097700, "municipio.nome": "Crici\u00fama", "sucesso": 100.0}, {"facet": "Crici\u00fama", "beginTimeSeconds": 1786097700, "endTimeSeconds": 1786098900, "municipio.nome": "Crici\u00fama", "sucesso": 100.0}, {"facet": "Crici\u00fama", "beginTimeSeconds": 1786098900, "endTimeSeconds": 1786100100, "municipio.nome": "Crici\u00fama", "sucesso": 100.0}, {"facet": "Crici\u00fama", "beginTimeSeconds": 1786100100, "endTimeSeconds": 1786101300, "municipio.nome": "Crici\u00fama", "sucesso": 100.0}, {"facet": "Crici\u00fama", "beginTimeSeconds": 1786101300, "endTimeSeconds": 1786102500, "municipio.nome": "Crici\u00fama", "sucesso": 100.0}, {"facet": "Crici\u00fama", "beginTimeSeconds": 1786102500, "endTimeSeconds": 1786103700, "municipio.nome": "Crici\u00fama", "sucesso": 100.0}, {"facet": "Crici\u00fama", "beginTimeSeconds": 1786103700, "endTimeSeconds": 1786104900, "municipio.nome": "Crici\u00fama", "sucesso": 100.0}, {"facet": "Crici\u00fama", "beginTimeSeconds": 1786104900, "endTimeSeconds": 1786106100, "municipio.nome": "Crici\u00fama", "sucesso": 100.0}, {"facet": "Crici\u00fama", "beginTimeSeconds": 1786106100, "endTimeSeconds": 1786107300, "municipio.nome": "Crici\u00fama", "sucesso": 100.0}, {"facet": "Crici\u00fama", "beginTimeSeconds": 1786107300, "endTimeSeconds": 1786108500, "municipio.nome": "Crici\u00fama", "sucesso": 100.0}, {"facet": "Crici\u00fama", "beginTimeSeconds": 1786108500, "endTimeSeconds": 1786109700, "municipio.nome": "Crici\u00fama", "sucesso": 100.0}, {"facet": "Crici\u00fama", "beginTimeSeconds": 1786109700, "endTimeSeconds": 1786110900, "municipio.nome": "Crici\u00fama", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786096500, "endTimeSeconds": 1786097700, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786097700, "endTimeSeconds": 1786098900, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786098900, "endTimeSeconds": 1786100100, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786100100, "endTimeSeconds": 1786101300, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786101300, "endTimeSeconds": 1786102500, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786102500, "endTimeSeconds": 1786103700, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786103700, "endTimeSeconds": 1786104900, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786104900, "endTimeSeconds": 1786106100, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786106100, "endTimeSeconds": 1786107300, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786107300, "endTimeSeconds": 1786108500, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786108500, "endTimeSeconds": 1786109700, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786109700, "endTimeSeconds": 1786110900, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1786096500, "endTimeSeconds": 1786097700, "municipio.nome": "Aruj\u00e1", "sucesso": null}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1786097700, "endTimeSeconds": 1786098900, "municipio.nome": "Aruj\u00e1", "sucesso": null}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1786098900, "endTimeSeconds": 1786100100, "municipio.nome": "Aruj\u00e1", "sucesso": null}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1786100100, "endTimeSeconds": 1786101300, "municipio.nome": "Aruj\u00e1", "sucesso": null}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1786101300, "endTimeSeconds": 1786102500, "municipio.nome": "Aruj\u00e1", "sucesso": null}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1786102500, "endTimeSeconds": 1786103700, "municipio.nome": "Aruj\u00e1", "sucesso": null}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1786103700, "endTimeSeconds": 1786104900, "municipio.nome": "Aruj\u00e1", "sucesso": null}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1786104900, "endTimeSeconds": 1786106100, "municipio.nome": "Aruj\u00e1", "sucesso": null}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1786106100, "endTimeSeconds": 1786107300, "municipio.nome": "Aruj\u00e1", "sucesso": null}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1786107300, "endTimeSeconds": 1786108500, "municipio.nome": "Aruj\u00e1", "sucesso": 100.0}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1786108500, "endTimeSeconds": 1786109700, "municipio.nome": "Aruj\u00e1", "sucesso": 100.0}, {"facet": "Aruj\u00e1", "beginTimeSeconds": 1786109700, "endTimeSeconds": 1786110900, "municipio.nome": "Aruj\u00e1", "sucesso": 100.0}]
};
