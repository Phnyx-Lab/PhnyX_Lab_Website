import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SocialProofSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const partners = [
    { id: "logo-1", name: "Company Logo", delay: 0 },
    { id: "logo-2", name: "Company Logo", delay: 0.05 }, 
    { id: "logo-3", name: "Company Logo", delay: 0.1 },
    { id: "logo-4", name: "Company Logo", delay: 0.15 },
    { id: "logo-5", name: "Company Logo", delay: 0.2 },
    { id: "logo-6", name: "Company Logo", delay: 0.25 },
    { id: "logo-7", name: "Company Logo", delay: 0.3 },
    { id: "logo-8", name: "Company Logo", delay: 0.35 },
    { id: "logo-9", name: "Company Logo", delay: 0.4 },
    { id: "logo-10", name: "Company Logo", delay: 0.45 },
    { id: "logo-11", name: "Company Logo", delay: 0.5 },
    { id: "logo-12", name: "Company Logo", delay: 0.55 },
    { id: "logo-13", name: "Company Logo", delay: 0.6 },
    { id: "logo-14", name: "Company Logo", delay: 0.65 },
    { id: "logo-15", name: "Company Logo", delay: 0.7 },
    { id: "logo-16", name: "Company Logo", delay: 0.75 },
    { id: "logo-17", name: "Company Logo", delay: 0.8 },
    { id: "logo-18", name: "Company Logo", delay: 0.85 },
    { id: "and-more", name: "and more...", delay: 0.9, isSpecial: true }
  ];

  return (
    <section ref={ref} className="pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-16 lg:pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ y }}
          className="text-center"
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 md:mb-16 lg:mb-20 tracking-title leading-title"
            style={{ lineHeight: '1.1' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Trusted by<br />
            <span className="text-brand-gradient">
              Top-Tier Biopharma Experts
            </span>
          </motion.h2>
          
          {/* Desktop: Show all logos */}
          <div className="hidden md:grid grid-cols-10 gap-4 lg:gap-6 items-center max-w-6xl mx-auto">
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: partner.delay,
                }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div 
                  className={`relative p-4 lg:p-6 rounded-lg md:rounded-xl ${partner.isSpecial ? 'bg-red-50 border-red-200' : 'bg-gray-100 border-gray-200'} hover:bg-white/80 transition-all duration-300 border hover:border-gray-300/50`}
                  whileHover={{ scale: 1.02 }}
                >
                  {partner.isSpecial ? (
                    <div className="text-red-600 font-medium text-base lg:text-lg tracking-subtitle italic text-center py-3 lg:py-4">
                      {partner.name}
                    </div>
                  ) : (
                    <div className="h-8 lg:h-10 w-16 lg:w-20 bg-gray-300 rounded mx-auto flex items-center justify-center">
                      <div className="text-xs text-gray-500 font-medium">LOGO</div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Show only 2 rows (10 logos + "More...") */}
          <div className="block md:hidden">
            <div className="grid grid-cols-5 gap-2 items-center max-w-6xl mx-auto">
              {/* First 9 logos */}
              {partners.slice(0, 9).map((partner) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: partner.delay,
                  }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <motion.div 
                    className="relative p-2 rounded-lg bg-gray-100 border-gray-200 hover:bg-white/80 transition-all duration-300 border hover:border-gray-300/50"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="h-6 w-12 bg-gray-300 rounded mx-auto flex items-center justify-center">
                      <div className="text-xs text-gray-500 font-medium">LOGO</div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
              
              {/* "More..." text in the 10th position */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.45,
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-2 rounded-lg transition-all duration-300">
                  <div className="h-6 w-12 mx-auto flex items-center justify-center">
                    <div className="text-xs text-red-600 font-medium italic">More...</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  );
}