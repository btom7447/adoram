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
                        "linear-gradient(125deg, rgba(255,255,255,0.9), rgba(153,153,153,0.6))",
                    }}
                >
                    <ul className="space-y-6 text-center text-xl text-black">
                        <li className="cursor-pointer hover:text-green-500">Home</li>
                        <li className="cursor-pointer hover:text-green-500">About</li>
                        <li className="cursor-pointer hover:text-green-500">Services</li>
                        <li className="cursor-pointer hover:text-green-500">Contact</li>
                    </ul>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="mt-10 px-9 py-3 rounded-full border border-black bg-transparent text-black font-semibold flex items-center gap-3 hover:bg-white/40 transition"
                    >
                        <X size={20} strokeWidth={2} />
                        Close
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
