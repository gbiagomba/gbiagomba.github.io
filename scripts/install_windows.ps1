Write-Host "[install] Checking for Node.js..."
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "[install] Installing Node.js LTS via winget..."
    winget install -e --id OpenJS.NodeJS.LTS
}

Write-Host "[install] Installing project dependencies..."
npm ci
Write-Host "[install] Done."

