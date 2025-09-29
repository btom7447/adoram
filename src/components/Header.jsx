"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 5); // trigger after 5px scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`px-5 lg:px-10 py-5 w-full fixed top-0 left-0 z-30 flex items-center justify-between border-b border-white transition-colors duration-300 ${
                scrolled ? "bg-black" : "bg-transparent"
            }`}
        >
            <span className="allison text-3xl lg:text-5xl text-white">
                Adoram Tom
            </span>

            <div className="flex items-center gap-2">
                <Image
                src={"/icons/green-icon.png"}
                alt="location icon"
                width={20}
                height={20}
                />
                <h6 className="text-white text-sm lg:text-base">Uyo, Nigeria</h6>
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-white"
            >
                {isOpen ? <X size={25} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>

            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    );
}
