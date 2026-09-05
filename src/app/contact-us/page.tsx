"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    q: "What services does XStore Marketing Agency specialize in?",
    a: "We specialize in custom eCommerce growth, Technical SEO, High-Converting Web Development (Next.js & React), Multi-channel Paid Advertising (Meta, Google, TikTok), and Brand Identity Systems.",
  },
  {
    q: "How long does a typical web design or branding project take?",
    a: "Most startup brand identity and website redesign projects range from 3 to 6 weeks from initial discovery through prototype approval and production deployment.",
  },
  {
    q: "Do you offer ongoing retainer growth management?",
    a: "Yes! Our monthly performance marketing retainers include active campaign management, conversion rate optimization, analytics auditing, and bi-weekly growth syncs.",
  },
  {
    q: "How do we get started?",
    a: "Fill out the contact form below with details about your current product or vision. Our team will review your requirements and schedule an introductory strategy session within 24 hours.",
  },
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Search Engine Optimization",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Search Engine Optimization",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#0C0C0C] text-white flex flex-col selection:bg-[#DEF868] selection:text-black">
      <Header />

      {/* Hero Header */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-[#141414] via-[#0C0C0C] to-[#0C0C0C] border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#DEF868]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            <Link href="/" className="hover:text-[#DEF868] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#DEF868]">Contact Us</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DEF868]/10 border border-[#DEF868]/20 text-[#DEF868] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ways to contact us</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
            Get in touch <span className="text-[#DEF868]">with us</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed">
            Have a project in mind or want to supercharge your startup&apos;s growth? Send us a message and let&apos;s build something extraordinary.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-16 bg-[#0C0C0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#141414] border border-white/10 rounded-2xl p-7 space-y-3 hover:border-[#DEF868]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#DEF868]/10 text-[#DEF868] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Office Location</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                8500 Beverly Blvd, Los Angeles, CA 90048, United States
              </p>
            </div>

            <div className="bg-[#141414] border border-white/10 rounded-2xl p-7 space-y-3 hover:border-[#DEF868]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#DEF868]/10 text-[#DEF868] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Phone Support</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                +1 (234) 567-890 <br /> Mon - Fri from 9am to 6pm
              </p>
            </div>

            <div className="bg-[#141414] border border-white/10 rounded-2xl p-7 space-y-3 hover:border-[#DEF868]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#DEF868]/10 text-[#DEF868] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Email Us</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                contact@xstore-agency.com <br /> 24/7 client response
              </p>
            </div>

            <div className="bg-[#141414] border border-white/10 rounded-2xl p-7 space-y-3 hover:border-[#DEF868]/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#DEF868]/10 text-[#DEF868] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Working Hours</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Monday – Friday: 09:00 – 18:00 <br /> Weekend: On-demand
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form & Image Section */}
      <section className="py-16 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Form */}
            <div className="lg:col-span-7 bg-[#141414] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Send us a message
                </h3>
                <p className="text-sm text-gray-400">
                  Tell us about your brand goals and timeline. We respond within one business day.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#DEF868]/10 border border-[#DEF868]/30 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#DEF868] text-black flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Received!</h4>
                  <p className="text-sm text-gray-300">
                    Thank you for reaching out. A senior strategist will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DEF868]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@startup.com"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DEF868]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DEF868]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                        Primary Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DEF868]"
                      >
                        <option>Search Engine Optimization</option>
                        <option>Email Marketing</option>
                        <option>Website Development</option>
                        <option>Social Media Advertisement</option>
                        <option>Full Brand Identity</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your objectives, target timeline, and budget..."
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DEF868]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#DEF868] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-[#cbdf55] hover:shadow-[0_0_30px_rgba(222,248,104,0.35)] transition-all flex items-center justify-center gap-2 transform active:scale-98"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Graphic Preview */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-white/10 bg-[#141414] group shadow-2xl">
              <img
                src="/images/Picture-2-2.jpg"
                alt="XStore Agency Office atmosphere"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 bg-[#0C0C0C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Frequently Asked <span className="text-[#DEF868]">Questions</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Answers to common queries about our process, engagements, and deliverables.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#141414] border border-white/10 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-base font-bold text-white pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#DEF868] transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
