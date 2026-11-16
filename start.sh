#!/usr/bin/env bash
PORT=8080
echo "🚂 LocoMotion Backend & Yönetim Sunucusu Başlatılıyor..."
echo "👉 Siteyi açın:        http://localhost:$PORT"
echo "👉 Yönetim Paneli:    http://localhost:$PORT/admin.html"
python3 server.py
