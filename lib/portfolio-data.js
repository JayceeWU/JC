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
    organization: "University of California, Santa Cruz (UCSC)",
    description:
      "Full Stack Web Development Reader (Winter 2026 CSE186): Supported research on quizzes by proctoring lab sessions and answering student questions",
    technologies: ["GPA: 3.9/4.0", "Full-Stack Dev", "Artificial Intelligence", "Teaching"]
  },
  {
    category: "Full-time Job",
    period: "2020 — 2024",
    title: "Think Tank Research Specialist",
    organization: "Peking University HSBC Business School (PHBS)",
    description:
      "Conducted end-to-end data analysis on financial and economic datasets for policy decisions\nAuthored 30+ reports on financial markets and macroeconomic trends\nDesigned and maintained automated data pipelines and dashboards with Python\nMentored 20+ researchers in Python and SQL and accelerated data workflows",
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
    title: "Cruz Cart",
    href: "https://cruz-cart.com/",
    image: {
      src: "/2026cruz-cart.png",
      alt: "Cruz Cart e-commerce marketplace interface",
      width: 1356,
      height: 1213
    },
    context: "E-Commerce Marketplace · UCSC · 2026",
    highlights: [
      "Architected 5 decoupled microservices orchestrated via Docker and nginx reverse proxy",
      "Built REST and GraphQL APIs with CRUD operations across 3 independent frontends",
      "Implemented JWE/JWT session management, HttpOnly cookies, and role-based access control",
      "Integrated Google OAuth, Stripe (payment/payout/refund), Resend, and Smarty",
      "Applied TDD with Vitest, Supertest, and MSW; enforced code quality via ESLint, jscpd, and CI pipeline"
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "GraphQL",
      "Docker",
      "AWS EC2",
      "CI/CD"
    ]
  },
  {
    title: "RevNest",
    href: "https://github.com/JayceeWU/nvidia-hackathon-revnest",
    image: {
      src: "/2026revnest.png",
      alt: "RevNest AI revenue management dashboard",
      width: 1431,
      height: 794
    },
    context: "AI Revenue Management System · NVIDIA Hackathon · 2026",
    highlights: [
      "Built a multi-model agent pipeline using Qwen for tool calling and Nemotron for reasoning",
      "Connected 6 external market APIs via MCP to enable dynamic pricing recommendations",
      "Implemented RAG for pricing strategies while enforcing a human-in-the-loop security boundary"
    ],
    technologies: [
      "Python",
      "LLM Agents",
      "MCP",
      "RAG",
      "pgvector",
      "PostgreSQL"
    ]
  },
  {
    title: "Moonlit",
    href: "https://github.com/JayceeWU/Restaurant-Web-App",
    image: {
      src: "/2025moonlit.png",
      alt: "Moonlit restaurant ordering platform interface",
      width: 2400,
      height: 1792
    },
    context: "Restaurant Order Platform · Personal Project · 2025",
    highlights: [
      "Developed a fully responsive application covering menu browsing and item customization",
      "Designed relational schemas using Prisma; implemented session cart with seamless merge on login"
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "Zod",
      "Prisma",
      "Tailwind CSS",
      "Vercel",
      "Neon"
    ]
  },
  {
    title: "Inflation Nowcasting",
    href: "https://thinktank.phbs.pku.edu.cn/PHBSNowcasting/",
    image: {
      src: "/2024nowcasting.png",
      alt: "PHBS inflation nowcasting dashboard",
      width: 1761,
      height: 1398
    },
    context: "Time Series Forecasting & Data Mining · PHBS · 2024",
    highlights: [
      "Built an automated ETL pipeline ingesting high-frequency data streams for forecasting",
      "Scraped JS-rendered news/reports via Selenium and extracted sentiment features using SVM",
      "Engineered features and trained machine learning models (RFR, RNN, LSTM)",
      "Developed RESTful APIs and dashboards to visualize predictions, reducing decision latency"
    ],
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "Statsmodels",
      "Flask"
    ]
  },
  {
    title: "China Econ & Management Institution Rankings",
    href: "https://www.phbs.pku.edu.cn/PHBS50.htm",
    image: {
      src: "/2023PHBS50.png",
      alt: "PHBS50 economic and management research institution ranking",
      width: 1695,
      height: 1257
    },
    context: "Data Mining \u00b7 PHBS \u00b7 2023-2025",
    highlights: [
      "Designed a scholarly impact ranking algorithm based on publication counts in 50 core journals",
      "Engineered a PDF processing pipeline to extract structured data from full-text articles"
    ],
    technologies: [
      "Python",
      "Requests",
      "Selenium",
      "Beautiful Soup",
      "Regular Expressions",
      "MongoDB"
    ]
  },
  {
    title: "Bank Wealth Management Companies Rankings",
    href: "https://parc.phbs.pku.edu.cn/info/1031/1281.htm",
    image: {
      src: "/2022wealth-mgmt-ranking.png",
      alt: "PHBS bank wealth management company competitiveness rankings",
      width: 1280,
      height: 1690
    },
    context: "Data Mining \u00b7 PHBS \u00b7 2022-2024",
    highlights: [
      "Designed a five-dimensional evaluation framework",
      "Engineered a pipeline to automate data collection, rank calculation, and report drafting"
    ],
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "python-docx",
      "Oracle",
    ]
  },
  {
    title: "Systemic Risk in China's Stock Market",
    href: "https://mp.weixin.qq.com/s/CorXXMXcctVA8G1zwxWNYQ",
    image: {
      src: "/2021cdar.png",
      alt: "Systemic risk indices for China's stock market",
      width: 1080,
      height: 438
    },
    context: "Financial Risk Monitoring & Web Dev \u00b7 PHBS \u00b7 2021",
    highlights: [
      "Engineered a risk monitoring framework using an AR-filtered cross-sectional dependence test to quantify stock market co-movements and detect financial crises",
      "Demonstrated that the proposed risk indices improve stock market volatility forecasting accuracy",
      "Architected an automated ETL pipeline and a full-stack dashboard for daily index updates"
    ],
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Statsmodels",
      "Plotly",
      "ECharts",
      "MySQL",
      "Flask"
    ]
  },
];
