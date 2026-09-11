# United States Travel & Wonder Guide

A GitHub Pages/Jekyll proof of concept built around a simple premise: **there is somewhere worth seeing across every part of the United States travel sphere.**

The primary browse model now includes the **50 states, Washington, D.C., and the five inhabited U.S. territories**: Puerto Rico, U.S. Virgin Islands, Guam, Northern Mariana Islands, and American Samoa.

The guide is intentionally broader than a national-park directory. National parks belong here, but so do state parks, wildlife refuges, forests, islands, scenic roads, coastlines, caves, cultural places, architecture, and lesser-known discoveries that genuinely give someone a reason to go.

See [`EDITORIAL_SCOPE.md`](EDITORIAL_SCOPE.md) for the full geographic and editorial guardrails.

## Current inventory

- **56 primary geographic areas** — 50 states + Washington, D.C. + 5 inhabited U.S. territories
- **68 Wonders total — 56 ★ Signature Wonders, 6 ◆ Worth Traveling For, 6 ○ Worth the Detour**
- 50 original state Signature Wonders have verified credited imagery
- the six newly added district/territory Signature Wonders intentionally use the neutral fallback until an asset-level rights pass is completed
- 12 mixed-tier pilot destinations across California, Utah, Maine, Michigan, Oklahoma, and Delaware
- Phase 1C travel-planning metadata pilot for all 18 Wonders in those six pilot states

## Geographic expansion Signature Wonders

| Area | ★ Signature Wonder |
| --- | --- |
| Washington, D.C. | National Mall and Memorial Parks |
| Puerto Rico | El Yunque National Forest |
| U.S. Virgin Islands | Virgin Islands National Park |
| Guam | Ritidian Point |
| Northern Mariana Islands | The Grotto |
| American Samoa | National Park of American Samoa |

These are first-pass Signature selections and remain subject to the same editorial review as the original 50-state set.

## How places qualify

- **★ Signature Wonder** — the one place that best makes the case for its state, district, or territory.
- **◆ Worth Traveling For** — significant enough to build part of a trip around.
- **○ Worth the Detour** — worth making time for when already nearby.

There are no per-area quotas.

## Current functionality

- separate Home, Explore, States & Territories, How Places Qualify, and About pages
- randomized homepage hero using rights-verified Wonder imagery already in the guide
- text search plus Area, Reason to Go, and Experience filtering
- individual area pages and Wonder pages
- planning notes for the Phase 1C pilot, including visit windows, RV considerations, pets, accessibility, photography, wildlife, conditions, and planning sources
- Navigate action with Google Maps, Apple Maps, and Waze
- persistent app-style mobile bottom navigation for Home, Explore, Search, and Areas
- hamburger menu on mobile for secondary/reference navigation
- responsive desktop/mobile layouts

## Image policy

Do **not** treat an image found on an official website as automatically reusable. Verify the rights of each individual asset and store the source, creator/agency, rights statement, and verification status.

The original 50-state Signature image audit is maintained in `_data/signature_images.yml`. The six district/territory Signature Wonders added during the geography expansion currently retain the neutral fallback until the same rights-verification workflow is completed for them.

## Content and planning model

Core Wonder content lives in `_wonders/`. Area records live in `_states/` for historical compatibility with the original Jekyll collection name; the collection now represents states, D.C., and inhabited territories.

Planning schema and field definitions are documented in [`CONTENT_MODEL.md`](CONTENT_MODEL.md). Project sequencing is maintained in [`PROJECT_PLAN.md`](PROJECT_PLAN.md).

## GitHub Pages

The current project-site configuration is set for:

`https://jeffthomasiii.github.io/us-travel-wonder-guide/`

The templates use `relative_url` so internal links remain portable if hosting changes later.

## Local preview

If Ruby/Jekyll is installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open the local address shown by Jekyll, normally `http://127.0.0.1:4000/`.
