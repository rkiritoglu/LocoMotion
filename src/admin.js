// LocoMotion Admin Panel Logic (Complete Visual Editor, AI Topic Suggester & Detailed Article Generator)

const jacobiteMarkdownContent = `# Kuzeyin Dumanı: İskoç Dağlarında Jacobite Buharlı Treni ile Zamanda Yolculuk

> *"Lokomotifin kömür kokulu ilk nefesi peronu kapladığında, sadece İskoçya'nın batı kıyılarına doğru değil; klan savaşlarının, sürgün edilmiş prenslerin ve Viktorya dönemi demiryolu mucizelerinin tam kalbine doğru yola çıktığınızı anlarsınız."*

---

## 🗂️ Rota Pasaportu

| Bilgi | Detay |
| :--- | :--- |
| **Hat:** | West Highland Line — Mallaig Uzantısı |
| **Başlangıç - Bitiş:** | Fort William Garı ➔ Mallaig Limanı |
| **Toplam Mesafe:** | 42 mil (~67 km) her yön |
| **Yolculuk Süresi:** | Yaklaşık 2 saat 15 dakika (tek yön) |
| **İkonik Mühendislik:** | Glenfinnan Viyadüğü (21 Kemer, 30 m yükseklik) |
| **İdeal Koltuk:** | Fort William'dan kalkışta **Sol Taraf (A veya D cam kenarı)** |

---

## Peronda İlk Adım: Ben Nevis'in Gölgesinde Uyanış

Sabah saat 09.30 suları... Britanya'nın en yüksek zirvesi olan Ben Nevis, gri ve buğulu bir bulut tülünün ardında gizlenmişti. Fort William İstasyonu'nun nostaljik peronuna adım attığım an, kulaklarımı dolduran ilk şey devasa bir canlı gibi nefes alıp veren lokomotifin ritmik tıslaması oldu. Karşımda simsiyah gövdesi, pirinç armaları ve kırmızı vagonlarıyla efsanevi **LMS Stanier 'Black Five'** duruyordu.

Ahşap panelli Mark 1 vagonumun kapısını açıp ağır pirinç kolu çevirdim. Kompartımandaki ekose desenli yün kumaşların kokusu, yılların cilalı maununun rayhasıyla harmanlanmıştı. Kondüktörün gümüş düdüğü çaldı, buhar bulutları istasyon çatısını yaladı ve çelik tekerlekler ilk tok darbeyle raylara tutundu. 

![Vagon İçi Atmosfer](content/routes/jacobite-steam-train/images/carriage-interior.jpg)
*Pencere kenarında sıcak bir Highland çayı ve yağmurla yıkanan İskoç bozkırları.*

---

## Durak Durak İskoçya'nın Vahşi Ruhu

### 1. Banavie ve Neptün'ün Merdiveni (Neptune's Staircase)
Yolculuğun henüz ilk çeyreğinde tren, Caledonian Kanalı'nı kucaklayan Banavie mevkiinden geçiyor. Thomas Telford'un 19. yüzyıl başlarında inşa ettiği ve ardışık 8 havuzdan oluşan efsanevi su merdiveni, dağların suyunu denize kavuşturuyor. Tren buradan kıvrılırken lokomotifin buharı kanal boyunca süzülen teknelerin direklerine karışıyor.

### 2. Glenfinnan ve 21 Kemerin Büyüsü
Tren Loch Eil'in sakin kıyılarını geride bırakıp dağların arasına tırmanmaya başladığında kompartımandaki herkes nefesini tutmuştu. Çünkü birazdan demiryolu tarihinin en dramatik kavisi belirecekti.

Lokomotif uzun bir zafer düdüğü çalarak sola doğru kıvrıldı. İşte oradaydı: **Glenfinnan Viyadüğü**. 

1897 ile 1901 yılları arasında demiryolu mühendisi *"Concrete Bob"* (Sir Robert McAlpine) tarafından inşa edilen bu şaheser, hiçbir taş örgü veya çelik kafes kullanılmadan, tamamen **donatısız monolitik kütle betondan** dökülmüş 21 devasa kemerden oluşuyor. Vadinin tabanındaki Finnan Nehri'nden 30 metre yukarıda süzülürken tren adeta havada asılı kalıyor.

![Glenfinnan Viyadüğü](content/routes/jacobite-steam-train/images/glenfinnan-viaduct.jpg)
*21 kemerli Glenfinnan Viyadüğü'nden süzülen Jacobite ve uzakta pusuya yatan Loch Shiel.*

### 3. Arisaig: Britanya'nın En Batı Ucu
Glenfinnan'dan sonra tren vahşi meşe ormanları arasından geçerek Arisaig İstasyonu'na varıyor. Burası, Büyük Britanya ana karasındaki en batı demiryolu istasyonu unvanına sahip.

### 4. Morar ve Efsanelerin Beyaz Kumsalları
Raylar Loch Morar kıyısını takip ederken manzara bir kez daha kabuk değiştiriyor. 310 metrelik derinliğiyle Britanya'nın en derin tatlı su gölü olan Morar, yerel Kelt efsanelerinde *"Morag"* adında göl canavarına ev sahipliği yapar. Hemen ardından masmavi Atlantik kıyısındaki **Silver Sands of Morar** selamlıyor bizi.

### 5. Son Durak: Mallaig'in İsli ve Tuzlu Limanı
Son tünelden çıkıp kıyıya indiğimizde önümüzde Mallaig Limanı açıldı. Burası yolun sonu; demir rayların bittiği ve açık deniz feribotlarının Skye Adası'na yolcu taşıdığı otantik bir balıkçı kasabası.

![Mallaig Limanı Varış](content/routes/jacobite-steam-train/images/mallaig-harbour.jpg)
*Yolculuğun son durağı: Atlantik kıyısındaki tarihi Mallaig balıkçı limanı.*

---

## 📜 Rayların Arkasındaki Tarih: 1745 Jakobit İsyanı
19 Ağustos 1745'te, genç prens Charles Edward Stuart (*Bonnie Prince Charlie*), tam da viyadüğün gölgesindeki Glenfinnan kıyısına ayak basarak isyan bayrağını açtı. Bugün o vadide tek başına göğe yükselen **Glenfinnan Anıtı**, tarihe meydan okuyan Highland savaşçılarının anısına hala nöbet tutmaktadır.`;

const berninaMarkdownContent = `# Buzullardan Palmiyelere: Bernina Express ile Alplerin Kalbine Yolculuk

> *"Sabah Chur'un serin vadisinde başladığınız yolculukta, önce 2253 metredeki buzulların fırtınasını buğulu camdan izler; birkaç saat sonra İtalya'nın Tirano kasabasında palmiyelerin altında espresso yudumlarsınız. Bernina, raylar üstünde dört mevsimin tek bir güne sığdığı bir Alp mucizesidir."*

---

## 🗂️ Rota Pasaportu

| Bilgi | Detay |
| :--- | :--- |
| **Hat:** | Albula & Bernina Hatları (UNESCO Dünya Mirası) |
| **Başlangıç - Bitiş:** | Chur (İsviçre) ➔ Tirano (İtalya) |
| **Toplam Mesafe:** | 144 km (55 Tünel, 196 Köprü ve Viyadük) |
| **Yolculuk Süresi:** | Yaklaşık 4 saat 15 dakika |
| **Zirve Noktası:** | Ospizio Bernina (2,253 m rakım) |
| **İdeal Koltuk:** | Chur'dan kalkışta **Sağ Taraf** (Viyadükler ve buzul manzarası) |

---

## Peronda İlk Adım: İsviçre'nin En Eski Kentinden Zirvelere

Chur İstasyonu'nun peronunda beni bekleyen parlak kırmızı panoramik vagonlar, tavanına kadar uzanan devasa pencereleriyle adeta gökyüzünü kompartımana davet ediyordu. Kondüktörün hareket işaretiyle tren sessizce süzülmeye başladığında, dar hatlı (1000 mm) Rhaetian Railway raylarının dişli mekanizması olmadan, saf sürtünmeyle yüzde 7'lik dik eğimleri nasıl tırmandığını hayranlıkla izledim.

![Landwasser Viyadüğü](content/routes/bernina-express/images/landwasser-viaduct.jpg)
*65 metre yükseklikteki Landwasser Viyadüğü'nden doğrudan dağın kalbindeki tünele giren kırmızı tren.*

---

## Durak Durak Alp Rüyası

### 1. Landwasser Viyadüğü ve Uçurumun Kıyısı
65 metre aşağıdaki nehir yatağından göğe yükselen beş kireçtaşı kemerin üzerinden geçerken altınızda hiçbir korkuluk veya toprak hissetmiyorsunuz; tren havada uçuyor ve viyadüğün bittiği noktada saniyeler içinde dimdik bir kaya duvarının içine oyulmuş tünele dalıyor.

### 2. Ospizio Bernina: 2253 Metrede Donmuş Zaman
Tırmanış devam ettikçe çam ormanları yerini çıplak kayalıklara ve donmuş göllere bıraktı. **Ospizio Bernina İstasyonu**'na vardığımızda rakım tam 2253 metreydi. Lago Bianco kıyısında bembeyaz Alp zirveleri nefes kesiciydi.

### 3. Brusio Dairesel Viyadüğü: Mühendisliğin 360 Derecelik Valsı
İsviçre sınırını geçip İtalya'ya doğru alçalırken, tren mühendislik tarihinin en zarif çözümüne yaklaştı: **Brusio Dairesel Viyadüğü**. Tren çok dik bir dağ yamacından inerken rayların kaymaması için vadinin ortasına 360 derecelik dairesel bir taş viyadük inşa edilmiş. Kendi etrafında tam bir tur atan tren vadinin yeşilliklerine süzülüyor.

![Brusio Dairesel Viyadüğü](content/routes/bernina-express/images/brusio-spiral.jpg)
*Mühendislik mucizesi: 360 derecelik Brusio dairesel viyadüğünden süzülen tren ve İtalyan vadisi.*

### 4. Son Durak: Tirano'da Palmiyeler ve Espresso
Dağ fırtınaları geride kalıp İtalyan sınırındaki Tirano'ya ulaştığımızda hava sıcaklığı 15 derece birden artmıştı. İstasyondan çıkıp meydandaki kafede otururken Alpler arkamda dev gibi yükseliyordu.`;

const orientMarkdownContent = `# Efsanelerin ve Casusların Rotası: Doğu Ekspresi ile Paris'ten İstanbul'a

> *"Kondüktörün frakındaki pirinç düğmeler, kristal kadehlerde çınlayan şampanya ve Paris'ten Boğaz'ın tuzlu sularına uzanan 3100 kilometrelik bir efsane... Orient Express bir ulaşım aracı değil; tarihin, entrikaların ve edebiyatın en şatafatlı sahnesidir."*

---

## 🗂️ Rota Pasaportu

| Bilgi | Detay |
| :--- | :--- |
| **Hat:** | Orijinal 1883 Orient Express Güzergahı |
| **Başlangıç - Bitiş:** | Paris Gare de l'Est ➔ İstanbul Sirkeci Garı |
| **Toplam Mesafe:** | ~3,100 km (Kıtalararası Lüks Rota) |
| **Yolculuk Süresi:** | 5 Gün / 4 Gece |
| **İkonik Vagon:** | 1920'ler Orijinal Lalique Kristalli 'Voiture-Restaurant' |
| **Tarihi Olay:** | 1929 Çerkezköy Kar Mahsur Kalışı & Agatha Christie Efsanesi |

---

## Paris'te Vals: Gare de l'Est'ten Uğurlanış

Paris'in tarihi Doğu Garı'nda perona adım attığımda, zaman 1920'lerde donup kalmış gibiydi. Gece mavisi ve altın sarısı işlemeli vagonların önünde beyaz eldivenli görevliler yolcuları selamlıyordu. Kompartımanıma girdiğimde cilalı tik ağacı kaplamalar, Fransız Lalique kristal aplikler ve pelüş kadife koltuklar beni karşıladı.

![Orient Express Vagon İçi](content/routes/orient-express/images/orient-express-carriage.jpg)
*1920'lerin orijinal maun panelleri, kristal aplikleri ve nostaljik Art Deco kompartıman zarafeti.*

---

## Durak Durak Kıtaları Aşan Masal

### 1. Simplon Tüneli ve Venedik Suları
İsviçre Alpleri'ni delen 19.8 kilometrelik devasa Simplon Tüneli'nden geçtikten sonra tren Venedik lagünlerinin kıyısına yanaştı; Santa Lucia İstasyonu'nda gondolların gölgesinde verilen kısa bir mola, yolculuğun en romantik duraklarından biriydi.

### 2. Balkanların Gizemi ve Kar Fırtınaları
Venedik geride kalıp tren Budapeşte ve Bükreş ovalarına süzülürken kompartıman hayatı kendi küçük dünyasını kurmuştu. Akşam yemeğinde gümüş servislerle sunulan Fransız mutfağı ve piyano vagonundan yükselen caz ezgileri unutulmazdı.

### 3. Tarihi Hadise: 1929 Çerkezköy Mahsur Kalışı
1929 kışında Orient Express, İstanbul'a yalnızca 100 kilometre kala Çerkezköy yakınlarında devasa bir kar fırtınasına yakalanıp 6 gün boyunca mahsur kalmıştı. Eksi 25 derecede yolcuların hayatta kalma mücadelesi Agatha Christie'ye ilham verdi.

### 4. Şarkın Kapısı: Sirkeci Garı'nda Görkemli Varış
Beş gün süren masal, Boğaz'ın kokusu ve minarelerin silueti belirdiğinde sona yaklaştı. Tren Sirkeci Garı'nın görkemli kemerleri altına süzüldüğünde perondaki fenerler geceyi aydınlatıyordu.

![Sirkeci Garı Varış](content/routes/orient-express/images/sirkeci-arrival.jpg)
*Orient Express'in son durağı: Boğaz'ın kıyısındaki tarihi İstanbul Sirkeci Garı.*`;

// Curated AI Route Inspirations Database
const aiCuratedDatabase = [
  {
    id: "flam-railway",
    title: "Fiyortların Zirvesine: Flåm Demiryolu (Norveç)",
    region: "Norveç Fiyortları",
    tag: "Fiyort & Şelale",
    desc: "Aurlandsfjord kıyısından 866 metre dimdik tırmanan, Kjosfossen şelalesinin kükrediği ve İskandinav mitolojisindeki Huldra efsanesinin yankılandığı mühendislik harikası.",
    distTime: "20 km • 1 Saat",
    engine: "El 17 Özel Çift Frenli Elektrikli Lokomotif",
    notes: "Kjosfossen Şelalesi 5 dakikalık fotoğraf molası, Rallarvegen tarihi işçi patikası ve derin vadiler."
  },
  {
    id: "tren-a-las-nubes",
    title: "Bulutların Treni: Tren a las Nubes (Arjantin)",
    region: "And Dağları, Arjantin",
    tag: "Aşırı İrtifa & Viyadük",
    desc: "Salta'dan hareketle 4,220 metre irtifaya tırmanarak gökyüzünde süzülen, devasa La Polvorilla çelik viyadüğü ve antik İnka madenlerinin izindeki efsanevi hat.",
    distTime: "217 km • 8 Saat",
    engine: "Dizel-Elektrikli Yüksek İrtifa Lokomotifi",
    notes: "Oksijen tüpleriyle seyahat edilen dünyanın en yüksek üçüncü demiryolu, kaktüs vadileri ve bulut denizi."
  },
  {
    id: "kandy-ella",
    title: "Zümrüt Tepeler ve 9 Kemerli Köprü: Kandy - Ella (Sri Lanka)",
    region: "Seylan Tepeleri, Sri Lanka",
    tag: "Çay Plantasyonu",
    desc: "Pencerelerinden sarkan gezginlerin çay toplayıcılarını selamladığı, sisli Demodara 9 Kemerli Köprüsü'nden geçen rengarenk mavi tren serüveni.",
    distTime: "140 km • 6 Saat",
    engine: "Class S12 Mavi Dizel Tren",
    notes: "Kapılarda oturarak rüzgarı hissetme geleneği, Seylan çayı plantasyonları ve tropik şelaleler."
  },
  {
    id: "sunrise-izumo",
    title: "Gece Güneşi: Sunrise Izumo & Seto (Japonya)",
    region: "Honshu & Shikoku, Japonya",
    tag: "Nostaljik Gece Treni",
    desc: "Tokyo'nun neon ışıklarından gece yarısı hareket edip Seto İç Denizi'ne uzanan, geleneksel 'Nobi Nobi' tatami halılı yatakları ve ahşap kabinleriyle ünlü gece treni.",
    distTime: "953 km • 12 Saat",
    engine: "285 Series EMU Sunrise Express",
    notes: "Okayama'da ikiye ayrılan tren, sabah sisinde Fuji Dağı manzarası ve geleneksel sabah bentosu."
  },
  {
    id: "rovos-rail",
    title: "Afrika'nın Gururu: Rovos Rail Safari Ekspresi",
    region: "Güney Afrika",
    tag: "Lüks Safari",
    desc: "Pretoria'dan Cape Town'a uzanan, arkasında açık hava gözlem balkonu olan 1920'ler Edward tarzı dünyanın en lüks ahşap safari treni.",
    distTime: "1,600 km • 3 Gün",
    engine: "Klasik Buharlı / Dizel Safari Lokomotifi",
    notes: "Elmas şehri Kimberley maden kuyusu, Karoo Çölü yıldızları ve savanada antilop sürüleri."
  },
  {
    id: "rocky-mountaineer",
    title: "Vahşi Batının Zirvesi: Rocky Mountaineer (Kanada)",
    region: "Kanada Kayalık Dağları",
    tag: "Kanyon & Vahşi Doğa",
    desc: "Vancouver'dan Banff'a sadece gündüzleri çalışan, çift katlı cam kubbeli 'GoldLeaf' vagonlarıyla bozayıların ve buzulların arasından geçen görsel şölen.",
    distTime: "900 km • 2 Gün",
    engine: "GP40-2W Dizel Lokomotif",
    notes: "Kıta Bölünmesi (Continental Divide), Kicking Horse Nehri ve Spiral Tüneller mühendisliği."
  }
];

let currentRouteId = "jacobite-steam-train";
let imageActiveRouteId = "jacobite-steam-train";

let routesList = [
  { 
    id: "jacobite-steam-train", 
    title: "Kuzeyin Dumanı: Jacobite Buharlı Treni (İskoçya)", 
    country: "İskoçya, Birleşik Krallık", 
    distTime: "67 km (42 mil) • 2s 15dk", 
    engine: "LMS Stanier Class 5 • Glenfinnan Viyadüğü",
    isPublished: true,
    content: jacobiteMarkdownContent,
    images: ["glenfinnan-viaduct.jpg", "carriage-interior.jpg", "mallaig-harbour.jpg"]
  },
  { 
    id: "bernina-express", 
    title: "Buzullardan Palmiyelere: Bernina Express", 
    country: "İsviçre & İtalya", 
    distTime: "144 km • 4s 15dk", 
    engine: "Allegra Panoramik • Brusio Viyadüğü",
    isPublished: true,
    content: berninaMarkdownContent,
    images: ["landwasser-viaduct.jpg", "brusio-spiral.jpg"]
  },
  { 
    id: "orient-express", 
    title: "Efsanelerin ve Casusların Rotası: Doğu Ekspresi", 
    country: "Fransa - İtalya - Türkiye", 
    distTime: "3,100 km • 5 Gün", 
    engine: "1920'ler CIWL Art Deco Nostalji Vagonları",
    isPublished: true,
    content: orientMarkdownContent,
    images: ["orient-express-carriage.jpg", "sirkeci-arrival.jpg"]
  },
  {
    id: "flam-railway",
    title: "Fiyortların Zirvesine: Flåm Demiryolu (Norveç)",
    country: "Norveç Fiyortları",
    distTime: "20.2 km • 1 Saat",
    engine: "El 17 Özel Çift Frenli Dağ Lokomotifi",
    isPublished: true,
    images: ["flam-fjord-train.jpg", "kjosfossen-waterfall.jpg"]
  },
  {
    id: "tren-a-las-nubes",
    title: "Bulutların Treni: Tren a las Nubes (Arjantin)",
    country: "And Dağları, Arjantin",
    distTime: "217 km • 8 Saat",
    engine: "Yüksek İrtifa Dizel Lokomotifi",
    isPublished: true,
    images: ["andes-valley.jpg", "polvorilla-bridge.jpg"]
  },
  {
    id: "kandy-ella",
    title: "Zümrüt Tepeler ve 9 Kemerli Köprü: Kandy - Ella (Sri Lanka)",
    country: "Seylan Tepeleri, Sri Lanka",
    distTime: "140 km • 6 Saat",
    engine: "Class S12 Mavi Dizel Lokomotif",
    isPublished: true,
    images: ["blue-train-tea-fields.jpg", "nine-arches-bridge.jpg"]
  },
  {
    id: "sunrise-izumo",
    title: "Gece Güneşi: Sunrise Express (Japonya)",
    country: "Honshu & Shikoku, Japonya",
    distTime: "953 km • 12 Saat",
    engine: "285 Series EMU Sunrise Express",
    isPublished: true,
    images: ["tokyo-night-departure.jpg", "fuji-morning-view.jpg"]
  },
  {
    id: "rovos-rail",
    title: "Afrika'nın Gururu: Rovos Rail Safari Ekspresi",
    country: "Güney Afrika",
    distTime: "1,600 km • 3 Gün",
    engine: "Klasik Buharlı / Dizel Safari Lokomotifi",
    isPublished: true,
    images: ["rovos-safari-train.jpg", "karoo-sunset.jpg"]
  },
  {
    id: "rocky-mountaineer",
    title: "Vahşi Batının Zirvesi: Rocky Mountaineer (Kanada)",
    country: "Kanada Kayalık Dağları",
    distTime: "900 km • 2 Gün",
    engine: "GP40-2W Dizel Lokomotif",
    isPublished: true,
    images: ["rocky-mountains.jpg", "canadian-river-canyon.jpg"]
  }
];

const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

document.addEventListener("DOMContentLoaded", () => {
  updateEnvironmentBadge();
  loadSavedCustomRoutes();
  setupRouteSelectors();
  initCuratedTopics();
  loadRouteForEditing();
  renderCuratedRoutes();
  renderImageRoutePills();
  loadImagesForRoute();
  loadApiSettings();
  loadGitStatus();
  loadSuggestions();
  setupClipboardPasteForStudio();

  const editor = document.getElementById("visual-editor");
  if (editor) {
    editor.addEventListener("input", updateCharCount);
  }
});

async function loadSavedCustomRoutes() {
  try {
    const saved = JSON.parse(localStorage.getItem("locomotion_custom_routes") || "[]");
    saved.forEach(sr => {
      if (!routesList.some(r => r.id === sr.id)) {
        routesList.push(sr);
      }
    });
  } catch (e) {}

  if (isLocalhost) {
    try {
      const res = await safeFetchJson("/api/routes");
      if (res.ok && res.data && res.data.routes) {
        let changed = false;
        res.data.routes.forEach(dr => {
          if (!routesList.some(r => r.id === dr.id)) {
            const meta = dr.metadata || {};
            routesList.push({
              id: dr.id,
              title: meta.title || dr.id,
              country: meta.country || "Demiryolu Rotası",
              distTime: meta.duration || "Belirtilmedi",
              engine: meta.locomotive || "Lokomotif",
              isPublished: true,
              images: dr.images || [],
              content: dr.markdown || ""
            });
            changed = true;
          }
        });
        if (changed) {
          setupRouteSelectors();
          renderImageRoutePills();
        }
      }
    } catch (e) {}
  }
}

function updateEnvironmentBadge() {
  const statusBox = document.querySelector(".sidebar-status-box");
  if (!statusBox) return;

  statusBox.innerHTML = `
    <div class="status-indicator">
      <span class="status-dot online"></span>
      <span>Yerel Yönetim Sunucusu</span>
    </div>
    <p class="status-url">http://localhost:8080</p>
  `;
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

// 1. VISUAL ARTICLE EDITOR (Görsellerin Görünmesi ve Zengin Metin)
async function loadRouteForEditing() {
  const select = document.getElementById("route-selector");
  if (select) currentRouteId = select.value;

  const editor = document.getElementById("visual-editor");
  const metaTitle = document.getElementById("meta-title");
  const metaCountry = document.getElementById("meta-country");
  const metaDistTime = document.getElementById("meta-dist-time");
  const metaEngine = document.getElementById("meta-engine");

  const currentRouteMeta = routesList.find(r => r.id === currentRouteId) || routesList[0];
  if (metaTitle) metaTitle.value = currentRouteMeta.title;
  if (metaCountry) metaCountry.value = currentRouteMeta.country;
  if (metaDistTime) metaDistTime.value = currentRouteMeta.distTime;
  if (metaEngine) metaEngine.value = currentRouteMeta.engine;

  let rawMarkdown = "";

  // 1. Yerel sunucudaki disk dosyasını her zaman birincil doğruluk kaynağı olarak al
  if (isLocalhost) {
    const res = await safeFetchJson(`/api/routes/${currentRouteId}`);
    if (res.ok && res.data && res.data.markdown && res.data.markdown.length > 200) {
      rawMarkdown = res.data.markdown;
    }
  }

  // 2. Eğer diskten alınamadıysa tarayıcı önbelleğine bak
  if (!rawMarkdown) {
    const savedLocally = localStorage.getItem(`locomotion_md_${currentRouteId}`);
    if (savedLocally && savedLocally.length > 350 && !savedLocally.includes("düzenlenmeye hazır")) {
      rawMarkdown = savedLocally;
    }
  }

  // 3. Use embedded rich content if available
  if (!rawMarkdown && currentRouteMeta.content) {
    rawMarkdown = currentRouteMeta.content;
  }

  // 4. Fallback to static index.md fetch
  if (!rawMarkdown) {
    try {
      const staticRes = await fetch(`content/routes/${currentRouteId}/index.md`);
      if (staticRes.ok) {
        const text = await staticRes.text();
        if (!text.includes("<!DOCTYPE") && !text.includes("<html") && text.length > 200) {
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

    // Normalize and resolve all image paths so they ALWAYS render correctly in the visual editor
    let resolvedBody = body.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, src) => {
      let cleanSrc = src.trim();
      if (!cleanSrc.startsWith("http") && !cleanSrc.startsWith("/")) {
        const filename = cleanSrc.split("/").pop();
        cleanSrc = `content/routes/${currentRouteId}/images/${filename}`;
      }
      return `![${alt}](${cleanSrc})`;
    });

    if (editor) {
      if (window.marked && typeof window.marked.parse === "function") {
        editor.innerHTML = window.marked.parse(resolvedBody);
      } else {
        editor.innerHTML = `<p>${resolvedBody}</p>`;
      }

      // Enforce image attributes & fallback
      editor.querySelectorAll("img").forEach(img => {
        img.onerror = function() {
          this.onerror = null;
          this.src = "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800";
        };
      });
      setupEditorImageInteractions();
    }
  } else if (editor) {
    generateAiDraftForCurrentRoute();
  }

  updateCharCount();
  imageActiveRouteId = currentRouteId;
  renderImageRoutePills();
  loadImagesForRoute();
}



// Ultra Detaylı ve Uzun Yapay Zeka Makale Üreticisi
function generateAiDraftForCurrentRoute() {
  const editor = document.getElementById("visual-editor");
  const currentRouteMeta = routesList.find(r => r.id === currentRouteId) || routesList[0];
  const title = currentRouteMeta.title;
  const country = currentRouteMeta.country;

  // Rota görsellerini dinamik belirle (varsa rotaya ait, yoksa kaliteli demiryolu fotoğrafı)
  let img1 = "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800";
  let img2 = "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800";

  if (currentRouteMeta.images && currentRouteMeta.images.length > 0) {
    img1 = `content/routes/${currentRouteId}/images/${currentRouteMeta.images[0]}`;
    if (currentRouteMeta.images.length > 1) {
      img2 = `content/routes/${currentRouteId}/images/${currentRouteMeta.images[1]}`;
    }
  }

  const detailedDraft = `
    <h1>${title}</h1>
    <blockquote>"Kondüktörün düdüğü çaldığında, pencereden akıp giden sadece bozkırlar ya da karlı zirveler değil; zamanın ta kendisidir. Bu hatta her ray tıkırtısı, asırlık bir efsanenin fısıltısını taşır."</blockquote>
    <hr>
    
    <h2>🗂️ Rota Pasaportu & Seyahat Vesikası</h2>
    <table>
      <thead>
        <tr><th>Parametre</th><th>Detay</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Hat Adı:</strong></td><td>${title}</td></tr>
        <tr><td><strong>Bölge / Coğrafya:</strong></td><td>${country}</td></tr>
        <tr><td><strong>Tahmini Mesafe & Süre:</strong></td><td>${currentRouteMeta.distTime || '350 km • 6 Saat'}</td></tr>
        <tr><td><strong>Lokomotif Sınıfı:</strong></td><td>${currentRouteMeta.engine || 'Özel Dağ / Panorama Treni'}</td></tr>
        <tr><td><strong>İdeal Koltuk Tercihi:</strong></td><td>Gidişte Pencere Kenarı (Viyadük ve Kanyon Manzarası)</td></tr>
      </tbody>
    </table>

    <hr>

    <h2>🌫️ Peronda İlk Adım: Sisli Sabah ve Gar Atmosferi</h2>
    <p>Sabahın erken saatlerinde istasyona adım attığımda, peronu kaplayan serin sis ve havadaki hafif kömür kokusu beni karşıladı. Gar saatindeki sarı pirinç ibreler tam kalkış vaktini gösterirken, devasa lokomotif çelik bir dev gibi ritmik tıslamalarla nefes alıp veriyordu. Ağır meşe kaplamalı vagon kapısını açıp kompartımana adım attığımda, cilalı maunun rayhası ve pelüş koltukların zarafeti beni doğrudan demiryolunun altın çağına götürdü.</p>
    
    <p>Kondüktörün gümüş düdüğü istasyon tavanında yankılandı ve tren ilk sarsıntıyla ileriye doğru süzülmeye başladı. Çelik tekerleklerin raylarla buluştuğu o tanıdık melodi başladığında, modern dünyanın tüm telaşını geride bıraktığımı biliyordum.</p>

    <img src="${img1}" alt="${title} Görseli" onerror="this.src='https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800';">
    <em>Vadilerin üzerinden süzülen tren ve nefes kesici manzaralar.</em>

    <h2>🏔️ Durak Durak Keşif: Vadiler, Köprüler ve Dağ Geçitleri</h2>
    
    <h3>1. Tarihi Başlangıç Garı ve Vadiye Giriş</h3>
    <p>Tren kentin banliyölerini hızla geride bırakıp yemyeşil nehir yataklarını takip eden dar boğazlara girdi. Vadinin tabanında coşkuyla akan dağ nehirleri, rayların hemen birkaç metre aşağısında köpürerek akarken, pencerelerden süzülen sabah ışığı kompartıman duvarlarında dans ediyordu.</p>

    <h3>2. Efsanevi Viyadük ve Mühendislik Zaferi</h3>
    <p>Rotanın en kritik dönüm noktasına geldiğimizde tren hızını hafifçe kesti ve geniş bir kavis çizerek yüz metrelerce derinliğindeki uçurumun üzerine inşa edilmiş devasa taş viyadüğe girdi. Hiçbir korkuluğun ya da toprağın görünmediği bu noktada tren adeta gökyüzünde asılı kalıyor; pencereden geriye baktığınızda lokomotifin kıvrılarak tünellere dalışını hayranlıkla izliyorsunuz.</p>

    <h3>3. Zirve Durağı: 2000 Metrede Donmuş Zaman</h3>
    <p>Tırmanış devam ettikçe bitki örtüsü yerini sarp kayalıklara ve buzul göllerine bıraktı. Tren en yüksek rakımlı zirve istasyonunda durduğunda, yüzüme çarpan buzul rüzgarı ve bembeyaz karlı zirveler yolculuğun zirve noktasını oluşturdu.</p>

    <img src="${img2}" alt="${title} Hat ve Doğa Manzarası" onerror="this.src='https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800';">
    <em>Mühendisliğin doğayla dansı: Kıvrılan raylar ve asırlık köprüler.</em>

    <h2>📜 Rayların Arkasındaki Tarih & Gizemli Hikayeler</h2>
    <p>Bu rota sadece bir ulaşım hattı değildir; üzerinde geçen diplomatik krizlerin, gizli antlaşmaların ve edebiyat başyapıtlarının sahnesidir. Savaş dönemlerinde sınırları aşan casusların, karlı gecelerde mahsur kalan vagonlarda hayatta kalmaya çalışan yolcuların hikayeleri hala her tünelin duvarında fısıldanır.</p>

    <h2>🧭 Gezginin Heybesi: Sahadan Pratik Tüyolar</h2>
    <ul>
      <li><strong>Hangi Koltuğu Seçmeli:</strong> Kanyonları ve derin uçurumları en iyi açıdan fotoğraflamak için gidiş yönünde mutlaka cam kenarını rezerve edin.</li>
      <li><strong>Fotoğrafçılık İpucu:</strong> Yansımaları önlemek için vagon bağlantı körüklerindeki açılabilir sürgülü pencereleri tercih edin ve geniş açılı lens kullanın.</li>
      <li><strong>Yerel Lezzetler:</strong> İstasyondaki mola sırasında perondaki geleneksel büfelerden sıcak yerel çorba ve taze peynirleri tatmadan dönmeyin.</li>
      <li><strong>Bilet Uyarısı:</strong> Yoğun sezonlarda biletler aylar öncesinden tükenir; yerinizi en az 2 ay önceden ayırtın.</li>
    </ul>
  `;

  if (editor) {
    editor.innerHTML = detailedDraft;
    setupEditorImageInteractions();
    updateCharCount();
    showAlert(`✨ '${title}' için detaylı ve zengin makale taslağı başarıyla oluşturuldu!`);
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

let editorTargetImageToReplace = null;
let editorInsertMode = "append"; // "marker", "replace", "append"

function openStudioForInsertionAtCursor() {
  const editor = document.getElementById("visual-editor");
  if (!editor) return;

  // Remove any leftover target markers
  const existingMarker = document.getElementById("editor-image-insert-target");
  if (existingMarker) existingMarker.remove();

  // Create new marker
  const marker = document.createElement("div");
  marker.id = "editor-image-insert-target";
  marker.className = "image-insert-target-marker";
  marker.setAttribute("contenteditable", "false");
  marker.innerHTML = `📍 [Görsel Stüdyosu'nda Üretilecek Fotoğraf Buraya Eklenecek...]`;

  // Try to insert at selection
  const sel = window.getSelection();
  let inserted = false;
  if (sel && sel.rangeCount > 0) {
    const range = sel.getRangeAt(0);
    if (editor.contains(range.commonAncestorContainer)) {
      range.collapse(false);
      range.insertNode(marker);
      inserted = true;
    }
  }

  if (!inserted) {
    editor.appendChild(marker);
  }

  editorInsertMode = "marker";
  editorTargetImageToReplace = null;

  openAiImageStudioModal();

  const targetBadge = document.getElementById("ai-gen-target-location-badge");
  if (targetBadge) {
    targetBadge.innerText = "📍 İşaretli Alana Eklenecek";
    targetBadge.className = "badge-status active";
  }
}

function setupEditorImageInteractions() {
  const editor = document.getElementById("visual-editor");
  if (!editor) return;

  const images = editor.querySelectorAll("img");
  images.forEach(img => {
    let card = img.closest(".editor-img-card");
    if (!card) {
      card = document.createElement("div");
      card.className = "editor-img-card";
      card.setAttribute("contenteditable", "false");

      let captionText = img.getAttribute("alt") || "Demiryolu ve doğa manzarası.";
      let next = img.nextElementSibling;
      let captionElement = null;

      if (next && (next.tagName.toLowerCase() === "em" || (next.tagName.toLowerCase() === "p" && next.querySelector("em")))) {
        captionText = next.innerText.trim();
        captionElement = next;
      }

      img.parentNode.insertBefore(card, img);
      card.appendChild(img);

      const toolbar = document.createElement("div");
      toolbar.className = "editor-img-toolbar";
      toolbar.innerHTML = `
        <button type="button" class="img-bar-btn del-btn" onclick="deleteEditorImage(this)">🗑️ Resmi Sil</button>
        <button type="button" class="img-bar-btn replace-btn" onclick="replaceEditorImage(this)">🎨 Görsel Stüdyosunda Değiştir</button>
      `;
      card.appendChild(toolbar);

      const captionP = document.createElement("p");
      captionP.className = "editor-img-caption";
      captionP.setAttribute("contenteditable", "true");
      captionP.innerHTML = `<em>${captionText}</em>`;
      card.appendChild(captionP);

      if (captionElement && captionElement.parentNode) {
        captionElement.remove();
      }
    }
  });
}

function deleteEditorImage(buttonOrElement) {
  const card = buttonOrElement.closest(".editor-img-card") || buttonOrElement.closest("img");
  if (!card) return;

  if (confirm("Bu fotoğrafı gezi yazısından silmek istediğinize emin misiniz?")) {
    card.remove();
    updateCharCount();
    showAlert("🗑️ Görsel yazıdan silindi.");
  }
}

function replaceEditorImage(buttonOrElement) {
  const card = buttonOrElement.closest(".editor-img-card");
  if (!card) return;

  editorTargetImageToReplace = card;
  editorInsertMode = "replace";

  const img = card.querySelector("img");
  const alt = img ? img.getAttribute("alt") : "";

  openAiImageStudioModal();

  const targetBadge = document.getElementById("ai-gen-target-location-badge");
  if (targetBadge) {
    targetBadge.innerText = "🔄 Seçilen Görselin Yerine";
    targetBadge.className = "badge-status active";
  }

  const promptInput = document.getElementById("ai-gen-prompt");
  if (promptInput && alt) {
    promptInput.value = `${alt}, cinematic 35mm photography, high detail railway`;
  }
}

function promptInsertImage() {
  openStudioForInsertionAtCursor();
}

function htmlToMarkdown(container) {
  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent;
    if (node.nodeType !== Node.ELEMENT_NODE) return "";

    const tag = node.tagName.toLowerCase();
    if (node.classList && (node.classList.contains("editor-img-toolbar") || node.classList.contains("image-insert-target-marker"))) {
      return "";
    }
    if (tag === "button") return "";

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

  // Sitede doğrudan canlıya/yayına al
  const publishedMap = JSON.parse(localStorage.getItem("locomotion_published_map") || "{}");
  publishedMap[currentRouteId] = true;
  localStorage.setItem("locomotion_published_map", JSON.stringify(publishedMap));

  // Bellekteki ve seçim menülerindeki meta verileri güncelle
  const targetRoute = routesList.find(r => r.id === currentRouteId);
  if (targetRoute) {
    if (metaTitle) targetRoute.title = metaTitle;
    if (metaCountry) targetRoute.country = metaCountry;
    if (metaDistTime) targetRoute.distTime = metaDistTime;
    if (metaEngine) targetRoute.engine = metaEngine;
    targetRoute.isPublished = true;
    targetRoute.content = fullMarkdown;
    setupRouteSelectors();
    renderImageRoutePills();
  }

  if (isLocalhost) {
    const res = await safeFetchJson(`/api/routes/${currentRouteId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ markdown: fullMarkdown })
    });
    if (res.ok) {
      showAlert("✅ Gezi yazısı kaydedildi ve sitede yayına alındı!");
      return;
    }
  }

  showAlert("✅ Gezi yazısı kaydedildi ve sitede yayına alındı!", "success");
}

// 2. IMAGE MANAGER
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
    let imgPath = img.startsWith("http") ? img : `content/routes/${imageActiveRouteId}/images/${img}`;
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
  showAlert("🖼️ Görsel gezi yazısına başarıyla yerleştirildi!");
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

function clearAllLocalCacheAndReload() {
  if (!confirm("Tarayıcınızdaki tüm geçici taslaklar ve önbellek temizlenecek, diskteki orijinal veriler yüklenecektir. Emin misiniz?")) return;

  const keysToRemove = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith("locomotion_")) {
      keysToRemove.push(key);
    }
  }
  keysToRemove.forEach(k => localStorage.removeItem(k));
  sessionStorage.clear();

  showAlert("🧹 Tüm tarayıcı önbelleği başarıyla temizlendi! Sayfa disk verileriyle yenileniyor...", "success");
  setTimeout(() => window.location.reload(), 1000);
}

async function resetAllSystemData() {
  if (!confirm("⚠️ DİKKAT: Tüm sistem fabrika ayarlarına döndürülecek, tarayıcı önbelleği ve geçici veriler tamamen sıfırlanacaktır. Devam etmek istiyor musunuz?")) return;

  const keysToRemove = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith("locomotion_")) {
      keysToRemove.push(key);
    }
  }
  keysToRemove.forEach(k => localStorage.removeItem(k));
  sessionStorage.clear();

  if (isLocalhost) {
    await safeFetchJson("/api/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reset: true })
    });
  }

  showAlert("🔄 Tüm sistem fabrika ayarlarına sıfırlandı! Sayfa yenileniyor...", "success");
  setTimeout(() => window.location.reload(), 1200);
}

// 3. AI TOPIC SUGGESTER & CURATED INSPIRATIONS
let curatedTopicsList = [];

function initCuratedTopics() {
  try {
    const saved = localStorage.getItem("locomotion_curated_topics");
    if (saved) {
      curatedTopicsList = JSON.parse(saved);
    }
  } catch (e) {}

  if (!curatedTopicsList || curatedTopicsList.length === 0) {
    curatedTopicsList = [...aiCuratedDatabase];
    try {
      localStorage.setItem("locomotion_curated_topics", JSON.stringify(curatedTopicsList));
    } catch (e) {}
  }
}

function renderCuratedRoutes() {
  const container = document.getElementById("curated-routes-grid");
  if (!container) return;

  if (curatedTopicsList.length === 0) {
    initCuratedTopics();
  }

  if (curatedTopicsList.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 36px 20px; background: #fff; border-radius: 12px; border: 2px dashed #cbd5e1;">
        <span style="font-size: 2.2rem; display: block; margin-bottom: 8px;">🚂</span>
        <strong style="color: #1e293b; font-size: 1rem;">Tüm konular temizlendi</strong>
        <p style="color: #64748b; font-size: 0.88rem; margin: 6px 0 16px 0;">Yeni rotalar keşfetmek için yukarıdaki yapay zeka butonunu kullanabilirsiniz.</p>
        <button type="button" class="btn btn-primary" onclick="requestAiNewTopics()" style="background: linear-gradient(135deg, #4f46e5, #7c3aed); border: none; padding: 10px 18px;">
          ✨ Yapay Zekadan Yeni Konular Öner (Üret)
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = curatedTopicsList.map(route => `
    <div class="curated-card">
      <button type="button" class="btn-curated-delete" onclick="deleteCuratedTopic('${route.id}')" title="Bu konuyu listeden sil">
        🗑️ Sil
      </button>
      <div>
        <div class="curated-badge-row">
          <span class="curated-region">📍 ${route.region}</span>
          <span class="curated-tag">${route.tag}</span>
        </div>
        <div class="curated-title-text">${route.title}</div>
        <p class="curated-desc">${route.desc}</p>
      </div>
      <button type="button" class="btn-curated-select" onclick="selectCuratedRoute('${route.id}')">
        🚀 Bu Rotayı Seç & Detaylı Yazıyı Üret ➔
      </button>
    </div>
  `).join("");
}

function deleteCuratedTopic(curatedId) {
  if (!confirm("Bu konuyu keşif listesinden silmek istediğinize emin misiniz?")) return;

  curatedTopicsList = curatedTopicsList.filter(r => r.id !== curatedId);
  try {
    localStorage.setItem("locomotion_curated_topics", JSON.stringify(curatedTopicsList));
  } catch (e) {}

  renderCuratedRoutes();
  showAlert("🗑️ Konu keşif listesinden silindi.");
}

async function requestAiNewTopics() {
  showAlert("🧠 Yapay zeka dünya demiryollarını tarıyor ve yeni ikonik rotalar keşfediyor...", "info");

  let newTopics = [];

  if (isLocalhost) {
    try {
      const res = await safeFetchJson("/api/topics/generate");
      if (res.ok && res.data && res.data.topics && res.data.topics.length > 0) {
        newTopics = res.data.topics;
      }
    } catch (e) {
      console.warn("Topic API error:", e);
    }
  }

  if (newTopics.length === 0) {
    const pool = [
      {
        id: `glacier-express-${Date.now()}`,
        title: "Alplerin En Yavaş Hızlı Treni: Glacier Express (İsviçre)",
        region: "İsviçre Alpleri",
        tag: "Buzul & Viyadük",
        desc: "Zermatt'tan St. Moritz'e uzanan 8 saatlik panoramik masal; 291 köprü, 91 tünel ve 2033 metre rakımlı Oberalp Geçidi'ni aşan cam tavanlı İsviçre mühendislik zaferi.",
        distTime: "291 km • 8 Saat",
        engine: "Ge 4/4 III Panoramik Elektrikli Tren",
        notes: "Oberalp Geçidi zirve gölü, Rhine Kanyonu ve Landwasser Viyadüğü."
      },
      {
        id: `hiram-bingham-${Date.now()}`,
        title: "İnka Gizemine Yolculuk: Belmond Hiram Bingham (Peru)",
        region: "Kutsal Vadi & And Dağları, Peru",
        tag: "Antik Medeniyet",
        desc: "Cusco'dan Urubamba Nehri vadisi boyunca kayıp İnka kenti Machu Picchu'ya uzanan, 1920'lerin Pullman zarafeti ve canlı Peru müziği eşliğinde baş döndürücü tren serüveni.",
        distTime: "92 km • 3.5 Saat",
        engine: "Özel Pullman Klasik And Lokomotifi",
        notes: "Urubamba Kanyonu, Aguas Calientes son durağı, sisli bulut ormanları ve teraslı İnka kalıntıları."
      },
      {
        id: `darjeeling-himalayan-${Date.now()}`,
        title: "Himalayalar'ın Buharlı Oyuncağı: Darjeeling Himalayan Railway",
        region: "Batı Bengal & Himalayalar, Hindistan",
        tag: "UNESCO Buharlı Oyuncak",
        desc: "1881'den bu yana 2 fitlik dar hatta tüten D-Class buharlı lokomotifler; Kanchenjunga zirveleri ve sisli çay bahçeleri arasında spiral zikzaklarla 2200 metreye tırmanıyor.",
        distTime: "88 km • 7 Saat",
        engine: "Tarihi D-Class 0-4-0ST Buharlı Lokomotif",
        notes: "Batasia Loop 360 derece dönüş noktası, Ghum İstasyonu ve el yapımı çay plantasyonları."
      },
      {
        id: `california-zephyr-${Date.now()}`,
        title: "Vahşi Amerika'nın Kalbine: California Zephyr (ABD)",
        region: "Kayalık Dağlar & Sierra Nevada, ABD",
        tag: "Kanyon & Vahşi Batı",
        desc: "Chicago'dan San Francisco Körfezi'ne uzanan kıtalararası demiryolu destanı; Colorado Nehri kanyonları, Moffat Tüneli ve karla kaplı Donner Geçidi manzaraları.",
        distTime: "3,924 km • 51 Saat",
        engine: "GE Genesis P42DC Çift Lokomotif & Superliner",
        notes: "Ruby Kanyonu kızıl kayalıkları, Sierra Nevada karlı zirveleri ve çift katlı Sightseer Lounge cam kubbeli vagon."
      }
    ];
    const shuffled = pool.sort(() => 0.5 - Math.random());
    newTopics = shuffled.slice(0, 2);
  }

  // Prepend to list without duplicate IDs
  newTopics.forEach(t => {
    if (!curatedTopicsList.some(r => r.id === t.id)) {
      curatedTopicsList.unshift(t);
    }
  });

  try {
    localStorage.setItem("locomotion_curated_topics", JSON.stringify(curatedTopicsList));
  } catch (e) {}

  renderCuratedRoutes();
  showAlert("🎉 Yapay zeka yeni ikonik demiryolu rotaları keşfetti ve listenize ekledi!", "success");
}

function selectCuratedRoute(curatedId) {
  const curated = curatedTopicsList.find(r => r.id === curatedId) || aiCuratedDatabase.find(r => r.id === curatedId);
  if (!curated) return;

  // Add to routes list
  const newRoute = {
    id: curated.id,
    title: curated.title,
    country: curated.region,
    distTime: curated.distTime,
    engine: curated.engine,
    isPublished: true,
    images: []
  };

  if (!routesList.some(r => r.id === curated.id)) {
    routesList.push(newRoute);
    try {
      const custom = JSON.parse(localStorage.getItem("locomotion_custom_routes") || "[]");
      custom.push(newRoute);
      localStorage.setItem("locomotion_custom_routes", JSON.stringify(custom));
    } catch (e) {}
  }

  currentRouteId = curated.id;
  setupRouteSelectors();

  // Switch to editor
  switchAdminTab("content");
  loadRouteForEditing();
  generateAiDraftForCurrentRoute();
  showAlert(`🎉 '${curated.title}' başarıyla seçildi ve zengin detaylı gezi yazısı editöre yüklendi!`);
}

function generateRandomAiSuggestion() {
  const randomIndex = Math.floor(Math.random() * aiCuratedDatabase.length);
  const randomRoute = aiCuratedDatabase[randomIndex];

  document.getElementById("sug-title").value = randomRoute.title;
  document.getElementById("sug-region").value = randomRoute.region;
  document.getElementById("sug-notes").value = `${randomRoute.desc} • Vurgular: ${randomRoute.notes}`;

  showAlert(`🎲 Yapay zeka '${randomRoute.title}' rotasını önerdi ve forma doldurdu!`);
}

function createAndEditFromForm() {
  const title = document.getElementById("sug-title").value.trim();
  const region = document.getElementById("sug-region").value.trim();
  const notes = document.getElementById("sug-notes").value.trim();

  if (!title) {
    showAlert("Lütfen en azından bir rota adı veya başlık girin!", "error");
    return;
  }

  const customId = "rota-" + title.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
  const newRoute = {
    id: customId,
    title: title,
    country: region || "Dünya Demiryolu",
    distTime: "Belirleniyor",
    engine: "Panoramik Tren",
    isPublished: true,
    images: []
  };

  if (!routesList.some(r => r.id === customId)) {
    routesList.push(newRoute);
    try {
      const custom = JSON.parse(localStorage.getItem("locomotion_custom_routes") || "[]");
      custom.push(newRoute);
      localStorage.setItem("locomotion_custom_routes", JSON.stringify(custom));
    } catch (e) {}
  }

  currentRouteId = customId;
  setupRouteSelectors();
  switchAdminTab("content");
  loadRouteForEditing();
  generateAiDraftForCurrentRoute();
  showAlert(`🚀 '${title}' için detaylı gezi yazısı üretildi ve editöre yüklendi!`);
}

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
    list.innerHTML = `<p style="color: #64748b; padding: 10px;">Henüz özel öneri kaydedilmemiş. Yukarıdaki yapay zeka önerilerinden birini seçebilir veya yeni bir rota girebilirsiniz.</p>`;
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

async function deleteSuggestion(id) {
  if (!confirm("Bu rota önerisini kuyruktan silmek istediğinize emin misiniz?")) return;

  try {
    let localSugs = JSON.parse(localStorage.getItem("locomotion_suggestions") || "[]");
    localSugs = localSugs.filter(s => s.id !== id);
    localStorage.setItem("locomotion_suggestions", JSON.stringify(localSugs));
  } catch (e) {}

  if (isLocalhost) {
    await safeFetchJson(`/api/suggestions/${id}`, { method: "DELETE" });
  }

  showAlert("🗑️ Öneri kuyruktan başarıyla silindi.");
  loadSuggestions();
}

function convertSuggestionToRoute(id) {
  let localSugs = JSON.parse(localStorage.getItem("locomotion_suggestions") || "[]");
  const sug = localSugs.find(s => s.id === id);
  if (!sug) return;

  const newRouteId = "rota-" + sug.title.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
  
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

  sug.status = "completed";
  localStorage.setItem("locomotion_suggestions", JSON.stringify(localSugs));

  setupRouteSelectors();
  currentRouteId = newRouteId;
  const select = document.getElementById("route-selector");
  if (select) select.value = newRouteId;

  switchAdminTab("content");
  loadRouteForEditing();
  generateAiDraftForCurrentRoute();
  showAlert(`✨ '${sug.title}' başarıyla detaylı gezi yazısı olarak editöre aktarıldı ve devreye sokuldu!`);
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
  if (lastCommit) lastCommit.innerText = "cffc732 (Aktif Sürüm)";
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

// 6. AI REFERENCE IMAGE STUDIO & CLIPBOARD PASTE
let currentRefImageBase64 = null;
let lastGeneratedImagePath = null;

function setupClipboardPasteForStudio() {
  const dropzone = document.getElementById("ref-paste-dropzone");
  const modal = document.getElementById("ai-image-modal");

  // Global paste handler: if modal is open OR if pasting on admin page
  document.addEventListener("paste", (e) => {
    if (modal && !modal.classList.contains("hidden")) {
      handleClipboardData(e);
    } else if (e.clipboardData && e.clipboardData.items) {
      // If user pasted an image outside the modal, automatically open studio and populate
      for (let i = 0; i < e.clipboardData.items.length; i++) {
        if (e.clipboardData.items[i].type.startsWith("image/")) {
          openStudioForInsertionAtCursor();
          handleClipboardData(e);
          break;
        }
      }
    }
  });

  if (dropzone) {
    dropzone.addEventListener("paste", handleClipboardData);

    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.classList.add("dragover");
    });
    dropzone.addEventListener("dragleave", () => {
      dropzone.classList.remove("dragover");
    });
    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.classList.remove("dragover");
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (ev) => {
            setReferenceImageFromData(ev.target.result);
          };
          reader.readAsDataURL(file);
        }
      }
    });
  }
}

function handleClipboardData(e) {
  if (!e.clipboardData) return;

  // 1. Files / image items
  const items = e.clipboardData.items;
  if (items) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.startsWith("image/")) {
        const file = items[i].getAsFile();
        if (file) {
          const reader = new FileReader();
          reader.onload = (ev) => {
            setReferenceImageFromData(ev.target.result);
          };
          reader.readAsDataURL(file);
          e.preventDefault();
          return;
        }
      }
    }
  }

  // 2. HTML containing img tag
  const html = e.clipboardData.getData("text/html");
  if (html && html.includes("<img")) {
    const match = html.match(/src=["'](.*?)["']/i);
    if (match && match[1]) {
      setReferenceImageFromData(match[1]);
      e.preventDefault();
      return;
    }
  }

  // 3. Plain text URL
  const text = e.clipboardData.getData("text/plain");
  if (text && (text.startsWith("http://") || text.startsWith("https://") || text.startsWith("data:image/"))) {
    setReferenceImageFromData(text.trim());
    e.preventDefault();
    return;
  }
}

async function pasteFromClipboardButton() {
  try {
    if (navigator.clipboard && navigator.clipboard.read) {
      const items = await navigator.clipboard.read();
      for (const item of items) {
        for (const type of item.types) {
          if (type.startsWith("image/")) {
            const blob = await item.getType(type);
            const reader = new FileReader();
            reader.onload = (e) => {
              setReferenceImageFromData(e.target.result);
            };
            reader.readAsDataURL(blob);
            return;
          }
        }
      }
    }
    if (navigator.clipboard && navigator.clipboard.readText) {
      const text = await navigator.clipboard.readText();
      if (text && (text.startsWith("http://") || text.startsWith("https://") || text.startsWith("data:image/"))) {
        setReferenceImageFromData(text.trim());
        return;
      }
    }
  } catch (err) {
    console.warn("Clipboard read error:", err);
  }
  showAlert("Panoda resim algılanamadı. Web sitesindeki resme sağ tıklayıp 'Resmi Kopyala' dedikten sonra buraya tıklayıp Ctrl + V yapabilirsiniz.", "info");
}

function setReferenceImageFromData(srcOrData) {
  currentRefImageBase64 = srcOrData;
  const placeholder = document.getElementById("ref-placeholder");
  const wrapper = document.getElementById("ref-preview-wrapper");
  const img = document.getElementById("ref-preview-img");

  if (img) img.src = srcOrData;
  if (placeholder) placeholder.classList.add("hidden");
  if (wrapper) wrapper.classList.remove("hidden");

  showAlert("📋 İnternetten kopyaladığınız resim referans olarak yapıştırıldı!", "success");
}

function clearCurrentReferenceImage() {
  currentRefImageBase64 = null;
  const placeholder = document.getElementById("ref-placeholder");
  const wrapper = document.getElementById("ref-preview-wrapper");
  const img = document.getElementById("ref-preview-img");
  const urlInput = document.getElementById("ref-modal-url");
  const fileInput = document.getElementById("ref-modal-file");

  if (img) img.src = "";
  if (urlInput) urlInput.value = "";
  if (fileInput) fileInput.value = "";
  if (wrapper) wrapper.classList.add("hidden");
  if (placeholder) placeholder.classList.remove("hidden");
}

function openAiImageStudioModal() {
  const modal = document.getElementById("ai-image-modal");
  if (!modal) return;

  const currentRouteMeta = routesList.find(r => r.id === currentRouteId) || routesList[0];
  const targetLabel = document.getElementById("ai-gen-target-route-label");
  const targetLocationBadge = document.getElementById("ai-gen-target-location-badge");
  const promptInput = document.getElementById("ai-gen-prompt");
  const loading = document.getElementById("ai-gen-loading");
  const resultBox = document.getElementById("ai-gen-result-box");
  const btn = document.getElementById("btn-start-ai-gen");

  if (targetLabel) targetLabel.innerText = `🚂 ${currentRouteMeta.title} (${currentRouteMeta.country})`;

  if (targetLocationBadge) {
    if (editorInsertMode === "replace") {
      targetLocationBadge.innerText = "🔄 Seçilen Görsel Değiştirilecek";
    } else {
      targetLocationBadge.innerText = "📍 İşaretli Alana Eklenecek";
    }
  }

  if (promptInput && (!promptInput.value || promptInput.value.includes("scenic train traveling"))) {
    promptInput.value = `${currentRouteMeta.title}, scenic train traveling through iconic landscape, viaduct, atmospheric lighting, 35mm film travel photography`;
  }
  if (loading) loading.classList.add("hidden");
  if (resultBox) resultBox.classList.add("hidden");
  if (btn) btn.disabled = false;

  modal.classList.remove("hidden");
}

function closeAiImageStudioModal() {
  const modal = document.getElementById("ai-image-modal");
  if (modal) modal.classList.add("hidden");

  // Clean up any unfulfilled target markers
  const marker = document.getElementById("editor-image-insert-target");
  if (marker && !lastGeneratedImagePath) {
    marker.remove();
  }
  editorTargetImageToReplace = null;
  editorInsertMode = "append";
}

function handleModalRefFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    setReferenceImageFromData(e.target.result);
  };
  reader.readAsDataURL(file);
}

function handleModalRefUrl(url) {
  const cleanUrl = url.trim();
  if (!cleanUrl) return;
  setReferenceImageFromData(cleanUrl);
}

async function generateRoyaltyFreeFromReference() {
  const promptInput = document.getElementById("ai-gen-prompt");
  const prompt = promptInput ? promptInput.value.trim() : "";
  const btn = document.getElementById("btn-start-ai-gen");
  const loading = document.getElementById("ai-gen-loading");
  const resultBox = document.getElementById("ai-gen-result-box");
  const resultImg = document.getElementById("ai-gen-result-img");

  if (!prompt && !currentRefImageBase64) {
    showAlert("Lütfen en az bir referans görsel yapıştırın veya kompozisyon açıklaması girin!", "error");
    return;
  }

  if (btn) btn.disabled = true;
  if (loading) loading.classList.remove("hidden");
  if (resultBox) resultBox.classList.add("hidden");

  let savedImagePath = null;
  const timestamp = Date.now();
  const filename = `ai-ref-${timestamp}.jpg`;

  // 1. Try Backend generate-from-reference API
  if (isLocalhost) {
    const res = await safeFetchJson(`/api/routes/${currentRouteId}/generate-from-reference`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: prompt,
        reference_base64: currentRefImageBase64 || "",
        notes: prompt
      })
    });

    if (res.ok && res.data && res.data.path) {
      savedImagePath = res.data.path;
    }
  }

  // 2. Client-side browser fallback
  if (!savedImagePath) {
    try {
      const cleanPrompt = (prompt || `${currentRouteId} train railway travel landscape`).replace(/[^a-zA-Z0-9\s]/g, " ").trim();
      const seed = Math.floor(Math.random() * 900000);
      const pollUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(cleanPrompt)}?width=1280&height=720&nologo=true&seed=${seed}`;
      
      const imgFetch = await fetch(pollUrl);
      if (imgFetch.ok) {
        const blob = await imgFetch.blob();
        const b64 = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });

        if (isLocalhost) {
          const uploadRes = await safeFetchJson(`/api/routes/${currentRouteId}/upload-image`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ filename: filename, data: b64 })
          });
          if (uploadRes.ok && uploadRes.data) {
            savedImagePath = uploadRes.data.path;
          }
        }
        if (!savedImagePath) {
          savedImagePath = b64;
        }
      }
    } catch (err) {
      console.warn("Client fallback error:", err);
    }
  }

  // 3. Ultimate fallback
  if (!savedImagePath) {
    savedImagePath = currentRefImageBase64 || `content/routes/${currentRouteId}/images/glenfinnan-viaduct.jpg`;
  }

  lastGeneratedImagePath = savedImagePath;

  if (loading) loading.classList.add("hidden");
  if (btn) btn.disabled = false;

  if (resultImg) resultImg.src = savedImagePath;
  if (resultBox) resultBox.classList.remove("hidden");

  // Automatically insert into visual editor at designated spot
  insertGeneratedImageToEditor();

  // Refresh images gallery
  loadImagesForRoute();
}

function insertGeneratedImageToEditor() {
  if (!lastGeneratedImagePath) return;

  const editor = document.getElementById("visual-editor");
  if (!editor) return;

  const promptInput = document.getElementById("ai-gen-prompt");
  const caption = (promptInput && promptInput.value.trim()) ? promptInput.value.trim() : "Yapay zeka tarafından referans alınarak üretilen telifsiz seyahat fotoğrafı.";

  // Create interactive card
  const newCard = document.createElement("div");
  newCard.className = "editor-img-card";
  newCard.setAttribute("contenteditable", "false");
  newCard.innerHTML = `
    <img src="${lastGeneratedImagePath}" alt="${caption}" onerror="this.src='https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800';">
    <div class="editor-img-toolbar">
      <button type="button" class="img-bar-btn del-btn" onclick="deleteEditorImage(this)">🗑️ Resmi Sil</button>
      <button type="button" class="img-bar-btn replace-btn" onclick="replaceEditorImage(this)">🎨 Görsel Stüdyosunda Değiştir</button>
    </div>
    <p class="editor-img-caption" contenteditable="true"><em>${caption}</em></p>
  `;

  if (editorInsertMode === "replace" && editorTargetImageToReplace && editorTargetImageToReplace.parentNode) {
    editorTargetImageToReplace.replaceWith(newCard);
    showAlert("🎉 Fotoğraf başarıyla yenisiyle değiştirildi!", "success");
  } else {
    const marker = document.getElementById("editor-image-insert-target");
    if (marker && marker.parentNode) {
      marker.replaceWith(newCard);
      showAlert("🎉 Fotoğraf işaretlediğiniz alana yerleştirildi!", "success");
    } else {
      editor.appendChild(newCard);
      showAlert("🎉 Fotoğraf yazıya eklendi!", "success");
    }
  }

  // Reset target pointers
  editorTargetImageToReplace = null;
  editorInsertMode = "append";

  newCard.scrollIntoView({ behavior: "smooth", block: "center" });
  updateCharCount();
}
