"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PictureCollage({ images }) {
  const containerRef = useRef(null);
  const tileRefs = useRef([]);

  useEffect(() => {
    if (!images || images.length === 0) return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      tileRefs.current,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, [images]);

  if (!images || images.length === 0) return null;

  const baseImage = images[0];

  return (
    <section ref={containerRef} className="my-10 w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-2 gap-3 rounded-4xl overflow-hidden">
        {/* FIRST BIG TILE */}
        <div
          ref={(el) => (tileRefs.current[0] = el)}
          className="relative col-span-2 h-64 sm:h-72 md:h-80 rounded-4xl"
          style={{
            backgroundImage: `url(${baseImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* REMAINING TILES */}
        {images.slice(1).map((img, i) => (
          <div
            key={i + 1}
            ref={(el) => (tileRefs.current[i + 1] = el)}
            className="relative h-64 sm:h-72 md:h-80 rounded-4xl"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>
    </section>
  );
}
