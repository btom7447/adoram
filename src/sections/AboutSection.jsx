"use client";

import Image from "next/image";
import CustomButton from "@/components/CustomButton";

export default function AboutSection() {
    return (
        <section
            className="relative h-[100dvh] lg:h-[90dvh] bg-white pb-0 pt-5 px-5 lg:px-10 overflow-hidden flex items-start lg:items-end justify-end"
            aria-label="About section with mockup"
        >
            <h5 className="w-full text-center text-black text-xl font-medium absolute top-10 ">About Me</h5>
            {/* Background images (absolute layer) */}
            <div className="mt-40 lg:mt-0 absolute inset-0 z-0 pointer-events-none">
                {/* Mobile: full cover */}
                <div className="block lg:hidden ">
                    <Image
                        src="/images/mockup-model-mobile.png"
                        alt="App mockup (mobile)"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Desktop: contained, anchored to bottom-right and sized ~half height */}
                <div className="hidden lg:flex absolute inset-0 justify-end items-end pr-10">
                    <div className="relative flex w-full h-full">
                        <Image
                            src="/images/mockup-model-desktop.png"
                            alt="App mockup (desktop)"
                            fill
                            className="object-contain object-center-bottom"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Foreground content */}
            <div className="relative z-10 max-w-lg mb-20 flex flex-col items-end justify-end">
                <h5 className="mb-6 text-black text-lg font-medium leading-relaxed">
                    "Give me an idea, a blank screen, and a reason – and I'll craft
                    something humans will enjoy using."
                </h5>

                <CustomButton variant="black" href={"/projects"}>
                    Let's talk
                </CustomButton>
            </div>
        </section>
    );
}
