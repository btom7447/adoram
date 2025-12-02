"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PictureCollageGrid({ image }) {
  const containerRef = useRef(null);
  const tileRefs = useRef([]);

  useEffect(() => {
    if (!image) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      tileRefs.current,
      { opacity: 0, y: 40, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, [image]);

  if (!image) return null;

  return (
    <section ref={containerRef} className="my-16 w-full max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Top Wide Image */}
        <div
          ref={(el) => (tileRefs.current[0] = el)}
          className="col-span-2 h-72 md:h-96 rounded-3xl bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center 20%",
          }}
        />

        {/* Bottom Left */}
        <div
          ref={(el) => (tileRefs.current[1] = el)}
          className="h-64 md:h-80 rounded-3xl bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "20% 60%",
          }}
        />

        {/* Bottom Right */}
        <div
          ref={(el) => (tileRefs.current[2] = el)}
          className="h-64 md:h-80 rounded-3xl bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "80% 60%",
          }}
        />
      </div>
    </section>
  );
}
