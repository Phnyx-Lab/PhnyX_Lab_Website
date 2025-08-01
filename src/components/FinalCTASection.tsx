import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    // <section className="pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-20 lg:pb-32 text-white relative overflow-hidden" style={{
    //   background: `radial-gradient(144.26% 62.31% at 62.48% 114.49%, #1A1A6D 0%, #111 100%)`
    // }}>
    <section className="bg-black pt-32 pb-4">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-12 tracking-hero leading-hero">
            <span className="inline-block mr-4 md:mr-6 text-white mb">Ready</span>
            <span className="inline-block mr-4 md:mr-6 text-white">to</span>
            <br />
            <span className="inline-block text-white mr-4 md:mr-6">Redefine Your</span>
            <br />
            <span className="inline-block text-white/90">Workflow?</span>
          </h2>
          
          {/* Subtitle */}
          <div className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-16 max-w-4xl mx-auto tracking-body leading-relaxed-plus">
            Join the future of biopharma. Start today.
          </div>
          
          {/* CTA Button */}
          <div className="mb-16">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 text-xl md:text-2xl px-24 py-4 h-auto font-semibold tracking-subtitle shadow-2xl rounded-full w-[260px]"
              onClick={() => { window.location.hash = "request-demo"; }}
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-12 h-12 ml-4" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="space-y-4">
            <div className="flex justify-center items-center gap-8 text-white/60 text-sm bg-transparent">
              {[
                { label: "No Setup Required", color: "bg-green-400" },
                { label: "Enterprise Security", color: "bg-red-400" },
                { label: "Expert Support", color: "bg-yellow-400" }
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2"
                >
                  <div className={`w-3 h-3 ${item.color} rounded-full`} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}