import React from "react";
import { Clock, ArrowUpRight } from "lucide-react";

interface CtaBannerProps {
  onOpenContact?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenContact }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Double-Bezel Outer Shell */}
        <div className="p-2.5 rounded-[2.75rem] bg-slate-900/[0.03] ring-1 ring-slate-900/5 shadow-[0_25px_60px_-15px_rgba(94,20,73,0.18)]">
          
          {/* Double-Bezel Inner Core */}
          <div className="relative rounded-[calc(2.75rem-0.625rem)] overflow-hidden p-8 sm:p-14 bg-gradient-to-r from-[#4A0D39] via-[#6B1D56] to-[#FF6B00] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]">
            
            {/* Subtle Ethereal Background Radial Mesh */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute left-1/3 -top-20 w-72 h-72 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              
              {/* Left Info with Concentric Clock Icon */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-7 max-w-2xl">
                <div className="w-18 h-18 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                  <Clock className="w-9 h-9 text-[#FFD1A9]" />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-tight [text-wrap:balance]">
                    Moins de tâches à gérer. <br className="hidden sm:inline" />
                    Plus de temps pour développer votre activité.
                  </h3>
                  <p className="mt-3 text-white/90 text-sm sm:text-base font-medium [text-wrap:pretty]">
                    Déléguez l&apos;opérationnel. Nous nous occupons du reste avec discrétion et rigueur.
                  </p>
                </div>
              </div>

              {/* Right Action: Button-in-Button Architecture */}
              <div className="shrink-0 w-full sm:w-auto text-center">
                <button
                  onClick={onOpenContact}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 pl-8 pr-2.5 py-2.5 rounded-full text-sm font-bold text-[#5E1449] bg-white hover:bg-slate-50 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
                >
                  <span>Confier une mission</span>
                  <div className="w-9 h-9 rounded-full bg-[#FFF3EB] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-4 h-4 text-[#FF6B00]" />
                  </div>
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
