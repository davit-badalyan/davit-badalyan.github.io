import { companies } from '../data/site';

type Company = (typeof companies)[number];

/** True when the company has more projects than the site can show (NDA / no access). */
export const hasUnlisted = (company: Company): boolean => company.hasUnlistedProjects === true;

/** "65" or "65+" — the plus marks unlisted (NDA) projects. */
export const formatCount = (count: number, unlisted = false): string => `${count}${unlisted ? '+' : ''}`;

/** Anything with a project count: a company or the personal projects group. */
type Countable = { projectCount: number; countLabel?: string };

/** The displayed count: the rounded countLabel ("40+", "10+") if there is one, else projectCount ("3"). */
export const countText = (group: Countable): string => group.countLabel ?? String(group.projectCount);

/** "40+ projects" / "3 projects". */
export const projectsText = (group: Countable): string => `${countText(group)} projects`;

/** Sum of all commercial projects, with "+" if any company has unlisted projects: "65+ projects". */
export const commercialProjectsText = (): string => {
  const total = companies.reduce((sum, company) => sum + company.projectCount, 0);
  return `${formatCount(total, companies.some(hasUnlisted))} projects`;
};

/** "YYYY-MM" → { year, month } (month 1–12). */
export const parseYearMonth = (value: string): { year: number; month: number } => {
  const [year, month] = value.split('-').map(Number);
  return { year, month };
};
