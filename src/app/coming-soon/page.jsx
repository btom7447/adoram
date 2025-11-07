"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation"; // ✅ import useRouter
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { ReactTyped } from "react-typed";

export default function ComingSoon() {
  const router = useRouter(); // ✅ initialize router
  const pathname = usePathname();
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setStartTyping(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="fixed top-0 left-0 h-screen w-screen z-[5000] flex flex-col items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/coming-soon.png"
        alt="Coming Soon Background"
        fill
        className="object-cover object-center -z-10"
        priority
        unoptimized
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

      {/* Header */}
      <header className="absolute top-5 left-0 w-full flex items-center justify-between px-10">
        <span className="allison text-sm lg:text-3xl text-white">
          Adoram Tom
        </span>
        <ul className="flex gap-5 text-lg font-light">
          {[
            { label: "Coming Soon", href: "/coming-soon" },
            { label: "Notify Me", href: "/coming-soon/notify" },
          ].map(({ label, href }) => (
            <li key={label}>
              <button
                onClick={() => router.push(href)}
                className={`relative text-sm lg:text-xl pb-1 transition-colors duration-300 cursor-pointer
            ${
              pathname === href
                ? "text-white after:w-full"
                : "text-gray-300 hover:text-white after:w-0 hover:after:w-full"
            }
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-white 
            after:transition-[width] after:duration-500`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </header>

      {/* Content */}
      <div className="relative z-10 px-6 w-full">
        {/* Text content */}
        <div className="flex flex-col items-center justify-center mt-24">
          <h5
            data-aos="fade-down"
            className="w-full max-w-xl text-right text-sm lg:text-xl text-white"
          >
            {startTyping && (
              <ReactTyped
                strings={[`👋🏼 Hi, I’m Adoram Tom, My Portfolio Website is`]}
                typeSpeed={40}
                backSpeed={40}
                backDelay={1000}
                loop
              />
            )}
          </h5>

          <h1
            data-aos="fade-down"
            className="michroma my-5 text-center text-7xl lg:text-9xl font-light text-white"
          >
            Coming <br /> Soon
          </h1>

          <Link
            href="/notify"
            data-aos="fade-up"
            className="mt-4 px-10 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition font-medium"
          >
            Notify Me
          </Link>
        </div>
      </div>
    </section>
  );
}
