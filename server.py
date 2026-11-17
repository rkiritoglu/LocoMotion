#!/usr/bin/env python3
"""
LocoMotion Backend Server & Content Management API
Standard Python 3 library only - zero external dependencies required.
"""

import http.server
import socket
import socketserver
import json
import os
import re
import urllib.parse
import subprocess
import base64
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
CONTENT_DIR = BASE_DIR / "content"
ROUTES_DIR = CONTENT_DIR / "routes"
CONFIG_FILE = BASE_DIR / "config.json"
SUGGESTIONS_FILE = CONTENT_DIR / "suggestions.json"
PORT = 8080

def read_json_file(file_path, default_val=None):
    if not file_path.exists():
        return default_val if default_val is not None else {}
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return default_val if default_val is not None else {}

def write_json_file(file_path, data):
    file_path.parent.mkdir(parents=True, exist_ok=True)
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def parse_frontmatter(content):
    meta = {}
    body = content
    match = re.match(r"^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$", content)
    if match:
        raw_meta = match.group(1)
        body = match.group(2)
        for line in raw_meta.splitlines():
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if ":" in line:
                k, v = line.split(":", 1)
                k = k.strip()
                v = v.strip().strip('"').strip("'")
                # Handle simple list format: ["a", "b"]
                if v.startswith("[") and v.endswith("]"):
                    items = [x.strip().strip('"').strip("'") for x in v[1:-1].split(",") if x.strip()]
                    meta[k] = items
                else:
                    meta[k] = v
    return meta, body

class LocoMotionHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BASE_DIR), **kwargs)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_cors_headers()
        self.end_headers()

    def send_cors_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")

    def send_json(self, data, status=200):
        self.send_response(status)
        self.send_cors_headers()
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.end_headers()
        payload = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.wfile.write(payload)

    def read_json_body(self):
        try:
            length = int(self.headers.get("Content-Length", 0))
            if length == 0:
                return {}
            raw = self.rfile.read(length).decode("utf-8")
            return json.loads(raw)
        except Exception as e:
            return None

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path == "/api/routes":
            routes = []
            if ROUTES_DIR.exists():
                for entry in sorted(ROUTES_DIR.iterdir()):
                    if entry.is_dir():
                        index_file = entry / "index.md"
                        images_dir = entry / "images"
                        images = []
                        if images_dir.exists():
                            images = [img.name for img in images_dir.iterdir() if img.is_file() and not img.name.startswith(".")]

                        route_data = {
                            "id": entry.name,
                            "images": sorted(images),
                            "has_content": index_file.exists()
                        }
                        if index_file.exists():
                            content = index_file.read_text(encoding="utf-8")
                            meta, body = parse_frontmatter(content)
                            route_data["metadata"] = meta
                            route_data["excerpt"] = body[:200].replace("\n", " ").strip() + "..."
                            route_data["markdown"] = content
                        routes.append(route_data)
            self.send_json({"routes": routes})
            return

        elif path.startswith("/api/routes/") and path.endswith("/images"):
            route_id = path.split("/")[3]
            img_dir = ROUTES_DIR / route_id / "images"
            images = []
            if img_dir.exists():
                images = [f.name for f in img_dir.iterdir() if f.is_file() and not f.name.startswith(".")]
            self.send_json({"images": sorted(images)})
            return

        elif path.startswith("/api/routes/"):
            parts = path.split("/")
            route_id = parts[3]
            index_file = ROUTES_DIR / route_id / "index.md"
            if not index_file.exists():
                self.send_json({"error": "Route not found"}, 404)
                return
            content = index_file.read_text(encoding="utf-8")
            meta, body = parse_frontmatter(content)
            images_dir = ROUTES_DIR / route_id / "images"
            images = [f.name for f in images_dir.iterdir() if f.is_file()] if images_dir.exists() else []
            self.send_json({
                "id": route_id,
                "metadata": meta,
                "markdown": content,
                "body": body,
                "images": sorted(images)
            })
            return

        elif path == "/api/suggestions":
            data = read_json_file(SUGGESTIONS_FILE, {"suggestions": []})
            self.send_json(data)
            return

        elif path == "/api/settings":
            cfg = read_json_file(CONFIG_FILE, {})
            # Mask sensitive tokens for safe display
            safe_cfg = {
                "gemini_api_key": "***" + cfg.get("gemini_api_key", "")[-4:] if cfg.get("gemini_api_key") else "",
                "has_gemini_key": bool(cfg.get("gemini_api_key")),
                "unsplash_api_key": "***" + cfg.get("unsplash_api_key", "")[-4:] if cfg.get("unsplash_api_key") else "",
                "has_unsplash_key": bool(cfg.get("unsplash_api_key")),
                "github_repo": cfg.get("github_repo", ""),
                "github_username": cfg.get("github_username", ""),
                "has_github_token": bool(cfg.get("github_token"))
            }
            self.send_json(safe_cfg)
            return

        elif path == "/api/git/status":
            try:
                # git status
                proc = subprocess.run(["git", "status", "--porcelain"], cwd=BASE_DIR, capture_output=True, text=True)
                proc_branch = subprocess.run(["git", "branch", "--show-current"], cwd=BASE_DIR, capture_output=True, text=True)
                proc_remote = subprocess.run(["git", "remote", "-v"], cwd=BASE_DIR, capture_output=True, text=True)
                proc_log = subprocess.run(["git", "log", "-1", "--oneline"], cwd=BASE_DIR, capture_output=True, text=True)

                self.send_json({
                    "branch": proc_branch.stdout.strip() or "main",
                    "changed_files": [line.strip() for line in proc.stdout.splitlines() if line.strip()],
                    "remotes": proc_remote.stdout.strip(),
                    "last_commit": proc_log.stdout.strip(),
                    "clean": len(proc.stdout.strip()) == 0
                })
            except Exception as e:
                self.send_json({"error": str(e)}, 500)
            return

        # Fallback to standard static file serving
        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        body = self.read_json_body()

        if body is None:
            self.send_json({"error": "Invalid JSON payload"}, 400)
            return

        if path.startswith("/api/routes/") and path.endswith("/upload-image"):
            route_id = path.split("/")[3]
            filename = body.get("filename")
            data_b64 = body.get("data")
            if not filename or not data_b64:
                self.send_json({"error": "filename and data are required"}, 400)
                return
            img_dir = ROUTES_DIR / route_id / "images"
            img_dir.mkdir(parents=True, exist_ok=True)
            if "," in data_b64:
                data_b64 = data_b64.split(",", 1)[1]
            try:
                img_bytes = base64.b64decode(data_b64)
                target_file = img_dir / filename
                target_file.write_bytes(img_bytes)
                self.send_json({"success": True, "filename": filename, "path": f"content/routes/{route_id}/images/{filename}"})
            except Exception as e:
                self.send_json({"error": f"Failed to save image: {e}"}, 500)
            return

        elif path.startswith("/api/routes/"):
            parts = path.split("/")
            route_id = parts[3]
            markdown = body.get("markdown")
            if markdown is None:
                self.send_json({"error": "markdown content is required"}, 400)
                return
            route_dir = ROUTES_DIR / route_id
            route_dir.mkdir(parents=True, exist_ok=True)
            index_file = route_dir / "index.md"
            index_file.write_text(markdown, encoding="utf-8")
            self.send_json({"success": True, "message": f"Route '{route_id}' updated successfully"})
            return

        elif path == "/api/suggestions":
            title = body.get("title", "").strip()
            if not title:
                self.send_json({"error": "Title is required"}, 400)
                return
            data = read_json_file(SUGGESTIONS_FILE, {"suggestions": []})
            import time
            new_item = {
                "id": f"sug-{int(time.time())}",
                "title": title,
                "region": body.get("region", "Belirtilmedi"),
                "notes": body.get("notes", ""),
                "status": "pending",  # pending, researching, completed
                "created_at": time.strftime("%Y-%m-%d %H:%M:%S")
            }
            data.setdefault("suggestions", []).insert(0, new_item)
            write_json_file(SUGGESTIONS_FILE, data)
            self.send_json({"success": True, "suggestion": new_item})
            return

        elif path == "/api/settings":
            cfg = read_json_file(CONFIG_FILE, {})
            # Only update keys that were passed non-masked
            if body.get("gemini_api_key") and not body.get("gemini_api_key").startswith("***"):
                cfg["gemini_api_key"] = body.get("gemini_api_key").strip()
            if body.get("unsplash_api_key") and not body.get("unsplash_api_key").startswith("***"):
                cfg["unsplash_api_key"] = body.get("unsplash_api_key").strip()
            if "github_repo" in body:
                cfg["github_repo"] = body.get("github_repo", "").strip()
            if "github_username" in body:
                cfg["github_username"] = body.get("github_username", "").strip()
            if body.get("github_token") and not body.get("github_token").startswith("***"):
                cfg["github_token"] = body.get("github_token").strip()

            write_json_file(CONFIG_FILE, cfg)
            self.send_json({"success": True, "message": "Settings updated"})
            return

        elif path == "/api/git/publish":
            commit_msg = body.get("commit_message", "docs: update content via LocoMotion panel").strip()
            remote_repo = body.get("github_repo", "").strip()
            token = body.get("github_token", "").strip()

            cfg = read_json_file(CONFIG_FILE, {})
            if not remote_repo:
                remote_repo = cfg.get("github_repo", "")
            if not token:
                token = cfg.get("github_token", "")

            logs = []
            try:
                # 1. git add .
                add_res = subprocess.run(["git", "add", "."], cwd=BASE_DIR, capture_output=True, text=True)
                logs.append(f"Git Add: {add_res.returncode}")

                # 2. git commit
                commit_res = subprocess.run(["git", "commit", "-m", commit_msg], cwd=BASE_DIR, capture_output=True, text=True)
                logs.append(f"Git Commit: {commit_res.stdout.strip() or commit_res.stderr.strip()}")

                # 3. Handle remote
                if remote_repo:
                    # Clean remote URL format: https://github.com/user/repo or user/repo
                    if "github.com" not in remote_repo:
                        clean_repo = remote_repo.strip("/")
                    else:
                        clean_repo = re.sub(r"^https?://github\.com/", "", remote_repo).rstrip("/")

                    if token:
                        remote_url = f"https://{token}@github.com/{clean_repo}.git"
                    else:
                        remote_url = f"https://github.com/{clean_repo}.git"

                    # Check if origin exists
                    remotes = subprocess.run(["git", "remote"], cwd=BASE_DIR, capture_output=True, text=True).stdout
                    if "origin" in remotes.split():
                        subprocess.run(["git", "remote", "set-url", "origin", remote_url], cwd=BASE_DIR)
                    else:
                        subprocess.run(["git", "remote", "add", "origin", remote_url], cwd=BASE_DIR)

                    # Push
                    push_res = subprocess.run(["git", "push", "-u", "origin", "main"], cwd=BASE_DIR, capture_output=True, text=True)
                    logs.append(f"Git Push: {push_res.stdout.strip() or push_res.stderr.strip()}")
                    if push_res.returncode != 0:
                        self.send_json({"success": False, "logs": logs, "error": push_res.stderr.strip()}, 500)
                        return

                self.send_json({"success": True, "logs": logs, "message": "Changes committed & published successfully"})
            except Exception as e:
                self.send_json({"success": False, "error": str(e), "logs": logs}, 500)
            return

        self.send_json({"error": "Endpoint not found"}, 404)

    def do_DELETE(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path.startswith("/api/routes/") and "/images/" in path:
            parts = path.split("/")
            route_id = parts[3]
            filename = parts[5]
            img_file = ROUTES_DIR / route_id / "images" / filename
            if img_file.exists():
                img_file.unlink()
                self.send_json({"success": True, "message": f"{filename} deleted"})
            else:
                self.send_json({"error": "Image not found"}, 404)
            return

        elif path.startswith("/api/suggestions/"):
            sug_id = path.split("/")[3]
            data = read_json_file(SUGGESTIONS_FILE, {"suggestions": []})
            before_len = len(data.get("suggestions", []))
            data["suggestions"] = [s for s in data.get("suggestions", []) if s.get("id") != sug_id]
            write_json_file(SUGGESTIONS_FILE, data)
            self.send_json({"success": True, "deleted": before_len > len(data["suggestions"])})
            return

        self.send_json({"error": "Endpoint not found"}, 404)

def find_available_port(start_port=8080, max_attempts=30):
    for p in range(start_port, start_port + max_attempts):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            try:
                s.bind(("", p))
                return p
            except OSError:
                continue
    return start_port

def run():
    socketserver.TCPServer.allow_reuse_address = True
    desired_port = int(os.environ.get("PORT", 8080))
    port = find_available_port(desired_port)
    
    try:
        (BASE_DIR / ".active_port").write_text(str(port), encoding="utf-8")
    except Exception:
        pass

    with socketserver.TCPServer(("", port), LocoMotionHandler) as httpd:
        print("\n" + "=" * 60)
        print("🚂 LocoMotion Yerel Sunucusu Başarıyla Başlatıldı!")
        print(f"👉 Siteyi Açın:        http://localhost:{port}")
        print(f"👉 Yönetim Paneli:    http://localhost:{port}/admin.html")
        print("=" * 60 + "\n")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Sunucu durduruldu.")

if __name__ == "__main__":
    run()
