import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export function FinalCTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-20 lg:pb-32 text-white relative overflow-hidden">
      {/* Subtle Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(144.26% 62.31% at 62.48% 114.49%, #1A1A6D 0%, #111 100%)`,
        }}
        animate={{
          background: [
            `radial-gradient(144.26% 62.31% at 62.48% 114.49%, #1A1A6D 0%, #111 100%)`,
            `radial-gradient(144.26% 62.31% at 65% 110%, #1A1A6D 0%, #111 100%)`,
            `radial-gradient(144.26% 62.31% at 60% 118%, #1A1A6D 0%, #111 100%)`,
            `radial-gradient(144.26% 62.31% at 62.48% 114.49%, #1A1A6D 0%, #111 100%)`
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle Moving Overlay for Extra Depth */}
      <motion.div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(120% 50% at 50% 50%, rgba(26, 26, 109, 0.3) 0%, transparent 70%)`,
        }}
        animate={{
          background: [
            `radial-gradient(120% 50% at 50% 50%, rgba(26, 26, 109, 0.3) 0%, transparent 70%)`,
            `radial-gradient(120% 50% at 45% 55%, rgba(26, 26, 109, 0.4) 0%, transparent 70%)`,
            `radial-gradient(120% 50% at 55% 45%, rgba(26, 26, 109, 0.2) 0%, transparent 70%)`,
            `radial-gradient(120% 50% at 50% 50%, rgba(26, 26, 109, 0.3) 0%, transparent 70%)`
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Main Content */}
      <motion.div 
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
        style={{ y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Title with FASTER word animation */}
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-12 tracking-hero leading-hero"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {["Ready", "to"].map((word, index) => (
              <motion.span
                key={word}
                className="inline-block mr-4 md:mr-6"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              className="inline-block mr-4 md:mr-6"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
            >
              Redefine Your
            </motion.span>
            <br />
            <motion.span
              className="inline-block text-white/90"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
            >
              Workflow?
            </motion.span>
          </motion.h2>
          
          {/* Subtitle with MUCH FASTER animation */}
          <motion.div 
            className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-16 max-w-4xl mx-auto tracking-body leading-relaxed-plus"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block mr-1.5 md:mr-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.2, 
                delay: 0.5,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              Join
            </motion.span>
            <motion.span
              className="inline-block mr-1.5 md:mr-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.2, 
                delay: 0.52,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              the
            </motion.span>
            <motion.span
              className="inline-block mr-1.5 md:mr-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.2, 
                delay: 0.54,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              future
            </motion.span>
            <motion.span
              className="inline-block mr-1.5 md:mr-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.2, 
                delay: 0.56,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              of
            </motion.span>
            <motion.span
              className="inline-block mr-1.5 md:mr-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.2, 
                delay: 0.58,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              biopharma.
            </motion.span>
            <motion.span
              className="inline-block mr-1.5 md:mr-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.2, 
                delay: 0.6,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              Start
            </motion.span>
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.2, 
                delay: 0.62,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              today.
            </motion.span>
          </motion.div>
          
          {/* Enhanced CTA Button - FASTER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 text-xl md:text-2xl px-12 py-4 h-auto font-semibold tracking-subtitle shadow-2xl rounded-full"
                onClick={() => { window.location.hash = "request-demo"; }}
              >
                <span>Request a Demo</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-6 h-6 ml-4" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced trust indicators - MUCH FASTER */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            viewport={{ once: true }}
            className="space-y-4"
          >

            
            <motion.div
              className="flex justify-center items-center gap-8 text-white/60 text-sm bg-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              viewport={{ once: true }}
            >
              {[
                { label: "No Setup Required", color: "bg-green-400" },
                { label: "Enterprise Security", color: "bg-red-400" },
                { label: "Expert Support", color: "bg-yellow-400" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className={`w-3 h-3 ${item.color} rounded-full`}
                    animate={{ 
                      scale: [1, 1.5, 1], 
                      opacity: [0.7, 1, 0.7],
                      boxShadow: [
                        "0 0 0px rgba(255, 255, 255, 0)",
                        "0 0 15px rgba(255, 255, 255, 0.6)",
                        "0 0 0px rgba(255, 255, 255, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}