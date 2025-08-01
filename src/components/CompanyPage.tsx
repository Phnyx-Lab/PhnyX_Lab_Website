import { Footer } from "./Footer";
import { CompanyStorySection } from "./company/CompanyStorySection";
import { CompanyTechnologySection } from "./company/CompanyTechnologySection";
import { CompanyTeamSection } from "./company/CompanyTeamSection";
import { CompanyCTASection } from "./company/CompanyCTASection";

export function CompanyPage() {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-16">
      {/* <CompanyStorySection /> */}
      {/* <CompanyTechnologySection /> */}
      <CompanyTeamSection />
      <CompanyCTASection />
      <Footer />
    </div>
  );
}