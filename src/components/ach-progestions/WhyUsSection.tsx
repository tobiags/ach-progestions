import React from "react";
import { ShieldCheck, Zap, Globe, Heart } from "lucide-react";

export const WhyUsSection: React.FC = () => {
  const reasons = [
    {
      title: "Rigueur",
      description: "Un travail précis, structuré et orienté résultats mesurables.",
      icon: ShieldCheck,
      iconColor: "text-[#5E1449]",
      iconBg: "bg-[#F7EEF4]",
    },
    {
      title: "Réactivité",
      description: "Nous répondons sans délai et respectons chaque engagement.",
      icon: Zap,
      iconColor: "text-[#FF6B00]",
      iconBg: "bg-[#FFF3EB]",
    },
    {
      title: "Flexibilité",
      description: "Un accompagnement 100% à distance, parfaitement calibré sur votre rythme.",
      icon: Globe,
      iconColor: "text-[#5E1449]",
      iconBg: "bg-[#F7EEF4]",
    },
    {
      title: "Approche humaine",
      description: "À l'écoute, bienveillante et orientée partenariat durable.",
      icon: Heart,
      iconColor: "text-[#FF6B00]",
      iconBg: "bg-[#FFF3EB]",
    },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7EEF4] border border-[#5E1449]/15 text-[#5E1449] font-bold text-[10px] uppercase tracking-[0.2em] shadow-2xs">
            <span>NOS ENGAGEMENTS FONDAMENTAUX</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mt-3 [text-wrap:balance]">
            Pourquoi nous confier vos opérations ?
          </h2>
        </div>

        {/* 4 Double-Bezel Feature Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              /* Outer Shell */
              <div
                key={item.title}
                className="p-1.5 sm:p-2 rounded-[1.75rem] sm:rounded-[2rem] bg-slate-900/[0.02] ring-1 ring-slate-900/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.06)]"
              >
                {/* Inner Core */}
                <div className="rounded-[calc(1.75rem-0.375rem)] sm:rounded-[calc(2rem-0.5rem)] bg-white p-5 sm:p-6 h-full flex flex-col items-start border border-slate-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] group">
                  {/* Icon */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-2xs`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 sm:mb-2 [text-wrap:balance]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed [text-wrap:pretty]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
