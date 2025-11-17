"use client";

import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MoonLoader } from "react-spinners";
import Link from "next/link";

import CustomButton from "@/components/CustomButton";
import MarqueeText from "@/components/MarqueeText";

export default function AboutProjectSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <div className="bg-white py-30 flex items-center justify-center z-50">
        <MoonLoader color="#4254D0" size={40} />
      </div>
    );
  }

  if (!projects.length) {
    return (
      <div className="bg-white py-30 flex items-center justify-center">
        <p className="text-gray-800 text-xl text-center">
          No projects available yet.
        </p>
      </div>
    );
  }

  return (
    <section className="relative flex flex-col justify-center items-center bg-white pb-10 pt-10 px-5 lg:px-10 overflow-hidden">
      {/* Marquee behind */}
      <MarqueeText text={"World Class"} />

      {/* Title */}
      <h5
        className="w-full text-center text-black text-lg font-medium mb-10 z-10"
        data-aos="fade-down"
      >
        Projects
      </h5>

      {/* Carousel – transparent */}
      <div className="relative w-full z-10">
        <Splide
          options={{
            type: "loop",
            arrows: true,
            pagination: false,
            autoplay: false,
            interval: 3000,
            perPage: 2,
            gap: "2rem",
            breakpoints: {
              640: { perPage: 1 },
            },
          }}
          className="w-full"
          renderControls={() => (
            <div className="absolute inset-0 flex justify-between items-center px-2 z-20">
              <button className="splide__arrow splide__arrow--prev bg-black/10 backdrop-blur-xl rounded-full p-2 hover:bg-black/20 transition">
                <ChevronLeft size={20} strokeWidth={1} />
              </button>
              <button className="splide__arrow splide__arrow--next bg-black/10 backdrop-blur-xl rounded-full p-2 hover:bg-black/20 transition">
                <ChevronRight size={20} strokeWidth={1} />
              </button>
            </div>
          )}
        >
          {projects.map((project, index) => (
            <SplideSlide key={index}>
              <Link href={`/projects/${project._id}`} className="block w-full">
                <div className="flex flex-col items-center text-center">

                  <Image
                    src={project.project_images?.[0]}
                    alt={project.project_name}
                    width={350}
                    height={200}
                    unoptimized
                    className="my-5 w-full h-auto rounded-[30px] object-cover"
                  />

                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Button at bottom */}
      <div className="self-end justify-self-end flex justify-center mt-10 z-10">
        <Link href="/projects">
          <CustomButton text="View my works" />
        </Link>
      </div>
    </section>
  );
}
