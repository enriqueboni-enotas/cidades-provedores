#!/bin/bash
set -e

ACCOUNT="${NR_ACCOUNT:-4230883}"
OUT="LogsAlteracoes/monitoramento-nfe-data.js"

nrql() {
  local result
  result=$(newrelic nrql query --query "$1" --accountId "$ACCOUNT" 2>/dev/null)
  echo "$result" | sed -n '/^\[/,/^\]/p'
}

echo "[1/27] Travadas por municipio..."
Q1=$(nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric FACET nfe.municipio_servico SINCE 1 day ago LIMIT 50")

echo "[2/27] Tempo maximo..."
Q2=$(nrql "SELECT max(nfe.processing_time.minutes) FROM Metric FACET nfe.municipio_servico SINCE 1 hour ago LIMIT 10")

echo "[3/27] Travadas por motivo..."
Q3=$(nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric FACET nfe.motivo_status SINCE 1 day ago LIMIT 20")

echo "[4/27] Tempo por status..."
Q4=$(nrql "SELECT average(nfe.processing_time.minutes) FROM Metric FACET nfe.status SINCE 1 hour ago LIMIT 20")

echo "[5/27] Tempo por status detalhe..."
Q5=$(nrql "SELECT average(nfe.processing_time.minutes) AS 'media_min', max(nfe.processing_time.minutes) AS 'max_min', percentile(nfe.processing_time.minutes, 95) AS 'p95_min' FROM Metric FACET nfe.status, nfe.status_anterior SINCE 1 hour ago LIMIT 100")

echo "[6/27] Performance por municipio..."
Q6=$(nrql "SELECT average(nfe.processing_time.minutes), max(nfe.processing_time.minutes), percentile(nfe.processing_time.minutes, 95), count(nfe.processing_time.minutes) FROM Metric FACET nfe.municipio_servico SINCE 1 hour ago LIMIT 50")

echo "[7/27] Empresas por municipio..."
Q7=$(nrql "SELECT uniqueCount(empresa.razao_social) FROM Metric WHERE metricName = 'nfe.stuck_in_intermediate_status.count' FACET nfe.municipio_servico SINCE 1 day ago LIMIT 30")

echo "[8/27] Stats globais..."
Q8=$(nrql "SELECT average(nfe.processing_time.minutes), max(nfe.processing_time.minutes), percentile(nfe.processing_time.minutes, 50, 90, 95, 99) FROM Metric SINCE 1 hour ago")

echo "[9/27] Total empresas..."
Q9=$(nrql "SELECT uniqueCount(empresa.razao_social) FROM Metric WHERE metricName LIKE 'nfe.%' SINCE 1 day ago")

echo "[10/27] Total municipios..."
Q10=$(nrql "SELECT uniqueCount(nfe.municipio_servico) FROM Metric WHERE metricName = 'nfe.processing_time.minutes' SINCE 1 hour ago")

echo "[11/27] Volume por municipio..."
Q11=$(nrql "SELECT count(nfe.processing_time.minutes) FROM Metric FACET nfe.municipio_servico SINCE 1 hour ago LIMIT 30")

echo "[12/27] Municipio x status..."
Q12=$(nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric FACET nfe.municipio_servico, nfe.status SINCE 1 day ago LIMIT 30")

echo "[13/27] Top empresas travadas..."
Q13=$(nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric FACET empresa.razao_social SINCE 30 minutes ago LIMIT 15")

echo "[14/27] Travadas por status e municipio..."
Q14=$(nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric FACET nfe.status, nfe.municipio_servico SINCE 1 day ago LIMIT MAX")

echo "[15/27] Travadas por motivo e empresa..."
Q15=$(nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric FACET nfe.motivo_status, empresa.razao_social SINCE 1 day ago LIMIT 100")

echo "[16/27] Volumetria NFe..."
Q16=$(nrql "SELECT sum(eNotasEmissor_NFeEmitida) AS 'emitidas', sum(eNotasEmissor_NFeFalhaAoEmitir) AS 'falhas', sum(eNotasEmissor_NFeCancelada) AS 'canceladas', sum(eNotasEmissor_NFeEmEmissao) AS 'em_emissao', sum(eNotasEmissor_NFeDevolucaoCriada) AS 'devolucoes', sum(eNotasEmissor_NFeEnviadaPorEmail) AS 'email' FROM Metric SINCE 1 hour ago")

echo "[17/27] Emitidas por hora (timeseries 24h)..."
Q21=$(nrql "SELECT sum(eNotasEmissor_NFeEmitida) AS 'emitidas', sum(eNotasEmissor_NFeFalhaAoEmitir) AS 'falhas' FROM Metric SINCE 24 hours ago TIMESERIES 1 hour")

echo "[18/27] Fila de operacoes..."
Q17=$(nrql "SELECT latest(operation_queue.pending_operation.count) AS 'pendentes', latest(operation_queue.running_operation.count) AS 'rodando' FROM Metric SINCE 10 minutes ago")

echo "[19/27] Webhooks..."
Q18=$(nrql "SELECT sum(eNotasEmissor_ReceivedWebHook_Success_Count) AS 'ok', sum(eNotasEmissor_ReceivedWebHook_Failed_Count) AS 'falhas', sum(eNotasEmissor_ReceivedWebHook_DeadLetter_Count) AS 'dead_letter' FROM Metric SINCE 1 hour ago")

echo "[20/27] Travadas por status e empresa..."
Q19_6=$(nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric WHERE nfe.status = 6 FACET empresa.razao_social SINCE 1 day ago LIMIT 50")
Q19_3=$(nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric WHERE nfe.status = 3 FACET empresa.razao_social SINCE 1 day ago LIMIT 50")
Q19_1=$(nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric WHERE nfe.status = 1 FACET empresa.razao_social SINCE 1 day ago LIMIT 50")
Q19_0=$(nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric WHERE nfe.status = 0 FACET empresa.razao_social SINCE 1 day ago LIMIT 50")
Q19_12=$(nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric WHERE nfe.status = 12 FACET empresa.razao_social SINCE 1 day ago LIMIT 50")
[ -z "$Q19_6" ] && Q19_6="[]"
[ -z "$Q19_3" ] && Q19_3="[]"
[ -z "$Q19_1" ] && Q19_1="[]"
[ -z "$Q19_0" ] && Q19_0="[]"
[ -z "$Q19_12" ] && Q19_12="[]"

echo "[21/27] Total municipios com pendentes..."
Q20=$(nrql "SELECT uniqueCount(nfe.municipio_servico) FROM Metric WHERE metricName = 'nfe.stuck_in_intermediate_status.count' SINCE 1 day ago")

echo "[22/27] Taxa sucesso/rejeicao NFSe..."
Q22=$(nrql "SELECT average(nfe.success_rate) AS 'sucesso', average(nfe.rejection_rate) AS 'rejeicao' FROM Metric WHERE entity.name = 'eNotas.Gateway.Microservice.Monitoring' AND nfe.tipo_nota = 'NFSe' SINCE 4 hours ago")

echo "[23/27] Taxa sucesso/rejeicao NFe..."
Q23=$(nrql "SELECT average(nfe.success_rate) AS 'sucesso', average(nfe.rejection_rate) AS 'rejeicao' FROM Metric WHERE entity.name = 'eNotas.Gateway.Microservice.Monitoring' AND nfe.tipo_nota = 'NFe' SINCE 4 hours ago")

echo "[24/27] Taxa sucesso por municipio..."
Q24=$(nrql "SELECT latest(nfe.success_rate) AS 'taxa_sucesso' FROM Metric WHERE entity.name = 'eNotas.Gateway.Microservice.Monitoring' FACET municipio.nome SINCE 4 hours ago LIMIT MAX")

echo "[25/27] Taxa rejeicao por municipio..."
Q25=$(nrql "SELECT latest(nfe.rejection_rate) AS 'taxa_rejeicao' FROM Metric WHERE entity.name = 'eNotas.Gateway.Microservice.Monitoring' FACET municipio.nome SINCE 4 hours ago LIMIT MAX")

echo "[26/27] Timeseries taxa sucesso (global)..."
Q26=$(nrql "SELECT average(nfe.success_rate) AS 'sucesso', average(nfe.rejection_rate) AS 'rejeicao' FROM Metric WHERE entity.name = 'eNotas.Gateway.Microservice.Monitoring' SINCE 4 hours ago TIMESERIES 20 minutes")

echo "[27/27] Timeseries taxa sucesso NFSe vs NFe..."
Q27=$(nrql "SELECT average(nfe.success_rate) AS 'sucesso' FROM Metric WHERE entity.name = 'eNotas.Gateway.Microservice.Monitoring' FACET nfe.tipo_nota SINCE 4 hours ago LIMIT 5")

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
  echo "  travadasMotivoEmpresa: $Q15,"
  echo "  volumetriaHora: $Q16,"
  echo "  volumetriaTimeseries: $Q21,"
  echo "  filaOperacoes: $Q17,"
  echo "  webhooks: $Q18,"
  echo "  travadasStatusEmpresa: {\"6\":$Q19_6,\"3\":$Q19_3,\"1\":$Q19_1,\"0\":$Q19_0,\"12\":$Q19_12},"
  echo "  totalMunicipiosPendentes: $Q20,"
  echo "  taxaNfse: $Q22,"
  echo "  taxaNfe: $Q23,"
  echo "  taxaSucessoMunicipio: $Q24,"
  echo "  taxaRejeicaoMunicipio: $Q25,"
  echo "  taxaTimeseries: $Q26,"
  echo "  taxaPorTipo: $Q27"
  echo "};"
} > "$OUT"

echo "Arquivo gerado: $OUT ($TS)"
