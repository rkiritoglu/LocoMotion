#!/usr/bin/env bash
cd "$(dirname "$0")"

echo "🚂 LocoMotion Yerel Sunucusu Başlatılıyor..."
exec python3 server.py
