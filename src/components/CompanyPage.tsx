import { Footer } from "./Footer";
import { CompanyTeamSection } from "./company/CompanyTeamSection";
import { CompanyCTASection } from "./company/CompanyCTASection";
import { FinalCTASection } from "./FinalCTASection";

export function CompanyPage() {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-16">
      {/* <CompanyStorySection /> */}
      {/* <CompanyTechnologySection /> */}
      <CompanyTeamSection />
      <CompanyCTASection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}