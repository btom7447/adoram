"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutMeSection from "@/sections/AboutMeSection";
import Metrics from "@/components/Metrics";
import FAQSection from "@/sections/FAQSection";
import SkillsSection from "@/sections/SkillsSection";
import AboutProjectSection from "@/sections/AboutProjectSection";

export default function AboutPage() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <>
        <AboutMeSection />
        <Metrics />
        <AboutProjectSection />
        <SkillsSection />
        <FAQSection />
    </>
  );
}
