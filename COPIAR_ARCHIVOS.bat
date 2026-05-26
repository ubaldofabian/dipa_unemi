@echo off
REM Script para copiar los archivos a la carpeta unemi-innovacion
REM Haz clic derecho y ejecuta como administrador

setlocal enabledelayedexpansion

REM Define la ruta de destino
set "DESTINO=C:\Users\Admin\ACADEMICO\unemi-innovacion"

REM Verifica que la carpeta existe
if not exist "%DESTINO%" (
    echo.
    echo ERROR: La carpeta no existe en: %DESTINO%
    echo.
    pause
    exit /b 1
)

echo.
echo ================================================================
echo     COPIANDO ARCHIVOS A: %DESTINO%
echo ================================================================
echo.

REM Copiar los archivos (el script busca en la misma carpeta donde está)
if exist "index.html" (
    copy /Y "index.html" "%DESTINO%\" >nul
    echo [OK] index.html copiado
) else (
    echo [ERROR] No encontre index.html
)

if exist "README.txt" (
    copy /Y "README.txt" "%DESTINO%\" >nul
    echo [OK] README.txt copiado
)

if exist "INSTRUCCIONES_RAPIDAS.txt" (
    copy /Y "INSTRUCCIONES_RAPIDAS.txt" "%DESTINO%\" >nul
    echo [OK] INSTRUCCIONES_RAPIDAS.txt copiado
)

if exist "GUIA_VIDEO_FONDO.docx" (
    copy /Y "GUIA_VIDEO_FONDO.docx" "%DESTINO%\" >nul
    echo [OK] GUIA_VIDEO_FONDO.docx copiado
)

echo.
echo ================================================================
echo LISTO! Los archivos se han copiado correctamente
echo.
echo Ahora:
echo 1. Ve a: %DESTINO%
echo 2. Coloca tu video en esa carpeta
echo 3. Haz doble clic en index.html
echo.
echo ================================================================
echo.
pause
