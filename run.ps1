# Namma Ooru AI - PowerShell Launcher for VS Code Terminal
Write-Host "=======================================================================" -ForegroundColor Cyan
Write-Host " Starting Namma Ooru AI (Cybernaut Hackathon 2026)" -ForegroundColor Green
Write-Host "=======================================================================" -ForegroundColor Cyan

$root = $PSScriptRoot
if (-not $root) { $root = (Get-Location).Path }
Set-Location $root

$py = "python"
if (Test-Path "$root\backend\.venv\Scripts\python.exe") {
    $py = "$root\backend\.venv\Scripts\python.exe"
}

& $py "$root\main.py"