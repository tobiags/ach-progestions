"use client";

import React from "react";

const brands = [
  { name: "Brand 1", src: "/images/brand-1.png" },
  { name: "Brand 2", src: "/images/brand-2-hover.png" },
  { name: "Brand 3", src: "/images/brand-3.png" },
  { name: "Brand 4", src: "/images/brand-4.png" },
  { name: "Brand 5", src: "/images/brand-5.png" },
];

export function BrandsMarquee() {
  return (
    <section className="py-12 bg-[#090909] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
          Trusted by high-growth startups & innovative global enterprises
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#090909] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#090909] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-16 sm:gap-24 py-4">
          {[...brands, ...brands, ...brands, ...brands].map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
            >
              <img
                src={brand.src}
                alt={brand.name}
                className="h-7 sm:h-8 w-auto object-contain filter brightness-125"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
