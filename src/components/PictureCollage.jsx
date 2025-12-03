"use client";

import Image from "next/image";

export default function PictureCollageGrid({ image = [] }) {
  if (!image.length) return null;

  return (
    <section className="my-16 w-full max-w-5xl mx-auto px-4">
      <div
        className="relative w-full max-w-3xl mx-auto 
                      h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] 
                      rounded-3xl overflow-hidden"
      >
        <Image
          src={image[0]}
          alt="Project image"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
