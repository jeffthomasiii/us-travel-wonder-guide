# United States Travel & Wonder Guide — Project Plan

This file is the working roadmap for building the guide without letting content growth outrun quality, rights verification, or the core discovery experience.

## Guiding principle

The guide is a **U.S. travel discovery reference**, not a quota-driven state list and not a national-park directory. The primary geography includes the **50 states, Washington, D.C., and the five inhabited U.S. territories**. Each area begins with one **★ Signature Wonder**, then grows only where destinations genuinely justify **◆ Worth Traveling For** and **○ Worth the Detour** status.

See [`EDITORIAL_SCOPE.md`](EDITORIAL_SCOPE.md) for geographic and editorial boundaries.

## Phase 1A — Signature imagery

**Status: COMPLETE.**

The original 50 state Signature Wonders and the six later district/territory Signature Wonders have asset-level rights-verified imagery. Canonical manifests:

- `_data/signature_images.yml`
- `_data/expanded_signature_images.yml`

## Phase 1B — Mixed-tier pilot

**Status: COMPLETE.**

The six-state pilot validated mixed ★ / ◆ / ○ state pages, Explore filtering, tier-aware cards and detail pages, image attribution, and editorial hierarchy.

## Phase 1C — Travel-planning model

**Status: COMPLETE.**

The validated content model includes:

- calendar-style typical visit windows;
- visit length;
- RV access and road/rig considerations where researched;
- pet guidance where researched;
- accessibility;
- photography;
- wildlife;
- current-conditions / alerts links;
- reservation / permit links where useful;
- authoritative planning source;
- planning review date.

See [`CONTENT_MODEL.md`](CONTENT_MODEL.md).

## Geography expansion

**Status: COMPLETE — 56 primary browse areas.**

The guide covers:

- 50 states
- Washington, D.C.
- Puerto Rico
- U.S. Virgin Islands
- Guam
- Northern Mariana Islands
- American Samoa

The U.S. Minor Outlying Islands remain outside the ordinary browse model unless a real travel/editorial case emerges.

The six added Signature Wonders also now have verified imagery, planning metadata, and calendar-style visit windows.

## Mobile functional baseline

**Status: COMPLETE.**

Mobile uses persistent bottom navigation for **Home, Explore, Search, and Areas**, while the hamburger menu holds secondary/reference pages. This remains a functional baseline rather than the final installed-app/PWA design.

## Phase 2A — National candidate research

**Status: COMPLETE FOR THE NATIONAL BASELINE PASS.**

The Phase 2 seed inventory established a broad cross-country candidate pool, and deeper comparative research waves tested the method across 20 areas before national production accelerated.

Research files remain useful as an ongoing editorial backlog:

- `_data/phase2_candidates.yml`
- `_data/phase2_wave1_reviews.yml`
- `_data/phase2_wave2_reviews.yml`
- `_data/phase2_wave3_reviews.yml`
- `PHASE2_RESEARCH_METHOD.md`

Phase 2A completion does **not** mean no additional candidate research will ever happen. It means national research is no longer a prerequisite for proving the content system. Future candidate discovery becomes continuous editorial maintenance.

## Phase 2B — Editorial classification

**Status: COMPLETE FOR THE NATIONAL BASELINE PASS.**

The pilot classification established the approval / hold / do-not-publish process and demonstrated that Signature selections can be challenged without automatic replacement.

The working classification record remains `_data/phase2b_pilot_classification.yml`.

Future additions should continue to follow the same standard: classify by actual trip value, not by quotas, designation type, agency, or a desire to visually balance states.

## Phase 2C — Production content expansion

**Status: COMPLETE — national baseline published.**

Completion is documented in [`PHASE2C_COMPLETION.md`](PHASE2C_COMPLETION.md).

The live content model now contains:

- **120 Wonders total**
- **56 ★ Signature Wonders**
- **51 ◆ Worth Traveling For**
- **13 ○ Worth the Detour**
- at least **one non-Signature Wonder in every one of the 56 primary areas**

This is intentionally a **baseline**, not a final destination count. Counts should continue to become uneven as stronger research reveals more qualifying places in destination-dense areas.

### Phase 2C image rule

The rights standard was not relaxed to complete the phase.

- all 56 Signature Wonders have verified imagery;
- the original mixed-tier pilot and Phase 2C Batch 1 have verified imagery;
- later national expansion entries use the neutral media fallback until an individual reusable asset is verified.

### Phase 2C planning rule

All three production generations can render the validated planning model. Later national expansion records include authoritative planning sources, visit length, and calendar-style visit windows, with current-condition links where stable endpoints are available. Richer RV, pet, accessibility, photography, and wildlife backfill can continue editorially without blocking the completed milestone.

## National parks coverage

All U.S. national parks remain guaranteed eventual coverage, but they are only one subset of the guide and do not define the organizing structure.

See [`NATIONAL_PARKS_COVERAGE.md`](NATIONAL_PARKS_COVERAGE.md).

## Dedicated branding / design / layout phase

**Status: NEXT.**

The content structure is now deep enough to redesign against real inventory instead of placeholders.

This phase should address:

- brand identity and visual system;
- homepage composition and hierarchy;
- primary header / navigation;
- true mobile-app-style interaction patterns;
- States & Territories browse experience;
- Explore / search / filter presentation;
- Wonder card system at higher content density;
- destination-detail hierarchy;
- How Places Qualify page;
- About-page storytelling and project purpose;
- typography, color, spacing, iconography, image treatment, and fallback treatment;
- PWA/installable experience decisions if still desired.

The redesign should preserve the proven data and editorial model rather than forcing content changes for visual symmetry.

## Later functional phases

After the redesign, potential development includes:

- map view;
- Near Me discovery;
- route-aware detours;
- PWA/offline support;
- visited / want-to-visit state stored locally;
- deeper rights-verified image backfill;
- increased use of first-party photography;
- continuous candidate research and editorial additions.

## Current task

**Phase 2C is complete. The next major project phase is the dedicated branding / design / layout redesign using the 120-Wonder national baseline as the real design dataset.**
