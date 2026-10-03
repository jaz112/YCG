# Architecture

## Static content first

Astro produces HTML for every route. The existing layout, visual language, hero illustration, and navigation conventions are preserved. Small bundled browser scripts handle menus, checklists, directory filters, and journey results. There is no server API, authentication, or database to maintain.

## Content and trust

`src/data/resources.ts` separates organizations from their resources. `src/lib/models.ts` defines source dates, service eligibility, cost, delivery, language, and province/city fields. Empty language/contact fields mean unknown, not unavailable. New resources default to a pending check; historical dates are explicit on seeds. Source-check dates are not professional review, provider certification, or eligibility decisions.

The directory has national sources plus deeper Ontario coverage. National results remain visible under geographic filters; exclusions such as the IRCC finder in Quebec are respected. Regional listings are filtered separately from province-wide services. City search matches recorded city or region text, not a geographic boundary database; broader province searches can uncover services whose exact city coverage remains unrecorded. Provider service-area checks remain necessary.

Markdown guides use Astro content collections. Reviewed guides need a reviewer and verification date. Drafts receive noindex and are excluded from the sitemap. Current prose is orientation, not individualized advice.

## Search and journeys

Search logic is isolated in `src/lib/search.ts`; it normalizes accents, removes conversational filler, and handles selected synonyms. All useful tokens must match a resource. It is deterministic keyword matching, not AI or a promise to answer arbitrary questions. This boundary can later accept a ranked search index without rewriting the cards.

Journeys accept repeated `journey` query parameters and retain province context. Users may choose multiple circumstances; none establishes eligibility. Query strings can appear in browser history and host logs. No personal documents are collected. Checklists remain in memory and reset on reload.

## Shared presentation

`Base.astro` owns metadata, navigation, footer, and the skip link. Components cover repeated functional UI; pages compose them with data. Team content has explicit null placeholders and a reusable profile component. Styling remains in the existing cohesive stylesheet rather than introducing a new framework.

## Release controls

`SITE_URL` sets canonical and social URLs; `PUBLIC_INDEXABLE=true` enables discoverability. Preview builds are excluded from indexing by default. Noindex is not confidentiality. Netlify headers apply to production static hosting, not the Astro development server. Content Security Policy allows only same-origin scripts; inline styles support existing presentation. HTTPS transport and deployed headers must be verified on the actual host.

`npm run verify` checks source diagnostics, data/search regression tests, static generation, internal destinations, anchors, image alt presence and one-h1 structure. CI runs the same pipeline. These checks do not substitute for assistive-technology, browser, editorial, or legal review.

## Security dependency update

Astro was upgraded from 6.4.8 to 7.3.5 after the live registry audit reported inherited advisories. This changes the compiler and build dependencies, not the application framework or design. See the official migration guide at https://docs.astro.build/en/guides/upgrade-to/v7/.

## Family and discovery extension (2026-10-02)

`src/data/family-resources.ts` holds program-level records and organization references, appended by `resources.ts`. `family-content.ts` supplies the 24 topic explanations and curated pathways; pages resolve resource IDs rather than embedding provider records. `discovery.ts` owns stable need/audience vocabulary. Optional intake/contact/location fields preserve unknowns explicitly.

`matchesResource` intersects location/type/category with OR-within-group need and audience selections. URL parameters are repeated `need` and `audience` values. Reset clears all selections; UI-restored unknown values are ignored. No eligibility decision is made.

Brand geometry is defined in `BrandMark.astro` and the asset generator; keep them synchronized. `/families/` and its pathway routes participate in the sitemap only when indexing is enabled. See ADDENDUM-REVIEW.md and CONTENT-BACKLOG.md for verified scope and remaining coverage.
