"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const features = [
  "Intuitive customer analytics & behavioral heatmaps",
  "Advertisement conversion tracking events",
  "Full marketing automation & sales funnels",
  "Real-time customer engagement and lead retention",
];

export function FeatureShowcase() {
  return (
    <section className="py-24 bg-[#080808] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text, Checklist & CTA */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DEF868]/10 border border-[#DEF868]/20 text-[#DEF868] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Audience Precision</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Reach them at the <span className="text-[#DEF868]">right time</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Connect seamlessly with buyers when intent is highest. Our multi-channel growth systems combine machine learning insights with persuasive creative execution.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3.5">
              {features.map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#DEF868]/20 text-[#DEF868] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium text-gray-200">{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#DEF868] text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#cbdf55] hover:shadow-[0_0_30px_rgba(222,248,104,0.35)] transition-all transform active:scale-95"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Visual Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Box 1 */}
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#141414] group hover:border-[#DEF868]/40 transition-all duration-300 shadow-xl">
              <img
                src="/images/Box-1.webp"
                alt="Feature analytics box"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Box 2 */}
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#141414] group hover:border-[#DEF868]/40 transition-all duration-300 shadow-xl">
              <img
                src="/images/Box-2.webp"
                alt="Feature dashboard box"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Box 3 */}
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#141414] group hover:border-[#DEF868]/40 transition-all duration-300 shadow-xl">
              <img
                src="/images/Box-3.webp"
                alt="Feature conversion box"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Box 4 */}
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#141414] group hover:border-[#DEF868]/40 transition-all duration-300 shadow-xl">
              <img
                src="/images/Box-4.webp"
                alt="Feature automation box"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
