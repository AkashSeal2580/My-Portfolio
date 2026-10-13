
export const profile = {
  name: "Akash Seal",
  initials: "AS",
  role: "Java Full-Stack Developer",
  location: "Kolkata, India",
  email: "akashseal2604@gmail.com",

  github: "https://github.com/AkashSeal2580",

  linkedin:
    "https://www.linkedin.com/in/akash-seal-67589032b/",

  // Keep your actual resume PDF inside the public folder.
  resumePath: "https://github.com/AkashSeal2580/My-Resume/blob/main/final_resume_updated.pdf",

  intro:
    "I'm a final-year B.Tech student who enjoys building useful web applications with React, Java, Spring Boot, and APIs. I'm currently strengthening my full-stack development skills through hands-on projects."
};

export const projects = [
  {
    number: "01",
    category: "AI · Machine-Learning",
    title: "AI MedicalChatbot",
    description:
      "An AI-powered medical information assistant that combines conversational AI with voice input, speech transcription, text-to-speech, and medical image uploads.",

    highlights: [
      "Voice input and speech-to-text workflow",
      "AI response integration through APIs",
      "Text-to-speech responses and image uploads"
    ],

    stack: [
      "React",
      "FastAPI",
      "Python",
      "AI APIs"
    ],

    // Add your real repository URL when available.
    github: "",
    demo: ""
  },

  {
    number: "02",
    category: "Full-Stack",
    title: "AI Resume Builder",
    description:
      "A resume-building web application that helps users create, customize, and preview professional resumes through a simple interface.",

    highlights: [
      "Editable resume sections and live preview",
      "Multiple resume templates and accent colors",
      "Responsive interface for a smooth user experience"
    ],

    stack: [
      "React",
      "JavaScript",
      "CSS",
      "AI Integration"
    ],

    // Add your real repository URL when available.
    github: "",
    demo: ""
  },

  {
    number: "03",
    category: " Cybersecurity ",
    title: "AI-Based Phishing URL and Email Detection System",
    description:
      " Developed an AI-powered cybersecurity application that detects potential phishing URLs and fraudulent emails using machine learning. The system analyzes URL characteristics and email content to identify suspicious patterns, classify potential threats, and help users make safer online decisions.",

    highlights: [
      "Machine learning-based phishing URL detection and classification.",
      "Email phishing detection using natural language processing and text classification.",
      "URL feature extraction and suspicious pattern analysis.",
      "Interactive security dashboard displaying prediction results and risk indicators.",
      "REST API integration for real-time threat analysis.",
      "Detection history and reporting using a database.",
      "Model evaluation using precision, recall, F1-score, and confusion matrix."
    ],

    stack: [
      "React.js, JavaScript, HTML5, CSS3",
      "Python, FastAPI, REST APIs ",
      "TF-IDF, Pandas, NumPy",
      "MySQL",
    ],

    github: "",
    demo: "",
    planned: true
  }
];

export const skillGroups = [
  {
    title: "Programming",
    skills: [
      "Java",
      "JavaScript",
      "Python",
      "SQL"
    ]
  },

  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "React.js",
      "Angular",
      "Bootstrap",
      "Responsive UI"
    ]
  },

  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "Django",
      "FastAPI",
      "REST APIs",
      "CRUD Operations"
    ]
  },

  {
    title: "Databases & Tools",
    skills: [
      "MySQL",
      "MongoDB",
      "Git",
      "GitHub",
      "Postman",
      "VS Code"
    ]
  },

  {
    title: "AI & Data",
    skills: [
      "AI API Integration",
      "Speech-to-Text",
      "Text-to-Speech",
      "Machine Learning Fundamentals",
      "Data Analytics",
      "Big Data"
    ]
  },

  {
    title: "Cybersecurity & Systems",
    skills: [
      "Linux Fundamentals",
      "Kali Linux",
      "Networking Fundamentals",
      "Command-Line Operations",
      "File Permissions",
      "Basic Linux Administration"
    ]
  }
];

export const education = [
  {
    period: "Current",
    title: "B.Tech — Final Year",
    organization: "JIS University",
    detail:
      "Bachelor of Computer Science and Engineering — Cyber Security. Currently pursuing."
  },

  {
    period: "Completed",
    title: "Diploma",
    organization: "Behala Government Polytechnic",
    detail:
      "Cyber Forensics & Information Security."
  }
];

export const certifications = [
  "AWS AI Practitioner_FSP — NASSCOM (Gold, reported score: 97%)",
  "Java Full Stack Development — BCT",
  "Django with Python — Ardent",
  "Angular Training — eJob India",
  "Advanced Cyber Security Internship",
  "Cybersecurity Virtual Internship — Deloitte",
  "Data Analytics & Big Data Training"
];
