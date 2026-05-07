"use client";

import { useScrollReveal } from "@/lib/hooks";
import { businessInfo, getWhatsAppLink } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LocationMap() {
  const { ref, isVisible } = useScrollReveal(0.15);
  const { t } = useLanguage();

  return (
    <section id="location" className="section-padding bg-cream-900">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge={t("location.badge")}
          title={t("location.title1")}
          highlight={t("location.title2")}
          subtitle={t("location.subtitle")}
          dark
        />

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Info Card */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-army-500/15 border border-army-500/25 flex items-center justify-center shrink-0 group-hover:bg-army-500/25 transition-colors duration-300">
                <svg className="w-5 h-5 text-army-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-cream-200 font-semibold text-sm uppercase tracking-wider mb-1">{t("location.address")}</h3>
                <p className="text-cream-400 text-base leading-relaxed">{businessInfo.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-army-500/15 border border-army-500/25 flex items-center justify-center shrink-0 group-hover:bg-army-500/25 transition-colors duration-300">
                <svg className="w-5 h-5 text-army-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-cream-200 font-semibold text-sm uppercase tracking-wider mb-1">{t("location.contact")} / WhatsApp</h3>
                <a href={getWhatsAppLink("Halo!")} className="text-army-400 hover:text-army-300 text-base transition-colors">{businessInfo.phone}</a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-army-500/15 border border-army-500/25 flex items-center justify-center shrink-0 group-hover:bg-army-500/25 transition-colors duration-300">
                <svg className="w-5 h-5 text-army-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-cream-200 font-semibold text-sm uppercase tracking-wider mb-1">Email</h3>
                <p className="text-cream-400 text-base">{businessInfo.email}</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-8 p-6 rounded-2xl bg-cream-800/50 border border-cream-700/30">
              <h3 className="text-cream-100 font-heading text-lg font-bold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t("location.hours")}
              </h3>
              <div className="space-y-3">
                {businessInfo.openingHours.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-cream-400 text-sm">{t("location.hours") === "Jam Buka" ? item.day.replace("Monday", "Senin").replace("Friday", "Jumat").replace("Saturday", "Sabtu").replace("Sunday", "Minggu") : item.day}</span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-army-400" />
                      <span className="text-cream-200 text-sm font-medium">{item.hours}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden border border-cream-700/30 h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src={businessInfo.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "saturate(0.8) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Me & You Warung Location"
              className="absolute inset-0"
            />
            {/* Map overlay gradient */}
            <div className="absolute inset-0 pointer-events-none border border-cream-700/20 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
