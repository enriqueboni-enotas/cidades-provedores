// Gerado automaticamente pelo workflow monitoramento-nfe.yml em 15/08/2026 10:17 (Brasilia)
// NAO EDITAR MANUALMENTE
var monitoramentoNfeData = {
  geradoEm: "15/08/2026 10:17",
  travadasPorMunicipio: [
  {
    "facet": "Corbélia",
    "latest.nfe.stuck_in_intermediate_status.count": 59,
    "nfe.municipio_servico": "Corbélia"
  },
  {
    "facet": "EXTERIOR",
    "latest.nfe.stuck_in_intermediate_status.count": 4,
    "nfe.municipio_servico": "EXTERIOR"
  },
  {
    "facet": "Dourados",
    "latest.nfe.stuck_in_intermediate_status.count": 3,
    "nfe.municipio_servico": "Dourados"
  },
  {
    "facet": "Paranapanema",
    "latest.nfe.stuck_in_intermediate_status.count": 3,
    "nfe.municipio_servico": "Paranapanema"
  },
  {
    "facet": "Naviraí",
    "latest.nfe.stuck_in_intermediate_status.count": 2,
    "nfe.municipio_servico": "Naviraí"
  },
  {
    "facet": "Itapipoca",
    "latest.nfe.stuck_in_intermediate_status.count": 2,
    "nfe.municipio_servico": "Itapipoca"
  },
  {
    "facet": "Conselheiro Lafaiete",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Conselheiro Lafaiete"
  },
  {
    "facet": "Santo André",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Santo André"
  },
  {
    "facet": "Urupá",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Urupá"
  },
  {
    "facet": "Sapiranga",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Sapiranga"
  },
  {
    "facet": "Orlândia",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Orlândia"
  },
  {
    "facet": "Pontes e Lacerda",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Pontes e Lacerda"
  },
  {
    "facet": "Tuparendi",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Tuparendi"
  }
],
  tempoMaxProcessamento: [
  {
    "facet": "São Paulo",
    "max.nfe.processing_time.minutes": 48,
    "nfe.municipio_servico": "São Paulo"
  },
  {
    "facet": "Goiânia",
    "max.nfe.processing_time.minutes": 16,
    "nfe.municipio_servico": "Goiânia"
  },
  {
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 14,
    "nfe.municipio_servico": "Caraguatatuba"
  },
  {
    "facet": "Taboão da Serra",
    "max.nfe.processing_time.minutes": 11,
    "nfe.municipio_servico": "Taboão da Serra"
  },
  {
    "facet": "Ribeirão Preto",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "Ribeirão Preto"
  },
  {
    "facet": "Cuiabá",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "Cuiabá"
  },
  {
    "facet": "Duque de Caxias",
    "max.nfe.processing_time.minutes": 9,
    "nfe.municipio_servico": "Duque de Caxias"
  },
  {
    "facet": "Brasília",
    "max.nfe.processing_time.minutes": 9,
    "nfe.municipio_servico": "Brasília"
  },
  {
    "facet": "Mauá",
    "max.nfe.processing_time.minutes": 9,
    "nfe.municipio_servico": "Mauá"
  },
  {
    "facet": "Itu",
    "max.nfe.processing_time.minutes": 8,
    "nfe.municipio_servico": "Itu"
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
    "average.nfe.processing_time.minutes": 48,
    "facet": "Cancelada",
    "nfe.status": "Cancelada"
  },
  {
    "average.nfe.processing_time.minutes": 0.9640231092436975,
    "facet": "Negada",
    "nfe.status": "Negada"
  },
  {
    "average.nfe.processing_time.minutes": 0.34376217058288977,
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
    "max_min": 48,
    "media_min": 48,
    "p95_min": {
      "95": 48
    }
  },
  {
    "facet": [
      "Negada",
      "EmProcessoDeAutorizacao"
    ],
    "max_min": 16,
    "media_min": 0.9640231092436975,
    "p95_min": {
      "95": 8.0625
    }
  },
  {
    "facet": [
      "Autorizada",
      "AutorizadaAguardandoGeracaoPDF"
    ],
    "max_min": 2,
    "media_min": 0.34376217058288977,
    "p95_min": {
      "95": 1.001953125
    }
  }
],
  perfMunicipio: [
  {
    "average.nfe.processing_time.minutes": 13.189655172413794,
    "count.nfe.processing_time.minutes": 116,
    "facet": "São Paulo",
    "max.nfe.processing_time.minutes": 48,
    "nfe.municipio_servico": "São Paulo",
    "percentile.nfe.processing_time.minutes": {
      "95": 48
    }
  },
  {
    "average.nfe.processing_time.minutes": 8.883720930232558,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 14,
    "nfe.municipio_servico": "Caraguatatuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 14
    }
  },
  {
    "average.nfe.processing_time.minutes": 8.232558139534884,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Duque de Caxias",
    "max.nfe.processing_time.minutes": 9,
    "nfe.municipio_servico": "Duque de Caxias",
    "percentile.nfe.processing_time.minutes": {
      "95": 9
    }
  },
  {
    "average.nfe.processing_time.minutes": 7.488372093023256,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Ribeirão Preto",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "Ribeirão Preto",
    "percentile.nfe.processing_time.minutes": {
      "95": 10
    }
  },
  {
    "average.nfe.processing_time.minutes": 7.325581395348837,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Cuiabá",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "Cuiabá",
    "percentile.nfe.processing_time.minutes": {
      "95": 10
    }
  },
  {
    "average.nfe.processing_time.minutes": 6.8604651162790695,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Goiânia",
    "max.nfe.processing_time.minutes": 16,
    "nfe.municipio_servico": "Goiânia",
    "percentile.nfe.processing_time.minutes": {
      "95": 16
    }
  },
  {
    "average.nfe.processing_time.minutes": 5,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Biguaçu",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Biguaçu",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.6226415094339623,
    "count.nfe.processing_time.minutes": 53,
    "facet": "Brasília",
    "max.nfe.processing_time.minutes": 9,
    "nfe.municipio_servico": "Brasília",
    "percentile.nfe.processing_time.minutes": {
      "95": 9
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.3333333333333335,
    "count.nfe.processing_time.minutes": 30,
    "facet": "Mauá",
    "max.nfe.processing_time.minutes": 9,
    "nfe.municipio_servico": "Mauá",
    "percentile.nfe.processing_time.minutes": {
      "95": 9
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.0697674418604652,
    "count.nfe.processing_time.minutes": 129,
    "facet": "Taboão da Serra",
    "max.nfe.processing_time.minutes": 11,
    "nfe.municipio_servico": "Taboão da Serra",
    "percentile.nfe.processing_time.minutes": {
      "95": 11
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.0232558139534884,
    "count.nfe.processing_time.minutes": 86,
    "facet": "Novo Hamburgo",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Novo Hamburgo",
    "percentile.nfe.processing_time.minutes": {
      "95": 6
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.883720930232558,
    "count.nfe.processing_time.minutes": 86,
    "facet": "Vitória",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Vitória",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.3488372093023255,
    "count.nfe.processing_time.minutes": 86,
    "facet": "Curitiba",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Curitiba",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.1395348837209303,
    "count.nfe.processing_time.minutes": 86,
    "facet": "Taubaté",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Taubaté",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Guaratuba",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Guaratuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Nova Serrana",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Nova Serrana",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Bom Jesus do Itabapoana",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Bom Jesus do Itabapoana",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Varginha",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Varginha",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 20,
    "facet": "Cariacica",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Cariacica",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 5,
    "facet": "Luzerna",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Luzerna",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Ponte Nova",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Ponte Nova",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 25,
    "facet": "Araçatuba",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Araçatuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 25,
    "facet": "Paraibuna",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Paraibuna",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Itapecerica",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Itapecerica",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Teutônia",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Teutônia",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Montes Claros",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Montes Claros",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 30,
    "facet": "Colatina",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Colatina",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Guarapuava",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Guarapuava",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 35,
    "facet": "Barra Mansa",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Barra Mansa",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Bento Gonçalves",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Bento Gonçalves",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Pará de Minas",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Pará de Minas",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Parnamirim",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Parnamirim",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 86,
    "facet": "São Roque",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São Roque",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Chapecó",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Chapecó",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 20,
    "facet": "Santo Antônio da Patrulha",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Santo Antônio da Patrulha",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Pinhais",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Pinhais",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 5,
    "facet": "Dumont",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Dumont",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Pindamonhangaba",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Pindamonhangaba",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Porto Velho",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Porto Velho",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Vitória da Conquista",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Vitória da Conquista",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 40,
    "facet": "Imperatriz",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Imperatriz",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 40,
    "facet": "Schroeder",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Schroeder",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 30,
    "facet": "Candelária",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Candelária",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.9651162790697675,
    "count.nfe.processing_time.minutes": 86,
    "facet": "Itu",
    "max.nfe.processing_time.minutes": 8,
    "nfe.municipio_servico": "Itu",
    "percentile.nfe.processing_time.minutes": {
      "95": 8
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.963855421686747,
    "count.nfe.processing_time.minutes": 83,
    "facet": "Caetité",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Caetité",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.8888888888888888,
    "count.nfe.processing_time.minutes": 45,
    "facet": "Cravinhos",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Cravinhos",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.8837209302325582,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Belém",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Belém",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.6976744186046512,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Santa Maria",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Santa Maria",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.6976744186046512,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Jaraguá do Sul",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Jaraguá do Sul",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 0.6976744186046512,
    "count.nfe.processing_time.minutes": 43,
    "facet": "Peruíbe",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Peruíbe",
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
    "facet": "Dourados",
    "nfe.municipio_servico": "Dourados",
    "uniqueCount.empresa.razao_social": 2
  },
  {
    "facet": "EXTERIOR",
    "nfe.municipio_servico": "EXTERIOR",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Conselheiro Lafaiete",
    "nfe.municipio_servico": "Conselheiro Lafaiete",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Naviraí",
    "nfe.municipio_servico": "Naviraí",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Santo André",
    "nfe.municipio_servico": "Santo André",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Corbélia",
    "nfe.municipio_servico": "Corbélia",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Sapiranga",
    "nfe.municipio_servico": "Sapiranga",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Itapipoca",
    "nfe.municipio_servico": "Itapipoca",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Orlândia",
    "nfe.municipio_servico": "Orlândia",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Paranapanema",
    "nfe.municipio_servico": "Paranapanema",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Pontes e Lacerda",
    "nfe.municipio_servico": "Pontes e Lacerda",
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
    "average.nfe.processing_time.minutes": 0.67229876093926,
    "max.nfe.processing_time.minutes": 48,
    "percentile.nfe.processing_time.minutes": {
      "50": 0,
      "90": 1.015625,
      "95": 1.015625,
      "99": 9.125
    }
  }
],
  totalEmpresas: [
  {
    "uniqueCount.empresa.razao_social": 14
  }
],
  totalMunicipios: [
  {
    "uniqueCount.nfe.municipio_servico": 221
  }
],
  volumeMunicipio: [
  {
    "count.nfe.processing_time.minutes": 172,
    "facet": "Barueri",
    "nfe.municipio_servico": "Barueri"
  },
  {
    "count.nfe.processing_time.minutes": 129,
    "facet": "Taboão da Serra",
    "nfe.municipio_servico": "Taboão da Serra"
  },
  {
    "count.nfe.processing_time.minutes": 129,
    "facet": "São Bernardo do Campo",
    "nfe.municipio_servico": "São Bernardo do Campo"
  },
  {
    "count.nfe.processing_time.minutes": 116,
    "facet": "São Paulo",
    "nfe.municipio_servico": "São Paulo"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "",
    "nfe.municipio_servico": ""
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Caicó",
    "nfe.municipio_servico": "Caicó"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Belo Horizonte",
    "nfe.municipio_servico": "Belo Horizonte"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Barra do Piraí",
    "nfe.municipio_servico": "Barra do Piraí"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Nova Lima",
    "nfe.municipio_servico": "Nova Lima"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Tuparendi",
    "nfe.municipio_servico": "Tuparendi"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Bragança Paulista",
    "nfe.municipio_servico": "Bragança Paulista"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Rio de Janeiro",
    "nfe.municipio_servico": "Rio de Janeiro"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Itu",
    "nfe.municipio_servico": "Itu"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Curitiba",
    "nfe.municipio_servico": "Curitiba"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "São José dos Campos",
    "nfe.municipio_servico": "São José dos Campos"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Santos",
    "nfe.municipio_servico": "Santos"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Jaboticabal",
    "nfe.municipio_servico": "Jaboticabal"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Indaiatuba",
    "nfe.municipio_servico": "Indaiatuba"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Vila Velha",
    "nfe.municipio_servico": "Vila Velha"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Cascavel",
    "nfe.municipio_servico": "Cascavel"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Imbé",
    "nfe.municipio_servico": "Imbé"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Florianópolis",
    "nfe.municipio_servico": "Florianópolis"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Governador Valadares",
    "nfe.municipio_servico": "Governador Valadares"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Uberlândia",
    "nfe.municipio_servico": "Uberlândia"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Novo Hamburgo",
    "nfe.municipio_servico": "Novo Hamburgo"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Presidente Prudente",
    "nfe.municipio_servico": "Presidente Prudente"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Taubaté",
    "nfe.municipio_servico": "Taubaté"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Camaçari",
    "nfe.municipio_servico": "Camaçari"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "Niterói",
    "nfe.municipio_servico": "Niterói"
  },
  {
    "count.nfe.processing_time.minutes": 86,
    "facet": "São Roque",
    "nfe.municipio_servico": "São Roque"
  }
],
  municipioStatus: [
  {
    "facet": [
      "Corbélia",
      "SolicitandoAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 59
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
      "Dourados",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 3
  },
  {
    "facet": [
      "Paranapanema",
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
      "Naviraí",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 2
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
      "Orlândia",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Pontes e Lacerda",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Santo André",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Sapiranga",
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
    "latest.nfe.stuck_in_intermediate_status.count": 59
  },
  {
    "empresa.razao_social": "BLEGON LTDA",
    "facet": "BLEGON LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 28
  },
  {
    "empresa.razao_social": "PROF JOTA CURSOS LTDA",
    "facet": "PROF JOTA CURSOS LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 3
  },
  {
    "empresa.razao_social": "NEILA MARQUES DE FREITAS F LTDA",
    "facet": "NEILA MARQUES DE FREITAS F LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "empresa.razao_social": "MENTE INTERATIVA",
    "facet": "MENTE INTERATIVA",
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "empresa.razao_social": "MG PLENA VITA LTDA",
    "facet": "MG PLENA VITA LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "empresa.razao_social": "AG EMPREENDIMENTOS DIGITAIS LTDA",
    "facet": "AG EMPREENDIMENTOS DIGITAIS LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "JACK SANTOS CONTEUDOS DIGITAIS E EPILACAO LTDA",
    "facet": "JACK SANTOS CONTEUDOS DIGITAIS E EPILACAO LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "AC CREATOR HUB LTDA",
    "facet": "AC CREATOR HUB LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "HYYPERION EDUCACAO CORPORATIVA LTDA",
    "facet": "HYYPERION EDUCACAO CORPORATIVA LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "GABRIEL SCHAEFFER DIGITAL LTDA",
    "facet": "GABRIEL SCHAEFFER DIGITAL LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "GPR MARKETING & SERVICOS DIGITAIS LTDA",
    "facet": "GPR MARKETING & SERVICOS DIGITAIS LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  travadasPorStatusMunicipio: [
  {
    "facet": [
      "SolicitandoAutorizacao",
      "Corbélia"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 59
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
      "Dourados"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 3
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Paranapanema"
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
      "EmProcessoDeAutorizacao",
      "Naviraí"
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
      "Conselheiro Lafaiete"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Orlândia"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Pontes e Lacerda"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Santo André"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Sapiranga"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Tuparendi"
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
    "latest.nfe.stuck_in_intermediate_status.count": 59
  },
  {
    "facet": [
      "",
      "BLEGON LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 28
  },
  {
    "facet": [
      "",
      "INSTITUTO AGROTRIBUTARIO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 3
  },
  {
    "facet": [
      "",
      "PROF JOTA CURSOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 3
  },
  {
    "facet": [
      "",
      "MENTE INTERATIVA"
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
      "AC CREATOR HUB LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "AG EMPREENDIMENTOS DIGITAIS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "GABRIEL SCHAEFFER DIGITAL LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "GPR MARKETING & SERVICOS DIGITAIS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "HYYPERION EDUCACAO CORPORATIVA LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "JACK SANTOS CONTEUDOS DIGITAIS E EPILACAO LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "JP07 LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  volumetriaHora: [
  {
    "canceladas": 14,
    "devolucoes": 2,
    "em_emissao": 207,
    "email": 0,
    "emitidas": 6691,
    "falhas": 1158
  }
],
  volumetriaTimeseries: [
  {
    "beginTimeSeconds": 1786713300,
    "emitidas": 9604,
    "endTimeSeconds": 1786716900,
    "falhas": 3055
  },
  {
    "beginTimeSeconds": 1786716900,
    "emitidas": 5143,
    "endTimeSeconds": 1786720500,
    "falhas": 1662
  },
  {
    "beginTimeSeconds": 1786720500,
    "emitidas": 4821,
    "endTimeSeconds": 1786724100,
    "falhas": 1531
  },
  {
    "beginTimeSeconds": 1786724100,
    "emitidas": 6597,
    "endTimeSeconds": 1786727700,
    "falhas": 1159
  },
  {
    "beginTimeSeconds": 1786727700,
    "emitidas": 4469,
    "endTimeSeconds": 1786731300,
    "falhas": 2421
  },
  {
    "beginTimeSeconds": 1786731300,
    "emitidas": 6900,
    "endTimeSeconds": 1786734900,
    "falhas": 2963
  },
  {
    "beginTimeSeconds": 1786734900,
    "emitidas": 7201,
    "endTimeSeconds": 1786738500,
    "falhas": 5777
  },
  {
    "beginTimeSeconds": 1786738500,
    "emitidas": 5884,
    "endTimeSeconds": 1786742100,
    "falhas": 1458
  },
  {
    "beginTimeSeconds": 1786742100,
    "emitidas": 2799,
    "endTimeSeconds": 1786745700,
    "falhas": 973
  },
  {
    "beginTimeSeconds": 1786745700,
    "emitidas": 3960,
    "endTimeSeconds": 1786749300,
    "falhas": 689
  },
  {
    "beginTimeSeconds": 1786749300,
    "emitidas": 4691,
    "endTimeSeconds": 1786752900,
    "falhas": 657
  },
  {
    "beginTimeSeconds": 1786752900,
    "emitidas": 7284,
    "endTimeSeconds": 1786756500,
    "falhas": 480
  },
  {
    "beginTimeSeconds": 1786756500,
    "emitidas": 5424,
    "endTimeSeconds": 1786760100,
    "falhas": 584
  },
  {
    "beginTimeSeconds": 1786760100,
    "emitidas": 2730,
    "endTimeSeconds": 1786763700,
    "falhas": 230
  },
  {
    "beginTimeSeconds": 1786763700,
    "emitidas": 9936,
    "endTimeSeconds": 1786767300,
    "falhas": 2405
  },
  {
    "beginTimeSeconds": 1786767300,
    "emitidas": 1437,
    "endTimeSeconds": 1786770900,
    "falhas": 235
  },
  {
    "beginTimeSeconds": 1786770900,
    "emitidas": 1604,
    "endTimeSeconds": 1786774500,
    "falhas": 90
  },
  {
    "beginTimeSeconds": 1786774500,
    "emitidas": 1822,
    "endTimeSeconds": 1786778100,
    "falhas": 470
  },
  {
    "beginTimeSeconds": 1786778100,
    "emitidas": 809,
    "endTimeSeconds": 1786781700,
    "falhas": 136
  },
  {
    "beginTimeSeconds": 1786781700,
    "emitidas": 1598,
    "endTimeSeconds": 1786785300,
    "falhas": 168
  },
  {
    "beginTimeSeconds": 1786785300,
    "emitidas": 2473,
    "endTimeSeconds": 1786788900,
    "falhas": 313
  },
  {
    "beginTimeSeconds": 1786788900,
    "emitidas": 2869,
    "endTimeSeconds": 1786792500,
    "falhas": 395
  },
  {
    "beginTimeSeconds": 1786792500,
    "emitidas": 4989,
    "endTimeSeconds": 1786796100,
    "falhas": 706
  },
  {
    "beginTimeSeconds": 1786796100,
    "emitidas": 6765,
    "endTimeSeconds": 1786799700,
    "falhas": 1152
  }
],
  filaOperacoes: [
  {
    "pendentes": null,
    "rodando": 1
  }
],
  webhooks: [
  {
    "dead_letter": 0,
    "falhas": 0,
    "ok": 85869
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
    "rejeicao": 52.312425727262365,
    "sucesso": 47.687574272737635
  }
],
  taxaNfe: [
  {
    "rejeicao": 96.85314685314685,
    "sucesso": 3.1468531468531467
  }
],
  taxaSucessoMunicipio: [
  {
    "facet": "",
    "municipio.nome": "",
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
    "facet": "Teresina",
    "municipio.nome": "Teresina",
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
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
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
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
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
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
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
    "facet": "Nova Serrana",
    "municipio.nome": "Nova Serrana",
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
    "facet": "Bom Jesus do Itabapoana",
    "municipio.nome": "Bom Jesus do Itabapoana",
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
    "facet": "Luzerna",
    "municipio.nome": "Luzerna",
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
    "facet": "Itu",
    "municipio.nome": "Itu",
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
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
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
    "facet": "Camaquã",
    "municipio.nome": "Camaquã",
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
    "facet": "Brasília",
    "municipio.nome": "Brasília",
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
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
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
    "facet": "Xangri-lá",
    "municipio.nome": "Xangri-lá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
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
    "facet": "Peruíbe",
    "municipio.nome": "Peruíbe",
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
    "facet": "Itapetininga",
    "municipio.nome": "Itapetininga",
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
    "facet": "Salvador",
    "municipio.nome": "Salvador",
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
    "facet": "São Lourenço do Sul",
    "municipio.nome": "São Lourenço do Sul",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
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
    "facet": "Campinas",
    "municipio.nome": "Campinas",
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
    "facet": "Franca",
    "municipio.nome": "Franca",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
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
    "facet": "Candelária",
    "municipio.nome": "Candelária",
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
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ibiúna",
    "municipio.nome": "Ibiúna",
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
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
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
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
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
    "facet": "Siqueira Campos",
    "municipio.nome": "Siqueira Campos",
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
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
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
    "facet": "Coroatá",
    "municipio.nome": "Coroatá",
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
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
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
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
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
    "facet": "Santos",
    "municipio.nome": "Santos",
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
    "facet": "Osório",
    "municipio.nome": "Osório",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
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
    "facet": "Criciúma",
    "municipio.nome": "Criciúma",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
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
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
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
    "facet": "Araraquara",
    "municipio.nome": "Araraquara",
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
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
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
    "facet": "Chapecó",
    "municipio.nome": "Chapecó",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
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
    "facet": "São José",
    "municipio.nome": "São José",
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
    "facet": "Contagem",
    "municipio.nome": "Contagem",
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
    "facet": "Vitória da Conquista",
    "municipio.nome": "Vitória da Conquista",
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
    "facet": "Ibague",
    "municipio.nome": "Ibague",
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
    "facet": "Mauá",
    "municipio.nome": "Mauá",
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
    "facet": "Dois Irmãos",
    "municipio.nome": "Dois Irmãos",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Porangatu",
    "municipio.nome": "Porangatu",
    "rejeitadas": 3,
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
    "facet": "Tacaratu",
    "municipio.nome": "Tacaratu",
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
    "facet": "Goianésia",
    "municipio.nome": "Goianésia",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Serra Negra",
    "municipio.nome": "Serra Negra",
    "rejeitadas": 5,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Porto Seguro",
    "municipio.nome": "Porto Seguro",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Garopaba",
    "municipio.nome": "Garopaba",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Biguaçu",
    "municipio.nome": "Biguaçu",
    "rejeitadas": 5,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Pedro da Aldeia",
    "municipio.nome": "São Pedro da Aldeia",
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
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 16,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jaguaquara",
    "municipio.nome": "Jaguaquara",
    "rejeitadas": 12,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Campos do Jordão",
    "municipio.nome": "Campos do Jordão",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guarapari",
    "municipio.nome": "Guarapari",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ourinhos",
    "municipio.nome": "Ourinhos",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Valinhos",
    "municipio.nome": "Valinhos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Araranguá",
    "municipio.nome": "Araranguá",
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
    "facet": "Garibaldi",
    "municipio.nome": "Garibaldi",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Mogi das Cruzes",
    "municipio.nome": "Mogi das Cruzes",
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
    "facet": "Marataízes",
    "municipio.nome": "Marataízes",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Vicente",
    "municipio.nome": "São Vicente",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
    "rejeitadas": 20,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Pedro",
    "municipio.nome": "São Pedro",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Macaé",
    "municipio.nome": "Macaé",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itaobim",
    "municipio.nome": "Itaobim",
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
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 2,
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
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 5,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 13,
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
    "facet": "Tangará",
    "municipio.nome": "Tangará",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 18,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Rio Doce",
    "municipio.nome": "Rio Doce",
    "rejeitadas": 12,
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
    "facet": "Tietê",
    "municipio.nome": "Tietê",
    "rejeitadas": 1,
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
    "facet": "Erechim",
    "municipio.nome": "Erechim",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Anápolis",
    "municipio.nome": "Anápolis",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  }
],
  taxaRejeicaoMunicipio: [
  {
    "facet": "Dois Irmãos",
    "municipio.nome": "Dois Irmãos",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Porangatu",
    "municipio.nome": "Porangatu",
    "rejeitadas": 3,
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
    "facet": "Tacaratu",
    "municipio.nome": "Tacaratu",
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
    "facet": "Goianésia",
    "municipio.nome": "Goianésia",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Serra Negra",
    "municipio.nome": "Serra Negra",
    "rejeitadas": 5,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Porto Seguro",
    "municipio.nome": "Porto Seguro",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Garopaba",
    "municipio.nome": "Garopaba",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Biguaçu",
    "municipio.nome": "Biguaçu",
    "rejeitadas": 5,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Pedro da Aldeia",
    "municipio.nome": "São Pedro da Aldeia",
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
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 16,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jaguaquara",
    "municipio.nome": "Jaguaquara",
    "rejeitadas": 12,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Campos do Jordão",
    "municipio.nome": "Campos do Jordão",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Guarapari",
    "municipio.nome": "Guarapari",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ourinhos",
    "municipio.nome": "Ourinhos",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Valinhos",
    "municipio.nome": "Valinhos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Araranguá",
    "municipio.nome": "Araranguá",
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
    "facet": "Garibaldi",
    "municipio.nome": "Garibaldi",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Mogi das Cruzes",
    "municipio.nome": "Mogi das Cruzes",
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
    "facet": "Marataízes",
    "municipio.nome": "Marataízes",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Vicente",
    "municipio.nome": "São Vicente",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
    "rejeitadas": 20,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Pedro",
    "municipio.nome": "São Pedro",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Macaé",
    "municipio.nome": "Macaé",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itaobim",
    "municipio.nome": "Itaobim",
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
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 2,
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
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 5,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 13,
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
    "facet": "Tangará",
    "municipio.nome": "Tangará",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 18,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Rio Doce",
    "municipio.nome": "Rio Doce",
    "rejeitadas": 12,
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
    "facet": "Tietê",
    "municipio.nome": "Tietê",
    "rejeitadas": 1,
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
    "facet": "Erechim",
    "municipio.nome": "Erechim",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Anápolis",
    "municipio.nome": "Anápolis",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "",
    "municipio.nome": "",
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
    "facet": "Teresina",
    "municipio.nome": "Teresina",
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
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
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
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
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
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
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
    "facet": "Nova Serrana",
    "municipio.nome": "Nova Serrana",
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
    "facet": "Bom Jesus do Itabapoana",
    "municipio.nome": "Bom Jesus do Itabapoana",
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
    "facet": "Luzerna",
    "municipio.nome": "Luzerna",
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
    "facet": "Itu",
    "municipio.nome": "Itu",
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
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
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
    "facet": "Camaquã",
    "municipio.nome": "Camaquã",
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
    "facet": "Brasília",
    "municipio.nome": "Brasília",
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
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
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
    "facet": "Xangri-lá",
    "municipio.nome": "Xangri-lá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
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
    "facet": "Peruíbe",
    "municipio.nome": "Peruíbe",
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
    "facet": "Itapetininga",
    "municipio.nome": "Itapetininga",
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
    "facet": "Salvador",
    "municipio.nome": "Salvador",
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
    "facet": "São Lourenço do Sul",
    "municipio.nome": "São Lourenço do Sul",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
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
    "facet": "Campinas",
    "municipio.nome": "Campinas",
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
    "facet": "Franca",
    "municipio.nome": "Franca",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
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
    "facet": "Candelária",
    "municipio.nome": "Candelária",
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
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ibiúna",
    "municipio.nome": "Ibiúna",
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
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
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
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
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
    "facet": "Siqueira Campos",
    "municipio.nome": "Siqueira Campos",
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
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
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
    "facet": "Coroatá",
    "municipio.nome": "Coroatá",
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
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
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
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
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
    "facet": "Santos",
    "municipio.nome": "Santos",
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
    "facet": "Osório",
    "municipio.nome": "Osório",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
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
    "facet": "Criciúma",
    "municipio.nome": "Criciúma",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
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
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
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
    "facet": "Araraquara",
    "municipio.nome": "Araraquara",
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
    "facet": "Novo Hamburgo",
    "municipio.nome": "Novo Hamburgo",
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
    "facet": "Chapecó",
    "municipio.nome": "Chapecó",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
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
    "facet": "São José",
    "municipio.nome": "São José",
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
    "facet": "Contagem",
    "municipio.nome": "Contagem",
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
    "facet": "Vitória da Conquista",
    "municipio.nome": "Vitória da Conquista",
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
    "facet": "Ibague",
    "municipio.nome": "Ibague",
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
    "facet": "Mauá",
    "municipio.nome": "Mauá",
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
    "beginTimeSeconds": 1786785360,
    "endTimeSeconds": 1786786560,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1786786560,
    "endTimeSeconds": 1786787760,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1786787760,
    "endTimeSeconds": 1786788960,
    "rejeicao": 51.77165354330709,
    "sucesso": 48.22834645669291
  },
  {
    "beginTimeSeconds": 1786788960,
    "endTimeSeconds": 1786790160,
    "rejeicao": 53.063224963241304,
    "sucesso": 46.936775036758696
  },
  {
    "beginTimeSeconds": 1786790160,
    "endTimeSeconds": 1786791360,
    "rejeicao": 53.50605026372944,
    "sucesso": 46.49394973627056
  },
  {
    "beginTimeSeconds": 1786791360,
    "endTimeSeconds": 1786792560,
    "rejeicao": 53.768115942028984,
    "sucesso": 46.231884057971016
  },
  {
    "beginTimeSeconds": 1786792560,
    "endTimeSeconds": 1786793760,
    "rejeicao": 54.23430735930736,
    "sucesso": 45.76569264069264
  },
  {
    "beginTimeSeconds": 1786793760,
    "endTimeSeconds": 1786794960,
    "rejeicao": 54.94631901840491,
    "sucesso": 45.05368098159509
  },
  {
    "beginTimeSeconds": 1786794960,
    "endTimeSeconds": 1786796160,
    "rejeicao": 55.93139018831714,
    "sucesso": 44.06860981168286
  },
  {
    "beginTimeSeconds": 1786796160,
    "endTimeSeconds": 1786797360,
    "rejeicao": 59.04640272456364,
    "sucesso": 40.95359727543636
  },
  {
    "beginTimeSeconds": 1786797360,
    "endTimeSeconds": 1786798560,
    "rejeicao": 59.69392728336095,
    "sucesso": 40.30607271663905
  },
  {
    "beginTimeSeconds": 1786798560,
    "endTimeSeconds": 1786799760,
    "rejeicao": 60.111317254174395,
    "sucesso": 39.888682745825605
  }
],
  taxaSucessoMunicipioTs: [{"facet": "Barra Mansa", "beginTimeSeconds": 1786785360, "endTimeSeconds": 1786786560, "municipio.nome": "Barra Mansa", "sucesso": null}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786786560, "endTimeSeconds": 1786787760, "municipio.nome": "Barra Mansa", "sucesso": null}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786787760, "endTimeSeconds": 1786788960, "municipio.nome": "Barra Mansa", "sucesso": null}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786788960, "endTimeSeconds": 1786790160, "municipio.nome": "Barra Mansa", "sucesso": null}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786790160, "endTimeSeconds": 1786791360, "municipio.nome": "Barra Mansa", "sucesso": null}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786791360, "endTimeSeconds": 1786792560, "municipio.nome": "Barra Mansa", "sucesso": null}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786792560, "endTimeSeconds": 1786793760, "municipio.nome": "Barra Mansa", "sucesso": null}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786793760, "endTimeSeconds": 1786794960, "municipio.nome": "Barra Mansa", "sucesso": null}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786794960, "endTimeSeconds": 1786796160, "municipio.nome": "Barra Mansa", "sucesso": null}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786796160, "endTimeSeconds": 1786797360, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786797360, "endTimeSeconds": 1786798560, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Barra Mansa", "beginTimeSeconds": 1786798560, "endTimeSeconds": 1786799760, "municipio.nome": "Barra Mansa", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786785360, "endTimeSeconds": 1786786560, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": null}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786786560, "endTimeSeconds": 1786787760, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": null}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786787760, "endTimeSeconds": 1786788960, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786788960, "endTimeSeconds": 1786790160, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786790160, "endTimeSeconds": 1786791360, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786791360, "endTimeSeconds": 1786792560, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786792560, "endTimeSeconds": 1786793760, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786793760, "endTimeSeconds": 1786794960, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786794960, "endTimeSeconds": 1786796160, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786796160, "endTimeSeconds": 1786797360, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786797360, "endTimeSeconds": 1786798560, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786798560, "endTimeSeconds": 1786799760, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786785360, "endTimeSeconds": 1786786560, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": null}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786786560, "endTimeSeconds": 1786787760, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": null}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786787760, "endTimeSeconds": 1786788960, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": 100.0}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786788960, "endTimeSeconds": 1786790160, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": 100.0}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786790160, "endTimeSeconds": 1786791360, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": 100.0}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786791360, "endTimeSeconds": 1786792560, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": 100.0}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786792560, "endTimeSeconds": 1786793760, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": 100.0}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786793760, "endTimeSeconds": 1786794960, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": 100.0}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786794960, "endTimeSeconds": 1786796160, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": 100.0}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786796160, "endTimeSeconds": 1786797360, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": 100.0}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786797360, "endTimeSeconds": 1786798560, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": 100.0}, {"facet": "Francisco Beltr\u00e3o", "beginTimeSeconds": 1786798560, "endTimeSeconds": 1786799760, "municipio.nome": "Francisco Beltr\u00e3o", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1786785360, "endTimeSeconds": 1786786560, "municipio.nome": "Salto", "sucesso": null}, {"facet": "Salto", "beginTimeSeconds": 1786786560, "endTimeSeconds": 1786787760, "municipio.nome": "Salto", "sucesso": null}, {"facet": "Salto", "beginTimeSeconds": 1786787760, "endTimeSeconds": 1786788960, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1786788960, "endTimeSeconds": 1786790160, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1786790160, "endTimeSeconds": 1786791360, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1786791360, "endTimeSeconds": 1786792560, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1786792560, "endTimeSeconds": 1786793760, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1786793760, "endTimeSeconds": 1786794960, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1786794960, "endTimeSeconds": 1786796160, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1786796160, "endTimeSeconds": 1786797360, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1786797360, "endTimeSeconds": 1786798560, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1786798560, "endTimeSeconds": 1786799760, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786785360, "endTimeSeconds": 1786786560, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": null}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786786560, "endTimeSeconds": 1786787760, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": null}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786787760, "endTimeSeconds": 1786788960, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786788960, "endTimeSeconds": 1786790160, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786790160, "endTimeSeconds": 1786791360, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786791360, "endTimeSeconds": 1786792560, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786792560, "endTimeSeconds": 1786793760, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786793760, "endTimeSeconds": 1786794960, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786794960, "endTimeSeconds": 1786796160, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786796160, "endTimeSeconds": 1786797360, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786797360, "endTimeSeconds": 1786798560, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "Santa Rita do Passa Quatro", "beginTimeSeconds": 1786798560, "endTimeSeconds": 1786799760, "municipio.nome": "Santa Rita do Passa Quatro", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786785360, "endTimeSeconds": 1786786560, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786786560, "endTimeSeconds": 1786787760, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786787760, "endTimeSeconds": 1786788960, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786788960, "endTimeSeconds": 1786790160, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786790160, "endTimeSeconds": 1786791360, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786791360, "endTimeSeconds": 1786792560, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786792560, "endTimeSeconds": 1786793760, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786793760, "endTimeSeconds": 1786794960, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786794960, "endTimeSeconds": 1786796160, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786796160, "endTimeSeconds": 1786797360, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786797360, "endTimeSeconds": 1786798560, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786798560, "endTimeSeconds": 1786799760, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786785360, "endTimeSeconds": 1786786560, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786786560, "endTimeSeconds": 1786787760, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786787760, "endTimeSeconds": 1786788960, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786788960, "endTimeSeconds": 1786790160, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786790160, "endTimeSeconds": 1786791360, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786791360, "endTimeSeconds": 1786792560, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786792560, "endTimeSeconds": 1786793760, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786793760, "endTimeSeconds": 1786794960, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786794960, "endTimeSeconds": 1786796160, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786796160, "endTimeSeconds": 1786797360, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786797360, "endTimeSeconds": 1786798560, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786798560, "endTimeSeconds": 1786799760, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786785360, "endTimeSeconds": 1786786560, "municipio.nome": "Mandagua\u00e7u", "sucesso": null}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786786560, "endTimeSeconds": 1786787760, "municipio.nome": "Mandagua\u00e7u", "sucesso": null}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786787760, "endTimeSeconds": 1786788960, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786788960, "endTimeSeconds": 1786790160, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786790160, "endTimeSeconds": 1786791360, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786791360, "endTimeSeconds": 1786792560, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786792560, "endTimeSeconds": 1786793760, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786793760, "endTimeSeconds": 1786794960, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786794960, "endTimeSeconds": 1786796160, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786796160, "endTimeSeconds": 1786797360, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786797360, "endTimeSeconds": 1786798560, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786798560, "endTimeSeconds": 1786799760, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Juquitiba", "beginTimeSeconds": 1786785360, "endTimeSeconds": 1786786560, "municipio.nome": "Juquitiba", "sucesso": null}, {"facet": "Juquitiba", "beginTimeSeconds": 1786786560, "endTimeSeconds": 1786787760, "municipio.nome": "Juquitiba", "sucesso": null}, {"facet": "Juquitiba", "beginTimeSeconds": 1786787760, "endTimeSeconds": 1786788960, "municipio.nome": "Juquitiba", "sucesso": 100.0}, {"facet": "Juquitiba", "beginTimeSeconds": 1786788960, "endTimeSeconds": 1786790160, "municipio.nome": "Juquitiba", "sucesso": 100.0}, {"facet": "Juquitiba", "beginTimeSeconds": 1786790160, "endTimeSeconds": 1786791360, "municipio.nome": "Juquitiba", "sucesso": 100.0}, {"facet": "Juquitiba", "beginTimeSeconds": 1786791360, "endTimeSeconds": 1786792560, "municipio.nome": "Juquitiba", "sucesso": 100.0}, {"facet": "Juquitiba", "beginTimeSeconds": 1786792560, "endTimeSeconds": 1786793760, "municipio.nome": "Juquitiba", "sucesso": 100.0}, {"facet": "Juquitiba", "beginTimeSeconds": 1786793760, "endTimeSeconds": 1786794960, "municipio.nome": "Juquitiba", "sucesso": 100.0}, {"facet": "Juquitiba", "beginTimeSeconds": 1786794960, "endTimeSeconds": 1786796160, "municipio.nome": "Juquitiba", "sucesso": 100.0}, {"facet": "Juquitiba", "beginTimeSeconds": 1786796160, "endTimeSeconds": 1786797360, "municipio.nome": "Juquitiba", "sucesso": 100.0}, {"facet": "Juquitiba", "beginTimeSeconds": 1786797360, "endTimeSeconds": 1786798560, "municipio.nome": "Juquitiba", "sucesso": 100.0}, {"facet": "Juquitiba", "beginTimeSeconds": 1786798560, "endTimeSeconds": 1786799760, "municipio.nome": "Juquitiba", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1786785360, "endTimeSeconds": 1786786560, "municipio.nome": "Guapimirim", "sucesso": null}, {"facet": "Guapimirim", "beginTimeSeconds": 1786786560, "endTimeSeconds": 1786787760, "municipio.nome": "Guapimirim", "sucesso": null}, {"facet": "Guapimirim", "beginTimeSeconds": 1786787760, "endTimeSeconds": 1786788960, "municipio.nome": "Guapimirim", "sucesso": null}, {"facet": "Guapimirim", "beginTimeSeconds": 1786788960, "endTimeSeconds": 1786790160, "municipio.nome": "Guapimirim", "sucesso": null}, {"facet": "Guapimirim", "beginTimeSeconds": 1786790160, "endTimeSeconds": 1786791360, "municipio.nome": "Guapimirim", "sucesso": null}, {"facet": "Guapimirim", "beginTimeSeconds": 1786791360, "endTimeSeconds": 1786792560, "municipio.nome": "Guapimirim", "sucesso": null}, {"facet": "Guapimirim", "beginTimeSeconds": 1786792560, "endTimeSeconds": 1786793760, "municipio.nome": "Guapimirim", "sucesso": null}, {"facet": "Guapimirim", "beginTimeSeconds": 1786793760, "endTimeSeconds": 1786794960, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1786794960, "endTimeSeconds": 1786796160, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1786796160, "endTimeSeconds": 1786797360, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1786797360, "endTimeSeconds": 1786798560, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1786798560, "endTimeSeconds": 1786799760, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1786785360, "endTimeSeconds": 1786786560, "municipio.nome": "Urup\u00e1", "sucesso": null}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1786786560, "endTimeSeconds": 1786787760, "municipio.nome": "Urup\u00e1", "sucesso": null}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1786787760, "endTimeSeconds": 1786788960, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1786788960, "endTimeSeconds": 1786790160, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1786790160, "endTimeSeconds": 1786791360, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1786791360, "endTimeSeconds": 1786792560, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1786792560, "endTimeSeconds": 1786793760, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1786793760, "endTimeSeconds": 1786794960, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1786794960, "endTimeSeconds": 1786796160, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1786796160, "endTimeSeconds": 1786797360, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1786797360, "endTimeSeconds": 1786798560, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1786798560, "endTimeSeconds": 1786799760, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786785360, "endTimeSeconds": 1786786560, "municipio.nome": "Par\u00e1 de Minas", "sucesso": null}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786786560, "endTimeSeconds": 1786787760, "municipio.nome": "Par\u00e1 de Minas", "sucesso": null}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786787760, "endTimeSeconds": 1786788960, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786788960, "endTimeSeconds": 1786790160, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786790160, "endTimeSeconds": 1786791360, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786791360, "endTimeSeconds": 1786792560, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786792560, "endTimeSeconds": 1786793760, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786793760, "endTimeSeconds": 1786794960, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786794960, "endTimeSeconds": 1786796160, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786796160, "endTimeSeconds": 1786797360, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786797360, "endTimeSeconds": 1786798560, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Par\u00e1 de Minas", "beginTimeSeconds": 1786798560, "endTimeSeconds": 1786799760, "municipio.nome": "Par\u00e1 de Minas", "sucesso": 100.0}, {"facet": "Itapetininga", "beginTimeSeconds": 1786785360, "endTimeSeconds": 1786786560, "municipio.nome": "Itapetininga", "sucesso": null}, {"facet": "Itapetininga", "beginTimeSeconds": 1786786560, "endTimeSeconds": 1786787760, "municipio.nome": "Itapetininga", "sucesso": null}, {"facet": "Itapetininga", "beginTimeSeconds": 1786787760, "endTimeSeconds": 1786788960, "municipio.nome": "Itapetininga", "sucesso": null}, {"facet": "Itapetininga", "beginTimeSeconds": 1786788960, "endTimeSeconds": 1786790160, "municipio.nome": "Itapetininga", "sucesso": null}, {"facet": "Itapetininga", "beginTimeSeconds": 1786790160, "endTimeSeconds": 1786791360, "municipio.nome": "Itapetininga", "sucesso": null}, {"facet": "Itapetininga", "beginTimeSeconds": 1786791360, "endTimeSeconds": 1786792560, "municipio.nome": "Itapetininga", "sucesso": 100.0}, {"facet": "Itapetininga", "beginTimeSeconds": 1786792560, "endTimeSeconds": 1786793760, "municipio.nome": "Itapetininga", "sucesso": 100.0}, {"facet": "Itapetininga", "beginTimeSeconds": 1786793760, "endTimeSeconds": 1786794960, "municipio.nome": "Itapetininga", "sucesso": 100.0}, {"facet": "Itapetininga", "beginTimeSeconds": 1786794960, "endTimeSeconds": 1786796160, "municipio.nome": "Itapetininga", "sucesso": 100.0}, {"facet": "Itapetininga", "beginTimeSeconds": 1786796160, "endTimeSeconds": 1786797360, "municipio.nome": "Itapetininga", "sucesso": 100.0}, {"facet": "Itapetininga", "beginTimeSeconds": 1786797360, "endTimeSeconds": 1786798560, "municipio.nome": "Itapetininga", "sucesso": 100.0}, {"facet": "Itapetininga", "beginTimeSeconds": 1786798560, "endTimeSeconds": 1786799760, "municipio.nome": "Itapetininga", "sucesso": 100.0}, {"facet": "Guaratuba", "beginTimeSeconds": 1786785360, "endTimeSeconds": 1786786560, "municipio.nome": "Guaratuba", "sucesso": null}, {"facet": "Guaratuba", "beginTimeSeconds": 1786786560, "endTimeSeconds": 1786787760, "municipio.nome": "Guaratuba", "sucesso": null}, {"facet": "Guaratuba", "beginTimeSeconds": 1786787760, "endTimeSeconds": 1786788960, "municipio.nome": "Guaratuba", "sucesso": 100.0}, {"facet": "Guaratuba", "beginTimeSeconds": 1786788960, "endTimeSeconds": 1786790160, "municipio.nome": "Guaratuba", "sucesso": 100.0}, {"facet": "Guaratuba", "beginTimeSeconds": 1786790160, "endTimeSeconds": 1786791360, "municipio.nome": "Guaratuba", "sucesso": 100.0}, {"facet": "Guaratuba", "beginTimeSeconds": 1786791360, "endTimeSeconds": 1786792560, "municipio.nome": "Guaratuba", "sucesso": 100.0}, {"facet": "Guaratuba", "beginTimeSeconds": 1786792560, "endTimeSeconds": 1786793760, "municipio.nome": "Guaratuba", "sucesso": 100.0}, {"facet": "Guaratuba", "beginTimeSeconds": 1786793760, "endTimeSeconds": 1786794960, "municipio.nome": "Guaratuba", "sucesso": 100.0}, {"facet": "Guaratuba", "beginTimeSeconds": 1786794960, "endTimeSeconds": 1786796160, "municipio.nome": "Guaratuba", "sucesso": 100.0}, {"facet": "Guaratuba", "beginTimeSeconds": 1786796160, "endTimeSeconds": 1786797360, "municipio.nome": "Guaratuba", "sucesso": 100.0}, {"facet": "Guaratuba", "beginTimeSeconds": 1786797360, "endTimeSeconds": 1786798560, "municipio.nome": "Guaratuba", "sucesso": 100.0}, {"facet": "Guaratuba", "beginTimeSeconds": 1786798560, "endTimeSeconds": 1786799760, "municipio.nome": "Guaratuba", "sucesso": 100.0}, {"facet": "S\u00e3o Caetano do Sul", "beginTimeSeconds": 1786785360, "endTimeSeconds": 1786786560, "municipio.nome": "S\u00e3o Caetano do Sul", "sucesso": null}, {"facet": "S\u00e3o Caetano do Sul", "beginTimeSeconds": 1786786560, "endTimeSeconds": 1786787760, "municipio.nome": "S\u00e3o Caetano do Sul", "sucesso": null}, {"facet": "S\u00e3o Caetano do Sul", "beginTimeSeconds": 1786787760, "endTimeSeconds": 1786788960, "municipio.nome": "S\u00e3o Caetano do Sul", "sucesso": 100.0}, {"facet": "S\u00e3o Caetano do Sul", "beginTimeSeconds": 1786788960, "endTimeSeconds": 1786790160, "municipio.nome": "S\u00e3o Caetano do Sul", "sucesso": 100.0}, {"facet": "S\u00e3o Caetano do Sul", "beginTimeSeconds": 1786790160, "endTimeSeconds": 1786791360, "municipio.nome": "S\u00e3o Caetano do Sul", "sucesso": 100.0}, {"facet": "S\u00e3o Caetano do Sul", "beginTimeSeconds": 1786791360, "endTimeSeconds": 1786792560, "municipio.nome": "S\u00e3o Caetano do Sul", "sucesso": 100.0}, {"facet": "S\u00e3o Caetano do Sul", "beginTimeSeconds": 1786792560, "endTimeSeconds": 1786793760, "municipio.nome": "S\u00e3o Caetano do Sul", "sucesso": 100.0}, {"facet": "S\u00e3o Caetano do Sul", "beginTimeSeconds": 1786793760, "endTimeSeconds": 1786794960, "municipio.nome": "S\u00e3o Caetano do Sul", "sucesso": 100.0}, {"facet": "S\u00e3o Caetano do Sul", "beginTimeSeconds": 1786794960, "endTimeSeconds": 1786796160, "municipio.nome": "S\u00e3o Caetano do Sul", "sucesso": 100.0}, {"facet": "S\u00e3o Caetano do Sul", "beginTimeSeconds": 1786796160, "endTimeSeconds": 1786797360, "municipio.nome": "S\u00e3o Caetano do Sul", "sucesso": 100.0}, {"facet": "S\u00e3o Caetano do Sul", "beginTimeSeconds": 1786797360, "endTimeSeconds": 1786798560, "municipio.nome": "S\u00e3o Caetano do Sul", "sucesso": 100.0}, {"facet": "S\u00e3o Caetano do Sul", "beginTimeSeconds": 1786798560, "endTimeSeconds": 1786799760, "municipio.nome": "S\u00e3o Caetano do Sul", "sucesso": 100.0}]
};
