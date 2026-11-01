@echo off
title Namma Ooru AI - VS Code Launcher
cd /d "%~dp0"
echo =======================================================================
echo Launching Namma Ooru AI (Cybernaut Hackathon 2026)
echo =======================================================================
echo.

python main.py
if %ERRORLEVEL% NEQ 0 (
    echo Python command fallback to virtualenv...
    backend\.venv\Scripts\python.exe main.py
)
pause
