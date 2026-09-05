import React from "react";
import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <BrandLogo size="md" className="mb-4" />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mt-1">
              Votre partenaire administratif, commercial et RH à distance pour une
              entreprise plus sereine et performante.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/hosiane-ayaba/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#5E1449] hover:border-[#5E1449]/30 flex items-center justify-center transition-all"
                aria-label="LinkedIn Hosiane Ayaba"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66.92 0 1.66-.74 1.66-1.66 0-.92-.74-1.66-1.66-1.66Z" />
                </svg>
              </a>
              <a
                href="https://comeup.com/fr/@ana05"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#FF6B00] hover:border-[#FF6B00]/30 flex items-center justify-center transition-all"
                aria-label="ComeUp profil"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="mailto:achprogestion@gmail.com"
                className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#5E1449] hover:border-[#5E1449]/30 flex items-center justify-center transition-all"
                aria-label="Envoyer un email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Liens rapides */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-900 mb-4">
              Liens rapides
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <li>
                <Link href="#services" className="hover:text-[#5E1449] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#methode" className="hover:text-[#5E1449] transition-colors">
                  Méthode
                </Link>
              </li>
              <li>
                <Link href="#a-propos" className="hover:text-[#5E1449] transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#avis" className="hover:text-[#5E1449] transition-colors">
                  Avis
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#5E1449] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Nos services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-900 mb-4">
              Nos services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <li>
                <Link href="#services" className="hover:text-[#5E1449] transition-colors">
                  Secrétariat sur-mesure
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#5E1449] transition-colors">
                  Téléprospection &amp; Leads
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#5E1449] transition-colors">
                  Rédaction de Script
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#5E1449] transition-colors">
                  Réception d&apos;Appel
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#5E1449] transition-colors">
                  Recherche de Contact
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#5E1449] transition-colors">
                  Sourcing &amp; Recrutement Remote
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact direct */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-900 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <a href="tel:0757690117" className="hover:text-[#5E1449] font-medium">
                  07 57 69 01 17
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#5E1449] shrink-0" />
                <a href="mailto:achprogestion@gmail.com" className="hover:text-[#5E1449] font-medium truncate">
                  achprogestion@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <a
                  href="https://comeup.com/fr/@ana05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5E1449] font-medium"
                >
                  comeup.com/fr/@ana05
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 fill-current text-[#5E1449] shrink-0" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66.92 0 1.66-.74 1.66-1.66 0-.92-.74-1.66-1.66-1.66Z" />
                </svg>
                <a
                  href="https://www.linkedin.com/in/hosiane-ayaba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5E1449] font-medium"
                >
                  Hosiane Ayaba — LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2024 ACH PROGESTIONS &amp; OUTILS - Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="#contact" className="hover:text-slate-800 transition-colors">
              Confidentialité
            </Link>
            <span>•</span>
            <Link href="#contact" className="hover:text-slate-800 transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
