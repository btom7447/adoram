export default function ProjectSolution({ project }) {
    return (
      <div className=" m-auto w-full max-w-5xl text-lg text-white font-light">
        {/* <h5>(Solution/My approach/Development)</h5>
        <p>{project.brief_description}</p> */}

        {Array.isArray(project.tags) && project.tags.length > 0 && (
          <div className="mt-10 flex justify-center  flex-wrap gap-5">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-7 py-2 rounded-full text-lg bg-transparent border border-white text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    );
}