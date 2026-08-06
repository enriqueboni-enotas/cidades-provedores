// Gerado automaticamente pelo workflow monitoramento-nfe.yml em 06/08/2026 11:12 (Brasilia)
// NAO EDITAR MANUALMENTE
var monitoramentoNfeData = {
  geradoEm: "06/08/2026 11:12",
  travadasPorMunicipio: [
  {
    "facet": "EXTERIOR",
    "latest.nfe.stuck_in_intermediate_status.count": 4,
    "nfe.municipio_servico": "EXTERIOR"
  },
  {
    "facet": "Corbélia",
    "latest.nfe.stuck_in_intermediate_status.count": 3,
    "nfe.municipio_servico": "Corbélia"
  },
  {
    "facet": "Esmeraldas",
    "latest.nfe.stuck_in_intermediate_status.count": 3,
    "nfe.municipio_servico": "Esmeraldas"
  },
  {
    "facet": "Urupá",
    "latest.nfe.stuck_in_intermediate_status.count": 2,
    "nfe.municipio_servico": "Urupá"
  },
  {
    "facet": "Itapipoca",
    "latest.nfe.stuck_in_intermediate_status.count": 2,
    "nfe.municipio_servico": "Itapipoca"
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
    "facet": "Ilhéus",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Ilhéus"
  },
  {
    "facet": "Santos",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Santos"
  },
  {
    "facet": "São Paulo",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "São Paulo"
  },
  {
    "facet": "Itumbiara",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Itumbiara"
  }
],
  tempoMaxProcessamento: [
  {
    "facet": "São Paulo",
    "max.nfe.processing_time.minutes": 37,
    "nfe.municipio_servico": "São Paulo"
  },
  {
    "facet": "Sobral",
    "max.nfe.processing_time.minutes": 24,
    "nfe.municipio_servico": "Sobral"
  },
  {
    "facet": "São Carlos",
    "max.nfe.processing_time.minutes": 22,
    "nfe.municipio_servico": "São Carlos"
  },
  {
    "facet": "Varginha",
    "max.nfe.processing_time.minutes": 20,
    "nfe.municipio_servico": "Varginha"
  },
  {
    "facet": "Fortaleza",
    "max.nfe.processing_time.minutes": 19,
    "nfe.municipio_servico": "Fortaleza"
  },
  {
    "facet": "Jaraguá do Sul",
    "max.nfe.processing_time.minutes": 19,
    "nfe.municipio_servico": "Jaraguá do Sul"
  },
  {
    "facet": "Taboão da Serra",
    "max.nfe.processing_time.minutes": 15,
    "nfe.municipio_servico": "Taboão da Serra"
  },
  {
    "facet": "Barueri",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "Barueri"
  },
  {
    "facet": "Caetité",
    "max.nfe.processing_time.minutes": 9,
    "nfe.municipio_servico": "Caetité"
  },
  {
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 8,
    "nfe.municipio_servico": "Caraguatatuba"
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
    "average.nfe.processing_time.minutes": 8.470817120622568,
    "facet": "Cancelada",
    "nfe.status": "Cancelada"
  },
  {
    "average.nfe.processing_time.minutes": 0.7158160987948222,
    "facet": "Negada",
    "nfe.status": "Negada"
  },
  {
    "average.nfe.processing_time.minutes": 0.6783014978700014,
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
    "max_min": 37,
    "media_min": 8.470817120622568,
    "p95_min": {
      "95": 22.25
    }
  },
  {
    "facet": [
      "Negada",
      "EmProcessoDeAutorizacao"
    ],
    "max_min": 15,
    "media_min": 0.7158160987948222,
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
    "media_min": 0.6783014978700014,
    "p95_min": {
      "95": 3.015625
    }
  }
],
  perfMunicipio: [
  {
    "average.nfe.processing_time.minutes": 24,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Sobral",
    "max.nfe.processing_time.minutes": 24,
    "nfe.municipio_servico": "Sobral",
    "percentile.nfe.processing_time.minutes": {
      "95": 24
    }
  },
  {
    "average.nfe.processing_time.minutes": 7.183333333333334,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 8,
    "nfe.municipio_servico": "Caraguatatuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 8
    }
  },
  {
    "average.nfe.processing_time.minutes": 7,
    "count.nfe.processing_time.minutes": 32,
    "facet": "Agudos",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "Agudos",
    "percentile.nfe.processing_time.minutes": {
      "95": 7
    }
  },
  {
    "average.nfe.processing_time.minutes": 7,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Barão de Cocais",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "Barão de Cocais",
    "percentile.nfe.processing_time.minutes": {
      "95": 7
    }
  },
  {
    "average.nfe.processing_time.minutes": 5.466666666666667,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Jaraguá do Sul",
    "max.nfe.processing_time.minutes": 19,
    "nfe.municipio_servico": "Jaraguá do Sul",
    "percentile.nfe.processing_time.minutes": {
      "95": 19
    }
  },
  {
    "average.nfe.processing_time.minutes": 5.246753246753247,
    "count.nfe.processing_time.minutes": 77,
    "facet": "São Carlos",
    "max.nfe.processing_time.minutes": 22,
    "nfe.municipio_servico": "São Carlos",
    "percentile.nfe.processing_time.minutes": {
      "95": 22
    }
  },
  {
    "average.nfe.processing_time.minutes": 4.927777777777778,
    "count.nfe.processing_time.minutes": 180,
    "facet": "São Paulo",
    "max.nfe.processing_time.minutes": 37,
    "nfe.municipio_servico": "São Paulo",
    "percentile.nfe.processing_time.minutes": {
      "95": 37
    }
  },
  {
    "average.nfe.processing_time.minutes": 4.6,
    "count.nfe.processing_time.minutes": 180,
    "facet": "Fortaleza",
    "max.nfe.processing_time.minutes": 19,
    "nfe.municipio_servico": "Fortaleza",
    "percentile.nfe.processing_time.minutes": {
      "95": 11.0625
    }
  },
  {
    "average.nfe.processing_time.minutes": 4.2,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Tietê",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Tietê",
    "percentile.nfe.processing_time.minutes": {
      "95": 6
    }
  },
  {
    "average.nfe.processing_time.minutes": 4,
    "count.nfe.processing_time.minutes": 37,
    "facet": "Pirassununga",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Pirassununga",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 4,
    "count.nfe.processing_time.minutes": 37,
    "facet": "Caçapava",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Caçapava",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.316666666666667,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Itajubá",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Itajubá",
    "percentile.nfe.processing_time.minutes": {
      "95": 6
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.3,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Joinville",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Joinville",
    "percentile.nfe.processing_time.minutes": {
      "95": 6
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.1416666666666666,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Novo Hamburgo",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "Novo Hamburgo",
    "percentile.nfe.processing_time.minutes": {
      "95": 7
    }
  },
  {
    "average.nfe.processing_time.minutes": 3,
    "count.nfe.processing_time.minutes": 37,
    "facet": "Três de Maio",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Três de Maio",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.8378378378378377,
    "count.nfe.processing_time.minutes": 37,
    "facet": "Patos de Minas",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Patos de Minas",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.716666666666667,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Dourados",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Dourados",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.466666666666667,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Colatina",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Colatina",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.466666666666667,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Rio Grande",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Rio Grande",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Nova Iguaçu",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Nova Iguaçu",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.958762886597938,
    "count.nfe.processing_time.minutes": 97,
    "facet": "Santos",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Santos",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.9333333333333333,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Londrina",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Londrina",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.8666666666666667,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Ribeirão Preto",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Ribeirão Preto",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.85,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Mogi das Cruzes",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Mogi das Cruzes",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.8235294117647058,
    "count.nfe.processing_time.minutes": 102,
    "facet": "Taubaté",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Taubaté",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.75,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Salvador",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Salvador",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.6623376623376624,
    "count.nfe.processing_time.minutes": 77,
    "facet": "Santa Maria",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Santa Maria",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.6083333333333334,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Itu",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Itu",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.55,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Imbituba",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Imbituba",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.2996389891696751,
    "count.nfe.processing_time.minutes": 277,
    "facet": "Barueri",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "Barueri",
    "percentile.nfe.processing_time.minutes": {
      "95": 5.03125
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.2833333333333334,
    "count.nfe.processing_time.minutes": 60,
    "facet": "João Monlevade",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "João Monlevade",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.2833333333333334,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Nao informado",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Nao informado",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.2702702702702702,
    "count.nfe.processing_time.minutes": 37,
    "facet": "Colombo",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Colombo",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.2666666666666666,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Varginha",
    "max.nfe.processing_time.minutes": 20,
    "nfe.municipio_servico": "Varginha",
    "percentile.nfe.processing_time.minutes": {
      "95": 1.0078125
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.1916666666666667,
    "count.nfe.processing_time.minutes": 120,
    "facet": "São José do Rio Preto",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "São José do Rio Preto",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.1416666666666666,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Curitiba",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Curitiba",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.025,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Barra do Piraí",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Barra do Piraí",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "San Jose",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "San Jose",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Caldas Novas",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Caldas Novas",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Ariquemes",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Ariquemes",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "North York",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "North York",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Jaguariúna",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Jaguariúna",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Philadelphia",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Philadelphia",
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
    "facet": "Itapecerica",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Itapecerica",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Jundiaí",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Jundiaí",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
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
    "facet": "Rio Verde",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Rio Verde",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  }
],
  empresasMunicipio: [
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
    "facet": "Seropédica",
    "nfe.municipio_servico": "Seropédica",
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
    "facet": "Santos",
    "nfe.municipio_servico": "Santos",
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
    "facet": "Itumbiara",
    "nfe.municipio_servico": "Itumbiara",
    "uniqueCount.empresa.razao_social": 1
  }
],
  statsGlobais: [
  {
    "average.nfe.processing_time.minutes": 0.7830206204718558,
    "max.nfe.processing_time.minutes": 37,
    "percentile.nfe.processing_time.minutes": {
      "50": 0,
      "90": 1.015625,
      "95": 4.0625,
      "99": 8.125
    }
  }
],
  totalEmpresas: [
  {
    "uniqueCount.empresa.razao_social": 11
  }
],
  totalMunicipios: [
  {
    "uniqueCount.nfe.municipio_servico": 296
  }
],
  volumeMunicipio: [
  {
    "count.nfe.processing_time.minutes": 277,
    "facet": "Barueri",
    "nfe.municipio_servico": "Barueri"
  },
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
    "facet": "São Paulo",
    "nfe.municipio_servico": "São Paulo"
  },
  {
    "count.nfe.processing_time.minutes": 180,
    "facet": "Fortaleza",
    "nfe.municipio_servico": "Fortaleza"
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
    "facet": "Barra do Piraí",
    "nfe.municipio_servico": "Barra do Piraí"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Cordeirópolis",
    "nfe.municipio_servico": "Cordeirópolis"
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
    "facet": "Cravinhos",
    "nfe.municipio_servico": "Cravinhos"
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
    "facet": "Praia Grande",
    "nfe.municipio_servico": "Praia Grande"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Serra",
    "nfe.municipio_servico": "Serra"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Goiânia",
    "nfe.municipio_servico": "Goiânia"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Brasília",
    "nfe.municipio_servico": "Brasília"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Montes Claros",
    "nfe.municipio_servico": "Montes Claros"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Mateiros",
    "nfe.municipio_servico": "Mateiros"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Aracaju",
    "nfe.municipio_servico": "Aracaju"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Ribeirão Preto",
    "nfe.municipio_servico": "Ribeirão Preto"
  }
],
  municipioStatus: [
  {
    "facet": [
      "EXTERIOR",
      "Cancelada"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 4
  },
  {
    "facet": [
      "Corbélia",
      "SolicitandoAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 3
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
      "Naviraí",
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
    "empresa.razao_social": "NEILA MARQUES DE FREITAS F LTDA",
    "facet": "NEILA MARQUES DE FREITAS F LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "empresa.razao_social": "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA.",
    "facet": "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA.",
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
      "SolicitandoAutorizacao",
      "Corbélia"
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
      "Naviraí"
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
      "AC CREATOR HUB LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 4
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
      "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA."
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
      "BASTETART EDICOES DE LIVROS E FOTOGRAFIAS LTDA"
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
      "MENTE INTERATIVA"
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
    "canceladas": 690,
    "devolucoes": 6,
    "em_emissao": 6,
    "email": 0,
    "emitidas": 7802,
    "falhas": 1393
  }
],
  volumetriaTimeseries: [
  {
    "beginTimeSeconds": 1785939000,
    "emitidas": 6437,
    "endTimeSeconds": 1785942600,
    "falhas": 760
  },
  {
    "beginTimeSeconds": 1785942600,
    "emitidas": 4994,
    "endTimeSeconds": 1785946200,
    "falhas": 673
  },
  {
    "beginTimeSeconds": 1785946200,
    "emitidas": 2779,
    "endTimeSeconds": 1785949800,
    "falhas": 501
  },
  {
    "beginTimeSeconds": 1785949800,
    "emitidas": 5309,
    "endTimeSeconds": 1785953400,
    "falhas": 658
  },
  {
    "beginTimeSeconds": 1785953400,
    "emitidas": 5582,
    "endTimeSeconds": 1785957000,
    "falhas": 856
  },
  {
    "beginTimeSeconds": 1785957000,
    "emitidas": 4762,
    "endTimeSeconds": 1785960600,
    "falhas": 1423
  },
  {
    "beginTimeSeconds": 1785960600,
    "emitidas": 5504,
    "endTimeSeconds": 1785964200,
    "falhas": 2050
  },
  {
    "beginTimeSeconds": 1785964200,
    "emitidas": 18313,
    "endTimeSeconds": 1785967800,
    "falhas": 483
  },
  {
    "beginTimeSeconds": 1785967800,
    "emitidas": 5254,
    "endTimeSeconds": 1785971400,
    "falhas": 695
  },
  {
    "beginTimeSeconds": 1785971400,
    "emitidas": 5190,
    "endTimeSeconds": 1785975000,
    "falhas": 429
  },
  {
    "beginTimeSeconds": 1785975000,
    "emitidas": 5322,
    "endTimeSeconds": 1785978600,
    "falhas": 1268
  },
  {
    "beginTimeSeconds": 1785978600,
    "emitidas": 13426,
    "endTimeSeconds": 1785982200,
    "falhas": 1341
  },
  {
    "beginTimeSeconds": 1785982200,
    "emitidas": 3367,
    "endTimeSeconds": 1785985800,
    "falhas": 435
  },
  {
    "beginTimeSeconds": 1785985800,
    "emitidas": 7717,
    "endTimeSeconds": 1785989400,
    "falhas": 1983
  },
  {
    "beginTimeSeconds": 1785989400,
    "emitidas": 3583,
    "endTimeSeconds": 1785993000,
    "falhas": 929
  },
  {
    "beginTimeSeconds": 1785993000,
    "emitidas": 899,
    "endTimeSeconds": 1785996600,
    "falhas": 94
  },
  {
    "beginTimeSeconds": 1785996600,
    "emitidas": 1089,
    "endTimeSeconds": 1786000200,
    "falhas": 156
  },
  {
    "beginTimeSeconds": 1786000200,
    "emitidas": 1429,
    "endTimeSeconds": 1786003800,
    "falhas": 176
  },
  {
    "beginTimeSeconds": 1786003800,
    "emitidas": 1311,
    "endTimeSeconds": 1786007400,
    "falhas": 104
  },
  {
    "beginTimeSeconds": 1786007400,
    "emitidas": 1626,
    "endTimeSeconds": 1786011000,
    "falhas": 264
  },
  {
    "beginTimeSeconds": 1786011000,
    "emitidas": 2825,
    "endTimeSeconds": 1786014600,
    "falhas": 407
  },
  {
    "beginTimeSeconds": 1786014600,
    "emitidas": 5760,
    "endTimeSeconds": 1786018200,
    "falhas": 573
  },
  {
    "beginTimeSeconds": 1786018200,
    "emitidas": 7545,
    "endTimeSeconds": 1786021800,
    "falhas": 1612
  },
  {
    "beginTimeSeconds": 1786021800,
    "emitidas": 7964,
    "endTimeSeconds": 1786025400,
    "falhas": 1399
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
    "dead_letter": 48,
    "falhas": 87,
    "ok": 88093
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
    "rejeicao": 26.448468068887735,
    "sucesso": 73.55153193111248
  }
],
  taxaNfe: [
  {
    "rejeicao": 7.226278808422054,
    "sucesso": 92.77372119157785
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
    "facet": "San Jose",
    "municipio.nome": "San Jose",
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
    "facet": "Cachoeirinha",
    "municipio.nome": "Cachoeirinha",
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
    "facet": "North York",
    "municipio.nome": "North York",
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
    "facet": "Canoas",
    "municipio.nome": "Canoas",
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
    "facet": "Camboriú",
    "municipio.nome": "Camboriú",
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
    "facet": "São Gonçalo do Pará",
    "municipio.nome": "São Gonçalo do Pará",
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
    "facet": "Tirana",
    "municipio.nome": "Tirana",
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
    "facet": "Bayonne",
    "municipio.nome": "Bayonne",
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
    "facet": "Catanduva",
    "municipio.nome": "Catanduva",
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
    "facet": "Bogotá D.C",
    "municipio.nome": "Bogotá D.C",
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
    "facet": "shreveport",
    "municipio.nome": "shreveport",
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
    "facet": "Guaíra",
    "municipio.nome": "Guaíra",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
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
    "facet": "Rio Bonito",
    "municipio.nome": "Rio Bonito",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Philadelphia",
    "municipio.nome": "Philadelphia",
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
    "facet": "Jaboticabal",
    "municipio.nome": "Jaboticabal",
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
    "facet": "Miami",
    "municipio.nome": "Miami",
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
    "facet": "Khorfakkan",
    "municipio.nome": "Khorfakkan",
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
    "facet": "Olinda",
    "municipio.nome": "Olinda",
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
    "facet": "Parobé",
    "municipio.nome": "Parobé",
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
    "facet": "Caçapava",
    "municipio.nome": "Caçapava",
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
    "facet": "Nova Andradina",
    "municipio.nome": "Nova Andradina",
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
    "facet": "Santa Cruz das Palmeiras",
    "municipio.nome": "Santa Cruz das Palmeiras",
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
    "facet": "Cochabamba",
    "municipio.nome": "Cochabamba",
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
    "facet": "Hartford",
    "municipio.nome": "Hartford",
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
    "rejeitadas": 1,
    "taxa_rejeicao": 0.392156862745,
    "taxa_sucesso": 99.60784313725489
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 3,
    "taxa_rejeicao": 0.6637168141592,
    "taxa_sucesso": 99.3362831858407
  },
  {
    "facet": "Ibitinga",
    "municipio.nome": "Ibitinga",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.7751937984496,
    "taxa_sucesso": 99.22480620155031
  },
  {
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.8064516129032,
    "taxa_sucesso": 99.1935483870967
  },
  {
    "facet": "Santos",
    "municipio.nome": "Santos",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.098901098901,
    "taxa_sucesso": 98.90109890109889
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 2,
    "taxa_rejeicao": 1.1111111111111,
    "taxa_sucesso": 98.8888888888888
  },
  {
    "facet": "Maringá",
    "municipio.nome": "Maringá",
    "rejeitadas": 3,
    "taxa_rejeicao": 1.2048192771084,
    "taxa_sucesso": 98.7951807228915
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 2,
    "taxa_rejeicao": 1.3333333333333,
    "taxa_sucesso": 98.66666666666659
  },
  {
    "facet": "Salvador",
    "municipio.nome": "Salvador",
    "rejeitadas": 45,
    "taxa_rejeicao": 1.3513513513513,
    "taxa_sucesso": 98.6486486486486
  },
  {
    "facet": "Pinhais",
    "municipio.nome": "Pinhais",
    "rejeitadas": 8,
    "taxa_rejeicao": 1.4869888475836,
    "taxa_sucesso": 98.5130111524163
  },
  {
    "facet": "Varginha",
    "municipio.nome": "Varginha",
    "rejeitadas": 3,
    "taxa_rejeicao": 1.6216216216216,
    "taxa_sucesso": 98.3783783783783
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 12,
    "taxa_rejeicao": 1.883830455259,
    "taxa_sucesso": 98.1161695447409
  },
  {
    "facet": "Campinas",
    "municipio.nome": "Campinas",
    "rejeitadas": 3,
    "taxa_rejeicao": 1.8987341772151,
    "taxa_sucesso": 98.1012658227848
  },
  {
    "facet": "Londrina",
    "municipio.nome": "Londrina",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.6315789473684,
    "taxa_sucesso": 97.3684210526315
  },
  {
    "facet": "Olímpia",
    "municipio.nome": "Olímpia",
    "rejeitadas": 2,
    "taxa_rejeicao": 2.9411764705882,
    "taxa_sucesso": 97.0588235294117
  },
  {
    "facet": "Joinville",
    "municipio.nome": "Joinville",
    "rejeitadas": 2,
    "taxa_rejeicao": 3.125,
    "taxa_sucesso": 96.875
  },
  {
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
    "rejeitadas": 14,
    "taxa_rejeicao": 3.7940379403794,
    "taxa_sucesso": 96.20596205962049
  },
  {
    "facet": "Teresina",
    "municipio.nome": "Teresina",
    "rejeitadas": 5,
    "taxa_rejeicao": 4.2016806722689,
    "taxa_sucesso": 95.79831932773101
  },
  {
    "facet": "São José",
    "municipio.nome": "São José",
    "rejeitadas": 4,
    "taxa_rejeicao": 4.2105263157894,
    "taxa_sucesso": 95.78947368421049
  },
  {
    "facet": "Niterói",
    "municipio.nome": "Niterói",
    "rejeitadas": 1,
    "taxa_rejeicao": 4.3478260869565,
    "taxa_sucesso": 95.6521739130434
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 30,
    "taxa_rejeicao": 4.4378698224852,
    "taxa_sucesso": 95.5621301775147
  },
  {
    "facet": "Caxias do Sul",
    "municipio.nome": "Caxias do Sul",
    "rejeitadas": 1,
    "taxa_rejeicao": 4.5454545454545,
    "taxa_sucesso": 95.45454545454541
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 17,
    "taxa_rejeicao": 4.7619047619047,
    "taxa_sucesso": 95.2380952380952
  },
  {
    "facet": "Ji-Paraná",
    "municipio.nome": "Ji-Paraná",
    "rejeitadas": 1,
    "taxa_rejeicao": 7.6923076923076,
    "taxa_sucesso": 92.3076923076923
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 13,
    "taxa_rejeicao": 7.9268292682926,
    "taxa_sucesso": 92.0731707317073
  },
  {
    "facet": "Taubaté",
    "municipio.nome": "Taubaté",
    "rejeitadas": 2,
    "taxa_rejeicao": 8,
    "taxa_sucesso": 92
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 7,
    "taxa_rejeicao": 8.3333333333333,
    "taxa_sucesso": 91.66666666666659
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 9,
    "taxa_rejeicao": 8.3333333333333,
    "taxa_sucesso": 91.66666666666659
  },
  {
    "facet": "Uberaba",
    "municipio.nome": "Uberaba",
    "rejeitadas": 1,
    "taxa_rejeicao": 8.3333333333333,
    "taxa_sucesso": 91.66666666666659
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 50,
    "taxa_rejeicao": 8.4889643463497,
    "taxa_sucesso": 91.51103565365021
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 650,
    "taxa_rejeicao": 9.0252707581227,
    "taxa_sucesso": 90.9747292418772
  },
  {
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
    "rejeitadas": 2,
    "taxa_rejeicao": 9.090909090909,
    "taxa_sucesso": 90.90909090909089
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 6,
    "taxa_rejeicao": 9.5238095238095,
    "taxa_sucesso": 90.4761904761904
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 215,
    "taxa_rejeicao": 10.233222275107,
    "taxa_sucesso": 89.76677772489289
  },
  {
    "facet": "Pelotas",
    "municipio.nome": "Pelotas",
    "rejeitadas": 4,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "Itajaí",
    "municipio.nome": "Itajaí",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "Chapecó",
    "municipio.nome": "Chapecó",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "Feira de Santana",
    "municipio.nome": "Feira de Santana",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 6,
    "taxa_rejeicao": 11.7647058823529,
    "taxa_sucesso": 88.235294117647
  },
  {
    "facet": "Barra do Piraí",
    "municipio.nome": "Barra do Piraí",
    "rejeitadas": 1,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Bauru",
    "municipio.nome": "Bauru",
    "rejeitadas": 2,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Mateiros",
    "municipio.nome": "Mateiros",
    "rejeitadas": 3,
    "taxa_rejeicao": 13.0434782608695,
    "taxa_sucesso": 86.9565217391304
  },
  {
    "facet": "São Luís",
    "municipio.nome": "São Luís",
    "rejeitadas": 2,
    "taxa_rejeicao": 15.3846153846153,
    "taxa_sucesso": 84.61538461538461
  },
  {
    "facet": "Nova Serrana",
    "municipio.nome": "Nova Serrana",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Parnamirim",
    "municipio.nome": "Parnamirim",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Foz do Iguaçu",
    "municipio.nome": "Foz do Iguaçu",
    "rejeitadas": 2,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Camaçari",
    "municipio.nome": "Camaçari",
    "rejeitadas": 2,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 5,
    "taxa_rejeicao": 19.2307692307692,
    "taxa_sucesso": 80.7692307692307
  },
  {
    "facet": "Natal",
    "municipio.nome": "Natal",
    "rejeitadas": 3,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Não informado",
    "municipio.nome": "Não informado",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Porto Velho",
    "municipio.nome": "Porto Velho",
    "rejeitadas": 2,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Itajubá",
    "municipio.nome": "Itajubá",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Montes Claros",
    "municipio.nome": "Montes Claros",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Itumbiara",
    "municipio.nome": "Itumbiara",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Nao informado",
    "municipio.nome": "Nao informado",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 85,
    "taxa_rejeicao": 20.9876543209876,
    "taxa_sucesso": 79.0123456790123
  },
  {
    "facet": "Suzano",
    "municipio.nome": "Suzano",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Serra",
    "municipio.nome": "Serra",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 11,
    "taxa_rejeicao": 26.1904761904761,
    "taxa_sucesso": 73.80952380952381
  },
  {
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
    "rejeitadas": 2,
    "taxa_rejeicao": 28.5714285714285,
    "taxa_sucesso": 71.4285714285714
  },
  {
    "facet": "Cordeirópolis",
    "municipio.nome": "Cordeirópolis",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.6398243045387,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Lagoa Santa",
    "municipio.nome": "Lagoa Santa",
    "rejeitadas": 2,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Mauá",
    "municipio.nome": "Mauá",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Itapema",
    "municipio.nome": "Itapema",
    "rejeitadas": 3,
    "taxa_rejeicao": 37.5,
    "taxa_sucesso": 62.5
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 10,
    "taxa_rejeicao": 47.6190476190476,
    "taxa_sucesso": 52.3809523809523
  },
  {
    "facet": "Poços de Caldas",
    "municipio.nome": "Poços de Caldas",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Guarapari",
    "municipio.nome": "Guarapari",
    "rejeitadas": 2,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Dumont",
    "municipio.nome": "Dumont",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Atibaia",
    "municipio.nome": "Atibaia",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Manaus",
    "municipio.nome": "Manaus",
    "rejeitadas": 6,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 31,
    "taxa_rejeicao": 50.819672131147506,
    "taxa_sucesso": 49.1803278688524
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 7,
    "taxa_rejeicao": 53.8461538461538,
    "taxa_sucesso": 46.1538461538461
  },
  {
    "facet": "Bragança Paulista",
    "municipio.nome": "Bragança Paulista",
    "rejeitadas": 16,
    "taxa_rejeicao": 57.1428571428571,
    "taxa_sucesso": 42.8571428571428
  },
  {
    "facet": "Presidente Prudente",
    "municipio.nome": "Presidente Prudente",
    "rejeitadas": 8,
    "taxa_rejeicao": 57.1428571428571,
    "taxa_sucesso": 42.8571428571428
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 34,
    "taxa_rejeicao": 59.649122807017505,
    "taxa_sucesso": 40.3508771929824
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 6,
    "taxa_rejeicao": 60,
    "taxa_sucesso": 40
  },
  {
    "facet": "Alto Paraíso de Goiás",
    "municipio.nome": "Alto Paraíso de Goiás",
    "rejeitadas": 10,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 21,
    "taxa_rejeicao": 70,
    "taxa_sucesso": 30
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 311,
    "taxa_rejeicao": 77.75,
    "taxa_sucesso": 22.25
  },
  {
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
    "rejeitadas": 7,
    "taxa_rejeicao": 77.7777777777777,
    "taxa_sucesso": 22.2222222222222
  },
  {
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 8,
    "taxa_rejeicao": 80,
    "taxa_sucesso": 20
  },
  {
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
    "rejeitadas": 9,
    "taxa_rejeicao": 81.8181818181818,
    "taxa_sucesso": 18.1818181818181
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 53,
    "taxa_rejeicao": 84.1269841269841,
    "taxa_sucesso": 15.8730158730158
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 12,
    "taxa_rejeicao": 85.7142857142857,
    "taxa_sucesso": 14.2857142857142
  },
  {
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 170,
    "taxa_rejeicao": 91.3978494623655,
    "taxa_sucesso": 8.6021505376344
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 12,
    "taxa_rejeicao": 92.3076923076923,
    "taxa_sucesso": 7.6923076923076
  },
  {
    "facet": "São Caetano do Sul",
    "municipio.nome": "São Caetano do Sul",
    "rejeitadas": 14,
    "taxa_rejeicao": 93.3333333333333,
    "taxa_sucesso": 6.6666666666666
  },
  {
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
    "rejeitadas": 50,
    "taxa_rejeicao": 94.33962264150941,
    "taxa_sucesso": 5.6603773584905
  },
  {
    "facet": "Franca",
    "municipio.nome": "Franca",
    "rejeitadas": 20,
    "taxa_rejeicao": 95.2380952380952,
    "taxa_sucesso": 4.7619047619047
  },
  {
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
    "rejeitadas": 44,
    "taxa_rejeicao": 95.6521739130434,
    "taxa_sucesso": 4.3478260869565
  },
  {
    "facet": "Dois Irmãos",
    "municipio.nome": "Dois Irmãos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 55,
    "taxa_rejeicao": 59.8214285714285,
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
    "rejeitadas": 3,
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
    "facet": "Cruz Machado",
    "municipio.nome": "Cruz Machado",
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
    "facet": "Arcos",
    "municipio.nome": "Arcos",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Dois Vizinhos",
    "municipio.nome": "Dois Vizinhos",
    "rejeitadas": 2,
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
    "rejeitadas": 9,
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
    "facet": "Póvoa de Santa Iria",
    "municipio.nome": "Póvoa de Santa Iria",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Sacramento",
    "municipio.nome": "Sacramento",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
    "rejeitadas": 4,
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
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Palhoça",
    "municipio.nome": "Palhoça",
    "rejeitadas": 6,
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
    "facet": "Agudos",
    "municipio.nome": "Agudos",
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
    "facet": "Terra Roxa",
    "municipio.nome": "Terra Roxa",
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
    "facet": "Mata de São João",
    "municipio.nome": "Mata de São João",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Belford Roxo",
    "municipio.nome": "Belford Roxo",
    "rejeitadas": 5,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itapeva",
    "municipio.nome": "Itapeva",
    "rejeitadas": 2,
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
    "rejeitadas": 9,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Vicente",
    "municipio.nome": "São Vicente",
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
    "facet": "Ivoti",
    "municipio.nome": "Ivoti",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Eunápolis",
    "municipio.nome": "Eunápolis",
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
    "facet": "Conselheiro Lafaiete",
    "municipio.nome": "Conselheiro Lafaiete",
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
    "facet": "Wattwil",
    "municipio.nome": "Wattwil",
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
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 12,
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
    "facet": "Lauro de Freitas",
    "municipio.nome": "Lauro de Freitas",
    "rejeitadas": 7,
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
    "rejeitadas": 2,
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
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Tietê",
    "municipio.nome": "Tietê",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Petrópolis",
    "municipio.nome": "Petrópolis",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ilhota",
    "municipio.nome": "Ilhota",
    "rejeitadas": 2,
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
    "rejeitadas": 86,
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
    "facet": "Spreitenbach",
    "municipio.nome": "Spreitenbach",
    "rejeitadas": 1,
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
    "facet": "Alegre",
    "municipio.nome": "Alegre",
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
    "facet": "Ijuí",
    "municipio.nome": "Ijuí",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cruz Machado",
    "municipio.nome": "Cruz Machado",
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
    "facet": "Arcos",
    "municipio.nome": "Arcos",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Dois Vizinhos",
    "municipio.nome": "Dois Vizinhos",
    "rejeitadas": 2,
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
    "rejeitadas": 9,
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
    "facet": "Póvoa de Santa Iria",
    "municipio.nome": "Póvoa de Santa Iria",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Sacramento",
    "municipio.nome": "Sacramento",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
    "rejeitadas": 4,
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
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Palhoça",
    "municipio.nome": "Palhoça",
    "rejeitadas": 6,
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
    "facet": "Agudos",
    "municipio.nome": "Agudos",
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
    "facet": "Terra Roxa",
    "municipio.nome": "Terra Roxa",
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
    "facet": "Mata de São João",
    "municipio.nome": "Mata de São João",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Belford Roxo",
    "municipio.nome": "Belford Roxo",
    "rejeitadas": 5,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itapeva",
    "municipio.nome": "Itapeva",
    "rejeitadas": 2,
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
    "rejeitadas": 9,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Vicente",
    "municipio.nome": "São Vicente",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guaíra",
    "municipio.nome": "Guaíra",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
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
    "facet": "Ivoti",
    "municipio.nome": "Ivoti",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Eunápolis",
    "municipio.nome": "Eunápolis",
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
    "facet": "Conselheiro Lafaiete",
    "municipio.nome": "Conselheiro Lafaiete",
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
    "facet": "Wattwil",
    "municipio.nome": "Wattwil",
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
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 12,
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
    "facet": "Lauro de Freitas",
    "municipio.nome": "Lauro de Freitas",
    "rejeitadas": 7,
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
    "rejeitadas": 2,
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
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Tietê",
    "municipio.nome": "Tietê",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Petrópolis",
    "municipio.nome": "Petrópolis",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ilhota",
    "municipio.nome": "Ilhota",
    "rejeitadas": 2,
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
    "rejeitadas": 86,
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
    "facet": "Spreitenbach",
    "municipio.nome": "Spreitenbach",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
    "rejeitadas": 44,
    "taxa_rejeicao": 95.6521739130434,
    "taxa_sucesso": 4.3478260869565
  },
  {
    "facet": "Franca",
    "municipio.nome": "Franca",
    "rejeitadas": 20,
    "taxa_rejeicao": 95.2380952380952,
    "taxa_sucesso": 4.7619047619047
  },
  {
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
    "rejeitadas": 50,
    "taxa_rejeicao": 94.33962264150941,
    "taxa_sucesso": 5.6603773584905
  },
  {
    "facet": "São Caetano do Sul",
    "municipio.nome": "São Caetano do Sul",
    "rejeitadas": 14,
    "taxa_rejeicao": 93.3333333333333,
    "taxa_sucesso": 6.6666666666666
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 12,
    "taxa_rejeicao": 92.3076923076923,
    "taxa_sucesso": 7.6923076923076
  },
  {
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 170,
    "taxa_rejeicao": 91.3978494623655,
    "taxa_sucesso": 8.6021505376344
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 12,
    "taxa_rejeicao": 85.7142857142857,
    "taxa_sucesso": 14.2857142857142
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 53,
    "taxa_rejeicao": 84.1269841269841,
    "taxa_sucesso": 15.8730158730158
  },
  {
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
    "rejeitadas": 9,
    "taxa_rejeicao": 81.8181818181818,
    "taxa_sucesso": 18.1818181818181
  },
  {
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 8,
    "taxa_rejeicao": 80,
    "taxa_sucesso": 20
  },
  {
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
    "rejeitadas": 7,
    "taxa_rejeicao": 77.7777777777777,
    "taxa_sucesso": 22.2222222222222
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 311,
    "taxa_rejeicao": 77.75,
    "taxa_sucesso": 22.25
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 21,
    "taxa_rejeicao": 70,
    "taxa_sucesso": 30
  },
  {
    "facet": "Alto Paraíso de Goiás",
    "municipio.nome": "Alto Paraíso de Goiás",
    "rejeitadas": 10,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 6,
    "taxa_rejeicao": 60,
    "taxa_sucesso": 40
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 55,
    "taxa_rejeicao": 59.8214285714285,
    "taxa_sucesso": 0
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 34,
    "taxa_rejeicao": 59.649122807017505,
    "taxa_sucesso": 40.3508771929824
  },
  {
    "facet": "Bragança Paulista",
    "municipio.nome": "Bragança Paulista",
    "rejeitadas": 16,
    "taxa_rejeicao": 57.1428571428571,
    "taxa_sucesso": 42.8571428571428
  },
  {
    "facet": "Presidente Prudente",
    "municipio.nome": "Presidente Prudente",
    "rejeitadas": 8,
    "taxa_rejeicao": 57.1428571428571,
    "taxa_sucesso": 42.8571428571428
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 7,
    "taxa_rejeicao": 53.8461538461538,
    "taxa_sucesso": 46.1538461538461
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 31,
    "taxa_rejeicao": 50.819672131147506,
    "taxa_sucesso": 49.1803278688524
  },
  {
    "facet": "Poços de Caldas",
    "municipio.nome": "Poços de Caldas",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Guarapari",
    "municipio.nome": "Guarapari",
    "rejeitadas": 2,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Dumont",
    "municipio.nome": "Dumont",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Atibaia",
    "municipio.nome": "Atibaia",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Manaus",
    "municipio.nome": "Manaus",
    "rejeitadas": 6,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 10,
    "taxa_rejeicao": 47.6190476190476,
    "taxa_sucesso": 52.3809523809523
  },
  {
    "facet": "Itapema",
    "municipio.nome": "Itapema",
    "rejeitadas": 3,
    "taxa_rejeicao": 37.5,
    "taxa_sucesso": 62.5
  },
  {
    "facet": "Cordeirópolis",
    "municipio.nome": "Cordeirópolis",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Lagoa Santa",
    "municipio.nome": "Lagoa Santa",
    "rejeitadas": 2,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Mauá",
    "municipio.nome": "Mauá",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
    "rejeitadas": 2,
    "taxa_rejeicao": 28.5714285714285,
    "taxa_sucesso": 71.4285714285714
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 11,
    "taxa_rejeicao": 26.1904761904761,
    "taxa_sucesso": 73.80952380952381
  },
  {
    "facet": "Suzano",
    "municipio.nome": "Suzano",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Serra",
    "municipio.nome": "Serra",
    "rejeitadas": 1,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 85,
    "taxa_rejeicao": 20.9876543209876,
    "taxa_sucesso": 79.0123456790123
  },
  {
    "facet": "Natal",
    "municipio.nome": "Natal",
    "rejeitadas": 3,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Não informado",
    "municipio.nome": "Não informado",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Porto Velho",
    "municipio.nome": "Porto Velho",
    "rejeitadas": 2,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Itajubá",
    "municipio.nome": "Itajubá",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Montes Claros",
    "municipio.nome": "Montes Claros",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Itumbiara",
    "municipio.nome": "Itumbiara",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Nao informado",
    "municipio.nome": "Nao informado",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 5,
    "taxa_rejeicao": 19.2307692307692,
    "taxa_sucesso": 80.7692307692307
  },
  {
    "facet": "Nova Serrana",
    "municipio.nome": "Nova Serrana",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Parnamirim",
    "municipio.nome": "Parnamirim",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Foz do Iguaçu",
    "municipio.nome": "Foz do Iguaçu",
    "rejeitadas": 2,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Camaçari",
    "municipio.nome": "Camaçari",
    "rejeitadas": 2,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "São Luís",
    "municipio.nome": "São Luís",
    "rejeitadas": 2,
    "taxa_rejeicao": 15.3846153846153,
    "taxa_sucesso": 84.61538461538461
  },
  {
    "facet": "Mateiros",
    "municipio.nome": "Mateiros",
    "rejeitadas": 3,
    "taxa_rejeicao": 13.0434782608695,
    "taxa_sucesso": 86.9565217391304
  },
  {
    "facet": "Barra do Piraí",
    "municipio.nome": "Barra do Piraí",
    "rejeitadas": 1,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Bauru",
    "municipio.nome": "Bauru",
    "rejeitadas": 2,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 6,
    "taxa_rejeicao": 11.7647058823529,
    "taxa_sucesso": 88.235294117647
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.6398243045387,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Pelotas",
    "municipio.nome": "Pelotas",
    "rejeitadas": 4,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "Itajaí",
    "municipio.nome": "Itajaí",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "Chapecó",
    "municipio.nome": "Chapecó",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "Feira de Santana",
    "municipio.nome": "Feira de Santana",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 215,
    "taxa_rejeicao": 10.233222275107,
    "taxa_sucesso": 89.76677772489289
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 6,
    "taxa_rejeicao": 9.5238095238095,
    "taxa_sucesso": 90.4761904761904
  },
  {
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
    "rejeitadas": 2,
    "taxa_rejeicao": 9.090909090909,
    "taxa_sucesso": 90.90909090909089
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 650,
    "taxa_rejeicao": 9.0252707581227,
    "taxa_sucesso": 90.9747292418772
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 50,
    "taxa_rejeicao": 8.4889643463497,
    "taxa_sucesso": 91.51103565365021
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 7,
    "taxa_rejeicao": 8.3333333333333,
    "taxa_sucesso": 91.66666666666659
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 9,
    "taxa_rejeicao": 8.3333333333333,
    "taxa_sucesso": 91.66666666666659
  },
  {
    "facet": "Uberaba",
    "municipio.nome": "Uberaba",
    "rejeitadas": 1,
    "taxa_rejeicao": 8.3333333333333,
    "taxa_sucesso": 91.66666666666659
  },
  {
    "facet": "Taubaté",
    "municipio.nome": "Taubaté",
    "rejeitadas": 2,
    "taxa_rejeicao": 8,
    "taxa_sucesso": 92
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 13,
    "taxa_rejeicao": 7.9268292682926,
    "taxa_sucesso": 92.0731707317073
  },
  {
    "facet": "Ji-Paraná",
    "municipio.nome": "Ji-Paraná",
    "rejeitadas": 1,
    "taxa_rejeicao": 7.6923076923076,
    "taxa_sucesso": 92.3076923076923
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 17,
    "taxa_rejeicao": 4.7619047619047,
    "taxa_sucesso": 95.2380952380952
  },
  {
    "facet": "Caxias do Sul",
    "municipio.nome": "Caxias do Sul",
    "rejeitadas": 1,
    "taxa_rejeicao": 4.5454545454545,
    "taxa_sucesso": 95.45454545454541
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 30,
    "taxa_rejeicao": 4.4378698224852,
    "taxa_sucesso": 95.5621301775147
  },
  {
    "facet": "Niterói",
    "municipio.nome": "Niterói",
    "rejeitadas": 1,
    "taxa_rejeicao": 4.3478260869565,
    "taxa_sucesso": 95.6521739130434
  },
  {
    "facet": "São José",
    "municipio.nome": "São José",
    "rejeitadas": 4,
    "taxa_rejeicao": 4.2105263157894,
    "taxa_sucesso": 95.78947368421049
  },
  {
    "facet": "Teresina",
    "municipio.nome": "Teresina",
    "rejeitadas": 5,
    "taxa_rejeicao": 4.2016806722689,
    "taxa_sucesso": 95.79831932773101
  },
  {
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
    "rejeitadas": 14,
    "taxa_rejeicao": 3.7940379403794,
    "taxa_sucesso": 96.20596205962049
  },
  {
    "facet": "Joinville",
    "municipio.nome": "Joinville",
    "rejeitadas": 2,
    "taxa_rejeicao": 3.125,
    "taxa_sucesso": 96.875
  },
  {
    "facet": "Olímpia",
    "municipio.nome": "Olímpia",
    "rejeitadas": 2,
    "taxa_rejeicao": 2.9411764705882,
    "taxa_sucesso": 97.0588235294117
  },
  {
    "facet": "Londrina",
    "municipio.nome": "Londrina",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.6315789473684,
    "taxa_sucesso": 97.3684210526315
  },
  {
    "facet": "Campinas",
    "municipio.nome": "Campinas",
    "rejeitadas": 3,
    "taxa_rejeicao": 1.8987341772151,
    "taxa_sucesso": 98.1012658227848
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 12,
    "taxa_rejeicao": 1.883830455259,
    "taxa_sucesso": 98.1161695447409
  },
  {
    "facet": "Varginha",
    "municipio.nome": "Varginha",
    "rejeitadas": 3,
    "taxa_rejeicao": 1.6216216216216,
    "taxa_sucesso": 98.3783783783783
  },
  {
    "facet": "Pinhais",
    "municipio.nome": "Pinhais",
    "rejeitadas": 8,
    "taxa_rejeicao": 1.4869888475836,
    "taxa_sucesso": 98.5130111524163
  },
  {
    "facet": "Salvador",
    "municipio.nome": "Salvador",
    "rejeitadas": 45,
    "taxa_rejeicao": 1.3513513513513,
    "taxa_sucesso": 98.6486486486486
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 2,
    "taxa_rejeicao": 1.3333333333333,
    "taxa_sucesso": 98.66666666666659
  },
  {
    "facet": "Maringá",
    "municipio.nome": "Maringá",
    "rejeitadas": 3,
    "taxa_rejeicao": 1.2048192771084,
    "taxa_sucesso": 98.7951807228915
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 2,
    "taxa_rejeicao": 1.1111111111111,
    "taxa_sucesso": 98.8888888888888
  },
  {
    "facet": "Santos",
    "municipio.nome": "Santos",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.098901098901,
    "taxa_sucesso": 98.90109890109889
  },
  {
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.8064516129032,
    "taxa_sucesso": 99.1935483870967
  },
  {
    "facet": "Ibitinga",
    "municipio.nome": "Ibitinga",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.7751937984496,
    "taxa_sucesso": 99.22480620155031
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 3,
    "taxa_rejeicao": 0.6637168141592,
    "taxa_sucesso": 99.3362831858407
  },
  {
    "facet": "Nova Lima",
    "municipio.nome": "Nova Lima",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.392156862745,
    "taxa_sucesso": 99.60784313725489
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
    "facet": "San Jose",
    "municipio.nome": "San Jose",
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
    "facet": "Cachoeirinha",
    "municipio.nome": "Cachoeirinha",
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
    "facet": "North York",
    "municipio.nome": "North York",
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
    "facet": "Canoas",
    "municipio.nome": "Canoas",
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
    "facet": "Camboriú",
    "municipio.nome": "Camboriú",
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
    "facet": "São Gonçalo do Pará",
    "municipio.nome": "São Gonçalo do Pará",
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
    "facet": "Tirana",
    "municipio.nome": "Tirana",
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
    "facet": "Bayonne",
    "municipio.nome": "Bayonne",
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
    "facet": "Catanduva",
    "municipio.nome": "Catanduva",
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
    "facet": "Bogotá D.C",
    "municipio.nome": "Bogotá D.C",
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
    "facet": "shreveport",
    "municipio.nome": "shreveport",
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
    "facet": "Rio Bonito",
    "municipio.nome": "Rio Bonito",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Philadelphia",
    "municipio.nome": "Philadelphia",
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
    "facet": "Jaboticabal",
    "municipio.nome": "Jaboticabal",
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
    "facet": "Miami",
    "municipio.nome": "Miami",
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
    "facet": "Khorfakkan",
    "municipio.nome": "Khorfakkan",
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
    "facet": "Olinda",
    "municipio.nome": "Olinda",
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
    "facet": "Parobé",
    "municipio.nome": "Parobé",
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
    "facet": "Caçapava",
    "municipio.nome": "Caçapava",
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
    "facet": "Nova Andradina",
    "municipio.nome": "Nova Andradina",
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
    "facet": "Santa Cruz das Palmeiras",
    "municipio.nome": "Santa Cruz das Palmeiras",
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
    "facet": "Cochabamba",
    "municipio.nome": "Cochabamba",
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
    "facet": "Hartford",
    "municipio.nome": "Hartford",
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
    "beginTimeSeconds": 1786011060,
    "endTimeSeconds": 1786012260,
    "rejeicao": 30.014324530176822,
    "sucesso": 69.9856754698231
  },
  {
    "beginTimeSeconds": 1786012260,
    "endTimeSeconds": 1786013460,
    "rejeicao": 30.125334538091323,
    "sucesso": 69.87466546190862
  },
  {
    "beginTimeSeconds": 1786013460,
    "endTimeSeconds": 1786014660,
    "rejeicao": 28.35510189376743,
    "sucesso": 71.64489810623263
  },
  {
    "beginTimeSeconds": 1786014660,
    "endTimeSeconds": 1786015860,
    "rejeicao": 27.592208983883868,
    "sucesso": 72.40779101611611
  },
  {
    "beginTimeSeconds": 1786015860,
    "endTimeSeconds": 1786017060,
    "rejeicao": 26.918032743952768,
    "sucesso": 73.0819672560472
  },
  {
    "beginTimeSeconds": 1786017060,
    "endTimeSeconds": 1786018260,
    "rejeicao": 26.151554795489194,
    "sucesso": 73.84844520451068
  },
  {
    "beginTimeSeconds": 1786018260,
    "endTimeSeconds": 1786019460,
    "rejeicao": 24.81882705926529,
    "sucesso": 75.18117294073441
  },
  {
    "beginTimeSeconds": 1786019460,
    "endTimeSeconds": 1786020660,
    "rejeicao": 23.86760842608454,
    "sucesso": 76.13239157391534
  },
  {
    "beginTimeSeconds": 1786020660,
    "endTimeSeconds": 1786021860,
    "rejeicao": 24.266424758988805,
    "sucesso": 75.73357524101081
  },
  {
    "beginTimeSeconds": 1786021860,
    "endTimeSeconds": 1786023060,
    "rejeicao": 24.280532792851574,
    "sucesso": 75.7194672071483
  },
  {
    "beginTimeSeconds": 1786023060,
    "endTimeSeconds": 1786024260,
    "rejeicao": 24.387225311539755,
    "sucesso": 75.61277468846025
  },
  {
    "beginTimeSeconds": 1786024260,
    "endTimeSeconds": 1786025460,
    "rejeicao": 24.74493456060436,
    "sucesso": 75.25506543939562
  }
],
  taxaSucessoMunicipioTs: [{"facet": "Barra Mansa", "beginTimeSeconds": 1786011060, "endTimeSeconds": 1786012260, "municipio.nome": "Barra Mansa", "sucesso": null}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786012260, "endTimeSeconds": 1786013460, "municipio.nome": "Barra Mansa", "sucesso": null}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786013460, "endTimeSeconds": 1786014660, "municipio.nome": "Barra Mansa", "sucesso": null}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786014660, "endTimeSeconds": 1786015860, "municipio.nome": "Barra Mansa", "sucesso": null}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786015860, "endTimeSeconds": 1786017060, "municipio.nome": "Barra Mansa", "sucesso": null}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786017060, "endTimeSeconds": 1786018260, "municipio.nome": "Barra Mansa", "sucesso": null}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786018260, "endTimeSeconds": 1786019460, "municipio.nome": "Barra Mansa", "sucesso": null}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786019460, "endTimeSeconds": 1786020660, "municipio.nome": "Barra Mansa", "sucesso": null}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786020660, "endTimeSeconds": 1786021860, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786021860, "endTimeSeconds": 1786023060, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786023060, "endTimeSeconds": 1786024260, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786024260, "endTimeSeconds": 1786025460, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786011060, "endTimeSeconds": 1786012260, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786012260, "endTimeSeconds": 1786013460, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786013460, "endTimeSeconds": 1786014660, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786014660, "endTimeSeconds": 1786015860, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786015860, "endTimeSeconds": 1786017060, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786017060, "endTimeSeconds": 1786018260, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786018260, "endTimeSeconds": 1786019460, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786019460, "endTimeSeconds": 1786020660, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786020660, "endTimeSeconds": 1786021860, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786021860, "endTimeSeconds": 1786023060, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786023060, "endTimeSeconds": 1786024260, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786024260, "endTimeSeconds": 1786025460, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786011060, "endTimeSeconds": 1786012260, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786012260, "endTimeSeconds": 1786013460, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786013460, "endTimeSeconds": 1786014660, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786014660, "endTimeSeconds": 1786015860, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786015860, "endTimeSeconds": 1786017060, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786017060, "endTimeSeconds": 1786018260, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786018260, "endTimeSeconds": 1786019460, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786019460, "endTimeSeconds": 1786020660, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786020660, "endTimeSeconds": 1786021860, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786021860, "endTimeSeconds": 1786023060, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786023060, "endTimeSeconds": 1786024260, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786024260, "endTimeSeconds": 1786025460, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786011060, "endTimeSeconds": 1786012260, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786012260, "endTimeSeconds": 1786013460, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786013460, "endTimeSeconds": 1786014660, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786014660, "endTimeSeconds": 1786015860, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786015860, "endTimeSeconds": 1786017060, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786017060, "endTimeSeconds": 1786018260, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786018260, "endTimeSeconds": 1786019460, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786019460, "endTimeSeconds": 1786020660, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786020660, "endTimeSeconds": 1786021860, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786021860, "endTimeSeconds": 1786023060, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786023060, "endTimeSeconds": 1786024260, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786024260, "endTimeSeconds": 1786025460, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1786011060, "endTimeSeconds": 1786012260, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1786012260, "endTimeSeconds": 1786013460, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1786013460, "endTimeSeconds": 1786014660, "municipio.nome": "Ipir\u00e1", "sucesso": 100.0}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1786014660, "endTimeSeconds": 1786015860, "municipio.nome": "Ipir\u00e1", "sucesso": null}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1786015860, "endTimeSeconds": 1786017060, "municipio.nome": "Ipir\u00e1", "sucesso": null}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1786017060, "endTimeSeconds": 1786018260, "municipio.nome": "Ipir\u00e1", "sucesso": null}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1786018260, "endTimeSeconds": 1786019460, "municipio.nome": "Ipir\u00e1", "sucesso": null}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1786019460, "endTimeSeconds": 1786020660, "municipio.nome": "Ipir\u00e1", "sucesso": null}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1786020660, "endTimeSeconds": 1786021860, "municipio.nome": "Ipir\u00e1", "sucesso": null}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1786021860, "endTimeSeconds": 1786023060, "municipio.nome": "Ipir\u00e1", "sucesso": null}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1786023060, "endTimeSeconds": 1786024260, "municipio.nome": "Ipir\u00e1", "sucesso": null}, {"facet": "Ipir\u00e1", "beginTimeSeconds": 1786024260, "endTimeSeconds": 1786025460, "municipio.nome": "Ipir\u00e1", "sucesso": null}, {"facet": "Palmas", "beginTimeSeconds": 1786011060, "endTimeSeconds": 1786012260, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786012260, "endTimeSeconds": 1786013460, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786013460, "endTimeSeconds": 1786014660, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786014660, "endTimeSeconds": 1786015860, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786015860, "endTimeSeconds": 1786017060, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786017060, "endTimeSeconds": 1786018260, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786018260, "endTimeSeconds": 1786019460, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786019460, "endTimeSeconds": 1786020660, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786020660, "endTimeSeconds": 1786021860, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786021860, "endTimeSeconds": 1786023060, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786023060, "endTimeSeconds": 1786024260, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Palmas", "beginTimeSeconds": 1786024260, "endTimeSeconds": 1786025460, "municipio.nome": "Palmas", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1786011060, "endTimeSeconds": 1786012260, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1786012260, "endTimeSeconds": 1786013460, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1786013460, "endTimeSeconds": 1786014660, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1786014660, "endTimeSeconds": 1786015860, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1786015860, "endTimeSeconds": 1786017060, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1786017060, "endTimeSeconds": 1786018260, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1786018260, "endTimeSeconds": 1786019460, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1786019460, "endTimeSeconds": 1786020660, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1786020660, "endTimeSeconds": 1786021860, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1786021860, "endTimeSeconds": 1786023060, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1786023060, "endTimeSeconds": 1786024260, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1786024260, "endTimeSeconds": 1786025460, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itaperuna", "beginTimeSeconds": 1786011060, "endTimeSeconds": 1786012260, "municipio.nome": "Itaperuna", "sucesso": 100.0}, {"facet": "Itaperuna", "beginTimeSeconds": 1786012260, "endTimeSeconds": 1786013460, "municipio.nome": "Itaperuna", "sucesso": 100.0}, {"facet": "Itaperuna", "beginTimeSeconds": 1786013460, "endTimeSeconds": 1786014660, "municipio.nome": "Itaperuna", "sucesso": 100.0}, {"facet": "Itaperuna", "beginTimeSeconds": 1786014660, "endTimeSeconds": 1786015860, "municipio.nome": "Itaperuna", "sucesso": null}, {"facet": "Itaperuna", "beginTimeSeconds": 1786015860, "endTimeSeconds": 1786017060, "municipio.nome": "Itaperuna", "sucesso": null}, {"facet": "Itaperuna", "beginTimeSeconds": 1786017060, "endTimeSeconds": 1786018260, "municipio.nome": "Itaperuna", "sucesso": null}, {"facet": "Itaperuna", "beginTimeSeconds": 1786018260, "endTimeSeconds": 1786019460, "municipio.nome": "Itaperuna", "sucesso": null}, {"facet": "Itaperuna", "beginTimeSeconds": 1786019460, "endTimeSeconds": 1786020660, "municipio.nome": "Itaperuna", "sucesso": null}, {"facet": "Itaperuna", "beginTimeSeconds": 1786020660, "endTimeSeconds": 1786021860, "municipio.nome": "Itaperuna", "sucesso": null}, {"facet": "Itaperuna", "beginTimeSeconds": 1786021860, "endTimeSeconds": 1786023060, "municipio.nome": "Itaperuna", "sucesso": null}, {"facet": "Itaperuna", "beginTimeSeconds": 1786023060, "endTimeSeconds": 1786024260, "municipio.nome": "Itaperuna", "sucesso": null}, {"facet": "Itaperuna", "beginTimeSeconds": 1786024260, "endTimeSeconds": 1786025460, "municipio.nome": "Itaperuna", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786011060, "endTimeSeconds": 1786012260, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786012260, "endTimeSeconds": 1786013460, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786013460, "endTimeSeconds": 1786014660, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786014660, "endTimeSeconds": 1786015860, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786015860, "endTimeSeconds": 1786017060, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786017060, "endTimeSeconds": 1786018260, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786018260, "endTimeSeconds": 1786019460, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786019460, "endTimeSeconds": 1786020660, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786020660, "endTimeSeconds": 1786021860, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786021860, "endTimeSeconds": 1786023060, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786023060, "endTimeSeconds": 1786024260, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786024260, "endTimeSeconds": 1786025460, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786011060, "endTimeSeconds": 1786012260, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786012260, "endTimeSeconds": 1786013460, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786013460, "endTimeSeconds": 1786014660, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786014660, "endTimeSeconds": 1786015860, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786015860, "endTimeSeconds": 1786017060, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786017060, "endTimeSeconds": 1786018260, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786018260, "endTimeSeconds": 1786019460, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786019460, "endTimeSeconds": 1786020660, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786020660, "endTimeSeconds": 1786021860, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786021860, "endTimeSeconds": 1786023060, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786023060, "endTimeSeconds": 1786024260, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Sobral", "beginTimeSeconds": 1786024260, "endTimeSeconds": 1786025460, "municipio.nome": "Sobral", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1786011060, "endTimeSeconds": 1786012260, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1786012260, "endTimeSeconds": 1786013460, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1786013460, "endTimeSeconds": 1786014660, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1786014660, "endTimeSeconds": 1786015860, "municipio.nome": "Guapimirim", "sucesso": null}, {"facet": "Guapimirim", "beginTimeSeconds": 1786015860, "endTimeSeconds": 1786017060, "municipio.nome": "Guapimirim", "sucesso": null}, {"facet": "Guapimirim", "beginTimeSeconds": 1786017060, "endTimeSeconds": 1786018260, "municipio.nome": "Guapimirim", "sucesso": null}, {"facet": "Guapimirim", "beginTimeSeconds": 1786018260, "endTimeSeconds": 1786019460, "municipio.nome": "Guapimirim", "sucesso": null}, {"facet": "Guapimirim", "beginTimeSeconds": 1786019460, "endTimeSeconds": 1786020660, "municipio.nome": "Guapimirim", "sucesso": null}, {"facet": "Guapimirim", "beginTimeSeconds": 1786020660, "endTimeSeconds": 1786021860, "municipio.nome": "Guapimirim", "sucesso": null}, {"facet": "Guapimirim", "beginTimeSeconds": 1786021860, "endTimeSeconds": 1786023060, "municipio.nome": "Guapimirim", "sucesso": null}, {"facet": "Guapimirim", "beginTimeSeconds": 1786023060, "endTimeSeconds": 1786024260, "municipio.nome": "Guapimirim", "sucesso": null}, {"facet": "Guapimirim", "beginTimeSeconds": 1786024260, "endTimeSeconds": 1786025460, "municipio.nome": "Guapimirim", "sucesso": null}, {"facet": "Santa Teresa", "beginTimeSeconds": 1786011060, "endTimeSeconds": 1786012260, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1786012260, "endTimeSeconds": 1786013460, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1786013460, "endTimeSeconds": 1786014660, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1786014660, "endTimeSeconds": 1786015860, "municipio.nome": "Santa Teresa", "sucesso": null}, {"facet": "Santa Teresa", "beginTimeSeconds": 1786015860, "endTimeSeconds": 1786017060, "municipio.nome": "Santa Teresa", "sucesso": null}, {"facet": "Santa Teresa", "beginTimeSeconds": 1786017060, "endTimeSeconds": 1786018260, "municipio.nome": "Santa Teresa", "sucesso": null}, {"facet": "Santa Teresa", "beginTimeSeconds": 1786018260, "endTimeSeconds": 1786019460, "municipio.nome": "Santa Teresa", "sucesso": null}, {"facet": "Santa Teresa", "beginTimeSeconds": 1786019460, "endTimeSeconds": 1786020660, "municipio.nome": "Santa Teresa", "sucesso": null}, {"facet": "Santa Teresa", "beginTimeSeconds": 1786020660, "endTimeSeconds": 1786021860, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1786021860, "endTimeSeconds": 1786023060, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1786023060, "endTimeSeconds": 1786024260, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1786024260, "endTimeSeconds": 1786025460, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1786011060, "endTimeSeconds": 1786012260, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": null}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1786012260, "endTimeSeconds": 1786013460, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": null}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1786013460, "endTimeSeconds": 1786014660, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": null}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1786014660, "endTimeSeconds": 1786015860, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": null}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1786015860, "endTimeSeconds": 1786017060, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": 100.0}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1786017060, "endTimeSeconds": 1786018260, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": 100.0}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1786018260, "endTimeSeconds": 1786019460, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": 100.0}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1786019460, "endTimeSeconds": 1786020660, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": 100.0}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1786020660, "endTimeSeconds": 1786021860, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": 100.0}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1786021860, "endTimeSeconds": 1786023060, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": 100.0}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1786023060, "endTimeSeconds": 1786024260, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": 100.0}, {"facet": "S\u00e3o Gon\u00e7alo do Par\u00e1", "beginTimeSeconds": 1786024260, "endTimeSeconds": 1786025460, "municipio.nome": "S\u00e3o Gon\u00e7alo do Par\u00e1", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1786011060, "endTimeSeconds": 1786012260, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1786012260, "endTimeSeconds": 1786013460, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1786013460, "endTimeSeconds": 1786014660, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1786014660, "endTimeSeconds": 1786015860, "municipio.nome": "Olinda", "sucesso": null}, {"facet": "Olinda", "beginTimeSeconds": 1786015860, "endTimeSeconds": 1786017060, "municipio.nome": "Olinda", "sucesso": null}, {"facet": "Olinda", "beginTimeSeconds": 1786017060, "endTimeSeconds": 1786018260, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1786018260, "endTimeSeconds": 1786019460, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1786019460, "endTimeSeconds": 1786020660, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1786020660, "endTimeSeconds": 1786021860, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1786021860, "endTimeSeconds": 1786023060, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1786023060, "endTimeSeconds": 1786024260, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Olinda", "beginTimeSeconds": 1786024260, "endTimeSeconds": 1786025460, "municipio.nome": "Olinda", "sucesso": 100.0}, {"facet": "Itapetininga", "beginTimeSeconds": 1786011060, "endTimeSeconds": 1786012260, "municipio.nome": "Itapetininga", "sucesso": 100.0}, {"facet": "Itapetininga", "beginTimeSeconds": 1786012260, "endTimeSeconds": 1786013460, "municipio.nome": "Itapetininga", "sucesso": 100.0}, {"facet": "Itapetininga", "beginTimeSeconds": 1786013460, "endTimeSeconds": 1786014660, "municipio.nome": "Itapetininga", "sucesso": 100.0}, {"facet": "Itapetininga", "beginTimeSeconds": 1786014660, "endTimeSeconds": 1786015860, "municipio.nome": "Itapetininga", "sucesso": null}, {"facet": "Itapetininga", "beginTimeSeconds": 1786015860, "endTimeSeconds": 1786017060, "municipio.nome": "Itapetininga", "sucesso": null}, {"facet": "Itapetininga", "beginTimeSeconds": 1786017060, "endTimeSeconds": 1786018260, "municipio.nome": "Itapetininga", "sucesso": null}, {"facet": "Itapetininga", "beginTimeSeconds": 1786018260, "endTimeSeconds": 1786019460, "municipio.nome": "Itapetininga", "sucesso": null}, {"facet": "Itapetininga", "beginTimeSeconds": 1786019460, "endTimeSeconds": 1786020660, "municipio.nome": "Itapetininga", "sucesso": null}, {"facet": "Itapetininga", "beginTimeSeconds": 1786020660, "endTimeSeconds": 1786021860, "municipio.nome": "Itapetininga", "sucesso": 100.0}, {"facet": "Itapetininga", "beginTimeSeconds": 1786021860, "endTimeSeconds": 1786023060, "municipio.nome": "Itapetininga", "sucesso": 100.0}, {"facet": "Itapetininga", "beginTimeSeconds": 1786023060, "endTimeSeconds": 1786024260, "municipio.nome": "Itapetininga", "sucesso": 100.0}, {"facet": "Itapetininga", "beginTimeSeconds": 1786024260, "endTimeSeconds": 1786025460, "municipio.nome": "Itapetininga", "sucesso": 100.0}]
};
