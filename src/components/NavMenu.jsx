"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ChevronRight, MenuIcon, Tally3 } from "lucide-react";

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

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const minimized = scrolled && !hovered;

    return (
        <nav
            className={clsx(
                "hidden lg:flex fixed bottom-10 z-50 left-1/2 -translate-x-1/2 items-center gap-0 px-3 py-3.5 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                "bg-gradient-to-tr from-gray-500/40 to-gray-400/30"
            )}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <ul className="michroma flex items-center gap-2 text-sm font-light text-white">
                {/* Show menu icon only when minimized */}
                {minimized && (
                    <li className="ml-2 ">
                        <Tally3 size={22} strokeWidth={1.5} />
                    </li>
                )}

                {links.map((link) => {
                    const isActive = pathname === link.href;
                    const isVisible = !minimized || isActive;

                    return (
                        <li
                            key={link.href}
                            className={clsx(
                                "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ",
                                isVisible
                                ? "opacity-100 scale-100 w-auto px-1"
                                : "opacity-0 scale-90 w-0 px-0"
                            )}
                        >
                            <Link
                                href={link.href}
                                className={clsx(
                                "px-3 py-2 rounded-full transition-all duration-300 font-light",
                                isActive && !minimized
                                    ? "bg-gradient-to-tr from-white/30 to-gray-400/40 text-white font-medium shadow-md"
                                    : isActive && minimized
                                    ? "font-medium text-white"
                                    : "cursor-pointer "
                                )}
                            >
                                {link.name}
                            </Link>
                        </li>
                    );
                })}

                {/* Hire Us always visible */}
                <li className="border-l border-highlight pl-2">
                    <Link
                        href="/hire"
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
