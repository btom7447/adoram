import Image from "next/image";

async function getProject(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function ProjectDetailPage({ params }) {
  const project = await getProject(params.id);

  if (!project) {
    return (
      <div className="p-10 text-center text-gray-500">
        Project not found.
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">{project.project_name}</h1>
      <p className="text-gray-600">{project.industry} • {project.client}</p>
      <p className="text-gray-500 text-sm">
        {new Date(project.date).toLocaleDateString()}
      </p>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {project.project_images?.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={project.project_name}
            width={600}
            height={400}
            unoptimized
            className="rounded-lg object-cover w-full h-auto"
          />
        ))}
      </div>

      {/* Descriptions */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Brief Description</h2>
        <p>{project.brief_description}</p>

        <h2 className="text-xl font-semibold">Solutions & Approach</h2>
        <p>{project.solutions_approach}</p>

        <h2 className="text-xl font-semibold">Client Talk</h2>
        <p className="italic">“{project.client_talk}”</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags?.map((tag, i) => (
          <span
            key={i}
            className="px-4 py-1 text-sm bg-gray-100 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Website link */}
      {project.website_link && (
        <a
          href={project.website_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Visit Website
        </a>
      )}
    </section>
  );
}
