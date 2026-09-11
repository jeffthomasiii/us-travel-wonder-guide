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

The canonical Phase 1A audit file is [`_data/signature_images.yml`](_data/signature_images.yml). It contains one verified image record for every state and allows the 50-state image set to be reviewed in one place. The five early pilot records also retain their original front-matter image metadata; the site now uses the canonical manifest for Signature Wonders so the complete set is consistent.

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

**Status: NEXT / NOT STARTED**

Goal: prove that the site, filters, state pages, and editorial model work when all three tiers coexist.

Choose roughly **5–6 varied states** and add a small, quality-controlled set of:

- ◆ Worth Traveling For
- ○ Worth the Detour

Do **not** force each pilot state to have the same number of entries.

During the pilot, validate:

- tier filters;
- state-page hierarchy;
- cards with mixed tiers;
- search behavior;
- image workflow for newly added destinations;
- whether tier definitions remain understandable in real-world edge cases.

Every new destination should enter the guide with verified imagery or the neutral fallback; image verification is now part of normal content intake rather than a separate cleanup phase.

## Phase 1C — Validate the content model

**Status: NOT STARTED**

Before nationwide expansion, review the Phase 1B pilot and decide whether the Wonder record needs additional fields such as:

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

**Phase 1A is closed. The next planned content task is Phase 1B: a controlled 5–6 state mixed-tier pilot before broad national expansion.**

Minor design fixes can still be made when they materially affect usability, but the phased sequence above remains the source of truth for content expansion.
