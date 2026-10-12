// Single source of truth for all site text. Same wording as the CV.
// Edit here; pages read from this file.

export const profile = {
  name: "Davit Badalyan",
  title: "Game Developer, Programmer, CS & CG Enthusiast",
  tagline: "Unity, HTML5 Games & Playable Ads",
  metaDescription: "Game Developer, Programmer, and CS & CG Enthusiast specializing in Unity, HTML5 Games and Playable Ads.",
  heroHeadline: "Unity, HTML5 Games and Playable Ads.",
  heroIntro: "Game Developer, Programmer, and CS & CG Enthusiast, experienced in Unity and Web-Based Game Development, including Playable Ads and HTML5 Games.",
  location: "Yerevan, Armenia",
  email: "davit.badalyan.00@gmail.com",
  phone: "(+374) 41860870", // CV only — intentionally NOT shown on the website
  cvPath: "cv/davit-badalyan-cv.pdf", // relative to public/, always use withBase()
  photoPath: "images/profile.jpg", // About page portrait, 4:5 (800×1000)
  avatarPath: "images/avatar.jpg", // header avatar, square (192×192), shown as a circle
} as const;

export const socials = [
  { name: "LinkedIn", handle: "Davit Badalyan", href: "https://www.linkedin.com/in/d-badalyan/" },
  { name: "GitHub", handle: "davit-badalyan", href: "https://github.com/davit-badalyan" },
  { name: "X", handle: "@d_badalyan", href: "https://x.com/d_badalyan" },
] as const;

export const about = "Game Developer, Programmer, and CS & CG Enthusiast, experienced in Unity and Web-Based Game Development, including Playable Ads and HTML5 Games, with Bachelor's and Master's degrees in Information Technology from the National Polytechnic University of Armenia. My experience spans Hyper-Casual, Hybrid-Casual, and Midcore Game Development, as well as Interactive Marketing Creatives, with a focus on Gameplay Systems, Architecture, Tools, UI, and Core Game Logic. I enjoy exploring Computer Science, Computer Graphics, Math, and Game Development, and combining them throughout my work, especially in collaborative, feedback-driven environments where I can take ownership, improve product quality, and grow through technical challenges.";

export const aboutFacts = [
  { label: "Based in", value: "Yerevan, Armenia" },
  { label: "Education", value: "MSc & BSc, Information Technology" },
  { label: "Languages", value: "Armenian, English, Russian" },
  { label: "Experience", value: "Since 2020" },
] as const;

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
    "description": "Worked as a Playable Ads Developer within the Marketing Creatives team at Playrix, creating engaging and Interactive Gameplay Experiences for titles such as Fishdom, Township, Gardenscapes, and Homescapes. Focused on Performance Optimization, Visual Polish, and Player Engagement, delivering high-quality Creatives used in large-scale User Acquisition campaigns."
  },
  {
    "role": "Computer Graphics Apprentice",
    "company": "Triada Studio",
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
    "description": "Engaged in Computer Graphics Studies and Research as part of an Academic Practice, while refining my Master’s Thesis Project on “Shaders In Computer Graphics”. Collaborated with Industry Professionals to deepen my understanding of the field."
  },
  {
    "role": "Mobile Game Developer",
    "company": "ArmNomads Games",
    "location": "Yerevan, Armenia",
    "dates": "Jul 2023 – Sep 2025",
    "duration": "2 yrs 3 mos",
    "links": [
      {
        "label": "LinkedIn",
        "href": "https://www.linkedin.com/company/armnomads/"
      }
    ],
    "description": "Worked on Midcore and Hybrid-Casual Mobile Games, developing scalable Gameplay Systems, Tools, In-Game Logic and User Interfaces. Collaborated with Artists and Designers to create polished and engaging Player Experiences. Collaborated with international Publishing Partners and Studios to iterate on Game Design, optimize Monetization Systems, and improve Game Performance based on Testing and Player Feedback."
  },
  {
    "role": "Mobile Game Developer",
    "company": "Cassette LLC",
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
    "location": "Yerevan, Armenia",
    "dates": "Dec 2020 – Jun 2022",
    "duration": "1 yr 7 mos",
    "links": [
      {
        "label": "LinkedIn",
        "href": "https://www.linkedin.com/company/armathai/"
      }
    ],
    "description": "Worked on Playable Ads and HTML5 Games, creating lightweight and engaging Interactive Experiences optimized for fast loading and smooth Performance across Browsers and Devices. Collaborated with major Ad Networks and Platforms, including CrossInstall, MoPub, Aarki, Playrix, and Voodoo, delivering high-performance Creatives and Games across various Platforms."
  }
];

export const education = [
  {
    "title": "Master's Degree",
    "school": "National Polytechnic University of Armenia",
    "location": "Yerevan, Armenia",
    "dates": "Sep 2024 – Jun 2026",
    "duration": "2 yrs",
    "field": "Information Technology",
    "website": "https://polytech.am/"
  },
  {
    "title": "Bachelor's Degree",
    "school": "National Polytechnic University of Armenia",
    "location": "Yerevan, Armenia",
    "dates": "Sep 2020 – Jun 2024",
    "duration": "4 yrs",
    "field": "Information Technology",
    "website": "https://polytech.am/"
  },
  {
    "title": "Student",
    "school": "Tumo Center for Creative Technologies",
    "location": "Yerevan, Armenia",
    "dates": "Oct 2017 – Feb 2021",
    "duration": "3 yrs 5 mos",
    "field": "Game Development, Programming, 3D Modeling",
    "website": "https://tumo.org/"
  },
  {
    "title": "Pre-University Diploma in Software Technicity",
    "school": "National Polytechnic University of Armenia",
    "location": "Yerevan, Armenia",
    "dates": "Sep 2014 – Jun 2018",
    "duration": "4 yrs",
    "field": "Software for Automated Systems and Computers",
    "website": "https://polytech.am/"
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
    "label": "AI",
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
    "items": [
      "Godot",
      "Unreal Engine",
      "Blender",
      "Xcode",
      "Android Studio",
      "Python",
      "HTML",
      "CSS",
      "PHP",
      "SQL",
      "C++",
      "C",
      "CorelDRAW",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe Premiere Pro",
      "Microsoft Office"
    ]
  }
];

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
  "Motivation to Grow"
],
} as const;

export const projectsSummary = {
  text: "Game Development and Programming projects spanning Coursework, Personal Work, and Professional Experience, including Gameplay Systems, Interactive Applications, and Software Architecture.",
  links: [
    { label: "Website", href: "https://davit-badalyan.github.io/" },
    { label: "GitHub: davit-badalyan", href: "https://github.com/davit-badalyan" },
    { label: "Organization: Your Digital Research", href: "https://github.com/your-digital-research" },
  ],
} as const;

// Work page: the company table (commercial work only). projectCount = projects shown on the site.
// hasUnlistedProjects: true = more projects exist that are not shown (NDA / no access).
// countLabel: the rounded, displayed count for such companies (e.g. "40+"). projectCount stays the real listed number (used for bar proportions and sums).
export const companies = [
  {
    "id": "playrix",
    "countLabel": "40+",
    "hasUnlistedProjects": true,
    "start": "2025-10",
    "end": "2026-10",
    "name": "Playrix",
    "role": "HTML5 Games & Playable Ads Developer",
    "period": "Oct 2025 – Oct 2026",
    "duration": "1 yr 1 mo",
    "projectCount": 39,
    "about": "Playable Ads for Fishdom, Township, Gardenscapes and Homescapes."
  },
  {
    "id": "armnomads-games",
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
    "countLabel": "20+",
    "hasUnlistedProjects": true,
    "start": "2020-12",
    "end": "2022-06",
    "name": "Armath AI",
    "role": "HTML5 Games & Playable Ads Developer",
    "period": "Dec 2020 – Jun 2022",
    "duration": "1 yr 7 mos",
    "projectCount": 21,
    "about": "Playable Ads and HTML5 Games for major Mobile Titles."
  }
];

// Work page: separate "Personal projects" section — no role, no period.
export const personalProjects = {
  id: "personal",
  title: "Personal Projects",
  projectCount: 10,
  about: "Personal Projects and Experiments.",
} as const;

export const totalProjects = 75;

// Shown in the open company panel for companies with hasUnlistedProjects.
export const unlistedProjectsNote = "Additional projects are not shown.";

// Home hero: the three tall cards next to the intro (≥1024px they also show mini infographics built from `companies` and `personalProjects`). Later they become the featured-project video frames.
export const heroStats = [
  { label: "Projects", value: "75+" },
  { label: "Studios", value: "4" },
  { label: "Since", value: "2020" },
] as const;

export const contactIntro = "Email is the fastest way to reach me. I usually reply within a couple of days.";
