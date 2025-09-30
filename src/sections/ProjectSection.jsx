"use client";

import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const projects = [
    {
        name: "Fintech App Redesign",
        date: "2025-01-15",
        tags: ["UI Design", "UX Research", "Prototyping"],
        image: "/images/projects/project-one.jpg",
    },
    {
        name: "E-Commerce Branding",
        date: "2024-12-10",
        tags: ["Branding", "UI Design", "Illustration"],
        image: "/images/projects/project-two.png",
    },
    {
        name: "Healthcare Dashboard",
        date: "2024-11-05",
        tags: ["UI Design", "UX Research", "Data Visualization"],
        image: "/images/projects/project-three.png",
    },
    {
        name: "Portfolio Website",
        date: "2024-10-22",
        tags: ["UI Design", "Frontend Dev", "Branding"],
        image: "/images/projects/project-four.png",
    },
    {
        name: "Travel Booking Platform",
        date: "2024-09-18",
        tags: ["Prototyping", "UI Design", "Interaction Design"],
        image: "/images/projects/project-one.jpg",
    },
    {
        name: "Restaurant Ordering System",
        date: "2024-08-12",
        tags: ["UX Research", "UI Design", "Branding"],
        image: "/images/projects/project-two.png",
    },
    {
        name: "Crypto Wallet App",
        date: "2024-07-28",
        tags: ["UI Design", "Prototyping", "Product Design"],
        image: "/images/projects/project-three.png",
    },
    {
        name: "Fitness Tracker",
        date: "2024-06-20",
        tags: ["UI Design", "UX Research", "Mobile Design"],
        image: "/images/projects/project-four.png",
    },
    {
        name: "Education Platform",
        date: "2024-05-14",
        tags: ["UI Design", "Branding", "Accessibility"],
        image: "/images/projects/project-one.jpg",
    },
    {
        name: "Smart Home App",
        date: "2024-04-02",
        tags: ["UI Design", "Prototyping", "UX Research"],
        image: "/images/projects/project-two.png",
    },
];

export default function ProjectSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section
            className="relative p-5 lg:p-10 w-full h-fit flex flex-col items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${projects[activeIndex].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h5 className="mb-10 w-full text-center text-white text-lg font-medium z-10" data-aos="fade-down">
                Projects
            </h5>

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
                        <button className="splide__arrow splide__arrow--prev bg-black/40 backdrop-blur-xl rounded-full p-2 hover:bg-black/60 transition left-30">
                            <ChevronLeft className="text-white w-6 h-6" />
                        </button>
                        <button className="splide__arrow splide__arrow--next bg-black/40 backdrop-blur-xl rounded-full p-2 hover:bg-black/60 transition">
                            <ChevronRight className="text-white w-6 h-6" />
                        </button>
                    </div>
                )}
            >
                {projects.map((project, index) => (
                    <SplideSlide key={index}>
                        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto ">
                            <h2 className="michroma text-3xl font-light text-white ">
                                {project.name}
                            </h2>
                            <Image
                                src={project.image}
                                alt={project.name}
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
                    </SplideSlide>
                ))}
            </Splide>
        </section>
    );
}
