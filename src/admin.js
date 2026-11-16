// LocoMotion Admin Panel Logic

let currentRouteId = "jacobite-steam-train";
let routesList = [];

document.addEventListener("DOMContentLoaded", () => {
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

// Tab Switcher
function switchAdminTab(tabName) {
  document.querySelectorAll(".admin-tab-pane").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".admin-menu-item").forEach(b => b.classList.remove("active"));

  const targetPane = document.getElementById(`tab-${tabName}`);
  if (targetPane) targetPane.classList.add("active");

  const activeBtn = Array.from(document.querySelectorAll(".admin-menu-item")).find(b => 
    b.getAttribute("onclick").includes(tabName)
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
  setTimeout(() => alertBox.classList.add("hidden"), 4000);
}

// 1. CONTENT & ROUTES
async function loadRoutes() {
  try {
    const res = await fetch("/api/routes");
    const data = await res.json();
    routesList = data.routes || [];

    const select = document.getElementById("route-selector");
    if (!select) return;

    select.innerHTML = routesList.map(r => `
      <option value="${r.id}">${r.metadata?.title || r.id}</option>
    `).join("");

    if (routesList.length > 0) {
      currentRouteId = routesList[0].id;
      loadRouteForEditing();
    }
  } catch (err) {
    console.error("Rotalar yüklenemedi:", err);
  }
}

async function loadRouteForEditing() {
  const select = document.getElementById("route-selector");
  if (select) currentRouteId = select.value;

  try {
    const res = await fetch(`/api/routes/${currentRouteId}`);
    const data = await res.json();
    const editor = document.getElementById("markdown-editor");
    if (editor) {
      editor.value = data.markdown || "";
      updateMarkdownPreview(data.markdown || "");
    }
    loadImagesForRoute();
  } catch (err) {
    showAlert("Rota içeriği yüklenemedi: " + err.message, "error");
  }
}

function updateMarkdownPreview(markdown) {
  const preview = document.getElementById("markdown-preview");
  const count = document.getElementById("char-count");
  if (count) count.innerText = `${markdown.length} karakter`;

  if (preview && window.marked) {
    // Strip YAML frontmatter for preview
    const cleanText = markdown.replace(/^---[\s\S]*?---\n/, "");
    // Fix image paths
    const resolvedText = cleanText.replace(/images\//g, `content/routes/${currentRouteId}/images/`);
    preview.innerHTML = marked.parse(resolvedText);
  }
}

async function saveCurrentRoute() {
  const editor = document.getElementById("markdown-editor");
  if (!editor) return;

  try {
    const res = await fetch(`/api/routes/${currentRouteId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ markdown: editor.value })
    });
    const data = await res.json();
    if (data.success) {
      showAlert("✅ Rota metni başarıyla kaydedildi!");
    } else {
      showAlert("Hata: " + (data.error || "Kaydedilemedi"), "error");
    }
  } catch (err) {
    showAlert("Bağlantı hatası: " + err.message, "error");
  }
}

// 2. IMAGE MANAGER
async function loadImagesForRoute() {
  const grid = document.getElementById("admin-images-grid");
  if (!grid) return;

  try {
    const res = await fetch(`/api/routes/${currentRouteId}/images`);
    const data = await res.json();
    const images = data.images || [];

    if (images.length === 0) {
      grid.innerHTML = `<p style="color: #64748b; padding: 20px;">Bu rotaya ait kayıtlı görsel bulunmuyor.</p>`;
      return;
    }

    grid.innerHTML = images.map(img => `
      <div class="image-card">
        <div class="image-preview-box">
          <img src="content/routes/${currentRouteId}/images/${img}" alt="${img}">
        </div>
        <div class="image-card-footer">
          <span class="image-card-name" title="${img}">${img}</span>
          <button class="btn-delete-sm" onclick="deleteImage('${img}')" title="Sil">🗑️</button>
        </div>
      </div>
    `).join("");
  } catch (err) {
    console.error("Görseller yüklenemedi:", err);
  }
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async (e) => {
    const base64Data = e.target.result;
    try {
      const res = await fetch(`/api/routes/${currentRouteId}/upload-image`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filename: file.name,
          data: base64Data
        })
      });
      const data = await res.json();
      if (data.success) {
        showAlert(`✅ '${file.name}' başarıyla yüklendi!`);
        loadImagesForRoute();
      } else {
        showAlert("Yükleme başarısız: " + data.error, "error");
      }
    } catch (err) {
      showAlert("Yükleme hatası: " + err.message, "error");
    }
  };
  reader.readAsDataURL(file);
}

async function deleteImage(filename) {
  if (!confirm(`'${filename}' görselini silmek istediğinize emin misiniz?`)) return;

  try {
    const res = await fetch(`/api/routes/${currentRouteId}/images/${filename}`, {
      method: "DELETE"
    });
    const data = await res.json();
    if (data.success) {
      showAlert(`🗑️ '${filename}' silindi.`);
      loadImagesForRoute();
    }
  } catch (err) {
    showAlert("Silme hatası: " + err.message, "error");
  }
}

// 3. TOPIC SUGGESTIONS
async function loadSuggestions() {
  const list = document.getElementById("suggestions-list");
  if (!list) return;

  try {
    const res = await fetch("/api/suggestions");
    const data = await res.json();
    const suggestions = data.suggestions || [];

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
  } catch (err) {
    console.error("Öneriler alınamadı:", err);
  }
}

async function submitTopicSuggestion() {
  const title = document.getElementById("sug-title").value.trim();
  const region = document.getElementById("sug-region").value.trim();
  const notes = document.getElementById("sug-notes").value.trim();

  if (!title) {
    showAlert("Lütfen bir rota adı veya başlık girin!", "error");
    return;
  }

  try {
    const res = await fetch("/api/suggestions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, region, notes })
    });
    const data = await res.json();
    if (data.success) {
      showAlert("💡 Yeni rota önerisi başarıyla kuyruğa eklendi!");
      document.getElementById("sug-title").value = "";
      document.getElementById("sug-region").value = "";
      document.getElementById("sug-notes").value = "";
      loadSuggestions();
    }
  } catch (err) {
    showAlert("Hata: " + err.message, "error");
  }
}

// 4. API SETTINGS
async function loadApiSettings() {
  try {
    const res = await fetch("/api/settings");
    const data = await res.json();

    const gStatus = document.getElementById("gemini-status");
    const uStatus = document.getElementById("unsplash-status");
    const repoInput = document.getElementById("github-repo");

    if (gStatus) {
      gStatus.innerText = data.has_gemini_key ? "✅ Tanımlı" : "⚠️ Tanımlanmamış";
      if (data.has_gemini_key) gStatus.classList.add("active");
    }
    if (uStatus) {
      uStatus.innerText = data.has_unsplash_key ? "✅ Tanımlı" : "Tanımsız (Opsiyonel)";
      if (data.has_unsplash_key) uStatus.classList.add("active");
    }
    if (repoInput && data.github_repo) {
      repoInput.value = data.github_repo;
    }
  } catch (err) {
    console.error("Ayarlar yüklenemedi:", err);
  }
}

async function saveApiSettings() {
  const gemini = document.getElementById("gemini-key").value.trim();
  const unsplash = document.getElementById("unsplash-key").value.trim();
  const ghToken = document.getElementById("github-token").value.trim();
  const ghRepo = document.getElementById("github-repo").value.trim();

  const payload = {
    github_repo: ghRepo
  };
  if (gemini) payload.gemini_api_key = gemini;
  if (unsplash) payload.unsplash_api_key = unsplash;
  if (ghToken) payload.github_token = ghToken;

  try {
    const res = await fetch("/api/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.success) {
      showAlert("✅ API ayarları ve GitHub bağlantısı kaydedildi!");
      loadApiSettings();
    }
  } catch (err) {
    showAlert("Kaydetme hatası: " + err.message, "error");
  }
}

// 5. GIT & GITHUB PUBLISHING
async function loadGitStatus() {
  try {
    const res = await fetch("/api/git/status");
    const data = await res.json();

    const branch = document.getElementById("git-branch");
    const lastCommit = document.getElementById("git-last-commit");
    const remote = document.getElementById("git-remote");
    const changedList = document.getElementById("git-changed-list");

    if (branch) branch.innerText = data.branch || "main";
    if (lastCommit) lastCommit.innerText = data.last_commit || "İlk commit";
    if (remote) remote.innerText = data.remotes || "Henüz uzak depo eklenmedi";

    if (changedList) {
      if (!data.changed_files || data.changed_files.length === 0) {
        changedList.innerHTML = `<li style="color: #10b981;">✓ Çalışma dizini temiz. Tüm değişiklikler işlenmiş.</li>`;
      } else {
        changedList.innerHTML = data.changed_files.map(f => `<li>${f}</li>`).join("");
      }
    }
  } catch (err) {
    console.error("Git durumu alınamadı:", err);
  }
}

async function publishToGithub() {
  const commitMsg = document.getElementById("commit-msg").value.trim() || "feat: update content via LocoMotion panel";
  const logBox = document.getElementById("git-log-box");
  const logOutput = document.getElementById("git-log-output");

  if (logBox) logBox.classList.remove("hidden");
  if (logOutput) logOutput.innerText = "Yayınlama başlatılıyor...\n1. git add .\n2. git commit\n3. git push...\n";

  try {
    const res = await fetch("/api/git/publish", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ commit_message: commitMsg })
    });
    const data = await res.json();

    if (logOutput) {
      logOutput.innerText += (data.logs || []).join("\n") + "\n";
      if (data.error) logOutput.innerText += "HATA: " + data.error + "\n";
    }

    if (data.success) {
      showAlert("🚀 Başarılı! Değişiklikler işlendi ve GitHub'a gönderildi.");
      loadGitStatus();
    } else {
      showAlert("Gönderim tamamlanamadı. Lütfen işlem günlüğünü inceleyin.", "error");
    }
  } catch (err) {
    showAlert("Hata: " + err.message, "error");
  }
}
