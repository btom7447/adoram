"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

const logos = [
    { src: "/images/brands/kmini-tech.png", alt: "Kmini Tech" },
    { src: "/images/brands/wephco.png", alt: "Wephco" },
    { src: "/images/brands/amara.png", alt: "Amara" },
    { src: "/images/brands/pink-aquashells.png", alt: "Pink Aquashell" },
    { src: "/images/brands/abkon.png", alt: "Abkon" },
    { src: "/images/brands/wephco.png", alt: "Wephco" },
];

export default function BrandLogoSection() {
    return (
        <section className="py-10 bg-white border-t border-gray-300">
            <div className="w-full">
                <Splide
                    options={{
                        type: "loop",
                        perPage: 5,
                        perMove: 1,
                        autoplay: true,
                        interval: 2500,
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        arrows: false,
                        pagination: false,
                        gap: "2rem",
                        breakpoints: {
                            1024: { perPage: 3 },
                            640: { perPage: 2 },
                        },
                    }}
                aria-label="Brand logos carousel"
                >
                    {logos.map((logo, index) => (
                        <SplideSlide
                            key={index}
                            className="flex items-center justify-center"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={70}
                                height={70}
                                className="object-contain"
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </section>
    );
}
