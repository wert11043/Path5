const config = window.QUIZ_CONFIG || {};
const rows = window.QUIZ_ROWS || [];
const mixedGroupLabel = config.mixedGroupLabel || "全部混合";

const FIELD_OPTIONS =
  Array.isArray(config.fieldOptions) && config.fieldOptions.length > 0
    ? config.fieldOptions
    : [{ key: "clue", label: "線索" }];

const derivedGroups = [...new Set(rows.map((row) => row.group).filter(Boolean))];
const configuredGroups =
  Array.isArray(config.groupOptions) && config.groupOptions.length > 0
    ? config.groupOptions.filter(Boolean)
    : derivedGroups;
const GROUP_OPTIONS = configuredGroups.includes(mixedGroupLabel)
  ? configuredGroups
  : [...configuredGroups, mixedGroupLabel];

const MIXED_LIMIT = config.mixedLimit || 16;

let currentGroup = config.defaultGroup || GROUP_OPTIONS[GROUP_OPTIONS.length - 1] || mixedGroupLabel;
let currentField = config.defaultField || FIELD_OPTIONS[0].key;
let pairs = [];
let matched = 0;
let errors = 0;
let selClue = null;
let selAns = null;
let answerMode = false;

const elements = {
  title: document.getElementById("pageTitle"),
  subtitle: document.getElementById("pageSubtitle"),
  answerColLabel: document.getElementById("answerColLabel"),
  answerTableHeader: document.getElementById("answerTableHeader"),
  groupChips: document.getElementById("groupChips"),
  fieldChips: document.getElementById("fieldChips"),
  clueCol: document.getElementById("clueCol"),
  answerCol: document.getElementById("answerCol"),
  statusBar: document.getElementById("statusBar"),
  progressText: document.getElementById("progressText"),
  errorText: document.getElementById("errorText"),
  quizView: document.getElementById("quizView"),
  answerView: document.getElementById("answerView"),
  answerBody: document.getElementById("answerBody"),
  fieldHeader: document.getElementById("fieldHeader"),
  toggleAnswerBtn: document.getElementById("toggleAnswerBtn"),
  resultCard: document.getElementById("resultCard"),
  resultScore: document.getElementById("resultScore"),
  resultText: document.getElementById("resultText"),
  resetBtn: document.getElementById("resetBtn"),
  playAgainBtn: document.getElementById("playAgainBtn")
};

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

function getFieldLabel() {
  return FIELD_OPTIONS.find((item) => item.key === currentField)?.label ?? currentField;
}

function buildPool() {
  let pool = rows;
  if (currentGroup !== mixedGroupLabel) {
    pool = pool.filter((row) => row.group === currentGroup);
  }

  pool = pool.filter((row) => {
    const clueValue = row[currentField];
    return typeof clueValue === "string" && clueValue.trim().length > 0 && typeof row.answer === "string" && row.answer.trim().length > 0;
  });

  if (currentGroup === mixedGroupLabel && pool.length > MIXED_LIMIT) {
    pool = shuffle(pool).slice(0, MIXED_LIMIT);
  }

  return pool.map((row, index) => ({
    id: `${row.group || "group"}-${row.answer}-${index}`,
    clue: row[currentField],
    answer: row.answer
  }));
}

function updateStats() {
  elements.progressText.textContent = `${matched} / ${pairs.length}`;
  elements.errorText.textContent = String(errors);
}

function createChip(text, isActive, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `cat-btn${isActive ? " active" : ""}`;
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}

function renderFilters() {
  elements.groupChips.innerHTML = "";
  GROUP_OPTIONS.forEach((group) => {
    elements.groupChips.appendChild(
      createChip(group, group === currentGroup, () => {
        currentGroup = group;
        hideAnswers();
        startGame();
      })
    );
  });

  elements.fieldChips.innerHTML = "";
  FIELD_OPTIONS.forEach((field) => {
    elements.fieldChips.appendChild(
      createChip(field.label, field.key === currentField, () => {
        currentField = field.key;
        hideAnswers();
        startGame();
      })
    );
  });
}

function makeTile(text, id, type) {
  const tile = document.createElement("button");
  tile.type = "button";
  tile.className = "tile";
  tile.textContent = text;
  tile.dataset.id = id;
  tile.dataset.type = type;
  tile.addEventListener("click", () => onTile(tile));
  return tile;
}

function renderBoard() {
  const shuffledClues = shuffle(pairs.map((pair) => ({ id: pair.id, text: pair.clue })));
  const shuffledAnswers = shuffle(pairs.map((pair) => ({ id: pair.id, text: pair.answer })));
  elements.clueCol.innerHTML = "";
  elements.answerCol.innerHTML = "";
  shuffledClues.forEach((item) => elements.clueCol.appendChild(makeTile(item.text, item.id, "clue")));
  shuffledAnswers.forEach((item) => elements.answerCol.appendChild(makeTile(item.text, item.id, "answer")));
}

function clearSelected(type) {
  document.querySelectorAll(`.tile[data-type="${type}"].selected`).forEach((tile) => {
    tile.classList.remove("selected");
  });
}

function onTile(tile) {
  if (tile.classList.contains("matched") || tile.classList.contains("flashing")) {
    return;
  }

  if (tile.dataset.type === "clue") {
    clearSelected("clue");
    tile.classList.add("selected");
    selClue = tile;
  } else {
    clearSelected("answer");
    tile.classList.add("selected");
    selAns = tile;
  }

  if (selClue && selAns) {
    tryMatch();
  }
}

function tryMatch() {
  const clueTile = selClue;
  const answerTile = selAns;
  selClue = null;
  selAns = null;

  if (clueTile.dataset.id === answerTile.dataset.id) {
    clueTile.classList.remove("selected");
    answerTile.classList.remove("selected");
    clueTile.classList.add("matched");
    answerTile.classList.add("matched");
    matched += 1;
    updateStats();
    if (matched === pairs.length) {
      window.setTimeout(showResult, 320);
    }
    return;
  }

  errors += 1;
  clueTile.classList.remove("selected");
  answerTile.classList.remove("selected");
  clueTile.classList.add("flashing");
  answerTile.classList.add("flashing");
  updateStats();
  window.setTimeout(() => {
    clueTile.classList.remove("flashing");
    answerTile.classList.remove("flashing");
  }, 400);
}

function showResult() {
  const total = pairs.length;
  const pct = Math.round((total / ((total + errors) || 1)) * 100);
  elements.resultScore.textContent = `${pct}%`;
  elements.resultScore.className = `big ${pct === 100 ? "perfect" : pct >= 70 ? "good" : "bad"}`;

  if (errors === 0) {
    elements.resultText.textContent = "這輪完全答對，可以直接切下一組。";
  } else if (pct >= 70) {
    elements.resultText.textContent = `共 ${total} 題，錯 ${errors} 次，再刷一次就會更穩。`;
  } else {
    elements.resultText.textContent = `共 ${total} 題，錯 ${errors} 次，建議先看顯示答案再回來配對。`;
  }

  elements.resultCard.classList.add("show");
}

function renderAnswers() {
  elements.answerBody.innerHTML = "";
  elements.fieldHeader.textContent = getFieldLabel();

  if (pairs.length === 0) {
    const emptyRow = document.createElement("tr");
    const emptyCell = document.createElement("td");
    emptyCell.colSpan = 2;
    emptyCell.textContent = "目前這個欄位沒有可顯示的資料。";
    emptyRow.appendChild(emptyCell);
    elements.answerBody.appendChild(emptyRow);
    return;
  }

  pairs.forEach((pair) => {
    const row = document.createElement("tr");
    const clueCell = document.createElement("td");
    const answerCell = document.createElement("td");
    clueCell.textContent = pair.clue;
    answerCell.textContent = pair.answer;
    row.appendChild(clueCell);
    row.appendChild(answerCell);
    elements.answerBody.appendChild(row);
  });
}

function setAnswerMode(nextMode) {
  answerMode = nextMode;
  if (answerMode) {
    renderAnswers();
  }

  elements.quizView.classList.toggle("hidden", answerMode);
  elements.statusBar.classList.toggle("hidden", answerMode);
  elements.answerView.classList.toggle("hidden", !answerMode);
  elements.resultCard.classList.remove("show");
  elements.toggleAnswerBtn.textContent = answerMode ? "返回配對" : "顯示答案";
  elements.toggleAnswerBtn.setAttribute("aria-pressed", answerMode ? "true" : "false");

  if (answerMode) {
    elements.answerView.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function showAnswers() { setAnswerMode(true); }
function hideAnswers() { setAnswerMode(false); }

function startGame() {
  pairs = buildPool();
  matched = 0;
  errors = 0;
  selClue = null;
  selAns = null;
  elements.resultCard.classList.remove("show");
  renderFilters();
  renderBoard();
  updateStats();
}

function applyConfig() {
  const title = config.title || "配合題網站模板";
  const subtitle = config.subtitle || "Matching Quiz Template，點左欄線索，再點右欄答案完成配對";
  const answerLabel = config.answerLabel || "答案";

  document.title = title;
  elements.title.textContent = title;
  elements.subtitle.textContent = subtitle;
  elements.answerColLabel.textContent = answerLabel;
  elements.answerTableHeader.textContent = answerLabel;
}

elements.resetBtn.addEventListener("click", () => { hideAnswers(); startGame(); });
elements.playAgainBtn.addEventListener("click", () => { hideAnswers(); startGame(); });
elements.toggleAnswerBtn.addEventListener("click", () => {
  if (answerMode) { hideAnswers(); return; }
  showAnswers();
});

applyConfig();
startGame();
