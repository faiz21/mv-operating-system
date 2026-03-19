import { useState, useEffect, useCallback } from "react";

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

const STORAGE_KEY = "mvos-tracker-v1";

const AGENCY_LABELS = { mv: "Machine Vision", con: "Consultant", aud: "Auditor", all: "All agencies" };
const AGENCY_COLORS = {
  mv:  { bg: "#E1F5EE", text: "#0F6E56" },
  con: { bg: "#EEEDFE", text: "#3C3489" },
  aud: { bg: "#FAEEDA", text: "#633806" },
  all: { bg: "#F1EFE8", text: "#444441" },
};
const PHASE_COLORS = {
  teal:   { accent: "#1D9E75", light: "#E1F5EE", text: "#0F6E56" },
  purple: { accent: "#534AB7", light: "#EEEDFE", text: "#3C3489" },
  amber:  { accent: "#BA7517", light: "#FAEEDA", text: "#633806" },
  gray:   { accent: "#888780", light: "#F1EFE8", text: "#5F5E5A" },
};

const STATUS_CYCLE = { todo: "inprog", inprog: "done", done: "todo" };

function CheckBox({ status }) {
  const base = {
    width: 16, height: 16, borderRadius: 4, flexShrink: 0, marginTop: 2,
    border: "0.5px solid", display: "flex", alignItems: "center", justifyContent: "center",
    transition: "all 0.15s",
  };
  if (status === "done") return (
    <div style={{ ...base, background: "#1D9E75", borderColor: "#1D9E75" }}>
      <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
        <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
  if (status === "inprog") return (
    <div style={{ ...base, background: "#FAEEDA", borderColor: "#BA7517" }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#BA7517" }} />
    </div>
  );
  return <div style={{ ...base, borderColor: "var(--color-border-secondary)" }} />;
}

function ProgressBar({ pct, color }) {
  return (
    <div style={{ height: 3, background: "var(--color-border-tertiary)", borderRadius: 2, marginBottom: 10 }}>
      <div style={{ height: 3, width: `${pct}%`, background: PHASE_COLORS[color].accent, borderRadius: 2, transition: "width 0.4s ease" }} />
    </div>
  );
}

export default function App() {
  const [statuses, setStatuses] = useState({});
  const [filter, setFilter] = useState("all");
  const [collapsed, setCollapsed] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const result = await window.storage.get(STORAGE_KEY);
        if (result && result.value) {
          setStatuses(JSON.parse(result.value));
        } else {
          const init = {};
          PHASES.forEach(p => p.tasks.forEach(t => { init[t.id] = "todo"; }));
          setStatuses(init);
        }
      } catch {
        const init = {};
        PHASES.forEach(p => p.tasks.forEach(t => { init[t.id] = "todo"; }));
        setStatuses(init);
      }
      setLoading(false);
    })();
  }, []);

  const saveStatuses = useCallback(async (next) => {
    setSaving(true);
    try {
      await window.storage.set(STORAGE_KEY, JSON.stringify(next));
    } catch (e) {
      console.error("Storage save failed:", e);
    }
    setSaving(false);
  }, []);

  const cycleStatus = (id) => {
    setStatuses(prev => {
      const next = { ...prev, [id]: STATUS_CYCLE[prev[id] || "todo"] };
      saveStatuses(next);
      return next;
    });
  };

  const toggleCollapse = (id) => {
    setCollapsed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const allTasks = PHASES.flatMap(p => p.tasks);
  const total = allTasks.length;
  const done = allTasks.filter(t => statuses[t.id] === "done").length;
  const inprog = allTasks.filter(t => statuses[t.id] === "inprog").length;
  const todo = allTasks.filter(t => !statuses[t.id] || statuses[t.id] === "todo").length;
  const overallPct = total > 0 ? Math.round((done / total) * 100) : 0;

  if (loading) return (
    <div style={{ padding: "2rem", color: "var(--color-text-tertiary)", fontSize: 13, textAlign: "center" }}>
      Loading your tracker...
    </div>
  );

  return (
    <div style={{ fontFamily: "var(--font-sans)", paddingBottom: "2rem" }}>

      {/* Header */}
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 500 }}>MV-OS setup tracker</div>
          <div style={{ fontSize: 11, color: saving ? "#BA7517" : "var(--color-text-tertiary)" }}>
            {saving ? "Saving..." : "Synced across chats"}
          </div>
        </div>
        <div style={{ height: 4, background: "var(--color-border-tertiary)", borderRadius: 2, marginBottom: 6 }}>
          <div style={{ height: 4, width: `${overallPct}%`, background: "#1D9E75", borderRadius: 2, transition: "width 0.4s ease" }} />
        </div>
        <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>{overallPct}% complete · {done} done · {inprog} in progress · {todo} to do</div>
      </div>

      {/* Summary stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 8, marginBottom: "1.5rem" }}>
        {[
          { num: total, label: "Total tasks", color: "var(--color-text-primary)" },
          { num: done, label: "Done", color: "#1D9E75" },
          { num: inprog, label: "In progress", color: "#BA7517" },
          { num: todo, label: "To do", color: "var(--color-text-secondary)" },
        ].map((s, i) => (
          <div key={i} style={{ background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "10px 12px" }}>
            <div style={{ fontSize: 20, fontWeight: 500, color: s.color, lineHeight: 1, marginBottom: 4 }}>{s.num}</div>
            <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filter bar */}
      <div style={{ display: "flex", gap: 6, marginBottom: "1.25rem", flexWrap: "wrap" }}>
        {["all", "todo", "inprog", "done"].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              fontSize: 11, padding: "4px 10px",
              border: `0.5px solid ${filter === f ? "var(--color-border-primary)" : "var(--color-border-secondary)"}`,
              borderRadius: 99, background: filter === f ? "var(--color-background-secondary)" : "transparent",
              color: filter === f ? "var(--color-text-primary)" : "var(--color-text-secondary)",
              cursor: "pointer", fontFamily: "var(--font-sans)",
            }}
          >
            {f === "all" ? "All" : f === "todo" ? "To do" : f === "inprog" ? "In progress" : "Done"}
          </button>
        ))}
      </div>

      {/* Phases */}
      {PHASES.map(phase => {
        const pc = PHASE_COLORS[phase.color];
        const phaseTasks = phase.tasks.filter(t => {
          if (filter === "all") return true;
          return (statuses[t.id] || "todo") === filter;
        });
        if (phaseTasks.length === 0) return null;

        const pDone = phase.tasks.filter(t => statuses[t.id] === "done").length;
        const pTotal = phase.tasks.length;
        const pPct = Math.round((pDone / pTotal) * 100);
        const isCollapsed = collapsed[phase.id];

        return (
          <div key={phase.id} style={{ marginBottom: "1.25rem" }}>
            {/* Phase header */}
            <div
              onClick={() => toggleCollapse(phase.id)}
              style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, cursor: "pointer", userSelect: "none" }}
            >
              <span style={{ fontSize: 10, fontWeight: 500, padding: "3px 9px", borderRadius: 99, background: pc.light, color: pc.text, whiteSpace: "nowrap" }}>
                {phase.label}
              </span>
              <span style={{ fontSize: 11, color: "var(--color-text-tertiary)", flex: 1 }}>{pDone}/{pTotal}</span>
              <span style={{ fontSize: 11, color: "var(--color-text-tertiary)", transform: isCollapsed ? "rotate(0deg)" : "rotate(90deg)", transition: "transform 0.2s", display: "inline-block" }}>▶</span>
            </div>

            <ProgressBar pct={pPct} color={phase.color} />

            {!isCollapsed && (
              <div style={{ border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", overflow: "hidden" }}>
                {phaseTasks.map((task, idx) => {
                  const status = statuses[task.id] || "todo";
                  const ac = AGENCY_COLORS[task.agency];
                  return (
                    <div
                      key={task.id}
                      style={{
                        display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 14px",
                        borderBottom: idx < phaseTasks.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none",
                        cursor: "pointer", transition: "background 0.12s",
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = "var(--color-background-secondary)"}
                      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                      onClick={() => cycleStatus(task.id)}
                    >
                      <CheckBox status={status} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                          fontSize: 13, lineHeight: 1.4,
                          color: status === "done" ? "var(--color-text-tertiary)" : "var(--color-text-primary)",
                          textDecoration: status === "done" ? "line-through" : "none",
                        }}>
                          {task.title}
                        </div>
                        <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginTop: 3, lineHeight: 1.5 }}>
                          {task.sub}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6, flexWrap: "wrap" }}>
                          <span style={{ fontSize: 10, padding: "2px 6px", borderRadius: 4, background: ac.bg, color: ac.text }}>
                            {AGENCY_LABELS[task.agency]}
                          </span>
                          <span
                            style={{ fontSize: 11, color: "var(--color-text-tertiary)", cursor: "pointer" }}
                            onClick={e => { e.stopPropagation(); if (typeof sendPrompt === "function") sendPrompt(task.prompt); else if (typeof window.sendPrompt === "function") window.sendPrompt(task.prompt); }}
                          >
                            Start in chat ↗
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginTop: "1rem", textAlign: "center" }}>
        Click any task to cycle status · Progress saves automatically across all chats
      </div>
    </div>
  );
}
