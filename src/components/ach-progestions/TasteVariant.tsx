"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Mail,
  Globe,
  Check,
  Star,
  ArrowRight,
  Sliders,
  Sparkles,
  ShieldCheck,
  Zap,
  Clock,
  Briefcase,
  Users,
  Search,
  Headphones,
  FolderKanban,
  PenTool,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { ContactModal } from "./ContactModal";

export const TasteVariant: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [hoursDelegated, setHoursDelegated] = useState(15);

  const calculateSavings = (hours: number) => {
    // Assuming an average executive hour value of 65€/h
    const hourlyRate = 65;
    const monthlyHours = hours * 4.2;
    const valueRecovered = Math.round(monthlyHours * hourlyRate);
    return {
      monthlyHours: Math.round(monthlyHours),
      valueRecovered,
    };
  };

  const savings = calculateSavings(hoursDelegated);

  const openContact = () => setModalOpen(true);
  const closeContact = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#0F172A] font-sans selection:bg-[#FF6B00]/20 selection:text-[#5E1449] antialiased">
      
      {/* Top Floating Variant Switcher Banner */}
      <div className="bg-[#5E1449] text-white py-2 px-4 text-xs font-medium sticky top-0 z-50 flex items-center justify-between border-b border-white/10 shadow-sm">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
            <span className="font-semibold tracking-wide">Variante Taste-Skill</span>
            <span className="hidden sm:inline text-white/60">· Direction Éditoriale Anti-Slop &amp; Asymétrique</span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors text-[11px] font-semibold"
            >
              ← Voir Maquette Classique
            </Link>
          </div>
        </div>
      </div>

      {/* Modern Navigation Header */}
      <header className="sticky top-8 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/70 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <BrandLogo size="md" />

          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            <a href="#services" className="text-sm font-medium text-slate-700 hover:text-[#5E1449] transition-colors">
              Expertises
            </a>
            <a href="#simulateur" className="text-sm font-medium text-slate-700 hover:text-[#5E1449] transition-colors">
              Simulateur
            </a>
            <a href="#methode" className="text-sm font-medium text-slate-700 hover:text-[#5E1449] transition-colors">
              Méthode
            </a>
            <a href="#a-propos" className="text-sm font-medium text-slate-700 hover:text-[#5E1449] transition-colors">
              L&apos;Équipe
            </a>
            <a href="#avis" className="text-sm font-medium text-slate-700 hover:text-[#5E1449] transition-colors">
              Avis
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={openContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#5E1449] hover:bg-[#4B0F3A] shadow-xs hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>Parler de mon besoin</span>
              <ChevronRight className="w-3.5 h-3.5 text-white/80" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ============================================================ */}
        {/* HERO SECTION — Asymmetric Architectural Split */}
        {/* ============================================================ */}
        <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              
              {/* Left Column: Focused Copy Stack (Max 4 elements per taste-skill) */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                
                {/* 1. Eyebrow (Used with restraint: count = 1) */}
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5E1449] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                  <span>Secrétariat · Prospection · Recrutement Remote</span>
                </div>

                {/* 2. Headline (Max 2 lines, tight leading, deliberate contrast) */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                  Déléguez l&apos;opérationnel.{" "}
                  <span className="text-[#FF6B00] block">
                    Gagnez du temps réel.
                  </span>
                </h1>

                {/* 3. Subtext (Concise, < 25 words per taste-skill) */}
                <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  Partenaire exécutif dédié aux dirigeants de TPE et PME. Nous reprenons le contrôle de votre administratif, de votre prospection commerciale et de vos recrutements à distance.
                </p>

                {/* 4. Single CTA Intent */}
                <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
                  <button
                    onClick={openContact}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white bg-[#5E1449] hover:bg-[#480D37] shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
                  >
                    <span>Confier une mission</span>
                    <ChevronRight className="w-4 h-4 text-[#FFB37C]" />
                  </button>

                  <a
                    href="#simulateur"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs transition-all duration-200"
                  >
                    <Sliders className="w-4 h-4 text-[#FF6B00]" />
                    <span>Calculer mon temps gagné</span>
                  </a>
                </div>

                {/* Minimalist Micro Badges */}
                <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                    Démarrage sous 48h
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                    Confidentialité certifiée
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                    Sans engagement rigide
                  </span>
                </div>

              </div>

              {/* Right Column: Authentic Visual Composition */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  
                  {/* Outer Architectural Border Container */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-200/80 p-2">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100">
                      <Image
                        src="/images/hosiane-ayaba.jpg"
                        alt="Hosiane Ayaba (Ana) — Fondatrice et directrice exécutive ACH Progestions & Outils"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 550px"
                        className="object-cover object-top hover:scale-102 transition-transform duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                      {/* Overlaid Card Info */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/40 flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h2 className="text-sm font-bold text-slate-900">Hosiane Ayaba (Ana)</h2>
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          </div>
                          <p className="text-[11px] text-slate-500">Opératrice Exécutive &amp; Fondatrice</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-2.5 py-1 rounded-lg bg-[#F7EEF4] text-[#5E1449] font-bold text-xs">
                            5,0/5 ★
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3D Neon Stamp Pill (Top Floating) */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-2 shadow-xl border border-slate-100 flex items-center gap-2">
                    <div className="w-9 h-9 relative">
                      <Image
                        src="/images/ach-neon-logo-transparent.png"
                        alt="Logo Néon"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-slate-800 pr-2">100% Remote</span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* LOGO WALL — Monochromatic & Clean (taste-skill rule) */}
        {/* ============================================================ */}
        <section className="py-10 bg-white border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-75 hover:opacity-100 transition-opacity">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black tracking-tight text-slate-800">Deméya</span>
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold">Services &amp; Conseils</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-slate-900 text-white flex items-center justify-center font-black text-xs">LF</div>
                <span className="text-base font-extrabold tracking-tight text-slate-800">LF BÂTIMENT</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black tracking-tight text-slate-900">CHS</span>
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#FF6B00]">HEAVEN ENERGY</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black tracking-tight text-slate-800">AFRI EXOTIC</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ASYMMETRIC BENTO GRID — 6 EXPERTISES (taste-skill anti-slop) */}
        {/* ============================================================ */}
        <section id="services" className="py-20 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header (No eyebrow here to maintain eyebrow restraint rule) */}
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                6 expertises chirurgicales pour propulser votre activité
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base">
                Une prise en charge complète, sans friction, avec une interlocutrice dédiée qui connaît vos dossiers par cœur.
              </p>
            </div>

            {/* Asymmetric Bento Layout: 3 Columns with varied cell spans & visual treatments */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
              
              {/* Tile 1 (Large Featured 7-col): Real Office Visual + Leads Calling */}
              <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between">
                <div className="p-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF3EB] text-[#FF6B00] flex items-center justify-center mb-5">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Téléprospection &amp; Qualification de Leads B2B
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md leading-relaxed">
                    Identification de cibles idéales, prise de contact téléphonique percutante et alimentation continue de votre pipeline commercial.
                  </p>
                </div>

                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 mt-4 border-t border-slate-100">
                  <Image
                    src="/images/ach-office-neon.png"
                    alt="Centre opérationnel ACH Progestions & Outils"
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-white font-medium flex items-center gap-2 border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                    <span>Ligne directe &amp; poste d&apos;appels dédié</span>
                  </div>
                </div>
              </div>

              {/* Tile 2 (5-col Accent Card): Secrétariat sur-mesure */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#5E1449] to-[#3B072D] text-white rounded-3xl p-8 shadow-md flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6">
                    <FolderKanban className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Secrétariat Exécutif Sur-Mesure
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-6">
                    Gestion rigoureuse de vos courriels, tri de votre boîte de réception, organisation d&apos;agenda, préparation des factures et suivi de vos dossiers.
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-white/90">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FFB37C]" />
                    <span>Zéro email sans réponse sous 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FFB37C]" />
                    <span>Planification calendrier &amp; réunions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FFB37C]" />
                    <span>Archivage numérique structuré</span>
                  </div>
                </div>
              </div>

              {/* Tile 3 (4-col): Sourcing & Recrutement Remote */}
              <div className="lg:col-span-4 bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#FFF3EB] text-[#FF6B00] flex items-center justify-center mb-5">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Sourcing &amp; Recrutement Remote
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Chasse de profils à distance qualifiés (assistants, commerciaux, profils digitaux), entretiens préliminaires et sélection rigoureuse.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span>Talents internationaux</span>
                  <span className="text-[#5E1449]">Profils vérifiés</span>
                </div>
              </div>

              {/* Tile 4 (4-col): Réception d'Appel */}
              <div className="lg:col-span-4 bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#F7EEF4] text-[#5E1449] flex items-center justify-center mb-5">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Standard &amp; Réception d&apos;Appels
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Accueil téléphonique impeccable, filtrage des démarchages indésirables, prise de messages détaillée et réorientation immédiate.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span>Plages horaires flexibles</span>
                  <span className="text-[#FF6B00]">100% professionnel</span>
                </div>
              </div>

              {/* Tile 5 (4-col): Rédaction de Script & Recherche de Contacts */}
              <div className="lg:col-span-4 bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#F7EEF4] text-[#5E1449] flex items-center justify-center mb-5">
                    <PenTool className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Scripts &amp; Recherche de Contact
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Écriture de pitchs percutants, emails de relance et constitution de listes de prospects ciblées avec coordonnées directes des décideurs.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span>Scripts conversion</span>
                  <span className="text-[#5E1449]">Bases RGPD conformes</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* INTERACTIVE TIME-SAVINGS CALCULATOR (High-Utility Feature) */}
        {/* ============================================================ */}
        <section id="simulateur" className="py-16 bg-white border-y border-slate-200/70 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#FAF9FC] rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                <div className="lg:col-span-6">
                  <span className="inline-block text-[#5E1449] font-bold text-xs uppercase tracking-widest mb-3">
                    SIMULATEUR DE CHARGE MENTALE
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Combien d&apos;heures perdez-vous chaque semaine sur l&apos;opérationnel ?
                  </h2>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Ajustez le curseur ci-dessous pour visualiser le temps que nous pouvons restituer à votre cœur de métier.
                  </p>

                  {/* Slider Control */}
                  <div className="mt-8">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-bold text-slate-700">Volume délégué souhaité</span>
                      <span className="text-xl font-black text-[#5E1449]">
                        {hoursDelegated} h <span className="text-xs font-normal text-slate-500">/ semaine</span>
                      </span>
                    </div>

                    <input
                      type="range"
                      min="5"
                      max="40"
                      step="5"
                      value={hoursDelegated}
                      onChange={(e) => setHoursDelegated(Number(e.target.value))}
                      className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#5E1449]"
                    />

                    <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-medium">
                      <span>5h (Tâches ciblées)</span>
                      <span>20h (Mi-temps)</span>
                      <span>40h (Temps plein)</span>
                    </div>
                  </div>
                </div>

                {/* Live Calculated Output */}
                <div className="lg:col-span-6 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Temps récupéré
                      </p>
                      <p className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
                        +{savings.monthlyHours}h
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">chaque mois pour votre croissance</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Valeur générée
                      </p>
                      <p className="text-3xl sm:text-4xl font-black text-[#FF6B00] mt-1">
                        ~{savings.valueRecovered.toLocaleString("fr-FR")} €
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">de valeur entrepreneuriale libérée</p>
                    </div>
                  </div>

                  <button
                    onClick={openContact}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#5E1449] to-[#3B072D] hover:opacity-95 shadow-md transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <span>Mettre en place ce forfait</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* METHOD TIMELINE — Architectural 4 Steps */}
        {/* ============================================================ */}
        <section id="methode" className="py-20 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mb-14">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Une méthode rodée, sans lourdeur administrative
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Du premier cadrage au reporting continu, chaque étape est transparente.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  num: "01",
                  title: "Diagnostic & Cadrage",
                  desc: "Échange de 20 minutes pour cartographier vos goulots d'étranglement et définir le périmètre exact.",
                },
                {
                  num: "02",
                  title: "Mise en Place",
                  desc: "Partage sécurisé des accès, création des process et cadrage des routines de travail.",
                },
                {
                  num: "03",
                  title: "Exécution Quotidienne",
                  desc: "Traitement quotidien avec rigueur, discrétion et reporting hebdomadaire clair.",
                },
                {
                  num: "04",
                  title: "Optimisation Continue",
                  desc: "Ajustement du volume d'heures et des priorités en fonction de l'évolution de votre activité.",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-black text-[#5E1449]/20 block mb-4">
                      {step.num}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="w-6 h-1 bg-[#FF6B00] rounded-full mt-6" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* PROOF & FOUNDER FOCUS — Authentic Trust */}
        {/* ============================================================ */}
        <section id="a-propos" className="py-20 bg-white border-t border-slate-200/70 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/ach-office-neon.png"
                      alt="Bureau officiel ACH Progestions & Outils"
                      fill
                      sizes="(max-width: 768px) 100vw, 550px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold">ACH Progestions &amp; Outils</p>
                      <p className="text-[11px] text-slate-400">Entreprise déclarée et active</p>
                    </div>
                    <span className="text-xs font-semibold text-[#FF6B00]">2 ans d&apos;activité</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Votre bras droit opérationnel, engagé comme un associé.
                </h2>
                
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Fondée par <strong>Hosiane Ayaba (Ana)</strong>, ACH PROGESTIONS &amp; OUTILS est née d&apos;un constat simple : trop de dirigeants talentueux stagnent parce qu&apos;ils consacrent 70% de leurs journées à des tâches administratives et de routine.
                </p>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Nous nous positionnons comme un véritable prolongement de votre entreprise : discret, réactif, fiable et 100% autonome.
                </p>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-slate-100 text-center">
                  <div className="p-3 bg-[#FAF9FC] rounded-xl">
                    <p className="text-2xl font-black text-[#5E1449]">2+</p>
                    <p className="text-[11px] text-slate-500 font-medium">Années d&apos;expérience</p>
                  </div>
                  <div className="p-3 bg-[#FFF3EB] rounded-xl">
                    <p className="text-2xl font-black text-[#FF6B00]">30+</p>
                    <p className="text-[11px] text-slate-500 font-medium">Tâches &amp; appels / jour</p>
                  </div>
                  <div className="p-3 bg-[#FAF9FC] rounded-xl">
                    <p className="text-2xl font-black text-[#5E1449]">5,0</p>
                    <p className="text-[11px] text-slate-500 font-medium">Note client vérifiée</p>
                  </div>
                  <div className="p-3 bg-[#FFF3EB] rounded-xl">
                    <p className="text-2xl font-black text-[#FF6B00]">100%</p>
                    <p className="text-[11px] text-slate-500 font-medium">Dédié à distance</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* TESTIMONIALS (Max 3 lines quote rule from taste-skill) */}
        {/* ============================================================ */}
        <section id="avis" className="py-20 bg-[#FAF9FC] scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Témoignages &amp; avis clients
                </h2>
                <p className="text-sm text-slate-500 mt-1">18 retours d&apos;expérience vérifiés sur nos interventions.</p>
              </div>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-800">
                <span className="text-[#FF6B00]">★★★★★</span>
                <span>5,0/5 sur Google &amp; plateformes</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "DSC",
                  role: "Dirigeant de TPE",
                  quote: "Professionnalisme, réactivité et organisation au rendez-vous. Toutes mes tâches administratives sont prises en charge avec efficacité.",
                },
                {
                  name: "ClubMarketing",
                  role: "Agence Conseil",
                  quote: "Top, réactif et à l'écoute. Je recommande sans hésiter pour toute entreprise qui veut déléguer sereinement.",
                },
                {
                  name: "Guillaume Villain",
                  role: "Entrepreneur",
                  quote: "Très bonne communication. Ana a vraiment tout donné pour arriver au résultat. Je recommande vivement !",
                },
                {
                  name: "Erika_IRE",
                  role: "Dirigeante PME",
                  quote: "Rapide, structuré, merci Ana pour ton travail de grande qualité au quotidien.",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex text-[#FF6B00] gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    {/* Max 3 lines quote rule per taste-skill */}
                    <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed line-clamp-3">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100">
                    <p className="text-xs font-bold text-slate-900">{t.name}</p>
                    <p className="text-[10px] text-slate-400">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* CONVERSION CARD — Direct & Transparent */}
        {/* ============================================================ */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#4A0D39] via-[#5E1449] to-[#FF6B00] rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-8">
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                    Prêt à soulager votre charge mentale dès cette semaine ?
                  </h2>
                  <p className="mt-4 text-white/90 text-sm sm:text-base max-w-xl leading-relaxed">
                    Échangeons gratuitement pendant 15 minutes sur vos priorités actuelles et identifions immédiatement les tâches à externaliser.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-white/90">
                    <a href="tel:0757690117" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-full transition-colors">
                      <Phone className="w-3.5 h-3.5 text-[#FFB37C]" />
                      <span>07 57 69 01 17</span>
                    </a>
                    <a href="mailto:achprogestion@gmail.com" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-full transition-colors">
                      <Mail className="w-3.5 h-3.5 text-[#FFB37C]" />
                      <span>achprogestion@gmail.com</span>
                    </a>
                    <a href="https://comeup.com/fr/@ana05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-full transition-colors">
                      <Globe className="w-3.5 h-3.5 text-[#FFB37C]" />
                      <span>ComeUp @ana05</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-4 text-center lg:text-right">
                  <button
                    onClick={openContact}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-[#5E1449] bg-white hover:bg-slate-50 shadow-xl transition-all hover:scale-105 active:scale-100 cursor-pointer"
                  >
                    <span>Confier une mission</span>
                    <ChevronRight className="w-4 h-4 text-[#FF6B00]" />
                  </button>
                  <p className="text-white/80 text-[11px] mt-2.5">Sans engagement · Réponse garantie sous 24h</p>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#FAF9FC] border-t border-slate-200/70 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <BrandLogo size="sm" showText={false} />
            <span>© 2024 ACH PROGESTIONS &amp; OUTILS · Tous droits réservés.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-[#5E1449] transition-colors">
              Version Maquette Originale
            </Link>
            <span>·</span>
            <button onClick={openContact} className="hover:text-[#5E1449] transition-colors cursor-pointer">
              Contact direct
            </button>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal isOpen={modalOpen} onClose={closeContact} />

    </div>
  );
};
