// Project data for the Work page. Filled in during the next phase.

export interface FeaturedProject {
  title: string;
  /** Company name as shown on the card chip (matches `companies[].name` in site.ts). */
  company: string;
  /** Project type, e.g. "Playable ad", "HTML5 game", "Mobile game". */
  type: string;
}

/** Projects shown in "Selected work" on the home page. The section is hidden while empty. */
export const featuredProjects: FeaturedProject[] = [];
