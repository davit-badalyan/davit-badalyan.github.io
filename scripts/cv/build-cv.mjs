// Builds the CV from the website's own data, so it always matches the site: text from
// src/data/site.ts, icons from src/data/icons.ts, logos from public/images/logos/, fonts from the
// Fontsource packages. Two versions:
//
//   public  → public/cv/davit-badalyan-cv.pdf   (linked from the site; NO phone number)
//   private → private/davit-badalyan-cv.pdf     (same CV with the phone in the contact line). private/ is a
//             git-ignored local folder outside public/, so it is never committed or deployed. The phone
//             number lives only in private/cv.json — format in scripts/cv/private.example.json.
//             Without that file, only the public version is built.
//
//   npm run cv                         → both versions
//   npm run cv -- --out-dir review/    → both, written to review/ instead (nothing else is touched)
//   npm run cv -- --html out.html      → also keeps the generated public HTML (for checking the layout)
//
// Needs Google Chrome or Chromium (CHROME_PATH overrides the location) and Node ≥ 22.12 (the npm
// script passes --experimental-strip-types so the .ts data files can be imported directly).
// No dependencies: Chrome is driven over the DevTools protocol with Node's built-in WebSocket.

import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const arg = (name) => {
  const index = process.argv.indexOf(name);
  return index > -1 && process.argv[index + 1] ? resolve(process.argv[index + 1]) : undefined;
};
const OUT_DIR = arg('--out-dir');
const PUBLIC_OUT = OUT_DIR ? join(OUT_DIR, 'davit-badalyan-cv.pdf') : join(ROOT, 'public/cv/davit-badalyan-cv.pdf');
const PRIVATE_OUT = OUT_DIR ? join(OUT_DIR, 'davit-badalyan-cv-private.pdf') : join(ROOT, 'private/davit-badalyan-cv.pdf');
const SITE_URL = 'https://davit-badalyan.github.io/';

// The phone number is private: only in private/cv.json (git-ignored folder), only in the private CV.
const PRIVATE_FILE = join(ROOT, 'private/cv.json');
const privateData = existsSync(PRIVATE_FILE) ? JSON.parse(readFileSync(PRIVATE_FILE, 'utf8')) : null;
const phone = typeof privateData?.phone === 'string' && privateData.phone.trim() ? privateData.phone.trim() : null;

const site = await import(pathToFileURL(join(ROOT, 'src/data/site.ts')).href);
const { iconFor } = await import(pathToFileURL(join(ROOT, 'src/data/icons.ts')).href);
const { profile, socials, about, experience, education, skills, languages, softSkills, projectsSummary } = site;

// ---------------------------------------------------------------------------------------------
// Helpers

const esc = (text) =>
  String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const dataUri = (file, type) => `data:${type};base64,${readFileSync(file).toString('base64')}`;
const sortNames = (items) => [...items].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

let idCounter = 0;
/** Icon for a tech / tool / social / flag name, rendered like the site's TechIcon. */
function icon(name, size = 12, { flag = false } = {}) {
  const def = iconFor(name);
  if (!def) return '';
  const height = flag ? Math.round((size * 2) / 3) : size;
  if (def.svg && def.viewBox) {
    idCounter += 1;
    const ids = [...def.svg.matchAll(/id="([^"]+)"/g)].map((match) => match[1]);
    const body = ids.reduce(
      (svg, id) =>
        svg
          .replaceAll(`id="${id}"`, `id="${id}-${idCounter}"`)
          .replaceAll(`url(#${id})`, `url(#${id}-${idCounter})`)
          .replaceAll(`href="#${id}"`, `href="#${id}-${idCounter}"`),
      def.svg,
    );
    const svg = `<svg class="ic${def.mono ? ' ic--mono' : ''}" width="${size}" height="${height}" viewBox="${def.viewBox}"${flag ? ' preserveAspectRatio="xMidYMid slice"' : ''} aria-hidden="true">${body}</svg>`;
    return flag ? `<span class="flag" style="width:${size}px;height:${height}px">${svg}</span>` : svg;
  }
  if (def.image) {
    return `<img class="ic" src="${dataUri(join(ROOT, 'public', def.image), 'image/png')}" width="${size}" height="${size}" alt="">`;
  }
  if (def.monogram) {
    const colour = def.monogramColor ? `background:${def.monogramColor};color:#fff;` : '';
    return `<span class="ic mono-tile" style="width:${size}px;height:${size}px;font-size:${(size * 0.5).toFixed(1)}px;${colour}">${esc(def.monogram)}</span>`;
  }
  return '';
}

/** Line icons from src/components/Icon.astro (stroke style). */
const LINE = {
  phone: '<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
};
const lineIcon = (name, size = 12) =>
  `<svg class="ic ic--line" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${LINE[name]}</svg>`;

const logo = (slug, size) =>
  `<img class="logo" src="${dataUri(join(ROOT, 'public/images/logos', `${slug}.png`), 'image/png')}" width="${size}" height="${size}" alt="">`;

const link = (href, text) => `<a href="${esc(href)}">${esc(text)}</a>`;
const hostPath = (href) => href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

// ---------------------------------------------------------------------------------------------
// Sections

const contactsFor = (phoneNumber) => [
  { icon: icon('Email', 12), html: link(`mailto:${profile.email}`, profile.email) },
  ...(phoneNumber ? [{ icon: lineIcon('phone', 12), html: link(`tel:${phoneNumber.replace(/[^\d+]/g, '')}`, phoneNumber) }] : []),
  { icon: lineIcon('globe', 12), html: link(SITE_URL, hostPath(SITE_URL)) },
  ...socials.map((social) => ({ icon: icon(social.name, 12), html: link(social.href, social.handle) })),
];

// One row when everything fits (the public CV: email, website, LinkedIn, GitHub, X). With the phone
// (private CV) the six items take two rows: split evenly (3 + 3) instead of leaving two alone.
const balancedContacts = (items) =>
  items
    .map((item, index) => `${index === 3 && items.length === 6 ? '<li class="contacts__break" aria-hidden="true"></li>' : ''}<li>${item.icon}${item.html}</li>`)
    .join('\n    ');

const headerFor = (phoneNumber) => `
<header class="head">
  <h1>${esc(profile.name)}</h1>
  <div class="head__row">
    <p class="head__title">${esc(profile.title)}</p>
    <p class="head__loc"><span class="dot" aria-hidden="true"></span>${icon('flag-am', 15, { flag: true })}${esc(profile.location)}</p>
  </div>
  <ul class="contacts">
    ${balancedContacts(contactsFor(phoneNumber))}
  </ul>
</header>`;

const section = (label, body, cls = '') => `
<section class="section ${cls}">
  <h2 class="label">${esc(label)}</h2>
  ${body}
</section>`;

const aboutHtml = about.map((paragraph) => `<p>${esc(paragraph)}</p>`).join('\n');

const linkList = (links) =>
  links.length ? `<span class="entry__links">${links.map((item) => `${link(item.href, item.label)}<span class="arrow">↗</span>`).join('')}</span>` : '';

const workHtml = experience
  .map(
    (job) => `
<article class="entry">
  ${logo(job.logo, 26)}
  <div class="entry__body">
    <div class="entry__row"><h3>${esc(job.role)}</h3><span class="dates">${esc(job.dates)} · ${esc(job.duration)}</span></div>
    <div class="entry__row entry__row--sub"><span><strong>${esc(job.company)}</strong> <span class="muted">· ${esc(job.location)}</span></span>${linkList(job.links)}</div>
    <p class="entry__text">${esc(job.description)}</p>
  </div>
</article>`,
  )
  .join('');

const educationHtml = education
  .map(
    (item) => `
<article class="entry entry--edu">
  ${logo(item.logo, 26)}
  <div class="entry__body">
    <div class="entry__row"><h3>${esc(item.title)}</h3><span class="dates">${esc(item.dates)} · ${esc(item.duration)}</span></div>
    <div class="entry__row entry__row--sub"><span><strong>${esc(item.school)}</strong> <span class="muted">· ${esc(item.location)}</span></span>${linkList(item.links)}</div>
    <p class="entry__field">Field of study: ${esc(item.field)}</p>
  </div>
</article>`,
  )
  .join('');

const items = (names) => `<ul class="items">${names.map((name) => `<li>${icon(name, 12)}${esc(name)}</li>`).join('')}</ul>`;
const skillsHtml = `<div class="skills">${skills
  .map((group) =>
    group.groups
      ? `<div class="skill skill--wide skill--secondary">
  <h3 class="label label--small">${esc(group.label)}</h3>
  <dl class="subgroups">${group.groups
    .map((sub) => `<div class="subgroup"><dt>${esc(sub.label)}</dt><dd>${items(sortNames(sub.items))}</dd></div>`)
    .join('')}</dl>
</div>`
      : `<div class="skill${group.wide ? ' skill--wide' : ''}">
  <h3 class="label label--small">${esc(group.label)}</h3>
  ${items(group.items)}
</div>`,
  )
  .join('')}</div>`;

// "Friendly · Punctual · …": items never split, and no line starts or ends with a " · " (same
// technique as the website's Resume: each item draws its separator before it, and separators at the
// start of a line fall into a clipped gutter — see .soft__items below).
const inlineList = (list) => list.map((item) => `<span class="soft__item">${esc(item)}</span>`).join('');

// Languages & Soft Skills: three columns, as on the website's Resume.
const softHtml = `
<div class="soft">
  <div>
    <h3>Language skills</h3>
    <p class="soft__line"><span class="muted">Mother tongue:</span> ${icon(languages.native, 15, { flag: true })}${esc(languages.native)}</p>
    <p class="soft__line"><span class="muted">Other:</span> ${languages.other.map((name) => `<span class="lang">${icon(name, 15, { flag: true })}${esc(name)}</span>`).join('')}</p>
  </div>
  <div><h3>Core Skills</h3><p class="muted soft__items">${inlineList(softSkills.core)}</p></div>
  <div><h3>Work Ethic</h3><p class="muted soft__items">${inlineList(softSkills.workEthic)}</p></div>
</div>`;

const projectsHtml = `
<p class="projects__text">${esc(projectsSummary.text)}</p>
<ul class="projects__links">
  <li>${lineIcon('globe', 12)}${link(SITE_URL, `Portfolio · ${hostPath(SITE_URL)}`)}</li>
  ${projectsSummary.links.map((item) => `<li>${icon(item.icon, 12)}${link(item.href, item.label)}</li>`).join('\n  ')}
</ul>`;

// ---------------------------------------------------------------------------------------------
// Page

// Fontsource's own @font-face rules (same as the site), with the file paths made absolute.
const fontCss = (pkg) => {
  const dir = join(ROOT, 'node_modules/@fontsource-variable', pkg);
  return readFileSync(join(dir, 'wght.css'), 'utf8').replace(/url\(\.\/files\//g, `url(${pathToFileURL(join(dir, 'files')).href}/`);
};
const pageFor = (phoneNumber) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(profile.name)} — CV</title>
<style>
  ${fontCss('instrument-sans')}
  ${fontCss('jetbrains-mono')}

  /* Footer in the page margin: "Davit Badalyan · CV" left, "N / M" right. */
  @page {
    size: A4;
    margin: 12mm 15mm 14mm;
    @bottom-left { content: '${esc(profile.name)} · CV'; font: 7pt 'JetBrains Mono Variable', monospace; color: #55524c; vertical-align: top; padding-top: 4mm; }
    @bottom-right { content: counter(page) ' / ' counter(pages); font: 7pt 'JetBrains Mono Variable', monospace; color: #55524c; vertical-align: top; padding-top: 4mm; }
  }
  :root { --text: #141414; --muted: #55524c; --line: #dad7d0; --chip: #eeece7; --accent: #2f4bff; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font: 400 9.1pt/1.5 'Instrument Sans Variable', 'Helvetica Neue', sans-serif; color: var(--text); word-spacing: 0.02em; }
  a { color: var(--accent); text-decoration: none; }
  ul { list-style: none; }
  .muted { color: var(--muted); }
  .ic { display: inline-block; flex: none; vertical-align: middle; }
  .ic--mono, .ic--line { color: var(--text); }
  .mono-tile { display: inline-flex; align-items: center; justify-content: center; border-radius: 2.5px; background: var(--text); color: #fff; font-weight: 600; line-height: 1; }
  .flag { position: relative; display: inline-block; flex: none; overflow: hidden; border-radius: 2px; vertical-align: middle; }
  .flag > svg { width: 100%; height: 100%; display: block; }
  .flag::after { content: ''; position: absolute; inset: 0; border-radius: inherit; box-shadow: inset 0 0 0 0.75px rgb(0 0 0 / 15%); }
  .logo { flex: none; border: 0.75px solid var(--line); border-radius: 7px; background: #fff; object-fit: cover; }

  /* Header */
  .head { padding-bottom: 10px; border-bottom: 1.25px solid var(--text); }
  .head h1 { font-size: 25pt; line-height: 1.05; font-weight: 600; letter-spacing: -0.025em; word-spacing: 0.12em; }
  .head__row { display: flex; justify-content: space-between; align-items: baseline; gap: 16px; margin-top: 6px; }
  .head__title { font-size: 11pt; color: var(--muted); }
  .dot { width: 6px; height: 6px; flex: none; border-radius: 50%; background: var(--accent); }
  .head__loc { display: inline-flex; align-items: center; gap: 6px; font: 8.6pt 'JetBrains Mono Variable', monospace; color: var(--muted); }
  .contacts { display: flex; flex-wrap: wrap; gap: 4px 11px; margin-top: 8px; font: 7.5pt 'JetBrains Mono Variable', monospace; }
  .contacts li { display: inline-flex; align-items: center; gap: 5px; }
  .contacts .contacts__break { flex-basis: 100%; height: 0; }

  /* Sections */
  .section { margin-top: 12px; }
  .label { font: 500 8pt 'JetBrains Mono Variable', monospace; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); margin-bottom: 8px; break-after: avoid; }
  .label--small { font-size: 7.2pt; letter-spacing: 0.08em; color: var(--muted); margin-bottom: 5px; }
  p { hyphens: manual; }
  .about p { text-align: justify; }
  .about p + p { margin-top: 4px; }

  /* Experience / education */
  .entry { display: grid; grid-template-columns: 26px minmax(0, 1fr); gap: 11px; padding: 8px 0; border-bottom: 0.75px solid var(--line); break-inside: avoid; }
  .entry:first-of-type { padding-top: 2px; }
  .entry--edu { padding: 6px 0; }
  .entry__row { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
  .entry h3 { font-size: 10.2pt; font-weight: 600; line-height: 1.3; }
  .dates { flex: none; font: 8.2pt 'JetBrains Mono Variable', monospace; color: var(--muted); white-space: nowrap; }
  .entry__row--sub { margin-top: 0; font-size: 8.9pt; }
  .entry__row--sub strong { font-weight: 600; }
  .entry__links { display: inline-flex; gap: 8px; flex: none; font: 8pt 'JetBrains Mono Variable', monospace; }
  .arrow { margin-left: 1px; font-size: 7.4pt; color: var(--accent); }
  .entry__text { margin-top: 3px; color: var(--muted); text-align: justify; }
  .entry__field { margin-top: 0; color: var(--muted); font-size: 8.9pt; }

  /* Skills */
  .skills { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; }
  .skill { padding: 7px 10px; border: 0.75px solid var(--line); border-radius: 9px; break-inside: avoid; }
  .skill--wide { grid-column: 1 / -1; }
  .items { display: flex; flex-wrap: wrap; gap: 3px 12px; }
  .items li { display: inline-flex; align-items: center; gap: 5px; font-size: 8.7pt; white-space: nowrap; }
  .skill--secondary .items li { font-size: 8.4pt; color: var(--muted); }
  .subgroups { display: flex; flex-direction: column; }
  .subgroup { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1px; padding: 3px 0; }
  .subgroup:first-child { padding-top: 0; }
  .subgroup:last-child { padding-bottom: 0; }
  .subgroup + .subgroup { border-top: 0.75px dashed var(--line); }
  /* Familiar With: each group's label above its items (as on the website), so every group fits
     on one line ("Design, 3D & Office" needs ~630px; beside a label column it had ~540px). */
  .subgroup dt { font-size: 8.4pt; font-weight: 600; }

  /* Languages & soft skills */
  .soft { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
  .soft h3 { font-size: 9.2pt; font-weight: 600; margin-bottom: 2px; }
  .soft__line { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 6px; }
  .lang { display: inline-flex; align-items: center; gap: 5px; margin-right: 6px; }
  .soft__items { --sep: 0.9em; display: flex; flex-wrap: wrap; column-gap: var(--sep); overflow: hidden; }
  .soft__item { margin-left: calc(-1 * var(--sep)); white-space: nowrap; }
  .soft__item::before { content: '·'; display: inline-block; width: var(--sep); text-align: center; }

  /* Projects */
  .projects__text { color: var(--muted); }
  .projects__links { display: flex; flex-wrap: wrap; gap: 5px 16px; margin-top: 6px; font: 8.4pt 'JetBrains Mono Variable', monospace; }
  .projects__links li { display: inline-flex; align-items: center; gap: 6px; }
  .keep { break-inside: avoid; }
  /* Page 2 starts with Education (instead of one lone entry at the foot of page 1). */
  .page-start { break-before: page; margin-top: 0; }
</style>
</head>
<body>
${headerFor(phoneNumber)}
${section('About Me', aboutHtml, 'about')}
${section('Work Experience', workHtml)}
${section('Education and Training', educationHtml, 'page-start')}
${section('Skills', skillsHtml)}
${section('Languages & Soft Skills', softHtml, 'keep')}
${section('Projects', projectsHtml, 'keep')}
</body>
</html>`;

// ---------------------------------------------------------------------------------------------
// Print with headless Chrome (DevTools protocol)

const chromeCandidates = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);
const chrome = chromeCandidates.find((candidate) => existsSync(candidate));
if (!chrome) throw new Error('Chrome / Chromium not found — set CHROME_PATH.');

const rasterizeMonograms = `(() => {
  for (const tile of document.querySelectorAll('.mono-tile')) {
    const r = tile.getBoundingClientRect(), cs = getComputedStyle(tile), k = 6;
    const c = document.createElement('canvas'); c.width = r.width * k; c.height = r.height * k;
    const g = c.getContext('2d'); g.scale(k, k);
    g.fillStyle = cs.backgroundColor; g.beginPath(); g.roundRect(0, 0, r.width, r.height, parseFloat(cs.borderRadius) || 0); g.fill();
    g.fillStyle = cs.color; g.font = cs.fontWeight + ' ' + cs.fontSize + ' ' + cs.fontFamily; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(tile.textContent, r.width / 2, r.height / 2 + 0.5);
    const img = new Image(); img.src = c.toDataURL('image/png'); img.width = r.width; img.height = r.height; img.className = 'ic'; img.alt = '';
    tile.replaceWith(img);
  }
  return true;
})()`;

// File size in decimal kilobytes (1 KB = 1000 bytes), the way Finder and iOS show it (log only).
const sizeKB = (bytes) => Math.round(bytes / 1000);

const work = mkdtempSync(join(tmpdir(), 'cv-'));
const versions = [
  { name: 'public', out: PUBLIC_OUT, html: pageFor(null) },
  ...(phone ? [{ name: 'private', out: PRIVATE_OUT, html: pageFor(phone) }] : []),
];
versions.forEach((version, index) => {
  version.file = join(work, `cv-${index}.html`);
  writeFileSync(version.file, version.html);
});
if (arg('--html')) writeFileSync(arg('--html'), versions[0].html);

const port = 9500 + Math.floor(Math.random() * 400);
const proc = spawn(chrome, ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${join(work, 'profile')}`, '--no-first-run', '--allow-file-access-from-files', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((done) => setTimeout(done, ms));

try {
  let target;
  for (let attempt = 0; attempt < 50 && !target; attempt++) {
    try {
      target = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((entry) => entry.type === 'page');
    } catch {}
    if (!target) await sleep(200);
  }
  if (!target) throw new Error('Chrome did not start.');
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((done) => ws.addEventListener('open', done, { once: true }));
  let id = 0;
  const pending = new Map();
  ws.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { ok, fail } = pending.get(message.id);
      pending.delete(message.id);
      message.error ? fail(new Error(message.error.message)) : ok(message.result);
    }
  });
  const send = (method, params = {}) =>
    new Promise((ok, fail) => {
      id += 1;
      pending.set(id, { ok, fail });
      ws.send(JSON.stringify({ id, method, params }));
    });

  await send('Page.enable');
  for (const version of versions) {
    await send('Page.navigate', { url: pathToFileURL(version.file).href });
    await sleep(800);
    await send('Runtime.evaluate', { expression: 'document.fonts.ready.then(() => true)', awaitPromise: true });
    // Monogram tiles ("Px", "GL" …) become images, so text copied from the PDF (and read by
    // applicant-tracking systems) has only the real names, not "Px PixiJS".
    await send('Runtime.evaluate', { expression: rasterizeMonograms });
    await sleep(200);
    const { data } = await send('Page.printToPDF', { preferCSSPageSize: true, printBackground: true });
    const pdf = Buffer.from(data, 'base64');
    mkdirSync(dirname(version.out), { recursive: true });
    writeFileSync(version.out, pdf);
    const pages = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) ?? []).length;
    console.log(`CV (${version.name}) written: ${version.out.replace(`${ROOT}/`, '')} — ${pages} pages, ${sizeKB(pdf.length)} KB`);
  }
  if (!phone) console.log('Note: private/cv.json not found (or has no "phone") — built the public CV only.');
  ws.close();
} finally {
  proc.kill();
  await sleep(300);
  rmSync(work, { recursive: true, force: true });
}
