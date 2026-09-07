"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Clock, 
  Sparkles, 
  ArrowUpRight, 
  Mail, 
  PhoneCall, 
  FileText, 
  UserCheck, 
  Check, 
  BrainCircuit,
  TrendingUp 
} from "lucide-react";
import { useScrollCraft } from "./ScrollCraftProvider";

interface DelegationSimulatorSectionProps {
  onOpenContact?: () => void;
}

interface TaskItem {
  id: string;
  title: string;
  category: string;
  weeklyHours: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  kitbitzImage: string;
}

export const DelegationSimulatorSection: React.FC<DelegationSimulatorSectionProps> = ({ onOpenContact }) => {
  const { scrollY, isReducedMotion } = useScrollCraft();

  const availableTasks: TaskItem[] = [
    {
      id: "admin",
      title: "Gestion des emails, courriers & archivage",
      category: "Secrétariat",
      weeklyHours: 7,
      icon: Mail,
      color: "#5E1449",
      kitbitzImage: "/images/kitbitz/kitbitz-book-single.svg",
    },
    {
      id: "prospect",
      title: "Téléprospection & qualification de leads",
      category: "Commercial",
      weeklyHours: 10,
      icon: PhoneCall,
      color: "#FF6B00",
      kitbitzImage: "/images/kitbitz/kitbitz-speaker.svg",
    },
    {
      id: "invoicing",
      title: "Suivi facturation, relances & devis",
      category: "Organisation",
      weeklyHours: 5,
      icon: FileText,
      color: "#5E1449",
      kitbitzImage: "/images/kitbitz/kitbitz-terminal.svg",
    },
    {
      id: "recruitment",
      title: "Sourcing & présélection de profils remote",
      category: "RH",
      weeklyHours: 8,
      icon: UserCheck,
      color: "#FF6B00",
      kitbitzImage: "/images/kitbitz/kitbitz-office-chair.svg",
    },
  ];

  // Default selected: 3 tasks
  const [selectedTaskIds, setSelectedTaskIds] = useState<string[]>(["admin", "prospect", "invoicing"]);

  const toggleTask = (id: string) => {
    if (selectedTaskIds.includes(id)) {
      if (selectedTaskIds.length > 1) {
        setSelectedTaskIds(selectedTaskIds.filter((t) => t !== id));
      }
    } else {
      setSelectedTaskIds([...selectedTaskIds, id]);
    }
  };

  // Calculations
  const weeklyHoursSaved = selectedTaskIds.reduce((acc, id) => {
    const task = availableTasks.find((t) => t.id === id);
    return acc + (task ? task.weeklyHours : 0);
  }, 0);

  const monthlyHoursSaved = weeklyHoursSaved * 4;
  const stressReductionPercent = Math.min(92, 25 + selectedTaskIds.length * 17);
  const potentialNewClients = Math.max(1, Math.round(weeklyHoursSaved / 4));

  return (
    <section 
      id="simulateur" 
      className="py-20 sm:py-28 md:py-36 bg-gradient-to-b from-white via-[#FAF9F7] to-white relative overflow-hidden scroll-mt-20"
    >
      {/* Scroll-Craft Ambient Atmospheric Glow */}
      <div 
        className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF6B00]/[0.04] blur-[120px] pointer-events-none"
        style={{
          transform: !isReducedMotion ? `translateY(${scrollY * 0.05}px)` : undefined,
        }}
      />
      <div 
        className="absolute bottom-10 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#5E1449]/[0.05] blur-[120px] pointer-events-none"
        style={{
          transform: !isReducedMotion ? `translateY(${scrollY * -0.04}px)` : undefined,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Scroll-Craft Feeling Curve Peak */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7EEF4] border border-[#5E1449]/15 text-[#5E1449] font-bold text-[10px] uppercase tracking-[0.2em] mb-4 shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#FF6B00]" />
            <span>DISPOSITIF EXCLUSIF · LE PIC D&apos;ENGAGEMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
            Combien d&apos;heures allez-vous <span className="text-[#FF6B00]">récupérer</span> chaque mois ?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl mx-auto [text-wrap:pretty]">
            Sélectionnez les missions chronophages que vous souhaitez déléguer à ACH Progestions et visualisez l&apos;impact direct sur votre énergie et votre croissance.
          </p>
          <div className="w-12 h-1 bg-[#FF6B00] rounded-full mx-auto mt-5" />
        </div>

        {/* The Interactive Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left: Interactive Task Selector (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Cliquez pour activer ou désactiver les missions :
            </p>

            {availableTasks.map((task) => {
              const isSelected = selectedTaskIds.includes(task.id);
              const Icon = task.icon;
              return (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-300 select-none ${
                    isSelected
                      ? "bg-slate-900/[0.04] ring-2 ring-[#5E1449]/30 shadow-md scale-[1.01]"
                      : "bg-slate-100/60 ring-1 ring-slate-200/60 opacity-70 hover:opacity-100 hover:bg-slate-100"
                  }`}
                >
                  <div className="bg-white rounded-[calc(1.5rem-0.375rem)] p-4 sm:p-5 flex items-center justify-between gap-4 border border-slate-100">
                    <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                      {/* Checkbox badge */}
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all shrink-0 ${
                          isSelected
                            ? "bg-[#5E1449] text-white shadow-xs"
                            : "border-2 border-slate-200 text-transparent"
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>

                      {/* Task icon & Kitbitz micro visual */}
                      <div className="w-10 h-10 rounded-xl bg-[#FAF9FC] border border-slate-100 flex items-center justify-center p-1.5 shrink-0 relative">
                        <Image
                          src={task.kitbitzImage}
                          alt={task.title}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>

                      {/* Task Info */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6B00] bg-[#FFF3EB] px-2 py-0.5 rounded-md">
                            {task.category}
                          </span>
                          <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                            ~{task.weeklyHours}h / semaine
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-1 truncate">
                          {task.title}
                        </h4>
                      </div>
                    </div>

                    {/* Time saved pill */}
                    <div className="text-right shrink-0">
                      <span className="inline-block text-xs sm:text-sm font-black text-[#5E1449] tabular-nums bg-[#F7EEF4] px-2.5 py-1 rounded-full">
                        +{task.weeklyHours * 4}h/mois
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: The Live Computed Impact Cockpit (5 cols) */}
          <div className="lg:col-span-5">
            {/* Outer Double-Bezel Shell */}
            <div className="p-2 sm:p-2.5 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-[#5E1449]/10 via-slate-900/[0.04] to-[#FF6B00]/10 ring-1 ring-slate-900/10 shadow-[0_25px_60px_-15px_rgba(94,20,73,0.15)]">
              {/* Inner Cockpit Core */}
              <div className="rounded-[calc(2rem-0.5rem)] sm:rounded-[calc(2.5rem-0.625rem)] bg-white p-6 sm:p-8 border border-slate-100 text-slate-900 relative overflow-hidden">
                
                {/* Micro Header */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF9FC] border border-slate-100 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-[#FF6B00]" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-900">Bilan d&apos;impact mensuel</p>
                      <p className="text-[10px] text-slate-400">{selectedTaskIds.length} mission(s) active(s)</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Gain immédiat
                  </span>
                </div>

                {/* Big Metric Display */}
                <div className="py-6 text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                    TEMPS NET LIBÉRÉ
                  </p>
                  <div className="text-5xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#5E1449] to-[#FF6B00] tabular-nums">
                    +{monthlyHoursSaved}h
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-2">
                    soit <span className="text-[#5E1449] font-bold">~{weeklyHoursSaved} heures chaque semaine</span> rendues à votre stratégie
                  </p>
                </div>

                {/* Micro Gauges & Qualitative Outcomes */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                      <span className="flex items-center gap-1.5 text-slate-700">
                        <BrainCircuit className="w-3.5 h-3.5 text-[#5E1449]" />
                        Sérénité &amp; décharge mentale
                      </span>
                      <span className="text-[#5E1449] font-black">{stressReductionPercent}%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#5E1449] to-[#FF6B00] rounded-full transition-all duration-500"
                        style={{ width: `${stressReductionPercent}%` }}
                      />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FAF9FC] border border-slate-100/80 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF3EB] flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4 text-[#FF6B00]" />
                    </div>
                    <p className="text-xs text-slate-600 leading-tight">
                      Capacité estimée à générer <strong className="text-slate-900 font-bold">+{potentialNewClients} opportunité(s) commerciale(s)</strong> supplémentaire(s) par mois.
                    </p>
                  </div>
                </div>

                {/* Direct Action Trigger */}
                <div className="mt-7">
                  <button
                    onClick={onOpenContact}
                    className="w-full group inline-flex items-center justify-center gap-3 pl-6 pr-2.5 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#5E1449] to-[#3B072D] hover:from-[#6E1856] hover:to-[#490A37] shadow-[0_8px_24px_-4px_rgba(94,20,73,0.4)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Récupérer ces heures avec Ana</span>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="w-4 h-4 text-[#FFB37C]" />
                    </div>
                  </button>
                  <p className="text-center text-[11px] text-slate-400 mt-2.5">
                    Premier diagnostic téléphonique offert de 15 minutes
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
