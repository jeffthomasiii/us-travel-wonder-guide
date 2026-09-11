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
- [ ] review the six first-pass Signature selections during Phase 2A comparative research;
- [ ] add planning metadata for the six new Signature Wonders during normal Phase 2 intake/backfill;
- [x] establish an explicit non-NPS diversity guardrail for Phase 2 research.

Verified imagery for the six expanded areas is stored in [`_data/expanded_signature_images.yml`](_data/expanded_signature_images.yml), using the same asset-level verification standard as the original 50-state manifest.

## Mobile functional baseline

**Status: IMPLEMENTED.**

Mobile uses persistent bottom navigation for **Home, Explore, Search, and Areas**, while the hamburger menu holds secondary/reference pages. This is the functional baseline for the current POC; a deeper installed-app/PWA navigation redesign can happen during the dedicated design phase.

## Phase 2A — Build the national candidate inventory

**Status: IN PROGRESS — 56-area seed inventory created.**

Goal: build the research pool before publishing large amounts of new content. Candidate counts are not quotas and candidate status does not imply inclusion.

The working backlog is [`_data/phase2_candidates.yml`](_data/phase2_candidates.yml). The initial seed pass gives every one of the 56 browse areas non-Signature candidates and deliberately mixes national parks with state/local lands, scenic roads, wildlife areas, cultural places, architecture, islands, regional landscapes, and other destination types.

Phase 2A research should:

1. broaden each area's candidate pool beyond the seed pass;
2. verify managing/official sources and basic travel viability;
3. identify obvious omissions, especially important non-NPS destinations;
4. compare candidates against the area's existing ★ Signature Wonder;
5. flag candidates as strong, uncertain, duplicate/overlapping, or not a fit;
6. avoid assigning ◆ / ○ merely to create numerical balance.

All U.S. national parks are guaranteed eventual coverage, but their tier is not predetermined. [`NATIONAL_PARKS_COVERAGE.md`](NATIONAL_PARKS_COVERAGE.md) tracks that obligation separately so national parks do not dominate the general candidate workflow.

## Phase 2B — Editorial classification

**Status: NOT STARTED.**

After candidate pools are sufficiently broad, classify destinations as ★, ◆, ○, or do-not-publish. Revisit a Signature selection when comparative research shows that another place makes a stronger case for that area.

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

**Continue Phase 2A candidate research across all 56 areas, broadening the seed inventory before assigning new ◆ / ○ tiers at scale.**
