"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Compass, Layers, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Planning, Strategy",
    description:
      "We strongly believe in the power of deep discovery, competitor auditing, and strategic blueprinting to position your brand for explosive growth.",
    icon: Compass,
    details: ["Market Research", "Funnel Architecture", "User Personas"],
  },
  {
    number: "02",
    title: "Design Stage",
    description:
      "Transforming strategy into breathtaking visual systems, high-converting prototypes, and seamless user experiences engineered to captivate.",
    icon: Layers,
    details: ["UI/UX Prototyping", "Design Systems", "Motion & Interactions"],
  },
  {
    number: "03",
    title: "Launch & Scale",
    description:
      "Deploying lightning-fast Next.js architecture, executing high-ROI paid media, and optimizing conversion rates through rigorous A/B testing.",
    icon: Rocket,
    details: ["Performance Engineering", "Analytics Setup", "Growth Scaling"],
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-[#080808] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DEF868]/10 border border-[#DEF868]/20 text-[#DEF868] text-xs font-semibold uppercase tracking-wider">
              <span>Our Proven Workflow</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Structured for <span className="text-[#DEF868]">predictable</span> success
            </h2>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#DEF868] text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#cbdf55] transition-all"
          >
            <span>Let&apos;s Start A Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#121212] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 group hover:border-[#DEF868]/40 hover:bg-[#161616] transition-all duration-300 relative flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-black text-white/20 font-mono group-hover:text-[#DEF868] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#DEF868] group-hover:bg-[#DEF868] group-hover:text-black transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#DEF868] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Details Pills */}
                <div className="pt-6 border-t border-white/5 space-y-2">
                  {step.details.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle className="w-3.5 h-3.5 text-[#DEF868]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
