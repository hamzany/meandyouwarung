"use client";

import { useScrollReveal } from "@/lib/hooks";
import { tourPackages, getWhatsAppLink } from "@/lib/data";
import SectionHeading from "./SectionHeading";

import { useLanguage } from "@/contexts/LanguageContext";

function TourCard({ tour, index }: { tour: typeof tourPackages[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.15);
  const { t } = useLanguage();

  return (
    <div
      ref={ref}
      className={`group relative bg-cream-50 rounded-2xl overflow-hidden border border-cream-200/60 shadow-sm hover:shadow-xl hover:shadow-cream-900/8 transition-all duration-500 hover:-translate-y-2 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url('${tour.image}')` }}
        />
        {/* Fallback gradient when no image */}
        <div className="absolute inset-0 bg-gradient-to-br from-army-700 via-army-600 to-cream-800 -z-10" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Duration badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-cream-950/60 backdrop-blur-md text-cream-100 px-3 py-1.5 rounded-full text-xs font-medium">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {tour.duration}
        </div>

        {/* Price badge */}
        <div className="absolute top-4 right-4 bg-army-500/90 backdrop-blur-md text-cream-50 px-3 py-1.5 rounded-full text-xs font-bold">
          {tour.price}
        </div>

        {/* Hover overlay with icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-14 h-14 rounded-full bg-army-500/80 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
            <svg className="w-6 h-6 text-cream-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-cream-900 mb-2 group-hover:text-army-600 transition-colors duration-300">
          {tour.title}
        </h3>
        <p className="text-cream-600 text-sm leading-relaxed mb-5 line-clamp-3">
          {tour.description}
        </p>

        {/* CTA Button */}
        <a
          href={getWhatsAppLink(tour.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-army-500 hover:bg-army-600 text-cream-50 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-army-500/20 w-full justify-center"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {t("tours.book")}
        </a>
      </div>
    </div>
  );
}

export default function TourPackages() {
  const { t } = useLanguage();

  return (
    <section id="tours" className="section-padding bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge={t("tours.badge")}
          title={t("tours.title1")}
          highlight={t("tours.title2")}
          subtitle={t("tours.subtitle")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tourPackages.map((tour, i) => (
            <TourCard key={tour.id} tour={tour} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
