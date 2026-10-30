# Builds resume/assets/Jose_Pedro_Azevedo_CV.pdf from resume/cv-print.html (content comes from resume/js/data.js).
# Usage: powershell -ExecutionPolicy Bypass -File tools/build-cv-pdf.ps1
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$page = Join-Path $root "resume\cv-print.html"
$out = Join-Path $root "resume\assets\Jose_Pedro_Azevedo_CV.pdf"
$edge = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) { throw "Microsoft Edge not found." }

$url = ([System.Uri]$page).AbsoluteUri
$profile = Join-Path $env:TEMP "cv-pdf-edge-profile"
& $edge --headless=new --disable-gpu --no-first-run --user-data-dir="$profile" `
  --no-pdf-header-footer --virtual-time-budget=8000 --run-all-compositor-stages-before-draw `
  --print-to-pdf="$out" $url | Out-Null
Start-Sleep -Milliseconds 500
if (-not (Test-Path $out)) { throw "PDF was not created." }
Write-Host "Built $out ($([math]::Round((Get-Item $out).Length / 1KB)) KB)"
