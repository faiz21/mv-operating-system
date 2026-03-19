# Output Bundle Standard

## Bundle Components
A delivery-ready Consultant bundle contains:
1. SOP or Solution Brief document
2. SST schema package
3. monitoring UI artifact or specification

## Minimum Metadata
Every bundle should include:
- bundle version
- originating agency
- intended receiving agency
- creation date
- approval state
- linked parent version, if revised
- contributing sub-agents

## Review States
- draft
- pending Consultant Lead review
- pending Owner approval when major
- approved for build
- build-complete pending human review
- approved for delivery
- delivered to Machine Vision

## Integrity Rules
- artifact versions must match the bundle version
- SST-backed UI fields should map to named SST fields
- if one artifact is revised, the bundle must declare whether companion artifacts are still valid
- no bundle is delivery-ready while approval state is unresolved

## Delivery Rule
Only a human-approved bundle may be handed to Machine Vision.
