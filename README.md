# Akash Seal — Developer Portfolio

A responsive React + Vite portfolio starter with a dark navy and teal design.

## Requirements
- Node.js 18+ (Node.js 20+ recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Build for production
```bash
npm run build
npm run preview
```

## Customize before publishing
1. In `src/data.js`, update your email, GitHub, LinkedIn, project links, education and certifications.
2. Add your resume PDF to `public/` and name it `Akash-Seal-Resume.pdf`.
3. Replace any project demo/repository placeholders with real URLs.
4. Only list skills and project features that you can confidently explain in an interview.
5. Do not claim a project has a live demo until you deploy it.

## Deploy
You can deploy on Vercel or Netlify:
- Push this folder to a GitHub repository.
- Import the repository in your hosting provider.
- Build command: `npm run build`
- Output directory: `dist`

## Folder structure
```text
akash-developer-portfolio/
├── public/
│   └── (put your resume PDF here)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── ProjectCard.jsx
│   │   └── SkillGroup.jsx
│   ├── data.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
