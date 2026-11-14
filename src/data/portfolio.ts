/**
 * Single source of truth for all portfolio content.
 *
 * To add a project / experience / certificate, append an object to the
 * matching array below — the UI renders everything from this file.
 *
 * Images: put files in /public/projects/ and reference them by file name
 * (e.g. "projects/my-project-1.webp"). Paths are resolved against the site
 * base URL automatically, so they work on GitHub Pages.
 */

export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Abdelrahman Balbaa",
  firstName: "Abdelrahman",
  lastName: "Balbaa",
  title: "AI & Data Engineering",
  roles: ["Data Engineering", "Machine Learning", "Analytics & BI", "Full-Stack AI Apps"],
  tagline:
    "Third-year Artificial Intelligence student at Alexandria University building data pipelines, analytics dashboards, and AI-powered products.",
  location: "Cairo, Egypt",
  email: "balba.abdelrahman@gmail.com",
  phone: "+20 111 728 0068",
  phoneHref: "tel:+201117280068",
  linkedin: "https://www.linkedin.com/in/balb3z/",
  linkedinLabel: "linkedin.com/in/balb3z",
  github: "https://github.com/balb3z",
  githubLabel: "github.com/balb3z",
  cv: asset("cv.pdf"),
  cvFileName: "Abdelrahman-Balbaa-CV.pdf",
  about: [
    "I'm a third-year student in the Artificial Intelligence Department at Alexandria University's Faculty of Computer and Data Science, focused on the space where data engineering meets machine learning.",
    "I've built ETL pipelines with Apache Spark and Databricks using a Bronze/Silver/Gold architecture, developed an AI-powered visitor analytics and heatmap system for the Grand Egyptian Museum, and shipped full-stack web apps with React, TypeScript, and Supabase.",
    "Alongside internships at Hassan Allam Holding (Legacy), SIDPEC, Telecom Egypt (WE), and CIB, I teach Python and problem-solving as a Technical Instructor with eYouth, and led a trainee team in the Digital Egypt Pioneers Initiative (DEPI) Data Engineering track.",
  ],
};

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export type SkillGroup = { title: string; icon: SkillIcon; skills: string[] };
export type SkillIcon = "code" | "chart" | "database" | "cloud" | "rocket" | "brain";

export const skillGroups: SkillGroup[] = [
  { title: "Programming Languages", icon: "code", skills: ["Python", "Java", "C++", "SQL"] },
  {
    title: "Data Engineering & Big Data",
    icon: "database",
    skills: [
      "ETL Pipelines",
      "Data Warehousing",
      "Data Lakes",
      "Data Modeling",
      "Apache Spark",
      "Apache Kafka",
      "Apache Airflow",
    ],
  },
  {
    title: "Data Analytics & Libraries",
    icon: "chart",
    skills: ["Pandas", "NumPy", "Scikit-Learn", "Power BI", "Excel"],
  },
  {
    title: "Cloud & Dev Tools",
    icon: "cloud",
    skills: ["Microsoft Azure", "Databricks", "SSIS", "Git", "GitHub", "Linux", "Jupyter Notebook"],
  },
  {
    title: "Advanced Skills",
    icon: "rocket",
    skills: ["SQL Optimization", "Data Pipelines", "CI/CD Concepts", "Docker (basics)"],
  },
  {
    title: "Concepts",
    icon: "brain",
    skills: ["Machine Learning", "Neural Networks", "Data Visualization", "Statistical Analysis"],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export type Experience = {
  company: string;
  role: string;
  type?: string; // e.g. "Internship"
  period: string;
  location: string;
  current?: boolean;
  logo?: string; // optional — falls back to a monogram
  summary: string;
  points: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    company: "Legacy – Hassan Allam Holding",
    role: "ICT Intern",
    type: "Internship",
    period: "Jul 2026",
    location: "Giza, Egypt · On-site",
    summary:
      "ICT team supporting the technology infrastructure of the Grand Egyptian Museum.",
    points: [
      "Developed an AI-powered visitor analytics and heatmap system using Aruba network data to visualize visitor distribution and crowd density.",
      "Built dashboards and data visualization tools to support operational monitoring and decision-making.",
      "Collaborated with engineers on real-world ICT and digital transformation projects for the museum.",
    ],
    skills: ["Python", "FastAPI", "Aruba API", "Data Visualization", "Dashboards"],
  },
  {
    company: "SIDPEC",
    role: "IT Intern",
    type: "Internship",
    period: "Jul 2026",
    location: "Alexandria, Egypt · On-site",
    summary: "IT department supporting enterprise infrastructure and daily technical operations.",
    points: [
      "Supported enterprise infrastructure and day-to-day technical operations within the IT department.",
      "Troubleshot hardware, software, and network-related issues.",
      "Gained hands-on experience in IT systems administration and technical support.",
    ],
    skills: ["IT Support", "Networking", "Systems Administration", "Troubleshooting"],
  },
  {
    company: "eYouth",
    role: "Technical Instructor",
    period: "2026 – Present",
    location: "Remote",
    current: true,
    summary: "Python and problem-solving instructor for the DECI program.",
    points: [
      "Deliver hands-on sessions in Python programming and problem-solving as a Technical Instructor at DECI.",
      "Design structured learning activities and assessments that strengthen students' analytical and programming skills.",
    ],
    skills: ["Python", "Problem Solving", "Teaching", "Curriculum Design"],
  },
  {
    company: "WE (Telecom Egypt)",
    role: "AI & Data Analysis Intern",
    type: "Internship",
    period: "Jul 2025",
    location: "Alexandria, Egypt · On-site",
    logo: asset("we.png"),
    summary: "Large-scale telecom data analysis, visualization, and ML prototyping.",
    points: [
      "Applied Python, Pandas, Power BI, and Excel for large-scale telecom data analysis and visualization.",
      "Developed machine learning prototypes and performed feature engineering for business insights.",
      "Collaborated with data teams to deliver actionable insights supporting decision-making.",
    ],
    skills: ["Python", "Pandas", "Power BI", "Excel", "Feature Engineering", "Machine Learning"],
  },
  {
    company: "Commercial International Bank (CIB)",
    role: "Digital Transformation & Data Literacy Intern",
    type: "Internship",
    period: "Jul 2025",
    location: "Remote",
    logo: asset("cib.png"),
    summary: "Data analytics for banking operations and business intelligence.",
    points: [
      "Analyzed the role of data analytics in optimizing banking operations and decision-making.",
      "Developed data visualization dashboards to support reporting and business intelligence.",
    ],
    skills: ["Data Analytics", "Data Visualization", "Business Intelligence"],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  summary: string; // one-liner shown on the card
  description: string; // longer text shown in the details modal
  features: string[];
  tech: string[];
  /**
   * Screenshots, first one is the card thumbnail. Leave empty to show a
   * generated placeholder cover. Add as many as you like for the gallery.
   */
  images: string[];
  github?: string; // leave undefined if not public yet
  demo?: string;
  featured?: boolean;
  accent?: number; // hue (0–360) for the generated placeholder cover
};

export const projects: Project[] = [
  {
    slug: "shoghla",
    title: "Shoghla — AI Job Intelligence Platform",
    year: "2026",
    category: "Data Engineering · AI",
    summary:
      "AI-powered platform that aggregates job opportunities from multiple recruitment websites into one live dashboard.",
    description:
      "Shoghla aggregates job postings from multiple recruitment platforms into a single searchable dashboard. Under the hood, a Databricks + Apache Spark ETL pipeline moves data through Bronze, Silver, and Gold layers before it reaches the React front end, which adds analytics and automated job recommendations.",
    features: [
      "Built ETL pipelines on Databricks and Apache Spark using a Bronze / Silver / Gold medallion architecture.",
      "Aggregates opportunities from multiple recruitment websites into one unified, filterable feed.",
      "Integrated analytics dashboards and automated job recommendations for users.",
    ],
    tech: ["Python", "Apache Spark", "Databricks", "Azure", "React", "TypeScript"],
    images: [asset("projects/shoghla-1.webp")],
    github: "https://github.com/balb3z/shoghla",
    demo: "https://shoghla.vercel.app",
    featured: true,
    accent: 168,
  },
  {
    slug: "gem-visitor-heatmap",
    title: "Grand Egyptian Museum Visitor Heatmap",
    year: "2026",
    category: "Analytics · AI",
    summary:
      "Visitor congestion heatmap built from Aruba access-point data during my internship at Hassan Allam Legacy.",
    description:
      "Developed during my ICT internship at Hassan Allam Legacy, this system turns Aruba wireless access-point data into an estimate of visitor density across the Grand Egyptian Museum, giving the operations team heatmaps and analytics dashboards for crowd monitoring.",
    features: [
      "Collected and analyzed Aruba Access Point data to estimate visitor density and network utilization.",
      "Generated visitor congestion heatmaps across museum zones.",
      "Built analytics dashboards to support operational decision-making.",
    ],
    tech: ["Python", "FastAPI", "Aruba API", "Matplotlib"],
    images: [], // add screenshots here, e.g. asset("projects/gem-heatmap-1.webp")
    // github: "TODO: add repository URL if public",
    featured: true,
    accent: 32,
  },
  {
    slug: "focusscape",
    title: "FocusScape",
    year: "2026",
    category: "Full-Stack · AI",
    summary:
      "Virtual study and coworking platform with real-time study rooms, focus sessions, and productivity tracking.",
    description:
      "FocusScape is a virtual study and coworking platform where users join real-time study rooms, run focus sessions, and track their productivity. It's built with React and TypeScript on top of Supabase for authentication, data, and real-time features.",
    features: [
      "Real-time collaborative study rooms and shared workspaces.",
      "Focus sessions with productivity tracking and analytics.",
      "User authentication and a responsive, modern UI built to scale.",
    ],
    tech: ["React", "TypeScript", "Supabase", "AI"],
    images: [asset("projects/focusscape-1.webp")],
    github: "https://github.com/balb3z/focusscape",
    demo: "https://focusscape1.vercel.app",
    featured: true,
    accent: 268,
  },
  {
    slug: "weather-prediction",
    title: "Weather Prediction from Images",
    year: "2025",
    category: "Deep Learning",
    summary: "Deep learning models that classify weather conditions from images, comparing CNN and FFNN architectures.",
    description:
      "An image classification study that predicts weather conditions from photos. I trained and compared convolutional (CNN) and fully-connected (FFNN) networks, and improved results through preprocessing, augmentation, and hyperparameter tuning.",
    features: [
      "Developed deep learning models to classify weather conditions from images.",
      "Compared CNN and FFNN architectures on image classification performance.",
      "Applied image preprocessing, augmentation, and hyperparameter tuning to improve accuracy.",
    ],
    tech: ["Python", "TensorFlow", "CNN", "Deep Learning"],
    images: [],
    // github: "TODO: add repository URL",
    featured: true,
    accent: 205,
  },
  {
    slug: "pattern-recognition",
    title: "Pattern Recognition Analysis",
    year: "2025",
    category: "Machine Learning",
    summary: "Feature extraction with PCA and LDA, evaluated through SVM classification.",
    description:
      "A comparative study of feature extraction techniques. PCA and LDA were implemented for dimensionality reduction, and SVM classifiers were trained on each representation to compare how the extraction method affects classification performance.",
    features: [
      "Implemented PCA and LDA for feature extraction and dimensionality reduction.",
      "Built and evaluated SVM models for classification tasks.",
      "Compared feature extraction techniques based on model performance.",
    ],
    tech: ["Python", "PCA", "LDA", "SVM"],
    images: [],
    // github: "TODO: add repository URL",
    featured: true,
    accent: 340,
  },
  {
    slug: "azure-synapse-retail",
    title: "Retail Sales Analytics (Azure Synapse + Power BI)",
    year: "",
    category: "Data Engineering",
    summary:
      "End-to-end analytics pipeline turning raw sales data into KPIs and an interactive Power BI dashboard.",
    description:
      "An end-to-end data analytics project: raw sales data is ingested, cleaned, and modeled in Azure Synapse through Bronze, Silver, and Gold layers, then served to an interactive Power BI dashboard.",
    features: [
      "Bronze layer for raw ingestion; Silver layer for cleaning and type standardization.",
      "Gold-layer analytics views exposing sales KPIs.",
      "Interactive Power BI dashboard on top of the modeled data.",
    ],
    tech: ["Azure Synapse", "SQL", "Power BI", "Data Modeling"],
    images: [],
    github: "https://github.com/balb3z/Microsoft_Azure_Synapse_Retail_Sale",
    accent: 190,
  },
  {
    slug: "lms-academy",
    title: "LMS Academy",
    year: "",
    category: "Full-Stack",
    summary: "Learning management system web application built with TypeScript and a PostgreSQL backend.",
    description:
      "A learning management system web application with account sign-in, built in TypeScript with a PostgreSQL (PL/pgSQL) backend.",
    features: ["Learning management system with user authentication.", "TypeScript front end with a PostgreSQL backend."],
    tech: ["TypeScript", "PostgreSQL"],
    images: [asset("projects/lms-academy-1.webp")],
    github: "https://github.com/balb3z/lms-academy",
    demo: "https://lms-academy-sigma.vercel.app",
    accent: 225,
  },
  {
    slug: "loan-approval",
    title: "Loan Approval Prediction",
    year: "",
    category: "Machine Learning",
    summary: "Classification model that predicts whether a loan application will be approved.",
    description:
      "A machine learning model that predicts loan approval status from applicant data using classification algorithms.",
    features: ["Classification model trained on applicant data.", "Data preparation and exploratory analysis with Pandas."],
    tech: ["Python", "Scikit-Learn", "Pandas"],
    images: [],
    github: "https://github.com/balb3z/Loan-Approval-Prediction",
    accent: 150,
  },
  {
    slug: "customer-segmentation",
    title: "Customer Segmentation",
    year: "",
    category: "Machine Learning",
    summary: "K-Means clustering that segments customers by income and spending score.",
    description:
      "An unsupervised learning project that clusters customers into segments based on income and spending score to support targeted marketing.",
    features: ["K-Means clustering on income and spending score.", "Segment analysis for targeted marketing."],
    tech: ["Python", "K-Means", "Scikit-Learn"],
    images: [],
    github: "https://github.com/balb3z/Customer-Segmentation",
    accent: 280,
  },
  {
    slug: "forest-cover",
    title: "Forest Cover Type Classification",
    year: "",
    category: "Machine Learning",
    summary: "Predicts forest cover type from cartographic and environmental features.",
    description:
      "A multi-class classification project that predicts forest cover type from cartographic and environmental features.",
    features: ["Multi-class classification on cartographic features."],
    tech: ["Python", "Scikit-Learn"],
    images: [],
    github: "https://github.com/balb3z/Forest-Cover-Type-Classification",
    accent: 120,
  },
  {
    slug: "student-score",
    title: "Student Score Prediction",
    year: "",
    category: "Machine Learning",
    summary: "Regression model that predicts students' exam scores from study hours.",
    description: "A regression model that predicts students' exam scores based on their study hours.",
    features: ["Regression modeling and exploratory data analysis."],
    tech: ["Python", "Regression", "EDA"],
    images: [],
    github: "https://github.com/balb3z/Student-score-prediction",
    accent: 45,
  },
];

/* ------------------------------------------------------------------ */
/* Education, certifications, activities                               */
/* ------------------------------------------------------------------ */

export const education = {
  school: "Alexandria University",
  faculty: "Faculty of Computer and Data Science",
  department: "Artificial Intelligence Department",
  status: "Third-Year Student",
  period: "Sep 2024 – May 2028 (expected)",
  location: "Alexandria, Egypt",
  logo: asset("alexu.png"),
};

export type Certification = { name: string; issuer: string; date: string; detail: string; logo?: string };

export const certifications: Certification[] = [
  {
    name: "Digital Egypt Pioneers Initiative (DEPI)",
    issuer: "Ministry of Communications and Information Technology (MCIT)",
    date: "Dec 2025",
    detail: "Data Engineering Track",
    logo: asset("depi.png"),
  },
  {
    name: "Applications of Artificial Intelligence",
    issuer: "The British University in Egypt",
    date: "Aug 2025",
    detail: "15-hour program",
  },
  { name: "Python for Data Science, AI & Development", issuer: "IBM", date: "Jul 2025", detail: "Certificate program" },
  { name: "AWS Machine Learning Foundations", issuer: "Amazon (AWS Educate)", date: "Jun 2025", detail: "Certificate program" },
  { name: "Oracle AI Foundations", issuer: "Oracle", date: "Jun 2025", detail: "Certificate program" },
  { name: "Intro to AI with AWS", issuer: "Udacity", date: "May 2025", detail: "Certificate program" },
];

export type Activity = { org: string; role: string; period: string; location?: string; points: string[]; logo?: string };

export const activities: Activity[] = [
  {
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    role: "Team Leader",
    period: "Fall 2025",
    location: "Egypt",
    logo: asset("depi.png"),
    points: [
      "Selected as a Team Leader within the Digital Egypt Pioneers Initiative.",
      "Led and coordinated a group of trainees, ensuring task completion and effective collaboration.",
      "Supported peers technically and facilitated communication between team members and mentors.",
    ],
  },
  {
    org: "Safwa FCDS",
    role: "Media Head",
    period: "Spring 2025 – Present",
    points: [
      "Lead a student media team, coordinating communication across the organization.",
      "Create structured content and manage team workflows.",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
