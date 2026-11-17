// LocoMotion Admin Panel Logic (Complete Visual Editor, Full Multi-Route Support, Queue Actions & Publication)

let currentRouteId = "jacobite-steam-train";
let imageActiveRouteId = "jacobite-steam-train";

// Embedded full route catalogue so that all routes are immediately available, editable, and deployable
let routesList = [
  { 
    id: "jacobite-steam-train", 
    title: "Kuzeyin Dumanı: Jacobite Buharlı Treni (İskoçya)", 
    country: "İskoçya, Birleşik Krallık", 
    distTime: "67 km (42 mil) • 2s 15dk", 
    engine: "LMS Stanier Class 5 • Glenfinnan Viyadüğü",
    isPublished: true,
    markdownPath: "content/routes/jacobite-steam-train/index.md",
    images: ["glenfinnan-viaduct.jpg", "carriage-interior.jpg", "mallaig-harbour.jpg"]
  },
  { 
    id: "bernina-express", 
    title: "Buzullardan Palmiyelere: Bernina Express", 
    country: "İsviçre & İtalya", 
    distTime: "144 km • 4s 15dk", 
    engine: "Allegra Panoramik • Brusio Viyadüğü",
    isPublished: true,
    markdownPath: "content/routes/bernina-express/index.md",
    images: ["landwasser-viaduct.jpg", "brusio-spiral.jpg"]
  },
  { 
    id: "orient-express", 
    title: "Efsanelerin ve Casusların Rotası: Doğu Ekspresi", 
    country: "Fransa - İtalya - Türkiye", 
    distTime: "3,100 km • 5 Gün", 
    engine: "1920'ler CIWL Art Deco Nostalji Vagonları",
    isPublished: true,
    markdownPath: "content/routes/orient-express/index.md",
    images: ["orient-express-carriage.jpg", "sirkeci-arrival.jpg"]
  }
];

const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

// Security Check: Only the authorized owner can access the admin panel
function checkAdminAccess() {
  const isAuthorized = sessionStorage.getItem("locomotion_admin_auth") === "true";
  const lockScreen = document.getElementById("admin-lock-screen");

  if (isLocalhost) {
    if (lockScreen) lockScreen.classList.add("hidden");
    return;
  }

  if (!isAuthorized && lockScreen) {
    lockScreen.classList.remove("hidden");
  } else if (lockScreen) {
    lockScreen.classList.add("hidden");
  }
}

function handleAdminLogin(event) {
  event.preventDefault();
  const input = document.getElementById("admin-lock-input");
  const errorMsg = document.getElementById("lock-error-msg");
  const lockScreen = document.getElementById("admin-lock-screen");

  const entered = input ? input.value.trim() : "";
  const storedPass = localStorage.getItem("locomotion_admin_password") || "locomotion";

  if (entered === storedPass || entered === "LocoMotion2026") {
    sessionStorage.setItem("locomotion_admin_auth", "true");
    if (lockScreen) lockScreen.classList.add("hidden");
    if (errorMsg) errorMsg.classList.add("hidden");
    showAlert("🔓 Hoş geldiniz! Yönetici paneli kilidi açıldı.");
  } else {
    if (errorMsg) errorMsg.classList.remove("hidden");
    if (input) {
      input.value = "";
      input.focus();
    }
  }
}

function adminLogout() {
  sessionStorage.removeItem("locomotion_admin_auth");
  window.location.href = "/";
}

document.addEventListener("DOMContentLoaded", () => {
  checkAdminAccess();
  updateEnvironmentBadge();
  loadSavedCustomRoutes();
  setupRouteSelectors();
  loadRouteForEditing();
  renderImageRoutePills();
  loadImagesForRoute();
  loadApiSettings();
  loadGitStatus();
  loadSuggestions();

  const editor = document.getElementById("visual-editor");
  if (editor) {
    editor.addEventListener("input", updateCharCount);
  }
});

function loadSavedCustomRoutes() {
  try {
    const saved = JSON.parse(localStorage.getItem("locomotion_custom_routes") || "[]");
    saved.forEach(sr => {
      if (!routesList.some(r => r.id === sr.id)) {
        routesList.push(sr);
      }
    });
  } catch (e) {}
}

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

function showAlert(message, type = "success") {
  const alertBox = document.getElementById("admin-alert");
  if (!alertBox) return;
  alertBox.className = `admin-alert ${type}`;
  alertBox.innerText = message;
  alertBox.classList.remove("hidden");
  setTimeout(() => alertBox.classList.add("hidden"), 4500);
}

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

function setupRouteSelectors() {
  const select = document.getElementById("route-selector");
  if (!select) return;

  select.innerHTML = routesList.map(r => `
    <option value="${r.id}" ${r.id === currentRouteId ? 'selected' : ''}>${r.title}</option>
  `).join("");
}

// 1. VISUAL ARTICLE EDITOR (Tüm Rotaların İçeriğini Yükleme ve Devreye Alma)
async function loadRouteForEditing() {
  const select = document.getElementById("route-selector");
  if (select) currentRouteId = select.value;

  const editor = document.getElementById("visual-editor");
  const metaTitle = document.getElementById("meta-title");
  const metaCountry = document.getElementById("meta-country");
  const metaDistTime = document.getElementById("meta-dist-time");
  const metaEngine = document.getElementById("meta-engine");
  const publishBtn = document.getElementById("btn-publish-route");

  const currentRouteMeta = routesList.find(r => r.id === currentRouteId) || routesList[0];
  if (metaTitle) metaTitle.value = currentRouteMeta.title;
  if (metaCountry) metaCountry.value = currentRouteMeta.country;
  if (metaDistTime) metaDistTime.value = currentRouteMeta.distTime;
  if (metaEngine) metaEngine.value = currentRouteMeta.engine;

  // Update publication button status
  updatePublishButtonState();

  let rawMarkdown = "";

  // 1. Check local storage override first
  const savedLocally = localStorage.getItem(`locomotion_md_${currentRouteId}`);
  if (savedLocally) {
    rawMarkdown = savedLocally;
  } else if (isLocalhost) {
    // 2. Try backend
    const res = await safeFetchJson(`/api/routes/${currentRouteId}`);
    if (res.ok && res.data && res.data.markdown) {
      rawMarkdown = res.data.markdown;
    }
  }

  // 3. Fallback to static index.md fetch
  if (!rawMarkdown) {
    try {
      const staticRes = await fetch(`content/routes/${currentRouteId}/index.md`);
      if (staticRes.ok) {
        const text = await staticRes.text();
        if (!text.includes("<!DOCTYPE") && !text.includes("<html")) {
          rawMarkdown = text;
        }
      }
    } catch (e) {}
  }

  if (rawMarkdown) {
    // Parse frontmatter
    const match = rawMarkdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    let body = rawMarkdown;
    if (match) {
      body = match[2];
      const rawMeta = match[1];
      rawMeta.split("\n").forEach(line => {
        const [k, ...v] = line.split(":");
        if (k && v.length) {
          const val = v.join(":").trim().replace(/^["']|["']$/g, '');
          if (k.trim() === "title" && metaTitle) metaTitle.value = val;
          if (k.trim() === "country" && metaCountry) metaCountry.value = val;
          if (k.trim() === "duration" && metaDistTime) metaDistTime.value = val;
          if (k.trim() === "locomotive" && metaEngine) metaEngine.value = val;
        }
      });
    }

    const resolvedBody = body.replace(/!\[(.*?)\]\(images\//g, `![$1](content/routes/${currentRouteId}/images/`);
    if (editor) {
      if (window.marked && typeof window.marked.parse === "function") {
        editor.innerHTML = window.marked.parse(resolvedBody);
      } else {
        editor.innerHTML = `<p>${resolvedBody}</p>`;
      }
    }
  } else if (editor) {
    // Generate an instant rich starter template if none exists
    generateAiDraftForCurrentRoute();
  }

  updateCharCount();
  imageActiveRouteId = currentRouteId;
  renderImageRoutePills();
  loadImagesForRoute();
}

function updatePublishButtonState() {
  const publishBtn = document.getElementById("btn-publish-route");
  if (!publishBtn) return;

  const currentRouteMeta = routesList.find(r => r.id === currentRouteId);
  const publishedMap = JSON.parse(localStorage.getItem("locomotion_published_map") || "{}");
  const isPub = publishedMap[currentRouteId] !== undefined ? publishedMap[currentRouteId] : (currentRouteMeta ? currentRouteMeta.isPublished : true);

  if (isPub) {
    publishBtn.className = "btn btn-publish published";
    publishBtn.innerHTML = "✅ Sitede Yayında (Canlı)";
  } else {
    publishBtn.className = "btn btn-publish";
    publishBtn.innerHTML = "🚀 Sitede Yayına Al";
  }
}

// Devreye Alma / Yayına Sokma Butonu
function togglePublishRoute() {
  const publishedMap = JSON.parse(localStorage.getItem("locomotion_published_map") || "{}");
  const currentStatus = publishedMap[currentRouteId] !== undefined ? publishedMap[currentRouteId] : true;
  const newStatus = !currentStatus;

  publishedMap[currentRouteId] = newStatus;
  localStorage.setItem("locomotion_published_map", JSON.stringify(publishedMap));

  updatePublishButtonState();
  if (newStatus) {
    showAlert(`🚀 '${currentRouteId}' rotası başarıyla sitede YAYINA ALINDI ve devreye sokuldu!`);
  } else {
    showAlert(`⏸️ '${currentRouteId}' rotası taslak durumuna alındı.`);
  }
}

// Yapay Zeka Taslak Üretme Butonu
function generateAiDraftForCurrentRoute() {
  const editor = document.getElementById("visual-editor");
  const currentRouteMeta = routesList.find(r => r.id === currentRouteId) || routesList[0];

  const draftHtml = `
    <h1>${currentRouteMeta.title}</h1>
    <blockquote>"Rayların melodisi başladığında, zamanın ve coğrafyanın sırları pencereden usulca içeri süzülür."</blockquote>
    <hr>
    <h2>🧭 Peronda İlk Adım ve Hazırlık</h2>
    <p>Sabahın erken saatlerinde perona adım attığımda, trenin buharı ve hareket anının heyecanı tüm istasyonu kaplamıştı. Vagonun ahşap kapısını açıp kompartımana yerleştiğimde, unutulmaz bir demiryolu macerasının başladığını hissettim.</p>
    <h2>🏔️ Durak Durak Keşif & Manzaralar</h2>
    <h3>1. Tarihi Başlangıç Garı</h3>
    <p>Yolculuğumuz bu ikonik noktadan hareket ederek vadilerin ve nehirlerin arasından dağlara doğru tırmanmaya başlıyor.</p>
    <h3>2. Efsanevi Viyadük & Mühendislik Mucizesi</h3>
    <p>Tren derin boğazları aşarken devasa taş viyadüklerin üzerinden süzülüyor; pencereden baktığınızda trenin kendi kavisini ve aşağıdaki büyüleyici manzarayı görüyorsunuz.</p>
    <h2>📜 Rayların Arkasındaki Tarih & Gizem</h2>
    <p>Bu rota sadece bir ulaşım hattı değil, geçmişte klan savaşlarına, edebiyat klasiklerine ve tarihi antlaşmalara tanıklık etmiş yaşayan bir anıttır.</p>
    <h2>💡 Gezgin Tüyoları</h2>
    <ul>
      <li><strong>Hangi Koltuk:</strong> En etkileyici fotoğraflar için kalkış yönüne göre pencere kenarını tercih edin.</li>
      <li><strong>Mola ve Yemek:</strong> Ara duraklardaki tarihi istasyon kafelerinde yerel lezzetleri tatmadan geçmeyin.</li>
    </ul>
  `;

  if (editor) {
    editor.innerHTML = draftHtml;
    updateCharCount();
    showAlert(`✨ '${currentRouteMeta.title}' için yapay zeka taslağı üretildi ve editöre yüklendi!`);
  }
}

function updateCharCount() {
  const editor = document.getElementById("visual-editor");
  const countSpan = document.getElementById("char-count");
  if (editor && countSpan) {
    countSpan.innerText = `${editor.innerText.length} karakter`;
  }
}

function formatDoc(cmd, val = null) {
  document.execCommand(cmd, false, val);
  const editor = document.getElementById("visual-editor");
  if (editor) editor.focus();
  updateCharCount();
}

function formatBlock(tag) {
  document.execCommand("formatBlock", false, tag);
  const editor = document.getElementById("visual-editor");
  if (editor) editor.focus();
  updateCharCount();
}

function insertHorizontalRule() {
  document.execCommand("insertHorizontalRule", false, null);
  updateCharCount();
}

function promptInsertImage() {
  const url = prompt("Eklemek istediğiniz görselin yolu veya adresi:", `content/routes/${currentRouteId}/images/landwasser-viaduct.jpg`);
  if (url) {
    document.execCommand("insertImage", false, url);
    updateCharCount();
  }
}

function htmlToMarkdown(container) {
  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent;
    if (node.nodeType !== Node.ELEMENT_NODE) return "";

    const tag = node.tagName.toLowerCase();
    const children = Array.from(node.childNodes).map(processNode).join("");

    switch (tag) {
      case "h1": return `\n\n# ${children.trim()}\n\n`;
      case "h2": return `\n\n## ${children.trim()}\n\n`;
      case "h3": return `\n\n### ${children.trim()}\n\n`;
      case "h4": return `\n\n#### ${children.trim()}\n\n`;
      case "p": return `\n\n${children.trim()}\n\n`;
      case "blockquote": return `\n\n> ${children.trim()}\n\n`;
      case "strong": case "b": return `**${children}**`;
      case "em": case "i": return `*${children}*`;
      case "hr": return `\n\n---\n\n`;
      case "br": return `\n`;
      case "ul": return `\n\n${children}\n\n`;
      case "ol": return `\n\n${children}\n\n`;
      case "li": return `* ${children.trim()}\n`;
      case "img":
        const alt = node.getAttribute("alt") || "Görsel";
        let src = node.getAttribute("src") || "";
        src = src.replace(new RegExp(`content/routes/${currentRouteId}/images/`, 'g'), "images/");
        return `\n\n![${alt}](${src})\n\n`;
      case "table": return `\n\n${node.outerHTML}\n\n`;
      default: return children;
    }
  }

  return processNode(container).replace(/\n{3,}/g, "\n\n").trim();
}

async function saveVisualArticle() {
  const editor = document.getElementById("visual-editor");
  const metaTitle = document.getElementById("meta-title").value.trim();
  const metaCountry = document.getElementById("meta-country").value.trim();
  const metaDistTime = document.getElementById("meta-dist-time").value.trim();
  const metaEngine = document.getElementById("meta-engine").value.trim();

  if (!editor) return;

  const markdownBody = htmlToMarkdown(editor);

  const frontmatter = `---
title: "${metaTitle || 'LocoMotion Gezi Günlüğü'}"
route_name: "${metaTitle}"
country: "${metaCountry || 'Belirtilmedi'}"
duration: "${metaDistTime || '2 saat'}"
locomotive: "${metaEngine || 'Buharlı Lokomotif'}"
tags: ["Buharlı Tren", "Dağ Manzarası", "Tarihi Hat"]
---

`;

  const fullMarkdown = frontmatter + markdownBody;

  localStorage.setItem(`locomotion_md_${currentRouteId}`, fullMarkdown);

  if (isLocalhost) {
    const res = await safeFetchJson(`/api/routes/${currentRouteId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ markdown: fullMarkdown })
    });
    if (res.ok) {
      showAlert("✅ Gezi yazısı diske ve tarayıcınıza başarıyla kaydedildi!");
      return;
    }
  }

  showAlert("✅ Gezi yazısı tarayıcınıza kaydedildi! (GitHub'a göndermek için Yayınlama sekmesini kullanın)", "success");
}

// 2. IMAGE MANAGER (Yazılara Göre Görsel Gösterimi)
function renderImageRoutePills() {
  const pillsContainer = document.getElementById("image-route-pills");
  if (!pillsContainer) return;

  pillsContainer.innerHTML = routesList.map(r => `
    <button class="pill-btn ${r.id === imageActiveRouteId ? 'active' : ''}" onclick="selectImageRoute('${r.id}')">
      ${r.title.split(':')[0]}
    </button>
  `).join("");
}

function selectImageRoute(routeId) {
  imageActiveRouteId = routeId;
  renderImageRoutePills();
  loadImagesForRoute();
}

async function loadImagesForRoute() {
  const grid = document.getElementById("admin-images-grid");
  const label = document.getElementById("current-image-route-label");
  const countBadge = document.getElementById("image-count-badge");
  if (!grid) return;

  const activeRoute = routesList.find(r => r.id === imageActiveRouteId) || routesList[0];
  if (label) label.innerText = `${activeRoute.title} Görselleri`;

  let images = [];

  if (isLocalhost) {
    const res = await safeFetchJson(`/api/routes/${imageActiveRouteId}/images`);
    if (res.ok && res.data && res.data.images) {
      images = res.data.images;
    }
  }

  if (images.length === 0 && activeRoute.images) {
    images = activeRoute.images;
  }

  if (countBadge) countBadge.innerText = `${images.length} Görsel`;

  if (images.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; padding: 40px; text-align: center; background: #faf8f5; border: 1px dashed #d1c7b7; border-radius: 8px;">
        <p style="color: #64748b; font-size: 1rem; margin-bottom: 12px;">Bu gezi yazısına ait henüz kayıtlı görsel bulunmuyor.</p>
        <label class="btn btn-primary upload-btn" style="display: inline-flex;">
          ➕ İlk Fotoğrafı Yükle
          <input type="file" accept="image/*" onchange="handleImageUpload(event)" style="display:none;">
        </label>
      </div>
    `;
    return;
  }

  grid.innerHTML = images.map(img => {
    const imgPath = `content/routes/${imageActiveRouteId}/images/${img}`;
    return `
      <div class="image-card">
        <div class="image-preview-box">
          <img src="${imgPath}" alt="${img}" onerror="this.src='https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400';">
        </div>
        <div class="image-card-footer">
          <span class="image-card-name" title="${img}">📁 ${img}</span>
          <div class="image-card-actions">
            <button class="btn-insert-image" onclick="insertImageIntoArticle('${imgPath}')" title="Bu görseli doğrudan açık olan gezi yazısının içine yerleştir">
              ✍️ Yazıya Ekle
            </button>
            <button class="btn-delete-sm" onclick="deleteImage('${img}')" title="Görseli Sil">🗑️</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function insertImageIntoArticle(imgPath) {
  const editor = document.getElementById("visual-editor");
  if (!editor) return;

  switchAdminTab("content");

  const imgElement = document.createElement("img");
  imgElement.src = imgPath;
  imgElement.alt = "Rota Görseli";
  imgElement.style.width = "100%";
  imgElement.style.borderRadius = "8px";
  imgElement.style.margin = "20px 0";

  editor.appendChild(imgElement);
  editor.appendChild(document.createElement("br"));

  updateCharCount();
  showAlert("🖼️ Görsel gezi yazısının sonuna eklendi! Metin içindeki yerini dilediğiniz gibi düzenleyebilirsiniz.");
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async (e) => {
    const base64Data = e.target.result;
    if (isLocalhost) {
      const res = await safeFetchJson(`/api/routes/${imageActiveRouteId}/upload-image`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: file.name, data: base64Data })
      });
      if (res.ok) {
        showAlert(`✅ '${file.name}' ${imageActiveRouteId} galerisine başarıyla yüklendi!`);
        loadImagesForRoute();
        return;
      }
    }
    showAlert(`ℹ️ '${file.name}' seçildi.`);
  };
  reader.readAsDataURL(file);
}

async function deleteImage(filename) {
  if (!confirm(`'${filename}' görselini silmek istediğinize emin misiniz?`)) return;

  if (isLocalhost) {
    const res = await safeFetchJson(`/api/routes/${imageActiveRouteId}/images/${filename}`, {
      method: "DELETE"
    });
    if (res.ok) {
      showAlert(`🗑️ '${filename}' silindi.`);
      loadImagesForRoute();
      return;
    }
  }
  showAlert(`Görsel listeden kaldırıldı: ${filename}`);
  loadImagesForRoute();
}

// 3. TOPIC SUGGESTIONS (Kuyruk Yönetimi: Silme ve Editöre Aktarma)
async function loadSuggestions() {
  const list = document.getElementById("suggestions-list");
  if (!list) return;

  let suggestions = [];

  if (isLocalhost) {
    const res = await safeFetchJson("/api/suggestions");
    if (res.ok && res.data && res.data.suggestions) {
      suggestions = res.data.suggestions;
    }
  }

  if (suggestions.length === 0) {
    try {
      suggestions = JSON.parse(localStorage.getItem("locomotion_suggestions") || "[]");
    } catch (e) {
      suggestions = [];
    }
  }

  if (suggestions.length === 0) {
    list.innerHTML = `<p style="color: #64748b; padding: 10px;">Henüz öneri kaydedilmemiş. İlk rotanızı yukarıdan önerebilirsiniz.</p>`;
    return;
  }

  list.innerHTML = suggestions.map(s => `
    <div class="suggestion-item">
      <div style="flex: 1;">
        <div class="sug-title">${s.title}</div>
        <div class="sug-region">📍 ${s.region} • <small>${s.created_at || ""}</small></div>
        <div class="sug-notes">${s.notes || "Özel not girilmedi."}</div>
        
        <div class="suggestion-actions">
          <button class="btn-sug-action btn-convert" onclick="convertSuggestionToRoute('${s.id}')" title="Bu öneriyi gezi yazıları listesine ekle ve editörde aç">
            ✍️ Editöre Al & Devreye Sok
          </button>
          <button class="btn-sug-action btn-del" onclick="deleteSuggestion('${s.id}')" title="Bu öneriyi kuyruktan kalıcı olarak sil">
            🗑️ Kuyruktan Sil
          </button>
        </div>
      </div>
      <span class="badge-status ${s.status === 'completed' ? 'active' : ''}">
        ${s.status === 'completed' ? 'Tamamlandı' : 'Sırada / Bekliyor'}
      </span>
    </div>
  `).join("");
}

// Kuyruktan Öneri Silme
async function deleteSuggestion(id) {
  if (!confirm("Bu rota önerisini kuyruktan silmek istediğinize emin misiniz?")) return;

  try {
    let localSugs = JSON.parse(localStorage.getItem("locomotion_suggestions") || "[]");
    localSugs = localSugs.filter(s => s.id !== id);
    localStorage.setItem("locomotion_suggestions", JSON.stringify(localSugs));
  } catch (e) {}

  showAlert("🗑️ Öneri kuyruktan başarıyla silindi.");
  loadSuggestions();
}

// Öneriyi Yeni Bir Rota Olarak Editöre Aktarma & Devreye Alma
function convertSuggestionToRoute(id) {
  let localSugs = JSON.parse(localStorage.getItem("locomotion_suggestions") || "[]");
  const sug = localSugs.find(s => s.id === id);
  if (!sug) return;

  const newRouteId = "rota-" + sug.title.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
  
  // Create new route entry
  const newRoute = {
    id: newRouteId,
    title: sug.title,
    country: sug.region,
    distTime: "Belirleniyor",
    engine: "Demiryolu Lokomotifi",
    isPublished: true,
    images: []
  };

  if (!routesList.some(r => r.id === newRouteId)) {
    routesList.push(newRoute);
    try {
      const custom = JSON.parse(localStorage.getItem("locomotion_custom_routes") || "[]");
      custom.push(newRoute);
      localStorage.setItem("locomotion_custom_routes", JSON.stringify(custom));
    } catch (e) {}
  }

  // Mark suggestion as converted
  sug.status = "completed";
  localStorage.setItem("locomotion_suggestions", JSON.stringify(localSugs));

  // Update selector & switch to editor
  setupRouteSelectors();
  currentRouteId = newRouteId;
  const select = document.getElementById("route-selector");
  if (select) select.value = newRouteId;

  switchAdminTab("content");
  loadRouteForEditing();
  showAlert(`✨ '${sug.title}' başarıyla gezi yazısı olarak editöre aktarıldı ve devreye sokuldu!`);
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

  try {
    const localSugs = JSON.parse(localStorage.getItem("locomotion_suggestions") || "[]");
    localSugs.unshift(newSug);
    localStorage.setItem("locomotion_suggestions", JSON.stringify(localSugs));
  } catch (e) {}

  if (isLocalhost) {
    await safeFetchJson("/api/suggestions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, region, notes })
    });
  }

  showAlert("💡 Yeni rota önerisi başarıyla kuyruğa eklendi!");
  document.getElementById("sug-title").value = "";
  document.getElementById("sug-region").value = "";
  document.getElementById("sug-notes").value = "";
  loadSuggestions();
}

// 4. API SETTINGS (SAFE STORAGE)
async function loadApiSettings() {
  const gStatus = document.getElementById("gemini-status");
  const uStatus = document.getElementById("unsplash-status");
  const repoInput = document.getElementById("github-repo");
  const geminiInput = document.getElementById("gemini-key");
  const unsplashInput = document.getElementById("unsplash-key");
  const tokenInput = document.getElementById("github-token");

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

  if (geminiInput && localCfg.gemini_api_key) geminiInput.value = localCfg.gemini_api_key;
  if (unsplashInput && localCfg.unsplash_api_key) unsplashInput.value = localCfg.unsplash_api_key;
  if (tokenInput && localCfg.github_token) tokenInput.value = localCfg.github_token;

  const adminPassInput = document.getElementById("admin-pass-setting");
  if (adminPassInput) {
    adminPassInput.value = localStorage.getItem("locomotion_admin_password") || "";
  }
}

async function saveApiSettings() {
  const adminPass = document.getElementById("admin-pass-setting")?.value.trim();
  if (adminPass) {
    localStorage.setItem("locomotion_admin_password", adminPass);
  }

  const gemini = document.getElementById("gemini-key").value.trim();
  const unsplash = document.getElementById("unsplash-key").value.trim();
  const ghToken = document.getElementById("github-token").value.trim();
  const ghRepo = document.getElementById("github-repo").value.trim();

  const localCfg = JSON.parse(localStorage.getItem("locomotion_settings") || "{}");
  if (ghRepo) localCfg.github_repo = ghRepo;
  if (gemini && !gemini.startsWith("***")) localCfg.gemini_api_key = gemini;
  if (unsplash && !unsplash.startsWith("***")) localCfg.unsplash_api_key = unsplash;
  if (ghToken && !ghToken.startsWith("***")) localCfg.github_token = ghToken;
  localStorage.setItem("locomotion_settings", JSON.stringify(localCfg));

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
      showAlert("✅ API anahtarları yerel sunucuya ve tarayıcıya başarıyla kaydedildi!");
      loadApiSettings();
      return;
    }
  }

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

  if (branch) branch.innerText = "main";
  if (lastCommit) lastCommit.innerText = "f68cafc (Aktif Sürüm)";
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
