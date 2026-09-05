"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PricingSection } from "@/components/home/PricingSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Check, X, Sparkles, HelpCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

const comparisonFeatures = [
  { name: "Intuitive customer analytics", basic: true, premium: true, platinum: true },
  { name: "Advertisement conversion events", basic: true, premium: true, platinum: true },
  { name: "Automation of sales/marketing", basic: true, premium: true, platinum: true },
  { name: "Live customer support chat widget", basic: false, premium: true, platinum: true },
  { name: "Conversion Rate Optimization (CRO)", basic: false, premium: true, platinum: true },
  { name: "Multi-channel funnel attribution", basic: false, premium: true, platinum: true },
  { name: "Dedicated Senior Growth Director", basic: false, false: false, platinum: true },
  { name: "Custom Business Intelligence dashboard", basic: false, false: false, platinum: true },
  { name: "24/7 Priority Emergency Hotline", basic: false, false: false, platinum: true },
];

export default function PricingPlansPage() {
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-[#0C0C0C] text-white flex flex-col selection:bg-[#DEF868] selection:text-black">
      <Header />

      {/* Hero Header */}
      <section className="pt-36 pb-12 bg-gradient-to-b from-[#141414] via-[#0C0C0C] to-[#0C0C0C] border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#DEF868]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            <Link href="/" className="hover:text-[#DEF868] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#DEF868]">Pricing Plans</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DEF868]/10 border border-[#DEF868]/20 text-[#DEF868] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Pricing Plans</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
            Flexible plans for <span className="text-[#DEF868]">every scale</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed">
            Transparent pricing with no hidden lock-ins. Upgrade or adjust your tier at any time as your team expands.
          </p>
        </div>
      </section>

      {/* Core Pricing Cards Grid */}
      <PricingSection />

      {/* Detailed Feature Comparison Table */}
      <section className="py-24 bg-[#0C0C0C] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Compare <span className="text-[#DEF868]">Features</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Detailed breakdown of everything included across each service level.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-5 px-6 text-sm font-bold text-gray-300 uppercase tracking-wider">
                    Feature & Capability
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-center text-white uppercase tracking-wider w-36">
                    Basic
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-center text-[#DEF868] uppercase tracking-wider w-36 bg-white/5 rounded-t-2xl">
                    Premium
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-center text-white uppercase tracking-wider w-36">
                    Platinum
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {comparisonFeatures.map((feat, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-gray-300 font-medium">
                      {feat.name}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feat.basic ? (
                        <Check className="w-5 h-5 text-[#DEF868] mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center bg-white/5">
                      {feat.premium ? (
                        <Check className="w-5 h-5 text-[#DEF868] mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feat.platinum ? (
                        <Check className="w-5 h-5 text-[#DEF868] mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      <Footer />
    </main>
  );
}
