# Examples

## Valid example
A user asks: "Create a skill that drafts MV-OS Solution Briefs using a compact SKILL.md and detailed references." The package includes a concise entrypoint, role routing, and only the needed references.

## Failed example
A skill is created with a 600-line `SKILL.md`, no `agents.md`, and duplicated audit logic in three files.

## Escalated example
A user asks for a skill but does not define who owns approval decisions or what outputs the skill must produce. The generator stops and requests clarification.

## Auditable example
An auditor can inspect the package and see the entrypoint, role-routing logic, and deep doctrine separated cleanly by file.

## Redesign example
A first-pass skill has too many specialist views. Consultant review removes the unnecessary ones and collapses them into core role views.
