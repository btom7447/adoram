"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Africa/Lagos", // WAT zone
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false, // 24-hour format
      };
      const currentTime = new Intl.DateTimeFormat("en-GB", options).format(
        new Date()
      );
      setTime(currentTime);
    };

    updateTime(); // set immediately
    const interval = setInterval(updateTime, 1000); // update every second
    return () => clearInterval(interval);
  }, []);

    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-20 pb-30">
      <div className="px-5 lg:px-20 xl:px-30 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <div>
          <h6 className="font-semibold text-xl mb-5 text-gray-600">Menu</h6>
          <nav className="flex flex-col space-y-3 text-white text-lg">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/hire-us">Hire Us</Link>
          </nav>
        </div>

        <div>
          <h6 className="font-semibold text-xl mb-5 text-gray-600">Socials</h6>
          <nav className="flex flex-col space-y-3 text-white text-lg">
            <a
              href="http://linkedin.com/in/adoram-tom7447"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/tom.adoram?igsh=MTFxZzZidTF1dXRjaA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/1ATngsCixz/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>
          </nav>
        </div>

        <div>
          <h6 className="font-semibold text-xl mb-5 text-gray-600">
            Local Time
          </h6>
          <p className="text-white text-lg">
            {time} <span className="text-gray-400 text-sm">WAT</span>
          </p>
        </div>
        <div className="">
          <h5 className="michroma text-5xl text-white">Lets Connect</h5>
          <a
            href="adoramjohntom1234@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
      <div className="border-b border-gray-600 mt-10 pb-5 px-5 lg:px-20 xl:px-30 flex flex-col lg:flex-row gap-5 lg:gap-10 items-center justify-center lg:justify-between">
        <p>&copy; adoram {currentYear}</p>
        <span className="allison text-white text-6xl lg:text-9xl nowrap">
          Adoram Tom
        </span>
      </div>
      <a
        href="https://kmini-tech.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-5 text-center text-highlight mx-auto text-sm lg:text-lg font-light"
      >
        By Kmini Technologies
      </a>
    </footer>
  );
}
