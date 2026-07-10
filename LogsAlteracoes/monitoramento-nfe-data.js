// Gerado automaticamente pelo workflow monitoramento-nfe.yml em 10/07/2026 20:16 (Brasilia)
// NAO EDITAR MANUALMENTE
var monitoramentoNfeData = {
  geradoEm: "10/07/2026 20:16",
  travadasPorMunicipio: [
  {
    "facet": "Corbélia",
    "latest.nfe.stuck_in_intermediate_status.count": 466,
    "nfe.municipio_servico": "Corbélia"
  },
  {
    "facet": "Itapipoca",
    "latest.nfe.stuck_in_intermediate_status.count": 2,
    "nfe.municipio_servico": "Itapipoca"
  },
  {
    "facet": "Naviraí",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Naviraí"
  },
  {
    "facet": "Tapejara",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Tapejara"
  },
  {
    "facet": "Balneário Camboriú",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Balneário Camboriú"
  },
  {
    "facet": "Fortaleza",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Fortaleza"
  },
  {
    "facet": "São Bento do Sapucaí",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "São Bento do Sapucaí"
  },
  {
    "facet": "Campinas",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Campinas"
  }
],
  tempoMaxProcessamento: [
  {
    "facet": "São José de Ribamar",
    "max.nfe.processing_time.minutes": 58,
    "nfe.municipio_servico": "São José de Ribamar"
  },
  {
    "facet": "Guarulhos",
    "max.nfe.processing_time.minutes": 58,
    "nfe.municipio_servico": "Guarulhos"
  },
  {
    "facet": "Garibaldi",
    "max.nfe.processing_time.minutes": 57,
    "nfe.municipio_servico": "Garibaldi"
  },
  {
    "facet": "Barbacena",
    "max.nfe.processing_time.minutes": 34,
    "nfe.municipio_servico": "Barbacena"
  },
  {
    "facet": "Maringá",
    "max.nfe.processing_time.minutes": 33,
    "nfe.municipio_servico": "Maringá"
  },
  {
    "facet": "Nova Lima",
    "max.nfe.processing_time.minutes": 31,
    "nfe.municipio_servico": "Nova Lima"
  },
  {
    "facet": "Salgueiro",
    "max.nfe.processing_time.minutes": 23,
    "nfe.municipio_servico": "Salgueiro"
  },
  {
    "facet": "Novo Hamburgo",
    "max.nfe.processing_time.minutes": 22,
    "nfe.municipio_servico": "Novo Hamburgo"
  },
  {
    "facet": "Varginha",
    "max.nfe.processing_time.minutes": 22,
    "nfe.municipio_servico": "Varginha"
  },
  {
    "facet": "Niterói",
    "max.nfe.processing_time.minutes": 19,
    "nfe.municipio_servico": "Niterói"
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
    "average.nfe.processing_time.minutes": 3.248062015503876,
    "facet": "Cancelada",
    "nfe.status": "Cancelada"
  },
  {
    "average.nfe.processing_time.minutes": 0.9228755058319448,
    "facet": "Negada",
    "nfe.status": "Negada"
  },
  {
    "average.nfe.processing_time.minutes": 0.7422901332339513,
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
    "max_min": 14,
    "media_min": 3.248062015503876,
    "p95_min": {
      "95": 14
    }
  },
  {
    "facet": [
      "Negada",
      "AguardandoAutorizacao"
    ],
    "max_min": 3,
    "media_min": 3,
    "p95_min": {
      "95": 3
    }
  },
  {
    "facet": [
      "Negada",
      "EmProcessoDeAutorizacao"
    ],
    "max_min": 58,
    "media_min": 0.9179193509902172,
    "p95_min": {
      "95": 3.03125
    }
  },
  {
    "facet": [
      "Autorizada",
      "AutorizadaAguardandoGeracaoPDF"
    ],
    "max_min": 58,
    "media_min": 0.7422901332339513,
    "p95_min": {
      "95": 2.03125
    }
  }
],
  perfMunicipio: [
  {
    "average.nfe.processing_time.minutes": 49,
    "count.nfe.processing_time.minutes": 20,
    "facet": "Garibaldi",
    "max.nfe.processing_time.minutes": 57,
    "nfe.municipio_servico": "Garibaldi",
    "percentile.nfe.processing_time.minutes": {
      "95": 57
    }
  },
  {
    "average.nfe.processing_time.minutes": 34,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Barbacena",
    "max.nfe.processing_time.minutes": 34,
    "nfe.municipio_servico": "Barbacena",
    "percentile.nfe.processing_time.minutes": {
      "95": 34
    }
  },
  {
    "average.nfe.processing_time.minutes": 31.5,
    "count.nfe.processing_time.minutes": 20,
    "facet": "São José de Ribamar",
    "max.nfe.processing_time.minutes": 58,
    "nfe.municipio_servico": "São José de Ribamar",
    "percentile.nfe.processing_time.minutes": {
      "95": 58
    }
  },
  {
    "average.nfe.processing_time.minutes": 23,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Salgueiro",
    "max.nfe.processing_time.minutes": 23,
    "nfe.municipio_servico": "Salgueiro",
    "percentile.nfe.processing_time.minutes": {
      "95": 23
    }
  },
  {
    "average.nfe.processing_time.minutes": 22.666666666666668,
    "count.nfe.processing_time.minutes": 30,
    "facet": "Guarulhos",
    "max.nfe.processing_time.minutes": 58,
    "nfe.municipio_servico": "Guarulhos",
    "percentile.nfe.processing_time.minutes": {
      "95": 58
    }
  },
  {
    "average.nfe.processing_time.minutes": 10,
    "count.nfe.processing_time.minutes": 20,
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 15,
    "nfe.municipio_servico": "Caraguatatuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 15
    }
  },
  {
    "average.nfe.processing_time.minutes": 8.161016949152541,
    "count.nfe.processing_time.minutes": 118,
    "facet": "Nova Lima",
    "max.nfe.processing_time.minutes": 31,
    "nfe.municipio_servico": "Nova Lima",
    "percentile.nfe.processing_time.minutes": {
      "95": 26.125
    }
  },
  {
    "average.nfe.processing_time.minutes": 6,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Maranguape",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Maranguape",
    "percentile.nfe.processing_time.minutes": {
      "95": 6
    }
  },
  {
    "average.nfe.processing_time.minutes": 5.6231884057971016,
    "count.nfe.processing_time.minutes": 69,
    "facet": "Maringá",
    "max.nfe.processing_time.minutes": 33,
    "nfe.municipio_servico": "Maringá",
    "percentile.nfe.processing_time.minutes": {
      "95": 33
    }
  },
  {
    "average.nfe.processing_time.minutes": 5,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Montenegro",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Montenegro",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 4.2898550724637685,
    "count.nfe.processing_time.minutes": 69,
    "facet": "Varginha",
    "max.nfe.processing_time.minutes": 22,
    "nfe.municipio_servico": "Varginha",
    "percentile.nfe.processing_time.minutes": {
      "95": 22
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.727272727272727,
    "count.nfe.processing_time.minutes": 11,
    "facet": "Dourados",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Dourados",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.305084745762712,
    "count.nfe.processing_time.minutes": 118,
    "facet": "Ribeirão Preto",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "Ribeirão Preto",
    "percentile.nfe.processing_time.minutes": {
      "95": 7
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.2028985507246377,
    "count.nfe.processing_time.minutes": 69,
    "facet": "Novo Hamburgo",
    "max.nfe.processing_time.minutes": 22,
    "nfe.municipio_servico": "Novo Hamburgo",
    "percentile.nfe.processing_time.minutes": {
      "95": 22
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.1884057971014492,
    "count.nfe.processing_time.minutes": 69,
    "facet": "Niterói",
    "max.nfe.processing_time.minutes": 19,
    "nfe.municipio_servico": "Niterói",
    "percentile.nfe.processing_time.minutes": {
      "95": 19
    }
  },
  {
    "average.nfe.processing_time.minutes": 3,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Santana",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Santana",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 3,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Juazeiro do Norte",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Juazeiro do Norte",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.983050847457627,
    "count.nfe.processing_time.minutes": 59,
    "facet": "Mandaguaçu",
    "max.nfe.processing_time.minutes": 3,
    "nfe.municipio_servico": "Mandaguaçu",
    "percentile.nfe.processing_time.minutes": {
      "95": 3
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.823529411764706,
    "count.nfe.processing_time.minutes": 51,
    "facet": "Taubaté",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Taubaté",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.742857142857143,
    "count.nfe.processing_time.minutes": 105,
    "facet": "Botucatu",
    "max.nfe.processing_time.minutes": 12,
    "nfe.municipio_servico": "Botucatu",
    "percentile.nfe.processing_time.minutes": {
      "95": 10.0625
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.5,
    "count.nfe.processing_time.minutes": 90,
    "facet": "Videira",
    "max.nfe.processing_time.minutes": 19,
    "nfe.municipio_servico": "Videira",
    "percentile.nfe.processing_time.minutes": {
      "95": 19
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.3333333333333335,
    "count.nfe.processing_time.minutes": 30,
    "facet": "Caetité",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Caetité",
    "percentile.nfe.processing_time.minutes": {
      "95": 6
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Alfenas",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Alfenas",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Teresópolis",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Teresópolis",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Santa Rita do Sapucaí",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Santa Rita do Sapucaí",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.6521739130434783,
    "count.nfe.processing_time.minutes": 69,
    "facet": "Sacramento",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Sacramento",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.5,
    "count.nfe.processing_time.minutes": 20,
    "facet": "Cariacica",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Cariacica",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.5,
    "count.nfe.processing_time.minutes": 20,
    "facet": "Anápolis",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Anápolis",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.3359375,
    "count.nfe.processing_time.minutes": 128,
    "facet": "Florianópolis",
    "max.nfe.processing_time.minutes": 14,
    "nfe.municipio_servico": "Florianópolis",
    "percentile.nfe.processing_time.minutes": {
      "95": 14
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.3285714285714285,
    "count.nfe.processing_time.minutes": 70,
    "facet": "Guarapuava",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Guarapuava",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.3181818181818181,
    "count.nfe.processing_time.minutes": 110,
    "facet": "Aparecida de Goiânia",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Aparecida de Goiânia",
    "percentile.nfe.processing_time.minutes": {
      "95": 3.0078125
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.2753623188405796,
    "count.nfe.processing_time.minutes": 69,
    "facet": "Lajeado",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Lajeado",
    "percentile.nfe.processing_time.minutes": {
      "95": 6
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.231578947368421,
    "count.nfe.processing_time.minutes": 95,
    "facet": "Santa Maria",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Santa Maria",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.2033898305084745,
    "count.nfe.processing_time.minutes": 59,
    "facet": "Francisco Beltrão",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Francisco Beltrão",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.196078431372549,
    "count.nfe.processing_time.minutes": 51,
    "facet": "Orlândia",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Orlândia",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.0470588235294118,
    "count.nfe.processing_time.minutes": 85,
    "facet": "Salvador",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "Salvador",
    "percentile.nfe.processing_time.minutes": {
      "95": 3.015625
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.015228426395939,
    "count.nfe.processing_time.minutes": 197,
    "facet": "Barueri",
    "max.nfe.processing_time.minutes": 9,
    "nfe.municipio_servico": "Barueri",
    "percentile.nfe.processing_time.minutes": {
      "95": 9
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Unterentfelden",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Unterentfelden",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Palotina",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Palotina",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Lins",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Lins",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Dois Irmãos",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Dois Irmãos",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 59,
    "facet": "Campo Belo",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Campo Belo",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 10,
    "facet": "chicago",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "chicago",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Barranquilla",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Barranquilla",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Guaíra",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Guaíra",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 59,
    "facet": "Patos de Minas",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Patos de Minas",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Pully",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Pully",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Alegre",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Alegre",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Siqueira Campos",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Siqueira Campos",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 10,
    "facet": "Cachoeirinha",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Cachoeirinha",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  }
],
  empresasMunicipio: [
  {
    "facet": "Fortaleza",
    "nfe.municipio_servico": "Fortaleza",
    "uniqueCount.empresa.razao_social": 22
  },
  {
    "facet": "Naviraí",
    "nfe.municipio_servico": "Naviraí",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Tapejara",
    "nfe.municipio_servico": "Tapejara",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Balneário Camboriú",
    "nfe.municipio_servico": "Balneário Camboriú",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Corbélia",
    "nfe.municipio_servico": "Corbélia",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "São Bento do Sapucaí",
    "nfe.municipio_servico": "São Bento do Sapucaí",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Campinas",
    "nfe.municipio_servico": "Campinas",
    "uniqueCount.empresa.razao_social": 1
  },
  {
    "facet": "Itapipoca",
    "nfe.municipio_servico": "Itapipoca",
    "uniqueCount.empresa.razao_social": 1
  }
],
  statsGlobais: [
  {
    "average.nfe.processing_time.minutes": 0.8141140543052513,
    "max.nfe.processing_time.minutes": 58,
    "percentile.nfe.processing_time.minutes": {
      "50": 0,
      "90": 1.015625,
      "95": 2.03125,
      "99": 12.125
    }
  }
],
  totalEmpresas: [
  {
    "uniqueCount.empresa.razao_social": 29
  }
],
  totalMunicipios: [
  {
    "uniqueCount.nfe.municipio_servico": 395
  }
],
  volumeMunicipio: [
  {
    "count.nfe.processing_time.minutes": 197,
    "facet": "Barueri",
    "nfe.municipio_servico": "Barueri"
  },
  {
    "count.nfe.processing_time.minutes": 177,
    "facet": "Rio de Janeiro",
    "nfe.municipio_servico": "Rio de Janeiro"
  },
  {
    "count.nfe.processing_time.minutes": 148,
    "facet": "Taboão da Serra",
    "nfe.municipio_servico": "Taboão da Serra"
  },
  {
    "count.nfe.processing_time.minutes": 128,
    "facet": "",
    "nfe.municipio_servico": ""
  },
  {
    "count.nfe.processing_time.minutes": 128,
    "facet": "São Paulo",
    "nfe.municipio_servico": "São Paulo"
  },
  {
    "count.nfe.processing_time.minutes": 128,
    "facet": "Florianópolis",
    "nfe.municipio_servico": "Florianópolis"
  },
  {
    "count.nfe.processing_time.minutes": 128,
    "facet": "Porto Alegre",
    "nfe.municipio_servico": "Porto Alegre"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "São Bernardo do Campo",
    "nfe.municipio_servico": "São Bernardo do Campo"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Belo Horizonte",
    "nfe.municipio_servico": "Belo Horizonte"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Barra do Piraí",
    "nfe.municipio_servico": "Barra do Piraí"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Caxias do Sul",
    "nfe.municipio_servico": "Caxias do Sul"
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
    "facet": "Praia Grande",
    "nfe.municipio_servico": "Praia Grande"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Jundiaí",
    "nfe.municipio_servico": "Jundiaí"
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
    "facet": "Ribeirão Preto",
    "nfe.municipio_servico": "Ribeirão Preto"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Palhoça",
    "nfe.municipio_servico": "Palhoça"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Petrolina",
    "nfe.municipio_servico": "Petrolina"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Blumenau",
    "nfe.municipio_servico": "Blumenau"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Uberlândia",
    "nfe.municipio_servico": "Uberlândia"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Fortaleza",
    "nfe.municipio_servico": "Fortaleza"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Joinville",
    "nfe.municipio_servico": "Joinville"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Pinhais",
    "nfe.municipio_servico": "Pinhais"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Cuiabá",
    "nfe.municipio_servico": "Cuiabá"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Maceió",
    "nfe.municipio_servico": "Maceió"
  },
  {
    "count.nfe.processing_time.minutes": 118,
    "facet": "Campinas",
    "nfe.municipio_servico": "Campinas"
  },
  {
    "count.nfe.processing_time.minutes": 115,
    "facet": "Cataguases",
    "nfe.municipio_servico": "Cataguases"
  }
],
  municipioStatus: [
  {
    "facet": [
      "Corbélia",
      "SolicitandoAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 466
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
      "Balneário Camboriú",
      "SolicitandoAutorizacao"
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
      "Fortaleza",
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
      "São Bento do Sapucaí",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "Tapejara",
      "EmProcessoDeAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  topEmpresasTravadas: [
  {
    "empresa.razao_social": "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA.",
    "facet": "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA.",
    "latest.nfe.stuck_in_intermediate_status.count": 466
  },
  {
    "empresa.razao_social": "NEILA MARQUES DE FREITAS F LTDA",
    "facet": "NEILA MARQUES DE FREITAS F LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 2
  },
  {
    "empresa.razao_social": "NETPOS SERVICOS DE INFORMATICA S.A.",
    "facet": "NETPOS SERVICOS DE INFORMATICA S.A.",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "MENTE INTERATIVA",
    "facet": "MENTE INTERATIVA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "empresa.razao_social": "KIWIFY TECNOLOGIA E SERVICOS LTDA",
    "facet": "KIWIFY TECNOLOGIA E SERVICOS LTDA",
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  travadasPorStatusMunicipio: [
  {
    "facet": [
      "SolicitandoAutorizacao",
      "Corbélia"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 466
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
      "Fortaleza"
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
      "São Bento do Sapucaí"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "EmProcessoDeAutorizacao",
      "Tapejara"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "SolicitandoAutorizacao",
      "Balneário Camboriú"
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
    "latest.nfe.stuck_in_intermediate_status.count": 466
  },
  {
    "facet": [
      "",
      "AD CURSOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 5
  },
  {
    "facet": [
      "",
      "COD3R ENSINO E CONSULTORIA LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 5
  },
  {
    "facet": [
      "",
      "DOC CURSOS GERENCIAIS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 5
  },
  {
    "facet": [
      "",
      "ESPIRITUALIDADE ESTELAR CURSOS E TERAPIAS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 5
  },
  {
    "facet": [
      "",
      "INSTITUTO SCHAEFFER DE TEOLOGIA E CULTURA LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 5
  },
  {
    "facet": [
      "",
      "PP CONCURSOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 5
  },
  {
    "facet": [
      "",
      "VICIO DE UMA ESTUDANTE CURSO PREPARATORIO PARA CONCURSOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 5
  },
  {
    "facet": [
      "",
      "GUERRA TREINAMENTOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 4
  },
  {
    "facet": [
      "",
      "CURSO PROFESSOR ERICK LIMA LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 3
  },
  {
    "facet": [
      "",
      "SINAPSE PSI CURSOS E TREINAMENTOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 3
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
      "17.752.101 CAMILA RODRIGUES PEREIRA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "AQUARELAS DE LEILE LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "CEF CURSOS E TREINAMENTOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "CURSO MARTA GARCIA LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "ELAYNE NASCIMENTO VIEIRA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "G SOUZA MIRANDA EMPREENDIMENTOS DIGITAIS"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "INTERNAPOCUS SERVICOS EDUCACIONAIS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "J. S. P. MACHADO FILHO EDICAO DE LIVROS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "KIWIFY TECNOLOGIA E SERVICOS LTDA"
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
      "ODONTOLEGAL CURSOS PREPARATORIOS PARA CONCURSOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "QUIROGA COMUNICACAO EIRELI"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "RYRA SERVICOS DIGITAIS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "TICIANA DE PAULA PRODUCOES ARTISTICAS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "TIRADENTES CONCURSOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  },
  {
    "facet": [
      "",
      "VDE CURSOS PREPARATORIOS LTDA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  volumetriaHora: [
  {
    "canceladas": 3,
    "devolucoes": 0,
    "em_emissao": 385,
    "email": 0,
    "emitidas": 2631,
    "falhas": 835
  }
],
  volumetriaTimeseries: [
  {
    "beginTimeSeconds": 1783638600,
    "emitidas": 6247,
    "endTimeSeconds": 1783642200,
    "falhas": 526
  },
  {
    "beginTimeSeconds": 1783642200,
    "emitidas": 5852,
    "endTimeSeconds": 1783645800,
    "falhas": 431
  },
  {
    "beginTimeSeconds": 1783645800,
    "emitidas": 9270,
    "endTimeSeconds": 1783649400,
    "falhas": 442
  },
  {
    "beginTimeSeconds": 1783649400,
    "emitidas": 4200,
    "endTimeSeconds": 1783653000,
    "falhas": 349
  },
  {
    "beginTimeSeconds": 1783653000,
    "emitidas": 8292,
    "endTimeSeconds": 1783656600,
    "falhas": 1548
  },
  {
    "beginTimeSeconds": 1783656600,
    "emitidas": 5844,
    "endTimeSeconds": 1783660200,
    "falhas": 1397
  },
  {
    "beginTimeSeconds": 1783660200,
    "emitidas": 1788,
    "endTimeSeconds": 1783663800,
    "falhas": 305
  },
  {
    "beginTimeSeconds": 1783663800,
    "emitidas": 1517,
    "endTimeSeconds": 1783667400,
    "falhas": 300
  },
  {
    "beginTimeSeconds": 1783667400,
    "emitidas": 884,
    "endTimeSeconds": 1783671000,
    "falhas": 136
  },
  {
    "beginTimeSeconds": 1783671000,
    "emitidas": 1379,
    "endTimeSeconds": 1783674600,
    "falhas": 171
  },
  {
    "beginTimeSeconds": 1783674600,
    "emitidas": 1538,
    "endTimeSeconds": 1783678200,
    "falhas": 310
  },
  {
    "beginTimeSeconds": 1783678200,
    "emitidas": 1995,
    "endTimeSeconds": 1783681800,
    "falhas": 370
  },
  {
    "beginTimeSeconds": 1783681800,
    "emitidas": 4238,
    "endTimeSeconds": 1783685400,
    "falhas": 611
  },
  {
    "beginTimeSeconds": 1783685400,
    "emitidas": 10462,
    "endTimeSeconds": 1783689000,
    "falhas": 1377
  },
  {
    "beginTimeSeconds": 1783689000,
    "emitidas": 7995,
    "endTimeSeconds": 1783692600,
    "falhas": 1360
  },
  {
    "beginTimeSeconds": 1783692600,
    "emitidas": 7166,
    "endTimeSeconds": 1783696200,
    "falhas": 778
  },
  {
    "beginTimeSeconds": 1783696200,
    "emitidas": 6226,
    "endTimeSeconds": 1783699800,
    "falhas": 484
  },
  {
    "beginTimeSeconds": 1783699800,
    "emitidas": 4675,
    "endTimeSeconds": 1783703400,
    "falhas": 441
  },
  {
    "beginTimeSeconds": 1783703400,
    "emitidas": 6112,
    "endTimeSeconds": 1783707000,
    "falhas": 757
  },
  {
    "beginTimeSeconds": 1783707000,
    "emitidas": 6383,
    "endTimeSeconds": 1783710600,
    "falhas": 518
  },
  {
    "beginTimeSeconds": 1783710600,
    "emitidas": 5840,
    "endTimeSeconds": 1783714200,
    "falhas": 620
  },
  {
    "beginTimeSeconds": 1783714200,
    "emitidas": 3233,
    "endTimeSeconds": 1783717800,
    "falhas": 800
  },
  {
    "beginTimeSeconds": 1783717800,
    "emitidas": 4463,
    "endTimeSeconds": 1783721400,
    "falhas": 992
  },
  {
    "beginTimeSeconds": 1783721400,
    "emitidas": 2937,
    "endTimeSeconds": 1783725000,
    "falhas": 1045
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
    "falhas": 4,
    "ok": 25708
  }
],
  travadasStatusEmpresa: {"6":[],"3":[],"1":[],"0":[],"12":[]},
  totalMunicipiosPendentes: [
  {
    "uniqueCount.nfe.municipio_servico": 8
  }
],
  taxaNfse: [
  {
    "rejeicao": 17.855251554326408,
    "sucesso": 82.14474844567341
  }
],
  taxaNfe: [
  {
    "rejeicao": 13.957778941614704,
    "sucesso": 86.04222105838521
  }
],
  taxaSucessoMunicipio: [
  {
    "facet": "Unterentfelden",
    "municipio.nome": "Unterentfelden",
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
    "facet": "Palotina",
    "municipio.nome": "Palotina",
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
    "facet": "chicago",
    "municipio.nome": "chicago",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Barranquilla",
    "municipio.nome": "Barranquilla",
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
    "facet": "Alegre",
    "municipio.nome": "Alegre",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Não Informado",
    "municipio.nome": "Não Informado",
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
    "facet": "Coroaci",
    "municipio.nome": "Coroaci",
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
    "facet": "Prishtina",
    "municipio.nome": "Prishtina",
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
    "facet": "Quincy",
    "municipio.nome": "Quincy",
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
    "facet": "Visp",
    "municipio.nome": "Visp",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Sinop",
    "municipio.nome": "Sinop",
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
    "facet": "Cariacica",
    "municipio.nome": "Cariacica",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 33,
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
    "facet": "Orlando",
    "municipio.nome": "Orlando",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itanhém",
    "municipio.nome": "Itanhém",
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
    "facet": "Sunnybank Hills",
    "municipio.nome": "Sunnybank Hills",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Lawndale",
    "municipio.nome": "Lawndale",
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
    "facet": "Sumaré",
    "municipio.nome": "Sumaré",
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
    "facet": "Huddersfield, west Yorkshire",
    "municipio.nome": "Huddersfield, west Yorkshire",
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
    "facet": "Serra Negra",
    "municipio.nome": "Serra Negra",
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
    "facet": "pasto",
    "municipio.nome": "pasto",
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
    "facet": "Itaúna",
    "municipio.nome": "Itaúna",
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
    "facet": "Pariquera-Açu",
    "municipio.nome": "Pariquera-Açu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Milano",
    "municipio.nome": "Milano",
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
    "facet": "Bogotá D.C.",
    "municipio.nome": "Bogotá D.C.",
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
    "facet": "Juquitiba",
    "municipio.nome": "Juquitiba",
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
    "facet": "Santo Antônio do Pinhal",
    "municipio.nome": "Santo Antônio do Pinhal",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pristina",
    "municipio.nome": "Pristina",
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
    "facet": "Tirana",
    "municipio.nome": "Tirana",
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
    "facet": "Cardiff",
    "municipio.nome": "Cardiff",
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
    "facet": "Kissimmee",
    "municipio.nome": "Kissimmee",
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
    "facet": "Araranguá",
    "municipio.nome": "Araranguá",
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
    "facet": "Barra dos Coqueiros",
    "municipio.nome": "Barra dos Coqueiros",
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
    "facet": "Umuarama",
    "municipio.nome": "Umuarama",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Emden",
    "municipio.nome": "Emden",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Powell",
    "municipio.nome": "Powell",
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
    "facet": "Dietikon",
    "municipio.nome": "Dietikon",
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
    "facet": "Alice Springs",
    "municipio.nome": "Alice Springs",
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
    "facet": "Itapeva",
    "municipio.nome": "Itapeva",
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
    "facet": "Maringá",
    "municipio.nome": "Maringá",
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
    "facet": "Três Rios",
    "municipio.nome": "Três Rios",
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
    "facet": "Maravilha",
    "municipio.nome": "Maravilha",
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
    "facet": "Araras",
    "municipio.nome": "Araras",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Surat",
    "municipio.nome": "Surat",
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
    "facet": "Marechal Cândido Rondon",
    "municipio.nome": "Marechal Cândido Rondon",
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
    "facet": "Aracati",
    "municipio.nome": "Aracati",
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
    "facet": "Salgueiro",
    "municipio.nome": "Salgueiro",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "San Diego",
    "municipio.nome": "San Diego",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Boston",
    "municipio.nome": "Boston",
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
    "facet": "Jamaica",
    "municipio.nome": "Jamaica",
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
    "facet": "Brienz",
    "municipio.nome": "Brienz",
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
    "facet": "Brodowski",
    "municipio.nome": "Brodowski",
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
    "facet": "Hehalom",
    "municipio.nome": "Hehalom",
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
    "facet": "Lahore",
    "municipio.nome": "Lahore",
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
    "facet": "Petrópolis",
    "municipio.nome": "Petrópolis",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cuernavaca Morelos",
    "municipio.nome": "Cuernavaca Morelos",
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
    "facet": "Yaoundé",
    "municipio.nome": "Yaoundé",
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
    "facet": "Ubá",
    "municipio.nome": "Ubá",
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
    "facet": "Bronx",
    "municipio.nome": "Bronx",
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
    "facet": "Cerro Largo",
    "municipio.nome": "Cerro Largo",
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
    "facet": "Tijuana",
    "municipio.nome": "Tijuana",
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
    "facet": "Kraków",
    "municipio.nome": "Kraków",
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
    "rejeitadas": 6,
    "taxa_rejeicao": 0.1247141966327,
    "taxa_sucesso": 99.8752858033672
  },
  {
    "facet": "Barbacena",
    "municipio.nome": "Barbacena",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.2785515320334,
    "taxa_sucesso": 99.7214484679665
  },
  {
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.709219858156,
    "taxa_sucesso": 99.29078014184391
  },
  {
    "facet": "Tubarão",
    "municipio.nome": "Tubarão",
    "rejeitadas": 2,
    "taxa_rejeicao": 0.8849557522123,
    "taxa_sucesso": 99.1150442477876
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 7,
    "taxa_rejeicao": 0.8974358974358,
    "taxa_sucesso": 99.1025641025641
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 2,
    "taxa_rejeicao": 0.9615384615384,
    "taxa_sucesso": 99.0384615384615
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.3888888888888,
    "taxa_sucesso": 98.6111111111111
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.8518518518518,
    "taxa_sucesso": 98.1481481481481
  },
  {
    "facet": "Barra do Piraí",
    "municipio.nome": "Barra do Piraí",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.127659574468,
    "taxa_sucesso": 97.8723404255319
  },
  {
    "facet": "Campinas",
    "municipio.nome": "Campinas",
    "rejeitadas": 3,
    "taxa_rejeicao": 2.2388059701492,
    "taxa_sucesso": 97.7611940298507
  },
  {
    "facet": "Betim",
    "municipio.nome": "Betim",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.8571428571428,
    "taxa_sucesso": 97.14285714285711
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 4,
    "taxa_rejeicao": 3.4782608695652,
    "taxa_sucesso": 96.52173913043471
  },
  {
    "facet": "Nova Lima",
    "municipio.nome": "Nova Lima",
    "rejeitadas": 15,
    "taxa_rejeicao": 4.225352112676,
    "taxa_sucesso": 95.77464788732391
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 7,
    "taxa_rejeicao": 4.4025157232704,
    "taxa_sucesso": 95.5974842767295
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 9,
    "taxa_rejeicao": 4.9180327868852,
    "taxa_sucesso": 95.08196721311471
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 8,
    "taxa_rejeicao": 5.9259259259259,
    "taxa_sucesso": 94.074074074074
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 86,
    "taxa_rejeicao": 5.9763724808895,
    "taxa_sucesso": 94.0236275191104
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 21,
    "taxa_rejeicao": 6.2314540059347,
    "taxa_sucesso": 93.7685459940652
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 35,
    "taxa_rejeicao": 6.3868613138686,
    "taxa_sucesso": 93.6131386861313
  },
  {
    "facet": "Santa Maria",
    "municipio.nome": "Santa Maria",
    "rejeitadas": 3,
    "taxa_rejeicao": 6.8181818181818,
    "taxa_sucesso": 93.1818181818181
  },
  {
    "facet": "Pinhais",
    "municipio.nome": "Pinhais",
    "rejeitadas": 3,
    "taxa_rejeicao": 7.1428571428571,
    "taxa_sucesso": 92.8571428571428
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 12,
    "taxa_rejeicao": 7.6433121019108,
    "taxa_sucesso": 92.3566878980891
  },
  {
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
    "rejeitadas": 3,
    "taxa_rejeicao": 7.6923076923076,
    "taxa_sucesso": 92.3076923076923
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 23,
    "taxa_rejeicao": 8.273381294964,
    "taxa_sucesso": 91.7266187050359
  },
  {
    "facet": "Lajeado",
    "municipio.nome": "Lajeado",
    "rejeitadas": 2,
    "taxa_rejeicao": 8.695652173913,
    "taxa_sucesso": 91.3043478260869
  },
  {
    "facet": "Caxias do Sul",
    "municipio.nome": "Caxias do Sul",
    "rejeitadas": 1,
    "taxa_rejeicao": 9.090909090909,
    "taxa_sucesso": 90.90909090909089
  },
  {
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 8,
    "taxa_rejeicao": 9.8765432098765,
    "taxa_sucesso": 90.1234567901234
  },
  {
    "facet": "Taubaté",
    "municipio.nome": "Taubaté",
    "rejeitadas": 2,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "Vitória da Conquista",
    "municipio.nome": "Vitória da Conquista",
    "rejeitadas": 1,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 60,
    "taxa_rejeicao": 12.6050420168067,
    "taxa_sucesso": 87.3949579831932
  },
  {
    "facet": "Guarulhos",
    "municipio.nome": "Guarulhos",
    "rejeitadas": 8,
    "taxa_rejeicao": 13.1147540983606,
    "taxa_sucesso": 86.8852459016393
  },
  {
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
    "rejeitadas": 3,
    "taxa_rejeicao": 13.6363636363636,
    "taxa_sucesso": 86.3636363636363
  },
  {
    "facet": "São Joaquim da Barra",
    "municipio.nome": "São Joaquim da Barra",
    "rejeitadas": 1,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 445,
    "taxa_rejeicao": 15.5648828261629,
    "taxa_sucesso": 84.43511717383699
  },
  {
    "facet": "Cataguases",
    "municipio.nome": "Cataguases",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Cotia",
    "municipio.nome": "Cotia",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Feira de Santana",
    "municipio.nome": "Feira de Santana",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Teresina",
    "municipio.nome": "Teresina",
    "rejeitadas": 4,
    "taxa_rejeicao": 18.1818181818181,
    "taxa_sucesso": 81.8181818181818
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 5,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Jundiaí",
    "municipio.nome": "Jundiaí",
    "rejeitadas": 2,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 4,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Seropédica",
    "municipio.nome": "Seropédica",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Joinville",
    "municipio.nome": "Joinville",
    "rejeitadas": 12,
    "taxa_rejeicao": 21.0526315789473,
    "taxa_sucesso": 78.9473684210526
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 2,
    "taxa_rejeicao": 22.2222222222222,
    "taxa_sucesso": 77.7777777777777
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 7,
    "taxa_rejeicao": 23.3333333333333,
    "taxa_sucesso": 76.66666666666659
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 8,
    "taxa_rejeicao": 23.5294117647058,
    "taxa_sucesso": 76.4705882352941
  },
  {
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
    "rejeitadas": 13,
    "taxa_rejeicao": 23.6363636363636,
    "taxa_sucesso": 76.3636363636363
  },
  {
    "facet": "Itapetininga",
    "municipio.nome": "Itapetininga",
    "rejeitadas": 1,
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
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 9,
    "taxa_rejeicao": 34.6153846153846,
    "taxa_sucesso": 65.3846153846153
  },
  {
    "facet": "Suzano",
    "municipio.nome": "Suzano",
    "rejeitadas": 2,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
    "rejeitadas": 2,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 11,
    "taxa_rejeicao": 47.8260869565217,
    "taxa_sucesso": 52.1739130434782
  },
  {
    "facet": "Saquarema",
    "municipio.nome": "Saquarema",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Parnamirim",
    "municipio.nome": "Parnamirim",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Andradina",
    "municipio.nome": "Andradina",
    "rejeitadas": 3,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Itapema",
    "municipio.nome": "Itapema",
    "rejeitadas": 3,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 6,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Ipatinga",
    "municipio.nome": "Ipatinga",
    "rejeitadas": 2,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 8,
    "taxa_rejeicao": 61.538461538461505,
    "taxa_sucesso": 38.4615384615384
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 13,
    "taxa_rejeicao": 68.4210526315789,
    "taxa_sucesso": 31.578947368421
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 5,
    "taxa_rejeicao": 71.4285714285714,
    "taxa_sucesso": 28.5714285714285
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 18,
    "taxa_rejeicao": 72,
    "taxa_sucesso": 28
  },
  {
    "facet": "Botucatu",
    "municipio.nome": "Botucatu",
    "rejeitadas": 208,
    "taxa_rejeicao": 75.0902527075812,
    "taxa_sucesso": 24.9097472924187
  },
  {
    "facet": "Foz do Iguaçu",
    "municipio.nome": "Foz do Iguaçu",
    "rejeitadas": 7,
    "taxa_rejeicao": 77.7777777777777,
    "taxa_sucesso": 22.2222222222222
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 7,
    "taxa_rejeicao": 77.7777777777777,
    "taxa_sucesso": 22.2222222222222
  },
  {
    "facet": "Palhoça",
    "municipio.nome": "Palhoça",
    "rejeitadas": 690,
    "taxa_rejeicao": 98.5714285714285,
    "taxa_sucesso": 1.4285714285714
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bertioga",
    "municipio.nome": "Bertioga",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Olímpia",
    "municipio.nome": "Olímpia",
    "rejeitadas": 68,
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
    "facet": "Nova Venécia",
    "municipio.nome": "Nova Venécia",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
    "rejeitadas": 2,
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
    "facet": "Jaboatão dos Guararapes",
    "municipio.nome": "Jaboatão dos Guararapes",
    "rejeitadas": 1,
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
    "facet": "Arcos",
    "municipio.nome": "Arcos",
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
    "facet": "Santa Tereza do Oeste",
    "municipio.nome": "Santa Tereza do Oeste",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Assis",
    "municipio.nome": "Assis",
    "rejeitadas": 1,
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
    "facet": "Goianésia",
    "municipio.nome": "Goianésia",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Gravataí",
    "municipio.nome": "Gravataí",
    "rejeitadas": 3,
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
    "facet": "Itaboraí",
    "municipio.nome": "Itaboraí",
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
    "facet": "Palmas",
    "municipio.nome": "Palmas",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Peruíbe",
    "municipio.nome": "Peruíbe",
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
    "facet": "Navegantes",
    "municipio.nome": "Navegantes",
    "rejeitadas": 7,
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
    "facet": "Bom Jesus do Galho",
    "municipio.nome": "Bom Jesus do Galho",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ourinhos",
    "municipio.nome": "Ourinhos",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Serranópolis do Iguaçu",
    "municipio.nome": "Serranópolis do Iguaçu",
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
    "facet": "Sabará",
    "municipio.nome": "Sabará",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 5,
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
    "facet": "Ipirá",
    "municipio.nome": "Ipirá",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Nova Petrópolis",
    "municipio.nome": "Nova Petrópolis",
    "rejeitadas": 4,
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Goiana",
    "municipio.nome": "Goiana",
    "rejeitadas": 2,
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
    "facet": "Santo Amaro da Imperatriz",
    "municipio.nome": "Santo Amaro da Imperatriz",
    "rejeitadas": 1,
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
    "rejeitadas": 11,
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
    "facet": "Ilhabela",
    "municipio.nome": "Ilhabela",
    "rejeitadas": 2,
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
    "facet": "Ituiutaba",
    "municipio.nome": "Ituiutaba",
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
    "facet": "Ilhota",
    "municipio.nome": "Ilhota",
    "rejeitadas": 3,
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
    "facet": "Linhares",
    "municipio.nome": "Linhares",
    "rejeitadas": 17,
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
    "facet": "Guanhães",
    "municipio.nome": "Guanhães",
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
    "facet": "Coromandel",
    "municipio.nome": "Coromandel",
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Bertioga",
    "municipio.nome": "Bertioga",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Olímpia",
    "municipio.nome": "Olímpia",
    "rejeitadas": 68,
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
    "facet": "Nova Venécia",
    "municipio.nome": "Nova Venécia",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
    "rejeitadas": 2,
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
    "facet": "Jaboatão dos Guararapes",
    "municipio.nome": "Jaboatão dos Guararapes",
    "rejeitadas": 1,
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
    "facet": "Arcos",
    "municipio.nome": "Arcos",
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
    "facet": "Santa Tereza do Oeste",
    "municipio.nome": "Santa Tereza do Oeste",
    "rejeitadas": 2,
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
    "facet": "Assis",
    "municipio.nome": "Assis",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Goianésia",
    "municipio.nome": "Goianésia",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Gravataí",
    "municipio.nome": "Gravataí",
    "rejeitadas": 3,
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
    "facet": "Itaboraí",
    "municipio.nome": "Itaboraí",
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
    "facet": "Palmas",
    "municipio.nome": "Palmas",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Peruíbe",
    "municipio.nome": "Peruíbe",
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
    "facet": "Navegantes",
    "municipio.nome": "Navegantes",
    "rejeitadas": 7,
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
    "facet": "Bom Jesus do Galho",
    "municipio.nome": "Bom Jesus do Galho",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ourinhos",
    "municipio.nome": "Ourinhos",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Serranópolis do Iguaçu",
    "municipio.nome": "Serranópolis do Iguaçu",
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
    "facet": "Sabará",
    "municipio.nome": "Sabará",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 5,
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
    "facet": "Ipirá",
    "municipio.nome": "Ipirá",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Nova Petrópolis",
    "municipio.nome": "Nova Petrópolis",
    "rejeitadas": 4,
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Goiana",
    "municipio.nome": "Goiana",
    "rejeitadas": 2,
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
    "facet": "Santo Amaro da Imperatriz",
    "municipio.nome": "Santo Amaro da Imperatriz",
    "rejeitadas": 1,
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
    "rejeitadas": 11,
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
    "facet": "Ilhabela",
    "municipio.nome": "Ilhabela",
    "rejeitadas": 2,
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
    "facet": "Ituiutaba",
    "municipio.nome": "Ituiutaba",
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
    "facet": "Ilhota",
    "municipio.nome": "Ilhota",
    "rejeitadas": 3,
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
    "facet": "Linhares",
    "municipio.nome": "Linhares",
    "rejeitadas": 17,
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
    "facet": "Guanhães",
    "municipio.nome": "Guanhães",
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
    "facet": "Coromandel",
    "municipio.nome": "Coromandel",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Palhoça",
    "municipio.nome": "Palhoça",
    "rejeitadas": 690,
    "taxa_rejeicao": 98.5714285714285,
    "taxa_sucesso": 1.4285714285714
  },
  {
    "facet": "Foz do Iguaçu",
    "municipio.nome": "Foz do Iguaçu",
    "rejeitadas": 7,
    "taxa_rejeicao": 77.7777777777777,
    "taxa_sucesso": 22.2222222222222
  },
  {
    "facet": "Santo André",
    "municipio.nome": "Santo André",
    "rejeitadas": 7,
    "taxa_rejeicao": 77.7777777777777,
    "taxa_sucesso": 22.2222222222222
  },
  {
    "facet": "Botucatu",
    "municipio.nome": "Botucatu",
    "rejeitadas": 208,
    "taxa_rejeicao": 75.0902527075812,
    "taxa_sucesso": 24.9097472924187
  },
  {
    "facet": "Belém",
    "municipio.nome": "Belém",
    "rejeitadas": 18,
    "taxa_rejeicao": 72,
    "taxa_sucesso": 28
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 5,
    "taxa_rejeicao": 71.4285714285714,
    "taxa_sucesso": 28.5714285714285
  },
  {
    "facet": "Itu",
    "municipio.nome": "Itu",
    "rejeitadas": 13,
    "taxa_rejeicao": 68.4210526315789,
    "taxa_sucesso": 31.578947368421
  },
  {
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 8,
    "taxa_rejeicao": 61.538461538461505,
    "taxa_sucesso": 38.4615384615384
  },
  {
    "facet": "Saquarema",
    "municipio.nome": "Saquarema",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Parnamirim",
    "municipio.nome": "Parnamirim",
    "rejeitadas": 1,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Andradina",
    "municipio.nome": "Andradina",
    "rejeitadas": 3,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Itapema",
    "municipio.nome": "Itapema",
    "rejeitadas": 3,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 6,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Ipatinga",
    "municipio.nome": "Ipatinga",
    "rejeitadas": 2,
    "taxa_rejeicao": 50,
    "taxa_sucesso": 50
  },
  {
    "facet": "Maceió",
    "municipio.nome": "Maceió",
    "rejeitadas": 11,
    "taxa_rejeicao": 47.8260869565217,
    "taxa_sucesso": 52.1739130434782
  },
  {
    "facet": "Suzano",
    "municipio.nome": "Suzano",
    "rejeitadas": 2,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
    "rejeitadas": 2,
    "taxa_rejeicao": 40,
    "taxa_sucesso": 60
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 9,
    "taxa_rejeicao": 34.6153846153846,
    "taxa_sucesso": 65.3846153846153
  },
  {
    "facet": "Itapetininga",
    "municipio.nome": "Itapetininga",
    "rejeitadas": 1,
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
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
    "rejeitadas": 13,
    "taxa_rejeicao": 23.6363636363636,
    "taxa_sucesso": 76.3636363636363
  },
  {
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 8,
    "taxa_rejeicao": 23.5294117647058,
    "taxa_sucesso": 76.4705882352941
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 7,
    "taxa_rejeicao": 23.3333333333333,
    "taxa_sucesso": 76.66666666666659
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
    "rejeitadas": 2,
    "taxa_rejeicao": 22.2222222222222,
    "taxa_sucesso": 77.7777777777777
  },
  {
    "facet": "Joinville",
    "municipio.nome": "Joinville",
    "rejeitadas": 12,
    "taxa_rejeicao": 21.0526315789473,
    "taxa_sucesso": 78.9473684210526
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 5,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Jundiaí",
    "municipio.nome": "Jundiaí",
    "rejeitadas": 2,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 4,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Seropédica",
    "municipio.nome": "Seropédica",
    "rejeitadas": 1,
    "taxa_rejeicao": 20,
    "taxa_sucesso": 80
  },
  {
    "facet": "Teresina",
    "municipio.nome": "Teresina",
    "rejeitadas": 4,
    "taxa_rejeicao": 18.1818181818181,
    "taxa_sucesso": 81.8181818181818
  },
  {
    "facet": "Cataguases",
    "municipio.nome": "Cataguases",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Cotia",
    "municipio.nome": "Cotia",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "Feira de Santana",
    "municipio.nome": "Feira de Santana",
    "rejeitadas": 1,
    "taxa_rejeicao": 16.6666666666666,
    "taxa_sucesso": 83.3333333333333
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 445,
    "taxa_rejeicao": 15.5648828261629,
    "taxa_sucesso": 84.43511717383699
  },
  {
    "facet": "São Joaquim da Barra",
    "municipio.nome": "São Joaquim da Barra",
    "rejeitadas": 1,
    "taxa_rejeicao": 14.2857142857142,
    "taxa_sucesso": 85.7142857142857
  },
  {
    "facet": "Blumenau",
    "municipio.nome": "Blumenau",
    "rejeitadas": 3,
    "taxa_rejeicao": 13.6363636363636,
    "taxa_sucesso": 86.3636363636363
  },
  {
    "facet": "Guarulhos",
    "municipio.nome": "Guarulhos",
    "rejeitadas": 8,
    "taxa_rejeicao": 13.1147540983606,
    "taxa_sucesso": 86.8852459016393
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 60,
    "taxa_rejeicao": 12.6050420168067,
    "taxa_sucesso": 87.3949579831932
  },
  {
    "facet": "Vitória da Conquista",
    "municipio.nome": "Vitória da Conquista",
    "rejeitadas": 1,
    "taxa_rejeicao": 12.5,
    "taxa_sucesso": 87.5
  },
  {
    "facet": "Taubaté",
    "municipio.nome": "Taubaté",
    "rejeitadas": 2,
    "taxa_rejeicao": 11.1111111111111,
    "taxa_sucesso": 88.8888888888888
  },
  {
    "facet": "Goiânia",
    "municipio.nome": "Goiânia",
    "rejeitadas": 8,
    "taxa_rejeicao": 9.8765432098765,
    "taxa_sucesso": 90.1234567901234
  },
  {
    "facet": "Caxias do Sul",
    "municipio.nome": "Caxias do Sul",
    "rejeitadas": 1,
    "taxa_rejeicao": 9.090909090909,
    "taxa_sucesso": 90.90909090909089
  },
  {
    "facet": "Lajeado",
    "municipio.nome": "Lajeado",
    "rejeitadas": 2,
    "taxa_rejeicao": 8.695652173913,
    "taxa_sucesso": 91.3043478260869
  },
  {
    "facet": "São Bernardo do Campo",
    "municipio.nome": "São Bernardo do Campo",
    "rejeitadas": 23,
    "taxa_rejeicao": 8.273381294964,
    "taxa_sucesso": 91.7266187050359
  },
  {
    "facet": "Duque de Caxias",
    "municipio.nome": "Duque de Caxias",
    "rejeitadas": 3,
    "taxa_rejeicao": 7.6923076923076,
    "taxa_sucesso": 92.3076923076923
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 12,
    "taxa_rejeicao": 7.6433121019108,
    "taxa_sucesso": 92.3566878980891
  },
  {
    "facet": "Pinhais",
    "municipio.nome": "Pinhais",
    "rejeitadas": 3,
    "taxa_rejeicao": 7.1428571428571,
    "taxa_sucesso": 92.8571428571428
  },
  {
    "facet": "Santa Maria",
    "municipio.nome": "Santa Maria",
    "rejeitadas": 3,
    "taxa_rejeicao": 6.8181818181818,
    "taxa_sucesso": 93.1818181818181
  },
  {
    "facet": "Brasília",
    "municipio.nome": "Brasília",
    "rejeitadas": 35,
    "taxa_rejeicao": 6.3868613138686,
    "taxa_sucesso": 93.6131386861313
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 21,
    "taxa_rejeicao": 6.2314540059347,
    "taxa_sucesso": 93.7685459940652
  },
  {
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
    "rejeitadas": 86,
    "taxa_rejeicao": 5.9763724808895,
    "taxa_sucesso": 94.0236275191104
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 8,
    "taxa_rejeicao": 5.9259259259259,
    "taxa_sucesso": 94.074074074074
  },
  {
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
    "rejeitadas": 9,
    "taxa_rejeicao": 4.9180327868852,
    "taxa_sucesso": 95.08196721311471
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 7,
    "taxa_rejeicao": 4.4025157232704,
    "taxa_sucesso": 95.5974842767295
  },
  {
    "facet": "Nova Lima",
    "municipio.nome": "Nova Lima",
    "rejeitadas": 15,
    "taxa_rejeicao": 4.225352112676,
    "taxa_sucesso": 95.77464788732391
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 4,
    "taxa_rejeicao": 3.4782608695652,
    "taxa_sucesso": 96.52173913043471
  },
  {
    "facet": "Betim",
    "municipio.nome": "Betim",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.8571428571428,
    "taxa_sucesso": 97.14285714285711
  },
  {
    "facet": "Campinas",
    "municipio.nome": "Campinas",
    "rejeitadas": 3,
    "taxa_rejeicao": 2.2388059701492,
    "taxa_sucesso": 97.7611940298507
  },
  {
    "facet": "Barra do Piraí",
    "municipio.nome": "Barra do Piraí",
    "rejeitadas": 1,
    "taxa_rejeicao": 2.127659574468,
    "taxa_sucesso": 97.8723404255319
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.8518518518518,
    "taxa_sucesso": 98.1481481481481
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 1,
    "taxa_rejeicao": 1.3888888888888,
    "taxa_sucesso": 98.6111111111111
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 2,
    "taxa_rejeicao": 0.9615384615384,
    "taxa_sucesso": 99.0384615384615
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 7,
    "taxa_rejeicao": 0.8974358974358,
    "taxa_sucesso": 99.1025641025641
  },
  {
    "facet": "Tubarão",
    "municipio.nome": "Tubarão",
    "rejeitadas": 2,
    "taxa_rejeicao": 0.8849557522123,
    "taxa_sucesso": 99.1150442477876
  },
  {
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.709219858156,
    "taxa_sucesso": 99.29078014184391
  },
  {
    "facet": "Barbacena",
    "municipio.nome": "Barbacena",
    "rejeitadas": 1,
    "taxa_rejeicao": 0.2785515320334,
    "taxa_sucesso": 99.7214484679665
  },
  {
    "facet": "Salvador",
    "municipio.nome": "Salvador",
    "rejeitadas": 6,
    "taxa_rejeicao": 0.1247141966327,
    "taxa_sucesso": 99.8752858033672
  },
  {
    "facet": "Unterentfelden",
    "municipio.nome": "Unterentfelden",
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
    "facet": "Palotina",
    "municipio.nome": "Palotina",
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
    "facet": "chicago",
    "municipio.nome": "chicago",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Barranquilla",
    "municipio.nome": "Barranquilla",
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
    "facet": "Alegre",
    "municipio.nome": "Alegre",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Não Informado",
    "municipio.nome": "Não Informado",
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
    "facet": "Coroaci",
    "municipio.nome": "Coroaci",
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
    "facet": "Prishtina",
    "municipio.nome": "Prishtina",
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
    "facet": "Quincy",
    "municipio.nome": "Quincy",
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
    "facet": "Visp",
    "municipio.nome": "Visp",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Sinop",
    "municipio.nome": "Sinop",
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
    "facet": "Cariacica",
    "municipio.nome": "Cariacica",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Barueri",
    "municipio.nome": "Barueri",
    "rejeitadas": 33,
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
    "facet": "Orlando",
    "municipio.nome": "Orlando",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itanhém",
    "municipio.nome": "Itanhém",
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
    "facet": "Sunnybank Hills",
    "municipio.nome": "Sunnybank Hills",
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
    "facet": "Lawndale",
    "municipio.nome": "Lawndale",
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
    "facet": "Sumaré",
    "municipio.nome": "Sumaré",
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
    "facet": "Huddersfield, west Yorkshire",
    "municipio.nome": "Huddersfield, west Yorkshire",
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
    "facet": "Serra Negra",
    "municipio.nome": "Serra Negra",
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
    "facet": "pasto",
    "municipio.nome": "pasto",
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
    "facet": "Itaúna",
    "municipio.nome": "Itaúna",
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
    "facet": "Pariquera-Açu",
    "municipio.nome": "Pariquera-Açu",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Milano",
    "municipio.nome": "Milano",
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
    "facet": "Bogotá D.C.",
    "municipio.nome": "Bogotá D.C.",
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
    "facet": "Santo Antônio do Pinhal",
    "municipio.nome": "Santo Antônio do Pinhal",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Pristina",
    "municipio.nome": "Pristina",
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
    "facet": "Tirana",
    "municipio.nome": "Tirana",
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
    "facet": "Cardiff",
    "municipio.nome": "Cardiff",
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
    "facet": "Kissimmee",
    "municipio.nome": "Kissimmee",
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
    "facet": "Araranguá",
    "municipio.nome": "Araranguá",
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
    "facet": "Barra dos Coqueiros",
    "municipio.nome": "Barra dos Coqueiros",
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
    "facet": "Umuarama",
    "municipio.nome": "Umuarama",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Emden",
    "municipio.nome": "Emden",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Powell",
    "municipio.nome": "Powell",
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
    "facet": "Dietikon",
    "municipio.nome": "Dietikon",
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
    "facet": "Alice Springs",
    "municipio.nome": "Alice Springs",
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
    "facet": "Itapeva",
    "municipio.nome": "Itapeva",
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
    "facet": "Maringá",
    "municipio.nome": "Maringá",
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
    "facet": "Três Rios",
    "municipio.nome": "Três Rios",
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
    "facet": "Maravilha",
    "municipio.nome": "Maravilha",
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
    "facet": "Araras",
    "municipio.nome": "Araras",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Surat",
    "municipio.nome": "Surat",
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
    "facet": "Marechal Cândido Rondon",
    "municipio.nome": "Marechal Cândido Rondon",
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
    "facet": "Aracati",
    "municipio.nome": "Aracati",
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
    "facet": "Salgueiro",
    "municipio.nome": "Salgueiro",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "San Diego",
    "municipio.nome": "San Diego",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Boston",
    "municipio.nome": "Boston",
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
    "facet": "Jamaica",
    "municipio.nome": "Jamaica",
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
    "facet": "Brienz",
    "municipio.nome": "Brienz",
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
    "facet": "Brodowski",
    "municipio.nome": "Brodowski",
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
    "facet": "Hehalom",
    "municipio.nome": "Hehalom",
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
    "facet": "Lahore",
    "municipio.nome": "Lahore",
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
    "facet": "Petrópolis",
    "municipio.nome": "Petrópolis",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cuernavaca Morelos",
    "municipio.nome": "Cuernavaca Morelos",
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
    "facet": "Yaoundé",
    "municipio.nome": "Yaoundé",
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
    "facet": "Ubá",
    "municipio.nome": "Ubá",
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
    "facet": "Bronx",
    "municipio.nome": "Bronx",
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
    "facet": "Cerro Largo",
    "municipio.nome": "Cerro Largo",
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
    "facet": "Tijuana",
    "municipio.nome": "Tijuana",
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
    "facet": "Kraków",
    "municipio.nome": "Kraków",
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
    "beginTimeSeconds": 1783710900,
    "endTimeSeconds": 1783712100,
    "rejeicao": 17.795879904747206,
    "sucesso": 82.20412009525275
  },
  {
    "beginTimeSeconds": 1783712100,
    "endTimeSeconds": 1783713300,
    "rejeicao": 17.93663955226172,
    "sucesso": 82.06336044773832
  },
  {
    "beginTimeSeconds": 1783713300,
    "endTimeSeconds": 1783714500,
    "rejeicao": 17.602779880705064,
    "sucesso": 82.39722011929443
  },
  {
    "beginTimeSeconds": 1783714500,
    "endTimeSeconds": 1783715700,
    "rejeicao": 17.18936865037895,
    "sucesso": 82.81063134962116
  },
  {
    "beginTimeSeconds": 1783715700,
    "endTimeSeconds": 1783716900,
    "rejeicao": 17.178892851308415,
    "sucesso": 82.82110714869148
  },
  {
    "beginTimeSeconds": 1783716900,
    "endTimeSeconds": 1783718100,
    "rejeicao": 17.365083732949824,
    "sucesso": 82.63491626705022
  },
  {
    "beginTimeSeconds": 1783718100,
    "endTimeSeconds": 1783719300,
    "rejeicao": 17.225279795475867,
    "sucesso": 82.77472020452413
  },
  {
    "beginTimeSeconds": 1783719300,
    "endTimeSeconds": 1783720500,
    "rejeicao": 17.23367578677305,
    "sucesso": 82.76632421322721
  },
  {
    "beginTimeSeconds": 1783720500,
    "endTimeSeconds": 1783721700,
    "rejeicao": 17.599547481255634,
    "sucesso": 82.40045251874442
  },
  {
    "beginTimeSeconds": 1783721700,
    "endTimeSeconds": 1783722900,
    "rejeicao": 18.414930593757788,
    "sucesso": 81.58506940624224
  },
  {
    "beginTimeSeconds": 1783722900,
    "endTimeSeconds": 1783724100,
    "rejeicao": 19.842502573933434,
    "sucesso": 80.15749742606667
  },
  {
    "beginTimeSeconds": 1783724100,
    "endTimeSeconds": 1783725300,
    "rejeicao": 20.354474052207323,
    "sucesso": 79.64552594779266
  }
],
  taxaSucessoMunicipioTs: [{"facet": "Aracati", "beginTimeSeconds": 1783710900, "endTimeSeconds": 1783712100, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1783712100, "endTimeSeconds": 1783713300, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1783713300, "endTimeSeconds": 1783714500, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1783714500, "endTimeSeconds": 1783715700, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1783715700, "endTimeSeconds": 1783716900, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1783716900, "endTimeSeconds": 1783718100, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1783718100, "endTimeSeconds": 1783719300, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1783719300, "endTimeSeconds": 1783720500, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1783720500, "endTimeSeconds": 1783721700, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1783721700, "endTimeSeconds": 1783722900, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1783722900, "endTimeSeconds": 1783724100, "municipio.nome": "Aracati", "sucesso": null}, {"facet": "Aracati", "beginTimeSeconds": 1783724100, "endTimeSeconds": 1783725300, "municipio.nome": "Aracati", "sucesso": null}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1783710900, "endTimeSeconds": 1783712100, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1783712100, "endTimeSeconds": 1783713300, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1783713300, "endTimeSeconds": 1783714500, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1783714500, "endTimeSeconds": 1783715700, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1783715700, "endTimeSeconds": 1783716900, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1783716900, "endTimeSeconds": 1783718100, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1783718100, "endTimeSeconds": 1783719300, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1783719300, "endTimeSeconds": 1783720500, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1783720500, "endTimeSeconds": 1783721700, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1783721700, "endTimeSeconds": 1783722900, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1783722900, "endTimeSeconds": 1783724100, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1783724100, "endTimeSeconds": 1783725300, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1783710900, "endTimeSeconds": 1783712100, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1783712100, "endTimeSeconds": 1783713300, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1783713300, "endTimeSeconds": 1783714500, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1783714500, "endTimeSeconds": 1783715700, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1783715700, "endTimeSeconds": 1783716900, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1783716900, "endTimeSeconds": 1783718100, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1783718100, "endTimeSeconds": 1783719300, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1783719300, "endTimeSeconds": 1783720500, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1783720500, "endTimeSeconds": 1783721700, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1783721700, "endTimeSeconds": 1783722900, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1783722900, "endTimeSeconds": 1783724100, "municipio.nome": "Caic\u00f3", "sucesso": null}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1783724100, "endTimeSeconds": 1783725300, "municipio.nome": "Caic\u00f3", "sucesso": null}, {"facet": "Salgueiro", "beginTimeSeconds": 1783710900, "endTimeSeconds": 1783712100, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1783712100, "endTimeSeconds": 1783713300, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1783713300, "endTimeSeconds": 1783714500, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1783714500, "endTimeSeconds": 1783715700, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1783715700, "endTimeSeconds": 1783716900, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1783716900, "endTimeSeconds": 1783718100, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1783718100, "endTimeSeconds": 1783719300, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1783719300, "endTimeSeconds": 1783720500, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1783720500, "endTimeSeconds": 1783721700, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1783721700, "endTimeSeconds": 1783722900, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1783722900, "endTimeSeconds": 1783724100, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Salgueiro", "beginTimeSeconds": 1783724100, "endTimeSeconds": 1783725300, "municipio.nome": "Salgueiro", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1783710900, "endTimeSeconds": 1783712100, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1783712100, "endTimeSeconds": 1783713300, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1783713300, "endTimeSeconds": 1783714500, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1783714500, "endTimeSeconds": 1783715700, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1783715700, "endTimeSeconds": 1783716900, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1783716900, "endTimeSeconds": 1783718100, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1783718100, "endTimeSeconds": 1783719300, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1783719300, "endTimeSeconds": 1783720500, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1783720500, "endTimeSeconds": 1783721700, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1783721700, "endTimeSeconds": 1783722900, "municipio.nome": "Itabaiana", "sucesso": 100.0}, {"facet": "Itabaiana", "beginTimeSeconds": 1783722900, "endTimeSeconds": 1783724100, "municipio.nome": "Itabaiana", "sucesso": null}, {"facet": "Itabaiana", "beginTimeSeconds": 1783724100, "endTimeSeconds": 1783725300, "municipio.nome": "Itabaiana", "sucesso": null}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1783710900, "endTimeSeconds": 1783712100, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1783712100, "endTimeSeconds": 1783713300, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1783713300, "endTimeSeconds": 1783714500, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1783714500, "endTimeSeconds": 1783715700, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1783715700, "endTimeSeconds": 1783716900, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1783716900, "endTimeSeconds": 1783718100, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1783718100, "endTimeSeconds": 1783719300, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1783719300, "endTimeSeconds": 1783720500, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1783720500, "endTimeSeconds": 1783721700, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1783721700, "endTimeSeconds": 1783722900, "municipio.nome": "Ilh\u00e9us", "sucesso": 100.0}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1783722900, "endTimeSeconds": 1783724100, "municipio.nome": "Ilh\u00e9us", "sucesso": null}, {"facet": "Ilh\u00e9us", "beginTimeSeconds": 1783724100, "endTimeSeconds": 1783725300, "municipio.nome": "Ilh\u00e9us", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1783710900, "endTimeSeconds": 1783712100, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1783712100, "endTimeSeconds": 1783713300, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1783713300, "endTimeSeconds": 1783714500, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1783714500, "endTimeSeconds": 1783715700, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1783715700, "endTimeSeconds": 1783716900, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1783716900, "endTimeSeconds": 1783718100, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1783718100, "endTimeSeconds": 1783719300, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1783719300, "endTimeSeconds": 1783720500, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1783720500, "endTimeSeconds": 1783721700, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1783721700, "endTimeSeconds": 1783722900, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1783722900, "endTimeSeconds": 1783724100, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1783724100, "endTimeSeconds": 1783725300, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1783710900, "endTimeSeconds": 1783712100, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1783712100, "endTimeSeconds": 1783713300, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1783713300, "endTimeSeconds": 1783714500, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1783714500, "endTimeSeconds": 1783715700, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1783715700, "endTimeSeconds": 1783716900, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1783716900, "endTimeSeconds": 1783718100, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1783718100, "endTimeSeconds": 1783719300, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1783719300, "endTimeSeconds": 1783720500, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1783720500, "endTimeSeconds": 1783721700, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1783721700, "endTimeSeconds": 1783722900, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1783722900, "endTimeSeconds": 1783724100, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Parna\u00edba", "beginTimeSeconds": 1783724100, "endTimeSeconds": 1783725300, "municipio.nome": "Parna\u00edba", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1783710900, "endTimeSeconds": 1783712100, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1783712100, "endTimeSeconds": 1783713300, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1783713300, "endTimeSeconds": 1783714500, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1783714500, "endTimeSeconds": 1783715700, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1783715700, "endTimeSeconds": 1783716900, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1783716900, "endTimeSeconds": 1783718100, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1783718100, "endTimeSeconds": 1783719300, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1783719300, "endTimeSeconds": 1783720500, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1783720500, "endTimeSeconds": 1783721700, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1783721700, "endTimeSeconds": 1783722900, "municipio.nome": "Alfenas", "sucesso": 100.0}, {"facet": "Alfenas", "beginTimeSeconds": 1783722900, "endTimeSeconds": 1783724100, "municipio.nome": "Alfenas", "sucesso": null}, {"facet": "Alfenas", "beginTimeSeconds": 1783724100, "endTimeSeconds": 1783725300, "municipio.nome": "Alfenas", "sucesso": null}, {"facet": "Guapimirim", "beginTimeSeconds": 1783710900, "endTimeSeconds": 1783712100, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1783712100, "endTimeSeconds": 1783713300, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1783713300, "endTimeSeconds": 1783714500, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1783714500, "endTimeSeconds": 1783715700, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1783715700, "endTimeSeconds": 1783716900, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1783716900, "endTimeSeconds": 1783718100, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1783718100, "endTimeSeconds": 1783719300, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1783719300, "endTimeSeconds": 1783720500, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1783720500, "endTimeSeconds": 1783721700, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1783721700, "endTimeSeconds": 1783722900, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1783722900, "endTimeSeconds": 1783724100, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Guapimirim", "beginTimeSeconds": 1783724100, "endTimeSeconds": 1783725300, "municipio.nome": "Guapimirim", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1783710900, "endTimeSeconds": 1783712100, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1783712100, "endTimeSeconds": 1783713300, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1783713300, "endTimeSeconds": 1783714500, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1783714500, "endTimeSeconds": 1783715700, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1783715700, "endTimeSeconds": 1783716900, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1783716900, "endTimeSeconds": 1783718100, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1783718100, "endTimeSeconds": 1783719300, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1783719300, "endTimeSeconds": 1783720500, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1783720500, "endTimeSeconds": 1783721700, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1783721700, "endTimeSeconds": 1783722900, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1783722900, "endTimeSeconds": 1783724100, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1783724100, "endTimeSeconds": 1783725300, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1783710900, "endTimeSeconds": 1783712100, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1783712100, "endTimeSeconds": 1783713300, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1783713300, "endTimeSeconds": 1783714500, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1783714500, "endTimeSeconds": 1783715700, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1783715700, "endTimeSeconds": 1783716900, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1783716900, "endTimeSeconds": 1783718100, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1783718100, "endTimeSeconds": 1783719300, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1783719300, "endTimeSeconds": 1783720500, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1783720500, "endTimeSeconds": 1783721700, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1783721700, "endTimeSeconds": 1783722900, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1783722900, "endTimeSeconds": 1783724100, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Santa Teresa", "beginTimeSeconds": 1783724100, "endTimeSeconds": 1783725300, "municipio.nome": "Santa Teresa", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1783710900, "endTimeSeconds": 1783712100, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1783712100, "endTimeSeconds": 1783713300, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1783713300, "endTimeSeconds": 1783714500, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1783714500, "endTimeSeconds": 1783715700, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1783715700, "endTimeSeconds": 1783716900, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1783716900, "endTimeSeconds": 1783718100, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1783718100, "endTimeSeconds": 1783719300, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1783719300, "endTimeSeconds": 1783720500, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1783720500, "endTimeSeconds": 1783721700, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1783721700, "endTimeSeconds": 1783722900, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1783722900, "endTimeSeconds": 1783724100, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Urup\u00e1", "beginTimeSeconds": 1783724100, "endTimeSeconds": 1783725300, "municipio.nome": "Urup\u00e1", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1783710900, "endTimeSeconds": 1783712100, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1783712100, "endTimeSeconds": 1783713300, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1783713300, "endTimeSeconds": 1783714500, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1783714500, "endTimeSeconds": 1783715700, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1783715700, "endTimeSeconds": 1783716900, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1783716900, "endTimeSeconds": 1783718100, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1783718100, "endTimeSeconds": 1783719300, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1783719300, "endTimeSeconds": 1783720500, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1783720500, "endTimeSeconds": 1783721700, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1783721700, "endTimeSeconds": 1783722900, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1783722900, "endTimeSeconds": 1783724100, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Alegre", "beginTimeSeconds": 1783724100, "endTimeSeconds": 1783725300, "municipio.nome": "Alegre", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1783710900, "endTimeSeconds": 1783712100, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1783712100, "endTimeSeconds": 1783713300, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1783713300, "endTimeSeconds": 1783714500, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1783714500, "endTimeSeconds": 1783715700, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1783715700, "endTimeSeconds": 1783716900, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1783716900, "endTimeSeconds": 1783718100, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1783718100, "endTimeSeconds": 1783719300, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1783719300, "endTimeSeconds": 1783720500, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1783720500, "endTimeSeconds": 1783721700, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1783721700, "endTimeSeconds": 1783722900, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1783722900, "endTimeSeconds": 1783724100, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}, {"facet": "Angra dos Reis", "beginTimeSeconds": 1783724100, "endTimeSeconds": 1783725300, "municipio.nome": "Angra dos Reis", "sucesso": 100.0}]
};
