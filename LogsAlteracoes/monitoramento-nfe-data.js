// Gerado automaticamente pelo workflow monitoramento-nfe.yml em 26/06/2026 20:07 (Brasilia)
// NAO EDITAR MANUALMENTE
var monitoramentoNfeData = {
  geradoEm: "26/06/2026 20:07",
  travadasPorMunicipio: [
  {
    "facet": "Corbélia",
    "latest.nfe.stuck_in_intermediate_status.count": 361,
    "nfe.municipio_servico": "Corbélia"
  },
  {
    "facet": "Florianópolis",
    "latest.nfe.stuck_in_intermediate_status.count": 11,
    "nfe.municipio_servico": "Florianópolis"
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
    "facet": "Vila Velha",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Vila Velha"
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
    "facet": "Eusébio",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Eusébio"
  },
  {
    "facet": "Belém",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Belém"
  },
  {
    "facet": "Campinas",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Campinas"
  }
],
  tempoMaxProcessamento: [
  {
    "facet": "Vila Velha",
    "max.nfe.processing_time.minutes": 54,
    "nfe.municipio_servico": "Vila Velha"
  },
  {
    "facet": "Schroeder",
    "max.nfe.processing_time.minutes": 51,
    "nfe.municipio_servico": "Schroeder"
  },
  {
    "facet": "Mandaguaçu",
    "max.nfe.processing_time.minutes": 47,
    "nfe.municipio_servico": "Mandaguaçu"
  },
  {
    "facet": "União da Vitória",
    "max.nfe.processing_time.minutes": 44,
    "nfe.municipio_servico": "União da Vitória"
  },
  {
    "facet": "São Bernardo do Campo",
    "max.nfe.processing_time.minutes": 42,
    "nfe.municipio_servico": "São Bernardo do Campo"
  },
  {
    "facet": "Dourados",
    "max.nfe.processing_time.minutes": 41,
    "nfe.municipio_servico": "Dourados"
  },
  {
    "facet": "Taubaté",
    "max.nfe.processing_time.minutes": 40,
    "nfe.municipio_servico": "Taubaté"
  },
  {
    "facet": "Lagoa Santa",
    "max.nfe.processing_time.minutes": 34,
    "nfe.municipio_servico": "Lagoa Santa"
  },
  {
    "facet": "São José do Rio Preto",
    "max.nfe.processing_time.minutes": 31,
    "nfe.municipio_servico": "São José do Rio Preto"
  },
  {
    "facet": "Recife",
    "max.nfe.processing_time.minutes": 30,
    "nfe.municipio_servico": "Recife"
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
    "average.nfe.processing_time.minutes": 11.822064056939501,
    "facet": "Cancelada",
    "nfe.status": "Cancelada"
  },
  {
    "average.nfe.processing_time.minutes": 1.6895666131621188,
    "facet": "Negada",
    "nfe.status": "Negada"
  },
  {
    "average.nfe.processing_time.minutes": 1.2999558888398766,
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
    "max_min": 51,
    "media_min": 11.822064056939501,
    "p95_min": {
      "95": 42.5
    }
  },
  {
    "facet": [
      "Negada",
      "EmProcessoDeAutorizacao"
    ],
    "max_min": 54,
    "media_min": 1.6924564796905222,
    "p95_min": {
      "95": 7.0625
    }
  },
  {
    "facet": [
      "Autorizada",
      "AutorizadaAguardandoGeracaoPDF"
    ],
    "max_min": 47,
    "media_min": 1.2999558888398766,
    "p95_min": {
      "95": 3.03125
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
    "average.nfe.processing_time.minutes": 47,
    "count.nfe.processing_time.minutes": 26,
    "facet": "Mandaguaçu",
    "max.nfe.processing_time.minutes": 47,
    "nfe.municipio_servico": "Mandaguaçu",
    "percentile.nfe.processing_time.minutes": {
      "95": 47
    }
  },
  {
    "average.nfe.processing_time.minutes": 41.5,
    "count.nfe.processing_time.minutes": 52,
    "facet": "União da Vitória",
    "max.nfe.processing_time.minutes": 44,
    "nfe.municipio_servico": "União da Vitória",
    "percentile.nfe.processing_time.minutes": {
      "95": 44
    }
  },
  {
    "average.nfe.processing_time.minutes": 30,
    "count.nfe.processing_time.minutes": 26,
    "facet": "Urussanga",
    "max.nfe.processing_time.minutes": 30,
    "nfe.municipio_servico": "Urussanga",
    "percentile.nfe.processing_time.minutes": {
      "95": 30
    }
  },
  {
    "average.nfe.processing_time.minutes": 27,
    "count.nfe.processing_time.minutes": 26,
    "facet": "Lages",
    "max.nfe.processing_time.minutes": 27,
    "nfe.municipio_servico": "Lages",
    "percentile.nfe.processing_time.minutes": {
      "95": 27
    }
  },
  {
    "average.nfe.processing_time.minutes": 22,
    "count.nfe.processing_time.minutes": 52,
    "facet": "Paranapanema",
    "max.nfe.processing_time.minutes": 28,
    "nfe.municipio_servico": "Paranapanema",
    "percentile.nfe.processing_time.minutes": {
      "95": 28
    }
  },
  {
    "average.nfe.processing_time.minutes": 20.5,
    "count.nfe.processing_time.minutes": 52,
    "facet": "Dourados",
    "max.nfe.processing_time.minutes": 41,
    "nfe.municipio_servico": "Dourados",
    "percentile.nfe.processing_time.minutes": {
      "95": 41
    }
  },
  {
    "average.nfe.processing_time.minutes": 19.5,
    "count.nfe.processing_time.minutes": 52,
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
    "facet": "Sobral",
    "max.nfe.processing_time.minutes": 19,
    "nfe.municipio_servico": "Sobral",
    "percentile.nfe.processing_time.minutes": {
      "95": 19
    }
  },
  {
    "average.nfe.processing_time.minutes": 19,
    "count.nfe.processing_time.minutes": 49,
    "facet": "Pará de Minas",
    "max.nfe.processing_time.minutes": 19,
    "nfe.municipio_servico": "Pará de Minas",
    "percentile.nfe.processing_time.minutes": {
      "95": 19
    }
  },
  {
    "average.nfe.processing_time.minutes": 18.666666666666668,
    "count.nfe.processing_time.minutes": 78,
    "facet": "Schroeder",
    "max.nfe.processing_time.minutes": 51,
    "nfe.municipio_servico": "Schroeder",
    "percentile.nfe.processing_time.minutes": {
      "95": 51
    }
  },
  {
    "average.nfe.processing_time.minutes": 16.686046511627907,
    "count.nfe.processing_time.minutes": 86,
    "facet": "Vila Velha",
    "max.nfe.processing_time.minutes": 54,
    "nfe.municipio_servico": "Vila Velha",
    "percentile.nfe.processing_time.minutes": {
      "95": 54
    }
  },
  {
    "average.nfe.processing_time.minutes": 15,
    "count.nfe.processing_time.minutes": 26,
    "facet": "Imperatriz",
    "max.nfe.processing_time.minutes": 15,
    "nfe.municipio_servico": "Imperatriz",
    "percentile.nfe.processing_time.minutes": {
      "95": 15
    }
  },
  {
    "average.nfe.processing_time.minutes": 13.267441860465116,
    "count.nfe.processing_time.minutes": 86,
    "facet": "Taubaté",
    "max.nfe.processing_time.minutes": 40,
    "nfe.municipio_servico": "Taubaté",
    "percentile.nfe.processing_time.minutes": {
      "95": 40
    }
  },
  {
    "average.nfe.processing_time.minutes": 11,
    "count.nfe.processing_time.minutes": 26,
    "facet": "Três Corações",
    "max.nfe.processing_time.minutes": 11,
    "nfe.municipio_servico": "Três Corações",
    "percentile.nfe.processing_time.minutes": {
      "95": 11
    }
  },
  {
    "average.nfe.processing_time.minutes": 10.476744186046512,
    "count.nfe.processing_time.minutes": 86,
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 21,
    "nfe.municipio_servico": "Caraguatatuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 21
    }
  },
  {
    "average.nfe.processing_time.minutes": 10.279069767441861,
    "count.nfe.processing_time.minutes": 86,
    "facet": "Lagoa Santa",
    "max.nfe.processing_time.minutes": 34,
    "nfe.municipio_servico": "Lagoa Santa",
    "percentile.nfe.processing_time.minutes": {
      "95": 34
    }
  },
  {
    "average.nfe.processing_time.minutes": 9.973214285714286,
    "count.nfe.processing_time.minutes": 112,
    "facet": "São Bernardo do Campo",
    "max.nfe.processing_time.minutes": 42,
    "nfe.municipio_servico": "São Bernardo do Campo",
    "percentile.nfe.processing_time.minutes": {
      "95": 42
    }
  },
  {
    "average.nfe.processing_time.minutes": 8.666666666666666,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Varginha",
    "max.nfe.processing_time.minutes": 16,
    "nfe.municipio_servico": "Varginha",
    "percentile.nfe.processing_time.minutes": {
      "95": 16
    }
  },
  {
    "average.nfe.processing_time.minutes": 8.333333333333334,
    "count.nfe.processing_time.minutes": 78,
    "facet": "Chicago",
    "max.nfe.processing_time.minutes": 20,
    "nfe.municipio_servico": "Chicago",
    "percentile.nfe.processing_time.minutes": {
      "95": 20
    }
  },
  {
    "average.nfe.processing_time.minutes": 7.875,
    "count.nfe.processing_time.minutes": 112,
    "facet": "São José do Rio Preto",
    "max.nfe.processing_time.minutes": 31,
    "nfe.municipio_servico": "São José do Rio Preto",
    "percentile.nfe.processing_time.minutes": {
      "95": 31
    }
  },
  {
    "average.nfe.processing_time.minutes": 7,
    "count.nfe.processing_time.minutes": 26,
    "facet": "Barão de Cocais",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "Barão de Cocais",
    "percentile.nfe.processing_time.minutes": {
      "95": 7
    }
  },
  {
    "average.nfe.processing_time.minutes": 6.412844036697248,
    "count.nfe.processing_time.minutes": 109,
    "facet": "Nova Lima",
    "max.nfe.processing_time.minutes": 25,
    "nfe.municipio_servico": "Nova Lima",
    "percentile.nfe.processing_time.minutes": {
      "95": 20.125
    }
  },
  {
    "average.nfe.processing_time.minutes": 6.357142857142857,
    "count.nfe.processing_time.minutes": 112,
    "facet": "Niterói",
    "max.nfe.processing_time.minutes": 26,
    "nfe.municipio_servico": "Niterói",
    "percentile.nfe.processing_time.minutes": {
      "95": 26
    }
  },
  {
    "average.nfe.processing_time.minutes": 6.333333333333333,
    "count.nfe.processing_time.minutes": 78,
    "facet": "Itabira",
    "max.nfe.processing_time.minutes": 13,
    "nfe.municipio_servico": "Itabira",
    "percentile.nfe.processing_time.minutes": {
      "95": 13
    }
  },
  {
    "average.nfe.processing_time.minutes": 6,
    "count.nfe.processing_time.minutes": 26,
    "facet": "Campo Verde",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Campo Verde",
    "percentile.nfe.processing_time.minutes": {
      "95": 6
    }
  },
  {
    "average.nfe.processing_time.minutes": 5.6686046511627906,
    "count.nfe.processing_time.minutes": 172,
    "facet": "Taboão da Serra",
    "max.nfe.processing_time.minutes": 18,
    "nfe.municipio_servico": "Taboão da Serra",
    "percentile.nfe.processing_time.minutes": {
      "95": 18
    }
  },
  {
    "average.nfe.processing_time.minutes": 5.363013698630137,
    "count.nfe.processing_time.minutes": 146,
    "facet": "Florianópolis",
    "max.nfe.processing_time.minutes": 29,
    "nfe.municipio_servico": "Florianópolis",
    "percentile.nfe.processing_time.minutes": {
      "95": 29
    }
  },
  {
    "average.nfe.processing_time.minutes": 5,
    "count.nfe.processing_time.minutes": 26,
    "facet": "Ilhabela",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Ilhabela",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 4.465116279069767,
    "count.nfe.processing_time.minutes": 86,
    "facet": "São José de Ribamar",
    "max.nfe.processing_time.minutes": 13,
    "nfe.municipio_servico": "São José de Ribamar",
    "percentile.nfe.processing_time.minutes": {
      "95": 13
    }
  },
  {
    "average.nfe.processing_time.minutes": 4.1,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Recife",
    "max.nfe.processing_time.minutes": 30,
    "nfe.municipio_servico": "Recife",
    "percentile.nfe.processing_time.minutes": {
      "95": 30
    }
  },
  {
    "average.nfe.processing_time.minutes": 4,
    "count.nfe.processing_time.minutes": 52,
    "facet": "Linhares",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Linhares",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 3,
    "count.nfe.processing_time.minutes": 52,
    "facet": "Andradina",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Andradina",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 3,
    "count.nfe.processing_time.minutes": 26,
    "facet": "Olímpia",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Olímpia",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 3,
    "count.nfe.processing_time.minutes": 52,
    "facet": "Lajeado",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Lajeado",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 3,
    "count.nfe.processing_time.minutes": 26,
    "facet": "Salgueiro",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Salgueiro",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.835294117647059,
    "count.nfe.processing_time.minutes": 85,
    "facet": "Ibitinga",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "Ibitinga",
    "percentile.nfe.processing_time.minutes": {
      "95": 7
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.558139534883721,
    "count.nfe.processing_time.minutes": 86,
    "facet": "Olinda",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "Olinda",
    "percentile.nfe.processing_time.minutes": {
      "95": 7
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.5166666666666666,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Salvador",
    "max.nfe.processing_time.minutes": 16,
    "nfe.municipio_servico": "Salvador",
    "percentile.nfe.processing_time.minutes": {
      "95": 13.0625
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.5,
    "count.nfe.processing_time.minutes": 52,
    "facet": "Medianeira",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Medianeira",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.5,
    "count.nfe.processing_time.minutes": 52,
    "facet": "Parnaíba",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Parnaíba",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.2093023255813953,
    "count.nfe.processing_time.minutes": 86,
    "facet": "Lauro de Freitas",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Lauro de Freitas",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.125,
    "count.nfe.processing_time.minutes": 112,
    "facet": "Uberlândia",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Uberlândia",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 26,
    "facet": "Sacramento",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Sacramento",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 26,
    "facet": "Marília",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Marília",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.7894736842105263,
    "count.nfe.processing_time.minutes": 114,
    "facet": "Botucatu",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "Botucatu",
    "percentile.nfe.processing_time.minutes": {
      "95": 6.03125
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.7666666666666666,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Gramado",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Gramado",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.7647058823529411,
    "count.nfe.processing_time.minutes": 34,
    "facet": "Catanduva",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Catanduva",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.5348837209302326,
    "count.nfe.processing_time.minutes": 86,
    "facet": "Indaiatuba",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Indaiatuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.5,
    "count.nfe.processing_time.minutes": 52,
    "facet": "Ipatinga",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Ipatinga",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.5,
    "count.nfe.processing_time.minutes": 52,
    "facet": "Anápolis",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Anápolis",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
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
    "facet": "Belém",
    "nfe.municipio_servico": "Belém",
    "uniqueCount.empresa.razao_social": 3
  },
  {
    "facet": "Caraguatatuba",
    "nfe.municipio_servico": "Caraguatatuba",
    "uniqueCount.empresa.razao_social": 2
  },
  {
    "facet": "Florianópolis",
    "nfe.municipio_servico": "Florianópolis",
    "uniqueCount.empresa.razao_social": 2
  },
  {
    "facet": "Vila Velha",
    "nfe.municipio_servico": "Vila Velha",
    "uniqueCount.empresa.razao_social": 1
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
    "facet": "Guarulhos",
    "nfe.municipio_servico": "Guarulhos",
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
    "average.nfe.processing_time.minutes": 1.7089340001961362,
    "max.nfe.processing_time.minutes": 54,
    "percentile.nfe.processing_time.minutes": {
      "50": 0,
      "90": 2.03125,
      "95": 6.0625,
      "99": 39.5
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
    "uniqueCount.nfe.municipio_servico": 381
  }
],
  volumeMunicipio: [
  {
    "count.nfe.processing_time.minutes": 201,
    "facet": "Barueri",
    "nfe.municipio_servico": "Barueri"
  },
  {
    "count.nfe.processing_time.minutes": 180,
    "facet": "Brasília",
    "nfe.municipio_servico": "Brasília"
  },
  {
    "count.nfe.processing_time.minutes": 172,
    "facet": "",
    "nfe.municipio_servico": ""
  },
  {
    "count.nfe.processing_time.minutes": 172,
    "facet": "Taboão da Serra",
    "nfe.municipio_servico": "Taboão da Serra"
  },
  {
    "count.nfe.processing_time.minutes": 172,
    "facet": "Belo Horizonte",
    "nfe.municipio_servico": "Belo Horizonte"
  },
  {
    "count.nfe.processing_time.minutes": 154,
    "facet": "São Paulo",
    "nfe.municipio_servico": "São Paulo"
  },
  {
    "count.nfe.processing_time.minutes": 146,
    "facet": "Rio de Janeiro",
    "nfe.municipio_servico": "Rio de Janeiro"
  },
  {
    "count.nfe.processing_time.minutes": 146,
    "facet": "Ribeirão Preto",
    "nfe.municipio_servico": "Ribeirão Preto"
  },
  {
    "count.nfe.processing_time.minutes": 146,
    "facet": "Florianópolis",
    "nfe.municipio_servico": "Florianópolis"
  },
  {
    "count.nfe.processing_time.minutes": 140,
    "facet": "Fortaleza",
    "nfe.municipio_servico": "Fortaleza"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Engenheiro Coelho",
    "nfe.municipio_servico": "Engenheiro Coelho"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Duque de Caxias",
    "nfe.municipio_servico": "Duque de Caxias"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Curitiba",
    "nfe.municipio_servico": "Curitiba"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Porto Alegre",
    "nfe.municipio_servico": "Porto Alegre"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Novo Hamburgo",
    "nfe.municipio_servico": "Novo Hamburgo"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "São José",
    "nfe.municipio_servico": "São José"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Salvador",
    "nfe.municipio_servico": "Salvador"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Santana de Parnaíba",
    "nfe.municipio_servico": "Santana de Parnaíba"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Campinas",
    "nfe.municipio_servico": "Campinas"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Recife",
    "nfe.municipio_servico": "Recife"
  },
  {
    "count.nfe.processing_time.minutes": 119,
    "facet": "Aparecida de Goiânia",
    "nfe.municipio_servico": "Aparecida de Goiânia"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Belém",
    "nfe.municipio_servico": "Belém"
  },
  {
    "count.nfe.processing_time.minutes": 114,
    "facet": "Caxias do Sul",
    "nfe.municipio_servico": "Caxias do Sul"
  },
  {
    "count.nfe.processing_time.minutes": 114,
    "facet": "Botucatu",
    "nfe.municipio_servico": "Botucatu"
  },
  {
    "count.nfe.processing_time.minutes": 112,
    "facet": "São Bernardo do Campo",
    "nfe.municipio_servico": "São Bernardo do Campo"
  },
  {
    "count.nfe.processing_time.minutes": 112,
    "facet": "Goiânia",
    "nfe.municipio_servico": "Goiânia"
  },
  {
    "count.nfe.processing_time.minutes": 112,
    "facet": "São José do Rio Preto",
    "nfe.municipio_servico": "São José do Rio Preto"
  },
  {
    "count.nfe.processing_time.minutes": 112,
    "facet": "Uberlândia",
    "nfe.municipio_servico": "Uberlândia"
  },
  {
    "count.nfe.processing_time.minutes": 112,
    "facet": "Niterói",
    "nfe.municipio_servico": "Niterói"
  },
  {
    "count.nfe.processing_time.minutes": 109,
    "facet": "Nova Lima",
    "nfe.municipio_servico": "Nova Lima"
  }
],
  municipioStatus: [
  {
    "facet": [
      "Corbélia",
      "SolicitandoAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 361
  },
  {
    "facet": [
      "Florianópolis",
      "SolicitandoAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 11
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
      "Belém",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
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
      "Eusébio",
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
    "latest.nfe.stuck_in_intermediate_status.count": 361
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
    "empresa.razao_social": "D&F CURSOS DIGITAIS EM DESENVOLVIMENTO LTDA",
    "facet": "D&F CURSOS DIGITAIS EM DESENVOLVIMENTO LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "INSTITUTO BRASILEIRO DE ENGENHARIA ESTRUTURAL LTDA",
    "facet": "INSTITUTO BRASILEIRO DE ENGENHARIA ESTRUTURAL LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "NETPOS SERVICOS DE INFORMATICA S.A.",
    "facet": "NETPOS SERVICOS DE INFORMATICA S.A.",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  travadasPorStatusMunicipio: [
  {
    "facet": [
      "SolicitandoAutorizacao",
      "Corbélia"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 361
  },
  {
    "facet": [
      "SolicitandoAutorizacao",
      "Florianópolis"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 11
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
      "Belém"
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
      "Eusébio"
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
      "Vila Velha"
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
    "latest.nfe.stuck_in_intermediate_status.count": 361
  },
  {
    "facet": [
      "",
      "RACIOCINIO CLINICO VET CURSOS E TREINAMENTOS PROFISSIONAIS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 11
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
      "AF MIDIAS LTDA"
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
      "DIALETICO SERVICOS EDUCACIONAIS SS LTDA"
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
      "JPSCM MARKETING LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "L C INFOPRODUTOS LTDA"
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
      "MA GESTAO DE TRAFEGO LTDA"
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
      "VILLAR E MODESTO ENGENHARIA E TECNOLOGIA LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  volumetriaHora: [
  {
    "canceladas": 6,
    "devolucoes": 0,
    "em_emissao": 480,
    "email": 0,
    "emitidas": 6123,
    "falhas": 529
  }
],
  volumetriaTimeseries: [
  {
    "beginTimeSeconds": 1782428700,
    "emitidas": 4494,
    "endTimeSeconds": 1782432300,
    "falhas": 430
  },
  {
    "beginTimeSeconds": 1782432300,
    "emitidas": 4662,
    "endTimeSeconds": 1782435900,
    "falhas": 964
  },
  {
    "beginTimeSeconds": 1782435900,
    "emitidas": 7711,
    "endTimeSeconds": 1782439500,
    "falhas": 249
  },
  {
    "beginTimeSeconds": 1782439500,
    "emitidas": 4905,
    "endTimeSeconds": 1782443100,
    "falhas": 147
  },
  {
    "beginTimeSeconds": 1782443100,
    "emitidas": 3729,
    "endTimeSeconds": 1782446700,
    "falhas": 205
  },
  {
    "beginTimeSeconds": 1782446700,
    "emitidas": 9732,
    "endTimeSeconds": 1782450300,
    "falhas": 727
  },
  {
    "beginTimeSeconds": 1782450300,
    "emitidas": 2084,
    "endTimeSeconds": 1782453900,
    "falhas": 109
  },
  {
    "beginTimeSeconds": 1782453900,
    "emitidas": 1685,
    "endTimeSeconds": 1782457500,
    "falhas": 117
  },
  {
    "beginTimeSeconds": 1782457500,
    "emitidas": 1190,
    "endTimeSeconds": 1782461100,
    "falhas": 52
  },
  {
    "beginTimeSeconds": 1782461100,
    "emitidas": 1449,
    "endTimeSeconds": 1782464700,
    "falhas": 77
  },
  {
    "beginTimeSeconds": 1782464700,
    "emitidas": 1823,
    "endTimeSeconds": 1782468300,
    "falhas": 121
  },
  {
    "beginTimeSeconds": 1782468300,
    "emitidas": 2030,
    "endTimeSeconds": 1782471900,
    "falhas": 183
  },
  {
    "beginTimeSeconds": 1782471900,
    "emitidas": 3830,
    "endTimeSeconds": 1782475500,
    "falhas": 343
  },
  {
    "beginTimeSeconds": 1782475500,
    "emitidas": 7151,
    "endTimeSeconds": 1782479100,
    "falhas": 738
  },
  {
    "beginTimeSeconds": 1782479100,
    "emitidas": 7191,
    "endTimeSeconds": 1782482700,
    "falhas": 788
  },
  {
    "beginTimeSeconds": 1782482700,
    "emitidas": 7856,
    "endTimeSeconds": 1782486300,
    "falhas": 441
  },
  {
    "beginTimeSeconds": 1782486300,
    "emitidas": 10168,
    "endTimeSeconds": 1782489900,
    "falhas": 1779
  },
  {
    "beginTimeSeconds": 1782489900,
    "emitidas": 7011,
    "endTimeSeconds": 1782493500,
    "falhas": 408
  },
  {
    "beginTimeSeconds": 1782493500,
    "emitidas": 8828,
    "endTimeSeconds": 1782497100,
    "falhas": 673
  },
  {
    "beginTimeSeconds": 1782497100,
    "emitidas": 8329,
    "endTimeSeconds": 1782500700,
    "falhas": 1185
  },
  {
    "beginTimeSeconds": 1782500700,
    "emitidas": 6760,
    "endTimeSeconds": 1782504300,
    "falhas": 1072
  },
  {
    "beginTimeSeconds": 1782504300,
    "emitidas": 9206,
    "endTimeSeconds": 1782507900,
    "falhas": 1402
  },
  {
    "beginTimeSeconds": 1782507900,
    "emitidas": 7511,
    "endTimeSeconds": 1782511500,
    "falhas": 498
  },
  {
    "beginTimeSeconds": 1782511500,
    "emitidas": 6271,
    "endTimeSeconds": 1782515100,
    "falhas": 549
  }
],
  filaOperacoes: [
  {
    "pendentes": 0,
    "rodando": 2
  }
],
  webhooks: [
  {
    "dead_letter": 2,
    "falhas": 2,
    "ok": 30592
  }
],
  travadasStatusEmpresa: {"6":[],"3":[],"1":[],"0":[],"12":[]},
  totalMunicipiosPendentes: [
  {
    "uniqueCount.nfe.municipio_servico": 11
  }
],
  taxaNfse: [
  {
    "rejeicao": 18.699430656159347,
    "sucesso": 81.30056934384079
  }
],
  taxaNfe: [
  {
    "rejeicao": 4.216833364146293,
    "sucesso": 95.78316663585362
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
    "facet": "Dois Irmãos",
    "municipio.nome": "Dois Irmãos",
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
    "facet": "Botosani",
    "municipio.nome": "Botosani",
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
    "facet": "Patos de Minas",
    "municipio.nome": "Patos de Minas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Paramus",
    "municipio.nome": "Paramus",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Saint-Louis França",
    "municipio.nome": "Saint-Louis França",
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
    "facet": "Alegre",
    "municipio.nome": "Alegre",
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
    "facet": "Bragança Paulista",
    "municipio.nome": "Bragança Paulista",
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
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 20,
    "taxa_rejeicao": 3.5650623885918,
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
    "facet": "Pilar",
    "municipio.nome": "Pilar",
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
    "facet": "Campina Grande",
    "municipio.nome": "Campina Grande",
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
    "facet": "Lingen",
    "municipio.nome": "Lingen",
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
    "facet": "Goianésia",
    "municipio.nome": "Goianésia",
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
    "facet": "Sacramento",
    "municipio.nome": "Sacramento",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Lengede Broistedt",
    "municipio.nome": "Lengede Broistedt",
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
    "facet": "Itaúna",
    "municipio.nome": "Itaúna",
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
    "facet": "Pato Branco",
    "municipio.nome": "Pato Branco",
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
    "facet": "Manhuaçu",
    "municipio.nome": "Manhuaçu",
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
    "facet": "Parnaíba",
    "municipio.nome": "Parnaíba",
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
    "facet": "Camboriú",
    "municipio.nome": "Camboriú",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santo Antônio do Pinhal",
    "municipio.nome": "Santo Antônio do Pinhal",
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
    "facet": "Itapetininga",
    "municipio.nome": "Itapetininga",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Troy",
    "municipio.nome": "Troy",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pompano",
    "municipio.nome": "Pompano",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Garden Grove",
    "municipio.nome": "Garden Grove",
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
    "facet": "Embu das Artes",
    "municipio.nome": "Embu das Artes",
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
    "facet": "Engelberg",
    "municipio.nome": "Engelberg",
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
    "facet": "Manizales",
    "municipio.nome": "Manizales",
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
    "facet": "São Miguel do Oeste",
    "municipio.nome": "São Miguel do Oeste",
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
    "facet": "Não informado",
    "municipio.nome": "Não informado",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Cruz de la Sierra",
    "municipio.nome": "Santa Cruz de la Sierra",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Catanduva",
    "municipio.nome": "Catanduva",
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
    "facet": "New York City",
    "municipio.nome": "New York City",
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
    "facet": "Barão de Cocais",
    "municipio.nome": "Barão de Cocais",
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
    "facet": "Lençóis",
    "municipio.nome": "Lençóis",
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
    "facet": "Bogota",
    "municipio.nome": "Bogota",
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
    "facet": "Béni Messous Alger",
    "municipio.nome": "Béni Messous Alger",
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
    "facet": "Ipirá",
    "municipio.nome": "Ipirá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Francisco do Sul",
    "municipio.nome": "São Francisco do Sul",
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
    "facet": "Alfenas",
    "municipio.nome": "Alfenas",
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
    "facet": "Estado de México",
    "municipio.nome": "Estado de México",
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
    "facet": "Nova Mutum",
    "municipio.nome": "Nova Mutum",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Bombinhas",
    "municipio.nome": "Bombinhas",
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
    "facet": "Ivoti",
    "municipio.nome": "Ivoti",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guaramirim",
    "municipio.nome": "Guaramirim",
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
    "facet": "Itapema",
    "municipio.nome": "Itapema",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Goiana",
    "municipio.nome": "Goiana",
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
    "facet": "Guarulhos",
    "municipio.nome": "Guarulhos",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santo Amaro da Imperatriz",
    "municipio.nome": "Santo Amaro da Imperatriz",
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
    "facet": "Três Corações",
    "municipio.nome": "Três Corações",
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
    "facet": "Araruama",
    "municipio.nome": "Araruama",
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
    "facet": "João Pessoa",
    "municipio.nome": "João Pessoa",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Registro",
    "municipio.nome": "Registro",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Balneário Camboriú",
    "municipio.nome": "Balneário Camboriú",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Vespasiano",
    "municipio.nome": "Vespasiano",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Miami",
    "municipio.nome": "Miami",
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
    "facet": "Ponta Porã",
    "municipio.nome": "Ponta Porã",
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
    "facet": "Treze Tílias",
    "municipio.nome": "Treze Tílias",
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
    "facet": "Athens",
    "municipio.nome": "Athens",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Capanema",
    "municipio.nome": "Capanema",
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
    "facet": "Araraquara",
    "municipio.nome": "Araraquara",
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
    "facet": "Massachusetts",
    "municipio.nome": "Massachusetts",
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
    "facet": "Pinhais",
    "municipio.nome": "Pinhais",
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
    "facet": "Coronel Fabriciano",
    "municipio.nome": "Coronel Fabriciano",
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
    "facet": "Memphis",
    "municipio.nome": "Memphis",
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
    "facet": "Timisoara",
    "municipio.nome": "Timisoara",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cúcuta",
    "municipio.nome": "Cúcuta",
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
    "facet": "Passos",
    "municipio.nome": "Passos",
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
    "facet": "Alumínio",
    "municipio.nome": "Alumínio",
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
    "facet": "Lima",
    "municipio.nome": "Lima",
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
    "facet": "Colombo",
    "municipio.nome": "Colombo",
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
    "facet": "Mauá",
    "municipio.nome": "Mauá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Chicago",
    "municipio.nome": "Chicago",
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
    "facet": "Armação dos Búzios",
    "municipio.nome": "Armação dos Búzios",
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
    "facet": "União da Vitória",
    "municipio.nome": "União da Vitória",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.3194888178913,
    "taxa_sucesso": 99.6805111821086
  },
  {
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
    "rejeitadas": 2,
    "taxa_rejeicao": 0.3649635036496,
    "taxa_sucesso": 99.63503649635031
  },
  {
    "facet": "Salvador",
    "municipio.nome": "Salvador",
    "rejeitadas": 32,
    "taxa_rejeicao": 0.4532577903682,
    "taxa_sucesso": 99.5467422096317
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.5681818181818,
    "taxa_sucesso": 99.4318181818181
  },
  {
    "facet": "Nova Lima",
    "municipio.nome": "Nova Lima",
    "rejeitadas": 2,
    "taxa_rejeicao": 0.8888888888888,
    "taxa_sucesso": 99.1111111111111
  },
  {
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.010101010101,
    "taxa_sucesso": 98.98989898989889
  },
  {
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.1627906976744,
    "taxa_sucesso": 98.8372093023255
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 28,
    "taxa_rejeicao": 1.505376344086,
    "taxa_sucesso": 98.4946236559139
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 5,
    "taxa_rejeicao": 1.547987616099,
    "taxa_sucesso": 98.4520123839009
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.5641025641025,
    "taxa_sucesso": 97.4358974358974
  },
  {
    "facet": "Campinas",
    "municipio.nome": "Campinas",
    "rejeitadas": 3,
    "taxa_rejeicao": 2.5862068965517,
    "taxa_sucesso": 97.41379310344819
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 3,
    "taxa_rejeicao": 3.1578947368421,
    "taxa_sucesso": 96.84210526315779
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 11,
    "taxa_rejeicao": 3.1609195402298,
    "taxa_sucesso": 96.8390804597701
  },
  {
    "facet": "Betim",
    "municipio.nome": "Betim",
    "rejeitadas": 1,
    "taxa_rejeicao": 4.1666666666666,
    "taxa_sucesso": 95.8333333333333
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 5,
    "taxa_rejeicao": 4.2016806722689,
    "taxa_sucesso": 95.79831932773101
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 8,
    "taxa_rejeicao": 4.5454545454545,
    "taxa_sucesso": 95.45454545454541
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 312,
    "taxa_rejeicao": 4.6208530805687,
    "taxa_sucesso": 95.3791469194312
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 5,
    "taxa_rejeicao": 5.050505050505,
    "taxa_sucesso": 94.94949494949489
  },
  {
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
    "rejeitadas": 1,
    "taxa_rejeicao": 5.8823529411764,
    "taxa_sucesso": 94.11764705882351
  },
  {
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 1,
    "taxa_rejeicao": 6.25,
    "taxa_sucesso": 93.75
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 1,
    "taxa_rejeicao": 6.6666666666666,
    "taxa_sucesso": 93.3333333333333
  },
  {
    "facet": "Americana",
    "municipio.nome": "Americana",
    "rejeitadas": 1,
    "taxa_rejeicao": 6.6666666666666,
    "taxa_sucesso": 93.3333333333333
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 18,
    "taxa_rejeicao": 6.766917293233,
    "taxa_sucesso": 93.2330827067669
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 4,
    "taxa_rejeicao": 7.2727272727272,
    "taxa_sucesso": 92.7272727272727
  },
  {
    "facet": "Santos",
    "municipio.nome": "Santos",
    "rejeitadas": 3,
    "taxa_rejeicao": 7.5,
    "taxa_sucesso": 92.5
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 6,
    "taxa_rejeicao": 8.8235294117647,
    "taxa_sucesso": 91.1764705882352
  },
  {
    "facet": "Indaiatuba",
    "municipio.nome": "Indaiatuba",
    "rejeitadas": 1,
    "taxa_rejeicao": 9.090909090909,
    "taxa_sucesso": 90.90909090909089
  },
  {
    "facet": "Niterói",
    "municipio.nome": "Niterói",
    "rejeitadas": 1,
    "taxa_rejeicao": 10,
    "taxa_sucesso": 90
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 9,
    "taxa_rejeicao": 11.6883116883116,
    "taxa_sucesso": 88.3116883116883
  },
  {
    "facet": "Cascavel",
    "municipio.nome": "Cascavel",
    "rejeitadas": 1,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "São José",
    "municipio.nome": "São José",
    "rejeitadas": 3,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 3,
    "taxa_rejeicao": 13.0434782608695,
    "taxa_sucesso": 86.9565217391304
  },
  {
    "facet": "Naviraí",
    "municipio.nome": "Naviraí",
    "rejeitadas": 4,
    "taxa_rejeicao": 13.3333333333333,
    "taxa_sucesso": 86.66666666666659
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 2,
    "taxa_rejeicao": 13.3333333333333,
    "taxa_sucesso": 86.66666666666659
  },
  {
    "facet": "Joinville",
    "municipio.nome": "Joinville",
    "rejeitadas": 5,
    "taxa_rejeicao": 13.5135135135135,
    "taxa_sucesso": 86.4864864864864
  },
  {
    "facet": "Londrina",
    "municipio.nome": "Londrina",
    "rejeitadas": 3,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "Formiga",
    "municipio.nome": "Formiga",
    "rejeitadas": 1,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 99,
    "taxa_rejeicao": 16.3636363636363,
    "taxa_sucesso": 83.6363636363636
  },
  {
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
    "rejeitadas": 2,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 29,
    "taxa_rejeicao": 17.2619047619047,
    "taxa_sucesso": 82.7380952380952
  },
  {
    "facet": "Caxias do Sul",
    "municipio.nome": "Caxias do Sul",
    "rejeitadas": 2,
    "taxa_rejeicao": 18.1818181818181,
    "taxa_sucesso": 81.8181818181818
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 7,
    "taxa_rejeicao": 18.4210526315789,
    "taxa_sucesso": 81.578947368421
  },
  {
    "facet": "Natal",
    "municipio.nome": "Natal",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Amparo",
    "municipio.nome": "Amparo",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Taubaté",
    "municipio.nome": "Taubaté",
    "rejeitadas": 6,
    "taxa_rejeicao": 22.2222222222222,
    "taxa_sucesso": 77.7777777777777
  },
  {
    "facet": "São Joaquim da Barra",
    "municipio.nome": "São Joaquim da Barra",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 3,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Jaboticabal",
    "municipio.nome": "Jaboticabal",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Bauru",
    "municipio.nome": "Bauru",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Campo Belo",
    "municipio.nome": "Campo Belo",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Porto Velho",
    "municipio.nome": "Porto Velho",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Limeira",
    "municipio.nome": "Limeira",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Araras",
    "municipio.nome": "Araras",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
    "rejeitadas": 2,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Chapecó",
    "municipio.nome": "Chapecó",
    "rejeitadas": 2,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 3,
    "taxa_rejeicao": 42.8571428571428,
    "taxa_sucesso": 57.1428571428571
  },
  {
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Santa Maria",
    "municipio.nome": "Santa Maria",
    "rejeitadas": 2,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Palmas",
    "municipio.nome": "Palmas",
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
    "facet": "Vinhedo",
    "municipio.nome": "Vinhedo",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Jundiaí",
    "municipio.nome": "Jundiaí",
    "rejeitadas": 3,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Olinda",
    "municipio.nome": "Olinda",
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
    "facet": "Saquarema",
    "municipio.nome": "Saquarema",
    "rejeitadas": 3,
    "taxa_rejeicao": 60,
    "taxa_sucesso": 40
  },
  {
    "facet": "Feira de Santana",
    "municipio.nome": "Feira de Santana",
    "rejeitadas": 3,
    "taxa_rejeicao": 60,
    "taxa_sucesso": 40
  },
  {
    "facet": "Rio Doce",
    "municipio.nome": "Rio Doce",
    "rejeitadas": 5,
    "taxa_rejeicao": 62.5,
    "taxa_sucesso": 37.5
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 9,
    "taxa_rejeicao": 64.2857142857142,
    "taxa_sucesso": 35.7142857142857
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 14,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Lajeado",
    "municipio.nome": "Lajeado",
    "rejeitadas": 4,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 17,
    "taxa_rejeicao": 70.8333333333333,
    "taxa_sucesso": 29.1666666666666
  },
  {
    "facet": "Botucatu",
    "municipio.nome": "Botucatu",
    "rejeitadas": 225,
    "taxa_rejeicao": 84.5864661654135,
    "taxa_sucesso": 15.4135338345864
  },
  {
    "facet": "Lagoa Santa",
    "municipio.nome": "Lagoa Santa",
    "rejeitadas": 6,
    "taxa_rejeicao": 85.7142857142857,
    "taxa_sucesso": 14.2857142857142
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 6,
    "taxa_rejeicao": 85.7142857142857,
    "taxa_sucesso": 14.2857142857142
  },
  {
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
    "rejeitadas": 8,
    "taxa_rejeicao": 88.8888888888888,
    "taxa_sucesso": 11.1111111111111
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 38,
    "taxa_rejeicao": 92.6829268292682,
    "taxa_sucesso": 7.3170731707317
  },
  {
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
    "rejeitadas": 88,
    "taxa_rejeicao": 94.6236559139784,
    "taxa_sucesso": 5.3763440860215
  },
  {
    "facet": "Nova Serrana",
    "municipio.nome": "Nova Serrana",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Campo Verde",
    "municipio.nome": "Campo Verde",
    "rejeitadas": 2,
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
    "facet": "Serra Negra",
    "municipio.nome": "Serra Negra",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
    "rejeitadas": 6,
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
    "facet": "Suzano",
    "municipio.nome": "Suzano",
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
    "facet": "Canoas",
    "municipio.nome": "Canoas",
    "rejeitadas": 13,
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
    "facet": "Peruíbe",
    "municipio.nome": "Peruíbe",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jales",
    "municipio.nome": "Jales",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Navegantes",
    "municipio.nome": "Navegantes",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Presidente Prudente",
    "municipio.nome": "Presidente Prudente",
    "rejeitadas": 4,
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
    "rejeitadas": 2,
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
    "facet": "Arapiraca",
    "municipio.nome": "Arapiraca",
    "rejeitadas": 2,
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
    "facet": "São Sebastião do Paraíso",
    "municipio.nome": "São Sebastião do Paraíso",
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
    "facet": "Paulínia",
    "municipio.nome": "Paulínia",
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
    "facet": "Mogi das Cruzes",
    "municipio.nome": "Mogi das Cruzes",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Orlândia",
    "municipio.nome": "Orlândia",
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
    "facet": "Farroupilha",
    "municipio.nome": "Farroupilha",
    "rejeitadas": 5,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Foz do Iguaçu",
    "municipio.nome": "Foz do Iguaçu",
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
    "facet": "Mirassol",
    "municipio.nome": "Mirassol",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Poá",
    "municipio.nome": "Poá",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Conselheiro Lafaiete",
    "municipio.nome": "Conselheiro Lafaiete",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jaraguá do Sul",
    "municipio.nome": "Jaraguá do Sul",
    "rejeitadas": 6,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Barra Velha",
    "municipio.nome": "Barra Velha",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 8,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Vargem Grande Paulista",
    "municipio.nome": "Vargem Grande Paulista",
    "rejeitadas": 3,
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
    "facet": "Ponta Grossa",
    "municipio.nome": "Ponta Grossa",
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
    "facet": "Soledade",
    "municipio.nome": "Soledade",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São João del Rei",
    "municipio.nome": "São João del Rei",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  }
],
  taxaRejeicaoMunicipio: [
  {
    "facet": "Nova Serrana",
    "municipio.nome": "Nova Serrana",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Campo Verde",
    "municipio.nome": "Campo Verde",
    "rejeitadas": 2,
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
    "facet": "Serra Negra",
    "municipio.nome": "Serra Negra",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
    "rejeitadas": 6,
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
    "facet": "Suzano",
    "municipio.nome": "Suzano",
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
    "facet": "Canoas",
    "municipio.nome": "Canoas",
    "rejeitadas": 13,
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
    "facet": "Peruíbe",
    "municipio.nome": "Peruíbe",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jales",
    "municipio.nome": "Jales",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Navegantes",
    "municipio.nome": "Navegantes",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Presidente Prudente",
    "municipio.nome": "Presidente Prudente",
    "rejeitadas": 4,
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
    "rejeitadas": 2,
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
    "facet": "Arapiraca",
    "municipio.nome": "Arapiraca",
    "rejeitadas": 2,
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
    "facet": "São Sebastião do Paraíso",
    "municipio.nome": "São Sebastião do Paraíso",
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
    "facet": "Paulínia",
    "municipio.nome": "Paulínia",
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
    "facet": "Mogi das Cruzes",
    "municipio.nome": "Mogi das Cruzes",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Orlândia",
    "municipio.nome": "Orlândia",
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
    "facet": "Farroupilha",
    "municipio.nome": "Farroupilha",
    "rejeitadas": 5,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Foz do Iguaçu",
    "municipio.nome": "Foz do Iguaçu",
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
    "facet": "Mirassol",
    "municipio.nome": "Mirassol",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Poá",
    "municipio.nome": "Poá",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Conselheiro Lafaiete",
    "municipio.nome": "Conselheiro Lafaiete",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jaraguá do Sul",
    "municipio.nome": "Jaraguá do Sul",
    "rejeitadas": 6,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Barra Velha",
    "municipio.nome": "Barra Velha",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 8,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Vargem Grande Paulista",
    "municipio.nome": "Vargem Grande Paulista",
    "rejeitadas": 3,
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
    "facet": "Ponta Grossa",
    "municipio.nome": "Ponta Grossa",
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
    "facet": "Soledade",
    "municipio.nome": "Soledade",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São João del Rei",
    "municipio.nome": "São João del Rei",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
    "rejeitadas": 88,
    "taxa_rejeicao": 94.6236559139784,
    "taxa_sucesso": 5.3763440860215
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 38,
    "taxa_rejeicao": 92.6829268292682,
    "taxa_sucesso": 7.3170731707317
  },
  {
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
    "rejeitadas": 8,
    "taxa_rejeicao": 88.8888888888888,
    "taxa_sucesso": 11.1111111111111
  },
  {
    "facet": "Lagoa Santa",
    "municipio.nome": "Lagoa Santa",
    "rejeitadas": 6,
    "taxa_rejeicao": 85.7142857142857,
    "taxa_sucesso": 14.2857142857142
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 6,
    "taxa_rejeicao": 85.7142857142857,
    "taxa_sucesso": 14.2857142857142
  },
  {
    "facet": "Botucatu",
    "municipio.nome": "Botucatu",
    "rejeitadas": 225,
    "taxa_rejeicao": 84.5864661654135,
    "taxa_sucesso": 15.4135338345864
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 17,
    "taxa_rejeicao": 70.8333333333333,
    "taxa_sucesso": 29.1666666666666
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 14,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Lajeado",
    "municipio.nome": "Lajeado",
    "rejeitadas": 4,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 9,
    "taxa_rejeicao": 64.2857142857142,
    "taxa_sucesso": 35.7142857142857
  },
  {
    "facet": "Rio Doce",
    "municipio.nome": "Rio Doce",
    "rejeitadas": 5,
    "taxa_rejeicao": 62.5,
    "taxa_sucesso": 37.5
  },
  {
    "facet": "Saquarema",
    "municipio.nome": "Saquarema",
    "rejeitadas": 3,
    "taxa_rejeicao": 60,
    "taxa_sucesso": 40
  },
  {
    "facet": "Feira de Santana",
    "municipio.nome": "Feira de Santana",
    "rejeitadas": 3,
    "taxa_rejeicao": 60,
    "taxa_sucesso": 40
  },
  {
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Santa Maria",
    "municipio.nome": "Santa Maria",
    "rejeitadas": 2,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Palmas",
    "municipio.nome": "Palmas",
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
    "facet": "Vinhedo",
    "municipio.nome": "Vinhedo",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Jundiaí",
    "municipio.nome": "Jundiaí",
    "rejeitadas": 3,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Olinda",
    "municipio.nome": "Olinda",
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
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 3,
    "taxa_rejeicao": 42.8571428571428,
    "taxa_sucesso": 57.1428571428571
  },
  {
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
    "rejeitadas": 2,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Chapecó",
    "municipio.nome": "Chapecó",
    "rejeitadas": 2,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Campo Belo",
    "municipio.nome": "Campo Belo",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Porto Velho",
    "municipio.nome": "Porto Velho",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Limeira",
    "municipio.nome": "Limeira",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Araras",
    "municipio.nome": "Araras",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "São Joaquim da Barra",
    "municipio.nome": "São Joaquim da Barra",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 3,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Jaboticabal",
    "municipio.nome": "Jaboticabal",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Bauru",
    "municipio.nome": "Bauru",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Taubaté",
    "municipio.nome": "Taubaté",
    "rejeitadas": 6,
    "taxa_rejeicao": 22.2222222222222,
    "taxa_sucesso": 77.7777777777777
  },
  {
    "facet": "Natal",
    "municipio.nome": "Natal",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Amparo",
    "municipio.nome": "Amparo",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 7,
    "taxa_rejeicao": 18.4210526315789,
    "taxa_sucesso": 81.578947368421
  },
  {
    "facet": "Caxias do Sul",
    "municipio.nome": "Caxias do Sul",
    "rejeitadas": 2,
    "taxa_rejeicao": 18.1818181818181,
    "taxa_sucesso": 81.8181818181818
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 29,
    "taxa_rejeicao": 17.2619047619047,
    "taxa_sucesso": 82.7380952380952
  },
  {
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
    "rejeitadas": 2,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 99,
    "taxa_rejeicao": 16.3636363636363,
    "taxa_sucesso": 83.6363636363636
  },
  {
    "facet": "Londrina",
    "municipio.nome": "Londrina",
    "rejeitadas": 3,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "Formiga",
    "municipio.nome": "Formiga",
    "rejeitadas": 1,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "Joinville",
    "municipio.nome": "Joinville",
    "rejeitadas": 5,
    "taxa_rejeicao": 13.5135135135135,
    "taxa_sucesso": 86.4864864864864
  },
  {
    "facet": "Naviraí",
    "municipio.nome": "Naviraí",
    "rejeitadas": 4,
    "taxa_rejeicao": 13.3333333333333,
    "taxa_sucesso": 86.66666666666659
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 2,
    "taxa_rejeicao": 13.3333333333333,
    "taxa_sucesso": 86.66666666666659
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 3,
    "taxa_rejeicao": 13.0434782608695,
    "taxa_sucesso": 86.9565217391304
  },
  {
    "facet": "Cascavel",
    "municipio.nome": "Cascavel",
    "rejeitadas": 1,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "São José",
    "municipio.nome": "São José",
    "rejeitadas": 3,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 9,
    "taxa_rejeicao": 11.6883116883116,
    "taxa_sucesso": 88.3116883116883
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "Niterói",
    "municipio.nome": "Niterói",
    "rejeitadas": 1,
    "taxa_rejeicao": 10,
    "taxa_sucesso": 90
  },
  {
    "facet": "Indaiatuba",
    "municipio.nome": "Indaiatuba",
    "rejeitadas": 1,
    "taxa_rejeicao": 9.090909090909,
    "taxa_sucesso": 90.90909090909089
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 6,
    "taxa_rejeicao": 8.8235294117647,
    "taxa_sucesso": 91.1764705882352
  },
  {
    "facet": "Santos",
    "municipio.nome": "Santos",
    "rejeitadas": 3,
    "taxa_rejeicao": 7.5,
    "taxa_sucesso": 92.5
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 4,
    "taxa_rejeicao": 7.2727272727272,
    "taxa_sucesso": 92.7272727272727
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 18,
    "taxa_rejeicao": 6.766917293233,
    "taxa_sucesso": 93.2330827067669
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 1,
    "taxa_rejeicao": 6.6666666666666,
    "taxa_sucesso": 93.3333333333333
  },
  {
    "facet": "Americana",
    "municipio.nome": "Americana",
    "rejeitadas": 1,
    "taxa_rejeicao": 6.6666666666666,
    "taxa_sucesso": 93.3333333333333
  },
  {
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 1,
    "taxa_rejeicao": 6.25,
    "taxa_sucesso": 93.75
  },
  {
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
    "rejeitadas": 1,
    "taxa_rejeicao": 5.8823529411764,
    "taxa_sucesso": 94.11764705882351
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 5,
    "taxa_rejeicao": 5.050505050505,
    "taxa_sucesso": 94.94949494949489
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 312,
    "taxa_rejeicao": 4.6208530805687,
    "taxa_sucesso": 95.3791469194312
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 8,
    "taxa_rejeicao": 4.5454545454545,
    "taxa_sucesso": 95.45454545454541
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 5,
    "taxa_rejeicao": 4.2016806722689,
    "taxa_sucesso": 95.79831932773101
  },
  {
    "facet": "Betim",
    "municipio.nome": "Betim",
    "rejeitadas": 1,
    "taxa_rejeicao": 4.1666666666666,
    "taxa_sucesso": 95.8333333333333
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 20,
    "taxa_rejeicao": 3.5650623885918,
    "taxa_sucesso": 100
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 11,
    "taxa_rejeicao": 3.1609195402298,
    "taxa_sucesso": 96.8390804597701
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 3,
    "taxa_rejeicao": 3.1578947368421,
    "taxa_sucesso": 96.84210526315779
  },
  {
    "facet": "Campinas",
    "municipio.nome": "Campinas",
    "rejeitadas": 3,
    "taxa_rejeicao": 2.5862068965517,
    "taxa_sucesso": 97.41379310344819
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.5641025641025,
    "taxa_sucesso": 97.4358974358974
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 5,
    "taxa_rejeicao": 1.547987616099,
    "taxa_sucesso": 98.4520123839009
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 28,
    "taxa_rejeicao": 1.505376344086,
    "taxa_sucesso": 98.4946236559139
  },
  {
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.1627906976744,
    "taxa_sucesso": 98.8372093023255
  },
  {
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.010101010101,
    "taxa_sucesso": 98.98989898989889
  },
  {
    "facet": "Nova Lima",
    "municipio.nome": "Nova Lima",
    "rejeitadas": 2,
    "taxa_rejeicao": 0.8888888888888,
    "taxa_sucesso": 99.1111111111111
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.5681818181818,
    "taxa_sucesso": 99.4318181818181
  },
  {
    "facet": "Salvador",
    "municipio.nome": "Salvador",
    "rejeitadas": 32,
    "taxa_rejeicao": 0.4532577903682,
    "taxa_sucesso": 99.5467422096317
  },
  {
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
    "rejeitadas": 2,
    "taxa_rejeicao": 0.3649635036496,
    "taxa_sucesso": 99.63503649635031
  },
  {
    "facet": "União da Vitória",
    "municipio.nome": "União da Vitória",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.3194888178913,
    "taxa_sucesso": 99.6805111821086
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
    "facet": "Dois Irmãos",
    "municipio.nome": "Dois Irmãos",
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
    "facet": "Botosani",
    "municipio.nome": "Botosani",
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
    "facet": "Patos de Minas",
    "municipio.nome": "Patos de Minas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Paramus",
    "municipio.nome": "Paramus",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Saint-Louis França",
    "municipio.nome": "Saint-Louis França",
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
    "facet": "Alegre",
    "municipio.nome": "Alegre",
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
    "facet": "Bragança Paulista",
    "municipio.nome": "Bragança Paulista",
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
    "facet": "Dourados",
    "municipio.nome": "Dourados",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pilar",
    "municipio.nome": "Pilar",
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
    "facet": "Campina Grande",
    "municipio.nome": "Campina Grande",
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
    "facet": "Lingen",
    "municipio.nome": "Lingen",
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
    "facet": "Goianésia",
    "municipio.nome": "Goianésia",
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
    "facet": "Sacramento",
    "municipio.nome": "Sacramento",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Lengede Broistedt",
    "municipio.nome": "Lengede Broistedt",
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
    "facet": "Itaúna",
    "municipio.nome": "Itaúna",
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
    "facet": "Pato Branco",
    "municipio.nome": "Pato Branco",
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
    "facet": "Manhuaçu",
    "municipio.nome": "Manhuaçu",
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
    "facet": "Parnaíba",
    "municipio.nome": "Parnaíba",
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
    "facet": "Camboriú",
    "municipio.nome": "Camboriú",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santo Antônio do Pinhal",
    "municipio.nome": "Santo Antônio do Pinhal",
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
    "facet": "Itapetininga",
    "municipio.nome": "Itapetininga",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Troy",
    "municipio.nome": "Troy",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pompano",
    "municipio.nome": "Pompano",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Garden Grove",
    "municipio.nome": "Garden Grove",
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
    "facet": "Embu das Artes",
    "municipio.nome": "Embu das Artes",
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
    "facet": "Engelberg",
    "municipio.nome": "Engelberg",
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
    "facet": "Manizales",
    "municipio.nome": "Manizales",
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
    "facet": "São Miguel do Oeste",
    "municipio.nome": "São Miguel do Oeste",
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
    "facet": "Não informado",
    "municipio.nome": "Não informado",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Cruz de la Sierra",
    "municipio.nome": "Santa Cruz de la Sierra",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Catanduva",
    "municipio.nome": "Catanduva",
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
    "facet": "New York City",
    "municipio.nome": "New York City",
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
    "facet": "Barão de Cocais",
    "municipio.nome": "Barão de Cocais",
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
    "facet": "Lençóis",
    "municipio.nome": "Lençóis",
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
    "facet": "Bogota",
    "municipio.nome": "Bogota",
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
    "facet": "Béni Messous Alger",
    "municipio.nome": "Béni Messous Alger",
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
    "facet": "Ipirá",
    "municipio.nome": "Ipirá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Francisco do Sul",
    "municipio.nome": "São Francisco do Sul",
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
    "facet": "Alfenas",
    "municipio.nome": "Alfenas",
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
    "facet": "Estado de México",
    "municipio.nome": "Estado de México",
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
    "facet": "Nova Mutum",
    "municipio.nome": "Nova Mutum",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Bombinhas",
    "municipio.nome": "Bombinhas",
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
    "facet": "Ivoti",
    "municipio.nome": "Ivoti",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guaramirim",
    "municipio.nome": "Guaramirim",
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
    "facet": "Itapema",
    "municipio.nome": "Itapema",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Goiana",
    "municipio.nome": "Goiana",
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
    "facet": "Guarulhos",
    "municipio.nome": "Guarulhos",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santo Amaro da Imperatriz",
    "municipio.nome": "Santo Amaro da Imperatriz",
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
    "facet": "Três Corações",
    "municipio.nome": "Três Corações",
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
    "facet": "Araruama",
    "municipio.nome": "Araruama",
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
    "facet": "João Pessoa",
    "municipio.nome": "João Pessoa",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Registro",
    "municipio.nome": "Registro",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Balneário Camboriú",
    "municipio.nome": "Balneário Camboriú",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Vespasiano",
    "municipio.nome": "Vespasiano",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Miami",
    "municipio.nome": "Miami",
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
    "facet": "Ponta Porã",
    "municipio.nome": "Ponta Porã",
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
    "facet": "Treze Tílias",
    "municipio.nome": "Treze Tílias",
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
    "facet": "Athens",
    "municipio.nome": "Athens",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Capanema",
    "municipio.nome": "Capanema",
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
    "facet": "Araraquara",
    "municipio.nome": "Araraquara",
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
    "facet": "Massachusetts",
    "municipio.nome": "Massachusetts",
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
    "facet": "Pinhais",
    "municipio.nome": "Pinhais",
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
    "facet": "Coronel Fabriciano",
    "municipio.nome": "Coronel Fabriciano",
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
    "facet": "Memphis",
    "municipio.nome": "Memphis",
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
    "facet": "Timisoara",
    "municipio.nome": "Timisoara",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cúcuta",
    "municipio.nome": "Cúcuta",
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
    "facet": "Passos",
    "municipio.nome": "Passos",
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
    "facet": "Alumínio",
    "municipio.nome": "Alumínio",
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
    "facet": "Colombo",
    "municipio.nome": "Colombo",
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
    "facet": "Mauá",
    "municipio.nome": "Mauá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Chicago",
    "municipio.nome": "Chicago",
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
    "facet": "Armação dos Búzios",
    "municipio.nome": "Armação dos Búzios",
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
    "beginTimeSeconds": 1782500760,
    "endTimeSeconds": 1782501960,
    "rejeicao": 18.733260246502038,
    "sucesso": 81.26673975349806
  },
  {
    "beginTimeSeconds": 1782501960,
    "endTimeSeconds": 1782503160,
    "rejeicao": 18.680218086852868,
    "sucesso": 81.31978191314708
  },
  {
    "beginTimeSeconds": 1782503160,
    "endTimeSeconds": 1782504360,
    "rejeicao": 18.660753719119263,
    "sucesso": 81.33924628088097
  },
  {
    "beginTimeSeconds": 1782504360,
    "endTimeSeconds": 1782505560,
    "rejeicao": 18.994230538623096,
    "sucesso": 81.00576946137691
  },
  {
    "beginTimeSeconds": 1782505560,
    "endTimeSeconds": 1782506760,
    "rejeicao": 19.095463597604738,
    "sucesso": 80.90453640239544
  },
  {
    "beginTimeSeconds": 1782506760,
    "endTimeSeconds": 1782507960,
    "rejeicao": 18.67828395013699,
    "sucesso": 81.32171604986313
  },
  {
    "beginTimeSeconds": 1782507960,
    "endTimeSeconds": 1782509160,
    "rejeicao": 18.500833438307996,
    "sucesso": 81.49916656169205
  },
  {
    "beginTimeSeconds": 1782509160,
    "endTimeSeconds": 1782510360,
    "rejeicao": 18.392957855836816,
    "sucesso": 81.60704214416329
  },
  {
    "beginTimeSeconds": 1782510360,
    "endTimeSeconds": 1782511560,
    "rejeicao": 17.975218805794846,
    "sucesso": 82.02478119420515
  },
  {
    "beginTimeSeconds": 1782511560,
    "endTimeSeconds": 1782512760,
    "rejeicao": 18.08096330494023,
    "sucesso": 81.91903669505989
  },
  {
    "beginTimeSeconds": 1782512760,
    "endTimeSeconds": 1782513960,
    "rejeicao": 18.75464703244081,
    "sucesso": 81.24535296755943
  },
  {
    "beginTimeSeconds": 1782513960,
    "endTimeSeconds": 1782515160,
    "rejeicao": 19.71831066802355,
    "sucesso": 80.28168933197631
  }
],
  taxaSucessoMunicipioTs: [{"facet": "Barra Mansa", "beginTimeSeconds": 1782500760, "endTimeSeconds": 1782501960, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782501960, "endTimeSeconds": 1782503160, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782503160, "endTimeSeconds": 1782504360, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782504360, "endTimeSeconds": 1782505560, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782505560, "endTimeSeconds": 1782506760, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782506760, "endTimeSeconds": 1782507960, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782507960, "endTimeSeconds": 1782509160, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782509160, "endTimeSeconds": 1782510360, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782510360, "endTimeSeconds": 1782511560, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782511560, "endTimeSeconds": 1782512760, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782512760, "endTimeSeconds": 1782513960, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1782513960, "endTimeSeconds": 1782515160, "municipio.nome": "Barra Mansa", "sucesso": null}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782500760, "endTimeSeconds": 1782501960, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782501960, "endTimeSeconds": 1782503160, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782503160, "endTimeSeconds": 1782504360, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782504360, "endTimeSeconds": 1782505560, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782505560, "endTimeSeconds": 1782506760, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782506760, "endTimeSeconds": 1782507960, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782507960, "endTimeSeconds": 1782509160, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782509160, "endTimeSeconds": 1782510360, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782510360, "endTimeSeconds": 1782511560, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782511560, "endTimeSeconds": 1782512760, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782512760, "endTimeSeconds": 1782513960, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782513960, "endTimeSeconds": 1782515160, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782500760, "endTimeSeconds": 1782501960, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782501960, "endTimeSeconds": 1782503160, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782503160, "endTimeSeconds": 1782504360, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782504360, "endTimeSeconds": 1782505560, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782505560, "endTimeSeconds": 1782506760, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782506760, "endTimeSeconds": 1782507960, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782507960, "endTimeSeconds": 1782509160, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782509160, "endTimeSeconds": 1782510360, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782510360, "endTimeSeconds": 1782511560, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782511560, "endTimeSeconds": 1782512760, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782512760, "endTimeSeconds": 1782513960, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782513960, "endTimeSeconds": 1782515160, "municipio.nome": "Caic\u00f3", "sucesso": null}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782500760, "endTimeSeconds": 1782501960, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782501960, "endTimeSeconds": 1782503160, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782503160, "endTimeSeconds": 1782504360, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782504360, "endTimeSeconds": 1782505560, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782505560, "endTimeSeconds": 1782506760, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782506760, "endTimeSeconds": 1782507960, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782507960, "endTimeSeconds": 1782509160, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782509160, "endTimeSeconds": 1782510360, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782510360, "endTimeSeconds": 1782511560, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782511560, "endTimeSeconds": 1782512760, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782512760, "endTimeSeconds": 1782513960, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782513960, "endTimeSeconds": 1782515160, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782500760, "endTimeSeconds": 1782501960, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782501960, "endTimeSeconds": 1782503160, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782503160, "endTimeSeconds": 1782504360, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782504360, "endTimeSeconds": 1782505560, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782505560, "endTimeSeconds": 1782506760, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782506760, "endTimeSeconds": 1782507960, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782507960, "endTimeSeconds": 1782509160, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782509160, "endTimeSeconds": 1782510360, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782510360, "endTimeSeconds": 1782511560, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782511560, "endTimeSeconds": 1782512760, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782512760, "endTimeSeconds": 1782513960, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1782513960, "endTimeSeconds": 1782515160, "municipio.nome": "Salgueiro", "sucesso": null}, {"facet": "Itabaiana", "beginTimeSeconds": 1782500760, "endTimeSeconds": 1782501960, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782501960, "endTimeSeconds": 1782503160, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782503160, "endTimeSeconds": 1782504360, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782504360, "endTimeSeconds": 1782505560, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782505560, "endTimeSeconds": 1782506760, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782506760, "endTimeSeconds": 1782507960, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782507960, "endTimeSeconds": 1782509160, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782509160, "endTimeSeconds": 1782510360, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782510360, "endTimeSeconds": 1782511560, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782511560, "endTimeSeconds": 1782512760, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782512760, "endTimeSeconds": 1782513960, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782513960, "endTimeSeconds": 1782515160, "municipio.nome": "Itabaiana", "sucesso": null}, {"facet": "Itaperuna", "beginTimeSeconds": 1782500760, "endTimeSeconds": 1782501960, "municipio.nome": "Itaperuna", "sucesso": 100.0}, {"facet": "Itaperuna", "beginTimeSeconds": 1782501960, "endTimeSeconds": 1782503160, "municipio.nome": "Itaperuna", "sucesso": 100.0}, {"facet": "Itaperuna", "beginTimeSeconds": 1782503160, "endTimeSeconds": 1782504360, "municipio.nome": "Itaperuna", "sucesso": 100.0}, {"facet": "Itaperuna", "beginTimeSeconds": 1782504360, "endTimeSeconds": 1782505560, "municipio.nome": "Itaperuna", "sucesso": 100.0}, {"facet": "Itaperuna", "beginTimeSeconds": 1782505560, "endTimeSeconds": 1782506760, "municipio.nome": "Itaperuna", "sucesso": 100.0}, {"facet": "Itaperuna", "beginTimeSeconds": 1782506760, "endTimeSeconds": 1782507960, "municipio.nome": "Itaperuna", "sucesso": 100.0}, {"facet": "Itaperuna", "beginTimeSeconds": 1782507960, "endTimeSeconds": 1782509160, "municipio.nome": "Itaperuna", "sucesso": 100.0}, {"facet": "Itaperuna", "beginTimeSeconds": 1782509160, "endTimeSeconds": 1782510360, "municipio.nome": "Itaperuna", "sucesso": 100.0}, {"facet": "Itaperuna", "beginTimeSeconds": 1782510360, "endTimeSeconds": 1782511560, "municipio.nome": "Itaperuna", "sucesso": 100.0}, {"facet": "Itaperuna", "beginTimeSeconds": 1782511560, "endTimeSeconds": 1782512760, "municipio.nome": "Itaperuna", "sucesso": 100.0}, {"facet": "Itaperuna", "beginTimeSeconds": 1782512760, "endTimeSeconds": 1782513960, "municipio.nome": "Itaperuna", "sucesso": 100.0}, {"facet": "Itaperuna", "beginTimeSeconds": 1782513960, "endTimeSeconds": 1782515160, "municipio.nome": "Itaperuna", "sucesso": null}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782500760, "endTimeSeconds": 1782501960, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782501960, "endTimeSeconds": 1782503160, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782503160, "endTimeSeconds": 1782504360, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782504360, "endTimeSeconds": 1782505560, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782505560, "endTimeSeconds": 1782506760, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782506760, "endTimeSeconds": 1782507960, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782507960, "endTimeSeconds": 1782509160, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782509160, "endTimeSeconds": 1782510360, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782510360, "endTimeSeconds": 1782511560, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782511560, "endTimeSeconds": 1782512760, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782512760, "endTimeSeconds": 1782513960, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782513960, "endTimeSeconds": 1782515160, "municipio.nome": "Ilh\u00e9us", "sucesso": null}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782500760, "endTimeSeconds": 1782501960, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782501960, "endTimeSeconds": 1782503160, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782503160, "endTimeSeconds": 1782504360, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782504360, "endTimeSeconds": 1782505560, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782505560, "endTimeSeconds": 1782506760, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782506760, "endTimeSeconds": 1782507960, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782507960, "endTimeSeconds": 1782509160, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782509160, "endTimeSeconds": 1782510360, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782510360, "endTimeSeconds": 1782511560, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782511560, "endTimeSeconds": 1782512760, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782512760, "endTimeSeconds": 1782513960, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782513960, "endTimeSeconds": 1782515160, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1782500760, "endTimeSeconds": 1782501960, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1782501960, "endTimeSeconds": 1782503160, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1782503160, "endTimeSeconds": 1782504360, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1782504360, "endTimeSeconds": 1782505560, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1782505560, "endTimeSeconds": 1782506760, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1782506760, "endTimeSeconds": 1782507960, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1782507960, "endTimeSeconds": 1782509160, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1782509160, "endTimeSeconds": 1782510360, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1782510360, "endTimeSeconds": 1782511560, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1782511560, "endTimeSeconds": 1782512760, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1782512760, "endTimeSeconds": 1782513960, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1782513960, "endTimeSeconds": 1782515160, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1782500760, "endTimeSeconds": 1782501960, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1782501960, "endTimeSeconds": 1782503160, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1782503160, "endTimeSeconds": 1782504360, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1782504360, "endTimeSeconds": 1782505560, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1782505560, "endTimeSeconds": 1782506760, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1782506760, "endTimeSeconds": 1782507960, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1782507960, "endTimeSeconds": 1782509160, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1782509160, "endTimeSeconds": 1782510360, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1782510360, "endTimeSeconds": 1782511560, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1782511560, "endTimeSeconds": 1782512760, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1782512760, "endTimeSeconds": 1782513960, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1782513960, "endTimeSeconds": 1782515160, "municipio.nome": "Alfenas", "sucesso": null}, {"facet": "Guapimirim", "beginTimeSeconds": 1782500760, "endTimeSeconds": 1782501960, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782501960, "endTimeSeconds": 1782503160, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782503160, "endTimeSeconds": 1782504360, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782504360, "endTimeSeconds": 1782505560, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782505560, "endTimeSeconds": 1782506760, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782506760, "endTimeSeconds": 1782507960, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782507960, "endTimeSeconds": 1782509160, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782509160, "endTimeSeconds": 1782510360, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782510360, "endTimeSeconds": 1782511560, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782511560, "endTimeSeconds": 1782512760, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782512760, "endTimeSeconds": 1782513960, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782513960, "endTimeSeconds": 1782515160, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782500760, "endTimeSeconds": 1782501960, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782501960, "endTimeSeconds": 1782503160, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782503160, "endTimeSeconds": 1782504360, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782504360, "endTimeSeconds": 1782505560, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782505560, "endTimeSeconds": 1782506760, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782506760, "endTimeSeconds": 1782507960, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782507960, "endTimeSeconds": 1782509160, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782509160, "endTimeSeconds": 1782510360, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782510360, "endTimeSeconds": 1782511560, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782511560, "endTimeSeconds": 1782512760, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782512760, "endTimeSeconds": 1782513960, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782513960, "endTimeSeconds": 1782515160, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782500760, "endTimeSeconds": 1782501960, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782501960, "endTimeSeconds": 1782503160, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782503160, "endTimeSeconds": 1782504360, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782504360, "endTimeSeconds": 1782505560, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782505560, "endTimeSeconds": 1782506760, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782506760, "endTimeSeconds": 1782507960, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782507960, "endTimeSeconds": 1782509160, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782509160, "endTimeSeconds": 1782510360, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782510360, "endTimeSeconds": 1782511560, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782511560, "endTimeSeconds": 1782512760, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782512760, "endTimeSeconds": 1782513960, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782513960, "endTimeSeconds": 1782515160, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782500760, "endTimeSeconds": 1782501960, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782501960, "endTimeSeconds": 1782503160, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782503160, "endTimeSeconds": 1782504360, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782504360, "endTimeSeconds": 1782505560, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782505560, "endTimeSeconds": 1782506760, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782506760, "endTimeSeconds": 1782507960, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782507960, "endTimeSeconds": 1782509160, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782509160, "endTimeSeconds": 1782510360, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782510360, "endTimeSeconds": 1782511560, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782511560, "endTimeSeconds": 1782512760, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782512760, "endTimeSeconds": 1782513960, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782513960, "endTimeSeconds": 1782515160, "municipio.nome": "Alegre", "sucesso": 100.0}]
};
