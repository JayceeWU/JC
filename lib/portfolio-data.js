export const navigation = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" }
];

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jayceewu/",
    icon: "linkedin"
  },
  {
    label: "GitHub",
    href: "https://github.com/JayceeWU",
    icon: "github"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jayceejcc",
    icon: "instagram"
  },
  {
    label: "Bilibili",
    href: "https://space.bilibili.com/352010",
    icon: "bilibili"
  }
];

export const about = [
  "I am pursuing an M.S. in Computer Science and Engineering at the University of California Santa Cruz, with a focus on full-stack web development and artificial intelligence.",
  "Before transitioning into tech, I worked over four years as a think tank research specialist at Peking University HSBC Business School, where I built data pipelines and dashboards, translating large-scale financial and economic datasets into actionable evidence for policy decisions.",
  "My career pivot was driven by a passion for building applications that solve real-world problems. I thrive on exploring emerging technologies, launching end-to-end products, and turning ideas into impactful systems."
];

export const journey = [
  {
    category: "Education",
    period: "2025 — 2027",
    title: "M.S. Computer Science and Engineering",
    organization: "University of California, Santa Cruz",
    description:
      "Reader: Full Stack Web Development (Winter 2026 CSE186)\n· Supported research on quizzes by proctoring lab sessions and answering student questions",
    technologies: ["GPA: 3.9/4.0", "Full-Stack Web", "Artificial Intelligence", "Teaching"]
  },
  {
    category: "Full-time Job",
    period: "2020 — 2024",
    title: "Think Tank Research Specialist",
    organization: "Peking University HSBC Business School",
    description:
      "· Conducted end-to-end data analysis on large-scale financial and economic datasets for policy decisions\n· Authored 30+ reports on financial markets (loans, equities, bonds, mutual funds) and macroeconomic trends\n· Designed and maintained automated data pipelines and dashboards using Python, SQL, and JavaScript\n· Mentored 20+ researchers in Python and SQL, reducing data processing time through workflow automation",
    technologies: ["Python", "Data Pipelines", "Data Analysis", "Excellent Employee 2023"]
  },
  {
    category: "Education",
    period: "2019",
    title: "M.S. Economics",
    organization: "University of Wisconsin–Madison",
    technologies: ["GPA: 3.9/4.0", "Machine Learning", "Econometrics"]
  },
  {
    category: "Education",
    period: "2014 — 2018",
    title: "Bachelor of Management",
    organization: "Sun Yat-Sen University",
    technologies: ["Tourism Management", "Statistics", "Advanced Mathematics"]
  }
];

export const projects = [
  {
    year: "2026",
    title: "Cruz Cart",
    context: "UCSC Course Project · E-Commerce Marketplace",
    highlights: [
      "Architected 5 decoupled Node.js microservices with Docker Compose and an Nginx reverse proxy, serving buyer, seller, and administrator frontends through REST and GraphQL APIs.",
      "Implemented Google OAuth, JWE/JWT sessions, HttpOnly cookies, role-based access control, Stripe payment and refund flows, and inventory reservation to prevent overselling.",
      "Applied TDD with Vitest, Supertest, and MSW while enforcing quality through ESLint, jscpd, and CI."
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "GraphQL",
      "Docker",
      "AWS EC2",
      "CI/CD"
    ]
  },
  {
    year: "2026",
    title: "RevNest",
    context: "NVIDIA Hackathon · AI Revenue Management System",
    highlights: [
      "Built a multi-model agent pipeline using Qwen for tool calling and Nemotron for reasoning, connected through MCP tools to 6 external market APIs for dynamic pricing recommendations.",
      "Added retrieval-augmented generation for relevant pricing strategies and enforced a human-in-the-loop security boundary."
    ],
    technologies: [
      "Python",
      "LLM Agents",
      "MCP",
      "RAG",
      "pgvector",
      "Next.js",
      "PostgreSQL"
    ]
  },
  {
    year: "2025",
    title: "Moonlit",
    context: "Personal Project · Restaurant Order Platform",
    highlights: [
      "Developed a responsive ordering experience for menu browsing and item customization, backed by relational data models in Prisma and Neon.",
      "Implemented a session cart that merges on login and integrated NextAuth, PayPal, Resend, Smarty address validation, and Zod input validation."
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Zod",
      "Tailwind CSS",
      "PostgreSQL",
      "Vercel"
    ]
  },
  {
    year: "2024",
    title: "Inflation Nowcasting System",
    context: "PHBS · Forecasting and Data Mining",
    highlights: [
      "Built an automated ETL pipeline for high-frequency macroeconomic data and extracted sentiment features from JavaScript-rendered news and reports with Selenium.",
      "Trained random forest and LSTM models that improved forecast accuracy over the baseline, then exposed predictions through REST APIs and interactive dashboards."
    ],
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "Selenium",
      "Flask",
      "JavaScript"
    ]
  }
];
