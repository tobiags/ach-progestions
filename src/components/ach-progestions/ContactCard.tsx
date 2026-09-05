import React from "react";
import Image from "next/image";
import { Phone, Mail, Globe, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

interface ContactCardProps {
  onOpenContact?: () => void;
}

export const ContactCard: React.FC<ContactCardProps> = ({ onOpenContact }) => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FAF9F7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Double-Bezel Outer Shell */}
        <div className="p-2.5 rounded-[2.75rem] bg-slate-900/[0.03] ring-1 ring-slate-900/5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)]">
          
          {/* Double-Bezel Inner Core */}
          <div className="rounded-[calc(2.75rem-0.625rem)] bg-white p-8 sm:p-14 border border-slate-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Headline & Value */}
              <div className="lg:col-span-5 flex flex-col items-start">
                <div className="flex items-center justify-between w-full mb-5">
                  <BrandLogo size="md" />
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF9FC] border border-slate-100 p-2 flex items-center justify-center shadow-2xs">
                    <Image
                      src="/images/kitbitz/kitbitz-succulent.svg"
                      alt="ACH Progestions accueil"
                      width={32}
                      height={32}
                      className="object-contain drop-shadow-xs"
                    />
                  </div>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight [text-wrap:balance]">
                  Parlons de votre projet
                </h3>
                <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-md [text-wrap:pretty]">
                  Échangeons sur vos besoins et voyons comment nous pouvons vous faire
                  gagner du temps et développer votre activité.
                </p>
                
                <div className="mt-6 flex items-center gap-2.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-full shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Premier diagnostic téléphonique offert (15 min)</span>
                </div>
              </div>

              {/* Middle Column: Direct Contact Details */}
              <div className="lg:col-span-4 flex flex-col gap-4 py-4 lg:py-0 lg:px-8 lg:border-x border-slate-100">
                <a
                  href="tel:0757690117"
                  className="flex items-center gap-3.5 text-sm font-bold text-slate-800 hover:text-[#5E1449] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#F7EEF4] text-[#5E1449] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>07 57 69 01 17</span>
                </a>

                <a
                  href="mailto:achprogestion@gmail.com"
                  className="flex items-center gap-3.5 text-sm font-bold text-slate-800 hover:text-[#5E1449] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#FFF3EB] text-[#FF6B00] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-2xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="truncate">achprogestion@gmail.com</span>
                </a>

                <a
                  href="https://comeup.com/fr/@ana05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 text-sm font-bold text-slate-800 hover:text-[#5E1449] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#F7EEF4] text-[#5E1449] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-2xs">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span>comeup.com/fr/@ana05</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/hosiane-ayaba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 text-sm font-bold text-slate-800 hover:text-[#5E1449] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#FFF3EB] text-[#FF6B00] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-2xs">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66.92 0 1.66-.74 1.66-1.66 0-.92-.74-1.66-1.66-1.66Z" />
                    </svg>
                  </div>
                  <span>Hosiane Ayaba — LinkedIn</span>
                </a>
              </div>

              {/* Right Column: Button-in-Button CTA */}
              <div className="lg:col-span-3 flex flex-col items-center lg:items-end text-center lg:text-right">
                <button
                  onClick={onOpenContact}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 pl-8 pr-2.5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#5E1449] to-[#3B072D] hover:from-[#6E1856] hover:to-[#490A37] shadow-[0_6px_22px_-2px_rgba(94,20,73,0.38)] hover:shadow-[0_10px_30px_-3px_rgba(94,20,73,0.5)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
                >
                  <span>Parler de mon besoin</span>
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-4 h-4 text-[#FFB37C]" />
                  </div>
                </button>
                
                <span className="mt-4 text-xs text-slate-500 font-semibold">
                  Réponse rapide garantie sous 24h
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
