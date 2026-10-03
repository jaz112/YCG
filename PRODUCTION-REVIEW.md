# Production review — 2026-10-02

## What changed

The existing Astro site, hero illustration, navy/coral brand, layouts, topic pages, source model, checklist behavior, and resource details were preserved. No replacement template or framework conversion was made.

- Added a dedicated Meet the Team page and reusable profile component with explicit placeholders.
- Added a branded 404 and separate disclaimer; linked team and policies in the footer/About experience.
- Enabled multiple newcomer circumstances and added the senior journey.
- Improved conversational keyword search and corrected regional filtering.
- Expanded the directory from 19 to 23 source-linked resources, including legal, language, French-language, and disability starting points.
- Made source-check dates explicit per resource; new listings default to pending instead of inheriting a fabricated check date.
- Fixed the founder-story anchor and added a no-JavaScript navigation fallback.
- Added responsive hero copies, social preview, touch icon, and logo asset; retained original hero files and favicon.
- Added conditional canonical/social metadata, robots.txt, sitemap.xml, and draft noindex protection.
- Added Netlify static hosting/security-header configuration and GitHub CI.
- Upgraded Astro 6.4.8 to 7.3.5 to resolve live registry security findings. Sharp 0.35.5 is an explicit development dependency for reproducible asset preparation.
- Expanded tests, link/anchor checks, .gitignore, and beginner-facing documentation.

## Team assets

Updated October 3: Mary C. Nwosu and Grace Okoye now have approved original portraits and biographies installed. See TEAM.md for the current component, photo and maintenance details. The placeholder description above is historical.

## Resource data

Organizations and resource seeds live in `src/data/resources.ts`; contracts live in `src/lib/models.ts`. To add a listing, add the real organization if absent, then a unique resource seed with source URL, explanation, next step, eligibility notes, categories and location. Record an actual check date only after checking the source. Missing contact/language information is presented as unconfirmed. No logos, endorsements, staff, or contact details were invented.

New-source evidence:

- [Legal Aid Ontario](https://www.legalaid.on.ca/)
- [IRCC language classes](https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada/language-skills/classes.html)
- [IRCC services in French](https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada/francophone-communities/services.html)
- [Federal disability benefits](https://www.canada.ca/en/services/benefits/disability.html)

These support the limited directory descriptions, not independent professional review or individual eligibility decisions. Existing September 28 dates were preserved as historical records.

## Project structure

```text
.github/workflows/verify.yml
public/
  favicon.svg
  images/
    new-chapter.png
    new-chapter.webp
    new-chapter-480.webp
    new-chapter-800.webp
    brand/{ycg-logo.svg,apple-touch-icon.png,social-preview.png}
    team/README.md
src/
  components/{Checklist,Icon,JourneyFinder,ResourceCard,TeamMember}.astro
  content/guides/find-your-starting-point.md
  content.config.ts
  data/{catalog,policies,resources,team}.ts
  layouts/Base.astro
  lib/{models,search}.ts
  pages/
    about/
    guides/
    journeys/
    resources/
    start/
    topics/
    index.astro
    our-story.astro
    team.astro
    404.astro
    robots.txt.ts
    sitemap.xml.ts
  styles/global.css
scripts/{prepare-assets,check-built-links,check-external-links}.mjs
tests/catalog.test.mjs
.env.example
.gitignore
astro.config.mjs
netlify.toml
package.json
package-lock.json
tsconfig.json
README.md
ARCHITECTURE.md
ROADMAP.md
PRODUCTION-REVIEW.md
```

Generated dist, node_modules, .astro, and local QA artifacts are ignored.

## Running and building

Use Node 24 LTS. In this repository root:

```sh
npm ci
npm run dev
```

Production and QA:

```sh
npm run verify
npm run preview
```

Individual commands: `npm run check`, `npm run lint`, `npm test`, `npm run build`, `npm run check:links`. The lint command uses Astro/TypeScript diagnostics, not an independent formatting linter. External reachability: `node --experimental-strip-types scripts/check-external-links.mjs`. Asset generation: `node scripts/prepare-assets.mjs`.

## GitHub

Git was already initialized at the correct project root with no commits. All source files were untracked at inspection; no existing commit baseline was available. Commit source, public web assets, docs, tests, scripts, lockfile, configuration, .env.example and .github. Ignore secrets, .env, dependencies, build/cache output and private uploads. No commit, remote, push or public deployment was performed.

## Environment and deployment

Local preview needs no variables. Set SITE_URL to the real HTTPS domain origin in the host's build environment. PUBLIC_INDEXABLE must remain unset/false until launch review; true enables indexing when SITE_URL exists. Neither variable is a secret. No API credentials are used.

Netlify configuration uses Node 24, `npm run verify`, and `dist`. A static host is sufficient. On other hosts reproduce the CSP and other security headers, hashed-asset caching, directory-index routes and real 404 behavior. Root-relative paths currently require deployment at the domain root, not GitHub project Pages under a repository subpath. HTTPS, domain DNS, production headers, caching and social previews still need verification on the selected host.

## QA results

- Astro/TypeScript source diagnostics: passed; zero errors, warnings or hints.
- Regression tests: 7 passed, covering references, queries, source types and geographic filtering.
- Production build: passed; 53 HTML pages plus robots and sitemap endpoints.
- Launch-mode metadata: canonical/social URLs, robots and sitemap assertions passed using a reserved example domain; draft guide stayed noindex. Final output restored to preview defaults.
- Internal links/assets/anchors: passed across all 53 pages; also checked one h1 per page and image alt presence.
- External URLs: 33 unique resource/organization URLs returned HTTP 200; two benign canonical redirects. HTTP success does not certify content.
- Live dependency audit after upgrade: zero reported vulnerabilities, including development dependencies. The earlier sandbox audit was superseded by the live registry result.
- Source review: no obvious secret, client credential, VM asset path, debug log, or TODO found in application/public source. Not a full penetration test.
- Browser functionality: search match/empty/reset, mobile menu open/Escape, checklist check/reset, multiple journey selection, province retention, and branded 404 checked.
- Responsive: seven representative pages checked at 320, 390, 430, 768, 1024, 1440 pixels; no horizontal overflow or broken images observed. Home and team visually inspected. Production smoke tests repeated after the Astro upgrade.
- Accessibility: semantic controls, labels, focus styling, skip link, status announcements, alt text and reduced-motion CSS reviewed. Mobile keyboard Escape verified. This is not a complete WCAG audit or screen-reader certification.
- Performance: retained 217,750-byte desktop WebP; added 43,708-byte 480px and 98,926-byte 800px variants. Original PNG preserved; not used by rendered pages. No external font, analytics or UI framework added. No field performance or Lighthouse score claimed.
- Browser coverage: Chromium-based in-app browser tested. Safari, Firefox and standalone Edge were not executed. Glass has a near-opaque background fallback; animations are gated by reduced-motion preference.

## Remaining warnings

Windows npm emitted cleanup warnings for old locked build binaries while the prior dev server was open, and an install-script policy notice for esbuild. The server was stopped and the new production pipeline ran successfully. The locked files are inside ignored node_modules, not repository source. Asset generation emitted font-cache warnings; generated files were inspected. Font rasterization can vary by operating system.

## Outstanding launch work

1. Supply and approve team photos, real names, roles, biographies and founder story; confirm image publication rights.
2. Establish a monitored public contact/corrections channel and an editorial owner. There is deliberately no form pretending to send messages.
3. Professionally review high-impact content, inherited eligibility statements, and operating/privacy terms. The existing guide remains draft.
4. Expand provincial and specialist resources; directory coverage is useful but limited, not exhaustive. Regional matching is text-based, not a geospatial service-area database.
5. Select host/domain and verify deployed HTTPS, headers, status codes, logging/retention and indexing configuration.
6. Complete screen-reader testing, contrast/touch-target audit, additional browser coverage and real-device/user testing.
7. Establish regular source rechecks and a procedure for overdue or broken resources.

YCG is closer to a deployable, maintainable product. It is not yet approved as a fully production-ready public service.

## Complete route inventory

- `/`
- `/start/`
- `/journeys/`
- `/topics/`
- `/resources/`
- `/about/`
- `/team/`
- `/our-story/`
- `/about/disclaimer/`
- `/guides/find-your-starting-point/`
- `/about/trust/`
- `/about/contact/`
- `/about/privacy/`
- `/about/accessibility/`
- `/about/terms/`
- `/start/24-hours/`
- `/start/first-week/`
- `/start/first-month/`
- `/start/three-months/`
- `/topics/life/`
- `/topics/work/`
- `/topics/housing/`
- `/topics/health/`
- `/topics/documents/`
- `/topics/money/`
- `/topics/education/`
- `/topics/family/`
- `/topics/community/`
- `/topics/safety/`
- `/resources/french-services/`
- `/resources/disability-support/`
- `/resources/legal-aid-ontario/`
- `/resources/language-classes/`
- `/resources/newcomer-services/`
- `/resources/newcomer-portal/`
- `/resources/sin/`
- `/resources/service-canada/`
- `/resources/job-bank/`
- `/resources/benefits/`
- `/resources/cra/`
- `/resources/banking/`
- `/resources/healthcare/`
- `/resources/ohip/`
- `/resources/renting/`
- `/resources/education/`
- `/resources/credentials/`
- `/resources/fraud/`
- `/resources/quebec-support/`
- `/resources/toronto-kiosks/`
- `/resources/library/`
- `/resources/ymca/`
- `/resources/211/`
- `/404.html`
- `/robots.txt`
- `/sitemap.xml`
