"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const processSteps = [
  {
    id: 1,
    title: "Research & Discovery",
    description:
      "We dive deep into your brand, audience, and goals to uncover insights that will drive every design decision. This includes competitor analysis, market research, and understanding user needs.",
    bgColor: "#FFFFFF",
  },
  {
    id: 2,
    title: "Wireframing & Prototyping",
    description:
      "Low to high fidelity wireframes are created to map out the structure and flow of your product. Interactive prototypes allow us to validate user flows and ensure seamless navigation before development begins.",
    bgColor: "#A0A9E7",
  },
  {
    id: 3,
    title: "Visual Design",
    description:
      "We bring your brand to life with engaging visuals, typography, and UI components that resonate with your audience. Every screen is designed for clarity, accessibility, and conversion.",
    bgColor: "#4254D0",
  },
  {
    id: 4,
    title: "Development Handoff",
    description:
      "Designs are finalized and delivered with detailed specifications for developers. This ensures accurate implementation and smooth collaboration between design and development teams.",
    bgColor: "#FFFFFF",
  },
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current;

    cards.forEach((card, i) => {
      const offsetY = i * 60; // spacing between stacked cards

      // initial position
      gsap.set(card, { y: offsetY });

      // scroll animation
      gsap.to(card, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center+=150",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="px-5 lg:px-10 py-20 grid grid-cols-1 xl:grid-cols-[minmax(300px,1fr)_minmax(400px,550px)] gap-10"
    >
      {/* Left Column - Sticky */}
      <div className="flex flex-col gap-5 mb-5 sticky top-[120px]">
        <h2 className="michroma text-left text-4xl lg:text-6xl font-medium text-white">
          Our Process
        </h2>
        <p className="text-left text-gray-300 text-lg mt-3 max-w-xl">
          <strong>From discovery to delivery. </strong> Every step of your brand
          journey is covered by a single person.
        </p>
      </div>

      {/* Right Column - GSAP Stacked Cards */}
      <div className="relative">
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => (cardsRef.current[index] = el)}
            style={{ backgroundColor: step.bgColor }}
            className={`sticky top-[120px] h-[50dvh] rounded-2xl overflow-hidden flex items-start justify-start p-10`}
          >
            <div className="text-left text-black">
              <h2 className="michroma text-3xl lg:text-5xl font-bold mb-10">
                {step.id}
              </h2>
              <h3 className="michroma text-3xl lg:text-5xl mb-10">
                {step.title}
              </h3>
              <p className="text-lg lg:text-xl font-light">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
