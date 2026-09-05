"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#080808] border-t border-white/10 text-white relative overflow-hidden pt-20 pb-12">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#DEF868]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Top CTA Banner */}
        <div className="bg-gradient-to-r from-[#141414] via-[#1a1a1a] to-[#141414] border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#DEF868]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#DEF868]/15 transition-all duration-700" />

          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DEF868]/10 border border-[#DEF868]/20 text-[#DEF868] text-xs font-semibold uppercase tracking-wider">
              <span>Next-Gen Agency</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Let&apos;s turn some <span className="text-[#DEF868]">heads!</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Ready to elevate your startup or scale your eCommerce revenue? Book a strategy session with our creative specialists.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#DEF868] text-black font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[#cbdf55] hover:shadow-[0_0_25px_rgba(222,248,104,0.4)] transition-all transform active:scale-95 text-center"
            >
              <span>Start A Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing-plans"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/15 text-white font-medium text-sm rounded-full hover:bg-white/10 transition-colors text-center"
            >
              <span>View Pricing</span>
            </Link>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pt-6">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <img
                src="/images/Logo.png"
                alt="XStore Marketing Agency"
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We design exceptional brands, products, web apps, mobile apps, and high-converting marketing campaigns for ambitious global startups.
            </p>

            {/* Newsletter Form */}
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                Subscribe to our newsletter
              </span>
              <form onSubmit={handleSubscribe} className="flex max-w-sm gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#DEF868]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#DEF868] text-black font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#cbdf55] transition-colors"
                >
                  Join
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-[#DEF868] flex items-center gap-1.5 animate-in fade-in">
                  <CheckCircle className="w-3.5 h-3.5" /> Thank you for subscribing!
                </p>
              )}
            </div>
          </div>

          {/* Column: Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DEF868] mt-1 shrink-0" />
                <span>8500 Beverly Blvd, Los Angeles, CA 90048, USA</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DEF868] shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DEF868] shrink-0" />
                <a
                  href="mailto:contact@xstore-agency.com"
                  className="hover:text-white transition-colors"
                >
                  contact@xstore-agency.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Sitemap */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Sitemap
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#DEF868] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[#DEF868] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#DEF868] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#DEF868] transition-colors">
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/pricing-plans" className="hover:text-[#DEF868] transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/my-account" className="hover:text-[#DEF868] transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Solutions */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/#solutions" className="hover:text-[#DEF868] transition-colors">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="hover:text-[#DEF868] transition-colors">
                  Email Marketing Funnels
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="hover:text-[#DEF868] transition-colors">
                  High-Speed Web Development
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="hover:text-[#DEF868] transition-colors">
                  Social Media Performance Ads
                </Link>
              </li>
              <li>
                <Link href="/pricing-plans" className="hover:text-[#DEF868] transition-colors">
                  Growth Strategy Consulting
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2025 XStore Elementor Digital Marketing Agency. All rights reserved.</p>

          <div className="flex items-center gap-4 text-gray-400">
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-full bg-white/5 hover:text-[#DEF868] hover:bg-white/10 transition-colors"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-full bg-white/5 hover:text-[#DEF868] hover:bg-white/10 transition-colors"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-full bg-white/5 hover:text-[#DEF868] hover:bg-white/10 transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-white/5 hover:text-[#DEF868] hover:bg-white/10 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
