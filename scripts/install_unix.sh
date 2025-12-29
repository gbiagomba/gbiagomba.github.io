#!/usr/bin/env bash
set -euo pipefail

echo "[install] Detecting OS..."
OS="$(uname -s)"

if command -v node >/dev/null 2>&1 && command -v npm >/dev/null 2>&1; then
  echo "[install] Node already installed. Skipping system install."
else
  case "$OS" in
    Darwin)
      echo "[install] Installing Node.js via Homebrew..."
      if ! command -v brew >/dev/null 2>&1; then
        echo "Homebrew not found. Install Homebrew or Node.js manually." >&2
        exit 1
      fi
      brew install node
      ;;
    Linux)
      if command -v apt-get >/dev/null 2>&1; then
        sudo apt-get update && sudo apt-get install -y nodejs npm
      elif command -v dnf >/dev/null 2>&1; then
        sudo dnf install -y nodejs npm
      else
        echo "Unsupported Linux package manager. Install Node.js manually." >&2
        exit 1
      fi
      ;;
    *)
      echo "Unsupported OS: $OS" >&2
      exit 1
      ;;
  esac
fi

echo "[install] Installing project dependencies..."
npm ci
echo "[install] Done."

