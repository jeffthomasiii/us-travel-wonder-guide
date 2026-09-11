# United States Travel & Wonder Guide — Project Plan

This file is the working roadmap for building the guide without letting content growth outrun quality, rights verification, or the core discovery experience.

## Guiding principle

The guide is a **travel discovery reference**, not a quota-driven 50-state list. Every state begins with one **★ Signature Wonder**, then grows only where destinations genuinely justify **◆ Worth Traveling For** and **○ Worth the Detour** status.

## Phase 1A — Complete imagery for all 50 Signature Wonders

**Status: COMPLETE — 50 / 50 Signature Wonders (100%).**

Goal: every existing ★ Signature Wonder has a strong, verified, properly credited main image.

### Completed workflow

For each Signature Wonder we:

1. confirmed the destination remained a defensible first-pass ★ selection;
2. selected a representative image rather than signage, logos, or generic visitor infrastructure;
3. verified reuse rights for the individual image, not merely the website hosting it;
4. recorded the image URL, specific source page, creator/agency credit, rights, and verification status;
5. kept attribution visible in the card/detail experience and linked the credit back to the source record.

The canonical Phase 1A audit file is [`_data/signature_images.yml`](_data/signature_images.yml). It contains one verified image record for every state and allows the 50-state image set to be reviewed in one place.

### Phase 1A completion record

- [x] 50 / 50 Signature Wonders have verified main images.
- [x] 50 / 50 image records have source, credit, rights, and verification metadata.
- [x] The image data is centralized in `_data/signature_images.yml` for ongoing rights audits.
- [x] Signature cards and Wonder pages consume the manifest consistently.
- [x] No unverified image was used merely to eliminate a placeholder.

Phase 1A should be reopened only when replacing an image, changing a Signature Wonder, or correcting an attribution/license record.

## Phase 1B — Pilot mixed-tier content

**Status: COMPLETE — 6 pilot states / 12 added destinations.**

Goal: prove that the site, filters, state pages, and editorial model work when all three tiers coexist.

### Pilot states

- **California** — large western state with many nationally significant destinations
- **Utah** — dense concentration of scenic destinations and strong tier-boundary pressure
- **Maine** — coast plus inland wilderness
- **Michigan** — Great Lakes landscapes and a compact roadside natural feature
- **Oklahoma** — useful test against common geographic stereotypes
- **Delaware** — small state where the guide must remain useful without forcing quantity

### Pilot destinations

| State | ◆ Worth Traveling For | ○ Worth the Detour |
| --- | --- | --- |
| California | Redwood National and State Parks | Alabama Hills National Scenic Area |
| Utah | Bryce Canyon National Park | Goblin Valley State Park |
| Maine | Baxter State Park | Quoddy Head State Park |
| Michigan | Sleeping Bear Dunes National Lakeshore | Kitch-iti-kipi |
| Oklahoma | Beavers Bend State Park | Gloss Mountain State Park |
| Delaware | Bombay Hook National Wildlife Refuge | Trap Pond State Park |

This added **12 pilot destinations** and brought the guide to **62 total Wonders**: 50 ★, 6 ◆, and 6 ○.

### Phase 1B completion record

- [x] State, tier, experience, and text filtering supported on Explore.
- [x] Search visibility bug corrected so non-matching cards are actually removed from layout.
- [x] Wonder cards render distinct ★ / ◆ / ○ labels and tier classes.
- [x] Wonder detail pages display the correct tier.
- [x] Pilot state pages display ★ first, ◆ second, ○ third.
- [x] All 12 pilot entries include deliberate tier rationale, official source, navigation query, experience tags, and verified image metadata.
- [x] Live six-state pilot visually reviewed and accepted as structurally sound.

Design/branding polish remains intentionally deferred.

## Phase 1C — Validate the content model

**Status: IN PROGRESS — pilot planning model implemented for all 18 Wonders in the six pilot states.**

Goal: decide what practical travel-planning information materially improves the guide before national content expansion.

The working schema is documented in [`CONTENT_MODEL.md`](CONTENT_MODEL.md).

### Phase 1C fields selected

The pilot now tests:

- broad best seasons;
- practical visit length;
- normalized RV access plus notes;
- normalized dog access plus notes;
- accessibility guidance;
- photography guidance;
- notable wildlife;
- official current-conditions/alerts link;
- optional reservation/permit link;
- official planning source;
- planning metadata review date.

The pilot metadata is centralized in [`_data/travel_planning.yml`](_data/travel_planning.yml), keyed by Wonder slug. The Wonder detail layout renders this information only when it exists, so destinations outside the pilot continue to work unchanged.

### Fields intentionally deferred

- nearby wonders — wait until the national inventory is denser;
- multiple navigation targets — wait for map/navigation work;
- exact fees — too volatile;
- exact seasonal opening dates — too volatile;
- live weather — future dynamic integration;
- detailed campground inventories — outside the discovery-guide scope.

### Phase 1C pilot coverage

All 18 Wonders in the six pilot states now have Phase 1C planning metadata:

- California: Yosemite, Redwood, Alabama Hills
- Utah: Zion, Bryce Canyon, Goblin Valley
- Maine: Acadia, Baxter, Quoddy Head
- Michigan: Pictured Rocks, Sleeping Bear Dunes, Kitch-iti-kipi
- Oklahoma: Wichita Mountains, Beavers Bend, Gloss Mountain
- Delaware: Cape Henlopen, Bombay Hook, Trap Pond

### Remaining Phase 1C validation

Before closing Phase 1C:

- [ ] confirm the rendered planning sections are useful without feeling overloaded;
- [ ] confirm RV and dog categories are understandable alongside their notes;
- [ ] confirm official conditions/reservation links are prominent enough to discourage stale operational guidance;
- [ ] determine whether any selected field should be removed before national rollout;
- [ ] confirm the model is ready to become normal intake for Phase 2 destinations.

## Phase 2 — Expand the guide nationally

**Status: NOT STARTED**

Grow ◆ and ○ destinations state by state, based on merit rather than quotas. The guide should be comfortable with uneven counts: California or Utah may legitimately contain many more qualifying entries than another state.

Each new Wonder should enter with:

- tier assignment;
- concise editorial rationale;
- official source;
- useful navigation target;
- verified imagery or fallback;
- relevant experience tags;
- Phase 1C travel-planning metadata when reliable official information is available.

## Dedicated branding / design / layout phase

A focused design pass is intentionally deferred until the content model and national content structure are proven. That later phase can address typography, spacing, navigation styling, cards, color system, mobile refinement, and broader visual identity without interrupting content preparation.

## Later phases

Potential future development after the content system is stable:

- map view;
- Near Me discovery;
- route-aware detours;
- PWA/offline support;
- visited / want-to-visit state stored locally;
- increased use of first-party photography.

## Current task

**Validate the Phase 1C planning-information experience on the six pilot states. If the model reads well in the live site, close Phase 1C and begin national ◆ / ○ expansion in Phase 2 before the dedicated branding/design/layout pass.**
