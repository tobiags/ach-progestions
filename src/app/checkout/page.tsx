"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";
import {
  CreditCard,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Lock,
  Sparkles,
} from "lucide-react";

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const [orderComplete, setOrderComplete] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [orderId, setOrderId] = useState("");

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomId);
    setOrderComplete(true);
    clearCart();
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
            <Link href="/cart" className="hover:text-[#DEF868] transition-colors">
              Cart
            </Link>
            <span>/</span>
            <span className="text-[#DEF868]">Checkout</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Finalize Your <span className="text-[#DEF868]">Order</span>
          </h1>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-16 bg-[#0C0C0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {orderComplete ? (
            <div className="max-w-xl mx-auto bg-[#141414] border border-white/10 rounded-3xl p-10 text-center space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#DEF868] text-black flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(222,248,104,0.4)]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold text-white">Order Confirmed!</h2>
                <p className="text-sm text-gray-400">
                  Thank you for partnering with XStore Elementor Digital Marketing Agency.
                </p>
                <div className="inline-block mt-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-[#DEF868]">
                  Order Reference: #{orderId}
                </div>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">
                An onboarding packet and direct link to your agency dashboard have been sent to your billing email address.
              </p>

              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#DEF868] text-black font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#cbdf55]"
                >
                  <span>Return to Homepage</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Billing Details */}
              <div className="lg:col-span-7 bg-[#141414] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-8">
                <div className="border-b border-white/10 pb-4">
                  <h3 className="text-2xl font-bold text-white">Billing Information</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Enter the company details for your official tax invoice.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase text-gray-300">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DEF868]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase text-gray-300">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Doe"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DEF868]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-gray-300">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Ventures Inc."
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DEF868]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase text-gray-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DEF868]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase text-gray-300">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DEF868]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-gray-300">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="8500 Beverly Blvd"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DEF868]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase text-gray-300">City *</label>
                      <input
                        type="text"
                        required
                        placeholder="Los Angeles"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DEF868]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase text-gray-300">State *</label>
                      <input
                        type="text"
                        required
                        placeholder="CA"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DEF868]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase text-gray-300">Zip Code *</label>
                      <input
                        type="text"
                        required
                        placeholder="90048"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#DEF868]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Payment & Summary */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#141414] border border-white/10 rounded-3xl p-8 space-y-6 shadow-2xl">
                  <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">
                    Your Selection
                  </h3>

                  <div className="space-y-3 divide-y divide-white/5 text-sm">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center pt-3 first:pt-0">
                        <span className="text-gray-300">
                          {item.name} × {item.quantity}
                        </span>
                        <span className="text-white font-mono font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}

                    <div className="flex justify-between items-baseline pt-4">
                      <span className="text-base font-bold text-white">Total Amount</span>
                      <span className="text-2xl font-black text-[#DEF868] font-mono">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Payment Method Selector */}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                      Select Payment Method
                    </span>

                    <div className="space-y-2">
                      <label className="flex items-center gap-3 p-3.5 rounded-xl border border-white/10 bg-black/30 cursor-pointer hover:border-[#DEF868]/40 transition-colors">
                        <input
                          type="radio"
                          name="payment"
                          value="card"
                          checked={paymentMethod === "card"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="text-[#DEF868]"
                        />
                        <CreditCard className="w-4 h-4 text-[#DEF868]" />
                        <span className="text-xs font-semibold text-white">Credit / Debit Card</span>
                      </label>

                      <label className="flex items-center gap-3 p-3.5 rounded-xl border border-white/10 bg-black/30 cursor-pointer hover:border-[#DEF868]/40 transition-colors">
                        <input
                          type="radio"
                          name="payment"
                          value="paypal"
                          checked={paymentMethod === "paypal"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="text-[#DEF868]"
                        />
                        <span className="text-xs font-semibold text-white">PayPal Express</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Lock className="w-3.5 h-3.5 text-[#DEF868]" />
                    <span>256-bit SSL encrypted secure checkout</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#DEF868] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-[#cbdf55] hover:shadow-[0_0_30px_rgba(222,248,104,0.35)] transition-all transform active:scale-95"
                  >
                    <span>Authorize & Place Order</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
