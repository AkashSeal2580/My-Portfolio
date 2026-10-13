import {
  ArrowDown, ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail,
  MapPin, Code2, BriefcaseBusiness, GraduationCap, ExternalLink,
  Sparkles, Send, Heart
} from "lucide-react";
import Navbar from "./components/Navbar";
import SectionTitle from "./components/SectionTitle";
import ProjectCard from "./components/ProjectCard";
import SkillGroup from "./components/SkillGroup";
import { profile, projects, skillGroups, education, certifications } from "./data";

function App() {
  const year = new Date().getFullYear();
  const emailHref = `mailto:${profile.email}`;

  return (
    <>
      <Navbar />
      <main>
        <section className="hero section-shell" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="availability"><span className="availability-dot" /> OPEN TO ENTRY-LEVEL OPPORTUNITIES</div>
              <p className="hero-kicker">HELLO, I'M</p>
              <h1>{profile.name}<span className="hero-period">.</span></h1>
              <h2>I build <span>useful digital</span><br className="desktop-break" /> experiences.</h2>
              <p className="hero-description">{profile.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
                <a className="button button-secondary" href={profile.resumePath} download>Download resume <ArrowDown size={16} /></a>
              </div>
              <div className="hero-socials">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /> GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /> LinkedIn</a>
                <span className="social-separator" />
                <span><MapPin size={16} /> {profile.location}</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Developer introduction graphic">
              <div className="visual-glow" />
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="hero-monogram">
                <span className="monogram-top">DEVELOPER / PORTFOLIO</span>
                <span className="monogram-initials">A<span>S</span></span>
                <span className="monogram-bottom">BUILDING WITH PURPOSE</span>
              </div>
              <div className="floating-card floating-card-top"><Code2 size={18} /><span><b>Clean code</b><small>Built to be understood</small></span></div>
              <div className="floating-card floating-card-bottom"><Sparkles size={18} /><span><b>Always learning</b><small>One project at a time</small></span></div>
              <span className="visual-index">01 — 05</span>
            </div>
          </div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16} /></a>
        </section>

        <section className="section-shell about-section" id="about">
          <div className="container about-grid">
            <div>
              <SectionTitle eyebrow="A LITTLE ABOUT ME" title={<>Curious mind.<br /><span className="text-accent">Practical builder.</span></>} />
            </div>
            <div className="about-copy">
              <p className="large-copy">I’m an aspiring software developer focused on turning ideas into practical applications.</p>
              <p>I enjoy working across the stack—from building responsive React interfaces to connecting APIs and learning backend development with Java and Spring Boot. My projects help me learn by solving real implementation problems.</p>
              <p>I’m looking for an entry-level opportunity where I can contribute, learn from experienced developers, and grow through real-world engineering work.</p>
              <a className="text-link" href="#journey">More about my journey <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="container value-strip">
            <div><span className="value-number">01</span><span><b>Problem solving</b><small>Break problems into clear steps</small></span></div>
            <div><span className="value-number">02</span><span><b>Continuous learning</b><small>Learn, build, and improve</small></span></div>
            <div><span className="value-number">03</span><span><b>Team mindset</b><small>Communicate and collaborate</small></span></div>
          </div>
        </section>

        <section className="section-shell skills-section" id="skills">
          <div className="container">
            <SectionTitle eyebrow="MY TOOLKIT" title={<>Skills I’m building <span className="text-accent">with.</span></>} description="A practical toolkit for developing and shipping modern applications. Skill levels should be discussed honestly in interviews." />
            <div className="skills-grid">
              {skillGroups.map((group, index) => <SkillGroup key={group.title} group={group} index={index} />)}
            </div>
          </div>
        </section>

        <section className="section-shell projects-section" id="projects">
          <div className="container">
            <div className="projects-heading-row">
              <SectionTitle eyebrow="SELECTED WORK" title={<>Projects with a <span className="text-accent">purpose.</span></>} description="A few projects that show how I learn, experiment, and turn ideas into working software." />
              <a className="text-link projects-github-link" href={profile.github} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={15} /></a>
            </div>
            <div className="projects-grid">
              {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
            </div>
            <p className="project-note"><Sparkles size={15} /> Project status and feature descriptions are editable in <code>src/data.js</code>. Keep the published claims accurate.</p>
          </div>
        </section>

        <section className="section-shell journey-section" id="journey">
          <div className="container journey-grid">
            <div className="journey-main">
              <SectionTitle eyebrow="MY JOURNEY" title={<>Learning today.<br /><span className="text-accent">Building tomorrow.</span></>} description="My academic background and training have helped me explore software development and technology." />
              <div className="timeline">
                {education.map((item) => (
                  <article className="timeline-item" key={item.title}>
                    <span className="timeline-dot" />
                    <span className="timeline-period">{item.period}</span>
                    <h3>{item.title}</h3>
                    <p className="timeline-organization">{item.organization}</p>
                    <p className="timeline-detail">{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
            <aside className="certifications-panel">
              <div className="cert-heading"><GraduationCap size={22} /><h3>Training & certifications</h3></div>
              <p className="panel-description">Relevant learning experiences and professional development.</p>
              <ul className="cert-list">
                {certifications.map((cert) => <li key={cert}><span className="cert-check">↗</span>{cert}</li>)}
              </ul>
              <div className="cert-footnote">Add certificate links or credential IDs where available. Verify all titles before publishing.</div>
            </aside>
          </div>
        </section>

        <section className="section-shell contact-section" id="contact">
          <div className="container contact-card">
            <div className="contact-orb contact-orb-one" />
            <div className="contact-orb contact-orb-two" />
            <div className="contact-content">
              <p className="eyebrow">HAVE AN OPPORTUNITY?</p>
              <h2>Let’s build<br /><span>something meaningful.</span></h2>
              <p className="contact-description">I’m open to entry-level software developer roles, internships, and opportunities to learn from a great engineering team.</p>
              <a className="button button-primary" href={emailHref}><Mail size={17} /> Get in touch <ArrowUpRight size={16} /></a>
              <div className="contact-details">
                <a href={emailHref}><Mail size={16} /> {profile.email}</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ExternalLink size={13} /></a>
                <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ExternalLink size={13} /></a>
              </div>
            </div>
            <div className="contact-side">
              <div className="contact-side-icon"><BriefcaseBusiness size={28} /></div>
              <span className="contact-side-label">CURRENT FOCUS</span>
              <strong>Full-Stack Development</strong>
              <p>React · Java · Spring Boot · REST APIs · MySQL</p>
              <span className="contact-side-rule" />
              <span className="contact-side-label">BASED IN</span>
              <strong>{profile.location}</strong>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand" href="#home"><span className="brand-mark">AS</span><span>akash<span className="brand-dot">.</span></span></a>
          <p>Designed and built with care <Heart size={13} className="heart-icon" /> © {year} {profile.name}</p>
          <a className="back-top" href="#home">Back to top <ArrowUpRight size={14} /></a>
        </div>
      </footer>
    </>
  );
}

export default App;
