"use client";

import Marquee from "react-fast-marquee";

export default function MarqueeText({ text }) {
    return (
        <div className="absolute inset-0 flex items-center justify-center z-0 opacity-20 pointer-events-none">
            <Marquee gradient={false} speed={80} pauseOnHover={false}>
                <span className="text-[10rem] lg:text-[15rem] font-light text-highlight mr-20">
                    {text}
                </span>
                <span className="text-[10rem] lg:text-[15rem] font-light text-highlight mr-20">
                    {text}
                </span>
                <span className="text-[10rem] lg:text-[15rem] font-light text-highlight mr-20">
                    {text}
                </span>
            </Marquee>
        </div>
    );
}