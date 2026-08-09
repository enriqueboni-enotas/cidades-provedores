// Gerado automaticamente pelo workflow monitoramento-nfe.yml em 09/08/2026 07:55 (Brasilia)
// NAO EDITAR MANUALMENTE
var monitoramentoNfeData = {
  geradoEm: "09/08/2026 07:55",
  travadasPorMunicipio: [
  {
    "facet": "Corbélia",
    "latest.nfe.stuck_in_intermediate_status.count": 15,
    "nfe.municipio_servico": "Corbélia"
  },
  {
    "facet": "Ribeirão Preto",
    "latest.nfe.stuck_in_intermediate_status.count": 14,
    "nfe.municipio_servico": "Ribeirão Preto"
  },
  {
    "facet": "Barra do Bugres",
    "latest.nfe.stuck_in_intermediate_status.count": 10,
    "nfe.municipio_servico": "Barra do Bugres"
  },
  {
    "facet": "Naviraí",
    "latest.nfe.stuck_in_intermediate_status.count": 8,
    "nfe.municipio_servico": "Naviraí"
  },
  {
    "facet": "EXTERIOR",
    "latest.nfe.stuck_in_intermediate_status.count": 4,
    "nfe.municipio_servico": "EXTERIOR"
  },
  {
    "facet": "Presidente Prudente",
    "latest.nfe.stuck_in_intermediate_status.count": 4,
    "nfe.municipio_servico": "Presidente Prudente"
  },
  {
    "facet": "São Bernardo do Campo",
    "latest.nfe.stuck_in_intermediate_status.count": 4,
    "nfe.municipio_servico": "São Bernardo do Campo"
  },
  {
    "facet": "Tuparendi",
    "latest.nfe.stuck_in_intermediate_status.count": 4,
    "nfe.municipio_servico": "Tuparendi"
  },
  {
    "facet": "Itapipoca",
    "latest.nfe.stuck_in_intermediate_status.count": 2,
    "nfe.municipio_servico": "Itapipoca"
  },
  {
    "facet": "Santa Maria",
    "latest.nfe.stuck_in_intermediate_status.count": 2,
    "nfe.municipio_servico": "Santa Maria"
  },
  {
    "facet": "Duque de Caxias",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Duque de Caxias"
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
    "facet": "São Paulo",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "São Paulo"
  },
  {
    "facet": "Teresópolis",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Teresópolis"
  },
  {
    "facet": "São José dos Campos",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "São José dos Campos"
  }
],
  tempoMaxProcessamento: [
  {
    "facet": "São Paulo",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "São Paulo"
  },
  {
    "facet": "Novo Hamburgo",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Novo Hamburgo"
  },
  {
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Caraguatatuba"
  },
  {
    "facet": "",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": ""
  },
  {
    "facet": "Amparo",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Amparo"
  },
  {
    "facet": "Sumaré",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Sumaré"
  },
  {
    "facet": "Taubaté",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Taubaté"
  },
  {
    "facet": "Lavras",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Lavras"
  },
  {
    "facet": "Rio de Janeiro",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Rio de Janeiro"
  },
  {
    "facet": "Governador Valadares",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Governador Valadares"
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
    "average.nfe.processing_time.minutes": 0.43019197207678883,
    "facet": "Autorizada",
    "nfe.status": "Autorizada"
  },
  {
    "average.nfe.processing_time.minutes": 0.4133138258961229,
    "facet": "Negada",
    "nfe.status": "Negada"
  }
],
  tempoPorStatusDetalhe: [
  {
    "facet": [
      "Autorizada",
      "AutorizadaAguardandoGeracaoPDF"
    ],
    "max_min": 3,
    "media_min": 0.43019197207678883,
    "p95_min": {
      "95": 1.00390625
    }
  },
  {
    "facet": [
      "Negada",
      "EmProcessoDeAutorizacao"
    ],
    "max_min": 6,
    "media_min": 0.4133138258961229,
    "p95_min": {
      "95": 1.0078125
    }
  }
],
  perfMunicipio: [
  {
    "average.nfe.processing_time.minutes": 3,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Caraguatatuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.03125,
    "count.nfe.processing_time.minutes": 32,
    "facet": "Novo Hamburgo",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Novo Hamburgo",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 31,
    "facet": "Amparo",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Amparo",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Lavras",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Lavras",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.5853658536585367,
    "count.nfe.processing_time.minutes": 82,
    "facet": "São Paulo",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "São Paulo",
    "percentile.nfe.processing_time.minutes": {
      "95": 6
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 67,
    "facet": "Engenheiro Coelho",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Engenheiro Coelho",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Farroupilha",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Farroupilha",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Patos de Minas",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Patos de Minas",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 16,
    "facet": "Navegantes",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Navegantes",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 16,
    "facet": "Cambuí",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Cambuí",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Governador Valadares",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Governador Valadares",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 41,
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
    "facet": "Itajaí",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Itajaí",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 21,
    "facet": "Formiga",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Formiga",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Camaçari",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Camaçari",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Chapecó",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Chapecó",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Uberaba",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Uberaba",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Pinhais",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Pinhais",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Feira de Santana",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Feira de Santana",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 47,
    "facet": "Praia Grande",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Praia Grande",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 31,
    "facet": "Paraibuna",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Paraibuna",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Contagem",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Contagem",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Maceió",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Maceió",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Conceição do Coité",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Conceição do Coité",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 26,
    "facet": "Mendes",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Mendes",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 6,
    "facet": "Leopoldina",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Leopoldina",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Ji-Paraná",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Ji-Paraná",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 6,
    "facet": "Piraju",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Piraju",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 11,
    "facet": "Osório",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Osório",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 21,
    "facet": "Cascavel",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Cascavel",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.9090909090909091,
    "count.nfe.processing_time.minutes": 11,
    "facet": "São Roque",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São Roque",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.7560975609756098,
    "count.nfe.processing_time.minutes": 82,
    "facet": "Belo Horizonte",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Belo Horizonte",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.7402597402597403,
    "count.nfe.processing_time.minutes": 77,
    "facet": "Sumaré",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Sumaré",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.7380952380952381,
    "count.nfe.processing_time.minutes": 42,
    "facet": "Taubaté",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Taubaté",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.7317073170731707,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Sete Lagoas",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Sete Lagoas",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.7317073170731707,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Betim",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Betim",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.7317073170731707,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Indaiatuba",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Indaiatuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.7317073170731707,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Aparecida de Goiânia",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Aparecida de Goiânia",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.6341463414634146,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Rio de Janeiro",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Rio de Janeiro",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.573170731707317,
    "count.nfe.processing_time.minutes": 82,
    "facet": "Salvador",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Salvador",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.5121951219512195,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Goiânia",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Goiânia",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.5121951219512195,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Panambi",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Panambi",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.5,
    "count.nfe.processing_time.minutes": 82,
    "facet": "São Bernardo do Campo",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São Bernardo do Campo",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.5,
    "count.nfe.processing_time.minutes": 82,
    "facet": "Curitiba",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Curitiba",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.4878048780487805,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Joinville",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Joinville",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.4878048780487805,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Brasília",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Brasília",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.4878048780487805,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Ribeirão Preto",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Ribeirão Preto",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.4878048780487805,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Vitória",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Vitória",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.43902439024390244,
    "count.nfe.processing_time.minutes": 82,
    "facet": "",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.36585365853658536,
    "count.nfe.processing_time.minutes": 41,
    "facet": "Niterói",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Niterói",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  }
],
  empresasMunicipio: [
  {
    "facet": "São José dos Campos",
    "nfe.municipio_servico": "São José dos Campos",
    "uniqueCount.empresa.razao_social": 15
  },
  {
    "facet": "Santa Maria",
    "nfe.municipio_servico": "Santa Maria",
    "uniqueCount.empresa.razao_social": 4
  },
  {
    "facet": "Presidente Prudente",
    "nfe.municipio_servico": "Presidente Prudente",
    "uniqueCount.empresa.razao_social": 3
  },
  {
    "facet": "Ribeirão Preto",
    "nfe.municipio_servico": "Ribeirão Preto",
    "uniqueCount.empresa.razao_social": 3
  },
  {
    "facet": "Urupá",
    "nfe.municipio_servico": "Urupá",
    "uniqueCount.empresa.razao_social": 2
  },
  {
    "facet": "São Bernardo do Campo",
    "nfe.municipio_servico": "São Bernardo do Campo",
    "uniqueCount.empresa.razao_social": 2
  },
  {
    "facet": "Duque de Caxias",
    "nfe.municipio_servico": "Duque de Caxias",
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
    "facet": "Barra do Bugres",
    "nfe.municipio_servico": "Barra do Bugres",
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
    "facet": "São Paulo",
    "nfe.municipio_servico": "São Paulo",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Teresópolis",
    "nfe.municipio_servico": "Teresópolis",
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
    "average.nfe.processing_time.minutes": 0.4253902185223725,
    "max.nfe.processing_time.minutes": 6,
    "percentile.nfe.processing_time.minutes": {
      "50": 0,
      "90": 1.0078125,
      "95": 1.0078125,
      "99": 3.015625
    }
  }
],
  totalEmpresas: [
  {
    "uniqueCount.empresa.razao_social": 38
  }
],
  totalMunicipios: [
  {
    "uniqueCount.nfe.municipio_servico": 119
  }
],
  volumeMunicipio: [
  {
    "count.nfe.processing_time.minutes": 113,
    "facet": "Taboão da Serra",
    "nfe.municipio_servico": "Taboão da Serra"
  },
  {
    "count.nfe.processing_time.minutes": 82,
    "facet": "",
    "nfe.municipio_servico": ""
  },
  {
    "count.nfe.processing_time.minutes": 82,
    "facet": "São Bernardo do Campo",
    "nfe.municipio_servico": "São Bernardo do Campo"
  },
  {
    "count.nfe.processing_time.minutes": 82,
    "facet": "Belo Horizonte",
    "nfe.municipio_servico": "Belo Horizonte"
  },
  {
    "count.nfe.processing_time.minutes": 82,
    "facet": "Florianópolis",
    "nfe.municipio_servico": "Florianópolis"
  },
  {
    "count.nfe.processing_time.minutes": 82,
    "facet": "Barueri",
    "nfe.municipio_servico": "Barueri"
  },
  {
    "count.nfe.processing_time.minutes": 82,
    "facet": "Lauro de Freitas",
    "nfe.municipio_servico": "Lauro de Freitas"
  },
  {
    "count.nfe.processing_time.minutes": 82,
    "facet": "Videira",
    "nfe.municipio_servico": "Videira"
  },
  {
    "count.nfe.processing_time.minutes": 82,
    "facet": "São José",
    "nfe.municipio_servico": "São José"
  },
  {
    "count.nfe.processing_time.minutes": 82,
    "facet": "Salvador",
    "nfe.municipio_servico": "Salvador"
  },
  {
    "count.nfe.processing_time.minutes": 82,
    "facet": "Curitiba",
    "nfe.municipio_servico": "Curitiba"
  },
  {
    "count.nfe.processing_time.minutes": 82,
    "facet": "São Paulo",
    "nfe.municipio_servico": "São Paulo"
  },
  {
    "count.nfe.processing_time.minutes": 77,
    "facet": "Guaratuba",
    "nfe.municipio_servico": "Guaratuba"
  },
  {
    "count.nfe.processing_time.minutes": 77,
    "facet": "Sumaré",
    "nfe.municipio_servico": "Sumaré"
  },
  {
    "count.nfe.processing_time.minutes": 67,
    "facet": "Engenheiro Coelho",
    "nfe.municipio_servico": "Engenheiro Coelho"
  },
  {
    "count.nfe.processing_time.minutes": 57,
    "facet": "Fortaleza",
    "nfe.municipio_servico": "Fortaleza"
  },
  {
    "count.nfe.processing_time.minutes": 52,
    "facet": "Itu",
    "nfe.municipio_servico": "Itu"
  },
  {
    "count.nfe.processing_time.minutes": 47,
    "facet": "Praia Grande",
    "nfe.municipio_servico": "Praia Grande"
  },
  {
    "count.nfe.processing_time.minutes": 42,
    "facet": "Taubaté",
    "nfe.municipio_servico": "Taubaté"
  },
  {
    "count.nfe.processing_time.minutes": 41,
    "facet": "João Monlevade",
    "nfe.municipio_servico": "João Monlevade"
  },
  {
    "count.nfe.processing_time.minutes": 41,
    "facet": "Francisco Beltrão",
    "nfe.municipio_servico": "Francisco Beltrão"
  },
  {
    "count.nfe.processing_time.minutes": 41,
    "facet": "Campo Grande",
    "nfe.municipio_servico": "Campo Grande"
  },
  {
    "count.nfe.processing_time.minutes": 41,
    "facet": "Nova Iguaçu",
    "nfe.municipio_servico": "Nova Iguaçu"
  },
  {
    "count.nfe.processing_time.minutes": 41,
    "facet": "Farroupilha",
    "nfe.municipio_servico": "Farroupilha"
  },
  {
    "count.nfe.processing_time.minutes": 41,
    "facet": "Belém",
    "nfe.municipio_servico": "Belém"
  },
  {
    "count.nfe.processing_time.minutes": 41,
    "facet": "Patos de Minas",
    "nfe.municipio_servico": "Patos de Minas"
  },
  {
    "count.nfe.processing_time.minutes": 41,
    "facet": "Santo André",
    "nfe.municipio_servico": "Santo André"
  },
  {
    "count.nfe.processing_time.minutes": 41,
    "facet": "Governador Valadares",
    "nfe.municipio_servico": "Governador Valadares"
  },
  {
    "count.nfe.processing_time.minutes": 41,
    "facet": "Gramado",
    "nfe.municipio_servico": "Gramado"
  },
  {
    "count.nfe.processing_time.minutes": 41,
    "facet": "Juiz de Fora",
    "nfe.municipio_servico": "Juiz de Fora"
  }
],
  municipioStatus: [
  {
    "facet": [
      "Corbélia",
      "SolicitandoAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 15
  },
  {
    "facet": [
      "Ribeirão Preto",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 14
  },
  {
    "facet": [
      "Barra do Bugres",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 10
  },
  {
    "facet": [
      "Naviraí",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 8
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
      "Presidente Prudente",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 4
  },
  {
    "facet": [
      "São Bernardo do Campo",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 4
  },
  {
    "facet": [
      "Tuparendi",
      "EmProcessoDeAutorizacao"
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
      "Santa Maria",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "facet": [
      "Duque de Caxias",
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
      "São José dos Campos",
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
      "Teresópolis",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Urupá",
      "Cancelada"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  topEmpresasTravadas: [
  {
    "empresa.razao_social": "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA.",
    "facet": "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA.",
    "latest.nfe.stuck_in_intermediate_status.count": 15
  },
  {
    "empresa.razao_social": "START BILINGUE ENSINO E TRADUCAO LTDA",
    "facet": "START BILINGUE ENSINO E TRADUCAO LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 10
  },
  {
    "empresa.razao_social": "JP07 LTDA",
    "facet": "JP07 LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 4
  },
  {
    "empresa.razao_social": "NEILA MARQUES DE FREITAS F LTDA",
    "facet": "NEILA MARQUES DE FREITAS F LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "empresa.razao_social": "DOIS DE JULHO EMPREENDIMENTOS E PARTICIPACOES LTDA",
    "facet": "DOIS DE JULHO EMPREENDIMENTOS E PARTICIPACOES LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "empresa.razao_social": "CKS CONSULTORIA & TREINAMENTO LTDA",
    "facet": "CKS CONSULTORIA & TREINAMENTO LTDA",
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
    "empresa.razao_social": "DIOGO VITOR DE SOUZA OLIVEIRA 36316721870",
    "facet": "DIOGO VITOR DE SOUZA OLIVEIRA 36316721870",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "THALLES LAZARO SILVA VILAS 34255582858",
    "facet": "THALLES LAZARO SILVA VILAS 34255582858",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "ATITUDE EM NUTRICAO TREINAMENTO PROFISSIONAL LTDA",
    "facet": "ATITUDE EM NUTRICAO TREINAMENTO PROFISSIONAL LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "AC CREATOR HUB LTDA",
    "facet": "AC CREATOR HUB LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "MBA NO BRAINER LTDA",
    "facet": "MBA NO BRAINER LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  travadasPorStatusMunicipio: [
  {
    "facet": [
      "SolicitandoAutorizacao",
      "Corbélia"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 15
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Ribeirão Preto"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 14
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Barra do Bugres"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 10
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Naviraí"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 8
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
      "Presidente Prudente"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 4
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "São Bernardo do Campo"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 4
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Tuparendi"
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
      "Santa Maria"
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
      "Duque de Caxias"
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
      "São José dos Campos"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Teresópolis"
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
      "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA."
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 15
  },
  {
    "facet": [
      "",
      "VEXPENSES S.A"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 14
  },
  {
    "facet": [
      "",
      "START BILINGUE ENSINO E TRADUCAO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 10
  },
  {
    "facet": [
      "",
      "MENTE INTERATIVA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 8
  },
  {
    "facet": [
      "",
      "AGROBRAZIL ROSARY CONSULTORIA EM AGROPECUARIA LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 4
  },
  {
    "facet": [
      "",
      "INTITULA E ADEQUA CURSOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 4
  },
  {
    "facet": [
      "",
      "JP07 LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 4
  },
  {
    "facet": [
      "",
      "ALANA FERREIRA ROSATI LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 3
  },
  {
    "facet": [
      "",
      "CONTDIGITAL SERVICOS DE CONTABILIDADE LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "facet": [
      "",
      "JGD CURSOS E DESENVOLVIMENTO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
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
      "AI GATEWAY ERA LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "ANA MARTHA CURSOS ONLINE LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "ATITUDE EM NUTRICAO TREINAMENTO PROFISSIONAL LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "CDT SOFTWARE TECNOLOGIA LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "CKS CONSULTORIA & TREINAMENTO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "CULTIVANDO COMUNICACAO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "CURSOS PROF DIEGO PUREZA LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "DIOGO VITOR DE SOUZA OLIVEIRA 36316721870"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "DOIS DE JULHO EMPREENDIMENTOS E PARTICIPACOES LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "DRONENG ENGENHARIA LTDA - ME"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "EDVALDO ANJOS MARKETING DIGITAL LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "ENAUTI SERVICOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "INSTITUTO MASSI DE FISIOTERAPIA LTDA"
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
      "INSTITUTO PROPOSITOS DE ENSINO"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "J&J CONTEUDO DIGITAL LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "JC ROUBERTE CENTRO DE PESQUISA E CULTURA HISTORICA"
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
      "KARATE X LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "MBA NO BRAINER LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "MESTRE EM SAUDE CURSOS LTDA"
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
      "RAFAEL SIMOES CARDOSO PITA 35742751885"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "THALLES LAZARO SILVA VILAS 34255582858"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  volumetriaHora: [
  {
    "canceladas": 0,
    "devolucoes": 1,
    "em_emissao": 1,
    "email": 0,
    "emitidas": 1525,
    "falhas": 401
  }
],
  volumetriaTimeseries: [
  {
    "beginTimeSeconds": 1786186200,
    "emitidas": 4428,
    "endTimeSeconds": 1786189800,
    "falhas": 785
  },
  {
    "beginTimeSeconds": 1786189800,
    "emitidas": 5383,
    "endTimeSeconds": 1786193400,
    "falhas": 2047
  },
  {
    "beginTimeSeconds": 1786193400,
    "emitidas": 6689,
    "endTimeSeconds": 1786197000,
    "falhas": 3238
  },
  {
    "beginTimeSeconds": 1786197000,
    "emitidas": 4735,
    "endTimeSeconds": 1786200600,
    "falhas": 842
  },
  {
    "beginTimeSeconds": 1786200600,
    "emitidas": 2169,
    "endTimeSeconds": 1786204200,
    "falhas": 580
  },
  {
    "beginTimeSeconds": 1786204200,
    "emitidas": 7191,
    "endTimeSeconds": 1786207800,
    "falhas": 721
  },
  {
    "beginTimeSeconds": 1786207800,
    "emitidas": 6719,
    "endTimeSeconds": 1786211400,
    "falhas": 941
  },
  {
    "beginTimeSeconds": 1786211400,
    "emitidas": 3688,
    "endTimeSeconds": 1786215000,
    "falhas": 518
  },
  {
    "beginTimeSeconds": 1786215000,
    "emitidas": 1425,
    "endTimeSeconds": 1786218600,
    "falhas": 502
  },
  {
    "beginTimeSeconds": 1786218600,
    "emitidas": 3562,
    "endTimeSeconds": 1786222200,
    "falhas": 606
  },
  {
    "beginTimeSeconds": 1786222200,
    "emitidas": 10932,
    "endTimeSeconds": 1786225800,
    "falhas": 762
  },
  {
    "beginTimeSeconds": 1786225800,
    "emitidas": 20263,
    "endTimeSeconds": 1786229400,
    "falhas": 1001
  },
  {
    "beginTimeSeconds": 1786229400,
    "emitidas": 16329,
    "endTimeSeconds": 1786233000,
    "falhas": 2768
  },
  {
    "beginTimeSeconds": 1786233000,
    "emitidas": 7894,
    "endTimeSeconds": 1786236600,
    "falhas": 502
  },
  {
    "beginTimeSeconds": 1786236600,
    "emitidas": 7110,
    "endTimeSeconds": 1786240200,
    "falhas": 540
  },
  {
    "beginTimeSeconds": 1786240200,
    "emitidas": 2319,
    "endTimeSeconds": 1786243800,
    "falhas": 245
  },
  {
    "beginTimeSeconds": 1786243800,
    "emitidas": 1942,
    "endTimeSeconds": 1786247400,
    "falhas": 410
  },
  {
    "beginTimeSeconds": 1786247400,
    "emitidas": 7897,
    "endTimeSeconds": 1786251000,
    "falhas": 2058
  },
  {
    "beginTimeSeconds": 1786251000,
    "emitidas": 1056,
    "endTimeSeconds": 1786254600,
    "falhas": 123
  },
  {
    "beginTimeSeconds": 1786254600,
    "emitidas": 941,
    "endTimeSeconds": 1786258200,
    "falhas": 650
  },
  {
    "beginTimeSeconds": 1786258200,
    "emitidas": 708,
    "endTimeSeconds": 1786261800,
    "falhas": 116
  },
  {
    "beginTimeSeconds": 1786261800,
    "emitidas": 1194,
    "endTimeSeconds": 1786265400,
    "falhas": 155
  },
  {
    "beginTimeSeconds": 1786265400,
    "emitidas": 1020,
    "endTimeSeconds": 1786269000,
    "falhas": 314
  },
  {
    "beginTimeSeconds": 1786269000,
    "emitidas": 1518,
    "endTimeSeconds": 1786272600,
    "falhas": 451
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
    "falhas": 3,
    "ok": 35526
  }
],
  travadasStatusEmpresa: {"6":[],"3":[],"1":[],"0":[],"12":[]},
  totalMunicipiosPendentes: [
  {
    "uniqueCount.nfe.municipio_servico": 16
  }
],
  taxaNfse: [
  {
    "rejeicao": 49.07654779881519,
    "sucesso": 50.92345220118481
  }
],
  taxaNfe: [
  {
    "rejeicao": 95.30685920577618,
    "sucesso": 4.693140794223827
  }
],
  taxaSucessoMunicipio: [
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
    "facet": "Francisco Beltrão",
    "municipio.nome": "Francisco Beltrão",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
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
    "facet": "Mandaguaçu",
    "municipio.nome": "Mandaguaçu",
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
    "facet": "Guaíra",
    "municipio.nome": "Guaíra",
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
    "facet": "Caxias do Sul",
    "municipio.nome": "Caxias do Sul",
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
    "facet": "Dourados",
    "municipio.nome": "Dourados",
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
    "facet": "Matias Barbosa",
    "municipio.nome": "Matias Barbosa",
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
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
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
    "facet": "Santos",
    "municipio.nome": "Santos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
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
    "facet": "Panambi",
    "municipio.nome": "Panambi",
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
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
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
    "facet": "Canoas",
    "municipio.nome": "Canoas",
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
    "facet": "Sorocaba",
    "municipio.nome": "Sorocaba",
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
    "facet": "Amparo",
    "municipio.nome": "Amparo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 1,
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
    "facet": "Governador Valadares",
    "municipio.nome": "Governador Valadares",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
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
    "facet": "Araraquara",
    "municipio.nome": "Araraquara",
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
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
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
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
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
    "facet": "Camaçari",
    "municipio.nome": "Camaçari",
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
    "facet": "Morro Reuter",
    "municipio.nome": "Morro Reuter",
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
    "facet": "São Roque",
    "municipio.nome": "São Roque",
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
    "facet": "Videira",
    "municipio.nome": "Videira",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Joinville",
    "municipio.nome": "Joinville",
    "rejeitadas": 2,
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
    "facet": "Santa Cruz do Sul",
    "municipio.nome": "Santa Cruz do Sul",
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
    "facet": "São José",
    "municipio.nome": "São José",
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
    "facet": "Pinhais",
    "municipio.nome": "Pinhais",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Não informado",
    "municipio.nome": "Não informado",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
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
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
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
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
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
    "facet": "Contagem",
    "municipio.nome": "Contagem",
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
    "facet": "Porto Velho",
    "municipio.nome": "Porto Velho",
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
    "facet": "Leopoldina",
    "municipio.nome": "Leopoldina",
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
    "facet": "Campinas",
    "municipio.nome": "Campinas",
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
    "facet": "Piraju",
    "municipio.nome": "Piraju",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itajubá",
    "municipio.nome": "Itajubá",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
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
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
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
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Teresina",
    "municipio.nome": "Teresina",
    "rejeitadas": 1,
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
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 1,
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
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Marataízes",
    "municipio.nome": "Marataízes",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 3,
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
    "facet": "Guaratuba",
    "municipio.nome": "Guaratuba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
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
    "facet": "Bragança Paulista",
    "municipio.nome": "Bragança Paulista",
    "rejeitadas": 6,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 19,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 0,
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
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Sumaré",
    "municipio.nome": "Sumaré",
    "rejeitadas": 0,
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
    "facet": "Santa Maria",
    "municipio.nome": "Santa Maria",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 15,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 2,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Natal",
    "municipio.nome": "Natal",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Camaquã",
    "municipio.nome": "Camaquã",
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
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 4,
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
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Montes Claros",
    "municipio.nome": "Montes Claros",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 3,
    "taxa_rejeicao": 0,
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
    "facet": "Prudentópolis",
    "municipio.nome": "Prudentópolis",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Palhoça",
    "municipio.nome": "Palhoça",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 3,
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
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
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
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 1,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Lauro de Freitas",
    "municipio.nome": "Lauro de Freitas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Salvador",
    "municipio.nome": "Salvador",
    "rejeitadas": 13,
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
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Manaus",
    "municipio.nome": "Manaus",
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
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 2,
    "taxa_rejeicao": 0,
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
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Maia",
    "municipio.nome": "Maia",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  }
],
  taxaRejeicaoMunicipio: [
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Teresina",
    "municipio.nome": "Teresina",
    "rejeitadas": 1,
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
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 1,
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 3,
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bragança Paulista",
    "municipio.nome": "Bragança Paulista",
    "rejeitadas": 6,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 19,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 0,
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
    "facet": "Ivoti",
    "municipio.nome": "Ivoti",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Sumaré",
    "municipio.nome": "Sumaré",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 0,
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
    "facet": "Santa Maria",
    "municipio.nome": "Santa Maria",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 15,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Camaquã",
    "municipio.nome": "Camaquã",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itapema",
    "municipio.nome": "Itapema",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Conselheiro Lafaiete",
    "municipio.nome": "Conselheiro Lafaiete",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 4,
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
    "facet": "Santos",
    "municipio.nome": "Santos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Montes Claros",
    "municipio.nome": "Montes Claros",
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
    "facet": "Prudentópolis",
    "municipio.nome": "Prudentópolis",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Palhoça",
    "municipio.nome": "Palhoça",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 3,
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
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
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
    "facet": "Governador Valadares",
    "municipio.nome": "Governador Valadares",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Não informado",
    "municipio.nome": "Não informado",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Salvador",
    "municipio.nome": "Salvador",
    "rejeitadas": 13,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Rio Doce",
    "municipio.nome": "Rio Doce",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Manaus",
    "municipio.nome": "Manaus",
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
    "facet": "Itajubá",
    "municipio.nome": "Itajubá",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Maia",
    "municipio.nome": "Maia",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
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
    "facet": "Francisco Beltrão",
    "municipio.nome": "Francisco Beltrão",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
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
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Mandaguaçu",
    "municipio.nome": "Mandaguaçu",
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
    "facet": "Guaíra",
    "municipio.nome": "Guaíra",
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
    "facet": "Caxias do Sul",
    "municipio.nome": "Caxias do Sul",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Guaratuba",
    "municipio.nome": "Guaratuba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Siqueira Campos",
    "municipio.nome": "Siqueira Campos",
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
    "facet": "Dourados",
    "municipio.nome": "Dourados",
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
    "facet": "Matias Barbosa",
    "municipio.nome": "Matias Barbosa",
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
    "facet": "Betim",
    "municipio.nome": "Betim",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 2,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Natal",
    "municipio.nome": "Natal",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
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
    "facet": "Jundiaí",
    "municipio.nome": "Jundiaí",
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
    "facet": "Nova Friburgo",
    "municipio.nome": "Nova Friburgo",
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
    "facet": "Osório",
    "municipio.nome": "Osório",
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
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 3,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
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
    "facet": "Suzano",
    "municipio.nome": "Suzano",
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
    "facet": "Canoas",
    "municipio.nome": "Canoas",
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
    "facet": "Sorocaba",
    "municipio.nome": "Sorocaba",
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
    "facet": "Amparo",
    "municipio.nome": "Amparo",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 1,
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
    "taxa_sucesso": 0
  },
  {
    "facet": "Araraquara",
    "municipio.nome": "Araraquara",
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
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
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
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
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
    "facet": "Camaçari",
    "municipio.nome": "Camaçari",
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
    "facet": "Morro Reuter",
    "municipio.nome": "Morro Reuter",
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
    "facet": "São Roque",
    "municipio.nome": "São Roque",
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
    "facet": "Cabo Frio",
    "municipio.nome": "Cabo Frio",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 1,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Esteio",
    "municipio.nome": "Esteio",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Lauro de Freitas",
    "municipio.nome": "Lauro de Freitas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
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
    "rejeitadas": 2,
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
    "facet": "Santa Cruz do Sul",
    "municipio.nome": "Santa Cruz do Sul",
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
    "facet": "São José",
    "municipio.nome": "São José",
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
    "facet": "Rio Claro",
    "municipio.nome": "Rio Claro",
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
    "facet": "Contagem",
    "municipio.nome": "Contagem",
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
    "facet": "Porto Velho",
    "municipio.nome": "Porto Velho",
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
    "facet": "Leopoldina",
    "municipio.nome": "Leopoldina",
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
    "facet": "Campinas",
    "municipio.nome": "Campinas",
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
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 2,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Piraju",
    "municipio.nome": "Piraju",
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
    "facet": "Vitória",
    "municipio.nome": "Vitória",
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
  }
],
  taxaTimeseries: [
  {
    "beginTimeSeconds": 1786258440,
    "endTimeSeconds": 1786259640,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1786259640,
    "endTimeSeconds": 1786260840,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1786260840,
    "endTimeSeconds": 1786262040,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1786262040,
    "endTimeSeconds": 1786263240,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1786263240,
    "endTimeSeconds": 1786264440,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1786264440,
    "endTimeSeconds": 1786265640,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1786265640,
    "endTimeSeconds": 1786266840,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1786266840,
    "endTimeSeconds": 1786268040,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1786268040,
    "endTimeSeconds": 1786269240,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1786269240,
    "endTimeSeconds": 1786270440,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1786270440,
    "endTimeSeconds": 1786271640,
    "rejeicao": 52.91029445332116,
    "sucesso": 47.08970554667884
  },
  {
    "beginTimeSeconds": 1786271640,
    "endTimeSeconds": 1786272840,
    "rejeicao": 53.35046451867958,
    "sucesso": 46.64953548132042
  }
],
  taxaSucessoMunicipioTs: [{"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786258440, "endTimeSeconds": 1786259640, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": null}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786259640, "endTimeSeconds": 1786260840, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": null}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786260840, "endTimeSeconds": 1786262040, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": null}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786262040, "endTimeSeconds": 1786263240, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": null}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786263240, "endTimeSeconds": 1786264440, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": null}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786264440, "endTimeSeconds": 1786265640, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": null}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786265640, "endTimeSeconds": 1786266840, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": null}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786266840, "endTimeSeconds": 1786268040, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": null}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786268040, "endTimeSeconds": 1786269240, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": null}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786269240, "endTimeSeconds": 1786270440, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": null}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786270440, "endTimeSeconds": 1786271640, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786271640, "endTimeSeconds": 1786272840, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786258440, "endTimeSeconds": 1786259640, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": null}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786259640, "endTimeSeconds": 1786260840, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": null}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786260840, "endTimeSeconds": 1786262040, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": null}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786262040, "endTimeSeconds": 1786263240, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": null}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786263240, "endTimeSeconds": 1786264440, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": null}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786264440, "endTimeSeconds": 1786265640, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": null}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786265640, "endTimeSeconds": 1786266840, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": null}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786266840, "endTimeSeconds": 1786268040, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": null}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786268040, "endTimeSeconds": 1786269240, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": null}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786269240, "endTimeSeconds": 1786270440, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": null}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786270440, "endTimeSeconds": 1786271640, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": 100.0}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786271640, "endTimeSeconds": 1786272840, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786258440, "endTimeSeconds": 1786259640, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": null}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786259640, "endTimeSeconds": 1786260840, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": null}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786260840, "endTimeSeconds": 1786262040, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": null}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786262040, "endTimeSeconds": 1786263240, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": null}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786263240, "endTimeSeconds": 1786264440, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": null}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786264440, "endTimeSeconds": 1786265640, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": null}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786265640, "endTimeSeconds": 1786266840, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": null}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786266840, "endTimeSeconds": 1786268040, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": null}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786268040, "endTimeSeconds": 1786269240, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": null}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786269240, "endTimeSeconds": 1786270440, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": null}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786270440, "endTimeSeconds": 1786271640, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786271640, "endTimeSeconds": 1786272840, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Campo Grande", "beginTimeSeconds": 1786258440, "endTimeSeconds": 1786259640, "municipio.nome": "Campo Grande", "sucesso": null}, {"facet": "Campo Grande", "beginTimeSeconds": 1786259640, "endTimeSeconds": 1786260840, "municipio.nome": "Campo Grande", "sucesso": null}, {"facet": "Campo Grande", "beginTimeSeconds": 1786260840, "endTimeSeconds": 1786262040, "municipio.nome": "Campo Grande", "sucesso": null}, {"facet": "Campo Grande", "beginTimeSeconds": 1786262040, "endTimeSeconds": 1786263240, "municipio.nome": "Campo Grande", "sucesso": null}, {"facet": "Campo Grande", "beginTimeSeconds": 1786263240, "endTimeSeconds": 1786264440, "municipio.nome": "Campo Grande", "sucesso": null}, {"facet": "Campo Grande", "beginTimeSeconds": 1786264440, "endTimeSeconds": 1786265640, "municipio.nome": "Campo Grande", "sucesso": null}, {"facet": "Campo Grande", "beginTimeSeconds": 1786265640, "endTimeSeconds": 1786266840, "municipio.nome": "Campo Grande", "sucesso": null}, {"facet": "Campo Grande", "beginTimeSeconds": 1786266840, "endTimeSeconds": 1786268040, "municipio.nome": "Campo Grande", "sucesso": null}, {"facet": "Campo Grande", "beginTimeSeconds": 1786268040, "endTimeSeconds": 1786269240, "municipio.nome": "Campo Grande", "sucesso": null}, {"facet": "Campo Grande", "beginTimeSeconds": 1786269240, "endTimeSeconds": 1786270440, "municipio.nome": "Campo Grande", "sucesso": null}, {"facet": "Campo Grande", "beginTimeSeconds": 1786270440, "endTimeSeconds": 1786271640, "municipio.nome": "Campo Grande", "sucesso": 100.0}, {"facet": "Campo Grande", "beginTimeSeconds": 1786271640, "endTimeSeconds": 1786272840, "municipio.nome": "Campo Grande", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786258440, "endTimeSeconds": 1786259640, "municipio.nome": "Nova Igua\u00e7u", "sucesso": null}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786259640, "endTimeSeconds": 1786260840, "municipio.nome": "Nova Igua\u00e7u", "sucesso": null}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786260840, "endTimeSeconds": 1786262040, "municipio.nome": "Nova Igua\u00e7u", "sucesso": null}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786262040, "endTimeSeconds": 1786263240, "municipio.nome": "Nova Igua\u00e7u", "sucesso": null}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786263240, "endTimeSeconds": 1786264440, "municipio.nome": "Nova Igua\u00e7u", "sucesso": null}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786264440, "endTimeSeconds": 1786265640, "municipio.nome": "Nova Igua\u00e7u", "sucesso": null}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786265640, "endTimeSeconds": 1786266840, "municipio.nome": "Nova Igua\u00e7u", "sucesso": null}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786266840, "endTimeSeconds": 1786268040, "municipio.nome": "Nova Igua\u00e7u", "sucesso": null}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786268040, "endTimeSeconds": 1786269240, "municipio.nome": "Nova Igua\u00e7u", "sucesso": null}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786269240, "endTimeSeconds": 1786270440, "municipio.nome": "Nova Igua\u00e7u", "sucesso": null}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786270440, "endTimeSeconds": 1786271640, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "Nova Igua\u00e7u", "beginTimeSeconds": 1786271640, "endTimeSeconds": 1786272840, "municipio.nome": "Nova Igua\u00e7u", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786258440, "endTimeSeconds": 1786259640, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786259640, "endTimeSeconds": 1786260840, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786260840, "endTimeSeconds": 1786262040, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786262040, "endTimeSeconds": 1786263240, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786263240, "endTimeSeconds": 1786264440, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786264440, "endTimeSeconds": 1786265640, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786265640, "endTimeSeconds": 1786266840, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786266840, "endTimeSeconds": 1786268040, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786268040, "endTimeSeconds": 1786269240, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786269240, "endTimeSeconds": 1786270440, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786270440, "endTimeSeconds": 1786271640, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786271640, "endTimeSeconds": 1786272840, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786258440, "endTimeSeconds": 1786259640, "municipio.nome": "Mandagua\u00e7u", "sucesso": null}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786259640, "endTimeSeconds": 1786260840, "municipio.nome": "Mandagua\u00e7u", "sucesso": null}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786260840, "endTimeSeconds": 1786262040, "municipio.nome": "Mandagua\u00e7u", "sucesso": null}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786262040, "endTimeSeconds": 1786263240, "municipio.nome": "Mandagua\u00e7u", "sucesso": null}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786263240, "endTimeSeconds": 1786264440, "municipio.nome": "Mandagua\u00e7u", "sucesso": null}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786264440, "endTimeSeconds": 1786265640, "municipio.nome": "Mandagua\u00e7u", "sucesso": null}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786265640, "endTimeSeconds": 1786266840, "municipio.nome": "Mandagua\u00e7u", "sucesso": null}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786266840, "endTimeSeconds": 1786268040, "municipio.nome": "Mandagua\u00e7u", "sucesso": null}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786268040, "endTimeSeconds": 1786269240, "municipio.nome": "Mandagua\u00e7u", "sucesso": null}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786269240, "endTimeSeconds": 1786270440, "municipio.nome": "Mandagua\u00e7u", "sucesso": null}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786270440, "endTimeSeconds": 1786271640, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786271640, "endTimeSeconds": 1786272840, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Farroupilha", "beginTimeSeconds": 1786258440, "endTimeSeconds": 1786259640, "municipio.nome": "Farroupilha", "sucesso": null}, {"facet": "Farroupilha", "beginTimeSeconds": 1786259640, "endTimeSeconds": 1786260840, "municipio.nome": "Farroupilha", "sucesso": null}, {"facet": "Farroupilha", "beginTimeSeconds": 1786260840, "endTimeSeconds": 1786262040, "municipio.nome": "Farroupilha", "sucesso": null}, {"facet": "Farroupilha", "beginTimeSeconds": 1786262040, "endTimeSeconds": 1786263240, "municipio.nome": "Farroupilha", "sucesso": null}, {"facet": "Farroupilha", "beginTimeSeconds": 1786263240, "endTimeSeconds": 1786264440, "municipio.nome": "Farroupilha", "sucesso": null}, {"facet": "Farroupilha", "beginTimeSeconds": 1786264440, "endTimeSeconds": 1786265640, "municipio.nome": "Farroupilha", "sucesso": null}, {"facet": "Farroupilha", "beginTimeSeconds": 1786265640, "endTimeSeconds": 1786266840, "municipio.nome": "Farroupilha", "sucesso": null}, {"facet": "Farroupilha", "beginTimeSeconds": 1786266840, "endTimeSeconds": 1786268040, "municipio.nome": "Farroupilha", "sucesso": null}, {"facet": "Farroupilha", "beginTimeSeconds": 1786268040, "endTimeSeconds": 1786269240, "municipio.nome": "Farroupilha", "sucesso": null}, {"facet": "Farroupilha", "beginTimeSeconds": 1786269240, "endTimeSeconds": 1786270440, "municipio.nome": "Farroupilha", "sucesso": null}, {"facet": "Farroupilha", "beginTimeSeconds": 1786270440, "endTimeSeconds": 1786271640, "municipio.nome": "Farroupilha", "sucesso": 100.0}, {"facet": "Farroupilha", "beginTimeSeconds": 1786271640, "endTimeSeconds": 1786272840, "municipio.nome": "Farroupilha", "sucesso": 100.0}, {"facet": "Caldas Novas", "beginTimeSeconds": 1786258440, "endTimeSeconds": 1786259640, "municipio.nome": "Caldas Novas", "sucesso": null}, {"facet": "Caldas Novas", "beginTimeSeconds": 1786259640, "endTimeSeconds": 1786260840, "municipio.nome": "Caldas Novas", "sucesso": null}, {"facet": "Caldas Novas", "beginTimeSeconds": 1786260840, "endTimeSeconds": 1786262040, "municipio.nome": "Caldas Novas", "sucesso": null}, {"facet": "Caldas Novas", "beginTimeSeconds": 1786262040, "endTimeSeconds": 1786263240, "municipio.nome": "Caldas Novas", "sucesso": null}, {"facet": "Caldas Novas", "beginTimeSeconds": 1786263240, "endTimeSeconds": 1786264440, "municipio.nome": "Caldas Novas", "sucesso": null}, {"facet": "Caldas Novas", "beginTimeSeconds": 1786264440, "endTimeSeconds": 1786265640, "municipio.nome": "Caldas Novas", "sucesso": null}, {"facet": "Caldas Novas", "beginTimeSeconds": 1786265640, "endTimeSeconds": 1786266840, "municipio.nome": "Caldas Novas", "sucesso": null}, {"facet": "Caldas Novas", "beginTimeSeconds": 1786266840, "endTimeSeconds": 1786268040, "municipio.nome": "Caldas Novas", "sucesso": null}, {"facet": "Caldas Novas", "beginTimeSeconds": 1786268040, "endTimeSeconds": 1786269240, "municipio.nome": "Caldas Novas", "sucesso": null}, {"facet": "Caldas Novas", "beginTimeSeconds": 1786269240, "endTimeSeconds": 1786270440, "municipio.nome": "Caldas Novas", "sucesso": null}, {"facet": "Caldas Novas", "beginTimeSeconds": 1786270440, "endTimeSeconds": 1786271640, "municipio.nome": "Caldas Novas", "sucesso": 100.0}, {"facet": "Caldas Novas", "beginTimeSeconds": 1786271640, "endTimeSeconds": 1786272840, "municipio.nome": "Caldas Novas", "sucesso": 100.0}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786258440, "endTimeSeconds": 1786259640, "municipio.nome": "Gua\u00edra", "sucesso": null}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786259640, "endTimeSeconds": 1786260840, "municipio.nome": "Gua\u00edra", "sucesso": null}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786260840, "endTimeSeconds": 1786262040, "municipio.nome": "Gua\u00edra", "sucesso": null}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786262040, "endTimeSeconds": 1786263240, "municipio.nome": "Gua\u00edra", "sucesso": null}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786263240, "endTimeSeconds": 1786264440, "municipio.nome": "Gua\u00edra", "sucesso": null}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786264440, "endTimeSeconds": 1786265640, "municipio.nome": "Gua\u00edra", "sucesso": null}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786265640, "endTimeSeconds": 1786266840, "municipio.nome": "Gua\u00edra", "sucesso": null}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786266840, "endTimeSeconds": 1786268040, "municipio.nome": "Gua\u00edra", "sucesso": null}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786268040, "endTimeSeconds": 1786269240, "municipio.nome": "Gua\u00edra", "sucesso": null}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786269240, "endTimeSeconds": 1786270440, "municipio.nome": "Gua\u00edra", "sucesso": null}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786270440, "endTimeSeconds": 1786271640, "municipio.nome": "Gua\u00edra", "sucesso": 100.0}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786271640, "endTimeSeconds": 1786272840, "municipio.nome": "Gua\u00edra", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786258440, "endTimeSeconds": 1786259640, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786259640, "endTimeSeconds": 1786260840, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786260840, "endTimeSeconds": 1786262040, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786262040, "endTimeSeconds": 1786263240, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786263240, "endTimeSeconds": 1786264440, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786264440, "endTimeSeconds": 1786265640, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786265640, "endTimeSeconds": 1786266840, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786266840, "endTimeSeconds": 1786268040, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786268040, "endTimeSeconds": 1786269240, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786269240, "endTimeSeconds": 1786270440, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786270440, "endTimeSeconds": 1786271640, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786271640, "endTimeSeconds": 1786272840, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Amparo", "beginTimeSeconds": 1786258440, "endTimeSeconds": 1786259640, "municipio.nome": "Amparo", "sucesso": null}, {"facet": "Amparo", "beginTimeSeconds": 1786259640, "endTimeSeconds": 1786260840, "municipio.nome": "Amparo", "sucesso": null}, {"facet": "Amparo", "beginTimeSeconds": 1786260840, "endTimeSeconds": 1786262040, "municipio.nome": "Amparo", "sucesso": null}, {"facet": "Amparo", "beginTimeSeconds": 1786262040, "endTimeSeconds": 1786263240, "municipio.nome": "Amparo", "sucesso": null}, {"facet": "Amparo", "beginTimeSeconds": 1786263240, "endTimeSeconds": 1786264440, "municipio.nome": "Amparo", "sucesso": null}, {"facet": "Amparo", "beginTimeSeconds": 1786264440, "endTimeSeconds": 1786265640, "municipio.nome": "Amparo", "sucesso": null}, {"facet": "Amparo", "beginTimeSeconds": 1786265640, "endTimeSeconds": 1786266840, "municipio.nome": "Amparo", "sucesso": null}, {"facet": "Amparo", "beginTimeSeconds": 1786266840, "endTimeSeconds": 1786268040, "municipio.nome": "Amparo", "sucesso": null}, {"facet": "Amparo", "beginTimeSeconds": 1786268040, "endTimeSeconds": 1786269240, "municipio.nome": "Amparo", "sucesso": null}, {"facet": "Amparo", "beginTimeSeconds": 1786269240, "endTimeSeconds": 1786270440, "municipio.nome": "Amparo", "sucesso": null}, {"facet": "Amparo", "beginTimeSeconds": 1786270440, "endTimeSeconds": 1786271640, "municipio.nome": "Amparo", "sucesso": 100.0}, {"facet": "Amparo", "beginTimeSeconds": 1786271640, "endTimeSeconds": 1786272840, "municipio.nome": "Amparo", "sucesso": 100.0}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1786258440, "endTimeSeconds": 1786259640, "municipio.nome": "Barra do Pira\u00ed", "sucesso": null}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1786259640, "endTimeSeconds": 1786260840, "municipio.nome": "Barra do Pira\u00ed", "sucesso": null}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1786260840, "endTimeSeconds": 1786262040, "municipio.nome": "Barra do Pira\u00ed", "sucesso": null}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1786262040, "endTimeSeconds": 1786263240, "municipio.nome": "Barra do Pira\u00ed", "sucesso": null}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1786263240, "endTimeSeconds": 1786264440, "municipio.nome": "Barra do Pira\u00ed", "sucesso": null}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1786264440, "endTimeSeconds": 1786265640, "municipio.nome": "Barra do Pira\u00ed", "sucesso": null}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1786265640, "endTimeSeconds": 1786266840, "municipio.nome": "Barra do Pira\u00ed", "sucesso": null}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1786266840, "endTimeSeconds": 1786268040, "municipio.nome": "Barra do Pira\u00ed", "sucesso": null}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1786268040, "endTimeSeconds": 1786269240, "municipio.nome": "Barra do Pira\u00ed", "sucesso": null}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1786269240, "endTimeSeconds": 1786270440, "municipio.nome": "Barra do Pira\u00ed", "sucesso": null}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1786270440, "endTimeSeconds": 1786271640, "municipio.nome": "Barra do Pira\u00ed", "sucesso": 100.0}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1786271640, "endTimeSeconds": 1786272840, "municipio.nome": "Barra do Pira\u00ed", "sucesso": 100.0}, {"facet": "Siqueira Campos", "beginTimeSeconds": 1786258440, "endTimeSeconds": 1786259640, "municipio.nome": "Siqueira Campos", "sucesso": null}, {"facet": "Siqueira Campos", "beginTimeSeconds": 1786259640, "endTimeSeconds": 1786260840, "municipio.nome": "Siqueira Campos", "sucesso": null}, {"facet": "Siqueira Campos", "beginTimeSeconds": 1786260840, "endTimeSeconds": 1786262040, "municipio.nome": "Siqueira Campos", "sucesso": null}, {"facet": "Siqueira Campos", "beginTimeSeconds": 1786262040, "endTimeSeconds": 1786263240, "municipio.nome": "Siqueira Campos", "sucesso": null}, {"facet": "Siqueira Campos", "beginTimeSeconds": 1786263240, "endTimeSeconds": 1786264440, "municipio.nome": "Siqueira Campos", "sucesso": null}, {"facet": "Siqueira Campos", "beginTimeSeconds": 1786264440, "endTimeSeconds": 1786265640, "municipio.nome": "Siqueira Campos", "sucesso": null}, {"facet": "Siqueira Campos", "beginTimeSeconds": 1786265640, "endTimeSeconds": 1786266840, "municipio.nome": "Siqueira Campos", "sucesso": null}, {"facet": "Siqueira Campos", "beginTimeSeconds": 1786266840, "endTimeSeconds": 1786268040, "municipio.nome": "Siqueira Campos", "sucesso": null}, {"facet": "Siqueira Campos", "beginTimeSeconds": 1786268040, "endTimeSeconds": 1786269240, "municipio.nome": "Siqueira Campos", "sucesso": null}, {"facet": "Siqueira Campos", "beginTimeSeconds": 1786269240, "endTimeSeconds": 1786270440, "municipio.nome": "Siqueira Campos", "sucesso": null}, {"facet": "Siqueira Campos", "beginTimeSeconds": 1786270440, "endTimeSeconds": 1786271640, "municipio.nome": "Siqueira Campos", "sucesso": 100.0}, {"facet": "Siqueira Campos", "beginTimeSeconds": 1786271640, "endTimeSeconds": 1786272840, "municipio.nome": "Siqueira Campos", "sucesso": 100.0}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1786258440, "endTimeSeconds": 1786259640, "municipio.nome": "Cambu\u00ed", "sucesso": null}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1786259640, "endTimeSeconds": 1786260840, "municipio.nome": "Cambu\u00ed", "sucesso": null}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1786260840, "endTimeSeconds": 1786262040, "municipio.nome": "Cambu\u00ed", "sucesso": null}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1786262040, "endTimeSeconds": 1786263240, "municipio.nome": "Cambu\u00ed", "sucesso": null}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1786263240, "endTimeSeconds": 1786264440, "municipio.nome": "Cambu\u00ed", "sucesso": null}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1786264440, "endTimeSeconds": 1786265640, "municipio.nome": "Cambu\u00ed", "sucesso": null}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1786265640, "endTimeSeconds": 1786266840, "municipio.nome": "Cambu\u00ed", "sucesso": null}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1786266840, "endTimeSeconds": 1786268040, "municipio.nome": "Cambu\u00ed", "sucesso": null}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1786268040, "endTimeSeconds": 1786269240, "municipio.nome": "Cambu\u00ed", "sucesso": null}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1786269240, "endTimeSeconds": 1786270440, "municipio.nome": "Cambu\u00ed", "sucesso": null}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1786270440, "endTimeSeconds": 1786271640, "municipio.nome": "Cambu\u00ed", "sucesso": null}, {"facet": "Cambu\u00ed", "beginTimeSeconds": 1786271640, "endTimeSeconds": 1786272840, "municipio.nome": "Cambu\u00ed", "sucesso": 100.0}]
};
