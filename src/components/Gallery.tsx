"use client";

import { useScrollReveal, useLightbox } from "@/lib/hooks";
import { galleryImages } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Gallery() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal(0.1);
  const { isOpen, currentIndex, open, close, next, prev } = useLightbox();
  const { t } = useLanguage();

  return (
    <>
      <section id="gallery" className="section-padding bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge={t("gallery.badge")}
            title={t("gallery.title1")}
            highlight={t("gallery.title2")}
            subtitle={t("gallery.subtitle")}
          />

          <div
            ref={sectionRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 ${
              sectionVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            {galleryImages.map((img, i) => {
              const isLarge = i === 0 || i === 5;
              const isTall = i === 2 || i === 7;
              return (
                <div
                  key={img.id}
                  onClick={() => open(i)}
                  className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                    isLarge ? "col-span-2 row-span-2 h-64 md:h-80" : isTall ? "row-span-2 h-64 md:h-80" : "h-32 md:h-40"
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${img.src}')` }}
                  />
                  <div className={`absolute inset-0 -z-10 ${i % 3 === 0 ? "bg-gradient-to-br from-army-700 via-army-600 to-cream-800" : i % 3 === 1 ? "bg-gradient-to-br from-cream-700 via-cream-600 to-army-700" : "bg-gradient-to-br from-army-800 via-cream-700 to-army-600"}`} />
                  <div className="absolute inset-0 bg-cream-950/0 group-hover:bg-cream-950/50 transition-all duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-cream-950/70 backdrop-blur-md rounded-lg px-3 py-2">
                      <p className="text-cream-100 text-xs md:text-sm font-medium">{img.caption}</p>
                      <p className="text-army-400 text-[10px] uppercase tracking-wider mt-0.5">{img.category}</p>
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream-50/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
                    <svg className="w-5 h-5 text-cream-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-cream-950/95 backdrop-blur-lg" onClick={close}>
          <button onClick={close} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-cream-800/50 hover:bg-cream-800 text-cream-200 flex items-center justify-center transition-colors z-10">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(galleryImages.length); }} className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-cream-800/50 hover:bg-army-500/70 text-cream-200 flex items-center justify-center transition-all z-10">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="max-w-4xl max-h-[80vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="w-[80vw] max-w-4xl h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url('${galleryImages[currentIndex].src}')` }} />
              <div className="absolute inset-0 bg-gradient-to-br from-army-700 via-cream-700 to-army-600 -z-10" />
            </div>
            <div className="mt-4 text-center">
              <p className="text-cream-100 text-lg font-heading font-semibold">{galleryImages[currentIndex].caption}</p>
              <p className="text-cream-500 text-sm mt-1">{currentIndex + 1} / {galleryImages.length}</p>
            </div>
          </div>
          <button onClick={(e) => { e.stopPropagation(); next(galleryImages.length); }} className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-cream-800/50 hover:bg-army-500/70 text-cream-200 flex items-center justify-center transition-all z-10">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      )}
    </>
  );
}
