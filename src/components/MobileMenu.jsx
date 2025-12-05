"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenu({ isOpen, setIsOpen }) {
    const pathname = usePathname();

        const isActive = (href) => {
            return pathname === href || pathname.startsWith(href + "/");
        };

        const navItems = [
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Projects", href: "/projects" },
            { label: "Hire Us", href: "/hire-us" },
        ];

        return (
            <AnimatePresence>
            {isOpen && (
                <motion.div
                key="mobileMenu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed inset-0 z-[5000] flex flex-col items-center justify-center backdrop-blur-sm"
                style={{
                    background:
                    "linear-gradient(125deg, rgba(0,0,0,0.8), rgba(50,50,50,0.8))",
                }}
                >
                <ul className="space-y-6 text-center text-xl text-white">
                    {navItems.map((item) => (
                    <li key={item.href}>
                        <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`cursor-pointer transition ${
                            isActive(item.href)
                            ? "text-highlight border-b-2 border-highlight"
                            : "hover:text-highlight"
                        }`}
                        >
                        {item.label}
                        </Link>
                    </li>
                    ))}
                </ul>

                <button
                    onClick={() => setIsOpen(false)}
                    className="mt-10 px-9 py-3 rounded-full border border-white bg-transparent text-white font-semibold flex items-center gap-3 hover:bg-white/40 transition"
                >
                    <X size={20} strokeWidth={2} />
                    Close
                </button>
                </motion.div>
            )}
            </AnimatePresence>
        );
}
