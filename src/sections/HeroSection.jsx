"use client"

import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";

export default function HeroSection() {
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        // match your AOS duration + delay (e.g., 1000ms for fade + 200ms offset)
        const timer = setTimeout(() => setStartTyping(true), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
      <section
        className="pt-30 pb-10 lg:pb-30 relative h-full lg:h-[110dvh] overflow-hidden px-5 lg:px-10 w-full bg-cover bg-center bg-fixed grid grid-cols-1 lg:grid-cols-3"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        aria-labelledby="hero-section-background"
      >
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
        <div className="col-span-2 flex flex-col items-center justify-center z-10">
          <div className="w-full lg:min-w-xl max-w-3xl mb-15 lg:mb-0">
            <h5
              data-aos="fade-down"
              className="text-xl text-gray-400 font-light"
            >
              Hello,{" "}
              <span data-aos-delay="200" className="text-white font-medium">
                My name{" "}
              </span>{" "}
              is
            </h5>
            <h1
              data-aos="fade-left"
              className="michroma my-5 lg:my-15 text-left lg:text-right text-6xl lg:text-8xl font-medium text-white"
            >
              <span className="text-highlight">Adoram</span> <br /> Tom
            </h1>
            <h5
              data-aos="fade-up"
              className="w-full max-w-xl h-25 justify-self-end text-right text-xl text-gray-400"
            >
              {startTyping && (
                <ReactTyped
                  strings={[
                    `A <span class="text-white font-medium">Medical student</span> by day and a <span class="text-white font-medium">UI/UX designer</span> by night I create <span class="text-white font-medium">clean, simple</span> and conversion-focused design Offering <span class="text-white font-medium">budget-friendly prices</span> for quality work`,
                  ]}
                  typeSpeed={40}
                  backSpeed={40}
                  backDelay={1000}
                  loop
                />
              )}
            </h5>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-5 z-10">
          <div className="flex items-end lg:items-center gap-10">
            <div>
              <Image
                src={"/images/model.png"}
                alt="A 3D model of a face"
                width={50}
                height={80}
                className="w-60 lg:w-80 object-contain "
                unoptimized
                data-aos="zoom-in"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <a
                data-aos="fade-left"
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
                data-aos="fade-left"
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
                data-aos="fade-left"
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
          <CustomButton variant="white" href={"/projects"}>
            View my works
          </CustomButton>
        </div>
      </section>
    );
}