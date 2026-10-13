export default function SectionTitle({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`section-heading ${centered ? "section-heading-centered" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
