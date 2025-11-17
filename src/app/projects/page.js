"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectListSection from "@/sections/ProjectListSection";
import FAQSection from "@/sections/FAQSection";
import ContactSection from "@/sections/ContactSection";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("❌ Failed to fetch projects:", error);
      }
    }
    fetchProjects();
  }, []);

  return (
    <>
      <ProjectListSection projects={projects} />
      <FAQSection />
      <ContactSection />
    </>
  );
}
