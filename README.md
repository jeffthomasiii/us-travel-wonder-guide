# United States Travel & Wonder Guide

A GitHub Pages/Jekyll proof of concept built around a simple premise: **every U.S. state has somewhere worth seeing**.

The guide starts with one **★ Signature Wonder** in all 50 states. It is intentionally structured so each state can later grow naturally with **◆ Worth Traveling For** and **○ Worth the Detour** destinations without forcing equal numbers of entries per state.

## Current build phase

**Phase 1A — Complete verified imagery for all 50 Signature Wonders — COMPLETE (50/50).**

**Phase 1B — Pilot mixed-tier content in 5–6 varied states — NEXT.**

The detailed phased roadmap, completion criteria, image-source hierarchy, and rules for moving into mixed-tier content are maintained in [`PROJECT_PLAN.md`](PROJECT_PLAN.md).

## What is included in this POC

- 50 states and 50 first-pass Signature Wonders
- Verified, credited main imagery for all 50 Signature Wonders
- `_data/signature_images.yml` as the canonical 50-state image-rights manifest
- Separate Home, Explore, States, Tiers, and About pages
- Search plus state, tier, and experience filtering
- Individual state pages
- Individual Wonder pages
- Official-site link for every Wonder
- Mobile-friendly **Navigate** action with Google Maps, Apple Maps and Waze choices
- Responsive desktop/mobile styling
- Jekyll collections so content is separate from presentation
- `_data/signature_wonders.yml` as the quick master destination inventory

## Editorial tiers

- **★ Signature Wonder** — the one destination that best makes the case for the state.
- **◆ Worth Traveling For** — significant enough to build part of a trip around.
- **○ Worth the Detour** — worth making time for when already nearby.

Only the Signature tier is populated nationally in this first repo pass. The other tiers will be introduced deliberately through the Phase 1B pilot described in `PROJECT_PLAN.md`.

## GitHub Pages

The current project-site configuration is set for:

`https://jeffthomasiii.github.io/us-travel-wonder-guide/`

The templates use `relative_url` so internal links remain portable if the hosting arrangement changes later.

## Content architecture

```text
_config.yml
PROJECT_PLAN.md                 # phased roadmap and workflow
_data/
  signature_wonders.yml         # 50-state destination inventory
  signature_images.yml          # canonical Phase 1A image/rights manifest
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
  ...                           # Wonder records
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

The 50 Signature Wonder images completed in Phase 1A are maintained in `_data/signature_images.yml`. Each entry contains:

```yaml
image_url: ...
image_credit: ...
image_source_url: ...
image_rights: ...
image_verified: true
```

The Signature card and Wonder-page templates consume that manifest directly. New ◆ and ○ destinations introduced in Phase 1B should follow the same verification standard before using an image; when rights are uncertain, use the neutral site fallback instead.

## Future Wonder metadata

The destination model can grow without redesigning the site. Candidate fields include:

```yaml
best_seasons:
rv:
dogs:
accessibility:
photography:
wildlife:
reservation_url:
conditions_url:
nearby_wonders:
navigation_targets:
```

Only fields that materially improve discovery or travel planning should be added.

## Development sequence

The active sequence is maintained in [`PROJECT_PLAN.md`](PROJECT_PLAN.md):

1. **Phase 1A:** verified imagery for all 50 ★ Signature Wonders — **complete**.
2. **Phase 1B:** add mixed ◆ / ○ content in a 5–6 state pilot — **next**.
3. **Phase 1C:** validate filters, state hierarchy, imagery, and the destination data model.
4. **Phase 2:** expand Worth Traveling For and Worth the Detour content nationally based on merit, not quotas.

## Local preview (optional)

If Ruby/Jekyll is installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open the local address shown by Jekyll, normally `http://127.0.0.1:4000/`.
