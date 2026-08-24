// ────────────────────────────────────────────────────────────
// All personal content lives here. Edit this file to update
// the site — nothing else needs to change.
// ────────────────────────────────────────────────────────────

export const profile = {
  name: "Saeem Chauhan",
  fullName: "Chauhan MD Saeem MD Siddik",
  title: "Software Developer & ML Enthusiast",
  eyebrow: "BCA Computer Applications",
  location: "Bengaluru, Karnataka",
  email: "saeemchauhan01@gmail.com",
  phone: "+91 63630 35701",
  tagline:
    "I build data-driven applications and machine learning pipelines — turning raw data into working software.",
  heroSub:
    "Recent BCA graduate exploring full-stack development, NLP and applied ML. I like taking a problem apart, measuring it, and shipping something that works.",
  resumeFile: "/resume.pdf",

  // TODO: replace with your real profile links
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
  },

  about: {
    heading: "About Me",
    paragraphs: [
      "I'm a Computer Applications graduate from Seshadripuram College, Bengaluru, with a 9.31 CGPA and a strong footing in data structures, OOP and database systems.",
      "Over the past year I've been building end-to-end projects — resume screening tools, monitoring dashboards, factory digital twins — mostly in Python, applying classic ML alongside proper backend engineering.",
      "During my Machine Learning internship at Future Interns, I shipped three ML projects covering NLP, classification and forecasting, and picked up a Letter of Recommendation for consistent delivery.",
      "I'm looking for an entry-level Software Development or Data Analyst role where I can keep building real things and keep getting better at it.",
    ],
    stats: [
      { label: "CGPA", value: "9.31" },
      { label: "Projects Shipped", value: "4+" },
    ],
  },

  skills: [
    {
      category: "Languages",
      icon: "Code2",
      items: ["Python", "Java", "C", "JavaScript", "SQL"],
    },
    {
      category: "ML & Data",
      icon: "BrainCircuit",
      items: ["Pandas", "NumPy", "Scikit-Learn", "NLTK", "TF-IDF"],
    },
    {
      category: "Web & Dashboards",
      icon: "LayoutDashboard",
      items: ["Streamlit", "FastAPI", "HTML/CSS", "Power BI", "Plotly"],
    },
    {
      category: "Database & Tools",
      icon: "Database",
      items: ["PostgreSQL", "Git", "Docker", "WebSockets"],
    },
    {
      category: "Core CS",
      icon: "TerminalSquare",
      items: ["Data Structures & Algorithms", "OOP", "DBMS"],
    },
  ],

  projects: [
    {
      name: "Fieldnote: AI-Powered Job Portal",
      year: "2026",
      status: "Live",
      description:
        "A premium full-stack platform integrating Generative AI for smart job matching, AI-driven resume tailoring, and instant recruiter tooling.",
      tech: ["Python", "Flask", "Supabase", "PostgreSQL", "Groq AI", "JavaScript"],
      github: "https://github.com/chauhanmdsaeem/ai-job-portal",
      demo: "https://fieldnote-ai.onrender.com/",
    },
    {
      name: "Sales & Demand Forecasting System",
      year: "2026",
      status: "Live",
      description:
        "An interactive machine learning-powered sales forecasting dashboard that analyzes historical data and predicts future demand using a Random Forest Regressor.",
      tech: ["Python", "Scikit-Learn", "Pandas", "Streamlit"],
      github: "https://github.com/chauhanmdsaeem/FUTURE_ML_01",
      demo: "https://futureml01-2nydokdagwixgggjk4chaa.streamlit.app/",
    },
    {
      name: "Keystrike: Typing Test",
      year: "2026",
      status: "Live",
      description:
        "A fast, lightweight browser-based typing test featuring ghost racing, local stats tracking, and custom certificate exports.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/chauhanmdsaeem/keystrike-typing-test",
      demo: "https://keystrike-typing-test.vercel.app/",
    },
    {
      name: "LeadDesk Mini",
      year: "2026",
      status: "Completed",
      description:
        "A lightweight lead-capture platform with a public form and an authenticated admin dashboard. Built with raw SQL, JWT auth, and no frontend framework.",
      tech: ["FastAPI", "Python", "PostgreSQL", "JavaScript", "Tailwind"],
      github: "https://github.com/chauhanmdsaeem/leaddesk-fastapi",
      demo: "https://leaddesk-fastapi.vercel.app/",
    },
    {
      name: "Smart Factory Digital Twin",
      year: "2026",
      status: "Completed",
      description:
        "A factory monitoring prototype with a Python backend and PostgreSQL, integrating Groq AI for a chatbot layer, containerized with Docker.",
      tech: ["Python", "FastAPI", "PostgreSQL", "WebSockets", "Docker", "Groq AI"],
      github: "https://github.com/chauhanmdsaeem/Smart-Factory-Digital-Twin",
      demo: "https://www.linkedin.com/posts/chauhan-md-saeem-md-siddik-84a884373_digitaltwin-industry40-smartfactory-activity-7481376388441329664-aOkT",
    },
    {
      name: "AI Resume Screening System",
      year: "2026",
      status: "Completed",
      description:
        "Automated candidate ranking across 40+ skills using TF-IDF and cosine similarity — a weighted model (70% similarity + 30% skill match) that cut manual screening time by ~80%.",
      tech: ["Python", "Scikit-Learn", "NLTK", "Streamlit", "TF-IDF"],
      github: "https://github.com/chauhanmdsaeem/FUTURE_ML_03",
      demo: "https://www.linkedin.com/posts/chauhan-md-saeem-md-siddik-84a884373_machinelearning-nlp-resumescreening-activity-7448421928135999488-J5ON",
    },
    {
      name: "Support Ticket Classification",
      year: "2026",
      status: "Completed",
      description:
        "A multi-class NLP classifier that routes support tickets automatically, validated with confusion matrix and precision-recall metrics.",
      tech: ["Python", "NLP", "Logistic Regression", "Scikit-Learn"],
      github: "https://github.com/chauhanmdsaeem/FUTURE_ML_02",
      demo: "https://www.linkedin.com/posts/chauhan-md-saeem-md-siddik-84a884373_machinelearning-nlp-artificialintelligence-activity-7448383068349943808-54FO",
    },
    {
      name: "Smart System Health Monitor",
      year: "2026",
      status: "Live",
      description:
        "A real-time dashboard tracking CPU, memory and disk usage with automated PDF reporting, deployed live on Streamlit Cloud.",
      tech: ["Python", "Streamlit", "psutil", "Plotly"],
      github: "https://github.com/chauhanmdsaeem/system-health-monitor",
      demo: "https://system-health-monitor-vpwwc4tohqsggrvtju3vl7.streamlit.app/",
    },
  ],

  experience: [
    {
      role: "Machine Learning Intern",
      org: "Future Interns",
      location: "Bengaluru, Karnataka",
      period: "Mar 2026 – Apr 2026",
      points: [
        "Engineered 3 end-to-end ML projects — resume screening, ticket classification, and demand forecasting.",
        "Optimized NLP pipelines with TF-IDF vectorization and cosine similarity, reaching 85%+ accuracy.",
        "Earned a Certificate of Completion and a Letter of Recommendation for consistent technical delivery.",
      ],
    },
  ],

  education: [
    {
      degree: "BCA – Computer Applications",
      org: "Seshadripuram College, Bengaluru",
      period: "2023 – 2026",
      detail: "CGPA: 9.31 / 10 · SGPA 9.56 in final semester · Topper: DBMS, DAA, FEIA & Hindi",
    },
    {
      degree: "2nd PUC – Commerce (CEBA)",
      org: "Sri Vidya PU College, Bengaluru",
      period: "2022 – 2023",
      detail: "88.17%",
    },
  ],

  achievements: [
    "Paper Presenter — OISCA Global Summit 2025 (Youth): 'AI-Powered Solutions for Environmental Restoration'",
    "Best Tech Team Lead — Multidisciplinary International Conference, Seshadripuram College (Mar 2026)",
    "Best Organizer & Team Leader of the Year 2025 — Utkarsh Hindi Sangh, Seshadripuram College",
    "Four-Subject Topper — recognized for academic excellence throughout the BCA program",
  ],

  certifications: [
    "Python Essentials 1 & 2 — Cisco",
    "Java & Advanced Java with Spring Boot",
    "Presentation Skills — TCS iON",
    "MS Office Tools (Grade A+) — Trivedi Institute",
    "Networking Essentials — Cisco",
    "Power BI Certification",
  ],
};
