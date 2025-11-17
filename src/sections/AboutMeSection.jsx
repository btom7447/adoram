"use client"

import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";

export default function AboutMeSection() {
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        // match your AOS duration + delay (e.g., 1000ms for fade + 200ms offset)
        const timer = setTimeout(() => setStartTyping(true), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
      <section
        className="pt-30 pb-10 lg:pb-30 relative h-full lg:h-[120dvh] overflow-hidden px-5 lg:px-10 w-full bg-cover bg-center bg-fixed grid gap-20 grid-cols-1 lg:grid-cols-2"
        style={{ backgroundImage: "url('/images/gradient-bg.png')" }}
        aria-labelledby="about-me-background"
      >
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
        <div className="flex flex-col items-center justify-start gap-5 z-10">
          <h1
            data-aos="fade-right"
            className="michroma my-5 lg:my-15 text-left text-6xl lg:text-8xl font-medium text-white"
          >
            <span className="text-highlight">Adoram</span> <br /> Tom
          </h1>
          <div className="flex items-end gap-10">
            <div>
              <Image
                src={"/images/about-image.png"}
                alt="A 3D model of a face"
                width={50}
                height={80}
                className="w-60 lg:w-120 object-contain "
                unoptimized
                data-aos="zoom-in"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <a
                data-aos="fade-right"
                data-aos-delay="200"
                href="http://linkedin.com/in/adoram-tom7447"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit rounded-full p-3 border border-white hover:bg-highlight"
              >
                <Image
                  src={"/icons/linkedin-icon.png"}
                  alt="linkedin icon"
                  width={20}
                  height={20}
                />
              </a>
              <a
                data-aos="fade-right"
                data-aos-delay="300"
                href="https://www.instagram.com/tom.adoram?igsh=MTFxZzZidTF1dXRjaA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit rounded-full p-3 border border-white hover:bg-highlight"
              >
                <Image
                  src={"/icons/instagram-icon.png"}
                  alt="instagram icon"
                  width={20}
                  height={20}
                />
              </a>
              <a
                data-aos="fade-right"
                data-aos-delay="400"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit rounded-full p-3 border border-white hover:bg-highlight"
              >
                <Image
                  src={"/icons/whatsapp-icon.png"}
                  alt="whatsapp icon"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center z-10">
          <div className="w-full lg:min-w-xl max-w-3xl mb-15 lg:mb-0">
            <p
              className="text-lg lg:text-xl mb-10 leading-10"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Hello 👋🏼 I am a medical student and UI/UX designer passionate
              about creating meaningful digital experiences. Like an artist
              working on a canvas, I find joy in bringing ideas to life and
              crafting solutions that are both functional and visually engaging.
              My dream is to bridge the gap between technology and health, using
              design to improve lives in innovative ways.
            </p>
            <p
              className="text-lg lg:text-xl mb-10 leading-10"
              data-aos="fade-left"
              data-aos-delay="250"
            >
              I have sharpened my skills through collaborations with developers
              on websites and apps, as well as a free internship experience that
              fuelled my growth. I thrive on using every tool available
              efficiently to solve problems and push creative boundaries.
            </p>
            <p
              className="text-lg lg:text-xl mb-10 leading-10"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              Beyond academics and design, I find inspiration in anime, which
              sparks my imagination, and music, which serves as therapy and
              keeps me balanced. These influences remind me to stay creative,
              grounded, and always open to new perspectives.
            </p>
          </div>
        </div>
      </section>
    );
}