const STORAGE_KEY = "mvos-company-wiki-tracker-v1";

const trackerData = {
  phases: [
    { id: "comm", label: "Communication protocol", color: "teal", tasks: [
      { id: "c1", title: "Requirement Brief template", sub: "MV → Consultant. Fields: situation, pain point, business impact, urgency, constraints, LOB.", agency: "mv", prompt: "Design the Requirement Brief template for MV-OS" },
      { id: "c2", title: "Solution Brief template", sub: "Consultant → MV. Fields: problem statement, recommended workflow, rationale, implementation steps, expected outcome.", agency: "con", prompt: "Design the Solution Brief template for MV-OS" },
      { id: "c3", title: "Audit Finding template", sub: "Auditor → Consultant. Fields: finding ID, severity, deviation, reference workflow, root cause, recurrence flag.", agency: "aud", prompt: "Design the Audit Finding template for MV-OS" }
    ]},
    { id: "agents", label: "Agent architecture", color: "amber", tasks: [
      { id: "a1", title: "Machine Vision orchestrator design", sub: "Execution, tracking, client comms across 3 LOBs.", agency: "mv", prompt: "Design the Machine Vision AI orchestrator sub-architecture for MV-OS" },
      { id: "a2", title: "Consultant orchestrator design", sub: "Workflow design, analysis, SOP authoring, knowledge synthesis.", agency: "con", prompt: "Design The Consultant AI orchestrator sub-architecture for MV-OS" },
      { id: "a3", title: "Auditor orchestrator design", sub: "Compliance checking, deviations, finding issuance, report generation.", agency: "aud", prompt: "Design The Auditor AI orchestrator sub-architecture for MV-OS" }
    ]},
    { id: "ui", label: "UI interface", color: "gray", tasks: [
      { id: "u1", title: "MV-OS owner dashboard", sub: "Agency status, open findings, recent briefs, escalation queue.", agency: "all", prompt: "Design the MV-OS owner dashboard UI concept" },
      { id: "u4", title: "Workflow library browser", sub: "Browse, version, and reference approved SOPs and workflows.", agency: "con", prompt: "Design the workflow library browser UI for MV-OS" }
    ]}
  ],
  statuses: { c1: 'todo', c2: 'todo', c3: 'todo', a1: 'todo', a2: 'todo', a3: 'todo', u1: 'todo', u4: 'todo' }
};

const pages = {
  home: {
    title: "Home",
    section: "Core",
    color: "teal",
    related: ["blueprint", "scope", "tracker"],
    render: () => {
      const stats = getStats();
      return `
        <div class="hero">
          <div class="card">
            <h3>MV-OS company wiki</h3>
            <p class="muted">This is now the connected source of truth: blueprint spine, Consultant operating design, skills, roster, solution brief model, and execution tracker in one app.</p>
            <div class="toc" style="margin-top:14px;">
              ${relatedLinks(["blueprint","roster","skills","solution-briefs","tracker"])}
            </div>
          </div>
          <div class="card">
            <h3>Current posture</h3>
            <div class="stat-grid">
              <div class="stat"><strong>${stats.totalPages}</strong><span class="muted small">Connected pages</span></div>
              <div class="stat"><strong>${stats.totalTasks}</strong><span class="muted small">Tracked tasks</span></div>
              <div class="stat"><strong>${stats.done}</strong><span class="muted small">Done</span></div>
              <div class="stat"><strong>${stats.todo}</strong><span class="muted small">Still open</span></div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="card">
            <h3>What you already had</h3>
            <div class="list">
              ${bulletItem("Consultant Scope of Work", "Strong domain decomposition. Clean enough to become a wiki page immediately.")}
              ${bulletItem("Consultant Agent Roster", "Good sub-agent architecture draft. Already useful as a reference page.")}
              ${bulletItem("Skills Registry", "Solid skill spec format. Best of the batch structurally.")}
              ${bulletItem("Solution Brief UI/Schema", "More product mockup than wiki page, but valuable and worth integrating.")}
            </div>
          </div>
          <div class="card">
            <h3>What I changed conceptually</h3>
            <div class="list">
              ${bulletItem("Connected navigation", "Pages now relate to each other instead of living as isolated HTML islands.")}
              ${bulletItem("Shared context rail", "Every page shows related pages and wiki intent.")}
              ${bulletItem("Blueprint-first framing", "The Consultant pages now sit under a larger company/wiki structure.")}
              ${bulletItem("Live tracker section", "Planning tasks are part of the wiki, not a separate abandoned tool.")}
            </div>
          </div>
        </div>`;
    }
  },
  blueprint: {
    title: "Blueprint",
    section: "Core",
    color: "purple",
    related: ["scope", "roster", "tracker"],
    render: () => `
      <div class="card"><h3>MV-OS blueprint spine</h3><div class="kv">
        ${kv("Mission", "Build an operating system where human teams and AI agencies work in strict, reviewable coordination.")}
        ${kv("Governing model", "Owner above all. Machine Vision executes. The Consultant designs. The Auditor evaluates. Separation is absolute.")}
        ${kv("Primary objects", "Requirement Brief, Solution Brief, Audit Finding, Escalation Request, Execution Log.")}
        ${kv("Control principle", "AI outputs are drafts until human review/sign-off.")}
        ${kv("System shape", "Blueprint governs. Wiki explains. Tracker sequences unfinished design work.")}
      </div></div>
      <div class="columns" style="margin-top:14px;">
        <div class="card"><h3>Blueprint chapters</h3><div class="link-list">${relatedLinks(["scope","roster","skills","solution-briefs"])}</div></div>
        <div class="card"><h3>Open blueprint pressure points</h3><div class="list">
          ${bulletItem("Human team roster", "Still incomplete and should be tied to authority lines.")}
          ${bulletItem("Workflow library structure", "Needs versioning rules and retrieval pattern.")}
          ${bulletItem("Cross-agency protocol", "Needs message format, acks, escalation, ownership.")}
        </div></div>
      </div>`
  },
  scope: {
    title: "Consultant Scope of Work",
    section: "Consultant",
    color: "teal",
    related: ["roster", "skills", "solution-briefs"],
    render: () => {
      const domains = [
        ["Workflow design & SOP authoring", "Design operating procedures, change classes, revisions, and cross-LOB coordination."],
        ["Knowledge synthesis & audit integration", "Use findings history to improve workflows and document rationale."],
        ["Single source of truth design", "Turn workflows into PostgreSQL-ready entities, constraints, transitions, and migrations."],
        ["Monitoring UI design & build", "Produce execution and lead-facing interfaces bound to SST fields."],
        ["Agent & skill architecture", "Define sub-agents, tools, HITL points, and inter-agent communication."],
        ["Approval-triggered app build & delivery", "On approval, orchestrate the schema + UI + bundle build pipeline."]
      ];
      return `<div class="list">${domains.map(([title,desc]) => `<div class="item"><div class="item-head"><strong>${title}</strong><span class="badge teal">Consultant</span></div><p class="muted">${desc}</p></div>`).join("")}</div>`;
    }
  },
  roster: {
    title: "Consultant Agent Roster",
    section: "Consultant",
    color: "blue",
    related: ["scope", "skills", "solution-briefs"],
    render: () => {
      const agents = [
        ["Consultant Orchestrator", "Routes inputs, manages build pipeline, enforces human review gates."],
        ["Intake Analyst", "Parses Requirement Briefs and validates fields."],
        ["Workflow Designer", "Drafts SOPs and classifies change scope."],
        ["Knowledge Synthesizer", "Integrates audit findings and rationale."],
        ["SST Architect", "Designs schema, states, constraints, and SQL."],
        ["UI Builder", "Builds LOB lead and MV execution views."],
        ["Brief Publisher", "Packages versioned delivery bundles."],
        ["Agent Architect", "Designs orchestrator and skill meta-architecture."]
      ];
      return `<div class="list">${agents.map(([name,desc], i) => `<div class="item"><div class="item-head"><strong>${name}</strong><div class="badges"><span class="badge ${i===0?'teal':'purple'}">${i===0?'Orchestrator':'Specialist'}</span></div></div><p class="muted">${desc}</p></div>`).join("")}</div>`;
    }
  },
  skills: {
    title: "Consultant Skills Registry",
    section: "Consultant",
    color: "amber",
    related: ["roster", "scope", "tracker"],
    render: () => {
      const skills = [
        ["SK-WRITE-01", "Foundational writing skill shared across content-producing agents.", "Generate"],
        ["SK-ORCH-01", "Document intake router", "Route"],
        ["SK-WD-01", "SOP drafter", "Generate"],
        ["SK-KS-03", "Rationale writer", "Generate"],
        ["SK-SA-03", "SQL DDL generator", "Generate"],
        ["SK-UI-01", "LOB Lead view builder", "Generate"]
      ];
      return `<div class="card"><h3>Registry highlights</h3><div class="list">${skills.map(([id,desc,type]) => `<div class="item"><div class="item-head"><strong>${id}</strong><span class="badge ${type==='Generate'?'purple':type==='Route'?'red':'blue'}">${type}</span></div><p class="muted">${desc}</p></div>`).join("")}</div></div>`;
    }
  },
  "solution-briefs": {
    title: "Solution Brief System",
    section: "Artifacts",
    color: "gray",
    related: ["scope", "skills", "tracker"],
    render: () => `
      <div class="columns">
        <div class="card"><h3>What this page represents</h3><p class="muted">Your original HTML here was half registry app, half schema documentation. I kept the useful intent and recast it as a system page inside the wiki.</p><div class="kv">
          ${kv("Primary artifact", "Solution Brief")}
          ${kv("Views", "LOB lead registry, MV team execution view, schema reference")}
          ${kv("Core statuses", "draft, issued, acknowledged, in_execution, closed, pending_approval")}
          ${kv("Related model", "Requirement Brief triggers Solution Brief; open items and implementation steps hang off the brief.")}
        </div></div>
        <div class="card"><h3>Related pages</h3><div class="link-list">${relatedLinks(["scope","roster","skills","tracker"])}</div></div>
      </div>
      <div class="card" style="margin-top:14px;"><h3>Schema entities</h3><div class="list">
        ${bulletItem("solution_briefs", "Core entity with versioning, status, scope, rationale, and approval fields.")}
        ${bulletItem("brief_implementation_steps", "Ordered child steps attached to each brief.")}
        ${bulletItem("brief_open_items", "Tracked unresolved dependencies and escalations.")}
      </div></div>`
  },
  tracker: {
    title: "Development Tracker",
    section: "Execution",
    color: "teal",
    related: ["blueprint", "skills", "solution-briefs"],
    render: () => renderTracker()
  }
};

const state = { page: "home", search: "", statuses: loadStatuses() };
render();

function loadStatuses() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...trackerData.statuses, ...JSON.parse(raw) } : { ...trackerData.statuses };
  } catch { return { ...trackerData.statuses }; }
}
function saveStatuses() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.statuses)); }
function getStats() {
  const tasks = trackerData.phases.flatMap((p) => p.tasks);
  const done = tasks.filter((t) => state.statuses[t.id] === "done").length;
  return { totalPages: Object.keys(pages).length, totalTasks: tasks.length, done, todo: tasks.length - done };
}
function render() {
  const app = document.getElementById("app");
  const page = pages[state.page];
  const filteredPages = Object.entries(pages).filter(([, p]) => p.title.toLowerCase().includes(state.search.toLowerCase()) || p.section.toLowerCase().includes(state.search.toLowerCase()));
  app.innerHTML = `
    <div class="shell">
      <aside class="sidebar">
        <div class="brand"><h1>MV-OS Wiki</h1><p class="small">Connected blueprint, Consultant system, and build tracker.</p></div>
        <div class="nav-group">
          <p class="nav-label">Search</p>
          <input id="navSearch" class="search" placeholder="Find page..." value="${escapeHtml(state.search)}" />
        </div>
        ${renderNav(filteredPages)}
      </aside>
      <section class="main">
        <div class="topbar"><div><h2>${page.title}</h2><div class="muted small">${page.section} section</div></div><div class="badges"><span class="badge ${page.color}">${page.section}</span></div></div>
        <div class="page">${page.render()}</div>
      </section>
      <aside class="context">
        <h3>Page context</h3>
        <p class="muted small">This rail keeps the wiki relational instead of dead-static.</p>
        <div class="card" style="margin-top:12px;"><h4>Related pages</h4><div class="link-list">${relatedLinks(page.related)}</div></div>
        <div class="card" style="margin-top:12px;"><h4>Why this matters</h4><p class="muted small">Your pasted HTML had strong page-level craft but weak system-level cohesion. This app fixes that first.</p></div>
      </aside>
    </div>`;
  bind();
}
function renderNav(entries) {
  const grouped = {};
  for (const [id, page] of entries) (grouped[page.section] ||= []).push([id, page]);
  return Object.entries(grouped).map(([section, items]) => `
    <div class="nav-group"><p class="nav-label">${section}</p>
      ${items.map(([id, page]) => `<button class="nav-item ${state.page===id?'active':''}" data-page="${id}"><span class="dot ${page.color}"></span><span>${page.title}</span></button>`).join("")}
    </div>`).join("");
}
function renderTracker() {
  const tasks = trackerData.phases.flatMap((p) => p.tasks);
  const done = tasks.filter((t) => state.statuses[t.id] === "done").length;
  const inprog = tasks.filter((t) => state.statuses[t.id] === "inprog").length;
  return `
    <div class="card"><h3>Live planning board</h3><p class="muted">This folds your tracker into the wiki so planning stays attached to architecture and documentation.</p>
      <div class="stat-grid" style="margin-top:12px;">
        <div class="stat"><strong>${tasks.length}</strong><span class="muted small">Tasks</span></div>
        <div class="stat"><strong>${done}</strong><span class="muted small">Done</span></div>
        <div class="stat"><strong>${inprog}</strong><span class="muted small">In progress</span></div>
        <div class="stat"><strong>${tasks.length-done-inprog}</strong><span class="muted small">To do</span></div>
      </div>
    </div>
    <div class="filter-row" style="margin-top:14px;">
      <button class="chip active">Cycle task state by clicking box</button>
    </div>
    ${trackerData.phases.map((phase) => `<div class="card tracker-phase"><div class="item-head"><strong>${phase.label}</strong><span class="badge ${phase.color}">${phase.tasks.length} items</span></div>${phase.tasks.map((task) => `
      <div class="tracker-task"><div class="checkbox ${(state.statuses[task.id]||'todo')}" data-task="${task.id}"></div><div><div>${task.title}</div><div class="muted small">${task.sub}</div></div></div>`).join("")}</div>`).join("")}`;
}
function bind() {
  document.querySelectorAll("[data-page]").forEach((el) => el.addEventListener("click", () => { state.page = el.dataset.page; render(); }));
  document.getElementById("navSearch")?.addEventListener("input", (e) => { state.search = e.target.value; render(); });
  document.querySelectorAll("[data-task]").forEach((el) => el.addEventListener("click", () => {
    const id = el.dataset.task; const cur = state.statuses[id] || 'todo'; state.statuses[id] = cur==='todo' ? 'inprog' : cur==='inprog' ? 'done' : 'todo'; saveStatuses(); render();
  }));
}
function goTo(id) { state.page = id; render(); }
function relatedLinks(ids) { return ids.map((id) => `<button class="link-btn" onclick="window.__wikiGo('${id}')">${pages[id].title}</button>`).join(""); }
window.__wikiGo = goTo;
function bulletItem(title, desc) { return `<div class="item"><div class="item-head"><strong>${title}</strong></div><p class="muted">${desc}</p></div>`; }
function kv(label, value) { return `<div class="kv-row"><div class="muted small">${label}</div><div>${value}</div></div>`; }
function escapeHtml(s) { return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;'); }
