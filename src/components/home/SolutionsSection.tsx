"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Search, Mail, Code, Share2 } from "lucide-react";

const solutions = [
  {
    id: "seo",
    title: "Search Engine Optimization",
    description:
      "Unlock the power of SEO with our expert strategies. In the ever-evolving digital landscape, rank on top for high-intent buyer searches.",
    image: "/images/Content.png",
    overlay: "/images/Overlay.png",
    icon: Search,
    tags: ["Technical SEO", "Keywords", "Link Building"],
  },
  {
    id: "email",
    title: "Email Marketing",
    description:
      "Our email marketing solutions are designed to engage, nurture, and convert your audience effectively with automated retention funnels.",
    image: "/images/Content-1.png",
    overlay: "/images/Overlay.png",
    icon: Mail,
    tags: ["Drip Sequences", "Segmentation", "High CTR"],
  },
  {
    id: "web-dev",
    title: "Website Development",
    description:
      "Ultra-fast, responsive, and conversion-optimized websites engineered with modern Next.js architecture and cutting-edge visual design.",
    image: "/images/Content-2.png",
    overlay: null,
    icon: Code,
    tags: ["Next.js", "React 19", "E-Commerce"],
  },
  {
    id: "social-ads",
    title: "Social Media Advertisement",
    description:
      "Our social media advertising services connect you with your precise target audience to drive scalable customer acquisition.",
    image: "/images/Content-3.png",
    overlay: null,
    icon: Share2,
    tags: ["Meta Ads", "TikTok", "Creative Scaling"],
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-28 bg-[#0C0C0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DEF868]/10 border border-[#DEF868]/20 text-[#DEF868] text-xs font-semibold uppercase tracking-wider">
              <span>Core Capabilities</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Our eCommerce marketing{" "}
              <span className="text-[#DEF868]">solutions</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base max-w-md">
            We design exceptional brands, products, web apps, mobile apps, and websites for startups ready to dominate their category.
          </p>
        </div>

        {/* 4 Large Interactive Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#141414] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between group hover:border-[#DEF868]/40 hover:bg-[#181818] transition-all duration-300 relative overflow-hidden shadow-xl"
              >
                {/* Subtle Neon Hover Corner Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#DEF868]/5 rounded-bl-full pointer-events-none group-hover:bg-[#DEF868]/10 transition-all duration-500" />

                <div className="space-y-6 relative z-10">
                  {/* Top Row: Icon + Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#DEF868] group-hover:bg-[#DEF868] group-hover:text-black transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-gray-600 font-mono text-sm font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#DEF868] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs text-gray-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual Graphic with Overlays */}
                <div className="mt-8 pt-6 border-t border-white/5 relative rounded-2xl overflow-hidden bg-black/40 p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-contain rounded-xl group-hover:scale-102 transition-transform duration-500"
                  />
                  {item.overlay && (
                    <img
                      src={item.overlay}
                      alt=""
                      className="absolute bottom-2 left-2 right-2 max-w-full h-auto pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                </div>

                {/* Bottom Action Link */}
                <div className="mt-6 pt-4 flex items-center justify-between">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#DEF868] transition-colors"
                  >
                    <span>Request Details</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
