
param(
    [string]$BaseUrl = "http://127.0.0.1:8765"
)

$ErrorActionPreference = "Stop"

Write-Host "`nPhoneBox iPad Dashboard - Smoke Test" -ForegroundColor Cyan

Write-Host "[1/3] Checking dashboard HTML..."

$html = Invoke-WebRequest `
    -Uri "$BaseUrl/ipad/" `
    -UseBasicParsing

if ($html.StatusCode -ne 200 -or
    $html.Content -notmatch "PhoneBox Dashboard") {
    throw "Dashboard HTML failed"
}

Write-Host "PASS: HTML available" -ForegroundColor Green

Write-Host "[2/3] Checking dashboard JavaScript and CSS..."

$js = Invoke-WebRequest `
    -Uri "$BaseUrl/ipad/app.js" `
    -UseBasicParsing

$css = Invoke-WebRequest `
    -Uri "$BaseUrl/ipad/styles.css" `
    -UseBasicParsing

if ($js.StatusCode -ne 200 -or $css.StatusCode -ne 200) {
    throw "Dashboard assets failed"
}

Write-Host "PASS: Assets available" -ForegroundColor Green

Write-Host "[3/3] Checking real hardware metrics..."

$state = Invoke-RestMethod -Uri "$BaseUrl/api/state"

if ($null -eq $state.pc) {
    throw "PC metrics are unavailable"
}

Write-Host "PASS: Agent API available" -ForegroundColor Green

Write-Host "CPU: $($state.pc.cpu)%"
Write-Host "RAM: $($state.pc.ramUsedGb) / $($state.pc.ramTotalGb) GB"

Write-Host "`nALL SMOKE TESTS PASSED" -ForegroundColor Green
