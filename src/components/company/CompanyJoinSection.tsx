import { Button } from "../ui/button";
import { ArrowRight, Users, Zap, Globe, Heart, Target, Lightbulb } from "lucide-react";

export function CompanyJoinSection() {
  const values = [
    {
      icon: Heart,
      title: "Purpose Over Profit",
      description: "We're building technology that matters, solving problems that impact millions of lives.",
      color: "purple"
    },
    {
      icon: Zap,
      title: "Innovation at Speed",
      description: "Move fast, think big, and ship products that redefine what's possible in AI.",
      color: "blue"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Work on challenges that span continents and transform entire industries.",
      color: "purple"
    },
    {
      icon: Target,
      title: "Excellence Standard",
      description: "Join a team where the bar is always high and mediocrity is never acceptable.",
      color: "blue"
    }
  ];

  const openRoles = [
    {
      title: "Senior AI Engineer",
      location: "Palo Alto, CA",
      type: "Full-time",
      description: "Build the next generation of AI infrastructure for biopharma."
    },
    {
      title: "Product Manager",
      location: "Seoul, Korea", 
      type: "Full-time",
      description: "Shape product strategy for our flagship AI platforms."
    },
    {
      title: "Business Development",
      location: "Palo Alto, CA",
      type: "Full-time", 
      description: "Drive partnerships with Fortune 500 biopharma companies."
    },
    {
      title: "Research Scientist",
      location: "Remote",
      type: "Full-time",
      description: "Push the boundaries of AI research in regulated industries."
    }
  ];

  return (
    <section id="join-us" className="section-spacing-xl bg-black text-white relative overflow-hidden">
      {/* Background Elements - Purple dominant for innovation/future */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-500 rounded-full blur-3xl opacity-30"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:50px_50px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/20 rounded-lg border border-purple-500/30 mb-8">
            <Users className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-semibold tracking-subtitle">Join Us</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-title leading-title">
            <span className="text-brand-gradient">Join a Frontier,</span><br />
            Not a Factory
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto tracking-body leading-body font-condensed">
            We are hiring the world's best and brightest to solve some of the most challenging and impactful problems in AI. 
            If you are driven by purpose and thrive on <span className="text-white font-semibold">precision at speed</span>, we want to hear from you.
          </p>
        </div>

        {/* Why Join PhnyX */}
        <div className="mb-24">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-title text-white">
            Why Join PhnyX Lab?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group text-center">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 ${
                  value.color === 'purple' ? 'bg-purple-600' : 'bg-blue-600'
                }`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4 tracking-subtitle">
                  {value.title}
                </h4>
                
                <p className="text-gray-300 font-condensed tracking-body leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Culture */}
        <div className="mb-24">
          <div className="bg-white/5 backdrop-blur-sm p-12 md:p-16 rounded-xl border border-white/10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-title text-white">
                  What We Offer
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 tracking-subtitle">Cutting-Edge Technology</h4>
                      <p className="text-gray-300 font-condensed tracking-body">Work with the latest AI technologies and build systems that push the boundaries of what's possible.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 tracking-subtitle">Meaningful Impact</h4>
                      <p className="text-gray-300 font-condensed tracking-body">Your work will directly impact the development of life-saving drugs and medical treatments.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 tracking-subtitle">Growth Opportunity</h4>
                      <p className="text-gray-300 font-condensed tracking-body">Early-stage startup equity with massive upside potential as we scale globally.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 tracking-subtitle">World-Class Team</h4>
                      <p className="text-gray-300 font-condensed tracking-body">Learn from and collaborate with exceptional individuals from Stanford, IIT, and industry leaders.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Culture Visualization */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl border border-white/20 p-8 flex items-center justify-center">
                  <div className="text-center">
                    {/* Team Collaboration Visual */}
                    <div className="relative w-32 h-32 mx-auto mb-8">
                      <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
                      <div className="absolute inset-2 rounded-full border border-white/10"></div>
                      
                      {/* Center */}
                      <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Team Icons */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <div className="text-white font-medium text-lg mb-2">
                      Exceptional Team Culture
                    </div>
                    <div className="text-gray-300 text-sm font-condensed">
                      Where talent meets purpose
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-title text-white">
            Open Positions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {openRoles.map((role, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 tracking-subtitle">{role.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-400 font-condensed">
                      <span>{role.location}</span>
                      <span>•</span>
                      <span>{role.type}</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-purple-400/50 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 hover:border-purple-300 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Apply
                  </Button>
                </div>
                
                <p className="text-gray-300 font-condensed tracking-body leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-12 md:p-16 rounded-xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[size:40px_40px]"></div>
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-title text-white">
                Ready to Build the Future?
              </h3>
              <p className="text-xl text-white/90 mb-8 font-condensed tracking-body">
                Join a team that's not just building software, but reshaping how humanity's 
                most important work gets done. If you're ready to make a dent in the universe, 
                we're ready to welcome you home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-gray-100 text-xl px-12 py-6 h-auto font-bold tracking-subtitle shadow-xl rounded-xl"
                >
                  View Open Positions
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 text-xl px-12 py-6 h-auto font-medium tracking-body rounded-xl"
                >
                  <Users className="w-5 h-5 mr-3" />
                  Learn About Our Culture
                </Button>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-white/70 text-sm font-condensed">
                  Don't see the perfect role? Reach out anyway. We're always looking for exceptional talent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}