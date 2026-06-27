// Gerado automaticamente pelo workflow monitoramento-nfe.yml em 27/06/2026 19:31 (Brasilia)
// NAO EDITAR MANUALMENTE
var monitoramentoNfeData = {
  geradoEm: "27/06/2026 19:31",
  travadasPorMunicipio: [
  {
    "facet": "Corbélia",
    "latest.nfe.stuck_in_intermediate_status.count": 370,
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
    "facet": "Feira de Santana",
    "max.nfe.processing_time.minutes": 27,
    "nfe.municipio_servico": "Feira de Santana"
  },
  {
    "facet": "Taboão da Serra",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "Taboão da Serra"
  },
  {
    "facet": "Andradina",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Andradina"
  },
  {
    "facet": "Aparecida de Goiânia",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Aparecida de Goiânia"
  },
  {
    "facet": "Ribeirão Preto",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Ribeirão Preto"
  },
  {
    "facet": "Salvador",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Salvador"
  },
  {
    "facet": "Aracaju",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Aracaju"
  },
  {
    "facet": "Guarapuava",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Guarapuava"
  },
  {
    "facet": "São Pedro da Aldeia",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "São Pedro da Aldeia"
  },
  {
    "facet": "Maceió",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Maceió"
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
    "average.nfe.processing_time.minutes": 16,
    "facet": "Cancelada",
    "nfe.status": "Cancelada"
  },
  {
    "average.nfe.processing_time.minutes": 1.1363636363636365,
    "facet": "Negada",
    "nfe.status": "Negada"
  },
  {
    "average.nfe.processing_time.minutes": 0.4956521739130435,
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
      "EmProcessoDeAutorizacao"
    ],
    "max_min": 10,
    "media_min": 1.1363636363636365,
    "p95_min": {
      "95": 5.03125
    }
  },
  {
    "facet": [
      "Autorizada",
      "AutorizadaAguardandoGeracaoPDF"
    ],
    "max_min": 4,
    "media_min": 0.4956521739130435,
    "p95_min": {
      "95": 1.00390625
    }
  }
],
  perfMunicipio: [
  {
    "average.nfe.processing_time.minutes": 27,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Feira de Santana",
    "max.nfe.processing_time.minutes": 27,
    "nfe.municipio_servico": "Feira de Santana",
    "percentile.nfe.processing_time.minutes": {
      "95": 27
    }
  },
  {
    "average.nfe.processing_time.minutes": 5.5,
    "count.nfe.processing_time.minutes": 4,
    "facet": "Taboão da Serra",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "Taboão da Serra",
    "percentile.nfe.processing_time.minutes": {
      "95": 10
    }
  },
  {
    "average.nfe.processing_time.minutes": 5,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Andradina",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Andradina",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 4,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Ribeirão Preto",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Ribeirão Preto",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 3,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Salvador",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Salvador",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 3,
    "count.nfe.processing_time.minutes": 4,
    "facet": "Aparecida de Goiânia",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Aparecida de Goiânia",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Guarapuava",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Guarapuava",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Duque de Caxias",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Duque de Caxias",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Maceió",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Maceió",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 2,
    "facet": "São Pedro da Aldeia",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "São Pedro da Aldeia",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.5,
    "count.nfe.processing_time.minutes": 4,
    "facet": "Aracaju",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Aracaju",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "São José dos Pinhais",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São José dos Pinhais",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "São José do Rio Preto",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São José do Rio Preto",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Blumenau",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Blumenau",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Belo Horizonte",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Belo Horizonte",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Foz do Iguaçu",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Foz do Iguaçu",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Gramado",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Gramado",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Uberlândia",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Uberlândia",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Formiga",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Formiga",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Nova Lima",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Nova Lima",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Varginha",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Varginha",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Niterói",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Niterói",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Londrina",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Londrina",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Bragança Paulista",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Bragança Paulista",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "São Pedro",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São Pedro",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Fortaleza",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Fortaleza",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 4,
    "facet": "Joinville",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Joinville",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Santa Cruz do Sul",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Santa Cruz do Sul",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Jaú",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Jaú",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "São José",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São José",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Guaporé",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Guaporé",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Não informado",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Não informado",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 4,
    "facet": "Curitiba",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Curitiba",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Praia Grande",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Praia Grande",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Goianésia",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Goianésia",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Cuiabá",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Cuiabá",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Contagem",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Contagem",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Manaus",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Manaus",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Mendes",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Mendes",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Itatiba",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Itatiba",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Franca",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Franca",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Linhares",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Linhares",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Indaiatuba",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Indaiatuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Mauá",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Mauá",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Registro",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Registro",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "São Luís",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São Luís",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Anápolis",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Anápolis",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Colatina",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Colatina",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 2,
    "facet": "Imbituba",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Imbituba",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.6666666666666666,
    "count.nfe.processing_time.minutes": 6,
    "facet": "Barueri",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Barueri",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  }
],
  empresasMunicipio: [
  {
    "facet": "Brasília",
    "nfe.municipio_servico": "Brasília",
    "uniqueCount.empresa.razao_social": 36
  },
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
    "facet": "Florianópolis",
    "nfe.municipio_servico": "Florianópolis",
    "uniqueCount.empresa.razao_social": 2
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
    "facet": "Campinas",
    "nfe.municipio_servico": "Campinas",
    "uniqueCount.empresa.razao_social": 1
  }
],
  statsGlobais: [
  {
    "average.nfe.processing_time.minutes": 0.8201438848920863,
    "max.nfe.processing_time.minutes": 27,
    "percentile.nfe.processing_time.minutes": {
      "50": 0,
      "90": 1.0078125,
      "95": 3.015625,
      "99": 10.0625
    }
  }
],
  totalEmpresas: [
  {
    "uniqueCount.empresa.razao_social": 55
  }
],
  totalMunicipios: [
  {
    "uniqueCount.nfe.municipio_servico": 122
  }
],
  volumeMunicipio: [
  {
    "count.nfe.processing_time.minutes": 6,
    "facet": "Barueri",
    "nfe.municipio_servico": "Barueri"
  },
  {
    "count.nfe.processing_time.minutes": 4,
    "facet": "",
    "nfe.municipio_servico": ""
  },
  {
    "count.nfe.processing_time.minutes": 4,
    "facet": "Taboão da Serra",
    "nfe.municipio_servico": "Taboão da Serra"
  },
  {
    "count.nfe.processing_time.minutes": 4,
    "facet": "São Bernardo do Campo",
    "nfe.municipio_servico": "São Bernardo do Campo"
  },
  {
    "count.nfe.processing_time.minutes": 4,
    "facet": "Belém",
    "nfe.municipio_servico": "Belém"
  },
  {
    "count.nfe.processing_time.minutes": 4,
    "facet": "Santo André",
    "nfe.municipio_servico": "Santo André"
  },
  {
    "count.nfe.processing_time.minutes": 4,
    "facet": "Maringá",
    "nfe.municipio_servico": "Maringá"
  },
  {
    "count.nfe.processing_time.minutes": 4,
    "facet": "Joinville",
    "nfe.municipio_servico": "Joinville"
  },
  {
    "count.nfe.processing_time.minutes": 4,
    "facet": "Ouro Preto do Oeste",
    "nfe.municipio_servico": "Ouro Preto do Oeste"
  },
  {
    "count.nfe.processing_time.minutes": 4,
    "facet": "Itu",
    "nfe.municipio_servico": "Itu"
  },
  {
    "count.nfe.processing_time.minutes": 4,
    "facet": "Curitiba",
    "nfe.municipio_servico": "Curitiba"
  },
  {
    "count.nfe.processing_time.minutes": 4,
    "facet": "Santana de Parnaíba",
    "nfe.municipio_servico": "Santana de Parnaíba"
  },
  {
    "count.nfe.processing_time.minutes": 4,
    "facet": "Recife",
    "nfe.municipio_servico": "Recife"
  },
  {
    "count.nfe.processing_time.minutes": 4,
    "facet": "Aracaju",
    "nfe.municipio_servico": "Aracaju"
  },
  {
    "count.nfe.processing_time.minutes": 4,
    "facet": "Aparecida de Goiânia",
    "nfe.municipio_servico": "Aparecida de Goiânia"
  },
  {
    "count.nfe.processing_time.minutes": 4,
    "facet": "São Paulo",
    "nfe.municipio_servico": "São Paulo"
  },
  {
    "count.nfe.processing_time.minutes": 2,
    "facet": "Andradina",
    "nfe.municipio_servico": "Andradina"
  },
  {
    "count.nfe.processing_time.minutes": 2,
    "facet": "Guarapuava",
    "nfe.municipio_servico": "Guarapuava"
  },
  {
    "count.nfe.processing_time.minutes": 2,
    "facet": "São José dos Pinhais",
    "nfe.municipio_servico": "São José dos Pinhais"
  },
  {
    "count.nfe.processing_time.minutes": 2,
    "facet": "Francisco Beltrão",
    "nfe.municipio_servico": "Francisco Beltrão"
  },
  {
    "count.nfe.processing_time.minutes": 2,
    "facet": "Palhoça",
    "nfe.municipio_servico": "Palhoça"
  },
  {
    "count.nfe.processing_time.minutes": 2,
    "facet": "Ipirá",
    "nfe.municipio_servico": "Ipirá"
  },
  {
    "count.nfe.processing_time.minutes": 2,
    "facet": "Teresina",
    "nfe.municipio_servico": "Teresina"
  },
  {
    "count.nfe.processing_time.minutes": 2,
    "facet": "Campo Grande",
    "nfe.municipio_servico": "Campo Grande"
  },
  {
    "count.nfe.processing_time.minutes": 2,
    "facet": "Engenheiro Coelho",
    "nfe.municipio_servico": "Engenheiro Coelho"
  },
  {
    "count.nfe.processing_time.minutes": 2,
    "facet": "São José do Rio Preto",
    "nfe.municipio_servico": "São José do Rio Preto"
  },
  {
    "count.nfe.processing_time.minutes": 2,
    "facet": "São Carlos",
    "nfe.municipio_servico": "São Carlos"
  },
  {
    "count.nfe.processing_time.minutes": 2,
    "facet": "Tapejara",
    "nfe.municipio_servico": "Tapejara"
  },
  {
    "count.nfe.processing_time.minutes": 2,
    "facet": "Mandaguaçu",
    "nfe.municipio_servico": "Mandaguaçu"
  },
  {
    "count.nfe.processing_time.minutes": 2,
    "facet": "Farroupilha",
    "nfe.municipio_servico": "Farroupilha"
  }
],
  municipioStatus: [
  {
    "facet": [
      "Corbélia",
      "SolicitandoAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 370
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
    "empresa.razao_social": "NEXUS EDUCACAO LTDA",
    "facet": "NEXUS EDUCACAO LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "PSI ONLINE CURSO DE PSICOLOGIA LTDA",
    "facet": "PSI ONLINE CURSO DE PSICOLOGIA LTDA",
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
    "latest.nfe.stuck_in_intermediate_status.count": 370
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
    "latest.nfe.stuck_in_intermediate_status.count": 370
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
      "27.790.442 VINICIUS RIBEIRO NASCIMENTO"
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
      "AF MIDIAS LTDA"
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
      "BASE COMPANY LTDA"
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
      "DIALETICO SERVICOS EDUCACIONAIS SS LTDA"
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
      "KETYLLIN REIS COMERCIO E SERVICOS DE PRODUTOS DIGITAIS LTDA"
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
      "MAIS FOCO MENOS ANSIEDADE INFORMACAO EM SAUDE LTDA"
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
      "NETPOS SERVICOS DE INFORMATICA S.A."
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
      "VILLAR E MODESTO ENGENHARIA E TECNOLOGIA LTDA"
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
    "canceladas": 5,
    "devolucoes": 1,
    "em_emissao": 42,
    "email": 336,
    "emitidas": 3292,
    "falhas": 195
  }
],
  volumetriaTimeseries: [
  {
    "beginTimeSeconds": 1782513000,
    "emitidas": 5828,
    "endTimeSeconds": 1782516600,
    "falhas": 509
  },
  {
    "beginTimeSeconds": 1782516600,
    "emitidas": 4967,
    "endTimeSeconds": 1782520200,
    "falhas": 277
  },
  {
    "beginTimeSeconds": 1782520200,
    "emitidas": 5350,
    "endTimeSeconds": 1782523800,
    "falhas": 234
  },
  {
    "beginTimeSeconds": 1782523800,
    "emitidas": 5605,
    "endTimeSeconds": 1782527400,
    "falhas": 201
  },
  {
    "beginTimeSeconds": 1782527400,
    "emitidas": 3237,
    "endTimeSeconds": 1782531000,
    "falhas": 139
  },
  {
    "beginTimeSeconds": 1782531000,
    "emitidas": 8752,
    "endTimeSeconds": 1782534600,
    "falhas": 660
  },
  {
    "beginTimeSeconds": 1782534600,
    "emitidas": 2053,
    "endTimeSeconds": 1782538200,
    "falhas": 25
  },
  {
    "beginTimeSeconds": 1782538200,
    "emitidas": 1986,
    "endTimeSeconds": 1782541800,
    "falhas": 46
  },
  {
    "beginTimeSeconds": 1782541800,
    "emitidas": 1383,
    "endTimeSeconds": 1782545400,
    "falhas": 25
  },
  {
    "beginTimeSeconds": 1782545400,
    "emitidas": 1472,
    "endTimeSeconds": 1782549000,
    "falhas": 30
  },
  {
    "beginTimeSeconds": 1782549000,
    "emitidas": 1867,
    "endTimeSeconds": 1782552600,
    "falhas": 49
  },
  {
    "beginTimeSeconds": 1782552600,
    "emitidas": 1739,
    "endTimeSeconds": 1782556200,
    "falhas": 83
  },
  {
    "beginTimeSeconds": 1782556200,
    "emitidas": 2353,
    "endTimeSeconds": 1782559800,
    "falhas": 156
  },
  {
    "beginTimeSeconds": 1782559800,
    "emitidas": 3710,
    "endTimeSeconds": 1782563400,
    "falhas": 298
  },
  {
    "beginTimeSeconds": 1782563400,
    "emitidas": 6202,
    "endTimeSeconds": 1782567000,
    "falhas": 574
  },
  {
    "beginTimeSeconds": 1782567000,
    "emitidas": 4992,
    "endTimeSeconds": 1782570600,
    "falhas": 437
  },
  {
    "beginTimeSeconds": 1782570600,
    "emitidas": 3551,
    "endTimeSeconds": 1782574200,
    "falhas": 285
  },
  {
    "beginTimeSeconds": 1782574200,
    "emitidas": 4034,
    "endTimeSeconds": 1782577800,
    "falhas": 282
  },
  {
    "beginTimeSeconds": 1782577800,
    "emitidas": 4474,
    "endTimeSeconds": 1782581400,
    "falhas": 238
  },
  {
    "beginTimeSeconds": 1782581400,
    "emitidas": 3100,
    "endTimeSeconds": 1782585000,
    "falhas": 178
  },
  {
    "beginTimeSeconds": 1782585000,
    "emitidas": 2434,
    "endTimeSeconds": 1782588600,
    "falhas": 195
  },
  {
    "beginTimeSeconds": 1782588600,
    "emitidas": 3584,
    "endTimeSeconds": 1782592200,
    "falhas": 163
  },
  {
    "beginTimeSeconds": 1782592200,
    "emitidas": 3717,
    "endTimeSeconds": 1782595800,
    "falhas": 258
  },
  {
    "beginTimeSeconds": 1782595800,
    "emitidas": 3351,
    "endTimeSeconds": 1782599400,
    "falhas": 202
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
    "falhas": 1,
    "ok": 19896
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
    "rejeicao": null,
    "sucesso": null
  }
],
  taxaNfe: [
  {
    "rejeicao": null,
    "sucesso": null
  }
],
  taxaSucessoMunicipio: [],
  taxaRejeicaoMunicipio: [],
  taxaTimeseries: [
  {
    "beginTimeSeconds": 1782585000,
    "endTimeSeconds": 1782586200,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782586200,
    "endTimeSeconds": 1782587400,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782587400,
    "endTimeSeconds": 1782588600,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782588600,
    "endTimeSeconds": 1782589800,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782589800,
    "endTimeSeconds": 1782591000,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782591000,
    "endTimeSeconds": 1782592200,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782592200,
    "endTimeSeconds": 1782593400,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782593400,
    "endTimeSeconds": 1782594600,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782594600,
    "endTimeSeconds": 1782595800,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782595800,
    "endTimeSeconds": 1782597000,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782597000,
    "endTimeSeconds": 1782598200,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1782598200,
    "endTimeSeconds": 1782599400,
    "rejeicao": null,
    "sucesso": null
  }
],
  taxaSucessoMunicipioTs: []
};
