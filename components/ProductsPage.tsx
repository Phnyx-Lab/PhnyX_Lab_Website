import { ProductHeroSection } from "./products/ProductHeroSection";
import { CheironSection } from "./products/CheironSection";
import { DocumentCopilotSection } from "./products/DocumentCopilotSection";
import { SecurityIntegrationSection } from "./products/SecurityIntegrationSection";
import { FinalCTASection } from "./FinalCTASection";
import { Footer } from "./Footer";

export function ProductsPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <ProductHeroSection />
      <CheironSection />
      <DocumentCopilotSection />
      <SecurityIntegrationSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}