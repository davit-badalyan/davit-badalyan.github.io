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

- `src/data/site.ts`: all site text and numbers (profile, about, experience, education, skills, companies, personal projects, hero stats). Never hardcode text in components, and never render `profile.phone`.
- `src/data/projects.ts`: featured projects ("Selected work"; the section is hidden while the list is empty).
- `public/cv/davit-badalyan-cv.pdf`: downloadable CV.
- `public/images/`: `avatar.jpg` (header), `profile.jpg` and `profile.webp` (About portrait).
- `public/og-image.jpg`: social preview image (1200×630).

### Project media

`public/media/<company-slug>/<project-slug>/` contains `cover.jpg`, `loop.mp4` (short, muted) and `screenshots/01.jpg`, `02.jpg`, …
Company slugs are the `id` values in `site.ts`: `playrix`, `armnomads-games`, `cassette-llc`, `armath-ai`, `personal`. Slugs are lowercase kebab-case. See `public/media/README.md`.

### Structure

```
.github/workflows/deploy.yml   Build and deploy to GitHub Pages
docs/design/                   Design reference (screenshots, HTML prototype, motion demo); NOT part of the build
public/                        Static files copied as-is: CV, images, media, favicons, OG image
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

### Deployment

A push to `main` runs the **Deploy to GitHub Pages** workflow (`withastro/action` then `actions/deploy-pages`). **Settings → Pages → Source** must be **GitHub Actions**; with "Deploy from a branch", GitHub runs a Jekyll build that fails.
