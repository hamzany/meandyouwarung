"use client";

import { useState, useEffect } from "react";
import { useNavbarScroll } from "@/lib/hooks";
import { businessInfo, getWhatsAppLink } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const isScrolled = useNavbarScroll(50);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.tours"), href: "#tours" },
    { label: t("nav.menu"), href: "#menu" },
    { label: t("nav.gallery"), href: "#gallery" },
    { label: t("nav.location"), href: "#location" },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-cream-950/95 backdrop-blur-lg shadow-lg shadow-cream-950/20 py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-army-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-cream-50">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor" />
              </svg>
            </div>
            <div>
              <span className="font-heading text-xl font-bold text-cream-50 tracking-wide">
                Me & You
              </span>
              <span className="hidden sm:block text-[14px] tracking-[0.25em] text-army-400 font-medium -mt-1">
                Three Little Birds
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === link.href.replace("#", "")
                  ? "text-army-400 bg-army-500/15"
                  : "text-cream-300 hover:text-cream-50 hover:bg-cream-800/50"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-1.5 h-10 px-3 rounded-full bg-cream-800/50 text-cream-50 hover:bg-army-500 transition-colors font-bold text-sm"
              aria-label="Toggle language"
              title={language === "en" ? "Switch to Indonesian" : "Switch to English"}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              {language === "en" ? "EN" : "ID"}
            </button>

            {/* Desktop CTA */}
            <a
              href={getWhatsAppLink("Halo Me & You Warung! Saya ingin bertanya.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-army-500 hover:bg-army-600 text-cream-50 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-army-500/25 hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("nav.bookNow")}
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden z-50">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-1 h-8 px-2.5 rounded-full bg-cream-800/50 text-cream-50 hover:bg-army-500 transition-colors text-xs font-bold"
              aria-label="Toggle language"
              title={language === "en" ? "Switch to Indonesian" : "Switch to English"}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              {language === "en" ? "EN" : "ID"}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex flex-col gap-1.5 p-2 relative"
              aria-label="Toggle navigation menu"
            >
              <span
                className={`w-6 h-0.5 bg-cream-50 transition-all duration-300 ${isMobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <span
                className={`w-6 h-0.5 bg-cream-50 transition-all duration-300 ${isMobileOpen ? "opacity-0 scale-0" : ""
                  }`}
              />
              <span
                className={`w-6 h-0.5 bg-cream-50 transition-all duration-300 ${isMobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${isMobileOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="absolute inset-0 bg-cream-950/98 backdrop-blur-xl" />
        <div className="relative h-full flex flex-col items-center justify-center gap-6">
          {/* Decorative element */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-army-500 rounded-full" />

          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className={`text-3xl font-heading font-bold transition-all duration-500 ${isMobileOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                } ${activeSection === link.href.replace("#", "")
                  ? "text-army-400"
                  : "text-cream-200 hover:text-army-400"
                }`}
              style={{ transitionDelay: `${i * 80 + 100}ms` }}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile CTA */}
          <a
            href={getWhatsAppLink("Halo Me & You Warung! Saya ingin bertanya.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileOpen(false)}
            className={`mt-6 flex items-center gap-3 bg-army-500 text-cream-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-500 hover:bg-army-600 ${isMobileOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: `${navLinks.length * 80 + 100}ms` }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t("nav.chatWa")}
          </a>

          {/* Decorative bottom */}
          <p className="absolute bottom-8 text-cream-600 text-xs tracking-widest uppercase">
            {businessInfo.name} · Tetebatu
          </p>
        </div>
      </div>
    </>
  );
}
