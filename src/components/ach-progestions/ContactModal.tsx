"use client";

import React, { useState } from "react";
import { X, Send, Phone, Mail, CheckCircle2 } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Secrétariat sur-mesure",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate success
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Message envoyé !</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Merci pour votre confiance. Nous revenons vers vous dans les 24 heures ouvrées
              pour échanger sur vos besoins.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#5E1449] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Fermer la fenêtre
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <BrandLogo size="sm" className="mb-2" />
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Parler de votre projet
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Remplissez ce formulaire ou contactez-nous directement par téléphone au{" "}
                <strong className="text-[#FF6B00]">07 57 69 01 17</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Votre nom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jean Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#5E1449] focus:ring-2 focus:ring-[#5E1449]/10"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Entreprise / Activité
                  </label>
                  <input
                    type="text"
                    placeholder="Nom de votre structure"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#5E1449] focus:ring-2 focus:ring-[#5E1449]/10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jean@entreprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#5E1449] focus:ring-2 focus:ring-[#5E1449]/10"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="06 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#5E1449] focus:ring-2 focus:ring-[#5E1449]/10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Service principal recherché
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-hidden focus:border-[#5E1449] focus:ring-2 focus:ring-[#5E1449]/10"
                >
                  <option>Secrétariat sur-mesure</option>
                  <option>Téléprospection &amp; Qualification de Leads</option>
                  <option>Rédaction de Script</option>
                  <option>Réception d&apos;Appel</option>
                  <option>Recherche de Contact</option>
                  <option>Sourcing &amp; Recrutement Remote</option>
                  <option>Autre accompagnement personnalisé</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Décrivez brièvement votre besoin
                </label>
                <textarea
                  rows={3}
                  placeholder="Volume de travail, urgence, objectifs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#5E1449] focus:ring-2 focus:ring-[#5E1449]/10"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#5E1449] to-[#3B082D] hover:opacity-95 shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer ma demande</span>
                </button>

                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <a href="tel:0757690117" className="flex items-center gap-1 hover:text-[#5E1449]">
                    <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>07 57 69 01 17</span>
                  </a>
                  <a href="mailto:achprogestion@gmail.com" className="flex items-center gap-1 hover:text-[#5E1449]">
                    <Mail className="w-3.5 h-3.5 text-[#5E1449]" />
                    <span>Email direct</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
