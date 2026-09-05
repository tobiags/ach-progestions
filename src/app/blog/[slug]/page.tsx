import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/lib/blog-data";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
} from "lucide-react";
import { TwitterIcon, FacebookIcon, LinkedinIcon } from "@/components/icons";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} - XStore Marketing Agency`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0C0C0C] text-white flex flex-col selection:bg-[#DEF868] selection:text-black">
      <Header />

      {/* Article Header Banner */}
      <section className="pt-36 pb-12 bg-gradient-to-b from-[#141414] via-[#0C0C0C] to-[#0C0C0C] border-b border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            <Link href="/" className="hover:text-[#DEF868] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#DEF868] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#DEF868] truncate max-w-xs">{post.title}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DEF868]/10 border border-[#DEF868]/20 text-[#DEF868] text-xs font-semibold uppercase tracking-wider">
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Meta Info Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-400 pt-2">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#DEF868]" />
              <span className="text-white font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#DEF868]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#DEF868]" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Banner Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/9] bg-black/40">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content & Sidebar */}
      <article className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div
          className="prose prose-invert prose-lg max-w-none space-y-6 text-gray-300 leading-relaxed font-normal text-base sm:text-lg [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-white [&_h3]:pt-6 [&_blockquote]:border-l-4 [&_blockquote]:border-[#DEF868] [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-[#DEF868] [&_blockquote]:my-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Share2 className="w-5 h-5 text-[#DEF868]" />
            <span className="text-sm font-bold uppercase tracking-wider text-white">
              Share this story:
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Share on Twitter"
              className="p-2.5 rounded-full bg-white/5 hover:bg-[#DEF868] hover:text-black transition-colors"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Share on Facebook"
              className="p-2.5 rounded-full bg-white/5 hover:bg-[#DEF868] hover:text-black transition-colors"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Share on LinkedIn"
              className="p-2.5 rounded-full bg-white/5 hover:bg-[#DEF868] hover:text-black transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Back Link */}
        <div className="pt-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 hover:border-[#DEF868]/40 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all insights</span>
          </Link>
        </div>
      </article>

      {/* Related Stories */}
      <section className="py-16 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Recommended <span className="text-[#DEF868]">Readings</span>
            </h2>
            <Link
              href="/blog"
              className="text-xs font-bold uppercase tracking-wider text-[#DEF868] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <div
                key={item.slug}
                className="bg-[#121212] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#DEF868]/40 transition-all p-5 space-y-4"
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-[#DEF868] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-[#DEF868] transition-colors line-clamp-2">
                    <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
