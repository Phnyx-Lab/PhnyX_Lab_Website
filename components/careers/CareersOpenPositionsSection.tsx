import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight, MapPin, Users, Briefcase, Filter } from "lucide-react";

export function CareersOpenPositionsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeLocationFilter, setActiveLocationFilter] = useState("All");

  const filters = ["All", "Engineering", "Product", "Business", "Research"];
  const locationFilters = ["All", "Palo Alto", "Seoul", "Remote"];

  const positions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      team: "Engineering",
      location: "Palo Alto",
      type: "Full-time",
      description: "Lead the development of our modular RAG architecture and contribute to cutting-edge AI research in pharmaceutical applications.",
      requirements: ["5+ years in AI/ML", "PhD preferred", "Python, PyTorch", "NLP expertise"],
      featured: true
    },
    {
      id: 2,
      title: "Product Manager - AI Platform",
      team: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Drive product strategy for our AI platform, working closely with engineering and customers to define the future of biopharma AI.",
      requirements: ["3+ years PM experience", "B2B SaaS background", "Technical understanding", "Customer-focused"],
      featured: false
    },
    {
      id: 3,
      title: "Machine Learning Researcher",
      team: "Research",
      location: "Seoul",
      type: "Full-time",
      description: "Conduct groundbreaking research in vertical AI applications for life sciences, with opportunities to publish and present findings.",
      requirements: ["PhD in CS/ML", "Published research", "Deep learning", "Scientific computing"],
      featured: true
    },
    {
      id: 4,
      title: "Business Development Manager",
      team: "Business",
      location: "Seoul",
      type: "Full-time",
      description: "Expand our presence in the Asian pharmaceutical market, building strategic partnerships and driving revenue growth.",
      requirements: ["5+ years BD experience", "Pharma industry knowledge", "Asian markets", "Relationship building"],
      featured: false
    },
    {
      id: 5,
      title: "Frontend Engineer",
      team: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build intuitive user interfaces for our AI platform, focusing on complex data visualization and user experience.",
      requirements: ["3+ years React", "TypeScript", "Data visualization", "Design systems"],
      featured: false
    },
    {
      id: 6,
      title: "DevOps Engineer",
      team: "Engineering",
      location: "Palo Alto",
      type: "Full-time",
      description: "Scale our infrastructure to support enterprise customers, focusing on security, reliability, and performance.",
      requirements: ["4+ years DevOps", "Kubernetes", "Cloud platforms", "Security focus"],
      featured: false
    }
  ];

  const filteredPositions = positions.filter(position => {
    const matchesTeam = activeFilter === "All" || position.team === activeFilter;
    const matchesLocation = activeLocationFilter === "All" || position.location === activeLocationFilter;
    return matchesTeam && matchesLocation;
  });

  return (
    <section className="open-positions-section section-spacing-lg bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-lg border border-gray-200 shadow-sm mb-8">
            <Briefcase className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 font-semibold tracking-subtitle">Open Positions</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 tracking-title leading-title">
            Find Your Role in<br />
            <span className="text-red-600">Our Mission</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 tracking-body leading-body font-condensed">
            We're always looking for exceptional talent to join our team. If you don't see a perfect match, 
            we'd still love to hear from you.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          {/* Team Filters */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700 tracking-subtitle">Filter by Team:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 font-medium tracking-subtitle transition-all duration-300 rounded-full ${
                    activeFilter === filter
                      ? "bg-red-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Location Filters */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700 tracking-subtitle">Filter by Location:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {locationFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveLocationFilter(filter)}
                  className={`px-4 py-2 font-medium tracking-subtitle transition-all duration-300 rounded-full ${
                    activeLocationFilter === filter
                      ? "bg-red-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Positions Grid - Changed to 3 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPositions.map((position) => (
            <div 
              key={position.id} 
              className={`bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 ${
                position.featured 
                  ? "border-red-200 ring-1 ring-red-100" 
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 tracking-subtitle leading-tight">
                    {position.title}
                  </h3>
                  {position.featured && (
                    <span className="px-2 py-1 bg-red-600 text-white text-xs font-medium rounded-lg ml-2 flex-shrink-0">
                      Featured
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span className="font-condensed">{position.team}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span className="font-condensed">{position.location}</span>
                  </div>
                </div>
                <span className="inline-block px-2 py-1 bg-gray-100 rounded text-xs font-medium">
                  {position.type}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 font-condensed tracking-body leading-relaxed">
                {position.description}
              </p>

              {/* Requirements */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-2 tracking-subtitle">Key Requirements:</h4>
                <div className="space-y-1">
                  {position.requirements.slice(0, 3).map((req, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-xs text-gray-600 font-condensed tracking-body">
                        {req}
                      </span>
                    </div>
                  ))}
                  {position.requirements.length > 3 && (
                    <div className="text-xs text-gray-500 font-condensed">
                      +{position.requirements.length - 3} more
                    </div>
                  )}
                </div>
              </div>

              {/* CTA */}
              <Button 
                size="sm"
                className={`w-full ${
                  position.featured
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                } font-semibold tracking-subtitle text-sm rounded-full`}
              >
                View Details & Apply
                <ArrowRight className="w-3 h-3 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPositions.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No positions found</h3>
            <p className="text-gray-600 font-condensed mb-6">
              Try adjusting your filters or check back later for new opportunities.
            </p>
            <Button 
              variant="outline"
              className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            >
              Get Notified of New Openings
            </Button>
          </div>
        )}

        {/* Proactive Application */}
        <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-200 shadow-sm text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-subtitle">
            Don't See Your Perfect Role?
          </h3>
          <p className="text-gray-600 mb-8 font-condensed tracking-body leading-relaxed max-w-2xl mx-auto">
            We're always looking for exceptional talent, even if we don't have a specific opening. 
            Send us your resume and tell us how you'd like to contribute to our mission.
          </p>
          <Button 
            size="lg"
            className="bg-red-600 text-white hover:bg-red-700 text-lg px-10 py-4 h-auto font-bold tracking-subtitle rounded-full"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
}