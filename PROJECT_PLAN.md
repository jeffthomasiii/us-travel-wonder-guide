# United States Travel & Wonder Guide — Project Plan

This file is the working roadmap for building the guide without letting content growth outrun quality, rights verification, or the core discovery experience.

## Guiding principle

The guide is a **U.S. travel discovery reference**, not a quota-driven state list and not a national-park directory. The primary geography includes the **50 states, Washington, D.C., and the five inhabited U.S. territories**. Each area begins with one **★ Signature Wonder**, then grows only where destinations genuinely justify **◆ Worth Traveling For** and **○ Worth the Detour** status.

See [`EDITORIAL_SCOPE.md`](EDITORIAL_SCOPE.md) for geographic and editorial boundaries.

## Phase 1A — Original 50-state Signature imagery

**Status: COMPLETE — 50 / 50 original state Signature Wonders.**

The canonical rights audit remains [`_data/signature_images.yml`](_data/signature_images.yml).

## Phase 1B — Mixed-tier pilot

**Status: COMPLETE — 6 pilot states / 12 added destinations.**

Pilot states: California, Utah, Maine, Michigan, Oklahoma, and Delaware.

The pilot validated all three reasons to go, mixed-tier state pages, Explore filtering, and the basic content hierarchy.

## Phase 1C — Travel-planning content model

**Status: COMPLETE — model validated on all 18 Wonders in the six pilot states.**

The schema is documented in [`CONTENT_MODEL.md`](CONTENT_MODEL.md). The validated planning guidance includes typical calendar visit windows, visit length, RV access and road/rig considerations, pet access, accessibility, photography, wildlife, official conditions, reservations/permits where useful, planning source, and review date.

Phase 1C established the normal planning-data pattern for future intake. Not every existing Wonder must be backfilled before Phase 2 begins; planning metadata can expand alongside content production.

Design and branding work remains intentionally deferred except for functional usability changes.

## Geography expansion — states, D.C. and inhabited territories

**Status: IMPLEMENTED — 56 primary browse areas.**

The guide includes:

- 50 states
- Washington, D.C.
- Puerto Rico
- U.S. Virgin Islands
- Guam
- Northern Mariana Islands
- American Samoa

First-pass Signature Wonders added:

| Area | ★ Signature Wonder |
| --- | --- |
| Washington, D.C. | National Mall and Memorial Parks |
| Puerto Rico | El Yunque National Forest |
| U.S. Virgin Islands | Virgin Islands National Park |
| Guam | Ritidian Point |
| Northern Mariana Islands | The Grotto |
| American Samoa | National Park of American Samoa |

The U.S. Minor Outlying Islands are excluded from the ordinary browse model unless a later editorial case justifies a specific destination.

### Geography-expansion follow-up

- [x] complete asset-level image-rights research for the six new Signature Wonders;
- [x] connect the six verified image records to cards, Wonder pages, and homepage hero rotation;
- [ ] complete comparative Signature review for all six district/territory areas during Phase 2A/2B;
- [ ] add planning metadata for the six new Signature Wonders during normal Phase 2 intake/backfill;
- [x] establish an explicit non-NPS diversity guardrail for Phase 2 research.

Verified imagery for the six expanded areas is stored in [`_data/expanded_signature_images.yml`](_data/expanded_signature_images.yml), using the same asset-level verification standard as the original 50-state manifest.

## Mobile functional baseline

**Status: IMPLEMENTED.**

Mobile uses persistent bottom navigation for **Home, Explore, Search, and Areas**, while the hamburger menu holds secondary/reference pages. This is the functional baseline for the current POC; a deeper installed-app/PWA navigation redesign can happen during the dedicated design phase.

## Phase 2A — Build the national candidate inventory

**Status: IN PROGRESS — seed inventory complete; three comparative research waves complete covering 20 areas.**

Goal: build the research pool before publishing large amounts of new content. Candidate counts are not quotas and candidate status does not imply inclusion.

The seed backlog is [`_data/phase2_candidates.yml`](_data/phase2_candidates.yml). The research and review rules are documented in [`PHASE2_RESEARCH_METHOD.md`](PHASE2_RESEARCH_METHOD.md). Wave reviews are kept separately from the seed backlog so source verification and editorial judgments remain auditable before candidates are promoted into production.

### Wave 1 — complete

Areas reviewed:

- Alabama
- Alaska
- Arizona
- California
- Colorado
- Florida
- Puerto Rico
- Guam

Review file: [`_data/phase2_wave1_reviews.yml`](_data/phase2_wave1_reviews.yml)

Wave 1 contains **38 reviewed candidates**: **32 strong**, **4 uncertain**, **1 overlap**, and **1 deferred** because of current access/closure conditions.

### Wave 2 — complete

Areas reviewed:

- Arkansas
- Connecticut
- Georgia
- Illinois
- Kentucky
- Louisiana
- Michigan
- Pennsylvania

Review file: [`_data/phase2_wave2_reviews.yml`](_data/phase2_wave2_reviews.yml)

Wave 2 adds **37 reviewed candidates** and deliberately broadens the research beyond scenic federal lands into historic urban districts, architecture, industrial history, gardens, islands, state parks, wildlife areas, archaeology, and privately/nonprofit-stewarded destinations.

### Wave 3 — complete

Areas reviewed:

- Minnesota
- Missouri
- South Dakota
- Texas

Review file: [`_data/phase2_wave3_reviews.yml`](_data/phase2_wave3_reviews.yml)

Wave 3 adds source-backed comparisons across scenic roads, state parks, Indigenous cultural landscapes, monumental architecture, caves, wildlife, national seashores, and major regional landscapes. It also explicitly flags Needles Highway as likely better represented inside a broader Custer State Park entry rather than as a separate Wonder.

Across Waves 1–3, **20 of 56 areas have completed a source-backed comparative candidate review**.

### Signature comparison flags so far

Comparative research has flagged these live Signature selections for Phase 2B review rather than automatic replacement:

- Puerto Rico
- Guam
- Connecticut
- Illinois
- Louisiana
- Pennsylvania

A Signature flag means the candidate pool is strong enough to require a deliberate comparison. It does **not** mean the live Signature should change.

### Remaining Phase 2A work

- [x] define research method and review statuses;
- [x] complete Wave 1 source/editorial review for 8 areas;
- [x] complete Wave 2 source/editorial review for 8 additional areas;
- [x] complete Wave 3 source/editorial review for 4 additional areas;
- [ ] continue research waves across the remaining 36 areas;
- [ ] broaden thin candidate pools where comparative review exposes obvious omissions;
- [ ] complete comparative review of all six district/territory Signature selections;
- [ ] continue Phase 2B classification in parallel on mature research pools.

All U.S. national parks are guaranteed eventual coverage, but their tier is not predetermined. [`NATIONAL_PARKS_COVERAGE.md`](NATIONAL_PARKS_COVERAGE.md) tracks that obligation separately so national parks do not dominate the general candidate workflow.

## Phase 2B — Editorial classification

**Status: PILOT IN PROGRESS — Waves 1 and 2 classified editorially; Phase 2C production has begun from approved pilot entries.**

The working pilot classification is [`_data/phase2b_pilot_classification.yml`](_data/phase2b_pilot_classification.yml).

The pilot assigns proposed ◆ / ○ roles only after source-backed Phase 2A review. It also records `hold` and `do-not-publish` decisions where a candidate is too broad, operationally unresolved, or insufficiently sourced.

Signature challenges remain comparison flags until a specific replacement decision is supported. Approved ◆ / ○ entries can move into Phase 2C in measured batches once full production intake is complete.

## Phase 2C — Production content expansion

**Status: IN PROGRESS — Batch 1 published / 6 new Wonders.**

The first production batch is documented in [`PHASE2C_BATCH1.md`](PHASE2C_BATCH1.md).

Batch 1 publishes:

| Area | Destination | Reason to go |
| --- | --- | --- |
| California | Big Sur Coast | ◆ Worth Traveling For |
| Florida | Myakka River State Park | ○ Worth the Detour |
| Georgia | Savannah Historic Landmark District | ◆ Worth Traveling For |
| Michigan | Mackinac Island | ◆ Worth Traveling For |
| Kentucky | Shaker Village of Pleasant Hill | ○ Worth the Detour |
| Alabama | Bon Secour National Wildlife Refuge | ○ Worth the Detour |

The public guide now contains **74 Wonders total — 56 ★, 9 ◆, and 9 ○**.

Batch 1 intentionally mixes a scenic coastal region, state park, historic urban district, island cultural landscape, nonprofit/private historic landscape, and federal wildlife refuge. This tests the guide's broader identity instead of simply adding more parks.

Every Batch 1 Wonder includes:

- approved editorial classification;
- public summary and rationale;
- official or authoritative source;
- navigation target;
- verified reusable imagery and attribution;
- experience tags;
- Phase 1C-style planning metadata;
- calendar-style visit windows;
- RV road/rig guidance;
- pet guidance;
- accessibility, photography, and wildlife context where meaningful.

Phase 2 planning data is stored in [`_data/travel_planning_phase2.yml`](_data/travel_planning_phase2.yml) and [`_data/planning_refinements_phase2.yml`](_data/planning_refinements_phase2.yml). The Wonder layout checks these files first and falls back to the original Phase 1C planning data for earlier destinations.

### Batch 1 validation before Batch 2

- [ ] confirm all six new cards appear in Explore and on their area pages;
- [ ] confirm search, Area, Reason to Go, and Experience filtering include the new records correctly;
- [ ] confirm mixed natural/cultural entries feel coherent together;
- [ ] confirm image crops and credits render correctly;
- [ ] confirm Phase 2 planning sections load correctly;
- [ ] confirm Big Sur current-conditions messaging is prominent enough given fire/road volatility;
- [ ] confirm RV and pet guidance reads as planning help rather than guaranteed access.

Do not turn Phase 2C into a large national dump. Continue with measured production batches while Phase 2A and Phase 2B advance in parallel.

## Dedicated branding / design / layout phase

A focused redesign remains deferred until the content model and broader inventory are proven. That phase can address brand identity, About-page storytelling, typography, color system, cards, header, How Places Qualify page, deeper mobile/PWA behavior, and other visual refinements.

## Later phases

Potential later development:

- map view;
- Near Me discovery;
- route-aware detours;
- PWA/offline support;
- visited / want-to-visit state;
- increased use of first-party photography.

## Current task

**Validate Phase 2C Batch 1 on the deployed site while continuing Phase 2A research on the remaining areas. If the batch reads cleanly, classify Wave 3 and prepare Batch 2 without changing any flagged Signature Wonder until its comparison is complete.**
