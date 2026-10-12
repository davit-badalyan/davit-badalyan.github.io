// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://davit-badalyan.github.io',

  // The single source of truth for the URL base path.
  // This repo is the GitHub user site `davit-badalyan/davit-badalyan.github.io`,
  // served from the domain root (https://davit-badalyan.github.io/), so the base is '/'.
  // All internal paths go through `withBase()` in src/utils/paths.ts, which reads
  // import.meta.env.BASE_URL — if the site ever moves to a subpath, only this line changes.
  base: '/',

  // Listen on all network interfaces in `npm run dev` / `npm run preview`, so the
  // site can be opened from a phone on the same Wi-Fi via the printed "Network" URL.
  // Has no effect on the static build or GitHub Pages.
  server: {
    host: true,
  },
});
