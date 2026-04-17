export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  client: string;
  year: string;
  tags: string[];
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageUrl: string;
}

export const getProjects = (): Project[] => {
  return [
    {
      id: "1",
      slug: "ethereal-commerce",
      title: "Ethereal Commerce",
      description: "A headless shopify experience built with Next.js and Framer Motion.",
      content: "Ethereal Commerce was a complete rebuilding of a luxury fashion brand's e-commerce platform. Utilizing Next.js 14 and Shopify Storefront API, we achieved unheard-of loaded times and interactive seamless transitions between collections.",
      client: "Ethereal Studio",
      year: "2025",
      tags: ["React", "Next.js", "Tailwind", "Shopify"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "2",
      slug: "aurora-dashboard",
      title: "Aurora Dashboard",
      description: "Financial analytics platform with real-time WebGL data visualization.",
      content: "Aurora represents the cutting edge of fintech interfaces. Managing thousands of data points via WebSockets, the interface relies on a custom Three.js renderer inside a Next.js shell for absolute performance.",
      client: "Aurora TechBank",
      year: "2026",
      tags: ["WebGL", "Three.js", "TypeScript"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "3",
      slug: "lumina-studio",
      title: "Lumina Studio",
      description: "Award-winning creative portfolio for a futuristic design agency.",
      content: "An Awwwards Site of the Month winner. Lumina Studio's digital presence hinges on complex GSAP scroll-jacking that tells their design story through immersive physics and layout manipulations.",
      client: "Lumina Creative",
      year: "2024",
      tags: ["GSAP", "Next.js", "Css Modules"],
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "4",
      slug: "quantum-app",
      title: "Quantum App",
      description: "Desktop-class productivity environment on the web.",
      content: "Quantum brings desktop-class window management and offline-first capabilities directly into the browser via WebAssembly, Rust bindings, and complex React state machines.",
      client: "Quantum Workspace",
      year: "2026",
      tags: ["WebAssembly", "React", "Rust"],
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "5",
      slug: "nova-ai",
      title: "Nova AI Interface",
      description: "Conversational interface utilizing massive language models.",
      content: "Designed and developed the frontend node architecture for a conversational agent interface relying on extremely low latency WebSockets and beautifully fluid typography components.",
      client: "Nova Systems",
      year: "2025",
      tags: ["React", "AI", "Tailwind", "Sockets"],
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "6",
      slug: "vertex-architecture",
      title: "Vertex Architecture",
      description: "Immersive architectural showcase with 3D model streaming.",
      content: "Vertex is an experiential website for an architectural firm running real-time 3D models embedded via react-three-fiber, allowing users to fly through unbuilt concepts.",
      client: "Vertex Ltd.",
      year: "2023",
      tags: ["3D", "R3F", "TypeScript"],
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "7",
      slug: "nexus-logistics",
      title: "Nexus Logistics Portal",
      description: "Real-time global freight mapping software interface.",
      content: "A heavy-data Mapbox GL implementation overlaying shipping lanes, weather patterns, and predictive analytics in a dashboard used by global tier-1 freight companies.",
      client: "Nexus Global",
      year: "2025",
      tags: ["MapboxGL", "React", "Node.js"],
      imageUrl: "https://images.unsplash.com/photo-1566371486490-560dd414c57a?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "8",
      slug: "omni-healthcare",
      title: "Omni Healthcare Telematics",
      description: "Secure, compliant portal for remote patient telematic monitoring.",
      content: "Built the entirely HIPAA-compliant frontend application for doctors to monitor wearable biometric data synced over secure GraphQL endpoints with micro-second chart updates.",
      client: "Omni Health",
      year: "2024",
      tags: ["GraphQL", "React", "D3.js"],
      imageUrl: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "9",
      slug: "chronos-watch-store",
      title: "Chronos Horology",
      description: "Digital boutique for high-end bespoke Swiss watchmakers.",
      content: "A strictly aesthetic-driven showcase utilizing massive WebGL distortion effects, subtle scrolling interactions, and typography native to high-end horology brands.",
      client: "Chronos AG",
      year: "2026",
      tags: ["WebGL", "Framer Motion", "Next.js"],
      imageUrl: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "10",
      slug: "polaris-climate-tracker",
      title: "Polaris Climate Dash",
      description: "Visualizing 100 years of global climate shift data.",
      content: "A non-profit open-source initiative. I spearheaded the data visualization components that animate historical heat maps pushing over 2 million data points perfectly smoothly on mobile.",
      client: "Polaris NGO",
      year: "2023",
      tags: ["D3.js", "Open Source", "React"],
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "11",
      slug: "aether-music",
      title: "Aether Soundways",
      description: "Experiential music player utilizing Web Audio API processing.",
      content: "A web application that generates audio-reactive algorithmic art in real time using the browser's native audio pipelines combined with canvas rendering.",
      client: "Aether Records",
      year: "2025",
      tags: ["Web Audio API", "Canvas", "Next.js"],
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "12",
      slug: "symphony-booking",
      title: "Symphony Travel",
      description: "Disrupting OTA interfaces with human-centric workflow flows.",
      content: "Redesigned the entire funnel for booking complicated multi-city luxury travels, bringing a notoriously complex UI into an intuitive, card-based conversational layout.",
      client: "Symphony Air",
      year: "2024",
      tags: ["UX/UI", "Next.js", "Framer Motion"],
      imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "13",
      slug: "kinesis-mobility",
      title: "Kinesis Fleet Ops",
      description: "Operational interface for managing autonomous delivery vehicles.",
      content: "Collaborated deeply with roboticists to design a UI that allows human operators to command and review incidents for a small fleet of autonomous rovers securely.",
      client: "Kinesis Robotics",
      year: "2026",
      tags: ["Vue", "WebRTC", "Tailwind"],
      imageUrl: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "14",
      slug: "bastion-security",
      title: "Bastion Protocol",
      description: "Landing experience for a Tier-1 cryptography security audit firm.",
      content: "Focused on communicating impregnable trust. The site relies on stark typography, ASCII art converted to GLSL shaders, and heavily constrained color palettes.",
      client: "Bastion LLC",
      year: "2025",
      tags: ["GLSL", "React", "Three.js"],
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "15",
      slug: "neo-tokyo-gallery",
      title: "Neo Tokyo Digital Gallery",
      description: "Showcasing underground digital artists across a sprawling virtual environment.",
      content: "An endless horizontal-scroll gallery that implements fake gravity physics on images as the user scrolls, combined with a bespoke grid engine.",
      client: "Independent",
      year: "2023",
      tags: ["Creative Routing", "CSS Physics", "Next.js"],
      imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1200",
    }
  ];
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return getProjects().find(project => project.slug === slug);
}

export const getBlogs = (): BlogPost[] => {
  return [
    {
      id: "1",
      slug: "bangladesh-tech-boom-2026",
      title: "The Silent Boom: Bangladesh's Thriving Tech Ecosystem in 2026",
      excerpt: "Analyzing how outsourcing hubs in Dhaka are turning into robust product companies pushing global standards.",
      content: "Full content here... Bangladesh has rapidly evolved from an outsourcing hub to a product-centric ecosystem. Startups are tackling local issues with scalable tech, utilizing AI and mobile-first infrastructure. High-speed connectivity reaching rural areas has completely revolutionized the freelance landscape...",
      date: "April 15, 2026",
      category: "Tech Trends",
      imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "2",
      slug: "nextjs-15-performance-tricks",
      title: "10 Next.js Performance Tricks You Didn't Know About",
      excerpt: "Unlock the full potential of Next.js App Router with these highly specific performance optimizations.",
      content: "Next.js brings massive performance benefits out of the box... [content block exploring partial pre-rendering, dynamic caching policies, and optimal image loading].",
      date: "April 10, 2026",
      category: "Tips & Tricks",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "3",
      slug: "framer-motion-scroll-animations",
      title: "Mastering Scroll-Driven Animations in Framer Motion",
      excerpt: "Stop using heavy GSAP setups. Here is how I build awwwards-winning scroll animations using purely standard Framer Motion hooks.",
      content: "Using useScroll and useTransform is often enough to create stunning visual hierarchies... Detailed breakdown of parallax setup.",
      date: "April 02, 2026",
      category: "Web Dev",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "4",
      slug: "ai-coding-tools-global-impact",
      title: "How AI Coding Assistants Are Leveling the Global Playing Field",
      excerpt: "Developers from emerging markets are competing head-to-head with Silicon Valley thanks to LLMs. Here is a deep dive.",
      content: "AI tools like Copilot and advanced local LLMs are democratizing knowledge... Senior-level architecture is now a baseline.",
      date: "March 28, 2026",
      category: "Global Tech",
      imageUrl: "https://images.unsplash.com/photo-1620712948343-0084236f6f6b?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "5",
      slug: "glassmorphism-css-guide",
      title: "Creating Perfect Glassmorphism with TailwindCSS",
      excerpt: "Stop getting muddy blurs. A definitive guide to pure glassmorphic borders and backdrops.",
      content: "Combine backdrop-blur-xl, subtle white borders, and hard blend modes to create the ultimate glass elements...",
      date: "March 20, 2026",
      category: "Design",
      imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "6",
      slug: "bd-fintech-revolution",
      title: "The Mobile Money Revolution in Bangladesh: Beyond bKash",
      excerpt: "A look into how micro-transactions and API integrations are shaping a cashless ecosystem in South Asia.",
      content: "Analyzing the open banking APIs and interoperability standards currently transforming the SME landscape in Bangladesh...",
      date: "March 15, 2026",
      category: "Tech Trends",
      imageUrl: "https://images.unsplash.com/photo-1556740714-a8325dd85a97?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "7",
      slug: "react-19-compiler",
      title: "React 19 Compiler Explained Simply",
      excerpt: "Forget useMemo and useCallback. React Forget (the new compiler) handles it. Here is what it means for your code.",
      content: "An intuitive explanation of the auto-memoization system under the hood...",
      date: "March 10, 2026",
      category: "Web Dev",
      imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "8",
      slug: "vs-code-settings-json",
      title: "My Ultimate VS Code Settings.json for 2026",
      excerpt: "Instantly improve your productivity with these hidden developer configurations.",
      content: "Here are the best typography settings, inline hints configurations, and extension combinations...",
      date: "March 05, 2026",
      category: "Tips & Tricks",
      imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd99b80362f?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "9",
      slug: "building-accessible-menus",
      title: "Stop Building Inaccessible Dropdown Menus",
      excerpt: "Are your interactive elements actually usable by keyboard and screen readers? Let's fix them.",
      content: "A guide implementing ARIA attributes for custom React dropdowns effectively...",
      date: "February 28, 2026",
      category: "Web Dev",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "10",
      slug: "dhaka-traffic-ai-solutions",
      title: "Can AI Solve Dhaka's Traffic? Analyzing New Startups",
      excerpt: "Deep tech startups are utilizing real-time node algorithms to optimize routing. Here's a technical breakdown.",
      content: "Graph algorithms combined with mobile crowd-sourced data are creating localized versions of Waze tailored to chaotic traffic flows...",
      date: "February 20, 2026",
      category: "Tech Trends",
      imageUrl: "https://images.unsplash.com/photo-1549880338-65dd4bd82f28?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "11",
      slug: "typescript-advanced-types",
      title: "5 Advanced TypeScript Types That Will Save You Hours",
      excerpt: "Move beyond standard interfaces and generics. Learn Conditional Types, Mapped Types, and exact matches.",
      content: "Exploring real-world use cases for highly restrictive TypeScript typings...",
      date: "February 12, 2026",
      category: "Tips & Tricks",
      imageUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "12",
      slug: "cybersecurity-global-2026",
      title: "Zero Trust Architecture is Now Mandatory: Global Landscape",
      excerpt: "With the rise of Quantum computing risks, how global enterprise is adapting their infrastructure.",
      content: "The shift away from perimeter-based security towards continuous authorization and identity protocols...",
      date: "February 05, 2026",
      category: "Global Tech",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "13",
      slug: "html-canvas-performance",
      title: "Extracting 120FPS from HTML Canvas in React",
      excerpt: "Don't block the main thread. How to optimize WebGL and Canvas operations inside your components.",
      content: "Using requestAnimationFrame elegantly outside of React's render lifecycle...",
      date: "January 29, 2026",
      category: "Web Dev",
      imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "14",
      slug: "software-architecture-diagrams",
      title: "Stop Writing Bad Architecture Diagrams",
      excerpt: "A guide to the C4 model and drawing diagrams that actually make sense to both devs and business.",
      content: "How to structure context, container, component, and code diagrams...",
      date: "January 20, 2026",
      category: "Tips & Tricks",
      imageUrl: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "15",
      slug: "future-of-remote-work-bd",
      title: "The Reality of Remote Working from Bangladesh in 2026",
      excerpt: "Navigating timezone shifts, async communication protocols, and climbing the global corporate ladder.",
      content: "Detailed strategies on maintaining visibility and establishing leadership roles without physical presence...",
      date: "January 14, 2026",
      category: "Tech Trends",
      imageUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=1000",
    }
  ];
};

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return getBlogs().find(blog => blog.slug === slug);
}
