# Updating the YCG team

Team content lives in `src/data/team.ts`. The page renders confirmed people from `team` and planned positions from `futureRoles`; neither requires editing page markup.

## Photographs

- Mary: the supplied original is already at `public/images/team/founder-photo.jpg`. Replace that file only with an approved real photograph. The data URL is `/images/team/founder-photo.jpg`.
- Grace: her supplied photograph is now at `public/images/team/grace-okoye.jpg`, with `photo` set to `/images/team/grace-okoye.jpg` and `photoAlt` set to `Grace Okoye, Director of Community Engagement & Partnerships at Your Canada Guide`.
- Until a photo is supplied, keep `photo: null`. The card and expanded profile show a labelled initials placeholder. No stock portrait is used.
- Frames crop with CSS; source files are not retouched. Use a portrait with enough space around the face. Both leadership cards use the same frame ratio.

## Add a confirmed team member

Add a `TeamMember` object to the `team` array with a unique URL-safe `id`, approved `name`, `role`, `shortBio`, `storyTitle`, paragraph-array `story`, `photo`, `photoAlt`, `status: 'confirmed'` and numeric `priority`. Lower priority numbers appear first. Keep Mary at priority 1; the first card receives the founder emphasis.

Only populate optional `responsibilities`, `quote`, `languages`, `location` and `links` when supplied and approved. A professional link uses `{ label, url }`. Leave missing details absent. Never infer a biography from a role title.

The page automatically creates a profile card, labelled native dialog and no-JavaScript story fallback. Profiles support click/tap, keyboard activation, Escape, visible Close, outside click, background inertness, focus containment and return to the opener. Reduced motion disables the entrance and hover animations.

## Fill a future role

Remove the corresponding entry from `futureRoles`, then add the confirmed person to `team` as above. Do not merely rename a future-role card: it has a different data shape and no personal story. Future roles are planned structure, not recruitment advertisements.

## Files involved in this update

1. `src/data/team.ts` — typed people and future roles; approved stories.
2. `src/components/TeamMember.astro` — interactive leadership card.
3. `src/components/TeamProfileDialog.astro` — accessible expanded story.
4. `src/pages/team.astro` — editorial layout and native dialog behaviour.
5. `src/styles/team.css` — Team-only glass surfaces, responsive layout and motion.
6. `src/styles/global.css` — removes superseded Team-only styles; other shared styles preserved.
7. `TEAM.md` — this guide.

After a content or image update, run `npm run verify`. Preview serves the built `dist` folder, so rebuild and reload the page to see changes. The supplied Grace story is personal testimony, not a YCG endorsement or partnership claim.

Both supplied leadership photographs are installed. Optional personal fields remain absent. Public-launch requirements from the existing project documentation still apply.

## Verification for this update

Astro diagnostics: zero errors, warnings or hints. All 10 existing tests pass; production build and internal link checks pass across 91 pages. Grace’s eight story paragraphs were compared directly with the supplied request. Browser checks confirmed both dialogs, keyboard activation, Tab/Shift+Tab containment, Escape, visible Close, outside-click dismissal, focus restoration, scroll locking and mobile scrolling. Layouts were reviewed at mobile, tablet and desktop sizes. Reduced-motion overrides cover all Team animations and transitions; no new dependency was added.
