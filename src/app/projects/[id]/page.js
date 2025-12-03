"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useParams } from "next/navigation";
import { MoonLoader } from "react-spinners";
import ProjectHeader from "@/components/ProjectHeader";
import Image from "next/image";
import ProjectBrief from "@/components/ProjectBrief";
import ProjectSolution from "@/components/ProjectSolution";
import ProjectBrandTalk from "@/components/ProjectBrandTalk";
import PictureCollage from "@/components/PictureCollage";
import ProjectSection from "@/sections/ProjectSection";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
      AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
    }, []);

  useEffect(() => {
    if (!id) return;

    async function fetchProject() {
      try {
        const res = await fetch(`/api/projects/${id}`);
        if (!res.ok) {
          console.error("Project not found");
          setProject(null);
          return;
        }
        const data = await res.json();
        setProject(data);
      } catch (err) {
        console.error("Error fetching project:", err);
        setProject(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full py-50">
        <MoonLoader color="#4254D0" size={40} />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="p-10 text-center text-gray-500">Project not found.</div>
    );
  }

  return (
    <section className="relative min-h-screen pt-30 px-5 lg:px-10 py-20">
      {/* Background */}
      <Image
        src="/images/gradient-bg.png"
        alt="Projects background"
        fill
        priority
        className="object-cover object-center fixed -z-10"
      />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md -z-10" />

      <ProjectHeader project={project} />
      <hr className="my-20 w-full h-0 bg-white border-t-1" />
      <ProjectBrief project={project} />
      <hr className="my-20 w-full h-0 bg-white border-t-1" />
      <ProjectSolution project={project} />
      <PictureCollage image={project.picture_collage} />
      <ProjectBrandTalk project={project} />
    </section>
  );
}
