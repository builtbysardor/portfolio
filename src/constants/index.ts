import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  { id: "about",   title: "About",    link: null },
  { id: "work",    title: "Work",     link: null },
  { id: "contact", title: "Contact",  link: null },
  {
    id: "source-code",
    title: "GitHub",
    link: "https://github.com/builtbysardor",
  },
] as const;

// Services
export const SERVICES = [
  { title: "Full-Stack Developer", icon: web },
  { title: "DevOps Engineer",      icon: mobile },
  { title: "Cybersecurity Builder",icon: backend },
  { title: "Open Source Creator",  icon: creator },
] as const;

// Technologies
export const TECHNOLOGIES = [
  { name: "HTML 5",       icon: html },
  { name: "CSS 3",        icon: css },
  { name: "JavaScript",   icon: javascript },
  { name: "TypeScript",   icon: typescript },
  { name: "React JS",     icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS",      icon: nodejs },
  { name: "Three JS",     icon: threejs },
  { name: "git",          icon: git },
  { name: "figma",        icon: figma },
  { name: "docker",       icon: docker },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Full-Stack Developer",
    company_name: "Freelance",
    icon: web,
    iconBg: "#1a1a2e",
    date: "Jan 2023 - 2026",
    points: [
      "Building production-grade web applications using Next.js, FastAPI and TypeScript.",
      "Designing RESTful APIs and real-time systems with WebSockets.",
      "Deploying and managing applications on Linux servers with Docker & Nginx.",
      "Delivering responsive, high-performance UIs for real clients.",
    ],
  },
  {
    title: "DevOps Engineer",
    company_name: "Self-directed",
    icon: mobile,
    iconBg: "#16213e",
    date: "Jun 2023 - 2026",
    points: [
      "Built Vantage — a full observability platform with Prometheus, Grafana, ML anomaly detection and Docker.",
      "Automated CI/CD pipelines and container orchestration workflows.",
      "Managed Linux servers, Nginx reverse proxies and SSL configurations.",
      "Created open-source DevOps tooling used by the community.",
    ],
  },
  {
    title: "Cybersecurity Researcher",
    company_name: "Independent",
    icon: backend,
    iconBg: "#0f3460",
    date: "Sep 2023 - 2026",
    points: [
      "Developed Sentinel SOC — real-time SOC dashboard detecting SSH brute-force, SQLi, DDoS attacks.",
      "Built PhishGuard AI — 100% local ML-based phishing email detector with Naive Bayes + FastAPI.",
      "Created Antivirus Pro with VirusTotal & MetaDefender API integrations.",
      "Researching threat intelligence and automated IP-blocking systems.",
    ],
  },
  {
    title: "Open Source Creator",
    company_name: "GitHub · builtbysardor",
    icon: creator,
    iconBg: "#1a1a2e",
    date: "2023 - 2026",
    points: [
      "Maintaining open-source repositories on GitHub across DevOps, security and full-stack domains.",
      "Building developer tools, security utilities and full-stack templates.",
      "Contributing to community projects and writing technical documentation.",
      "Growing a developer brand focused on practical, production-ready software.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [] as const;

// Projects
export const PROJECTS = [
  {
    name: "AssetTrack",
    description:
      "Production-grade IT asset and HR lifecycle manager. Track hardware, employees, onboarding and offboarding workflows with LDAP provisioning, RBAC and full audit trail.",
    tags: [
      { name: "Next.js",    color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
    ],
    image: project1,
    source_code_link: "https://github.com/builtbysardor/assettrack",
    live_site_link: "https://github.com/builtbysardor/assettrack",
  },
  {
    name: "Sentinel SOC",
    description:
      "Real-time SOC dashboard with FastAPI + WebSockets. Detects SSH brute-force, SQL injection, DDoS and more. Auto-blocks IPs scoring 85+ threat.",
    tags: [
      { name: "FastAPI",    color: "blue-text-gradient" },
      { name: "Python",     color: "green-text-gradient" },
      { name: "WebSockets", color: "pink-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/builtbysardor/sentinel-soc",
    live_site_link: "https://sentinel-soc-tau.vercel.app",
  },
  {
    name: "Vantage",
    description:
      "Open-source observability platform with real-time metrics, logs, alerts and ML anomaly detection. Built on Prometheus, Grafana, FastAPI and Next.js.",
    tags: [
      { name: "Prometheus", color: "blue-text-gradient" },
      { name: "Grafana",    color: "green-text-gradient" },
      { name: "Docker",     color: "pink-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/builtbysardor/vantage",
    live_site_link: "https://github.com/builtbysardor/vantage",
  },
  {
    name: "PhishGuard AI",
    description:
      "100% local ML-based phishing email detector. Naive Bayes classifier + FastAPI. Your emails never leave your device. Zero cloud dependencies.",
    tags: [
      { name: "Python",     color: "blue-text-gradient" },
      { name: "FastAPI",    color: "green-text-gradient" },
      { name: "ML",         color: "pink-text-gradient" },
    ],
    image: project4,
    source_code_link: "https://github.com/builtbysardor/phishing-detector",
    live_site_link: "https://phishing-detector-one-gold.vercel.app",
  },
  {
    name: "Antivirus Pro",
    description:
      "Enterprise cybersecurity dashboard with 360° radar scanning, VirusTotal & MetaDefender API integration, and heuristic threat analysis engine.",
    tags: [
      { name: "Python",     color: "blue-text-gradient" },
      { name: "VirusTotal", color: "green-text-gradient" },
      { name: "FastAPI",    color: "pink-text-gradient" },
    ],
    image: project5,
    source_code_link: "https://github.com/builtbysardor/antivirus-pro",
    live_site_link: "https://github.com/builtbysardor/antivirus-pro",
  },
  {
    name: "CryptaVault",
    description:
      "Secure, offline encryption/decryption tool supporting Caesar, Vigenère and extended classical cipher algorithms with an interactive visual interface.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "Web Crypto", color: "green-text-gradient" },
      { name: "Cipher",     color: "pink-text-gradient" },
    ],
    image: project6,
    source_code_link: "https://github.com/builtbysardor/cipher-tool",
    live_site_link: "https://cipher-tool-two.vercel.app",
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/builtbysardor",
  },
] as const;
