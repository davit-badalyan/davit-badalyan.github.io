// Personal projects — content approved in personal-projects-final.xlsx, media processed into public/media/personal/<slug>/.
// All media paths are relative to public/media/personal/<slug>/ — build URLs with withBase(`media/personal/${slug}/${src}`).

export type ProjectMediaFile = { src: string; width: number; height: number };
export type ProjectClip = { label: string; src: string; poster: string; width: number; height: number; duration: number; hasAudio: boolean };
export type ProjectMedia = {
  orientation: "portrait" | "landscape";
  cover: ProjectMediaFile;
  loop: ProjectMediaFile & { duration: number };
  /** Curated short cuts ("Highlights"). Every project has at least one. Same pixel size as `full` within a project. */
  clips: ProjectClip[];
  /** Complete versions ("Full"): original playthroughs, or all GIF examples back to back. May include audio. */
  full: ProjectClip[];
  screenshots: ProjectMediaFile[];
};
export type RelatedEntry = { label: string; company: string; short?: string; role: string; period: string; logo: string; href: string };

export type Project = {
  slug: string;
  title: string;
  context: string;
  year: string;
  detailLevel: "case-study" | "card";
  canShow: "yes" | "video-only" | "no";
  role: string;
  team: string;
  type: string;
  /** "Desktop", "iOS, Android", "Web", "Ad Networks" — rendered with platform icons (iOS, Android → Apple + Android logos). */
  platform: string;
  /** Client / publisher the work was made for (test assignments etc.); omitted when there is none. */
  client?: string;
  /** Related Resume entries (the studio or university a project belongs to), first = the one shown in
   *  card meta. `logo` = public/images/logos/<logo>.png; `href` is site-relative (withBase) and points
   *  at the Resume entry's anchor, which then lists the project back. `short` = name for tight spots. */
  related?: RelatedEntry[];
  tech: string[];
  aiTools: string[];
  /** Short one-liner: card meta, page <meta description>, sheet subtitle fallback. */
  description: string;
  /** 2–3 line overview shown under the title on case study pages and in the demo sheet. */
  overview: string;
  links: { github?: string; appStore?: string; googlePlay?: string; liveDemo?: string; youtube?: string };
  /** "Inspired by" credits, rendered as link buttons. */
  credits?: { label: string; href: string }[];
  /** Kept for later; NOT rendered since Phase 3.4. */
  caseStudy?: { intro: string; highlights: string[]; challenge: string };
  media: ProjectMedia;
};

export const personalProjectsList: Project[] = [
  {
    "slug": "shaders-in-computer-graphics",
    "title": "Shaders In Computer Graphics",
    "context": "Master's Thesis",
    "year": "2024–2026",
    "detailLevel": "case-study",
    "canShow": "yes",
    "role": "Solo Developer",
    "team": "Solo",
    "type": "Graphics / Shaders",
    "platform": "Desktop",
    "related": [
      {
        "label": "Refined during",
        "company": "Triada Studio",
        "role": "Computer Graphics Apprentice",
        "period": "Mar 2026 – Apr 2026",
        "logo": "triada-studio",
        "href": "resume/#triada-studio"
      },
      {
        "label": "Master's Thesis at",
        "company": "National Polytechnic University of Armenia",
        "short": "NPUA",
        "role": "Master's Degree, Information Technology",
        "period": "Sep 2024 – Jun 2026",
        "logo": "npua",
        "href": "resume/#npua-masters"
      }
    ],
    "tech": [
      "C",
      "C++",
      "CMake",
      "OpenGL",
      "GLAD",
      "GLFW",
      "GLM",
      "Dear ImGui",
      "GLSL"
    ],
    "aiTools": [
      "Claude"
    ],
    "description": "A Minimal Rendering Application in C++ and OpenGL for exploring Shaders through Interactive Example Scenes.",
    "overview": "A Minimal Rendering Application built as an experimental environment where Example Scenes can be created easily, Shaders can be tested and iterated on, and Computer Graphics Techniques can be explored. Its goal is a Hands-On Learning Experience for understanding Shader Programming and core Computer Graphics Concepts. Refined during my Computer Graphics Apprenticeship at Triada Studio, with feedback from Industry Professionals.",
    "links": {
      "github": "https://github.com/your-digital-research/shaders-in-computer-graphics"
    },
    "caseStudy": {
      "intro": "A Minimal Rendering Application built as an experimental environment, where Example Scenes can be created easily, Shaders can be tested and iterated on, and Computer Graphics Techniques can be explored. Its goal is a Hands-On Learning Experience for understanding Shader Programming and core Computer Graphics Concepts. Refined during my Computer Graphics Apprenticeship at Triada Studio, with feedback from industry professionals.",
      "highlights": [
        "Minimal rendering application in C++, OpenGL and GLSL",
        "Interactive example scenes for testing and iterating on Shaders",
        "Hands-on learning of Shader Programming and Computer Graphics Concepts"
      ],
      "challenge": "Researching Computer Graphics Concepts and Shaders in depth, then turning that research into an Educational Interactive Application that shows how Shaders work and lets users interact with them."
    },
    "media": {
      "orientation": "landscape",
      "cover": {
        "src": "cover.jpg",
        "width": 2532,
        "height": 1410
      },
      "loop": {
        "src": "loop.mp4",
        "width": 1280,
        "height": 712,
        "duration": 10.0
      },
      "clips": [
        {
          "label": "Default Shading",
          "src": "clips/01.mp4",
          "poster": "clips/01.jpg",
          "width": 2532,
          "height": 1410,
          "duration": 19.0,
          "hasAudio": false
        },
        {
          "label": "Color Themes",
          "src": "clips/02.mp4",
          "poster": "clips/02.jpg",
          "width": 2532,
          "height": 1410,
          "duration": 40.0,
          "hasAudio": false
        },
        {
          "label": "Wireframe Mode",
          "src": "clips/03.mp4",
          "poster": "clips/03.jpg",
          "width": 2532,
          "height": 1410,
          "duration": 13.5,
          "hasAudio": false
        }
      ],
      "full": [
        {
          "label": "Cube Showcase",
          "src": "full/01.mp4",
          "poster": "full/01.jpg",
          "width": 2532,
          "height": 1410,
          "duration": 73.5,
          "hasAudio": false
        }
      ],
      "screenshots": [
        {
          "src": "screenshots/01.jpg",
          "width": 2532,
          "height": 1412
        },
        {
          "src": "screenshots/02.jpg",
          "width": 2532,
          "height": 1412
        },
        {
          "src": "screenshots/03.jpg",
          "width": 2532,
          "height": 1412
        },
        {
          "src": "screenshots/04.jpg",
          "width": 2532,
          "height": 1412
        },
        {
          "src": "screenshots/05.jpg",
          "width": 2532,
          "height": 1412
        },
        {
          "src": "screenshots/06.jpg",
          "width": 2532,
          "height": 1410
        },
        {
          "src": "screenshots/07.jpg",
          "width": 2532,
          "height": 1410
        },
        {
          "src": "screenshots/08.jpg",
          "width": 2532,
          "height": 1410
        }
      ]
    }
  },
  {
    "slug": "mathematics-in-game-development",
    "title": "Mathematics In Game Development",
    "context": "Bachelor's Diploma",
    "year": "2023–2024",
    "detailLevel": "case-study",
    "canShow": "yes",
    "role": "Solo Developer",
    "team": "Solo",
    "type": "Interactive App",
    "platform": "iOS, Android",
    "related": [
      {
        "label": "Bachelor's Diploma at",
        "company": "National Polytechnic University of Armenia",
        "short": "NPUA",
        "role": "Bachelor's Degree, Information Technology",
        "period": "Sep 2020 – Jun 2024",
        "logo": "npua",
        "href": "resume/#npua-bachelors"
      }
    ],
    "tech": [
      "C#",
      "Unity"
    ],
    "aiTools": [],
    "description": "An Interactive Unity Application that explains the Mathematical Concepts behind Game Development.",
    "overview": "An Educational Project exploring the Mathematical Concepts essential for Game Development, with clear explanations, practical examples of how each concept is used in games, and Interactive Demos for each one.",
    "links": {
      "github": "https://github.com/your-digital-research/unity-mathematics-in-game-development"
    },
    "caseStudy": {
      "intro": "An educational project exploring the Mathematical Concepts essential for Game Development, with clear explanations and practical examples of how each concept is used to create games, plus the ability to interact with them.",
      "highlights": [
        "Interactive demos of core Mathematical Concepts",
        "Clear explanations paired with practical game examples",
        "Built in Unity with C#"
      ],
      "challenge": "Researching the math behind Game Development and presenting it visually, so users can interact with each concept and see how it works."
    },
    "media": {
      "orientation": "portrait",
      "cover": {
        "src": "cover.jpg",
        "width": 888,
        "height": 1920
      },
      "loop": {
        "src": "loop.mp4",
        "width": 720,
        "height": 1556,
        "duration": 10.0
      },
      "clips": [
        {
          "label": "Examples Menu",
          "src": "clips/01.mp4",
          "poster": "clips/01.jpg",
          "width": 888,
          "height": 1920,
          "duration": 4.8,
          "hasAudio": true
        },
        {
          "label": "Dot Product: Visualization",
          "src": "clips/02.mp4",
          "poster": "clips/02.jpg",
          "width": 888,
          "height": 1920,
          "duration": 45.0,
          "hasAudio": true
        },
        {
          "label": "Dot Product: Usage",
          "src": "clips/03.mp4",
          "poster": "clips/03.jpg",
          "width": 888,
          "height": 1920,
          "duration": 60.0,
          "hasAudio": true
        },
        {
          "label": "Cross Product: Visualization",
          "src": "clips/04.mp4",
          "poster": "clips/04.jpg",
          "width": 888,
          "height": 1920,
          "duration": 50.0,
          "hasAudio": true
        },
        {
          "label": "Cross Product: Usage",
          "src": "clips/05.mp4",
          "poster": "clips/05.jpg",
          "width": 888,
          "height": 1920,
          "duration": 60.0,
          "hasAudio": true
        }
      ],
      "full": [
        {
          "label": "Dot Product: Visualization",
          "src": "full/01.mp4",
          "poster": "full/01.jpg",
          "width": 888,
          "height": 1920,
          "duration": 66.5,
          "hasAudio": true
        },
        {
          "label": "Dot Product: Usage",
          "src": "full/02.mp4",
          "poster": "full/02.jpg",
          "width": 888,
          "height": 1920,
          "duration": 97.8,
          "hasAudio": true
        },
        {
          "label": "Cross Product: Visualization",
          "src": "full/03.mp4",
          "poster": "full/03.jpg",
          "width": 888,
          "height": 1920,
          "duration": 62.6,
          "hasAudio": true
        },
        {
          "label": "Cross Product: Usage",
          "src": "full/04.mp4",
          "poster": "full/04.jpg",
          "width": 888,
          "height": 1920,
          "duration": 92.1,
          "hasAudio": true
        }
      ],
      "screenshots": [
        {
          "src": "screenshots/01.jpg",
          "width": 888,
          "height": 1920
        },
        {
          "src": "screenshots/02.jpg",
          "width": 888,
          "height": 1920
        },
        {
          "src": "screenshots/03.jpg",
          "width": 888,
          "height": 1920
        },
        {
          "src": "screenshots/04.jpg",
          "width": 888,
          "height": 1920
        },
        {
          "src": "screenshots/05.jpg",
          "width": 888,
          "height": 1920
        },
        {
          "src": "screenshots/06.jpg",
          "width": 888,
          "height": 1920
        },
        {
          "src": "screenshots/07.jpg",
          "width": 888,
          "height": 1920
        },
        {
          "src": "screenshots/08.jpg",
          "width": 480,
          "height": 853
        }
      ]
    }
  },
  {
    "slug": "you-know-associations-playable-ad",
    "title": "You Know? Associations Playable Ad",
    "context": "Test Assignment",
    "year": "2026",
    "detailLevel": "case-study",
    "canShow": "video-only",
    "role": "Solo Developer",
    "team": "Solo",
    "type": "Playable Ad",
    "platform": "Ad Networks",
    "client": "Tripledot",
    "tech": [
      "JavaScript",
      "TypeScript",
      "PixiJS",
      "Webpack"
    ],
    "aiTools": [
      "Claude"
    ],
    "description": "A Playable Ad for Tripledot's You Know? Associations, designed and built in 2 days with PixiJS and TypeScript.",
    "overview": "A test assignment for Tripledot: designing and building a Playable Ad for You Know? Associations within 2 days, using the provided assets and meeting the given requirements. Built with PixiJS and TypeScript, bundled with Webpack.",
    "links": {
      "appStore": "https://apps.apple.com/am/app/you-know-associations/id6756664092",
      "googlePlay": "https://play.google.com/store/apps/details?id=com.tripledot.cardassociation"
    },
    "caseStudy": {
      "intro": "A case study test assignment for Tripledot: designing and creating a Playable Ad within 2 days that meets the given requirements, using the provided assets.",
      "highlights": [
        "Designed and built within 2 days",
        "PixiJS and TypeScript, bundled with Webpack",
        "Met the given requirements using the provided assets"
      ],
      "challenge": "Designing and implementing a polished, working Playable Ad from provided assets within 2 days, meeting the requirements and using every tool that sped up development."
    },
    "media": {
      "orientation": "portrait",
      "cover": {
        "src": "cover.jpg",
        "width": 1206,
        "height": 2256
      },
      "loop": {
        "src": "loop.mp4",
        "width": 720,
        "height": 1346,
        "duration": 10.0
      },
      "clips": [
        {
          "label": "Opening Rounds",
          "src": "clips/01.mp4",
          "poster": "clips/01.jpg",
          "width": 1206,
          "height": 2256,
          "duration": 27.0,
          "hasAudio": true
        },
        {
          "label": "Mid Game",
          "src": "clips/02.mp4",
          "poster": "clips/02.jpg",
          "width": 1206,
          "height": 2256,
          "duration": 28.0,
          "hasAudio": true
        },
        {
          "label": "Ending & End Card",
          "src": "clips/03.mp4",
          "poster": "clips/03.jpg",
          "width": 1206,
          "height": 2256,
          "duration": 12.2,
          "hasAudio": true
        }
      ],
      "full": [
        {
          "label": "Gameplay",
          "src": "full/01.mp4",
          "poster": "full/01.jpg",
          "width": 1206,
          "height": 2256,
          "duration": 68.3,
          "hasAudio": true
        }
      ],
      "screenshots": [
        {
          "src": "screenshots/01.jpg",
          "width": 1206,
          "height": 2256
        },
        {
          "src": "screenshots/02.jpg",
          "width": 1206,
          "height": 2256
        },
        {
          "src": "screenshots/03.jpg",
          "width": 1206,
          "height": 2256
        },
        {
          "src": "screenshots/04.jpg",
          "width": 1206,
          "height": 2256
        },
        {
          "src": "screenshots/05.jpg",
          "width": 1206,
          "height": 2256
        },
        {
          "src": "screenshots/06.jpg",
          "width": 1206,
          "height": 2256
        }
      ]
    }
  },
  {
    "slug": "draw-io-core-units",
    "title": "Draw.io Core Units",
    "context": "Test Assignment",
    "year": "2026",
    "detailLevel": "case-study",
    "canShow": "video-only",
    "role": "Solo Developer",
    "team": "Solo",
    "type": "Mobile Game",
    "platform": "iOS, Android",
    "client": "Voodoo",
    "tech": [
      "C#",
      "Unity"
    ],
    "aiTools": [
      "Claude"
    ],
    "description": "3 new features added to Voodoo's published Draw.io game within 7 days, without breaking the existing gameplay.",
    "overview": "A test assignment for Voodoo: getting to know the codebase of the already published Draw.io game and adding 3 new features within 7 days, without breaking the existing gameplay.",
    "links": {},
    "caseStudy": {
      "intro": "A case study test assignment for Voodoo: implementing 3 new features inside the already published Draw.io game without breaking the initial implementation.",
      "highlights": [
        "3 new features in an already published game",
        "Existing gameplay kept intact",
        "Delivered within 7 days"
      ],
      "challenge": "Working inside an existing, published codebase: understanding it quickly and adding 3 features within 7 days without breaking anything."
    },
    "media": {
      "orientation": "portrait",
      "cover": {
        "src": "cover.jpg",
        "width": 1080,
        "height": 1536
      },
      "loop": {
        "src": "loop.mp4",
        "width": 720,
        "height": 1024,
        "duration": 10.0
      },
      "clips": [
        {
          "label": "Skin Selection",
          "src": "clips/01.mp4",
          "poster": "clips/01.jpg",
          "width": 1080,
          "height": 1536,
          "duration": 18.0,
          "hasAudio": true
        },
        {
          "label": "Gameplay",
          "src": "clips/02.mp4",
          "poster": "clips/02.jpg",
          "width": 1080,
          "height": 1536,
          "duration": 60.0,
          "hasAudio": true
        },
        {
          "label": "Final Round & Results",
          "src": "clips/03.mp4",
          "poster": "clips/03.jpg",
          "width": 1080,
          "height": 1536,
          "duration": 30.0,
          "hasAudio": true
        },
        {
          "label": "Feature Toggles",
          "src": "clips/04.mp4",
          "poster": "clips/04.jpg",
          "width": 1080,
          "height": 1536,
          "duration": 24.0,
          "hasAudio": true
        }
      ],
      "full": [
        {
          "label": "Walkthrough",
          "src": "full/01.mp4",
          "poster": "full/01.jpg",
          "width": 1080,
          "height": 1536,
          "duration": 180.5,
          "hasAudio": true
        }
      ],
      "screenshots": [
        {
          "src": "screenshots/01.jpg",
          "width": 1080,
          "height": 1536
        },
        {
          "src": "screenshots/02.jpg",
          "width": 1080,
          "height": 1536
        },
        {
          "src": "screenshots/03.jpg",
          "width": 1080,
          "height": 1536
        },
        {
          "src": "screenshots/04.jpg",
          "width": 1080,
          "height": 1536
        },
        {
          "src": "screenshots/05.jpg",
          "width": 1080,
          "height": 1536
        },
        {
          "src": "screenshots/06.jpg",
          "width": 1080,
          "height": 1536
        }
      ]
    }
  },
  {
    "slug": "mob-control-playable-ad",
    "title": "Mob Control Playable Ad",
    "context": "Test Assignment",
    "year": "2026",
    "detailLevel": "case-study",
    "canShow": "video-only",
    "role": "Solo Developer",
    "team": "Solo",
    "type": "Playable Ad",
    "platform": "Ad Networks",
    "client": "Voodoo",
    "tech": [
      "C#",
      "Unity",
      "Luna",
      "Unity Playworks"
    ],
    "aiTools": [
      "Claude"
    ],
    "description": "A Playable Ad for Voodoo's Mob Control, built in Unity with Luna and Unity Playworks within 7 days.",
    "overview": "A test assignment for Voodoo: a complete Playable Ad for the live game Mob Control, built in Unity with Luna and Unity Playworks within 7 days.",
    "links": {
      "appStore": "https://apps.apple.com/am/app/mob-control/id1562817072",
      "googlePlay": "https://play.google.com/store/apps/details?id=com.vincentb.MobControl"
    },
    "caseStudy": {
      "intro": "A case study test assignment for Voodoo: a complete Playable Ad for Mob Control, created in Unity with Luna and Unity Playworks.",
      "highlights": [
        "Playable Ad for a live, published game",
        "Built in Unity with Luna and Unity Playworks",
        "Delivered within 7 days"
      ],
      "challenge": "Creating a complete Playable Ad for a live game within a 7-day deadline, using Unity, Luna and Unity Playworks."
    },
    "media": {
      "orientation": "portrait",
      "cover": {
        "src": "cover.jpg",
        "width": 1204,
        "height": 2044
      },
      "loop": {
        "src": "loop.mp4",
        "width": 720,
        "height": 1222,
        "duration": 10.0
      },
      "clips": [
        {
          "label": "Tutorial",
          "src": "clips/01.mp4",
          "poster": "clips/01.jpg",
          "width": 1204,
          "height": 2044,
          "duration": 9.0,
          "hasAudio": true
        },
        {
          "label": "Core Gameplay",
          "src": "clips/02.mp4",
          "poster": "clips/02.jpg",
          "width": 1204,
          "height": 2044,
          "duration": 20.0,
          "hasAudio": true
        },
        {
          "label": "Win Screen",
          "src": "clips/03.mp4",
          "poster": "clips/03.jpg",
          "width": 1204,
          "height": 2044,
          "duration": 8.5,
          "hasAudio": true
        },
        {
          "label": "Loss Screen",
          "src": "clips/04.mp4",
          "poster": "clips/04.jpg",
          "width": 1204,
          "height": 2044,
          "duration": 8.6,
          "hasAudio": true
        }
      ],
      "full": [
        {
          "label": "Win",
          "src": "full/01.mp4",
          "poster": "full/01.jpg",
          "width": 1204,
          "height": 2044,
          "duration": 44.5,
          "hasAudio": true
        },
        {
          "label": "Win (Misclick)",
          "src": "full/02.mp4",
          "poster": "full/02.jpg",
          "width": 1204,
          "height": 2044,
          "duration": 54.6,
          "hasAudio": true
        },
        {
          "label": "Loss",
          "src": "full/03.mp4",
          "poster": "full/03.jpg",
          "width": 1204,
          "height": 2044,
          "duration": 44.6,
          "hasAudio": true
        }
      ],
      "screenshots": [
        {
          "src": "screenshots/01.jpg",
          "width": 1206,
          "height": 2044
        },
        {
          "src": "screenshots/02.jpg",
          "width": 1206,
          "height": 2044
        },
        {
          "src": "screenshots/03.jpg",
          "width": 1206,
          "height": 2044
        },
        {
          "src": "screenshots/04.jpg",
          "width": 1206,
          "height": 2044
        },
        {
          "src": "screenshots/05.jpg",
          "width": 1206,
          "height": 2046
        },
        {
          "src": "screenshots/06.jpg",
          "width": 1206,
          "height": 2046
        }
      ]
    }
  },
  {
    "slug": "random-skin-selector",
    "title": "Random Skin Selector",
    "context": "Test Assignment",
    "year": "2023",
    "detailLevel": "case-study",
    "canShow": "yes",
    "role": "Solo Developer",
    "team": "Solo",
    "type": "Tool / System",
    "platform": "Desktop",
    "client": "ArmNomads Games",
    "related": [
      {
        "label": "Test assignment for",
        "company": "ArmNomads Games",
        "role": "Mobile Game Developer",
        "period": "Jul 2023 – Sep 2025",
        "logo": "armnomads-games",
        "href": "resume/#armnomads-games"
      }
    ],
    "tech": [
      "C#",
      "Unity"
    ],
    "aiTools": [],
    "description": "A Random Skin Selector for Unity built with the MVC Architecture, showing a clean, modular approach to game features.",
    "overview": "A test assignment for ArmNomads Games: a Unity project implementing a straightforward Random Skin Selector with the MVC Architecture, showing a clean and modular approach to skin selection in Unity Game Development.",
    "links": {
      "github": "https://github.com/your-digital-research/unity-random-skin-selector"
    },
    "caseStudy": {
      "intro": "A Unity project implementing a straightforward random skin selector using the MVC Architecture. The purpose is to showcase a clean and modular approach to skin selection within Unity Game Development.",
      "highlights": [
        "MVC Architecture with separated Model, View and Controller",
        "Clean, modular structure that is easy to extend",
        "Built in Unity with C#"
      ],
      "challenge": "Implementing random skin selection logic with MVC while keeping the code clean and modular, so the feature stays easy to extend."
    },
    "media": {
      "orientation": "landscape",
      "cover": {
        "src": "cover.jpg",
        "width": 800,
        "height": 440
      },
      "loop": {
        "src": "loop.mp4",
        "width": 800,
        "height": 440,
        "duration": 10.0
      },
      "clips": [
        {
          "label": "Rolling Skins",
          "src": "clips/01.mp4",
          "poster": "clips/01.jpg",
          "width": 800,
          "height": 440,
          "duration": 9.0,
          "hasAudio": false
        },
        {
          "label": "All Unlocked",
          "src": "clips/02.mp4",
          "poster": "clips/02.jpg",
          "width": 800,
          "height": 440,
          "duration": 8.2,
          "hasAudio": false
        }
      ],
      "full": [
        {
          "label": "Preview",
          "src": "full/01.mp4",
          "poster": "full/01.jpg",
          "width": 800,
          "height": 440,
          "duration": 17.2,
          "hasAudio": false
        }
      ],
      "screenshots": [
        {
          "src": "screenshots/01.jpg",
          "width": 800,
          "height": 440
        },
        {
          "src": "screenshots/02.jpg",
          "width": 800,
          "height": 440
        },
        {
          "src": "screenshots/03.jpg",
          "width": 800,
          "height": 440
        },
        {
          "src": "screenshots/04.jpg",
          "width": 800,
          "height": 440
        }
      ]
    }
  },
  {
    "slug": "unity-shaders",
    "title": "Unity Shaders",
    "context": "Personal / Hobby",
    "year": "2023–2025",
    "detailLevel": "card",
    "canShow": "yes",
    "role": "Solo Developer",
    "team": "Solo",
    "type": "Graphics / Shaders",
    "platform": "Desktop",
    "tech": [
      "C#",
      "Unity",
      "ShaderLab",
      "HLSL",
      "GLSL"
    ],
    "aiTools": [],
    "description": "A collection of Shader examples in Unity for creating, testing, and exploring Shaders.",
    "overview": "A collection of Shader examples in Unity, built as an environment for creating, testing, and exploring Shaders. Inspired by Freya Holmér and Jettelly's Unity Shaders Bible.",
    "links": {
      "github": "https://github.com/your-digital-research/unity-shaders"
    },
    "credits": [
      {
        "label": "Freya Holmér",
        "href": "https://www.youtube.com/c/acegikmo"
      },
      {
        "label": "Jettelly",
        "href": "https://www.jettelly.com/"
      }
    ],
    "media": {
      "orientation": "landscape",
      "cover": {
        "src": "cover.jpg",
        "width": 800,
        "height": 440
      },
      "loop": {
        "src": "loop.mp4",
        "width": 800,
        "height": 440,
        "duration": 10.0
      },
      "clips": [
        {
          "label": "Example 1",
          "src": "clips/01.mp4",
          "poster": "clips/01.jpg",
          "width": 800,
          "height": 440,
          "duration": 9.1,
          "hasAudio": false
        },
        {
          "label": "Example 2",
          "src": "clips/02.mp4",
          "poster": "clips/02.jpg",
          "width": 800,
          "height": 440,
          "duration": 18.3,
          "hasAudio": false
        },
        {
          "label": "Example 3",
          "src": "clips/03.mp4",
          "poster": "clips/03.jpg",
          "width": 800,
          "height": 440,
          "duration": 5.0,
          "hasAudio": false
        },
        {
          "label": "Example 4",
          "src": "clips/04.mp4",
          "poster": "clips/04.jpg",
          "width": 800,
          "height": 440,
          "duration": 19.6,
          "hasAudio": false
        },
        {
          "label": "Example 5",
          "src": "clips/05.mp4",
          "poster": "clips/05.jpg",
          "width": 800,
          "height": 440,
          "duration": 19.8,
          "hasAudio": false
        }
      ],
      "full": [
        {
          "label": "All Examples",
          "src": "full/01.mp4",
          "poster": "full/01.jpg",
          "width": 800,
          "height": 440,
          "duration": 71.8,
          "hasAudio": false
        }
      ],
      "screenshots": [
        {
          "src": "screenshots/01.jpg",
          "width": 800,
          "height": 440
        },
        {
          "src": "screenshots/02.jpg",
          "width": 800,
          "height": 440
        },
        {
          "src": "screenshots/03.jpg",
          "width": 800,
          "height": 440
        },
        {
          "src": "screenshots/04.jpg",
          "width": 800,
          "height": 440
        },
        {
          "src": "screenshots/05.jpg",
          "width": 800,
          "height": 440
        },
        {
          "src": "screenshots/06.jpg",
          "width": 800,
          "height": 440
        }
      ]
    }
  },
  {
    "slug": "unity-math-for-game-devs",
    "title": "Unity Math For Game Devs",
    "context": "Personal / Hobby",
    "year": "2022–2023",
    "detailLevel": "card",
    "canShow": "yes",
    "role": "Solo Developer",
    "team": "Solo",
    "type": "Interactive App",
    "platform": "Desktop",
    "tech": [
      "C#",
      "Unity"
    ],
    "aiTools": [],
    "description": "A Unity environment for creating and testing Mathematical Concepts used in Game Development.",
    "overview": "A Unity environment for creating and testing Mathematical Concepts used in Game Development, through scripts and objects. Inspired by Freya Holmér and Jettelly.",
    "links": {
      "github": "https://github.com/your-digital-research/unity-math-for-game-devs"
    },
    "credits": [
      {
        "label": "Freya Holmér",
        "href": "https://www.youtube.com/c/acegikmo"
      },
      {
        "label": "Jettelly",
        "href": "https://www.jettelly.com/"
      }
    ],
    "media": {
      "orientation": "landscape",
      "cover": {
        "src": "cover.jpg",
        "width": 800,
        "height": 440
      },
      "loop": {
        "src": "loop.mp4",
        "width": 800,
        "height": 440,
        "duration": 10.0
      },
      "clips": [
        {
          "label": "Example 1",
          "src": "clips/01.mp4",
          "poster": "clips/01.jpg",
          "width": 800,
          "height": 440,
          "duration": 12.3,
          "hasAudio": false
        },
        {
          "label": "Example 2",
          "src": "clips/02.mp4",
          "poster": "clips/02.jpg",
          "width": 800,
          "height": 440,
          "duration": 27.6,
          "hasAudio": false
        },
        {
          "label": "Example 3",
          "src": "clips/03.mp4",
          "poster": "clips/03.jpg",
          "width": 800,
          "height": 440,
          "duration": 17.0,
          "hasAudio": false
        },
        {
          "label": "Example 4",
          "src": "clips/04.mp4",
          "poster": "clips/04.jpg",
          "width": 800,
          "height": 440,
          "duration": 20.2,
          "hasAudio": false
        }
      ],
      "full": [
        {
          "label": "All Examples",
          "src": "full/01.mp4",
          "poster": "full/01.jpg",
          "width": 800,
          "height": 440,
          "duration": 77.1,
          "hasAudio": false
        }
      ],
      "screenshots": [
        {
          "src": "screenshots/01.jpg",
          "width": 800,
          "height": 440
        },
        {
          "src": "screenshots/02.jpg",
          "width": 800,
          "height": 440
        },
        {
          "src": "screenshots/03.jpg",
          "width": 800,
          "height": 440
        },
        {
          "src": "screenshots/04.jpg",
          "width": 800,
          "height": 440
        },
        {
          "src": "screenshots/05.jpg",
          "width": 800,
          "height": 440
        }
      ]
    }
  },
  {
    "slug": "coding-math",
    "title": "Coding Math",
    "context": "Personal / Hobby",
    "year": "2021–2022",
    "detailLevel": "card",
    "canShow": "yes",
    "role": "Solo Developer",
    "team": "Solo",
    "type": "Interactive App",
    "platform": "Web",
    "tech": [
      "JavaScript",
      "Phaser",
      "Webpack"
    ],
    "aiTools": [],
    "description": "Math and Physics experiments for Game Development, built with JavaScript and Phaser.",
    "overview": "Examples and experiments with Math and Physics Concepts for Game Development, built with JavaScript and Phaser and bundled with Webpack. Inspired by the Coding Math YouTube channel.",
    "links": {
      "github": "https://github.com/your-digital-research/coding-math"
    },
    "credits": [
      {
        "label": "Coding Math",
        "href": "https://www.youtube.com/@codingmath"
      }
    ],
    "media": {
      "orientation": "landscape",
      "cover": {
        "src": "cover.jpg",
        "width": 800,
        "height": 386
      },
      "loop": {
        "src": "loop.mp4",
        "width": 800,
        "height": 386,
        "duration": 10.0
      },
      "clips": [
        {
          "label": "Experiment 1",
          "src": "clips/01.mp4",
          "poster": "clips/01.jpg",
          "width": 800,
          "height": 386,
          "duration": 10.0,
          "hasAudio": false
        },
        {
          "label": "Experiment 2",
          "src": "clips/02.mp4",
          "poster": "clips/02.jpg",
          "width": 800,
          "height": 386,
          "duration": 15.0,
          "hasAudio": false
        },
        {
          "label": "Experiment 3",
          "src": "clips/03.mp4",
          "poster": "clips/03.jpg",
          "width": 800,
          "height": 386,
          "duration": 15.0,
          "hasAudio": false
        },
        {
          "label": "Experiment 4",
          "src": "clips/04.mp4",
          "poster": "clips/04.jpg",
          "width": 800,
          "height": 386,
          "duration": 15.0,
          "hasAudio": false
        },
        {
          "label": "Experiment 5",
          "src": "clips/05.mp4",
          "poster": "clips/05.jpg",
          "width": 800,
          "height": 386,
          "duration": 19.5,
          "hasAudio": false
        },
        {
          "label": "Experiment 6",
          "src": "clips/06.mp4",
          "poster": "clips/06.jpg",
          "width": 800,
          "height": 386,
          "duration": 14.2,
          "hasAudio": false
        },
        {
          "label": "Experiment 7",
          "src": "clips/07.mp4",
          "poster": "clips/07.jpg",
          "width": 800,
          "height": 386,
          "duration": 12.2,
          "hasAudio": false
        }
      ],
      "full": [
        {
          "label": "All Experiments",
          "src": "full/01.mp4",
          "poster": "full/01.jpg",
          "width": 800,
          "height": 386,
          "duration": 100.9,
          "hasAudio": false
        }
      ],
      "screenshots": [
        {
          "src": "screenshots/01.jpg",
          "width": 800,
          "height": 386
        },
        {
          "src": "screenshots/02.jpg",
          "width": 800,
          "height": 386
        },
        {
          "src": "screenshots/03.jpg",
          "width": 800,
          "height": 386
        },
        {
          "src": "screenshots/04.jpg",
          "width": 800,
          "height": 386
        },
        {
          "src": "screenshots/05.jpg",
          "width": 800,
          "height": 386
        },
        {
          "src": "screenshots/06.jpg",
          "width": 800,
          "height": 386
        }
      ]
    }
  },
  {
    "slug": "global-game-jam-2023",
    "title": "Branching Out",
    "context": "Game Jam",
    "year": "2023",
    "detailLevel": "card",
    "canShow": "video-only",
    "role": "Game Developer",
    "team": "Small Team",
    "type": "Mobile Game",
    "platform": "iOS, Android",
    "related": [
      {
        "label": "Made during",
        "company": "Cassette LLC",
        "role": "Mobile Game Developer",
        "period": "Sep 2022 – May 2023",
        "logo": "cassette-llc",
        "href": "resume/#cassette-llc"
      }
    ],
    "tech": [
      "C#",
      "Unity"
    ],
    "aiTools": [],
    "description": "A Global Game Jam 2023 game, made in 48 hours with the Cassette team.",
    "overview": "A game made in 48 hours with the Cassette team at Global Game Jam 2023, around the theme \"Roots\".",
    "links": {},
    "media": {
      "orientation": "landscape",
      "cover": {
        "src": "cover.jpg",
        "width": 1280,
        "height": 720
      },
      "loop": {
        "src": "loop.mp4",
        "width": 1280,
        "height": 720,
        "duration": 10.0
      },
      "clips": [
        {
          "label": "Desert & Roots",
          "src": "clips/01.mp4",
          "poster": "clips/01.jpg",
          "width": 1280,
          "height": 720,
          "duration": 34.0,
          "hasAudio": true
        },
        {
          "label": "Oasis",
          "src": "clips/02.mp4",
          "poster": "clips/02.jpg",
          "width": 1280,
          "height": 720,
          "duration": 14.0,
          "hasAudio": true
        },
        {
          "label": "Revival",
          "src": "clips/03.mp4",
          "poster": "clips/03.jpg",
          "width": 1280,
          "height": 720,
          "duration": 17.6,
          "hasAudio": true
        }
      ],
      "full": [
        {
          "label": "Showcase",
          "src": "full/01.mp4",
          "poster": "full/01.jpg",
          "width": 1280,
          "height": 720,
          "duration": 65.6,
          "hasAudio": true
        }
      ],
      "screenshots": [
        {
          "src": "screenshots/01.jpg",
          "width": 1280,
          "height": 720
        },
        {
          "src": "screenshots/02.jpg",
          "width": 1280,
          "height": 720
        },
        {
          "src": "screenshots/03.jpg",
          "width": 1280,
          "height": 720
        },
        {
          "src": "screenshots/04.jpg",
          "width": 1280,
          "height": 720
        },
        {
          "src": "screenshots/05.jpg",
          "width": 1280,
          "height": 720
        },
        {
          "src": "screenshots/06.jpg",
          "width": 1280,
          "height": 720
        }
      ]
    }
  },
  {
    "slug": "unity-scene-level-design",
    "title": "Unity Scene / Level Design",
    "context": "Personal / Hobby",
    "year": "2018",
    "detailLevel": "card",
    "canShow": "video-only",
    "role": "Solo Developer",
    "team": "Solo",
    "type": "Level Design",
    "platform": "Desktop",
    "tech": [
      "C#",
      "Unity"
    ],
    "aiTools": [],
    "description": "An early Unity project: a test scene for practicing Level Design and learning Unity fundamentals.",
    "overview": "An early Unity project: a test scene for practicing Level Design and learning Unity fundamentals.",
    "links": {},
    "media": {
      "orientation": "landscape",
      "cover": {
        "src": "cover.jpg",
        "width": 1920,
        "height": 1080
      },
      "loop": {
        "src": "loop.mp4",
        "width": 1280,
        "height": 720,
        "duration": 10.0
      },
      "clips": [
        {
          "label": "Scene Overview",
          "src": "clips/01.mp4",
          "poster": "clips/01.jpg",
          "width": 1920,
          "height": 1080,
          "duration": 20.0,
          "hasAudio": true
        }
      ],
      "full": [
        {
          "label": "Walkthrough",
          "src": "full/01.mp4",
          "poster": "full/01.jpg",
          "width": 1920,
          "height": 1080,
          "duration": 40.1,
          "hasAudio": true
        }
      ],
      "screenshots": [
        {
          "src": "screenshots/01.jpg",
          "width": 1920,
          "height": 1080
        }
      ]
    }
  }
];
