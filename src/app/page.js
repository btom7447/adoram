"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,  
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  )
}