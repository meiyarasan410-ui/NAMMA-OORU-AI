# Namma Ooru AI - PowerShell Startup Script
Write-Host "=======================================================================" -ForegroundColor Cyan
Write-Host " Starting Namma Ooru AI - Smart Community Governance Platform" -ForegroundColor Green
Write-Host " Cybernaut Hackathon 2026" -ForegroundColor Yellow
Write-Host "=======================================================================" -ForegroundColor Cyan

$rootDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# Start Backend
Write-Host "`n[1/2] Launching FastAPI Backend on http://localhost:8000..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$rootDir\backend'; .venv\Scripts\python.exe main.py"

# Start Frontend
Write-Host "[2/2] Launching React Frontend on http://localhost:5173..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$rootDir\frontend'; npm run dev"

Write-Host "`nServices launched successfully!" -ForegroundColor Green
Write-Host "Frontend Portal:  http://localhost:5173" -ForegroundColor White
Write-Host "Backend API Docs: http://localhost:8000/docs" -ForegroundColor White
Write-Host "Officer Demo:     officer@chennaicorp.tn.gov.in / officer123`n" -ForegroundColor Yellow
