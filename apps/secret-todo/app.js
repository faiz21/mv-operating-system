const PHASES = [
  {
    id: "comm",
    label: "Communication protocol",
    color: "teal",
    tasks: [
      { id: "c1", title: "Requirement Brief template", sub: "MV → Consultant. Fields: situation, pain point, business impact, urgency, constraints, LOB.", agency: "mv", prompt: "Design the Requirement Brief template for MV-OS" },
      { id: "c2", title: "Solution Brief template", sub: "Consultant → MV. Fields: problem statement, recommended workflow, rationale, implementation steps, expected outcome.", agency: "con", prompt: "Design the Solution Brief template for MV-OS" },
      { id: "c3", title: "Audit Finding template", sub: "Auditor → Consultant. Fields: finding ID, severity, deviation, reference workflow, root cause, recurrence flag.", agency: "aud", prompt: "Design the Audit Finding template for MV-OS" },
      { id: "c4", title: "Escalation Request template", sub: "Any agency → Owner. Fields: trigger reason, options considered, recommendation, decision required.", agency: "all", prompt: "Design the Escalation Request template for MV-OS" },
      { id: "c5", title: "Execution Log format", sub: "MV → Auditor. Checkpoint-based logging structure for project execution trail.", agency: "mv", prompt: "Design the Execution Log format for MV-OS" },
      { id: "c6", title: "Cross-LOB coordination protocol", sub: "How projects spanning Consulting + Software + Automation SI get owned and coordinated.", agency: "all", prompt: "Design the cross-LOB coordination protocol for MV-OS" },
    ],
  },
  {
    id: "skills",
    label: "Skills standard",
    color: "teal",
    tasks: [
      { id: "s1", title: "Audit severity classification system", sub: "Criteria for Critical / Major / Minor / Observation — what qualifies each level per LOB.", agency: "aud", prompt: "Design the audit severity classification system for MV-OS" },
      { id: "s2", title: "Workflow change approval thresholds", sub: "What makes a workflow change Major vs Minor? Who approves each type?", agency: "con", prompt: "Define workflow change approval thresholds for MV-OS" },
      { id: "s3", title: "Consulting LOB skill standards", sub: "Deliverable quality standards, feasibility study format, lean workshop SOP.", agency: "mv", prompt: "Define skill and deliverable standards for Machine Vision Consulting LOB" },
      { id: "s4", title: "Software Dev LOB skill standards", sub: "Code review criteria, reusable service guidelines, smart manufacturing solution architecture standards.", agency: "mv", prompt: "Define skill and deliverable standards for Machine Vision Software Development LOB" },
      { id: "s5", title: "Automation SI LOB skill standards", sub: "PLC/SCADA naming conventions, electrical design checklist, commissioning SOP.", agency: "mv", prompt: "Define skill and deliverable standards for Machine Vision Automation SI LOB" },
    ],
  },
  {
    id: "memory",
    label: "Memory & context",
    color: "purple",
    tasks: [
      { id: "m1", title: "Fill in human team roster", sub: "Add names and roles to the Team Structure table in the project instructions.", agency: "all", prompt: "Help me fill in the MV-OS human team roster" },
      { id: "m2", title: "Owner reporting cadence", sub: "How often does the Owner receive an Audit Report? What format and scope?", agency: "aud", prompt: "Design the Owner reporting cadence and format for MV-OS" },
      { id: "m3", title: "Workflow library structure", sub: "Where approved SOPs live, how they are versioned, and how agents reference them.", agency: "con", prompt: "Design the workflow library structure for MV-OS" },
      { id: "m4", title: "Project memory conventions", sub: "Standard format for [OPEN ITEM] tracking, version labeling, and session handoff notes.", agency: "all", prompt: "Define project memory and session handoff conventions for MV-OS" },
    ],
  },
  {
    id: "orgs",
    label: "Organization charts",
    color: "purple",
    tasks: [
      { id: "o1", title: "Machine Vision org chart", sub: "Internal structure: Owner, LOB leads, team members by domain. Shows reporting lines.", agency: "mv", prompt: "Build the Machine Vision internal org chart for MV-OS" },
      { id: "o2", title: "Consultant agency structure", sub: "Who designs, who reviews, how workflow decisions are made internally.", agency: "con", prompt: "Design The Consultant agency internal structure for MV-OS" },
      { id: "o3", title: "Auditor agency structure", sub: "Who audits which LOB, how findings are reviewed before issuance, escalation path.", agency: "aud", prompt: "Design The Auditor agency internal structure for MV-OS" },
      { id: "o4", title: "Cross-agency authority map", sub: "Single diagram showing all three agencies + Owner with authority lines and document flows.", agency: "all", prompt: "Build the cross-agency authority map for MV-OS" },
    ],
  },
  {
    id: "agents",
    label: "Agent architecture",
    color: "amber",
    tasks: [
      { id: "a1", title: "Machine Vision orchestrator design", sub: "AI agent sub-architecture for execution, project tracking, client comms across 3 LOBs.", agency: "mv", prompt: "Design the Machine Vision AI orchestrator sub-architecture for MV-OS" },
      { id: "a2", title: "Consultant orchestrator design", sub: "AI agent for workflow design, process analysis, SOP authoring, knowledge synthesis.", agency: "con", prompt: "Design The Consultant AI orchestrator sub-architecture for MV-OS" },
      { id: "a3", title: "Auditor orchestrator design", sub: "AI agent for compliance checking, deviation detection, finding issuance, report generation.", agency: "aud", prompt: "Design The Auditor AI orchestrator sub-architecture for MV-OS" },
      { id: "a4", title: "Inter-agent communication spec", sub: "How the three orchestrators pass documents to each other. Format, triggers, acknowledgement.", agency: "all", prompt: "Design the inter-agent communication specification for MV-OS orchestrators" },
      { id: "a5", title: "Human-in-the-loop integration points", sub: "Where and how human team members review, approve, or override AI agent outputs.", agency: "all", prompt: "Design the human-in-the-loop integration points for MV-OS AI agents" },
    ],
  },
  {
    id: "ui",
    label: "UI interface",
    color: "gray",
    tasks: [
      { id: "u1", title: "MV-OS owner dashboard", sub: "Owner-facing view: agency status, open findings, recent briefs, escalation queue.", agency: "all", prompt: "Design the MV-OS owner dashboard UI concept" },
      { id: "u2", title: "Requirement Brief submission UI", sub: "Form for MV team to raise a new requirement and send it to The Consultant.", agency: "mv", prompt: "Design the Requirement Brief submission UI for MV-OS" },
      { id: "u3", title: "Audit finding review UI", sub: "Auditor-facing interface for logging deviations, setting severity, routing to Consultant.", agency: "aud", prompt: "Design the Audit Finding review UI for MV-OS" },
      { id: "u4", title: "Workflow library browser", sub: "Interface for browsing, versioning, and referencing approved SOPs and workflows.", agency: "con", prompt: "Design the workflow library browser UI for MV-OS" },
      { id: "u5", title: "Mobile status view", sub: "Lightweight view for team members on-site to check current project status and open items.", agency: "mv", prompt: "Design the mobile status view UI for MV-OS field team members" },
    ],
  },
];

const STORAGE_KEY = "mvos-standard-workspace-v2";
const LOCK_KEY = "mvos-secret-tracker-lock-v1";
const STATUS_CYCLE = { todo: "inprog", inprog: "done", done: "todo" };
const AGENCY_LABELS = { mv: "Machine Vision", con: "Consultant", aud: "Auditor", all: "All agencies" };
const PHASE_COLORS = {
  teal: { accent: "#1D9E75", light: "#E1F5EE", text: "#0F6E56" },
  purple: { accent: "#534AB7", light: "#EEEDFE", text: "#3C3489" },
  amber: { accent: "#BA7517", light: "#FAEEDA", text: "#633806" },
  gray: { accent: "#888780", light: "#F1EFE8", text: "#5F5E5A" },
};

const PAGES = {
  home: { title: "Home", section: "Views", color: "teal", type: "native", related: ["tracker", "blueprint", "scope"] },
  tracker: { title: "Tracker", section: "Views", color: "purple", type: "native", related: ["blueprint", "skills", "solution-briefs"] },
  blueprint: { title: "Blueprint", section: "Wiki", color: "purple", type: "native", related: ["scope", "roster", "skills"] },
  scope: { title: "Consultant scope of work", section: "Wiki", color: "teal", type: "iframe", src: "../company-wiki-draft/Consultant%20Scope%20of%20Work.html", related: ["roster", "skills", "solution-briefs"] },
  roster: { title: "Agent roster", section: "Wiki", color: "blue", type: "iframe", src: "../company-wiki-draft/Consultant%20Agent%20Roster.html", related: ["scope", "skills", "solution-briefs"] },
  skills: { title: "Skills registry", section: "Wiki", color: "amber", type: "iframe", src: "../company-wiki-draft/Consultant%20Skills%20Registry%20-%20Claude.html", related: ["roster", "scope", "tracker"] },
  "solution-briefs": { title: "Solution Brief system", section: "Wiki", color: "gray", type: "iframe", src: "../company-wiki-draft/Consultant%20Agent%20Brief.html", related: ["scope", "skills", "tracker"] },
};

const state = {
  page: "home",
  statuses: {},
  collapsed: {},
  filter: "all",
  search: "",
  phaseFilter: "all",
  copyNote: "",
  lockEnabled: false,
  unlocked: true,
  navSearch: "",
};

bootstrap();

function bootstrap() { loadState(); render(); }
function allTasks() { return PHASES.flatMap((phase) => phase.tasks.map((task) => ({ ...task, phaseId: phase.id, phaseLabel: phase.label, phaseColor: phase.color }))); }
function buildInitialStatuses() { const init = {}; allTasks().forEach((task) => { init[task.id] = "todo"; }); return init; }
function safeParse(value, fallback) { try { return value ? JSON.parse(value) : fallback; } catch { return fallback; } }
function loadState() {
  const stored = safeParse(localStorage.getItem(STORAGE_KEY), {});
  state.statuses = { ...buildInitialStatuses(), ...(stored.statuses || {}) };
  state.collapsed = stored.collapsed || {};
  state.filter = stored.filter || "all";
  state.search = stored.search || "";
  state.phaseFilter = stored.phaseFilter || "all";
  state.page = stored.page || "home";
  state.navSearch = stored.navSearch || "";
  const lock = safeParse(localStorage.getItem(LOCK_KEY), null);
  state.lockEnabled = Boolean(lock?.enabled && lock?.pin);
  state.unlocked = !state.lockEnabled;
}
function persist() { localStorage.setItem(STORAGE_KEY, JSON.stringify({ statuses: state.statuses, collapsed: state.collapsed, filter: state.filter, search: state.search, phaseFilter: state.phaseFilter, page: state.page, navSearch: state.navSearch })); }
function cycleStatus(id) { const current = state.statuses[id] || "todo"; state.statuses[id] = STATUS_CYCLE[current]; persist(); render(); }
function setFilter(value) { state.filter = value; persist(); render(); }
function setPhaseFilter(value) { state.phaseFilter = value; persist(); render(); }
function setSearch(value) { state.search = value; persist(); render(); }
function setNavSearch(value) { state.navSearch = value; persist(); render(); }
function setPage(value) { state.page = value; persist(); render(); }
function toggleCollapse(id) { state.collapsed[id] = !state.collapsed[id]; persist(); render(); }
function addCustomTask(form) {
  const title = form.title.value.trim(); const sub = form.sub.value.trim(); const phaseId = form.phase.value; const agency = form.agency.value; if (!title) return;
  const phase = PHASES.find((item) => item.id === phaseId); if (!phase) return;
  const task = { id: `x-${Date.now()}`, title, sub: sub || "Private note", agency, prompt: title };
  phase.tasks.unshift(task); state.statuses[task.id] = "todo"; persist(); form.reset(); render();
}
function copyPrompt(prompt) { navigator.clipboard.writeText(prompt).then(() => { state.copyNote = "Prompt copied."; render(); window.setTimeout(() => { state.copyNote = ""; render(); }, 1400); }, () => { state.copyNote = "Copy failed."; render(); }); }
function exportData() { const payload = { phases: PHASES, statuses: state.statuses, exportedAt: new Date().toISOString() }; const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }); const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = "workspace-export.json"; a.click(); URL.revokeObjectURL(url); }
function importData(file) {
  if (!file) return; const reader = new FileReader(); reader.onload = () => { try { const parsed = JSON.parse(String(reader.result || "{}")); if (parsed.statuses && typeof parsed.statuses === "object") { state.statuses = { ...buildInitialStatuses(), ...parsed.statuses }; persist(); render(); } } catch { state.copyNote = "Import failed."; render(); } }; reader.readAsText(file);
}
function saveLock(pin) { localStorage.setItem(LOCK_KEY, JSON.stringify({ enabled: true, pin })); state.lockEnabled = true; state.unlocked = true; }
function disableLock() { localStorage.removeItem(LOCK_KEY); state.lockEnabled = false; state.unlocked = true; render(); }
function tryUnlock(pin) { const lock = safeParse(localStorage.getItem(LOCK_KEY), null); if (!lock?.pin || lock.pin === pin) { state.unlocked = true; render(); return true; } return false; }
function getVisiblePhases() {
  const query = state.search.trim().toLowerCase();
  return PHASES.map((phase) => ({ ...phase, visibleTasks: phase.tasks.filter((task) => {
    const status = state.statuses[task.id] || "todo";
    return (state.filter === "all" || status === state.filter) && (state.phaseFilter === "all" || phase.id === state.phaseFilter) && (!query || `${task.title} ${task.sub} ${task.prompt}`.toLowerCase().includes(query));
  }) })).filter((phase) => phase.visibleTasks.length > 0);
}
function calcSummary() { const tasks = allTasks(); const total = tasks.length; const done = tasks.filter((task) => state.statuses[task.id] === "done").length; const inprog = tasks.filter((task) => state.statuses[task.id] === "inprog").length; const todo = total - done - inprog; const pct = total ? Math.round((done / total) * 100) : 0; return { total, done, inprog, todo, pct }; }
function getFilteredPages() { const q = state.navSearch.trim().toLowerCase(); return Object.entries(PAGES).filter(([, page]) => !q || page.title.toLowerCase().includes(q) || page.section.toLowerCase().includes(q)); }

function render() {
  const app = document.getElementById("app"); if (!app) return;
  if (state.lockEnabled && !state.unlocked) { app.innerHTML = lockTemplate(); bindLockEvents(); return; }
  const page = PAGES[state.page];
  app.innerHTML = `
    <div class="shell">
      <aside class="leftbar">
        <div class="brand"><h1>MV-OS Workspace</h1><p class="small">Preserve-first combined app</p></div>
        <div class="nav-group"><p class="nav-label">Search</p><input id="navSearch" class="search" type="search" placeholder="Find page..." value="${escapeHtml(state.navSearch)}" /></div>
        ${renderNav()}
      </aside>
      <section class="main">
        <div class="topbar">
          <div class="title-wrap"><h2>${page.title}</h2><p>Unified shell · original pages preserved</p></div>
          <div class="toolbar">
            <button id="exportBtn" class="btn btn-ghost">Export</button>
            <label class="btn btn-ghost" for="importFile">Import</label>
            <input id="importFile" class="hidden" type="file" accept="application/json" />
            ${state.lockEnabled ? '<button id="lockToggle" class="btn btn-ghost">Disable PIN</button>' : '<button id="lockToggle" class="btn btn-primary">Set PIN</button>'}
          </div>
        </div>
        <div class="page">${renderPage()}</div>
      </section>
      <aside class="rightbar">
        <div class="panel"><h3>Related pages</h3><div class="link-list">${page.related.map((id) => `<button class="link-btn" data-page="${id}">${PAGES[id].title}</button>`).join("")}</div></div>
        <div class="panel" style="margin-top:12px;"><h3>Preservation rule</h3><p class="muted small">Original pasted pages are now embedded directly for scope, roster, skills, and Solution Brief system. That keeps their exact layout language instead of flattening them.</p></div>
        ${state.page !== "tracker" ? `<div class="panel" style="margin-top:12px;">${renderMiniTracker()}</div>` : ""}
      </aside>
    </div>`;
  bindEvents();
}

function renderNav() {
  const grouped = {};
  for (const [id, page] of getFilteredPages()) { if (!grouped[page.section]) grouped[page.section] = []; grouped[page.section].push([id, page]); }
  return Object.entries(grouped).map(([section, items]) => `<div class="nav-group"><p class="nav-label">${section}</p>${items.map(([id, page]) => `<button class="nav-item ${state.page === id ? "active" : ""}" data-page="${id}"><span class="dot ${page.color}"></span><span>${page.title}</span></button>`).join("")}</div>`).join("");
}

function renderPage() {
  const page = PAGES[state.page];
  if (page.type === "iframe") return `<div class="card" style="padding:0;overflow:hidden;"><iframe src="${page.src}" style="width:100%;height:calc(100vh - 150px);border:0;background:white;" title="${escapeHtml(page.title)}"></iframe></div>`;
  switch (state.page) {
    case "home": return renderHomePage();
    case "tracker": return renderTrackerPage();
    case "blueprint": return renderBlueprintPage();
    default: return `<div class="empty">Missing page.</div>`;
  }
}

function renderHomePage() {
  const s = calcSummary();
  return `
    <div class="hero">
      <div class="card">
        <h3>Preserve first, integrate second</h3>
        <p class="muted">This version stops rewriting your good pages into generic summaries. Scope, roster, skills, and Solution Brief pages now render directly from the original files inside one shell.</p>
        <div class="link-list" style="margin-top:12px;">
          <button class="link-btn" data-page="scope">Open original Consultant scope page</button>
          <button class="link-btn" data-page="skills">Open original skills page</button>
          <button class="link-btn" data-page="solution-briefs">Open original Solution Brief page</button>
        </div>
      </div>
      <div class="card">
        <h3>Workspace snapshot</h3>
        <div class="stat-grid">
          <div class="stat"><strong>${Object.keys(PAGES).length}</strong><span class="muted small">Pages</span></div>
          <div class="stat"><strong>${s.total}</strong><span class="muted small">Tasks</span></div>
          <div class="stat"><strong>${s.done}</strong><span class="muted small">Done</span></div>
          <div class="stat"><strong>${s.todo}</strong><span class="muted small">Open</span></div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="card"><h3>What is preserved exactly</h3><div class="list">
        ${bulletItem("Consultant Scope of Work", "Original layout, original spacing rhythm, original tone.")}
        ${bulletItem("Agent Roster", "Original roster structure and interaction logic stay intact.")}
        ${bulletItem("Skills Registry", "Original table/detail treatment stays intact.")}
        ${bulletItem("Solution Brief system", "Original registry/schema/mock product page stays intact.")}
      </div></div>
      <div class="card"><h3>What is unified around them</h3><div class="list">
        ${bulletItem("Left nav shell", "One navigation model across tracker and preserved pages.")}
        ${bulletItem("Right context rail", "Related pages and workspace context live beside each view.")}
        ${bulletItem("Tracker", "Still native and local-first inside the same app.")}
      </div></div>
    </div>`;
}

function renderBlueprintPage() {
  return `<div class="card"><h3>Blueprint spine</h3><div class="kv">
    ${kv("Mission", "Build an operating system where human teams and AI agencies work in strict, reviewable coordination.")}
    ${kv("Governance", "Owner is strategic authority. Machine Vision executes. The Consultant designs. The Auditor evaluates.")}
    ${kv("Separation", "Design, execution, and audit are separate by rule, not preference.")}
    ${kv("Core artifacts", "Requirement Brief, Solution Brief, Audit Finding, Escalation Request, Execution Log.")}
    ${kv("Design standard", "Preserve the original editorial UI language and use it as the MV-OS house style.")}
  </div></div>`;
}

function renderTrackerPage() {
  const summary = calcSummary(); const phases = getVisiblePhases();
  return `
    <div class="hero">
      <div class="progress-card"><h3>MV-OS setup tracker</h3><div>${summary.pct}% complete</div><div class="bar"><div class="bar-fill" style="width:${summary.pct}%"></div></div><p class="subtle">${summary.done} done · ${summary.inprog} in progress · ${summary.todo} to do</p></div>
      <div class="stats">
        <div class="stat"><strong>${summary.total}</strong><span class="subtle">Total tasks</span></div>
        <div class="stat"><strong style="color:var(--teal-400)">${summary.done}</strong><span class="subtle">Done</span></div>
        <div class="stat"><strong style="color:var(--amber-400)">${summary.inprog}</strong><span class="subtle">In progress</span></div>
        <div class="stat"><strong>${summary.todo}</strong><span class="subtle">To do</span></div>
      </div>
    </div>
    <div class="quick-add" style="margin-bottom:18px;"><div class="filter-row">${renderFilterChip("all", "All", state.filter)}${renderFilterChip("todo", "To do", state.filter)}${renderFilterChip("inprog", "In progress", state.filter)}${renderFilterChip("done", "Done", state.filter)}</div><div class="quick-add-grid"><input id="search" class="search" type="search" placeholder="Search tasks..." value="${escapeHtml(state.search)}" /><select id="phaseFilter" class="field"><option value="all">All sections</option>${PHASES.map((phase) => `<option value="${phase.id}" ${phase.id === state.phaseFilter ? "selected" : ""}>${phase.label}</option>`).join("")}</select></div></div>
    <div class="quick-add" style="margin-bottom:18px;"><h3>Add private task</h3><form id="quickAddForm" class="quick-add-grid"><input class="field" name="title" placeholder="Task title" /><textarea name="sub" rows="3" placeholder="Optional notes"></textarea><select name="phase" class="field">${PHASES.map((phase) => `<option value="${phase.id}">${phase.label}</option>`).join("")}</select><select name="agency" class="field"><option value="mv">Machine Vision</option><option value="con">Consultant</option><option value="aud">Auditor</option><option value="all">All agencies</option></select><div class="quick-add-actions"><button class="btn btn-primary" type="submit">Add task</button></div></form><p class="copy-note">${escapeHtml(state.copyNote)}</p></div>
    <div class="phase-list">${phases.length ? phases.map(renderPhase).join("") : '<div class="empty">No tasks match the current filter.</div>'}</div>`;
}

function renderMiniTracker() { const s = calcSummary(); return `<h3>Tracker snapshot</h3><div class="kv">${kv("Completion", `${s.pct}%`)}${kv("Done", String(s.done))}${kv("In progress", String(s.inprog))}${kv("Open", String(s.todo))}</div><div class="link-list" style="margin-top:12px;"><button class="link-btn" data-page="tracker">Open full tracker</button></div>`; }
function renderFilterChip(value, label, activeValue) { return `<button class="chip ${value === activeValue ? "active" : ""}" data-filter="${value}">${label}</button>`; }
function renderPhase(phase) {
  const done = phase.tasks.filter((task) => state.statuses[task.id] === "done").length; const pct = phase.tasks.length ? Math.round((done / phase.tasks.length) * 100) : 0; const color = PHASE_COLORS[phase.color]; const collapsed = Boolean(state.collapsed[phase.id]);
  return `<section class="phase-card ${collapsed ? "collapsed" : ""}"><div class="phase-head" data-collapse="${phase.id}"><span class="phase-pill" style="background:${color.light}; color:${color.text}">${phase.label}</span><span class="phase-meta">${done}/${phase.tasks.length}</span><span class="phase-chevron">▶</span></div><div class="phase-body"><div class="bar"><div class="bar-fill" style="width:${pct}%; background:${color.accent}"></div></div><div class="task-list">${phase.visibleTasks.map((task) => renderTask(task)).join("")}</div></div></section>`;
}
function renderTask(task) {
  const status = state.statuses[task.id] || "todo";
  return `<div class="task ${status === "done" ? "done" : ""}"><div class="checkbox ${status}" data-task-toggle="${task.id}" title="Cycle status"></div><div class="task-main"><p class="task-title">${escapeHtml(task.title)}</p><p class="task-sub">${escapeHtml(task.sub)}</p><div class="task-links"><span class="badge ${task.agency}">${AGENCY_LABELS[task.agency]}</span><button class="linkish" data-copy-prompt="${task.id}">Copy prompt ↗</button><span class="status-text">${statusLabel(status)}</span></div></div><div class="task-actions"><button class="btn btn-ghost" data-task-toggle="${task.id}">Cycle</button></div></div>`;
}
function statusLabel(status) { if (status === "done") return "Done"; if (status === "inprog") return "In progress"; return "To do"; }
function lockTemplate() { return `<div class="lock-wrap"><div class="lock-screen"><h3>Private workspace</h3><p class="helper">This board is locked with a local PIN. Nothing leaves this browser unless you export it yourself.</p><form id="unlockForm" class="lock-grid"><input class="field" name="pin" type="password" inputmode="numeric" placeholder="Enter PIN" autocomplete="off" /><button class="btn btn-primary" type="submit">Unlock</button><p id="unlockError" class="helper"></p></form></div></div>`; }
function bindLockEvents() { const unlockForm = document.getElementById("unlockForm"); unlockForm?.addEventListener("submit", (event) => { event.preventDefault(); const form = new FormData(unlockForm); const pin = String(form.get("pin") || "").trim(); const ok = tryUnlock(pin); if (!ok) { const error = document.getElementById("unlockError"); if (error) error.textContent = "Wrong PIN."; } }); }
function bindEvents() {
  document.getElementById("navSearch")?.addEventListener("input", (event) => setNavSearch(event.target.value));
  document.querySelectorAll("[data-page]").forEach((el) => el.addEventListener("click", () => setPage(el.getAttribute("data-page"))));
  document.getElementById("search")?.addEventListener("input", (event) => setSearch(event.target.value));
  document.querySelectorAll("[data-filter]").forEach((el) => el.addEventListener("click", () => setFilter(el.getAttribute("data-filter"))));
  document.getElementById("phaseFilter")?.addEventListener("change", (event) => setPhaseFilter(event.target.value));
  document.querySelectorAll("[data-collapse]").forEach((el) => el.addEventListener("click", () => toggleCollapse(el.getAttribute("data-collapse"))));
  document.querySelectorAll("[data-task-toggle]").forEach((el) => el.addEventListener("click", () => cycleStatus(el.getAttribute("data-task-toggle"))));
  document.querySelectorAll("[data-copy-prompt]").forEach((el) => el.addEventListener("click", () => { const task = allTasks().find((item) => item.id === el.getAttribute("data-copy-prompt")); if (task) copyPrompt(task.prompt); }));
  document.getElementById("exportBtn")?.addEventListener("click", exportData);
  document.getElementById("importFile")?.addEventListener("change", (event) => { importData(event.target.files?.[0]); event.target.value = ""; });
  document.getElementById("quickAddForm")?.addEventListener("submit", (event) => { event.preventDefault(); addCustomTask(event.currentTarget); });
  document.getElementById("lockToggle")?.addEventListener("click", () => { if (state.lockEnabled) { disableLock(); return; } const pin = window.prompt("Set a local PIN for this browser only:"); if (pin && pin.trim()) { saveLock(pin.trim()); render(); } });
}
function bulletItem(title, desc) { return `<div class="item"><div class="item-head"><strong>${title}</strong></div><p class="muted">${desc}</p></div>`; }
function kv(label, value) { return `<div class="kv-row"><div class="muted small">${label}</div><div>${value}</div></div>`; }
function escapeHtml(value) { return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;"); }
