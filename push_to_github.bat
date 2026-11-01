@echo off
title Push Namma Ooru AI to GitHub
cd /d "%~dp0"
cls
echo =======================================================================
echo   PUSH NAMMA OORU AI TO GITHUB (meiyarasan410-ui/NAMMA-OORU-AI)
echo =======================================================================
echo.
echo Select an option:
echo   [1] Push with Browser Login (GitHub Credential Manager popup)
echo   [2] Push with GitHub Personal Access Token (PAT)
echo.
set /p choice="Enter option (1 or 2, press Enter for 1): "

if "%choice%"=="2" (
    echo.
    echo If you need a token, create one with 'repo' scope at:
    echo https://github.com/settings/tokens/new?scopes=repo
    echo.
    set /p pat="Paste your GitHub Personal Access Token: "
    if not "%pat%"=="" (
        git remote set-url origin https://%pat%@github.com/meiyarasan410-ui/NAMMA-OORU-AI.git
    )
)

echo.
echo Pushing commits to GitHub (main branch)...
git branch -M main
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo =======================================================================
    echo   SUCCESS! All 90 files pushed to:
    echo   https://github.com/meiyarasan410-ui/NAMMA-OORU-AI
    echo =======================================================================
) else (
    echo.
    echo Push did not complete. If prompted, please click 'Sign in with your browser'
    echo or generate a token at https://github.com/settings/tokens/new?scopes=repo
)
echo.
pause
