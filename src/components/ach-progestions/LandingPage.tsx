"use client";

import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { TrustLogos } from "./TrustLogos";
import { PillarsSection } from "./PillarsSection";
import { ExpertisesSection } from "./ExpertisesSection";
import { CtaBanner } from "./CtaBanner";
import { MethodSection } from "./MethodSection";
import { StatsSection } from "./StatsSection";
import { WhyUsSection } from "./WhyUsSection";
import { AboutSection } from "./AboutSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { ContactCard } from "./ContactCard";
import { Footer } from "./Footer";
import { ContactModal } from "./ContactModal";

export const LandingPage: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const openContact = () => setContactModalOpen(true);
  const closeContact = () => setContactModalOpen(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-slate-900 font-sans selection:bg-[#FF6B00]/20 selection:text-[#5E1449] antialiased">
      {/* 1. Header / Navbar */}
      <Navbar onOpenContact={openContact} />

      <main className="w-full overflow-x-hidden">
        {/* 2. Hero Section */}
        <HeroSection onOpenContact={openContact} />

        {/* 3. Logos Bar ("ILS NOUS FONT DÉJÀ CONFIANCE") */}
        <TrustLogos />

        {/* 4. Three Value Pillars ("Structurer", "Développer", "Renforcer") */}
        <PillarsSection />

        {/* 5. 6 Expertises Grid ("6 expertises pour soutenir votre croissance") */}
        <ExpertisesSection />

        {/* 6. High-Contrast Gradient CTA Banner ("Moins de tâches à gérer...") */}
        <CtaBanner onOpenContact={openContact} />

        {/* 7. 4-Step Process ("NOTRE MÉTHODE") */}
        <MethodSection />

        {/* 8. Four Metric Counters */}
        <StatsSection />

        {/* 9. Value Proposition Grid ("POURQUOI NOUS CHOISIR ?") */}
        <WhyUsSection />

        {/* 10. About Section ("À PROPOS D'ACH PROGESTIONS & OUTILS") */}
        <AboutSection />

        {/* 11. Social Proof & Testimonials ("Ce que disent nos clients") */}
        <TestimonialsSection />

        {/* 12. Contact Card / Conversion Box ("Parlons de votre projet") */}
        <ContactCard onOpenContact={openContact} />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* 14. Contact & Quote Interactive Modal */}
      <ContactModal isOpen={contactModalOpen} onClose={closeContact} />
    </div>
  );
};
