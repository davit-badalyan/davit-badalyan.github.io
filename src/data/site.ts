// Single source of truth for all site text. Same wording as the CV.
// Edit here; pages read from this file.

export const profile = {
  name: "Davit Badalyan",
  title: "Game Developer, Programmer, CS & CG Enthusiast",
  shortTitle: "Game Developer", // short role, kept for later (the home page title uses `title`)
  tagline: "Unity, HTML5 Games & Playable Ads",
  metaDescription: "Game Developer, Programmer, and CS & CG Enthusiast from Yerevan, Armenia, specializing in Unity, HTML5 Games, and Playable Ads.",
  heroHeadline: "Unity, HTML5 Games and Playable Ads.",
  heroIntro: "Game Developer, Programmer, and CS & CG Enthusiast, experienced in Unity and Web-Based Game Development, including Playable Ads and HTML5 Games.",
  location: "Yerevan, Armenia",
  email: "davit.badalyan.00@gmail.com",
  cvPath: "cv/davit-badalyan-cv.pdf", // relative to public/, always use withBase()
  photoPath: "images/profile.jpg", // About page portrait, 4:5 (800×1000)
  avatarPath: "images/avatar.jpg", // header avatar, square (192×192), shown as a circle
} as const;

export const socials = [
  { name: "LinkedIn", handle: "Davit Badalyan", href: "https://www.linkedin.com/in/d-badalyan/" },
  { name: "GitHub", handle: "davit-badalyan", href: "https://github.com/davit-badalyan" },
  { name: "X", handle: "@d_badalyan", href: "https://x.com/d_badalyan" },
] as const;

/** About text in three paragraphs (About page, Resume "About Me"); join with a space for meta descriptions. */
export const about = [
  "Game Developer, Programmer, and CS & CG Enthusiast, experienced in Unity and Web-Based Game Development, including Playable Ads and HTML5 Games, with Bachelor's and Master's degrees in Information Technology from the National Polytechnic University of Armenia.",
  "My experience spans Hyper-Casual, Hybrid-Casual, and Midcore Game Development, as well as Interactive Marketing Creatives, with a focus on Gameplay Systems, Architecture, Tools, UI, and Core Game Logic.",
  "I enjoy exploring Computer Science, Computer Graphics, Math, and Game Development, and combining them throughout my work, especially in collaborative, feedback-driven environments where I can take ownership, improve product quality, and grow through technical challenges.",
] as const;

/** The About text as one string (meta descriptions). */
export const aboutText = about.join(" ");

/** About facts card: each row has a line icon or a logo, a label and a value. */
export const aboutFacts = {
  basedIn: { label: "Based in", icon: "location", flag: "flag-am", value: "Yerevan, Armenia" },
  education: {
    label: "Education",
    logo: "npua",
    value: "MSc & BSc, Information Technology",
    detail: "National Polytechnic University of Armenia",
  },
  languages: { label: "Languages", icon: "languages", items: ["Armenian", "English", "Russian"] },
  experience: { label: "Experience", icon: "briefcase", value: "Since 2020" },
} as const;

export const focusAreas = [
  "Gameplay Systems",
  "Core Game Logic",
  "Architecture",
  "Shaders",
  "Tools",
  "UI"
] as const;
export const programmingLanguages = [
  "C#",
  "TypeScript",
  "JavaScript"
] as const;
export const enginesFrameworks = [
  "Unity",
  "PixiJS",
  "Phaser",
  "Three.js"
] as const;

export const experience = [
  {
    "role": "HTML5 Games & Playable Ads Developer",
    "company": "Playrix",
    "logo": "playrix",
    "location": "Yerevan, Armenia",
    "dates": "Oct 2025 – Oct 2026",
    "duration": "1 yr 1 mo",
    "links": [
      {
        "label": "Website",
        "href": "https://playrix.com/"
      },
      {
        "label": "LinkedIn",
        "href": "https://www.linkedin.com/company/playrix-entertainment/"
      }
    ],
    "description": "Worked as a Playable Ads Developer in the Marketing Creatives team at Playrix, creating engaging, Interactive Gameplay Experiences for titles such as Fishdom, Township, Gardenscapes, and Homescapes. Focused on Performance Optimization, Visual Polish, and Player Engagement, delivering high-quality Creatives used in large-scale User Acquisition campaigns."
  },
  {
    "role": "Computer Graphics Apprentice",
    "company": "Triada Studio",
    "id": "triada-studio",
    "logo": "triada-studio",
    "location": "Yerevan, Armenia",
    "dates": "Mar 2026 – Apr 2026",
    "duration": "2 mos",
    "links": [
      {
        "label": "Website",
        "href": "https://triadastudio.com/"
      },
      {
        "label": "LinkedIn",
        "href": "https://www.linkedin.com/company/triada-studio/"
      }
    ],
    "description": "Studied and researched Computer Graphics as part of my Academic Practice, while refining my Master's Thesis Project, \"Shaders In Computer Graphics\". Worked with Industry Professionals to deepen my understanding of the field."
  },
  {
    "role": "Mobile Game Developer",
    "company": "ArmNomads Games",
    "id": "armnomads-games",
    "logo": "armnomads-games",
    "location": "Yerevan, Armenia",
    "dates": "Jul 2023 – Sep 2025",
    "duration": "2 yrs 3 mos",
    "links": [
      {
        "label": "LinkedIn",
        "href": "https://www.linkedin.com/company/armnomads/"
      }
    ],
    "description": "Worked on Midcore and Hybrid-Casual Mobile Games, developing scalable Gameplay Systems, Tools, In-Game Logic, and User Interfaces. Worked closely with Artists and Designers to create polished and engaging Player Experiences, and with international Publishing Partners and Studios to iterate on Game Design, optimize Monetization Systems, and improve Game Performance based on Testing and Player Feedback."
  },
  {
    "role": "Mobile Game Developer",
    "company": "Cassette LLC",
    "id": "cassette-llc",
    "logo": "cassette-llc",
    "location": "Yerevan, Armenia",
    "dates": "Sep 2022 – May 2023",
    "duration": "9 mos",
    "links": [
      {
        "label": "LinkedIn",
        "href": "https://www.linkedin.com/company/cassette-llc/"
      }
    ],
    "description": "Worked on Hyper-Casual Games, designing and implementing Gameplay Mechanics, Systems, and UI. Focused on Rapid Iteration, Build Optimization, and delivering a smooth Player Experience. Collaborated with leading Publishers such as Voodoo and Supersonic Studios, iterating on Games based on Performance Data and Testing Results."
  },
  {
    "role": "HTML5 Games & Playable Ads Developer",
    "company": "Armath AI",
    "logo": "armath-ai",
    "location": "Yerevan, Armenia",
    "dates": "Dec 2020 – Jun 2022",
    "duration": "1 yr 7 mos",
    "links": [
      {
        "label": "LinkedIn",
        "href": "https://www.linkedin.com/company/armathai/"
      }
    ],
    "description": "Worked on Playable Ads and HTML5 Games, creating lightweight and engaging Interactive Experiences optimized for fast loading and smooth Performance across Browsers and Devices. Collaborated with major Ad Networks and Publishers, including CrossInstall, MoPub, Aarki, Playrix, and Voodoo, delivering high-performance Creatives and Games."
  }
];

export const education = [
  {
    "title": "Master's Degree",
    "id": "npua-masters",
    "school": "National Polytechnic University of Armenia",
    "logo": "npua",
    "location": "Yerevan, Armenia",
    "dates": "Sep 2024 – Jun 2026",
    "duration": "2 yrs",
    "field": "Information Technology",
    "links": [
      {
        "label": "Website",
        "href": "https://polytech.am/"
      },
      {
        "label": "LinkedIn",
        "href": "https://www.linkedin.com/school/polytech-armenia/"
      }
    ]
  },
  {
    "title": "Bachelor's Degree",
    "id": "npua-bachelors",
    "school": "National Polytechnic University of Armenia",
    "logo": "npua",
    "location": "Yerevan, Armenia",
    "dates": "Sep 2020 – Jun 2024",
    "duration": "4 yrs",
    "field": "Information Technology",
    "links": [
      {
        "label": "Website",
        "href": "https://polytech.am/"
      },
      {
        "label": "LinkedIn",
        "href": "https://www.linkedin.com/school/polytech-armenia/"
      }
    ]
  },
  {
    "title": "Student",
    "school": "TUMO Center for Creative Technologies",
    "logo": "tumo",
    "location": "Yerevan, Armenia",
    "dates": "Oct 2017 – Feb 2021",
    "duration": "3 yrs 5 mos",
    "field": "Game Development, Programming, 3D Modeling",
    "links": [
      {
        "label": "Website",
        "href": "https://tumo.org/"
      },
      {
        "label": "LinkedIn",
        "href": "https://www.linkedin.com/school/tumo-center-for-creative-technologies/"
      }
    ]
  },
  {
    "title": "Software Technician Diploma",
    "school": "National Polytechnic University of Armenia",
    "logo": "npua",
    "location": "Yerevan, Armenia",
    "dates": "Sep 2014 – Jun 2018",
    "duration": "4 yrs",
    "field": "Software for Automated Systems and Computers",
    "links": [
      {
        "label": "Website",
        "href": "https://polytech.am/"
      },
      {
        "label": "LinkedIn",
        "href": "https://www.linkedin.com/school/polytech-armenia/"
      }
    ]
  }
];

export const skills = [
  {
    "label": "Programming Languages",
    "items": [
      "C#",
      "TypeScript",
      "JavaScript"
    ]
  },
  {
    "label": "Game Engines / Frameworks",
    "items": [
      "Unity",
      "PixiJS",
      "Phaser",
      "Three.js"
    ]
  },
  {
    "label": "IDE",
    "items": [
      "JetBrains",
      "Visual Studio Code",
      "Visual Studio"
    ]
  },
  {
    "label": "AI Tools",
    "items": [
      "ChatGPT",
      "Claude",
      "GitHub Copilot"
    ]
  },
  {
    "label": "Version Control",
    "items": [
      "Git",
      "GitHub"
    ]
  },
  {
    "label": "Operating Systems",
    "items": [
      "Linux",
      "macOS",
      "Windows"
    ]
  },
  {
    "label": "Task Management",
    "wide": true,
    "items": [
      "Notion",
      "Obsidian",
      "Miro",
      "Trello",
      "Asana",
      "ClickUp"
    ]
  },
  {
    "label": "Familiar With",
    "wide": true,
    "secondary": true,
    "groups": [
      { "label": "Languages & Web", "items": ["C", "C++", "CSS", "HTML", "PHP", "Python", "SQL"] },
      { "label": "Graphics & Shaders", "items": ["Dear ImGui", "GLAD", "GLFW", "GLM", "GLSL", "HLSL", "OpenGL", "ShaderLab"] },
      { "label": "Engines & Playables", "items": ["Godot", "Luna", "Unity Playworks", "Unreal Engine"] },
      { "label": "Build & Mobile Tools", "items": ["Android Studio", "CMake", "Webpack", "Xcode"] },
      { "label": "Design, 3D & Office", "items": ["Adobe Illustrator", "Adobe Photoshop", "Adobe Premiere Pro", "Blender", "CorelDRAW", "Microsoft Office"] }
    ]
  }
];

/** AI tools (About page), from the "AI Tools" skills group. */
export const aiTools: readonly string[] = skills.find((group) => group.label === "AI Tools")?.items ?? [];

export const languages = { native: "Armenian", other: ["English", "Russian"] } as const;

export const softSkills = {
  core: [
  "Friendly",
  "Punctual",
  "Organized",
  "Fast Learner",
  "Team Player",
  "Responsible"
],
  workEthic: [
  "Hard-Working",
  "Goal-Oriented",
  "Growth-Minded"
],
} as const;

export const projectsSummary = {
  text: "Game Development and Programming projects spanning Coursework, Personal Work, and Professional Experience, including Gameplay Systems, Interactive Applications, and Software Architecture.",
  links: [
    { label: "davit-badalyan", href: "https://github.com/davit-badalyan", icon: "GitHub" },
    { label: "your-digital-research", href: "https://github.com/your-digital-research", icon: "GitHub" },
  ],
} as const;

// Work page: the company table (commercial work only). projectCount = projects shown on the site.
// hasUnlistedProjects: true = more projects exist that are not shown (NDA / no access).
// countLabel: the rounded, displayed count for such companies (e.g. "40+"). projectCount stays the real listed number (used for bar proportions and sums).
/** Logos for clients I have not worked for (shown in a project's Client cell). Slug = file in
 *  public/images/logos/<slug>.png. */
export const clientLogos: Record<string, string> = {
  Voodoo: "voodoo",
  Tripledot: "tripledot",
};

export const companies = [
  {
    "id": "playrix",
    "logo": "playrix",
    "countLabel": "40+",
    "hasUnlistedProjects": true,
    "start": "2025-10",
    "end": "2026-10",
    "name": "Playrix",
    "role": "HTML5 Games & Playable Ads Developer",
    "period": "Oct 2025 – Oct 2026",
    "duration": "1 yr 1 mo",
    "projectCount": 39,
    "about": "Playable Ads for Fishdom, Township, Gardenscapes, and Homescapes."
  },
  {
    "id": "armnomads-games",
    "logo": "armnomads-games",
    "countLabel": "2+",
    "hasUnlistedProjects": true,
    "start": "2023-07",
    "end": "2025-09",
    "name": "ArmNomads Games",
    "role": "Mobile Game Developer",
    "period": "Jul 2023 – Sep 2025",
    "duration": "2 yrs 3 mos",
    "projectCount": 2,
    "about": "Midcore and Hybrid-Casual Mobile Games."
  },
  {
    "id": "cassette-llc",
    "logo": "cassette-llc",
    "countLabel": "3+",
    "hasUnlistedProjects": true,
    "start": "2022-09",
    "end": "2023-05",
    "name": "Cassette LLC",
    "role": "Mobile Game Developer",
    "period": "Sep 2022 – May 2023",
    "duration": "9 mos",
    "projectCount": 3,
    "about": "Hyper-Casual Mobile Games."
  },
  {
    "id": "armath-ai",
    "logo": "armath-ai",
    "countLabel": "20+",
    "hasUnlistedProjects": true,
    "start": "2020-12",
    "end": "2022-06",
    "name": "Armath AI",
    "role": "HTML5 Games & Playable Ads Developer",
    "period": "Dec 2020 – Jun 2022",
    "duration": "1 yr 7 mos",
    "projectCount": 21,
    "about": "Playable Ads and HTML5 Games for major Ad Networks and Publishers."
  }
];

// Work page: separate "Personal projects" section — no role, no period.
export const personalProjects = {
  id: "personal",
  title: "Personal Projects",
  countLabel: "10+",
  projectCount: 11,
  about: "Test Assignments, Academic Projects, and Personal Experiments.",
} as const;

export const totalProjects = 75;

// Home hero: the three tall cards next to the intro (≥1024px they also show mini infographics built from `companies` and `personalProjects`). Later they become the featured-project video frames.
export const heroStats = [
  { label: "Projects", value: "75+" },
  { label: "Studios", value: "4" },
  { label: "Since", value: "2020" },
] as const;

export const contactIntro = "Email is the fastest way to reach me. I usually reply within a couple of days.";
