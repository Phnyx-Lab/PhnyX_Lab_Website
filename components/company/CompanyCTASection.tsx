import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function CompanyCTASection() {
  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-gray-900 p-12 md:p-16 rounded-xl text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-title">
              Experience the PhnyX Difference
            </h3>
            <p className="text-xl text-gray-300 mb-8 font-condensed tracking-body">
              See how our fundamentally different technology approach delivers unmatched 
              results in real biopharma environments. Schedule your technical deep-dive today.
            </p>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-4 h-auto font-bold tracking-subtitle shadow-lg rounded-lg"
              onClick={() => window.location.hash = "request-demo"}
            >
              Contact Us
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}