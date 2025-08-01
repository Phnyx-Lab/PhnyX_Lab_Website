import { CheckCircle, Clock, DollarSign, Target, Shield } from "lucide-react";
import { motion } from "framer-motion";

export function RequestDemoValueProp() {
  const benefits = [
    {
      icon: Clock,
      title: "80% faster document creation",
      description: "for INDs and CSRs",
    },
    {
      icon: DollarSign,
      title: "Save over $1M annually",
      description: "by insourcing medical writing",
    },
    {
      icon: Target,
      title: "Research time: 8 hours to 2 hours",
      description: "for literature reviews",
    },
    {
      icon: Shield,
      title: "92.2% fact accuracy",
      description: "eliminating costly AI errors",
    }
  ];

  return (
    <motion.div 
      className="bg-white p-8 rounded-xl border border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm bg-white/95"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
      }}
    >
      {/* Desktop only headline */}
      <div className="mb-8 hidden md:block">
        <motion.h3 
          className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-title leading-title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform Your<br />
          <span className="text-red-600">Biopharma Workflow</span>
        </motion.h3>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-600 tracking-body leading-relaxed font-condensed"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Connect with our team to explore how PhnyX Lab can accelerate your research.
        </motion.p>
      </div>

      {/* Benefits List */}
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {benefits.map((benefit, index) => (
          <motion.div 
            key={index} 
            className="flex items-start gap-4 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            whileHover={{ x: 5 }}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-red-50 border border-red-200 group-hover:bg-red-100 transition-colors">
              <CheckCircle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900 tracking-subtitle leading-tight group-hover:text-red-600 transition-colors mb-2">
                {benefit.title}
              </div>
              <div className="text-base text-gray-600 font-condensed tracking-body leading-relaxed">
                {benefit.description}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}