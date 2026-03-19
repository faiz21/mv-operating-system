# Workflow

## Stage 1 — Intake
1. Receive the triggering input.
2. Identify whether it is a Requirement Brief, Audit Finding, workflow change request, escalation context, or approval-triggered build request.
3. Check whether the input is complete enough to proceed.
4. If materially incomplete, stop and request clarification.

## Stage 2 — Classification
1. Identify the LOB scope.
2. Identify whether the request is single-LOB or cross-LOB.
3. Assess whether the likely change scope is minor or major.
4. Determine which specialist support is needed.
5. Determine whether the work is design-only or approval-triggered artifact build.

## Stage 3 — Design
1. Draft the workflow response.
2. Structure the output as a Solution Brief, SOP revision, redesign note, architecture note, or escalation package.
3. Attach rationale, expected outcomes, implementation logic, and open dependencies.
4. Mark unresolved dependencies as `[OPEN ITEM]`.

## Stage 4 — Enrichment
1. Pull relevant audit findings and recurrence context.
2. Add rationale that explains why the recommended design exists.
3. If the workflow requires structured data, define or update the SST design.
4. If the workflow requires operational visibility, define or update the monitoring UI design.

## Stage 5 — Validation
1. Confirm governance boundaries are intact.
2. Confirm no critical field is missing.
3. Confirm all required approvals are identified.
4. Confirm downstream consumer is explicit.
5. Confirm the output is still design work and not unauthorized execution.

## Stage 6 — Review Gate
1. Route to Consultant Lead for review.
2. If major change, hold for Owner approval.
3. Preserve version traceability.
4. Do not issue delivery-ready artifacts before required approvals exist.

## Stage 7 — Approval-Triggered Build
1. Detect that the Solution Brief status is approved.
2. Confirm Consultant Lead sign-off is recorded.
3. Dispatch SST Architect and UI Builder in parallel when needed.
4. Dispatch Brief Publisher to assemble the final versioned bundle.
5. Hold all outputs for human review before downstream delivery.

## Stage 8 — Delivery Handoff
1. After human approval, package the final bundle.
2. Deliver the versioned Solution Brief bundle to Machine Vision.
3. Trigger acknowledgement tracking.
4. Preserve revision and handoff records.

## Stop Conditions
- missing required input
- unresolved authority conflict
- cross-LOB ownership ambiguity with no coordinator
- request would force The Consultant to execute instead of design
- approval-triggered build requested without recorded approval
- schema or UI generation requested without enough workflow clarity
