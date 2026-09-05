import React from "react";
import { Award, PhoneCall, Star, MessageSquare } from "lucide-react";

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: "2 ans",
      label: "d'expérience",
      icon: Award,
      iconColor: "text-[#5E1449]",
      valueColor: "text-slate-900",
    },
    {
      value: "30",
      label: "appels traités / jour",
      icon: PhoneCall,
      iconColor: "text-[#FF6B00]",
      valueColor: "text-slate-900",
    },
    {
      value: "5,0/5",
      label: "note client",
      icon: Star,
      iconColor: "text-[#5E1449]",
      valueColor: "text-slate-900",
    },
    {
      value: "18",
      label: "avis positifs",
      icon: MessageSquare,
      iconColor: "text-[#FF6B00]",
      valueColor: "text-slate-900",
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#FAFAFC] border-y border-slate-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const isOrange = stat.iconColor.includes("#FF6B00");
            return (
              <div
                key={stat.label}
                className={`bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-100 transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1 ${
                  isOrange
                    ? "hover:border-[#FF6B00]/30 shadow-[0_4px_20px_-4px_rgba(255,107,0,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(255,107,0,0.12)]"
                    : "hover:border-[#5E1449]/30 shadow-[0_4px_20px_-4px_rgba(94,20,73,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(94,20,73,0.12)]"
                }`}
              >
                {/* Icon */}
                <div className={`mb-2 sm:mb-3 ${stat.iconColor}`}>
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 stroke-[2.2]" />
                </div>

                {/* Number / Value with tabular-nums */}
                <p className={`text-2xl sm:text-3xl md:text-4xl font-black tracking-tight tabular-nums ${stat.valueColor}`}>
                  {stat.value}
                </p>

                {/* Label */}
                <p className="mt-1 sm:mt-1.5 text-[11px] sm:text-xs md:text-sm font-semibold text-slate-500 [text-wrap:balance]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
