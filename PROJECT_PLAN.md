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

### Approved image-source hierarchy

1. **First-party/original photography** — future preferred source where available.
2. **Verified public-domain government imagery** — NPS, USFWS, USFS, BLM, NOAA, state agencies, etc.; verify the specific asset because not every image on a government site is necessarily public domain.
3. **Wikimedia Commons** — only when the specific file page provides a reusable license and required attribution can be recorded.
4. **Licensed public image providers** — e.g. Unsplash, when the applicable license and attribution/link requirements are clear.
5. **Manual fallback** — retain the site's neutral placeholder rather than use an image with uncertain rights.

### Required image metadata

```yaml
image_url: ...
image_credit: ...
image_source_url: ...
image_rights: ...
image_verified: true
```

`image_credit` must remain concise and human-readable. `image_source_url` should point to the specific asset/file record whenever possible, not merely an agency or site homepage.

### Phase 1A completion record

- [x] 50 / 50 Signature Wonders have verified main images.
- [x] 50 / 50 image records have source, credit, rights, and verification metadata.
- [x] The image data is centralized in `_data/signature_images.yml` for ongoing rights audits.
- [x] Signature cards and Wonder pages consume the manifest consistently.
- [x] No unverified image was used merely to eliminate a placeholder.

Phase 1A should be reopened only when replacing an image, changing a Signature Wonder, or correcting an attribution/license record.

## Phase 1B — Pilot mixed-tier content

**Status: IN PROGRESS — pilot content populated; rendered-site validation pending.**

Goal: prove that the site, filters, state pages, and editorial model work when all three tiers coexist.

### Pilot states

The six pilot states were selected deliberately to test different geographies, travel patterns, destination densities, and source agencies:

- **California** — large western state with many nationally significant destinations
- **Utah** — dense concentration of scenic destinations and strong tier-boundary pressure
- **Maine** — coast plus inland wilderness
- **Michigan** — Great Lakes landscapes and a compact roadside natural feature
- **Oklahoma** — useful test against common geographic stereotypes
- **Delaware** — small state where the guide must remain useful without forcing quantity

### Pilot destinations added

Each pilot state now contains its existing ★ Signature Wonder plus one ◆ Worth Traveling For and one ○ Worth the Detour destination:

| State | ◆ Worth Traveling For | ○ Worth the Detour |
| --- | --- | --- |
| California | Redwood National and State Parks | Alabama Hills National Scenic Area |
| Utah | Bryce Canyon National Park | Goblin Valley State Park |
| Maine | Baxter State Park | Quoddy Head State Park |
| Michigan | Sleeping Bear Dunes National Lakeshore | Kitch-iti-kipi |
| Oklahoma | Beavers Bend State Park | Gloss Mountain State Park |
| Delaware | Bombay Hook National Wildlife Refuge | Trap Pond State Park |

This adds **12 pilot destinations** and brings the guide to **62 total Wonders**: 50 ★, 6 ◆, and 6 ○.

### Phase 1B intake rules

Every new pilot destination entered with:

- a deliberate tier assignment;
- concise editorial rationale;
- official or managing-agency source;
- useful navigation query;
- experience tags;
- verified image rights and attribution metadata.

No destination was added simply to balance a state numerically.

### Phase 1B implementation checks completed

- [x] Explore already supports state, tier, experience, and text filtering.
- [x] Wonder cards already render distinct ★ / ◆ / ○ labels and tier classes.
- [x] Wonder detail pages were updated to display the correct tier instead of assuming ★.
- [x] State pages were updated to support mixed tiers and present ★ first, ◆ second, ○ third.
- [x] All 12 pilot entries include verified imagery or rights metadata.
- [x] Search data includes place, state, region, and experience terms for the new entries.

### Remaining Phase 1B validation

Before closing Phase 1B, visually review the deployed site for:

- mixed-tier card hierarchy on each pilot state page;
- tier-filter behavior on Explore;
- search behavior with the new place, region, and experience terms;
- image crops and credit presentation;
- whether the editorial distinction between ◆ and ○ feels understandable when seen in real content.

Design/branding polish is intentionally deferred. Only issues that obscure content hierarchy or functionality should block Phase 1B completion.

## Phase 1C — Validate the content model

**Status: NOT STARTED**

After the Phase 1B pilot is visually validated, decide whether the Wonder record needs additional fields such as:

- best season;
- photography notes;
- wildlife potential;
- RV suitability;
- dog considerations;
- accessibility;
- reservations/permits;
- current conditions;
- navigation targets;
- nearby wonders.

Only add fields that materially improve trip discovery or planning.

## Phase 2 — Expand the guide nationally

**Status: NOT STARTED**

Grow ◆ and ○ destinations state by state, based on merit rather than quotas. The guide should be comfortable with uneven counts: California or Utah may legitimately contain many more qualifying entries than another state.

Each new Wonder should enter with:

- tier assignment;
- concise editorial rationale;
- official source;
- useful navigation target;
- verified imagery or fallback;
- relevant experience tags.

## Dedicated branding / design / layout phase

A focused design pass is intentionally deferred until the content model and mixed-tier behavior are proven. That later phase can address typography, spacing, navigation styling, cards, color system, mobile refinement, and broader visual identity without interrupting content preparation.

## Later phases

Potential future development after the content system is stable:

- map view;
- Near Me discovery;
- route-aware detours;
- richer trip-planning metadata;
- PWA/offline support;
- visited / want-to-visit state stored locally;
- increased use of first-party photography.

## Current task

**Visually validate the six-state Phase 1B mixed-tier pilot. Do not begin broad national ◆ / ○ expansion until that pilot confirms the tier model and content structure are working.**
