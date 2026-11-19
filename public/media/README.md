# Media convention

All project media lives under `public/media/`, grouped by company and project:

```
public/media/<company-slug>/<project-slug>/
├── cover.jpg            # Card / hero image
├── loop.mp4             # Short, muted preview loop (no audio track)
└── screenshots/
    ├── 01.jpg
    ├── 02.jpg
    └── ...
```

## Company slugs

| Slug              | Company         |
| ----------------- | --------------- |
| `playrix`         | Playrix         |
| `armnomads-games` | Armnomads Games |
| `cassette-llc`    | Cassette LLC    |
| `armath-ai`       | Armath AI       |
| `personal`        | Personal projects |

## Rules

- Slugs are lowercase kebab-case (`my-project-name`).
- Screenshots are numbered with two digits (`01.jpg`, `02.jpg`, …) so they sort correctly.
- `loop.mp4` should be short and muted; strip the audio track to keep the file small.
- Reference media from code **only** via `withBase()` from `src/utils/paths.ts`,
  never with a hardcoded leading `/`:

  ```astro
  <img src={withBase('media/playrix/some-project/cover.jpg')} alt="" />
  ```
