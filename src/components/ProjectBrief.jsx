export default function ProjectBrief({ project }) {
  const paragraphs = project.brief_description.split('|');
  
  return (
    <div className="m-auto w-full max-w-5xl text-lg text-white font-light">
    <h5>(Brieft about the Project/Company)</h5>
    {paragraphs.map((paragraph, index) => (
      <p key={index} className="mb-5">{paragraph.trim()}</p>
    ))}
    </div>
  );
}