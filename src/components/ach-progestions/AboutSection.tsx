import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export const AboutSection: React.FC = () => {
  const points = [
    {
      label: "Mission",
      text: "nous offrir la structure, le temps et les outils pour piloter votre entreprise en toute sérénité.",
    },
    {
      label: "Clients",
      text: "TPE, PME et particuliers en France comme à l'international.",
    },
    {
      label: "Mode de collaboration",
      text: "un accompagnement 100% à distance, flexible et réactif.",
    },
  ];

  return (
    <section id="a-propos" className="py-14 sm:py-20 md:py-28 bg-[#FAFAFC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle background glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#5E1449]/15 to-[#FF6B00]/15 rounded-3xl blur-lg opacity-70" />

              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white">
                <div className="aspect-[16/10] sm:aspect-[4/3] relative w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/ach-office-neon.png"
                    alt="Espace de travail et enseigne lumineuse néon ACH PROGESTIONS & OUTILS"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] text-slate-800 font-bold border border-white/60 shadow-md flex items-center gap-1.5 sm:gap-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden relative">
                      <Image
                        src="/images/hosiane-ayaba.jpg"
                        alt="Hosiane Ayaba"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <span>Hosiane Ayaba (Ana)</span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] text-white font-medium border border-white/10 flex items-center gap-1.5 sm:gap-2 shadow-sm">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                    <span>Bureaux &amp; équipements dédiés</span>
                  </div>
                </div>
              </div>

              {/* Kitbitz Floating Office Accent */}
              <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-6 flex items-center gap-2.5 sm:gap-3 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-xl border border-slate-200/80 z-20 hover:scale-105 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#F7EEF4] flex items-center justify-center p-1 sm:p-1.5 shrink-0 border border-[#5E1449]/10">
                  <Image
                    src="/images/kitbitz/kitbitz-office-chair.svg"
                    alt="Bureau équipé Kitbitz"
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6.5 sm:h-6.5 object-contain"
                  />
                </div>
                <div>
                  <p className="text-[10px] sm:text-[11px] font-bold text-slate-900">Poste dédié</p>
                  <p className="text-[9px] sm:text-[10px] text-slate-500">100% sécurisé</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left mt-4 lg:mt-0">
            <span className="inline-block text-[#5E1449] font-bold text-xs uppercase tracking-widest mb-2 sm:mb-3">
              À PROPOS D&apos;ACH PROGESTIONS &amp; OUTILS
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
              Votre partenaire de confiance, <br />
              <span className="text-[#5E1449]">à distance.</span>
            </h2>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-600 leading-relaxed [text-wrap:pretty]">
              <strong className="text-slate-900 font-semibold">ACH PROGESTIONS &amp; OUTILS</strong> est
              une entreprise spécialisée dans l&apos;accompagnement administratif, commercial et RH des
              TPE, PME et particuliers, en France et à l&apos;international. Depuis 2 ans, nous aidons les
              dirigeants à déléguer leur charge mentale et opérationnelle à un partenaire fiable, engagé et discret.
            </p>

            {/* 3 Key Points */}
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 w-full">
              {points.map((point) => (
                <div key={point.label} className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#5E1449] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-normal">
                    <strong className="font-bold text-slate-900">{point.label} : </strong>
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
