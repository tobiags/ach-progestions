"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";
import {
  Trash2,
  ArrowRight,
  ShoppingBag,
  Tag,
  ArrowLeft,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  const applyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toLowerCase() === "startup20") {
      setDiscount(0.2);
      setCouponApplied(true);
    } else {
      alert("Invalid coupon code. Try 'STARTUP20' for 20% off!");
    }
  };

  const finalTotal = totalPrice * (1 - discount);

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
            <span className="text-[#DEF868]">Cart</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Your Selected <span className="text-[#DEF868]">Services</span>
          </h1>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-16 bg-[#0C0C0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cart.length === 0 ? (
            <div className="text-center py-24 bg-[#141414] border border-white/10 rounded-3xl p-8 max-w-xl mx-auto space-y-6">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto text-gray-500">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">Your cart is currently empty!</h2>
                <p className="text-sm text-gray-400">
                  You have not selected any growth plans or marketing service packages yet.
                </p>
              </div>
              <Link
                href="/pricing-plans"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#DEF868] text-black font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#cbdf55]"
              >
                <span>Browse Pricing Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Cart Table List */}
              <div className="lg:col-span-8 space-y-6">
                <div className="bg-[#141414] border border-white/10 rounded-3xl overflow-hidden">
                  <div className="p-6 border-b border-white/10 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">
                      Service Items ({cart.length})
                    </h3>
                    <button
                      onClick={clearCart}
                      className="text-xs text-red-400 hover:underline"
                    >
                      Clear All
                    </button>
                  </div>

                  <div className="divide-y divide-white/5 p-6 space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 first:pt-0"
                      >
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                          <div className="w-16 h-16 rounded-xl bg-black/40 border border-white/10 overflow-hidden shrink-0 flex items-center justify-center p-1">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white">{item.name}</h4>
                            <span className="text-xs text-[#DEF868] font-semibold">
                              ${item.price} per unit
                            </span>
                          </div>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                          <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-full px-3 py-1">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="text-gray-400 hover:text-white px-1 font-bold"
                            >
                              -
                            </button>
                            <span className="text-xs font-semibold px-2">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="text-gray-400 hover:text-white px-1 font-bold"
                            >
                              +
                            </button>
                          </div>

                          <span className="text-base font-bold text-white font-mono min-w-[70px] text-right">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-gray-500 hover:text-red-400 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coupon Box */}
                <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <Tag className="w-5 h-5 text-[#DEF868]" />
                    <span className="text-sm font-medium text-gray-300">
                      Have a promotional coupon?
                    </span>
                  </div>
                  <form onSubmit={applyCoupon} className="flex gap-2 w-full sm:w-auto">
                    <input
                      type="text"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      placeholder="e.g. STARTUP20"
                      className="bg-black/40 border border-white/10 rounded-full px-4 py-2 text-xs text-white uppercase focus:outline-none focus:border-[#DEF868]"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2 bg-white/10 hover:bg-[#DEF868] hover:text-black border border-white/15 rounded-full text-xs font-bold uppercase transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                </div>
                {couponApplied && (
                  <p className="text-xs text-[#DEF868] flex items-center gap-1.5 animate-in fade-in">
                    <CheckCircle className="w-3.5 h-3.5" /> Coupon &ldquo;STARTUP20&rdquo; applied! 20% discount activated.
                  </p>
                )}
              </div>

              {/* Order Summary Box */}
              <div className="lg:col-span-4 bg-[#141414] border border-white/10 rounded-3xl p-8 space-y-6 shadow-2xl">
                <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">
                  Order Summary
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span className="text-white font-mono font-medium">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>

                  {couponApplied && (
                    <div className="flex justify-between text-[#DEF868]">
                      <span>Discount (20%)</span>
                      <span className="font-mono font-medium">
                        -${(totalPrice * discount).toFixed(2)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-gray-400">
                    <span>Tax & Platform Fees</span>
                    <span className="text-white font-mono font-medium">$0.00</span>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex justify-between items-baseline">
                    <span className="text-base font-bold text-white">Total Due</span>
                    <span className="text-2xl font-black text-[#DEF868] font-mono">
                      ${finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#DEF868] text-black font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-[#cbdf55] hover:shadow-[0_0_25px_rgba(222,248,104,0.35)] transition-all transform active:scale-95"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="pt-2">
                  <Link
                    href="/pricing-plans"
                    className="flex items-center justify-center gap-2 text-xs font-semibold uppercase text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Continue shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
