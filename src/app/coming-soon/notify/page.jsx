"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation"; // ✅ import useRouter
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

export default function NotifyMe() {
  const router = useRouter(); // ✅ initialize router
  const pathname = usePathname();
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="pt-30 fixed top-0 left-0 h-screen w-screen z-[5000] flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/coming-soon.png"
        alt="Notify Me Background"
        fill
        className="object-cover object-center -z-10"
        priority
        unoptimized
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 backdrop-blur-[1px]" />

      {/* ✅ Fixed Header */}
      <header className="fixed top-0 left-0 w-full py-5 flex items-center justify-between z-[5100] bg-transparent px-10">
        <span className="allison text-3xl text-black">Adoram Tom</span>
        <ul className="flex gap-5 text-lg font-light">
          {[
            { label: "Coming Soon", href: "/coming-soon" },
            { label: "Notify Me", href: "/coming-soon/notify" },
          ].map(({ label, href }) => (
            <li key={label}>
              <button
                onClick={() => router.push(href)}
                className={`relative michroma text-sm lg:text-xl pb-1 transition-colors duration-300 cursor-pointer
            ${
              pathname === href
                ? "text-highlight after:w-full"
                : "text-black hover:text-highlight after:w-0 hover:after:w-full"
            }
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-highlight 
            after:transition-[width] after:duration-500`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </header>

      {/* Content */}
      <div className="h-screen lg:h-fit overflow-y-auto overflow-x-hidden w-full flex flex-col justify-center gap-20">
        {/* Captions */}
        <div className="z-50 w-full flex flex-col gap-10 xl:flex-row justify-between px-10 text-lg md:text-2xl font-light">
          <div className="flex flex-col justify-start items-start">
            <p data-aos="fade-right" className="text-xl text-black mb-10">
              My Portfolio Website -
            </p>
            <h2
              data-aos="fade-right"
              data-aos-delay="200"
              className="michroma text-left text-3xl lg:text-7xl font-light text-highlight mb-5"
            >
              COMING SOON
            </h2>
            <h3
              data-aos="fade-right"
              data-aos-delay="300"
              className="michroma text-left text-2xl lg:text-6xl font-light text-highlight"
            >
              Stay tuned!!!
            </h3>
          </div>
          <p
            data-aos="fade-left"
            className="mt-10 lg:mt-0 max-w-2xl text-right text-black"
          >
            My portfolio is currently under construction. I’m curating my best
            case studies, including projects in health-tech, product design, and
            user experience research. <br /> Stay tuned — great things are
            coming soon.
          </p>
        </div>

        {/* Centered Form (now posts to Formspree) */}
        <form
          data-aos="zoom-in"
          action="https://formspree.io/f/xeovjqlp"
          method="POST"
          className="m-auto relative z-10 w-full max-w-lg flex flex-col items-center gap-4 px-6"
        >
          <span className="text-black text-lg mb-10">
            Sign up to be the first to know when we launch
          </span>

          <input
            type="email"
            name="email"
            placeholder="Enter your email here"
            required
            className="w-full mb-5 flex-1 p-5 text-xl text-black outline-none border-b border-black text-center bg-transparent placeholder-gray-700"
          />

          <button
            type="submit"
            className="michroma px-12 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-700 transition cursor-pointer"
          >
            Notify Me
          </button>
        </form>
      </div>
    </section>
  );
}
