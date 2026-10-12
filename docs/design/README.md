# Design reference — Phase 2.6

Approved designs for every page at 5 device sizes, light and dark, plus the approved motion.
NOT part of the website build.

- `screenshots/{page}-{device}-{theme}.png` — full-page captures.
  Devices: phone-portrait 390 · phone-landscape 844 · tablet-portrait 820 · tablet-landscape 1180 · desktop 1440.
- `html/{page}-{theme}.html` — responsive static prototype (complete layout CSS; breakpoints as container queries on `.site`).
- `motion/motion-demo.html` — the APPROVED MOTION, interactive: page-load sequence, infographic animations,
  count-up, page transitions (View Transitions), theme crossfade, nav underline slide, accordion, hover states,
  reduced-motion handling. Its MOTION CSS block and <script> are the reference for timings and easing.
  The small dark "Motion demo" panel is demo-only — do not build it.
- `images/`, `fonts/` — only so the prototype renders.

Breakpoints (viewport width): ≥1280 · 1024–1279 · 640–1023 · <640.
If a reference and the written spec in the prompt disagree, the written spec wins.
