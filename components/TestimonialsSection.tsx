import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { categories, testimonialsByCategory } from "./testimonials/testimonialData";
import { TestimonialCard } from "./testimonials/TestimonialCard";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "./ui/button";

export function TestimonialsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  const [activeCategory, setActiveCategory] = useState("All");
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentOffset, setCurrentOffset] = useState(0);
  
  const currentTestimonials = testimonialsByCategory[activeCategory as keyof typeof testimonialsByCategory];

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentOffset(prev => prev - 1);
    }, 50); // Smooth continuous movement

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Reset when category changes
  useEffect(() => {
    setCurrentOffset(0);
  }, [activeCategory]);

  const handlePrevious = () => {
    setCurrentOffset(prev => prev + 50); // Move cards forward
  };

  const handleNext = () => {
    setCurrentOffset(prev => prev - 50); // Move cards backward
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section ref={ref} className="pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-16 lg:pb-20 text-gray-900 relative overflow-hidden">
      {/* Enhanced Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(206,14,45,0.05)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.05)_0%,transparent_50%)]"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Title - Two-tone Style */}
        <div className="text-center mb-8 md:mb-16 lg:mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-title leading-title" style={{ lineHeight: '1.1' }}>
            <span className="text-gray-900">What Experts Are Saying</span>
            <br />
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
              About Cheiron
            </span>
          </h2>
        </div>

        {/* Category Filters and Controls */}
        <div className="mb-4 md:mb-6 lg:mb-8 flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
          <div className="bg-white/80 backdrop-blur-sm p-1.5 rounded-lg inline-flex border border-gray-200/80 shadow-sm">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 transition-all duration-300 font-semibold tracking-subtitle rounded-md text-sm ${
                  activeCategory === category.id
                    ? "bg-red-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevious}
              className="h-10 w-10 p-0 rounded-full border-gray-300 hover:border-red-400 hover:bg-red-50 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={togglePlayPause}
              className="h-10 w-10 p-0 rounded-full border-gray-300 hover:border-red-400 hover:bg-red-50 transition-colors"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              className="h-10 w-10 p-0 rounded-full border-gray-300 hover:border-red-400 hover:bg-red-50 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Auto-scrolling Testimonials Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              key={activeCategory}
              className="flex gap-8"
              animate={{
                x: currentOffset
              }}
              transition={{
                type: "tween",
                ease: "linear",
                duration: 0.1
              }}
            >
              {/* Create multiple sets for seamless infinite loop */}
              {Array.from({ length: 6 }, (_, setIndex) => (
                currentTestimonials.map((testimonial, index) => (
                  <TestimonialCard 
                    key={`${activeCategory}-set${setIndex}-${index}`} 
                    testimonial={testimonial} 
                  />
                ))
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
        </div>


      </div>
    </section>
  );
}