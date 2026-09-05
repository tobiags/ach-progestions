"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { User, Lock, Mail, CheckCircle, ArrowRight, Sparkles, LayoutDashboard, ShoppingBag, Settings, LogOut } from "lucide-react";

export default function MyAccountPage() {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username) {
      setIsLoggedIn(true);
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
            <span className="text-[#DEF868]">My Account</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Client Portal & <span className="text-[#DEF868]">Account</span>
          </h1>
        </div>
      </section>

      {/* Main Account Portal */}
      <section className="py-16 bg-[#0C0C0C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoggedIn ? (
            /* Dashboard View */
            <div className="bg-[#141414] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-8 shadow-2xl animate-in fade-in">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#DEF868] text-black font-bold text-xl flex items-center justify-center">
                    {username ? username[0].toUpperCase() : "U"}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Welcome back, {username}!</h3>
                    <p className="text-xs text-gray-400">XStore Growth Suite Member</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-xs font-bold uppercase tracking-wider rounded-full text-gray-300 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Log Out</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-black/40 border border-white/5 rounded-2xl p-6 space-y-2">
                  <span className="text-xs text-gray-400 uppercase font-semibold">Active Plan</span>
                  <div className="text-xl font-extrabold text-[#DEF868]">Premium Tier</div>
                  <p className="text-xs text-gray-500">Renews on August 2027</p>
                </div>

                <div className="bg-black/40 border border-white/5 rounded-2xl p-6 space-y-2">
                  <span className="text-xs text-gray-400 uppercase font-semibold">Total Orders</span>
                  <div className="text-xl font-extrabold text-white">2 Completed</div>
                  <Link href="/cart" className="text-xs text-[#DEF868] hover:underline">
                    View Invoices
                  </Link>
                </div>

                <div className="bg-black/40 border border-white/5 rounded-2xl p-6 space-y-2">
                  <span className="text-xs text-gray-400 uppercase font-semibold">Lead Strategist</span>
                  <div className="text-xl font-extrabold text-white">Rose Tyler</div>
                  <Link href="/contact-us" className="text-xs text-[#DEF868] hover:underline">
                    Schedule Sync
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            /* Auth Form (Login / Register) */
            <div className="max-w-md mx-auto bg-[#141414] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl">
              {/* Tab Selector */}
              <div className="flex bg-black/40 p-1 rounded-2xl border border-white/10">
                <button
                  onClick={() => setTab("login")}
                  className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                    tab === "login"
                      ? "bg-[#DEF868] text-black shadow-md"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Log In
                </button>
                <button
                  onClick={() => setTab("register")}
                  className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                    tab === "register"
                      ? "bg-[#DEF868] text-black shadow-md"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Register
                </button>
              </div>

              {tab === "login" ? (
                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-gray-300">
                      Username or Email *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="e.g. founder@startup.com"
                        className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DEF868]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-semibold uppercase text-gray-300">
                        Password *
                      </label>
                      <Link
                        href="/my-account/lost-password"
                        className="text-[11px] text-gray-400 hover:text-[#DEF868] transition-colors"
                      >
                        Lost your password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DEF868]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="rounded border-white/10 text-[#DEF868]"
                    />
                    <label htmlFor="remember" className="text-xs text-gray-400 cursor-pointer">
                      Remember me
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#DEF868] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-[#cbdf55] hover:shadow-[0_0_25px_rgba(222,248,104,0.35)] transition-all"
                  >
                    <span>Sign In to Portal</span>
                  </button>
                </form>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsLoggedIn(true);
                  }}
                  className="space-y-5"
                >
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-gray-300">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="founder@company.com"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DEF868]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-gray-300">
                      Password *
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DEF868]"
                    />
                  </div>

                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    A confirmation link will be sent to your email address. Your personal data will be used to support your experience throughout this website.
                  </p>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#DEF868] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-[#cbdf55] transition-all"
                  >
                    <span>Create Account</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
