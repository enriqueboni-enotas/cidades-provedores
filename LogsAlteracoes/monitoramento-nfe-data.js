// Gerado automaticamente pelo workflow monitoramento-nfe.yml em 09/06/2026 08:43 (Brasilia)
// NAO EDITAR MANUALMENTE
var monitoramentoNfeData = {
  geradoEm: "09/06/2026 08:43",
  travadasPorMunicipio: [
  {
    "facet": "Corbélia",
    "latest.nfe.stuck_in_intermediate_status.count": 75,
    "nfe.municipio_servico": "Corbélia"
  },
  {
    "facet": "Itapipoca",
    "latest.nfe.stuck_in_intermediate_status.count": 2,
    "nfe.municipio_servico": "Itapipoca"
  },
  {
    "facet": "Ourinhos",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Ourinhos"
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
    "facet": "Parnamirim",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Parnamirim"
  },
  {
    "facet": "Rio de Janeiro",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Rio de Janeiro"
  },
  {
    "facet": "Taubaté",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Taubaté"
  },
  {
    "facet": "Florianópolis",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Florianópolis"
  },
  {
    "facet": "Santa Maria",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Santa Maria"
  },
  {
    "facet": "Aparecida de Goiânia",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Aparecida de Goiânia"
  },
  {
    "facet": "Santo Ângelo",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Santo Ângelo"
  },
  {
    "facet": "Belo Horizonte",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Belo Horizonte"
  },
  {
    "facet": "Tuparendi",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Tuparendi"
  }
],
  tempoMaxProcessamento: [
  {
    "facet": "Taubaté",
    "max.nfe.processing_time.minutes": 59,
    "nfe.municipio_servico": "Taubaté"
  },
  {
    "facet": "Arruda dos vinhos",
    "max.nfe.processing_time.minutes": 57,
    "nfe.municipio_servico": "Arruda dos vinhos"
  },
  {
    "facet": "Marília",
    "max.nfe.processing_time.minutes": 51,
    "nfe.municipio_servico": "Marília"
  },
  {
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 42,
    "nfe.municipio_servico": "Caraguatatuba"
  },
  {
    "facet": "Nova Serrana",
    "max.nfe.processing_time.minutes": 40,
    "nfe.municipio_servico": "Nova Serrana"
  },
  {
    "facet": "Guarulhos",
    "max.nfe.processing_time.minutes": 35,
    "nfe.municipio_servico": "Guarulhos"
  },
  {
    "facet": "Nova Iguaçu",
    "max.nfe.processing_time.minutes": 25,
    "nfe.municipio_servico": "Nova Iguaçu"
  },
  {
    "facet": "Queimados",
    "max.nfe.processing_time.minutes": 23,
    "nfe.municipio_servico": "Queimados"
  },
  {
    "facet": "Tubarão",
    "max.nfe.processing_time.minutes": 22,
    "nfe.municipio_servico": "Tubarão"
  },
  {
    "facet": "Eusébio",
    "max.nfe.processing_time.minutes": 20,
    "nfe.municipio_servico": "Eusébio"
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
    "average.nfe.processing_time.minutes": 4.464601769911504,
    "facet": "Cancelada",
    "nfe.status": "Cancelada"
  },
  {
    "average.nfe.processing_time.minutes": 1.3821365744442669,
    "facet": "Autorizada",
    "nfe.status": "Autorizada"
  },
  {
    "average.nfe.processing_time.minutes": 0.972027972027972,
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
    "max_min": 10,
    "media_min": 4.464601769911504,
    "p95_min": {
      "95": 10
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
    "max_min": 59,
    "media_min": 1.3821365744442669,
    "p95_min": {
      "95": 2.03125
    }
  },
  {
    "facet": [
      "Negada",
      "EmProcessoDeAutorizacao"
    ],
    "max_min": 57,
    "media_min": 0.967040321231387,
    "p95_min": {
      "95": 5.0625
    }
  }
],
  perfMunicipio: [
  {
    "average.nfe.processing_time.minutes": 57,
    "count.nfe.processing_time.minutes": 29,
    "facet": "Arruda dos vinhos",
    "max.nfe.processing_time.minutes": 57,
    "nfe.municipio_servico": "Arruda dos vinhos",
    "percentile.nfe.processing_time.minutes": {
      "95": 57
    }
  },
  {
    "average.nfe.processing_time.minutes": 51,
    "count.nfe.processing_time.minutes": 29,
    "facet": "Marília",
    "max.nfe.processing_time.minutes": 51,
    "nfe.municipio_servico": "Marília",
    "percentile.nfe.processing_time.minutes": {
      "95": 51
    }
  },
  {
    "average.nfe.processing_time.minutes": 42,
    "count.nfe.processing_time.minutes": 29,
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 42,
    "nfe.municipio_servico": "Caraguatatuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 42
    }
  },
  {
    "average.nfe.processing_time.minutes": 35,
    "count.nfe.processing_time.minutes": 29,
    "facet": "Guarulhos",
    "max.nfe.processing_time.minutes": 35,
    "nfe.municipio_servico": "Guarulhos",
    "percentile.nfe.processing_time.minutes": {
      "95": 35
    }
  },
  {
    "average.nfe.processing_time.minutes": 25,
    "count.nfe.processing_time.minutes": 29,
    "facet": "Nova Iguaçu",
    "max.nfe.processing_time.minutes": 25,
    "nfe.municipio_servico": "Nova Iguaçu",
    "percentile.nfe.processing_time.minutes": {
      "95": 25
    }
  },
  {
    "average.nfe.processing_time.minutes": 22,
    "count.nfe.processing_time.minutes": 29,
    "facet": "Tubarão",
    "max.nfe.processing_time.minutes": 22,
    "nfe.municipio_servico": "Tubarão",
    "percentile.nfe.processing_time.minutes": {
      "95": 22
    }
  },
  {
    "average.nfe.processing_time.minutes": 19.584269662921347,
    "count.nfe.processing_time.minutes": 89,
    "facet": "Taubaté",
    "max.nfe.processing_time.minutes": 59,
    "nfe.municipio_servico": "Taubaté",
    "percentile.nfe.processing_time.minutes": {
      "95": 59
    }
  },
  {
    "average.nfe.processing_time.minutes": 19,
    "count.nfe.processing_time.minutes": 29,
    "facet": "Pará de Minas",
    "max.nfe.processing_time.minutes": 19,
    "nfe.municipio_servico": "Pará de Minas",
    "percentile.nfe.processing_time.minutes": {
      "95": 19
    }
  },
  {
    "average.nfe.processing_time.minutes": 19,
    "count.nfe.processing_time.minutes": 58,
    "facet": "Queimados",
    "max.nfe.processing_time.minutes": 23,
    "nfe.municipio_servico": "Queimados",
    "percentile.nfe.processing_time.minutes": {
      "95": 23
    }
  },
  {
    "average.nfe.processing_time.minutes": 18,
    "count.nfe.processing_time.minutes": 29,
    "facet": "Rio Grande",
    "max.nfe.processing_time.minutes": 18,
    "nfe.municipio_servico": "Rio Grande",
    "percentile.nfe.processing_time.minutes": {
      "95": 18
    }
  },
  {
    "average.nfe.processing_time.minutes": 17.846153846153847,
    "count.nfe.processing_time.minutes": 65,
    "facet": "Nova Serrana",
    "max.nfe.processing_time.minutes": 40,
    "nfe.municipio_servico": "Nova Serrana",
    "percentile.nfe.processing_time.minutes": {
      "95": 40
    }
  },
  {
    "average.nfe.processing_time.minutes": 13,
    "count.nfe.processing_time.minutes": 29,
    "facet": "Taquara",
    "max.nfe.processing_time.minutes": 13,
    "nfe.municipio_servico": "Taquara",
    "percentile.nfe.processing_time.minutes": {
      "95": 13
    }
  },
  {
    "average.nfe.processing_time.minutes": 7.458823529411765,
    "count.nfe.processing_time.minutes": 85,
    "facet": "Eusébio",
    "max.nfe.processing_time.minutes": 20,
    "nfe.municipio_servico": "Eusébio",
    "percentile.nfe.processing_time.minutes": {
      "95": 20
    }
  },
  {
    "average.nfe.processing_time.minutes": 7,
    "count.nfe.processing_time.minutes": 58,
    "facet": "Araquari",
    "max.nfe.processing_time.minutes": 8,
    "nfe.municipio_servico": "Araquari",
    "percentile.nfe.processing_time.minutes": {
      "95": 8
    }
  },
  {
    "average.nfe.processing_time.minutes": 5.5,
    "count.nfe.processing_time.minutes": 58,
    "facet": "Varginha",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "Varginha",
    "percentile.nfe.processing_time.minutes": {
      "95": 10
    }
  },
  {
    "average.nfe.processing_time.minutes": 5,
    "count.nfe.processing_time.minutes": 29,
    "facet": "Guaxupé",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Guaxupé",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 4.691666666666666,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Maceió",
    "max.nfe.processing_time.minutes": 9,
    "nfe.municipio_servico": "Maceió",
    "percentile.nfe.processing_time.minutes": {
      "95": 9
    }
  },
  {
    "average.nfe.processing_time.minutes": 4.50561797752809,
    "count.nfe.processing_time.minutes": 89,
    "facet": "Nova Lima",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "Nova Lima",
    "percentile.nfe.processing_time.minutes": {
      "95": 10
    }
  },
  {
    "average.nfe.processing_time.minutes": 4.426966292134831,
    "count.nfe.processing_time.minutes": 89,
    "facet": "Ribeirão Preto",
    "max.nfe.processing_time.minutes": 9,
    "nfe.municipio_servico": "Ribeirão Preto",
    "percentile.nfe.processing_time.minutes": {
      "95": 9
    }
  },
  {
    "average.nfe.processing_time.minutes": 4,
    "count.nfe.processing_time.minutes": 29,
    "facet": "Tacaratu",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Tacaratu",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 4,
    "count.nfe.processing_time.minutes": 29,
    "facet": "Igarapé",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Igarapé",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.651685393258427,
    "count.nfe.processing_time.minutes": 89,
    "facet": "Taboão da Serra",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "Taboão da Serra",
    "percentile.nfe.processing_time.minutes": {
      "95": 10
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.1797752808988764,
    "count.nfe.processing_time.minutes": 89,
    "facet": "Novo Hamburgo",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Novo Hamburgo",
    "percentile.nfe.processing_time.minutes": {
      "95": 5.0078125
    }
  },
  {
    "average.nfe.processing_time.minutes": 3,
    "count.nfe.processing_time.minutes": 29,
    "facet": "Sobral",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Sobral",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 3,
    "count.nfe.processing_time.minutes": 87,
    "facet": "Piracicaba",
    "max.nfe.processing_time.minutes": 9,
    "nfe.municipio_servico": "Piracicaba",
    "percentile.nfe.processing_time.minutes": {
      "95": 9
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.611111111111111,
    "count.nfe.processing_time.minutes": 36,
    "facet": "Bauru",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Bauru",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.566666666666667,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Orlândia",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Orlândia",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.4269662921348316,
    "count.nfe.processing_time.minutes": 89,
    "facet": "Paraibuna",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "Paraibuna",
    "percentile.nfe.processing_time.minutes": {
      "95": 7
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.1853932584269664,
    "count.nfe.processing_time.minutes": 178,
    "facet": "",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "",
    "percentile.nfe.processing_time.minutes": {
      "95": 10
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 29,
    "facet": "Sacramento",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Sacramento",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 29,
    "facet": "Salgueiro",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Salgueiro",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 29,
    "facet": "Jaguaquara",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Jaguaquara",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 60,
    "facet": "São José de Ribamar",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "São José de Ribamar",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 29,
    "facet": "Urussanga",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Urussanga",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.9798657718120805,
    "count.nfe.processing_time.minutes": 149,
    "facet": "Belo Horizonte",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "Belo Horizonte",
    "percentile.nfe.processing_time.minutes": {
      "95": 7
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.891304347826087,
    "count.nfe.processing_time.minutes": 46,
    "facet": "Lages",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Lages",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.6666666666666667,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Sete Lagoas",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Sete Lagoas",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.5,
    "count.nfe.processing_time.minutes": 58,
    "facet": "Jaguaruna",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Jaguaruna",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.5,
    "count.nfe.processing_time.minutes": 58,
    "facet": "Leopoldina",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Leopoldina",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.4719101123595506,
    "count.nfe.processing_time.minutes": 89,
    "facet": "Formiga",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Formiga",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.3411764705882352,
    "count.nfe.processing_time.minutes": 85,
    "facet": "Jaguariúna",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Jaguariúna",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.1205673758865249,
    "count.nfe.processing_time.minutes": 141,
    "facet": "Porto Alegre",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Porto Alegre",
    "percentile.nfe.processing_time.minutes": {
      "95": 2.0078125
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.1140939597315436,
    "count.nfe.processing_time.minutes": 149,
    "facet": "Florianópolis",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Florianópolis",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.0674157303370786,
    "count.nfe.processing_time.minutes": 89,
    "facet": "Salvador",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Salvador",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.0335570469798658,
    "count.nfe.processing_time.minutes": 149,
    "facet": "São Paulo",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "São Paulo",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Francisco Beltrão",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Francisco Beltrão",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Salto",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Salto",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 29,
    "facet": "Caicó",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Caicó",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 29,
    "facet": "Campo Belo",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Campo Belo",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Mandaguaçu",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Mandaguaçu",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  }
],
  empresasMunicipio: [
  {
    "facet": "Aparecida de Goiânia",
    "nfe.municipio_servico": "Aparecida de Goiânia",
    "uniqueCount.empresa.razao_social": 4
  },
  {
    "facet": "Ourinhos",
    "nfe.municipio_servico": "Ourinhos",
    "uniqueCount.empresa.razao_social": 2
  },
  {
    "facet": "Florianópolis",
    "nfe.municipio_servico": "Florianópolis",
    "uniqueCount.empresa.razao_social": 2
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
    "facet": "Parnamirim",
    "nfe.municipio_servico": "Parnamirim",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Rio de Janeiro",
    "nfe.municipio_servico": "Rio de Janeiro",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Corbélia",
    "nfe.municipio_servico": "Corbélia",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Taubaté",
    "nfe.municipio_servico": "Taubaté",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Santa Maria",
    "nfe.municipio_servico": "Santa Maria",
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
    "facet": "Belo Horizonte",
    "nfe.municipio_servico": "Belo Horizonte",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Tuparendi",
    "nfe.municipio_servico": "Tuparendi",
    "uniqueCount.empresa.razao_social": 1
  }
],
  statsGlobais: [
  {
    "average.nfe.processing_time.minutes": 1.2878642331091898,
    "max.nfe.processing_time.minutes": 59,
    "percentile.nfe.processing_time.minutes": {
      "50": 0,
      "90": 1.015625,
      "95": 4.0625,
      "99": 25.25
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
    "uniqueCount.nfe.municipio_servico": 351
  }
],
  volumeMunicipio: [
  {
    "count.nfe.processing_time.minutes": 180,
    "facet": "Barueri",
    "nfe.municipio_servico": "Barueri"
  },
  {
    "count.nfe.processing_time.minutes": 178,
    "facet": "",
    "nfe.municipio_servico": ""
  },
  {
    "count.nfe.processing_time.minutes": 149,
    "facet": "Belo Horizonte",
    "nfe.municipio_servico": "Belo Horizonte"
  },
  {
    "count.nfe.processing_time.minutes": 149,
    "facet": "São Paulo",
    "nfe.municipio_servico": "São Paulo"
  },
  {
    "count.nfe.processing_time.minutes": 149,
    "facet": "Florianópolis",
    "nfe.municipio_servico": "Florianópolis"
  },
  {
    "count.nfe.processing_time.minutes": 141,
    "facet": "Porto Alegre",
    "nfe.municipio_servico": "Porto Alegre"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Teresina",
    "nfe.municipio_servico": "Teresina"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "São Bernardo do Campo",
    "nfe.municipio_servico": "São Bernardo do Campo"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Caxias do Sul",
    "nfe.municipio_servico": "Caxias do Sul"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Maringá",
    "nfe.municipio_servico": "Maringá"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Itu",
    "nfe.municipio_servico": "Itu"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Curitiba",
    "nfe.municipio_servico": "Curitiba"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Santos",
    "nfe.municipio_servico": "Santos"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Brasília",
    "nfe.municipio_servico": "Brasília"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Vila Velha",
    "nfe.municipio_servico": "Vila Velha"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "São José do Rio Preto",
    "nfe.municipio_servico": "São José do Rio Preto"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Belém",
    "nfe.municipio_servico": "Belém"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Santo André",
    "nfe.municipio_servico": "Santo André"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Uberlândia",
    "nfe.municipio_servico": "Uberlândia"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Fortaleza",
    "nfe.municipio_servico": "Fortaleza"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Maceió",
    "nfe.municipio_servico": "Maceió"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Recife",
    "nfe.municipio_servico": "Recife"
  },
  {
    "count.nfe.processing_time.minutes": 116,
    "facet": "Rio de Janeiro",
    "nfe.municipio_servico": "Rio de Janeiro"
  },
  {
    "count.nfe.processing_time.minutes": 116,
    "facet": "Praia Grande",
    "nfe.municipio_servico": "Praia Grande"
  },
  {
    "count.nfe.processing_time.minutes": 116,
    "facet": "Contagem",
    "nfe.municipio_servico": "Contagem"
  },
  {
    "count.nfe.processing_time.minutes": 106,
    "facet": "Aracaju",
    "nfe.municipio_servico": "Aracaju"
  },
  {
    "count.nfe.processing_time.minutes": 101,
    "facet": "Sumaré",
    "nfe.municipio_servico": "Sumaré"
  },
  {
    "count.nfe.processing_time.minutes": 96,
    "facet": "São Carlos",
    "nfe.municipio_servico": "São Carlos"
  },
  {
    "count.nfe.processing_time.minutes": 91,
    "facet": "Santana de Parnaíba",
    "nfe.municipio_servico": "Santana de Parnaíba"
  },
  {
    "count.nfe.processing_time.minutes": 89,
    "facet": "Engenheiro Coelho",
    "nfe.municipio_servico": "Engenheiro Coelho"
  }
],
  municipioStatus: [
  {
    "facet": [
      "Corbélia",
      "SolicitandoAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 75
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
      "Aparecida de Goiânia",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Belo Horizonte",
      "EmProcessoDeAutorizacao"
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
      "Florianópolis",
      "SolicitandoAutorizacao"
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
      "Ourinhos",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Parnamirim",
      "AutorizadaAguardandoGeracaoPDF"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Rio de Janeiro",
      "Cancelada"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Santa Maria",
      "SolicitandoAutorizacao"
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
      "Taubaté",
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
    "latest.nfe.stuck_in_intermediate_status.count": 75
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
    "empresa.razao_social": "AF MIDIAS LTDA",
    "facet": "AF MIDIAS LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "JP07 LTDA",
    "facet": "JP07 LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "12 MIN SERVICOS DIGITAIS E NEGOCIOS LTDA.",
    "facet": "12 MIN SERVICOS DIGITAIS E NEGOCIOS LTDA.",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "MENTE INTERATIVA",
    "facet": "MENTE INTERATIVA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "C. G. FIORAVANTE SANTAMARIA EMPREENDIMENTOS DIGITAIS - ME",
    "facet": "C. G. FIORAVANTE SANTAMARIA EMPREENDIMENTOS DIGITAIS - ME",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "CENTRO EDUCACIONAL UNINTESE LTDA - ME",
    "facet": "CENTRO EDUCACIONAL UNINTESE LTDA - ME",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "INSTITUTO PEDRO LUXOR TERAPIAS E TREINAMENTOS LTDA",
    "facet": "INSTITUTO PEDRO LUXOR TERAPIAS E TREINAMENTOS LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "LANCE WEB LTDA",
    "facet": "LANCE WEB LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  travadasPorStatusMunicipio: [
  {
    "facet": [
      "SolicitandoAutorizacao",
      "Corbélia"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 75
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
      "AutorizadaAguardandoGeracaoPDF",
      "Parnamirim"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Cancelada",
      "Rio de Janeiro"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Aparecida de Goiânia"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Belo Horizonte"
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
      "Naviraí"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Ourinhos"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Taubaté"
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
      "Florianópolis"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "SolicitandoAutorizacao",
      "Santa Maria"
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
    "latest.nfe.stuck_in_intermediate_status.count": 75
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
      "NEILA MARQUES DE FREITAS F LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "facet": [
      "",
      "12 MIN SERVICOS DIGITAIS E NEGOCIOS LTDA."
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
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
      "AGENCIA DIGITAL ALTO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "C. G. FIORAVANTE SANTAMARIA EMPREENDIMENTOS DIGITAIS - ME"
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
      "DOURADO E ASSIS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "ETERNIUM SOFTWARE DESENVOLVIMENTO DE SOFTWARE LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "FACILITA TECNOLOGIA S/A"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "FLAVIA VASCON SHIGUEMATU TERAPIAS E TREINAMENTOS"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "INSTITUTO PEDRO LUXOR TERAPIAS E TREINAMENTOS LTDA"
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
      "LANCE WEB LTDA"
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
      "MKTP SISTEMAS INTELIGENTES LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "UPSOCIAL NETWORK LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  volumetriaHora: [
  {
    "canceladas": 0,
    "devolucoes": 0,
    "em_emissao": 0,
    "email": 0,
    "emitidas": 3362,
    "falhas": 481
  }
],
  volumetriaTimeseries: [
  {
    "beginTimeSeconds": 1780918800,
    "emitidas": 5882,
    "endTimeSeconds": 1780922400,
    "falhas": 728
  },
  {
    "beginTimeSeconds": 1780922400,
    "emitidas": 7300,
    "endTimeSeconds": 1780926000,
    "falhas": 1070
  },
  {
    "beginTimeSeconds": 1780926000,
    "emitidas": 8185,
    "endTimeSeconds": 1780929600,
    "falhas": 901
  },
  {
    "beginTimeSeconds": 1780929600,
    "emitidas": 11339,
    "endTimeSeconds": 1780933200,
    "falhas": 1906
  },
  {
    "beginTimeSeconds": 1780933200,
    "emitidas": 9957,
    "endTimeSeconds": 1780936800,
    "falhas": 2218
  },
  {
    "beginTimeSeconds": 1780936800,
    "emitidas": 5441,
    "endTimeSeconds": 1780940400,
    "falhas": 552
  },
  {
    "beginTimeSeconds": 1780940400,
    "emitidas": 6784,
    "endTimeSeconds": 1780944000,
    "falhas": 685
  },
  {
    "beginTimeSeconds": 1780944000,
    "emitidas": 6634,
    "endTimeSeconds": 1780947600,
    "falhas": 938
  },
  {
    "beginTimeSeconds": 1780947600,
    "emitidas": 8062,
    "endTimeSeconds": 1780951200,
    "falhas": 2297
  },
  {
    "beginTimeSeconds": 1780951200,
    "emitidas": 8141,
    "endTimeSeconds": 1780954800,
    "falhas": 1278
  },
  {
    "beginTimeSeconds": 1780954800,
    "emitidas": 7457,
    "endTimeSeconds": 1780958400,
    "falhas": 1080
  },
  {
    "beginTimeSeconds": 1780958400,
    "emitidas": 6511,
    "endTimeSeconds": 1780962000,
    "falhas": 696
  },
  {
    "beginTimeSeconds": 1780962000,
    "emitidas": 6033,
    "endTimeSeconds": 1780965600,
    "falhas": 539
  },
  {
    "beginTimeSeconds": 1780965600,
    "emitidas": 9895,
    "endTimeSeconds": 1780969200,
    "falhas": 814
  },
  {
    "beginTimeSeconds": 1780969200,
    "emitidas": 6642,
    "endTimeSeconds": 1780972800,
    "falhas": 425
  },
  {
    "beginTimeSeconds": 1780972800,
    "emitidas": 4178,
    "endTimeSeconds": 1780976400,
    "falhas": 283
  },
  {
    "beginTimeSeconds": 1780976400,
    "emitidas": 12558,
    "endTimeSeconds": 1780980000,
    "falhas": 1391
  },
  {
    "beginTimeSeconds": 1780980000,
    "emitidas": 2561,
    "endTimeSeconds": 1780983600,
    "falhas": 190
  },
  {
    "beginTimeSeconds": 1780983600,
    "emitidas": 1464,
    "endTimeSeconds": 1780987200,
    "falhas": 65
  },
  {
    "beginTimeSeconds": 1780987200,
    "emitidas": 3118,
    "endTimeSeconds": 1780990800,
    "falhas": 447
  },
  {
    "beginTimeSeconds": 1780990800,
    "emitidas": 1397,
    "endTimeSeconds": 1780994400,
    "falhas": 93
  },
  {
    "beginTimeSeconds": 1780994400,
    "emitidas": 1440,
    "endTimeSeconds": 1780998000,
    "falhas": 188
  },
  {
    "beginTimeSeconds": 1780998000,
    "emitidas": 2298,
    "endTimeSeconds": 1781001600,
    "falhas": 384
  },
  {
    "beginTimeSeconds": 1781001600,
    "emitidas": 3394,
    "endTimeSeconds": 1781005200,
    "falhas": 478
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
    "dead_letter": 0,
    "falhas": 2,
    "ok": 61697
  }
],
  travadasStatusEmpresa: {"6":[],"3":[],"1":[],"0":[],"12":[]},
  totalMunicipiosPendentes: [
  {
    "uniqueCount.nfe.municipio_servico": 14
  }
],
  taxaNfse: [
  {
    "rejeicao": 23.34755459172045,
    "sucesso": 76.65244540827965
  }
],
  taxaNfe: [
  {
    "rejeicao": 10.265339928675644,
    "sucesso": 89.73466007132426
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
    "facet": "Lins",
    "municipio.nome": "Lins",
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
    "facet": "Porangatu",
    "municipio.nome": "Porangatu",
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
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
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
    "facet": "Campo Verde",
    "municipio.nome": "Campo Verde",
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
    "facet": "Saquarema",
    "municipio.nome": "Saquarema",
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
    "facet": "Londrina",
    "municipio.nome": "Londrina",
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
    "facet": "Santa Tereza do Oeste",
    "municipio.nome": "Santa Tereza do Oeste",
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
    "facet": "Cachoeiro de Itapemirim",
    "municipio.nome": "Cachoeiro de Itapemirim",
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
    "facet": "Natal",
    "municipio.nome": "Natal",
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
    "facet": "Sacramento",
    "municipio.nome": "Sacramento",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
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
    "facet": "Igarapé",
    "municipio.nome": "Igarapé",
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
    "facet": "Itaboraí",
    "municipio.nome": "Itaboraí",
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
    "facet": "Canoas",
    "municipio.nome": "Canoas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Esmeraldas",
    "municipio.nome": "Esmeraldas",
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
    "facet": "Barra Mansa",
    "municipio.nome": "Barra Mansa",
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
    "facet": "Unaí",
    "municipio.nome": "Unaí",
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
    "facet": "Parnaíba",
    "municipio.nome": "Parnaíba",
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
    "facet": "Santo Antônio do Pinhal",
    "municipio.nome": "Santo Antônio do Pinhal",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Gonçalo do Pará",
    "municipio.nome": "São Gonçalo do Pará",
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
    "facet": "Jaguaquara",
    "municipio.nome": "Jaguaquara",
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
    "facet": "Presidente Prudente",
    "municipio.nome": "Presidente Prudente",
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
    "facet": "Sapucaia do Sul",
    "municipio.nome": "Sapucaia do Sul",
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
    "facet": "São Bento do Sul",
    "municipio.nome": "São Bento do Sul",
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
    "facet": "Guaporé",
    "municipio.nome": "Guaporé",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Queimados",
    "municipio.nome": "Queimados",
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
    "facet": "Lençóis",
    "municipio.nome": "Lençóis",
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
    "facet": "Valença",
    "municipio.nome": "Valença",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Carlópolis",
    "municipio.nome": "Carlópolis",
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
    "facet": "Itajubá",
    "municipio.nome": "Itajubá",
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
    "facet": "Salto",
    "municipio.nome": "Salto",
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
    "facet": "Osvaldo Cruz",
    "municipio.nome": "Osvaldo Cruz",
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
    "facet": "Nova Lima",
    "municipio.nome": "Nova Lima",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Nova Petrópolis",
    "municipio.nome": "Nova Petrópolis",
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
    "facet": "Betim",
    "municipio.nome": "Betim",
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
    "facet": "Pouso Alegre",
    "municipio.nome": "Pouso Alegre",
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
    "facet": "Jaraguá do Sul",
    "municipio.nome": "Jaraguá do Sul",
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
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
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
    "facet": "Arruda dos vinhos",
    "municipio.nome": "Arruda dos vinhos",
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
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
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
    "facet": "Araquari",
    "municipio.nome": "Araquari",
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
    "facet": "Ilhabela",
    "municipio.nome": "Ilhabela",
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
    "facet": "Capanema",
    "municipio.nome": "Capanema",
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
    "facet": "Passo Fundo",
    "municipio.nome": "Passo Fundo",
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
    "facet": "Timbó",
    "municipio.nome": "Timbó",
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
    "facet": "Manaus",
    "municipio.nome": "Manaus",
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
    "facet": "Erechim",
    "municipio.nome": "Erechim",
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
    "facet": "Schroeder",
    "municipio.nome": "Schroeder",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Rosário do Sul",
    "municipio.nome": "Rosário do Sul",
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
    "rejeitadas": 1,
    "taxa_rejeicao": 0.0750187546886,
    "taxa_sucesso": 99.9249812453113
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.010101010101,
    "taxa_sucesso": 98.98989898989889
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.639344262295,
    "taxa_sucesso": 98.3606557377049
  },
  {
    "facet": "Campinas",
    "municipio.nome": "Campinas",
    "rejeitadas": 3,
    "taxa_rejeicao": 2.7522935779816,
    "taxa_sucesso": 97.24770642201831
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 5,
    "taxa_rejeicao": 3.0864197530864,
    "taxa_sucesso": 96.9135802469135
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 8,
    "taxa_rejeicao": 3.1746031746031,
    "taxa_sucesso": 96.8253968253968
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 29,
    "taxa_rejeicao": 3.5670356703567,
    "taxa_sucesso": 96.4329643296432
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 22,
    "taxa_rejeicao": 4.79302832244,
    "taxa_sucesso": 95.2069716775599
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 1,
    "taxa_rejeicao": 5.2631578947368,
    "taxa_sucesso": 94.73684210526311
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 3,
    "taxa_rejeicao": 5.4545454545454,
    "taxa_sucesso": 94.54545454545449
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 2,
    "taxa_rejeicao": 5.8823529411764,
    "taxa_sucesso": 94.11764705882351
  },
  {
    "facet": "Caxias do Sul",
    "municipio.nome": "Caxias do Sul",
    "rejeitadas": 1,
    "taxa_rejeicao": 7.6923076923076,
    "taxa_sucesso": 92.3076923076923
  },
  {
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
    "rejeitadas": 11,
    "taxa_rejeicao": 8.3333333333333,
    "taxa_sucesso": 91.66666666666659
  },
  {
    "facet": "São Carlos",
    "municipio.nome": "São Carlos",
    "rejeitadas": 1,
    "taxa_rejeicao": 9.090909090909,
    "taxa_sucesso": 90.90909090909089
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 1,
    "taxa_rejeicao": 9.3333333333333,
    "taxa_sucesso": 90.66666666666659
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 297,
    "taxa_rejeicao": 10.923133504965,
    "taxa_sucesso": 89.07686649503489
  },
  {
    "facet": "Santa Cruz das Palmeiras",
    "municipio.nome": "Santa Cruz das Palmeiras",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "Santos",
    "municipio.nome": "Santos",
    "rejeitadas": 3,
    "taxa_rejeicao": 12,
    "taxa_sucesso": 88
  },
  {
    "facet": "Contagem",
    "municipio.nome": "Contagem",
    "rejeitadas": 1,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 6,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "São José",
    "municipio.nome": "São José",
    "rejeitadas": 2,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "Mogi das Cruzes",
    "municipio.nome": "Mogi das Cruzes",
    "rejeitadas": 3,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 6,
    "taxa_rejeicao": 18.75,
    "taxa_sucesso": 81.25
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 6,
    "taxa_rejeicao": 21.4285714285714,
    "taxa_sucesso": 78.5714285714285
  },
  {
    "facet": "Sarandi",
    "municipio.nome": "Sarandi",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 40,
    "taxa_rejeicao": 26.4900662251655,
    "taxa_sucesso": 73.5099337748344
  },
  {
    "facet": "Teresina",
    "municipio.nome": "Teresina",
    "rejeitadas": 6,
    "taxa_rejeicao": 27.2727272727272,
    "taxa_sucesso": 72.7272727272727
  },
  {
    "facet": "Alto Paraíso de Goiás",
    "municipio.nome": "Alto Paraíso de Goiás",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Timóteo",
    "municipio.nome": "Timóteo",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 92,
    "taxa_rejeicao": 37.860082304526706,
    "taxa_sucesso": 62.1399176954732
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 5,
    "taxa_rejeicao": 38.4615384615384,
    "taxa_sucesso": 61.538461538461505
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 5,
    "taxa_rejeicao": 38.4615384615384,
    "taxa_sucesso": 61.538461538461505
  },
  {
    "facet": "Maringá",
    "municipio.nome": "Maringá",
    "rejeitadas": 8,
    "taxa_rejeicao": 42.105263157894704,
    "taxa_sucesso": 57.8947368421052
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 3,
    "taxa_rejeicao": 42.8571428571428,
    "taxa_sucesso": 57.1428571428571
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 5,
    "taxa_rejeicao": 45.4545454545454,
    "taxa_sucesso": 54.5454545454545
  },
  {
    "facet": "Votorantim",
    "municipio.nome": "Votorantim",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Sumaré",
    "municipio.nome": "Sumaré",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 7,
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
    "facet": "Naviraí",
    "municipio.nome": "Naviraí",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Foz do Iguaçu",
    "municipio.nome": "Foz do Iguaçu",
    "rejeitadas": 5,
    "taxa_rejeicao": 55.55555555555551,
    "taxa_sucesso": 44.4444444444444
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 82,
    "taxa_rejeicao": 56.9444444444444,
    "taxa_sucesso": 43.05555555555551
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 8,
    "taxa_rejeicao": 72.7272727272727,
    "taxa_sucesso": 27.2727272727272
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 36,
    "taxa_rejeicao": 92.3076923076923,
    "taxa_sucesso": 7.6923076923076
  },
  {
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
    "rejeitadas": 26,
    "taxa_rejeicao": 92.8571428571428,
    "taxa_sucesso": 7.1428571428571
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 13,
    "taxa_rejeicao": 92.8571428571428,
    "taxa_sucesso": 7.1428571428571
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 28,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guaratinguetá",
    "municipio.nome": "Guaratinguetá",
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
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
    "rejeitadas": 5,
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
    "facet": "Dois Vizinhos",
    "municipio.nome": "Dois Vizinhos",
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
    "facet": "Cabo de Santo Agostinho",
    "municipio.nome": "Cabo de Santo Agostinho",
    "rejeitadas": 10,
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
    "facet": "São Mateus",
    "municipio.nome": "São Mateus",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "EXTERIOR",
    "municipio.nome": "EXTERIOR",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jacareí",
    "municipio.nome": "Jacareí",
    "rejeitadas": 2,
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
    "rejeitadas": 2,
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
    "facet": "Guaxupé",
    "municipio.nome": "Guaxupé",
    "rejeitadas": 2,
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Dachau",
    "municipio.nome": "Dachau",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Palmas",
    "municipio.nome": "Palmas",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Imbé",
    "municipio.nome": "Imbé",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Urupá",
    "municipio.nome": "Urupá",
    "rejeitadas": 1,
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
    "facet": "Taubaté",
    "municipio.nome": "Taubaté",
    "rejeitadas": 24,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guarapari",
    "municipio.nome": "Guarapari",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Roque",
    "municipio.nome": "São Roque",
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
    "facet": "Taquaritinga",
    "municipio.nome": "Taquaritinga",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Presidente Epitácio",
    "municipio.nome": "Presidente Epitácio",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Catanduva",
    "municipio.nome": "Catanduva",
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
    "facet": "Indaial",
    "municipio.nome": "Indaial",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Lagoa Santa",
    "municipio.nome": "Lagoa Santa",
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
    "facet": "Sabará",
    "municipio.nome": "Sabará",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Marília",
    "municipio.nome": "Marília",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Capivari",
    "municipio.nome": "Capivari",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Campo Bom",
    "municipio.nome": "Campo Bom",
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
    "facet": "Limeira",
    "municipio.nome": "Limeira",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 4,
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
    "facet": "Artur Nogueira",
    "municipio.nome": "Artur Nogueira",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ponte Nova",
    "municipio.nome": "Ponte Nova",
    "rejeitadas": 4,
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
    "facet": "Ouro Preto do Oeste",
    "municipio.nome": "Ouro Preto do Oeste",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "LISBOA",
    "municipio.nome": "LISBOA",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ivoti",
    "municipio.nome": "Ivoti",
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itapema",
    "municipio.nome": "Itapema",
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jundiaí",
    "municipio.nome": "Jundiaí",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Mooresville",
    "municipio.nome": "Mooresville",
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
    "facet": "Santo Ângelo",
    "municipio.nome": "Santo Ângelo",
    "rejeitadas": 1,
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
    "facet": "Juazeiro do Norte",
    "municipio.nome": "Juazeiro do Norte",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Parobé",
    "municipio.nome": "Parobé",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
    "rejeitadas": 7,
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Chapecó",
    "municipio.nome": "Chapecó",
    "rejeitadas": 6,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bauru",
    "municipio.nome": "Bauru",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ponta Grossa",
    "municipio.nome": "Ponta Grossa",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Rio Claro",
    "municipio.nome": "Rio Claro",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Tauberbischofsheim",
    "municipio.nome": "Tauberbischofsheim",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guarujá",
    "municipio.nome": "Guarujá",
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
    "facet": "Caruaru",
    "municipio.nome": "Caruaru",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ubá",
    "municipio.nome": "Ubá",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guanhães",
    "municipio.nome": "Guanhães",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Anápolis",
    "municipio.nome": "Anápolis",
    "rejeitadas": 20,
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
    "facet": "Tijuana",
    "municipio.nome": "Tijuana",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Valencia",
    "municipio.nome": "Valencia",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  }
],
  taxaRejeicaoMunicipio: [
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 28,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guaratinguetá",
    "municipio.nome": "Guaratinguetá",
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
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
    "rejeitadas": 5,
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
    "facet": "Dois Vizinhos",
    "municipio.nome": "Dois Vizinhos",
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
    "facet": "Cabo de Santo Agostinho",
    "municipio.nome": "Cabo de Santo Agostinho",
    "rejeitadas": 10,
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
    "facet": "São Mateus",
    "municipio.nome": "São Mateus",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "EXTERIOR",
    "municipio.nome": "EXTERIOR",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jacareí",
    "municipio.nome": "Jacareí",
    "rejeitadas": 2,
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
    "rejeitadas": 2,
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
    "facet": "Guaxupé",
    "municipio.nome": "Guaxupé",
    "rejeitadas": 2,
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Dachau",
    "municipio.nome": "Dachau",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Palmas",
    "municipio.nome": "Palmas",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Imbé",
    "municipio.nome": "Imbé",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Urupá",
    "municipio.nome": "Urupá",
    "rejeitadas": 1,
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
    "facet": "Taubaté",
    "municipio.nome": "Taubaté",
    "rejeitadas": 24,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guarapari",
    "municipio.nome": "Guarapari",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Roque",
    "municipio.nome": "São Roque",
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
    "facet": "Taquaritinga",
    "municipio.nome": "Taquaritinga",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Presidente Epitácio",
    "municipio.nome": "Presidente Epitácio",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Catanduva",
    "municipio.nome": "Catanduva",
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
    "facet": "Indaial",
    "municipio.nome": "Indaial",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Lagoa Santa",
    "municipio.nome": "Lagoa Santa",
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
    "facet": "Sabará",
    "municipio.nome": "Sabará",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Marília",
    "municipio.nome": "Marília",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Capivari",
    "municipio.nome": "Capivari",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Campo Bom",
    "municipio.nome": "Campo Bom",
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
    "facet": "Limeira",
    "municipio.nome": "Limeira",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 4,
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
    "facet": "Artur Nogueira",
    "municipio.nome": "Artur Nogueira",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ponte Nova",
    "municipio.nome": "Ponte Nova",
    "rejeitadas": 4,
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
    "facet": "Ouro Preto do Oeste",
    "municipio.nome": "Ouro Preto do Oeste",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "LISBOA",
    "municipio.nome": "LISBOA",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ivoti",
    "municipio.nome": "Ivoti",
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itapema",
    "municipio.nome": "Itapema",
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jundiaí",
    "municipio.nome": "Jundiaí",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Mooresville",
    "municipio.nome": "Mooresville",
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
    "facet": "Santo Ângelo",
    "municipio.nome": "Santo Ângelo",
    "rejeitadas": 1,
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
    "facet": "Juazeiro do Norte",
    "municipio.nome": "Juazeiro do Norte",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Parobé",
    "municipio.nome": "Parobé",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
    "rejeitadas": 7,
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Chapecó",
    "municipio.nome": "Chapecó",
    "rejeitadas": 6,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bauru",
    "municipio.nome": "Bauru",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ponta Grossa",
    "municipio.nome": "Ponta Grossa",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Rio Claro",
    "municipio.nome": "Rio Claro",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Tauberbischofsheim",
    "municipio.nome": "Tauberbischofsheim",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guarujá",
    "municipio.nome": "Guarujá",
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
    "facet": "Caruaru",
    "municipio.nome": "Caruaru",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ubá",
    "municipio.nome": "Ubá",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guanhães",
    "municipio.nome": "Guanhães",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Anápolis",
    "municipio.nome": "Anápolis",
    "rejeitadas": 20,
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
    "facet": "Tijuana",
    "municipio.nome": "Tijuana",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Valencia",
    "municipio.nome": "Valencia",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
    "rejeitadas": 26,
    "taxa_rejeicao": 92.8571428571428,
    "taxa_sucesso": 7.1428571428571
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 13,
    "taxa_rejeicao": 92.8571428571428,
    "taxa_sucesso": 7.1428571428571
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 36,
    "taxa_rejeicao": 92.3076923076923,
    "taxa_sucesso": 7.6923076923076
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 8,
    "taxa_rejeicao": 72.7272727272727,
    "taxa_sucesso": 27.2727272727272
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 82,
    "taxa_rejeicao": 56.9444444444444,
    "taxa_sucesso": 43.05555555555551
  },
  {
    "facet": "Foz do Iguaçu",
    "municipio.nome": "Foz do Iguaçu",
    "rejeitadas": 5,
    "taxa_rejeicao": 55.55555555555551,
    "taxa_sucesso": 44.4444444444444
  },
  {
    "facet": "Votorantim",
    "municipio.nome": "Votorantim",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Sumaré",
    "municipio.nome": "Sumaré",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 7,
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
    "facet": "Naviraí",
    "municipio.nome": "Naviraí",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 5,
    "taxa_rejeicao": 45.4545454545454,
    "taxa_sucesso": 54.5454545454545
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 3,
    "taxa_rejeicao": 42.8571428571428,
    "taxa_sucesso": 57.1428571428571
  },
  {
    "facet": "Maringá",
    "municipio.nome": "Maringá",
    "rejeitadas": 8,
    "taxa_rejeicao": 42.105263157894704,
    "taxa_sucesso": 57.8947368421052
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 5,
    "taxa_rejeicao": 38.4615384615384,
    "taxa_sucesso": 61.538461538461505
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 5,
    "taxa_rejeicao": 38.4615384615384,
    "taxa_sucesso": 61.538461538461505
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 92,
    "taxa_rejeicao": 37.860082304526706,
    "taxa_sucesso": 62.1399176954732
  },
  {
    "facet": "Alto Paraíso de Goiás",
    "municipio.nome": "Alto Paraíso de Goiás",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Timóteo",
    "municipio.nome": "Timóteo",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Teresina",
    "municipio.nome": "Teresina",
    "rejeitadas": 6,
    "taxa_rejeicao": 27.2727272727272,
    "taxa_sucesso": 72.7272727272727
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 40,
    "taxa_rejeicao": 26.4900662251655,
    "taxa_sucesso": 73.5099337748344
  },
  {
    "facet": "Sarandi",
    "municipio.nome": "Sarandi",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 6,
    "taxa_rejeicao": 21.4285714285714,
    "taxa_sucesso": 78.5714285714285
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 6,
    "taxa_rejeicao": 18.75,
    "taxa_sucesso": 81.25
  },
  {
    "facet": "Mogi das Cruzes",
    "municipio.nome": "Mogi das Cruzes",
    "rejeitadas": 3,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 6,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "São José",
    "municipio.nome": "São José",
    "rejeitadas": 2,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "Contagem",
    "municipio.nome": "Contagem",
    "rejeitadas": 1,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Santos",
    "municipio.nome": "Santos",
    "rejeitadas": 3,
    "taxa_rejeicao": 12,
    "taxa_sucesso": 88
  },
  {
    "facet": "Santa Cruz das Palmeiras",
    "municipio.nome": "Santa Cruz das Palmeiras",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 297,
    "taxa_rejeicao": 10.923133504965,
    "taxa_sucesso": 89.07686649503489
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 1,
    "taxa_rejeicao": 9.3333333333333,
    "taxa_sucesso": 90.66666666666659
  },
  {
    "facet": "São Carlos",
    "municipio.nome": "São Carlos",
    "rejeitadas": 1,
    "taxa_rejeicao": 9.090909090909,
    "taxa_sucesso": 90.90909090909089
  },
  {
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
    "rejeitadas": 11,
    "taxa_rejeicao": 8.3333333333333,
    "taxa_sucesso": 91.66666666666659
  },
  {
    "facet": "Caxias do Sul",
    "municipio.nome": "Caxias do Sul",
    "rejeitadas": 1,
    "taxa_rejeicao": 7.6923076923076,
    "taxa_sucesso": 92.3076923076923
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 2,
    "taxa_rejeicao": 5.8823529411764,
    "taxa_sucesso": 94.11764705882351
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 3,
    "taxa_rejeicao": 5.4545454545454,
    "taxa_sucesso": 94.54545454545449
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 1,
    "taxa_rejeicao": 5.2631578947368,
    "taxa_sucesso": 94.73684210526311
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 22,
    "taxa_rejeicao": 4.79302832244,
    "taxa_sucesso": 95.2069716775599
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 29,
    "taxa_rejeicao": 3.5670356703567,
    "taxa_sucesso": 96.4329643296432
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 8,
    "taxa_rejeicao": 3.1746031746031,
    "taxa_sucesso": 96.8253968253968
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 5,
    "taxa_rejeicao": 3.0864197530864,
    "taxa_sucesso": 96.9135802469135
  },
  {
    "facet": "Campinas",
    "municipio.nome": "Campinas",
    "rejeitadas": 3,
    "taxa_rejeicao": 2.7522935779816,
    "taxa_sucesso": 97.24770642201831
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.639344262295,
    "taxa_sucesso": 98.3606557377049
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.010101010101,
    "taxa_sucesso": 98.98989898989889
  },
  {
    "facet": "Salvador",
    "municipio.nome": "Salvador",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.0750187546886,
    "taxa_sucesso": 99.9249812453113
  },
  {
    "facet": "Francisco Beltrão",
    "municipio.nome": "Francisco Beltrão",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Lins",
    "municipio.nome": "Lins",
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
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
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
    "facet": "Campo Verde",
    "municipio.nome": "Campo Verde",
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
    "facet": "Santa Tereza do Oeste",
    "municipio.nome": "Santa Tereza do Oeste",
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
    "facet": "Cachoeiro de Itapemirim",
    "municipio.nome": "Cachoeiro de Itapemirim",
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
    "facet": "Natal",
    "municipio.nome": "Natal",
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
    "facet": "Sacramento",
    "municipio.nome": "Sacramento",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
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
    "facet": "Igarapé",
    "municipio.nome": "Igarapé",
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
    "facet": "Itaboraí",
    "municipio.nome": "Itaboraí",
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
    "facet": "Canoas",
    "municipio.nome": "Canoas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Esmeraldas",
    "municipio.nome": "Esmeraldas",
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
    "facet": "Unaí",
    "municipio.nome": "Unaí",
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
    "facet": "Parnaíba",
    "municipio.nome": "Parnaíba",
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
    "facet": "Santo Antônio do Pinhal",
    "municipio.nome": "Santo Antônio do Pinhal",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Gonçalo do Pará",
    "municipio.nome": "São Gonçalo do Pará",
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
    "facet": "Jaguaquara",
    "municipio.nome": "Jaguaquara",
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
    "facet": "Presidente Prudente",
    "municipio.nome": "Presidente Prudente",
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
    "facet": "Sapucaia do Sul",
    "municipio.nome": "Sapucaia do Sul",
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
    "facet": "São Bento do Sul",
    "municipio.nome": "São Bento do Sul",
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
    "facet": "Guaporé",
    "municipio.nome": "Guaporé",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Queimados",
    "municipio.nome": "Queimados",
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
    "facet": "Lençóis",
    "municipio.nome": "Lençóis",
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
    "facet": "Mossoró",
    "municipio.nome": "Mossoró",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Valença",
    "municipio.nome": "Valença",
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
    "facet": "Carlópolis",
    "municipio.nome": "Carlópolis",
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
    "facet": "Itajubá",
    "municipio.nome": "Itajubá",
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
    "facet": "Salto",
    "municipio.nome": "Salto",
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
    "facet": "Osvaldo Cruz",
    "municipio.nome": "Osvaldo Cruz",
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
    "facet": "Nova Lima",
    "municipio.nome": "Nova Lima",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Nova Petrópolis",
    "municipio.nome": "Nova Petrópolis",
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
    "facet": "Betim",
    "municipio.nome": "Betim",
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
    "facet": "Pouso Alegre",
    "municipio.nome": "Pouso Alegre",
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
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
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
    "facet": "Arruda dos vinhos",
    "municipio.nome": "Arruda dos vinhos",
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
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
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
    "facet": "Araquari",
    "municipio.nome": "Araquari",
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
    "facet": "Ilhabela",
    "municipio.nome": "Ilhabela",
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
    "facet": "Capanema",
    "municipio.nome": "Capanema",
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
    "facet": "Passo Fundo",
    "municipio.nome": "Passo Fundo",
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
    "facet": "Timbó",
    "municipio.nome": "Timbó",
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
    "facet": "Manaus",
    "municipio.nome": "Manaus",
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
    "facet": "Erechim",
    "municipio.nome": "Erechim",
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
    "facet": "Rosário do Sul",
    "municipio.nome": "Rosário do Sul",
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
    "beginTimeSeconds": 1780990920,
    "endTimeSeconds": 1780992120,
    "rejeicao": 23.318314377000082,
    "sucesso": 76.68168562299972
  },
  {
    "beginTimeSeconds": 1780992120,
    "endTimeSeconds": 1780993320,
    "rejeicao": 23.670508038942067,
    "sucesso": 76.32949196105811
  },
  {
    "beginTimeSeconds": 1780993320,
    "endTimeSeconds": 1780994520,
    "rejeicao": 23.82076049597577,
    "sucesso": 76.17923950402408
  },
  {
    "beginTimeSeconds": 1780994520,
    "endTimeSeconds": 1780995720,
    "rejeicao": 23.47485318896143,
    "sucesso": 76.52514681103852
  },
  {
    "beginTimeSeconds": 1780995720,
    "endTimeSeconds": 1780996920,
    "rejeicao": 23.34463839886133,
    "sucesso": 76.65536160113886
  },
  {
    "beginTimeSeconds": 1780996920,
    "endTimeSeconds": 1780998120,
    "rejeicao": 23.37434354228995,
    "sucesso": 76.62565645771006
  },
  {
    "beginTimeSeconds": 1780998120,
    "endTimeSeconds": 1780999320,
    "rejeicao": 23.389088618761477,
    "sucesso": 76.61091138123841
  },
  {
    "beginTimeSeconds": 1780999320,
    "endTimeSeconds": 1781000520,
    "rejeicao": 23.39619520387084,
    "sucesso": 76.60380479612924
  },
  {
    "beginTimeSeconds": 1781000520,
    "endTimeSeconds": 1781001720,
    "rejeicao": 23.422450321320223,
    "sucesso": 76.57754967867967
  },
  {
    "beginTimeSeconds": 1781001720,
    "endTimeSeconds": 1781002920,
    "rejeicao": 23.532685400622174,
    "sucesso": 76.46731459937783
  },
  {
    "beginTimeSeconds": 1781002920,
    "endTimeSeconds": 1781004120,
    "rejeicao": 22.56485088519851,
    "sucesso": 77.43514911480139
  },
  {
    "beginTimeSeconds": 1781004120,
    "endTimeSeconds": 1781005320,
    "rejeicao": 21.15679054817152,
    "sucesso": 78.84320945182844
  }
],
  taxaSucessoMunicipioTs: [{"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1780990920, "endTimeSeconds": 1780992120, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1780992120, "endTimeSeconds": 1780993320, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1780993320, "endTimeSeconds": 1780994520, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1780994520, "endTimeSeconds": 1780995720, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1780995720, "endTimeSeconds": 1780996920, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1780996920, "endTimeSeconds": 1780998120, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1780998120, "endTimeSeconds": 1780999320, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1780999320, "endTimeSeconds": 1781000520, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1781000520, "endTimeSeconds": 1781001720, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1781001720, "endTimeSeconds": 1781002920, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1781002920, "endTimeSeconds": 1781004120, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1781004120, "endTimeSeconds": 1781005320, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1780990920, "endTimeSeconds": 1780992120, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1780992120, "endTimeSeconds": 1780993320, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1780993320, "endTimeSeconds": 1780994520, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1780994520, "endTimeSeconds": 1780995720, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1780995720, "endTimeSeconds": 1780996920, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1780996920, "endTimeSeconds": 1780998120, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1780998120, "endTimeSeconds": 1780999320, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1780999320, "endTimeSeconds": 1781000520, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1781000520, "endTimeSeconds": 1781001720, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1781001720, "endTimeSeconds": 1781002920, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1781002920, "endTimeSeconds": 1781004120, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1781004120, "endTimeSeconds": 1781005320, "municipio.nome": "Caic\u00f3", "sucesso": null}, {"facet": "Salgueiro", "beginTimeSeconds": 1780990920, "endTimeSeconds": 1780992120, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1780992120, "endTimeSeconds": 1780993320, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1780993320, "endTimeSeconds": 1780994520, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1780994520, "endTimeSeconds": 1780995720, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1780995720, "endTimeSeconds": 1780996920, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1780996920, "endTimeSeconds": 1780998120, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1780998120, "endTimeSeconds": 1780999320, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1780999320, "endTimeSeconds": 1781000520, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1781000520, "endTimeSeconds": 1781001720, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1781001720, "endTimeSeconds": 1781002920, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1781002920, "endTimeSeconds": 1781004120, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1781004120, "endTimeSeconds": 1781005320, "municipio.nome": "Salgueiro", "sucesso": null}, {"facet": "Itabaiana", "beginTimeSeconds": 1780990920, "endTimeSeconds": 1780992120, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1780992120, "endTimeSeconds": 1780993320, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1780993320, "endTimeSeconds": 1780994520, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1780994520, "endTimeSeconds": 1780995720, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1780995720, "endTimeSeconds": 1780996920, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1780996920, "endTimeSeconds": 1780998120, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1780998120, "endTimeSeconds": 1780999320, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1780999320, "endTimeSeconds": 1781000520, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1781000520, "endTimeSeconds": 1781001720, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1781001720, "endTimeSeconds": 1781002920, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1781002920, "endTimeSeconds": 1781004120, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1781004120, "endTimeSeconds": 1781005320, "municipio.nome": "Itabaiana", "sucesso": null}, {"facet": "Una\u00ed", "beginTimeSeconds": 1780990920, "endTimeSeconds": 1780992120, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1780992120, "endTimeSeconds": 1780993320, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1780993320, "endTimeSeconds": 1780994520, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1780994520, "endTimeSeconds": 1780995720, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1780995720, "endTimeSeconds": 1780996920, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1780996920, "endTimeSeconds": 1780998120, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1780998120, "endTimeSeconds": 1780999320, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1780999320, "endTimeSeconds": 1781000520, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1781000520, "endTimeSeconds": 1781001720, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1781001720, "endTimeSeconds": 1781002920, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1781002920, "endTimeSeconds": 1781004120, "municipio.nome": "Una\u00ed", "sucesso": 100.0}, {"facet": "Una\u00ed", "beginTimeSeconds": 1781004120, "endTimeSeconds": 1781005320, "municipio.nome": "Una\u00ed", "sucesso": null}, {"facet": "Petrolina", "beginTimeSeconds": 1780990920, "endTimeSeconds": 1780992120, "municipio.nome": "Petrolina", "sucesso": 100.0}, {"facet": "Petrolina", "beginTimeSeconds": 1780992120, "endTimeSeconds": 1780993320, "municipio.nome": "Petrolina", "sucesso": 100.0}, {"facet": "Petrolina", "beginTimeSeconds": 1780993320, "endTimeSeconds": 1780994520, "municipio.nome": "Petrolina", "sucesso": 100.0}, {"facet": "Petrolina", "beginTimeSeconds": 1780994520, "endTimeSeconds": 1780995720, "municipio.nome": "Petrolina", "sucesso": 100.0}, {"facet": "Petrolina", "beginTimeSeconds": 1780995720, "endTimeSeconds": 1780996920, "municipio.nome": "Petrolina", "sucesso": 100.0}, {"facet": "Petrolina", "beginTimeSeconds": 1780996920, "endTimeSeconds": 1780998120, "municipio.nome": "Petrolina", "sucesso": 100.0}, {"facet": "Petrolina", "beginTimeSeconds": 1780998120, "endTimeSeconds": 1780999320, "municipio.nome": "Petrolina", "sucesso": 100.0}, {"facet": "Petrolina", "beginTimeSeconds": 1780999320, "endTimeSeconds": 1781000520, "municipio.nome": "Petrolina", "sucesso": 100.0}, {"facet": "Petrolina", "beginTimeSeconds": 1781000520, "endTimeSeconds": 1781001720, "municipio.nome": "Petrolina", "sucesso": 100.0}, {"facet": "Petrolina", "beginTimeSeconds": 1781001720, "endTimeSeconds": 1781002920, "municipio.nome": "Petrolina", "sucesso": 100.0}, {"facet": "Petrolina", "beginTimeSeconds": 1781002920, "endTimeSeconds": 1781004120, "municipio.nome": "Petrolina", "sucesso": 100.0}, {"facet": "Petrolina", "beginTimeSeconds": 1781004120, "endTimeSeconds": 1781005320, "municipio.nome": "Petrolina", "sucesso": null}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1780990920, "endTimeSeconds": 1780992120, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1780992120, "endTimeSeconds": 1780993320, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1780993320, "endTimeSeconds": 1780994520, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1780994520, "endTimeSeconds": 1780995720, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1780995720, "endTimeSeconds": 1780996920, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1780996920, "endTimeSeconds": 1780998120, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1780998120, "endTimeSeconds": 1780999320, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1780999320, "endTimeSeconds": 1781000520, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1781000520, "endTimeSeconds": 1781001720, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1781001720, "endTimeSeconds": 1781002920, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1781002920, "endTimeSeconds": 1781004120, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1781004120, "endTimeSeconds": 1781005320, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1780990920, "endTimeSeconds": 1780992120, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1780992120, "endTimeSeconds": 1780993320, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1780993320, "endTimeSeconds": 1780994520, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1780994520, "endTimeSeconds": 1780995720, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1780995720, "endTimeSeconds": 1780996920, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1780996920, "endTimeSeconds": 1780998120, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1780998120, "endTimeSeconds": 1780999320, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1780999320, "endTimeSeconds": 1781000520, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1781000520, "endTimeSeconds": 1781001720, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1781001720, "endTimeSeconds": 1781002920, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1781002920, "endTimeSeconds": 1781004120, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1781004120, "endTimeSeconds": 1781005320, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Sobral", "beginTimeSeconds": 1780990920, "endTimeSeconds": 1780992120, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1780992120, "endTimeSeconds": 1780993320, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1780993320, "endTimeSeconds": 1780994520, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1780994520, "endTimeSeconds": 1780995720, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1780995720, "endTimeSeconds": 1780996920, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1780996920, "endTimeSeconds": 1780998120, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1780998120, "endTimeSeconds": 1780999320, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1780999320, "endTimeSeconds": 1781000520, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1781000520, "endTimeSeconds": 1781001720, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1781001720, "endTimeSeconds": 1781002920, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1781002920, "endTimeSeconds": 1781004120, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1781004120, "endTimeSeconds": 1781005320, "municipio.nome": "Sobral", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1780990920, "endTimeSeconds": 1780992120, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1780992120, "endTimeSeconds": 1780993320, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1780993320, "endTimeSeconds": 1780994520, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1780994520, "endTimeSeconds": 1780995720, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1780995720, "endTimeSeconds": 1780996920, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1780996920, "endTimeSeconds": 1780998120, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1780998120, "endTimeSeconds": 1780999320, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1780999320, "endTimeSeconds": 1781000520, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1781000520, "endTimeSeconds": 1781001720, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1781001720, "endTimeSeconds": 1781002920, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1781002920, "endTimeSeconds": 1781004120, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1781004120, "endTimeSeconds": 1781005320, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1780990920, "endTimeSeconds": 1780992120, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1780992120, "endTimeSeconds": 1780993320, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1780993320, "endTimeSeconds": 1780994520, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1780994520, "endTimeSeconds": 1780995720, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1780995720, "endTimeSeconds": 1780996920, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1780996920, "endTimeSeconds": 1780998120, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1780998120, "endTimeSeconds": 1780999320, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1780999320, "endTimeSeconds": 1781000520, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1781000520, "endTimeSeconds": 1781001720, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1781001720, "endTimeSeconds": 1781002920, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1781002920, "endTimeSeconds": 1781004120, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1781004120, "endTimeSeconds": 1781005320, "municipio.nome": "Santa Teresa", "sucesso": null}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1780990920, "endTimeSeconds": 1780992120, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": 100.0}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1780992120, "endTimeSeconds": 1780993320, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": 100.0}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1780993320, "endTimeSeconds": 1780994520, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": 100.0}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1780994520, "endTimeSeconds": 1780995720, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": 100.0}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1780995720, "endTimeSeconds": 1780996920, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": 100.0}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1780996920, "endTimeSeconds": 1780998120, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": 100.0}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1780998120, "endTimeSeconds": 1780999320, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": 100.0}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1780999320, "endTimeSeconds": 1781000520, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": 100.0}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1781000520, "endTimeSeconds": 1781001720, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": 100.0}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1781001720, "endTimeSeconds": 1781002920, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": 100.0}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1781002920, "endTimeSeconds": 1781004120, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": 100.0}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1781004120, "endTimeSeconds": 1781005320, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": null}, {"facet": "Alegre", "beginTimeSeconds": 1780990920, "endTimeSeconds": 1780992120, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1780992120, "endTimeSeconds": 1780993320, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1780993320, "endTimeSeconds": 1780994520, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1780994520, "endTimeSeconds": 1780995720, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1780995720, "endTimeSeconds": 1780996920, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1780996920, "endTimeSeconds": 1780998120, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1780998120, "endTimeSeconds": 1780999320, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1780999320, "endTimeSeconds": 1781000520, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1781000520, "endTimeSeconds": 1781001720, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1781001720, "endTimeSeconds": 1781002920, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1781002920, "endTimeSeconds": 1781004120, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1781004120, "endTimeSeconds": 1781005320, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1780990920, "endTimeSeconds": 1780992120, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1780992120, "endTimeSeconds": 1780993320, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1780993320, "endTimeSeconds": 1780994520, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1780994520, "endTimeSeconds": 1780995720, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1780995720, "endTimeSeconds": 1780996920, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1780996920, "endTimeSeconds": 1780998120, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1780998120, "endTimeSeconds": 1780999320, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1780999320, "endTimeSeconds": 1781000520, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1781000520, "endTimeSeconds": 1781001720, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1781001720, "endTimeSeconds": 1781002920, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1781002920, "endTimeSeconds": 1781004120, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1781004120, "endTimeSeconds": 1781005320, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1780990920, "endTimeSeconds": 1780992120, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1780992120, "endTimeSeconds": 1780993320, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1780993320, "endTimeSeconds": 1780994520, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1780994520, "endTimeSeconds": 1780995720, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1780995720, "endTimeSeconds": 1780996920, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1780996920, "endTimeSeconds": 1780998120, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1780998120, "endTimeSeconds": 1780999320, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1780999320, "endTimeSeconds": 1781000520, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1781000520, "endTimeSeconds": 1781001720, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1781001720, "endTimeSeconds": 1781002920, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1781002920, "endTimeSeconds": 1781004120, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1781004120, "endTimeSeconds": 1781005320, "municipio.nome": "Par\u00e1 de Minas", "sucesso": null}]
};
