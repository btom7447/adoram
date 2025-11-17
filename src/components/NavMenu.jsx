"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ChevronRight, Tally3 } from "lucide-react";
import gsap from "gsap";

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
];

export default function NavMenu() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const navRef = useRef(null);
  const pillRef = useRef(null);
  const linksRef = useRef([]);

  const getActiveIndex = () => {
    return links.findIndex((link) => {
      if (link.href === "/projects") {
        // Any route under /projects should highlight Projects
        return pathname.startsWith("/projects");
      }
      return pathname === link.href;
    });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const minimized = scrolled && !hovered;

  // Animate pill position when active link changes
  useEffect(() => {
    if (!pillRef.current || !linksRef.current.length) return;

    const activeIndex = getActiveIndex();
    const activeLinkEl = linksRef.current[activeIndex];
    if (!activeLinkEl) return;

    const { offsetLeft, offsetWidth } = activeLinkEl;

    gsap.to(pillRef.current, {
      x: offsetLeft,
      width: offsetWidth,
      duration: 0.5,
      ease: "power3.out",
    });
  }, [pathname, minimized]);


  return (
    <nav
      ref={navRef}
      className={clsx(
        "hidden lg:flex fixed bottom-10 z-50 left-1/2 -translate-x-1/2 items-center gap-0 px-3 py-3.5 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "bg-gradient-to-tr from-gray-500/40 to-gray-400/30"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ul className="relative flex items-center gap-2 text-sm font-light text-white michroma">
        {/* Pill indicator */}
        {!minimized && (
          <span
            ref={pillRef}
            className="absolute top-1/12 -translate-y-1/3 h-8 rounded-full bg-white/20 pointer-events-none shadow-md"
          />
        )}

        {/* Main links */}
        {links.map((link, index) => {
          const isActive =
            link.href === "/projects"
              ? pathname.startsWith("/projects")
              : pathname === link.href;

          const isVisible = !minimized || isActive;

          return (
            <li
              key={link.href}
              ref={(el) => (linksRef.current[index] = el)}
              className={clsx(
                "relative z-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isVisible
                  ? "opacity-100 scale-100 w-auto px-1"
                  : "opacity-0 scale-90 w-0 px-0"
              )}
            >
              <Link
                href={link.href}
                className={clsx(
                  "px-3 py-2 rounded-full transition-all duration-300 font-light relative z-10",
                  isActive && !minimized
                    ? "text-white font-medium"
                    : "cursor-pointer"
                )}
              >
                {link.name}
              </Link>
            </li>
          );
        })}

        {/* Divider + Hire Us */}
        <li className="border-l border-highlight pl-2 z-10 flex items-center gap-1">
          <Link
            href="/hire-us"
            className="min-w-32 flex items-center gap-1 px-4 py-1 font-light rounded-full text-highlight hover:font-medium transition-all duration-300"
          >
            Hire Us
            <ChevronRight size={20} strokeWidth={1} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
