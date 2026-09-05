"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Zap, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const { addToCart } = useCart();

  const plans = [
    {
      id: "plan-basic",
      name: "Basic",
      description: "Ideal for early-stage founders exploring fundamental customer analytics.",
      priceMonthly: 0,
      priceAnnual: 0,
      isPopular: false,
      features: [
        "Intuitive customer analytics",
        "Advertisement conversion events",
        "Automation of sales/marketing",
      ],
    },
    {
      id: "plan-premium",
      name: "Premium",
      description: "Comprehensive multi-channel scaling suite for high-growth ventures.",
      priceMonthly: 29,
      priceAnnual: 290,
      isPopular: true,
      features: [
        "Intuitive customer analytics",
        "Advertisement conversion events",
        "Automation of sales/marketing",
        "Live customer support chat widget",
        "Conversion rate optimization audit",
      ],
    },
    {
      id: "plan-platinum",
      name: "Platinum",
      description: "Full-service enterprise performance engine with dedicated account director.",
      priceMonthly: 59,
      priceAnnual: 590,
      isPopular: false,
      features: [
        "Intuitive customer analytics",
        "Advertisement conversion events",
        "Automation of sales/marketing",
        "Live customer support chat widget",
        "Dedicated growth strategist",
        "Custom BI reporting dashboard",
      ],
    },
  ];

  const handleSelectPlan = (plan: typeof plans[0]) => {
    const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
    addToCart({
      id: `${plan.id}-${isAnnual ? "annual" : "monthly"}`,
      name: `${plan.name} Tier (${isAnnual ? "Annual" : "Monthly"})`,
      price: price,
      image: "/images/Box-1.webp",
      quantity: 1,
    });
  };

  return (
    <section id="pricing" className="py-24 bg-[#080808] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DEF868]/10 border border-[#DEF868]/20 text-[#DEF868] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Choose the <span className="text-[#DEF868]">Perfect Plan</span> for You
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Explore our range of tailored pricing models designed to meet your company&apos;s unique growth velocity.
          </p>

          {/* Monthly / Annual Toggle Switch */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <span
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                !isAnnual ? "text-[#DEF868]" : "text-gray-400"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 bg-white/10 rounded-full p-1 border border-white/15 relative transition-colors focus:outline-none"
              aria-label="Toggle annual pricing"
            >
              <div
                className={`w-5 h-5 rounded-full bg-[#DEF868] transition-transform duration-300 ${
                  isAnnual ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-sm font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                isAnnual ? "text-[#DEF868]" : "text-gray-400"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              <span>Annually</span>
              <span className="px-2 py-0.5 rounded-full bg-[#DEF868] text-black text-[10px] font-bold uppercase">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.isPopular
                    ? "bg-[#161616] border-2 border-[#DEF868] shadow-[0_0_40px_rgba(222,248,104,0.15)] transform lg:-translate-y-3"
                    : "bg-[#121212] border border-white/10 hover:border-white/20"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#DEF868] text-black text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 py-3 border-y border-white/10">
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono">
                      {price === 0 ? "Free" : `$${price}`}
                    </span>
                    {price > 0 && (
                      <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                        / {isAnnual ? "Year" : "Month"}
                      </span>
                    )}
                  </div>

                  {/* Feature checklist */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                      Included capabilities:
                    </span>
                    <ul className="space-y-3">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                          <Check className="w-4 h-4 text-[#DEF868] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-8 mt-6 border-t border-white/5">
                  <button
                    onClick={() => handleSelectPlan(plan)}
                    className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all transform active:scale-95 flex items-center justify-center gap-2 ${
                      plan.isPopular
                        ? "bg-[#DEF868] text-black hover:bg-[#cbdf55] shadow-[0_0_25px_rgba(222,248,104,0.35)]"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/15"
                    }`}
                  >
                    <span>Choose {plan.name}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
