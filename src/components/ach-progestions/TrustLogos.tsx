import React from "react";

export const TrustLogos: React.FC = () => {
  return (
    <section className="py-10 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase font-bold tracking-widest text-slate-400 mb-8">
          ILS NOUS FONT DÉJÀ CONFIANCE
        </p>

        {/* Logos Grid / Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
          
          {/* Logo 1: Deméya */}
          <div className="flex flex-col items-center justify-center p-3 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-black tracking-tighter text-slate-800">Deméya</span>
            </div>
            <span className="text-[9px] uppercase tracking-widest font-semibold text-slate-500">
              SERVICES &amp; CONSEILS
            </span>
          </div>

          {/* Logo 2: LF BÂTIMENT */}
          <div className="flex items-center gap-2 p-3 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-white font-black text-xs tracking-tighter">
              LF
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-slate-900 leading-none">
                BÂTIMENT
              </span>
              <span className="text-[8px] uppercase tracking-wider text-slate-500">Rénovation &amp; Travaux</span>
            </div>
          </div>

          {/* Logo 3: CHS HEAVEN ENERGY */}
          <div className="flex flex-col items-center justify-center p-3 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <span className="text-2xl font-black tracking-tight text-slate-900 leading-none">
              CHS
            </span>
            <span className="text-[9px] uppercase tracking-widest font-bold text-[#FF6B00] mt-0.5">
              HEAVEN ENERGY
            </span>
          </div>

          {/* Logo 4: AFRI EXOTIC */}
          <div className="flex items-center gap-2 p-3 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <div className="w-8 h-8 rounded-lg bg-[#0F382A] text-[#FFD166] flex items-center justify-center font-black text-xs shadow-xs">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22v-9" />
                <path d="M9 13a4 4 0 0 1 6 0" />
                <path d="M7 9a6 6 0 0 1 10 0" />
                <path d="M5 5a8 8 0 0 1 14 0" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-black tracking-tight text-slate-900 leading-none">
                AFRI EXOTIC
              </span>
              <span className="text-[8px] uppercase tracking-wider text-slate-500 font-semibold mt-0.5">Import &amp; Distribution</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
