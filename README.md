# United States Travel & Wonder Guide

A GitHub Pages/Jekyll proof of concept built around a simple premise: **every U.S. state has somewhere worth seeing**.

The guide starts with one **★ Signature Wonder** in all 50 states, then grows naturally with **◆ Worth Traveling For** and **○ Worth the Detour** destinations without forcing equal numbers of entries per state.

## Current build phase

**Phase 1A — Complete verified imagery for all 50 Signature Wonders — COMPLETE (50/50).**

**Phase 1B — Six-state mixed-tier pilot — COMPLETE.**

**Phase 1C — Travel-planning content model pilot — IN PROGRESS.**

The detailed phased roadmap and completion criteria are maintained in [`PROJECT_PLAN.md`](PROJECT_PLAN.md). The selected planning schema is documented in [`CONTENT_MODEL.md`](CONTENT_MODEL.md).

## What is included in this POC

- 50 states and 50 first-pass Signature Wonders
- 12 Phase 1B pilot destinations across California, Utah, Maine, Michigan, Oklahoma, and Delaware
- Current inventory: **62 Wonders total — 50 ★, 6 ◆, 6 ○**
- Verified, credited imagery for the full current inventory
- `_data/signature_images.yml` as the canonical 50-state Signature image-rights manifest
- `_data/travel_planning.yml` as the Phase 1C planning metadata pilot for all 18 Wonders in the six pilot states
- Separate Home, Explore, States, Tiers, and About pages
- Search plus state, tier, and experience filtering
- Individual state pages with mixed-tier hierarchy
- Individual Wonder pages with tier-aware labels and optional planning sections
- Official-site, current-conditions, reservation/permit, image-rights, and navigation links where applicable
- Mobile-friendly **Navigate** action with Google Maps, Apple Maps and Waze choices
- Responsive desktop/mobile styling
- Jekyll collections so content is separate from presentation

## Editorial tiers

- **★ Signature Wonder** — the one destination that best makes the case for the state.
- **◆ Worth Traveling For** — significant enough to build part of a trip around.
- **○ Worth the Detour** — worth making time for when already nearby.

The three tiers are represented in the six-state pilot and were validated before moving into planning-data work.

## Phase 1B pilot

| State | ★ Signature | ◆ Worth Traveling For | ○ Worth the Detour |
| --- | --- | --- | --- |
| California | Yosemite National Park | Redwood National and State Parks | Alabama Hills National Scenic Area |
| Utah | Zion National Park | Bryce Canyon National Park | Goblin Valley State Park |
| Maine | Acadia National Park | Baxter State Park | Quoddy Head State Park |
| Michigan | Pictured Rocks National Lakeshore | Sleeping Bear Dunes National Lakeshore | Kitch-iti-kipi |
| Oklahoma | Wichita Mountains Wildlife Refuge | Beavers Bend State Park | Gloss Mountain State Park |
| Delaware | Cape Henlopen State Park | Bombay Hook National Wildlife Refuge | Trap Pond State Park |

These states were chosen to test different geographies and destination densities rather than to establish a three-entry quota.

## Phase 1C planning model

The guide now tests the following optional planning fields on all 18 Wonders in the six pilot states:

```yaml
best_seasons: []
visit_length:
rv_access:
rv_notes:
dog_access:
dog_notes:
accessibility:
photography:
wildlife: []
conditions_url:
reservation_url:
planning_source_url:
planning_last_reviewed:
```

The model intentionally stores durable discovery guidance and points rapidly changing information—conditions, alerts, reservations, permits, and operational rules—back to official sources.

See [`CONTENT_MODEL.md`](CONTENT_MODEL.md) for field definitions, normalization rules, deferred fields, and maintenance guidance.

## GitHub Pages

The current project-site configuration is set for:

`https://jeffthomasiii.github.io/us-travel-wonder-guide/`

The templates use `relative_url` so internal links remain portable if the hosting arrangement changes later.

## Content architecture

```text
_config.yml
PROJECT_PLAN.md                 # phased roadmap and workflow
CONTENT_MODEL.md                # Phase 1C destination metadata schema
_data/
  signature_wonders.yml         # 50-state Signature destination inventory
  signature_images.yml          # canonical Phase 1A Signature image/rights manifest
  travel_planning.yml           # Phase 1C pilot planning metadata
_includes/
  header.html
  footer.html
  nav_sheet.html
  wonder_card.html
_layouts/
  default.html
  state.html
  wonder.html
_states/
  alabama.md
  ...                           # 50 state records
_wonders/
  little-river-canyon-national-preserve.md
  redwood-national-and-state-parks.md
  ...                           # Signature + pilot Wonder records
assets/
  css/site.css
  js/site.js
index.html
explore.html
states.html
tiers.html
about.md
```

## Image policy

Do **not** treat an image found on an official website as automatically reusable. Verify the rights of each individual asset and store the source, photographer/agency, rights statement and verification status.

The 50 Signature Wonder images completed in Phase 1A are maintained in `_data/signature_images.yml`. New ◆ and ○ destinations store the same verified metadata in their Wonder front matter.

When rights are uncertain, use the neutral site fallback instead of introducing an unverified image.

## Development sequence

The active sequence is maintained in [`PROJECT_PLAN.md`](PROJECT_PLAN.md):

1. **Phase 1A:** verified imagery for all 50 ★ Signature Wonders — **complete**.
2. **Phase 1B:** six-state mixed ◆ / ○ pilot — **complete**.
3. **Phase 1C:** validate the selected travel-planning content model on all 18 pilot-state Wonders — **in progress**.
4. **Phase 2:** expand Worth Traveling For and Worth the Detour content nationally based on merit, not quotas.
5. **Dedicated branding/design/layout phase:** refine visual identity after the content structure is proven rather than interrupting content preparation now.

## Local preview (optional)

If Ruby/Jekyll is installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open the local address shown by Jekyll, normally `http://127.0.0.1:4000/`.
