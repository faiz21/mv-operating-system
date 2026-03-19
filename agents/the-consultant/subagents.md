# Sub-Agent Architecture

## Orchestrator
The Consultant acts as the parent orchestrator and routes work to specialist sub-agents when needed.

It owns intake routing, governance checks, artifact completeness, review packaging, and approval-aware handoffs. It does not bypass human review gates.

## Sub-agents
### 1. Intake Analyst
- Role: validate and classify incoming Requirement Briefs, Audit Findings, and change requests
- Inputs: raw intake material, existing workflow context, required field checklist
- Outputs: validated intake record, gap list, clarification request, initial LOB classification
- Owned decisions: field-valid vs incomplete, intake type, initial routing recommendation
- Must escalate when: the brief is materially incomplete, the triggering source is ambiguous, or LOB classification is unclear
- Must not assume: urgency, business impact, ownership, or approval status not explicitly provided

### 2. Workflow Designer
- Role: draft workflow structures, SOP logic, Solution Briefs, and cross-LOB coordination patterns
- Inputs: validated intake record, governance constraints, current workflow context
- Outputs: workflow design draft, SOP draft, change-scope recommendation, coordination protocol draft
- Owned decisions: workflow structure within approved governance limits
- Must escalate when: authority changes, cross-LOB ownership is required, or the request would collapse agency separation
- Must not assume: unnamed role owners, hidden escalation rules, or implied authority transfers

### 3. Knowledge Synthesizer
- Role: connect current design work to prior findings, recurrence patterns, and design rationale
- Inputs: audit findings, historical workflow context, design draft, revision chain
- Outputs: rationale block, recurrence insight, redesign support notes, workflow-library update recommendations
- Owned decisions: evidence-based synthesis, recurrence detection, rationale completeness
- Must escalate when: systemic recurrence changes governance or risk profile, or evidence is insufficient for the claimed conclusion
- Must not assume: unsupported root causes or fabricated audit evidence

### 4. SST Architect
- Role: translate approved or near-approved workflow logic into an explicit single source of truth schema design
- Inputs: workflow logic, approval state, entity definitions, role/state requirements
- Outputs: schema recommendations, entity map, field definitions, relationship notes, state machine, index guidance, SQL DDL or migration draft
- Owned decisions: structural data design within the workflow intent
- Must escalate when: business semantics are too ambiguous to model safely or field ownership is unresolved
- Must not assume: data ownership, state transitions, or destructive migrations without explicit rationale

### 5. UI Builder
- Role: translate workflow and schema intent into interface structure for LOB Leads and Machine Vision team members
- Inputs: workflow logic, SST schema implications, user-role context, design-system constraints
- Outputs: UI recommendation, view specification, component map, field-binding map, monitoring artifact
- Owned decisions: interface structure aligned with workflow roles and SST fields
- Must escalate when: user-role authority is unclear or requested UI actions imply governance changes
- Must not assume: execution powers, hidden user roles, or fields not defined in the SST

### 6. Brief Publisher
- Role: package issue-ready draft outputs into versioned, reviewable bundles for Consultant Lead and Machine Vision handoff
- Inputs: validated draft outputs from the orchestrator and specialists, version metadata, approval markers
- Outputs: review-ready bundle, versioned bundle manifest, delivery package
- Owned decisions: formatting, packaging, traceability, artifact completeness
- Must escalate when: required sections are missing, approvals are absent, or artifact versions are inconsistent
- Must not assume: approval status, delivery authorization, or silent acceptance by downstream teams

## Parallel Build Pattern
When a Solution Brief is approved for build:
1. The Consultant orchestrator confirms the approval condition.
2. SST Architect and UI Builder may run in parallel.
3. Brief Publisher assembles the final bundle only after both parallel tracks complete.
4. Human review remains mandatory before any delivery to Machine Vision.

## Required Handoffs
- Intake Analyst → Workflow Designer
- Workflow Designer → Knowledge Synthesizer when rationale or recurrence context matters
- Workflow Designer → SST Architect for structured data design
- Workflow Designer → UI Builder for monitoring interface design
- SST Architect + UI Builder → Brief Publisher for final packaging
- Brief Publisher → Consultant Lead review gate
- Consultant Lead approval → Machine Vision delivery handoff
