"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Gradient & Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DEF868]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#383BA6]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="space-y-12">
          {/* Top Tag */}
          <div className="flex items-center justify-start">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#181818] border border-white/10 text-white text-xs font-semibold uppercase tracking-wider shadow-inner">
              <span className="text-gray-300">Strategic</span>
              <span className="text-[#DEF868] text-base leading-none">★</span>
              <span className="text-[#DEF868]">branding</span>
            </div>
          </div>

          {/* Main Title & Description Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05]">
                Digital Mastery for{" "}
                <span className="text-[#DEF868] relative inline-block">
                  startups
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#DEF868]/20 rounded-full blur-sm" />
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 space-y-6 lg:pb-3">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                We design exceptional brands, products, web apps, mobile apps, and high-impact websites for innovative startups.
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#DEF868] text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#cbdf55] hover:shadow-[0_0_30px_rgba(222,248,104,0.4)] transition-all transform active:scale-95"
                >
                  <span>Start Exploring</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                {/* Floating Rotating Circle SVG Badge */}
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 p-2 flex items-center justify-center animate-spin [animation-duration:12s] shadow-lg">
                  <img
                    src="/images/Circle.svg"
                    alt="Creative badge"
                    className="w-full h-full object-contain filter invert"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase: Left 3 Info Boxes & Right Featured Graphic */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-8 items-stretch">
            {/* Left 3 Information Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {/* Box 1 - Wide Graphic Box */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#141414] group hover:border-[#DEF868]/40 transition-all duration-300 shadow-xl">
                <img
                  src="/images/Information-Box_1.jpg"
                  alt="Analytics showcase"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Box 2 & 3 side by side */}
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#141414] group hover:border-[#DEF868]/40 transition-all duration-300 shadow-xl">
                  <img
                    src="/images/Information-Box_2.jpg"
                    alt="Growth statistics"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#141414] group hover:border-[#DEF868]/40 transition-all duration-300 shadow-xl">
                  <img
                    src="/images/Information-Box_3.jpg"
                    alt="Conversion rates"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Main Hero Graphic */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#141414] to-[#0A0A0A] p-2 sm:p-6 flex items-center justify-center relative group shadow-2xl">
              <div className="absolute inset-0 bg-[#DEF868]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <img
                src="/images/Image.png"
                alt="Digital Agency Interface preview"
                className="w-full h-auto max-h-[540px] object-contain drop-shadow-2xl group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
