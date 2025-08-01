import { Button } from "../ui/button";
import { ArrowRight, FileText, Lightbulb, TrendingUp } from "lucide-react";

export function NewsroomHeroSection() {
  const scrollToFeatured = () => {
    const element = document.querySelector('.featured-articles-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-spacing-lg bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Main Title - No chip, cleaner approach */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 tracking-title leading-title max-w-5xl mx-auto">
            PhnyX Lab<br />
            <span className="text-red-600">Newsroom</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 tracking-body leading-body font-condensed">
            Explore our latest research, product updates, company news, and perspectives 
            on the future of AI in the pharmaceutical industry.
          </p>

          {/* Key Topics */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Lightbulb className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 tracking-subtitle">Technology & Research</h3>
              <p className="text-sm text-gray-600 font-condensed tracking-body leading-relaxed">
                Deep dives into our AI innovations, technical breakthroughs, and research findings
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 tracking-subtitle">Industry Insights</h3>
              <p className="text-sm text-gray-600 font-condensed tracking-body leading-relaxed">
                Analysis of biopharma trends, market dynamics, and future predictions
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <FileText className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 tracking-subtitle">Product Updates</h3>
              <p className="text-sm text-gray-600 font-condensed tracking-body leading-relaxed">
                Latest features, improvements, and announcements from our platform
              </p>
            </div>
          </div>

          {/* CTA - Using red accent for primary action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-red-600 text-white hover:bg-red-700 text-lg px-10 py-5 h-auto font-bold tracking-subtitle rounded-xl shadow-lg"
              onClick={scrollToFeatured}
            >
              Browse Latest Articles
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 text-lg px-10 py-5 h-auto font-medium tracking-body rounded-xl"
            >
              Subscribe to Updates
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </div>

          {/* Stats - Using red accent for key numbers */}
          <div className="grid md:grid-cols-4 gap-8 max-w-3xl mx-auto pt-12 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-sm text-gray-600 font-condensed">Published Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">12</div>
              <div className="text-sm text-gray-600 font-condensed">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">8</div>
              <div className="text-sm text-gray-600 font-condensed">Product Updates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600 mb-2">5K+</div>
              <div className="text-sm text-gray-600 font-condensed">Monthly Readers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}