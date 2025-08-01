import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Target, Eye, Shield } from "lucide-react";

export function PerformanceSection() {
  const [activeTab, setActiveTab] = useState("accuracy");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const performanceData = {
    credibility: {
      title: "Source Credibility",
      description: "Cheiron uses 81.5% credible sources from peer-reviewed journals or government agencies, compared to just 59.3% for GPT-4o.",
      cheiron: 81.5,
      gpt: 59.3,
      copilot: 63.2,
      icon: Shield
    },
    accuracy: {
      title: "Fact Accuracy", 
      description: "Cites numerical data from literature with 92.2% accuracy.",
      cheiron: 92.2,
      gpt: 73.8,
      copilot: 76.4,
      icon: Target
    },
    traceability: {
      title: "Source Traceability",
      description: "Every answer links directly to the original source. No more black boxes.",
      cheiron: 98.7,
      gpt: 34.2,
      copilot: 41.6,
      icon: Eye
    }
  };

  const tabs = [
    { id: "accuracy", label: "Fact Accuracy" },
    { id: "credibility", label: "Source Credibility" },
    { id: "traceability", label: "Traceability" }
  ];

  return (
    <section ref={ref} className="pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-16 lg:pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16 lg:mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 tracking-title leading-title"
            style={{ lineHeight: '1.1' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Unparalleled Performance,<br />
            <span className="text-brand-gradient">Specialized for Biopharma</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto tracking-body leading-relaxed-plus">
            The accuracy of an expert. The advantage of specialization.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <div className="flex justify-center mb-12 px-4 md:px-0">
            <div className="bg-gray-100/80 backdrop-blur-sm p-2 rounded inline-flex border border-gray-200">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 md:px-8 py-3 transition-all duration-300 font-semibold tracking-subtitle text-sm md:text-base ${
                    activeTab === tab.id
                      ? "bg-white text-black shadow-lg"
                      : "text-gray-600 hover:text-black hover:bg-white/50"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Performance Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/60 backdrop-blur-sm rounded p-4 md:p-8 lg:p-12 xl:p-16 border border-gray-200/50 shadow-xl"
          >
            <div className="text-center mb-16">
              <motion.div
                className="mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                {(() => {
                  const IconComponent = performanceData[activeTab as keyof typeof performanceData].icon;
                  return (
                    <div className="w-20 h-20 mx-auto rounded bg-brand-gradient p-5">
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                  );
                })()}
              </motion.div>
              
              <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-title leading-title">
                {performanceData[activeTab as keyof typeof performanceData].title}
              </h3>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto tracking-body leading-relaxed-plus">
                {performanceData[activeTab as keyof typeof performanceData].description}
              </p>
            </div>

            {/* Performance Bars */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                { 
                  name: "Cheiron", 
                  value: performanceData[activeTab as keyof typeof performanceData].cheiron, 
                  highlight: true 
                },
                { 
                  name: "GPT-4o", 
                  value: performanceData[activeTab as keyof typeof performanceData].gpt, 
                  highlight: false 
                },
                { 
                  name: "MS Copilot", 
                  value: performanceData[activeTab as keyof typeof performanceData].copilot, 
                  highlight: false 
                }
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div className="mb-6">
                    <div className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-title ${
                      item.highlight 
                        ? 'text-brand-gradient' 
                        : 'text-gray-600'
                    }`}>
                      {item.value}%
                    </div>
                    <div className={`text-lg font-semibold tracking-subtitle ${
                      item.highlight ? 'text-black' : 'text-gray-600'
                    }`}>
                      {item.name}
                    </div>
                  </motion.div>
                  
                  <div className="w-full bg-gray-200 rounded h-6 overflow-hidden mx-2 md:mx-0">
                    <motion.div
                      className={`h-6 rounded ${
                        item.highlight 
                          ? 'bg-brand-gradient' 
                          : 'bg-gray-400'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1.2, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}