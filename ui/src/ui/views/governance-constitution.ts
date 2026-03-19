import { html } from "lit";

export function renderGovernanceConstitution() {
  return html`
    <section class="card">
      <div class="card-title">MV-OS Constitution</div>
      <div class="card-sub">
        Governing rules for agency separation, human authority, escalation, and audit independence.
      </div>
      <div class="callout info" style="margin-top: 12px;">
        This page is the operating constitution draft for MV-OS. It defines how Machine Vision,
        The Consultant, The Auditor, and human governance interact without role leakage.
      </div>
    </section>

    <section class="card" style="margin-top: 16px;">
      <div class="card-title">Core model</div>
      <div class="card-sub">The system runs on strict separation of concerns.</div>
      <ul style="margin: 16px 0 0 18px; line-height: 1.7;">
        <li><strong>Machine Vision</strong> owns execution.</li>
        <li><strong>The Consultant</strong> owns workflow and solution design.</li>
        <li><strong>The Auditor</strong> owns compliance review and findings.</li>
        <li><strong>Owner + C-suites</strong> own cross-agency governance and escalations.</li>
        <li><strong>Officer, Leader, Team Member</strong> operate only inside Machine Vision execution.</li>
      </ul>
    </section>

    <section class="card" style="margin-top: 16px;">
      <div class="card-title">Constitution clauses</div>
      <div class="card-sub">The current working draft for MV-OS v1.1.</div>
      <div style="margin-top: 16px; display: grid; gap: 16px;">
        ${renderClause(
          "1. Purpose",
          "MV-OS exists to run Machine Vision through a governed, document-driven operating system that stays scalable, auditable, and accountable.",
        )}
        ${renderClause(
          "2. Foundational principle",
          "Separation of concerns is non-negotiable. Execution, design, audit, and cross-agency governance must remain distinct unless an explicit documented exception is approved.",
        )}
        ${renderClause(
          "3. Human authority structure",
          "Human authority has two layers: Governance Layer (Owner and C-suites) and Execution Layer (Officer, Leader, Team Member). Scope matters.",
        )}
        ${renderClause(
          "4. Governance Layer",
          "Owner and C-suites may oversee the whole system, approve escalations, resolve inter-agency conflicts, and approve major governance changes.",
        )}
        ${renderClause(
          "5. Execution Layer",
          "Officer, Leader, and Team Member roles may supervise and correct work inside Machine Vision, but they do not hold cross-agency governance authority.",
        )}
        ${renderClause(
          "6. Agency boundaries",
          "Machine Vision executes, The Consultant designs, The Auditor evaluates. None may silently absorb another agency's role.",
        )}
        ${renderClause(
          "7. Scope-based authority",
          "Seniority does not create unlimited authority. A person may outrank others within one scope without overruling another agency's independent function.",
        )}
        ${renderClause(
          "8. AI outputs are drafts",
          "Every AI artifact remains a draft until the appropriate human authority reviews and accepts it within scope.",
        )}
        ${renderClause(
          "9. Operating loop",
          "Machine Vision raises a Requirement Brief, The Consultant issues a Solution Brief, Machine Vision executes, The Auditor reviews, and improvements loop back through design.",
        )}
        ${renderClause(
          "10. Escalation discipline",
          "Cross-agency disputes, critical findings, major workflow changes, and strategic conflicts must be flagged with [ESCALATION REQUIRED] and go to Owner or C-suites.",
        )}
        ${renderClause(
          "11. Audit independence",
          "Audit cannot be subordinated to execution convenience. Machine Vision cannot self-certify independent compliance.",
        )}
        ${renderClause(
          "12. Truthfulness and traceability",
          "No fabricated approvals, evidence, or completion claims. Low confidence must be stated plainly and logged as an open item when needed.",
        )}
      </div>
    </section>

    <section class="card" style="margin-top: 16px;">
      <div class="card-title">Behavior rules</div>
      <div class="card-sub">How MV-OS agents and operators should behave day to day.</div>
      <ul style="margin: 16px 0 0 18px; line-height: 1.7;">
        <li>Recommend before asking.</li>
        <li>Mark unresolved matters as <code>[OPEN ITEM]</code>.</li>
        <li>Flag escalation triggers as <code>[ESCALATION REQUIRED]</code>.</li>
        <li>Preserve role separation even when moving fast.</li>
        <li>Keep all formal artifacts document-driven and auditable.</li>
        <li>Treat human correction as both an immediate fix and a workflow learning signal.</li>
      </ul>
    </section>
  `;
}

function renderClause(title: string, body: string) {
  return html`
    <div style="padding: 14px 16px; border: 1px solid var(--border-color, rgba(255,255,255,.12)); border-radius: 14px; background: var(--panel-bg, rgba(255,255,255,.02));">
      <div style="font-weight: 600; margin-bottom: 6px;">${title}</div>
      <div style="line-height: 1.65; opacity: 0.92;">${body}</div>
    </div>
  `;
}
