"use client";

import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MoonLoader } from "react-spinners";

export default function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch("/api/testimonial");
        const data = await res.json();
        setTestimonials(data.data || data);
      } catch (error) {
        console.error("❌ Failed to fetch testimonials:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="bg-black py-30 flex items-center justify-center">
        <MoonLoader color="#4254D0" size={40} />
      </div>
    );
  }

  console.log("Testimonial Data", testimonials)

  if (!testimonials.length) {
    return (
      <div className="bg-black py-30 flex items-center justify-center">
        <p className="text-gray-300 text-xl text-center">
          No testimonials available yet.
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full py-20 flex flex-col items-center justify-center overflow-hidden">
        {/* 🎥 Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        >
          <source src="/video/testimonial-bg.mp4" type="video/mp4" />
        </video>

        {/* Splide Carousel */}
        <div className="relative z-10 w-full">
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              focus: "center",
              arrows: false,
              pagination: false,
              gap: "1rem",
              autoplay: true,
              interval: 5000,
              breakpoints: {
                1024: { perPage: 1 },
              },
            }}
            className="relative z-10 w-full flex items-center justify-center"
            onMove={(_, newIndex) => setActiveIndex(newIndex)}
            rendercontrols={() => (
              <div className="absolute inset-0 flex justify-around items-center px-6 z-20">
                <button className="splide__arrow splide__arrow--prev bg-white/10 text-white backdrop-blur-xl rounded-full p-2 hover:bg-white/20 transition">
                  <ChevronLeft size={20} strokeWidth={1} />
                </button>
                <button className="splide__arrow splide__arrow--next bg-white/10 text-white backdrop-blur-xl rounded-full p-2 hover:bg-white/20 transition">
                  <ChevronRight size={20} strokeWidth={1} />
                </button>
              </div>
            )}
          >
            {testimonials.map((t, index) => (
              <SplideSlide key={t._id || index}>
                <div
                  className={`transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center mx-auto max-w-xl h-80 rounded-3xl p-5 border border-white/20 ${
                    index === activeIndex
                      ? "bg-white/5  text-white shadow-2xl scale-100 opacity-100 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      : "bg-gradient-to-tr from-gray-300/40 to-black backdrop-blur-md scale-50 opacity-50 text-transparent"
                  }`}
                >
                  <p className="mb-10 leading-relaxed text-xl">
                    “{t.testiomony || "No testimony provided"}”
                  </p>
                  <h3 className="text-lg font-semibold mb-5">
                    {t.client_name}
                  </h3>
                  <p
                    className={` text-lg ${
                      index === activeIndex
                        ? "text-highlight"
                        : "text-transparent"
                    }`}
                  >
                    {t.client_title}
                  </p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
    </div>
  );
}
