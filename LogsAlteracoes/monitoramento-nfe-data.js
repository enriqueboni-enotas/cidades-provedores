// Gerado automaticamente pelo workflow monitoramento-nfe.yml em 27/06/2026 20:39 (Brasilia)
// NAO EDITAR MANUALMENTE
var monitoramentoNfeData = {
  geradoEm: "27/06/2026 20:39",
  travadasPorMunicipio: [
  {
    "facet": "Corbélia",
    "latest.nfe.stuck_in_intermediate_status.count": 374,
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
    "facet": "Cidade Ocidental",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Cidade Ocidental"
  },
  {
    "facet": "Brasília",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Brasília"
  },
  {
    "facet": "Naviraí",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Naviraí"
  },
  {
    "facet": "Urussanga",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Urussanga"
  },
  {
    "facet": "Camaçari",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Camaçari"
  },
  {
    "facet": "Eusébio",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Eusébio"
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
    "facet": "Feira de Santana",
    "max.nfe.processing_time.minutes": 27,
    "nfe.municipio_servico": "Feira de Santana"
  },
  {
    "facet": "Aparecida de Goiânia",
    "max.nfe.processing_time.minutes": 20,
    "nfe.municipio_servico": "Aparecida de Goiânia"
  },
  {
    "facet": "Taboão da Serra",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "Taboão da Serra"
  },
  {
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "Caraguatatuba"
  },
  {
    "facet": "Salvador",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "Salvador"
  },
  {
    "facet": "Novo Hamburgo",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Novo Hamburgo"
  },
  {
    "facet": "Andradina",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Andradina"
  },
  {
    "facet": "Linhares",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Linhares"
  },
  {
    "facet": "Botucatu",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Botucatu"
  },
  {
    "facet": "Aracaju",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Aracaju"
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
    "average.nfe.processing_time.minutes": 16,
    "facet": "Cancelada",
    "nfe.status": "Cancelada"
  },
  {
    "average.nfe.processing_time.minutes": 0.7816441931274467,
    "facet": "Negada",
    "nfe.status": "Negada"
  },
  {
    "average.nfe.processing_time.minutes": 0.5003109066036563,
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
    "max_min": 27,
    "media_min": 16,
    "p95_min": {
      "95": 27
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
  },
  {
    "facet": [
      "Negada",
      "EmProcessoDeAutorizacao"
    ],
    "max_min": 10,
    "media_min": 0.7798245614035088,
    "p95_min": {
      "95": 5.03125
    }
  },
  {
    "facet": [
      "Autorizada",
      "AutorizadaAguardandoGeracaoPDF"
    ],
    "max_min": 20,
    "media_min": 0.5003109066036563,
    "p95_min": {
      "95": 1.0078125
    }
  }
],
  perfMunicipio: [
  {
    "average.nfe.processing_time.minutes": 16,
    "count.nfe.processing_time.minutes": 104,
    "facet": "Feira de Santana",
    "max.nfe.processing_time.minutes": 27,
    "nfe.municipio_servico": "Feira de Santana",
    "percentile.nfe.processing_time.minutes": {
      "95": 27
    }
  },
  {
    "average.nfe.processing_time.minutes": 7,
    "count.nfe.processing_time.minutes": 49,
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "Caraguatatuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 7
    }
  },
  {
    "average.nfe.processing_time.minutes": 5.058333333333334,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Aparecida de Goiânia",
    "max.nfe.processing_time.minutes": 20,
    "nfe.municipio_servico": "Aparecida de Goiânia",
    "percentile.nfe.processing_time.minutes": {
      "95": 19.125
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
    "average.nfe.processing_time.minutes": 3.0083333333333333,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Botucatu",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Botucatu",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.9642857142857142,
    "count.nfe.processing_time.minutes": 84,
    "facet": "Novo Hamburgo",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Novo Hamburgo",
    "percentile.nfe.processing_time.minutes": {
      "95": 6
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.875,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Taboão da Serra",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "Taboão da Serra",
    "percentile.nfe.processing_time.minutes": {
      "95": 10
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.6708860759493671,
    "count.nfe.processing_time.minutes": 79,
    "facet": "Linhares",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Linhares",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.5,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Aracaju",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Aracaju",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.404040404040404,
    "count.nfe.processing_time.minutes": 99,
    "facet": "São Pedro da Aldeia",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "São Pedro da Aldeia",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.0833333333333333,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Guarapuava",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Guarapuava",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 34,
    "facet": "Salto",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Salto",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 54,
    "facet": "Newark",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Newark",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Nova Lima",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Nova Lima",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Varginha",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Varginha",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Londrina",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Londrina",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Bragança Paulista",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Bragança Paulista",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 39,
    "facet": "Santa Maria",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Santa Maria",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Goianésia",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Goianésia",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 44,
    "facet": "Cajamar",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Cajamar",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Indaiatuba",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Indaiatuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Registro",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Registro",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Colatina",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Colatina",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 34,
    "facet": "Paranavaí",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Paranavaí",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "São José dos Pinhais",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São José dos Pinhais",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Sete Lagoas",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Sete Lagoas",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Guaporé",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Guaporé",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 49,
    "facet": "São Joaquim da Barra",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São Joaquim da Barra",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 49,
    "facet": "Indaial",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Indaial",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Contagem",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Contagem",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Mendes",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Mendes",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Itatiba",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Itatiba",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Anápolis",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Anápolis",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 34,
    "facet": "Resende",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Resende",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.9666666666666667,
    "count.nfe.processing_time.minutes": 120,
    "facet": "Joinville",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Joinville",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.9333333333333333,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Blumenau",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Blumenau",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.9,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Vila Velha",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Vila Velha",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.9,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Videira",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Videira",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.8620689655172413,
    "count.nfe.processing_time.minutes": 29,
    "facet": "João Pessoa",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "João Pessoa",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.8529411764705882,
    "count.nfe.processing_time.minutes": 34,
    "facet": "Poá",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Poá",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.85,
    "count.nfe.processing_time.minutes": 60,
    "facet": "São Luís",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São Luís",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.85,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Imbituba",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Imbituba",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.8333333333333334,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Santa Cruz do Sul",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Santa Cruz do Sul",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.7971014492753623,
    "count.nfe.processing_time.minutes": 69,
    "facet": "São José do Rio Preto",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São José do Rio Preto",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.7666666666666667,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Mauá",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Mauá",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.75,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Porto Alegre",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Porto Alegre",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.7,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Maceió",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Maceió",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.6833333333333333,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Betim",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Betim",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.6833333333333333,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Não informado",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Não informado",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.6788990825688074,
    "count.nfe.processing_time.minutes": 109,
    "facet": "Ribeirão Preto",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Ribeirão Preto",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  }
],
  empresasMunicipio: [
  {
    "facet": "Brasília",
    "nfe.municipio_servico": "Brasília",
    "uniqueCount.empresa.razao_social": 68
  },
  {
    "facet": "Eusébio",
    "nfe.municipio_servico": "Eusébio",
    "uniqueCount.empresa.razao_social": 5
  },
  {
    "facet": "Cidade Ocidental",
    "nfe.municipio_servico": "Cidade Ocidental",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Naviraí",
    "nfe.municipio_servico": "Naviraí",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Urussanga",
    "nfe.municipio_servico": "Urussanga",
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
    "facet": "Camaçari",
    "nfe.municipio_servico": "Camaçari",
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
    "average.nfe.processing_time.minutes": 0.739961759082218,
    "max.nfe.processing_time.minutes": 27,
    "percentile.nfe.processing_time.minutes": {
      "50": 0,
      "90": 1.0078125,
      "95": 2.015625,
      "99": 7.03125
    }
  }
],
  totalEmpresas: [
  {
    "uniqueCount.empresa.razao_social": 83
  }
],
  totalMunicipios: [
  {
    "uniqueCount.nfe.municipio_servico": 159
  }
],
  volumeMunicipio: [
  {
    "count.nfe.processing_time.minutes": 180,
    "facet": "Barueri",
    "nfe.municipio_servico": "Barueri"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "",
    "nfe.municipio_servico": ""
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Taboão da Serra",
    "nfe.municipio_servico": "Taboão da Serra"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "São Bernardo do Campo",
    "nfe.municipio_servico": "São Bernardo do Campo"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Maringá",
    "nfe.municipio_servico": "Maringá"
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
    "facet": "Aracaju",
    "nfe.municipio_servico": "Aracaju"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Aparecida de Goiânia",
    "nfe.municipio_servico": "Aparecida de Goiânia"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "São Paulo",
    "nfe.municipio_servico": "São Paulo"
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
    "facet": "Joinville",
    "nfe.municipio_servico": "Joinville"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Santana de Parnaíba",
    "nfe.municipio_servico": "Santana de Parnaíba"
  },
  {
    "count.nfe.processing_time.minutes": 120,
    "facet": "Recife",
    "nfe.municipio_servico": "Recife"
  },
  {
    "count.nfe.processing_time.minutes": 119,
    "facet": "Cuiabá",
    "nfe.municipio_servico": "Cuiabá"
  },
  {
    "count.nfe.processing_time.minutes": 114,
    "facet": "Praia Grande",
    "nfe.municipio_servico": "Praia Grande"
  },
  {
    "count.nfe.processing_time.minutes": 114,
    "facet": "Salvador",
    "nfe.municipio_servico": "Salvador"
  },
  {
    "count.nfe.processing_time.minutes": 109,
    "facet": "Engenheiro Coelho",
    "nfe.municipio_servico": "Engenheiro Coelho"
  },
  {
    "count.nfe.processing_time.minutes": 109,
    "facet": "Foz do Iguaçu",
    "nfe.municipio_servico": "Foz do Iguaçu"
  },
  {
    "count.nfe.processing_time.minutes": 109,
    "facet": "Ribeirão Preto",
    "nfe.municipio_servico": "Ribeirão Preto"
  },
  {
    "count.nfe.processing_time.minutes": 104,
    "facet": "Feira de Santana",
    "nfe.municipio_servico": "Feira de Santana"
  },
  {
    "count.nfe.processing_time.minutes": 103,
    "facet": "Duque de Caxias",
    "nfe.municipio_servico": "Duque de Caxias"
  },
  {
    "count.nfe.processing_time.minutes": 99,
    "facet": "Rio de Janeiro",
    "nfe.municipio_servico": "Rio de Janeiro"
  },
  {
    "count.nfe.processing_time.minutes": 99,
    "facet": "São Pedro",
    "nfe.municipio_servico": "São Pedro"
  },
  {
    "count.nfe.processing_time.minutes": 99,
    "facet": "Serra",
    "nfe.municipio_servico": "Serra"
  },
  {
    "count.nfe.processing_time.minutes": 99,
    "facet": "São Pedro da Aldeia",
    "nfe.municipio_servico": "São Pedro da Aldeia"
  },
  {
    "count.nfe.processing_time.minutes": 94,
    "facet": "Rio Bonito",
    "nfe.municipio_servico": "Rio Bonito"
  }
],
  municipioStatus: [
  {
    "facet": [
      "Corbélia",
      "SolicitandoAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 374
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
      "Brasília",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Camaçari",
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
      "Cidade Ocidental",
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
      "Tuparendi",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Urussanga",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  topEmpresasTravadas: [
  {
    "empresa.razao_social": "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA.",
    "facet": "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA.",
    "latest.nfe.stuck_in_intermediate_status.count": 373
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
    "empresa.razao_social": "NEILA MARQUES DE FREITAS F LTDA",
    "facet": "NEILA MARQUES DE FREITAS F LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "empresa.razao_social": "VULGO SOLUCOES CRIATIVAS LTDA",
    "facet": "VULGO SOLUCOES CRIATIVAS LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "PSI ONLINE CURSO DE PSICOLOGIA LTDA",
    "facet": "PSI ONLINE CURSO DE PSICOLOGIA LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "NEXUS EDUCACAO LTDA",
    "facet": "NEXUS EDUCACAO LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "INSTITUTO COIMBRA ACADEMY LTDA",
    "facet": "INSTITUTO COIMBRA ACADEMY LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "BASE COMPANY LTDA",
    "facet": "BASE COMPANY LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "READY TO GO EDUCATION MENTORIAS E PRODUTOS DIGITAIS LTDA",
    "facet": "READY TO GO EDUCATION MENTORIAS E PRODUTOS DIGITAIS LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "M. SILVA BARBOSA",
    "facet": "M. SILVA BARBOSA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "LINKAR SERVICOS DE EVENTOS LTDA",
    "facet": "LINKAR SERVICOS DE EVENTOS LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "G. SANCHES DELPINO E G. VIEIRA LINS E SILVA RODRIGUES LTDA",
    "facet": "G. SANCHES DELPINO E G. VIEIRA LINS E SILVA RODRIGUES LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "AWTI TECNOLOGIA E CURSOS",
    "facet": "AWTI TECNOLOGIA E CURSOS",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "EN FRANCE CURSO DE IDIOMA FRANCES SPE LTDA",
    "facet": "EN FRANCE CURSO DE IDIOMA FRANCES SPE LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  travadasPorStatusMunicipio: [
  {
    "facet": [
      "SolicitandoAutorizacao",
      "Corbélia"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 374
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
      "Brasília"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Camaçari"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Cidade Ocidental"
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
      "Tuparendi"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Urussanga"
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
    "latest.nfe.stuck_in_intermediate_status.count": 374
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
      "27.790.442 VINICIUS RIBEIRO NASCIMENTO"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "43.760.146/0001-48 LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "54.744.435 BRUNO ADSON SANTOS SOUTO"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "5I SOLUCOES INTEGRADAS & SERVICOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "ACF CURSOS GERENCIAIS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "AHYA - ESCOLA DE DESENVOLVIMENTO EXPONENCIAL HUMANO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "AKEMI LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "ALASCA S.A."
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "ANQUI CURSOS E CONCURSOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "APPOLLO PUBLICIDADE ONLINE LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "ARGOS ECEME CURSO DE TREINAMENTO PROFISSIONAL LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "ARKO DIGITAL LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "AWTI TECNOLOGIA E CURSOS"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "BASE COMPANY LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "BIGGER MARKETING DIGITAL LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "CESAR AUGUSTO NAGEL SORIANO"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "COMUNIDADE DE APROVADOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "CONECTY PLAY LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "CONFIGR ADMINISTRACAO DE SISTEMAS S.A."
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "CURSOS GUITARRA ONLINE LTDA"
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
      "DEN EDUCACAO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "DJ PRODUTOS EVENTOS E CURSOS ON-LINE LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "DPA CURSOS JURIDICOS"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "DRA BRUNA PITALUGA CURSOS ONLINE E ASSESSORIA MEDICA EIRELI"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "DS CURSOS E TREINAMENTOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "EMBELLA ACADEMY LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "EN FRANCE CURSO DE IDIOMA FRANCES SPE LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "ENGETELES CAPACITACAO PROFISSIONAL E CONSULTORIA LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "EPM ENSINO EDUCACIONAL LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "ESCOLA DE MEGA HAIR LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "ESTUDIO FACUNDO FOTOGRAFIA E FILME LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "FACILIT CURSOS E TREINAMENTOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "FAZENDINHA BSB LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "G. SANCHES DELPINO E G. VIEIRA LINS E SILVA RODRIGUES LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "GRUPO EDEN LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "INST DE ENSINO DR CAIQUE ACADEMY LTDA"
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
      "INSTITUTO DE EDUCACAO ETHIKOS"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "INSTITUTO LED CURSOS ONLINE LTDA"
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
      "KETYLLIN REIS COMERCIO E SERVICOS DE PRODUTOS DIGITAIS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "L. H. S DE SOUZA CURSOS ONLINE"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "LINKAR SERVICOS DE EVENTOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "M. SILVA BARBOSA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "MAIS FOCO MENOS ANSIEDADE INFORMACAO EM SAUDE LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "MARCOS VINICIUS ROSETTI DE SOUSA MM EDUCACAO"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "MATRES GESTAO SOCIAMBIENTAL LTDA"
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
      "MENTORIA RHUAN CONCURSOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "MISSAO POLICIAL- MENTORIA E PLANOS DE ENSINO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "MM CURSOS E TREINAMENTOS EDUCACIONAIS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "MM EDUCACIONAL LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "MOREIRA MARKETING E MIDIAS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "MOVING UP TREINAMENTO E ASSESSORIA DIGITAL LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "NELMA FONTANA CURSOS PARA CONCURSOS E TREINAMENTO LTDA"
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
      "NEXUS EDUCACAO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "NOVO CONCEITO TREINAMENTO E SERVICOS DIGITAIS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "NP TREINAMENTO E DESENVOLVIMENTO DE PESSOAS EIRELI - ME"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "PINHA MENTORIAS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "PRATICA ENFERMAGEM"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "PSI ONLINE CURSO DE PSICOLOGIA LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "RAQUEL MENDES CURSOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "READY TO GO EDUCATION MENTORIAS E PRODUTOS DIGITAIS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "RENATA PELUSO DE OLIVEIRA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "RTG MENTORIAS EDUCATION LTDA"
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
      "SCHNEIDER CONSULTORIA EM GESTAO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "SCIENCE PLAY CURSOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "SIGA PREGAO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "SIMIONI PRODUCAO DIGITAL LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "SIQUEIRA ACADEMY TREINAMENTO PROFISSIONAL LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "TIVIA SOLUCOES INTELIGENTES LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "TOGETHER NOW LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "VENDA DE CURSOS ONLINE OSP 1 LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "VULGO SOLUCOES CRIATIVAS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  volumetriaHora: [
  {
    "canceladas": 0,
    "devolucoes": 2,
    "em_emissao": 241,
    "email": 0,
    "emitidas": 2797,
    "falhas": 374
  }
],
  volumetriaTimeseries: [
  {
    "beginTimeSeconds": 1782516900,
    "emitidas": 5377,
    "endTimeSeconds": 1782520500,
    "falhas": 279
  },
  {
    "beginTimeSeconds": 1782520500,
    "emitidas": 5402,
    "endTimeSeconds": 1782524100,
    "falhas": 222
  },
  {
    "beginTimeSeconds": 1782524100,
    "emitidas": 5088,
    "endTimeSeconds": 1782527700,
    "falhas": 200
  },
  {
    "beginTimeSeconds": 1782527700,
    "emitidas": 3195,
    "endTimeSeconds": 1782531300,
    "falhas": 133
  },
  {
    "beginTimeSeconds": 1782531300,
    "emitidas": 8847,
    "endTimeSeconds": 1782534900,
    "falhas": 655
  },
  {
    "beginTimeSeconds": 1782534900,
    "emitidas": 1949,
    "endTimeSeconds": 1782538500,
    "falhas": 27
  },
  {
    "beginTimeSeconds": 1782538500,
    "emitidas": 1995,
    "endTimeSeconds": 1782542100,
    "falhas": 44
  },
  {
    "beginTimeSeconds": 1782542100,
    "emitidas": 1403,
    "endTimeSeconds": 1782545700,
    "falhas": 25
  },
  {
    "beginTimeSeconds": 1782545700,
    "emitidas": 1591,
    "endTimeSeconds": 1782549300,
    "falhas": 31
  },
  {
    "beginTimeSeconds": 1782549300,
    "emitidas": 1739,
    "endTimeSeconds": 1782552900,
    "falhas": 49
  },
  {
    "beginTimeSeconds": 1782552900,
    "emitidas": 1726,
    "endTimeSeconds": 1782556500,
    "falhas": 89
  },
  {
    "beginTimeSeconds": 1782556500,
    "emitidas": 2485,
    "endTimeSeconds": 1782560100,
    "falhas": 165
  },
  {
    "beginTimeSeconds": 1782560100,
    "emitidas": 3831,
    "endTimeSeconds": 1782563700,
    "falhas": 326
  },
  {
    "beginTimeSeconds": 1782563700,
    "emitidas": 6218,
    "endTimeSeconds": 1782567300,
    "falhas": 587
  },
  {
    "beginTimeSeconds": 1782567300,
    "emitidas": 5233,
    "endTimeSeconds": 1782570900,
    "falhas": 413
  },
  {
    "beginTimeSeconds": 1782570900,
    "emitidas": 3145,
    "endTimeSeconds": 1782574500,
    "falhas": 285
  },
  {
    "beginTimeSeconds": 1782574500,
    "emitidas": 4002,
    "endTimeSeconds": 1782578100,
    "falhas": 262
  },
  {
    "beginTimeSeconds": 1782578100,
    "emitidas": 4496,
    "endTimeSeconds": 1782581700,
    "falhas": 255
  },
  {
    "beginTimeSeconds": 1782581700,
    "emitidas": 3427,
    "endTimeSeconds": 1782585300,
    "falhas": 157
  },
  {
    "beginTimeSeconds": 1782585300,
    "emitidas": 2301,
    "endTimeSeconds": 1782588900,
    "falhas": 211
  },
  {
    "beginTimeSeconds": 1782588900,
    "emitidas": 3347,
    "endTimeSeconds": 1782592500,
    "falhas": 150
  },
  {
    "beginTimeSeconds": 1782592500,
    "emitidas": 3689,
    "endTimeSeconds": 1782596100,
    "falhas": 262
  },
  {
    "beginTimeSeconds": 1782596100,
    "emitidas": 3377,
    "endTimeSeconds": 1782599700,
    "falhas": 203
  },
  {
    "beginTimeSeconds": 1782599700,
    "emitidas": 2661,
    "endTimeSeconds": 1782603300,
    "falhas": 423
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
    "falhas": 2,
    "ok": 19630
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
    "rejeicao": 21.379510609329905,
    "sucesso": 78.62048939067022
  }
],
  taxaNfe: [
  {
    "rejeicao": 5.9257656220136,
    "sucesso": 94.07423437798629
  }
],
  taxaSucessoMunicipio: [
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
    "facet": "Ipirá",
    "municipio.nome": "Ipirá",
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
    "facet": "Mandaguaçu",
    "municipio.nome": "Mandaguaçu",
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
    "facet": "Caxias do Sul",
    "municipio.nome": "Caxias do Sul",
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
    "facet": "Cordeirópolis",
    "municipio.nome": "Cordeirópolis",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Newark",
    "municipio.nome": "Newark",
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
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
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
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 9,
    "taxa_rejeicao": 4.054054054054,
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
    "facet": "Sapiranga",
    "municipio.nome": "Sapiranga",
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
    "facet": "Jaú",
    "municipio.nome": "Jaú",
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
    "facet": "Sumaré",
    "municipio.nome": "Sumaré",
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
    "facet": "Araçatuba",
    "municipio.nome": "Araçatuba",
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
    "facet": "Jundiaí",
    "municipio.nome": "Jundiaí",
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
    "facet": "Rio Verde",
    "municipio.nome": "Rio Verde",
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
    "facet": "Hortolândia",
    "municipio.nome": "Hortolândia",
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
    "facet": "Miami",
    "municipio.nome": "Miami",
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
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
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
    "facet": "Guarapuava",
    "municipio.nome": "Guarapuava",
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
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
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
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
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
    "facet": "Itapetininga",
    "municipio.nome": "Itapetininga",
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
    "facet": "Itumbiara",
    "municipio.nome": "Itumbiara",
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
    "facet": "Parobé",
    "municipio.nome": "Parobé",
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
    "facet": "Lorena",
    "municipio.nome": "Lorena",
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
    "facet": "Niterói",
    "municipio.nome": "Niterói",
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
    "facet": "Santa Cruz do Sul",
    "municipio.nome": "Santa Cruz do Sul",
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
    "facet": "Araranguá",
    "municipio.nome": "Araranguá",
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
    "facet": "São Joaquim da Barra",
    "municipio.nome": "São Joaquim da Barra",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Indaial",
    "municipio.nome": "Indaial",
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
    "facet": "Manaus",
    "municipio.nome": "Manaus",
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
    "facet": "Caruaru",
    "municipio.nome": "Caruaru",
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
    "facet": "Franca",
    "municipio.nome": "Franca",
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
    "facet": "Mauá",
    "municipio.nome": "Mauá",
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
    "facet": "Anápolis",
    "municipio.nome": "Anápolis",
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
    "facet": "Boa Vista",
    "municipio.nome": "Boa Vista",
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
    "facet": "Maricá",
    "municipio.nome": "Maricá",
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
    "facet": "Imbituba",
    "municipio.nome": "Imbituba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Salvador",
    "municipio.nome": "Salvador",
    "rejeitadas": 3,
    "taxa_rejeicao": 0.0603743207888,
    "taxa_sucesso": 99.9396256792111
  },
  {
    "facet": "Campinas",
    "municipio.nome": "Campinas",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.3157894736842,
    "taxa_sucesso": 98.6842105263157
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.3888888888888,
    "taxa_sucesso": 98.6111111111111
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 17,
    "taxa_rejeicao": 1.7970401691331,
    "taxa_sucesso": 98.2029598308668
  },
  {
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.8867924528301,
    "taxa_sucesso": 98.1132075471698
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 11,
    "taxa_rejeicao": 2.2869022869022,
    "taxa_sucesso": 97.7130977130977
  },
  {
    "facet": "São José",
    "municipio.nome": "São José",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.3255813953488,
    "taxa_sucesso": 97.67441860465111
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 4,
    "taxa_rejeicao": 2.6666666666666,
    "taxa_sucesso": 97.3333333333333
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.7027027027027,
    "taxa_sucesso": 97.2972972972972
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 1,
    "taxa_rejeicao": 4.5454545454545,
    "taxa_sucesso": 95.45454545454541
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 6,
    "taxa_rejeicao": 5,
    "taxa_sucesso": 95
  },
  {
    "facet": "Cascavel",
    "municipio.nome": "Cascavel",
    "rejeitadas": 1,
    "taxa_rejeicao": 5,
    "taxa_sucesso": 95
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 4,
    "taxa_rejeicao": 5.3333333333333,
    "taxa_sucesso": 94.66666666666659
  },
  {
    "facet": "Maringá",
    "municipio.nome": "Maringá",
    "rejeitadas": 1,
    "taxa_rejeicao": 5.5555555555555,
    "taxa_sucesso": 94.4444444444444
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 3,
    "taxa_rejeicao": 5.5555555555555,
    "taxa_sucesso": 94.4444444444444
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 144,
    "taxa_rejeicao": 6.1538461538461,
    "taxa_sucesso": 93.8461538461538
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 7,
    "taxa_rejeicao": 6.25,
    "taxa_sucesso": 93.75
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 11,
    "taxa_rejeicao": 9.4017094017094,
    "taxa_sucesso": 90.59829059829049
  },
  {
    "facet": "Francisco Beltrão",
    "municipio.nome": "Francisco Beltrão",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "São Pedro da Aldeia",
    "municipio.nome": "São Pedro da Aldeia",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "Americana",
    "municipio.nome": "Americana",
    "rejeitadas": 2,
    "taxa_rejeicao": 13.3333333333333,
    "taxa_sucesso": 86.66666666666659
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 2,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 1,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 3,
    "taxa_rejeicao": 15,
    "taxa_sucesso": 85
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 12,
    "taxa_rejeicao": 15.7894736842105,
    "taxa_sucesso": 84.21052631578941
  },
  {
    "facet": "Londrina",
    "municipio.nome": "Londrina",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Ji-Paraná",
    "municipio.nome": "Ji-Paraná",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 17,
    "taxa_rejeicao": 22.6666666666666,
    "taxa_sucesso": 77.3333333333333
  },
  {
    "facet": "Joinville",
    "municipio.nome": "Joinville",
    "rejeitadas": 5,
    "taxa_rejeicao": 23.8095238095238,
    "taxa_sucesso": 76.19047619047609
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 3,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 2,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
    "rejeitadas": 2,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 2,
    "taxa_rejeicao": 28.5714285714285,
    "taxa_sucesso": 71.4285714285714
  },
  {
    "facet": "São Pedro",
    "municipio.nome": "São Pedro",
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
    "facet": "Serra",
    "municipio.nome": "Serra",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Chapecó",
    "municipio.nome": "Chapecó",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Teresina",
    "municipio.nome": "Teresina",
    "rejeitadas": 4,
    "taxa_rejeicao": 44.4444444444444,
    "taxa_sucesso": 55.55555555555551
  },
  {
    "facet": "Ouro Preto do Oeste",
    "municipio.nome": "Ouro Preto do Oeste",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 8,
    "taxa_rejeicao": 53.33333333333329,
    "taxa_sucesso": 46.6666666666666
  },
  {
    "facet": "Foz do Iguaçu",
    "municipio.nome": "Foz do Iguaçu",
    "rejeitadas": 3,
    "taxa_rejeicao": 60,
    "taxa_sucesso": 40
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 8,
    "taxa_rejeicao": 61.538461538461505,
    "taxa_sucesso": 38.4615384615384
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 8,
    "taxa_rejeicao": 61.538461538461505,
    "taxa_sucesso": 38.4615384615384
  },
  {
    "facet": "Andradina",
    "municipio.nome": "Andradina",
    "rejeitadas": 2,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
    "rejeitadas": 2,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Linhares",
    "municipio.nome": "Linhares",
    "rejeitadas": 4,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 24,
    "taxa_rejeicao": 72.7272727272727,
    "taxa_sucesso": 27.2727272727272
  },
  {
    "facet": "Botucatu",
    "municipio.nome": "Botucatu",
    "rejeitadas": 236,
    "taxa_rejeicao": 85.1985559566787,
    "taxa_sucesso": 14.8014440433212
  },
  {
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
    "rejeitadas": 19,
    "taxa_rejeicao": 90.4761904761904,
    "taxa_sucesso": 9.5238095238095
  },
  {
    "facet": "Farroupilha",
    "municipio.nome": "Farroupilha",
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
    "facet": "Campina Grande",
    "municipio.nome": "Campina Grande",
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
    "facet": "Poá",
    "municipio.nome": "Poá",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Conselheiro Lafaiete",
    "municipio.nome": "Conselheiro Lafaiete",
    "rejeitadas": 7,
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
    "facet": "Garopaba",
    "municipio.nome": "Garopaba",
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
    "facet": "Guararema",
    "municipio.nome": "Guararema",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 33,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "vina del mar",
    "municipio.nome": "vina del mar",
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Lajeado",
    "municipio.nome": "Lajeado",
    "rejeitadas": 2,
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
    "rejeitadas": 7,
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
    "facet": "Naviraí",
    "municipio.nome": "Naviraí",
    "rejeitadas": 1,
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
    "rejeitadas": 10,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Osasco",
    "municipio.nome": "Osasco",
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
    "facet": "Sarandi",
    "municipio.nome": "Sarandi",
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
    "facet": "Porto Velho",
    "municipio.nome": "Porto Velho",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ilhota",
    "municipio.nome": "Ilhota",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Passos",
    "municipio.nome": "Passos",
    "rejeitadas": 2,
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
    "facet": "Mogi das Cruzes",
    "municipio.nome": "Mogi das Cruzes",
    "rejeitadas": 2,
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
  }
],
  taxaRejeicaoMunicipio: [
  {
    "facet": "Farroupilha",
    "municipio.nome": "Farroupilha",
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
    "facet": "Campina Grande",
    "municipio.nome": "Campina Grande",
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
    "facet": "Poá",
    "municipio.nome": "Poá",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Conselheiro Lafaiete",
    "municipio.nome": "Conselheiro Lafaiete",
    "rejeitadas": 7,
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
    "facet": "Garopaba",
    "municipio.nome": "Garopaba",
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
    "facet": "Guararema",
    "municipio.nome": "Guararema",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 33,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "vina del mar",
    "municipio.nome": "vina del mar",
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Lajeado",
    "municipio.nome": "Lajeado",
    "rejeitadas": 2,
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
    "rejeitadas": 7,
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
    "facet": "Naviraí",
    "municipio.nome": "Naviraí",
    "rejeitadas": 1,
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
    "rejeitadas": 10,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Osasco",
    "municipio.nome": "Osasco",
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
    "facet": "Sarandi",
    "municipio.nome": "Sarandi",
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
    "facet": "Porto Velho",
    "municipio.nome": "Porto Velho",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ilhota",
    "municipio.nome": "Ilhota",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Passos",
    "municipio.nome": "Passos",
    "rejeitadas": 2,
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
    "facet": "Mogi das Cruzes",
    "municipio.nome": "Mogi das Cruzes",
    "rejeitadas": 2,
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
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
    "rejeitadas": 19,
    "taxa_rejeicao": 90.4761904761904,
    "taxa_sucesso": 9.5238095238095
  },
  {
    "facet": "Botucatu",
    "municipio.nome": "Botucatu",
    "rejeitadas": 236,
    "taxa_rejeicao": 85.1985559566787,
    "taxa_sucesso": 14.8014440433212
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 24,
    "taxa_rejeicao": 72.7272727272727,
    "taxa_sucesso": 27.2727272727272
  },
  {
    "facet": "Andradina",
    "municipio.nome": "Andradina",
    "rejeitadas": 2,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
    "rejeitadas": 2,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Linhares",
    "municipio.nome": "Linhares",
    "rejeitadas": 4,
    "taxa_rejeicao": 66.6666666666666,
    "taxa_sucesso": 33.3333333333333
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 8,
    "taxa_rejeicao": 61.538461538461505,
    "taxa_sucesso": 38.4615384615384
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 8,
    "taxa_rejeicao": 61.538461538461505,
    "taxa_sucesso": 38.4615384615384
  },
  {
    "facet": "Foz do Iguaçu",
    "municipio.nome": "Foz do Iguaçu",
    "rejeitadas": 3,
    "taxa_rejeicao": 60,
    "taxa_sucesso": 40
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 8,
    "taxa_rejeicao": 53.33333333333329,
    "taxa_sucesso": 46.6666666666666
  },
  {
    "facet": "Ouro Preto do Oeste",
    "municipio.nome": "Ouro Preto do Oeste",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Teresina",
    "municipio.nome": "Teresina",
    "rejeitadas": 4,
    "taxa_rejeicao": 44.4444444444444,
    "taxa_sucesso": 55.55555555555551
  },
  {
    "facet": "São Pedro",
    "municipio.nome": "São Pedro",
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
    "facet": "Serra",
    "municipio.nome": "Serra",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Chapecó",
    "municipio.nome": "Chapecó",
    "rejeitadas": 1,
    "taxa_rejeicao": 33.3333333333333,
    "taxa_sucesso": 66.6666666666666
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 2,
    "taxa_rejeicao": 28.5714285714285,
    "taxa_sucesso": 71.4285714285714
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 3,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 2,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
    "rejeitadas": 2,
    "taxa_rejeicao": 25,
    "taxa_sucesso": 75
  },
  {
    "facet": "Joinville",
    "municipio.nome": "Joinville",
    "rejeitadas": 5,
    "taxa_rejeicao": 23.8095238095238,
    "taxa_sucesso": 76.19047619047609
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 17,
    "taxa_rejeicao": 22.6666666666666,
    "taxa_sucesso": 77.3333333333333
  },
  {
    "facet": "Londrina",
    "municipio.nome": "Londrina",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Ji-Paraná",
    "municipio.nome": "Ji-Paraná",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 12,
    "taxa_rejeicao": 15.7894736842105,
    "taxa_sucesso": 84.21052631578941
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 3,
    "taxa_rejeicao": 15,
    "taxa_sucesso": 85
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 2,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 1,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "Americana",
    "municipio.nome": "Americana",
    "rejeitadas": 2,
    "taxa_rejeicao": 13.3333333333333,
    "taxa_sucesso": 86.66666666666659
  },
  {
    "facet": "Francisco Beltrão",
    "municipio.nome": "Francisco Beltrão",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "São Pedro da Aldeia",
    "municipio.nome": "São Pedro da Aldeia",
    "rejeitadas": 1,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 11,
    "taxa_rejeicao": 9.4017094017094,
    "taxa_sucesso": 90.59829059829049
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 7,
    "taxa_rejeicao": 6.25,
    "taxa_sucesso": 93.75
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 144,
    "taxa_rejeicao": 6.1538461538461,
    "taxa_sucesso": 93.8461538461538
  },
  {
    "facet": "Maringá",
    "municipio.nome": "Maringá",
    "rejeitadas": 1,
    "taxa_rejeicao": 5.5555555555555,
    "taxa_sucesso": 94.4444444444444
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 3,
    "taxa_rejeicao": 5.5555555555555,
    "taxa_sucesso": 94.4444444444444
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 4,
    "taxa_rejeicao": 5.3333333333333,
    "taxa_sucesso": 94.66666666666659
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 6,
    "taxa_rejeicao": 5,
    "taxa_sucesso": 95
  },
  {
    "facet": "Cascavel",
    "municipio.nome": "Cascavel",
    "rejeitadas": 1,
    "taxa_rejeicao": 5,
    "taxa_sucesso": 95
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 1,
    "taxa_rejeicao": 4.5454545454545,
    "taxa_sucesso": 95.45454545454541
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 9,
    "taxa_rejeicao": 4.054054054054,
    "taxa_sucesso": 100
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.7027027027027,
    "taxa_sucesso": 97.2972972972972
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 4,
    "taxa_rejeicao": 2.6666666666666,
    "taxa_sucesso": 97.3333333333333
  },
  {
    "facet": "São José",
    "municipio.nome": "São José",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.3255813953488,
    "taxa_sucesso": 97.67441860465111
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 11,
    "taxa_rejeicao": 2.2869022869022,
    "taxa_sucesso": 97.7130977130977
  },
  {
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.8867924528301,
    "taxa_sucesso": 98.1132075471698
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 17,
    "taxa_rejeicao": 1.7970401691331,
    "taxa_sucesso": 98.2029598308668
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.3888888888888,
    "taxa_sucesso": 98.6111111111111
  },
  {
    "facet": "Campinas",
    "municipio.nome": "Campinas",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.3157894736842,
    "taxa_sucesso": 98.6842105263157
  },
  {
    "facet": "Salvador",
    "municipio.nome": "Salvador",
    "rejeitadas": 3,
    "taxa_rejeicao": 0.0603743207888,
    "taxa_sucesso": 99.9396256792111
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
    "facet": "Ipirá",
    "municipio.nome": "Ipirá",
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
    "facet": "Mandaguaçu",
    "municipio.nome": "Mandaguaçu",
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
    "facet": "Caxias do Sul",
    "municipio.nome": "Caxias do Sul",
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
    "facet": "Cordeirópolis",
    "municipio.nome": "Cordeirópolis",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Newark",
    "municipio.nome": "Newark",
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
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
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
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
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
    "facet": "Sapiranga",
    "municipio.nome": "Sapiranga",
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
    "facet": "Jaú",
    "municipio.nome": "Jaú",
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
    "facet": "Sumaré",
    "municipio.nome": "Sumaré",
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
    "facet": "Araçatuba",
    "municipio.nome": "Araçatuba",
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
    "facet": "Jundiaí",
    "municipio.nome": "Jundiaí",
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
    "facet": "Rio Verde",
    "municipio.nome": "Rio Verde",
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
    "facet": "Hortolândia",
    "municipio.nome": "Hortolândia",
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
    "facet": "Miami",
    "municipio.nome": "Miami",
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
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
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
    "facet": "Guarapuava",
    "municipio.nome": "Guarapuava",
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
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
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
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
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
    "facet": "Itapetininga",
    "municipio.nome": "Itapetininga",
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
    "facet": "Itumbiara",
    "municipio.nome": "Itumbiara",
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
    "facet": "Parobé",
    "municipio.nome": "Parobé",
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
    "facet": "Lorena",
    "municipio.nome": "Lorena",
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
    "facet": "Niterói",
    "municipio.nome": "Niterói",
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
    "facet": "Santa Cruz do Sul",
    "municipio.nome": "Santa Cruz do Sul",
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
    "facet": "Araranguá",
    "municipio.nome": "Araranguá",
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
    "facet": "São Joaquim da Barra",
    "municipio.nome": "São Joaquim da Barra",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Indaial",
    "municipio.nome": "Indaial",
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
    "facet": "Manaus",
    "municipio.nome": "Manaus",
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
    "facet": "Caruaru",
    "municipio.nome": "Caruaru",
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
    "facet": "Franca",
    "municipio.nome": "Franca",
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
    "facet": "Mauá",
    "municipio.nome": "Mauá",
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
    "facet": "Anápolis",
    "municipio.nome": "Anápolis",
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
    "facet": "Boa Vista",
    "municipio.nome": "Boa Vista",
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
    "facet": "Maricá",
    "municipio.nome": "Maricá",
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
    "facet": "Imbituba",
    "municipio.nome": "Imbituba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  }
],
  taxaTimeseries: [
  {
    "beginTimeSeconds": 1782589080,
    "endTimeSeconds": 1782590280,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782590280,
    "endTimeSeconds": 1782591480,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782591480,
    "endTimeSeconds": 1782592680,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782592680,
    "endTimeSeconds": 1782593880,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782593880,
    "endTimeSeconds": 1782595080,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782595080,
    "endTimeSeconds": 1782596280,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782596280,
    "endTimeSeconds": 1782597480,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782597480,
    "endTimeSeconds": 1782598680,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782598680,
    "endTimeSeconds": 1782599880,
    "rejeicao": 20.596739590913856,
    "sucesso": 79.40326040908614
  },
  {
    "beginTimeSeconds": 1782599880,
    "endTimeSeconds": 1782601080,
    "rejeicao": 21.757180023167805,
    "sucesso": 78.24281997683218
  },
  {
    "beginTimeSeconds": 1782601080,
    "endTimeSeconds": 1782602280,
    "rejeicao": 21.483501502803296,
    "sucesso": 78.51649849719665
  },
  {
    "beginTimeSeconds": 1782602280,
    "endTimeSeconds": 1782603480,
    "rejeicao": 20.974008661287616,
    "sucesso": 79.02599133871243
  }
],
  taxaSucessoMunicipioTs: [{"facet": "Guarapuava", "beginTimeSeconds": 1782589080, "endTimeSeconds": 1782590280, "municipio.nome": "Guarapuava", "sucesso": null}, {"facet": "Guarapuava", "beginTimeSeconds": 1782590280, "endTimeSeconds": 1782591480, "municipio.nome": "Guarapuava", "sucesso": null}, {"facet": "Guarapuava", "beginTimeSeconds": 1782591480, "endTimeSeconds": 1782592680, "municipio.nome": "Guarapuava", "sucesso": null}, {"facet": "Guarapuava", "beginTimeSeconds": 1782592680, "endTimeSeconds": 1782593880, "municipio.nome": "Guarapuava", "sucesso": null}, {"facet": "Guarapuava", "beginTimeSeconds": 1782593880, "endTimeSeconds": 1782595080, "municipio.nome": "Guarapuava", "sucesso": null}, {"facet": "Guarapuava", "beginTimeSeconds": 1782595080, "endTimeSeconds": 1782596280, "municipio.nome": "Guarapuava", "sucesso": null}, {"facet": "Guarapuava", "beginTimeSeconds": 1782596280, "endTimeSeconds": 1782597480, "municipio.nome": "Guarapuava", "sucesso": null}, {"facet": "Guarapuava", "beginTimeSeconds": 1782597480, "endTimeSeconds": 1782598680, "municipio.nome": "Guarapuava", "sucesso": null}, {"facet": "Guarapuava", "beginTimeSeconds": 1782598680, "endTimeSeconds": 1782599880, "municipio.nome": "Guarapuava", "sucesso": 100.0}, {"facet": "Guarapuava", "beginTimeSeconds": 1782599880, "endTimeSeconds": 1782601080, "municipio.nome": "Guarapuava", "sucesso": 100.0}, {"facet": "Guarapuava", "beginTimeSeconds": 1782601080, "endTimeSeconds": 1782602280, "municipio.nome": "Guarapuava", "sucesso": 100.0}, {"facet": "Guarapuava", "beginTimeSeconds": 1782602280, "endTimeSeconds": 1782603480, "municipio.nome": "Guarapuava", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1782589080, "endTimeSeconds": 1782590280, "municipio.nome": "Salto", "sucesso": null}, {"facet": "Salto", "beginTimeSeconds": 1782590280, "endTimeSeconds": 1782591480, "municipio.nome": "Salto", "sucesso": null}, {"facet": "Salto", "beginTimeSeconds": 1782591480, "endTimeSeconds": 1782592680, "municipio.nome": "Salto", "sucesso": null}, {"facet": "Salto", "beginTimeSeconds": 1782592680, "endTimeSeconds": 1782593880, "municipio.nome": "Salto", "sucesso": null}, {"facet": "Salto", "beginTimeSeconds": 1782593880, "endTimeSeconds": 1782595080, "municipio.nome": "Salto", "sucesso": null}, {"facet": "Salto", "beginTimeSeconds": 1782595080, "endTimeSeconds": 1782596280, "municipio.nome": "Salto", "sucesso": null}, {"facet": "Salto", "beginTimeSeconds": 1782596280, "endTimeSeconds": 1782597480, "municipio.nome": "Salto", "sucesso": null}, {"facet": "Salto", "beginTimeSeconds": 1782597480, "endTimeSeconds": 1782598680, "municipio.nome": "Salto", "sucesso": null}, {"facet": "Salto", "beginTimeSeconds": 1782598680, "endTimeSeconds": 1782599880, "municipio.nome": "Salto", "sucesso": null}, {"facet": "Salto", "beginTimeSeconds": 1782599880, "endTimeSeconds": 1782601080, "municipio.nome": "Salto", "sucesso": null}, {"facet": "Salto", "beginTimeSeconds": 1782601080, "endTimeSeconds": 1782602280, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1782602280, "endTimeSeconds": 1782603480, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782589080, "endTimeSeconds": 1782590280, "municipio.nome": "Caic\u00f3", "sucesso": null}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782590280, "endTimeSeconds": 1782591480, "municipio.nome": "Caic\u00f3", "sucesso": null}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782591480, "endTimeSeconds": 1782592680, "municipio.nome": "Caic\u00f3", "sucesso": null}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782592680, "endTimeSeconds": 1782593880, "municipio.nome": "Caic\u00f3", "sucesso": null}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782593880, "endTimeSeconds": 1782595080, "municipio.nome": "Caic\u00f3", "sucesso": null}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782595080, "endTimeSeconds": 1782596280, "municipio.nome": "Caic\u00f3", "sucesso": null}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782596280, "endTimeSeconds": 1782597480, "municipio.nome": "Caic\u00f3", "sucesso": null}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782597480, "endTimeSeconds": 1782598680, "municipio.nome": "Caic\u00f3", "sucesso": null}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782598680, "endTimeSeconds": 1782599880, "municipio.nome": "Caic\u00f3", "sucesso": null}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782599880, "endTimeSeconds": 1782601080, "municipio.nome": "Caic\u00f3", "sucesso": null}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782601080, "endTimeSeconds": 1782602280, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1782602280, "endTimeSeconds": 1782603480, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Bento Gon\u00e7alves", "beginTimeSeconds": 1782589080, "endTimeSeconds": 1782590280, "municipio.nome": "Bento Gon\u00e7alves", "sucesso": null}, {"facet": "Bento Gon\u00e7alves", "beginTimeSeconds": 1782590280, "endTimeSeconds": 1782591480, "municipio.nome": "Bento Gon\u00e7alves", "sucesso": null}, {"facet": "Bento Gon\u00e7alves", "beginTimeSeconds": 1782591480, "endTimeSeconds": 1782592680, "municipio.nome": "Bento Gon\u00e7alves", "sucesso": null}, {"facet": "Bento Gon\u00e7alves", "beginTimeSeconds": 1782592680, "endTimeSeconds": 1782593880, "municipio.nome": "Bento Gon\u00e7alves", "sucesso": null}, {"facet": "Bento Gon\u00e7alves", "beginTimeSeconds": 1782593880, "endTimeSeconds": 1782595080, "municipio.nome": "Bento Gon\u00e7alves", "sucesso": null}, {"facet": "Bento Gon\u00e7alves", "beginTimeSeconds": 1782595080, "endTimeSeconds": 1782596280, "municipio.nome": "Bento Gon\u00e7alves", "sucesso": null}, {"facet": "Bento Gon\u00e7alves", "beginTimeSeconds": 1782596280, "endTimeSeconds": 1782597480, "municipio.nome": "Bento Gon\u00e7alves", "sucesso": null}, {"facet": "Bento Gon\u00e7alves", "beginTimeSeconds": 1782597480, "endTimeSeconds": 1782598680, "municipio.nome": "Bento Gon\u00e7alves", "sucesso": null}, {"facet": "Bento Gon\u00e7alves", "beginTimeSeconds": 1782598680, "endTimeSeconds": 1782599880, "municipio.nome": "Bento Gon\u00e7alves", "sucesso": 100.0}, {"facet": "Bento Gon\u00e7alves", "beginTimeSeconds": 1782599880, "endTimeSeconds": 1782601080, "municipio.nome": "Bento Gon\u00e7alves", "sucesso": 100.0}, {"facet": "Bento Gon\u00e7alves", "beginTimeSeconds": 1782601080, "endTimeSeconds": 1782602280, "municipio.nome": "Bento Gon\u00e7alves", "sucesso": 100.0}, {"facet": "Bento Gon\u00e7alves", "beginTimeSeconds": 1782602280, "endTimeSeconds": 1782603480, "municipio.nome": "Bento Gon\u00e7alves", "sucesso": 100.0}, {"facet": "Campo Grande", "beginTimeSeconds": 1782589080, "endTimeSeconds": 1782590280, "municipio.nome": "Campo Grande", "sucesso": null}, {"facet": "Campo Grande", "beginTimeSeconds": 1782590280, "endTimeSeconds": 1782591480, "municipio.nome": "Campo Grande", "sucesso": null}, {"facet": "Campo Grande", "beginTimeSeconds": 1782591480, "endTimeSeconds": 1782592680, "municipio.nome": "Campo Grande", "sucesso": null}, {"facet": "Campo Grande", "beginTimeSeconds": 1782592680, "endTimeSeconds": 1782593880, "municipio.nome": "Campo Grande", "sucesso": null}, {"facet": "Campo Grande", "beginTimeSeconds": 1782593880, "endTimeSeconds": 1782595080, "municipio.nome": "Campo Grande", "sucesso": null}, {"facet": "Campo Grande", "beginTimeSeconds": 1782595080, "endTimeSeconds": 1782596280, "municipio.nome": "Campo Grande", "sucesso": null}, {"facet": "Campo Grande", "beginTimeSeconds": 1782596280, "endTimeSeconds": 1782597480, "municipio.nome": "Campo Grande", "sucesso": null}, {"facet": "Campo Grande", "beginTimeSeconds": 1782597480, "endTimeSeconds": 1782598680, "municipio.nome": "Campo Grande", "sucesso": null}, {"facet": "Campo Grande", "beginTimeSeconds": 1782598680, "endTimeSeconds": 1782599880, "municipio.nome": "Campo Grande", "sucesso": 100.0}, {"facet": "Campo Grande", "beginTimeSeconds": 1782599880, "endTimeSeconds": 1782601080, "municipio.nome": "Campo Grande", "sucesso": 100.0}, {"facet": "Campo Grande", "beginTimeSeconds": 1782601080, "endTimeSeconds": 1782602280, "municipio.nome": "Campo Grande", "sucesso": 100.0}, {"facet": "Campo Grande", "beginTimeSeconds": 1782602280, "endTimeSeconds": 1782603480, "municipio.nome": "Campo Grande", "sucesso": 100.0}, {"facet": "Dois Irm\u00e3os", "beginTimeSeconds": 1782589080, "endTimeSeconds": 1782590280, "municipio.nome": "Dois Irm\u00e3os", "sucesso": null}, {"facet": "Dois Irm\u00e3os", "beginTimeSeconds": 1782590280, "endTimeSeconds": 1782591480, "municipio.nome": "Dois Irm\u00e3os", "sucesso": null}, {"facet": "Dois Irm\u00e3os", "beginTimeSeconds": 1782591480, "endTimeSeconds": 1782592680, "municipio.nome": "Dois Irm\u00e3os", "sucesso": null}, {"facet": "Dois Irm\u00e3os", "beginTimeSeconds": 1782592680, "endTimeSeconds": 1782593880, "municipio.nome": "Dois Irm\u00e3os", "sucesso": null}, {"facet": "Dois Irm\u00e3os", "beginTimeSeconds": 1782593880, "endTimeSeconds": 1782595080, "municipio.nome": "Dois Irm\u00e3os", "sucesso": null}, {"facet": "Dois Irm\u00e3os", "beginTimeSeconds": 1782595080, "endTimeSeconds": 1782596280, "municipio.nome": "Dois Irm\u00e3os", "sucesso": null}, {"facet": "Dois Irm\u00e3os", "beginTimeSeconds": 1782596280, "endTimeSeconds": 1782597480, "municipio.nome": "Dois Irm\u00e3os", "sucesso": null}, {"facet": "Dois Irm\u00e3os", "beginTimeSeconds": 1782597480, "endTimeSeconds": 1782598680, "municipio.nome": "Dois Irm\u00e3os", "sucesso": null}, {"facet": "Dois Irm\u00e3os", "beginTimeSeconds": 1782598680, "endTimeSeconds": 1782599880, "municipio.nome": "Dois Irm\u00e3os", "sucesso": null}, {"facet": "Dois Irm\u00e3os", "beginTimeSeconds": 1782599880, "endTimeSeconds": 1782601080, "municipio.nome": "Dois Irm\u00e3os", "sucesso": null}, {"facet": "Dois Irm\u00e3os", "beginTimeSeconds": 1782601080, "endTimeSeconds": 1782602280, "municipio.nome": "Dois Irm\u00e3os", "sucesso": null}, {"facet": "Dois Irm\u00e3os", "beginTimeSeconds": 1782602280, "endTimeSeconds": 1782603480, "municipio.nome": "Dois Irm\u00e3os", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782589080, "endTimeSeconds": 1782590280, "municipio.nome": "Itabaiana", "sucesso": null}, {"facet": "Itabaiana", "beginTimeSeconds": 1782590280, "endTimeSeconds": 1782591480, "municipio.nome": "Itabaiana", "sucesso": null}, {"facet": "Itabaiana", "beginTimeSeconds": 1782591480, "endTimeSeconds": 1782592680, "municipio.nome": "Itabaiana", "sucesso": null}, {"facet": "Itabaiana", "beginTimeSeconds": 1782592680, "endTimeSeconds": 1782593880, "municipio.nome": "Itabaiana", "sucesso": null}, {"facet": "Itabaiana", "beginTimeSeconds": 1782593880, "endTimeSeconds": 1782595080, "municipio.nome": "Itabaiana", "sucesso": null}, {"facet": "Itabaiana", "beginTimeSeconds": 1782595080, "endTimeSeconds": 1782596280, "municipio.nome": "Itabaiana", "sucesso": null}, {"facet": "Itabaiana", "beginTimeSeconds": 1782596280, "endTimeSeconds": 1782597480, "municipio.nome": "Itabaiana", "sucesso": null}, {"facet": "Itabaiana", "beginTimeSeconds": 1782597480, "endTimeSeconds": 1782598680, "municipio.nome": "Itabaiana", "sucesso": null}, {"facet": "Itabaiana", "beginTimeSeconds": 1782598680, "endTimeSeconds": 1782599880, "municipio.nome": "Itabaiana", "sucesso": null}, {"facet": "Itabaiana", "beginTimeSeconds": 1782599880, "endTimeSeconds": 1782601080, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782601080, "endTimeSeconds": 1782602280, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1782602280, "endTimeSeconds": 1782603480, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Petrolina", "beginTimeSeconds": 1782589080, "endTimeSeconds": 1782590280, "municipio.nome": "Petrolina", "sucesso": null}, {"facet": "Petrolina", "beginTimeSeconds": 1782590280, "endTimeSeconds": 1782591480, "municipio.nome": "Petrolina", "sucesso": null}, {"facet": "Petrolina", "beginTimeSeconds": 1782591480, "endTimeSeconds": 1782592680, "municipio.nome": "Petrolina", "sucesso": null}, {"facet": "Petrolina", "beginTimeSeconds": 1782592680, "endTimeSeconds": 1782593880, "municipio.nome": "Petrolina", "sucesso": null}, {"facet": "Petrolina", "beginTimeSeconds": 1782593880, "endTimeSeconds": 1782595080, "municipio.nome": "Petrolina", "sucesso": null}, {"facet": "Petrolina", "beginTimeSeconds": 1782595080, "endTimeSeconds": 1782596280, "municipio.nome": "Petrolina", "sucesso": null}, {"facet": "Petrolina", "beginTimeSeconds": 1782596280, "endTimeSeconds": 1782597480, "municipio.nome": "Petrolina", "sucesso": null}, {"facet": "Petrolina", "beginTimeSeconds": 1782597480, "endTimeSeconds": 1782598680, "municipio.nome": "Petrolina", "sucesso": null}, {"facet": "Petrolina", "beginTimeSeconds": 1782598680, "endTimeSeconds": 1782599880, "municipio.nome": "Petrolina", "sucesso": null}, {"facet": "Petrolina", "beginTimeSeconds": 1782599880, "endTimeSeconds": 1782601080, "municipio.nome": "Petrolina", "sucesso": 100.0}, {"facet": "Petrolina", "beginTimeSeconds": 1782601080, "endTimeSeconds": 1782602280, "municipio.nome": "Petrolina", "sucesso": 100.0}, {"facet": "Petrolina", "beginTimeSeconds": 1782602280, "endTimeSeconds": 1782603480, "municipio.nome": "Petrolina", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782589080, "endTimeSeconds": 1782590280, "municipio.nome": "Ilh\u00e9us", "sucesso": null}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782590280, "endTimeSeconds": 1782591480, "municipio.nome": "Ilh\u00e9us", "sucesso": null}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782591480, "endTimeSeconds": 1782592680, "municipio.nome": "Ilh\u00e9us", "sucesso": null}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782592680, "endTimeSeconds": 1782593880, "municipio.nome": "Ilh\u00e9us", "sucesso": null}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782593880, "endTimeSeconds": 1782595080, "municipio.nome": "Ilh\u00e9us", "sucesso": null}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782595080, "endTimeSeconds": 1782596280, "municipio.nome": "Ilh\u00e9us", "sucesso": null}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782596280, "endTimeSeconds": 1782597480, "municipio.nome": "Ilh\u00e9us", "sucesso": null}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782597480, "endTimeSeconds": 1782598680, "municipio.nome": "Ilh\u00e9us", "sucesso": null}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782598680, "endTimeSeconds": 1782599880, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782599880, "endTimeSeconds": 1782601080, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782601080, "endTimeSeconds": 1782602280, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1782602280, "endTimeSeconds": 1782603480, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1782589080, "endTimeSeconds": 1782590280, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1782590280, "endTimeSeconds": 1782591480, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1782591480, "endTimeSeconds": 1782592680, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1782592680, "endTimeSeconds": 1782593880, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1782593880, "endTimeSeconds": 1782595080, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1782595080, "endTimeSeconds": 1782596280, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1782596280, "endTimeSeconds": 1782597480, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1782597480, "endTimeSeconds": 1782598680, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1782598680, "endTimeSeconds": 1782599880, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1782599880, "endTimeSeconds": 1782601080, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1782601080, "endTimeSeconds": 1782602280, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1782602280, "endTimeSeconds": 1782603480, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Vicente", "beginTimeSeconds": 1782589080, "endTimeSeconds": 1782590280, "municipio.nome": "S\u00e3o Vicente", "sucesso": null}, {"facet": "S\u00e3o Vicente", "beginTimeSeconds": 1782590280, "endTimeSeconds": 1782591480, "municipio.nome": "S\u00e3o Vicente", "sucesso": null}, {"facet": "S\u00e3o Vicente", "beginTimeSeconds": 1782591480, "endTimeSeconds": 1782592680, "municipio.nome": "S\u00e3o Vicente", "sucesso": null}, {"facet": "S\u00e3o Vicente", "beginTimeSeconds": 1782592680, "endTimeSeconds": 1782593880, "municipio.nome": "S\u00e3o Vicente", "sucesso": null}, {"facet": "S\u00e3o Vicente", "beginTimeSeconds": 1782593880, "endTimeSeconds": 1782595080, "municipio.nome": "S\u00e3o Vicente", "sucesso": null}, {"facet": "S\u00e3o Vicente", "beginTimeSeconds": 1782595080, "endTimeSeconds": 1782596280, "municipio.nome": "S\u00e3o Vicente", "sucesso": null}, {"facet": "S\u00e3o Vicente", "beginTimeSeconds": 1782596280, "endTimeSeconds": 1782597480, "municipio.nome": "S\u00e3o Vicente", "sucesso": null}, {"facet": "S\u00e3o Vicente", "beginTimeSeconds": 1782597480, "endTimeSeconds": 1782598680, "municipio.nome": "S\u00e3o Vicente", "sucesso": null}, {"facet": "S\u00e3o Vicente", "beginTimeSeconds": 1782598680, "endTimeSeconds": 1782599880, "municipio.nome": "S\u00e3o Vicente", "sucesso": 100.0}, {"facet": "S\u00e3o Vicente", "beginTimeSeconds": 1782599880, "endTimeSeconds": 1782601080, "municipio.nome": "S\u00e3o Vicente", "sucesso": 100.0}, {"facet": "S\u00e3o Vicente", "beginTimeSeconds": 1782601080, "endTimeSeconds": 1782602280, "municipio.nome": "S\u00e3o Vicente", "sucesso": 100.0}, {"facet": "S\u00e3o Vicente", "beginTimeSeconds": 1782602280, "endTimeSeconds": 1782603480, "municipio.nome": "S\u00e3o Vicente", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782589080, "endTimeSeconds": 1782590280, "municipio.nome": "Bag\u00e9", "sucesso": null}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782590280, "endTimeSeconds": 1782591480, "municipio.nome": "Bag\u00e9", "sucesso": null}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782591480, "endTimeSeconds": 1782592680, "municipio.nome": "Bag\u00e9", "sucesso": null}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782592680, "endTimeSeconds": 1782593880, "municipio.nome": "Bag\u00e9", "sucesso": null}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782593880, "endTimeSeconds": 1782595080, "municipio.nome": "Bag\u00e9", "sucesso": null}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782595080, "endTimeSeconds": 1782596280, "municipio.nome": "Bag\u00e9", "sucesso": null}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782596280, "endTimeSeconds": 1782597480, "municipio.nome": "Bag\u00e9", "sucesso": null}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782597480, "endTimeSeconds": 1782598680, "municipio.nome": "Bag\u00e9", "sucesso": null}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782598680, "endTimeSeconds": 1782599880, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782599880, "endTimeSeconds": 1782601080, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782601080, "endTimeSeconds": 1782602280, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Bag\u00e9", "beginTimeSeconds": 1782602280, "endTimeSeconds": 1782603480, "municipio.nome": "Bag\u00e9", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782589080, "endTimeSeconds": 1782590280, "municipio.nome": "Santa Teresa", "sucesso": null}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782590280, "endTimeSeconds": 1782591480, "municipio.nome": "Santa Teresa", "sucesso": null}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782591480, "endTimeSeconds": 1782592680, "municipio.nome": "Santa Teresa", "sucesso": null}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782592680, "endTimeSeconds": 1782593880, "municipio.nome": "Santa Teresa", "sucesso": null}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782593880, "endTimeSeconds": 1782595080, "municipio.nome": "Santa Teresa", "sucesso": null}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782595080, "endTimeSeconds": 1782596280, "municipio.nome": "Santa Teresa", "sucesso": null}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782596280, "endTimeSeconds": 1782597480, "municipio.nome": "Santa Teresa", "sucesso": null}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782597480, "endTimeSeconds": 1782598680, "municipio.nome": "Santa Teresa", "sucesso": null}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782598680, "endTimeSeconds": 1782599880, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782599880, "endTimeSeconds": 1782601080, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782601080, "endTimeSeconds": 1782602280, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1782602280, "endTimeSeconds": 1782603480, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Imb\u00e9", "beginTimeSeconds": 1782589080, "endTimeSeconds": 1782590280, "municipio.nome": "Imb\u00e9", "sucesso": null}, {"facet": "Imb\u00e9", "beginTimeSeconds": 1782590280, "endTimeSeconds": 1782591480, "municipio.nome": "Imb\u00e9", "sucesso": null}, {"facet": "Imb\u00e9", "beginTimeSeconds": 1782591480, "endTimeSeconds": 1782592680, "municipio.nome": "Imb\u00e9", "sucesso": null}, {"facet": "Imb\u00e9", "beginTimeSeconds": 1782592680, "endTimeSeconds": 1782593880, "municipio.nome": "Imb\u00e9", "sucesso": null}, {"facet": "Imb\u00e9", "beginTimeSeconds": 1782593880, "endTimeSeconds": 1782595080, "municipio.nome": "Imb\u00e9", "sucesso": null}, {"facet": "Imb\u00e9", "beginTimeSeconds": 1782595080, "endTimeSeconds": 1782596280, "municipio.nome": "Imb\u00e9", "sucesso": null}, {"facet": "Imb\u00e9", "beginTimeSeconds": 1782596280, "endTimeSeconds": 1782597480, "municipio.nome": "Imb\u00e9", "sucesso": null}, {"facet": "Imb\u00e9", "beginTimeSeconds": 1782597480, "endTimeSeconds": 1782598680, "municipio.nome": "Imb\u00e9", "sucesso": null}, {"facet": "Imb\u00e9", "beginTimeSeconds": 1782598680, "endTimeSeconds": 1782599880, "municipio.nome": "Imb\u00e9", "sucesso": 100.0}, {"facet": "Imb\u00e9", "beginTimeSeconds": 1782599880, "endTimeSeconds": 1782601080, "municipio.nome": "Imb\u00e9", "sucesso": 100.0}, {"facet": "Imb\u00e9", "beginTimeSeconds": 1782601080, "endTimeSeconds": 1782602280, "municipio.nome": "Imb\u00e9", "sucesso": 100.0}, {"facet": "Imb\u00e9", "beginTimeSeconds": 1782602280, "endTimeSeconds": 1782603480, "municipio.nome": "Imb\u00e9", "sucesso": 100.0}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1782589080, "endTimeSeconds": 1782590280, "municipio.nome": "Barra do Pira\u00ed", "sucesso": null}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1782590280, "endTimeSeconds": 1782591480, "municipio.nome": "Barra do Pira\u00ed", "sucesso": null}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1782591480, "endTimeSeconds": 1782592680, "municipio.nome": "Barra do Pira\u00ed", "sucesso": null}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1782592680, "endTimeSeconds": 1782593880, "municipio.nome": "Barra do Pira\u00ed", "sucesso": null}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1782593880, "endTimeSeconds": 1782595080, "municipio.nome": "Barra do Pira\u00ed", "sucesso": null}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1782595080, "endTimeSeconds": 1782596280, "municipio.nome": "Barra do Pira\u00ed", "sucesso": null}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1782596280, "endTimeSeconds": 1782597480, "municipio.nome": "Barra do Pira\u00ed", "sucesso": null}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1782597480, "endTimeSeconds": 1782598680, "municipio.nome": "Barra do Pira\u00ed", "sucesso": null}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1782598680, "endTimeSeconds": 1782599880, "municipio.nome": "Barra do Pira\u00ed", "sucesso": 100.0}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1782599880, "endTimeSeconds": 1782601080, "municipio.nome": "Barra do Pira\u00ed", "sucesso": 100.0}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1782601080, "endTimeSeconds": 1782602280, "municipio.nome": "Barra do Pira\u00ed", "sucesso": 100.0}, {"facet": "Barra do Pira\u00ed", "beginTimeSeconds": 1782602280, "endTimeSeconds": 1782603480, "municipio.nome": "Barra do Pira\u00ed", "sucesso": 100.0}]
};
