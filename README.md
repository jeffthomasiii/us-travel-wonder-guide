# United States Travel & Wonder Guide

A GitHub Pages/Jekyll proof of concept built around a simple premise: **every U.S. state has somewhere worth seeing**.

The guide starts with one **★ Signature Wonder** in all 50 states. It is intentionally structured so each state can later grow naturally with **◆ Worth Traveling For** and **○ Worth the Detour** destinations without forcing equal numbers of entries per state.

## What is included in this POC

- 50 states and 50 first-pass Signature Wonders
- Home-page discovery grid with search and state filtering
- Individual state pages
- Individual Wonder pages
- Official-site link for every Wonder
- Mobile-friendly **Navigate** action with Google Maps, Apple Maps and Waze choices
- Image-rights/credit metadata fields
- One fully demonstrated verified public-domain image workflow (Yosemite/NPS)
- Responsive desktop/mobile styling
- Jekyll collections so content is separate from presentation
- `_data/signature_wonders.yml` as a quick master inventory

## Editorial tiers

- **★ Signature Wonder** — the one destination that best makes the case for the state.
- **◆ Worth Traveling For** — significant enough to build part of a trip around.
- **○ Worth the Detour** — worth making time for when already nearby.

Only the Signature tier is populated in this first repo pass.

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

After GitHub creates the empty repository, copy this entire folder into your local clone (or upload all files), commit, and push to `main`.

## Enable GitHub Pages

In the repository:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**.
4. Save.
5. GitHub will build the Jekyll site and provide the Pages URL.

For a user/organization Pages site or a custom domain, update `url` and `baseurl` in `_config.yml` as appropriate. For a normal project repo hosted at `https://USERNAME.github.io/us-travel-wonder-guide/`, GitHub Pages generally supplies the project path during its build; the templates use `relative_url` so internal links remain portable.

## Content architecture

```text
_config.yml
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
  ...                        # 50 wonder records
assets/
  css/site.css
  js/site.js
index.html
states.html
about.md
```

## Wonder record model

Every Wonder is a Markdown file with YAML front matter. The current model already supports the next stages:

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
image_credit: NPS · Ralph H. Anderson · Public domain
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

## Image policy for the POC

Do **not** treat an image found on an official website as automatically reusable. The production workflow should verify the rights of each individual asset and store the source, photographer/agency, rights statement and verification status.

The Yosemite record demonstrates the intended workflow using an NPS NPGallery asset explicitly identified as public domain. All other first-pass Wonder cards intentionally use the site fallback artwork until their imagery is individually curated and rights-checked.

This means the 50-state content can go live immediately without introducing questionable image licensing, while photography can be added progressively.

## Recommended next development passes

1. Refine the overall visual identity and mobile experience.
2. Research and add verified imagery for the remaining 49 Signature Wonders.
3. Add richer destination metadata: best season, photography, wildlife, RV, dogs, accessibility and current-condition links.
4. Begin adding ◆ Worth Traveling For and ○ Worth the Detour destinations state by state.
5. Add a map and “Near Me” discovery once the destination location model is finalized.
6. Consider PWA/offline support after the core content and navigation experience are stable.

## Local preview (optional)

If Ruby/Jekyll is installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open the local address shown by Jekyll, normally `http://127.0.0.1:4000/`.
