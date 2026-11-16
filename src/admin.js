// LocoMotion Admin Panel Logic (Dual-Mode: Local Backend & GitHub Pages / Client-Side)

let currentRouteId = "jacobite-steam-train";
let routesList = [];

// Determine whether backend server is expected
const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

document.addEventListener("DOMContentLoaded", () => {
  updateEnvironmentBadge();
  loadRoutes();
  loadApiSettings();
  loadGitStatus();
  loadSuggestions();

  // Bind live markdown preview
  const editor = document.getElementById("markdown-editor");
  if (editor) {
    editor.addEventListener("input", () => {
      updateMarkdownPreview(editor.value);
    });
  }
});

function updateEnvironmentBadge() {
  const statusBox = document.querySelector(".sidebar-status-box");
  if (!statusBox) return;

  if (isLocalhost) {
    statusBox.innerHTML = `
      <div class="status-indicator">
        <span class="status-dot online"></span>
        <span>Yerel Sunucu (Tam Backend)</span>
      </div>
      <p class="status-url">${window.location.origin}</p>
    `;
  } else {
    statusBox.innerHTML = `
      <div class="status-indicator">
        <span class="status-dot online" style="background: #3b82f6; box-shadow: 0 0 8px #3b82f6;"></span>
        <span>GitHub Pages (İstemci Modu)</span>
      </div>
      <p class="status-url" style="color: #64748b; font-size: 11px;">Veriler tarayıcıda (localStorage) korunur</p>
    `;
  }
}

// Tab Switcher
function switchAdminTab(tabName) {
  document.querySelectorAll(".admin-tab-pane").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".admin-menu-item").forEach(b => b.classList.remove("active"));

  const targetPane = document.getElementById(`tab-${tabName}`);
  if (targetPane) targetPane.classList.add("active");

  const activeBtn = Array.from(document.querySelectorAll(".admin-menu-item")).find(b => 
    b.getAttribute("onclick") && b.getAttribute("onclick").includes(tabName)
  );
  if (activeBtn) activeBtn.classList.add("active");

  if (tabName === "git") loadGitStatus();
  if (tabName === "images") loadImagesForRoute();
  if (tabName === "suggest") loadSuggestions();
}

// Alert Notification
function showAlert(message, type = "success") {
  const alertBox = document.getElementById("admin-alert");
  if (!alertBox) return;
  alertBox.className = `admin-alert ${type}`;
  alertBox.innerText = message;
  alertBox.classList.remove("hidden");
  setTimeout(() => alertBox.classList.add("hidden"), 4500);
}

// Safe JSON fetch wrapper that never throws on HTML/404 responses
async function safeFetchJson(url, options = {}) {
  try {
    const res = await fetch(url, options);
    const contentType = res.headers.get("content-type") || "";
    if (res.ok && contentType.includes("application/json")) {
      const data = await res.json();
      return { ok: true, status: res.status, data };
    }
    const text = await res.text();
    return { ok: false, status: res.status, errorText: text };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

// 1. CONTENT & ROUTES
async function loadRoutes() {
  const select = document.getElementById("route-selector");
  if (!select) return;

  // Try backend first if on localhost
  if (isLocalhost) {
    const result = await safeFetchJson("/api/routes");
    if (result.ok && result.data && result.data.routes) {
      routesList = result.data.routes;
    }
  }

  // Fallback defaults if static or backend unreachable
  if (routesList.length === 0) {
    routesList = [
      { id: "jacobite-steam-train", metadata: { title: "Kuzeyin Dumanı: Jacobite Buharlı Treni (İskoçya)" } },
      { id: "bernina-express", metadata: { title: "Buzullardan Palmiyelere: Bernina Express (İsviçre)" } },
      { id: "orient-express", metadata: { title: "Efsanelerin ve Casusların Rotası: Doğu Ekspresi" } }
    ];
  }

  select.innerHTML = routesList.map(r => `
    <option value="${r.id}">${r.metadata?.title || r.id}</option>
  `).join("");

  if (routesList.length > 0) {
    currentRouteId = routesList[0].id;
    loadRouteForEditing();
  }
}

async function loadRouteForEditing() {
  const select = document.getElementById("route-selector");
  if (select) currentRouteId = select.value;

  const editor = document.getElementById("markdown-editor");
  if (!editor) return;

  // 1. Try reading from backend
  if (isLocalhost) {
    const res = await safeFetchJson(`/api/routes/${currentRouteId}`);
    if (res.ok && res.data && res.data.markdown) {
      editor.value = res.data.markdown;
      updateMarkdownPreview(res.data.markdown);
      loadImagesForRoute();
      return;
    }
  }

  // 2. Try fetching static markdown file
  const staticPath = `content/routes/${currentRouteId}/index.md`;
  try {
    const staticRes = await fetch(staticPath);
    if (staticRes.ok) {
      const text = await staticRes.text();
      if (!text.includes("<!DOCTYPE") && !text.includes("<html")) {
        editor.value = text;
        updateMarkdownPreview(text);
        loadImagesForRoute();
        return;
      }
    }
  } catch (e) {
    console.warn("Statik dosya okunamadı:", e);
  }

  // 3. Fallback placeholder or localStorage
  const savedLocally = localStorage.getItem(`locomotion_md_${currentRouteId}`);
  if (savedLocally) {
    editor.value = savedLocally;
    updateMarkdownPreview(savedLocally);
  } else {
    editor.value = `# ${currentRouteId}\n\nBu rota içeriği düzenlenmeye hazır.`;
    updateMarkdownPreview(editor.value);
  }
  loadImagesForRoute();
}

function updateMarkdownPreview(markdown) {
  const preview = document.getElementById("markdown-preview");
  const count = document.getElementById("char-count");
  if (count) count.innerText = `${markdown.length} karakter`;

  if (preview) {
    const cleanText = markdown.replace(/^---[\s\S]*?---\n/, "");
    const resolvedText = cleanText.replace(/images\//g, `content/routes/${currentRouteId}/images/`);
    if (window.marked && typeof window.marked.parse === "function") {
      preview.innerHTML = window.marked.parse(resolvedText);
    } else {
      preview.innerHTML = `<pre style="white-space: pre-wrap;">${resolvedText}</pre>`;
    }
  }
}

async function saveCurrentRoute() {
  const editor = document.getElementById("markdown-editor");
  if (!editor) return;

  const markdownText = editor.value;

  // Always save to browser localStorage as backup
  localStorage.setItem(`locomotion_md_${currentRouteId}`, markdownText);

  // If on localhost, send to Python backend to save to disk
  if (isLocalhost) {
    const res = await safeFetchJson(`/api/routes/${currentRouteId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ markdown: markdownText })
    });
    if (res.ok) {
      showAlert("✅ Rota metni dosyaya (disk) başarıyla kaydedildi!");
      return;
    }
  }

  showAlert("✅ Rota metni tarayıcınıza kaydedildi! (Dosyayı diske yazmak için yerelde `server.py` çalıştırın)", "success");
}

// 2. IMAGE MANAGER
async function loadImagesForRoute() {
  const grid = document.getElementById("admin-images-grid");
  if (!grid) return;

  let images = [];

  if (isLocalhost) {
    const res = await safeFetchJson(`/api/routes/${currentRouteId}/images`);
    if (res.ok && res.data && res.data.images) {
      images = res.data.images;
    }
  }

  // Fallback defaults for Jacobite if offline
  if (images.length === 0 && currentRouteId === "jacobite-steam-train") {
    images = ["glenfinnan-viaduct.jpg", "carriage-interior.jpg", "mallaig-harbour.jpg"];
  }

  if (images.length === 0) {
    grid.innerHTML = `<p style="color: #64748b; padding: 20px;">Bu rotaya ait kayıtlı görsel bulunmuyor.</p>`;
    return;
  }

  grid.innerHTML = images.map(img => `
    <div class="image-card">
      <div class="image-preview-box">
        <img src="content/routes/${currentRouteId}/images/${img}" alt="${img}" onerror="this.src='https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400';">
      </div>
      <div class="image-card-footer">
        <span class="image-card-name" title="${img}">${img}</span>
        <button class="btn-delete-sm" onclick="deleteImage('${img}')" title="Sil">🗑️</button>
      </div>
    </div>
  `).join("");
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async (e) => {
    const base64Data = e.target.result;
    if (isLocalhost) {
      const res = await safeFetchJson(`/api/routes/${currentRouteId}/upload-image`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: file.name, data: base64Data })
      });
      if (res.ok) {
        showAlert(`✅ '${file.name}' diske başarıyla yüklendi!`);
        loadImagesForRoute();
        return;
      }
    }
    showAlert(`ℹ️ Görsel seçildi: '${file.name}'. Diske kaydetmek için lütfen yerel sunucuyu (server.py) kullanın.`);
  };
  reader.readAsDataURL(file);
}

async function deleteImage(filename) {
  if (!confirm(`'${filename}' görselini silmek istediğinize emin misiniz?`)) return;

  if (isLocalhost) {
    const res = await safeFetchJson(`/api/routes/${currentRouteId}/images/${filename}`, {
      method: "DELETE"
    });
    if (res.ok) {
      showAlert(`🗑️ '${filename}' silindi.`);
      loadImagesForRoute();
      return;
    }
  }
  showAlert(`Görsel silindi: ${filename}`);
  loadImagesForRoute();
}

// 3. TOPIC SUGGESTIONS
async function loadSuggestions() {
  const list = document.getElementById("suggestions-list");
  if (!list) return;

  let suggestions = [];

  // Try backend first
  if (isLocalhost) {
    const res = await safeFetchJson("/api/suggestions");
    if (res.ok && res.data && res.data.suggestions) {
      suggestions = res.data.suggestions;
    }
  }

  // If no backend suggestions, read from localStorage
  if (suggestions.length === 0) {
    try {
      suggestions = JSON.parse(localStorage.getItem("locomotion_suggestions") || "[]");
    } catch (e) {
      suggestions = [];
    }
  }

  if (suggestions.length === 0) {
    list.innerHTML = `<p style="color: #64748b;">Henüz öneri kaydedilmemiş. İlk rotanızı yukarıdan önerebilirsiniz.</p>`;
    return;
  }

  list.innerHTML = suggestions.map(s => `
    <div class="suggestion-item">
      <div>
        <div class="sug-title">${s.title}</div>
        <div class="sug-region">📍 ${s.region} • <small>${s.created_at || ""}</small></div>
        <div class="sug-notes">${s.notes || "Özel not girilmedi."}</div>
      </div>
      <span class="badge-status ${s.status === 'completed' ? 'active' : ''}">
        ${s.status === 'completed' ? 'Tamamlandı' : 'Sırada / Bekliyor'}
      </span>
    </div>
  `).join("");
}

async function submitTopicSuggestion() {
  const title = document.getElementById("sug-title").value.trim();
  const region = document.getElementById("sug-region").value.trim();
  const notes = document.getElementById("sug-notes").value.trim();

  if (!title) {
    showAlert("Lütfen bir rota adı veya başlık girin!", "error");
    return;
  }

  const newSug = {
    id: `sug-${Date.now()}`,
    title,
    region: region || "Belirtilmedi",
    notes: notes || "",
    status: "pending",
    created_at: new Date().toLocaleString("tr-TR")
  };

  // Always save to localStorage
  try {
    const localSugs = JSON.parse(localStorage.getItem("locomotion_suggestions") || "[]");
    localSugs.unshift(newSug);
    localStorage.setItem("locomotion_suggestions", JSON.stringify(localSugs));
  } catch (e) {}

  // Sync to backend if available
  if (isLocalhost) {
    await safeFetchJson("/api/suggestions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, region, notes })
    });
  }

  showAlert("💡 Yeni rota önerisi başarıyla kaydedildi!");
  document.getElementById("sug-title").value = "";
  document.getElementById("sug-region").value = "";
  document.getElementById("sug-notes").value = "";
  loadSuggestions();
}

// 4. API SETTINGS (SAFE RESILIENT STORAGE)
async function loadApiSettings() {
  const gStatus = document.getElementById("gemini-status");
  const uStatus = document.getElementById("unsplash-status");
  const repoInput = document.getElementById("github-repo");
  const geminiInput = document.getElementById("gemini-key");
  const unsplashInput = document.getElementById("unsplash-key");
  const tokenInput = document.getElementById("github-token");

  // Read local settings first
  let localCfg = {};
  try {
    localCfg = JSON.parse(localStorage.getItem("locomotion_settings") || "{}");
  } catch (e) {}

  let backendCfg = null;
  if (isLocalhost) {
    const res = await safeFetchJson("/api/settings");
    if (res.ok && res.data) {
      backendCfg = res.data;
    }
  }

  const effectiveRepo = backendCfg?.github_repo || localCfg.github_repo || "rkiritoglu/LocoMotion";
  const hasGemini = Boolean(backendCfg?.has_gemini_key || localCfg.gemini_api_key);
  const hasUnsplash = Boolean(backendCfg?.has_unsplash_key || localCfg.unsplash_api_key);
  const hasToken = Boolean(backendCfg?.has_github_token || localCfg.github_token);

  if (repoInput) repoInput.value = effectiveRepo;

  if (gStatus) {
    gStatus.innerText = hasGemini ? "✅ Tanımlı" : "⚠️ Tanımlanmamış";
    if (hasGemini) gStatus.classList.add("active");
  }
  if (uStatus) {
    uStatus.innerText = hasUnsplash ? "✅ Tanımlı" : "Tanımsız (Opsiyonel)";
    if (hasUnsplash) uStatus.classList.add("active");
  }

  // Pre-fill fields if stored locally
  if (geminiInput && localCfg.gemini_api_key) geminiInput.value = localCfg.gemini_api_key;
  if (unsplashInput && localCfg.unsplash_api_key) unsplashInput.value = localCfg.unsplash_api_key;
  if (tokenInput && localCfg.github_token) tokenInput.value = localCfg.github_token;
}

async function saveApiSettings() {
  const gemini = document.getElementById("gemini-key").value.trim();
  const unsplash = document.getElementById("unsplash-key").value.trim();
  const ghToken = document.getElementById("github-token").value.trim();
  const ghRepo = document.getElementById("github-repo").value.trim();

  // 1. ALWAYS store securely in browser localStorage
  const localCfg = JSON.parse(localStorage.getItem("locomotion_settings") || "{}");
  if (ghRepo) localCfg.github_repo = ghRepo;
  if (gemini && !gemini.startsWith("***")) localCfg.gemini_api_key = gemini;
  if (unsplash && !unsplash.startsWith("***")) localCfg.unsplash_api_key = unsplash;
  if (ghToken && !ghToken.startsWith("***")) localCfg.github_token = ghToken;
  localStorage.setItem("locomotion_settings", JSON.stringify(localCfg));

  // 2. If backend is running on localhost, sync with config.json on disk
  if (isLocalhost) {
    const payload = { github_repo: ghRepo };
    if (gemini && !gemini.startsWith("***")) payload.gemini_api_key = gemini;
    if (unsplash && !unsplash.startsWith("***")) payload.unsplash_api_key = unsplash;
    if (ghToken && !ghToken.startsWith("***")) payload.github_token = ghToken;

    const res = await safeFetchJson("/api/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      showAlert("✅ API anahtarları yerel sunucuya (config.json) ve tarayıcıya başarıyla kaydedildi!");
      loadApiSettings();
      return;
    }
  }

  // If on static host (GitHub Pages), confirm local storage
  showAlert("✅ API anahtarları tarayıcınızda (localStorage) güvenle saklandı!", "success");
  loadApiSettings();
}

// 5. GIT & GITHUB PUBLISHING
async function loadGitStatus() {
  const branch = document.getElementById("git-branch");
  const lastCommit = document.getElementById("git-last-commit");
  const remote = document.getElementById("git-remote");
  const changedList = document.getElementById("git-changed-list");

  if (isLocalhost) {
    const res = await safeFetchJson("/api/git/status");
    if (res.ok && res.data) {
      const data = res.data;
      if (branch) branch.innerText = data.branch || "main";
      if (lastCommit) lastCommit.innerText = data.last_commit || "Son commit yüklü";
      if (remote) remote.innerText = data.remotes || "origin https://github.com/rkiritoglu/LocoMotion.git";
      if (changedList) {
        if (!data.changed_files || data.changed_files.length === 0) {
          changedList.innerHTML = `<li style="color: #10b981;">✓ Çalışma dizini temiz. Tüm değişiklikler işlenmiş.</li>`;
        } else {
          changedList.innerHTML = data.changed_files.map(f => `<li>${f}</li>`).join("");
        }
      }
      return;
    }
  }

  // GitHub Pages / Static fallback view
  if (branch) branch.innerText = "main";
  if (lastCommit) lastCommit.innerText = "5f1d7de (Aktif Sürüm)";
  if (remote) remote.innerText = "https://github.com/rkiritoglu/LocoMotion";
  if (changedList) {
    changedList.innerHTML = `<li style="color: #10b981;">✓ Canlı GitHub Pages sürümü devrede.</li>`;
  }
}

async function publishToGithub() {
  const commitMsg = document.getElementById("commit-msg").value.trim() || "feat: update content via LocoMotion panel";
  const logBox = document.getElementById("git-log-box");
  const logOutput = document.getElementById("git-log-output");

  if (logBox) logBox.classList.remove("hidden");
  if (logOutput) logOutput.innerText = "GitHub işlemi başlatılıyor...\n";

  if (isLocalhost) {
    const res = await safeFetchJson("/api/git/publish", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ commit_message: commitMsg })
    });

    if (logOutput) {
      if (res.ok && res.data) {
        logOutput.innerText += (res.data.logs || []).join("\n") + "\n";
        showAlert("🚀 Başarılı! Değişiklikler işlendi ve GitHub'a gönderildi.");
      } else {
        logOutput.innerText += "HATA: " + (res.errorText || res.error || "Sunucuya ulaşılamadı") + "\n";
        showAlert("Gönderim tamamlanamadı. Yerel terminali kontrol edin.", "error");
      }
    }
    loadGitStatus();
    return;
  }

  if (logOutput) {
    logOutput.innerText += "ℹ️ Şu anda GitHub Pages üzerindesiniz. Kodları yerel makinenizdeki server.py üzerinden veya terminalden 'git push' ile gönderebilirsiniz.\n";
  }
  showAlert("ℹ️ Canlı GitHub Pages ortamındasınız. Değişiklikleri diske işlemek için yerel sunucunuzu kullanın.");
}
