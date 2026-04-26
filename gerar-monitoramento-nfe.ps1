<# 
  gerar-monitoramento-nfe.ps1
  Coleta dados do New Relic (dashboard Monitoramento de Filas NFe) e gera
  o arquivo LogsAlteracoes/monitoramento-nfe-data.js para o site estático.
  
  Requer: newrelic CLI configurado com profile hotmart (account 4230883)
#>

$ErrorActionPreference = 'Stop'
$accountId = 4230883
$outFile = "LogsAlteracoes/monitoramento-nfe-data.js"

$prevEncoding = [Console]::OutputEncoding
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

function Invoke-Nrql {
  param([string]$Query)
  $psi = New-Object System.Diagnostics.ProcessStartInfo
  $psi.FileName = 'newrelic'
  $psi.Arguments = "nrql query --query `"$Query`" --accountId $accountId"
  $psi.RedirectStandardOutput = $true
  $psi.RedirectStandardError = $true
  $psi.UseShellExecute = $false
  $psi.CreateNoWindow = $true
  $psi.StandardOutputEncoding = [System.Text.Encoding]::UTF8
  $psi.StandardErrorEncoding = [System.Text.Encoding]::UTF8
  $proc = [System.Diagnostics.Process]::Start($psi)
  $json = $proc.StandardOutput.ReadToEnd()
  $proc.WaitForExit()
  $json = $json.Trim()
  $idx = $json.IndexOf('[')
  if ($idx -ge 0) { $json = $json.Substring($idx) }
  return $json
}

Write-Host "=== Gerando dados de monitoramento NFe ===" -ForegroundColor Cyan
$step = 0
$total = 19

# 1. Notas travadas por município
$step++; Write-Host "[$step/$total] Notas travadas por municipio..."
$travadasMunicipio = Invoke-Nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric FACET nfe.municipio_servico SINCE 1 day ago LIMIT 50"

# 2. Tempo máximo de processamento (piores casos)
$step++; Write-Host "[$step/$total] Tempo maximo de processamento..."
$tempoMax = Invoke-Nrql "SELECT max(nfe.processing_time.minutes) FROM Metric FACET nfe.municipio_servico SINCE 1 hour ago LIMIT 10"

# 3. Notas travadas por motivo
$step++; Write-Host "[$step/$total] Notas travadas por motivo..."
$travadasMotivo = Invoke-Nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric FACET nfe.motivo_status SINCE 1 day ago LIMIT 20"

# 4. Tempo por status final
$step++; Write-Host "[$step/$total] Tempo por status final..."
$tempoStatus = Invoke-Nrql "SELECT average(nfe.processing_time.minutes) FROM Metric FACET nfe.status SINCE 1 hour ago LIMIT 20"

# 5. Tempo por status + status anterior
$step++; Write-Host "[$step/$total] Tempo por status e status anterior..."
$tempoStatusDetalhe = Invoke-Nrql "SELECT average(nfe.processing_time.minutes) AS 'media_min', max(nfe.processing_time.minutes) AS 'max_min', percentile(nfe.processing_time.minutes, 95) AS 'p95_min' FROM Metric FACET nfe.status, nfe.status_anterior SINCE 1 hour ago LIMIT 100"

# 6. Tabela completa de performance por município (avg, max, p95, volume)
$step++; Write-Host "[$step/$total] Performance completa por municipio..."
$perfMunicipio = Invoke-Nrql "SELECT average(nfe.processing_time.minutes), max(nfe.processing_time.minutes), percentile(nfe.processing_time.minutes, 95), count(nfe.processing_time.minutes) FROM Metric FACET nfe.municipio_servico SINCE 1 hour ago LIMIT 50"

# 7. Empresas afetadas por município
$step++; Write-Host "[$step/$total] Empresas afetadas por municipio..."
$empresasMunicipio = Invoke-Nrql "SELECT uniqueCount(empresa.razao_social) FROM Metric WHERE metricName = 'nfe.stuck_in_intermediate_status.count' FACET nfe.municipio_servico SINCE 1 day ago LIMIT 30"

# 8. Stats globais de processamento
$step++; Write-Host "[$step/$total] Stats globais de processamento..."
$statsGlobais = Invoke-Nrql "SELECT average(nfe.processing_time.minutes), max(nfe.processing_time.minutes), percentile(nfe.processing_time.minutes, 50, 90, 95, 99) FROM Metric SINCE 1 hour ago"

# 9. Total de empresas afetadas
$step++; Write-Host "[$step/$total] Total de empresas afetadas..."
$totalEmpresas = Invoke-Nrql "SELECT uniqueCount(empresa.razao_social) FROM Metric WHERE metricName LIKE 'nfe.%' SINCE 1 day ago"

# 10. Total de municípios com processamento
$step++; Write-Host "[$step/$total] Total de municipios ativos..."
$totalMunicipios = Invoke-Nrql "SELECT uniqueCount(nfe.municipio_servico) FROM Metric WHERE metricName = 'nfe.processing_time.minutes' SINCE 1 hour ago"

# 11. Volume de notas por município (top 30)
$step++; Write-Host "[$step/$total] Volume de notas por municipio..."
$volumeMunicipio = Invoke-Nrql "SELECT count(nfe.processing_time.minutes) FROM Metric FACET nfe.municipio_servico SINCE 1 hour ago LIMIT 30"

# 12. Cruzamento município × status (travadas)
$step++; Write-Host "[$step/$total] Cruzamento municipio x status..."
$municipioStatus = Invoke-Nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric FACET nfe.municipio_servico, nfe.status SINCE 1 day ago LIMIT 30"

# 13. Top empresas com mais notas travadas
$step++; Write-Host "[$step/$total] Top empresas com notas travadas..."
$topEmpresasTravadas = Invoke-Nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric FACET empresa.razao_social SINCE 30 minutes ago LIMIT 15"

# 14. Breakdown por status (total de notas por status)
$step++; Write-Host "[$step/$total] Travadas por status e municipio..."
$travadasPorStatusMunicipio = Invoke-Nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric FACET nfe.status, nfe.municipio_servico SINCE 1 day ago LIMIT 200"

# 15. Drill-down motivo + empresa (para modal)
$step++; Write-Host "[$step/$total] Travadas por motivo e empresa..."
$travadasMotivoEmpresa = Invoke-Nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric FACET nfe.motivo_status, empresa.razao_social SINCE 1 day ago LIMIT 100"

# 16. Volumetria NFe (última hora)
$step++; Write-Host "[$step/$total] Volumetria NFe..."
$volumetriaHora = Invoke-Nrql "SELECT sum(eNotasEmissor_NFeEmitida) AS 'emitidas', sum(eNotasEmissor_NFeFalhaAoEmitir) AS 'falhas', sum(eNotasEmissor_NFeCancelada) AS 'canceladas', sum(eNotasEmissor_NFeEmEmissao) AS 'em_emissao', sum(eNotasEmissor_NFeDevolucaoCriada) AS 'devolucoes', sum(eNotasEmissor_NFeEnviadaPorEmail) AS 'email' FROM Metric SINCE 1 hour ago"

# 17. Fila de operações
$step++; Write-Host "[$step/$total] Fila de operacoes..."
$filaOperacoes = Invoke-Nrql "SELECT latest(operation_queue.pending_operation.count) AS 'pendentes', latest(operation_queue.running_operation.count) AS 'rodando' FROM Metric SINCE 10 minutes ago"

# 18. Webhooks
$step++; Write-Host "[$step/$total] Webhooks..."
$webhooks = Invoke-Nrql "SELECT sum(eNotasEmissor_ReceivedWebHook_Success_Count) AS 'ok', sum(eNotasEmissor_ReceivedWebHook_Failed_Count) AS 'falhas', sum(eNotasEmissor_ReceivedWebHook_DeadLetter_Count) AS 'dead_letter' FROM Metric SINCE 1 hour ago"

# 19. Drill-down status + empresa (para modal) — queries separadas por status
$step++; Write-Host "[$step/$total] Travadas por status e empresa..."
$st6 = Invoke-Nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric WHERE nfe.status = 6 FACET empresa.razao_social SINCE 1 day ago LIMIT 50"
$st3 = Invoke-Nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric WHERE nfe.status = 3 FACET empresa.razao_social SINCE 1 day ago LIMIT 50"
$st1 = Invoke-Nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric WHERE nfe.status = 1 FACET empresa.razao_social SINCE 1 day ago LIMIT 50"
$st0 = Invoke-Nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric WHERE nfe.status = 0 FACET empresa.razao_social SINCE 1 day ago LIMIT 50"
$st12 = Invoke-Nrql "SELECT latest(nfe.stuck_in_intermediate_status.count) FROM Metric WHERE nfe.status = 12 FACET empresa.razao_social SINCE 1 day ago LIMIT 50"
# Fallback para arrays vazios
if (-not $st6 -or $st6 -eq '') { $st6 = '[]' }
if (-not $st3 -or $st3 -eq '') { $st3 = '[]' }
if (-not $st1 -or $st1 -eq '') { $st1 = '[]' }
if (-not $st0 -or $st0 -eq '') { $st0 = '[]' }
if (-not $st12 -or $st12 -eq '') { $st12 = '[]' }
$travadasStatusEmpresa = '{"6":' + $st6 + ',"3":' + $st3 + ',"1":' + $st1 + ',"0":' + $st0 + ',"12":' + $st12 + '}'

# Gerar timestamp BR
$ts = [System.TimeZoneInfo]::ConvertTimeBySystemTimeZoneId((Get-Date), 'E. South America Standard Time').ToString('dd/MM/yyyy HH:mm')

$content = @"
// Gerado automaticamente por gerar-monitoramento-nfe.ps1 em $ts (Brasilia)
// NAO EDITAR MANUALMENTE
var monitoramentoNfeData = {
  geradoEm: "$ts",
  travadasPorMunicipio: $travadasMunicipio,
  tempoMaxProcessamento: $tempoMax,
  travadasPorMotivo: $travadasMotivo,
  tempoPorStatus: $tempoStatus,
  tempoPorStatusDetalhe: $tempoStatusDetalhe,
  perfMunicipio: $perfMunicipio,
  empresasMunicipio: $empresasMunicipio,
  statsGlobais: $statsGlobais,
  totalEmpresas: $totalEmpresas,
  totalMunicipios: $totalMunicipios,
  volumeMunicipio: $volumeMunicipio,
  municipioStatus: $municipioStatus,
  topEmpresasTravadas: $topEmpresasTravadas,
  travadasPorStatusMunicipio: $travadasPorStatusMunicipio,
  travadasMotivoEmpresa: $travadasMotivoEmpresa,
  volumetriaHora: $volumetriaHora,
  filaOperacoes: $filaOperacoes,
  webhooks: $webhooks,
  travadasStatusEmpresa: $travadasStatusEmpresa
};
"@

$fullPath = Join-Path $PSScriptRoot $outFile
[System.IO.File]::WriteAllText($fullPath, $content, (New-Object System.Text.UTF8Encoding $false))
[Console]::OutputEncoding = $prevEncoding

Write-Host "`nArquivo gerado: $outFile" -ForegroundColor Green
Write-Host "Timestamp: $ts" -ForegroundColor Green
