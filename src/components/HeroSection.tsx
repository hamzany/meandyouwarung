"use client";

import { useParallax } from "@/lib/hooks";
import { getWhatsAppLink } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const parallaxOffset = useParallax(0.4);
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
          transform: `translateY(${parallaxOffset}px)`,
          willChange: "transform",
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-950/80 via-cream-950/50 to-cream-950/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-cream-950/60 via-transparent to-cream-950/40" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-army-500/40 to-transparent hidden lg:block" />
      <div className="absolute top-1/3 right-8 w-px h-24 bg-gradient-to-b from-transparent via-gold-400/30 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 bg-army-500/15 backdrop-blur-sm border border-army-500/25 text-army-400 px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-army-400 animate-pulse" />
              Tetebatu, Lombok — Indonesia
            </div>

            {/* Heading */}
            <h1 className="animate-fade-in-up delay-100 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream-50 leading-[1.1] mb-6">
              {t("hero.subtitle")}{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-army-400 via-army-300 to-gold-400">
                  Me & You
                </span>
              </span>
              <br />
              <span className="font-accent font-light text-cream-200 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                Warung
              </span>
            </h1>

            {/* Divider */}
            <div className="animate-fade-in-up delay-200 w-20 h-0.5 bg-gradient-to-r from-army-500 to-gold-400 rounded-full mb-6" />

            {/* Subtitle */}
            <p className="animate-fade-in-up delay-300 text-base sm:text-lg md:text-xl text-cream-300 leading-relaxed mb-10 max-w-xl">
              {t("hero.desc")}
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4">
              <a
                href="#tours"
                className="group inline-flex items-center justify-center gap-3 bg-army-500 hover:bg-army-600 text-cream-50 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-army-500/20 hover:-translate-y-1"
              >
                {t("hero.cta1")}
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={getWhatsAppLink("Halo Me & You Warung! Saya ingin bertanya tentang paket wisata.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-transparent border-2 border-cream-300/30 hover:border-army-400/60 text-cream-100 hover:text-army-300 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t("nav.chatWa")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-gentle">
        <span className="text-cream-400 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <svg className="w-5 h-5 text-army-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 40C240 70 480 10 720 40C960 70 1200 10 1440 40V80H0V40Z"
            fill="#FAF8F5"
          />
        </svg>
      </div>
    </section>
  );
}
