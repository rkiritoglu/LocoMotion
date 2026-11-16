// LocoMotion Data & Application Script

const routesData = [
  {
    id: "jacobite-steam-train",
    title: "Kuzeyin Dumanı: İskoç Dağlarında Jacobite Buharlı Treni",
    routeName: "The Jacobite Steam Train",
    country: "İskoçya Yaylaları, Birleşik Krallık",
    category: "Buharlı Tren",
    tags: ["Buharlı Tren", "Dağ Manzarası", "Tarihi Hat"],
    heroImage: "content/routes/jacobite-steam-train/images/glenfinnan-viaduct.jpg",
    fallbackHero: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    excerpt: "21 kemerli devasa Glenfinnan Viyadüğü'nden süzülen duman, Loch Shiel'in puslu suları ve 1745 Jakobit İsyanı'nın izinde nostaljik bir Highland serüveni.",
    distance: "67 km (42 mil)",
    duration: "2s 15dk",
    locomotive: "LMS Stanier Class 5 (Black Five)",
    engineering: "Glenfinnan Viyadüğü (21 Kemer, 30 m Beton Monolit)",
    recommendedSeat: "Gidişte Sol Cam Kenarı (A veya D Koltuğu)",
    startStation: "Fort William (Ben Nevis Eteği)",
    endStation: "Mallaig Limanı (Atlantik Kıyısı)",
    passportSerial: "LM-1901-SCOT",
    markdownPath: "content/routes/jacobite-steam-train/index.md",
    stopsList: [
      { name: "Fort William Garı", desc: "Kalkış noktası, Ben Nevis eteğinde tarihi garnizon kenti." },
      { name: "Glenfinnan Viyadüğü & Shiel Gölü", desc: "21 kemerli devasa beton kavis ve Kelt efsaneleri." },
      { name: "Arisaig Garı", desc: "Büyük Britanya ana karasının en batıdaki demiryolu istasyonu." },
      { name: "Mallaig Balıkçı Limanı", desc: "Son durak; Atlantik kıyısında tütsülenmiş ringa balığı ve Skye feribotu." }
    ],
    coordinates: [
      { name: "Fort William", lat: 56.8198, lng: -5.1052, desc: "Başlangıç Garı, Ben Nevis eteği" },
      { name: "Glenfinnan Viyadüğü", lat: 56.8763, lng: -5.4317, desc: "21 kemerli ikonik beton viyadük & Loch Shiel" },
      { name: "Arisaig", lat: 56.9112, lng: -5.8458, desc: "Britanya'nın en batı demiryolu istasyonu" },
      { name: "Morar", lat: 56.9715, lng: -5.8234, desc: "Derin göl & Gümüş Kumsallar" },
      { name: "Mallaig", lat: 57.0065, lng: -5.8286, desc: "Son Durak: Atlantik balıkçı limanı & Skye feribotu" }
    ]
  },
  {
    id: "bernina-express",
    title: "Buzullardan Palmiyelere: Bernina Express",
    routeName: "Bernina Express (Rhaetian Railway)",
    country: "İsviçre Alpleri & İtalya",
    category: "Dağ Manzarası",
    tags: ["Dağ Manzarası", "Tarihi Hat"],
    heroImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    fallbackHero: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    excerpt: "Chur'dan Tirano'ya 55 tünel ve 196 köprü aşarak 2253 metre rakımlı Ospizio Bernina zirvesine tırmanan UNESCO tescilli Alp rüyası.",
    distance: "144 km",
    duration: "4s 15dk",
    locomotive: "Allegra Panoramik Elektrikli Tren",
    engineering: "Brusio Dairesel Viyadüğü & Landwasser Viyadüğü",
    recommendedSeat: "Gidişte Sağ Cam Kenarı (Buzul ve kanyon manzarası)",
    startStation: "Chur Garı (İsviçre)",
    endStation: "Tirano Garı (İtalya)",
    passportSerial: "LM-1910-SWISS",
    markdownPath: "",
    stopsList: [
      { name: "Chur Garı", desc: "İsviçre'nin en eski kentinden Alplere hareket." },
      { name: "Filisur & Landwasser", desc: "65 metre yüksekliğindeki efsanevi taş viyadük." },
      { name: "Ospizio Bernina (2253 m)", desc: "Avrupa'nın en yüksek demiryolu geçişi ve donmuş göller." },
      { name: "Brusio Dairesel Viyadüğü", desc: "360 derecelik spiralle irtifa kaybeden mühendislik harikası." },
      { name: "Tirano Garı", desc: "İtalyan kahvesi ve palmiyelerle karşılanan son durak." }
    ],
    coordinates: [
      { name: "Chur", lat: 46.8508, lng: 9.5320, desc: "İsviçre'nin en eski kenti" },
      { name: "Ospizio Bernina", lat: 46.4103, lng: 10.0194, desc: "2253m zirve ve donmuş buzul gölü" },
      { name: "Brusio Viyadüğü", lat: 46.2575, lng: 10.1265, desc: "Dairesel 360 derece viyadük mucizesi" },
      { name: "Tirano", lat: 46.2162, lng: 10.1740, desc: "İtalyan palmiyeleri ve espresso kokulu varış" }
    ]
  },
  {
    id: "orient-express",
    title: "Efsanelerin ve Casusların Rotası: Doğu Ekspresi",
    routeName: "Venice Simplon-Orient-Express",
    country: "Fransa - İtalya - Avusturya - Türkiye",
    category: "Tarihi Hat",
    tags: ["Tarihi Hat", "Lüks Tren"],
    heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    fallbackHero: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    excerpt: "Paris'ten Sirkeci Garı'na uzanan, Agatha Christie'nin cinayet romanlarına ve Soğuk Savaş gizemlerine beşiklik etmiş demir yolu efsanesi.",
    distance: "3,100 km",
    duration: "5 Gün",
    locomotive: "1920'ler Orijinal CIWL Art Deco Vagonları",
    engineering: "Simplon Tüneli (Alpleri delen 19.8 km'lik tarihi tünel)",
    recommendedSeat: "Grand Suite Özel Kompartıman",
    startStation: "Paris Gare de l'Est (Fransa)",
    endStation: "İstanbul Sirkeci Garı (Türkiye)",
    passportSerial: "LM-1883-ORIENT",
    markdownPath: "",
    stopsList: [
      { name: "Paris Gare de l'Est", desc: "Şampanya, kristal kadehler ve görkemli uğurlama." },
      { name: "Venedik Santa Lucia", desc: "Büyük Kanal kıyısında nostaljik mola." },
      { name: "Belgrad Garı", desc: "Balkanların kalbinden geçen tarihi hat." },
      { name: "İstanbul Sirkeci Garı", desc: "Boğaz'ın kıyısında Doğu ile Batı'nın buluştuğu nokta." }
    ],
    coordinates: [
      { name: "Paris Gare de l'Est", lat: 48.8768, lng: 2.3592, desc: "Şampanya ve veda valsı" },
      { name: "Venedik Santa Lucia", lat: 45.4411, lng: 12.3211, desc: "Lagün kıyısında romantik durak" },
      { name: "İstanbul Sirkeci Garı", lat: 41.0150, lng: 28.9778, desc: "Şarkın kapısı, Boğaz'a varış" }
    ]
  }
];

let mapInstance = null;

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
  renderRouteCards(routesData);
  initMap();
  setupFilterListeners();
  switchPassportRoute("jacobite-steam-train");
});

// Switch Passport Route dynamically
function switchPassportRoute(routeId) {
  const route = routesData.find(r => r.id === routeId) || routesData[0];

  const passTitle = document.getElementById("pass-title");
  const passCountry = document.getElementById("pass-country");
  const passStart = document.getElementById("pass-start");
  const passEnd = document.getElementById("pass-end");
  const passDistTime = document.getElementById("pass-dist-time");
  const passEngine = document.getElementById("pass-engine");
  const passEng = document.getElementById("pass-engineering");
  const passSeat = document.getElementById("pass-seat");
  const passHero = document.getElementById("pass-hero-img");
  const passStops = document.getElementById("pass-stops-timeline");
  const select = document.getElementById("passport-route-select");

  if (select && select.value !== route.id) select.value = route.id;
  if (passTitle) passTitle.innerText = route.routeName;
  if (passCountry) passCountry.innerText = route.country;
  if (passStart) passStart.innerText = route.startStation;
  if (passEnd) passEnd.innerText = route.endStation;
  if (passDistTime) passDistTime.innerText = `${route.distance} • ${route.duration}`;
  if (passEngine) passEngine.innerText = route.locomotive;
  if (passEng) passEng.innerText = route.engineering || "Tarihi Demir Yolu Altyapısı";
  if (passSeat) passSeat.innerText = route.recommendedSeat || "Pencere Kenarı";
  if (passHero) {
    passHero.src = route.heroImage;
    passHero.onerror = () => { passHero.src = route.fallbackHero || ""; };
  }

  // Update stops preview on the right page
  if (passStops && route.stopsList) {
    passStops.innerHTML = route.stopsList.map(s => `
      <div class="stop-node">
        <span class="node-bullet"></span>
        <div>
          <strong>${s.name}</strong>
          <p>${s.desc}</p>
        </div>
      </div>
    `).join("");
  }

  // Focus map on route if map is ready
  if (mapInstance && route.coordinates && route.coordinates.length > 0) {
    const firstCoord = route.coordinates[0];
    mapInstance.flyTo([firstCoord.lat, firstCoord.lng], route.id === "orient-express" ? 5 : 8, { duration: 1.2 });
  }
}

// Render Route Cards
function renderRouteCards(routes) {
  const container = document.getElementById("routes-grid");
  if (!container) return;

  container.innerHTML = routes.map(route => `
    <article class="route-card" onclick="openRouteArticle('${route.id}')">
      <div class="card-img-wrap">
        <img class="card-img" src="${route.heroImage}" alt="${route.title}" onerror="this.onerror=null; this.src='${route.fallbackHero || ''}';">
        <span class="card-badge">${route.category}</span>
      </div>
      <div class="card-body">
        <span class="card-country">📍 ${route.country}</span>
        <h3 class="card-title">${route.title}</h3>
        <p class="card-excerpt">${route.excerpt}</p>
        <div class="card-footer">
          <span>⏱️ ${route.duration} • 🛤️ ${route.distance}</span>
          <span class="card-read-link">Pasaport & Rehber &rarr;</span>
        </div>
      </div>
    </article>
  `).join("");
}

// Setup Category Filters
function setupFilterListeners() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");

      if (filter === "all") {
        renderRouteCards(routesData);
      } else {
        const filtered = routesData.filter(r => r.tags.includes(filter));
        renderRouteCards(filtered);
      }
    });
  });
}

// Interactive Leaflet Map
function initMap() {
  const mapElement = document.getElementById("rail-map");
  if (!mapElement) return;

  mapInstance = L.map("rail-map").setView([56.9, -5.45], 8);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> | LocoMotion',
    maxZoom: 18
  }).addTo(mapInstance);

  // Plot all stops for Jacobite
  routesData.forEach(route => {
    if (!route.coordinates) return;
    const polylineCoords = [];

    route.coordinates.forEach(point => {
      polylineCoords.push([point.lat, point.lng]);

      const marker = L.circleMarker([point.lat, point.lng], {
        radius: 7,
        fillColor: route.id === "jacobite-steam-train" ? "#c8963e" : "#153230",
        color: "#153230",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.9
      }).addTo(mapInstance);

      marker.bindPopup(`
        <div style="font-family: 'Plus Jakarta Sans', sans-serif;">
          <strong style="color: #153230; font-size: 13px;">${point.name}</strong>
          <p style="margin: 3px 0 0; font-size: 11px; color: #5e6d75;">${point.desc}</p>
          <button style="margin-top: 6px; padding: 3px 8px; font-size: 10px; background: #c8963e; color: #fff; border: none; border-radius: 3px; cursor: pointer;" onclick="openRouteArticle('${route.id}')">Pasaportu Gör</button>
        </div>
      `);
    });

    L.polyline(polylineCoords, {
      color: route.id === "jacobite-steam-train" ? "#c8963e" : "#204b48",
      weight: 3,
      dashArray: "6, 6",
      opacity: 0.85
    }).addTo(mapInstance);
  });
}

// Open Route Article Reader
async function openRouteArticle(routeId) {
  // Sync the passport section to this route too
  switchPassportRoute(routeId);

  const route = routesData.find(r => r.id === routeId);
  const modal = document.getElementById("article-modal");
  const body = document.getElementById("article-body");

  if (!route || !modal || !body) return;

  if (route.markdownPath) {
    try {
      const response = await fetch(route.markdownPath);
      let text = await response.text();

      // Strip YAML frontmatter if present
      text = text.replace(/^---[\s\S]*?---\n/, "");

      // Custom path fix for images
      text = text.replace(/images\//g, `content/routes/${routeId}/images/`);

      body.innerHTML = marked.parse(text);
    } catch (err) {
      body.innerHTML = `
        <h1>${route.title}</h1>
        <p>${route.excerpt}</p>
        <p><em>Makale yüklenirken bir hata oluştu. Lütfen dosya yolunu kontrol edin.</em></p>
      `;
    }
  } else {
    body.innerHTML = `
      <div style="text-align: center; padding: 40px 0;">
        <span style="font-size: 3rem;">🚂</span>
        <h1 style="font-family: 'Playfair Display', serif; margin-top: 16px;">${route.title}</h1>
        <p style="color: #5e6d75; max-width: 600px; margin: 16px auto;">Bu rota günlüğü şu anda AI Gezginimiz tarafından araştırılmakta ve telifsiz fotoğrafları hazırlanmaktadır. Çok yakında yayında!</p>
        <a href="admin.html" class="btn btn-primary" style="margin-top: 16px;">⚙️ Yönetim Panelinde Düzenle / Yeni Öneri Gir</a>
      </div>
    `;
  }

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

// Close Modal
function closeArticleModal() {
  const modal = document.getElementById("article-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

// Modal Backdrop Click
window.onclick = function(event) {
  const articleModal = document.getElementById("article-modal");
  const aboutModal = document.getElementById("about-modal");
  if (event.target === articleModal) closeArticleModal();
  if (event.target === aboutModal) closeAboutModal();
};

function scrollToMap() {
  const mapSec = document.getElementById("harita");
  if (mapSec) mapSec.scrollIntoView({ behavior: "smooth" });
}

function openAboutModal() {
  const modal = document.getElementById("about-modal");
  if (modal) modal.classList.remove("hidden");
}

function closeAboutModal() {
  const modal = document.getElementById("about-modal");
  if (modal) modal.classList.add("hidden");
}

function showHomeView() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
