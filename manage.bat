@echo off
echo ===========================================
echo   Uma Techno - Quick Management Script
echo ===========================================
echo.
echo [1] Clear Cache (Clean)
echo [2] Install Dependencies
echo [3] Run Local (Dev)
echo [4] Build Production
echo [5] Exit
echo.
set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" (
    echo Clearing cache...
    cd frontend && npm run clean
    pause
    goto end
)
if "%choice%"=="2" (
    echo Installing...
    cd frontend && npm install
    pause
    goto end
)
if "%choice%"=="3" (
    echo Starting Dev...
    cd frontend && npm run dev
    goto end
)
if "%choice%"=="4" (
    echo Building...
    cd frontend && npm run build
    pause
    goto end
)

:end
exit
