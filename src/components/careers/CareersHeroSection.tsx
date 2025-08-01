import { Button } from "../ui/button";
import { ArrowRight, Target, Users, Zap } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function CareersHeroSection() {
  const scrollToPositions = () => {
    const element = document.querySelector('.open-positions-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      {/* Background Visual */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-red-50/30"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>


            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-title leading-title">
              Join a <span className="text-red-600">Frontier</span>,<br />
              Not a Factory
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 tracking-body leading-body font-condensed">
              We are solving some of the hardest problems in AI to revolutionize the biopharma industry. 
              If you are driven to create meaningful impact and work alongside the brightest minds in the field, 
              you've come to the right place.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 tracking-subtitle">Mission-Driven Impact</h3>
                  <p className="text-gray-600 font-condensed tracking-body">
                    Transform how pharmaceutical companies discover, develop, and deliver life-saving treatments
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 tracking-subtitle">Cutting-Edge Technology</h3>
                  <p className="text-gray-600 font-condensed tracking-body">
                    Work with the latest AI innovations including modular RAG, vertical LLMs, and advanced NLP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 tracking-subtitle">World-Class Team</h3>
                  <p className="text-gray-600 font-condensed tracking-body">
                    Collaborate with top talent from Stanford, IIT Bombay, and Seoul National University
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-red-600 text-white hover:bg-red-700 text-lg px-10 py-5 h-auto font-bold tracking-subtitle rounded-xl shadow-lg"
                onClick={scrollToPositions}
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 text-lg px-10 py-5 h-auto font-medium tracking-body rounded-xl"
              >
                Learn About Our Culture
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration at PhnyX Lab"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-1">15+</div>
                <div className="text-sm text-gray-600 font-condensed">Team Members</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">2</div>
                <div className="text-sm text-gray-600 font-condensed">Global Offices</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}