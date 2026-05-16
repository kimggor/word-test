/* ═══════════════════════════════════════════════════
   카드 데이터
═══════════════════════════════════════════════════ */
const CARDS = [
  /* ── 단어 ─────────────────────────────────── */
  {
    cat: "단어",
    word: "괄목상대(刮目相對)",
    sub: "한자성어",
    meaning:
      "눈을 비비고 다시 본다는 뜻으로,\n남의 학식이나 재주가 놀랍도록 향상됨을 이르는 말.",
    example: "<em>예시</em> : 그의 실력이 <em>괄목상대</em>할 만큼 늘었다.",
  },
  {
    cat: "단어",
    word: "낙화유수(落花流水)",
    sub: "한자성어",
    meaning:
      "떨어지는 꽃과 흐르는 물. 가는 봄의 경치, 또는 남녀 간에 서로 그리워하는 정을 비유적으로 이르는 말.",
    example: "<em>예시</em> : 세월은 <em>낙화유수</em>처럼 흘러갔다.",
  },
  {
    cat: "단어",
    word: "가렴주구(苛斂誅求)",
    sub: "한자성어",
    meaning: "조세를 가혹하게 거두어들이고 무리하게 재물을 빼앗음.",
    example: "<em>예시</em> : <em>가렴주구</em>에 백성들이 들고일어났다.",
  },
  {
    cat: "단어",
    word: "일사불란(一絲不亂)",
    sub: "한자성어",
    meaning:
      "한 오라기의 실도 흐트러지지 않는다는 뜻으로, 질서가 정연하여 조금도 흐트러짐이 없음.",
    example: "<em>예시</em> : 군인들이 <em>일사불란</em>하게 움직였다.",
  },
  {
    cat: "단어",
    word: "우왕좌왕(右往左往)",
    sub: "한자성어",
    meaning: "이리저리 왔다 갔다 하며 갈팡질팡함.",
    example: "<em>예시</em> : 화재 현장에서 사람들이 <em>우왕좌왕</em>했다.",
  },
  {
    cat: "단어",
    word: "애매하다",
    sub: "순우리말 VS 한자어 구별",
    meaning:
      "매우 억울하고 원통하다. ≠ 애매(曖昧)하다(뜻이 분명하지 않다).\n두 단어는 형태가 같지만 뜻이 전혀 다름에 주의!",
    example:
      "<em>바른 표기</em> : 죄 없이 벌을 받아 <em>애매하다</em> / 설명이 <em>애매</em>하다.",
  },
  {
    cat: "단어",
    word: "금일(今日)",
    sub: "한자어",
    meaning: '오늘. ★ "금일"은 "금일봉"처럼 쓰이기도 하나 "오늘"과 동의어.',
    example: "<em>예시</em> : <em>금일</em> 회의는 오후 3시에 시작합니다.",
  },
  {
    cat: "단어",
    word: "엄두",
    sub: "순우리말",
    meaning: "무슨 일을 하려는 마음의 움직임이나 그 시작.",
    example: "<em>예시</em> : 너무 어려워서 <em>엄두</em>도 못 냈다.",
  },

  /* ── 띄어쓰기 ─────────────────────────────── */
  {
    cat: "띄어쓰기",
    word: "할 수 있다",
    sub: "의존명사 띄어쓰기",
    meaning:
      '의존명사 "수"는 반드시 앞말과 띄어 씁니다.\n"할수있다" (✗) → "할 수 있다" (✓)',
    example:
      '<span class="wrong">할수있다</span> &nbsp;→&nbsp; <span class="right">할 수 있다 ✓</span>',
  },
  {
    cat: "띄어쓰기",
    word: "먹을 만하다",
    sub: "의존명사 띄어쓰기",
    meaning:
      '"만하다"가 형용사로 쓰일 때는 앞말에 붙여 씁니다.\n그러나 의존명사 "만"을 쓸 때는 띄어 씁니다.',
    example:
      '<span class="wrong">먹을만하다</span> → <span class="right">먹을 만하다 ✓</span>',
  },
  {
    cat: "띄어쓰기",
    word: "이것뿐이다",
    sub: "조사 붙여쓰기",
    meaning:
      '조사 "뿐"은 체언(명사·대명사) 뒤에 붙여 씁니다.\n단, 용언 뒤에 오는 "뿐"은 의존명사로 띄어 씁니다.',
    example:
      '명사 뒤: <span class="right">이것뿐이다 ✓</span><br>동사 뒤: <span class="right">웃을 뿐이다 ✓</span>',
  },
  {
    cat: "띄어쓰기",
    word: "한국어 공부하기",
    sub: "복합어 vs 구",
    meaning:
      '"공부하다"는 합성동사이므로 붙여 씁니다.\n"한국어"와 "공부하기" 사이는 띄어 씁니다.',
    example:
      '<span class="wrong">한국어공부하기</span> → <span class="right">한국어 공부하기 ✓</span>',
  },
  {
    cat: "띄어쓰기",
    word: "스물다섯 번째",
    sub: "수와 단위 띄어쓰기",
    meaning:
      '단위를 나타내는 의존명사는 띄어 씁니다.\n순서를 나타내는 "번째"도 의존명사이므로 띄어 씁니다.',
    example:
      '<span class="wrong">스물다섯번째</span> → <span class="right">스물다섯 번째 ✓</span>',
  },
  {
    cat: "띄어쓰기",
    word: "이틀간 / 열흘간",
    sub: "접미사 붙여쓰기",
    meaning:
      '"간(間)"이 접미사로 쓰일 때는 붙여 씁니다.\n단위+간, 기간+간 모두 붙여 씁니다.',
    example:
      '<span class="right">이틀간 ✓ &nbsp; 열흘간 ✓ &nbsp; 3년간 ✓</span>',
  },
  {
    cat: "띄어쓰기",
    word: "제 각각 → 제각각",
    sub: "한 단어로 굳은 표현",
    meaning:
      '"제각각"은 한 단어로 굳어진 부사입니다.\n"제 각각"으로 쓰는 것은 틀린 표기.',
    example:
      '<span class="wrong">제 각각</span> → <span class="right">제각각 ✓</span>',
  },

  /* ── 문법 ─────────────────────────────────── */
  {
    cat: "문법",
    word: "-던 vs -었던",
    sub: "어미 구별",
    meaning:
      '"-던" : 과거에 반복·지속된 일 회상 (완료 ✗)\n"-었던" : 과거에 완료된 일 회상 (완료 ✓)',
    example:
      "자주 <em>가던</em> 식당 (반복) &nbsp;|&nbsp; 한번 <em>갔던</em> 식당 (완료)",
  },
  {
    cat: "문법",
    word: "이/가 vs 은/는",
    sub: "격조사 vs 보조사",
    meaning:
      '"이/가" : 주격 조사 → 새로운 정보, 초점 강조\n"은/는" : 보조사 → 화제 제시, 대조',
    example:
      "철수<em>가</em> 왔다 (새 정보) &nbsp;|&nbsp; 철수<em>는</em> 왔다 (대조)",
  },
  {
    cat: "문법",
    word: "맞추다 vs 맞히다",
    sub: "혼동하기 쉬운 동사",
    meaning:
      '"맞추다" : 서로 비교하여 같게 함 / 주문하다\n"맞히다" : 정답 등을 정확히 알아맞힘',
    example: "답을 <em>맞히다</em> (O) &nbsp;|&nbsp; 옷을 <em>맞추다</em> (O)",
  },
  {
    cat: "문법",
    word: "능동 vs 피동",
    sub: "문장 구조",
    meaning:
      "능동문 : 주어가 스스로 행동\n피동문 : 주어가 행동을 당함 (-이·히·리·기, 되다, 받다, 당하다)",
    example:
      "능동: 고양이가 쥐를 <em>잡다</em><br>피동: 쥐가 고양이에게 <em>잡히다</em>",
  },
  {
    cat: "문법",
    word: "사동 표현",
    sub: "문장 구조",
    meaning:
      "주어가 다른 사람·사물에게 행동을 하게 함.\n단형 사동 (-이·히·리·기·우·구·추) / 장형 사동 (-게 하다)",
    example:
      "아이에게 밥을 <em>먹이다</em> &nbsp;|&nbsp; 아이가 밥을 <em>먹게 하다</em>",
  },
  {
    cat: "문법",
    word: "겹받침 발음",
    sub: "표준발음법",
    meaning:
      "겹받침이 자음 앞에 오면 두 자음 중 하나만 발음.\n넋[넉], 앉다[안따], 닭[닥], 읽다[익따]",
    example: "닭볶음 → <em>[닥뽀끔]</em> &nbsp;|&nbsp; 읽고 → <em>[일꼬]</em>",
  },
  {
    cat: "문법",
    word: "모음조화",
    sub: "국어 음운론",
    meaning:
      "양성 모음(ㅏ, ㅗ)은 양성끼리, 음성 모음(ㅓ, ㅜ 등)은 음성끼리 어울리는 현상.\n주로 의태어·의성어, 어간+어미에서 나타남.",
    example: "퐁당퐁당(양성) &nbsp;|&nbsp; 풍덩풍덩(음성)",
  },
];

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
  const MAX = 7;
  $dotNav.innerHTML = "";
  if (deck.length <= 1) return;
  const count = Math.min(deck.length, MAX);
  const activePos =
    deck.length <= MAX
      ? idx
      : Math.round((idx / (deck.length - 1)) * (MAX - 1));
  for (let i = 0; i < count; i++) {
    const d = document.createElement("div");
    d.className = "dot" + (i === activePos ? " active" : "");
    $dotNav.appendChild(d);
  }
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
