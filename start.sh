#!/usr/bin/env bash
PORT=8080
echo "🚂 LocoMotion Web Sunucusu Başlatılıyor..."
echo "👉 Tarayıcınızda açın: http://localhost:$PORT"
python3 -m http.server $PORT
