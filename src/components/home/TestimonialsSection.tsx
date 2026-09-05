"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Savannah Fox",
    country: "Nauru",
    avatar: "/images/Picture-1-3.jpg",
    rating: 5,
    text: "The customer support team is perfect. They provide a feasible solution for nearly all issues, which is perfect for beginner people like me. Thank you so much!",
  },
  {
    id: 2,
    name: "Judith Mckinney",
    country: "Seychelles",
    avatar: "/images/Picture-2-1.jpg",
    rating: 5,
    text: "Everything excellent from the team, I have been using it for years. Every time I need to do a full refresh to my webshop they are very helpful and respond really fast, highly recommended!",
  },
  {
    id: 3,
    name: "Harold Nguyen",
    country: "Syrian Arab Republic",
    avatar: "/images/Rectangle.jpg",
    rating: 5,
    text: "Can't choose just 1 reason for a 5 star rating, don't think I would work with another agency or theme again. Thank you so much for the stellar execution!",
  },
  {
    id: 4,
    name: "Savannah Fox",
    country: "Nauru",
    avatar: "/images/Picture-3.jpg",
    rating: 5,
    text: "Really amazing customer support. They are willing to go above and beyond in order to help you resolve the issue you have. I would honestly recommend XStore to anyone.",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  };

  return (
    <section className="py-24 bg-[#0C0C0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header & Badges */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-6 border-b border-white/10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DEF868]/10 border border-[#DEF868]/20 text-[#DEF868] text-xs font-semibold uppercase tracking-wider">
              <span>Client Feedback</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Trusted By Over <span className="text-[#DEF868]">50k Users</span> Worldwide
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Discover what our satisfied partners have to say about their collaborative growth experience with our team.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-4">
            <img
              src="/images/Group-64453.png"
              alt="Trust rating badge"
              className="h-12 w-auto object-contain"
            />
            <img
              src="/images/Group-64454.png"
              alt="Client review badge"
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>

        {/* Carousel / Grid of Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#141414] border border-white/10 rounded-3xl p-7 flex flex-col justify-between hover:border-[#DEF868]/40 hover:bg-[#181818] transition-all duration-300 shadow-xl group"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#DEF868]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/5">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-white/15 shrink-0 bg-white/5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#DEF868] transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-xs text-gray-500 font-medium">
                    {item.country}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
