import { Brain, Zap, Target } from "lucide-react";

export function CareersCultureSection() {
  const values = [
    {
      icon: Brain,
      title: "Effective Altruism",
      description: "We use AI to replace repetitive labor, unlocking human potential for creativity and growth.",
      details: "Our technology eliminates mundane tasks, allowing researchers and professionals to focus on breakthrough discoveries and meaningful innovation."
    },
    {
      icon: Zap,
      title: "Precision at Speed",
      description: "We move fast, but with clear goals and a precise direction to deliver reliable, high-impact results.",
      details: "Rapid iteration combined with meticulous attention to detail ensures we deliver solutions that are both innovative and dependable."
    },
    {
      icon: Target,
      title: "Zero-in",
      description: "We focus all our resources on the core of a problem, exploring its essence to deliver fundamental and exceptional solutions.",
      details: "By identifying the root causes and essential mechanisms, we create solutions that address fundamental challenges rather than surface symptoms."
    }
  ];

  return (
    <section className="section-spacing-lg bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 tracking-title leading-title">
            How We <span className="text-red-600">Work</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto tracking-body leading-body font-condensed">
            Our values aren't just words on a wall; they are the operating system for how we work, 
            make decisions, and create meaningful impact in the world.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-red-200 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                  <Icon className="w-7 h-7 text-red-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-subtitle">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 font-condensed tracking-body leading-relaxed">
                  {value.description}
                </p>

                {/* Details */}
                <p className="text-sm text-gray-500 font-condensed tracking-body leading-relaxed">
                  {value.details}
                </p>

                {/* Visual Enhancement */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}