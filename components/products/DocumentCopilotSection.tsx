import { Button } from "../ui/button";
import { Clock, DollarSign, Shield, FileText, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function DocumentCopilotSection() {
  const [currentDocType, setCurrentDocType] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Remove Protocol on mobile
  const documentTypes = isMobile 
    ? ["IND", "CSR", "IB", "NDA", "BLA"]
    : ["IND", "CSR", "IB", "Protocol", "NDA", "BLA"];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDocType((prev) => (prev + 1) % documentTypes.length);
    }, 2500); // Slightly longer interval for better readability
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="cheiron-write" className="section-spacing-xl bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gray-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gray-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-hero leading-hero">
            <span className="text-brand-gradient">Cheiron Write</span>
          </h2>
          
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-300 mb-8 tracking-subtitle">
            {/* Mobile: Stack vertically */}
            <div className="block md:hidden text-center">
              <div className="mb-2">From Blank Page to</div>
              <div className="flex items-center justify-center">
                <span className="mr-2">Submission-Ready</span>
                <div className="relative inline-block w-20 h-12">
                  <motion.span
                    key={`mobile-${currentDocType}`}
                    className="text-red-400 font-bold text-3xl bg-gradient-to-r from-red-400 to-red-200 bg-clip-text text-transparent absolute inset-0 flex items-center justify-start"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {documentTypes[currentDocType]}
                  </motion.span>
                </div>
              </div>
            </div>
            
            {/* Desktop: Single line with careful baseline alignment */}
            <div className="hidden md:flex items-baseline justify-center">
              <span className="mr-4 text-3xl md:text-4xl font-semibold leading-none">From Blank Page to Submission-Ready</span>
              
              {/* Fixed container with precise baseline alignment */}
              <div className="relative inline-block w-32 lg:w-40 xl:w-48" style={{ height: "1.2em" }}>
                <motion.span
                  key={`desktop-${currentDocType}`}
                  className="text-red-400 font-bold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-red-400 to-red-200 bg-clip-text text-transparent absolute left-0"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ 
                    lineHeight: "1em",
                    top: "0",
                    transform: "translateY(0.1em)"
                  }}
                >
                  {documentTypes[currentDocType]}
                </motion.span>
                {/* Glow effect */}
                <motion.div
                  className="absolute left-0 text-red-400/40 font-bold text-3xl md:text-4xl lg:text-5xl blur-lg"
                  key={`glow-desktop-${currentDocType}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.4, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  style={{ 
                    lineHeight: "1em",
                    top: "0",
                    transform: "translateY(0.1em)",
                    zIndex: -1
                  }}
                >
                  {documentTypes[currentDocType]}
                </motion.div>
              </div>
            </div>
          </h3>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto tracking-body leading-body font-condensed">
            Draft, refine, and finalize complex regulatory documents like INDs and CSRs 
            with 80% less manual effort and guaranteed compliance.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-16 lg:mb-20">
          {/* Left: Demo/Visual */}
          <div className="relative">
            <div className="aspect-video bg-gray-800 border border-white/20 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/10 border border-white/20 mx-auto mb-6 flex items-center justify-center">
                  <FileText className="w-10 h-10" />
                </div>
                <div className="font-bold text-xl mb-2">Document Generation</div>
                <div className="text-white/70 text-sm">AI-powered writing assistant</div>
              </div>
            </div>

            {/* Performance overlay */}
            <div className="absolute -bottom-4 -right-4 bg-green-600 text-white p-4 shadow-lg">
              <div className="text-center">
                <div className="text-xl font-bold mb-1">5-7 days</div>
                <div className="text-xs">vs 6+ months</div>
              </div>
            </div>
          </div>

          {/* Right: Benefits */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white tracking-title mb-8">
              From Months to Days
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2">90% Faster Drafting</h4>
                  <p className="text-gray-300 font-condensed">
                    Reduce document creation time from months to days and accelerate product launch by 17.6 months average.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2">80% Cost Reduction</h4>
                  <p className="text-gray-300 font-condensed">
                    Internalize Medical Writing tasks and save up to $1 million annually on CRO outsourcing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2">Built-in Compliance</h4>
                  <p className="text-gray-300 font-condensed">
                    Templates embedded with FDA and ICH guidelines ensure regulatory requirements from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-red-600 text-white hover:bg-red-700 text-xl px-12 py-4 h-auto font-bold tracking-subtitle shadow-xl"
            onClick={() => window.location.hash = "request-demo"}
          >
            Request a Demo
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
}