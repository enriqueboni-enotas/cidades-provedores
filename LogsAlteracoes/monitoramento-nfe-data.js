// Gerado automaticamente pelo workflow monitoramento-nfe.yml em 17/08/2026 10:39 (Brasilia)
// NAO EDITAR MANUALMENTE
var monitoramentoNfeData = {
  geradoEm: "17/08/2026 10:39",
  travadasPorMunicipio: [
  {
    "facet": "Corbélia",
    "latest.nfe.stuck_in_intermediate_status.count": 116,
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
    "facet": "Naviraí",
    "latest.nfe.stuck_in_intermediate_status.count": 1,
    "nfe.municipio_servico": "Naviraí"
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
  }
],
  tempoMaxProcessamento: [
  {
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 25,
    "nfe.municipio_servico": "Caraguatatuba"
  },
  {
    "facet": "Araranguá",
    "max.nfe.processing_time.minutes": 17,
    "nfe.municipio_servico": "Araranguá"
  },
  {
    "facet": "Barueri",
    "max.nfe.processing_time.minutes": 13,
    "nfe.municipio_servico": "Barueri"
  },
  {
    "facet": "Porto Alegre",
    "max.nfe.processing_time.minutes": 11,
    "nfe.municipio_servico": "Porto Alegre"
  },
  {
    "facet": "Taboão da Serra",
    "max.nfe.processing_time.minutes": 11,
    "nfe.municipio_servico": "Taboão da Serra"
  },
  {
    "facet": "Mauá",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "Mauá"
  },
  {
    "facet": "Londrina",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "Londrina"
  },
  {
    "facet": "Ribeirão Preto",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Ribeirão Preto"
  },
  {
    "facet": "Cuiabá",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Cuiabá"
  },
  {
    "facet": "Curitiba",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Curitiba"
  }
],
  travadasPorMotivo: [
  {
    "facet": "",
    "latest.nfe.stuck_in_intermediate_status.count": 116,
    "nfe.motivo_status": ""
  }
],
  tempoPorStatus: [
  {
    "average.nfe.processing_time.minutes": 6,
    "facet": "Cancelada",
    "nfe.status": "Cancelada"
  },
  {
    "average.nfe.processing_time.minutes": 0.7634408602150538,
    "facet": "Negada",
    "nfe.status": "Negada"
  },
  {
    "average.nfe.processing_time.minutes": 0.5980066445182725,
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
    "max_min": 11,
    "media_min": 6,
    "p95_min": {
      "95": 11
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
    "max_min": 13,
    "media_min": 0.7608695652173914,
    "p95_min": {
      "95": 6.03125
    }
  },
  {
    "facet": [
      "Autorizada",
      "AutorizadaAguardandoGeracaoPDF"
    ],
    "max_min": 25,
    "media_min": 0.5980066445182725,
    "p95_min": {
      "95": 1.0078125
    }
  }
],
  perfMunicipio: [
  {
    "average.nfe.processing_time.minutes": 8.5,
    "count.nfe.processing_time.minutes": 30,
    "facet": "Araranguá",
    "max.nfe.processing_time.minutes": 17,
    "nfe.municipio_servico": "Araranguá",
    "percentile.nfe.processing_time.minutes": {
      "95": 17
    }
  },
  {
    "average.nfe.processing_time.minutes": 7.444444444444445,
    "count.nfe.processing_time.minutes": 45,
    "facet": "Caraguatatuba",
    "max.nfe.processing_time.minutes": 25,
    "nfe.municipio_servico": "Caraguatatuba",
    "percentile.nfe.processing_time.minutes": {
      "95": 25
    }
  },
  {
    "average.nfe.processing_time.minutes": 5,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Biguaçu",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Biguaçu",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 4.333333333333333,
    "count.nfe.processing_time.minutes": 45,
    "facet": "Porto Alegre",
    "max.nfe.processing_time.minutes": 11,
    "nfe.municipio_servico": "Porto Alegre",
    "percentile.nfe.processing_time.minutes": {
      "95": 11
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.7777777777777777,
    "count.nfe.processing_time.minutes": 45,
    "facet": "Taboão da Serra",
    "max.nfe.processing_time.minutes": 11,
    "nfe.municipio_servico": "Taboão da Serra",
    "percentile.nfe.processing_time.minutes": {
      "95": 11
    }
  },
  {
    "average.nfe.processing_time.minutes": 3.5,
    "count.nfe.processing_time.minutes": 30,
    "facet": "Londrina",
    "max.nfe.processing_time.minutes": 7,
    "nfe.municipio_servico": "Londrina",
    "percentile.nfe.processing_time.minutes": {
      "95": 7
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.6666666666666665,
    "count.nfe.processing_time.minutes": 30,
    "facet": "Mauá",
    "max.nfe.processing_time.minutes": 10,
    "nfe.municipio_servico": "Mauá",
    "percentile.nfe.processing_time.minutes": {
      "95": 10
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.3333333333333335,
    "count.nfe.processing_time.minutes": 30,
    "facet": "Ribeirão Preto",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Ribeirão Preto",
    "percentile.nfe.processing_time.minutes": {
      "95": 6
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.25,
    "count.nfe.processing_time.minutes": 60,
    "facet": "Barueri",
    "max.nfe.processing_time.minutes": 13,
    "nfe.municipio_servico": "Barueri",
    "percentile.nfe.processing_time.minutes": {
      "95": 13
    }
  },
  {
    "average.nfe.processing_time.minutes": 2.1666666666666665,
    "count.nfe.processing_time.minutes": 30,
    "facet": "Cuiabá",
    "max.nfe.processing_time.minutes": 6,
    "nfe.municipio_servico": "Cuiabá",
    "percentile.nfe.processing_time.minutes": {
      "95": 6
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Caldas Novas",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Caldas Novas",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 2,
    "count.nfe.processing_time.minutes": 30,
    "facet": "Belém",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "Belém",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.5,
    "count.nfe.processing_time.minutes": 20,
    "facet": "São José do Rio Preto",
    "max.nfe.processing_time.minutes": 4,
    "nfe.municipio_servico": "São José do Rio Preto",
    "percentile.nfe.processing_time.minutes": {
      "95": 4
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.5,
    "count.nfe.processing_time.minutes": 20,
    "facet": "Lagoa Santa",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Lagoa Santa",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.3333333333333333,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Dourados",
    "max.nfe.processing_time.minutes": 2,
    "nfe.municipio_servico": "Dourados",
    "percentile.nfe.processing_time.minutes": {
      "95": 2
    }
  },
  {
    "average.nfe.processing_time.minutes": 1.1666666666666667,
    "count.nfe.processing_time.minutes": 30,
    "facet": "Curitiba",
    "max.nfe.processing_time.minutes": 5,
    "nfe.municipio_servico": "Curitiba",
    "percentile.nfe.processing_time.minutes": {
      "95": 5
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Caicó",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Caicó",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Salto",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Salto",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Ipirá",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Ipirá",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Campo Belo",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Campo Belo",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Mandaguaçu",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Mandaguaçu",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Patos de Minas",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Patos de Minas",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Siqueira Campos",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Siqueira Campos",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Cordeirópolis",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Cordeirópolis",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Pelotas",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Pelotas",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Bom Jesus do Itabapoana",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Bom Jesus do Itabapoana",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Varginha",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Varginha",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Bragança Paulista",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Bragança Paulista",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Votuporanga",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Votuporanga",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Luzerna",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Luzerna",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 10,
    "facet": "São Lourenço do Oeste",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São Lourenço do Oeste",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Natal",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Natal",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Paraibuna",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Paraibuna",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Serra Negra",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Serra Negra",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Sacramento",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Sacramento",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Serra",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Serra",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 5,
    "facet": "Três de Maio",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Três de Maio",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Nova Friburgo",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Nova Friburgo",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Itaboraí",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Itaboraí",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Colatina",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Colatina",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Aparecida de Goiânia",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Aparecida de Goiânia",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Lajeado",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Lajeado",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Aracati",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Aracati",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Guarapuava",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Guarapuava",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "São José dos Pinhais",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "São José dos Pinhais",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Santa Rita do Passa Quatro",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Santa Rita do Passa Quatro",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Santo André",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Santo André",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Gramado",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Gramado",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Niterói",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Niterói",
    "percentile.nfe.processing_time.minutes": {
      "95": 1
    }
  },
  {
    "average.nfe.processing_time.minutes": 1,
    "count.nfe.processing_time.minutes": 15,
    "facet": "Buenos Aires",
    "max.nfe.processing_time.minutes": 1,
    "nfe.municipio_servico": "Buenos Aires",
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
  }
],
  statsGlobais: [
  {
    "average.nfe.processing_time.minutes": 0.6865839909808342,
    "max.nfe.processing_time.minutes": 25,
    "percentile.nfe.processing_time.minutes": {
      "50": 0,
      "90": 1.0078125,
      "95": 2.015625,
      "99": 11.0625
    }
  }
],
  totalEmpresas: [
  {
    "uniqueCount.empresa.razao_social": 7
  }
],
  totalMunicipios: [
  {
    "uniqueCount.nfe.municipio_servico": 222
  }
],
  volumeMunicipio: [
  {
    "count.nfe.processing_time.minutes": 60,
    "facet": "Barueri",
    "nfe.municipio_servico": "Barueri"
  },
  {
    "count.nfe.processing_time.minutes": 45,
    "facet": "",
    "nfe.municipio_servico": ""
  },
  {
    "count.nfe.processing_time.minutes": 45,
    "facet": "Taboão da Serra",
    "nfe.municipio_servico": "Taboão da Serra"
  },
  {
    "count.nfe.processing_time.minutes": 45,
    "facet": "São Bernardo do Campo",
    "nfe.municipio_servico": "São Bernardo do Campo"
  },
  {
    "count.nfe.processing_time.minutes": 45,
    "facet": "Caraguatatuba",
    "nfe.municipio_servico": "Caraguatatuba"
  },
  {
    "count.nfe.processing_time.minutes": 45,
    "facet": "Porto Alegre",
    "nfe.municipio_servico": "Porto Alegre"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Itabaiana",
    "nfe.municipio_servico": "Itabaiana"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Tapejara",
    "nfe.municipio_servico": "Tapejara"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Belo Horizonte",
    "nfe.municipio_servico": "Belo Horizonte"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Guaíra",
    "nfe.municipio_servico": "Guaíra"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Cravinhos",
    "nfe.municipio_servico": "Cravinhos"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Nova Lima",
    "nfe.municipio_servico": "Nova Lima"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Londrina",
    "nfe.municipio_servico": "Londrina"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Duque de Caxias",
    "nfe.municipio_servico": "Duque de Caxias"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Rio de Janeiro",
    "nfe.municipio_servico": "Rio de Janeiro"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Rio Bonito",
    "nfe.municipio_servico": "Rio Bonito"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Betim",
    "nfe.municipio_servico": "Betim"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Santa Maria",
    "nfe.municipio_servico": "Santa Maria"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Curitiba",
    "nfe.municipio_servico": "Curitiba"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Praia Grande",
    "nfe.municipio_servico": "Praia Grande"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "São José dos Campos",
    "nfe.municipio_servico": "São José dos Campos"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Goiânia",
    "nfe.municipio_servico": "Goiânia"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Brasília",
    "nfe.municipio_servico": "Brasília"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Montes Claros",
    "nfe.municipio_servico": "Montes Claros"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Mateiros",
    "nfe.municipio_servico": "Mateiros"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Aracaju",
    "nfe.municipio_servico": "Aracaju"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Ribeirão Preto",
    "nfe.municipio_servico": "Ribeirão Preto"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Indaiatuba",
    "nfe.municipio_servico": "Indaiatuba"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Vila Velha",
    "nfe.municipio_servico": "Vila Velha"
  },
  {
    "count.nfe.processing_time.minutes": 30,
    "facet": "Canoas",
    "nfe.municipio_servico": "Canoas"
  }
],
  municipioStatus: [
  {
    "facet": [
      "Corbélia",
      "SolicitandoAutorizacao"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 116
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
      "Naviraí",
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
      "Urupá",
      "Cancelada"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  topEmpresasTravadas: [],
  travadasPorStatusMunicipio: [
  {
    "facet": [
      "SolicitandoAutorizacao",
      "Corbélia"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 116
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
      "Cancelada",
      "Urupá"
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
  }
],
  travadasMotivoEmpresa: [
  {
    "facet": [
      "",
      "SIMIONI & CASAROLLI TREINAMENTOS ON LINE LTDA."
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 116
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
      "GABRIEL SCHAEFFER DIGITAL LTDA"
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
      "MENTE INTERATIVA"
    ],
    "latest.nfe.stuck_in_intermediate_status.count": 1
  }
],
  volumetriaHora: [
  {
    "canceladas": 33,
    "devolucoes": 7,
    "em_emissao": 706,
    "email": 0,
    "emitidas": 9843,
    "falhas": 2328
  }
],
  volumetriaTimeseries: [
  {
    "beginTimeSeconds": 1786887300,
    "emitidas": 6915,
    "endTimeSeconds": 1786890900,
    "falhas": 733
  },
  {
    "beginTimeSeconds": 1786890900,
    "emitidas": 4485,
    "endTimeSeconds": 1786894500,
    "falhas": 345
  },
  {
    "beginTimeSeconds": 1786894500,
    "emitidas": 4982,
    "endTimeSeconds": 1786898100,
    "falhas": 286
  },
  {
    "beginTimeSeconds": 1786898100,
    "emitidas": 4442,
    "endTimeSeconds": 1786901700,
    "falhas": 314
  },
  {
    "beginTimeSeconds": 1786901700,
    "emitidas": 4053,
    "endTimeSeconds": 1786905300,
    "falhas": 344
  },
  {
    "beginTimeSeconds": 1786905300,
    "emitidas": 1901,
    "endTimeSeconds": 1786908900,
    "falhas": 297
  },
  {
    "beginTimeSeconds": 1786908900,
    "emitidas": 3749,
    "endTimeSeconds": 1786912500,
    "falhas": 318
  },
  {
    "beginTimeSeconds": 1786912500,
    "emitidas": 3611,
    "endTimeSeconds": 1786916100,
    "falhas": 407
  },
  {
    "beginTimeSeconds": 1786916100,
    "emitidas": 3905,
    "endTimeSeconds": 1786919700,
    "falhas": 495
  },
  {
    "beginTimeSeconds": 1786919700,
    "emitidas": 3991,
    "endTimeSeconds": 1786923300,
    "falhas": 657
  },
  {
    "beginTimeSeconds": 1786923300,
    "emitidas": 3797,
    "endTimeSeconds": 1786926900,
    "falhas": 356
  },
  {
    "beginTimeSeconds": 1786926900,
    "emitidas": 7613,
    "endTimeSeconds": 1786930500,
    "falhas": 344
  },
  {
    "beginTimeSeconds": 1786930500,
    "emitidas": 3152,
    "endTimeSeconds": 1786934100,
    "falhas": 423
  },
  {
    "beginTimeSeconds": 1786934100,
    "emitidas": 2352,
    "endTimeSeconds": 1786937700,
    "falhas": 226
  },
  {
    "beginTimeSeconds": 1786937700,
    "emitidas": 10066,
    "endTimeSeconds": 1786941300,
    "falhas": 4185
  },
  {
    "beginTimeSeconds": 1786941300,
    "emitidas": 493,
    "endTimeSeconds": 1786944900,
    "falhas": 53
  },
  {
    "beginTimeSeconds": 1786944900,
    "emitidas": 1046,
    "endTimeSeconds": 1786948500,
    "falhas": 110
  },
  {
    "beginTimeSeconds": 1786948500,
    "emitidas": 738,
    "endTimeSeconds": 1786952100,
    "falhas": 154
  },
  {
    "beginTimeSeconds": 1786952100,
    "emitidas": 688,
    "endTimeSeconds": 1786955700,
    "falhas": 121
  },
  {
    "beginTimeSeconds": 1786955700,
    "emitidas": 1348,
    "endTimeSeconds": 1786959300,
    "falhas": 293
  },
  {
    "beginTimeSeconds": 1786959300,
    "emitidas": 4111,
    "endTimeSeconds": 1786962900,
    "falhas": 454
  },
  {
    "beginTimeSeconds": 1786962900,
    "emitidas": 3972,
    "endTimeSeconds": 1786966500,
    "falhas": 534
  },
  {
    "beginTimeSeconds": 1786966500,
    "emitidas": 7779,
    "endTimeSeconds": 1786970100,
    "falhas": 1236
  },
  {
    "beginTimeSeconds": 1786970100,
    "emitidas": 10052,
    "endTimeSeconds": 1786973700,
    "falhas": 2339
  }
],
  filaOperacoes: [
  {
    "pendentes": null,
    "rodando": 2
  }
],
  webhooks: [
  {
    "dead_letter": 0,
    "falhas": 1,
    "ok": 100984
  }
],
  travadasStatusEmpresa: {"6":[],"3":[],"1":[],"0":[],"12":[]},
  totalMunicipiosPendentes: [
  {
    "uniqueCount.nfe.municipio_servico": 7
  }
],
  taxaNfse: [
  {
    "rejeicao": 52.73076810935647,
    "sucesso": 47.26923189064353
  }
],
  taxaNfe: [
  {
    "rejeicao": 97.0804236299753,
    "sucesso": 2.919576370024688
  }
],
  taxaSucessoMunicipio: [
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
    "facet": "Francisco Beltrão",
    "municipio.nome": "Francisco Beltrão",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cerquilho",
    "municipio.nome": "Cerquilho",
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
    "facet": "Caldas Novas",
    "municipio.nome": "Caldas Novas",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
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
    "facet": "Patos de Minas",
    "municipio.nome": "Patos de Minas",
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
    "facet": "Siqueira Campos",
    "municipio.nome": "Siqueira Campos",
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
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
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
    "taxa_rejeicao": 100,
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
    "rejeitadas": 3,
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
    "facet": "Varginha",
    "municipio.nome": "Varginha",
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
    "facet": "Bragança Paulista",
    "municipio.nome": "Bragança Paulista",
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
    "rejeitadas": 5,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ciudad de México",
    "municipio.nome": "Ciudad de México",
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
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
    "facet": "Botucatu",
    "municipio.nome": "Botucatu",
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
    "facet": "Ivoti",
    "municipio.nome": "Ivoti",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Maria",
    "municipio.nome": "Santa Maria",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Natal",
    "municipio.nome": "Natal",
    "rejeitadas": 5,
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
    "facet": "Itapecerica",
    "municipio.nome": "Itapecerica",
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
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
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
    "facet": "Serra",
    "municipio.nome": "Serra",
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
    "facet": "Santos",
    "municipio.nome": "Santos",
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
    "rejeitadas": 3,
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
    "facet": "Montes Claros",
    "municipio.nome": "Montes Claros",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
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
    "facet": "Osório",
    "municipio.nome": "Osório",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 1,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Mateiros",
    "municipio.nome": "Mateiros",
    "rejeitadas": 1,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itaboraí",
    "municipio.nome": "Itaboraí",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 1,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Indaiatuba",
    "municipio.nome": "Indaiatuba",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
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
    "rejeitadas": 1,
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
    "rejeitadas": 1,
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
    "facet": "São Paulo",
    "municipio.nome": "São Paulo",
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
    "facet": "São José dos Pinhais",
    "municipio.nome": "São José dos Pinhais",
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
    "facet": "Palhoça",
    "municipio.nome": "Palhoça",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
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
    "facet": "Belém",
    "municipio.nome": "Belém",
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
    "facet": "Governador Valadares",
    "municipio.nome": "Governador Valadares",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Gramado",
    "municipio.nome": "Gramado",
    "rejeitadas": 18,
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
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
    "rejeitadas": 4,
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
    "taxa_rejeicao": 100,
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
    "facet": "Camaçari",
    "municipio.nome": "Camaçari",
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
    "facet": "Buenos Aires",
    "municipio.nome": "Buenos Aires",
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
    "facet": "Guarapari",
    "municipio.nome": "Guarapari",
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
    "facet": "Santo Antônio da Patrulha",
    "municipio.nome": "Santo Antônio da Patrulha",
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
    "facet": "Rio das Ostras",
    "municipio.nome": "Rio das Ostras",
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
    "taxa_rejeicao": 100,
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
    "facet": "Joinville",
    "municipio.nome": "Joinville",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Bauru",
    "municipio.nome": "Bauru",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
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
    "facet": "Ilha Comprida",
    "municipio.nome": "Ilha Comprida",
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
    "facet": "São José",
    "municipio.nome": "São José",
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
    "facet": "Urussanga",
    "municipio.nome": "Urussanga",
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
    "facet": "Araranguá",
    "municipio.nome": "Araranguá",
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
    "facet": "Manaus",
    "municipio.nome": "Manaus",
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
    "taxa_rejeicao": 100,
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
    "taxa_rejeicao": 100,
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
    "taxa_rejeicao": 100,
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
    "facet": "Candelária",
    "municipio.nome": "Candelária",
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
    "facet": "Imbituba",
    "municipio.nome": "Imbituba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
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
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
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
    "facet": "Tapejara",
    "municipio.nome": "Tapejara",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
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
    "facet": "Ibirubá",
    "municipio.nome": "Ibirubá",
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
    "facet": "Londrina",
    "municipio.nome": "Londrina",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
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
    "facet": "Cariacica",
    "municipio.nome": "Cariacica",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Pedro",
    "municipio.nome": "São Pedro",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Sapiranga",
    "municipio.nome": "Sapiranga",
    "rejeitadas": 5,
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
    "facet": "Rio Bonito",
    "municipio.nome": "Rio Bonito",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itaobim",
    "municipio.nome": "Itaobim",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
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
    "facet": "Porto Seguro",
    "municipio.nome": "Porto Seguro",
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
    "facet": "Caraguatatuba",
    "municipio.nome": "Caraguatatuba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Biguaçu",
    "municipio.nome": "Biguaçu",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cajamar",
    "municipio.nome": "Cajamar",
    "rejeitadas": 68,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 8,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Sorocaba",
    "municipio.nome": "Sorocaba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Campo Grande",
    "municipio.nome": "Campo Grande",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ilhéus",
    "municipio.nome": "Ilhéus",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Caetano do Sul",
    "municipio.nome": "São Caetano do Sul",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jaguaquara",
    "municipio.nome": "Jaguaquara",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Atibaia",
    "municipio.nome": "Atibaia",
    "rejeitadas": 1,
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
    "facet": "Sapucaia do Sul",
    "municipio.nome": "Sapucaia do Sul",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ourinhos",
    "municipio.nome": "Ourinhos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Catanduva",
    "municipio.nome": "Catanduva",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Santana de Parnaíba",
    "municipio.nome": "Santana de Parnaíba",
    "rejeitadas": 1,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Joaquim da Barra",
    "municipio.nome": "São Joaquim da Barra",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
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
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Campos dos Goytacazes",
    "municipio.nome": "Campos dos Goytacazes",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
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
    "facet": "Sabará",
    "municipio.nome": "Sabará",
    "rejeitadas": 11,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Petrópolis",
    "municipio.nome": "Petrópolis",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
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
    "facet": "Piraju",
    "municipio.nome": "Piraju",
    "rejeitadas": 1,
    "taxa_rejeicao": 0,
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
    "facet": "Itajubá",
    "municipio.nome": "Itajubá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 7,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Luís",
    "municipio.nome": "São Luís",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Anápolis",
    "municipio.nome": "Anápolis",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
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
    "facet": "Vitória",
    "municipio.nome": "Vitória",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Resende",
    "municipio.nome": "Resende",
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
  }
],
  taxaRejeicaoMunicipio: [
  {
    "facet": "Ipirá",
    "municipio.nome": "Ipirá",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Belo Horizonte",
    "municipio.nome": "Belo Horizonte",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Alegre",
    "municipio.nome": "Alegre",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cravinhos",
    "municipio.nome": "Cravinhos",
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
    "facet": "Cariacica",
    "municipio.nome": "Cariacica",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Pedro",
    "municipio.nome": "São Pedro",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Sapiranga",
    "municipio.nome": "Sapiranga",
    "rejeitadas": 5,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Dourados",
    "municipio.nome": "Dourados",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Santa Tereza do Oeste",
    "municipio.nome": "Santa Tereza do Oeste",
    "rejeitadas": 2,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Itaobim",
    "municipio.nome": "Itaobim",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Santa Maria",
    "municipio.nome": "Santa Maria",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Serra Negra",
    "municipio.nome": "Serra Negra",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São José dos Campos",
    "municipio.nome": "São José dos Campos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Porto Seguro",
    "municipio.nome": "Porto Seguro",
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
    "facet": "Biguaçu",
    "municipio.nome": "Biguaçu",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cajamar",
    "municipio.nome": "Cajamar",
    "rejeitadas": 68,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Montes Claros",
    "municipio.nome": "Montes Claros",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Itaboraí",
    "municipio.nome": "Itaboraí",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Indaiatuba",
    "municipio.nome": "Indaiatuba",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Vila Velha",
    "municipio.nome": "Vila Velha",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Paranavaí",
    "municipio.nome": "Paranavaí",
    "rejeitadas": 4,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Aparecida de Goiânia",
    "municipio.nome": "Aparecida de Goiânia",
    "rejeitadas": 8,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São José do Rio Preto",
    "municipio.nome": "São José do Rio Preto",
    "rejeitadas": 3,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ilhéus",
    "municipio.nome": "Ilhéus",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Caetano do Sul",
    "municipio.nome": "São Caetano do Sul",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Jaguaquara",
    "municipio.nome": "Jaguaquara",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Porto Alegre",
    "municipio.nome": "Porto Alegre",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Atibaia",
    "municipio.nome": "Atibaia",
    "rejeitadas": 1,
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
    "facet": "Sapucaia do Sul",
    "municipio.nome": "Sapucaia do Sul",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Ourinhos",
    "municipio.nome": "Ourinhos",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Fortaleza",
    "municipio.nome": "Fortaleza",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Videira",
    "municipio.nome": "Videira",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Bauru",
    "municipio.nome": "Bauru",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Indaial",
    "municipio.nome": "Indaial",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Cuiabá",
    "municipio.nome": "Cuiabá",
    "rejeitadas": 1,
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
    "facet": "Lagoa Santa",
    "municipio.nome": "Lagoa Santa",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Porto Velho",
    "municipio.nome": "Porto Velho",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Sabará",
    "municipio.nome": "Sabará",
    "rejeitadas": 11,
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
    "facet": "Garibaldi",
    "municipio.nome": "Garibaldi",
    "rejeitadas": 1,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 0
  },
  {
    "facet": "Recife",
    "municipio.nome": "Recife",
    "rejeitadas": 0,
    "taxa_rejeicao": 100,
    "taxa_sucesso": 100
  },
  {
    "facet": "Piracicaba",
    "municipio.nome": "Piracicaba",
    "rejeitadas": 7,
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
    "facet": "Resende",
    "municipio.nome": "Resende",
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
    "facet": "",
    "municipio.nome": "",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
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
    "facet": "Francisco Beltrão",
    "municipio.nome": "Francisco Beltrão",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Cerquilho",
    "municipio.nome": "Cerquilho",
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
    "facet": "Engenheiro Coelho",
    "municipio.nome": "Engenheiro Coelho",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Taboão da Serra",
    "municipio.nome": "Taboão da Serra",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
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
    "taxa_sucesso": 0
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
    "facet": "Caldas Novas",
    "municipio.nome": "Caldas Novas",
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
    "facet": "Patos de Minas",
    "municipio.nome": "Patos de Minas",
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
    "facet": "Siqueira Campos",
    "municipio.nome": "Siqueira Campos",
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
    "facet": "Juiz de Fora",
    "municipio.nome": "Juiz de Fora",
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
    "facet": "Bom Jesus do Itabapoana",
    "municipio.nome": "Bom Jesus do Itabapoana",
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
    "rejeitadas": 3,
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
    "taxa_sucesso": 0
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
    "facet": "Bragança Paulista",
    "municipio.nome": "Bragança Paulista",
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
    "rejeitadas": 5,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ciudad de México",
    "municipio.nome": "Ciudad de México",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Rio de Janeiro",
    "municipio.nome": "Rio de Janeiro",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Votuporanga",
    "municipio.nome": "Votuporanga",
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
    "taxa_sucesso": 0
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
    "facet": "Ivoti",
    "municipio.nome": "Ivoti",
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
    "facet": "Curitiba",
    "municipio.nome": "Curitiba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Praia Grande",
    "municipio.nome": "Praia Grande",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Natal",
    "municipio.nome": "Natal",
    "rejeitadas": 5,
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
    "facet": "Itapecerica",
    "municipio.nome": "Itapecerica",
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
    "taxa_sucesso": 0
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
    "facet": "Santos",
    "municipio.nome": "Santos",
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
    "rejeitadas": 3,
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
    "facet": "Pato Branco",
    "municipio.nome": "Pato Branco",
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
    "rejeitadas": 1,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Aracaju",
    "municipio.nome": "Aracaju",
    "rejeitadas": 1,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Ribeirão Preto",
    "municipio.nome": "Ribeirão Preto",
    "rejeitadas": 1,
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
    "rejeitadas": 1,
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
    "rejeitadas": 1,
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
    "facet": "Vargem Grande Paulista",
    "municipio.nome": "Vargem Grande Paulista",
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
    "facet": "Sorocaba",
    "municipio.nome": "Sorocaba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
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
    "facet": "São José dos Pinhais",
    "municipio.nome": "São José dos Pinhais",
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
    "taxa_sucesso": 0
  },
  {
    "facet": "Petrolina",
    "municipio.nome": "Petrolina",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
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
    "facet": "Belém",
    "municipio.nome": "Belém",
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
    "facet": "Florianópolis",
    "municipio.nome": "Florianópolis",
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
    "facet": "Governador Valadares",
    "municipio.nome": "Governador Valadares",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Gramado",
    "municipio.nome": "Gramado",
    "rejeitadas": 18,
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
    "facet": "Uberlândia",
    "municipio.nome": "Uberlândia",
    "rejeitadas": 4,
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
    "facet": "Camaçari",
    "municipio.nome": "Camaçari",
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
    "facet": "Buenos Aires",
    "municipio.nome": "Buenos Aires",
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
    "facet": "Guarapari",
    "municipio.nome": "Guarapari",
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
    "facet": "Santo Antônio da Patrulha",
    "municipio.nome": "Santo Antônio da Patrulha",
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
    "facet": "Rio das Ostras",
    "municipio.nome": "Rio das Ostras",
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
    "facet": "Osasco",
    "municipio.nome": "Osasco",
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
    "facet": "Ilha Comprida",
    "municipio.nome": "Ilha Comprida",
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
    "facet": "São José",
    "municipio.nome": "São José",
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
    "facet": "Urussanga",
    "municipio.nome": "Urussanga",
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
    "taxa_sucesso": 0
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
    "rejeitadas": 1,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Joaquim da Barra",
    "municipio.nome": "São Joaquim da Barra",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Timbó",
    "municipio.nome": "Timbó",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Campos dos Goytacazes",
    "municipio.nome": "Campos dos Goytacazes",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
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
    "facet": "Maceió",
    "municipio.nome": "Maceió",
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
    "taxa_sucesso": 0
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
    "facet": "Franca",
    "municipio.nome": "Franca",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  },
  {
    "facet": "Piraju",
    "municipio.nome": "Piraju",
    "rejeitadas": 1,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Imperatriz",
    "municipio.nome": "Imperatriz",
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
    "facet": "Itajubá",
    "municipio.nome": "Itajubá",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "Schroeder",
    "municipio.nome": "Schroeder",
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
    "facet": "Anápolis",
    "municipio.nome": "Anápolis",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
  },
  {
    "facet": "São Luís",
    "municipio.nome": "São Luís",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 0
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
    "taxa_sucesso": 0
  },
  {
    "facet": "São Gonçalo",
    "municipio.nome": "São Gonçalo",
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
    "facet": "Imbituba",
    "municipio.nome": "Imbituba",
    "rejeitadas": 0,
    "taxa_rejeicao": 0,
    "taxa_sucesso": 100
  }
],
  taxaTimeseries: [
  {
    "beginTimeSeconds": 1786959480,
    "endTimeSeconds": 1786960680,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1786960680,
    "endTimeSeconds": 1786961880,
    "rejeicao": 50,
    "sucesso": 50
  },
  {
    "beginTimeSeconds": 1786961880,
    "endTimeSeconds": 1786963080,
    "rejeicao": 50.1499700059988,
    "sucesso": 49.8500299940012
  },
  {
    "beginTimeSeconds": 1786963080,
    "endTimeSeconds": 1786964280,
    "rejeicao": 51.465298791412266,
    "sucesso": 48.534701208587734
  },
  {
    "beginTimeSeconds": 1786964280,
    "endTimeSeconds": 1786965480,
    "rejeicao": 55.520295647333874,
    "sucesso": 44.479704352666126
  },
  {
    "beginTimeSeconds": 1786965480,
    "endTimeSeconds": 1786966680,
    "rejeicao": 57.48923959827834,
    "sucesso": 42.51076040172166
  },
  {
    "beginTimeSeconds": 1786966680,
    "endTimeSeconds": 1786967880,
    "rejeicao": 57.34757686294945,
    "sucesso": 42.65242313705055
  },
  {
    "beginTimeSeconds": 1786967880,
    "endTimeSeconds": 1786969080,
    "rejeicao": 58.23079852326863,
    "sucesso": 41.76920147673137
  },
  {
    "beginTimeSeconds": 1786969080,
    "endTimeSeconds": 1786970280,
    "rejeicao": 59.37306267274386,
    "sucesso": 40.62693732725614
  },
  {
    "beginTimeSeconds": 1786970280,
    "endTimeSeconds": 1786971480,
    "rejeicao": 60.48190095491894,
    "sucesso": 39.51809904508106
  },
  {
    "beginTimeSeconds": 1786971480,
    "endTimeSeconds": 1786972680,
    "rejeicao": null,
    "sucesso": null
  },
  {
    "beginTimeSeconds": 1786972680,
    "endTimeSeconds": 1786973880,
    "rejeicao": null,
    "sucesso": null
  }
],
  taxaSucessoMunicipioTs: [{"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786959480, "endTimeSeconds": 1786960680, "municipio.nome": "Campo Mour\u00e3o", "sucesso": null}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786960680, "endTimeSeconds": 1786961880, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786961880, "endTimeSeconds": 1786963080, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786963080, "endTimeSeconds": 1786964280, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786964280, "endTimeSeconds": 1786965480, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786965480, "endTimeSeconds": 1786966680, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786966680, "endTimeSeconds": 1786967880, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786967880, "endTimeSeconds": 1786969080, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786969080, "endTimeSeconds": 1786970280, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786970280, "endTimeSeconds": 1786971480, "municipio.nome": "Campo Mour\u00e3o", "sucesso": 100.0}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786971480, "endTimeSeconds": 1786972680, "municipio.nome": "Campo Mour\u00e3o", "sucesso": null}, {"facet": "Campo Mour\u00e3o", "beginTimeSeconds": 1786972680, "endTimeSeconds": 1786973880, "municipio.nome": "Campo Mour\u00e3o", "sucesso": null}, {"facet": "Aracati", "beginTimeSeconds": 1786959480, "endTimeSeconds": 1786960680, "municipio.nome": "Aracati", "sucesso": null}, {"facet": "Aracati", "beginTimeSeconds": 1786960680, "endTimeSeconds": 1786961880, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1786961880, "endTimeSeconds": 1786963080, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1786963080, "endTimeSeconds": 1786964280, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1786964280, "endTimeSeconds": 1786965480, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1786965480, "endTimeSeconds": 1786966680, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1786966680, "endTimeSeconds": 1786967880, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1786967880, "endTimeSeconds": 1786969080, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1786969080, "endTimeSeconds": 1786970280, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1786970280, "endTimeSeconds": 1786971480, "municipio.nome": "Aracati", "sucesso": 100.0}, {"facet": "Aracati", "beginTimeSeconds": 1786971480, "endTimeSeconds": 1786972680, "municipio.nome": "Aracati", "sucesso": null}, {"facet": "Aracati", "beginTimeSeconds": 1786972680, "endTimeSeconds": 1786973880, "municipio.nome": "Aracati", "sucesso": null}, {"facet": "S\u00e3o Jos\u00e9 dos Pinhais", "beginTimeSeconds": 1786959480, "endTimeSeconds": 1786960680, "municipio.nome": "S\u00e3o Jos\u00e9 dos Pinhais", "sucesso": null}, {"facet": "S\u00e3o Jos\u00e9 dos Pinhais", "beginTimeSeconds": 1786960680, "endTimeSeconds": 1786961880, "municipio.nome": "S\u00e3o Jos\u00e9 dos Pinhais", "sucesso": null}, {"facet": "S\u00e3o Jos\u00e9 dos Pinhais", "beginTimeSeconds": 1786961880, "endTimeSeconds": 1786963080, "municipio.nome": "S\u00e3o Jos\u00e9 dos Pinhais", "sucesso": null}, {"facet": "S\u00e3o Jos\u00e9 dos Pinhais", "beginTimeSeconds": 1786963080, "endTimeSeconds": 1786964280, "municipio.nome": "S\u00e3o Jos\u00e9 dos Pinhais", "sucesso": 100.0}, {"facet": "S\u00e3o Jos\u00e9 dos Pinhais", "beginTimeSeconds": 1786964280, "endTimeSeconds": 1786965480, "municipio.nome": "S\u00e3o Jos\u00e9 dos Pinhais", "sucesso": 100.0}, {"facet": "S\u00e3o Jos\u00e9 dos Pinhais", "beginTimeSeconds": 1786965480, "endTimeSeconds": 1786966680, "municipio.nome": "S\u00e3o Jos\u00e9 dos Pinhais", "sucesso": 100.0}, {"facet": "S\u00e3o Jos\u00e9 dos Pinhais", "beginTimeSeconds": 1786966680, "endTimeSeconds": 1786967880, "municipio.nome": "S\u00e3o Jos\u00e9 dos Pinhais", "sucesso": 100.0}, {"facet": "S\u00e3o Jos\u00e9 dos Pinhais", "beginTimeSeconds": 1786967880, "endTimeSeconds": 1786969080, "municipio.nome": "S\u00e3o Jos\u00e9 dos Pinhais", "sucesso": 100.0}, {"facet": "S\u00e3o Jos\u00e9 dos Pinhais", "beginTimeSeconds": 1786969080, "endTimeSeconds": 1786970280, "municipio.nome": "S\u00e3o Jos\u00e9 dos Pinhais", "sucesso": 100.0}, {"facet": "S\u00e3o Jos\u00e9 dos Pinhais", "beginTimeSeconds": 1786970280, "endTimeSeconds": 1786971480, "municipio.nome": "S\u00e3o Jos\u00e9 dos Pinhais", "sucesso": 100.0}, {"facet": "S\u00e3o Jos\u00e9 dos Pinhais", "beginTimeSeconds": 1786971480, "endTimeSeconds": 1786972680, "municipio.nome": "S\u00e3o Jos\u00e9 dos Pinhais", "sucesso": null}, {"facet": "S\u00e3o Jos\u00e9 dos Pinhais", "beginTimeSeconds": 1786972680, "endTimeSeconds": 1786973880, "municipio.nome": "S\u00e3o Jos\u00e9 dos Pinhais", "sucesso": null}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786959480, "endTimeSeconds": 1786960680, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": null}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786960680, "endTimeSeconds": 1786961880, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786961880, "endTimeSeconds": 1786963080, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786963080, "endTimeSeconds": 1786964280, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786964280, "endTimeSeconds": 1786965480, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786965480, "endTimeSeconds": 1786966680, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786966680, "endTimeSeconds": 1786967880, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786967880, "endTimeSeconds": 1786969080, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786969080, "endTimeSeconds": 1786970280, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786970280, "endTimeSeconds": 1786971480, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": 100.0}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786971480, "endTimeSeconds": 1786972680, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": null}, {"facet": "Jo\u00e3o Monlevade", "beginTimeSeconds": 1786972680, "endTimeSeconds": 1786973880, "municipio.nome": "Jo\u00e3o Monlevade", "sucesso": null}, {"facet": "Cerquilho", "beginTimeSeconds": 1786959480, "endTimeSeconds": 1786960680, "municipio.nome": "Cerquilho", "sucesso": null}, {"facet": "Cerquilho", "beginTimeSeconds": 1786960680, "endTimeSeconds": 1786961880, "municipio.nome": "Cerquilho", "sucesso": 100.0}, {"facet": "Cerquilho", "beginTimeSeconds": 1786961880, "endTimeSeconds": 1786963080, "municipio.nome": "Cerquilho", "sucesso": 100.0}, {"facet": "Cerquilho", "beginTimeSeconds": 1786963080, "endTimeSeconds": 1786964280, "municipio.nome": "Cerquilho", "sucesso": 100.0}, {"facet": "Cerquilho", "beginTimeSeconds": 1786964280, "endTimeSeconds": 1786965480, "municipio.nome": "Cerquilho", "sucesso": 100.0}, {"facet": "Cerquilho", "beginTimeSeconds": 1786965480, "endTimeSeconds": 1786966680, "municipio.nome": "Cerquilho", "sucesso": 100.0}, {"facet": "Cerquilho", "beginTimeSeconds": 1786966680, "endTimeSeconds": 1786967880, "municipio.nome": "Cerquilho", "sucesso": 100.0}, {"facet": "Cerquilho", "beginTimeSeconds": 1786967880, "endTimeSeconds": 1786969080, "municipio.nome": "Cerquilho", "sucesso": 100.0}, {"facet": "Cerquilho", "beginTimeSeconds": 1786969080, "endTimeSeconds": 1786970280, "municipio.nome": "Cerquilho", "sucesso": 100.0}, {"facet": "Cerquilho", "beginTimeSeconds": 1786970280, "endTimeSeconds": 1786971480, "municipio.nome": "Cerquilho", "sucesso": 100.0}, {"facet": "Cerquilho", "beginTimeSeconds": 1786971480, "endTimeSeconds": 1786972680, "municipio.nome": "Cerquilho", "sucesso": null}, {"facet": "Cerquilho", "beginTimeSeconds": 1786972680, "endTimeSeconds": 1786973880, "municipio.nome": "Cerquilho", "sucesso": null}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786959480, "endTimeSeconds": 1786960680, "municipio.nome": "Caic\u00f3", "sucesso": null}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786960680, "endTimeSeconds": 1786961880, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786961880, "endTimeSeconds": 1786963080, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786963080, "endTimeSeconds": 1786964280, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786964280, "endTimeSeconds": 1786965480, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786965480, "endTimeSeconds": 1786966680, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786966680, "endTimeSeconds": 1786967880, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786967880, "endTimeSeconds": 1786969080, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786969080, "endTimeSeconds": 1786970280, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786970280, "endTimeSeconds": 1786971480, "municipio.nome": "Caic\u00f3", "sucesso": 100.0}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786971480, "endTimeSeconds": 1786972680, "municipio.nome": "Caic\u00f3", "sucesso": null}, {"facet": "Caic\u00f3", "beginTimeSeconds": 1786972680, "endTimeSeconds": 1786973880, "municipio.nome": "Caic\u00f3", "sucesso": null}, {"facet": "Salto", "beginTimeSeconds": 1786959480, "endTimeSeconds": 1786960680, "municipio.nome": "Salto", "sucesso": null}, {"facet": "Salto", "beginTimeSeconds": 1786960680, "endTimeSeconds": 1786961880, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1786961880, "endTimeSeconds": 1786963080, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1786963080, "endTimeSeconds": 1786964280, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1786964280, "endTimeSeconds": 1786965480, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1786965480, "endTimeSeconds": 1786966680, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1786966680, "endTimeSeconds": 1786967880, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1786967880, "endTimeSeconds": 1786969080, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1786969080, "endTimeSeconds": 1786970280, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1786970280, "endTimeSeconds": 1786971480, "municipio.nome": "Salto", "sucesso": 100.0}, {"facet": "Salto", "beginTimeSeconds": 1786971480, "endTimeSeconds": 1786972680, "municipio.nome": "Salto", "sucesso": null}, {"facet": "Salto", "beginTimeSeconds": 1786972680, "endTimeSeconds": 1786973880, "municipio.nome": "Salto", "sucesso": null}, {"facet": "Engenheiro Coelho", "beginTimeSeconds": 1786959480, "endTimeSeconds": 1786960680, "municipio.nome": "Engenheiro Coelho", "sucesso": null}, {"facet": "Engenheiro Coelho", "beginTimeSeconds": 1786960680, "endTimeSeconds": 1786961880, "municipio.nome": "Engenheiro Coelho", "sucesso": 100.0}, {"facet": "Engenheiro Coelho", "beginTimeSeconds": 1786961880, "endTimeSeconds": 1786963080, "municipio.nome": "Engenheiro Coelho", "sucesso": 100.0}, {"facet": "Engenheiro Coelho", "beginTimeSeconds": 1786963080, "endTimeSeconds": 1786964280, "municipio.nome": "Engenheiro Coelho", "sucesso": 100.0}, {"facet": "Engenheiro Coelho", "beginTimeSeconds": 1786964280, "endTimeSeconds": 1786965480, "municipio.nome": "Engenheiro Coelho", "sucesso": 100.0}, {"facet": "Engenheiro Coelho", "beginTimeSeconds": 1786965480, "endTimeSeconds": 1786966680, "municipio.nome": "Engenheiro Coelho", "sucesso": 100.0}, {"facet": "Engenheiro Coelho", "beginTimeSeconds": 1786966680, "endTimeSeconds": 1786967880, "municipio.nome": "Engenheiro Coelho", "sucesso": 100.0}, {"facet": "Engenheiro Coelho", "beginTimeSeconds": 1786967880, "endTimeSeconds": 1786969080, "municipio.nome": "Engenheiro Coelho", "sucesso": 100.0}, {"facet": "Engenheiro Coelho", "beginTimeSeconds": 1786969080, "endTimeSeconds": 1786970280, "municipio.nome": "Engenheiro Coelho", "sucesso": 100.0}, {"facet": "Engenheiro Coelho", "beginTimeSeconds": 1786970280, "endTimeSeconds": 1786971480, "municipio.nome": "Engenheiro Coelho", "sucesso": 100.0}, {"facet": "Engenheiro Coelho", "beginTimeSeconds": 1786971480, "endTimeSeconds": 1786972680, "municipio.nome": "Engenheiro Coelho", "sucesso": null}, {"facet": "Engenheiro Coelho", "beginTimeSeconds": 1786972680, "endTimeSeconds": 1786973880, "municipio.nome": "Engenheiro Coelho", "sucesso": null}, {"facet": "Peru\u00edbe", "beginTimeSeconds": 1786959480, "endTimeSeconds": 1786960680, "municipio.nome": "Peru\u00edbe", "sucesso": null}, {"facet": "Peru\u00edbe", "beginTimeSeconds": 1786960680, "endTimeSeconds": 1786961880, "municipio.nome": "Peru\u00edbe", "sucesso": null}, {"facet": "Peru\u00edbe", "beginTimeSeconds": 1786961880, "endTimeSeconds": 1786963080, "municipio.nome": "Peru\u00edbe", "sucesso": null}, {"facet": "Peru\u00edbe", "beginTimeSeconds": 1786963080, "endTimeSeconds": 1786964280, "municipio.nome": "Peru\u00edbe", "sucesso": null}, {"facet": "Peru\u00edbe", "beginTimeSeconds": 1786964280, "endTimeSeconds": 1786965480, "municipio.nome": "Peru\u00edbe", "sucesso": null}, {"facet": "Peru\u00edbe", "beginTimeSeconds": 1786965480, "endTimeSeconds": 1786966680, "municipio.nome": "Peru\u00edbe", "sucesso": null}, {"facet": "Peru\u00edbe", "beginTimeSeconds": 1786966680, "endTimeSeconds": 1786967880, "municipio.nome": "Peru\u00edbe", "sucesso": null}, {"facet": "Peru\u00edbe", "beginTimeSeconds": 1786967880, "endTimeSeconds": 1786969080, "municipio.nome": "Peru\u00edbe", "sucesso": null}, {"facet": "Peru\u00edbe", "beginTimeSeconds": 1786969080, "endTimeSeconds": 1786970280, "municipio.nome": "Peru\u00edbe", "sucesso": 100.0}, {"facet": "Peru\u00edbe", "beginTimeSeconds": 1786970280, "endTimeSeconds": 1786971480, "municipio.nome": "Peru\u00edbe", "sucesso": 100.0}, {"facet": "Peru\u00edbe", "beginTimeSeconds": 1786971480, "endTimeSeconds": 1786972680, "municipio.nome": "Peru\u00edbe", "sucesso": null}, {"facet": "Peru\u00edbe", "beginTimeSeconds": 1786972680, "endTimeSeconds": 1786973880, "municipio.nome": "Peru\u00edbe", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786959480, "endTimeSeconds": 1786960680, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786960680, "endTimeSeconds": 1786961880, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786961880, "endTimeSeconds": 1786963080, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786963080, "endTimeSeconds": 1786964280, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786964280, "endTimeSeconds": 1786965480, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786965480, "endTimeSeconds": 1786966680, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786966680, "endTimeSeconds": 1786967880, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786967880, "endTimeSeconds": 1786969080, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786969080, "endTimeSeconds": 1786970280, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786970280, "endTimeSeconds": 1786971480, "municipio.nome": "S\u00e3o Carlos", "sucesso": 100.0}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786971480, "endTimeSeconds": 1786972680, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "S\u00e3o Carlos", "beginTimeSeconds": 1786972680, "endTimeSeconds": 1786973880, "municipio.nome": "S\u00e3o Carlos", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786959480, "endTimeSeconds": 1786960680, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786960680, "endTimeSeconds": 1786961880, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786961880, "endTimeSeconds": 1786963080, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786963080, "endTimeSeconds": 1786964280, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786964280, "endTimeSeconds": 1786965480, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786965480, "endTimeSeconds": 1786966680, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786966680, "endTimeSeconds": 1786967880, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786967880, "endTimeSeconds": 1786969080, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786969080, "endTimeSeconds": 1786970280, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786970280, "endTimeSeconds": 1786971480, "municipio.nome": "Campo Belo", "sucesso": 100.0}, {"facet": "Campo Belo", "beginTimeSeconds": 1786971480, "endTimeSeconds": 1786972680, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Campo Belo", "beginTimeSeconds": 1786972680, "endTimeSeconds": 1786973880, "municipio.nome": "Campo Belo", "sucesso": null}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786959480, "endTimeSeconds": 1786960680, "municipio.nome": "Mandagua\u00e7u", "sucesso": null}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786960680, "endTimeSeconds": 1786961880, "municipio.nome": "Mandagua\u00e7u", "sucesso": null}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786961880, "endTimeSeconds": 1786963080, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786963080, "endTimeSeconds": 1786964280, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786964280, "endTimeSeconds": 1786965480, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786965480, "endTimeSeconds": 1786966680, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786966680, "endTimeSeconds": 1786967880, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786967880, "endTimeSeconds": 1786969080, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786969080, "endTimeSeconds": 1786970280, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786970280, "endTimeSeconds": 1786971480, "municipio.nome": "Mandagua\u00e7u", "sucesso": 100.0}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786971480, "endTimeSeconds": 1786972680, "municipio.nome": "Mandagua\u00e7u", "sucesso": null}, {"facet": "Mandagua\u00e7u", "beginTimeSeconds": 1786972680, "endTimeSeconds": 1786973880, "municipio.nome": "Mandagua\u00e7u", "sucesso": null}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786959480, "endTimeSeconds": 1786960680, "municipio.nome": "Gua\u00edra", "sucesso": null}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786960680, "endTimeSeconds": 1786961880, "municipio.nome": "Gua\u00edra", "sucesso": 100.0}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786961880, "endTimeSeconds": 1786963080, "municipio.nome": "Gua\u00edra", "sucesso": 100.0}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786963080, "endTimeSeconds": 1786964280, "municipio.nome": "Gua\u00edra", "sucesso": 100.0}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786964280, "endTimeSeconds": 1786965480, "municipio.nome": "Gua\u00edra", "sucesso": 100.0}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786965480, "endTimeSeconds": 1786966680, "municipio.nome": "Gua\u00edra", "sucesso": 100.0}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786966680, "endTimeSeconds": 1786967880, "municipio.nome": "Gua\u00edra", "sucesso": 100.0}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786967880, "endTimeSeconds": 1786969080, "municipio.nome": "Gua\u00edra", "sucesso": 100.0}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786969080, "endTimeSeconds": 1786970280, "municipio.nome": "Gua\u00edra", "sucesso": 100.0}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786970280, "endTimeSeconds": 1786971480, "municipio.nome": "Gua\u00edra", "sucesso": 100.0}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786971480, "endTimeSeconds": 1786972680, "municipio.nome": "Gua\u00edra", "sucesso": null}, {"facet": "Gua\u00edra", "beginTimeSeconds": 1786972680, "endTimeSeconds": 1786973880, "municipio.nome": "Gua\u00edra", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786959480, "endTimeSeconds": 1786960680, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786960680, "endTimeSeconds": 1786961880, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786961880, "endTimeSeconds": 1786963080, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786963080, "endTimeSeconds": 1786964280, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786964280, "endTimeSeconds": 1786965480, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786965480, "endTimeSeconds": 1786966680, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786966680, "endTimeSeconds": 1786967880, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786967880, "endTimeSeconds": 1786969080, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786969080, "endTimeSeconds": 1786970280, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786970280, "endTimeSeconds": 1786971480, "municipio.nome": "Patos de Minas", "sucesso": 100.0}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786971480, "endTimeSeconds": 1786972680, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Patos de Minas", "beginTimeSeconds": 1786972680, "endTimeSeconds": 1786973880, "municipio.nome": "Patos de Minas", "sucesso": null}, {"facet": "Jales", "beginTimeSeconds": 1786959480, "endTimeSeconds": 1786960680, "municipio.nome": "Jales", "sucesso": null}, {"facet": "Jales", "beginTimeSeconds": 1786960680, "endTimeSeconds": 1786961880, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786961880, "endTimeSeconds": 1786963080, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786963080, "endTimeSeconds": 1786964280, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786964280, "endTimeSeconds": 1786965480, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786965480, "endTimeSeconds": 1786966680, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786966680, "endTimeSeconds": 1786967880, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786967880, "endTimeSeconds": 1786969080, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786969080, "endTimeSeconds": 1786970280, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786970280, "endTimeSeconds": 1786971480, "municipio.nome": "Jales", "sucesso": 100.0}, {"facet": "Jales", "beginTimeSeconds": 1786971480, "endTimeSeconds": 1786972680, "municipio.nome": "Jales", "sucesso": null}, {"facet": "Jales", "beginTimeSeconds": 1786972680, "endTimeSeconds": 1786973880, "municipio.nome": "Jales", "sucesso": null}]
};
