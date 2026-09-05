import React from "react";
import Image from "next/image";
import { Layers, TrendingUp, Users } from "lucide-react";

export const PillarsSection: React.FC = () => {
  const pillars = [
    {
      icon: Layers,
      title: "Structurer",
      description:
        "Nous gérons votre administratif pour alléger votre charge mentale et sécuriser votre organisation.",
      color: "purple",
      iconBg: "bg-[#F7EEF4]",
      iconColor: "text-[#5E1449]",
      badge: "Sérénité",
      kitbitzImage: "/images/kitbitz/kitbitz-book-stack.svg",
      kitbitzAlt: "Livres et dossiers organisés",
    },
    {
      icon: TrendingUp,
      title: "Développer",
      description:
        "Nous générons des opportunités qualifiées pour accélérer votre croissance commerciale.",
      color: "orange",
      iconBg: "bg-[#FFF3EB]",
      iconColor: "text-[#FF6B00]",
      badge: "Croissance",
      kitbitzImage: "/images/kitbitz/kitbitz-speaker.svg",
      kitbitzAlt: "Communication et expansion",
    },
    {
      icon: Users,
      title: "Renforcer",
      description:
        "Nous trouvons les talents à distance qui correspondent à votre culture et à vos ambitions.",
      color: "purple",
      iconBg: "bg-[#F7EEF4]",
      iconColor: "text-[#5E1449]",
      badge: "Talents",
      kitbitzImage: "/images/kitbitz/kitbitz-bonsai.svg",
      kitbitzAlt: "Bonsaï stabilité et croissance durable",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAF9F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Concentric Double-Bezel 3-Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isOrange = pillar.color === "orange";
            return (
              /* Outer Shell */
              <div
                key={pillar.title}
                className={`p-2 rounded-[2.25rem] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5 ${
                  isOrange
                    ? "bg-[#FFF3EB]/40 ring-1 ring-[#FF6B00]/15 hover:shadow-[0_20px_45px_-12px_rgba(255,107,0,0.15)]"
                    : "bg-[#F7EEF4]/40 ring-1 ring-[#5E1449]/15 hover:shadow-[0_20px_45px_-12px_rgba(94,20,73,0.15)]"
                }`}
              >
                {/* Inner Core */}
                <div className="rounded-[calc(2.25rem-0.5rem)] bg-white p-8 sm:p-9 h-full flex flex-col items-center text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] border border-slate-100 group">
                  
                  {/* Micro Badge */}
                  <span
                    className={`inline-block px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 shadow-2xs ${
                      isOrange
                        ? "bg-[#FFF3EB] text-[#FF6B00] border border-[#FF6B00]/20"
                        : "bg-[#F7EEF4] text-[#5E1449] border border-[#5E1449]/20"
                    }`}
                  >
                    {pillar.badge}
                  </span>

                  {/* Kitbitz Illustration Pod */}
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl ${pillar.iconBg} flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-xs border ${
                        isOrange ? "border-[#FF6B00]/15" : "border-[#5E1449]/15"
                      }`}
                    >
                      <Image
                        src={pillar.kitbitzImage}
                        alt={pillar.kitbitzAlt}
                        width={52}
                        height={52}
                        className="object-contain drop-shadow-sm group-hover:rotate-3 transition-transform duration-500"
                      />
                    </div>
                    {/* Micro Lucide Floating Pill */}
                    <div className={`absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center ${pillar.iconColor}`}>
                      <Icon className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-3.5 [text-wrap:balance]">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed [text-wrap:pretty]">
                    {pillar.description}
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
