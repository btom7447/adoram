"use client";

import Metrics from "@/components/Metrics";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function TestimonialSection() {

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-black">
        <Metrics />
        <TestimonialCarousel />
    </section>
  );
}
