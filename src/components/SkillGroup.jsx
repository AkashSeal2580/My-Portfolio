import { Code2 } from "lucide-react";

export default function SkillGroup({ group, index }) {
  return (
    <article className="skill-card">
      <div className="skill-icon"><Code2 size={21} /></div>
      <div className="skill-card-heading">
        <span className="skill-index">0{index + 1}</span>
        <h3>{group.title}</h3>
      </div>
      <div className="tag-list">
        {group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
      </div>
    </article>
  );
}
