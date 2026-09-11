# United States Travel & Wonder Guide — Project Plan

This file is the working roadmap for building the guide without letting content growth outrun quality, rights verification, or the core discovery experience.

## Guiding principle

The guide is a **U.S. travel discovery reference**, not a quota-driven state list and not a national-park directory. The primary geography now includes the **50 states, Washington, D.C., and the five inhabited U.S. territories**. Each area begins with one **★ Signature Wonder**, then grows only where destinations genuinely justify **◆ Worth Traveling For** and **○ Worth the Detour** status.

See [`EDITORIAL_SCOPE.md`](EDITORIAL_SCOPE.md) for geographic and editorial boundaries.

## Phase 1A — Original 50-state Signature imagery

**Status: COMPLETE — 50 / 50 original state Signature Wonders.**

The canonical rights audit remains [`_data/signature_images.yml`](_data/signature_images.yml). The six district/territory Signature Wonders added later are a separate geography-expansion image pass and intentionally keep the neutral fallback until their images are individually rights-verified.

## Phase 1B — Mixed-tier pilot

**Status: COMPLETE — 6 pilot states / 12 added destinations.**

Pilot states: California, Utah, Maine, Michigan, Oklahoma, and Delaware.

The pilot validated all three reasons to go, mixed-tier state pages, Explore filtering, and the basic content hierarchy.

## Phase 1C — Travel-planning content model

**Status: IN PROGRESS — implemented for all 18 Wonders in the six pilot states.**

The working schema is documented in [`CONTENT_MODEL.md`](CONTENT_MODEL.md). Current planning guidance includes typical calendar visit windows, visit length, RV access and road/rig considerations, pet access, accessibility, photography, wildlife, official conditions, reservations/permits where useful, planning source, and review date.

Design and branding work remains intentionally deferred except for functional usability changes.

## Geography expansion — states, D.C. and inhabited territories

**Status: IMPLEMENTED — 56 primary browse areas / 68 Wonders total.**

The guide now includes:

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

- [ ] complete asset-level image-rights research for the six new Signature Wonders;
- [ ] review the six first-pass Signature selections with the same rigor as the original 50;
- [ ] add Phase 1C planning metadata for the six new Signature Wonders when the model is finalized;
- [ ] ensure future Phase 2 expansion covers non-NPS destinations deliberately rather than defaulting to federal park inventory.

## Mobile functional baseline

**Status: IMPLEMENTED.**

Mobile now uses persistent bottom navigation for **Home, Explore, Search, and Areas**, while the hamburger menu holds secondary/reference pages. This is the functional baseline for the current POC; a deeper installed-app/PWA navigation redesign can happen during the dedicated design phase.

## Phase 2 — Expand nationally

**Status: NOT STARTED.**

Grow ◆ and ○ destinations across all 56 browse areas based on merit rather than quotas. Larger or more destination-dense areas may legitimately contain many more entries than others.

Each new Wonder should enter with:

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

**Finish Phase 1C validation, complete the six-area geography-expansion image/planning follow-up, then begin Phase 2 content expansion across the full 56-area scope.**
