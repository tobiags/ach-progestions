"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const filtered = query.trim()
    ? blogPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-[#141414] border border-white/15 rounded-2xl p-6 shadow-2xl z-10 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-6 h-6 text-[#DEF868]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, articles, or insights..."
              autoFocus
              className="w-full bg-transparent text-white placeholder-gray-500 text-lg focus:outline-none"
            />
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Results / Suggestions */}
        <div className="max-h-80 overflow-y-auto space-y-3">
          {query.trim() === "" ? (
            <div className="text-sm text-gray-400 space-y-2">
              <p className="font-semibold text-gray-300">Quick Searches:</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Search Engine Optimization", "Email Marketing", "Branding", "Social Media", "Pricing"].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1 bg-white/5 hover:bg-[#DEF868]/20 hover:text-[#DEF868] border border-white/10 rounded-full text-xs transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : filtered.length > 0 ? (
            filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 group"
              >
                <div>
                  <span className="text-xs text-[#DEF868] font-medium tracking-wide uppercase">
                    {post.category}
                  </span>
                  <h4 className="text-sm font-semibold text-white group-hover:text-[#DEF868] transition-colors">
                    {post.title}
                  </h4>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#DEF868] transform group-hover:translate-x-1 transition-all" />
              </Link>
            ))
          ) : (
            <p className="text-sm text-gray-500 text-center py-6">
              No results found for &ldquo;{query}&rdquo;. Try another search term.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
