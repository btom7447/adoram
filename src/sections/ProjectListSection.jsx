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
