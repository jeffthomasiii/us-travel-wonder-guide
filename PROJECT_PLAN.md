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

**Status: IMPLEMENTED — 56 primary browse areas / 68 Wonders total.**

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

**Status: IN PROGRESS — seed inventory complete; two comparative research waves complete covering 16 areas.**

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

Across Waves 1 and 2, **16 of 56 areas have completed a source-backed comparative candidate review**.

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
- [ ] continue research waves across the remaining 40 areas;
- [ ] broaden thin candidate pools where comparative review exposes obvious omissions;
- [ ] complete comparative review of all six district/territory Signature selections;
- [ ] continue Phase 2B classification in parallel on mature research pools.

All U.S. national parks are guaranteed eventual coverage, but their tier is not predetermined. [`NATIONAL_PARKS_COVERAGE.md`](NATIONAL_PARKS_COVERAGE.md) tracks that obligation separately so national parks do not dominate the general candidate workflow.

## Phase 2B — Editorial classification

**Status: PILOT IN PROGRESS — Waves 1 and 2 classified editorially; nothing published from this file yet.**

The working pilot classification is [`_data/phase2b_pilot_classification.yml`](_data/phase2b_pilot_classification.yml).

The pilot assigns proposed ◆ / ○ roles only after source-backed Phase 2A review. It also records `hold` and `do-not-publish` decisions where a candidate is too broad, operationally unresolved, or insufficiently sourced.

The classification file does not modify the live site. Signature challenges remain comparison flags until a specific replacement decision is supported, and newly approved ◆ / ○ entries do not become public until Phase 2C production intake is complete.

## Phase 2C — Production content expansion

**Status: NOT STARTED.**

Publish approved destinations with:

- deliberate reason-to-go assignment;
- concise editorial rationale;
- official or authoritative source;
- useful navigation target;
- verified imagery or neutral fallback;
- relevant experience tags;
- Phase 1C planning metadata when reliable information is available.

The first Phase 2C production batch should come from the Phase 2B pilot rather than waiting for all 56 areas to complete research. A small production wave will test whether the expanded editorial model still reads well when many more destinations and non-natural/cultural places enter the live guide.

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

**Continue Phase 2A Wave 3 on additional areas while preparing a small Phase 2C production batch from already-classified candidates. Do not publish a large national dump; test the production workflow with a deliberate mixed set of natural, cultural, state/local, and federal destinations first.**
