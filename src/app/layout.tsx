import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Me & You Warung — Tetebatu, Lombok | Local Tours & Authentic Cuisine",
  description:
    "Discover the beauty of Tetebatu with Me & You Warung. Experience panoramic walking tours, cooking classes, authentic Sasak cuisine, and more. Book directly via WhatsApp!",
  keywords: [
    "Tetebatu",
    "Lombok",
    "warung",
    "cooking class",
    "tour",
    "panorama walk",
    "Sasak cuisine",
    "Me and You Warung",
  ],
  openGraph: {
    title: "Me & You Warung — Tetebatu, Lombok",
    description:
      "Experience the beauty of Tetebatu. Local tours, cooking classes, and authentic cuisine.",
    type: "website",
    locale: "en_US",
  },
};

import { LanguageProvider } from "@/contexts/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable}`}>
      <body className="bg-cream-50 text-cream-900 antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
