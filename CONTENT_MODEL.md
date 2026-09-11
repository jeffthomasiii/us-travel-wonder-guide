# United States Travel & Wonder Guide — Content Model

This document defines the destination information model validated during Phase 1C. The goal is to add planning value without turning each Wonder record into an encyclopedia or duplicating live information that belongs on official agency websites.

## Principles

1. **Discovery first.** A Wonder page should quickly answer why a place matters and what kind of trip it supports.
2. **Stable facts in the guide; changing facts at the source.** We store durable planning guidance and link to official conditions, alerts, and reservation systems rather than copying rapidly changing operational details.
3. **No false precision.** Broad seasonal and access guidance is preferable to brittle statements about exact opening dates, fees, closures, or permit windows.
4. **Public usefulness over owner-specific preferences.** RV, dog, accessibility, photography, and wildlife information are useful to a broad travel audience and therefore belong in the model.
5. **Optional fields stay optional.** A destination should not receive invented filler simply because another destination has more metadata.

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

The pilot validated the following fields as materially useful:

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

### `best_seasons`

Broad editorial guidance such as `spring`, `summer`, `fall`, or `winter`. This is not a guarantee of weather or road access.

### `visit_length`

A practical discovery-scale estimate such as `half day`, `full day`, `1–2 days`, or `2–4 days`. It describes how much time the destination can reasonably support, not a required itinerary.

### `rv_access`

Normalized values:

- `good` — RV travel/camping is a normal, practical way to experience the destination.
- `limited` — RVs can be used, but road, parking, campground, shuttle, length, or access constraints materially affect planning.
- `poor` — the destination is poorly suited to RV access or explicitly restricts large RVs.

`rv_notes` explains the rating without attempting to reproduce every vehicle-size rule.

### `dog_access`

Normalized values:

- `good` — leashed pets can participate in a meaningful portion of the destination experience.
- `limited` — pets are permitted only in restricted areas, developed zones, selected trails, or under seasonal limits.
- `none` — pets are generally prohibited from the destination.

`dog_notes` should always defer to current official rules before travel.

### `accessibility`

A concise qualitative note describing meaningful accessible facilities, viewpoints, trails, shuttles, boardwalks, or limitations. Do not reduce accessibility to a single score.

### `photography`

Short editorial guidance about the strongest visual subjects or useful light/season considerations. This is discovery guidance, not a technical camera prescription.

### `wildlife`

A short list of notable wildlife viewing opportunities where appropriate. Absence of a species from the list does not imply absence from the destination.

### `conditions_url`

An official conditions, alerts, or primary park/refuge page. This is the preferred destination for information that can change quickly.

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
- exact seasonal opening/closing dates — too volatile.
- current weather — dynamic data belongs to future live integrations.
- campground-by-campground inventories — outside the scope of a discovery guide.

## Storage strategy

The initial Phase 1C pilot planning metadata is centralized in `_data/travel_planning.yml`, keyed by Wonder slug. This keeps the pilot easy to audit and avoids duplicating planning metadata across templates.

The Wonder page layout consumes this data when present. Destinations without Phase 1C data continue to render normally, so national expansion can happen incrementally.

## Maintenance rule

Whenever a new ◆ Worth Traveling For or ○ Worth the Detour destination is added in Phase 2, the core Wonder record and verified imagery are required immediately. Travel-planning metadata should be added during the same content pass when reliable official information is available, but absence of an optional field should never be filled with guesswork.
