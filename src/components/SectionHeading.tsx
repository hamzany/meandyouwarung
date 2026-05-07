"use client";

import React from "react";
import { useScrollReveal } from "@/lib/hooks";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"} ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      {badge && (
        <span
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-4 ${
            dark
              ? "bg-army-500/20 text-army-400 border border-army-500/25"
              : "bg-army-100 text-army-700 border border-army-200"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-army-400" : "bg-army-500"}`} />
          {badge}
        </span>
      )}

      <h2
        className={`font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${
          dark ? "text-cream-50" : "text-cream-900"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-army-500 to-army-400">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base sm:text-lg leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-cream-400" : "text-cream-600"}`}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative line */}
      <div
        className={`mt-6 h-0.5 w-16 rounded-full bg-gradient-to-r from-army-500 to-gold-400 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
