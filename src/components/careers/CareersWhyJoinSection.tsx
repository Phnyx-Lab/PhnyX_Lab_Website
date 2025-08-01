import { Award, Globe, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function CareersWhyJoinSection() {
  const benefits = [
    {
      icon: Award,
      title: "True Ownership",
      description: "Lead your own modules from development and research papers to open-source contributions. Your work carries your name and your credit.",
      highlights: [
        "Own end-to-end product development",
        "Publish research under your name",
        "Lead open-source initiatives",
        "Direct impact on product direction"
      ]
    },
    {
      icon: Globe,
      title: "World-Class Collaboration",
      description: "Work with a global team of top-tier talent from Stanford, IIT Bombay, and Seoul National University, located in the hearts of Silicon Valley and Seoul.",
      highlights: [
        "Global team from top universities",
        "Silicon Valley & Seoul presence",
        "Cross-cultural collaboration",
        "Access to global networks"
      ]
    },
    {
      icon: TrendingUp,
      title: "Equity-Focused Compensation",
      description: "We offer a compensation structure centered on equity, aligning your long-term success with the company's growth.",
      highlights: [
        "Significant equity participation",
        "Competitive base salary",
        "Performance-based bonuses",
        "Long-term wealth building"
      ]
    }
  ];

  return (
    <section className="section-spacing-lg bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 tracking-title leading-title">
            Your Work, Your <span className="text-blue-600">Impact</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto tracking-body leading-body font-condensed">
            Here, you don't just execute tasks—you own the outcome and shape the future. 
            Discover what makes PhnyX Lab different from other tech companies.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="group">
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 tracking-subtitle">
                    {benefit.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 font-condensed tracking-body leading-relaxed">
                  {benefit.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-3">
                  {benefit.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600 font-condensed tracking-body">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Visual Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team working together at PhnyX Lab"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Quote */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200 max-w-xs">
              <p className="text-sm text-gray-700 font-condensed tracking-body italic mb-2">
                "The freedom to own my work and see direct impact on patients' lives is what drives me every day."
              </p>
              <div className="text-xs text-gray-500 font-condensed">
                — Senior AI Engineer
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 tracking-subtitle">
              More Than Just a Job
            </h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3 tracking-subtitle">Career Growth</h4>
                <p className="text-gray-600 font-condensed tracking-body leading-relaxed">
                  Accelerated learning through challenging projects, mentorship from industry leaders, 
                  and opportunities to speak at conferences and publish research.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3 tracking-subtitle">Work-Life Integration</h4>
                <p className="text-gray-600 font-condensed tracking-body leading-relaxed">
                  Flexible schedules, remote work options, and a results-focused culture that values 
                  output over hours. We believe in sustainable high performance.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3 tracking-subtitle">Learning & Development</h4>
                <p className="text-gray-600 font-condensed tracking-body leading-relaxed">
                  Annual learning budget, access to cutting-edge research, conference attendance, 
                  and time allocated for personal projects and skill development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}