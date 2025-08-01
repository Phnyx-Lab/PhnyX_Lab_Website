import { Shield, Lock, Globe } from "lucide-react";

export function SecurityIntegrationSection() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Zero-Trust Architecture",
      description: "Customer data is never used for model training and is securely protected in an isolated VPC environment.",
      highlight: "100% Data Privacy"
    },
    {
      icon: Shield,
      title: "Regulatory Compliance", 
      description: "Compliant with industry standards including HIPAA, GxP, and SOX for safe use in regulated environments.",
      highlight: "Coming Soon",
      isUpcoming: true
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Built on AWS global infrastructure ensuring 99.9% availability and regional data sovereignty.",
      highlight: "99.9% Uptime SLA"
    }
  ];

  return (
    <section id="enterprise-security" className="section-spacing-xl bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-6 tracking-hero leading-hero">
            <span className="text-brand-gradient">About Our Security</span>
          </h2>
          
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-8 tracking-subtitle">
            Enterprise-Grade Security for Biopharma Data
          </h3>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto tracking-body leading-body font-condensed">
            Built from the ground up with enterprise-grade security and compliance. 
            Your most sensitive data deserves the highest protection standards.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-8 border border-gray-200 text-center flex flex-col">
              <div className="w-16 h-16 bg-gray-600 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-subtitle">{feature.title}</h4>
              <p className="text-gray-600 font-condensed tracking-body mb-6 flex-grow">{feature.description}</p>
              <div className={`inline-block px-3 py-1 text-sm font-medium border self-center ${
                feature.isUpcoming 
                  ? "bg-yellow-50 text-yellow-700 border-yellow-200" 
                  : "bg-gray-100 text-gray-700 border-gray-200"
              }`}>
                {feature.highlight}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}