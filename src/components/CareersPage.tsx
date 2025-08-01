import { Footer } from "./Footer";
import { CareersHeroSection } from "./careers/CareersHeroSection";
import { CareersCultureSection } from "./careers/CareersCultureSection";
import { CareersOpenPositionsSection } from "./careers/CareersOpenPositionsSection";
import { CareersLocationsSection } from "./careers/CareersLocationsSection";

export function CareersPage() {
  return (
    <div className="min-h-screen bg-white pt-3">
      <CareersHeroSection />
      <CareersCultureSection />
      <CareersOpenPositionsSection />
      <CareersLocationsSection />
      <Footer />
    </div>
  );
}