import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function CompanyHeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageStackRef = useRef<HTMLDivElement>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop&crop=center",
      alt: "Scientists collaborating in modern laboratory",
      title: "Collaborative Innovation",
      subtitle: "Where minds meet technology"
    },
    {
      src: "https://images.unsplash.com/photo-1559757175-0eb991dec3d6?w=800&h=600&fit=crop&crop=center",
      alt: "Advanced pharmaceutical research facility",
      title: "Cutting-Edge Research",
      subtitle: "State-of-the-art facilities"
    },
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&crop=center",
      alt: "Pharmaceutical equipment and analysis",
      title: "Precision Analysis",
      subtitle: "Data-driven insights"
    },
    {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center",
      alt: "Digital interface and AI technology",
      title: "AI Integration",
      subtitle: "Future of biopharma"
    },
    {
      src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop&crop=center",
      alt: "Scientist analyzing complex data",
      title: "Data Revolution",
      subtitle: "Transforming workflows"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress within the section
      const sectionStart = sectionTop - windowHeight;
      const sectionEnd = sectionTop + sectionHeight;
      const scrollWithinSection = scrollTop - sectionStart;
      const totalScrollDistance = sectionEnd - sectionStart;
      
      const progress = Math.max(0, Math.min(1, scrollWithinSection / totalScrollDistance));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStory = () => {
    const element = document.querySelector('.company-story-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate which image should be active based on scroll progress
  const activeImageIndex = Math.floor(scrollProgress * images.length);

  return (
    <section 
      ref={sectionRef}
      className="relative"
      style={{ height: `${100 + images.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full pt-16 md:pt-0">
          <div className="grid lg:grid-cols-2 h-full">
            {/* Left Content - Fixed Text */}
            <div className="flex items-center justify-start bg-white z-10">
              <div className="w-full max-w-xl">


                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-title leading-title" style={{ lineHeight: '1.1' }}>
                  <span className="block">Redefine</span>
                  <span className="block text-gray-600">Biopharma</span>
                  <span className="block text-gray-400">Workflow</span>
                </h1>

                <div className="text-lg md:text-xl text-gray-600 mb-12 leading-body tracking-body space-y-4">
                  <p>
                    We exist to restore creativity and focus to the most critical work on earth. 
                    Our mission is democratizing AI to empower biopharma experts.
                  </p>
                  <p className="text-gray-900 font-semibold">
                    Innovation starts when routine ends.
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-sm text-gray-500">
                      {activeImageIndex < images.length ? images[activeImageIndex]?.title : "Complete"}
                    </div>
                    <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gray-900 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${scrollProgress * 100}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-400">
                      {Math.round(scrollProgress * 100)}%
                    </div>
                  </div>
                  {activeImageIndex < images.length && (
                    <div className="text-xs text-gray-500">
                      {images[activeImageIndex]?.subtitle}
                    </div>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button 
                    size="lg" 
                    className="bg-gray-900 text-white hover:bg-gray-800 text-lg px-10 py-5 h-auto font-bold tracking-subtitle rounded-xl shadow-lg"
                    onClick={scrollToStory}
                  >
                    Our Story
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 text-lg px-10 py-5 h-auto font-medium tracking-body rounded-xl"
                  >
                    Our Technology
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Button>
                </div>

                {/* Mission Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                  <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
                    <div className="text-xs text-gray-600">Companies Trust Us</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">2</div>
                    <div className="text-xs text-gray-600">Global Offices</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">1</div>
                    <div className="text-xs text-gray-600">Shared Mission</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Large Stacking Images */}
            <div 
              ref={imageStackRef}
              className="relative bg-gray-50 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(107,114,128,0.3) 1px, transparent 0)',
                  backgroundSize: '60px 60px'
                }}></div>
              </div>

              {/* Large Image Stack - Almost Full Screen */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="relative w-full h-5/6 max-w-2xl">
                  {images.map((image, index) => {
                    // Calculate progress for this specific image
                    const imageProgress = Math.max(0, Math.min(1, (scrollProgress * images.length) - index));
                    const isActive = index <= activeImageIndex;
                    const isCurrentlyAnimating = index === activeImageIndex;
                    
                    // PayPal-style stacking: later images are progressively larger
                    const baseScale = 0.85; // Start smaller
                    const scaleIncrement = 0.05; // Each subsequent image is 5% larger
                    const maxScale = baseScale + (index * scaleIncrement);
                    const currentScale = baseScale + (imageProgress * (maxScale - baseScale));
                    
                    // Simple vertical translation - no rotation
                    const translateY = isActive ? 0 : 60; // Start further down
                    const opacity = imageProgress;

                    return (
                      <div
                        key={index}
                        className="absolute inset-0 transition-all duration-1000 ease-out"
                        style={{
                          transform: `translateY(${translateY}px) scale(${currentScale})`,
                          opacity: opacity,
                          zIndex: index + 1, // Later images have higher z-index
                        }}
                      >
                        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                          <ImageWithFallback
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Subtle Image Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
                          
                          {/* Image Info - only show for current/active image */}
                          {isCurrentlyAnimating && (
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                              <div 
                                className="bg-black/30 backdrop-blur-md rounded-xl p-6 transition-all duration-700"
                                style={{ opacity: imageProgress }}
                              >
                                <div className="font-bold text-xl mb-2 tracking-subtitle">{image.title}</div>
                                <div className="text-sm opacity-90 tracking-body">{image.subtitle}</div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Scroll Hint */}
              {scrollProgress < 0.1 && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 z-50">
                  <div className="flex flex-col items-center animate-bounce">
                    <div className="text-xs tracking-widest mb-2">SCROLL TO EXPLORE</div>
                    <div className="w-6 h-10 border border-gray-400 rounded-full flex justify-center">
                      <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}