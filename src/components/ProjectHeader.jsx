"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function ProjectHeader({ project }) {
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
        Services
      </h5>

      {/* Website Link */}
      {project.website_link && (
        <a
          href={project.website_link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-2 rounded-full text-lg bg-black border border-white/20 text-gray-200 hover:bg-highlight transition"
        >
          Visit Website
        </a>
      )}

      <div className="relative mx-auto w-full max-w-4xl mt-6 h-[300px] lg:h-[400px]"
        data-aos="zoom-in-up"
      >
        <Image
          src={project.project_images[0]}
          alt={project.project_name}
          fill
          unoptimized
          className="object-contain object-center rounded-2xl"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 gap-y-5">
        <div>
          <h5 className="text-gray-500">Client</h5>
          <h6 className="font-light text-lg">{project.client}</h6>
        </div>
        <div>
          <h5 className="text-gray-500">Role</h5>
          <h6 className="font-light text-lg">{project.role}</h6>
        </div>
        <div>
          <h5 className="text-gray-500">Date</h5>
          <h6 className="font-light text-lg">
            {new Date(project.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h6>
        </div>
      </div>
    </section>
  );
}
