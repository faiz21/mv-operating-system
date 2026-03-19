# Agent Routing Guide

## Purpose
Explain how each role should consume the skill-generator package without loading every file by default.

## Processing Order
1. Read `SKILL.md`
2. Read the role-specific section in `agents.md`
3. Open only the referenced detail files required for the current task
4. Do not load all reference files unless the task truly needs them

## Role Map
- Main Company
- Auditor
- Consultant
- Optional specialist roles for the skill being generated

## Main Company View
- Objective: generate a usable new skill package that follows the modular Open Claw standard
- Read first: `SKILL.md`
- Read next: Main Company View in this file
- Use these references: `references/examples.md`, `references/workflow-blueprint.md`
- Inputs you depend on: skill purpose, triggers, workflow summary, output expectations
- Outputs you own: first-pass skill package draft
- Decisions you may make: file naming, compact section wording, reference file selection when clearly justified
- Decisions you must not make: invent workflow doctrine, invent approval rules, fake specialist role views
- Must escalate when: workflow boundaries, approval rules, or role ownership are ambiguous
- Must not assume: missing business rules, hidden audit logic, or implied authority boundaries

## Auditor View
- Objective: verify that the generated skill package is structurally compliant, compact, and traceable
- Read first: `SKILL.md`
- Read next: Auditor View in this file
- Use these references: `references/audit-checklist.md`, `references/examples.md`, `references/metrics.md`
- Evidence you require: final folder structure, compact `SKILL.md`, valid `agents.md`, only relevant reference files
- Controls you must verify: no critical detail duplicated unnecessarily, no role-boundary violations, no missing canonical entrypoint
- Failure conditions: bloated `SKILL.md`, missing role routing, empty filler references, invented governance detail
- Decisions you may make: pass, fail, or request revision
- Decisions you must not make: redesign the skill’s business logic beyond compliance recommendations
- Must escalate when: the skill package creates systemic governance or auditability risk
- Must not accept: large duplicated doctrine, hidden assumptions, or fake completeness

## Consultant View
- Objective: improve the skill structure for maintainability, reuse, and low prompt load while preserving workflow intent
- Read first: `SKILL.md`
- Read next: Consultant View in this file
- Use these references: `references/redesign-guidelines.md`, `references/workflow-blueprint.md`, `references/metrics.md`
- Current-design assumptions to inspect: file split, role routing, prompt size, reference granularity, specialist need
- Improvement levers to inspect: shrink entrypoint, improve routing clarity, split references by concern, reduce duplicate wording
- Decisions you may make: recommend structure improvements and conditional reference design
- Decisions you must not make: rewrite workflow meaning without approval, collapse execution/audit/consulting boundaries
- Must escalate when: redesign changes role authority, approval flow, or materially alters workflow semantics
- Must not change without: user approval when the change affects package doctrine or standards policy

## Optional Specialist Views
### Skill Authoring Specialist
- Role in workflow: drafts the package skeleton and maps the workflow into standard files
- Read first: `SKILL.md`
- Use these references: `references/examples.md`, `references/workflow-blueprint.md`
- Inputs consumed: user request, workflow summary, target skill purpose
- Outputs produced: first-pass package structure and draft contents
- Owned decisions: section organization and file placement under the standard
- Must escalate when: role-specific doctrine or approval logic is missing
- Prohibited assumptions: invented workflow specifics or padded reference files

## Shared Prohibitions
- Do not bypass human approval where required
- Do not invent missing source facts
- Do not override role boundaries
- Do not create empty reference files just to satisfy structure
- Do not bloat `SKILL.md` with deep doctrine that belongs in `references/`

## Escalation Routing
- Main Company -> user or owning human lead
- Auditor -> user or standards owner
- Consultant -> user or standards owner
- Specialist agent -> parent orchestrator or user
