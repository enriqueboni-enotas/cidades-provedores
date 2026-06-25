// Gerado automaticamente pelo workflow monitoramento-nfe.yml em 25/06/2026 19:51 (Brasilia)
// NAO EDITAR MANUALMENTE
var monitoramentoNfeData = {
  geradoEm: "25/06/2026 19:51",
  travadasPorMunicipio: [
  {
    "facet": "Corbélia",
    "latest.nfe.stuck_in_intermediate_status.count": 354,
    "nfe.municipio_servico": "Corbélia"
  },
  {
    "facet": "Lauro de Freitas",
    "latest.nfe.stuck_in_intermediate_status.count": 5,
    "nfe.municipio_servico": "Lauro de Freitas"
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
    "facet": "Caruaru",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Caruaru"
  },
  {
    "facet": "Florianópolis",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Florianópolis"
  },
  {
    "facet": "Eusébio",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Eusébio"
  },
  {
    "facet": "Santo Ângelo",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Santo Ângelo"
  },
  {
    "facet": "Campinas",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Campinas"
  }
],
  tempoMaxProcessamento: [
  {
    "facet": "Salvador",
    "max.nfe.processing_time.minutes": 17,
    "nfe.municipio_servico": "Salvador"
  },
  {
    "facet": "Nova Lima",
    "max.nfe.processing_time.minutes": 13,
    "nfe.municipio_servico": "Nova Lima"
  },
  {
    "facet": "Taboão da Serra",
    "max.nfe.processing_time.minutes": 13,
    "nfe.municipio_servico": "Taboão da Serra"
  },
  {
    "facet": "São José dos Campos",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "São José dos Campos"
  },
  {
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Caraguatatuba"
  },
  {
    "facet": "Goiânia",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Goiânia"
  },
  {
    "facet": "Mandaguaçu",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Mandaguaçu"
  },
  {
    "facet": "Botucatu",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Botucatu"
  },
  {
    "facet": "Taubaté",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Taubaté"
  },
  {
    "facet": "Londrina",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Londrina"
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
    "average.nfe.processing_time.minutes": 1,
    "facet": "Cancelada",
    "nfe.status": "Cancelada"
  },
  {
    "average.nfe.processing_time.minutes": 0.594578313253012,
    "facet": "Autorizada",
    "nfe.status": "Autorizada"
  },
  {
    "average.nfe.processing_time.minutes": 0.5927272727272728,
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
    "max_min": 1,
    "media_min": 1,
    "p95_min": {
      "95": 1
    }
  },
  {
    "facet": [
      "Autorizada",
      "AutorizadaAguardandoGeracaoPDF"
    ],
    "max_min": 17,
    "media_min": 0.594578313253012,
    "p95_min": {
      "95": 2.015625
    }
  },
  {
    "facet": [
      "Negada",
      "EmProcessoDeAutorizacao"
    ],
    "max_min": 13,
    "media_min": 0.5927272727272728,
    "p95_min": {
      "95": 3.015625
    }
  }
],
  perfMunicipio: [
  {
    "average.nfe.processing_time.minutes": 5,
    "count.nfe.processing_time.minutes": 26,
    "facet": "Nova Lima",
    "max.nfe.processing_time.minutes": 13,
    "nfe.municipio_servico": "Nova Lima",
    "percentile.nfe.processing_time.minutes": {
      "95": 13
    }
  },
  {
    "average.nfe.processing_time.minutes": 4.230769230769231,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Salvador",
    "max.nfe.processing_time.minutes": 17,
    "nfe.municipio_servico": "Salvador",
    "percentile.nfe.processing_time.minutes": {
      "95": 17
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.8461538461538463,
    "count.nfe.processing_time.minutes": 26,
    "facet": "Taboão da Serra",
    "max.nfe.processing_time.minutes": 13,
    "nfe.municipio_servico": "Taboão da Serra",
    "percentile.nfe.processing_time.minutes": {
      "95": 11.0625
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.923076923076923,
    "count.nfe.processing_time.minutes": 13,
    "facet": "São José dos Campos",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "São José dos Campos",
    "percentile.nfe.processing_time.minutes": {
      "95": 6
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.6538461538461537,
    "count.nfe.processing_time.minutes": 26,
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Caraguatatuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.6153846153846154,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Mandaguaçu",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Mandaguaçu",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.1923076923076925,
    "count.nfe.processing_time.minutes": 26,
    "facet": "Botucatu",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Botucatu",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 6,
    "facet": "Rio Grande",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Rio Grande",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.8461538461538463,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Taubaté",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Taubaté",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.3846153846153846,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Londrina",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Londrina",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.1538461538461537,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Guarapuava",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Guarapuava",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.0769230769230769,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Duque de Caxias",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Duque de Caxias",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.0512820512820513,
    "count.nfe.processing_time.minutes": 39,
    "facet": "Barueri",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Barueri",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "São Bernardo do Campo",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São Bernardo do Campo",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Bom Jesus do Itabapoana",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Bom Jesus do Itabapoana",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Varginha",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Varginha",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Santa Maria",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Santa Maria",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Praia Grande",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Praia Grande",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Natal",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Natal",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Goiânia",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Goiânia",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Cascavel",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Cascavel",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Paranavaí",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Paranavaí",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 11,
    "facet": "Xangri-lá",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Xangri-lá",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Salgueiro",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Salgueiro",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Ilhéus",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Ilhéus",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Santa Teresa",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Santa Teresa",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Criciúma",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Criciúma",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Imbé",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Imbé",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 26,
    "facet": "São Caetano do Sul",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São Caetano do Sul",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Uberlândia",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Uberlândia",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 6,
    "facet": "Ourinhos",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Ourinhos",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Fortaleza",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Fortaleza",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "São Joaquim da Barra",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São Joaquim da Barra",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Cuiabá",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Cuiabá",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Capão da Canoa",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Capão da Canoa",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Contagem",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Contagem",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Piúma",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Piúma",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Franca",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Franca",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Anápolis",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Anápolis",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Vitória",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Vitória",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 13,
    "facet": "São Gonçalo",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São Gonçalo",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.9230769230769231,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Maringá",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Maringá",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.9230769230769231,
    "count.nfe.processing_time.minutes": 26,
    "facet": "Curitiba",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Curitiba",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.9230769230769231,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Camaçari",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Camaçari",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.9230769230769231,
    "count.nfe.processing_time.minutes": 13,
    "facet": "São Roque",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São Roque",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.8461538461538461,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Osório",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Osório",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.7692307692307693,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Ibitinga",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Ibitinga",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.6923076923076923,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Vila Velha",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Vila Velha",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.6153846153846154,
    "count.nfe.processing_time.minutes": 13,
    "facet": "Paraibuna",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Paraibuna",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.6153846153846154,
    "count.nfe.processing_time.minutes": 13,
    "facet": "São Luís",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São Luís",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
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
    "facet": "Caruaru",
    "nfe.municipio_servico": "Caruaru",
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
    "facet": "Lauro de Freitas",
    "nfe.municipio_servico": "Lauro de Freitas",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Itapipoca",
    "nfe.municipio_servico": "Itapipoca",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Santo Ângelo",
    "nfe.municipio_servico": "Santo Ângelo",
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
    "average.nfe.processing_time.minutes": 0.5964912280701754,
    "max.nfe.processing_time.minutes": 17,
    "percentile.nfe.processing_time.minutes": {
      "50": 0,
      "90": 1.0078125,
      "95": 2.015625,
      "99": 6.03125
    }
  }
],
  totalEmpresas: [
  {
    "uniqueCount.empresa.razao_social": 16
  }
],
  totalMunicipios: [
  {
    "uniqueCount.nfe.municipio_servico": 148
  }
],
  volumeMunicipio: [
  {
    "count.nfe.processing_time.minutes": 39,
    "facet": "",
    "nfe.municipio_servico": ""
  },
  {
    "count.nfe.processing_time.minutes": 39,
    "facet": "Barueri",
    "nfe.municipio_servico": "Barueri"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Engenheiro Coelho",
    "nfe.municipio_servico": "Engenheiro Coelho"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Taboão da Serra",
    "nfe.municipio_servico": "Taboão da Serra"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Boituva",
    "nfe.municipio_servico": "Boituva"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Nova Lima",
    "nfe.municipio_servico": "Nova Lima"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Rio de Janeiro",
    "nfe.municipio_servico": "Rio de Janeiro"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Botucatu",
    "nfe.municipio_servico": "Botucatu"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Jaú",
    "nfe.municipio_servico": "Jaú"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Itu",
    "nfe.municipio_servico": "Itu"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Curitiba",
    "nfe.municipio_servico": "Curitiba"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Caraguatatuba",
    "nfe.municipio_servico": "Caraguatatuba"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Santos",
    "nfe.municipio_servico": "Santos"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Brasília",
    "nfe.municipio_servico": "Brasília"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Montes Claros",
    "nfe.municipio_servico": "Montes Claros"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Ribeirão Preto",
    "nfe.municipio_servico": "Ribeirão Preto"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "São Paulo",
    "nfe.municipio_servico": "São Paulo"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "São José do Rio Preto",
    "nfe.municipio_servico": "São José do Rio Preto"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Petrolina",
    "nfe.municipio_servico": "Petrolina"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Florianópolis",
    "nfe.municipio_servico": "Florianópolis"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Itapetininga",
    "nfe.municipio_servico": "Itapetininga"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "São Caetano do Sul",
    "nfe.municipio_servico": "São Caetano do Sul"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Porto Alegre",
    "nfe.municipio_servico": "Porto Alegre"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Maceió",
    "nfe.municipio_servico": "Maceió"
  },
  {
    "count.nfe.processing_time.minutes": 26,
    "facet": "Recife",
    "nfe.municipio_servico": "Recife"
  },
  {
    "count.nfe.processing_time.minutes": 24,
    "facet": "Belo Horizonte",
    "nfe.municipio_servico": "Belo Horizonte"
  },
  {
    "count.nfe.processing_time.minutes": 24,
    "facet": "Aparecida de Goiânia",
    "nfe.municipio_servico": "Aparecida de Goiânia"
  },
  {
    "count.nfe.processing_time.minutes": 24,
    "facet": "Santana de Parnaíba",
    "nfe.municipio_servico": "Santana de Parnaíba"
  },
  {
    "count.nfe.processing_time.minutes": 13,
    "facet": "João Monlevade",
    "nfe.municipio_servico": "João Monlevade"
  },
  {
    "count.nfe.processing_time.minutes": 13,
    "facet": "Caicó",
    "nfe.municipio_servico": "Caicó"
  }
],
  municipioStatus: [
  {
    "facet": [
      "Corbélia",
      "SolicitandoAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 354
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
      "Lauro de Freitas",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 5
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
      "Caruaru",
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
      "Santo Ângelo",
      "SolicitandoAutorizacao"
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
    "latest.nfe.stuck_in_intermediate_status.count": 354
  },
  {
    "empresa.razao_social": "RACIOCINIO CLINICO VET CURSOS E TREINAMENTOS PROFISSIONAIS LTDA",
    "facet": "RACIOCINIO CLINICO VET CURSOS E TREINAMENTOS PROFISSIONAIS LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 11
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
    "empresa.razao_social": "AF MIDIAS LTDA",
    "facet": "AF MIDIAS LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "MA GESTAO DE TRAFEGO LTDA",
    "facet": "MA GESTAO DE TRAFEGO LTDA",
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
  }
],
  travadasPorStatusMunicipio: [
  {
    "facet": [
      "SolicitandoAutorizacao",
      "Corbélia"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 354
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
      "EmProcessoDeAutorizacao",
      "Lauro de Freitas"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 5
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
      "Caruaru"
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
  },
  {
    "facet": [
      "SolicitandoAutorizacao",
      "Santo Ângelo"
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
    "latest.nfe.stuck_in_intermediate_status.count": 354
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
      "ACAMPAMENTO RECANTO DA BENCAO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 5
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
      "CENTRO EDUCACIONAL UNINTESE LTDA - ME"
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
      "PORTELA CONSULTORIA E DESENVOLVIMENTO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "SAMIA GOMES TREINAMENTO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  volumetriaHora: [
  {
    "canceladas": 3,
    "devolucoes": 1,
    "em_emissao": 433,
    "email": 0,
    "emitidas": 4395,
    "falhas": 404
  }
],
  volumetriaTimeseries: [
  {
    "beginTimeSeconds": 1782341400,
    "emitidas": 2658,
    "endTimeSeconds": 1782345000,
    "falhas": 363
  },
  {
    "beginTimeSeconds": 1782345000,
    "emitidas": 4878,
    "endTimeSeconds": 1782348600,
    "falhas": 362
  },
  {
    "beginTimeSeconds": 1782348600,
    "emitidas": 7187,
    "endTimeSeconds": 1782352200,
    "falhas": 286
  },
  {
    "beginTimeSeconds": 1782352200,
    "emitidas": 3432,
    "endTimeSeconds": 1782355800,
    "falhas": 264
  },
  {
    "beginTimeSeconds": 1782355800,
    "emitidas": 2176,
    "endTimeSeconds": 1782359400,
    "falhas": 127
  },
  {
    "beginTimeSeconds": 1782359400,
    "emitidas": 10767,
    "endTimeSeconds": 1782363000,
    "falhas": 1122
  },
  {
    "beginTimeSeconds": 1782363000,
    "emitidas": 1573,
    "endTimeSeconds": 1782366600,
    "falhas": 68
  },
  {
    "beginTimeSeconds": 1782366600,
    "emitidas": 2073,
    "endTimeSeconds": 1782370200,
    "falhas": 130
  },
  {
    "beginTimeSeconds": 1782370200,
    "emitidas": 1285,
    "endTimeSeconds": 1782373800,
    "falhas": 68
  },
  {
    "beginTimeSeconds": 1782373800,
    "emitidas": 976,
    "endTimeSeconds": 1782377400,
    "falhas": 78
  },
  {
    "beginTimeSeconds": 1782377400,
    "emitidas": 1268,
    "endTimeSeconds": 1782381000,
    "falhas": 84
  },
  {
    "beginTimeSeconds": 1782381000,
    "emitidas": 1823,
    "endTimeSeconds": 1782384600,
    "falhas": 157
  },
  {
    "beginTimeSeconds": 1782384600,
    "emitidas": 3808,
    "endTimeSeconds": 1782388200,
    "falhas": 277
  },
  {
    "beginTimeSeconds": 1782388200,
    "emitidas": 8104,
    "endTimeSeconds": 1782391800,
    "falhas": 832
  },
  {
    "beginTimeSeconds": 1782391800,
    "emitidas": 7271,
    "endTimeSeconds": 1782395400,
    "falhas": 1712
  },
  {
    "beginTimeSeconds": 1782395400,
    "emitidas": 5603,
    "endTimeSeconds": 1782399000,
    "falhas": 1564
  },
  {
    "beginTimeSeconds": 1782399000,
    "emitidas": 6819,
    "endTimeSeconds": 1782402600,
    "falhas": 1498
  },
  {
    "beginTimeSeconds": 1782402600,
    "emitidas": 3486,
    "endTimeSeconds": 1782406200,
    "falhas": 1300
  },
  {
    "beginTimeSeconds": 1782406200,
    "emitidas": 6599,
    "endTimeSeconds": 1782409800,
    "falhas": 692
  },
  {
    "beginTimeSeconds": 1782409800,
    "emitidas": 5023,
    "endTimeSeconds": 1782413400,
    "falhas": 449
  },
  {
    "beginTimeSeconds": 1782413400,
    "emitidas": 4635,
    "endTimeSeconds": 1782417000,
    "falhas": 612
  },
  {
    "beginTimeSeconds": 1782417000,
    "emitidas": 4323,
    "endTimeSeconds": 1782420600,
    "falhas": 277
  },
  {
    "beginTimeSeconds": 1782420600,
    "emitidas": 4473,
    "endTimeSeconds": 1782424200,
    "falhas": 192
  },
  {
    "beginTimeSeconds": 1782424200,
    "emitidas": 4411,
    "endTimeSeconds": 1782427800,
    "falhas": 405
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
    "dead_letter": 1,
    "falhas": 2,
    "ok": 27533
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
    "rejeicao": 19.893844526834762,
    "sucesso": 80.10615547316529
  }
],
  taxaNfe: [
  {
    "rejeicao": 6.824519857514384,
    "sucesso": 93.17548014248553
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
    "facet": "Trujillo",
    "municipio.nome": "Trujillo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
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
    "facet": "Stadtbergen",
    "municipio.nome": "Stadtbergen",
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
    "facet": "Bragança Paulista",
    "municipio.nome": "Bragança Paulista",
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
    "rejeitadas": 0,
    "taxa_rejeicao": 4.8929663608562,
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
    "facet": "Paraguaçu Paulista",
    "municipio.nome": "Paraguaçu Paulista",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Maria",
    "municipio.nome": "Santa Maria",
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
    "facet": "Xanxerê",
    "municipio.nome": "Xanxerê",
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
    "facet": "Porto Feliz",
    "municipio.nome": "Porto Feliz",
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
    "facet": "Três Lagoas",
    "municipio.nome": "Três Lagoas",
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
    "facet": "Valinhos",
    "municipio.nome": "Valinhos",
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
    "facet": "Pedro Leopoldo",
    "municipio.nome": "Pedro Leopoldo",
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
    "facet": "Accra",
    "municipio.nome": "Accra",
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
    "facet": "Holambra",
    "municipio.nome": "Holambra",
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
    "facet": "Schwyz",
    "municipio.nome": "Schwyz",
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
    "facet": "Mata de São João",
    "municipio.nome": "Mata de São João",
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
    "facet": "Candelária",
    "municipio.nome": "Candelária",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Las vegas",
    "municipio.nome": "Las vegas",
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
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
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
    "facet": "Portão",
    "municipio.nome": "Portão",
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
    "facet": "Goiana",
    "municipio.nome": "Goiana",
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
    "facet": "Lakewood",
    "municipio.nome": "Lakewood",
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
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Luzia",
    "municipio.nome": "Santa Luzia",
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
    "facet": "Cascavel",
    "municipio.nome": "Cascavel",
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
    "facet": "Ponta Porã",
    "municipio.nome": "Ponta Porã",
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
    "facet": "Pontinha",
    "municipio.nome": "Pontinha",
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
    "facet": "Itabira",
    "municipio.nome": "Itabira",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Karachi",
    "municipio.nome": "Karachi",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Vitória do Palmar",
    "municipio.nome": "Santa Vitória do Palmar",
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
    "facet": "Fernandópolis",
    "municipio.nome": "Fernandópolis",
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
    "facet": "Caçapava",
    "municipio.nome": "Caçapava",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Shen Zhen",
    "municipio.nome": "Shen Zhen",
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
    "facet": "Chapecó",
    "municipio.nome": "Chapecó",
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
    "facet": "Nao informado",
    "municipio.nome": "Nao informado",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ponta Grossa",
    "municipio.nome": "Ponta Grossa",
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
    "facet": "Barra de São Francisco",
    "municipio.nome": "Barra de São Francisco",
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
    "facet": "Içara",
    "municipio.nome": "Içara",
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
    "rejeitadas": 1,
    "taxa_rejeicao": 0.0151263046437,
    "taxa_sucesso": 99.98487369535619
  },
  {
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.8928571428571,
    "taxa_sucesso": 99.1071428571428
  },
  {
    "facet": "Campina Grande",
    "municipio.nome": "Campina Grande",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.063829787234,
    "taxa_sucesso": 98.9361702127659
  },
  {
    "facet": "Nova Lima",
    "municipio.nome": "Nova Lima",
    "rejeitadas": 2,
    "taxa_rejeicao": 1.1428571428571,
    "taxa_sucesso": 98.8571428571428
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 10,
    "taxa_rejeicao": 1.4044943820224,
    "taxa_sucesso": 98.59550561797751
  },
  {
    "facet": "Jaú",
    "municipio.nome": "Jaú",
    "rejeitadas": 3,
    "taxa_rejeicao": 1.7647058823529,
    "taxa_sucesso": 98.235294117647
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 6,
    "taxa_rejeicao": 1.9801980198019,
    "taxa_sucesso": 98.019801980198
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 3,
    "taxa_rejeicao": 2.2388059701492,
    "taxa_sucesso": 97.7611940298507
  },
  {
    "facet": "Campinas",
    "municipio.nome": "Campinas",
    "rejeitadas": 3,
    "taxa_rejeicao": 2.4793388429752,
    "taxa_sucesso": 97.5206611570247
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.5641025641025,
    "taxa_sucesso": 97.4358974358974
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.8571428571428,
    "taxa_sucesso": 97.14285714285711
  },
  {
    "facet": "Boituva",
    "municipio.nome": "Boituva",
    "rejeitadas": 3,
    "taxa_rejeicao": 3,
    "taxa_sucesso": 97
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 12,
    "taxa_rejeicao": 3.0075187969924,
    "taxa_sucesso": 96.9924812030075
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 2,
    "taxa_rejeicao": 3.125,
    "taxa_sucesso": 96.875
  },
  {
    "facet": "São José",
    "municipio.nome": "São José",
    "rejeitadas": 1,
    "taxa_rejeicao": 3.7037037037037,
    "taxa_sucesso": 96.29629629629619
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 40,
    "taxa_rejeicao": 4.1025641025641,
    "taxa_sucesso": 95.89743589743581
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 1,
    "taxa_rejeicao": 4.3478260869565,
    "taxa_sucesso": 95.6521739130434
  },
  {
    "facet": "Santos",
    "municipio.nome": "Santos",
    "rejeitadas": 2,
    "taxa_rejeicao": 4.5454545454545,
    "taxa_sucesso": 95.45454545454541
  },
  {
    "facet": "Montes Claros",
    "municipio.nome": "Montes Claros",
    "rejeitadas": 2,
    "taxa_rejeicao": 4.5454545454545,
    "taxa_sucesso": 95.45454545454541
  },
  {
    "facet": "Joinville",
    "municipio.nome": "Joinville",
    "rejeitadas": 2,
    "taxa_rejeicao": 4.5454545454545,
    "taxa_sucesso": 95.45454545454541
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 7,
    "taxa_rejeicao": 5.1851851851851,
    "taxa_sucesso": 94.8148148148148
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 12,
    "taxa_rejeicao": 5.3333333333333,
    "taxa_sucesso": 94.66666666666659
  },
  {
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
    "rejeitadas": 5,
    "taxa_rejeicao": 5.4347826086956,
    "taxa_sucesso": 94.5652173913043
  },
  {
    "facet": "Londrina",
    "municipio.nome": "Londrina",
    "rejeitadas": 2,
    "taxa_rejeicao": 6.25,
    "taxa_sucesso": 93.75
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 7,
    "taxa_rejeicao": 6.4220183486238,
    "taxa_sucesso": 93.57798165137609
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 229,
    "taxa_rejeicao": 6.4744133446423,
    "taxa_sucesso": 93.5255866553576
  },
  {
    "facet": "Toledo",
    "municipio.nome": "Toledo",
    "rejeitadas": 1,
    "taxa_rejeicao": 6.6666666666666,
    "taxa_sucesso": 93.3333333333333
  },
  {
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 1,
    "taxa_rejeicao": 7.6923076923076,
    "taxa_sucesso": 92.3076923076923
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 22,
    "taxa_rejeicao": 7.6923076923076,
    "taxa_sucesso": 92.3076923076923
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 1,
    "taxa_rejeicao": 7.6923076923076,
    "taxa_sucesso": 92.3076923076923
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 12,
    "taxa_rejeicao": 7.8431372549019,
    "taxa_sucesso": 92.156862745098
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 2,
    "taxa_rejeicao": 8.3333333333333,
    "taxa_sucesso": 91.66666666666659
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 7,
    "taxa_rejeicao": 8.8607594936708,
    "taxa_sucesso": 91.1392405063291
  },
  {
    "facet": "Angra dos Reis",
    "municipio.nome": "Angra dos Reis",
    "rejeitadas": 1,
    "taxa_rejeicao": 9.090909090909,
    "taxa_sucesso": 90.90909090909089
  },
  {
    "facet": "Niterói",
    "municipio.nome": "Niterói",
    "rejeitadas": 1,
    "taxa_rejeicao": 9.090909090909,
    "taxa_sucesso": 90.90909090909089
  },
  {
    "facet": "Natal",
    "municipio.nome": "Natal",
    "rejeitadas": 1,
    "taxa_rejeicao": 10,
    "taxa_sucesso": 90
  },
  {
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
    "rejeitadas": 1,
    "taxa_rejeicao": 10,
    "taxa_sucesso": 90
  },
  {
    "facet": "Anápolis",
    "municipio.nome": "Anápolis",
    "rejeitadas": 1,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Itapema",
    "municipio.nome": "Itapema",
    "rejeitadas": 1,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "Criciúma",
    "municipio.nome": "Criciúma",
    "rejeitadas": 1,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 4,
    "taxa_rejeicao": 16,
    "taxa_sucesso": 84
  },
  {
    "facet": "Ourinhos",
    "municipio.nome": "Ourinhos",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Maringá",
    "municipio.nome": "Maringá",
    "rejeitadas": 5,
    "taxa_rejeicao": 17.2413793103448,
    "taxa_sucesso": 82.7586206896551
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Guarapari",
    "municipio.nome": "Guarapari",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 4,
    "taxa_rejeicao": 23.5294117647058,
    "taxa_sucesso": 76.4705882352941
  },
  {
    "facet": "Francisco Beltrão",
    "municipio.nome": "Francisco Beltrão",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "São Pedro da Aldeia",
    "municipio.nome": "São Pedro da Aldeia",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Lajeado",
    "municipio.nome": "Lajeado",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Sumaré",
    "municipio.nome": "Sumaré",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Ilhéus",
    "municipio.nome": "Ilhéus",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Imbé",
    "municipio.nome": "Imbé",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Rio Bonito",
    "municipio.nome": "Rio Bonito",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 121,
    "taxa_rejeicao": 38.291139240506304,
    "taxa_sucesso": 61.7088607594936
  },
  {
    "facet": "Limeira",
    "municipio.nome": "Limeira",
    "rejeitadas": 2,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 5,
    "taxa_rejeicao": 45.4545454545454,
    "taxa_sucesso": 54.5454545454545
  },
  {
    "facet": "Manhuaçu",
    "municipio.nome": "Manhuaçu",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Itapetininga",
    "municipio.nome": "Itapetininga",
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
    "facet": "São Caetano do Sul",
    "municipio.nome": "São Caetano do Sul",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Rio Doce",
    "municipio.nome": "Rio Doce",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Jundiaí",
    "municipio.nome": "Jundiaí",
    "rejeitadas": 7,
    "taxa_rejeicao": 58.33333333333329,
    "taxa_sucesso": 41.6666666666666
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
    "rejeitadas": 6,
    "taxa_rejeicao": 60,
    "taxa_sucesso": 40
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 12,
    "taxa_rejeicao": 60,
    "taxa_sucesso": 40
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 8,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Mogi das Cruzes",
    "municipio.nome": "Mogi das Cruzes",
    "rejeitadas": 4,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Botucatu",
    "municipio.nome": "Botucatu",
    "rejeitadas": 72,
    "taxa_rejeicao": 72,
    "taxa_sucesso": 28
  },
  {
    "facet": "Garopaba",
    "municipio.nome": "Garopaba",
    "rejeitadas": 3,
    "taxa_rejeicao": 75,
    "taxa_sucesso": 25
  },
  {
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
    "rejeitadas": 3,
    "taxa_rejeicao": 75,
    "taxa_sucesso": 25
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 34,
    "taxa_rejeicao": 87.1794871794871,
    "taxa_sucesso": 12.8205128205128
  },
  {
    "facet": "Presidente Prudente",
    "municipio.nome": "Presidente Prudente",
    "rejeitadas": 7,
    "taxa_rejeicao": 87.5,
    "taxa_sucesso": 12.5
  },
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
    "rejeitadas": 12,
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
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Dois Vizinhos",
    "municipio.nome": "Dois Vizinhos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jaguariúna",
    "municipio.nome": "Jaguariúna",
    "rejeitadas": 1,
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
    "facet": "Serra Negra",
    "municipio.nome": "Serra Negra",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Gravataí",
    "municipio.nome": "Gravataí",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guararema",
    "municipio.nome": "Guararema",
    "rejeitadas": 5,
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
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Canoas",
    "municipio.nome": "Canoas",
    "rejeitadas": 5,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Xangri-lá",
    "municipio.nome": "Xangri-lá",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Palmas",
    "municipio.nome": "Palmas",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Peruíbe",
    "municipio.nome": "Peruíbe",
    "rejeitadas": 10,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jales",
    "municipio.nome": "Jales",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Navegantes",
    "municipio.nome": "Navegantes",
    "rejeitadas": 3,
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
    "facet": "Nossa Senhora das Graças",
    "municipio.nome": "Nossa Senhora das Graças",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São João de Meriti",
    "municipio.nome": "São João de Meriti",
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
    "facet": "Correntina",
    "municipio.nome": "Correntina",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Indaial",
    "municipio.nome": "Indaial",
    "rejeitadas": 2,
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
    "facet": "Lagoa Santa",
    "municipio.nome": "Lagoa Santa",
    "rejeitadas": 5,
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
    "facet": "Arcoverde",
    "municipio.nome": "Arcoverde",
    "rejeitadas": 1,
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
    "facet": "Orlândia",
    "municipio.nome": "Orlândia",
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
    "facet": "Caicó",
    "municipio.nome": "Caicó",
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
    "facet": "Artur Nogueira",
    "municipio.nome": "Artur Nogueira",
    "rejeitadas": 1,
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bayan",
    "municipio.nome": "Bayan",
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
    "facet": "Mirassol",
    "municipio.nome": "Mirassol",
    "rejeitadas": 2,
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Araras",
    "municipio.nome": "Araras",
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
    "facet": "Barra Velha",
    "municipio.nome": "Barra Velha",
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
    "facet": "Jaboticabal",
    "municipio.nome": "Jaboticabal",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Santo Ângelo",
    "municipio.nome": "Santo Ângelo",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 10,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Vargem Grande do Sul",
    "municipio.nome": "Vargem Grande do Sul",
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
    "facet": "Ituiutaba",
    "municipio.nome": "Ituiutaba",
    "rejeitadas": 1,
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
    "facet": "Itabuna",
    "municipio.nome": "Itabuna",
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
    "facet": "Goiás",
    "municipio.nome": "Goiás",
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
    "facet": "Caetité",
    "municipio.nome": "Caetité",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Schroeder",
    "municipio.nome": "Schroeder",
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
    "rejeitadas": 12,
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
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Dois Vizinhos",
    "municipio.nome": "Dois Vizinhos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jaguariúna",
    "municipio.nome": "Jaguariúna",
    "rejeitadas": 1,
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
    "facet": "Serra Negra",
    "municipio.nome": "Serra Negra",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Gravataí",
    "municipio.nome": "Gravataí",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guararema",
    "municipio.nome": "Guararema",
    "rejeitadas": 5,
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
    "rejeitadas": 2,
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
    "rejeitadas": 5,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Xangri-lá",
    "municipio.nome": "Xangri-lá",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Palmas",
    "municipio.nome": "Palmas",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Peruíbe",
    "municipio.nome": "Peruíbe",
    "rejeitadas": 10,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jales",
    "municipio.nome": "Jales",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Navegantes",
    "municipio.nome": "Navegantes",
    "rejeitadas": 3,
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
    "facet": "Nossa Senhora das Graças",
    "municipio.nome": "Nossa Senhora das Graças",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São João de Meriti",
    "municipio.nome": "São João de Meriti",
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
    "facet": "Correntina",
    "municipio.nome": "Correntina",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Indaial",
    "municipio.nome": "Indaial",
    "rejeitadas": 2,
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
    "facet": "Lagoa Santa",
    "municipio.nome": "Lagoa Santa",
    "rejeitadas": 5,
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
    "facet": "Arcoverde",
    "municipio.nome": "Arcoverde",
    "rejeitadas": 1,
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
    "facet": "Orlândia",
    "municipio.nome": "Orlândia",
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
    "facet": "Caicó",
    "municipio.nome": "Caicó",
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
    "facet": "Artur Nogueira",
    "municipio.nome": "Artur Nogueira",
    "rejeitadas": 1,
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bayan",
    "municipio.nome": "Bayan",
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
    "facet": "Mirassol",
    "municipio.nome": "Mirassol",
    "rejeitadas": 2,
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Araras",
    "municipio.nome": "Araras",
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
    "facet": "Barra Velha",
    "municipio.nome": "Barra Velha",
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
    "facet": "Jaboticabal",
    "municipio.nome": "Jaboticabal",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Santo Ângelo",
    "municipio.nome": "Santo Ângelo",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 10,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Vargem Grande do Sul",
    "municipio.nome": "Vargem Grande do Sul",
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
    "facet": "Ituiutaba",
    "municipio.nome": "Ituiutaba",
    "rejeitadas": 1,
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
    "facet": "Itabuna",
    "municipio.nome": "Itabuna",
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
    "facet": "Goiás",
    "municipio.nome": "Goiás",
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
    "facet": "Caetité",
    "municipio.nome": "Caetité",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Schroeder",
    "municipio.nome": "Schroeder",
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
    "facet": "Soledade",
    "municipio.nome": "Soledade",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Presidente Prudente",
    "municipio.nome": "Presidente Prudente",
    "rejeitadas": 7,
    "taxa_rejeicao": 87.5,
    "taxa_sucesso": 12.5
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 34,
    "taxa_rejeicao": 87.1794871794871,
    "taxa_sucesso": 12.8205128205128
  },
  {
    "facet": "Garopaba",
    "municipio.nome": "Garopaba",
    "rejeitadas": 3,
    "taxa_rejeicao": 75,
    "taxa_sucesso": 25
  },
  {
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
    "rejeitadas": 3,
    "taxa_rejeicao": 75,
    "taxa_sucesso": 25
  },
  {
    "facet": "Botucatu",
    "municipio.nome": "Botucatu",
    "rejeitadas": 72,
    "taxa_rejeicao": 72,
    "taxa_sucesso": 28
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 8,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Mogi das Cruzes",
    "municipio.nome": "Mogi das Cruzes",
    "rejeitadas": 4,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
    "rejeitadas": 6,
    "taxa_rejeicao": 60,
    "taxa_sucesso": 40
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 12,
    "taxa_rejeicao": 60,
    "taxa_sucesso": 40
  },
  {
    "facet": "Jundiaí",
    "municipio.nome": "Jundiaí",
    "rejeitadas": 7,
    "taxa_rejeicao": 58.33333333333329,
    "taxa_sucesso": 41.6666666666666
  },
  {
    "facet": "Manhuaçu",
    "municipio.nome": "Manhuaçu",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Itapetininga",
    "municipio.nome": "Itapetininga",
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
    "facet": "São Caetano do Sul",
    "municipio.nome": "São Caetano do Sul",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Rio Doce",
    "municipio.nome": "Rio Doce",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 5,
    "taxa_rejeicao": 45.4545454545454,
    "taxa_sucesso": 54.5454545454545
  },
  {
    "facet": "Limeira",
    "municipio.nome": "Limeira",
    "rejeitadas": 2,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 121,
    "taxa_rejeicao": 38.291139240506304,
    "taxa_sucesso": 61.7088607594936
  },
  {
    "facet": "Sumaré",
    "municipio.nome": "Sumaré",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Ilhéus",
    "municipio.nome": "Ilhéus",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Imbé",
    "municipio.nome": "Imbé",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Rio Bonito",
    "municipio.nome": "Rio Bonito",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Francisco Beltrão",
    "municipio.nome": "Francisco Beltrão",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "São Pedro da Aldeia",
    "municipio.nome": "São Pedro da Aldeia",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Lajeado",
    "municipio.nome": "Lajeado",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 4,
    "taxa_rejeicao": 23.5294117647058,
    "taxa_sucesso": 76.4705882352941
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Guarapari",
    "municipio.nome": "Guarapari",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Maringá",
    "municipio.nome": "Maringá",
    "rejeitadas": 5,
    "taxa_rejeicao": 17.2413793103448,
    "taxa_sucesso": 82.7586206896551
  },
  {
    "facet": "Ourinhos",
    "municipio.nome": "Ourinhos",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 4,
    "taxa_rejeicao": 16,
    "taxa_sucesso": 84
  },
  {
    "facet": "Itapema",
    "municipio.nome": "Itapema",
    "rejeitadas": 1,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "Criciúma",
    "municipio.nome": "Criciúma",
    "rejeitadas": 1,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "Anápolis",
    "municipio.nome": "Anápolis",
    "rejeitadas": 1,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Natal",
    "municipio.nome": "Natal",
    "rejeitadas": 1,
    "taxa_rejeicao": 10,
    "taxa_sucesso": 90
  },
  {
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
    "rejeitadas": 1,
    "taxa_rejeicao": 10,
    "taxa_sucesso": 90
  },
  {
    "facet": "Angra dos Reis",
    "municipio.nome": "Angra dos Reis",
    "rejeitadas": 1,
    "taxa_rejeicao": 9.090909090909,
    "taxa_sucesso": 90.90909090909089
  },
  {
    "facet": "Niterói",
    "municipio.nome": "Niterói",
    "rejeitadas": 1,
    "taxa_rejeicao": 9.090909090909,
    "taxa_sucesso": 90.90909090909089
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 7,
    "taxa_rejeicao": 8.8607594936708,
    "taxa_sucesso": 91.1392405063291
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 2,
    "taxa_rejeicao": 8.3333333333333,
    "taxa_sucesso": 91.66666666666659
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 12,
    "taxa_rejeicao": 7.8431372549019,
    "taxa_sucesso": 92.156862745098
  },
  {
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 1,
    "taxa_rejeicao": 7.6923076923076,
    "taxa_sucesso": 92.3076923076923
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 22,
    "taxa_rejeicao": 7.6923076923076,
    "taxa_sucesso": 92.3076923076923
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 1,
    "taxa_rejeicao": 7.6923076923076,
    "taxa_sucesso": 92.3076923076923
  },
  {
    "facet": "Toledo",
    "municipio.nome": "Toledo",
    "rejeitadas": 1,
    "taxa_rejeicao": 6.6666666666666,
    "taxa_sucesso": 93.3333333333333
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 229,
    "taxa_rejeicao": 6.4744133446423,
    "taxa_sucesso": 93.5255866553576
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 7,
    "taxa_rejeicao": 6.4220183486238,
    "taxa_sucesso": 93.57798165137609
  },
  {
    "facet": "Londrina",
    "municipio.nome": "Londrina",
    "rejeitadas": 2,
    "taxa_rejeicao": 6.25,
    "taxa_sucesso": 93.75
  },
  {
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
    "rejeitadas": 5,
    "taxa_rejeicao": 5.4347826086956,
    "taxa_sucesso": 94.5652173913043
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 12,
    "taxa_rejeicao": 5.3333333333333,
    "taxa_sucesso": 94.66666666666659
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 7,
    "taxa_rejeicao": 5.1851851851851,
    "taxa_sucesso": 94.8148148148148
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 0,
    "taxa_rejeicao": 4.8929663608562,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santos",
    "municipio.nome": "Santos",
    "rejeitadas": 2,
    "taxa_rejeicao": 4.5454545454545,
    "taxa_sucesso": 95.45454545454541
  },
  {
    "facet": "Montes Claros",
    "municipio.nome": "Montes Claros",
    "rejeitadas": 2,
    "taxa_rejeicao": 4.5454545454545,
    "taxa_sucesso": 95.45454545454541
  },
  {
    "facet": "Joinville",
    "municipio.nome": "Joinville",
    "rejeitadas": 2,
    "taxa_rejeicao": 4.5454545454545,
    "taxa_sucesso": 95.45454545454541
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 1,
    "taxa_rejeicao": 4.3478260869565,
    "taxa_sucesso": 95.6521739130434
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 40,
    "taxa_rejeicao": 4.1025641025641,
    "taxa_sucesso": 95.89743589743581
  },
  {
    "facet": "São José",
    "municipio.nome": "São José",
    "rejeitadas": 1,
    "taxa_rejeicao": 3.7037037037037,
    "taxa_sucesso": 96.29629629629619
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 2,
    "taxa_rejeicao": 3.125,
    "taxa_sucesso": 96.875
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 12,
    "taxa_rejeicao": 3.0075187969924,
    "taxa_sucesso": 96.9924812030075
  },
  {
    "facet": "Boituva",
    "municipio.nome": "Boituva",
    "rejeitadas": 3,
    "taxa_rejeicao": 3,
    "taxa_sucesso": 97
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.8571428571428,
    "taxa_sucesso": 97.14285714285711
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.5641025641025,
    "taxa_sucesso": 97.4358974358974
  },
  {
    "facet": "Campinas",
    "municipio.nome": "Campinas",
    "rejeitadas": 3,
    "taxa_rejeicao": 2.4793388429752,
    "taxa_sucesso": 97.5206611570247
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 3,
    "taxa_rejeicao": 2.2388059701492,
    "taxa_sucesso": 97.7611940298507
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 6,
    "taxa_rejeicao": 1.9801980198019,
    "taxa_sucesso": 98.019801980198
  },
  {
    "facet": "Jaú",
    "municipio.nome": "Jaú",
    "rejeitadas": 3,
    "taxa_rejeicao": 1.7647058823529,
    "taxa_sucesso": 98.235294117647
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 10,
    "taxa_rejeicao": 1.4044943820224,
    "taxa_sucesso": 98.59550561797751
  },
  {
    "facet": "Nova Lima",
    "municipio.nome": "Nova Lima",
    "rejeitadas": 2,
    "taxa_rejeicao": 1.1428571428571,
    "taxa_sucesso": 98.8571428571428
  },
  {
    "facet": "Campina Grande",
    "municipio.nome": "Campina Grande",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.063829787234,
    "taxa_sucesso": 98.9361702127659
  },
  {
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.8928571428571,
    "taxa_sucesso": 99.1071428571428
  },
  {
    "facet": "Salvador",
    "municipio.nome": "Salvador",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.0151263046437,
    "taxa_sucesso": 99.98487369535619
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
    "facet": "Trujillo",
    "municipio.nome": "Trujillo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
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
    "facet": "Stadtbergen",
    "municipio.nome": "Stadtbergen",
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
    "facet": "Bragança Paulista",
    "municipio.nome": "Bragança Paulista",
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
    "facet": "Paraguaçu Paulista",
    "municipio.nome": "Paraguaçu Paulista",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Maria",
    "municipio.nome": "Santa Maria",
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
    "facet": "Xanxerê",
    "municipio.nome": "Xanxerê",
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
    "facet": "Porto Feliz",
    "municipio.nome": "Porto Feliz",
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
    "facet": "Três Lagoas",
    "municipio.nome": "Três Lagoas",
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
    "facet": "Parnaíba",
    "municipio.nome": "Parnaíba",
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
    "facet": "Valinhos",
    "municipio.nome": "Valinhos",
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
    "facet": "Pedro Leopoldo",
    "municipio.nome": "Pedro Leopoldo",
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
    "facet": "Accra",
    "municipio.nome": "Accra",
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
    "facet": "Holambra",
    "municipio.nome": "Holambra",
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
    "facet": "Schwyz",
    "municipio.nome": "Schwyz",
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
    "facet": "Mata de São João",
    "municipio.nome": "Mata de São João",
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
    "facet": "Candelária",
    "municipio.nome": "Candelária",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Las vegas",
    "municipio.nome": "Las vegas",
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
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
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
    "facet": "Portão",
    "municipio.nome": "Portão",
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
    "facet": "Goiana",
    "municipio.nome": "Goiana",
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
    "facet": "Lakewood",
    "municipio.nome": "Lakewood",
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
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Luzia",
    "municipio.nome": "Santa Luzia",
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
    "facet": "Cascavel",
    "municipio.nome": "Cascavel",
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
    "facet": "Ponta Porã",
    "municipio.nome": "Ponta Porã",
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
    "facet": "Pontinha",
    "municipio.nome": "Pontinha",
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
    "facet": "Santa Vitória do Palmar",
    "municipio.nome": "Santa Vitória do Palmar",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Karachi",
    "municipio.nome": "Karachi",
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
    "facet": "Fernandópolis",
    "municipio.nome": "Fernandópolis",
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
    "facet": "Caçapava",
    "municipio.nome": "Caçapava",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Shen Zhen",
    "municipio.nome": "Shen Zhen",
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
    "facet": "Chapecó",
    "municipio.nome": "Chapecó",
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
    "facet": "Nao informado",
    "municipio.nome": "Nao informado",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ponta Grossa",
    "municipio.nome": "Ponta Grossa",
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
    "facet": "Barra de São Francisco",
    "municipio.nome": "Barra de São Francisco",
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
    "beginTimeSeconds": 1782413400,
    "endTimeSeconds": 1782414600,
    "rejeicao": 19.127603551862684,
    "sucesso": 80.87239644813732
  },
  {
    "beginTimeSeconds": 1782414600,
    "endTimeSeconds": 1782415800,
    "rejeicao": 19.063503298871865,
    "sucesso": 80.93649670112804
  },
  {
    "beginTimeSeconds": 1782415800,
    "endTimeSeconds": 1782417000,
    "rejeicao": 19.04066987512765,
    "sucesso": 80.95933012487237
  },
  {
    "beginTimeSeconds": 1782417000,
    "endTimeSeconds": 1782418200,
    "rejeicao": 19.53781196174518,
    "sucesso": 80.46218803825484
  },
  {
    "beginTimeSeconds": 1782418200,
    "endTimeSeconds": 1782419400,
    "rejeicao": 20.2030764544598,
    "sucesso": 79.79692354554012
  },
  {
    "beginTimeSeconds": 1782419400,
    "endTimeSeconds": 1782420600,
    "rejeicao": 20.13853015372004,
    "sucesso": 79.86146984627987
  },
  {
    "beginTimeSeconds": 1782420600,
    "endTimeSeconds": 1782421800,
    "rejeicao": 20.157499394799444,
    "sucesso": 79.84250060520046
  },
  {
    "beginTimeSeconds": 1782421800,
    "endTimeSeconds": 1782423000,
    "rejeicao": 20.536624627826892,
    "sucesso": 79.46337537217302
  },
  {
    "beginTimeSeconds": 1782423000,
    "endTimeSeconds": 1782424200,
    "rejeicao": 20.41927729954557,
    "sucesso": 79.58072270045425
  },
  {
    "beginTimeSeconds": 1782424200,
    "endTimeSeconds": 1782425400,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782425400,
    "endTimeSeconds": 1782426600,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782426600,
    "endTimeSeconds": 1782427800,
    "rejeicao": 20.82507583439194,
    "sucesso": 79.17492416560803
  }
],
  taxaSucessoMunicipioTs: [{"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782413400, "endTimeSeconds": 1782414600, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782414600, "endTimeSeconds": 1782415800, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782415800, "endTimeSeconds": 1782417000, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782417000, "endTimeSeconds": 1782418200, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782418200, "endTimeSeconds": 1782419400, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782419400, "endTimeSeconds": 1782420600, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782420600, "endTimeSeconds": 1782421800, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782421800, "endTimeSeconds": 1782423000, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782423000, "endTimeSeconds": 1782424200, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782424200, "endTimeSeconds": 1782425400, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": null}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782425400, "endTimeSeconds": 1782426600, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": null}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1782426600, "endTimeSeconds": 1782427800, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782413400, "endTimeSeconds": 1782414600, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782414600, "endTimeSeconds": 1782415800, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782415800, "endTimeSeconds": 1782417000, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782417000, "endTimeSeconds": 1782418200, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782418200, "endTimeSeconds": 1782419400, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782419400, "endTimeSeconds": 1782420600, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782420600, "endTimeSeconds": 1782421800, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782421800, "endTimeSeconds": 1782423000, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782423000, "endTimeSeconds": 1782424200, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782424200, "endTimeSeconds": 1782425400, "municipio.nome": "Ipir\u00e1", "sucesso": null}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782425400, "endTimeSeconds": 1782426600, "municipio.nome": "Ipir\u00e1", "sucesso": null}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1782426600, "endTimeSeconds": 1782427800, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782413400, "endTimeSeconds": 1782414600, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782414600, "endTimeSeconds": 1782415800, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782415800, "endTimeSeconds": 1782417000, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782417000, "endTimeSeconds": 1782418200, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782418200, "endTimeSeconds": 1782419400, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782419400, "endTimeSeconds": 1782420600, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782420600, "endTimeSeconds": 1782421800, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782421800, "endTimeSeconds": 1782423000, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782423000, "endTimeSeconds": 1782424200, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782424200, "endTimeSeconds": 1782425400, "municipio.nome": "Itabaiana", "sucesso": null}, {"facet": "Itabaiana", "beginTimeSeconds": 1782425400, "endTimeSeconds": 1782426600, "municipio.nome": "Itabaiana", "sucesso": null}, {"facet": "Itabaiana", "beginTimeSeconds": 1782426600, "endTimeSeconds": 1782427800, "municipio.nome": "Itabaiana", "sucesso": null}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782413400, "endTimeSeconds": 1782414600, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782414600, "endTimeSeconds": 1782415800, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782415800, "endTimeSeconds": 1782417000, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782417000, "endTimeSeconds": 1782418200, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782418200, "endTimeSeconds": 1782419400, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782419400, "endTimeSeconds": 1782420600, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782420600, "endTimeSeconds": 1782421800, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782421800, "endTimeSeconds": 1782423000, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782423000, "endTimeSeconds": 1782424200, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782424200, "endTimeSeconds": 1782425400, "municipio.nome": "Parna\u00edba", "sucesso": null}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782425400, "endTimeSeconds": 1782426600, "municipio.nome": "Parna\u00edba", "sucesso": null}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1782426600, "endTimeSeconds": 1782427800, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782413400, "endTimeSeconds": 1782414600, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782414600, "endTimeSeconds": 1782415800, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782415800, "endTimeSeconds": 1782417000, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782417000, "endTimeSeconds": 1782418200, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782418200, "endTimeSeconds": 1782419400, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782419400, "endTimeSeconds": 1782420600, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782420600, "endTimeSeconds": 1782421800, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782421800, "endTimeSeconds": 1782423000, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782423000, "endTimeSeconds": 1782424200, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782424200, "endTimeSeconds": 1782425400, "municipio.nome": "Bag\u00e9", "sucesso": null}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782425400, "endTimeSeconds": 1782426600, "municipio.nome": "Bag\u00e9", "sucesso": null}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782426600, "endTimeSeconds": 1782427800, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782413400, "endTimeSeconds": 1782414600, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782414600, "endTimeSeconds": 1782415800, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782415800, "endTimeSeconds": 1782417000, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782417000, "endTimeSeconds": 1782418200, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782418200, "endTimeSeconds": 1782419400, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782419400, "endTimeSeconds": 1782420600, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782420600, "endTimeSeconds": 1782421800, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782421800, "endTimeSeconds": 1782423000, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782423000, "endTimeSeconds": 1782424200, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1782424200, "endTimeSeconds": 1782425400, "municipio.nome": "Guapimirim", "sucesso": null}, {"facet": "Guapimirim", "beginTimeSeconds": 1782425400, "endTimeSeconds": 1782426600, "municipio.nome": "Guapimirim", "sucesso": null}, {"facet": "Guapimirim", "beginTimeSeconds": 1782426600, "endTimeSeconds": 1782427800, "municipio.nome": "Guapimirim", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782413400, "endTimeSeconds": 1782414600, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782414600, "endTimeSeconds": 1782415800, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782415800, "endTimeSeconds": 1782417000, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782417000, "endTimeSeconds": 1782418200, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782418200, "endTimeSeconds": 1782419400, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782419400, "endTimeSeconds": 1782420600, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782420600, "endTimeSeconds": 1782421800, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782421800, "endTimeSeconds": 1782423000, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782423000, "endTimeSeconds": 1782424200, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782424200, "endTimeSeconds": 1782425400, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782425400, "endTimeSeconds": 1782426600, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1782426600, "endTimeSeconds": 1782427800, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782413400, "endTimeSeconds": 1782414600, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782414600, "endTimeSeconds": 1782415800, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782415800, "endTimeSeconds": 1782417000, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782417000, "endTimeSeconds": 1782418200, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782418200, "endTimeSeconds": 1782419400, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782419400, "endTimeSeconds": 1782420600, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782420600, "endTimeSeconds": 1782421800, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782421800, "endTimeSeconds": 1782423000, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782423000, "endTimeSeconds": 1782424200, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782424200, "endTimeSeconds": 1782425400, "municipio.nome": "Santa Teresa", "sucesso": null}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782425400, "endTimeSeconds": 1782426600, "municipio.nome": "Santa Teresa", "sucesso": null}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782426600, "endTimeSeconds": 1782427800, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782413400, "endTimeSeconds": 1782414600, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782414600, "endTimeSeconds": 1782415800, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782415800, "endTimeSeconds": 1782417000, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782417000, "endTimeSeconds": 1782418200, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782418200, "endTimeSeconds": 1782419400, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782419400, "endTimeSeconds": 1782420600, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782420600, "endTimeSeconds": 1782421800, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782421800, "endTimeSeconds": 1782423000, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782423000, "endTimeSeconds": 1782424200, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1782424200, "endTimeSeconds": 1782425400, "municipio.nome": "Alegre", "sucesso": null}, {"facet": "Alegre", "beginTimeSeconds": 1782425400, "endTimeSeconds": 1782426600, "municipio.nome": "Alegre", "sucesso": null}, {"facet": "Alegre", "beginTimeSeconds": 1782426600, "endTimeSeconds": 1782427800, "municipio.nome": "Alegre", "sucesso": null}, {"facet": "Olinda", "beginTimeSeconds": 1782413400, "endTimeSeconds": 1782414600, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782414600, "endTimeSeconds": 1782415800, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782415800, "endTimeSeconds": 1782417000, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782417000, "endTimeSeconds": 1782418200, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782418200, "endTimeSeconds": 1782419400, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782419400, "endTimeSeconds": 1782420600, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782420600, "endTimeSeconds": 1782421800, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782421800, "endTimeSeconds": 1782423000, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782423000, "endTimeSeconds": 1782424200, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1782424200, "endTimeSeconds": 1782425400, "municipio.nome": "Olinda", "sucesso": null}, {"facet": "Olinda", "beginTimeSeconds": 1782425400, "endTimeSeconds": 1782426600, "municipio.nome": "Olinda", "sucesso": null}, {"facet": "Olinda", "beginTimeSeconds": 1782426600, "endTimeSeconds": 1782427800, "municipio.nome": "Olinda", "sucesso": null}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1782413400, "endTimeSeconds": 1782414600, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1782414600, "endTimeSeconds": 1782415800, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1782415800, "endTimeSeconds": 1782417000, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1782417000, "endTimeSeconds": 1782418200, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1782418200, "endTimeSeconds": 1782419400, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1782419400, "endTimeSeconds": 1782420600, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1782420600, "endTimeSeconds": 1782421800, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1782421800, "endTimeSeconds": 1782423000, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1782423000, "endTimeSeconds": 1782424200, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1782424200, "endTimeSeconds": 1782425400, "municipio.nome": "Par\u00e1 de Minas", "sucesso": null}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1782425400, "endTimeSeconds": 1782426600, "municipio.nome": "Par\u00e1 de Minas", "sucesso": null}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1782426600, "endTimeSeconds": 1782427800, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Itabira", "beginTimeSeconds": 1782413400, "endTimeSeconds": 1782414600, "municipio.nome": "Itabira", "sucesso": 100.0}, {"facet": "Itabira", "beginTimeSeconds": 1782414600, "endTimeSeconds": 1782415800, "municipio.nome": "Itabira", "sucesso": 100.0}, {"facet": "Itabira", "beginTimeSeconds": 1782415800, "endTimeSeconds": 1782417000, "municipio.nome": "Itabira", "sucesso": 100.0}, {"facet": "Itabira", "beginTimeSeconds": 1782417000, "endTimeSeconds": 1782418200, "municipio.nome": "Itabira", "sucesso": 100.0}, {"facet": "Itabira", "beginTimeSeconds": 1782418200, "endTimeSeconds": 1782419400, "municipio.nome": "Itabira", "sucesso": 100.0}, {"facet": "Itabira", "beginTimeSeconds": 1782419400, "endTimeSeconds": 1782420600, "municipio.nome": "Itabira", "sucesso": 100.0}, {"facet": "Itabira", "beginTimeSeconds": 1782420600, "endTimeSeconds": 1782421800, "municipio.nome": "Itabira", "sucesso": 100.0}, {"facet": "Itabira", "beginTimeSeconds": 1782421800, "endTimeSeconds": 1782423000, "municipio.nome": "Itabira", "sucesso": 100.0}, {"facet": "Itabira", "beginTimeSeconds": 1782423000, "endTimeSeconds": 1782424200, "municipio.nome": "Itabira", "sucesso": 100.0}, {"facet": "Itabira", "beginTimeSeconds": 1782424200, "endTimeSeconds": 1782425400, "municipio.nome": "Itabira", "sucesso": null}, {"facet": "Itabira", "beginTimeSeconds": 1782425400, "endTimeSeconds": 1782426600, "municipio.nome": "Itabira", "sucesso": null}, {"facet": "Itabira", "beginTimeSeconds": 1782426600, "endTimeSeconds": 1782427800, "municipio.nome": "Itabira", "sucesso": null}, {"facet": "Mariana", "beginTimeSeconds": 1782413400, "endTimeSeconds": 1782414600, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1782414600, "endTimeSeconds": 1782415800, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1782415800, "endTimeSeconds": 1782417000, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1782417000, "endTimeSeconds": 1782418200, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1782418200, "endTimeSeconds": 1782419400, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1782419400, "endTimeSeconds": 1782420600, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1782420600, "endTimeSeconds": 1782421800, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1782421800, "endTimeSeconds": 1782423000, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1782423000, "endTimeSeconds": 1782424200, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Mariana", "beginTimeSeconds": 1782424200, "endTimeSeconds": 1782425400, "municipio.nome": "Mariana", "sucesso": null}, {"facet": "Mariana", "beginTimeSeconds": 1782425400, "endTimeSeconds": 1782426600, "municipio.nome": "Mariana", "sucesso": null}, {"facet": "Mariana", "beginTimeSeconds": 1782426600, "endTimeSeconds": 1782427800, "municipio.nome": "Mariana", "sucesso": 100.0}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1782413400, "endTimeSeconds": 1782414600, "municipio.nome": "Cambu\u00ed", "sucesso": 100.0}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1782414600, "endTimeSeconds": 1782415800, "municipio.nome": "Cambu\u00ed", "sucesso": 100.0}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1782415800, "endTimeSeconds": 1782417000, "municipio.nome": "Cambu\u00ed", "sucesso": 100.0}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1782417000, "endTimeSeconds": 1782418200, "municipio.nome": "Cambu\u00ed", "sucesso": 100.0}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1782418200, "endTimeSeconds": 1782419400, "municipio.nome": "Cambu\u00ed", "sucesso": 100.0}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1782419400, "endTimeSeconds": 1782420600, "municipio.nome": "Cambu\u00ed", "sucesso": 100.0}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1782420600, "endTimeSeconds": 1782421800, "municipio.nome": "Cambu\u00ed", "sucesso": 100.0}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1782421800, "endTimeSeconds": 1782423000, "municipio.nome": "Cambu\u00ed", "sucesso": 100.0}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1782423000, "endTimeSeconds": 1782424200, "municipio.nome": "Cambu\u00ed", "sucesso": 100.0}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1782424200, "endTimeSeconds": 1782425400, "municipio.nome": "Cambu\u00ed", "sucesso": null}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1782425400, "endTimeSeconds": 1782426600, "municipio.nome": "Cambu\u00ed", "sucesso": null}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1782426600, "endTimeSeconds": 1782427800, "municipio.nome": "Cambu\u00ed", "sucesso": 100.0}, {"facet": "Governador Valadares", "beginTimeSeconds": 1782413400, "endTimeSeconds": 1782414600, "municipio.nome": "Governador Valadares", "sucesso": 100.0}, {"facet": "Governador Valadares", "beginTimeSeconds": 1782414600, "endTimeSeconds": 1782415800, "municipio.nome": "Governador Valadares", "sucesso": 100.0}, {"facet": "Governador Valadares", "beginTimeSeconds": 1782415800, "endTimeSeconds": 1782417000, "municipio.nome": "Governador Valadares", "sucesso": 100.0}, {"facet": "Governador Valadares", "beginTimeSeconds": 1782417000, "endTimeSeconds": 1782418200, "municipio.nome": "Governador Valadares", "sucesso": 100.0}, {"facet": "Governador Valadares", "beginTimeSeconds": 1782418200, "endTimeSeconds": 1782419400, "municipio.nome": "Governador Valadares", "sucesso": 100.0}, {"facet": "Governador Valadares", "beginTimeSeconds": 1782419400, "endTimeSeconds": 1782420600, "municipio.nome": "Governador Valadares", "sucesso": 100.0}, {"facet": "Governador Valadares", "beginTimeSeconds": 1782420600, "endTimeSeconds": 1782421800, "municipio.nome": "Governador Valadares", "sucesso": 100.0}, {"facet": "Governador Valadares", "beginTimeSeconds": 1782421800, "endTimeSeconds": 1782423000, "municipio.nome": "Governador Valadares", "sucesso": 100.0}, {"facet": "Governador Valadares", "beginTimeSeconds": 1782423000, "endTimeSeconds": 1782424200, "municipio.nome": "Governador Valadares", "sucesso": 100.0}, {"facet": "Governador Valadares", "beginTimeSeconds": 1782424200, "endTimeSeconds": 1782425400, "municipio.nome": "Governador Valadares", "sucesso": null}, {"facet": "Governador Valadares", "beginTimeSeconds": 1782425400, "endTimeSeconds": 1782426600, "municipio.nome": "Governador Valadares", "sucesso": null}, {"facet": "Governador Valadares", "beginTimeSeconds": 1782426600, "endTimeSeconds": 1782427800, "municipio.nome": "Governador Valadares", "sucesso": 100.0}]
};
