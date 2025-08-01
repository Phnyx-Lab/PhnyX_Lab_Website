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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const floatingElementsY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-20 lg:pb-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Enhanced Dynamic Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:40px_40px] opacity-40"></div>
        
        {/* Dynamic Floating Elements */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: floatingElementsY }}
        >
          {/* Large floating circles with enhanced animation */}
          <motion.div 
            className="absolute top-20 left-20 w-64 h-64 border border-white/20 rounded-full"
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div 
            className="absolute top-40 right-32 w-48 h-48 border border-white/15 rounded-full"
            animate={{ 
              rotate: -360,
              scale: [1, 0.8, 1],
              x: [0, 30, 0]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div 
            className="absolute bottom-32 left-1/4 w-80 h-80 border border-white/10 rounded-full"
            animate={{ 
              rotate: 360,
              y: [0, -40, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-56 h-56 border border-white/25 rounded-full"
            animate={{ 
              rotate: -360,
              scale: [1, 1.3, 1],
              x: [0, -25, 0]
            }}
            transition={{ 
              rotate: { duration: 18, repeat: Infinity, ease: "linear" },
              scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 9, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          {/* Additional smaller elements */}
          <motion.div 
            className="absolute top-1/3 left-1/3 w-32 h-32 border border-white/30 rounded-full"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.8, 0.4],
              rotate: 360
            }}
            transition={{ 
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 15, repeat: Infinity, ease: "linear" }
            }}
          />
          <motion.div 
            className="absolute top-2/3 right-1/3 w-40 h-40 border border-white/20 rounded-full"
            animate={{ 
              y: [0, 35, 0],
              x: [0, 20, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </motion.div>

        {/* Flowing Lines with Enhanced Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 1000">
          <motion.path
            d="M0,500 Q250,300 500,500 T1000,500"
            stroke="url(#gradient1)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 1, 0] 
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatDelay: 2
            }}
          />
          <motion.path
            d="M0,300 Q300,100 600,300 T1000,300"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 0.8, 0] 
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2,
              repeatDelay: 3
            }}
          />
          <motion.path
            d="M0,700 Q400,500 800,700 T1000,700"
            stroke="url(#gradient3)"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 0.9, 0] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 4,
              repeatDelay: 1
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.8)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.7)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Pulsing Light Effects */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        />
      </motion.div>

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
            {["Join", "the", "future", "of", "biopharma.", "Start", "today."].map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-1.5 md:mr-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.2, 
                  delay: 0.5 + (index * 0.02),
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                {word}
              </motion.span>
            ))}
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
                onClick={() => window.location.hash = "request-demo"}
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

      {/* Ambient Light Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent opacity-50"></div>
    </section>
  );
}