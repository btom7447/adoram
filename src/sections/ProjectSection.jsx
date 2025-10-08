"use client";

import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MoonLoader } from "react-spinners";
import Link from "next/link";

export default function ProjectSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch projects from API
    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await fetch("/api/projects");
                const data = await res.json();
                setProjects(data);
            } catch (error) {
                console.error("❌ Failed to fetch projects:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProjects();
    }, []);

    if (loading) {
        return (
            <div className="bg-black py-30 flex items-center justify-center z-50">
                <MoonLoader color="#4254D0" size={40} />
            </div>
        );
    }

    if (!projects.length) {
        return (
            <div className="bg-black py-30 flex items-center justify-center">
                <p className="text-gray-300 text-xl text-center">
                    No projects available yet.
                </p>
            </div>
        );
    }


    return (
      <section
        className="relative p-5 lg:p-10 w-full h-fit flex flex-col items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${
            projects[activeIndex]?.project_images?.[0] || ""
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h5
          className="mb-10 w-full text-center text-white text-lg font-medium z-10"
          data-aos="fade-down"
        >
          Projects
        </h5>

        {/* Centralized horizontal rule */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <hr className="bg-white h-[1px] w-screen border-none" />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-lg" />

        <Splide
          options={{
            type: "slide",
            arrows: true,
            pagination: false,
            autoplay: false,
            rewind: true,
          }}
          className="relative z-10 w-full h-full flex items-center justify-center"
          onMoved={(_, newIndex) => setActiveIndex(newIndex)}
          rendercontrols={() => (
            <div className="absolute inset-0 flex justify-between items-center px-6 z-20">
              <button className="splide__arrow splide__arrow--prev bg-white text-white backdrop-blur-xl rounded-full p-2 hover:bg-black/60 transition  left-30">
                <ChevronLeft size={20} strokeWidth={1} />
              </button>
              <button className="splide__arrow splide__arrow--next bg-black/40 backdrop-blur-xl rounded-full p-2 hover:bg-black/60 transition">
                <ChevronRight size={20} strokeWidth={1} />
              </button>
            </div>
          )}
        >
          {projects.map((project, index) => (
            <SplideSlide key={index}>
              <Link href={`/projects/${project._id}`} className="block w-full">
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto ">
                  <h2 className="michroma text-3xl font-light text-white ">
                    {project.name}
                  </h2>
                  <Image
                    src={project.project_images?.[0]}
                    alt={project.project_name}
                    width={180}
                    height={100}
                    unoptimized
                    className="my-10 w-full max-w-2xl h-auto rounded-[40px] object-cover"
                  />
                  <div className="flex flex-wrap justify-center gap-4 ">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-5 py-2 rounded-full text-sm text-white bg-transparent border border-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </section>
    );
}
