import React from "react";
import Image from "next/image";
import {
  FolderKanban,
  PhoneCall,
  PenTool,
  Headphones,
  Search,
  UserCheck,
  ArrowUpRight,
} from "lucide-react";

export const ExpertisesSection: React.FC = () => {
  const expertises = [
    {
      category: "Organisation & Agenda",
      title: "Secrétariat sur-mesure",
      description:
        "Gestion de vos courriels, agenda, dossiers et documents avec rigueur et confidentialité.",
      icon: FolderKanban,
      iconBg: "bg-[#F7EEF4]",
      iconColor: "text-[#5E1449]",
      kitbitzImage: "/images/kitbitz/kitbitz-books-trio.svg",
      kitbitzAlt: "Dossiers et livres Kitbitz",
      shellHover: "hover:bg-[#F7EEF4]/50 hover:ring-[#5E1449]/20 hover:shadow-[0_20px_45px_-12px_rgba(94,20,73,0.12)]",
    },
    {
      category: "Développement Commercial",
      title: "Téléprospection & Qualification de Leads",
      description:
        "Identification de cibles, prise de contact et qualification de prospects pour votre pipeline commercial.",
      icon: PhoneCall,
      iconBg: "bg-[#FFF3EB]",
      iconColor: "text-[#FF6B00]",
      kitbitzImage: "/images/kitbitz/kitbitz-speaker.svg",
      kitbitzAlt: "Haut-parleur de prospection Kitbitz",
      shellHover: "hover:bg-[#FFF3EB]/50 hover:ring-[#FF6B00]/20 hover:shadow-[0_20px_45px_-12px_rgba(255,107,0,0.12)]",
    },
    {
      category: "Pitchs & Présentations",
      title: "Rédaction de Script",
      description:
        "Scripts percutants pour vos vidéos, présentations commerciales et pitchs convaincants.",
      icon: PenTool,
      iconBg: "bg-[#F7EEF4]",
      iconColor: "text-[#5E1449]",
      kitbitzImage: "/images/kitbitz/kitbitz-book-single.svg",
      kitbitzAlt: "Script et livre Kitbitz",
      shellHover: "hover:bg-[#F7EEF4]/50 hover:ring-[#5E1449]/20 hover:shadow-[0_20px_45px_-12px_rgba(94,20,73,0.12)]",
    },
    {
      category: "Permanence Téléphonique",
      title: "Réception d'Appel",
      description:
        "Accueil professionnel, filtrage et gestion de vos appels entrants selon vos consignes.",
      icon: Headphones,
      iconBg: "bg-[#FFF3EB]",
      iconColor: "text-[#FF6B00]",
      kitbitzImage: "/images/kitbitz/kitbitz-desk.svg",
      kitbitzAlt: "Poste de travail et standard Kitbitz",
      shellHover: "hover:bg-[#FFF3EB]/50 hover:ring-[#FF6B00]/20 hover:shadow-[0_20px_45px_-12px_rgba(255,107,0,0.12)]",
    },
    {
      category: "Veille & Fichiers B2B",
      title: "Recherche de Contact",
      description:
        "Fichiers de prospection qualifiés, décideurs identifiés et informations à jour.",
      icon: Search,
      iconBg: "bg-[#F7EEF4]",
      iconColor: "text-[#5E1449]",
      kitbitzImage: "/images/kitbitz/kitbitz-terminal.svg",
      kitbitzAlt: "Terminal de recherche et base de données Kitbitz",
      shellHover: "hover:bg-[#F7EEF4]/50 hover:ring-[#5E1449]/20 hover:shadow-[0_20px_45px_-12px_rgba(94,20,73,0.12)]",
    },
    {
      category: "Ressources Humaines",
      title: "Sourcing & Recrutement Remote",
      description:
        "Sourcing, présélection et recrutement de talents à distance, alignés avec vos besoins.",
      icon: UserCheck,
      iconBg: "bg-[#FFF3EB]",
      iconColor: "text-[#FF6B00]",
      kitbitzImage: "/images/kitbitz/kitbitz-office-chair.svg",
      kitbitzAlt: "Siège de bureau et recrutement Kitbitz",
      shellHover: "hover:bg-[#FFF3EB]/50 hover:ring-[#FF6B00]/20 hover:shadow-[0_20px_45px_-12px_rgba(255,107,0,0.12)]",
    },
  ];

  return (
    <section id="services" className="py-28 md:py-36 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7EEF4] border border-[#5E1449]/15 text-[#5E1449] font-bold text-[10px] uppercase tracking-[0.2em] mb-4 shadow-2xs">
            <span>NOS SERVICES D&apos;EXCELLENCE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
            6 expertises pour soutenir votre croissance
          </h2>
          <div className="w-12 h-1 bg-[#FF6B00] rounded-full mx-auto mt-5" />
        </div>

        {/* 6 Double-Bezel Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertises.map((item) => {
            const Icon = item.icon;
            return (
              /* Outer Shell */
              <div
                key={item.title}
                className={`p-2 rounded-[2rem] bg-slate-900/[0.02] ring-1 ring-slate-900/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5 ${item.shellHover}`}
              >
                {/* Inner Core */}
                <div className="rounded-[calc(2rem-0.5rem)] bg-white p-7 sm:p-8 h-full flex flex-col justify-between border border-slate-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      {/* Dual Visual Container: Kitbitz Hand-drawn Art + Lucide Glyph */}
                      <div className="relative">
                        <div
                          className={`w-16 h-16 rounded-2xl ${item.iconBg} flex items-center justify-center p-2.5 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-2xs border border-slate-100`}
                        >
                          <Image
                            src={item.kitbitzImage}
                            alt={item.kitbitzAlt}
                            width={42}
                            height={42}
                            className="object-contain drop-shadow-xs group-hover:rotate-6 transition-transform duration-500"
                          />
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white shadow-xs border border-slate-100 flex items-center justify-center ${item.iconColor}`}>
                          <Icon className="w-3 h-3 stroke-[2.5]" />
                        </div>
                      </div>

                      {/* Category Pill */}
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#5E1449] transition-colors [text-wrap:balance]">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed [text-wrap:pretty]">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-[#5E1449] transition-colors">
                    <span>Intervention sous 48h</span>
                    <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#FFF3EB] group-hover:text-[#FF6B00] transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
