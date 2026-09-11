# United States Travel & Wonder Guide — Project Plan

This file is the working roadmap for building the guide without letting content growth outrun quality, rights verification, or the core discovery experience.

## Guiding principle

The guide is a **travel discovery reference**, not a quota-driven 50-state list. Every state begins with one **★ Signature Wonder**, then grows only where destinations genuinely justify **◆ Worth Traveling For** and **○ Worth the Detour** status.

The current priority is to make the existing 50 Signature Wonders visually convincing and rights-safe before expanding the inventory nationally.

## Phase 1A — Complete imagery for all 50 Signature Wonders

**Status: IN PROGRESS**

Goal: every existing ★ Signature Wonder has a strong, verified, properly credited main image.

For each Wonder:

1. Confirm the current ★ selection still feels defensible when viewed visually.
2. Find the strongest appropriate image from the approved source hierarchy below.
3. Verify the rights/license for the **individual image**, not merely the website hosting it.
4. Record image URL, source page, creator/agency, rights, and verification status in the Wonder front matter.
5. Confirm the image crops acceptably in cards and on the Wonder hero.
6. Prefer a representative landscape view over signage, logos, visitor centers, or tightly framed details unless the latter is essential to the destination.
7. Do not replace a verified image with a more attractive image unless the replacement's rights are also verified.

### Approved image-source hierarchy

1. **First-party/original photography** — future preferred source where available.
2. **Verified public-domain government imagery** — NPS, USFWS, USFS, BLM, NOAA, state agencies, etc.; verify the specific asset because not every image on a government site is necessarily public domain.
3. **Wikimedia Commons** — only when the specific file page provides a reusable license and required attribution can be recorded.
4. **Licensed public image providers** — e.g. Unsplash, when the applicable license and attribution/link requirements are clear.
5. **Manual fallback** — keep the site's neutral placeholder rather than use an image with uncertain rights.

### Required image metadata

```yaml
image_url: ...
image_credit: ...
image_source_url: ...
image_rights: ...
image_verified: true
```

`image_credit` should be human-readable and concise enough to display on the site. `image_source_url` should point to the specific asset/file record whenever possible, not merely the agency or website home page.

### Phase 1A completion criteria

Phase 1A is complete only when:

- all 50 Signature Wonder records have a verified main image **or** a documented reason for retaining the fallback;
- every used image has source/credit/rights metadata;
- all cards and Wonder hero views have been visually spot-checked on desktop and mobile;
- any questionable Signature Wonder selection discovered during this pass has been reviewed before the phase is closed.

### Phase 1A tracker

A checked item means the Wonder record has a verified image plus source, credit, rights, and verification metadata. Visual crop/hero QA remains part of the phase-completion check.

- [x] Alabama — Little River Canyon National Preserve
- [x] Alaska — Denali National Park & Preserve
- [x] Arizona — Grand Canyon National Park
- [x] Arkansas — Buffalo National River
- [x] California — Yosemite National Park
- [ ] Colorado — Rocky Mountain National Park
- [ ] Connecticut — Kent Falls State Park
- [ ] Delaware — Cape Henlopen State Park
- [ ] Florida — Everglades National Park
- [ ] Georgia — Cumberland Island National Seashore
- [ ] Hawaii — Nā Pali Coast State Wilderness Park
- [ ] Idaho — Sawtooth National Recreation Area
- [ ] Illinois — Garden of the Gods Recreation Area
- [ ] Indiana — Indiana Dunes National Park
- [ ] Iowa — Loess Hills State Forest
- [ ] Kansas — Monument Rocks National Natural Landmark
- [ ] Kentucky — Mammoth Cave National Park
- [ ] Louisiana — Atchafalaya National Heritage Area
- [ ] Maine — Acadia National Park
- [ ] Maryland — Assateague Island National Seashore
- [ ] Massachusetts — Cape Cod National Seashore
- [ ] Michigan — Pictured Rocks National Lakeshore
- [ ] Minnesota — Boundary Waters Canoe Area Wilderness
- [ ] Mississippi — Gulf Islands National Seashore
- [ ] Missouri — Ozark National Scenic Riverways
- [ ] Montana — Glacier National Park
- [ ] Nebraska — Scotts Bluff National Monument
- [ ] Nevada — Valley of Fire State Park
- [ ] New Hampshire — Franconia Notch State Park
- [ ] New Jersey — Delaware Water Gap National Recreation Area
- [ ] New Mexico — White Sands National Park
- [ ] New York — Adirondack Park
- [ ] North Carolina — Linville Gorge Wilderness
- [ ] North Dakota — Theodore Roosevelt National Park
- [ ] Ohio — Hocking Hills State Park
- [ ] Oklahoma — Wichita Mountains Wildlife Refuge
- [ ] Oregon — Crater Lake National Park
- [ ] Pennsylvania — Ricketts Glen State Park
- [ ] Rhode Island — Mohegan Bluffs
- [ ] South Carolina — Congaree National Park
- [ ] South Dakota — Badlands National Park
- [ ] Tennessee — Great Smoky Mountains National Park
- [ ] Texas — Big Bend National Park
- [ ] Utah — Zion National Park
- [ ] Vermont — Smugglers’ Notch State Park
- [ ] Virginia — Shenandoah National Park
- [ ] Washington — Olympic National Park
- [ ] West Virginia — New River Gorge National Park & Preserve
- [ ] Wisconsin — Apostle Islands National Lakeshore
- [ ] Wyoming — Yellowstone National Park

**Current Phase 1A progress: 5 / 50 Signature Wonders (10%).**

## Phase 1B — Pilot mixed-tier content

**Status: NOT STARTED**

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

Grow ◆ and ○ destinations state by state, based on merit rather than quotas.

The guide should be comfortable with uneven counts. California or Utah may legitimately contain many more qualifying entries than another state.

Each new Wonder should enter with:

- tier assignment;
- concise editorial rationale;
- official source;
- navigation target;
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

**Complete Phase 1A before broad national tier expansion.**

Minor design fixes may be made when they directly affect image presentation or usability, but major visual redesign should not displace the imagery pass.
