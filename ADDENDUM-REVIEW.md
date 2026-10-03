# Founder, families and brand addendum

Implemented 2026-10-02. This supplements the earlier production review; it does not constitute a public launch.

## Delivered

- Mary C. Nwosu’s approved name, concise biography and original supplied photo on `/team/`. Home, About and Our Story use different levels of detail. No resource-specific personal experiences or endorsements were invented. The second team profile remains an explicit placeholder.
- `/families/` has 24 actionable topics, each with an explanation, next step, question to ask and selected resource links.
- Three dedicated routes: Pregnant & New Parents; Young Moms & Young Parents; and “I’m pregnant and new to Toronto.” Links from home, navigation and footer make the hub a primary content area.
- 34 new program/information profiles, bringing the directory to 57 resources and 29 organizations. All specifically named organizations are represented. Additional entries cover Indigenous and Francophone early years, WHIWH, family violence, disability, CCB, birth registration, childcare and primary-care navigation.
- Structured needs and audiences, multiple checkbox selections, URL restoration and reset. Choices are OR within a group, AND between groups and geography. Tags indicate relevance, never eligibility. Search choices appear in the URL/browser history; the interface states this.
- Extended optional location, age, status, delivery, service, contact, referral, appointment and supporting-source fields. Missing information remains explicitly unconfirmed. No postal-code search or live availability claim.
- Topic landing pages offer a manageable selection and link to the full filtered directory.
- One guided doorway mark, with primary, compact, icon, dark-background, monochrome, favicon, touch icon and social assets under `public/images/brand/`.

## Source handling

New profiles were checked against official sources on 2026-10-02; next review target is 2026-11-02. This records source-page review with AI assistance, not an independent audit or provider contact. Supporting pages are linked on profiles where eligibility or scope needs another source.

Jessie’s age at intake, Abiona residential versus broader program ages, conditional YSM nursery age extension and CDI program differences remain separate. Toronto HBHC and NFP explicitly identify their no-OHIP access; this is not generalized to medical care. The NFP age discrepancy across two City pages is visible in the listing and retained in the backlog. Indigenous family programming is not tagged as newcomer settlement. YSM is represented as poverty/family-focused. WHIWH’s mandate is visible rather than treating it as a service for every Black family.

## Brand decision

Compared roof/star (A), doorway/path (B) and portal/arrow (C) at 16, 32 and 96px in `artifacts/brand/options-small-size.png`. A retained the clearest doorway outline and compact guiding detail; B became an enclosed arrow and C was busier. Only A ships as the brand mark. The existing HTML wordmark remains in navigation; exported compact wordmarks use vector paths. `primary.svg` is the light-background version; `dark-background.svg` is white/coral; `monochrome.svg` is black. Preserve clear space and do not shrink the primary lockup into a favicon. Use the icon variant instead.

Regenerate assets with `node scripts/prepare-assets.mjs`. The shared component and generator use the same 32-unit mark geometry. Generated imagery requires no external font download. Font-cache warnings occurred during Sharp generation but assets were produced and visually inspected.

## Validation

- `npm run verify`: zero Astro errors/warnings/hints; 10 tests pass; production build creates 91 pages; internal links, anchors, images and basic semantics pass.
- External HTTP check: 80 unique main/supporting/organization URLs returned success. HTTP checks do not establish factual accuracy.
- Browser: multi-need and multi-audience selection, geographic exclusion, clear filters and family anchor expansion checked. Mobile and desktop page layout reviewed with no observed horizontal overflow or broken loaded images.
- Coverage remains Toronto/GTA/Ontario-heavy. Consult `CONTENT-BACKLOG.md` for the category usefulness audit and five-phase expansion plan.

Existing launch requirements remain: monitored contact/corrections channel, editorial ownership, domain/hosting configuration, human review of high-impact content, and wider assistive-technology/browser testing. Indexing stays disabled by default.
