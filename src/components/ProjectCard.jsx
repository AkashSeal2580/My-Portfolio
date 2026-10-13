import { ArrowUpRight, Github, Layers3 } from "lucide-react";

export default function ProjectCard({ project }) {
  const hasGithub = project.github && !project.github.includes("your-github-username");
  const hasDemo = Boolean(project.demo);

  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className="project-category">{project.category}</span>
      </div>

      <div className="project-illustration" aria-hidden="true">
        <div className="illustration-window">
          <div className="window-dots"><i /><i /><i /></div>
          <div className="illustration-lines">
            <span className="line-long" />
            <span className="line-medium" />
            <span className="line-short" />
          </div>
          <div className="illustration-chip"><Layers3 size={17} /> BUILD · TEST · IMPROVE</div>
        </div>
      </div>

      <div className="project-content">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          {project.planned && <span className="status-label">Planned</span>}
        </div>
        <p className="project-description">{project.description}</p>
        <ul className="project-highlights">
          {project.highlights.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="tag-list">
          {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
        </div>
        <div className="project-actions">
          {hasGithub ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="text-link">
              <Github size={16} /> Source code <ArrowUpRight size={14} />
            </a>
          ) : (
            <span className="muted-link"><Github size={16} /> Add GitHub URL</span>
          )}
          {hasDemo ? (
            <a href={project.demo} target="_blank" rel="noreferrer" className="text-link">
              Live demo <ArrowUpRight size={14} />
            </a>
          ) : (
            <span className="muted-link">Demo not added</span>
          )}
        </div>
      </div>
    </article>
  );
}
