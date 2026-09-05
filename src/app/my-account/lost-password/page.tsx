"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";

export default function LostPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSent(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#0C0C0C] text-white flex flex-col selection:bg-[#DEF868] selection:text-black">
      <Header />

      {/* Hero Header */}
      <section className="pt-36 pb-12 bg-gradient-to-b from-[#141414] via-[#0C0C0C] to-[#0C0C0C] border-b border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            <Link href="/" className="hover:text-[#DEF868] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/my-account" className="hover:text-[#DEF868] transition-colors">
              My Account
            </Link>
            <span>/</span>
            <span className="text-[#DEF868]">Lost Password</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Reset Your <span className="text-[#DEF868]">Password</span>
          </h1>
        </div>
      </section>

      {/* Reset Form */}
      <section className="py-16 bg-[#0C0C0C]">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-[#141414] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl">
            {sent ? (
              <div className="text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-[#DEF868] text-black flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">Reset Link Sent</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  A password reset link has been dispatched to <span className="text-white font-semibold">{email}</span>. Please check your inbox and spam folders.
                </p>
                <div className="pt-4">
                  <Link
                    href="/my-account"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-[#DEF868] hover:text-black rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Log In</span>
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleReset} className="space-y-5">
                <p className="text-xs text-gray-400 leading-relaxed">
                  Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
                </p>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-gray-300">
                    Username or Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="founder@startup.com"
                      className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DEF868]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#DEF868] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-[#cbdf55] hover:shadow-[0_0_25px_rgba(222,248,104,0.35)] transition-all"
                >
                  <span>Reset Password</span>
                </button>

                <div className="text-center pt-2">
                  <Link
                    href="/my-account"
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    Remember your credentials? Sign In
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
