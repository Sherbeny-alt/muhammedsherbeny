export const profile = {
  name: "Muhammed Abdulfttah",
  firstName: "Muhammed",
  lastName: "Abdulfttah",
  mark: "MA.",
  role: "Data Science & AI",
  headline:
    "I turn complex data into clear models, useful visuals, and decisions people can act on.",
  email: "muhammedabdulfttah8866@gmail.com",
  location: "Zagazig, Egypt",
  availability: "Available for new opportunities",
} as const;

export const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const socials = [
  {
    label: "LinkedIn",
    handle: "muhammed-abdulfttah-elsayed",
    href: "https://www.linkedin.com/in/muhammed-abdulfttah-elsayed-sherbeny-760504405/",
  },
  { label: "GitHub", handle: "Sherbeny-alt", href: "https://github.com/Sherbeny-alt" },
  { label: "Facebook", handle: "Sherbeny86", href: "https://www.facebook.com/Sherbeny86/" },
] as const;

export const about = {
  kicker: "About me",
  quote: "Curious about the patterns hidden inside everyday data.",
  body: [
    "I'm a Data Science and AI Engineer, combining strong academic work with practical training through DEPI and ITI.",
    "Based in Zagazig, Egypt, I'm looking for internships and junior data analyst roles where thoughtful analysis can make a measurable difference.",
  ],
} as const;

export const stats = [
  { value: "GCI World Program", label: "Real-World Competition" },
  { value: "BSc", label: "Data Science & AI" },
  { value: "DEPI / ITI", label: "Professional training" },
  { value: "AR · EN", label: "Languages" },
] as const;

export type Project = {
  index: string;
  title: string;
  summary: string;
  detail: string;
  stack: string[];
  image: string;
  alt: string;
  href?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "House Price Prediction",
    summary:
      "An end-to-end regression pipeline that transforms housing data into reliable price estimates.",
    detail: "Feature engineering, model comparison, and evaluation using RMSE and R².",
    stack: ["Python", "pandas", "scikit-learn", "Matplotlib"],
    image: "project-house",
    alt: "White architectural house model lit by warm golden light on a dark surface",
  },
  {
    index: "02",
    title: "Customer Churn Prediction",
    summary:
      "A classification model designed to identify customers most likely to leave a service.",
    detail: "Exploratory analysis, class balancing, and explainable feature importance.",
    stack: ["Python", "scikit-learn", "Seaborn", "EDA"],
    image: "project-churn",
    alt: "Open laptop at night showing glowing blue and gold data charts",
  },
];

export const skillGroups = [
  {
    title: "Analysis",
    accent: "gold" as const,
    items: ["Python", "SQL", "pandas", "Statistics"],
  },
  {
    title: "Machine Learning",
    accent: "crimson" as const,
    items: ["scikit-learn", "TensorFlow", "Feature engineering", "Model evaluation"],
  },
  {
    title: "Visualisation",
    accent: "azure" as const,
    items: ["Power BI", "Matplotlib", "Seaborn", "Dashboard design"],
  },
];

export const education = [
  {
    title: "BSc Data Science & Artificial Intelligence",
    org: "Zagazig University",
    icon: "cap" as const,
  },
  {
    period: "Sep 2026 — Dec 2026",
    title: "AI & Data Science Trainee",
    org: "DEPI / ITI",
    note: "Intensive training in analysis, machine learning, and AI fundamentals.",
    icon: "spark" as const,
  },
  {
    title: "AI & Data Science Trainee — GCI World Program",
    org: "University of Tokyo (Matsuo-Iwasawa Lab)",
    note: "Selected via DEPI to join GCI World 2026: trained in Python, ML, SQL, and data visualization through hands-on projects and a final capstone.",
    icon: "brain" as const,
  },
];

export const sections = {
  work: { number: "01", kicker: "Selected work", title: "Projects shaped by real questions." },
  skills: {
    number: "02",
    kicker: "Capabilities",
    title: "A practical toolkit for meaningful analysis.",
  },
  education: {
    number: "03",
    kicker: "Education",
    title: "Learning deeply. Building constantly.",
  },
  contact: {
    number: "04",
    kicker: "Contact",
    title: "Let's turn data into direction.",
    intro:
      "I'm open to internships and junior data analyst opportunities, both remote and on-site.",
  },
} as const;
