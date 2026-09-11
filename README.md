# United States Travel & Wonder Guide

A GitHub Pages/Jekyll proof of concept built around a simple premise: **every U.S. state has somewhere worth seeing**.

The guide starts with one **★ Signature Wonder** in all 50 states. It is intentionally structured so each state can later grow naturally with **◆ Worth Traveling For** and **○ Worth the Detour** destinations without forcing equal numbers of entries per state.

## Current build phase

**Phase 1A — Complete verified imagery for all 50 Signature Wonders — IN PROGRESS.**

The detailed phased roadmap, completion criteria, image-source hierarchy, and rules for moving into mixed-tier content are maintained in [`PROJECT_PLAN.md`](PROJECT_PLAN.md). That file is the source of truth for sequencing the work so the guide does not expand faster than its visual and editorial quality can support.

## What is included in this POC

- 50 states and 50 first-pass Signature Wonders
- Separate Home, Explore, States, Tiers, and About pages
- Search plus state, tier, and experience filtering
- Individual state pages
- Individual Wonder pages
- Official-site link for every Wonder
- Mobile-friendly **Navigate** action with Google Maps, Apple Maps and Waze choices
- Image-rights/credit metadata fields
- Verified public-domain image workflow in active use during Phase 1A
- Responsive desktop/mobile styling
- Jekyll collections so content is separate from presentation
- `_data/signature_wonders.yml` as a quick master inventory

## Editorial tiers

- **★ Signature Wonder** — the one destination that best makes the case for the state.
- **◆ Worth Traveling For** — significant enough to build part of a trip around.
- **○ Worth the Detour** — worth making time for when already nearby.

Only the Signature tier is populated nationally in this first repo pass. The other tiers will be introduced deliberately through the Phase 1B pilot described in `PROJECT_PLAN.md`.

## Create the GitHub repository

Recommended repository name:

`us-travel-wonder-guide`

Recommended GitHub description:

`A photo-forward, mobile-friendly guide to the natural and scenic wonders worth discovering across all 50 U.S. states.`

Recommended visibility:

`Public`

Recommended initialization choices when creating the repo:

- **Add README:** No — this starter already contains one.
- **Add .gitignore:** No — included.
- **Choose a license:** No — an MIT license file is included. Change it before publishing if you prefer a different license.

## Enable GitHub Pages

In the repository:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**.
4. Save.
5. GitHub will build the Jekyll site and provide the Pages URL.

The current project-site configuration is set for `https://jeffthomasiii.github.io/us-travel-wonder-guide/`. The templates use `relative_url` so internal links remain portable if the hosting arrangement changes later.

## Content architecture

```text
_config.yml
PROJECT_PLAN.md              # phased roadmap and image workflow
_data/
  signature_wonders.yml      # easy-to-review 50-state inventory
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
  ...                        # 50 state records
_wonders/
  little-river-canyon-national-preserve.md
  ...                        # Wonder records
assets/
  css/site.css
  js/site.js
index.html
explore.html
states.html
tiers.html
about.md
```

## Wonder record model

Every Wonder is a Markdown file with YAML front matter. The current model supports the active image workflow and future travel-planning metadata:

```yaml
---
title: Yosemite National Park
state: California
state_slug: california
tier: signature
region: Sierra Nevada
official_url: https://www.nps.gov/yose/index.htm
navigation_query: Yosemite Valley Visitor Center, Yosemite National Park, California
experiences:
  - granite
  - waterfalls
  - wildlife
  - photography
summary: ...
why: ...
image_url: ...
image_credit: NPS · Photographer Name · Public domain
image_source_url: ...
image_rights: public-domain
image_verified: true
---
```

Future fields can be added without redesigning the site, for example:

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

## Image policy

Do **not** treat an image found on an official website as automatically reusable. Verify the rights of each individual asset and store the source, photographer/agency, rights statement and verification status.

During Phase 1A, a Wonder retains the site fallback artwork until a specific image passes the verification workflow in `PROJECT_PLAN.md`. This lets the content remain live without introducing questionable image licensing.

## Development sequence

The active sequence is maintained in [`PROJECT_PLAN.md`](PROJECT_PLAN.md):

1. **Phase 1A:** complete verified imagery for all 50 ★ Signature Wonders.
2. **Phase 1B:** add mixed ◆ / ○ content in a 5–6 state pilot.
3. **Phase 1C:** validate filters, state hierarchy, imagery, and the destination data model.
4. **Phase 2:** expand Worth Traveling For and Worth the Detour content nationally based on merit, not quotas.

Major visual redesign should not displace the current Phase 1A imagery pass unless a design issue directly affects image presentation or usability.

## Local preview (optional)

If Ruby/Jekyll is installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open the local address shown by Jekyll, normally `http://127.0.0.1:4000/`.
