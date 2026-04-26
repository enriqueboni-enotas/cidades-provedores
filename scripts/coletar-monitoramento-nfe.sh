#!/bin/bash
set -e

ACCOUNT="${NR_ACCOUNT:-4230883}"
OUT="LogsAlteracoes/monitoramento-nfe-data.js"

nrql() {
  local result
  result=$(newrelic nrql query --query "$1" --accountId "$ACCOUNT" 2>/dev/null)
  echo "$result" | sed -n '/^\[/,/^\]/p'
}

echo "[1/15] Travadas por municipio..."
Q1=$(nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric FACET nfe.municipio_servico SINCE 1 day ago LIMIT 50")

echo "[2/15] Tempo maximo..."
Q2=$(nrql "SELECT max(nfe.processing_time.minutes) FROM Metric FACET nfe.municipio_servico SINCE 1 hour ago LIMIT 10")

echo "[3/15] Travadas por motivo..."
Q3=$(nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric FACET nfe.motivo_status SINCE 1 day ago LIMIT 20")

echo "[4/15] Tempo por status..."
Q4=$(nrql "SELECT average(nfe.processing_time.minutes) FROM Metric FACET nfe.status SINCE 1 hour ago LIMIT 20")

echo "[5/15] Tempo por status detalhe..."
Q5=$(nrql "SELECT average(nfe.processing_time.minutes) AS 'media_min', max(nfe.processing_time.minutes) AS 'max_min', percentile(nfe.processing_time.minutes, 95) AS 'p95_min' FROM Metric FACET nfe.status, nfe.status_anterior SINCE 1 hour ago LIMIT 100")

echo "[6/15] Performance por municipio..."
Q6=$(nrql "SELECT average(nfe.processing_time.minutes), max(nfe.processing_time.minutes), percentile(nfe.processing_time.minutes, 95), count(nfe.processing_time.minutes) FROM Metric FACET nfe.municipio_servico SINCE 1 hour ago LIMIT 50")

echo "[7/15] Empresas por municipio..."
Q7=$(nrql "SELECT uniqueCount(empresa.razao_social) FROM Metric WHERE metricName = 'nfe.stuck_in_intermediate_status.count' FACET nfe.municipio_servico SINCE 1 day ago LIMIT 30")

echo "[8/15] Stats globais..."
Q8=$(nrql "SELECT average(nfe.processing_time.minutes), max(nfe.processing_time.minutes), percentile(nfe.processing_time.minutes, 50, 90, 95, 99) FROM Metric SINCE 1 hour ago")

echo "[9/15] Total empresas..."
Q9=$(nrql "SELECT uniqueCount(empresa.razao_social) FROM Metric WHERE metricName LIKE 'nfe.%' SINCE 1 day ago")

echo "[10/15] Total municipios..."
Q10=$(nrql "SELECT uniqueCount(nfe.municipio_servico) FROM Metric WHERE metricName = 'nfe.processing_time.minutes' SINCE 1 hour ago")

echo "[11/15] Volume por municipio..."
Q11=$(nrql "SELECT count(nfe.processing_time.minutes) FROM Metric FACET nfe.municipio_servico SINCE 1 hour ago LIMIT 30")

echo "[12/15] Municipio x status..."
Q12=$(nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric FACET nfe.municipio_servico, nfe.status SINCE 1 day ago LIMIT 30")

echo "[13/15] Top empresas travadas..."
Q13=$(nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric FACET empresa.razao_social SINCE 30 minutes ago LIMIT 15")

echo "[14/15] Travadas por status e municipio..."
Q14=$(nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric FACET nfe.status, nfe.municipio_servico SINCE 1 day ago LIMIT 200")

echo "[15/15] Travadas por motivo e empresa..."
Q15=$(nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric FACET nfe.motivo_status, empresa.razao_social SINCE 1 day ago LIMIT 100")

TS=$(TZ='America/Sao_Paulo' date '+%d/%m/%Y %H:%M')

{
  echo "// Gerado automaticamente pelo workflow monitoramento-nfe.yml em $TS (Brasilia)"
  echo "// NAO EDITAR MANUALMENTE"
  echo "var monitoramentoNfeData = {"
  echo "  geradoEm: \"$TS\","
  echo "  travadasPorMunicipio: $Q1,"
  echo "  tempoMaxProcessamento: $Q2,"
  echo "  travadasPorMotivo: $Q3,"
  echo "  tempoPorStatus: $Q4,"
  echo "  tempoPorStatusDetalhe: $Q5,"
  echo "  perfMunicipio: $Q6,"
  echo "  empresasMunicipio: $Q7,"
  echo "  statsGlobais: $Q8,"
  echo "  totalEmpresas: $Q9,"
  echo "  totalMunicipios: $Q10,"
  echo "  volumeMunicipio: $Q11,"
  echo "  municipioStatus: $Q12,"
  echo "  topEmpresasTravadas: $Q13,"
  echo "  travadasPorStatusMunicipio: $Q14,"
  echo "  travadasMotivoEmpresa: $Q15"
  echo "};"
} > "$OUT"

echo "Arquivo gerado: $OUT ($TS)"
