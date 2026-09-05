import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkillsSection } from "@/components/home/SkillsSection";
import { FeatureShowcase } from "@/components/home/FeatureShowcase";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ArrowUpRight, CheckCircle2, Sparkles, Target, Eye, Shield } from "lucide-react";

const team = [
  {
    name: "Rose Tyler",
    role: "Founder & Creative Director",
    image: "/images/Picture-4.jpg",
    bio: "Passionate about building brand identities that withstand algorithmic shifts and connect on human levels.",
  },
  {
    name: "Savannah Fox",
    role: "Head of Growth & Performance",
    image: "/images/Picture-1-1.jpg",
    bio: "Over 10 years of experience orchestrating multimillion-dollar digital acquisition funnels.",
  },
  {
    name: "Harold Nguyen",
    role: "Lead Full-Stack Architect",
    image: "/images/Picture-2-2.jpg",
    bio: "Specializing in ultra-fast Next.js web applications, headless Shopify, and bespoke e-commerce engines.",
  },
  {
    name: "Judith Mckinney",
    role: "Brand Strategy Specialist",
    image: "/images/Picture-1-4.jpg",
    bio: "Helping startups articulate their competitive edge through typography, voice, and narrative.",
  },
];

export const metadata = {
  title: "About Us - XStore Digital Marketing Agency",
  description: "Learn more about our mission, vision, values, and the expert team powering modern digital marketing.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#0C0C0C] text-white flex flex-col selection:bg-[#DEF868] selection:text-black">
      <Header />

      {/* Hero Banner with Breadcrumbs */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-[#141414] via-[#0C0C0C] to-[#0C0C0C] border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#DEF868]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            <Link href="/" className="hover:text-[#DEF868] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#DEF868]">About Us</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
            Learn more <span className="text-[#DEF868]">about us</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed">
            We are a collective of digital architects, brand designers, and growth engineers dedicated to launching market-defining startups.
          </p>
        </div>
      </section>

      {/* Mission & Vision Bento */}
      <section className="py-20 bg-[#0C0C0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#141414] border border-white/10 rounded-3xl p-8 space-y-4 hover:border-[#DEF868]/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#DEF868]/10 text-[#DEF868] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering high-potential brands with exceptional design, frictionless user experience, and revenue-maximizing performance marketing.
              </p>
            </div>

            <div className="bg-[#141414] border border-white/10 rounded-3xl p-8 space-y-4 hover:border-[#DEF868]/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#DEF868]/10 text-[#DEF868] flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                To set the global standard for modern digital agencies by blending cutting-edge engineering with bold, uncompromising aesthetic taste.
              </p>
            </div>

            <div className="bg-[#141414] border border-white/10 rounded-3xl p-8 space-y-4 hover:border-[#DEF868]/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#DEF868]/10 text-[#DEF868] flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Integrity</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transparent metrics, verifiable ROI, and continuous collaboration. We operate as an integrated extension of your internal leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Stats Reused from Home */}
      <SkillsSection />

      {/* Feature Showcase */}
      <FeatureShowcase />

      {/* Team Showcase */}
      <section className="py-24 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DEF868]/10 border border-[#DEF868]/20 text-[#DEF868] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Creative Leadership</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Meet the minds <span className="text-[#DEF868]">behind the work</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              A diverse team of senior strategists, award-winning designers, and technical visionaries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[#141414] border border-white/10 rounded-3xl overflow-hidden group hover:border-[#DEF868]/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="relative overflow-hidden aspect-[4/5] bg-black/40">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#DEF868] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#DEF868] font-semibold uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      <Footer />
    </main>
  );
}
