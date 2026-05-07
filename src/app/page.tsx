import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TourPackages from "@/components/TourPackages";
import MenuCatalogue from "@/components/MenuCatalogue";
import Gallery from "@/components/Gallery";
import LocationMap from "@/components/LocationMap";
import FloatingWA from "@/components/FloatingWA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TourPackages />
      {/* Wave divider */}
      <div className="relative h-16 bg-cream-50">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30C360 60 720 0 1080 30C1260 45 1380 20 1440 30V60H0V30Z"
            className="fill-cream-100/50"
          />
        </svg>
      </div>
      <MenuCatalogue />
      <Gallery />
      <LocationMap />
      <Footer />
      <FloatingWA />
    </main>
  );
}
