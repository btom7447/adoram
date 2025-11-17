"use client";

import Metrics from "@/components/Metrics";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function TestimonialSection({ service }) {

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="w-full">
        {service === true ? null : <Metrics />}
      </div>
      <TestimonialCarousel />
    </section>
  );
}
