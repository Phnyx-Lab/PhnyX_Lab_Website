import { ChevronDown } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

// Counter component for animating numbers
function AnimatedCounter({ value, suffix = "", delay = 0 }: { value: number; suffix?: string; delay?: number }) {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = springValue.onChange(setDisplayValue);
    return unsubscribe;
  }, [springValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      motionValue.set(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [motionValue, value, delay]);

  return (
    <span>
      {Math.round(displayValue * 10) / 10}{suffix}
    </span>
  );
}

export function ProductHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationSections = [
    {
      id: 'cheiron-search',
      title: 'Cheiron Search',
      description: 'AI Research Engine'
    },
    {
      id: 'cheiron-write', 
      title: 'Cheiron Write',
      description: 'Document Assistant'
    },
    {
      id: 'enterprise-security',
      title: 'About Our Security',
      description: 'Enterprise-Grade Protection'
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-20 md:pt-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-12">
            {/* Main Title - Clean hierarchy with animation */}
            <div className="space-y-6">
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-hero leading-hero"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <motion.span 
                  className="block text-white"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  The AI Toolkit for
                </motion.span>
                <motion.span 
                  className="block text-brand-gradient"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Modern Biopharma
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-lg font-condensed tracking-body leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Stop searching, start knowing. Instantly access the world's biomedical knowledge with AI-powered precision.
              </motion.p>
            </div>

            {/* Key Statistics - Clean grid layout with animation */}
            <motion.div 
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {[
                { value: "80", suffix: "%", label: "Time Saved", color: "text-red-400" },
                { value: "1", suffix: "M+", label: "Cost Reduced", color: "text-red-300", prefix: "$" },
                { value: "100", suffix: "%", label: "Compliance", color: "text-red-400" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <motion.div className={`text-2xl md:text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.prefix && <span>{stat.prefix}</span>}
                    {isVisible && (
                      <AnimatedCounter 
                        value={parseFloat(stat.value)} 
                        suffix={stat.suffix}
                        delay={1500 + index * 200}
                      />
                    )}
                  </motion.div>
                  <div className="text-sm text-gray-300 font-condensed">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Navigation - Minimal design with horizontal lines and animation */}
          <motion.div 
            className="space-y-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {navigationSections.map((section, index) => (
              <motion.div 
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
              >
                <motion.button
                  onClick={() => scrollToSection(section.id)}
                  className="w-full text-left py-8 md:py-12 px-6 md:px-8 hover:bg-white/5 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 tracking-subtitle group-hover:text-red-300 transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-gray-400 font-condensed">
                        {section.description}
                      </p>
                    </div>
                    <motion.div
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-y-1 transition-all duration-300" />
                    </motion.div>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-white/50">
            <div className="w-6 h-10 border border-white/30 flex justify-center mb-3">
              <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-bounce"></div>
            </div>
            <div className="text-xs tracking-widest font-condensed">EXPLORE PRODUCTS</div>
          </div>
        </div>
      </div>
    </section>
  );
}