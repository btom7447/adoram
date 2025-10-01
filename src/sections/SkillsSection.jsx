"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const skills = [
    { name: "Figma", logo: "/images/skills/figma.png", percentage: 98 },
    { name: "Webflow", logo: "/images/skills/webflow.png", percentage: 86 },
    { name: "Framer", logo: "/images/skills/framer.png", percentage: 90 },
    { name: "Wordpress", logo: "/images/skills/wordpress.png", percentage: 95 },
    { name: "Canva", logo: "/images/skills/canva.png", percentage: 92 },
    { name: "Photoshop", logo: "/images/skills/photoshop.png", percentage: 75 },
];

export default function SkillsSection() {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="p-5 lg:p-10 bg-black">
        <h5
            className="mb-10 w-full text-center text-white text-lg font-medium"
            data-aos="fade-down"
        >
            Skills
        </h5>

        <div className="w-full max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, i) => {
                const isHovered = hovered === i;
                    return (
                        <div
                            key={i}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            className="group relative flex items-center justify-center p-10 cursor-pointer transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={i * 150} 
                            data-aos-duration="800"
                        >
                            {/* Circular Bouncing Icon */}
                            <motion.div
                                animate={
                                !isHovered
                                    ? {
                                        x: [0, 20, 40, 20, 0, -20, -40, -20, 0],
                                        y: [0, -20, 0, 20, 0, 20, 0, -20, 0],
                                    }
                                    : {}
                                }
                                transition={{
                                    duration: 6,
                                    repeat: isHovered ? 0 : Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute top-3 right-[50%] w-12 h-12"
                            >
                                <Image
                                    src={skill.logo}
                                    alt={skill.name}
                                    width={40}
                                    height={40}
                                    className={`transition-all duration-300 ${
                                        isHovered
                                        ? "filter-none"
                                        : "grayscale brightness-75 contrast-125"
                                    }`}
                                />
                            </motion.div>

                            {/* Skill Name */}
                            <p
                                className={`michroma text-2xl lg:text-4xl font-bold text-center transition-colors duration-300 ${
                                isHovered ? "text-highlight" : "text-gray-300"
                                }`}
                            >
                                {skill.name}
                            </p>

                            {/* Percentage */}
                            <p
                                className={`-mt-5 text-lg font-medium transition-colors duration-300 ${
                                    isHovered ? "text-highlight" : "text-gray-400"
                                }`}
                            >
                                {skill.percentage}%
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
