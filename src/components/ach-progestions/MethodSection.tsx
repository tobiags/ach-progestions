import React from "react";
import Image from "next/image";
import { Headphones, CalendarDays, Rocket, TrendingUp, ArrowRight } from "lucide-react";

export const MethodSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Comprendre",
      description:
        "Nous écoutons vos besoins et vos objectifs pour bien cadrer la mission.",
      icon: Headphones,
      iconColor: "text-[#5E1449]",
      badgeBg: "bg-[#F7EEF4] text-[#5E1449] border-[#5E1449]/20",
      kitbitzImage: "/images/kitbitz/kitbitz-desk-lamp.svg",
      kitbitzAlt: "Lampe de bureau analyse et écoute",
    },
    {
      number: "02",
      title: "Organiser",
      description:
        "Nous mettons en place les outils, process et un planning clair.",
      icon: CalendarDays,
      iconColor: "text-[#FF6B00]",
      badgeBg: "bg-[#FFF3EB] text-[#FF6B00] border-[#FF6B00]/20",
      kitbitzImage: "/images/kitbitz/kitbitz-stacked-books.svg",
      kitbitzAlt: "Livres et organisation des process",
    },
    {
      number: "03",
      title: "Exécuter",
      description:
        "Nous agissons avec rigueur, réactivité et confidentialité au quotidien.",
      icon: Rocket,
      iconColor: "text-[#5E1449]",
      badgeBg: "bg-[#F7EEF4] text-[#5E1449] border-[#5E1449]/20",
      kitbitzImage: "/images/kitbitz/kitbitz-terminal.svg",
      kitbitzAlt: "Terminal opérationnel et déploiement",
    },
    {
      number: "04",
      title: "Suivre & optimiser",
      description:
        "Nous suivons les résultats et ajustons pour toujours plus de performance.",
      icon: TrendingUp,
      iconColor: "text-[#FF6B00]",
      badgeBg: "bg-[#FFF3EB] text-[#FF6B00] border-[#FF6B00]/20",
      kitbitzImage: "/images/kitbitz/kitbitz-clock.svg",
      kitbitzAlt: "Horloge suivi régulier et ponctualité",
    },
  ];

  return (
    <section id="methode" className="py-16 sm:py-24 md:py-36 bg-[#FAF9F7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7EEF4] border border-[#5E1449]/15 text-[#5E1449] font-bold text-[10px] uppercase tracking-[0.2em] mb-3.5 sm:mb-4 shadow-2xs">
            <span>NOTRE MÉTHODOLOGIE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
            Une collaboration simple, claire et à distance
          </h2>
          <div className="w-12 h-1 bg-[#FF6B00] rounded-full mx-auto mt-4 sm:mt-5" />
        </div>

        {/* 4 Double-Bezel Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              /* Outer Shell */
              <div
                key={step.number}
                className="p-1.5 sm:p-2 rounded-[1.75rem] sm:rounded-[2.25rem] bg-slate-900/[0.02] ring-1 ring-slate-900/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.08)]"
              >
                {/* Inner Core */}
                <div className="rounded-[calc(1.75rem-0.375rem)] sm:rounded-[calc(2.25rem-0.5rem)] bg-white p-5 sm:p-7 md:p-8 h-full flex flex-col items-center text-center border border-slate-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] relative group">
                  
                  {/* Step Number Badge */}
                  <span className="text-2xl sm:text-3xl font-black text-slate-200 group-hover:text-[#5E1449]/30 transition-colors tabular-nums mb-3 sm:mb-4">
                    {step.number}
                  </span>

                  {/* Dual Pod: Kitbitz Hand-Drawn Spot Illustration + Step Icon */}
                  <div className="relative mb-4 sm:mb-5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FAF9FC] border border-slate-100 flex items-center justify-center p-2 sm:p-2.5 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-2xs">
                      <Image
                        src={step.kitbitzImage}
                        alt={step.kitbitzAlt}
                        width={38}
                        height={38}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-2xs group-hover:-translate-y-0.5 transition-transform"
                      />
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-white shadow-xs border border-slate-100 flex items-center justify-center ${step.iconColor}`}>
                      <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-2.5 [text-wrap:balance]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed [text-wrap:pretty]">
                    {step.description}
                  </p>

                  {/* Connector Arrow for Desktop */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white shadow-md border border-slate-200/80 items-center justify-center text-slate-400">
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
