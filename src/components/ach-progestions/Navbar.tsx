"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Méthode", href: "#methode" },
    { label: "À propos", href: "#a-propos" },
    { label: "Avis", href: "#avis" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Floating Fluid Island Nav (Soft-Skill Directive) */}
      <header
        className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isScrolled
            ? "bg-white/85 backdrop-blur-2xl py-2.5 px-4 sm:px-6 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.1)] border border-slate-200/80 ring-1 ring-slate-900/5"
            : "bg-white/90 backdrop-blur-xl py-3 px-5 sm:px-7 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.06)] border border-slate-200/60"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <BrandLogo size="sm" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] font-semibold text-slate-700 hover:text-[#5E1449] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6B00] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Header Right: Button-in-Button Architecture */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#5E1449] to-[#3B072D] hover:from-[#6E1856] hover:to-[#490A37] shadow-[0_4px_16px_-2px_rgba(94,20,73,0.35)] hover:shadow-[0_8px_24px_-4px_rgba(94,20,73,0.45)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
            >
              <span>Parler de mon besoin</span>
              <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FFB37C]" />
              </div>
            </button>
          </div>

          {/* Mobile Hamburger Button with Fluid Morph */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <div className="w-4 h-3.5 flex flex-col justify-between items-center relative">
                <span
                  className={`w-full h-0.5 bg-slate-800 rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-slate-800 rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-slate-800 rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Glass Mobile Overlay with Staggered Links */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 animate-in fade-in duration-300 md:hidden">
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link, idx) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-black text-white hover:text-[#FF6B00] transition-colors"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact?.();
              }}
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#5E1449] to-[#3B072D] shadow-xl active:scale-[0.98] cursor-pointer"
            >
              <span>Parler de mon besoin</span>
              <ArrowUpRight className="w-4 h-4 text-[#FFB37C]" />
            </button>

            <div className="flex flex-col gap-2.5 text-xs text-white/60">
              <a href="tel:0757690117" className="flex items-center gap-2 hover:text-white">
                <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>07 57 69 01 17</span>
              </a>
              <a href="mailto:achprogestion@gmail.com" className="flex items-center gap-2 hover:text-white">
                <Mail className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>achprogestion@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
