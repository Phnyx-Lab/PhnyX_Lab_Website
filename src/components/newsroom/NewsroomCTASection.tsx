import { ArrowRight, Newspaper } from "lucide-react";
import { Button } from "../ui/button";

export function NewsroomCTASection() {
  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-gray-900 p-12 md:p-16 rounded-xl text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Newspaper className="w-8 h-8 text-red-500" />
              <h3 className="text-3xl md:text-4xl font-bold tracking-title">
                Stay Ahead of Biopharma Innovation
              </h3>
            </div>
            <p className="text-xl text-gray-300 mb-8 font-condensed tracking-body">
              Join thousands of biopharma professionals who trust PhnyX Lab insights. 
              Discover how AI is transforming pharmaceutical research and development.
            </p>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-4 h-auto font-bold tracking-subtitle shadow-lg rounded-lg"
              onClick={() => window.location.hash = "request-demo"}
            >
              Schedule Technical Demo
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}