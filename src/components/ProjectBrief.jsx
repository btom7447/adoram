export default function ProjectBrief({ project }) {
    return (
      <div className="m-auto w-full max-w-5xl text-lg text-white font-light">
        <h5>(Brieft about the Project/Company)</h5>
        <p>{project.brief_description}</p>
      </div>
    );
}