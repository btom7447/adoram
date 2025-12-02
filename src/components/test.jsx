[
  {
    project_name: "Purezza Beauty & Spa",
    brief_description: "Purezza Beauty & Spa is a wellness retreat designed to help clients rejuvenate their body, mind, and soul. We crafted a modern online presence that highlights their premium services, treatments, and customer experience with a touch of luxury.",
    website_link: "https://purezza-spa.com",
    client: "Purezza Beauty & Spa",
    industry: "Wellness & Lifestyle",
    date: new Date("2024-02-10"),
    solutions_approach: "We designed a soothing, user-friendly website with calming color palettes, service booking integration, and optimized SEO to attract local and international clients. The project emphasized building trust and showcasing Purezza's premium brand identity.",
    tags: ["spa", "beauty", "lifestyle", "wellness", "booking"],
    project_images: [
      "https://res.cloudinary.com/demo/image/upload/v1723456789/purezza_home.jpg",
      "https://res.cloudinary.com/demo/image/upload/v1723456790/purezza_services.jpg",
    ],
    client_talk: "The team delivered beyond expectations. Our clients love how easy it is to find information and book appointments online. The new site truly reflects our luxury brand image."
  },
  {
    project_name: "Poetic Sparkles Blog",
    brief_description: "Poetic Sparkles is a creative blog that provides a platform for budding writers to share poetry, stories, and reflections with a global audience. We designed a vibrant and accessible blogging platform tailored for expressive content.",
    website_link: "https://poeticsparkles.com",
    client: "Poetic Sparkles Collective",
    industry: "Creative Writing & Media",
    date: new Date("2023-11-22"),
    solutions_approach: "We implemented a CMS-driven blog with a clean reading experience, rich typography, and a tagging system for organizing categories like poetry, short stories, and essays. The design inspires creativity while maintaining functionality.",
    tags: ["blog", "poetry", "literature", "creative-writing", "media"],
    project_images: [
      "https://res.cloudinary.com/demo/image/upload/v1723456789/sparkles_home.jpg",
      "https://res.cloudinary.com/demo/image/upload/v1723456790/sparkles_post.jpg",
    ],
    client_talk: "Our writers love how easy it is to post and categorize their work. Readers spend more time on the blog, and engagement has grown massively since launch."
  },
  {
    project_name: "Gaznger (Fuel Delivery App)",
    brief_description: "Gaznger is an innovative mobile-first platform that allows users to order fuel on-demand and have it delivered directly to their location. It’s designed for convenience, safety, and efficiency in urban areas.",
    website_link: "https://gaznger.com",
    client: "Gaznger Tech Ltd.",
    industry: "Energy & Technology",
    date: new Date("2025-05-01"),
    solutions_approach: "We developed a cross-platform app with real-time order tracking, secure payment integration, and geolocation services. The backend ensures optimized delivery logistics, while the frontend prioritizes a smooth user experience.",
    tags: ["fuel-delivery", "mobile-app", "energy", "logistics", "startup"],
    project_images: [
      "https://res.cloudinary.com/demo/image/upload/v1723456789/gaznger_dashboard.jpg",
      "https://res.cloudinary.com/demo/image/upload/v1723456790/gaznger_map.jpg",
    ],
    client_talk: "Gaznger has transformed how people access fuel. The sleek design and seamless performance have given us a competitive edge in the market."
  }
]


"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MoonLoader } from "react-spinners";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectListSection({ projects }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [projects]);

  // console.log("Project Data", projects)
  return (
    <section className="relative min-h-screen w-full overflow-y-auto px-5 lg:px-20 py-28 scrollbar-none text-white">
      {/* Background */}
      <Image
        src="/images/gradient-bg.png"
        alt="Projects background"
        fill
        priority
        className="object-cover object-center fixed -z-10"
      />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md -z-10" />

      {/* Loading */}
      {loading && (
        <div className="h-[80vh] flex items-center justify-center">
          <MoonLoader color="#4254D0" size={40} />
        </div>
      )}

      {/* Empty */}
      {!loading && projects.length === 0 && (
        <div className="h-[80vh] flex items-center justify-center">
          <p className="text-gray-300 text-lg">No projects available yet.</p>
        </div>
      )}

      {/* Projects */}
      {!loading && projects.length > 0 && (
        <>
          <header data-aos="fade-up" className="text-center mb-16">
            <h2 className="michroma text-4xl lg:text-6xl font-medium text-white">
              Projects
            </h2>
            <p className="text-gray-300 text-lg mt-3">
              Highlights from projects that reflect my progress and approach.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-10  justify-center">
            <div className="w-full max-w-2xl lg:min-w-xl m-auto flex flex-col ">
              {projects.map((project) => {
                const isHovered = hoveredId === project._id;
                const anyHovered = hoveredId !== null;
                const blurred = anyHovered && !isHovered;

                return (
                  <Link
                    href={`/projects/${project._id}`}
                    key={project._id}
                    onMouseEnter={() => setHoveredId(project._id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`
        relative w-full h-80 lg:h-[420px] rounded-2xl overflow-hidden mb-10
        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        group
        ${isHovered ? "scale-[1.02] z-10" : ""}
        ${blurred ? "opacity-40 blur-sm" : "opacity-100"}
      `}
                  >
                    {/* FULL BACKGROUND IMAGE (default state) */}
                    {project.project_images?.[0] && (
                      <Image
                        src={project.project_images[0]}
                        alt={project.project_name}
                        fill
                        className={`
            object-cover transition-all duration-700 ease-out
            ${isHovered ? "scale-100" : "scale-110"}
          `}
                      />
                    )}

                    {/* DARK OVERLAY */}
                    <div
                      className={`
          absolute inset-0 transition-all duration-700
          ${isHovered ? "bg-black/50" : "bg-black/20"}
        `}
                    />

                    {/* GLASS CONTENT CARD — Hidden until hover */}
                    <div
                      className={`
          absolute inset-0 p-5 flex flex-col justify-end
          transition-all duration-700
          ${
            isHovered
              ? "opacity-100 translate-y-0 backdrop-blur-md"
              : "opacity-0 translate-y-10 backdrop-blur-0"
          }
          md:opacity-0 md:translate-y-10 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:backdrop-blur-md
        `}
                    >
                      <div
                        className={`
            bg-gradient-to-tr from-white/5 to-white/10
            border border-white/10 shadow-lg
            rounded-xl p-5
            transition-all duration-700
            ${isHovered ? "scale-100" : "scale-95"}
          `}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-2xl font-semibold text-white mb-3">
                            {project.project_name}
                          </h3>
                          <p className="text-sm text-gray-300">
                            {new Date(project.date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </p>
                        </div>

                        {/* Tags */}
                        {Array.isArray(project.tags) &&
                          project.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-5">
                              {project.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-5 py-1 rounded-full text-xs bg-white/10 border border-white/20 text-gray-200"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                        {/* Link */}
                        {project.website_link && (
                          <div className="flex justify-end">
                            <span className="flex items-center gap-1 text-highlight text-lg font-medium">
                              Visit Site
                              <ArrowUpRight size={20} />
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
