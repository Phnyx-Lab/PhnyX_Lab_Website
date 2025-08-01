import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { CheckCircle, ArrowRight, Calendar, Users, Clock, Mail, Phone } from "lucide-react";

export function ThankYouPage() {
  const nextSteps = [
    {
      icon: Users,
      title: "Expert Assignment",
      description: "Our product specialist will review your use case and prepare a customized demonstration.",
      timeframe: "Within 2 hours"
    },
    {
      icon: Calendar,
      title: "Demo Scheduling",
      description: "We'll send you a calendar link to book a 30-minute demo at your convenience.",
      timeframe: "Within 24 hours"
    },
    {
      icon: CheckCircle,
      title: "Live Demonstration",
      description: "See Cheiron in action with real examples relevant to your specific workflows.",
      timeframe: "30 minutes"
    }
  ];

  const resources = [
    {
      title: "Watch Our 5-Minute Product Overview",
      description: "Get a quick preview of Cheiron's core capabilities",
      cta: "Watch Now"
    },
    {
      title: "Download Our Product Guide",
      description: "Detailed technical specifications and use cases",
      cta: "Download PDF"
    },
    {
      title: "Read Customer Success Stories",
      description: "See how other pharma companies are using Cheiron",
      cta: "Read Stories"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-16">
      
      <section className="section-spacing-lg bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
        {/* Success background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 border-4 border-green-200 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-title leading-title">
            Thank You for Your Interest<br />
            <span className="text-brand-gradient">in PhnyX Lab!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 tracking-body leading-body font-condensed max-w-3xl mx-auto">
            We've received your demo request and our team is already preparing a personalized demonstration tailored to your specific needs.
          </p>

          {/* Key Promise */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-16 inline-block">
            <div className="text-2xl font-bold text-gray-900 mb-2 tracking-title">
              Our product expert will contact you within 24 hours
            </div>
            <div className="text-gray-600 font-condensed tracking-body">
              to schedule your personalized 30-minute demo
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section-spacing bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-title">
              What Happens Next?
            </h2>
            <p className="text-lg text-gray-600 font-condensed tracking-body max-w-2xl mx-auto">
              Here's our process to ensure you get the most value from your PhnyX Lab demo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nextSteps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center relative">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                
                <div className="w-16 h-16 bg-gray-100 border-2 border-gray-200 rounded-lg flex items-center justify-center mx-auto mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-gray-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-subtitle">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 font-condensed tracking-body leading-relaxed mb-4">
                  {step.description}
                </p>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  <Clock className="w-3 h-3" />
                  {step.timeframe}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* While You Wait */}
      <section className="section-spacing bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-title">
              While You Wait
            </h2>
            <p className="text-lg text-gray-600 font-condensed tracking-body max-w-2xl mx-auto">
              Explore these resources to learn more about how PhnyX Lab can transform your workflows
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {resources.map((resource, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-subtitle">
                  {resource.title}
                </h3>
                <p className="text-gray-600 font-condensed tracking-body leading-relaxed mb-6">
                  {resource.description}
                </p>
                <Button 
                  variant="outline"
                  className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-red-400 font-medium tracking-body rounded-lg"
                >
                  {resource.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>

          {/* Immediate Contact */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-12 rounded-xl border border-red-200 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-title">
              Need Immediate Assistance?
            </h3>
            <p className="text-gray-600 font-condensed tracking-body mb-8 max-w-2xl mx-auto">
              If you have urgent questions or need to discuss your requirements right away, 
              our team is standing by to help.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a 
                href="mailto:sales@phnyx.ai" 
                className="flex items-center justify-center gap-4 p-4 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 hover:border-red-300 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">Email Us</div>
                  <div className="text-gray-600 text-sm font-condensed">sales@phnyx.ai</div>
                </div>
              </a>
              
              <a 
                href="tel:+82-2-1234-5678" 
                className="flex items-center justify-center gap-4 p-4 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 hover:border-red-300 transition-all duration-300 group"
              >
                <Phone className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">Call Us</div>
                  <div className="text-gray-600 text-sm font-condensed">+82-2-1234-5678</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}