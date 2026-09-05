import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Sparkles, CheckCircle2, Star } from "lucide-react";

interface HeroSectionProps {
  onOpenContact?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-32 bg-gradient-to-b from-[#FAF8F5]/60 via-white to-white">
      {/* Subtle Ethereal Ambient Radial Gradients */}
      <div className="absolute -top-24 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#5E1449]/[0.04] rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#FF6B00]/[0.03] rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Focused Copy Stack */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Microscopic Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-[#F7EEF4] border border-[#5E1449]/15 text-[#5E1449] font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.2em] mb-4 sm:mb-6 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
              <span>Secrétariat · Prospection · Recrutement Remote</span>
            </div>

            {/* Main Headline with High-Contrast Typography */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-slate-900 tracking-tight leading-[1.14] sm:leading-[1.1] [text-wrap:balance]">
              Déléguez l&apos;opérationnel.{" "}
              <span className="text-[#FF6B00] block mt-1 sm:mt-1.5">
                Concentrez-vous sur votre entreprise.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl [text-wrap:pretty]">
              Nous accompagnons les TPE, PME et entrepreneurs en prenant en charge
              votre <strong className="text-slate-900 font-semibold">administratif</strong>,
              votre <strong className="text-slate-900 font-semibold">prospection commerciale</strong> et
              vos <strong className="text-slate-900 font-semibold">recrutements à distance</strong>,
              pour vous faire gagner du temps, structurer votre activité et stimuler votre croissance.
            </p>

            {/* Action Buttons: Stacked on Mobile, Inline on Desktop */}
            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenContact}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 pl-7 pr-2.5 py-3 sm:py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#5E1449] to-[#3B072D] hover:from-[#6E1856] hover:to-[#490A37] shadow-[0_6px_22px_-2px_rgba(94,20,73,0.38)] hover:shadow-[0_10px_30px_-3px_rgba(94,20,73,0.5)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
              >
                <span>Confier une mission</span>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4 text-[#FFB37C]" />
                </div>
              </button>

              <Link
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full text-sm font-semibold text-[#5E1449] bg-white hover:bg-slate-50 border border-slate-200/90 shadow-xs hover:border-[#5E1449]/30 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>Découvrir nos services</span>
              </Link>
            </div>

            {/* Micro Assurances Bar */}
            <div className="mt-8 sm:mt-12 pt-5 sm:pt-7 border-t border-slate-100 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 font-medium w-full">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Sans engagement de durée</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#5E1449] shrink-0" />
                <span>Confidentialité garantie</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Démarrage rapide sous 48h</span>
              </div>
            </div>

          </div>

          {/* Right Column: "Double-Bezel" (Doppelrand) Hardware Architecture */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Double-Bezel Outer Shell */}
              <div className="p-1.5 sm:p-2 rounded-[2rem] sm:rounded-[2.5rem] bg-slate-900/[0.03] ring-1 ring-slate-900/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]">
                
                {/* Double-Bezel Inner Core */}
                <div className="relative rounded-[calc(2rem-0.375rem)] sm:rounded-[calc(2.5rem-0.5rem)] overflow-hidden bg-white border border-slate-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                  
                  <div className="aspect-[4/5] relative w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/images/hosiane-ayaba.jpg"
                      alt="Hosiane Ayaba (Ana) — Fondatrice et directrice exécutive ACH Progestions & Outils"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 550px"
                      className="object-cover object-top hover:scale-103 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    />

                    {/* Subtle Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                    {/* Concentric Status Pill */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-md flex items-center gap-1.5 sm:gap-2 border border-white/60">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-800">100% Remote</span>
                    </div>
                  </div>

                  {/* Bottom Founder Identity Bar */}
                  <div className="p-3.5 sm:p-4 bg-white border-t border-slate-100 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#FAF9FC] border border-slate-200/80 p-1 flex items-center justify-center shrink-0 relative shadow-2xs">
                        <Image
                          src="/images/ach-neon-logo-transparent.png"
                          alt="ACH Progestions"
                          fill
                          className="object-contain p-0.5"
                        />
                      </div>
                      <div className="truncate">
                        <p className="text-xs font-bold text-slate-900 truncate">Hosiane Ayaba (Ana)</p>
                        <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate">Fondatrice &amp; Opératrice Exécutive</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 bg-[#FFF3EB] text-[#FF6B00] px-2.5 sm:px-3 py-1 rounded-full text-xs font-black shadow-2xs shrink-0">
                      <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-current" />
                      <span>5,0/5</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Performance Pill: Responsive on Mobile & Desktop */}
              <div className="absolute -bottom-4 sm:-bottom-5 left-2 right-2 sm:left-auto sm:right-auto sm:-left-6 bg-white/95 backdrop-blur-xl rounded-2xl p-2.5 sm:p-3.5 shadow-xl border border-slate-200/80 flex items-center gap-3 transition-transform duration-500 hover:scale-105 z-20">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#5E1449] to-[#3B072D] flex items-center justify-center p-1.5 shadow-xs shrink-0">
                  <Image
                    src="/images/kitbitz/kitbitz-clock.svg"
                    alt="Gain de temps"
                    width={26}
                    height={26}
                    className="object-contain drop-shadow-sm"
                  />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-900">+30 tâches &amp; appels / jour</p>
                  <p className="text-[10px] text-slate-500">Charge mentale allégée</p>
                </div>
              </div>

              {/* Kitbitz Hand-Drawn Office Plant Accent (Top-Right Floating) */}
              <div className="absolute -top-5 -right-2 sm:-top-7 sm:-right-6 w-14 h-14 sm:w-20 sm:h-20 pointer-events-none z-20 drop-shadow-lg transition-transform duration-700 hover:rotate-6">
                <Image
                  src="/images/kitbitz/kitbitz-monstera.svg"
                  alt="Plante de bureau Kitbitz"
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
