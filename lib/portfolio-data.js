export const profile = {
  name: "Jaycee",
  headline: "M.S. CS @ UCSC | Prev. ECON Researcher @ PKU",
  introduction:
    "Pivoting from a distinguished career in economic research to Full-Stack Engineering, motivated by a passion for building applications that solve real-world problems."
};

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
  "I am pursuing an M.S. in Computer Science and Engineering at the University of California, Santa Cruz, where I focus on full-stack web development and artificial intelligence.",
  "Before moving into software engineering, I worked as a think tank research specialist at Peking University HSBC Business School. I built data pipelines and dashboards with Python, SQL, and JavaScript while translating large financial and economic datasets into evidence for policy decisions.",
  "Today, I bring that research discipline to product engineering: decomposing ambiguous problems, designing reliable systems, and building practical applications across commerce, AI agents, and data products."
];

export const journey = [
  {
    category: "Experience",
    period: "Winter 2026",
    title: "Reader · Full Stack Web Development",
    organization: "University of California, Santa Cruz",
    description:
      "Supported course delivery by proctoring lab sessions and answering student questions while contributing to research on quiz design.",
    technologies: ["Full-Stack Web", "Teaching"]
  },
  {
    category: "Experience",
    period: "2020 — 2024",
    title: "Think Tank Research Specialist",
    organization: "Peking University HSBC Business School",
    description:
      "Conducted end-to-end analysis of large financial and economic datasets, maintained automated pipelines and dashboards, and mentored 20+ researchers in Python and SQL. Named an Excellent Employee in 2023.",
    technologies: ["Python", "SQL", "JavaScript", "Data Pipelines"]
  },
  {
    category: "Education",
    period: "2025 — 2027",
    title: "M.S. Computer Science and Engineering",
    organization: "University of California, Santa Cruz",
    description:
      "Expected June 2027. GPA: 3.9/4.0. Coursework includes Full Stack Web Development and Artificial Intelligence.",
    technologies: ["Full-Stack Web", "Artificial Intelligence"]
  },
  {
    category: "Education",
    period: "2019",
    title: "M.S. Economics",
    organization: "University of Wisconsin–Madison",
    description:
      "GPA: 3.9/4.0. Coursework included Machine Learning for Economics and Econometrics.",
    technologies: ["Machine Learning", "Econometrics"]
  },
  {
    category: "Education",
    period: "2018",
    title: "Bachelor of Management: Tourism Management",
    organization: "Sun Yat-Sen University",
    description:
      "Completed quantitative coursework in Probability and Statistics and Advanced Mathematics.",
    technologies: ["Statistics", "Advanced Mathematics"]
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
    year: "2026",
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
