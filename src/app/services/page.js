"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesListsSection from "@/sections/ServicesListSection";
import TestimonialSection from "@/sections/TestimonialSection";
import BrandLogoSection from "@/sections/BrandLogoSection";
import FAQSection from "@/sections/FAQSection";
import ProcessSection from "@/sections/ProcessSection";

export default function ServicesPage() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <>
        <ServicesListsSection />
        <ProcessSection />
        <TestimonialSection service={true} />
        <BrandLogoSection />
        <FAQSection />
    </>
  );
}
