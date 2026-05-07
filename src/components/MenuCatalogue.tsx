"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/hooks";
import { menuItems, getWhatsAppLink } from "@/lib/data";
import SectionHeading from "./SectionHeading";

import { useLanguage } from "@/contexts/LanguageContext";

type FilterType = "all" | "food" | "drink";

function MenuCard({
  item,
  index,
}: {
  item: (typeof menuItems)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-2xl overflow-hidden border border-cream-200/50 shadow-sm hover:shadow-xl hover:shadow-cream-900/6 transition-all duration-500 hover:-translate-y-1.5 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url('${item.image}')` }}
        />
        {/* Fallback gradient */}
        <div className={`absolute inset-0 -z-10 ${item.category === 'food' ? 'bg-gradient-to-br from-cream-700 via-cream-600 to-army-700' : 'bg-gradient-to-br from-army-600 via-army-500 to-cream-700'}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-950/60 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
              item.category === "food"
                ? "bg-gold-400/20 text-gold-300 border border-gold-400/30"
                : "bg-army-400/20 text-army-300 border border-army-400/30"
            }`}
          >
            {item.category === "food" ? "🍛" : "🥤"} {item.category}
          </span>
        </div>

        {/* Price overlay */}
        <div className="absolute bottom-3 right-3 bg-cream-950/70 backdrop-blur-md text-gold-400 px-3 py-1 rounded-full text-sm font-bold">
          {item.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-cream-900 mb-1.5 group-hover:text-army-600 transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-cream-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Order Button */}
        <a
          href={getWhatsAppLink(item.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-army-600 hover:text-army-700 text-sm font-semibold transition-all duration-300 group/btn"
        >
          <span className="relative">
            Order Now
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-army-500 transition-all duration-300 group-hover/btn:w-full" />
          </span>
          <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function MenuCatalogue() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const { t } = useLanguage();

  const filters: { label: string; value: FilterType; icon: string }[] = [
    { label: t("menu.badge") === "Authentic Flavors" ? "All Menu" : "Semua Menu", value: "all", icon: "🍽️" },
    { label: t("menu.food"), value: "food", icon: "🍛" },
    { label: t("menu.drink"), value: "drink", icon: "🥤" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  return (
    <section id="menu" className="section-padding bg-cream-100/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge={t("menu.badge")}
          title={t("menu.title1")}
          highlight={t("menu.title2")}
          subtitle={t("menu.subtitle")}
        />

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-cream-200/50 p-1.5 rounded-full border border-cream-200">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter.value
                    ? "bg-army-500 text-cream-50 shadow-md shadow-army-500/20"
                    : "text-cream-600 hover:text-cream-900 hover:bg-cream-100"
                }`}
              >
                <span className="mr-1.5">{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {filteredItems.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-cream-500 text-sm mb-4">
            {t("menu.badge") === "Authentic Flavors" ? "Can't find what you're looking for? Ask us about our daily specials!" : "Tidak menemukan yang Anda cari? Tanyakan menu spesial hari ini!"}
          </p>
          <a
            href={getWhatsAppLink("Halo, saya ingin tahu menu spesial hari ini.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-army-500/30 text-army-600 hover:bg-army-500 hover:text-cream-50 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
          >
            {t("menu.badge") === "Authentic Flavors" ? "Ask About Today's Special" : "Tanya Menu Spesial Hari Ini"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
