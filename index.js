/* ═══════════════════════════════════════════════════
   상태
═══════════════════════════════════════════════════ */
let deck = [],
  idx = 0,
  isFlipped = false,
  activeCat = "all",
  starred = new Set();

/* ═══════════════════════════════════════════════════
   DOM
═══════════════════════════════════════════════════ */
const $badge = document.getElementById("cardBadge");
const $badgeBack = document.getElementById("cardBadgeBack");
const $word = document.getElementById("cardWord");
const $sub = document.getElementById("cardSub");
const $meaning = document.getElementById("cardMeaning");
const $example = document.getElementById("cardExample");
const $inner = document.getElementById("cardInner");
const $viewport = document.getElementById("cardViewport");
const $fill = document.getElementById("progressFill");
const $ptext = document.getElementById("progressText");
const $dotNav = document.getElementById("dotNav");
const $stage = document.getElementById("stage");
const $complete = document.getElementById("completeScreen");
const $toast = document.getElementById("toast");
const $btnMark = document.getElementById("btnMark");

/* ═══════════════════════════════════════════════════
   덱 구성
═══════════════════════════════════════════════════ */
function buildDeck(cat, shuffle = false) {
  let arr = cat === "all" ? [...CARDS] : CARDS.filter((c) => c.cat === cat);
  if (shuffle) arr = arr.sort(() => Math.random() - 0.5);
  deck = arr;
  idx = 0;
  resetFlip();
  renderCard();
  renderDots();
  renderProgress();
  $stage.querySelector(".card-viewport").style.display = "";
  $complete.classList.remove("visible");
}

/* ═══════════════════════════════════════════════════
   카드 렌더
═══════════════════════════════════════════════════ */
function renderCard() {
  const c = deck[idx];
  $badge.textContent = $badgeBack.textContent = c.cat;
  $word.textContent = c.word;
  $sub.textContent = c.sub || "";
  $meaning.innerHTML = c.meaning.replace(/\n/g, "<br>");
  $example.innerHTML = c.example || "";
  $btnMark.style.color = starred.has(idx) ? "var(--gold)" : "";
  renderProgress();
  renderDots();
}

function renderProgress() {
  const p = deck.length ? (((idx + 1) / deck.length) * 100).toFixed(0) : 0;
  $fill.style.width = p + "%";
  $ptext.textContent = `${idx + 1} / ${deck.length}`;
}

function renderDots() {
  $dotNav.innerHTML = "";
  if (deck.length <= 1) return;

  deck.forEach((_, i) => {
    const d = document.createElement("div");
    d.className = "dot" + (i === idx ? " active" : "");
    d.addEventListener("click", () => {
      if (i === idx) return;
      const dir = i > idx ? "slide-left" : "slide-right";
      resetFlip();
      idx = i;
      animSlide(dir);
      renderCard();
    });
    $dotNav.appendChild(d);
  });
}

/* ═══════════════════════════════════════════════════
   이동
═══════════════════════════════════════════════════ */
function go(dir) {
  // dir: 1(다음) | -1(이전)
  const next = idx + dir;
  if (next < 0 || next >= deck.length) {
    if (dir === 1 && next >= deck.length) showComplete();
    return;
  }
  resetFlip();
  idx = next;
  animSlide(dir === 1 ? "slide-left" : "slide-right");
  renderCard();
}

function animSlide(cls) {
  $viewport.classList.remove("slide-left", "slide-right");
  void $viewport.offsetWidth;
  $viewport.classList.add(cls);
  $inner.addEventListener(
    "animationend",
    () => $viewport.classList.remove(cls),
    { once: true },
  );
}

function resetFlip() {
  isFlipped = false;
  $inner.classList.remove("flipped");
}

function flipCard() {
  isFlipped = !isFlipped;
  $inner.classList.toggle("flipped", isFlipped);
}

function showComplete() {
  $viewport.style.display = "none";
  $complete.classList.add("visible");
  $fill.style.width = "100%";
}

/* ═══════════════════════════════════════════════════
   토스트
═══════════════════════════════════════════════════ */
let _toastT;
function showToast(msg) {
  $toast.textContent = msg;
  $toast.classList.add("show");
  clearTimeout(_toastT);
  _toastT = setTimeout(() => $toast.classList.remove("show"), 2000);
}

/* ═══════════════════════════════════════════════════
   이벤트 — 버튼
═══════════════════════════════════════════════════ */
document.getElementById("btnPrev").addEventListener("click", () => go(-1));
document.getElementById("btnNext").addEventListener("click", () => go(1));
$inner.addEventListener("click", flipCard);

document.getElementById("btnShuffle").addEventListener("click", () => {
  buildDeck(activeCat, true);
  showToast("카드를 섞었어요!");
});

document
  .getElementById("btnRestart")
  .addEventListener("click", () => buildDeck(activeCat));

$btnMark.addEventListener("click", () => {
  if (starred.has(idx)) {
    starred.delete(idx);
    showToast("즐겨찾기 해제");
  } else {
    starred.add(idx);
    showToast("즐겨찾기 추가 ⭐");
  }
  $btnMark.style.color = starred.has(idx) ? "var(--gold)" : "";
});

document.getElementById("btnSkip").addEventListener("click", () => {
  go(1);
  showToast("건너뛰었어요");
});

/* ─── 탭 ── */
document.getElementById("tabsWrap").addEventListener("click", (e) => {
  const t = e.target.closest(".tab");
  if (!t) return;
  document
    .querySelectorAll(".tab")
    .forEach((el) => el.classList.remove("active"));
  t.classList.add("active");
  activeCat = t.dataset.cat;
  starred.clear();
  buildDeck(activeCat);
});

/* ─── 키보드 ── */
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") go(-1);
  if (e.key === "ArrowRight") go(1);
  if (e.key === " ") {
    e.preventDefault();
    flipCard();
  }
});

/* ─── 터치/마우스 스와이프 ── */
let _touchX = null,
  _mouseX = null,
  _mouseDown = false;
const THRESHOLD = 50;

$viewport.addEventListener(
  "touchstart",
  (e) => {
    _touchX = e.changedTouches[0].clientX;
  },
  { passive: true },
);
$viewport.addEventListener("touchend", (e) => {
  if (_touchX === null) return;
  const dx = e.changedTouches[0].clientX - _touchX;
  if (Math.abs(dx) > THRESHOLD) dx < 0 ? go(1) : go(-1);
  _touchX = null;
});

$viewport.addEventListener("mousedown", (e) => {
  _mouseX = e.clientX;
  _mouseDown = true;
});
$viewport.addEventListener("mouseup", (e) => {
  if (!_mouseDown) return;
  const dx = e.clientX - _mouseX;
  if (Math.abs(dx) > THRESHOLD) {
    dx < 0 ? go(1) : go(-1);
  } else flipCard();
  _mouseDown = false;
});
$viewport.addEventListener("mouseleave", () => {
  _mouseDown = false;
});

/* ═══════════════════════════════════════════════════
   초기화
═══════════════════════════════════════════════════ */
buildDeck("all");
