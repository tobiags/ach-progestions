"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { SearchModal } from "./SearchModal";
import { CartDrawer } from "./CartDrawer";
import {
  Search,
  User,
  ShoppingBag,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing Plans", href: "/pricing-plans" },
];

export function Header() {
  const pathname = usePathname();
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0C0C0C]/90 backdrop-blur-md py-4 border-b border-white/10 shadow-lg shadow-black/40"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/Logo.png"
              alt="XStore Marketing Agency"
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? "text-[#DEF868] font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#DEF868] rounded-full animate-in fade-in duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#DEF868] hover:border-[#DEF868]/40 hover:bg-white/10 transition-all"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Account */}
            <Link
              href="/my-account"
              aria-label="Account"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#DEF868] hover:border-[#DEF868]/40 hover:bg-white/10 transition-all hidden sm:flex"
            >
              <User className="w-4 h-4" />
            </Link>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="View Cart"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#DEF868] hover:border-[#DEF868]/40 hover:bg-white/10 transition-all relative"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#DEF868] text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Let's Talk CTA */}
            <Link
              href="/contact-us"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#DEF868] text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#d0ea54] hover:shadow-[0_0_20px_rgba(222,248,104,0.35)] transition-all transform active:scale-95"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#101010] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 border-b border-white/5 ${
                    pathname === link.href ? "text-[#DEF868]" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/my-account"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium py-2 text-gray-300 hover:text-white border-b border-white/5"
              >
                My Account
              </Link>
            </nav>

            <Link
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#DEF868] text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#cbdf55]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </header>

      {/* Global Modals & Drawers */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer />
    </>
  );
}
