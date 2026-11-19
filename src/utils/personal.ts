import { personalProjectsList, type Project, type ProjectClip } from '../data/personal';
import { withBase } from './paths';

/** First and last year of "2024–2026" / "2026" (any dash). */
const yearRange = (year: string): [number, number] => {
  const years = (year.match(/\d{4}/g) ?? ['0']).map(Number);
  return [Math.min(...years), Math.max(...years)];
};

/** Newest first: by the last year, then the first year (a project only in 2026 before one that ran
 *  2024–2026); equal years keep their data order (Array.prototype.sort is stable). */
const byYearDesc = (a: Project, b: Project): number => {
  const [aStart, aEnd] = yearRange(a.year);
  const [bStart, bEnd] = yearRange(b.year);
  return bEnd - aEnd || bStart - aStart;
};

/** Projects that may appear on the site (canShow "no" is never rendered), newest first. Every list
 *  (Work grid, filters, project sheet, prev / next, "N of M") follows this order. */
export const visibleProjects: Project[] = personalProjectsList
  .filter((project) => project.canShow !== 'no')
  .sort(byYearDesc);

/** Visible Demos (detailLevel "card"): open in the project sheet; static fallback page at /projects/<slug>/. */
export const demoProjects = visibleProjects.filter((project) => project.detailLevel === 'card');

/** Visible Case Studies: their own page at /projects/<slug>/. */
export const caseStudyProjects = visibleProjects.filter((project) => project.detailLevel === 'case-study');

/** The list a project's prev / next cycles through: case studies or demos. */
export const siblingsOf = (project: Project): Project[] =>
  project.detailLevel === 'case-study' ? caseStudyProjects : demoProjects;

/** URL of a project media file (path relative to public/media/personal/<slug>/). */
export const mediaUrl = (project: Project, src: string): string => withBase(`media/personal/${project.slug}/${src}`);

/** Page URL of a project (a case study, or a demo's no-JS fallback page). */
export const projectUrl = (project: Project): string => withBase(`projects/${project.slug}/`);

/** "Master's Thesis · 2024–2026" */
export const metaLine = (project: Project): string => `${project.context} · ${project.year}`;

/** Card meta: "Test Assignment · Voodoo · 2026" — the related company (e.g. Triada Studio) or the
 *  client, when there is one. */
export const cardMetaLine = (project: Project): string =>
  [project.context, project.related?.[0]?.short ?? project.related?.[0]?.company ?? project.client, project.year]
    .filter(Boolean)
    .join(' · ');

/** UI name of a project's kind: "Case Study" (detailLevel "case-study") or "Demo" (detailLevel "card"). */
export const kindLabel = (project: Project): string => (project.detailLevel === 'case-study' ? 'Case Study' : 'Demo');

/** Line icon for a platform value. */
export const platformIcon = (platform: string): 'monitor' | 'phone' | 'globe' | 'play-rect' => {
  if (/ad network/i.test(platform)) return 'play-rect';
  if (/ios|android/i.test(platform)) return 'phone';
  if (/web/i.test(platform)) return 'globe';
  return 'monitor';
};

/** Index (1-based) and count of a project in a list, e.g. "Case Study 3 of 6". */
export const positionIn = (list: Project[], project: Project): { index: number; total: number } => ({
  index: list.findIndex((other) => other.slug === project.slug) + 1,
  total: list.length,
});

/** 45 → "0:45", 100.4 → "1:40" */
export const formatDuration = (seconds: number): string => {
  const total = Math.round(seconds);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
};

/** External links in display order; only the ones a project has. */
const LINK_LABELS: [keyof Project['links'], string][] = [
  ['github', 'GitHub'],
  ['liveDemo', 'Live demo'],
  ['appStore', 'App Store'],
  ['googlePlay', 'Google Play'],
  ['youtube', 'YouTube'],
];

export type ProjectLink = {
  key: keyof Project['links'];
  label: string;
  href: string;
  /** Short location under the name: the repo path on GitHub, otherwise the host. */
  detail: string;
};

const linkDetail = (key: keyof Project['links'], href: string): string => {
  try {
    const url = new URL(href);
    return key === 'github' ? url.pathname.replace(/^\/+|\/+$/g, '') : url.host;
  } catch {
    return href;
  }
};

/** TechIcon name for a project link. */
export const linkIcon = (key: ProjectLink['key']): string =>
  ({ github: 'GitHub', liveDemo: 'Website', appStore: 'App Store', googlePlay: 'Google Play', youtube: 'YouTube' })[key];

/** TechIcon name for any external URL, from its host (credits, résumé links). */
export const hrefIcon = (href: string): string => {
  const host = (() => {
    try {
      return new URL(href).host;
    } catch {
      return '';
    }
  })();
  if (/(^|\.)youtube\.com$|(^|\.)youtu\.be$/.test(host)) return 'YouTube';
  if (/(^|\.)github\.com$/.test(host)) return 'GitHub';
  if (/apps\.apple\.com$/.test(host)) return 'App Store';
  if (/play\.google\.com$/.test(host)) return 'Google Play';
  if (/(^|\.)jettelly\.com$/.test(host)) return 'Jettelly';
  return 'Website';
};

export const projectLinks = (project: Project): ProjectLink[] =>
  LINK_LABELS.flatMap(([key, label]) => {
    const href = project.links[key];
    return href ? [{ key, label, href, detail: linkDetail(key, href) }] : [];
  });

/** A player item with its media URLs resolved. */
export type PlayerItem = ProjectClip & { url: string; posterUrl: string };

export const playerItems = (project: Project, clips: ProjectClip[]): PlayerItem[] =>
  clips.map((clip) => ({ ...clip, url: mediaUrl(project, clip.src), posterUrl: mediaUrl(project, clip.poster) }));
