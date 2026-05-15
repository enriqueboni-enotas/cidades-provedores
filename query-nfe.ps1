param([string]$date)
$token = (Get-Content "$env:USERPROFILE\.env" | Where-Object { $_ -match '^ASTROBOX_TOKEN=' }) -replace '^ASTROBOX_TOKEN=', ''
$nextDate = (Get-Date $date).AddDays(1).ToString("yyyy-MM-dd")
$sql = "SELECT motivo_situacao, count(distinct coalesce(n_fe_id, hub_event_id)) as qtd FROM dh_app_enotas.nfe_negadas WHERE lastmodified_at >= '$date 00:00:00' AND lastmodified_at < '$nextDate 00:00:00' GROUP BY motivo_situacao ORDER BY qtd DESC LIMIT 10"
$body = (@{sql = $sql; dataSourceId = "4491e172-f9f6-496c-a2fc-747638d5f080"; parameters = @{_gmt = "-03:00" }; limit = 10 } | ConvertTo-Json -Compress)
$resp = Invoke-WebRequest -UseBasicParsing -Uri 'https://api-astrobox.hotmart.com/v1/executor/reactive/real-time' -Method POST -Headers @{"Authorization" = "Bearer $token"; "Content-Type" = "application/x-ndjson"; "Accept" = "application/x-ndjson"; "Origin" = "https://astrobox.hotmart.com"; "x-client-name" = "astrobox" } -Body ([System.Text.Encoding]::UTF8.GetBytes($body))
$lines = $resp.Content -split "`n" | Where-Object { $_.Trim() }
$results = @()
foreach ($line in $lines) {
  $obj = $line | ConvertFrom-Json
  $motivoJson = $obj.motivo_situacao | ConvertFrom-Json
  $msg = $motivoJson.mensagemErro -replace '<[^>]+>', '' -replace '\\r\\n', ' ' -replace '\r\n', ' '
  $results += "$($obj.qtd)|$($msg.Substring(0, [Math]::Min(120, $msg.Length)))"
}
$results | Out-File -FilePath "tmp_nfe_$($date).txt" -Encoding utf8
Write-Host "OK:$date ($($results.Count) rows)"
