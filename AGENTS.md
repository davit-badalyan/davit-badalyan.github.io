## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project notes

Portfolio site for Davit Badalyan, served at https://davit-badalyan.github.io/ (GitHub user site). Astro with static output and TypeScript (strict). The only dependencies are `astro` and the Fontsource fonts.

### Where content lives

- `src/data/site.ts`: all site text and numbers (profile, about, experience, education, skills, companies, personal projects, hero stats). Never hardcode text in components. There is no phone number in the repo (see the CV below).
- `src/data/projects.ts`: featured projects ("Selected work"; the section is hidden while the list is empty).
- CV: generated from `site.ts` (+ icons, logos, fonts) by `npm run cv` (`scripts/cv/build-cv.mjs`, needs local Chrome). Re-run it after editing CV content. It builds two versions:
  - `public/cv/davit-badalyan-cv.pdf` — the public CV the site links to, **without** the phone number.
  - `private/davit-badalyan-cv.pdf` — the same CV **with** the phone number, for sending directly.
  - The phone number lives only in `private/cv.json` (format: `scripts/cv/private.example.json`). Without that file only the public CV is built. `private/` is a git-ignored local folder outside `public/`; the phone must never appear in tracked files, `public/` or `dist/`.
- `public/images/`: `avatar.jpg` (header), `profile.jpg` and `profile.webp` (About portrait).
- `public/og-image.jpg`: social preview image (1200×630).

### Project media

`public/media/<company-slug>/<project-slug>/` contains `cover.jpg`, `loop.mp4` (short, muted) and `screenshots/01.jpg`, `02.jpg`, …
Company slugs are the `id` values in `site.ts`: `playrix`, `armnomads-games`, `cassette-llc`, `armath-ai`, `personal`. Slugs are lowercase kebab-case. See `public/media/README.md`.

### Structure

```
.github/workflows/deploy.yml   Build and deploy to GitHub Pages
docs/                          Local-only folder (git-ignored): personal files and review/ (latest review summary + screenshots)
private/                       Local-only folder (git-ignored): cv.json (phone) and the private CV built by `npm run cv`
public/                        Static files copied as-is: public CV, images, media, favicons, OG image
scripts/cv/                    CV generator (build-cv.mjs) and private.example.json (format of private/cv.json)
src/components/                Header, Footer, ThemeToggle, HeroStats, CompanyAccordion, …
src/data/                      site.ts, projects.ts
src/layouts/BaseLayout.astro   <html>/<head> shell, theme script, SEO and social meta, ClientRouter
src/pages/                     index (Work), about, resume, contact, 404
src/styles/global.css          Design tokens (light/dark), reset, shared UI classes, motion
src/utils/                     paths.ts (withBase), projects.ts (count helpers)
astro.config.mjs               site URL and base path
```

### Paths: always `withBase()`

`base` is `'/'` in `astro.config.mjs` and is the only place the base path is defined. Every internal `href`/`src` (links, images, video, CV, favicons) goes through `withBase()` from `src/utils/paths.ts`. Never write a hardcoded leading `/`.

### Commands (Node `>=22.12.0`)

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `http://localhost:4321/` |
| `npm run build` | Build into `./dist/` |
| `npm run preview` | Serve `./dist/` locally |
| `npm run cv` | Regenerate the CV PDF from `site.ts` |

### Deployment

A push to `main` runs the **Deploy to GitHub Pages** workflow (`withastro/action` then `actions/deploy-pages`). **Settings → Pages → Source** must be **GitHub Actions**; with "Deploy from a branch", GitHub runs a Jekyll build that fails.
