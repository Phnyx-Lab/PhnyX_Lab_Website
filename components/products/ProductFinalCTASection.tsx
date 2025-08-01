import { Button } from "../ui/button";
import { ArrowRight, Calendar, Users, Zap, Play, Star, Clock, CheckCircle } from "lucide-react";

export function ProductFinalCTASection() {
  const demoFeatures = [
    {
      icon: Calendar,
      title: "Personalized Demo",
      description: "We'll provide a customized demonstration based on the actual challenges your team faces.",
      highlight: "Custom scenarios",
      color: "red"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Biopharma specialists will directly present how our solutions can be applied to your workflow.",
      highlight: "Industry experts",
      color: "red"
    },
    {
      icon: Zap,
      title: "Immediate Impact",
      description: "Receive a concrete action plan that can be implemented immediately after the demo.",
      highlight: "Actionable insights",
      color: "red"
    }
  ];

  const testimonialQuotes = [
    {
      quote: "PhnyX Lab has transformed how we approach regulatory writing. What used to take months now takes days.",
      author: "Dr. Sarah Kim",
      company: "BioPharma Corp",
      rating: 5
    },
    {
      quote: "The AI accuracy is remarkable. It understands regulatory nuances better than most junior staff.",
      author: "Michael Chen",
      company: "Global Therapeutics",
      rating: 5
    }
  ];

  return (
    <section className="section-spacing-xl bg-black text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:50px_50px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main CTA Section */}
        <div className="text-center mb-20">


          {/* Main Title */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-20 tracking-title leading-hero">
            Ready to see it<br />
            <span className="text-brand-gradient">in action?</span>
          </h2>

          {/* Clean, Simple CTA Button */}
          <div className="mb-16">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 text-2xl px-16 py-6 h-auto font-bold tracking-subtitle shadow-2xl transition-all duration-300 group"
              onClick={() => window.location.hash = "request-demo"}
            >
              <Calendar className="w-6 h-6 mr-4" />
              <span>Request Your Personalized Demo</span>
              <ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <p className="text-gray-400 text-lg mt-6 font-condensed">
              ⚡ 30-minute focused demo • No sales pressure • Immediate insights
            </p>
          </div>
        </div>

        {/* Demo Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {demoFeatures.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-red-500/20 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <h3 className="text-xl font-bold tracking-subtitle text-white">{feature.title}</h3>
                  <span className="px-2 py-1 bg-red-500/20 text-red-300 border-red-400/20 text-xs font-medium rounded-full border">
                    {feature.highlight}
                  </span>
                </div>
                <p className="text-gray-300 font-condensed tracking-body leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { number: "30-day", label: "Free Trial", icon: Clock },
            { number: "24/7", label: "Support", icon: Users },
            { number: "99.9%", label: "Uptime SLA", icon: CheckCircle },
            { number: "No", label: "Setup Required", icon: Zap }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2 tracking-title">{stat.number}</div>
              <div className="text-gray-400 font-condensed">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonialQuotes.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-red-400 fill-current" />
                ))}
              </div>
              <p className="text-white mb-6 font-condensed tracking-body leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="text-white font-semibold">{testimonial.author}</div>
                <div className="text-gray-400 text-sm font-condensed">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Alternative CTAs */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-white tracking-subtitle">
            Prefer a different approach?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:border-red-500/50 text-lg px-8 py-3 h-auto font-medium tracking-body transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-3" />
              Watch 5-Min Overview
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:border-red-500/50 text-lg px-8 py-3 h-auto font-medium tracking-body transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5 mr-3" />
              Download Product Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}