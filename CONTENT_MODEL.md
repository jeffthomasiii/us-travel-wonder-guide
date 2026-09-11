# United States Travel & Wonder Guide — Content Model

This document defines the destination information model validated during Phase 1C. The goal is to add planning value without turning each Wonder record into an encyclopedia or duplicating live information that belongs on official agency websites.

The broader editorial scope of the guide is defined in [`EDITORIAL_SCOPE.md`](EDITORIAL_SCOPE.md). National parks belong in the guide, but they are only one subset of the travel-and-wonder places the project is intended to surface.

## Principles

1. **Discovery first.** A Wonder page should quickly answer why a place matters and what kind of trip it supports.
2. **Stable facts in the guide; changing facts at the source.** We store durable planning guidance and link to official conditions, alerts, and reservation systems rather than copying rapidly changing operational details.
3. **Useful precision without pretending certainty.** Where seasonality matters, use typical calendar windows such as `October 1 – November 2` rather than only `fall`. These are planning windows, not guarantees of weather, foliage, access, or closures.
4. **Public usefulness over owner-specific preferences.** RV, pet, accessibility, photography, and wildlife information are useful to a broad travel audience and therefore belong in the model.
5. **Optional fields stay optional.** A destination should not receive invented filler simply because another destination has more metadata.
6. **Management designation does not determine importance.** National parks, state parks, wildlife refuges, forests, BLM lands, scenic roads, cultural places, and lesser-known regional destinations can all qualify on merit.

## Core Wonder fields

These remain required for every destination:

```yaml
title:
state:
state_slug:
tier:
region:
official_url:
navigation_query:
experiences: []
summary:
why:
```

Image metadata remains required whenever a real image is used:

```yaml
image_url:
image_credit:
image_source_url:
image_rights:
image_verified: true
```

## Phase 1C travel-planning fields

The pilot validates the following fields as materially useful:

```yaml
best_visit_windows: []
visit_length:
rv_access:
rv_notes:
rv_road_notes:
pet_access:
pet_types: []
pet_notes:
accessibility:
photography:
wildlife: []
conditions_url:
reservation_url:
planning_source_url:
planning_last_reviewed:
```

The original `best_seasons`, `dog_access`, and `dog_notes` fields remain supported temporarily for backward compatibility while the pilot data is migrated.

### `best_visit_windows`

One or more typical calendar windows such as:

```yaml
best_visit_windows:
  - "April 15 – June 15"
  - "September 15 – October 31"
```

The goal is to be more useful than simply saying `spring` or `fall`. These dates are editorial planning guidance, not official opening/closing dates and not guarantees of weather, road access, wildlife activity, or fall color. Current conditions remain authoritative.

### `visit_length`

A practical discovery-scale estimate such as `half day`, `full day`, `1–2 days`, or `2–4 days`. It describes how much time the destination can reasonably support, not a required itinerary.

### `rv_access`

Normalized values:

- `good` — RV travel/camping is a normal, practical way to experience the destination.
- `limited` — RVs can be used, but road, parking, campground, shuttle, length, or access constraints materially affect planning.
- `poor` — the destination is poorly suited to RV access or explicitly restricts large RVs.

`rv_notes` describes the overall RV experience.

`rv_road_notes` specifically calls out route characteristics that matter before committing a rig: paved versus unpaved roads, narrow or winding sections, steep grades, low clearances, tunnel restrictions, rough surfaces, turnaround limitations, and whether a smaller tow/visit vehicle is preferable.

The rating is discovery guidance, not a substitute for checking exact vehicle-length or road restrictions.

### `pet_access`

Normalized values:

- `good` — common traveling pets can participate in a meaningful portion of the destination experience.
- `limited` — pets are permitted only in restricted areas, developed zones, selected trails, beaches, roads, or under seasonal limits.
- `none` — pets are generally prohibited from the destination.

### `pet_types`

A short list identifying the types of traveling pets the reviewed rules meaningfully cover, commonly `dogs` and `cats`. Do not imply that exotic or livestock animals are allowed simply because a general pet rule exists.

### `pet_notes`

A concise explanation of the practical rule. Where an agency only publishes dog-specific guidance, say so rather than generalizing it to every animal. Current official rules should always be checked before travel.

### `accessibility`

A concise qualitative note describing meaningful accessible facilities, viewpoints, trails, shuttles, boardwalks, or limitations. Do not reduce accessibility to a single score.

### `photography`

Short editorial guidance about the strongest visual subjects or useful light/season considerations. This is discovery guidance, not a technical camera prescription.

### `wildlife`

A short list of notable wildlife viewing opportunities where appropriate. Absence of a species from the list does not imply absence from the destination.

### `conditions_url`

An official conditions, alerts, or primary park/refuge/site page. This is the preferred destination for information that can change quickly.

### `reservation_url`

Optional. Used only when reservations, camping, permits, or timed-entry systems are significant enough to planning that a direct link is useful.

### `planning_source_url`

The principal official source used to review the planning metadata.

### `planning_last_reviewed`

ISO date (`YYYY-MM-DD`) recording when the planning metadata was last reviewed. This makes future maintenance visible and auditable.

## Fields intentionally deferred

These remain useful ideas but are not part of the Phase 1C baseline yet:

- `nearby_wonders` — defer until national inventory is much denser.
- `navigation_targets` — defer until multi-target navigation/map work begins.
- detailed fees — too volatile; link to official sources instead.
- official seasonal opening/closing dates — dynamic and source-specific; keep them at the official source.
- current weather — dynamic data belongs to future live integrations.
- campground-by-campground inventories — outside the scope of a discovery guide.

## Storage strategy

The initial Phase 1C planning metadata is centralized in `_data/travel_planning.yml`, keyed by Wonder slug.

Phase 1C refinements that migrate the model toward date windows, general pet planning, and road-specific RV notes live in `_data/planning_refinements.yml`. The Wonder layout should prefer refinement fields when present and fall back to the original pilot fields where they are not yet available.

This layered approach lets the model evolve without blocking the live site or requiring every destination to be rewritten at once.

## Maintenance rule

Whenever a new ◆ Worth Traveling For or ○ Worth the Detour destination is added in Phase 2, the core Wonder record and verified imagery are required immediately. Travel-planning metadata should be added during the same content pass when reliable official information is available, but absence of an optional field should never be filled with guesswork.
