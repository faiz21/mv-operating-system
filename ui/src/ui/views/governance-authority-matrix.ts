import { html } from "lit";

const MATRIX_ROWS = [
  {
    activity: "Approve strategic direction and constitutional changes",
    owner: "A",
    csuites: "R",
    officer: "-",
    leader: "-",
    team: "-",
    mv: "C",
    consultant: "C",
    auditor: "C",
  },
  {
    activity: "Resolve cross-agency conflicts (MV / Consultant / Auditor)",
    owner: "A",
    csuites: "R",
    officer: "-",
    leader: "-",
    team: "-",
    mv: "C",
    consultant: "C",
    auditor: "C",
  },
  {
    activity: "Approve major workflow changes across agencies or LOBs",
    owner: "A",
    csuites: "R",
    officer: "C",
    leader: "C",
    team: "I",
    mv: "C",
    consultant: "R",
    auditor: "C",
  },
  {
    activity: "Approve minor workflow changes inside Machine Vision execution",
    owner: "I",
    csuites: "I",
    officer: "A",
    leader: "R",
    team: "C",
    mv: "R",
    consultant: "C",
    auditor: "I",
  },
  {
    activity: "Create Requirement Brief",
    owner: "I",
    csuites: "I",
    officer: "A",
    leader: "R",
    team: "R",
    mv: "R",
    consultant: "I",
    auditor: "I",
  },
  {
    activity: "Create Solution Brief / workflow design",
    owner: "I",
    csuites: "I",
    officer: "C",
    leader: "C",
    team: "I",
    mv: "C",
    consultant: "A/R",
    auditor: "I",
  },
  {
    activity: "Execute approved client delivery",
    owner: "I",
    csuites: "I",
    officer: "A",
    leader: "R",
    team: "R",
    mv: "A/R",
    consultant: "-",
    auditor: "-",
  },
  {
    activity: "Maintain Execution Log",
    owner: "I",
    csuites: "I",
    officer: "A",
    leader: "R",
    team: "R",
    mv: "A/R",
    consultant: "-",
    auditor: "I",
  },
  {
    activity: "Issue Audit Finding and severity classification",
    owner: "I",
    csuites: "I",
    officer: "-",
    leader: "-",
    team: "-",
    mv: "C",
    consultant: "I",
    auditor: "A/R",
  },
  {
    activity: "Issue Audit Report",
    owner: "I",
    csuites: "I",
    officer: "I",
    leader: "I",
    team: "I",
    mv: "I",
    consultant: "I",
    auditor: "A/R",
  },
  {
    activity: "Raise escalation request",
    owner: "I",
    csuites: "I",
    officer: "R",
    leader: "R",
    team: "R",
    mv: "R",
    consultant: "R",
    auditor: "R",
  },
  {
    activity: "Resolve escalation request",
    owner: "A",
    csuites: "R",
    officer: "-",
    leader: "-",
    team: "-",
    mv: "C",
    consultant: "C",
    auditor: "C",
  },
] as const;

export function renderGovernanceAuthorityMatrix() {
  return html`
    <section class="card">
      <div class="card-title">MV-OS Authority Matrix</div>
      <div class="card-sub">
        Scope map for who is Accountable, Responsible, Consulted, or Informed across the operating system.
      </div>
      <div class="callout info" style="margin-top: 12px;">
        Reading rule: <strong>A</strong> = Accountable, <strong>R</strong> = Responsible,
        <strong>C</strong> = Consulted, <strong>I</strong> = Informed, <strong>-</strong> = no standing role.
      </div>
    </section>

    <section class="card" style="margin-top: 16px; overflow-x: auto;">
      <div class="card-title">Authority matrix</div>
      <div class="card-sub">Cross-agency governance belongs to Owner + C-suites. O / L / Team stay inside Machine Vision execution.</div>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px; min-width: 1100px; font-size: 14px;">
        <thead>
          <tr>
            ${headerCell("Activity", "left")}
            ${headerCell("Owner")}
            ${headerCell("C-suites")}
            ${headerCell("Officer")}
            ${headerCell("Leader")}
            ${headerCell("Team Member")}
            ${headerCell("Machine Vision")}
            ${headerCell("Consultant")}
            ${headerCell("Auditor")}
          </tr>
        </thead>
        <tbody>
          ${MATRIX_ROWS.map(
            (row) => html`
              <tr>
                ${bodyCell(row.activity, true)}
                ${roleCell(row.owner)}
                ${roleCell(row.csuites)}
                ${roleCell(row.officer)}
                ${roleCell(row.leader)}
                ${roleCell(row.team)}
                ${roleCell(row.mv)}
                ${roleCell(row.consultant)}
                ${roleCell(row.auditor)}
              </tr>
            `,
          )}
        </tbody>
      </table>
    </section>

    <section class="card" style="margin-top: 16px;">
      <div class="card-title">Boundary notes</div>
      <div class="card-sub">The matrix only works if these rules stay hard.</div>
      <ul style="margin: 16px 0 0 18px; line-height: 1.7;">
        <li><strong>Owner + C-suites</strong> are the only human roles with cross-agency governance authority.</li>
        <li><strong>Officer, Leader, and Team Member</strong> may manage and approve work inside Machine Vision, but not between the three agencies.</li>
        <li><strong>The Consultant</strong> can design and recommend, but not execute or self-audit.</li>
        <li><strong>The Auditor</strong> can evaluate and issue findings, but not redesign workflows or direct execution.</li>
        <li>If a decision cuts across agency boundaries, it is governance work, not routine execution work.</li>
      </ul>
    </section>

    <section class="card" style="margin-top: 16px;">
      <div class="card-title">Use this matrix for</div>
      <div class="card-sub">Practical day-to-day governance checks.</div>
      <ul style="margin: 16px 0 0 18px; line-height: 1.7;">
        <li>Checking whether a decision belongs to execution or governance.</li>
        <li>Preventing role leakage between Machine Vision, The Consultant, and The Auditor.</li>
        <li>Clarifying who signs off when a workflow or escalation moves upward.</li>
        <li>Designing dashboard workflows and agent permissions later without contradicting the constitution.</li>
      </ul>
    </section>
  `;
}

function headerCell(label: string, align: "left" | "center" = "center") {
  return html`<th
    style="text-align: ${align}; padding: 12px; border-bottom: 1px solid var(--border-color, rgba(255,255,255,.12)); white-space: nowrap; position: sticky; top: 0; background: var(--panel-bg, rgb(18,18,22));"
  >
    ${label}
  </th>`;
}

function bodyCell(value: string, strong = false) {
  return html`<td
    style="padding: 12px; border-bottom: 1px solid var(--border-color, rgba(255,255,255,.08)); vertical-align: top; line-height: 1.5; font-weight: ${strong ? 600 : 400};"
  >
    ${value}
  </td>`;
}

function roleCell(value: string) {
  return html`<td
    style="padding: 12px; border-bottom: 1px solid var(--border-color, rgba(255,255,255,.08)); text-align: center; font-weight: 700;"
  >
    ${value}
  </td>`;
}
