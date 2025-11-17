"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function MobileMenu({ isOpen, setIsOpen }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="mobileMenu"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-sm"
                    style={{
                        background:
                        "linear-gradient(125deg, rgba(255,255,255,0.3), rgba(153,153,153,0.3))",
                    }}
                >
                    <ul className="space-y-6 text-center text-xl text-white">
                        <li className="cursor-pointer hover:text-highlight">Home</li>
                        <li className="cursor-pointer hover:text-highlight">About</li>
                        <li className="cursor-pointer hover:text-highlight">Services</li>
                        <li className="cursor-pointer hover:text-highlight">Contact</li>
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
