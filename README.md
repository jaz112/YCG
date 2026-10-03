# Your Canada Guide

YCG is an independent newcomer information website: clear next steps, official sources, and community starting points. It grew from lived newcomer experience and aims to make life in Canada easier to understand.

## Status

A working static website, prepared for deployment but not yet approved for public service launch. Mary C. Nwosu’s approved founder profile and original photo are live locally; Grace Okoye’s approved profile and original photo are also installed. Contact delivery is not enabled. The guide is marked draft. Indexing is disabled by default. See FINISHING-REVIEW.md for the October 3 finishing pass, ADDENDUM-REVIEW.md for the family/brand work, CONTENT-BACKLOG.md for coverage priorities, and PRODUCTION-REVIEW.md for earlier launch checks.

## Stack and requirements

Astro 7, TypeScript, Markdown content collections, CSS, and small browser scripts. No accounts, database, analytics, external fonts, or client secrets. Use Node.js 24 LTS and npm; minimum supported Node version is 22.12. Sharp is a development image-processing tool used to regenerate brand and responsive assets; it adds no browser JavaScript.

## Run locally

From this repository root:

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4321. Stop the server with Ctrl+C.

## Build and check

```sh
npm run check
npm run lint
npm test
npm run build
npm run check:links
npm run preview
```

`lint` currently runs Astro's source diagnostics, including TypeScript checks; it is not a separate style formatter. `npm run verify` runs check, tests, build, and built-link checks. Preview serves the generated `dist` website locally. `node --experimental-strip-types scripts/check-external-links.mjs` checks external HTTP responses separately; blocking, timeouts, or a 200 response do not prove content accuracy.

## Structure

```text
.github/workflows/verify.yml  GitHub continuous integration
public/
  favicon.svg
  images/
    new-chapter.png           retained original hero
    new-chapter.webp          established web hero
    new-chapter-{480,800}.webp responsive copies
    brand/                    logo, touch icon, social preview
    team/                     approved team photographs and instructions
src/
  components/                 checklist, journey finder, resource/team cards, icons
  content/guides/              Markdown explanations with source metadata
  data/                       catalog, resources/organizations, policies, team
  layouts/Base.astro          shared shell, metadata, navigation, footer
  lib/                        models and search matching
  pages/                      Astro routes, robots, sitemap, 404
  styles/global.css           existing visual tokens and responsive design
scripts/                      asset generation and link checks
tests/                        search and resource-model tests
astro.config.mjs
netlify.toml
.env.example
package.json
package-lock.json
README.md
ARCHITECTURE.md
ROADMAP.md
PRODUCTION-REVIEW.md
```

## Add or edit content

- Team: Mary C. Nwosu and Grace Okoye have approved portraits and profiles. Update `src/data/team.ts` using real, approved information only; see TEAM.md.
- Resources: edit `src/data/resources.ts`. Add an organization if needed, then a seed with a unique ID, official source URL, explanation, next action, eligibility notes, categories, and location. Omit `checkedAt` until someone checks the source; new entries default to pending. Record the real check date, not the build date. `sourceUpdatedAt` is the publisher's date, not yours. Extend the review scheduling helper when adding different dates.
- Categories and journeys: `src/data/catalog.ts`; journey checkboxes support multiple situations. These are navigation aids, not eligibility decisions.
- Guides: `src/content/guides/*.md`; the schema requires reviewer and verification date for reviewed content. Drafts remain noindex even if site indexing is enabled.
- Policy copy: `src/data/policies.ts`; dedicated disclaimer: `src/pages/about/disclaimer.astro`.
- Design: `src/styles/global.css`. Preserve the shared tokens and test mobile widths after layout changes.
- Regenerate assets: `node scripts/prepare-assets.mjs`. Existing generated assets are committed, so regeneration is not needed to build.

## Environment variables

No variables are required for local preview. `.env.example` contains names without secrets.

- `SITE_URL`: production HTTPS origin, with no subdirectory, query, or fragment. Set in the build environment, for example through the hosting dashboard. This config value is read before page generation; do not rely on a local `.env` file for it.
- `PUBLIC_INDEXABLE`: set to `true` only after launch review. Otherwise pages are noindex and robots disallows crawling. It is intentionally public and is not a secret.

Never store secrets under `PUBLIC_`. No API key is needed. Noindex is not access control.

## Deployment

Vercel configuration is included in `vercel.json`: framework Astro, install `npm ci`, build `npm run verify`, output `dist`, and security headers. Select Node 24 in Vercel. Connect the private `jaz112/YCG` repository to the existing Vercel project and use `main` as its production branch. Set `SITE_URL` to the confirmed HTTPS deployment origin; keep `PUBLIC_INDEXABLE` unset until the live audit is complete.

Intended deployment address: https://ycg-khaki.vercel.app/ (not yet verified live).

Alternative Netlify configuration is included: `npm run verify`, output `dist`, Node 24, security headers, and immutable caching for fingerprinted assets. It serves `404.html` for missing routes. No deployment or public upload has been performed.

On other hosts, reproduce the headers, directory-index routing, and a genuine HTTP 404 using `dist/404.html`. Do not add a universal SPA fallback. The current root-relative URLs require hosting at the domain root; GitHub project Pages under `/repository/` needs a separate base-path change. Use an HTTPS custom domain and confirm actual headers after deployment.

Before enabling indexing: set the real origin, approve team/story/content and policies, establish a monitored contact/corrections channel, review hosting logs and retention, and complete cross-browser/assistive-technology testing. The sitemap is empty until indexing is enabled and a site origin is available.

## GitHub

The private source repository is https://github.com/jaz112/YCG. The first website upload preserves its existing initial commit. Commit source, public web assets, docs, scripts, tests, lockfile, configuration, `.env.example`, and `.github`. Do not commit `.env*` except the example, node_modules, dist, .astro, logs, private photo originals, or user documents. Review `git status --short` and `git diff --cached` before committing. Repository visibility must remain private until the production and history reviews pass.

## Development practice

Keep changes small and run `npm run verify`. Do not invent organization details, eligibility, endorsements, team identities, or source-check dates. Render uncertainty explicitly. Network features, contact submission, persistent progress, accounts, and intelligent search require their own privacy and security review when actually introduced.
