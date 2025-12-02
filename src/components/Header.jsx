"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isHirePage = pathname === "/hire-us";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`px-5 lg:px-10 py-5 w-full fixed top-0 left-0 z-30 flex items-center justify-between transition-colors duration-300
      ${
        isHirePage
          ? "bg-white border-b border-black"
          : scrolled
          ? "bg-black border-b border-white"
          : "bg-transparent border-b border-white"
      }
      `}
    >
      <span
        className={`allison text-3xl lg:text-5xl ${
          isHirePage ? "text-black" : "text-white"
        }`}
      >
        Adoram Tom
      </span>

      <div className="flex items-center gap-2">
        <Image
          src={"/icons/green-icon.png"}
          alt="location icon"
          width={20}
          height={20}
        />
        <h6
          className={`text-sm lg:text-base ${
            isHirePage ? "text-black" : "text-white"
          }`}
        >
          Uyo, Nigeria
        </h6>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden ${isHirePage ? "text-black" : "text-white"}`}
      >
        {isOpen ? (
          <X size={25} strokeWidth={1} />
        ) : (
          <Menu size={24} strokeWidth={1} />
        )}
      </button>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
