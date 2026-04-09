## gerar.ps1 — Gera _index.js + arquivos individuais de cidades e provedores
## Lê ConfiguracoesMunicipios.xml do app-gw e extrai características do C#

$ErrorActionPreference = 'Stop'
$xmlPath = "c:\Git-Repositories\app-gw\ENotas.NFeService\ENotas.NFeService.Application.Provedores\Configuration\NFSe\ConfiguracoesMunicipios.xml"
$csRoot = "c:\Git-Repositories\app-gw\ENotas.NFeService"
$cidadesDir = Join-Path $PSScriptRoot "Cidades"
$provedoresDir = Join-Path $PSScriptRoot "Provedores"

if (!(Test-Path $cidadesDir)) { New-Item -ItemType Directory -Path $cidadesDir | Out-Null }
if (!(Test-Path $provedoresDir)) { New-Item -ItemType Directory -Path $provedoresDir | Out-Null }

Write-Host "Lendo XML..." -ForegroundColor Cyan
[xml]$xml = Get-Content $xmlPath -Encoding UTF8
$municipios = $xml.configuracoesNFSe.municipios.municipio
Write-Host "  $($municipios.Count) municipios encontrados" -ForegroundColor Green

function Get-Slug($nome) {
    $s = $nome.ToLower().Trim()
    $s = [Text.Encoding]::ASCII.GetString([Text.Encoding]::GetEncoding("Cyrillic").GetBytes($s))
    $s = $s -replace "[^a-z0-9]", "-"
    $s = $s -replace "-+", "-"
    $s = $s.Trim('-')
    return $s
}

function CleanUrl($u) {
    if ($null -eq $u -or $u -eq '') { return $null }
    $v = "$u".Replace('<![CDATA[', '').Replace(']]>', '').Trim()
    if ($v -eq '') { return $null }
    return $v
}

# Escape para JS string (single-quoted)
function JsStr($s) {
    if ($null -eq $s) { return 'null' }
    $v = "$s".Replace('\', '\\').Replace("'", "\'").Replace("`r`n", '\r\n').Replace("`r", '\r').Replace("`n", '\n')
    return "'$v'"
}

# Enum maps
$tipoAutenticacaoMap = @{
    'Nenhuma' = 0; 'Certificado' = 1; 'UsuarioESenha' = 2;
    'Token' = 3; 'FraseSecretaESenha' = 4; 'UsuarioSenhaEToken' = 5
}
$tipoAssinaturaMap = @{
    'NaoUtiliza' = 0; 'Opcional' = 1;
    'ObrigatorioComCertificadoProprio' = 2;
    'ObrigatorioComCertificadoDigitalFornecidoPelaPrefeitura' = 3
}
$campoLoginMap = @{
    'NomeDeUsuario' = 0; 'Cnpj' = 1; 'InscricaoMunicipal' = 2
}


# ═══════════════════════════════════════════════════════════════
# 0. Extrai características completas dos provedores a partir do C#
# ═══════════════════════════════════════════════════════════════
Write-Host "Indexando arquivos C# com ObterCaracteristicasCore..." -ForegroundColor Cyan

$csFiles = Get-ChildItem -Path $csRoot -Recurse -Filter "*.cs" -File |
Where-Object { $_.FullName -notmatch '\\(bin|obj|\.Test)\\' }

$matchFiles = $csFiles | Select-String -Pattern "protected override CaracteristicasProvedor ObterCaracteristicasCore" -SimpleMatch -List
Write-Host "  $($matchFiles.Count) arquivos com ObterCaracteristicasCore" -ForegroundColor Green

# Helper: extrai corpo de método a partir de posição da abertura {
function Get-MethodBody($content, $searchStr) {
    $idx = $content.IndexOf($searchStr)
    if ($idx -lt 0) { return $null }
    $braceStart = $content.IndexOf('{', $idx)
    if ($braceStart -lt 0) { return $null }
    $depth = 0
    for ($i = $braceStart; $i -lt $content.Length; $i++) {
        if ($content[$i] -eq '{') { $depth++ }
        elseif ($content[$i] -eq '}') { $depth--; if ($depth -eq 0) { return $content.Substring($braceStart, $i - $braceStart + 1) } }
    }
    return $null
}

# Helper: extrai NamedCodeItem de um método CriarLista...
function Get-NamedCodeItems($content, $methodName) {
    $body = Get-MethodBody $content $methodName
    if (-not $body) { return $null }
    $items = [System.Collections.ArrayList]::new()
    $regex = [regex]'new\s+NamedCodeItem\s*\(\s*"([^"]*)"\s*,\s*"([^"]*)"\s*\)'
    $matches = $regex.Matches($body)
    foreach ($m in $matches) {
        [void]$items.Add(@{ codigo = $m.Groups[1].Value; nome = $m.Groups[2].Value })
    }
    if ($items.Count -eq 0) { return $null }
    return $items
}

# Helper: extrai string literal (simples ou @"") de uma propriedade
function Get-StringProp($body, $propName) {
    # Tenta @"..." (verbatim)
    if ($body -match "(?s)$propName\s*=\s*@""(.*?)""") {
        $val = $Matches[1].Trim()
        return $val
    }
    # Tenta "..." (normal, single line)
    if ($body -match "$propName\s*=\s*""([^""]*?)""") {
        return $Matches[1]
    }
    return $null
}

# Helper: extrai HelpTipoAutenticacao como objeto
function Get-HelpTipoAutenticacao($body) {
    if ($body -notmatch 'HelpTipoAutenticacao\s*=\s*new\s+HelpTipoAutenticacao') { return $null }
    $subBody = Get-MethodBody $body 'HelpTipoAutenticacao = new HelpTipoAutenticacao'
    if (-not $subBody) { return $null }
    $obj = @{}
    foreach ($field in @('certificadoDigital', 'usuario', 'senha', 'token', 'fraseSecreta')) {
        if ($subBody -match "(?s)$field\s*=\s*@""(.*?)""") {
            $obj[$field] = $Matches[1].Trim()
        }
        elseif ($subBody -match "$field\s*=\s*""([^""]*?)""") {
            $obj[$field] = $Matches[1]
        }
        elseif ($subBody -match "$field\s*=\s*null") {
            $obj[$field] = $null
        }
    }
    if ($obj.Count -eq 0) { return $null }
    return $obj
}


# Extrai regimes e naturezas padrão do ABRASF base
$abrasfBasePath = Join-Path $csRoot "ENotas.NFeService.Application.Provedores.ABRASF\Provedores\ABRASFProvedorNFeBase.cs"
$abrasfBaseContent = Get-Content $abrasfBasePath -Raw -Encoding UTF8
$defaultRegimesV1 = Get-NamedCodeItems $abrasfBaseContent 'IList<NamedCodeItem> CriarRegimeEspecialTributacao()'
$defaultNaturezasV1 = Get-NamedCodeItems $abrasfBaseContent 'IList<NamedCodeItem> CriarListaNaturezaOperacao()'
Write-Host "  ABRASF v1 defaults: $($defaultRegimesV1.Count) regimes, $($defaultNaturezasV1.Count) naturezas" -ForegroundColor Yellow

$abrasfV2Path = Join-Path $csRoot "ENotas.NFeService.Application.Provedores.ABRASF.v2\Provedores\ABRASFv2ProvedorNFeBase.cs"
$abrasfV2Content = Get-Content $abrasfV2Path -Raw -Encoding UTF8
$defaultNaturezasV2 = Get-NamedCodeItems $abrasfV2Content 'IList<NamedCodeItem> CriarListaNaturezaOperacao()'
Write-Host "  ABRASF v2 defaults: $($defaultNaturezasV2.Count) naturezas" -ForegroundColor Yellow

# Processa cada arquivo
$provCaract = @{}
foreach ($match in $matchFiles) {
    $filePath = $match.Path
    $content = Get-Content $filePath -Raw -Encoding UTF8
    
    # Extrai nome do provedor
    $relPath = $filePath.Replace($csRoot + '\', '')
    $provName = $null
    if ($relPath -match 'Provedores\.ABRASF\.v\d\\Provedores\\([^\\]+)\\') { $provName = $Matches[1] }
    elseif ($relPath -match 'Provedores\.([^\\\.]+)\\') { $provName = $Matches[1] }
    if (-not $provName) { continue }
    
    # Extrai corpo do ObterCaracteristicasCore
    $body = Get-MethodBody $content "protected override CaracteristicasProvedor ObterCaracteristicasCore"
    if (-not $body) { continue }
    
    $cfg = @{}
    
    # ── Booleanos ──
    $boolProps = @(
        'UsaAEDF', 'UsaRegimeEspecialTributacao', 'UsaCodigoServicoMunicipal',
        'UsaDescricaoServico', 'UsaCNAE', 'UsaNBS', 'UsaItemListaServico',
        'UsaNaturezaOperacao', 'UsaCodigoTributacaoNacional', 'EmTransicaoNFSeNacional',
        'SuportaEmissaoNFeSemCliente', 'SuportaEmissaoNFeClienteSemCpf',
        'SuportaEmissaoNFeClienteSemEndereco', 'SuportaCancelamentoNFe',
        'SuportaCancelamentoNFeSemCliente', 'SuportaCancelamentoNFeClienteSemCpf',
        'SuportaEmissaoParalela', 'EnviaEmailCliente',
        'NumeroRpsDeveSerSequencial', 'NumeroLoteDeveSerSequencial',
        'NumeroDoRpsSeraNumeroDaNota', 'NumeroLoteNaoReutilizavel',
        'SuportaConsultaSequencialRps', 'UsaBethaV2'
    )
    foreach ($prop in $boolProps) {
        if ($body -match "(?m)\b$prop\s*=\s*(true|false)\b") {
            $cfg[$prop] = ($Matches[1] -eq 'true')
        }
    }
    
    # ── Enums (como inteiros) ──
    if ($body -match 'TipoAutenticacao\s*=\s*TipoAutenticacao\.(\w+)') {
        $enumVal = $Matches[1]
        if ($tipoAutenticacaoMap.ContainsKey($enumVal)) { $cfg['TipoAutenticacao'] = $tipoAutenticacaoMap[$enumVal] }
    }
    if ($body -match 'AssinaturaDigital\s*=\s*TipoAssinaturaDigital\.(\w+)') {
        $enumVal = $Matches[1]
        if ($tipoAssinaturaMap.ContainsKey($enumVal)) { $cfg['AssinaturaDigital'] = $tipoAssinaturaMap[$enumVal] }
    }
    if ($body -match 'CampoLoginProvedor\s*=\s*CampoLoginProvedor\.(\w+)') {
        $enumVal = $Matches[1]
        if ($campoLoginMap.ContainsKey($enumVal)) { $cfg['CampoLoginProvedor'] = $campoLoginMap[$enumVal] }
    }
    if ($body -match 'TipoCancelamentoNFe\s*=\s*TipoCancelamentoNFe\.(\w+)') {
        $cfg['TipoCancelamentoNFe'] = $Matches[1]
    }
    
    # ── Numéricos ──
    if ($body -match 'ValorCancelamentoNFe\s*=\s*(\d+)') { $cfg['ValorCancelamentoNFe'] = [int]$Matches[1] }
    if ($body -match 'NumeroNotasPorLote\s*=\s*(\d+)') { $cfg['NumeroNotasPorLote'] = [int]$Matches[1] }
    if ($body -match 'NumeroLotesParalelos\s*=\s*(\d+)') { $cfg['NumeroLotesParalelos'] = [int]$Matches[1] }
    if ($body -match 'TempoEsperaParaConsultaLoteNFeEmMinutos\s*=\s*(\d+)') { $cfg['TempoEsperaParaConsultaLoteNFeEmMinutos'] = [int]$Matches[1] }
    
    # ── Strings de Help ──
    $helpProps = @(
        'HelpInscricaoMunicipal', 'HelpRegimeEspecialTributacao',
        'HelpCodigoServicoMunicipal', 'HelpDescricaoServico',
        'HelpCNAE', 'HelpItemListaServico', 'HelpAEDF'
    )
    foreach ($hp in $helpProps) {
        $val = Get-StringProp $body $hp
        if ($null -ne $val -and $val -ne '') { $cfg[$hp] = $val }
    }
    
    # ── HelpTipoAutenticacao (objeto) ──
    $helpAuth = Get-HelpTipoAutenticacao $body
    if ($helpAuth) { $cfg['HelpTipoAutenticacao'] = $helpAuth }
    
    # ── AutenticidadeNota (objeto) ──
    if ($content -match 'AutenticidadeNota\s*=\s*new\s+ParametrosAutenticidadeNota') {
        $authBody = Get-MethodBody $content 'AutenticidadeNota = new ParametrosAutenticidadeNota'
        if ($authBody) {
            $authObj = @{}
            $authUrl = Get-StringProp $authBody 'UrlVerificacao'
            if ($authUrl) { $authObj['urlVerificacao'] = $authUrl }
            foreach ($authBool in @('UsaCnpjPrestador', 'UsaInscricaoMunicipalPrestador', 'UsaNumeroNota', 'UsaCodigoVerificacao', 'UsaChaveAcesso', 'UsaCpfCnpjTomador', 'UsaValorNota')) {
                if ($authBody -match "(?m)\b$authBool\s*=\s*(true|false)\b") {
                    $authObj[$authBool] = ($Matches[1] -eq 'true')
                }
            }
            if ($authObj.Count -gt 0) { $cfg['AutenticidadeNota'] = $authObj }
        }
    }
    
    # ── RegimesEspecialTributacao (do mesmo arquivo ou herança) ──
    # Procura a definição do método, não referências
    # Detecta se herda de ABRASF (chama base.ObterCaracteristicasCore ou está em pasta ABRASF)
    $isABRASF = $relPath -match 'ABRASF'
    $isV2 = $relPath -match 'ABRASF\.v2'
    $callsBase = $body -match 'base\.ObterCaracteristicasCore'
    
    # ── RegimesEspecialTributacao ──
    $regimes = $null
    foreach ($methodSig in @(
            'IList<NamedCodeItem> CriarRegimeEspecialTributacao()',
            'IList<NamedCodeItem> CriarListaRegimeTributacao()'
        )) {
        $regimes = Get-NamedCodeItems $content $methodSig
        if ($regimes) { break }
    }
    if ($regimes) { $cfg['RegimesEspecialTributacao'] = $regimes }
    elseif (($cfg.ContainsKey('UsaRegimeEspecialTributacao') -and $cfg['UsaRegimeEspecialTributacao'] -eq $true) -or ($isABRASF -and $callsBase)) {
        # Usa regimes padrão do ABRASF
        if ($defaultRegimesV1) { $cfg['RegimesEspecialTributacao'] = $defaultRegimesV1 }
    }
    
    # ── NaturezasOperacao ──
    $naturezas = Get-NamedCodeItems $content 'IList<NamedCodeItem> CriarListaNaturezaOperacao()'
    if ($naturezas) { $cfg['NaturezasOperacao'] = $naturezas }
    elseif ($body -match 'UsaNaturezaOperacao\s*=\s*true' -or $body -match 'NaturezasOperacao\s*=' -or ($isABRASF -and $callsBase)) {
        if ($isV2 -and $defaultNaturezasV2) { $cfg['NaturezasOperacao'] = $defaultNaturezasV2 }
        elseif ($defaultNaturezasV1) { $cfg['NaturezasOperacao'] = $defaultNaturezasV1 }
    }
    
    if ($cfg.Count -gt 0) {
        $provCaract[$provName] = $cfg
    }
}

Write-Host "  $($provCaract.Count) provedores com caracteristicas extraidas" -ForegroundColor Green


# ── Helper: gera bloco JS de configuracaoProvedor ──
function Write-CfgBlock($cfg, $indent) {
    $lines = [System.Collections.ArrayList]::new()
    
    # Ordem fixa dos campos (mesmo modelo do JSON fornecido)
    $orderedKeys = @(
        'TipoAutenticacao', 'AssinaturaDigital', 'HelpTipoAutenticacao', 'CampoLoginProvedor',
        'SuportaCancelamentoNFe', 'TipoCancelamentoNFe', 'ValorCancelamentoNFe',
        'UsaAEDF', 'UsaRegimeEspecialTributacao', 'UsaCodigoServicoMunicipal',
        'UsaDescricaoServico', 'UsaCNAE', 'UsaNBS', 'EmTransicaoNFSeNacional',
        'UsaCodigoTributacaoNacional', 'UsaItemListaServico', 'UsaNaturezaOperacao',
        'HelpInscricaoMunicipal', 'HelpRegimeEspecialTributacao',
        'HelpCodigoServicoMunicipal', 'HelpDescricaoServico',
        'HelpCNAE', 'HelpItemListaServico', 'HelpAEDF',
        'SuportaEmissaoNFeSemCliente', 'SuportaEmissaoNFeClienteSemCpf',
        'SuportaEmissaoNFeClienteSemEndereco',
        'SuportaCancelamentoNFeSemCliente', 'SuportaCancelamentoNFeClienteSemCpf',
        'SuportaEmissaoParalela', 'EnviaEmailCliente',
        'NumeroRpsDeveSerSequencial', 'NumeroLoteDeveSerSequencial',
        'NumeroDoRpsSeraNumeroDaNota', 'NumeroLoteNaoReutilizavel',
        'SuportaConsultaSequencialRps', 'UsaBethaV2',
        'NumeroNotasPorLote', 'NumeroLotesParalelos', 'TempoEsperaParaConsultaLoteNFeEmMinutos',
        'AutenticidadeNota',
        'RegimesEspecialTributacao', 'NaturezasOperacao'
    )
    
    foreach ($key in $orderedKeys) {
        if (-not $cfg.ContainsKey($key)) { continue }
        $val = $cfg[$key]
        $jsKey = $key.Substring(0, 1).ToLower() + $key.Substring(1)
        
        if ($val -is [bool]) {
            [void]$lines.Add("$indent  $jsKey`: $($val.ToString().ToLower())")
        }
        elseif ($val -is [int]) {
            [void]$lines.Add("$indent  $jsKey`: $val")
        }
        elseif ($val -is [string]) {
            [void]$lines.Add("$indent  $jsKey`: $(JsStr $val)")
        }
        elseif ($val -is [hashtable]) {
            # HelpTipoAutenticacao ou AutenticidadeNota
            $sub = "$indent  $jsKey`: {"
            $subLines = [System.Collections.ArrayList]::new()
            if ($key -eq 'HelpTipoAutenticacao') {
                foreach ($sk in @('certificadoDigital', 'usuario', 'senha', 'token', 'fraseSecreta')) {
                    if ($val.ContainsKey($sk)) {
                        [void]$subLines.Add("$indent    $sk`: $(JsStr $val[$sk])")
                    }
                    else {
                        [void]$subLines.Add("$indent    $sk`: null")
                    }
                }
            }
            else {
                foreach ($sk in $val.Keys | Sort-Object) {
                    $sv = $val[$sk]
                    if ($sv -is [bool]) {
                        [void]$subLines.Add("$indent    $sk`: $($sv.ToString().ToLower())")
                    }
                    else {
                        [void]$subLines.Add("$indent    $sk`: $(JsStr $sv)")
                    }
                }
            }
            $sub += "`n" + ($subLines -join ",`n") + "`n$indent  }"
            [void]$lines.Add($sub)
        }
        elseif ($val -is [array] -or $val -is [System.Collections.ArrayList]) {
            # Array de NamedCodeItem (regimes ou naturezas)
            $arrStr = "$indent  $jsKey`: [`n"
            $arrItems = [System.Collections.ArrayList]::new()
            foreach ($item in $val) {
                [void]$arrItems.Add("$indent    { codigo: '$($item.codigo)', nome: $(JsStr $item.nome) }")
            }
            $arrStr += ($arrItems -join ",`n") + "`n$indent  ]"
            [void]$lines.Add($arrStr)
        }
    }
    
    return ($lines -join ",`n")
}


# ═══════════════════════════════════════════════════════════════
# 1. Agrupa municipios por provedor
# ═══════════════════════════════════════════════════════════════
$porProvedor = @{}
foreach ($m in $municipios) {
    $codigo = $m.codigo
    if ($null -eq $codigo -or "$codigo" -eq '') { continue }
    if ([int]$codigo -lt 0) { continue }
    $prov = $m.provedor
    if (-not $porProvedor.ContainsKey($prov)) { $porProvedor[$prov] = [System.Collections.ArrayList]::new() }
    [void]$porProvedor[$prov].Add($m)
}

# ═══════════════════════════════════════════════════════════════
# 2. Gera Cidades/_index.js
# ═══════════════════════════════════════════════════════════════
Write-Host "Gerando Cidades/_index.js..." -ForegroundColor Cyan
$cidIdx = "var cidadesIndex = [`n"
$sorted = $municipios | Sort-Object { $_.nome }
$count = 0
$cidSlugsUsed = @{}
foreach ($m in $sorted) {
    $codigo = $m.codigo
    if ($null -eq $codigo -or "$codigo" -eq '') { continue }
    if ([int]$codigo -lt 0) { continue }
    $nome = $m.nome; $uf = $m.uf; $prov = $m.provedor
    $slug = "$(Get-Slug $nome)-$($uf.ToLower())"
    $ws = 'true'
    $robos = @('Florianopolis', 'SaoPaulo', 'Barueri', 'Parintins', 'JuizDeFora')
    if ($robos -contains $prov) { $ws = 'false' }
    if ($m.informacoesProvedor -and $m.informacoesProvedor.webService -eq '0') { $ws = 'false' }
    if ($m.informacoesProvedor -and $m.informacoesProvedor.robo -eq '1') { $ws = 'false' }
    if ($cidSlugsUsed.ContainsKey($slug)) { continue }
    $cidSlugsUsed[$slug] = $true
    if ($count -gt 0) { $cidIdx += ",`n" }
    $cidIdx += "  { id: '$slug', nome: '$($nome.Replace("'","\'"))', uf: '$uf', ibge: '$codigo', provedor: '$prov', webService: $ws }"
    $count++
}
$cidIdx += "`n];`n"
Set-Content -Path (Join-Path $cidadesDir "_index.js") -Value $cidIdx -Encoding UTF8
Write-Host "  $count cidades no index" -ForegroundColor Green

# ═══════════════════════════════════════════════════════════════
# 3. Gera Provedores/_index.js
# ═══════════════════════════════════════════════════════════════
Write-Host "Gerando Provedores/_index.js..." -ForegroundColor Cyan
$provIdx = "var provedoresIndex = [`n"
$provCount = 0
$sortedProvs = @($porProvedor.GetEnumerator()) | Sort-Object { $_.Value.Count } -Descending
foreach ($entry in $sortedProvs) {
    $prov = $entry.Key; $muns = $entry.Value; $slug = Get-Slug $prov
    if ($provCount -gt 0) { $provIdx += ",`n" }
    $provIdx += "  { id: '$slug', nome: '$($prov.Replace("'","\'"))', empresa: '$prov', versoes: ['$prov'], municipios: $($muns.Count) }"
    $provCount++
}
$provIdx += "`n];`n"
Set-Content -Path (Join-Path $provedoresDir "_index.js") -Value $provIdx -Encoding UTF8
Write-Host "  $provCount provedores no index" -ForegroundColor Green


# ═══════════════════════════════════════════════════════════════
# 4. Gera arquivo individual de cada cidade
# ═══════════════════════════════════════════════════════════════
Write-Host "Gerando arquivos individuais de cidades..." -ForegroundColor Cyan
$cidCount = 0
$cidFileSlugsUsed = @{}
foreach ($m in $sorted) {
    $codigo = $m.codigo
    if ($null -eq $codigo -or "$codigo" -eq '') { continue }
    if ([int]$codigo -lt 0) { continue }
    $nome = $m.nome; $uf = $m.uf; $prov = $m.provedor
    $slug = "$(Get-Slug $nome)-$($uf.ToLower())"
    if ($cidFileSlugsUsed.ContainsKey($slug)) { continue }
    $cidFileSlugsUsed[$slug] = $true
    $ns = if ($m.defaultNamespace) { "$($m.defaultNamespace)" } else { $null }
    $codProv = if ($m.codigoNoProvedor -and "$($m.codigoNoProvedor)".Trim() -ne '') { "$($m.codigoNoProvedor)".Trim() } else { $null }
    $ws = $true; $robo = $false
    $robos = @('Florianopolis', 'SaoPaulo', 'Barueri', 'Parintins', 'JuizDeFora')
    if ($robos -contains $prov) { $ws = $false; $robo = $true }
    if ($m.informacoesProvedor) {
        if ($m.informacoesProvedor.robo -eq '1') { $robo = $true }
        if ($m.informacoesProvedor.webService -eq '0') { $ws = $false }
    }
    
    # Versao ABRASF e info adicional
    $versaoAbrasf = $null; $infoAdicional = $null
    if ($m.informacoesProvedor) {
        $va = "$($m.informacoesProvedor.versaoAbrasf)".Trim()
        if ($va -and $va -ne '' -and $va -ne '0') { $versaoAbrasf = $va }
        $iaRaw = $m.informacoesProvedor.infoAdicional
        $ia = $null
        if ($iaRaw -is [System.Xml.XmlElement]) { $ia = $iaRaw.InnerText.Trim() }
        elseif ($iaRaw -is [string]) { $ia = $iaRaw.Replace('<![CDATA[', '').Replace(']]>', '').Trim() }
        elseif ($null -ne $iaRaw) { $ia = "$iaRaw".Replace('<![CDATA[', '').Replace(']]>', '').Trim() }
        if ($ia -and $ia -ne '' -and $ia -ne 'System.Xml.XmlElement') { $infoAdicional = $ia }
    }
    
    # infoComplementarImpressaoRps
    $infoRps = $null
    if ($m.infoComplementarImpressaoRps) {
        $ir = "$($m.infoComplementarImpressaoRps)".Trim()
        if ($ir -ne '') { $infoRps = $ir }
    }
    
    # URLs completas
    $urlHom = @{}; $urlPrd = @{}
    $emSemCertHom = $null; $emSemCertPrd = $null
    $urlFields = @('autenticacao', 'recepcaoLote', 'consultaSituacaoLote', 'consultaLote', 'consultaRps', 'consultaNFe', 'cancelamentoNFe', 'inutilizacaoNumeracaoNFe', 'downloadPDF', 'paginaVerificacaoRps', 'paginaVerificacaoNFe')
    if ($m.urls) {
        if ($m.urls.homologacao) {
            foreach ($uf2 in $urlFields) {
                $v = CleanUrl $m.urls.homologacao.$uf2
                if ($v) { $urlHom[$uf2] = $v }
            }
        }
        if ($m.urls.producao) {
            foreach ($uf2 in $urlFields) {
                $v = CleanUrl $m.urls.producao.$uf2
                if ($v) { $urlPrd[$uf2] = $v }
            }
        }
    }
    if ($m.emissaoSemCertificado -and $m.emissaoSemCertificado.urls) {
        if ($m.emissaoSemCertificado.urls.homologacao) {
            $emSemCertHom = CleanUrl $m.emissaoSemCertificado.urls.homologacao.recepcaoLote
        }
        if ($m.emissaoSemCertificado.urls.producao) {
            $emSemCertPrd = CleanUrl $m.emissaoSemCertificado.urls.producao.recepcaoLote
        }
    }
    
    $js = "var cidadeDetalhe = {`n"
    $js += "  id: '$slug',`n"
    $js += "  nome: '$($nome.Replace("'","\'"))',`n"
    $js += "  uf: '$uf',`n"
    $js += "  ibge: '$codigo',`n"
    $parts = (Get-Slug $nome).Split('-') | ForEach-Object { if ($_.Length -gt 0) { $_.Substring(0, 1).ToUpper() + $_.Substring(1) } }
    $constName = ($parts -join '')
    $js += "  constante: 'CodigoIBGE.$constName$uf',`n"
    $js += "  provedorAtual: {`n"
    $js += "    nome: '$prov',`n"
    if ($ns) { $js += "    namespace: '$ns',`n" } else { $js += "    namespace: null,`n" }
    if ($codProv) { $js += "    codigoNoProvedor: '$($codProv.Replace("'","\'"))',`n" } else { $js += "    codigoNoProvedor: null,`n" }
    $js += "    robo: $($robo.ToString().ToLower()),`n"
    $js += "    webService: $($ws.ToString().ToLower()),`n"
    if ($versaoAbrasf) { $js += "    versaoAbrasf: '$versaoAbrasf',`n" }
    if ($infoAdicional) { $js += "    infoAdicional: $(JsStr $infoAdicional),`n" }
    $js += "    urls: {`n"
    # Homologacao
    $js += "      homologacao: {`n"
    $hLines = [System.Collections.ArrayList]::new()
    foreach ($uf2 in $urlFields) {
        if ($urlHom.ContainsKey($uf2)) { [void]$hLines.Add("        $uf2`: '$($urlHom[$uf2].Replace("'","\'"))'") }
    }
    if ($hLines.Count -gt 0) { $js += ($hLines -join ",`n") + "`n" }
    $js += "      },`n"
    # Producao
    $js += "      producao: {`n"
    $pLines = [System.Collections.ArrayList]::new()
    foreach ($uf2 in $urlFields) {
        if ($urlPrd.ContainsKey($uf2)) { [void]$pLines.Add("        $uf2`: '$($urlPrd[$uf2].Replace("'","\'"))'") }
    }
    if ($pLines.Count -gt 0) { $js += ($pLines -join ",`n") + "`n" }
    $js += "      }`n"
    $js += "    }`n"
    if ($emSemCertHom -or $emSemCertPrd) {
        $js = $js.TrimEnd("`n") + ",`n"
        $js += "    emissaoSemCertificado: {`n"
        if ($emSemCertHom) { $js += "      homologacao: '$emSemCertHom',`n" }
        if ($emSemCertPrd) { $js += "      producao: '$emSemCertPrd'`n" }
        $js += "    }`n"
    }
    if ($infoRps) {
        $js = $js.TrimEnd("`n") + ",`n"
        $js += "    infoComplementarImpressaoRps: $(JsStr $infoRps)`n"
    }
    $js += "  }"

    # configuracaoProvedor
    if ($provCaract.ContainsKey($prov)) {
        $cfgBlock = Write-CfgBlock $provCaract[$prov] "  "
        $js += ",`n  configuracaoProvedor: {`n$cfgBlock`n  }"
    }

    $js += "`n};`n"
    Set-Content -Path (Join-Path $cidadesDir "$slug.js") -Value $js -Encoding UTF8
    $cidCount++
    if ($cidCount % 500 -eq 0) { Write-Host "  $cidCount cidades geradas..." -ForegroundColor Yellow }
}
Write-Host "  $cidCount cidades geradas no total" -ForegroundColor Green


# ═══════════════════════════════════════════════════════════════
# 5. Gera arquivo individual de cada provedor
# ═══════════════════════════════════════════════════════════════
Write-Host "Gerando arquivos individuais de provedores..." -ForegroundColor Cyan
$provFileCount = 0
foreach ($entry in $sortedProvs) {
    $prov = $entry.Key
    $muns = @($entry.Value | Sort-Object { $_.nome })
    $slug = Get-Slug $prov
    $total = $muns.Count
    
    $ufs = @{}
    foreach ($m in $muns) {
        $u = $m.uf
        if (-not $ufs.ContainsKey($u)) { $ufs[$u] = 0 }
        $ufs[$u]++
    }
    $ufsSorted = $ufs.GetEnumerator() | Sort-Object Value -Descending
    
    $js = "var provedorDetalhe = {`n"
    $js += "  id: '$slug',`n"
    $js += "  nome: '$($prov.Replace("'","\'"))',`n"
    $js += "  empresa: '$prov',`n"
    $js += "  stats: {`n"
    $js += "    municipios: $total`n"
    $js += "  },`n"
    $js += "  visaoGeral: [`n"
    $js += "    { key: 'Nome', val: '$prov' },`n"
    $js += "    { key: 'Total Municipios', val: '$total' },`n"
    $js += "    { key: 'Estados Atendidos', val: ["
    $ufList = ($ufsSorted | ForEach-Object { "'$($_.Key)'" }) -join ', '
    $js += "$ufList], type: 'uf-badges' }`n"
    $js += "  ],`n"
    
    # configuracaoProvedor
    if ($provCaract.ContainsKey($prov)) {
        $cfgBlock = Write-CfgBlock $provCaract[$prov] "  "
        $js += "  configuracaoProvedor: {`n$cfgBlock`n  },`n"
    }
    
    # municipiosLista
    $js += "  municipiosLista: {`n"
    $js += "    '$slug': [`n"
    $mi = 0
    foreach ($m in $muns) {
        if ($mi -gt 0) { $js += ",`n" }
        $js += "      { nome: '$($m.nome.Replace("'","\'"))', uf: '$($m.uf)', ibge: '$($m.codigo)' }"
        $mi++
    }
    $js += "`n    ]`n"
    $js += "  }`n"
    $js += "};`n"
    
    Set-Content -Path (Join-Path $provedoresDir "$slug.js") -Value $js -Encoding UTF8
    $provFileCount++
}
Write-Host "  $provFileCount provedores gerados" -ForegroundColor Green

Write-Host "`n=== CONCLUIDO ===" -ForegroundColor Green
Write-Host "  Cidades: $cidCount arquivos + _index.js" -ForegroundColor White
Write-Host "  Provedores: $provFileCount arquivos + _index.js" -ForegroundColor White
Write-Host "  Provedores com caracteristicas C#: $($provCaract.Count)" -ForegroundColor White
