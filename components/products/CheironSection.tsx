import { Button } from "../ui/button";
import { Brain, Search, Zap, ArrowRight, Play } from "lucide-react";

export function CheironSection() {
  return (
    <section id="cheiron-search" className="section-spacing-xl bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-red-600 mb-6 tracking-hero leading-hero">
            Cheiron Search
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto tracking-body leading-body font-condensed">
            Integrate all your internal and external data to provide credible, accurate, 
            and traceable answers from 20+ databases.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Features */}
          <div className="space-y-8">
            <div className="grid gap-6">
              <div className="flex items-start gap-4 p-6 bg-white border border-gray-200">
                <div className="w-12 h-12 bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 tracking-subtitle">Answer Engine</h4>
                  <p className="text-gray-600 font-condensed tracking-body">
                    20+ databases integrated with real-time source verification
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white border border-gray-200">
                <div className="w-12 h-12 bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 tracking-subtitle">AI Research</h4>
                  <p className="text-gray-600 font-condensed tracking-body">
                    Automated literature reviews and data analysis
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white border border-gray-200">
                <div className="w-12 h-12 bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 tracking-subtitle">Fast Results</h4>
                  <p className="text-gray-600 font-condensed tracking-body">
                    Get expert-level insights in minutes, not weeks
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Demo Video */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden shadow-2xl border border-gray-200">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white shadow-lg flex items-center justify-center mx-auto mb-8 border border-gray-300">
                    <Play className="w-10 h-10 text-gray-600" />
                  </div>
                  <div className="text-gray-700 font-bold text-2xl mb-3 tracking-subtitle">Cheiron Search Demo</div>
                  <div className="text-gray-500 text-base font-condensed">See how research teams save 80% of their time</div>
                </div>
              </div>
            </div>

            {/* Performance Stats Overlay */}
            <div className="absolute -bottom-4 -left-4 bg-white p-6 shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-1">20+</div>
                <div className="text-xs text-gray-600 font-condensed">Databases</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white p-6 shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">95%</div>
                <div className="text-xs text-gray-600 font-condensed">Accuracy</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-red-600 text-white hover:bg-red-700 text-xl px-12 py-4 h-auto font-bold tracking-subtitle shadow-lg"
            onClick={() => window.location.hash = "request-demo"}
          >
            Try Cheiron Search
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
}