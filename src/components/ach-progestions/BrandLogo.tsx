import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "light" | "dark";
  showText?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "light",
  showText = true,
  className = "",
  size = "md",
}) => {
  const iconSizes = {
    sm: "w-9 h-9",
    md: "w-11 h-11",
    lg: "w-14 h-14",
  };

  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group transition-transform hover:opacity-95 ${className}`}
      aria-label="ACH PROGESTIONS & OUTILS"
    >
      {/* 3D Neon Emblem */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <Image
          src="/images/ach-neon-logo-transparent.png"
          alt="ACH Progestions & Outils Logo"
          fill
          sizes="60px"
          className="object-contain filter drop-shadow-[0_2px_8px_rgba(255,107,0,0.25)] group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-none text-left">
          <span
            className={`font-black tracking-tight text-[15px] sm:text-base ${
              isDark ? "text-white" : "text-[#5E1449]"
            }`}
          >
            ACH
          </span>
          <span
            className={`font-bold tracking-wider text-[10px] sm:text-[11px] uppercase ${
              isDark ? "text-slate-300" : "text-[#5E1449]"
            }`}
          >
            PROGESTIONS
          </span>
          <span className="font-semibold text-[9px] sm:text-[10px] tracking-widest text-[#FF6B00] uppercase">
            &amp; OUTILS
          </span>
        </div>
      )}
    </Link>
  );
};
