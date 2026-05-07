"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "id";

type Translations = Record<string, string>;

const en: Translations = {
  // Navigation
  "nav.home": "Home",
  "nav.tours": "Tours",
  "nav.menu": "Menu",
  "nav.gallery": "Gallery",
  "nav.location": "Location",
  "nav.bookNow": "Book Now",
  "nav.chatWa": "Chat on WhatsApp",

  // Hero
  "hero.subtitle": "Welcome to",
  "hero.title1": "Discover Nature's",
  "hero.title2": "Hidden Paradise",
  "hero.desc": "Experience the authentic beauty of Lombok through our curated local tours and savor the rich flavors of traditional Sasak cuisine in our cozy warung.",
  "hero.cta1": "Explore Tours",
  "hero.cta2": "View Menu",

  // Section Headings
  "tours.badge": "Explore Tetebatu",
  "tours.title1": "Tour",
  "tours.title2": "Packages",
  "tours.subtitle": "Discover the hidden gems of Tetebatu with our carefully curated tour experiences. From panoramic walks to cooking classes, there's something for everyone.",
  "tours.book": "Book via WhatsApp",

  "menu.badge": "Authentic Flavors",
  "menu.title1": "Our",
  "menu.title2": "Menu",
  "menu.subtitle": "Savor the taste of traditional Sasak cuisine made with love and fresh local ingredients. We also offer a variety of western favorites and refreshing beverages.",
  "menu.food": "Food",
  "menu.drink": "Drinks",
  "menu.order": "Order via WhatsApp",

  "gallery.badge": "Our Moments",
  "gallery.title1": "Photo",
  "gallery.title2": "Gallery",
  "gallery.subtitle": "Take a glimpse into the authentic experiences, delicious food, and beautiful moments shared at Me & You Warung.",

  "location.badge": "Visit Us",
  "location.title1": "Our",
  "location.title2": "Location",
  "location.subtitle": "Find us in the heart of Tetebatu. We are easily accessible and ready to welcome you with a warm smile.",
  "location.address": "Address",
  "location.contact": "Contact",
  "location.hours": "Opening Hours",

  // Footer
  "footer.desc": "Experience the authentic beauty of Tetebatu with local tours and traditional Sasak cuisine.",
  "footer.quickLinks": "Quick Links",
  "footer.social": "Follow Us",
  "footer.rights": "All rights reserved.",
};

const id: Translations = {
  // Navigation
  "nav.home": "Beranda",
  "nav.tours": "Tur",
  "nav.menu": "Menu",
  "nav.gallery": "Galeri",
  "nav.location": "Lokasi",
  "nav.bookNow": "Pesan Sekarang",
  "nav.chatWa": "Chat di WhatsApp",

  // Hero
  "hero.subtitle": "Selamat Datang di",
  "hero.title1": "Temukan Surga",
  "hero.title2": "Tersembunyi Alam",
  "hero.desc": "Rasakan keindahan autentik Lombok melalui tur lokal pilihan kami dan nikmati cita rasa kaya masakan tradisional Sasak di warung kami yang nyaman.",
  "hero.cta1": "Jelajahi Tur",
  "hero.cta2": "Lihat Menu",

  // Section Headings
  "tours.badge": "Jelajahi Tetebatu",
  "tours.title1": "Paket",
  "tours.title2": "Tur",
  "tours.subtitle": "Temukan permata tersembunyi Tetebatu dengan pengalaman tur kami yang dirancang khusus. Dari jalan panorama hingga kelas memasak, ada sesuatu untuk semua orang.",
  "tours.book": "Pesan via WhatsApp",

  "menu.badge": "Cita Rasa Autentik",
  "menu.title1": "Menu",
  "menu.title2": "Kami",
  "menu.subtitle": "Nikmati rasa masakan tradisional Sasak yang dibuat dengan cinta dan bahan lokal segar. Kami juga menawarkan berbagai favorit barat dan minuman menyegarkan.",
  "menu.food": "Makanan",
  "menu.drink": "Minuman",
  "menu.order": "Pesan via WhatsApp",

  "gallery.badge": "Momen Kami",
  "gallery.title1": "Galeri",
  "gallery.title2": "Foto",
  "gallery.subtitle": "Lihat sekilas pengalaman autentik, makanan lezat, dan momen indah yang dibagikan di Me & You Warung.",

  "location.badge": "Kunjungi Kami",
  "location.title1": "Lokasi",
  "location.title2": "Kami",
  "location.subtitle": "Temukan kami di jantung Tetebatu. Kami mudah diakses dan siap menyambut Anda dengan senyum hangat.",
  "location.address": "Alamat",
  "location.contact": "Kontak",
  "location.hours": "Jam Buka",

  // Footer
  "footer.desc": "Rasakan keindahan autentik Tetebatu dengan tur lokal dan masakan tradisional Sasak.",
  "footer.quickLinks": "Tautan Cepat",
  "footer.social": "Ikuti Kami",
  "footer.rights": "Hak cipta dilindungi.",
};

const dictionaries = { en, id };

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang === "en" || savedLang === "id") {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "id" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const t = (key: string): string => {
    return dictionaries[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
