"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function ProjectHeader({ project }) {
  // console.log("Project data", project)
  return (
    <section
      className="
        flex flex-col items-center justify-center
        gap-6
        px-5
      "
    >
      {/* Title */}
      <h1
        className="michroma text-3xl lg:text-7xl font-light text-center text-white"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {project.project_name}
      </h1>

      <h5
        className="text-center text-white text-lg"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        {project.industry}
      </h5>

      {/* Website Link */}
      {project.website_link && (
        <a
          href={project.website_link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-2 rounded-full text-lg bg-black border border-white/20 text-gray-200 hover:bg-highlight transition"
        >
          View Project
        </a>
      )}

      <div
        className="relative mx-auto w-full max-w-4xl mt-6 h-[300px] lg:h-[400px] rounded-2xl overflow-hidden"
        data-aos="zoom-in-up"
      >
        <Image
          src={project.project_images[0]}
          alt={project.project_name}
          fill
          unoptimized
          className="object-cover object-center rounded-2xl"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <a
          href={project.website_link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-5 z-50 right-5 items-center gap-0 px-10 py-3.5 rounded-full backdrop-blur-sm border border-white text-[#00E676] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-gradient-to-tr from-gray-500/40 to-gray-400/30"
        >
          View Project
        </a>
      </div>

      <div className="flex flex-col xl:flex-row flex-wrap justify-center xl:items-center gap-10 xl:gap-y-5">
        <div>
          <h5 className="text-gray-500">Client</h5>
          <h6 className="font-light text-lg">{project.client}</h6>
        </div>
        <div>
          <h5 className="text-gray-500">Role</h5>
          <h6 className="font-light text-lg">Product Designer</h6>
        </div>
        <div>
          <h5 className="text-gray-500">Date</h5>
          <h6 className="font-light text-lg">
            {new Date(project.date)
              .toLocaleDateString("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
              .replace(/\//g, "-")}
          </h6>
        </div>
      </div>
    </section>
  );
}
