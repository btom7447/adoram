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
                    relative rounded-2xl p-5 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                    bg-gradient-to-tr from-white/5 to-white/10 border border-white/10 shadow-lg mb-10
                    group
                    ${
                      isHovered
                        ? "scale-[1.03] border-white/30 bg-white/10 z-10"
                        : ""
                    }
                    ${blurred ? "opacity-40 blur-sm" : "opacity-100"}
                    md:hover:rotate-[0.5deg] md:hover:-translate-y-2 md:hover:shadow-xl
                    md:hover:backdrop-blur-0
                    md:backdrop-blur-md
                    md:cursor-pointer
                  `}
                    style={{
                      transform: isHovered
                        ? "perspective(800px) rotateX(2deg) rotateY(2deg)"
                        : "none",
                    }}
                  >
                    {/* Parallax Image */}
                    {project.project_images?.[0] && (
                      <div
                        className={`relative w-full h-56 rounded-xl overflow-hidden mb-5 transition-transform duration-700 ease-out
                      `}
                      >
                        <Image
                          src={project.project_images[0]}
                          alt={project.project_name}
                          fill
                          className="object-cover object-center h-full w-full"
                        />
                        {/* Reflection overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent transition-opacity duration-700
                          ${isHovered ? "opacity-60" : "opacity-20"}
                        `}
                        />
                      </div>
                    )}

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-2xl font-semibold text-white mb-5">
                                {project.project_name}
                            </h3>
                            <p className="text-sm text-gray-400">
                                {new Date(project.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                                })}
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
                         <Link
                            href={`/projects/${project._id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-self-end text-highlight text-lg font-medium"
                        >
                          Visit Site
                          <ArrowUpRight size={20} />
                        </Link>
                      )}
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
