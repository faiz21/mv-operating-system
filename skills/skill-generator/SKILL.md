---
name: skill-generator
description: Create new Open Claw skills that follow the modular standard with a compact SKILL.md, role-routing in agents.md, and deep detail in references/. Use when authoring a new skill from scratch, scaffolding a standardized skill package, or turning a workflow into a reusable skill.
---

# Objective
Create a new skill package that follows the Open Claw modular skill standard while keeping `SKILL.md` compact and pushing role-specific and deep supporting detail into `agents.md` and `references/`.

## Skill Metadata
- Skill Class: skill-authoring
- Primary Orchestrator: Main Company
- Secondary Orchestrators: Auditor, Consultant
- Workflow Tier: meta-skill
- Risk Level: medium
- Human Approval Required: required before publishing or broad adoption
- Audit Frequency: on revision or standards change
- Redesign Review Trigger: when skill structure causes prompt bloat, ambiguity, or role-boundary confusion

## Problem Statement
- Trigger: a user wants to create a new skill or convert a repeatable workflow into a reusable skill package
- Problem Solved: prevents ad hoc skills with bloated `SKILL.md`, weak routing, or missing role boundaries
- Business Value: produces maintainable, reusable, auditable skill packages with consistent structure
- Failure Prevented: oversized prompts, duplicated doctrine, unclear role ownership, and incomplete reference mapping

## Inputs Contract
- Mandatory Inputs: skill name, skill purpose, trigger/use conditions, expected outputs, workflow summary
- Optional Inputs: target roles, specialist agents, reference docs, templates, scripts, examples, metrics
- Source of Truth: user instruction and current Open Claw skill standard
- Allowed Assumptions: infer sensible file names and section headings when the user did not specify them
- Disallowed Assumptions: inventing business rules, role boundaries, approval rules, or reference content that changes workflow meaning
- Missing Context Rule: if the workflow purpose, outputs, or role boundaries are materially unclear, stop and ask or mark the gap explicitly in draft content

## Output Contract
- Required Deliverables: `SKILL.md`, `agents.md`, and relevant `references/*.md` files; optional `scripts/`, `assets/`, and `agents/openai.yaml` only when justified
- Format: standard skill folder with compact canonical entrypoint and linked support files
- Acceptance Criteria: `SKILL.md` remains compact and executable; `agents.md` routes each relevant role correctly; deep detail lives in references without critical gaps
- Handoff Target: user or parent orchestrator for review
- Downstream Consumer: future agents using the skill package

## Execution Logic
1. Clarify the skill objective, triggers, workflow scope, and required outputs.
2. Scaffold the skill directory and create the minimum standard files.
3. Write a compact `SKILL.md` that acts as the canonical entrypoint and reference map.
4. Write `agents.md` with role-specific reading order, responsibilities, prohibitions, and escalation boundaries.
5. Create only the reference files that are materially needed for the skill.
6. Add scripts or assets only when deterministic automation or reusable artifacts are genuinely required.
7. Validate that the package preserves execution, audit, consulting, and blueprint support where materially relevant without bloating the entrypoint.

## Escalation Rules
- Escalate when: role boundaries are unclear, approval requirements are undefined, or the requested structure conflicts with the standard
- Stop when: the skill would require invented doctrine or missing source rules to appear complete
- Human review required when: publishing, broad adoption, or standards-level changes are involved

## Reference Map
- Agent routing: `agents.md`
- Blueprint: `references/workflow-blueprint.md`
- Audit: `references/audit-checklist.md`
- Redesign: `references/redesign-guidelines.md`
- Examples: `references/examples.md`
- Metrics: `references/metrics.md`
