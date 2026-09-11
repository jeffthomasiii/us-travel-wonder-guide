# Wonder Guide

**Real Places. Bigger Stories.**

A GitHub Pages/Jekyll travel discovery guide built around a simple premise: **there is somewhere worth seeing across every part of the United States travel sphere.**

The primary browse model includes the **50 states, Washington, D.C., and the five inhabited U.S. territories**: Puerto Rico, U.S. Virgin Islands, Guam, Northern Mariana Islands, and American Samoa.

The guide is intentionally broader than a national-park directory. National parks belong here, but so do state parks, wildlife refuges, forests, islands, scenic roads, coastlines, caves, cultural places, architecture, historic districts, gardens, geology, and lesser-known discoveries that genuinely give someone a reason to go.

See [`EDITORIAL_SCOPE.md`](EDITORIAL_SCOPE.md) for the full geographic and editorial guardrails.

## Current inventory

- **56 primary geographic areas** — 50 states + Washington, D.C. + 5 inhabited U.S. territories
- **120 Wonders total**
- **56 ★ Signature Wonders**
- **51 ◆ Worth Traveling For**
- **13 ○ Worth the Detour**
- at least one non-Signature Wonder in every primary area

The 120-Wonder count is a national baseline, not a final quota. Areas should continue to grow unevenly according to actual travel value.

## Phase status

- **Phase 1A — Signature imagery:** complete
- **Phase 1B — mixed-tier pilot:** complete
- **Phase 1C — travel-planning model:** complete
- **Geography expansion to 56 areas:** complete
- **Mobile functional baseline:** complete
- **Phase 2A — national candidate research baseline:** complete
- **Phase 2B — editorial classification baseline:** complete
- **Phase 2C — national production baseline:** complete
- **Dedicated branding / design / layout phase:** in progress

Phase 2C completion is documented in [`PHASE2C_COMPLETION.md`](PHASE2C_COMPLETION.md).

## How places qualify

- **★ Signature Wonder** — the one place that best makes the case for its state, district, or territory.
- **◆ Worth Traveling For** — significant enough to build part of a trip around.
- **○ Worth the Detour** — worth making time for when already nearby.

There are no per-area quotas.

## Geographic expansion Signature Wonders

| Area | ★ Signature Wonder |
| --- | --- |
| Washington, D.C. | National Mall and Memorial Parks |
| Puerto Rico | El Yunque National Forest |
| U.S. Virgin Islands | Virgin Islands National Park |
| Guam | Ritidian Point |
| Northern Mariana Islands | The Grotto |
| American Samoa | National Park of American Samoa |

All six have rights-verified imagery and planning metadata.

## Current functionality

- separate Home, Explore, States & Territories, How Places Qualify, and About pages
- randomized homepage hero using rights-verified Wonder imagery already in the guide
- text search plus Area, Reason to Go, and Experience filtering
- individual area pages and Wonder pages
- planning notes including calendar-style visit windows and authoritative planning links, with RV, pet, accessibility, photography, wildlife, conditions, and reservation guidance where researched
- Navigate action with Google Maps, Apple Maps, and Waze
- persistent app-style mobile bottom navigation for Home, Explore, Search, and Areas
- hamburger menu on mobile for secondary/reference navigation
- responsive desktop/mobile layouts

## Image policy

Do **not** treat an image found on an official website as automatically reusable. Verify the rights of each individual asset and store the source, creator/agency, rights statement, and verification status.

Current image coverage:

- all 56 Signature Wonders use rights-verified imagery;
- the 12 Phase 1B mixed-tier pilot Wonders use rights-verified imagery;
- the 6 Phase 2C Batch 1 Wonders use rights-verified imagery;
- later Phase 2C national-expansion Wonders intentionally use the neutral media fallback until an individual reusable image passes the same verification workflow.

The fallback is a policy feature, not a missing-content error.

## Content and planning model

Core Wonder content lives in `_wonders/`. Area records live in `_states/` for historical compatibility with the original Jekyll collection name; the collection now represents states, D.C., and inhabited territories.

Planning schema and field definitions are documented in [`CONTENT_MODEL.md`](CONTENT_MODEL.md).

Planning data is split by production generation so updates remain auditable:

- `_data/travel_planning.yml`
- `_data/planning_refinements.yml`
- `_data/travel_planning_phase2.yml`
- `_data/planning_refinements_phase2.yml`
- `_data/travel_planning_phase2_expansion.yml`
- `_data/planning_refinements_phase2_expansion.yml`
- `_data/travel_planning_geography_expansion.yml`
- `_data/planning_refinements_geography_expansion.yml`

Project sequencing is maintained in [`PROJECT_PLAN.md`](PROJECT_PLAN.md).

## National parks

All U.S. national parks remain guaranteed eventual coverage, but they are only one subset of the guide and do not define its structure. Coverage tracking lives in [`NATIONAL_PARKS_COVERAGE.md`](NATIONAL_PARKS_COVERAGE.md).

## Branding / design / layout phase

The project has enough real content density to support a dedicated redesign using the existing 120-Wonder dataset as the design test bed rather than changing content to create artificial visual balance.

The official site name is **Wonder Guide** with the tagline **Real Places. Bigger Stories.**

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
