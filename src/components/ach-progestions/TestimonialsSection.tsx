import React from "react";
import { Star, ArrowUpRight } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      author: "DSC",
      role: "Client TPE",
      content:
        "Professionnalisme, réactivité et organisation au rendez-vous. Toutes mes tâches administratives sont prises en charge avec efficacité.",
    },
    {
      author: "ClubMarketing",
      role: "Agence Digitale",
      content: "Top, réactif et à l'écoute. Je recommande sans hésiter !",
    },
    {
      author: "Guillaume Villain",
      role: "Entrepreneur",
      content:
        "Très bonne communication. Ana a vraiment tout donné pour arriver au résultat. Je recommande !",
    },
    {
      author: "Erika_IRE",
      role: "Dirigeante PME",
      content: "Rapide, structuré, merci Ana pour ton travail !",
    },
  ];

  return (
    <section id="avis" className="py-28 md:py-36 bg-[#FAF9F7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7EEF4] border border-[#5E1449]/15 text-[#5E1449] font-bold text-[10px] uppercase tracking-[0.2em] mb-4 shadow-2xs">
              <span>AVIS &amp; RETOURS D&apos;EXPÉRIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Ce que disent nos clients
            </h2>
          </div>

          {/* Aggregate Rating Badge with Double-Bezel */}
          <div className="p-1.5 rounded-2xl bg-slate-900/[0.03] ring-1 ring-slate-900/5 shadow-xs shrink-0">
            <div className="flex items-center gap-4 bg-white border border-slate-100 px-5 py-3 rounded-[calc(1rem-0.25rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
              <span className="text-3xl font-black text-[#FF6B00] tracking-tight tabular-nums">
                5,0/5
              </span>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5 text-[#FF6B00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-500 mt-0.5">
                  18 avis vérifiés
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Double-Bezel Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            /* Outer Shell */
            <div
              key={item.author}
              className="p-2 rounded-[2rem] bg-slate-900/[0.02] ring-1 ring-slate-900/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.06)]"
            >
              {/* Inner Core */}
              <div className="rounded-[calc(2rem-0.5rem)] bg-white p-7 h-full flex flex-col justify-between border border-slate-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                <div>
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-[#FF6B00] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Author Name */}
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.author}
                  </h3>

                  {/* Quote Content */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic [text-wrap:pretty]">
                    &ldquo;{item.content}&rdquo;
                  </p>
                </div>

                {/* Verified badge */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                  <span>Avis certifié</span>
                  <span className="text-[#FF6B00] font-black">✓</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-14 text-center">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#5E1449] transition-colors"
          >
            <span>Voir tous les avis sur Google</span>
            <ArrowUpRight className="w-4 h-4 text-[#FF6B00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
