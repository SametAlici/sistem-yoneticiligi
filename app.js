// Aynı github.io alan adını paylaşan diğer ders siteleriyle karışmasın diye anahtarlar "sy-" ile başlar.
const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }
};

const main = document.getElementById("main");
const nav = document.getElementById("nav");
const side = document.getElementById("side");
const scrim = document.getElementById("scrim");
const LETTERS = ["A", "B", "C", "D"];
const VIZE_WEEKS = WEEKS.filter(w => w.exam === "vize");
const FINAL_WEEKS = WEEKS.filter(w => w.exam === "final");

// Şıkları her soru için sabit ama karışık sırada göstermek (doğru cevap hep aynı harfte olmasın).
function seededOrder(n, seed) {
  const idx = [...Array(n).keys()];
  let s = seed;
  for (let i = n - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx;
}

function testLabel(i) {
  const t = TESTS[i];
  const nth = TESTS.slice(0, i + 1).filter(x => x.kind === t.kind).length;
  return (t.kind === "vize" ? "V" : "F") + nth;
}

function route() {
  const h = location.hash.replace("#", "") || "home";
  closeMenu();
  if (h.startsWith("hafta-")) renderWeek(Number(h.split("-")[1]));
  else if (h.startsWith("deneme-")) renderTest(Number(h.split("-")[1]));
  else if (h === "denemeler") renderTestList();
  else renderHome();
  renderNav(h);
  window.scrollTo(0, 0);
}

function renderNav(current) {
  const done = store.get("sy-done", []);
  const best = store.get("sy-best", {});
  const weekBtn = w => {
    const id = "hafta-" + w.id;
    return `<button data-go="${id}" class="${current === id ? "active" : ""}"><span class="num">${w.id}</span><span>${w.title}</span>${done.includes(w.id) ? '<span class="done-dot">✓</span>' : ""}</button>`;
  };
  const testBtn = (t, i) => {
    const id = "deneme-" + (i + 1);
    const b = best[i + 1];
    return `<button data-go="${id}" class="${current === id ? "active" : ""}"><span class="num">${testLabel(i)}</span><span>${t.title}</span>${b !== undefined ? `<span class="done-dot">${b}/${t.questions.length}</span>` : ""}</button>`;
  };
  let html = `<button data-go="home" class="${current === "home" ? "active" : ""}"><span class="num">⌂</span>Ana sayfa</button>`;
  html += `<div class="nav-group">Vize konuları (1–7)</div>` + VIZE_WEEKS.map(weekBtn).join("");
  html += `<div class="nav-group">Final'e eklenenler</div>` + FINAL_WEEKS.map(weekBtn).join("");
  html += `<div class="nav-group">Denemeler</div>`;
  html += `<button data-go="denemeler" class="${current === "denemeler" ? "active" : ""}"><span class="num">≡</span>Tüm denemeler</button>`;
  html += TESTS.map((t, i) => t.kind === "vize" ? testBtn(t, i) : "").join("");
  html += TESTS.map((t, i) => t.kind === "final" ? testBtn(t, i) : "").join("");
  nav.innerHTML = html;
}

function weekCards(list, done) {
  return `<div class="week-grid">${list.map(w => `
    <button class="week-card" data-go="hafta-${w.id}">
      <div class="wk">HAFTA ${w.id} · ${w.exam === "vize" ? "VİZE" : "FİNAL"} ${done.includes(w.id) ? "· ✓" : ""}</div>
      <div class="tt">${w.title}</div>
      <div class="ds">${w.short}</div>
    </button>`).join("")}</div>`;
}

function renderHome() {
  const done = store.get("sy-done", []);
  const vizeCount = TESTS.filter(t => t.kind === "vize").length;
  const finalCount = TESTS.filter(t => t.kind === "final").length;
  main.innerHTML = `
    <div class="eyebrow">BSM 441 · Sakarya Üniversitesi</div>
    <h1>Sistem Yöneticiliği çalışma rehberi</h1>
    <p class="lead">Bütün haftaların özetleri, komutlar ve tablolar. İlk 7 hafta vize konusudur; ${vizeCount} vize denemesi yalnızca onlardan sorar. ${finalCount} final denemesi bütün haftaları kapsar. Her haftayı bitirince "Bu haftayı tamamladım" de; ilerlemen bu tarayıcıda saklanır.</p>
    <div class="card"><b>İlerleme:</b> ${done.length} / ${WEEKS.length} hafta tamamlandı</div>
    <h2>Vize konuları (1–7. hafta)</h2>
    ${weekCards(VIZE_WEEKS, done)}
    <h2>Final'e eklenen konular</h2>
    ${weekCards(FINAL_WEEKS, done)}
    <div class="box tip"><span class="label">Sınavda en çok karıştırılanlar</span>
      RAID 0 şeritleme (hata toleransı yok) · RAID 1 yansıtma (kapasite yarıya) · RAID 5 parite (en az 3 disk) · DORA sırası · lease 8 gün · 169.254.x.y · MX'te küçük priority önce · PTR ters DNS · PPTP 1723 + GRE, SSTP 443 · gönüllü ↔ zorunlu tünel · RDP 3389 · IaaS en çok, SaaS en az kontrol · 3-2-1 yedekleme.
    </div>
    <p><button class="btn primary" data-go="hafta-1">1. haftadan başla →</button> <button class="btn" data-go="denemeler">Denemelere git</button></p>
  `;
}

function renderWeek(id) {
  const w = WEEKS.find(x => x.id === id);
  if (!w) return renderHome();
  const isDone = store.get("sy-done", []).includes(id);
  const prev = WEEKS.find(x => x.id === id - 1);
  const next = WEEKS.find(x => x.id === id + 1);
  main.innerHTML = `
    <div class="eyebrow">Hafta ${w.id} · ${w.exam === "vize" ? "Vize konusu" : "Final konusu"}</div>
    <h1>${w.title}</h1>
    <div class="box key"><span class="label">🧩 Haftanın özü</span>${w.principle}</div>
    ${w.body}
    <button class="btn ${isDone ? "" : "primary"} mark-done" id="markDone">${isDone ? "✓ Tamamlandı (geri al)" : "Bu haftayı tamamladım"}</button>
    <div class="pager">
      ${prev ? `<button class="btn" data-go="hafta-${prev.id}">← Hafta ${prev.id}</button>` : "<span></span>"}
      ${next ? `<button class="btn primary" data-go="hafta-${next.id}">Hafta ${next.id} →</button>` : `<button class="btn primary" data-go="denemeler">Denemelere geç →</button>`}
    </div>
  `;
  document.getElementById("markDone").onclick = () => {
    const d = store.get("sy-done", []);
    store.set("sy-done", d.includes(id) ? d.filter(x => x !== id) : [...d, id]);
    renderWeek(id);
    renderNav("hafta-" + id);
  };
}

function renderTestList() {
  const best = store.get("sy-best", {});
  const rows = kind => TESTS.map((t, i) => t.kind !== kind ? "" : `
    <div class="test-row">
      <button class="btn" data-go="deneme-${i + 1}"><b>${t.title}</b> — <span class="quiz-meta">${t.desc}</span></button>
      <span class="best">${best[i + 1] !== undefined ? "En iyi: " + best[i + 1] + "/" + t.questions.length : "—"}</span>
    </div>`).join("");
  main.innerHTML = `
    <div class="eyebrow">Denemeler</div>
    <h1>${TESTS.length} deneme, ${TESTS.reduce((s, t) => s + t.questions.length, 0)} soru</h1>
    <p class="lead">Şıkka tıkladığın anda doğru cevap ve açıklaması görünür. Test bitince puanın ve tekrar etmen gereken haftalar çıkar.</p>
    <h2>Vize denemeleri (1–7. hafta)</h2>
    <div class="test-list">${rows("vize")}</div>
    <h2>Final denemeleri (bütün haftalar)</h2>
    <div class="test-list">${rows("final")}</div>
  `;
}

function renderTest(n) {
  const t = TESTS[n - 1];
  if (!t) return renderTestList();
  const answers = {};
  const total = t.questions.length;
  const prev = TESTS[n - 2];
  const next = TESTS[n];

  main.innerHTML = `
    <div class="eyebrow">${t.kind === "vize" ? "Vize denemesi · 1–7. haftalar" : "Final denemesi · bütün haftalar"}</div>
    <h1>${t.title}</h1>
    <p class="quiz-meta">${t.desc} · ${total} soru · Her soruda tek doğru cevap var.</p>
    <div class="score-bar">
      <span class="pill" id="progress">0 / ${total} cevaplandı</span>
      <span class="pill" id="score">Doğru: 0</span>
      <button class="btn" id="resetBtn">Baştan başla</button>
    </div>
    <div id="qs"></div>
    <div id="result"></div>
    <div class="pager">
      ${prev ? `<button class="btn" data-go="deneme-${n - 1}">← ${prev.title}</button>` : `<button class="btn" data-go="denemeler">← Tüm denemeler</button>`}
      ${next ? `<button class="btn primary" data-go="deneme-${n + 1}">${next.title} →</button>` : `<button class="btn" data-go="denemeler">Tüm denemeler</button>`}
    </div>
  `;

  const qs = document.getElementById("qs");
  t.questions.forEach((q, qi) => {
    const order = seededOrder(q.o.length, n * 100 + qi + 7);
    const el = document.createElement("div");
    el.className = "q";
    el.innerHTML = `
      <div class="q-head"><span class="q-num">${qi + 1}.</span><span class="q-text"></span><span class="q-week">Hafta ${q.w}</span></div>
      <div class="opts">${order.map((oi, pos) => `<button class="opt" data-oi="${oi}"><span class="letter">${LETTERS[pos]})</span><span class="otext"></span></button>`).join("")}</div>
      <div class="explain" hidden></div>
    `;
    // Sorularda <?php gibi metinler olduğu için içerik textContent ile yazılır.
    el.querySelector(".q-text").textContent = q.q;
    el.querySelectorAll(".opt").forEach(btn => {
      btn.querySelector(".otext").textContent = q.o[Number(btn.dataset.oi)];
      btn.onclick = () => {
        if (answers[qi] !== undefined) return;
        const chosen = Number(btn.dataset.oi);
        answers[qi] = chosen;
        el.querySelectorAll(".opt").forEach(b => {
          b.disabled = true;
          const oi = Number(b.dataset.oi);
          if (oi === q.a) b.classList.add("correct");
          else if (oi === chosen) b.classList.add("wrong");
        });
        const ex = el.querySelector(".explain");
        ex.hidden = false;
        ex.innerHTML = `<b>${chosen === q.a ? "✓ Doğru." : "✗ Yanlış."}</b> <span></span>`;
        ex.querySelector("span").textContent = q.e;
        update();
      };
    });
    qs.appendChild(el);
  });

  function update() {
    const answered = Object.keys(answers).length;
    const correct = Object.entries(answers).filter(([qi, a]) => t.questions[qi].a === a).length;
    document.getElementById("progress").textContent = `${answered} / ${total} cevaplandı`;
    document.getElementById("score").textContent = `Doğru: ${correct}`;
    if (answered === total) {
      const best = store.get("sy-best", {});
      if (best[n] === undefined || correct > best[n]) { best[n] = correct; store.set("sy-best", best); }
      const wrongWeeks = [...new Set(t.questions.filter((q, i) => answers[i] !== q.a).map(q => q.w))].sort((a, b) => a - b);
      document.getElementById("result").innerHTML = `
        <div class="card result">
          <div class="big">${correct} / ${total}</div>
          <div>Puan: ${Math.round((correct / total) * 100)}</div>
          ${wrongWeeks.length ? `<p>Tekrar etmen önerilen haftalar: ${wrongWeeks.map(w => `<a href="#hafta-${w}">Hafta ${w}</a>`).join(" · ")}</p>` : "<p>Hepsi doğru, tebrikler! 🎉</p>"}
        </div>`;
      renderNav("deneme-" + n);
    }
  }

  document.getElementById("resetBtn").onclick = () => renderTest(n);
}

document.addEventListener("click", e => {
  const go = e.target.closest("[data-go]");
  if (go) { e.preventDefault(); location.hash = go.dataset.go; }
});

function closeMenu() { side.classList.remove("open"); scrim.classList.remove("show"); }
document.getElementById("menuBtn").onclick = () => { side.classList.add("open"); scrim.classList.add("show"); };
scrim.onclick = closeMenu;

document.getElementById("themeBtn").onclick = () => {
  const root = document.documentElement;
  const isDark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = isDark ? "light" : "dark";
  store.set("vm-theme", root.dataset.theme);
};

window.addEventListener("hashchange", route);
route();
