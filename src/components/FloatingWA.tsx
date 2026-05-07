"use client";

import { useState, useEffect } from "react";
import { getWhatsAppLink } from "@/lib/data";

export default function FloatingWA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
      setShowScrollTop(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-show tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 5000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 9000);
    return () => { clearTimeout(timer); clearTimeout(hideTimer); };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-cream-800/80 hover:bg-cream-700 text-cream-200 flex items-center justify-center transition-all duration-300 backdrop-blur-sm shadow-lg animate-fade-in"
          aria-label="Scroll to top"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* WhatsApp Button */}
      <div className="relative">
        {/* Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
            showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <div className="bg-cream-900 text-cream-100 px-4 py-2.5 rounded-xl text-sm font-medium shadow-xl whitespace-nowrap">
            Chat with us! 💬
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-cream-900 rotate-45" />
          </div>
        </div>

        <a
          href={getWhatsAppLink("Halo Me & You Warung! Saya ingin bertanya.")}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="group w-14 h-14 rounded-full bg-army-500 hover:bg-army-600 text-cream-50 flex items-center justify-center shadow-xl shadow-army-500/30 transition-all duration-300 hover:scale-110 animate-pulse-glow"
          aria-label="Chat on WhatsApp"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:scale-110">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
