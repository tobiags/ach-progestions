"use client";

import React, { useState, useEffect } from "react";
import { Award, Users, RefreshCw, Zap } from "lucide-react";

export function SkillsSection() {
  const [expCount, setExpCount] = useState(0);
  const [custCount, setCustCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if (start <= 15) setExpCount(start);
      if (start <= 50) setCustCount(start);
      if (start >= 50) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#0C0C0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DEF868]/10 border border-[#DEF868]/20 text-[#DEF868] text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Continuous Innovation</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            We are constantly <span className="text-[#DEF868]">improving</span> our skill
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            We&apos;re your strategic partners in online success. With a team of dedicated experts, we master emerging digital channels and design frontiers.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#141414] border border-white/10 rounded-2xl p-8 space-y-4 hover:border-[#DEF868]/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#DEF868] group-hover:bg-[#DEF868] group-hover:text-black transition-colors">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-[#DEF868] transition-colors">
              Leadership
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fully committed to the success and visionary trajectory of every startup and business we partner with.
            </p>
          </div>

          <div className="bg-[#141414] border border-white/10 rounded-2xl p-8 space-y-4 hover:border-[#DEF868]/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#DEF868] group-hover:bg-[#DEF868] group-hover:text-black transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-[#DEF868] transition-colors">
              Responsibility
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering on every commitment with unmatched integrity, data security, and uncompromising quality.
            </p>
          </div>

          <div className="bg-[#141414] border border-white/10 rounded-2xl p-8 space-y-4 hover:border-[#DEF868]/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#DEF868] group-hover:bg-[#DEF868] group-hover:text-black transition-colors">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-[#DEF868] transition-colors">
              Flexibility
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The ability to pivot rapidly and adapt campaigns in real time based on market data and algorithmic changes.
            </p>
          </div>
        </div>

        {/* Stats Banner & Featured Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#141414] border border-white/10 rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="lg:col-span-6 space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2 border-r border-white/10 pr-6">
                <div className="text-5xl sm:text-6xl font-black text-[#DEF868] tracking-tight font-mono">
                  {expCount}+
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                  Years Experience
                </div>
                <p className="text-xs text-gray-500">
                  Proven track record of driving multimillion-dollar returns.
                </p>
              </div>

              <div className="space-y-2 pl-2 sm:pl-6">
                <div className="text-5xl sm:text-6xl font-black text-white tracking-tight font-mono">
                  {custCount}k+
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                  Satisfied Customers
                </div>
                <p className="text-xs text-gray-500">
                  Across 80+ countries and global e-commerce niches.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/10 group">
            <img
              src="/images/Picture-1.jpg"
              alt="Marketing Agency Team at work"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
